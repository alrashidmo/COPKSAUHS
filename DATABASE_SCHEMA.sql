/**
 * ============================================================================
 * CLINICAL AFFAIRS EXPERIENCE HUB - DATABASE SCHEMA
 * ============================================================================
 * 
 * Complete PostgreSQL database schema with Entity-Relationship Diagram
 * 
 * Design Principles:
 * - Normalized (3NF)
 * - Foreign key constraints with ON DELETE/UPDATE rules
 * - Indexes on frequently queried columns
 * - Soft deletes (deleted_at timestamp)
 * - Audit columns (created_at, updated_at, created_by, updated_by)
 * - UUID primary keys for distributed systems
 * 
 * Version: 1.0.0
 * Last Updated: January 10, 2026
 * ============================================================================
 */

/*
┌──────────────────────────────────────────────────────────────────────────┐
│                  ENTITY-RELATIONSHIP DIAGRAM (ERD)                        │
│                                                                           │
│  ┌─────────┐         ┌──────────────┐         ┌─────────────┐          │
│  │  users  │────────▶│   students   │────────▶│ compliance  │          │
│  └─────────┘         └──────────────┘         └─────────────┘          │
│       │                     │                                            │
│       │                     │                                            │
│       ▼                     ▼                                            │
│  ┌─────────┐         ┌──────────────┐                                   │
│  │preceptors│──────▶│  rotations   │◀───────┐                          │
│  └─────────┘         └──────────────┘        │                          │
│       │                     │                 │                          │
│       │                     │                 │                          │
│       ▼                     ▼                 │                          │
│  ┌─────────┐         ┌──────────────┐        │                          │
│  │  sites  │────────▶│ assignments  │────────┘                          │
│  └─────────┘         └──────────────┘                                   │
│                             │                                            │
│                             ▼                                            │
│                      ┌──────────────┐                                   │
│                      │ evaluations  │                                   │
│                      └──────────────┘                                   │
│                             │                                            │
│                    ┌────────┴────────┐                                  │
│                    ▼                 ▼                                  │
│             ┌─────────────┐   ┌─────────────┐                          │
│             │     EPAs    │   │  attendance │                          │
│             └─────────────┘   └─────────────┘                          │
└──────────────────────────────────────────────────────────────────────────┘
*/

