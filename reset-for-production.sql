-- ===================================
-- Reset Database for Production
-- Clears all demo/test data
-- ===================================

-- 1. Clear all tickets from tickets table (if it exists)
-- Be careful: This will delete ALL tickets
DELETE FROM tickets;
SELECT '✅ All tickets cleared' AS status;

-- 2. Clear sample students (keep only real approved ones)
-- This keeps students with approved_date set (real signups)
-- and removes any demo students without approved dates
DELETE FROM students
WHERE approved_date IS NULL
   OR account_status = 'demo';
SELECT '✅ Demo students removed' AS status;

-- 3. Optional: Clear pending signups that are test data
-- Uncomment if you want to remove test signup requests
-- DELETE FROM pending_signups WHERE status = 'pending' AND email LIKE '%test%';

-- 4. Reset any demo user profiles (optional)
-- DELETE FROM user_profiles WHERE email LIKE '%test%' OR email LIKE '%demo%';

-- Summary
SELECT
    (SELECT COUNT(*) FROM tickets) as total_tickets,
    (SELECT COUNT(*) FROM students) as total_students,
    (SELECT COUNT(*) FROM pending_signups WHERE status = 'pending') as pending_signups,
    (SELECT COUNT(*) FROM user_profiles) as total_users;

SELECT '🎉 Database reset complete - Ready for production!' AS status;
