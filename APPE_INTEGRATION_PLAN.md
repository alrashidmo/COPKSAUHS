# 🎓 APPE Experience Hub - Comprehensive Integration Plan
**Date:** February 9, 2026  
**Version:** 1.0  
**Target System:** KSAU-HS College of Pharmacy Student Portal  

---

## EXECUTIVE SUMMARY

The APPE Experience Hub is a **CoreLMS-style rotation matching ecosystem** integrated as a new tab within the existing Student Portal. It handles 10 blocks of 4-week rotations, enforces core rotation completion across the program, and implements automated student-preceptor-offering matching.

**Key Decision:** `OPTION 1 - EMBEDDED MODULE` ✅ RECOMMENDED

**Why:** Existing portal already has unified auth, role-based routing, and database infrastructure. Adding APPE as embedded service minimizes operational complexity, keeps user identity centralized, and allows real-time integration with existing student records.

---

## SECTION A: RECOMMENDED INTEGRATION ARCHITECTURE

### **OPTION 1: Embedded Module (SELECTED ✅)**

**Architecture:**
```
Existing Student Portal
├── Auth Layer (JWT + Session)
├── Database (Unified Schema)
├── API Gateway
│   ├── Clinical Affairs APIs
│   ├── Academic Affairs APIs
│   ├── Student Portal APIs
│   └── [NEW] APPE Module APIs  ← Add here
└── Frontend
    ├── Navigation Tabs
    ├── Student Portal Tab
    └── [NEW] 🎓 APPE Hub Tab  ← Add sidebar item
```

**Username Identity Flow:**
1. **Student logs in** → existing `AuthSystem.login(student_id, password)`
2. **Portal validates** → returns `{ student_id, user_id, role:'student', ...profile }`
3. **JWT/Session issued** with `student_id` claim
4. **APPE APIs validate** JWT and extract `student_id` from token
5. **APPE services** query `appe_*` tables using authenticated `student_id`

**Pros:**
- Single authentication source of truth
- Direct database access, no network latency
- Existing infrastructure + patterns (no new deployment)
- Easy audit logging via single database
- Transaction consistency (same DB)

**Cons:**
- Backend codebase growth
- APPE logic tightly coupled to portal services
- Scaling individual service harder

**Migration Plan:**
1. Add new tables to existing database (schema migration)
2. Add APPE controllers/routes to backend (new files in `/api/handlers`)
3. Add APPE services in `/api/services` (business logic isolation)
4. Add new tab to frontend navigation
5. Wire routes: `/student/appe/*` and `/admin/appe/*`
6. Test with existing auth middleware

---

## SECTION B: DATABASE SCHEMA (NEW TABLES ONLY)

### **Assumptions:**
- Existing tables: `users` (id, user_id, email, role, ...profile)
- Student identifier available in JWT as `student_id` or `user_id`
- Existing `users.id` or `users.user_id` is stable identifier

### **Table Definitions**