const DATABASE_SCHEMA = {

    // ========================================================================
    // USERS & AUTHENTICATION
    // ========================================================================

    users: {
        table_name: 'users',
        description: 'Central user table for all system users',
        
        columns: `
        CREATE TABLE users (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email               VARCHAR(255) UNIQUE NOT NULL,
            password_hash       VARCHAR(255) NOT NULL,
            first_name          VARCHAR(100) NOT NULL,
            last_name           VARCHAR(100) NOT NULL,
            phone               VARCHAR(20),
            role                VARCHAR(50) NOT NULL CHECK (role IN (
                'STUDENT', 
                'PRECEPTOR', 
                'SITE_COORDINATOR', 
                'COURSE_COORDINATOR', 
                'ADMIN', 
                'LEADERSHIP'
            )),
            status              VARCHAR(20) DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE', 'INACTIVE', 'SUSPENDED')),
            avatar_url          TEXT,
            email_verified      BOOLEAN DEFAULT FALSE,
            last_login_at       TIMESTAMP,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            deleted_at          TIMESTAMP
        );

        CREATE INDEX idx_users_email ON users(email);
        CREATE INDEX idx_users_role ON users(role);
        CREATE INDEX idx_users_status ON users(status);
        CREATE INDEX idx_users_deleted_at ON users(deleted_at);
        `,
        
        relationships: [
            'One user → One student (if role = STUDENT)',
            'One user → One preceptor (if role = PRECEPTOR)',
            'One user → Many audit logs'
        ]
    },

    refresh_tokens: {
        table_name: 'refresh_tokens',
        description: 'JWT refresh tokens for authentication',
        
        columns: `
        CREATE TABLE refresh_tokens (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            token               VARCHAR(500) NOT NULL,
            expires_at          TIMESTAMP NOT NULL,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            revoked_at          TIMESTAMP
        );

        CREATE INDEX idx_refresh_tokens_user_id ON refresh_tokens(user_id);
        CREATE INDEX idx_refresh_tokens_token ON refresh_tokens(token);
        `
    },

    // ========================================================================
    // STUDENTS
    // ========================================================================

    students: {
        table_name: 'students',
        description: 'Student profiles linked to user accounts',
        
        columns: `
        CREATE TABLE students (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id             UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            student_id          VARCHAR(50) UNIQUE NOT NULL,    -- University ID
            program             VARCHAR(50) NOT NULL CHECK (program IN (
                'PHARMD', 
                'PHARMACY_TECHNICIAN'
            )),
            academic_year       INTEGER NOT NULL,               -- 1, 2, 3, 4, 5, 6
            cohort              VARCHAR(20),                    -- e.g., '2023-2024'
            cgpa                DECIMAL(3,2),
            compliance_status   VARCHAR(10) DEFAULT 'RED' CHECK (compliance_status IN ('GREEN', 'YELLOW', 'RED')),
            compliance_percent  INTEGER DEFAULT 0,              -- 0-100
            is_active           BOOLEAN DEFAULT TRUE,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            deleted_at          TIMESTAMP
        );

        CREATE INDEX idx_students_user_id ON students(user_id);
        CREATE INDEX idx_students_student_id ON students(student_id);
        CREATE INDEX idx_students_program ON students(program);
        CREATE INDEX idx_students_compliance_status ON students(compliance_status);
        `
    },

    student_compliance: {
        table_name: 'student_compliance',
        description: 'Tracks individual compliance requirements for each student',
        
        columns: `
        CREATE TABLE student_compliance (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            student_id          UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
            requirement_type    VARCHAR(100) NOT NULL,          -- 'BLS', 'IMMUNIZATION', 'BACKGROUND_CHECK', etc.
            document_name       VARCHAR(255),
            document_url        TEXT,
            status              VARCHAR(20) DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'SUBMITTED', 'APPROVED', 'REJECTED', 'EXPIRED')),
            submitted_at        TIMESTAMP,
            approved_at         TIMESTAMP,
            approved_by         UUID REFERENCES users(id),
            expiry_date         DATE,
            rejection_reason    TEXT,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            
            UNIQUE(student_id, requirement_type)
        );

        CREATE INDEX idx_student_compliance_student_id ON student_compliance(student_id);
        CREATE INDEX idx_student_compliance_status ON student_compliance(status);
        CREATE INDEX idx_student_compliance_expiry_date ON student_compliance(expiry_date);
        `
    },

    // ========================================================================
    // PRECEPTORS
    // ========================================================================

    preceptors: {
        table_name: 'preceptors',
        description: 'Preceptor profiles with license and training tracking',
        
        columns: `
        CREATE TABLE preceptors (
            id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id                 UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            license_number          VARCHAR(50) UNIQUE NOT NULL,
            license_state           VARCHAR(50),
            license_expiry_date     DATE NOT NULL,
            license_status          VARCHAR(20) DEFAULT 'ACTIVE' CHECK (license_status IN ('ACTIVE', 'EXPIRED', 'SUSPENDED')),
            board_certified         BOOLEAN DEFAULT FALSE,
            specialty_areas         TEXT[],                     -- Array of specialties
            years_experience        INTEGER,
            primary_site_id         UUID REFERENCES sites(id),
            position_title          VARCHAR(100),
            preceptor_training_date DATE,
            training_expiry_date    DATE,
            max_students            INTEGER DEFAULT 2,
            is_active               BOOLEAN DEFAULT TRUE,
            created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            deleted_at              TIMESTAMP
        );

        CREATE INDEX idx_preceptors_user_id ON preceptors(user_id);
        CREATE INDEX idx_preceptors_license_number ON preceptors(license_number);
        CREATE INDEX idx_preceptors_license_status ON preceptors(license_status);
        CREATE INDEX idx_preceptors_license_expiry_date ON preceptors(license_expiry_date);
        CREATE INDEX idx_preceptors_primary_site_id ON preceptors(primary_site_id);
        `
    },

    // ========================================================================
    // SITES
    // ========================================================================

    sites: {
        table_name: 'sites',
        description: 'Rotation sites (hospitals, pharmacies, clinics)',
        
        columns: `
        CREATE TABLE sites (
            id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name                    VARCHAR(255) NOT NULL,
            site_type               VARCHAR(50) NOT NULL CHECK (site_type IN (
                'HOSPITAL', 
                'COMMUNITY_PHARMACY', 
                'CLINIC', 
                'SPECIALTY_CENTER',
                'AMBULATORY_CARE'
            )),
            address                 TEXT NOT NULL,
            city                    VARCHAR(100) NOT NULL CHECK (city IN ('RIYADH', 'JEDDAH', 'DAMMAM', 'OTHER')),
            postal_code             VARCHAR(20),
            phone                   VARCHAR(20),
            email                   VARCHAR(255),
            coordinator_id          UUID REFERENCES users(id),  -- Site coordinator
            max_capacity            INTEGER DEFAULT 5,          -- Max students per rotation block
            affiliation_start_date  DATE NOT NULL,
            affiliation_end_date    DATE NOT NULL,
            affiliation_document_url TEXT,
            insurance_required      BOOLEAN DEFAULT TRUE,
            site_specific_requirements TEXT[],
            service_areas           TEXT[],                     -- ['Inpatient', 'Outpatient', 'Emergency']
            quality_rating          DECIMAL(2,1) DEFAULT 5.0,   -- 1.0 to 5.0
            is_active               BOOLEAN DEFAULT TRUE,
            created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            deleted_at              TIMESTAMP
        );

        CREATE INDEX idx_sites_city ON sites(city);
        CREATE INDEX idx_sites_site_type ON sites(site_type);
        CREATE INDEX idx_sites_is_active ON sites(is_active);
        CREATE INDEX idx_sites_affiliation_end_date ON sites(affiliation_end_date);
        `
    },

    // ========================================================================
    // PROGRAMS & ROTATION TYPES
    // ========================================================================

    programs: {
        table_name: 'programs',
        description: 'Academic programs (PharmD, Pharmacy Technician)',
        
        columns: `
        CREATE TABLE programs (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name                VARCHAR(100) UNIQUE NOT NULL,   -- 'PharmD', 'Pharmacy Technician'
            code                VARCHAR(20) UNIQUE NOT NULL,    -- 'PHARMD', 'PHARMT'
            description         TEXT,
            is_active           BOOLEAN DEFAULT TRUE,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `
    },

    rotation_types: {
        table_name: 'rotation_types',
        description: 'Types of rotations (IPPE I, APPE, etc.)',
        
        columns: `
        CREATE TABLE rotation_types (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            program_id          UUID NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
            name                VARCHAR(100) NOT NULL,          -- 'IPPE I', 'APPE', 'IPTE I'
            code                VARCHAR(20) NOT NULL,           -- 'IPPE1', 'APPE', 'IPTE1'
            description         TEXT,
            duration_weeks      INTEGER NOT NULL,               -- Number of weeks
            is_core             BOOLEAN DEFAULT TRUE,           -- Core vs. Elective
            prerequisites       UUID[],                         -- Array of prerequisite rotation_type IDs
            available_cities    TEXT[],                         -- ['RIYADH', 'JEDDAH']
            learning_objectives TEXT[],
            is_active           BOOLEAN DEFAULT TRUE,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            
            UNIQUE(program_id, code)
        );

        CREATE INDEX idx_rotation_types_program_id ON rotation_types(program_id);
        CREATE INDEX idx_rotation_types_code ON rotation_types(code);
        `
    },

    // ========================================================================
    // ROTATION BLOCKS & ASSIGNMENTS
    // ========================================================================

    rotation_blocks: {
        table_name: 'rotation_blocks',
        description: 'Time periods for rotations',
        
        columns: `
        CREATE TABLE rotation_blocks (
            id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            rotation_type_id        UUID NOT NULL REFERENCES rotation_types(id),
            name                    VARCHAR(100) NOT NULL,      -- 'APPE Block 1 - Fall 2026'
            start_date              DATE NOT NULL,
            end_date                DATE NOT NULL,
            registration_start      DATE NOT NULL,
            registration_end        DATE NOT NULL,
            city                    VARCHAR(100),
            max_students            INTEGER NOT NULL,
            status                  VARCHAR(20) DEFAULT 'DRAFT' CHECK (status IN (
                'DRAFT',
                'OPEN_REGISTRATION',
                'CLOSED_REGISTRATION',
                'MATCHING',
                'PUBLISHED',
                'IN_PROGRESS',
                'COMPLETED'
            )),
            created_by              UUID REFERENCES users(id),
            created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            deleted_at              TIMESTAMP,
            
            CONSTRAINT check_dates CHECK (end_date > start_date AND registration_end <= start_date)
        );

        CREATE INDEX idx_rotation_blocks_rotation_type_id ON rotation_blocks(rotation_type_id);
        CREATE INDEX idx_rotation_blocks_status ON rotation_blocks(status);
        CREATE INDEX idx_rotation_blocks_start_date ON rotation_blocks(start_date);
        `
    },

    student_rotation_preferences: {
        table_name: 'student_rotation_preferences',
        description: 'Student preferences for rotation site assignments',
        
        columns: `
        CREATE TABLE student_rotation_preferences (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            rotation_block_id   UUID NOT NULL REFERENCES rotation_blocks(id) ON DELETE CASCADE,
            student_id          UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
            site_id             UUID NOT NULL REFERENCES sites(id),
            rank                INTEGER NOT NULL CHECK (rank >= 1 AND rank <= 5),
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            
            UNIQUE(rotation_block_id, student_id, rank),
            UNIQUE(rotation_block_id, student_id, site_id)
        );

        CREATE INDEX idx_student_rotation_preferences_rotation_block_id ON student_rotation_preferences(rotation_block_id);
        CREATE INDEX idx_student_rotation_preferences_student_id ON student_rotation_preferences(student_id);
        `
    },

    rotation_assignments: {
        table_name: 'rotation_assignments',
        description: 'Final student assignments to sites and preceptors',
        
        columns: `
        CREATE TABLE rotation_assignments (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            rotation_block_id   UUID NOT NULL REFERENCES rotation_blocks(id),
            student_id          UUID NOT NULL REFERENCES students(id),
            site_id             UUID NOT NULL REFERENCES sites(id),
            preceptor_id        UUID REFERENCES preceptors(id),
            assignment_type     VARCHAR(20) DEFAULT 'AUTO' CHECK (assignment_type IN ('AUTO', 'MANUAL', 'SWAP')),
            status              VARCHAR(20) DEFAULT 'ASSIGNED' CHECK (status IN (
                'ASSIGNED',
                'CONFIRMED',
                'IN_PROGRESS',
                'COMPLETED',
                'CANCELLED',
                'FAILED'
            )),
            matching_score      DECIMAL(5,2),                   -- Score from matching algorithm (0-100)
            preference_rank     INTEGER,                        -- Which preference was matched (1-5)
            start_date          DATE NOT NULL,
            end_date            DATE NOT NULL,
            final_grade         DECIMAL(5,2),                   -- 0-100
            pass_fail           VARCHAR(10) CHECK (pass_fail IN ('PASS', 'FAIL', 'INCOMPLETE')),
            assigned_by         UUID REFERENCES users(id),
            assigned_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            confirmed_at        TIMESTAMP,
            completed_at        TIMESTAMP,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            deleted_at          TIMESTAMP,
            
            UNIQUE(rotation_block_id, student_id),
            CONSTRAINT check_rotation_dates CHECK (end_date > start_date)
        );

        CREATE INDEX idx_rotation_assignments_rotation_block_id ON rotation_assignments(rotation_block_id);
        CREATE INDEX idx_rotation_assignments_student_id ON rotation_assignments(student_id);
        CREATE INDEX idx_rotation_assignments_site_id ON rotation_assignments(site_id);
        CREATE INDEX idx_rotation_assignments_preceptor_id ON rotation_assignments(preceptor_id);
        CREATE INDEX idx_rotation_assignments_status ON rotation_assignments(status);
        `
    },

    // ========================================================================
    // EVALUATIONS
    // ========================================================================

    evaluation_templates: {
        table_name: 'evaluation_templates',
        description: 'Templates for different evaluation types',
        
        columns: `
        CREATE TABLE evaluation_templates (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            rotation_type_id    UUID NOT NULL REFERENCES rotation_types(id),
            name                VARCHAR(100) NOT NULL,          -- 'APPE Midpoint', 'APPE Final'
            type                VARCHAR(20) NOT NULL CHECK (type IN ('MIDPOINT', 'FINAL', 'SELF')),
            rubric_criteria     JSONB NOT NULL,                 -- Array of criteria with weights
            epa_domains         JSONB,                          -- EPA domains to assess
            weight_percentage   DECIMAL(5,2) DEFAULT 30.00,     -- Contribution to final grade
            is_active           BOOLEAN DEFAULT TRUE,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX idx_evaluation_templates_rotation_type_id ON evaluation_templates(rotation_type_id);
        CREATE INDEX idx_evaluation_templates_type ON evaluation_templates(type);
        `
    },

    evaluations: {
        table_name: 'evaluations',
        description: 'Student evaluations (midpoint, final, self)',
        
        columns: `
        CREATE TABLE evaluations (
            id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            rotation_assignment_id  UUID NOT NULL REFERENCES rotation_assignments(id) ON DELETE CASCADE,
            template_id             UUID NOT NULL REFERENCES evaluation_templates(id),
            evaluator_id            UUID NOT NULL REFERENCES users(id),  -- Preceptor or Student
            type                    VARCHAR(20) NOT NULL CHECK (type IN ('MIDPOINT', 'FINAL', 'SELF')),
            rubric_scores           JSONB NOT NULL,             -- {"criteria_1": 4, "criteria_2": 5, ...}
            overall_score           DECIMAL(5,2),               -- Weighted average (0-5)
            overall_percentage      DECIMAL(5,2),               -- Converted to percentage (0-100)
            strengths               TEXT,
            areas_for_improvement   TEXT,
            comments                TEXT,
            red_flag                BOOLEAN DEFAULT FALSE,
            red_flag_details        TEXT,
            recommendation          VARCHAR(30) CHECK (recommendation IN ('PASS', 'PASS_WITH_CONCERNS', 'FAIL')),
            status                  VARCHAR(20) DEFAULT 'DRAFT' CHECK (status IN ('DRAFT', 'SUBMITTED', 'REVIEWED')),
            due_date                DATE,
            submitted_at            TIMESTAMP,
            reviewed_at             TIMESTAMP,
            reviewed_by             UUID REFERENCES users(id),
            created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX idx_evaluations_rotation_assignment_id ON evaluations(rotation_assignment_id);
        CREATE INDEX idx_evaluations_evaluator_id ON evaluations(evaluator_id);
        CREATE INDEX idx_evaluations_type ON evaluations(type);
        CREATE INDEX idx_evaluations_status ON evaluations(status);
        CREATE INDEX idx_evaluations_red_flag ON evaluations(red_flag);
        `
    },

    epa_domains: {
        table_name: 'epa_domains',
        description: 'Entrustable Professional Activities domains',
        
        columns: `
        CREATE TABLE epa_domains (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            program_id          UUID NOT NULL REFERENCES programs(id),
            code                VARCHAR(20) UNIQUE NOT NULL,    -- 'EPA-1', 'EPA-2'
            name                VARCHAR(255) NOT NULL,
            description         TEXT,
            category            VARCHAR(100),                   -- 'Patient Care', 'Medication Therapy'
            is_active           BOOLEAN DEFAULT TRUE,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX idx_epa_domains_program_id ON epa_domains(program_id);
        `
    },

    epa_assessments: {
        table_name: 'epa_assessments',
        description: 'EPA entrustment level assessments',
        
        columns: `
        CREATE TABLE epa_assessments (
            id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            rotation_assignment_id  UUID NOT NULL REFERENCES rotation_assignments(id) ON DELETE CASCADE,
            epa_domain_id           UUID NOT NULL REFERENCES epa_domains(id),
            entrustment_level       INTEGER NOT NULL CHECK (entrustment_level BETWEEN 1 AND 5),
            -- 1: Observation, 2: Direct Supervision, 3: Indirect Supervision, 4: Unsupervised, 5: Supervise Others
            assessor_id             UUID NOT NULL REFERENCES users(id),
            assessment_date         DATE NOT NULL,
            comments                TEXT,
            created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX idx_epa_assessments_rotation_assignment_id ON epa_assessments(rotation_assignment_id);
        CREATE INDEX idx_epa_assessments_epa_domain_id ON epa_assessments(epa_domain_id);
        CREATE INDEX idx_epa_assessments_entrustment_level ON epa_assessments(entrustment_level);
        `
    },

    // ========================================================================
    // ATTENDANCE & PROFESSIONALISM
    // ========================================================================

    attendance_records: {
        table_name: 'attendance_records',
        description: 'Daily attendance tracking',
        
        columns: `
        CREATE TABLE attendance_records (
            id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            rotation_assignment_id  UUID NOT NULL REFERENCES rotation_assignments(id) ON DELETE CASCADE,
            date                    DATE NOT NULL,
            status                  VARCHAR(20) NOT NULL CHECK (status IN (
                'PRESENT',
                'ABSENT_EXCUSED',
                'ABSENT_UNEXCUSED',
                'LATE',
                'LEFT_EARLY'
            )),
            hours_worked            DECIMAL(4,2),
            notes                   TEXT,
            reported_by             UUID NOT NULL REFERENCES users(id),
            created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            
            UNIQUE(rotation_assignment_id, date)
        );

        CREATE INDEX idx_attendance_records_rotation_assignment_id ON attendance_records(rotation_assignment_id);
        CREATE INDEX idx_attendance_records_date ON attendance_records(date);
        CREATE INDEX idx_attendance_records_status ON attendance_records(status);
        `
    },

    professionalism_incidents: {
        table_name: 'professionalism_incidents',
        description: 'Professionalism concerns and incidents',
        
        columns: `
        CREATE TABLE professionalism_incidents (
            id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            rotation_assignment_id  UUID NOT NULL REFERENCES rotation_assignments(id) ON DELETE CASCADE,
            incident_date           DATE NOT NULL,
            incident_type           VARCHAR(50) NOT NULL CHECK (incident_type IN (
                'UNPROFESSIONAL_BEHAVIOR',
                'COMMUNICATION_ISSUE',
                'PATIENT_SAFETY_CONCERN',
                'ETHICAL_VIOLATION',
                'ATTENDANCE_ISSUE',
                'OTHER'
            )),
            severity                VARCHAR(20) NOT NULL CHECK (severity IN ('MINOR', 'MODERATE', 'SEVERE')),
            description             TEXT NOT NULL,
            action_taken            TEXT,
            reported_by             UUID NOT NULL REFERENCES users(id),
            reviewed_by             UUID REFERENCES users(id),
            status                  VARCHAR(20) DEFAULT 'REPORTED' CHECK (status IN (
                'REPORTED',
                'UNDER_REVIEW',
                'RESOLVED',
                'ESCALATED'
            )),
            created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX idx_professionalism_incidents_rotation_assignment_id ON professionalism_incidents(rotation_assignment_id);
        CREATE INDEX idx_professionalism_incidents_severity ON professionalism_incidents(severity);
        CREATE INDEX idx_professionalism_incidents_status ON professionalism_incidents(status);
        `
    },

    // ========================================================================
    // NOTIFICATIONS & COMMUNICATIONS
    // ========================================================================

    notifications: {
        table_name: 'notifications',
        description: 'System notifications (in-app, email, SMS)',
        
        columns: `
        CREATE TABLE notifications (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            type                VARCHAR(50) NOT NULL CHECK (type IN (
                'COMPLIANCE_REMINDER',
                'EVALUATION_DUE',
                'ROTATION_ASSIGNMENT',
                'GRADE_POSTED',
                'LICENSE_EXPIRY',
                'SYSTEM_ANNOUNCEMENT',
                'MESSAGE_RECEIVED'
            )),
            priority            VARCHAR(10) DEFAULT 'MEDIUM' CHECK (priority IN ('LOW', 'MEDIUM', 'HIGH', 'URGENT')),
            title               VARCHAR(255) NOT NULL,
            message             TEXT NOT NULL,
            action_url          TEXT,
            channels            TEXT[] DEFAULT ARRAY['IN_APP'], -- ['IN_APP', 'EMAIL', 'SMS']
            is_read             BOOLEAN DEFAULT FALSE,
            read_at             TIMESTAMP,
            sent_at             TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX idx_notifications_user_id ON notifications(user_id);
        CREATE INDEX idx_notifications_type ON notifications(type);
        CREATE INDEX idx_notifications_is_read ON notifications(is_read);
        CREATE INDEX idx_notifications_sent_at ON notifications(sent_at);
        `
    },

    messages: {
        table_name: 'messages',
        description: 'Internal messaging system',
        
        columns: `
        CREATE TABLE messages (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            sender_id           UUID NOT NULL REFERENCES users(id),
            recipient_id        UUID REFERENCES users(id),      -- NULL for broadcast
            subject             VARCHAR(255) NOT NULL,
            body                TEXT NOT NULL,
            attachments         TEXT[],
            is_broadcast        BOOLEAN DEFAULT FALSE,
            broadcast_filter    JSONB,                          -- {role: 'STUDENT', program: 'PHARMD'}
            is_read             BOOLEAN DEFAULT FALSE,
            read_at             TIMESTAMP,
            sent_at             TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            deleted_at          TIMESTAMP
        );

        CREATE INDEX idx_messages_sender_id ON messages(sender_id);
        CREATE INDEX idx_messages_recipient_id ON messages(recipient_id);
        CREATE INDEX idx_messages_is_read ON messages(is_read);
        CREATE INDEX idx_messages_sent_at ON messages(sent_at);
        `
    },

    email_logs: {
        table_name: 'email_logs',
        description: 'Track email delivery status',
        
        columns: `
        CREATE TABLE email_logs (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            recipient_email     VARCHAR(255) NOT NULL,
            subject             VARCHAR(255) NOT NULL,
            template_name       VARCHAR(100),
            status              VARCHAR(20) DEFAULT 'PENDING' CHECK (status IN (
                'PENDING',
                'SENT',
                'DELIVERED',
                'BOUNCED',
                'FAILED'
            )),
            provider_message_id VARCHAR(255),
            error_message       TEXT,
            sent_at             TIMESTAMP,
            delivered_at        TIMESTAMP,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX idx_email_logs_recipient_email ON email_logs(recipient_email);
        CREATE INDEX idx_email_logs_status ON email_logs(status);
        CREATE INDEX idx_email_logs_sent_at ON email_logs(sent_at);
        `
    },

    // ========================================================================
    // REPORTS & ANALYTICS
    // ========================================================================

    reports: {
        table_name: 'reports',
        description: 'Generated reports',
        
        columns: `
        CREATE TABLE reports (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name                VARCHAR(255) NOT NULL,
            type                VARCHAR(50) NOT NULL CHECK (type IN (
                'COMPLIANCE_SUMMARY',
                'ROTATION_COMPLETION',
                'EVALUATION_COMPLETION',
                'SITE_UTILIZATION',
                'PRECEPTOR_WORKLOAD',
                'GRADE_DISTRIBUTION',
                'ACCREDITATION_EVIDENCE'
            )),
            format              VARCHAR(10) DEFAULT 'PDF' CHECK (format IN ('PDF', 'EXCEL', 'CSV')),
            parameters          JSONB,                          -- Filter parameters used
            file_url            TEXT,
            file_size           BIGINT,
            generated_by        UUID NOT NULL REFERENCES users(id),
            generated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            expires_at          TIMESTAMP,
            download_count      INTEGER DEFAULT 0,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX idx_reports_type ON reports(type);
        CREATE INDEX idx_reports_generated_by ON reports(generated_by);
        CREATE INDEX idx_reports_generated_at ON reports(generated_at);
        `
    },

    // ========================================================================
    // AUDIT LOGS
    // ========================================================================

    audit_logs: {
        table_name: 'audit_logs',
        description: 'Complete audit trail of all system changes',
        
        columns: `
        CREATE TABLE audit_logs (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id             UUID REFERENCES users(id),
            action              VARCHAR(50) NOT NULL CHECK (action IN (
                'CREATE',
                'UPDATE',
                'DELETE',
                'LOGIN',
                'LOGOUT',
                'APPROVE',
                'REJECT',
                'PUBLISH',
                'ASSIGN'
            )),
            entity_type         VARCHAR(50) NOT NULL,           -- 'student', 'rotation', 'evaluation'
            entity_id           UUID NOT NULL,
            changes             JSONB,                          -- {old: {...}, new: {...}}
            ip_address          INET,
            user_agent          TEXT,
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
        CREATE INDEX idx_audit_logs_action ON audit_logs(action);
        CREATE INDEX idx_audit_logs_entity_type ON audit_logs(entity_type);
        CREATE INDEX idx_audit_logs_entity_id ON audit_logs(entity_id);
        CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
        
        -- Partition by month for performance
        -- CREATE TABLE audit_logs_y2026m01 PARTITION OF audit_logs FOR VALUES FROM ('2026-01-01') TO ('2026-02-01');
        `
    },

    // ========================================================================
    // SYSTEM CONFIGURATION
    // ========================================================================

    system_settings: {
        table_name: 'system_settings',
        description: 'Global system configuration',
        
        columns: `
        CREATE TABLE system_settings (
            id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            key                 VARCHAR(100) UNIQUE NOT NULL,
            value               TEXT NOT NULL,
            data_type           VARCHAR(20) DEFAULT 'STRING' CHECK (data_type IN ('STRING', 'NUMBER', 'BOOLEAN', 'JSON')),
            description         TEXT,
            is_public           BOOLEAN DEFAULT FALSE,
            updated_by          UUID REFERENCES users(id),
            created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX idx_system_settings_key ON system_settings(key);
        `
    }
};

