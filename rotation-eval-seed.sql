-- ============================================================
-- APPE Rotation Evaluation Placeholder Data
-- Run this in Supabase SQL Editor
-- Automatically seeds all specialties from rotation_sites
-- Edit the numbers later with accurate data
-- ============================================================

-- Step 1: Create tables if they don't exist
-- ============================================================

CREATE TABLE IF NOT EXISTS rotation_eval_history (
    id BIGSERIAL PRIMARY KEY,
    specialty TEXT NOT NULL,
    academic_year TEXT NOT NULL,
    avg_overall NUMERIC(3,1),
    avg_learning NUMERIC(3,1),
    avg_preceptor NUMERIC(3,1),
    avg_career NUMERIC(3,1),
    recommend_pct INT,
    total_students INT,
    workload_level TEXT,
    highlight_1 TEXT,
    highlight_2 TEXT,
    highlight_3 TEXT,
    UNIQUE(specialty, academic_year)
);

CREATE TABLE IF NOT EXISTS rotation_evaluations (
    id BIGSERIAL PRIMARY KEY,
    specialty TEXT NOT NULL,
    site_id INT,
    student_id UUID,
    rating_overall NUMERIC(3,1),
    rating_learning NUMERIC(3,1),
    rating_preceptor NUMERIC(3,1),
    rating_career NUMERIC(3,1),
    workload_level TEXT,
    would_recommend BOOLEAN,
    highlight TEXT,
    submitted_at TIMESTAMPTZ DEFAULT now()
);

-- Step 2: Clear any existing placeholder data
-- ============================================================
DELETE FROM rotation_eval_history WHERE highlight_1 = 'Excellent hands-on clinical experience';
DELETE FROM rotation_evaluations  WHERE highlight    = 'Great learning environment with supportive preceptors';

-- Step 3: Insert 3 years of history for every specialty in rotation_sites
-- ============================================================
INSERT INTO rotation_eval_history (specialty, academic_year, avg_overall, avg_learning, avg_preceptor, avg_career, recommend_pct, total_students, workload_level, highlight_1, highlight_2, highlight_3)
SELECT
    s.specialty,
    y.academic_year,
    -- Vary ratings slightly per year using the year index
    ROUND((4.0 + (y.yr_offset * 0.15) + (MOD(LENGTH(s.specialty), 5) * 0.08))::NUMERIC, 1) AS avg_overall,
    ROUND((3.9 + (y.yr_offset * 0.12) + (MOD(LENGTH(s.specialty), 4) * 0.07))::NUMERIC, 1) AS avg_learning,
    ROUND((4.1 + (y.yr_offset * 0.10) + (MOD(LENGTH(s.specialty), 3) * 0.09))::NUMERIC, 1) AS avg_preceptor,
    ROUND((3.8 + (y.yr_offset * 0.18) + (MOD(LENGTH(s.specialty), 6) * 0.06))::NUMERIC, 1) AS avg_career,
    (80 + MOD(LENGTH(s.specialty) + y.yr_offset, 16))                                        AS recommend_pct,
    (8  + MOD(LENGTH(s.specialty) + y.yr_offset, 8))                                         AS total_students,
    CASE MOD(LENGTH(s.specialty), 4)
        WHEN 0 THEN 'Moderate'
        WHEN 1 THEN 'Heavy'
        WHEN 2 THEN 'Moderate'
        ELSE        'Light'
    END AS workload_level,
    'Excellent hands-on clinical experience'                   AS highlight_1,
    'Supportive preceptors with strong teaching skills'        AS highlight_2,
    'Great exposure to real-world pharmacy practice'           AS highlight_3
FROM
    (SELECT DISTINCT specialty FROM rotation_sites WHERE is_active = true AND specialty IS NOT NULL) s
CROSS JOIN (
    VALUES
        ('2022-2023', 0),
        ('2023-2024', 1),
        ('2024-2025', 2)
) AS y(academic_year, yr_offset)
ON CONFLICT (specialty, academic_year) DO NOTHING;

-- Step 4: Insert individual evaluation records (5 per specialty)
-- ============================================================
INSERT INTO rotation_evaluations (specialty, site_id, rating_overall, rating_learning, rating_preceptor, rating_career, workload_level, would_recommend, highlight)
SELECT
    s.specialty,
    s.id AS site_id,
    ROUND((3.8 + (ev.offset_o * 0.25) + (MOD(LENGTH(s.specialty), 4) * 0.1))::NUMERIC, 1),
    ROUND((3.7 + (ev.offset_l * 0.20) + (MOD(LENGTH(s.specialty), 3) * 0.1))::NUMERIC, 1),
    ROUND((4.0 + (ev.offset_p * 0.22) + (MOD(LENGTH(s.specialty), 5) * 0.08))::NUMERIC, 1),
    ROUND((3.6 + (ev.offset_c * 0.28) + (MOD(LENGTH(s.specialty), 6) * 0.09))::NUMERIC, 1),
    CASE MOD(LENGTH(s.specialty) + ev.ev_num, 4)
        WHEN 0 THEN 'Moderate'
        WHEN 1 THEN 'Heavy'
        WHEN 2 THEN 'Light'
        ELSE        'Moderate'
    END,
    MOD(ev.ev_num, 5) <> 0,  -- 80% would recommend
    CASE MOD(ev.ev_num, 5)
        WHEN 0 THEN 'Challenging but very rewarding rotation'
        WHEN 1 THEN 'Great learning environment with supportive preceptors'
        WHEN 2 THEN 'Highly recommended for students interested in this field'
        WHEN 3 THEN 'Real-world exposure that complements classroom knowledge'
        ELSE        'Strong mentorship and clear learning objectives'
    END
FROM
    (SELECT DISTINCT id, specialty FROM rotation_sites WHERE is_active = true AND specialty IS NOT NULL) s
CROSS JOIN (
    VALUES (1, 0.0, 0.1, 0.0, 0.2),
           (2, 0.3, 0.0, 0.2, 0.0),
           (3, 0.1, 0.4, 0.1, 0.3),
           (4, 0.5, 0.2, 0.4, 0.1),
           (5, 0.2, 0.3, 0.3, 0.4)
) AS ev(ev_num, offset_o, offset_l, offset_p, offset_c);

-- Done!
SELECT
    specialty,
    COUNT(DISTINCT academic_year) AS years_seeded,
    (SELECT COUNT(*) FROM rotation_evaluations re WHERE re.specialty = reh.specialty) AS individual_evals
FROM rotation_eval_history reh
GROUP BY specialty
ORDER BY specialty;
