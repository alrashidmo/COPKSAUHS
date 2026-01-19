# Clinical Affairs Experience Hub - Complete Platform Documentation

## 🎯 Executive Summary

The **Clinical Affairs Experience Hub** is a comprehensive, automation-first web platform designed for managing experiential learning in College of Pharmacy Clinical Affairs departments. This original system eliminates manual spreadsheets, reduces email overload, and provides accreditation-ready evidence through intelligent automation.

**Status:** ✅ Complete System Design Ready for Implementation  
**Date:** January 10, 2026  
**Version:** 1.0.0

---

## 📦 Deliverables Completed

### ✅ 1. Product Requirements Document
**File:** `PRODUCT_REQUIREMENTS.md`

Complete 360-degree product specification including:
- Product vision and key differentiators
- 9 core programs supported (IPPE I/II/III/Community, APPE, IPTE I/II/III, APTE)
- 6 user roles with RBAC (Student, Preceptor, Site Coordinator, Course Coordinator, Admin, Leadership)
- 6 must-have modules with detailed workflows
- Success metrics and KPIs
- Risk mitigation strategies

---

### ✅ 2. System Architecture
**File:** `ARCHITECTURE.js`

Comprehensive technical architecture including:

**Technology Stack:**
- Frontend: Next.js 14 (React + TypeScript + Tailwind CSS + shadcn/ui)
- Backend: NestJS (Node.js + TypeScript + TypeORM)
- Database: PostgreSQL 15+
- Cache: Redis
- Queue: Bull Queue
- Storage: AWS S3 / MinIO
- Monitoring: Sentry + Prometheus + ELK Stack

**Architecture Layers:**
```
┌─────────────────┐         ┌─────────────────┐
│   Next.js App   │────────▶│   NestJS API    │
│   (Frontend)    │◀────────│   (Backend)     │
└─────────────────┘         └─────────────────┘
        │                             │
        ▼                             ▼
┌──────────────┐            ┌──────────────┐
│  PostgreSQL  │            │    Redis     │
│   Database   │            │    Cache     │
└──────────────┘            └──────────────┘
        │                             │
        ▼                             ▼
┌──────────────┐            ┌──────────────┐
│  Background  │            │    Email     │
│     Jobs     │            │     SMS      │
└──────────────┘            └──────────────┘
```

**Data Flow Examples:**
- Student login workflow
- Compliance check automation
- Rotation matching process
- Evaluation submission and auto-grading

---

### ✅ 3. Database Schema with ERD
**File:** `DATABASE_SCHEMA.sql`

Complete relational database design with 25+ tables:

**Core Tables:**
- `users` - Central authentication
- `students` - Student profiles with compliance tracking
- `student_compliance` - 15+ requirement items with expiry tracking
- `preceptors` - Preceptor profiles with license monitoring
- `sites` - Rotation sites with capacity and affiliation
- `programs` - PharmD and Pharmacy Technician
- `rotation_types` - IPPE, APPE, IPTE, APTE
- `rotation_blocks` - Time periods for rotations
- `student_rotation_preferences` - Ranked site preferences (1-5)
- `rotation_assignments` - Final student-to-site assignments
- `evaluations` - Midpoint, final, self-evaluations
- `evaluation_templates` - Rubric templates
- `epa_domains` - Entrustable Professional Activities
- `epa_assessments` - EPA entrustment levels (1-5)
- `attendance_records` - Daily attendance tracking
- `professionalism_incidents` - Incident reporting
- `notifications` - Multi-channel notifications
- `messages` - Internal messaging
- `email_logs` - Email delivery tracking
- `reports` - Generated reports
- `audit_logs` - Complete audit trail
- `system_settings` - Configuration

**Key Features:**
- Foreign key constraints
- Indexes on frequently queried columns
- Soft deletes (deleted_at)
- Audit columns (created_at, updated_at, created_by, updated_by)
- UUID primary keys
- Check constraints for data integrity

---

### ✅ 4. API Routes & Endpoints
**File:** `API_ROUTES.js`

Complete RESTful API design with 100+ endpoints organized into 15 modules:

**Modules:**
1. **Authentication & Authorization** (8 endpoints)
   - Register, login, refresh, logout
   - Password reset, change password
   - Get current user profile

2. **Users Management** (6 endpoints)
   - CRUD operations
   - Role management

3. **Students** (9 endpoints)
   - Profile management
   - Compliance tracking
   - Rotation history
   - Performance analytics

4. **Preceptors** (7 endpoints)
   - License tracking
   - Student assignments
   - Performance metrics