```sql
-- ===== APPE TERM / BLOCK CONFIGURATION =====
CREATE TABLE appe_terms (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,          -- "Fall 2026 APPE"
    year INT NOT NULL,                    -- 2026
    academic_year VARCHAR(20),            -- "2026-2027"
    submission_open DATETIME NOT NULL,    -- Asia/Riyadh TZ
    submission_close DATETIME NOT NULL,   -- Asia/Riyadh TZ
    matching_date DATETIME,               -- When matching runs
    assignment_publish_date DATETIME,     -- When assignments go live for students
    status ENUM('draft','active','closed','archived') DEFAULT 'draft',
    timezone VARCHAR(50) DEFAULT 'Asia/Riyadh',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by INT,                       -- user_id of admin who created
    FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE TABLE appe_blocks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    term_id INT NOT NULL,
    block_number INT NOT NULL,            -- 1..10
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    is_locked BOOLEAN DEFAULT FALSE,      -- prevent changes after assignments published
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (term_id) REFERENCES appe_terms(id),
    UNIQUE KEY (term_id, block_number)
);

-- ===== ROTATION & SITE CATALOG =====
CREATE TABLE appe_rotations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(20) NOT NULL UNIQUE,     -- "IM", "ICU", "NEPH", etc.
    title VARCHAR(100) NOT NULL,
    category ENUM('core','elective') NOT NULL DEFAULT 'elective',
    is_required BOOLEAN DEFAULT FALSE,    -- true if core
    description TEXT,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX (category)
);

CREATE TABLE appe_sites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    city VARCHAR(50),
    contact_email VARCHAR(100),
    contact_phone VARCHAR(20),
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ===== OFFERINGS (Rotation + Site + Block + Capacity) =====
CREATE TABLE appe_offerings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    term_id INT NOT NULL,
    block_id INT NOT NULL,
    rotation_id INT NOT NULL,
    site_id INT NOT NULL,
    capacity_total INT NOT NULL,          -- max students
    capacity_filled INT DEFAULT 0,        -- track how many assigned
    active BOOLEAN DEFAULT TRUE,
    notes TEXT,
    config_status ENUM('draft','published') DEFAULT 'draft',  -- for admin editing
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (term_id) REFERENCES appe_terms(id),
    FOREIGN KEY (block_id) REFERENCES appe_blocks(id),
    FOREIGN KEY (rotation_id) REFERENCES appe_rotations(id),
    FOREIGN KEY (site_id) REFERENCES appe_sites(id),
    UNIQUE KEY (term_id, block_id, rotation_id, site_id),
    INDEX (rotation_id, site_id)
);

-- ===== PRECEPTORS =====
CREATE TABLE appe_preceptors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(50),                    -- Dr., Mr., Prof., etc.
    email VARCHAR(100),
    phone VARCHAR(20),
    site_id INT,
    active BOOLEAN DEFAULT TRUE,
    min_students INT DEFAULT 1,           -- minimum to assign to this preceptor
    max_students INT DEFAULT 5,           -- max students per block per preceptor
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (site_id) REFERENCES appe_sites(id),
    INDEX (site_id)
);

-- ===== PRECEPTOR-ROTATION MAPPING =====
CREATE TABLE appe_preceptor_rotation_map (
    id INT PRIMARY KEY AUTO_INCREMENT,
    preceptor_id INT NOT NULL,
    rotation_id INT NOT NULL,
    site_id INT,                          -- site context where preceptor teaches this rotation
    expertise_level ENUM('expert','experienced','learning') DEFAULT 'experienced',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (preceptor_id) REFERENCES appe_preceptors(id),
    FOREIGN KEY (rotation_id) REFERENCES appe_rotations(id),
    FOREIGN KEY (site_id) REFERENCES appe_sites(id),
    UNIQUE KEY (preceptor_id, rotation_id, site_id)
);

-- ===== PRECEPTOR AVAILABILITY (per block) =====
CREATE TABLE appe_preceptor_availability (
    id INT PRIMARY KEY AUTO_INCREMENT,
    preceptor_id INT NOT NULL,
    term_id INT NOT NULL,
    block_id INT NOT NULL,
    available BOOLEAN DEFAULT TRUE,
    max_students_this_block INT DEFAULT 5,  -- override global max
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (preceptor_id) REFERENCES appe_preceptors(id),
    FOREIGN KEY (term_id) REFERENCES appe_terms(id),
    FOREIGN KEY (block_id) REFERENCES appe_blocks(id),
    UNIQUE KEY (preceptor_id, term_id, block_id)
);

-- ===== STUDENT PREFERENCES (SUBMISSION) =====
CREATE TABLE appe_preference_submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id VARCHAR(50) NOT NULL,      -- reference to existing student user_id
    term_id INT NOT NULL,
    status ENUM('draft','submitted','locked','assigned') DEFAULT 'draft',
    submitted_at DATETIME,
    submitted_ip VARCHAR(45),             -- audit trail
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    version INT DEFAULT 0,                -- for conflict detection
    notes TEXT,                           -- only when submitted/rejected
    FOREIGN KEY (term_id) REFERENCES appe_terms(id),
    UNIQUE KEY (student_id, term_id),
    INDEX (status, term_id)
);

-- ===== PREFERENCE ITEMS (per block rankings) =====
CREATE TABLE appe_preference_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    submission_id INT NOT NULL,
    block_id INT NOT NULL,
    offering_id INT NOT NULL,
    rank INT NOT NULL,                    -- 1 = first choice, 2 = second, etc.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (submission_id) REFERENCES appe_preference_submissions(id) ON DELETE CASCADE,
    FOREIGN KEY (block_id) REFERENCES appe_blocks(id),
    FOREIGN KEY (offering_id) REFERENCES appe_offerings(id),
    UNIQUE KEY (submission_id, block_id, rank),
    INDEX (offering_id)
);

-- ===== ASSIGNMENTS (RESULT OF MATCHING) =====
CREATE TABLE appe_assignments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id VARCHAR(50) NOT NULL,
    term_id INT NOT NULL,
    block_id INT NOT NULL,
    offering_id INT NOT NULL,
    preceptor_id INT,                     -- NULL if admin needs to assign or preceptor not yet mapped
    status ENUM('draft','published','override','cancelled') DEFAULT 'draft',
    assignment_method ENUM('auto_match','admin_manual','override') DEFAULT 'auto_match',
    published_at DATETIME,
    published_by INT,                     -- user_id of who published
    reason_for_override TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (term_id) REFERENCES appe_terms(id),
    FOREIGN KEY (block_id) REFERENCES appe_blocks(id),
    FOREIGN KEY (offering_id) REFERENCES appe_offerings(id),
    FOREIGN KEY (preceptor_id) REFERENCES appe_preceptors(id),
    FOREIGN KEY (published_by) REFERENCES users(id),
    UNIQUE KEY (student_id, term_id, block_id),  -- one assignment per student per block
    INDEX (student_id, term_id),
    INDEX (offering_id, status)
);

-- ===== CORE ROTATION TRACKING (convenience table) =====
CREATE TABLE appe_core_checklist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id VARCHAR(50) NOT NULL,
    term_id INT NOT NULL,
    core_rotation_id INT NOT NULL,
    assigned_block_id INT,
    status ENUM('pending','assigned','completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (term_id) REFERENCES appe_terms(id),
    FOREIGN KEY (core_rotation_id) REFERENCES appe_rotations(id),
    FOREIGN KEY (assigned_block_id) REFERENCES appe_blocks(id),
    UNIQUE KEY (student_id, term_id, core_rotation_id)
);

-- ===== AUDIT LOGS =====
CREATE TABLE appe_audit_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    actor_user_id INT,                    -- who made the change
    action VARCHAR(50),                   -- 'create', 'update', 'delete', 'publish', 'override'
    entity VARCHAR(50),                   -- 'offering', 'assignment', 'preceptor', etc.
    entity_id INT,
    entity_key VARCHAR(100),              -- e.g., "offering_15", "assignment_123"
    before_json LONGTEXT,                 -- JSON snapshot before change
    after_json LONGTEXT,                  -- JSON snapshot after change
    reason TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (actor_user_id) REFERENCES users(id),
    INDEX (entity, entity_id, created_at),
    INDEX (created_at, action)
);
```

---

## SECTION C: DATA SEED PLAN

