-- ===================================
-- Create Database Function to Approve Signups
-- This runs with elevated privileges so frontend can approve users
-- ===================================

-- Create a function that approves a signup request
CREATE OR REPLACE FUNCTION approve_signup_request(signup_request_id INTEGER, approving_admin_id UUID)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER -- This runs with the privileges of the function owner
AS $$
DECLARE
    v_signup RECORD;
    v_user_id UUID;
    v_encrypted_password TEXT;
    v_cohort TEXT;
BEGIN
    -- Get the pending signup
    SELECT * INTO v_signup
    FROM pending_signups
    WHERE id = signup_request_id AND status = 'pending';

    IF NOT FOUND THEN
        RETURN json_build_object(
            'success', false,
            'message', 'Signup request not found or already processed'
        );
    END IF;

    -- Check if user already exists in auth.users
    SELECT id INTO v_user_id
    FROM auth.users
    WHERE email = v_signup.email;

    -- If user doesn't exist, create them
    IF v_user_id IS NULL THEN
        -- Generate a random UUID for the new user
        v_user_id := gen_random_uuid();

        -- Encrypt the password using pgcrypto
        v_encrypted_password := crypt(v_signup.password_hash, gen_salt('bf'));

        -- Insert into auth.users table (this is the Supabase auth table)
        INSERT INTO auth.users (
            instance_id,
            id,
            aud,
            role,
            email,
            encrypted_password,
            email_confirmed_at,
            raw_user_meta_data,
            created_at,
            updated_at,
            confirmation_token,
            recovery_token
        ) VALUES (
            '00000000-0000-0000-0000-000000000000', -- default instance
            v_user_id,
            'authenticated',
            'authenticated',
            v_signup.email,
            v_encrypted_password,
            NOW(), -- Mark email as confirmed
            json_build_object(
                'full_name', v_signup.full_name,
                'account_type', v_signup.account_type
            )::jsonb,
            NOW(),
            NOW(),
            '',
            ''
        );
    ELSE
        -- User already exists, just update their password
        v_encrypted_password := crypt(v_signup.password_hash, gen_salt('bf'));

        UPDATE auth.users
        SET encrypted_password = v_encrypted_password,
            raw_user_meta_data = json_build_object(
                'full_name', v_signup.full_name,
                'account_type', v_signup.account_type
            )::jsonb,
            updated_at = NOW()
        WHERE id = v_user_id;
    END IF;

    -- Create or update user profile
    INSERT INTO user_profiles (
        user_id,
        email,
        full_name,
        phone,
        account_type,
        student_id,
        staff_id,
        class_year,
        department,
        role,
        is_approved,
        approved_at,
        approved_by
    ) VALUES (
        v_user_id,
        v_signup.email,
        v_signup.full_name,
        v_signup.phone,
        v_signup.account_type,
        v_signup.student_id,
        v_signup.staff_id,
        v_signup.class_year,
        v_signup.department,
        v_signup.role,
        true,
        NOW(),
        approving_admin_id
    )
    ON CONFLICT (user_id) DO UPDATE SET
        full_name = EXCLUDED.full_name,
        phone = EXCLUDED.phone,
        account_type = EXCLUDED.account_type,
        student_id = EXCLUDED.student_id,
        staff_id = EXCLUDED.staff_id,
        class_year = EXCLUDED.class_year,
        department = EXCLUDED.department,
        role = EXCLUDED.role,
        is_approved = true,
        approved_at = NOW(),
        approved_by = approving_admin_id;

    -- Update signup request status
    UPDATE pending_signups
    SET status = 'approved',
        approved_at = NOW(),
        approved_by = approving_admin_id
    WHERE id = signup_request_id;

    -- If this is a student, add to students table
    IF v_signup.account_type = 'student' THEN
        -- Map class year to cohort
        v_cohort := CASE v_signup.class_year
            WHEN 'P1' THEN 'IPPE I'
            WHEN 'P2' THEN 'IPPE II'
            WHEN 'P3' THEN 'IPPE III'
            WHEN 'P4' THEN 'APPE'
            ELSE COALESCE(v_signup.class_year, 'Unknown')
        END;

        -- Insert into students table
        INSERT INTO students (id, name, email, cohort, gpa, risk, attendance, account_status, approved_date)
        VALUES (
            v_signup.student_id,
            v_signup.full_name,
            v_signup.email,
            v_cohort,
            0.0,  -- Default GPA
            'low',  -- Default risk
            0,  -- Default attendance
            'active',
            NOW()
        )
        ON CONFLICT (id) DO UPDATE SET
            name = EXCLUDED.name,
            email = EXCLUDED.email,
            cohort = EXCLUDED.cohort,
            account_status = EXCLUDED.account_status,
            approved_date = EXCLUDED.approved_date,
            updated_at = NOW();
    END IF;

    -- TODO: Send email notification to user
    -- You can configure this in Supabase Dashboard > Authentication > Email Templates
    -- Or use a webhook/edge function to send custom emails

    -- Return success
    RETURN json_build_object(
        'success', true,
        'message', 'User approved successfully!',
        'user_id', v_user_id
    );

EXCEPTION WHEN OTHERS THEN
    -- Return error
    RETURN json_build_object(
        'success', false,
        'message', SQLERRM
    );
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION approve_signup_request TO authenticated;

-- Also grant to anon (since RLS is disabled for testing)
GRANT EXECUTE ON FUNCTION approve_signup_request TO anon;

SELECT '✅ Function created - frontend can now approve signups!' AS status;