5. **Sites** (6 endpoints)
   - Site management
   - Capacity tracking
   - Assignment viewing

6. **Rotation Blocks** (7 endpoints)
   - Block creation and publishing
   - Eligible students
   - Available sites

7. **Rotation Assignments** (7 endpoints)
   - Assignment CRUD
   - Confirmation workflow
   - Grade retrieval

8. **Student Preferences** (3 endpoints)
   - Submit preferences
   - View preferences
   - Clear preferences

9. **Matching Algorithm** (4 endpoints)
   - Run matching
   - Preview results
   - Publish assignments
   - Validate constraints

10. **Evaluations** (8 endpoints)
    - Create, update, submit
    - Pending evaluations
    - Passwordless access
    - PDF generation

11. **EPA Assessments** (3 endpoints)
    - Record assessments
    - Student progression
    - Rotation EPAs

12. **Attendance** (3 endpoints)
    - Record attendance
    - View records
    - Update records

13. **Incidents** (3 endpoints)
    - Report incidents
    - View incidents
    - Update status

14. **Notifications** (4 endpoints)
    - View notifications
    - Mark as read
    - Delete notifications

15. **Messages** (6 endpoints)
    - Send messages
    - Broadcast messages
    - View inbox/sent

16. **Reports** (9 endpoints)
    - Compliance summary
    - Rotation completion
    - Evaluation completion
    - Site utilization
    - Preceptor workload
    - Grade distribution
    - Accreditation evidence

17. **Analytics** (6 endpoints)
    - Admin dashboard
    - Coordinator dashboard
    - Student dashboard
    - Preceptor dashboard
    - Compliance trends
    - EPA achievement trends

18. **System Administration** (5 endpoints)
    - Audit logs
    - Settings management
    - Bulk imports
    - System health

**API Conventions:**
- RESTful design
- JWT authentication
- Role-based authorization
- Consistent response format
- Pagination support
- Filtering and sorting
- Rate limiting (100 req/min default)

---

### ✅ 5. Automation Rules Engine
**File:** `AUTOMATION_RULES.js`

Comprehensive automation rules across 6 domains:

#### 1. Compliance Automation
**Schedule:** Daily at 3:00 AM

**Rules:**
- `COMP001` - Daily compliance status check
  - Calculate compliance percentage
  - Determine traffic light status (GREEN/YELLOW/RED)
  - Update student records
  - Send alerts if status changes to RED

- `COMP002` - Expiry date monitoring
  - 60 days: Info reminder (IN_APP)
  - 30 days: Warning (EMAIL + IN_APP)
  - 14 days: Urgent (EMAIL + SMS + IN_APP)
  - 7 days: Critical (EMAIL + SMS + IN_APP + coordinator alert)
  - Expired: Auto-mark as EXPIRED, block student

- `COMP003` - Hard gate enforcement
  - Block non-compliant students from scheduling
  - Real-time validation before assignment

#### 2. Evaluation Automation
**Schedule:** Daily at 8:00 AM

**Rules:**
- `EVAL001` - Midpoint evaluation creation
  - Auto-create at rotation midpoint + 7 days
  - Notify preceptor

- `EVAL002` - Final evaluation creation
  - Auto-create at rotation end + 5 days

- `EVAL003` - Evaluation due reminders
  - 7 days: Info (EMAIL + IN_APP)
  - 3 days: Warning (EMAIL + IN_APP)
  - 1 day: Urgent (EMAIL + SMS + IN_APP)
  - Due date: Critical (EMAIL + SMS + IN_APP)
  - Overdue: Escalation to coordinator + admin

- `EVAL004` - Auto grade calculation
  - Weighted formula: Mid (30%) + Final (50%) + EPA (15%) + Attendance (5%)
  - Pass/Fail determination (≥70% = PASS)
  - Flag if failing
  - Notify student

- `EVAL005` - Red flag alert
  - Immediate alert to coordinator + admin
  - Create incident record
  - Flag student for review

#### 3. Preceptor License Monitoring
**Schedule:** Weekly on Sunday at 2:00 AM

**Rules:**
- `PREC001` - License expiry monitoring
  - 90 days: Renewal reminder
  - 60 days: Warning
  - 30 days: Urgent + admin alert
  - 14 days: Critical + coordinator alert
  - Expired: Auto-disable preceptor, remove from future assignments

- `PREC002` - Training expiry
  - 60 days: Renewal reminder
  - Expired: Auto-disable

