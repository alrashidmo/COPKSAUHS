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

    -- Create user profile
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
    );

    -- Update signup request status
    UPDATE pending_signups
    SET status = 'approved',
        approved_at = NOW(),
        approved_by = approving_admin_id
    WHERE id = signup_request_id;

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