### **Phase 1: Core Rotations & Electives**
```sql
-- Core Rotations (4 required)
INSERT INTO appe_rotations (code, title, category, is_required, active) VALUES
('IM', 'Internal Medicine', 'core', TRUE, TRUE),
('ICU', 'Critical Care', 'core', TRUE, TRUE),
('COMMUNITY', 'Advanced Community Pharmacy', 'core', TRUE, TRUE),
('INSTITUTIONAL', 'Advanced Institutional/Inpatient Pharmacy', 'core', TRUE, TRUE);

-- Elective Rotations (22)
INSERT INTO appe_rotations (code, title, category, is_required, active) VALUES
('NEPH', 'Nephrology', 'elective', FALSE, TRUE),
('SOT', 'Solid Organ Transplant', 'elective', FALSE, TRUE),
('HEM_ONC', 'Oncology/Hematology', 'elective', FALSE, TRUE),
('PED', 'Pediatrics', 'elective', FALSE, TRUE),
-- ... (continue for all 22 electives)
('RESEARCH', 'Research', 'elective', FALSE, TRUE),
('MRC', 'Medical Referral Center', 'elective', FALSE, TRUE);
```

### **Phase 2: Sites**
```sql
INSERT INTO appe_sites (name, city, active) VALUES
('KAUH - Main Campus', 'Riyadh', TRUE),
('KAUH - ICU Unit', 'Riyadh', TRUE),
('KAUH - Community Pharmacy', 'Riyadh', TRUE),
('KAUH - Inpatient Pharmacy', 'Riyadh', TRUE),
-- ... additional sites
('Northern Region Hospital', 'Dammam', TRUE);
```

### **Phase 3: Preceptors (By Rotation)**

```sql
-- Internal Medicine Preceptors
INSERT INTO appe_preceptors (name, title, email, site_id, active) VALUES
('Dr. Majed Alyami', 'Dr.', 'alyami@kauh.edu.sa', 1, TRUE),
('Dr. Omar Alshaya', 'Dr.', 'alshaya@kauh.edu.sa', 1, TRUE),
-- ... all 11 IM preceptors

-- ICU Preceptors
INSERT INTO appe_preceptors (name, title, email, site_id, active) VALUES
('Prof. Shmeylan Al Harbi', 'Prof.', 'harbi@kauh.edu.sa', 2, TRUE),
('Dr. Abdulrahman Alshaya', 'Dr.', 'alshaya_r@kauh.edu.sa', 2, TRUE),
-- ... all 10 ICU preceptors

-- ... continue for all rotations
```

### **Phase 4: Preceptor-Rotation Mapping**
```sql
-- IM Preceptors → IM Rotation
INSERT INTO appe_preceptor_rotation_map (preceptor_id, rotation_id, site_id) SELECT
    p.id, r.id, s.id
FROM appe_preceptors p
JOIN appe_rotations r ON r.code = 'IM'
JOIN appe_sites s WHERE p.site_id = s.id
AND p.name IN ('Dr. Majed Alyami', 'Dr. Omar Alshaya', ...);

-- ... repeat for all rotation-preceptor groups
```

### **Phase 5: Admin APPE Term**
```sql
INSERT INTO appe_terms (name, year, academic_year, submission_open, submission_close, timezone) VALUES
('APPE Fall 2026', 2026, '2026-2027', 
 '2026-04-01 09:00:00', 
 '2026-04-30 23:59:00', 
 'Asia/Riyadh');

-- Get term_id from insert, then create 10 blocks
INSERT INTO appe_blocks (term_id, block_number, start_date, end_date) 
SELECT id, 1, '2026-05-11', '2026-06-05' FROM appe_terms WHERE name = 'APPE Fall 2026'
UNION ALL
SELECT id, 2, '2026-06-08', '2026-07-03' FROM appe_terms WHERE name = 'APPE Fall 2026'
-- ... blocks 3-10
```

---

## SECTION D: API SPECIFICATION

### **Authentication Header (All Endpoints)**
```
Authorization: Bearer <JWT_TOKEN>
X-Student-ID: <student_id>  (extracted from JWT claim)
```

---

### **STUDENT ENDPOINTS**

#### **1. GET /api/appe/terms/active**
**Purpose:** Fetch current active APPE term and timeline  
**Auth:** Student  
**Response:**
```json
{
  "success": true,
  "data": {
    "term_id": 1,
    "name": "APPE Fall 2026",
    "academic_year": "2026-2027",
    "submission_open": "2026-04-01T09:00:00Z",
    "submission_close": "2026-04-30T23:59:00Z",
    "assignment_publish_date": "2026-05-10T00:00:00Z",
    "status": "active",
    "blocks_count": 10,
    "core_rotations": ["IM", "ICU", "COMMUNITY", "INSTITUTIONAL"],
    "timezone": "Asia/Riyadh"
  }
}
```

#### **2. GET /api/appe/blocks?term_id=1**
**Purpose:** Fetch all blocks for a term  
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "block_id": 1,
      "block_number": 1,
      "start_date": "2026-05-11",
      "end_date": "2026-06-05",
      "is_locked": false
    },
    ...
  ]
}
```

#### **3. GET /api/appe/offerings?term_id=1&block_id=1**
**Purpose:** List available rotations for a specific block  
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "offering_id": 15,
      "rotation_code": "IM",
      "rotation_title": "Internal Medicine",
      "site_name": "KAUH - Main Campus",
      "capacity_total": 8,
      "capacity_filled": 3,
      "available_slots": 5,
      "category": "core"
    },
    {
      "offering_id": 16,
      "rotation_code": "SOT",
      "rotation_title": "Solid Organ Transplant",
      "site_name": "KAUH - Main Campus",
      "capacity_total": 3,
      "capacity_filled": 0,
      "available_slots": 3,
      "category": "elective"
    }
  ]
}
```