- `PREC003` - Evaluation completion tracking
  - Calculate completion rate
  - Flag if < 80% or 3+ late submissions

#### 4. Site Affiliation Monitoring
**Schedule:** Monthly on 1st at 1:00 AM

**Rules:**
- `SITE001` - Affiliation agreement expiry
  - 180 days: Start renewal process
  - 90 days: Warning
  - 60 days: Urgent
  - 30 days: Critical
  - Expired: Auto-disable site

#### 5. Attendance Monitoring
**Schedule:** Daily at 8:00 PM

**Rules:**
- `ATT001` - Daily attendance calculation
  - Calculate attendance percentage
  - < 80%: Failing alert (URGENT)
  - 80-85%: Warning (MEDIUM)
  - Unexcused absence: Alert coordinator

#### 6. Rotation Lifecycle Management
**Schedule:** Daily at 6:00 AM

**Rules:**
- `ROT001` - Rotation notifications
  - 7 days before start: Reminder
  - Start date: Update status to IN_PROGRESS, send welcome
  - End date: Update status to AWAITING_EVALUATION, send completion

- `ROT002` - Registration window management
  - Open registration on start date
  - Close registration on end date

---

### ✅ 6. Matching Algorithm
**File:** `MATCHING_ALGORITHM.js`

Intelligent student-to-site matching with multi-criteria optimization.

**Algorithm:** Hungarian Algorithm (optimal assignment)

**Constraints Validated:**
1. Student compliance must be GREEN (100%)
2. Site cannot exceed max capacity
3. Preceptor cannot exceed student limits
4. No schedule conflicts for same student
5. Prerequisites must be completed
6. Preceptor license must be active

**Scoring Criteria (Weighted):**
```
Total Score (0-100) = 
  (Preference Match × 40%) +
  (Geographic Proximity × 20%) +
  (Site Quality × 15%) +
  (Rotation Diversity × 15%) +
  (Preceptor Balance × 10%)
```

**Preference Scoring:**
- Rank 1: 100 points
- Rank 2: 80 points
- Rank 3: 60 points
- Rank 4: 40 points
- Rank 5: 20 points
- No preference: 0 points

**Process:**
1. **Pre-filtering:** Remove ineligible students (compliance status ≠ GREEN)
2. **Data fetching:** Students, sites, preferences, rotation history
3. **Constraint validation:** Check hard constraints
4. **Score calculation:** Multi-criteria scoring for all student-site pairs
5. **Optimization:** Hungarian algorithm for optimal assignment
6. **Post-validation:** Validate assignments against constraints
7. **Statistics:** Generate match quality statistics

**Output:**
- Matched assignments with scores
- Unmatched students with reasons
- Conflicts detected
- Statistics (match rate, preference distribution, site utilization)

**Statistics Provided:**
- Total students / matched / unmatched
- Match rate percentage
- Total sites / capacity / remaining
- Utilization rate percentage
- Preference distribution (how many got rank 1, 2, 3, etc.)
- Site utilization per site
- Average matching score

---

## 🚀 Implementation Roadmap

### Phase 1: Foundation (Weeks 1-4)
- [x] Database schema setup
- [x] Authentication & RBAC
- [x] User management
- [ ] Basic dashboards

### Phase 2: Core Modules (Weeks 5-12)
- [ ] Compliance engine
- [ ] Rotation management
- [ ] Matching algorithm implementation
- [ ] Evaluation system

### Phase 3: Automation (Weeks 13-16)
- [ ] Notification scheduler
- [ ] Auto-reminders
- [ ] Auto-grade calculation
- [ ] Compliance monitoring

### Phase 4: Reporting (Weeks 17-20)
- [ ] Dashboard analytics
- [ ] Report generation (PDF/Excel)
- [ ] Evidence packs
- [ ] Data export

### Phase 5: Testing & Launch (Weeks 21-24)
- [ ] User acceptance testing
- [ ] Bug fixes
- [ ] Documentation
- [ ] Production deployment

---

## 💡 Key Features

### 🟢 Traffic Light Compliance System
- **GREEN:** 100% compliant, no expiring items within 30 days → Can be scheduled
- **YELLOW:** 1-3 pending OR items expiring within 30 days → Warning
- **RED:** 4+ pending OR any expired → **HARD GATE: Cannot be scheduled**

### 🤖 Intelligent Automation
- Daily compliance checks at 3:00 AM
- Automated reminders (60/30/14/7 days before expiry)
- Auto-disable expired licenses/trainings
- Auto-grade calculation
- Real-time status updates

