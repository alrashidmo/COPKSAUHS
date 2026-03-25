-- =====================================================
-- Community Service + Student Awards — Migration
-- Run in Supabase SQL Editor
-- =====================================================

-- 1. Community Service Log
CREATE TABLE IF NOT EXISTS community_service_log (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id      TEXT NOT NULL,
    student_name    TEXT,
    activity_type   TEXT,        -- health_awareness, screening, school_visit, ngo, event_conference, other
    organization    TEXT,
    activity_date   DATE,
    hours           NUMERIC(5,1) DEFAULT 0,
    description     TEXT,
    status          TEXT DEFAULT 'pending',   -- pending, approved, rejected
    admin_notes     TEXT,
    reviewed_by     TEXT,
    reviewed_at     TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cs_log_student  ON community_service_log(student_id);
CREATE INDEX IF NOT EXISTS idx_cs_log_status   ON community_service_log(status);
CREATE INDEX IF NOT EXISTS idx_cs_log_date     ON community_service_log(activity_date);

-- 2. Student Awards
CREATE TABLE IF NOT EXISTS student_awards (
    id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id           TEXT NOT NULL,
    student_name         TEXT,
    award_name           TEXT NOT NULL,
    issuing_organization TEXT,
    category             TEXT,   -- Academic, Clinical, Research, Community, Leadership
    level                TEXT,   -- Institutional, National, International
    date_received        DATE,
    description          TEXT,
    status               TEXT DEFAULT 'pending',   -- pending, approved, rejected
    reviewed_at          TIMESTAMPTZ,
    submitted_at         TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_awards_student ON student_awards(student_id);
CREATE INDEX IF NOT EXISTS idx_awards_status  ON student_awards(status);

-- 3. Verify
SELECT
    (SELECT COUNT(*) FROM community_service_log) AS cs_records,
    (SELECT COUNT(*) FROM student_awards)         AS award_records;

SELECT '✅ Community Service & Awards tables ready!' AS status;