#### **4. GET /api/appe/preferences/draft?term_id=1**
**Purpose:** Fetch student's draft preferences  
**Response:**
```json
{
  "success": true,
  "data": {
    "submission_id": 42,
    "student_id": "S441210049",
    "status": "draft",
    "version": 2,
    "blocks": [
      {
        "block_id": 1,
        "block_number": 1,
        "preferences": [
          {
            "offering_id": 15,
            "rotation_title": "Internal Medicine",
            "rank": 1
          },
          {
            "offering_id": 18,
            "rotation_title": "ICU",
            "rank": 2
          }
        ]
      },
      ...
    ],
    "core_completion_status": {
      "IM": "scheduled_block_3",
      "ICU": "pending",
      "COMMUNITY": "pending",
      "INSTITUTIONAL": "pending"
    }
  }
}
```

#### **5. POST /api/appe/preferences/save-draft**
**Purpose:** Save preferences as draft (autosave)  
**Method:** POST  
**Body:**
```json
{
  "term_id": 1,
  "blocks": [
    {
      "block_id": 1,
      "preferences": [
        { "offering_id": 15, "rank": 1 },
        { "offering_id": 18, "rank": 2 },
        { "offering_id": 22, "rank": 3 }
      ]
    },
    ...
  ]
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "submission_id": 42,
    "status": "draft",
    "version": 3,
    "saved_at": "2026-04-15T14:23:00Z",
    "auto_save_enabled": true
  }
}
```

#### **6. POST /api/appe/preferences/submit**
**Purpose:** Finalize and submit preferences (locked)  
**Method:** POST  
**Body:**
```json
{
  "term_id": 1,
  "submission_id": 42,
  "confirm": true
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "submission_id": 42,
    "status": "submitted",
    "submitted_at": "2026-04-30T10:00:00Z",
    "receipt_number": "APPE-2026-S441210049-001",
    "locked": true,
    "message": "Your preferences have been locked. No edits allowed after submission."
  },
  "validation": {
    "core_requirements_met": true,
    "blocks_filled": 10,
    "warnings": []
  }
}
```

#### **7. GET /api/appe/assignments?term_id=1** (After Publish)
**Purpose:** View assigned rotations (only after assignments published)  
**Auth:** Student  
**Response:**
```json
{
  "success": true,
  "data": {
    "term_id": 1,
    "published": true,
    "published_date": "2026-05-10T08:00:00Z",
    "assignments": [
      {
        "block_id": 1,
        "block_number": 1,
        "start_date": "2026-05-11",
        "end_date": "2026-06-05",
        "rotation_code": "IM",
        "rotation_title": "Internal Medicine",
        "site_name": "KAUH - Main Campus",
        "preceptor_name": "Dr. Majed Alyami",
        "preceptor_email": "alyami@kauh.edu.sa",
        "preceptor_phone": "+966-11-XXXXXX",
        "assignment_status": "published"
      },
      ...
    ]
  }
}
```

---

### **ADMIN ENDPOINTS**

#### **1. GET /admin/api/appe/terms**
**Purpose:** List all APPE terms  
**Auth:** Admin  
**Query:** `?status=active&year=2026`  
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "term_id": 1,
      "name": "APPE Fall 2026",
      "year": 2026,
      "status": "active",
      "submission_open": "2026-04-01T09:00:00Z",
      "submission_close": "2026-04-30T23:59:00Z",
      "students_submitted": 145,
      "blocks_count": 10
    }
  ],
  "paging": { "page": 1, "limit": 20, "total": 3 }
}
```

#### **2. POST /admin/api/appe/terms**
**Purpose:** Create new APPE term  
**Body:**
```json
{
  "name": "APPE Spring 2027",
  "year": 2027,
  "academic_year": "2026-2027",
  "submission_open": "2027-01-01T09:00:00",
  "submission_close": "2027-01-31T23:59:00",
  "timezone": "Asia/Riyadh"
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "term_id": 2,
    "name": "APPE Spring 2027",
    "status": "draft",
    "created_at": "2026-02-09T15:00:00Z"
  }
}
```

#### **3. PATCH /admin/api/appe/terms/{id}**
**Purpose:** Update term (draft mode)  
**Body:**
```json
{
  "submission_close": "2027-02-15T23:59:00",
  "notes": "Extended deadline per academic office request"
}
```

#### **4. GET /admin/api/appe/offerings?term_id=1&filters=active**
**Purpose:** List all offerings with inline edit support  
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "offering_id": 15,
      "term_id": 1,
      "block_number": 1,
      "rotation_code": "IM",
      "rotation_title": "Internal Medicine",
      "site_name": "KAUH - Main Campus",
      "capacity_total": 8,
      "capacity_filled": 3,
      "available_slots": 5,
      "active": true,
      "config_status": "published",
      "notes": "Main IM rotation"
    },
    ...
  ]
}
```

#### **5. PATCH /admin/api/appe/offerings/{id}** (Inline Edit)
**Purpose:** Quick edit of offering capacity, notes  
**Body:**
```json
{
  "capacity_total": 10,
  "notes": "Increased capacity - approved by dept head",
  "active": true,
  "reason": "Increased student demand"
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "offering_id": 15,
    "updated_fields": ["capacity_total", "notes"],
    "config_status": "draft",
    "warning": "Changes saved as DRAFT. Click 'Publish Changes' to apply.",
    "audit_id": 504
  }
}
```

#### **6. POST /admin/api/appe/offerings/bulk-update**
**Purpose:** Bulk edit multiple offerings  
**Body:**
```json
{
  "offering_ids": [15, 16, 17],
  "updates": {
    "capacity_total": 12
  },
  "reason": "System-wide capacity increase approved"
}
```

