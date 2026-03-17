-- ===================================
-- Clear ALL Demo Data from Database
-- Run this BEFORE deploying the frontend changes
-- ===================================

-- 1. Clear all tickets from database (if tickets table exists)
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'tickets') THEN
        DELETE FROM tickets;
        RAISE NOTICE '✅ All tickets cleared from database';
    ELSE
        RAISE NOTICE 'ℹ️ No tickets table found - skipping';
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
SELECT
    'Database Summary' as info,
    (SELECT COUNT(*) FROM tickets) as total_tickets,
    (SELECT COUNT(*) FROM students) as total_students,
    (SELECT COUNT(*) FROM pending_signups WHERE status = 'pending') as pending_signups;

SELECT '🎯 Database cleared - ready for production!' AS status;
