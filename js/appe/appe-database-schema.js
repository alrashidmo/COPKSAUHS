/**
 * APPE MANAGEMENT SYSTEM - DATABASE SCHEMA
 * Complete relational database design for APPE management
 * Supports: Students, Preceptors, Sites, Rotations, Assessments, EPAs
 */

const DATABASE_SCHEMA = {
    
    // ================================
    // STUDENT MANAGEMENT
    // ================================
    students: {
        tableName: 'students',
        primaryKey: 'student_id',
        fields: {
            student_id: 'VARCHAR(20) PRIMARY KEY',
            university_id: 'VARCHAR(20) UNIQUE NOT NULL',
            first_name: 'VARCHAR(100) NOT NULL',
            last_name: 'VARCHAR(100) NOT NULL',
            email: 'VARCHAR(255) UNIQUE NOT NULL',
            phone: 'VARCHAR(20)',
            gender: 'ENUM("M", "F")',
            cohort: 'VARCHAR(10)', // e.g., "APPE 2026"
            gpa: 'DECIMAL(3,2)',
            risk_level: 'ENUM("GREEN", "YELLOW", "RED") DEFAULT "GREEN"',
            clearance_status: 'ENUM("CLEARED", "PENDING", "BLOCKED") DEFAULT "PENDING"',
            active_status: 'BOOLEAN DEFAULT TRUE',
            created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
            updated_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        },
        indexes: ['email', 'cohort', 'clearance_status', 'risk_level']
    },

    // ================================
    // CLEARANCE TRACKING
    // ================================
    student_clearances: {
        tableName: 'student_clearances',
        primaryKey: 'clearance_id',
        fields: {
            clearance_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            student_id: 'VARCHAR(20) NOT NULL',
            
            // Vaccinations
            hep_b_complete: 'BOOLEAN DEFAULT FALSE',
            hep_b_expiry: 'DATE',
            mmr_complete: 'BOOLEAN DEFAULT FALSE',
            varicella_complete: 'BOOLEAN DEFAULT FALSE',
            flu_vaccine: 'BOOLEAN DEFAULT FALSE',
            flu_vaccine_date: 'DATE',
            covid_vaccine: 'BOOLEAN DEFAULT FALSE',
            covid_vaccine_date: 'DATE',
            tb_test: 'BOOLEAN DEFAULT FALSE',
            tb_test_date: 'DATE',
            
            // Certifications
            bls_certified: 'BOOLEAN DEFAULT FALSE',
            bls_expiry: 'DATE',
            acls_certified: 'BOOLEAN DEFAULT FALSE',
            acls_expiry: 'DATE',
            osha_training: 'BOOLEAN DEFAULT FALSE',
            osha_date: 'DATE',
            hipaa_training: 'BOOLEAN DEFAULT FALSE',
            hipaa_date: 'DATE',
            
            // Legal & Insurance
            background_check: 'BOOLEAN DEFAULT FALSE',
            background_check_expiry: 'DATE',
            drug_screen: 'BOOLEAN DEFAULT FALSE',
            drug_screen_date: 'DATE',
            health_insurance: 'BOOLEAN DEFAULT FALSE',
            health_insurance_expiry: 'DATE',
            malpractice_insurance: 'BOOLEAN DEFAULT FALSE',
            malpractice_expiry: 'DATE',
            
            // Medical Clearance
            physical_exam: 'BOOLEAN DEFAULT FALSE',
            physical_exam_date: 'DATE',
            medical_clearance: 'BOOLEAN DEFAULT FALSE',
            medical_clearance_date: 'DATE',
            
            // Overall Status (auto-calculated)
            overall_status: 'ENUM("COMPLETE", "INCOMPLETE", "EXPIRED") DEFAULT "INCOMPLETE"',
            completion_percentage: 'INT DEFAULT 0',
            last_updated: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        },
        foreignKeys: {
            student_id: 'REFERENCES students(student_id) ON DELETE CASCADE'
        },
        indexes: ['student_id', 'overall_status']
    },

    // ================================
    // SITES & FACILITIES
    // ================================
    rotation_sites: {
        tableName: 'rotation_sites',
        primaryKey: 'site_id',
        fields: {
            site_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            site_name: 'VARCHAR(255) NOT NULL',
            site_type: 'ENUM("HOSPITAL", "CLINIC", "COMMUNITY", "AMBULATORY", "SPECIALTY") NOT NULL',
            address: 'TEXT',
            city: 'VARCHAR(100)',
            region: 'ENUM("RIYADH", "JEDDAH", "DAMMAM", "OTHER")',
            contact_person: 'VARCHAR(255)',
            contact_email: 'VARCHAR(255)',
            contact_phone: 'VARCHAR(20)',
            
            // Capacity Management
            max_students_per_rotation: 'INT DEFAULT 4',
            max_concurrent_students: 'INT DEFAULT 8',
            
            // Affiliation
            affiliation_active: 'BOOLEAN DEFAULT TRUE',
            affiliation_expiry: 'DATE',
            accreditation_status: 'ENUM("ACCREDITED", "PENDING", "EXPIRED") DEFAULT "ACCREDITED"',
            
            // Quality Metrics
            avg_student_rating: 'DECIMAL(3,2) DEFAULT 0.00',
            total_students_trained: 'INT DEFAULT 0',
            
            // Status
            active_status: 'BOOLEAN DEFAULT TRUE',
            created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
            updated_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        },
        indexes: ['site_type', 'region', 'active_status']
    },

    // ================================
    // PRECEPTOR MANAGEMENT
    // ================================
    preceptors: {
        tableName: 'preceptors',
        primaryKey: 'preceptor_id',
        fields: {
            preceptor_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            first_name: 'VARCHAR(100) NOT NULL',
            last_name: 'VARCHAR(100) NOT NULL',
            email: 'VARCHAR(255) UNIQUE NOT NULL',
            phone: 'VARCHAR(20)',
            
            // Credentials
            credentials: 'VARCHAR(50)', // PharmD, PhD, RPh
            license_number: 'VARCHAR(50)',
            license_expiry: 'DATE',
            license_status: 'ENUM("ACTIVE", "EXPIRED", "PENDING") DEFAULT "ACTIVE"',
            
            // Affiliation
            primary_site_id: 'INT',
            department: 'VARCHAR(255)',
            specialty: 'VARCHAR(255)',
            years_of_experience: 'INT',
            
            // Capacity
            max_students_per_rotation: 'INT DEFAULT 2',
            max_concurrent_students: 'INT DEFAULT 4',
            
            // Training & Compliance
            preceptor_training_complete: 'BOOLEAN DEFAULT FALSE',
            preceptor_training_date: 'DATE',
            preceptor_training_expiry: 'DATE',
            annual_evaluation_complete: 'BOOLEAN DEFAULT FALSE',
            annual_evaluation_date: 'DATE',
            
            // Performance
            avg_student_rating: 'DECIMAL(3,2) DEFAULT 0.00',
            total_students_mentored: 'INT DEFAULT 0',
            
            // Status
            active_status: 'BOOLEAN DEFAULT TRUE',
            availability_status: 'ENUM("AVAILABLE", "UNAVAILABLE", "LIMITED") DEFAULT "AVAILABLE"',
            created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
            updated_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        },
        foreignKeys: {
            primary_site_id: 'REFERENCES rotation_sites(site_id)'
        },
        indexes: ['email', 'specialty', 'active_status', 'license_status']
    },

    // ================================
    // ROTATION BLOCKS & SCHEDULING
    // ================================
    rotation_blocks: {
        tableName: 'rotation_blocks',
        primaryKey: 'block_id',
        fields: {
            block_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            block_name: 'VARCHAR(100) NOT NULL', // "Block 1", "Block 2"
            academic_year: 'VARCHAR(10) NOT NULL', // "2025-2026"
            start_date: 'DATE NOT NULL',
            end_date: 'DATE NOT NULL',
            duration_weeks: 'INT NOT NULL',
            block_type: 'ENUM("CORE", "ELECTIVE", "ADVANCED") NOT NULL',
            registration_open: 'DATE',
            registration_close: 'DATE',
            active_status: 'BOOLEAN DEFAULT TRUE'
        },
        indexes: ['academic_year', 'start_date']
    },

    rotation_types: {
        tableName: 'rotation_types',
        primaryKey: 'rotation_type_id',
        fields: {
            rotation_type_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            rotation_name: 'VARCHAR(255) NOT NULL', // "Internal Medicine", "ICU", "Cardiology"
            rotation_code: 'VARCHAR(20) UNIQUE NOT NULL', // "IM", "ICU", "CARD"
            rotation_category: 'ENUM("CORE", "ELECTIVE", "ADVANCED") NOT NULL',
            required_for_graduation: 'BOOLEAN DEFAULT FALSE',
            prerequisites: 'JSON', // Array of required prior rotations
            description: 'TEXT',
            learning_objectives: 'TEXT',
            active_status: 'BOOLEAN DEFAULT TRUE'
        },
        indexes: ['rotation_code', 'rotation_category']
    },

    // ================================
    // STUDENT ROTATION ASSIGNMENTS
    // ================================
    student_rotations: {
        tableName: 'student_rotations',
        primaryKey: 'assignment_id',
        fields: {
            assignment_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            student_id: 'VARCHAR(20) NOT NULL',
            block_id: 'INT NOT NULL',
            rotation_type_id: 'INT NOT NULL',
            site_id: 'INT NOT NULL',
            preceptor_id: 'INT NOT NULL',
            
            // Dates
            start_date: 'DATE NOT NULL',
            end_date: 'DATE NOT NULL',
            
            // Status
            assignment_status: 'ENUM("SCHEDULED", "ACTIVE", "COMPLETED", "WITHDRAWN", "FAILED") DEFAULT "SCHEDULED"',
            clearance_verified: 'BOOLEAN DEFAULT FALSE',
            orientation_complete: 'BOOLEAN DEFAULT FALSE',
            
            // Attendance
            total_days_required: 'INT',
            days_attended: 'INT DEFAULT 0',
            days_absent: 'INT DEFAULT 0',
            attendance_percentage: 'DECIMAL(5,2) DEFAULT 0.00',
            
            // Performance
            mid_rotation_grade: 'DECIMAL(5,2)',
            final_grade: 'DECIMAL(5,2)',
            overall_grade: 'DECIMAL(5,2)',
            letter_grade: 'VARCHAR(2)',
            pass_fail: 'ENUM("PASS", "FAIL", "INCOMPLETE")',
            
            // Flags
            has_incidents: 'BOOLEAN DEFAULT FALSE',
            has_absences_exceeding_limit: 'BOOLEAN DEFAULT FALSE',
            at_risk: 'BOOLEAN DEFAULT FALSE',
            
            created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
            updated_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        },
        foreignKeys: {
            student_id: 'REFERENCES students(student_id)',
            block_id: 'REFERENCES rotation_blocks(block_id)',
            rotation_type_id: 'REFERENCES rotation_types(rotation_type_id)',
            site_id: 'REFERENCES rotation_sites(site_id)',
            preceptor_id: 'REFERENCES preceptors(preceptor_id)'
        },
        indexes: ['student_id', 'block_id', 'assignment_status'],
        constraints: [
            'UNIQUE KEY unique_student_block (student_id, block_id)',
            'CHECK (end_date > start_date)',
            'CHECK (attendance_percentage >= 0 AND attendance_percentage <= 100)'
        ]
    },

    // ================================
    // EPA (Entrustable Professional Activities) FRAMEWORK
    // ================================
    epa_domains: {
        tableName: 'epa_domains',
        primaryKey: 'epa_id',
        fields: {
            epa_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            epa_code: 'VARCHAR(20) UNIQUE NOT NULL', // "EPA-1", "EPA-2"
            epa_title: 'VARCHAR(255) NOT NULL',
            epa_description: 'TEXT',
            domain_category: 'ENUM("PATIENT_CARE", "SYSTEMS", "PROFESSIONALISM", "COMMUNICATION") NOT NULL',
            
            // Mapping to Program Outcomes
            clo_mapping: 'JSON', // Array of CLO IDs
            plo_mapping: 'JSON', // Array of PLO IDs
            nqf_mapping: 'JSON', // Array of NQF IDs
            
            active_status: 'BOOLEAN DEFAULT TRUE'
        },
        indexes: ['epa_code', 'domain_category']
    },

    // ================================
    // EPA ASSESSMENTS
    // ================================
    epa_assessments: {
        tableName: 'epa_assessments',
        primaryKey: 'assessment_id',
        fields: {
            assessment_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            assignment_id: 'INT NOT NULL',
            student_id: 'VARCHAR(20) NOT NULL',
            epa_id: 'INT NOT NULL',
            preceptor_id: 'INT NOT NULL',
            
            // Entrustment Level (ACPE Standard)
            entrustment_level: 'INT NOT NULL', // 1-5
            // 1 = Observation only
            // 2 = Direct supervision
            // 3 = Indirect supervision  
            // 4 = Unsupervised
            // 5 = Supervise others
            
            assessment_type: 'ENUM("MID_ROTATION", "FINAL", "FORMATIVE") NOT NULL',
            assessment_date: 'DATE NOT NULL',
            
            // Performance Indicators
            knowledge_score: 'INT', // 1-5
            skills_score: 'INT', // 1-5
            attitude_score: 'INT', // 1-5
            overall_score: 'DECIMAL(3,2)',
            
            // Feedback
            strengths: 'TEXT',
            areas_for_improvement: 'TEXT',
            preceptor_comments: 'TEXT',
            
            created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
        },
        foreignKeys: {
            assignment_id: 'REFERENCES student_rotations(assignment_id)',
            student_id: 'REFERENCES students(student_id)',
            epa_id: 'REFERENCES epa_domains(epa_id)',
            preceptor_id: 'REFERENCES preceptors(preceptor_id)'
        },
        indexes: ['student_id', 'epa_id', 'assessment_type'],
        constraints: [
            'CHECK (entrustment_level BETWEEN 1 AND 5)',
            'CHECK (knowledge_score BETWEEN 1 AND 5)',
            'CHECK (skills_score BETWEEN 1 AND 5)',
            'CHECK (attitude_score BETWEEN 1 AND 5)'
        ]
    },

    // ================================
    // EVALUATIONS
    // ================================
    rotation_evaluations: {
        tableName: 'rotation_evaluations',
        primaryKey: 'evaluation_id',
        fields: {
            evaluation_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            assignment_id: 'INT NOT NULL',
            student_id: 'VARCHAR(20) NOT NULL',
            preceptor_id: 'INT NOT NULL',
            
            evaluation_type: 'ENUM("MID_ROTATION", "FINAL") NOT NULL',
            evaluation_status: 'ENUM("PENDING", "IN_PROGRESS", "SUBMITTED", "REVIEWED") DEFAULT "PENDING"',
            
            // Due Dates
            due_date: 'DATE NOT NULL',
            submitted_date: 'DATETIME',
            reviewed_date: 'DATETIME',
            
            // Rubric Scores (1-5 scale)
            clinical_knowledge: 'INT',
            problem_solving: 'INT',
            communication_skills: 'INT',
            professionalism: 'INT',
            time_management: 'INT',
            teamwork: 'INT',
            patient_care: 'INT',
            documentation: 'INT',
            
            // Calculated
            total_score: 'DECIMAL(5,2)',
            percentage: 'DECIMAL(5,2)',
            letter_grade: 'VARCHAR(2)',
            
            // Qualitative
            strengths: 'TEXT',
            weaknesses: 'TEXT',
            recommendations: 'TEXT',
            overall_comments: 'TEXT',
            
            created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
            updated_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        },
        foreignKeys: {
            assignment_id: 'REFERENCES student_rotations(assignment_id)',
            student_id: 'REFERENCES students(student_id)',
            preceptor_id: 'REFERENCES preceptors(preceptor_id)'
        },
        indexes: ['student_id', 'evaluation_type', 'evaluation_status', 'due_date']
    },

    // ================================
    // ATTENDANCE & INCIDENTS
    // ================================
    attendance_records: {
        tableName: 'attendance_records',
        primaryKey: 'attendance_id',
        fields: {
            attendance_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            assignment_id: 'INT NOT NULL',
            student_id: 'VARCHAR(20) NOT NULL',
            attendance_date: 'DATE NOT NULL',
            status: 'ENUM("PRESENT", "ABSENT", "EXCUSED", "LATE", "SICK_LEAVE") NOT NULL',
            reason: 'TEXT',
            documented: 'BOOLEAN DEFAULT FALSE',
            approved_by: 'VARCHAR(255)',
            created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
        },
        foreignKeys: {
            assignment_id: 'REFERENCES student_rotations(assignment_id)',
            student_id: 'REFERENCES students(student_id)'
        },
        indexes: ['assignment_id', 'student_id', 'attendance_date', 'status']
    },

    incident_reports: {
        tableName: 'incident_reports',
        primaryKey: 'incident_id',
        fields: {
            incident_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            assignment_id: 'INT NOT NULL',
            student_id: 'VARCHAR(20) NOT NULL',
            reported_by: 'VARCHAR(255) NOT NULL',
            incident_date: 'DATE NOT NULL',
            incident_type: 'ENUM("PROFESSIONALISM", "SAFETY", "COMPETENCE", "ATTENDANCE", "ETHICS", "OTHER") NOT NULL',
            severity: 'ENUM("LOW", "MODERATE", "HIGH", "CRITICAL") NOT NULL',
            description: 'TEXT NOT NULL',
            action_taken: 'TEXT',
            follow_up_required: 'BOOLEAN DEFAULT FALSE',
            resolution_status: 'ENUM("OPEN", "INVESTIGATING", "RESOLVED", "ESCALATED") DEFAULT "OPEN"',
            created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
            updated_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
        },
        foreignKeys: {
            assignment_id: 'REFERENCES student_rotations(assignment_id)',
            student_id: 'REFERENCES students(student_id)'
        },
        indexes: ['student_id', 'incident_type', 'severity', 'resolution_status']
    },

    // ================================
    // SURVEYS & QUALITY
    // ================================
    student_surveys: {
        tableName: 'student_surveys',
        primaryKey: 'survey_id',
        fields: {
            survey_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            assignment_id: 'INT NOT NULL',
            student_id: 'VARCHAR(20) NOT NULL',
            
            // Ratings (1-5)
            preceptor_rating: 'INT',
            site_rating: 'INT',
            learning_experience_rating: 'INT',
            resource_availability_rating: 'INT',
            clinical_exposure_rating: 'INT',
            
            // Open-ended
            strengths: 'TEXT',
            improvements: 'TEXT',
            additional_comments: 'TEXT',
            
            submitted_date: 'DATETIME',
            created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
        },
        foreignKeys: {
            assignment_id: 'REFERENCES student_rotations(assignment_id)',
            student_id: 'REFERENCES students(student_id)'
        },
        indexes: ['assignment_id', 'student_id']
    },

    // ================================
    // NOTIFICATIONS & AUTOMATION
    // ================================
    notifications: {
        tableName: 'notifications',
        primaryKey: 'notification_id',
        fields: {
            notification_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            user_id: 'VARCHAR(255) NOT NULL',
            user_type: 'ENUM("STUDENT", "PRECEPTOR", "ADMIN") NOT NULL',
            notification_type: 'ENUM("CLEARANCE", "EVALUATION", "ROTATION", "INCIDENT", "SYSTEM") NOT NULL',
            priority: 'ENUM("LOW", "MEDIUM", "HIGH", "URGENT") DEFAULT "MEDIUM"',
            title: 'VARCHAR(255) NOT NULL',
            message: 'TEXT NOT NULL',
            action_required: 'BOOLEAN DEFAULT FALSE',
            action_url: 'VARCHAR(255)',
            read_status: 'BOOLEAN DEFAULT FALSE',
            sent_date: 'DATETIME DEFAULT CURRENT_TIMESTAMP',
            read_date: 'DATETIME'
        },
        indexes: ['user_id', 'user_type', 'read_status', 'notification_type']
    },

    automation_triggers: {
        tableName: 'automation_triggers',
        primaryKey: 'trigger_id',
        fields: {
            trigger_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            trigger_name: 'VARCHAR(255) NOT NULL',
            trigger_type: 'ENUM("CLEARANCE_EXPIRY", "EVALUATION_DUE", "ROTATION_START", "LICENSE_EXPIRY", "ATTENDANCE_THRESHOLD") NOT NULL',
            trigger_condition: 'TEXT', // JSON condition
            action_to_execute: 'TEXT', // JSON action
            days_before_event: 'INT DEFAULT 0',
            active_status: 'BOOLEAN DEFAULT TRUE',
            last_executed: 'DATETIME',
            execution_count: 'INT DEFAULT 0'
        },
        indexes: ['trigger_type', 'active_status']
    },

    // ================================
    // AUDIT TRAIL
    // ================================
    audit_log: {
        tableName: 'audit_log',
        primaryKey: 'log_id',
        fields: {
            log_id: 'INT AUTO_INCREMENT PRIMARY KEY',
            user_id: 'VARCHAR(255) NOT NULL',
            user_type: 'ENUM("STUDENT", "PRECEPTOR", "ADMIN", "SYSTEM") NOT NULL',
            action_type: 'VARCHAR(100) NOT NULL',
            table_affected: 'VARCHAR(100)',
            record_id: 'VARCHAR(100)',
            old_value: 'JSON',
            new_value: 'JSON',
            ip_address: 'VARCHAR(45)',
            timestamp: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
        },
        indexes: ['user_id', 'action_type', 'timestamp']
    }
};

// Export schema
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATABASE_SCHEMA;
}