// ========================================================================
// SAMPLE DATA
// ========================================================================

const SAMPLE_DATA = `
-- Insert programs
INSERT INTO programs (name, code, description) VALUES
('PharmD', 'PHARMD', 'Doctor of Pharmacy Program'),
('Pharmacy Technician', 'PHARMT', 'Pharmacy Technician Program');

-- Insert rotation types for PharmD
INSERT INTO rotation_types (program_id, name, code, duration_weeks, is_core, available_cities) VALUES
((SELECT id FROM programs WHERE code = 'PHARMD'), 'IPPE I', 'IPPE1', 4, TRUE, ARRAY['RIYADH', 'JEDDAH']),
((SELECT id FROM programs WHERE code = 'PHARMD'), 'IPPE II', 'IPPE2', 4, TRUE, ARRAY['RIYADH', 'JEDDAH']),
((SELECT id FROM programs WHERE code = 'PHARMD'), 'IPPE III', 'IPPE3', 4, TRUE, ARRAY['RIYADH', 'JEDDAH']),
((SELECT id FROM programs WHERE code = 'PHARMD'), 'IPPE Community', 'IPPEC', 4, TRUE, ARRAY['RIYADH', 'JEDDAH']),
((SELECT id FROM programs WHERE code = 'PHARMD'), 'APPE', 'APPE', 6, TRUE, ARRAY['RIYADH']);

-- Insert rotation types for Pharmacy Technician
INSERT INTO rotation_types (program_id, name, code, duration_weeks, is_core, available_cities) VALUES
((SELECT id FROM programs WHERE code = 'PHARMT'), 'IPTE I', 'IPTE1', 3, TRUE, ARRAY['RIYADH', 'JEDDAH']),
((SELECT id FROM programs WHERE code = 'PHARMT'), 'IPTE II', 'IPTE2', 3, TRUE, ARRAY['RIYADH']),
((SELECT id FROM programs WHERE code = 'PHARMT'), 'IPTE III', 'IPTE3', 3, TRUE, ARRAY['RIYADH']),
((SELECT id FROM programs WHERE code = 'PHARMT'), 'APTE', 'APTE', 4, TRUE, ARRAY['RIYADH', 'JEDDAH']);

-- Insert EPA domains
INSERT INTO epa_domains (program_id, code, name, category) VALUES
((SELECT id FROM programs WHERE code = 'PHARMD'), 'EPA-1', 'Patient Care and Safety', 'Patient Care'),
((SELECT id FROM programs WHERE code = 'PHARMD'), 'EPA-2', 'Medication Therapy Management', 'Clinical Practice'),
((SELECT id FROM programs WHERE code = 'PHARMD'), 'EPA-3', 'Health and Wellness', 'Public Health'),
((SELECT id FROM programs WHERE code = 'PHARMD'), 'EPA-4', 'Population-Based Care', 'Public Health'),
((SELECT id FROM programs WHERE code = 'PHARMD'), 'EPA-5', 'Problem Solving', 'Professional Development'),
((SELECT id FROM programs WHERE code = 'PHARMD'), 'EPA-6', 'Communication', 'Professional Development'),
((SELECT id FROM programs WHERE code = 'PHARMD'), 'EPA-7', 'Self-Awareness', 'Professional Development');

-- Insert system settings
INSERT INTO system_settings (key, value, data_type, description) VALUES
('compliance_green_threshold', '100', 'NUMBER', 'Compliance percentage for GREEN status'),
('compliance_yellow_threshold', '75', 'NUMBER', 'Compliance percentage for YELLOW status'),
('evaluation_reminder_days', '7', 'NUMBER', 'Days before due date to send reminder'),
('license_expiry_warning_days', '90', 'NUMBER', 'Days before expiry to send warning'),
('max_students_per_site', '5', 'NUMBER', 'Default max students per site per block'),
('passing_grade', '70', 'NUMBER', 'Minimum passing grade percentage'),
('attendance_threshold', '80', 'NUMBER', 'Minimum attendance percentage');
`;

// Export schema
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DATABASE_SCHEMA, SAMPLE_DATA };
}
