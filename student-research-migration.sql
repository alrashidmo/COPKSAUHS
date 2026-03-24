-- =====================================================
-- Student Research Progression Tracker — Migration
-- Run this in Supabase SQL Editor BEFORE deploying
-- =====================================================

-- 1. Add new columns to student_research_log
ALTER TABLE student_research_log
    ADD COLUMN IF NOT EXISTS faculty_email  TEXT,
    ADD COLUMN IF NOT EXISTS faculty_name   TEXT,
    ADD COLUMN IF NOT EXISTS stage          TEXT    DEFAULT 'irb_submit',
    ADD COLUMN IF NOT EXISTS degree_level   TEXT    DEFAULT 'pharmd',
    ADD COLUMN IF NOT EXISTS notes          TEXT,
    ADD COLUMN IF NOT EXISTS updated_at     TIMESTAMPTZ;

-- 2. Mark existing old records as 'contribution' type so they don't appear
--    in the new Research Projects tab (which only shows type = 'research_project')
UPDATE student_research_log
    SET type = 'contribution'
    WHERE type IS NULL OR type NOT IN ('research_project', 'contribution');

-- 3. Verify
SELECT
    COUNT(*) FILTER (WHERE type = 'research_project') AS research_projects,
    COUNT(*) FILTER (WHERE type = 'contribution')     AS contributions,
    COUNT(*) AS total
FROM student_research_log;

SELECT '✅ Migration complete — ready for Student Research Progression Tracker' AS status;
