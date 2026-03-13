-- ===================================
-- APPE Hub Database Setup
-- Run this SQL in Supabase SQL Editor
-- ===================================

-- ===================================
-- 1. USER PROFILES TABLE
-- Stores additional user information beyond Supabase Auth
-- ===================================
CREATE TABLE IF NOT EXISTS user_profiles (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT,
    account_type TEXT NOT NULL CHECK (account_type IN ('student', 'admin')),
    student_id TEXT,
    staff_id TEXT,
    class_year TEXT,
    department TEXT,
    role TEXT,
    is_approved BOOLEAN DEFAULT false,
    approved_at TIMESTAMPTZ,
    approved_by UUID,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    metadata JSONB
);

-- Indexes for user profiles
CREATE INDEX IF NOT EXISTS idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);
CREATE INDEX IF NOT EXISTS idx_user_profiles_student_id ON user_profiles(student_id);

-- ===================================
-- 2. PENDING SIGNUPS TABLE
-- Stores signup requests waiting for admin approval
-- ===================================
CREATE TABLE IF NOT EXISTS pending_signups (
    id BIGSERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT,
    account_type TEXT NOT NULL CHECK (account_type IN ('student', 'admin')),
    student_id TEXT,
    staff_id TEXT,
    class_year TEXT,
    department TEXT,
    role TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    approved_at TIMESTAMPTZ,
    approved_by UUID,
    rejected_at TIMESTAMPTZ,
    rejected_by UUID,
    rejection_reason TEXT,
    metadata JSONB
);

-- Indexes for pending signups
CREATE INDEX IF NOT EXISTS idx_pending_signups_status ON pending_signups(status);
CREATE INDEX IF NOT EXISTS idx_pending_signups_email ON pending_signups(email);

-- ===================================
-- 3. SUBMITTED TICKETS TABLE
-- Stores student support tickets
-- ===================================
CREATE TABLE IF NOT EXISTS submitted_tickets (
    id BIGSERIAL PRIMARY KEY,
    student_id TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    ticket_id TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'submitted',
    rotation_name TEXT,
    hospital_name TEXT,
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    metadata JSONB,

    CONSTRAINT unique_ticket UNIQUE (student_id, ticket_id)
);

-- Indexes for tickets
CREATE INDEX IF NOT EXISTS idx_student_tickets ON submitted_tickets(student_id, submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_ticket_status ON submitted_tickets(status);
CREATE INDEX IF NOT EXISTS idx_ticket_user_id ON submitted_tickets(user_id);

-- ===================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- ===================================
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE pending_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE submitted_tickets ENABLE ROW LEVEL SECURITY;

-- ===================================
-- RLS POLICIES - USER PROFILES
-- ===================================

-- Users can view their own profile
CREATE POLICY "Users can view own profile"
    ON user_profiles
    FOR SELECT
    USING (auth.uid() = user_id);

-- Admins can view all profiles
CREATE POLICY "Admins can view all profiles"
    ON user_profiles
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM user_profiles
            WHERE user_id = auth.uid()
            AND account_type = 'admin'
            AND is_approved = true
        )
    );

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
    ON user_profiles
    FOR UPDATE
    USING (auth.uid() = user_id);

-- ===================================
-- RLS POLICIES - PENDING SIGNUPS
-- ===================================

-- Anyone (anon) can insert signup requests
CREATE POLICY "Anyone can submit signup request"
    ON pending_signups
    FOR INSERT
    WITH CHECK (true);

-- Admins can view all pending signups
CREATE POLICY "Admins can view pending signups"
    ON pending_signups
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM user_profiles
            WHERE user_id = auth.uid()
            AND account_type = 'admin'
            AND is_approved = true
        )
    );

-- Admins can update pending signups (approve/reject)
CREATE POLICY "Admins can update pending signups"
    ON pending_signups
    FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM user_profiles
            WHERE user_id = auth.uid()
            AND account_type = 'admin'
            AND is_approved = true
        )
    );

-- ===================================
-- RLS POLICIES - SUBMITTED TICKETS
-- ===================================

-- Students can view their own tickets
CREATE POLICY "Students can view own tickets"
    ON submitted_tickets
    FOR SELECT
    USING (
        auth.uid() = user_id
        OR
        EXISTS (
            SELECT 1 FROM user_profiles
            WHERE user_id = auth.uid()
            AND student_id = submitted_tickets.student_id
        )
    );

-- Admins can view all tickets
CREATE POLICY "Admins can view all tickets"
    ON submitted_tickets
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM user_profiles
            WHERE user_id = auth.uid()
            AND account_type = 'admin'
            AND is_approved = true
        )
    );

-- Students can create their own tickets
CREATE POLICY "Students can create own tickets"
    ON submitted_tickets
    FOR INSERT
    WITH CHECK (
        auth.uid() = user_id
        OR
        EXISTS (
            SELECT 1 FROM user_profiles
            WHERE user_id = auth.uid()
            AND student_id = submitted_tickets.student_id
        )
    );

-- Admins can update any ticket
CREATE POLICY "Admins can update tickets"
    ON submitted_tickets
    FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM user_profiles
            WHERE user_id = auth.uid()
            AND account_type = 'admin'
            AND is_approved = true
        )
    );

-- ===================================
-- GRANT PERMISSIONS
-- ===================================
GRANT ALL ON user_profiles TO anon, authenticated;
GRANT ALL ON pending_signups TO anon, authenticated;
GRANT ALL ON submitted_tickets TO anon, authenticated;

GRANT USAGE ON SEQUENCE user_profiles_id_seq TO anon, authenticated;
GRANT USAGE ON SEQUENCE pending_signups_id_seq TO anon, authenticated;
GRANT USAGE ON SEQUENCE submitted_tickets_id_seq TO anon, authenticated;

-- ===================================
-- DONE! Your database is ready.
-- ===================================
--
-- Next steps:
-- 1. Create your first admin user manually in Supabase Auth dashboard
-- 2. Add their profile to user_profiles table with account_type='admin' and is_approved=true
-- 3. Students can now signup and wait for admin approval
-- ===================================