#### **7. GET /admin/api/appe/preceptor-availability?term_id=1&block_id=1**
**Purpose:** View preceptor availability grid  
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "availability_id": 88,
      "preceptor_id": 5,
      "preceptor_name": "Dr. Majed Alyami",
      "rotation_codes": ["IM"],
      "available": true,
      "max_students_this_block": 5,
      "current_assignments": 2,
      "remaining_slots": 3,
      "notes": "Available, limited to 5 students max"
    },
    ...
  ]
}
```

#### **8. PATCH /admin/api/appe/preceptor-availability/{id}** (Inline Edit)
**Purpose:** Modify preceptor availability for a block  
**Body:**
```json
{
  "available": true,
  "max_students_this_block": 3,
  "notes": "Limited availability due to conference",
  "reason": "Preceptor requested reduced load"
}
```

#### **9. GET /admin/api/appe/submissions?term_id=1&status=submitted&page=1**
**Purpose:** View all student preference submissions  
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "submission_id": 42,
      "student_id": "S441210049",
      "student_name": "Ahmed Al-Rashid",
      "status": "submitted",
      "submitted_at": "2026-04-30T10:00:00Z",
      "preferences_count": 10,
      "core_requirements_met": true
    },
    ...
  ],
  "stats": {
    "total_submitted": 145,
    "total_draft": 12,
    "total_locked": 145,
    "deadline_passed": true
  }
}
```

#### **10. POST /admin/api/appe/matching/run**
**Purpose:** Execute matching algorithm  
**Body:**
```json
{
  "term_id": 1,
  "mode": "automated",
  "fairness_mode": true,
  "allow_override": false,
  "dry_run": true
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "matching_run_id": 201,
    "mode": "automated",
    "dry_run": true,
    "stats": {
      "students_processed": 145,
      "assignments_created": 1450,
      "unmatched_students": 0,
      "assignments_requiring_admin": 5,
      "core_requirements_satisfied": 145,
      "satisfaction_score": 0.92
    },
    "warnings": [
      "5 students: No available preceptor for assigned rotation in block 7",
      "2 students: Offering capacity exceeded; manual override required"
    ],
    "dry_run_message": "This is a simulation. Click 'Confirm Matching' to apply."
  }
}
```

#### **11. PATCH /admin/api/appe/assignments/{id}** (Override)
**Purpose:** Manually override an assignment  
**Body:**
```json
{
  "offering_id": 16,
  "preceptor_id": 8,
  "reason": "Student requested change; preceptor approved"
}
```

#### **12. POST /admin/api/appe/assignments/publish**
**Purpose:** Publish all assignments, make visible to students  
**Body:**
```json
{
  "term_id": 1,
  "confirm": true,
  "message_to_students": "Your final APPE rotations have been assigned. Please review your schedule carefully."
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "published_count": 1450,
    "published_at": "2026-05-10T08:00:00Z",
    "published_by": "admin_user_123",
    "status": "published",
    "students_notified": 145
  }
}
```

#### **13. GET /admin/api/appe/audit-logs**
**Purpose:** View audit trail of all APPE actions  
**Query:** `?entity=offering&start_date=2026-02-01&end_date=2026-02-09`  
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "audit_id": 504,
      "action": "update",
      "entity": "offering",
      "entity_id": 15,
      "actor_name": "Dr. Sumaira Al-Malik",
      "before": { "capacity_total": 8 },
      "after": { "capacity_total": 10 },
      "reason": "Increased student demand",
      "created_at": "2026-02-09T14:00:00Z"
    }
  ]
}
```

---

## SECTION E: MATCHING LOGIC

### **Mode 1: Greedy Feasible Suggestion**

**Pseudocode:**
```pseudocode
FUNCTION greedyMatch(term_id, students, preferences):
  assignments = []
  unmatched = []
  
  FOR EACH student IN students:
    FOR EACH block IN blocks[1..10]:
      student_prefs = preferences[student][block].ranked_offerings
      assigned = FALSE
      
      FOR EACH offering IN student_prefs (sorted by rank):
        IF offering.capacity_filled < offering.capacity_total THEN
          // Check if rotation + preceptor available
          available_preceptors = getAvailablePreceptors(
            offering.rotation_id,
            offering.site_id,
            block.id,
            term_id
          )
          
          IF available_preceptors.length > 0 THEN
            // Assign to first available preceptor
            preceptor = available_preceptors[0]
            
            assignment = {
              student_id: student.id,
              block_id: block.id,
              offering_id: offering.id,
              preceptor_id: preceptor.id,
              status: 'draft'
            }
            
            assignments.append(assignment)
            offering.capacity_filled += 1
            preceptor.students_in_block += 1
            assigned = TRUE
            BREAK
          ELSE
            // Check if offering allows null preceptor (admin will assign)
            IF offering.rotation.has_no_preceptor_mapping THEN
              assignment = {
                student_id: student.id,
                block_id: block.id,
                offering_id: offering.id,
                preceptor_id: NULL,
                status: 'pending_admin_assignment'
              }
              assignments.append(assignment)
              offering.capacity_filled += 1
              assigned = TRUE
              BREAK
            END IF
          END IF
        END IF
      END FOR
      
      IF NOT assigned THEN
        unmatched.append({
          student_id: student.id,
          block_id: block.id,
          reason: 'No available offering slots matching preferences'
        })
      END IF
    END FOR
  END FOR
  
  RETURN {
    assignments: assignments,
    unmatched: unmatched,
    mismatches_count: unmatched.length
  }
END FUNCTION

FUNCTION getAvailablePreceptors(rotation_id, site_id, block_id, term_id):
  preceptors = []
  
  mappings = query appe_preceptor_rotation_map 
    WHERE rotation_id = ? AND site_id = ?
  
  FOR EACH mapping IN mappings:
    preceptor_id = mapping.preceptor_id
    
    availability = query appe_preceptor_availability
      WHERE preceptor_id = ? AND block_id = ? AND term_id = ?
    
    IF availability.available = TRUE 
       AND availability.max_students_this_block > assignments_count THEN
      preceptors.append(preceptor_id)
    END IF
  END FOR
  
  RETURN preceptors
