-- =====================================================
-- Alumni Unit — Full Supabase Migration
-- Run in Supabase SQL Editor
-- =====================================================

-- 1. Main alumni profiles table
CREATE TABLE IF NOT EXISTS alumni_profiles (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    alumni_id           TEXT UNIQUE,                        -- e.g. A001
    name                TEXT NOT NULL,
    email               TEXT UNIQUE,
    phone               TEXT,
    program             TEXT,                               -- PharmD, BPharm, MSc
    graduation_year     INT,
    student_id          TEXT,                               -- links back to students table
    status              TEXT DEFAULT 'employed',            -- employed, postgraduate, other
    current_employer    TEXT,
    job_title           TEXT,
    specialty           TEXT,
    sector              TEXT,                               -- Hospital, Community, Industry, Gov, Academic
    board_cert          BOOLEAN DEFAULT FALSE,
    board_cert_type     TEXT,                               -- BCPS, BCOP, etc.
    postgrad_type       TEXT,                               -- Residency, Fellowship, PhD
    postgrad_institution TEXT,
    engagement          TEXT DEFAULT 'moderate',            -- active, moderate, low
    mentor_willing      BOOLEAN DEFAULT FALSE,
    preceptor_willing   BOOLEAN DEFAULT FALSE,
    linkedin_url        TEXT,
    city                TEXT,
    country             TEXT DEFAULT 'Saudi Arabia',
    notes               TEXT,
    profile_updated_at  TIMESTAMPTZ,
    created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Alumni events table
CREATE TABLE IF NOT EXISTS alumni_events (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title           TEXT NOT NULL,
    description     TEXT,
    event_date      DATE,
    location        TEXT,
    type            TEXT,                                   -- celebration, workshop, academic, networking
    capacity        INT,
    registered      INT DEFAULT 0,
    status          TEXT DEFAULT 'upcoming',               -- upcoming, completed, cancelled
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Alumni achievements table
CREATE TABLE IF NOT EXISTS alumni_achievements (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    alumni_id       UUID REFERENCES alumni_profiles(id) ON DELETE CASCADE,
    alumni_name     TEXT,
    achievement     TEXT NOT NULL,
    type            TEXT,                                   -- Award, Publication, Leadership, Media
    year            INT,
    institution     TEXT,
    details         TEXT,
    verified        BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Alumni engagement log
CREATE TABLE IF NOT EXISTS alumni_engagement_log (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    alumni_id       UUID REFERENCES alumni_profiles(id) ON DELETE CASCADE,
    alumni_name     TEXT,
    activity_type   TEXT,                                   -- guest_lecture, career_day, workshop, panel, conference
    activity_title  TEXT,
    activity_date   DATE,
    notes           TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Mentorship pairs
CREATE TABLE IF NOT EXISTS alumni_mentorship_pairs (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mentor_alumni_id UUID REFERENCES alumni_profiles(id) ON DELETE CASCADE,
    mentor_name     TEXT,
    mentor_specialty TEXT,
    mentee_student_id TEXT,                                 -- from students table
    mentee_name     TEXT,
    status          TEXT DEFAULT 'active',                  -- pending, active, completed
    start_date      DATE DEFAULT CURRENT_DATE,
    end_date        DATE,
    rating          NUMERIC(3,1),
    notes           TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Indexes for performance
CREATE INDEX IF NOT EXISTS idx_alumni_profiles_graduation_year ON alumni_profiles(graduation_year);
CREATE INDEX IF NOT EXISTS idx_alumni_profiles_program         ON alumni_profiles(program);
CREATE INDEX IF NOT EXISTS idx_alumni_profiles_mentor          ON alumni_profiles(mentor_willing) WHERE mentor_willing = TRUE;
CREATE INDEX IF NOT EXISTS idx_alumni_profiles_preceptor       ON alumni_profiles(preceptor_willing) WHERE preceptor_willing = TRUE;
CREATE INDEX IF NOT EXISTS idx_alumni_achievements_alumni_id   ON alumni_achievements(alumni_id);
CREATE INDEX IF NOT EXISTS idx_alumni_engagement_alumni_id     ON alumni_engagement_log(alumni_id);
CREATE INDEX IF NOT EXISTS idx_mentorship_mentor               ON alumni_mentorship_pairs(mentor_alumni_id);

-- 7. Seed with existing sample data from ALUMNI_DATABASE
INSERT INTO alumni_profiles (alumni_id, name, email, program, graduation_year, status, current_employer, job_title, specialty, board_cert, engagement, mentor_willing, preceptor_willing)
VALUES
    ('A001','Dr. Sarah Al-Rashid',   'sarah.rashid@example.com',   'PharmD',2024,'employed',   'KAMC Riyadh',         'Clinical Pharmacist - Oncology',   'Oncology',     TRUE, 'active',   TRUE,  FALSE),
    ('A002','Dr. Ahmed Al-Ghamdi',   'ahmed.ghamdi@example.com',   'PharmD',2024,'employed',   'KFMC',                'Clinical Pharmacist - Cardiology', 'Cardiology',   TRUE, 'active',   FALSE, TRUE),
    ('A003','Dr. Fatima Al-Otaibi',  'fatima.otaibi@example.com',  'PharmD',2024,'postgraduate','UT Health',           'Resident',                         'Internal Medicine',FALSE,'moderate',FALSE,FALSE),
    ('A004','Dr. Mohammed Al-Shehri','mohammed.shehri@example.com','PharmD',2024,'employed',   'Pfizer SA',           'Clinical Research Manager',        'Research',     FALSE,'active',   FALSE, FALSE),
    ('A005','Dr. Hana Al-Zahra',     'hana.zahra@example.com',     'PharmD',2024,'employed',   'Nahdi Pharmacy',      'Community Pharmacy Manager',       'Community',    FALSE,'low',      FALSE, FALSE),
    ('A006','Dr. Khalid Al-Dosari',  'khalid.dosari@example.com',  'PharmD',2023,'employed',   'NGH',                 'Clinical Pharmacist - ICU',        'Critical Care',TRUE, 'active',   TRUE,  TRUE),
    ('A007','Dr. Noura Al-Harbi',    'noura.harbi@example.com',    'PharmD',2023,'postgraduate','UC San Diego',        'Fellow',                           'Pediatrics',   TRUE, 'active',   TRUE,  FALSE),
    ('A008','Dr. Rayan Al-Qahtani',  'rayan.qahtani@example.com',  'BPharm',2023,'employed',   'Ministry of Health',  'Pharmacy Inspector',               'Regulatory',   FALSE,'moderate', FALSE, TRUE),
    ('A009','Dr. Lama Al-Saleh',     'lama.saleh@example.com',     'PharmD',2023,'employed',   'King Faisal',         'Clinical Pharmacist - Transplant', 'Transplant',   TRUE, 'active',   TRUE,  TRUE),
    ('A010','Dr. Hassan Al-Anazi',   'hassan.anazi@example.com',   'PharmD',2023,'employed',   'KAMC',                'Pharmacy Director',                'Administration',TRUE,'active',  TRUE,  TRUE),
    ('A011','Dr. Maha Al-Mutairi',   'maha.mutairi@example.com',   'PharmD',2022,'postgraduate','University of Michigan','PhD Candidate',                 'Pharmacokinetics',TRUE,'moderate',FALSE,FALSE),
    ('A012','Dr. Jamal Al-Shammari', 'jamal.shammari@example.com', 'PharmD',2022,'employed',   'AstraZeneca',         'Regional Manager',                 'Industry',     FALSE,'low',      FALSE, FALSE)
ON CONFLICT (email) DO NOTHING;

-- Seed achievements
INSERT INTO alumni_achievements (alumni_name, achievement, type, year, verified)
VALUES
    ('Dr. Sarah Al-Rashid', 'Best Oncology Pharmacist Award',       'Award',       2025, TRUE),
    ('Dr. Hassan Al-Anazi', 'Published 3 papers in IJPP',           'Publication', 2025, TRUE),
    ('Dr. Khalid Al-Dosari','Elected Board Member - SPS',            'Leadership',  2024, TRUE),
    ('Dr. Noura Al-Harbi',  'PGY-2 Pediatric Fellowship Match',      'Training',    2024, TRUE),
    ('Dr. Lama Al-Saleh',   'Transplant Pharmacy Certification',     'Award',       2024, TRUE)
ON CONFLICT DO NOTHING;

-- Seed events
INSERT INTO alumni_events (title, description, event_date, location, type, capacity, registered, status)
VALUES
    ('Annual Alumni Gala 2025',       'Annual celebration and networking',     '2025-10-15', 'KSAU-HS Campus', 'celebration', 250, 180, 'upcoming'),
    ('Career Development Workshop',   'Resume and interview preparation',      '2025-11-20', 'Virtual',        'workshop',    100,  65, 'upcoming'),
    ('Research Symposium',            'Alumni research presentations',         '2025-12-10', 'KSAU-HS Campus', 'academic',    150,  95, 'upcoming')
ON CONFLICT DO NOTHING;

-- 8. Verify counts
SELECT
    (SELECT COUNT(*) FROM alumni_profiles)         AS alumni_profiles,
    (SELECT COUNT(*) FROM alumni_events)            AS alumni_events,
    (SELECT COUNT(*) FROM alumni_achievements)      AS alumni_achievements,
    (SELECT COUNT(*) FROM alumni_engagement_log)    AS engagement_log,
    (SELECT COUNT(*) FROM alumni_mentorship_pairs)  AS mentorship_pairs;

SELECT '✅ Alumni migration complete!' AS status;