### 🎯 Smart Matching
- Multi-criteria optimization
- Configurable weights
- Constraint validation
- Preference-based (ranked 1-5)
- Diversity scoring (avoid repeats)

### 📊 Accreditation-Ready Reporting
- ACPE Standard 10-14 evidence
- NCAAA KPI tracking
- One-click report generation
- PDF/Excel export
- Evidence packs for site visits

---

## 🔒 Security & Compliance

### Authentication
- JWT with refresh tokens (15 min access, 7 days refresh)
- bcrypt password hashing (10 rounds)
- HttpOnly cookies for web
- Optional 2FA (TOTP)

### Authorization
- RBAC with 6 roles
- Resource-based permissions
- Route guards
- Audit logging (all write operations)

### Data Protection
- AES-256 encryption at rest
- TLS 1.3 in transit
- FERPA/HIPAA compliant
- 7-year data retention

---

## 📈 Success Metrics

### Operational Efficiency
- **90% reduction** in manual scheduling time
- **95% automation** of compliance tracking
- **100% digital** evaluation submission
- **< 5 minutes** schedule generation

### User Satisfaction
- **85%+** student satisfaction
- **90%+** preceptor satisfaction
- **95%+** coordinator satisfaction

### Compliance & Quality
- **100%** student compliance before rotation start
- **98%+** evaluation completion rate
- **< 2%** evaluation late submission
- **Zero** accreditation deficiencies

### System Performance
- **99.9%** uptime
- **< 2 seconds** page load time
- **< 500ms** API response time (95th percentile)

---

## 📁 File Structure Summary

```
Clinical-Affairs-Experience-Hub/
├── PRODUCT_REQUIREMENTS.md           # Complete PRD
├── ARCHITECTURE.js                   # System architecture
├── DATABASE_SCHEMA.sql               # Complete schema with ERD
├── API_ROUTES.js                     # 100+ API endpoints
├── AUTOMATION_RULES.js               # Automation rules engine
├── MATCHING_ALGORITHM.js             # Intelligent matching logic
└── PROJECT_SUMMARY.md                # This file
```

---

## 🎓 Programs Supported

### PharmD Program
1. **IPPE I** - Introductory Pharmacy Practice Experience I
2. **IPPE II** - Introductory Pharmacy Practice Experience II
3. **IPPE III** - Introductory Pharmacy Practice Experience III
4. **IPPE Community** - Community Pharmacy Experience
5. **APPE** - Advanced Pharmacy Practice Experience (Riyadh only)

### Pharmacy Technician Program
1. **IPTE I** - Introductory Pharmacy Technician Experience I (Riyadh/Jeddah)
2. **IPTE II** - Introductory Pharmacy Technician Experience II (Riyadh only)
3. **IPTE III** - Introductory Pharmacy Technician Experience III (Riyadh only)
4. **APTE** - Advanced Pharmacy Technician Experience (Riyadh/Jeddah)

---

## 👥 User Roles & Permissions

1. **Student** - View own data, upload documents, view schedule/grades
2. **Preceptor** - Evaluate assigned students, report attendance, view EPAs
3. **Site Coordinator** - Manage single site, view site students
4. **Course Coordinator** - Create rotations, run matching, generate reports
5. **Clinical Affairs Admin** - Full system control, all permissions
6. **Leadership** - Read-only analytics and reports

---

## 🛠 Next Steps

To implement this system, the following code scaffolds are still needed:

### Backend (NestJS)
- [ ] Authentication module with JWT strategy
- [ ] Users module with RBAC guards
- [ ] Students module with compliance service
- [ ] Rotations module with matching service
- [ ] Evaluations module with grading service
- [ ] Automation module with cron jobs
- [ ] Reports module with PDF/Excel generators

### Frontend (Next.js)
- [ ] Authentication pages (login, register, reset password)
- [ ] Student dashboard with compliance tracker
- [ ] Preceptor dashboard with pending evaluations
- [ ] Coordinator dashboard with matching interface
- [ ] Admin dashboard with system management
- [ ] Leadership dashboard with analytics
- [ ] Shared components (tables, forms, charts)

---

## 📞 Support & Documentation

For questions or support:
- Technical Documentation: See individual files
- API Documentation: See `API_ROUTES.js`
- Database Schema: See `DATABASE_SCHEMA.sql`
- Architecture: See `ARCHITECTURE.js`

---

**Status:** ✅ Design Phase Complete  
**Ready For:** Implementation Phase  
**Estimated Build Time:** 20-24 weeks with 2-3 developers

---

*Last Updated: January 10, 2026*