END FUNCTION
```

**Time Complexity:** O(n × b × o × p) where:
- n = students
- b = blocks (10)
- o = offerings per block (~30-50)
- p = preceptors per offering (~3-10)

---

### **Mode 2: Weighted Matching (Constraint-based)**

**Approach:** Model as a bipartite matching with weights + constraints:

```pseudocode
FUNCTION weightedMatch(term_id, students, preferences, fairness_mode):
  graph = buildBipartiteGraph(students, offerings, preferences, constraints)
  
  // Objective: Maximize preference satisfaction
  // Constraints:
  // 1. Each (student, block) → exactly one offering
  // 2. Each offering → max capacity_total students
  // 3. Each preceptor → max availability students per block
  // 4. Student must take all 4 core rotations somewhere in 10 blocks
  // 5. No student assigned to same rotation twice
  
  // Optional fairness: Minimize deviation in satisfaction scores
  
  // Solve via Hungarian algorithm variant or min-cost max-flow
  optimal_assignment = solveMinCostMaxFlow(graph)
  
  // Verify core requirement satisfaction
  for each student:
    cores_assigned = extractCoresFromAssignments(student, optimal_assignment)
    if cores_assigned.count < 4:
      // Backtrack and reassign to satisfy core requirement
      reassignForCores(student, optimal_assignment, term_id)
  
  return optimal_assignment
END FUNCTION

FUNCTION buildBipartiteGraph(students, offerings, preferences, constraints):
  graph = {
    nodes: {
      left: [(student_id, block_id) for all students, blocks],
      right: [offering_id for all offerings]
    },
    edges: [],
    weights: {}
  }
  
  for each (student, block):
    student_prefs = preferences[student][block]
    
    for each rank, offering_id in student_prefs:
      // Edge weight = (10 - rank) * capacity_margin * preceptor_score
      weight = (10 - rank) * 
               (offering.capacity_total - offering.capacity_filled) / offering.capacity_total *
               (1.0 + preceptor_expertiseBonus[offering.rotation])
      
      edges.append({
        from: (student, block),
        to: offering,
        weight: weight,
        capacity: 1
      })
  
  // Add capacity constraints on right side
  for each offering:
    graph.capacities[offering] = offering.capacity_total
  
  return graph
END FUNCTION

FUNCTION solveMinCostMaxFlow(bipartite_graph):
  // Use external library: Min-Cost Max-Flow (e.g., successive shortest paths)
  // OR simpler: Hungarian algorithm adapted for many-to-one matching
  
  flow = minCostMaxFlow(
    graph = bipartite_graph,
    source = artificial_source,
    sink = artificial_sink,
    objective = maximize_weight  // prefer higher-ranked preferences
  )
  
  return extractAssignments(flow)
END FUNCTION
```

**Complexity:** O(n × b² × log(n × b)) for successive shortest paths

**Implementation Options:**
1. **Pure SQL approach** (limited): CTE recursive queries + greedy post-processing
2. **Backend algorithm** (recommended): Implement in Node.js/Python using:
   - `networkx` (Python)
   - `google-or-tools` (C++ with Python/Java bindings)
   - Custom successive shortest paths

**Hybrid Approach (Recommended):**
```pseudocode
// Phase 1: Greedy for fast feasibility
assignments = greedyMatch(term_id, students, preferences)

// Phase 2: Refinement via weightedMatch on swaps
unmatched_students = filter(assignments, status='unmatched')
FOR EACH unmatched IN unmatched_students:
  // Try to find a 2-way or 3-way swap with already-matched students
  // that improves overall satisfaction without violating constraints
  
  swaps = findViableSwaps(unmatched, assignments, preferences, max_swap_depth=2)
  
  IF swaps.found THEN
    APPLY swap to assignments
  ELSE
    LEAVE as pending_admin_assignment
  END IF
END FOR

RETURN assignments
```

---

## SECTION F: ADMIN INLINE EDIT + DRAFT/PUBLISH WORKFLOW

### **Architecture:**

```
┌─────────────────────────────────────────────────────────┐
│                 ADMIN CONFIGURATION                      │
│            (Offerings, Preceptors, Availability)         │
└────────────────┬─────────────────────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
   DRAFT CONFIG       PUBLISHED CONFIG
   (editable)         (read-only + locked)
        │                 │
        │                 ├─ Publish Changes Button
        │                 │ (moves DRAFT → PUBLISHED)
        │                 │
        │                 └─ Student/Preceptor sees
        │                   (in prod)
        │
        └─ Autosave to DB as config_status='draft'
           (no impact on public data until publish)
```

### **Inline Edit Workflow:**

**1. Render Editable Grid:**
```html
<table class="admin-offerings-grid">
  <tr data-offering-id="15">
    <td class="editable" data-field="capacity_total">8</td>
    <td class="editable" data-field="notes">Main IM</td>
    <td><button class="btn-save">Save</button></td>
  </tr>
