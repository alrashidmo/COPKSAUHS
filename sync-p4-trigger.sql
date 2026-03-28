-- ============================================================
-- Auto-sync user_profiles → students table when class_year = P4
-- Run once in Supabase SQL Editor
-- ============================================================

-- Step 1: Create the trigger function
CREATE OR REPLACE FUNCTION sync_p4_to_students()
RETURNS TRIGGER AS $$
BEGIN
    -- When class_year is set to P4 and account is approved → add to students
    IF NEW.class_year = 'P4' AND NEW.is_approved = true THEN
        INSERT INTO students (student_id, full_name, email, cohort)
        VALUES (
            COALESCE(NEW.student_id, NEW.id::TEXT),
            NEW.full_name,
            NEW.email,
            'P4'
        )
        ON CONFLICT (student_id) DO UPDATE SET
            cohort    = 'P4',
            full_name = EXCLUDED.full_name,
            email     = EXCLUDED.email;

    -- When class_year is changed AWAY from P4 → remove from APPE cohort
    ELSIF OLD.class_year = 'P4' AND NEW.class_year <> 'P4' THEN
        UPDATE students
        SET cohort = NEW.class_year
        WHERE student_id = COALESCE(NEW.student_id, NEW.id::TEXT);
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 2: Attach trigger to user_profiles
DROP TRIGGER IF EXISTS trigger_sync_p4_students ON user_profiles;

CREATE TRIGGER trigger_sync_p4_students
    AFTER INSERT OR UPDATE OF class_year, is_approved
    ON user_profiles
    FOR EACH ROW
    EXECUTE FUNCTION sync_p4_to_students();

-- Step 3: Back-fill — sync any EXISTING P4 users right now
INSERT INTO students (student_id, full_name, email, cohort)
SELECT
    COALESCE(student_id, id::TEXT),
    full_name,
    email,
    'P4'
FROM user_profiles
WHERE class_year = 'P4' AND is_approved = true
ON CONFLICT (student_id) DO UPDATE SET
    cohort    = 'P4',
    full_name = EXCLUDED.full_name,
    email     = EXCLUDED.email;

-- Confirm
SELECT 'Trigger created + back-fill done' AS status;
SELECT student_id, full_name, email, cohort FROM students WHERE cohort = 'P4' ORDER BY full_name;
