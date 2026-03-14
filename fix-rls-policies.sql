-- ===================================
-- FIX: Remove infinite recursion in RLS policies
-- Run this in Supabase SQL Editor
-- ===================================

-- Drop the problematic policies
DROP POLICY IF EXISTS "Admins can view all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Admins can view pending signups" ON pending_signups;
DROP POLICY IF EXISTS "Admins can update pending signups" ON pending_signups;
DROP POLICY IF EXISTS "Admins can view all tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Admins can update tickets" ON submitted_tickets;

-- ===================================
-- TEMPORARY FIX: Disable RLS for testing
-- We'll add proper policies later
-- ===================================

-- For now, allow authenticated users to access everything
-- This is NOT secure for production, but fixes the immediate issue

-- User profiles - authenticated users can view and update
ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;

-- Pending signups - keep RLS but simplify
ALTER TABLE pending_signups DISABLE ROW LEVEL SECURITY;

-- Tickets - keep existing student policies, remove admin checks
ALTER TABLE submitted_tickets DISABLE ROW LEVEL SECURITY;

-- ===================================
-- Re-enable with simpler policies (no recursion)
-- ===================================

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE pending_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE submitted_tickets ENABLE ROW LEVEL SECURITY;

-- Users can view their own profile (no recursion)
CREATE POLICY "Users can view own profile"
    ON user_profiles
    FOR SELECT
    USING (auth.uid() = user_id);

-- Authenticated users can view all profiles (temporary - for admin access)
CREATE POLICY "Authenticated can view profiles"
    ON user_profiles
    FOR SELECT
    TO authenticated
    USING (true);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
    ON user_profiles
    FOR UPDATE
    USING (auth.uid() = user_id);

-- Anyone can submit signup requests
CREATE POLICY "Anyone can submit signup"
    ON pending_signups
    FOR INSERT
    WITH CHECK (true);

-- Authenticated users can view pending signups (temporary)
CREATE POLICY "Authenticated can view signups"
    ON pending_signups
    FOR SELECT
    TO authenticated
    USING (true);

-- Authenticated users can update signups (temporary)
CREATE POLICY "Authenticated can update signups"
    ON pending_signups
    FOR UPDATE
    TO authenticated
    USING (true);

-- Students can view their own tickets
CREATE POLICY "Users can view own tickets"
    ON submitted_tickets
    FOR SELECT
    USING (auth.uid() = user_id);

-- Authenticated can view all tickets (temporary)
CREATE POLICY "Authenticated can view tickets"
    ON submitted_tickets
    FOR SELECT
    TO authenticated
    USING (true);

-- Students can create tickets
CREATE POLICY "Users can create tickets"
    ON submitted_tickets
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Authenticated can update tickets (temporary)
CREATE POLICY "Authenticated can update tickets"
    ON submitted_tickets
    FOR UPDATE
    TO authenticated
    USING (true);

SELECT '✅ RLS policies fixed - no more recursion!' AS status;