</table>
```

**2. On Cell Change (Optimistic Update):**
```javascript
element.addEventListener('change', (e) => {
  const offering_id = e.target.closest('tr').dataset.offering_id;
  const field = e.target.dataset.field;
  const new_value = e.target.value;
  
  // Optimistic: Update UI immediately
  e.target.classList.add('saving');
  
  // Send to backend
  fetch(`/admin/api/appe/offerings/${offering_id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      [field]: new_value,
      reason: prompt('Why are you making this change?')
    })
  })
  .then(r => r.json())
  .then(data => {
    if (data.success) {
      e.target.classList.remove('saving');
      e.target.classList.add('draft-change');  // visual indicator
      showNotification(`Change saved to DRAFT (not live yet)`);
    } else {
      // Rollback
      e.target.value = e.target.defaultValue;
      e.target.classList.remove('saving');
      showError(data.error);
    }
  });
});
```

**3. Validation Rules (Server-side):**
```javascript
FUNCTION validateOfferingUpdate(offering_id, new_values) {
  offering = queryOffering(offering_id);
  
  // Rule 1: Cannot reduce capacity below current assignments
  if (new_values.capacity_total < offering.capacity_filled) {
    THROW ValidationError(
      `Cannot reduce capacity from ${offering.capacity_total} to ${new_values.capacity_total}. 
       Already ${offering.capacity_filled} students assigned.`
    );
  }
  
  // Rule 2: If offering locked (assignments published), only allow notes
  if (offering.block.is_locked AND new_values.capacity_total != offering.capacity_total) {
    THROW ValidationError(
      `Block ${offering.block_number} is locked. Cannot modify capacity after assignments published.`
    );
  }
  
  // Rule 3: Validate data types
  if (typeof new_values.capacity_total != 'integer' OR new_values.capacity_total < 1) {
    THROW ValidationError('Capacity must be a positive integer');
  }
  
  RETURN TRUE
}
```

---

### **Draft vs. Published Workflow:**

**Configuration Lifecycle:**
```
┌─────────────────────────────────────────────────────────┐
│                  ADMIN MAKES CHANGES                     │
│  (offerings, preceptor availability, capacity, etc.)    │
└────────────────┬─────────────────────────────────────────┘
                 │
                 ├─→ Saved as config_status = 'draft'
                 │   DB: appe_offerings.config_status='draft'
                 │   DB: appe_preceptor_availability.config_status='draft'
                 │
                 │   ❌ Students/Preceptors cannot see
                 │   ✅ Admin can edit/undo
                 │
                 ├─ INTEGRITY CHECKS BEFORE PUBLISH ─┐
                 │  1. All required rotations have offerings
                 │  2. No offering over capacity
                 │  3. Preceptors mapped to rotations
                 │  4. At least one offering per block
                 │  5. No past dates
                 │
                 └─────────────────────────────────────│
                                     │
                 ┌───────────────────────│
                 │ Admin clicks:          │
                 │ "Publish Changes"      │
                 │
    ┌────────────┴─────────────────────┐
    │ Dialog Box:                      │
    │ "Publish these 5 draft changes?  │
    │  This affects live student view" │
    │ [Cancel] [Publish]               │
    └────────┬──────────────────────────┘
             │
             ├─→ config_status = 'published'
             │   Snapshot timestamp in audit log
             │   Students/Preceptors see changes
             │   Change reason logged
             │
             ├─→ Send notification to students
             │   "APPE configuration updated"
             │
             └─→ New edits create fresh DRAFT
                 (previous published snapshot preserved)
```

**Database State After Publish:**
```sql
-- Before Publish:
SELECT id, capacity_total, config_status FROM appe_offerings WHERE id=15;
-- Result: 15, 10, 'draft'

-- After Publish:
SELECT id, capacity_total, config_status, published_at FROM appe_offerings WHERE id=15;
-- Result: 15, 10, 'published', '2026-02-09 15:30:00'

-- Audit log entry:
SELECT * FROM appe_audit_logs WHERE entity='offering' AND entity_id=15 ORDER BY created_at DESC LIMIT 1;
-- Result: {..., action:'publish_draft', before_json:'{"capacity":8}', after_json:'{"capacity":10}', reason:'Increased demand'}
```

### **Admin Publish Center Interface:**

```html
<div class="publish-center">
  <h2>Pending Changes (Draft)</h2>
  
  <div class="changes-summary">
    <p>5 offerings modified | 2 preceptor availability updated | 0 rotations changed</p>
  </div>
  
  <table class="draft-changes-log">
    <th>Entity | Change | Before | After | Modified By | Time</th>
    <tr>
      <td>Offering#15</td>
      <td>capacity_total</td>
      <td>8</td>
      <td>10</td>
      <td>Dr. Al-Malik</td>
      <td>2 hours ago</td>
    </tr>
  </table>
  
  <div class="actions">
    <button class="btn btn-primary" onclick="publishAllChanges()">
      ✅ Publish All Changes
    </button>
    <button class="btn btn-secondary" onclick="revertDrafts()">
      ↶ Revert to Published
    </button>
    <button class="btn btn-outline" onclick="downloadReport()">
      📥 Download Change Report
    </button>
  </div>
</div>
```

---

## SECTION G: IMPLEMENTATION PLAN (PHASED)

### **PHASE 1: FOUNDATION (2 weeks)**
- [ ] Design + approval of data model
- [ ] Create all DB tables + indexes
- [ ] Create seed data (rotations, preceptors, sites)
- [ ] Set up API project structure
- [ ] Implement authentication/authorization middleware

**Deliverables:**
- SQL schema + migrations
- 3-5 working API endpoints (terms, blocks read-only)
- Postman collection for testing

---

### **PHASE 2: STUDENT PREFERENCES (3 weeks)**
- [ ] Build preferences submission service
- [ ] Implement drag-and-drop UI component (Vue/React or vanilla)
- [ ] Autosave with conflict detection
- [ ] Validation: core requirements check
- [ ] Submit + receipt workflow
- [ ] Display preferences (readonly after submit)

**Deliverables:**
- 6 Student APIs working
- Frontend: Preferences Builder page + Dashboard
- Unit tests for validation logic

---

### **PHASE 3: MATCHING ENGINE (3 weeks)**
- [ ] Implement Greedy Matching (Mode 1)
- [ ] Implement Weighted Matching (Mode 2)
- [ ] Dry-run capability
- [ ] Constraint checking
- [ ] Matching audit trail

**Deliverables:**
- 2 working matching algorithms
- Admin API: POST `/matching/run` with dry-run
- Performance tests (145 students, 10 blocks, 50 offerings)

---

### **PHASE 4: ADMIN CONFIGURATION & INLINE EDIT (3 weeks)**
- [ ] Admin grid components (offerings, preceptors, availability)
- [ ] Inline edit + save/cancel UI
- [ ] Draft vs. published workflow
- [ ] Publish center interface
- [ ] Validation rules enforcement

**Deliverables:**
- Admin dashboard with all grids
- Draft/Publish workflow tested
- Audit logs recording all changes

---

### **PHASE 5: ASSIGNMENTS & PUBLICATION (2 weeks)**
- [ ] Assignment override interface
- [ ] Publish assignments (move from draft to public)
- [ ] Student-facing "My Assignments" page
- [ ] Notifications to students
- [ ] Preceptor visibility

**Deliverables:**
- Full matching → publish → student view flow
- End-to-end UAT script

---

### **PHASE 6: POLISH & INTEGRATION (2 weeks)**
- [ ] UI/UX refinements
- [ ] Error handling + user-friendly messages
- [ ] Performance optimization
- [ ] Security review
- [ ] Documentation + training materials
- [ ] Soft launch with test cohort

**Deliverables:**
- Production-ready code
- User guide + admin guide
- 30-min training video

---

**Total Timeline:** ~15 weeks (3.5 months)

---

## SECTION H: MINIMAL UAT CHECKLIST

### **Pre-UAT Setup:**
- [ ] Test database with seed data (100 test students, 10 blocks, 50 offerings)
- [ ] Test accounts: 3 admin, 5 students
- [ ] Network accessible URL for UAT

---

### **Student Workflows**

- [ ] **Login & Dashboard**
  - [ ] Student logs in, sees 🎓 APPE Hub tab
  - [ ] Dashboard shows term info, deadline countdown, 10-block timeline
  - [ ] Core completion status displayed (IM/ICU/Community/Institutional)

- [ ] **Preferences Builder**
  - [ ] For each block, can drag-and-drop offerings to rank preferences
  - [ ] Autosave works every 30 seconds
  - [ ] Save draft button works
  - [ ] System prevents submit if missing any core rotation

- [ ] **Submission**
  - [ ] Student clicks "Submit Preferences"
  - [ ] Confirmation dialog appears
  - [ ] After submit, status changes to "Submitted"
  - [ ] Receipt number generated and emailed
  - [ ] Cannot edit after submit

- [ ] **Assignments (After Publish)**
  - [ ] Student sees "My Assignments" page
  - [ ] Each block shows: Rotation, Site, Preceptor, Date
  - [ ] Preceptor contact details visible
  - [ ] Download/print assignment letter

---

### **Admin Workflows**

- [ ] **Term Configuration**
  - [ ] Create new APPE term
  - [ ] Set submission window
  - [ ] Create 10 blocks (verify dates correct)

- [ ] **Offerings Management**
  - [ ] View all offerings in grid
  - [ ] Inline edit: capacity_total
  - [ ] Inline edit: notes
  - [ ] Changes show as "DRAFT"
  - [ ] Bulk update: select multiple, increase capacity

- [ ] **Preceptor Availability**
  - [ ] View preceptor grid per block
  - [ ] Toggle available/unavailable
  - [ ] Adjust max_students per block
  - [ ] Changes show as "DRAFT"

- [ ] **Student Submissions**
  - [ ] View list of submitted preferences
  - [ ] Filter by status (draft/submitted/locked)
  - [ ] Download submission report
  - [ ] Search by student name/ID

- [ ] **Matching**
  - [ ] Run Mode 1 (Greedy) in dry-run
  - [ ] Review results: satisfaction score, warnings
  - [ ] Run Mode 2 (Weighted) in dry-run
  - [ ] Compare results
  - [ ] Commit one run (move to draft assignments)

- [ ] **Assignment Override**
  - [ ] Admin can override a student's block assignment
  - [ ] Select different offering/preceptor
  - [ ] Record reason

- [ ] **Publish Workflow**
  - [ ] Draft changes accumulated (5+)
  - [ ] Publish Center shows pending changes
  - [ ] Click "Publish All"
  - [ ] Confirmation dialog
  - [ ] Changes applied
  - [ ] Audit log updated

- [ ] **After Publish**
  - [ ] Students can see assignments
  - [ ] Preceptors receive list of assigned students
  - [ ] Notification emails sent
  - [ ] Admin cannot revert (only new edits as DRAFT)

---

### **Integration Tests**

- [ ] **Auth Integration**
  - [ ] JWT token from portal auth works for APPE APIs
  - [ ] Unauthorized requests rejected
  - [ ] Only students can access student APIs
  - [ ] Only admins can access admin APIs

- [ ] **Database Integrity**
  - [ ] Foreign keys enforced
  - [ ] Capacity constraints respected
  - [ ] No orphaned records
  - [ ] Audit logs recorded for every change

- [ ] **Performance**
  - [ ] Load times < 2s for student pages
  - [ ] Matching completes in < 30s for 145 students
  - [ ] Grid rendering smooth for 200+ rows
  - [ ] Concurrent admin edits don't corrupt data

- [ ] **Error Scenarios**
  - [ ] Missing preceptor mapping → clear error
  - [ ] Capacity exceeded → validation error
  - [ ] Submission after deadline → rejected
  - [ ] Network timeout → graceful retry

---

### **Smoke Test (Pre-Production)**

- [ ] End-to-end: Login → Build Prefs → Submit → Admin Matches → Publish → View Assignments (30 min)

---

## END OF APPE INTEGRATION PLAN

**Next Steps:**
1. Review + approve architecture (Embedded Module)
2. Schedule DB schema implementation
3. Assign developer teams to phases
4. Create Jira epic with subtasks
5. Begin Phase 1 (foundation)

**Questions/Clarifications:**
- Exact student ID format (S441210049 confirmed?)
- Current backend tech stack (Node/Python/Java?)
- Matching deadline (must run before what date each cycle?)
- Preceptor self-service (can they mark availability, or admin-only?)
