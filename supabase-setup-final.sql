-- ===================================
-- APPE Hub Database Setup (SAFE VERSION)
-- Run this SQL in Supabase SQL Editor
-- Works even if tables don't exist yet
-- ===================================

-- ===================================
-- STEP 1: CREATE TABLES FIRST
-- ===================================

-- 1. USER PROFILES TABLE
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

-- 2. PENDING SIGNUPS TABLE
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

-- 3. SUBMITTED TICKETS TABLE
CREATE TABLE IF NOT EXISTS submitted_tickets (
    id BIGSERIAL PRIMARY KEY,
    student_id TEXT NOT NULL,
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

-- Add user_id column if it doesn't exist (safe upgrade)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'submitted_tickets'
        AND column_name = 'user_id'
    ) THEN
        ALTER TABLE submitted_tickets ADD COLUMN user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;
    END IF;
END $$;

-- ===================================
-- STEP 2: CREATE INDEXES
-- ===================================

-- User profiles indexes
CREATE INDEX IF NOT EXISTS idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);
CREATE INDEX IF NOT EXISTS idx_user_profiles_student_id ON user_profiles(student_id);

-- Pending signups indexes
CREATE INDEX IF NOT EXISTS idx_pending_signups_status ON pending_signups(status);
CREATE INDEX IF NOT EXISTS idx_pending_signups_email ON pending_signups(email);

-- Tickets indexes
CREATE INDEX IF NOT EXISTS idx_student_tickets ON submitted_tickets(student_id, submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_ticket_status ON submitted_tickets(status);
CREATE INDEX IF NOT EXISTS idx_ticket_user_id ON submitted_tickets(user_id);

-- ===================================
-- STEP 3: DROP OLD POLICIES (now tables exist)
-- ===================================

DROP POLICY IF EXISTS "Users can view own profile" ON user_profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;

DROP POLICY IF EXISTS "Anyone can submit signup request" ON pending_signups;
DROP POLICY IF EXISTS "Admins can view pending signups" ON pending_signups;
DROP POLICY IF EXISTS "Admins can update pending signups" ON pending_signups;

DROP POLICY IF EXISTS "Students can view own tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Admins can view all tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Students can create own tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Admins can update tickets" ON submitted_tickets;

-- Old policies from previous setup
DROP POLICY IF EXISTS "Users can view own tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Users can create own tickets" ON submitted_tickets;
DROP POLICY IF EXISTS "Users can update own tickets" ON submitted_tickets;

-- ===================================
-- STEP 4: ENABLE ROW LEVEL SECURITY
-- ===================================
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE pending_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE submitted_tickets ENABLE ROW LEVEL SECURITY;

-- ===================================
-- STEP 5: CREATE NEW RLS POLICIES
-- ===================================

-- USER PROFILES POLICIES
CREATE POLICY "Users can view own profile"
    ON user_profiles
    FOR SELECT
    USING (auth.uid() = user_id);

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

CREATE POLICY "Users can update own profile"
    ON user_profiles
    FOR UPDATE
    USING (auth.uid() = user_id);

-- PENDING SIGNUPS POLICIES
CREATE POLICY "Anyone can submit signup request"
    ON pending_signups
    FOR INSERT
    WITH CHECK (true);

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

-- SUBMITTED TICKETS POLICIES
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
-- STEP 6: GRANT PERMISSIONS
-- ===================================
GRANT ALL ON user_profiles TO anon, authenticated;
GRANT ALL ON pending_signups TO anon, authenticated;
GRANT ALL ON submitted_tickets TO anon, authenticated;

GRANT USAGE ON SEQUENCE user_profiles_id_seq TO anon, authenticated;
GRANT USAGE ON SEQUENCE pending_signups_id_seq TO anon, authenticated;
GRANT USAGE ON SEQUENCE submitted_tickets_id_seq TO anon, authenticated;

-- ===================================
-- ✅ SUCCESS!
-- ===================================
SELECT '✅ Database setup completed successfully!' AS status;

-- ===================================
-- 📋 NEXT STEPS:
-- ===================================
-- 1. Go to Authentication → Users → Add user
-- 2. Create admin account (email + password)
-- 3. Copy the User ID
-- 4. Run this SQL (replace YOUR_USER_ID):
--
-- INSERT INTO user_profiles (user_id, email, full_name, account_type, is_approved)
-- VALUES (
--     'YOUR_USER_ID_HERE',
--     'admin@ksauhs.edu.sa',
--     'Your Name',
--     'admin',
--     true
-- );
-- ===================================
