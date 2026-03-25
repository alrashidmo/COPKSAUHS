-- ===================================
-- Clear ALL Demo Data from Database
-- Run this BEFORE deploying the frontend changes
-- ===================================

-- 1. Clear all tickets from database (submitted_tickets table)
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'submitted_tickets') THEN
        DELETE FROM submitted_tickets;
        RAISE NOTICE '✅ All tickets cleared from database';
    ELSE
        RAISE NOTICE 'ℹ️ No submitted_tickets table found - skipping';
    END IF;
END $$;

-- 2. Clear any test/demo students (keep only approved signups with approved_date)
DELETE FROM students
WHERE approved_date IS NULL
   OR account_status = 'demo'
   OR email LIKE '%test%'
   OR email LIKE '%demo%';

SELECT '✅ Demo students removed' AS status;

-- 3. Show current counts
DO $$
DECLARE
    ticket_count INTEGER := 0;
    student_count INTEGER;
    pending_count INTEGER;
BEGIN
    -- Check if submitted_tickets table exists before counting
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'submitted_tickets') THEN
        SELECT COUNT(*) INTO ticket_count FROM submitted_tickets;
    END IF;

    SELECT COUNT(*) INTO student_count FROM students;
    SELECT COUNT(*) INTO pending_count FROM pending_signups WHERE status = 'pending';

    RAISE NOTICE 'Database Summary:';
    RAISE NOTICE '  Submitted Tickets: %', ticket_count;
    RAISE NOTICE '  Total Students: %', student_count;
    RAISE NOTICE '  Pending Signups: %', pending_count;
END $$;

SELECT '🎯 Database cleared - ready for production!' AS status;
