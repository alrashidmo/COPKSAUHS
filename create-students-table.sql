-- ===================================
-- Create Students Table for Student Database
-- Replaces in-memory APPE_DATABASE.students array
-- ===================================

-- Create the students table
CREATE TABLE IF NOT EXISTS students (
    id TEXT PRIMARY KEY,  -- Student ID (e.g., "44-1-1-1-0162")
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    cohort TEXT NOT NULL,  -- IPPE I, IPPE II, IPPE III, or APPE
    gpa DECIMAL(3,2) DEFAULT 0.0,
    risk TEXT DEFAULT 'low',  -- low, medium, high
    attendance INTEGER DEFAULT 0,
    account_status TEXT DEFAULT 'active',
    approved_date TIMESTAMP DEFAULT NOW(),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Disable RLS for now (since other tables have RLS disabled)
ALTER TABLE students DISABLE ROW LEVEL SECURITY;

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_students_cohort ON students(cohort);
CREATE INDEX IF NOT EXISTS idx_students_email ON students(email);
CREATE INDEX IF NOT EXISTS idx_students_risk ON students(risk);

-- Insert existing P4 - APPE students from the hardcoded data
INSERT INTO students (id, name, email, cohort, gpa, risk, attendance) VALUES
    ('391210303', 'Sarah Saud Abdulaziz Bindulaym', 'bindulaym0303@ksau-hs.edu.sa', 'APPE', 3.6, 'low', 92),
    ('411210048', 'Sham Abdullah Al Enazi', 'ALENAZI10048@ksau-hs.edu.sa', 'APPE', 3.8, 'low', 88),
    ('411210102', 'Dana Emad Aloumi', 'ALOMAEI102@ksau-hs.edu.sa', 'APPE', 3.7, 'low', 94),
    ('411210251', 'Yara Munif Alshammari', 'ALSHAMMARI0251@ksau-hs.edu.sa', 'APPE', 3.9, 'low', 90),
    ('411210284', 'Raghad Faisal Alwail', 'alwail284@ksau-hs.edu.sa', 'APPE', 3.5, 'low', 87),
    ('421210049', 'Albatoul Omran Alomran', 'A21210009@ksau-hs.edu.sa', 'APPE', 3.8, 'low', 91)
ON CONFLICT (id) DO NOTHING;  -- Don't insert if already exists

SELECT '✅ Students table created and populated!' AS status;
