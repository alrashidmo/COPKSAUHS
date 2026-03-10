-- ===================================
-- APPE Hub Database Setup
-- Run this SQL in Supabase SQL Editor
-- ===================================

-- Create submitted_tickets table
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

    -- Indexes for faster queries
    CONSTRAINT unique_ticket UNIQUE (student_id, ticket_id)
);

-- Create index for student queries
CREATE INDEX IF NOT EXISTS idx_student_tickets ON submitted_tickets(student_id, submitted_at DESC);

-- Create index for status queries
CREATE INDEX IF NOT EXISTS idx_ticket_status ON submitted_tickets(status);

-- Enable Row Level Security (RLS)
ALTER TABLE submitted_tickets ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own tickets
CREATE POLICY "Users can view own tickets"
    ON submitted_tickets
    FOR SELECT
    USING (auth.uid()::text = student_id);

-- Policy: Users can insert their own tickets
CREATE POLICY "Users can create own tickets"
    ON submitted_tickets
    FOR INSERT
    WITH CHECK (auth.uid()::text = student_id);

-- Policy: Users can update their own tickets
CREATE POLICY "Users can update own tickets"
    ON submitted_tickets
    FOR UPDATE
    USING (auth.uid()::text = student_id);

-- ===================================
-- Grant permissions for anon users (for now - we'll restrict this later)
-- ===================================
GRANT ALL ON submitted_tickets TO anon;
GRANT ALL ON submitted_tickets TO authenticated;

-- Allow sequence usage
GRANT USAGE ON SEQUENCE submitted_tickets_id_seq TO anon;
GRANT USAGE ON SEQUENCE submitted_tickets_id_seq TO authenticated;

-- ===================================
-- Done! Your database is ready.
-- ===================================
