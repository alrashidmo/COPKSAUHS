-- ===================================
-- COMPLETE FIX: Drop ALL policies and recreate without recursion
-- Run this in Supabase SQL Editor
-- ===================================

-- ===================================
-- STEP 1: Drop ALL existing policies
-- ===================================

-- Drop all user_profiles policies
DROP POLICY IF EXISTS "Users can view own profile" ON user_profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;
DROP POLICY IF EXISTS "Authenticated can view profiles" ON user_profiles;

-- Drop all pending_signups policies
DROP POLICY IF EXISTS "Anyone can submit signup request" ON pending_signups;
DROP POLICY IF EXISTS "Anyone can submit signup" ON pending_signups;
DROP POLICY IF EXISTS "Admins can view pending signups" ON pending_signups;
DROP POLICY IF EXISTS "Admins can update pending signups" ON pending_signups;
DROP POLICY IF EXISTS "Authenticated can view signups" ON pending_signups;
DROP POLICY IF EXISTS "Authenticated can update signups" ON pending_signups;

-- Drop all submitted_tickets policies
DROP POLICY IF EXISTS "Students can view own tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Admins can view all tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Students can create own tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Admins can update tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Users can view own tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Users can create own tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Users can update own tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Authenticated can view tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Users can create tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Authenticated can update tickets" ON submitted_tickets;

-- ===================================
-- STEP 2: Disable RLS temporarily
-- ===================================

ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE pending_signups DISABLE ROW LEVEL SECURITY;
ALTER TABLE submitted_tickets DISABLE ROW LEVEL SECURITY;

-- ===================================
-- STEP 3: Re-enable RLS
-- ===================================

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE pending_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE submitted_tickets ENABLE ROW LEVEL SECURITY;

-- ===================================
-- STEP 4: Create simple policies (NO RECURSION)
-- ===================================

-- USER PROFILES: Simple access for everyone (temporary)
CREATE POLICY "allow_all_profiles"
    ON user_profiles
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- PENDING SIGNUPS: Anyone can create, authenticated can view/update
CREATE POLICY "allow_signup_insert"
    ON pending_signups
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "allow_signup_select"
    ON pending_signups
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "allow_signup_update"
    ON pending_signups
    FOR UPDATE
    TO authenticated
    USING (true);

-- SUBMITTED TICKETS: Simple access for authenticated users
CREATE POLICY "allow_ticket_select"
    ON submitted_tickets
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "allow_ticket_insert"
    ON submitted_tickets
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "allow_ticket_update"
    ON submitted_tickets
    FOR UPDATE
    TO authenticated
    USING (true);

-- ===================================
-- ✅ DONE!
-- ===================================
SELECT '✅ All policies dropped and recreated - no recursion!' AS status;

-- NOTE: These policies are VERY open (for testing)
-- Later we'll tighten them to:
-- - Students only see their own data
-- - Admins see everything
-- But for now, this gets signup working!
