# Clinical Affairs Experience Hub - Product Requirements Document

## Product Vision

Build an original, comprehensive web platform for managing experiential learning in a College of Pharmacy Clinical Affairs department. The platform automates placements, compliance tracking, evaluations, and reporting while maintaining accreditation standards.

**Product Name:** Clinical Affairs Experience Hub (Internal)  
**Version:** 1.0.0  
**Last Updated:** January 10, 2026

---

## Executive Summary

The Clinical Affairs Experience Hub is an integrated system designed to eliminate manual processes in experiential education management. It provides automated placement matching, real-time compliance monitoring, digital evaluations, and accreditation-ready reporting.

### Key Differentiators
- **Intelligent Matching Engine**: Automated student-to-site assignment using configurable rules
- **Hard-Gate Compliance**: Students cannot start rotations without meeting all requirements
- **Automation-First Design**: Proactive alerts, reminders, and status updates
- **Accreditation-Ready**: Built-in evidence generation for ACPE/NCAAA standards

---

## Core Programs Supported

### PharmD Program
1. **IPPE I** - Introductory Pharmacy Practice Experience I
2. **IPPE II** - Introductory Pharmacy Practice Experience II
3. **IPPE III** - Introductory Pharmacy Practice Experience III
4. **IPPE Community** - Community Pharmacy Experience
5. **APPE** - Advanced Pharmacy Practice Experience

### Pharmacy Technician Program
1. **IPTE I** - Introductory Pharmacy Technician Experience I (Riyadh/Jeddah)
2. **IPTE II** - Introductory Pharmacy Technician Experience II (Riyadh only)
3. **IPTE III** - Introductory Pharmacy Technician Experience III (Riyadh only)
4. **APTE** - Advanced Pharmacy Technician Experience (Riyadh/Jeddah)

---

## User Roles & Permissions (RBAC)

### 1. Student
**Access Level:** Self-service, limited view

**Permissions:**
- View assigned rotations and schedule
- Upload compliance documents
- View compliance status (traffic light)
- Complete self-evaluations and reflections
- View grades and feedback
- Receive notifications
- Submit rotation preferences

**Restrictions:**
- Cannot view other students' data
- Cannot modify assignments
- Cannot override compliance status

---

### 2. Preceptor
**Access Level:** Assigned students only

**Permissions:**
- View assigned students
- Submit midpoint and final evaluations
- Complete EPA assessments
- Report attendance and incidents
- View student compliance status
- Send messages to students
- View preceptor dashboard

**Restrictions:**
- Cannot view unassigned students
- Cannot modify schedules
- Cannot access admin functions

---

### 3. Site Coordinator
**Access Level:** Single site management

**Permissions:**
- Manage site profile and capacity
- View all students assigned to site
- Approve/decline rotation requests
- Update site requirements
- View site analytics
- Manage affiliation agreements

**Restrictions:**
- Cannot view other sites
- Cannot assign students globally
- Cannot access program-level reports

---

### 4. Course Coordinator
**Access Level:** Program-specific management

**Permissions:**
- Create rotation blocks
- Assign students to rotations
- Run matching algorithm
- Publish schedules
- Override assignments
- View all students in program
- Generate program reports
- Manage evaluation templates
- Send bulk communications

**Restrictions:**
- Limited to assigned program(s)
- Cannot modify global settings
- Cannot manage users

---

### 5. Clinical Affairs Admin
**Access Level:** Full system control

**Permissions:**
- All permissions across all programs
- Manage users and roles
- Configure system settings
- Access audit logs
- Create programs and rotation types
- Manage preceptor and site databases
- Override all business rules
- Access all reports and analytics

**Restrictions:**
- None (superuser)

---

### 6. Leadership
**Access Level:** Read-only analytics

**Permissions:**
- View all dashboards and analytics
- Generate executive reports
- Export data
- View program performance metrics

**Restrictions:**
- Cannot edit any data
- Cannot manage users
- Cannot modify assignments

---

## Module 1: Placements & Scheduling

### Features

#### 1.1 Rotation Block Management
- Define rotation blocks with start/end dates
- Set program type (IPPE/APPE/IPTE/APTE)
- Configure block capacity
- Define prerequisites
- Set registration windows

#### 1.2 Intelligent Matching Engine
**Inputs:**
- Student preferences (ranked 1-5)
- Compliance status (hard gate)
- Site capacity limits
- Preceptor availability and max load
- Geographic constraints (Riyadh/Jeddah)
- Program requirements
- Prerequisite completion

**Constraints:**
- Students must be 100% compliant (Green status)
- Sites cannot exceed max capacity
- Preceptors cannot exceed student limits
- No schedule conflicts (same student, same time)
- Prerequisites must be met
- Program-specific location rules

**Scoring Algorithm:**
- Preference match: 40 points
- Geographic proximity: 20 points
- Site quality score: 15 points
- Previous rotation diversity: 15 points
- Preceptor-student ratio balance: 10 points

**Output:**
- Optimized student-to-site assignments
- Conflict report
- Unmatched students list
- Capacity utilization report

#### 1.3 Schedule Publishing Workflow
1. Draft schedule created by coordinator
2. Review and validation
3. Publish schedule (sends notifications)
4. Change window (7 days for student-initiated swaps)
5. Schedule lock (cannot modify after deadline)
6. Audit log tracks all changes

#### 1.4 Audit Trail
- Who made the assignment
- When it was created/modified
- Original vs. current assignment
- Reason for override (if manual)

---

## Module 2: Readiness & Compliance Engine

### Traffic Light System

**🟢 GREEN (Ready)**
- All requirements completed
- No expiring items within 30 days
- Can be scheduled and start rotations

**🟡 YELLOW (Warning)**
- 1-3 items pending OR
- Items expiring within 30 days
- Can be scheduled but must resolve before start date

**🔴 RED (Blocked)**
- 4+ items pending OR
- Any item expired OR
- Critical requirement missing
- **HARD GATE: Cannot be scheduled or start rotation**

### Compliance Requirements Checklist

#### Medical Requirements
- [ ] Physical Examination (annual)
- [ ] Tuberculosis (TB) Test (annual)
- [ ] Immunization Records (Hepatitis B, MMR, Varicella, Tdap)
- [ ] COVID-19 Vaccination
- [ ] Flu Vaccine (seasonal)

#### Training Certifications
- [ ] Basic Life Support (BLS) - 2 year expiry
- [ ] OSHA Bloodborne Pathogens Training - annual
- [ ] HIPAA Training - annual
- [ ] Fire Safety Training - annual

#### Legal & Professional
- [ ] Background Check (CBC) - 2 year expiry
- [ ] Drug Screening - annual
- [ ] Professional Liability Insurance
- [ ] Student Intern License (PharmD students only)

#### Documentation
- [ ] Signed Code of Conduct
- [ ] Site-Specific Requirements (uploaded by site)
- [ ] Affiliation Agreement Acknowledgment

### Automation Rules

**Daily Check (3:00 AM):**
- Scan all student records
- Calculate days until expiry for each item
- Update traffic light status
- Generate reminder notifications

**Reminder Schedule:**
- 60 days before expiry: INFO notification
- 30 days before expiry: WARNING email + in-app
- 14 days before expiry: URGENT email + SMS
- 7 days before expiry: CRITICAL email + SMS + coordinator alert
- Day of expiry: Status changes to RED, student blocked

**Hard Gate Enforcement:**
- Matching engine skips RED students
- Scheduling UI shows RED students as ineligible
- Student dashboard shows blocked status with action items
- Coordinator receives alert when attempting to assign RED student

---

## Module 3: Evaluations & Assessments

### Evaluation Types

#### 3.1 Midpoint Evaluation
- **Timing:** Week 3-4 of rotation
- **Completed By:** Preceptor
- **Weight:** 30% of final grade
- **Components:**
  - Performance rubric (1-5 scale, 10 criteria)
  - EPA progress checkpoints
  - Professionalism rating
  - Strengths and areas for improvement (required)
  - Red flag checkbox (triggers alert)

#### 3.2 Final Evaluation
- **Timing:** Last week of rotation
- **Completed By:** Preceptor
- **Weight:** 50% of final grade
- **Components:**
  - Performance rubric (1-5 scale, 15 criteria)
  - Final EPA assessments
  - Overall performance rating
  - Detailed comments (required)
  - Recommendation (Yes/No/With Reservations)

#### 3.3 EPA Assessments
- **Completed By:** Preceptor throughout rotation
- **Weight:** 15% of final grade
- **Entrustment Levels:**
  1. Observation only
  2. Direct supervision
  3. Indirect supervision
  4. Unsupervised practice ⭐ (target)
  5. Able to supervise others

**EPA Domains:**
- Patient care and safety
- Medication therapy management
- Health and wellness
- Population-based care
- Problem solving and critical thinking
- Communication and collaboration
- Self-awareness and professionalism

#### 3.4 Student Self-Evaluation
- **Completed By:** Student
- **Weight:** Not graded (reflective)
- **Components:**
  - Self-assessment of learning objectives
  - Reflection on strengths and challenges
  - Site and preceptor feedback (anonymous)
  - Learning experience rating

#### 3.5 Attendance & Professionalism
- **Completed By:** Preceptor (daily/weekly)
- **Weight:** 5% of final grade
- **Tracked:**
  - Days present vs. absent
  - Tardiness incidents
  - Early departures
  - Professionalism concerns

### Auto Grade Calculation

```
Final Grade = (Midpoint × 0.30) + (Final Eval × 0.50) + (EPA Avg × 0.15) + (Attendance × 0.05)

Passing Grade: ≥ 70%

Grade Scale:
A: 90-100%
B: 80-89%
C: 70-79%
F: < 70% (failing, remediation required)
```

### Automation Rules

**Evaluation Due Reminders:**
- 7 days before due: INFO email to preceptor
- 3 days before due: WARNING email + in-app
- 1 day before due: URGENT email + SMS
- Day of due date: CRITICAL alert + coordinator notification
- 1 day overdue: Escalation to admin

**Low Score Alerts:**
- Any rubric item scored < 3: Require comment field
- Overall performance < 70%: Auto-flag for coordinator review
- Red flag checked: Immediate alert to coordinator + admin
- EPA level 1 or 2 in final week: Trigger remediation workflow

**Auto-Submit Protections:**
- Cannot submit without all required fields
- Low scores must have comments
- System validates score consistency
- Locked after submission (audit log tracks edits)

---

## Module 4: Preceptor & Site Management

### 4.1 Preceptor Management

#### Preceptor Profile
- Personal Information (name, email, phone, license number)
- Professional Credentials
  - Pharmacy license (number, state, expiry date)
  - Board certification (if applicable)
  - Specialty areas
- Employment
  - Primary site affiliation
  - Position/title
  - Years of experience
- Training
  - Preceptor training completion date
  - Annual update completion
  - ACPE learning credits
- Preferences
  - Maximum students per rotation
  - Preferred rotation types
  - Availability calendar

#### Automated Compliance Monitoring

**License Expiry Tracking:**
- 90 days before expiry: Renewal reminder
- 60 days before expiry: WARNING email
- 30 days before expiry: URGENT email + SMS
- 14 days before expiry: Coordinator alert
- **Day of expiry: Auto-disable preceptor (cannot be assigned)**

**Training Compliance:**
- Preceptor training valid for 3 years
- Annual updates required
- If training expired: Auto-disable, block assignments

**Performance Monitoring:**
- Evaluation completion rate (target: 100%)
- Average submission time (target: ≤ 5 days after due)
- Student satisfaction scores
- Red flag incident count

#### Auto-Disable Rules
- License expired → Status: INACTIVE
- Training expired → Status: INACTIVE
- Site affiliation terminated → Status: INACTIVE
- 3+ late evaluations in one year → Status: REVIEW REQUIRED

---

### 4.2 Site Management

#### Site Profile
- Site Information
  - Name, address, phone
  - Type (hospital, community, clinic, specialty)
  - Service area (inpatient, outpatient, ambulatory)
- Capacity
  - Max students per rotation block
  - Max students per preceptor
  - Total capacity by program type
- Requirements
  - Site-specific training modules
  - Additional immunizations
  - Dress code and policies
- Affiliation
  - Agreement start/end dates
  - Agreement document upload
  - Insurance requirements
  - Contact person

#### Automated Capacity Management

**Real-Time Capacity Tracking:**
```
Available Slots = Max Capacity - Assigned Students - Reserved Slots
```

**Capacity Alerts:**
- 80% capacity: WARNING to coordinator
- 90% capacity: URGENT alert
- 100% capacity: Site unavailable in matching engine

**Affiliation Agreement Monitoring:**
- 180 days before expiry: Renewal process initiated
- 90 days before expiry: WARNING to admin
- 60 days before expiry: URGENT escalation
- 30 days before expiry: CRITICAL alert
- **Day of expiry: Auto-disable site (cannot be assigned)**

---

## Module 5: Communications

### 5.1 Messaging Center

#### Features
- Inbox/Outbox
- Compose with rich text editor
- Attach files (PDF, images)
- Send to individual or groups
- Read receipts
- Archive and search

#### Message Templates
- Rotation start confirmation
- Evaluation reminder
- Compliance deadline
- Schedule change notification
- Welcome message
- Incident report acknowledgment

### 5.2 Bulk Messaging

**Recipient Filters:**
- All students in program
- All students in rotation block
- All preceptors at site
- Students with RED compliance status
- Preceptors with overdue evaluations

**Delivery Channels:**
- In-app notification
- Email
- SMS (urgent only)
- Push notification (if mobile app)

**Tracking:**
- Sent count
- Delivered count
- Read count
- Failed deliveries (with reason)

### 5.3 Passwordless Form Access

**Use Case:** External preceptors without account can complete evaluations

**Workflow:**
1. System generates unique token
2. Email sent with secure link (expires in 7 days)
3. Preceptor clicks link → auto-authenticated
4. Completes evaluation form
5. Submits → data saved, link expires

**Security:**
- Token valid for single use only
- Expires after 7 days or after submission
- IP address logged
- Cannot modify after submission

---

## Module 6: Reporting & Evidence

### 6.1 Program Dashboards

#### Student Dashboard
- My upcoming rotations
- Compliance status (traffic light)
- Action items (pending requirements)
- Grades and evaluations
- Notifications
- Messages

#### Preceptor Dashboard
- Assigned students (current and upcoming)
- Pending evaluations
- Evaluation completion rate
- Student performance summary
- Messages

#### Coordinator Dashboard
- Rotation blocks overview
- Student assignment status
- Compliance summary (Green/Yellow/Red counts)
- Evaluation completion rates
- Unmatched students
- Capacity utilization by site
- Alerts and action items

#### Admin Dashboard
- System-wide metrics
- Active users by role
- Compliance trends
- Site and preceptor status
- Automation logs
- System health

#### Leadership Dashboard (Read-Only)
- Program performance metrics
- Student outcomes
- Site utilization
- Preceptor engagement
- Accreditation readiness score
- Trend analysis (year-over-year)

### 6.2 Downloadable Reports

**Student Reports:**
- Individual rotation transcript
- Compliance history
- EPA progression report

**Preceptor Reports:**
- Student assignment history
- Evaluation summary
- Training compliance certificate

**Program Reports:**
- Rotation completion report (by block, program)
- Compliance summary (by cohort)
- Evaluation completion rates
- Site utilization analysis
- Preceptor workload distribution
- Grade distribution

**Accreditation Evidence Packs:**
- ACPE Standard 10: EPA achievement data
- ACPE Standard 11: Rotation quality metrics
- ACPE Standard 12: Assessment methods
- ACPE Standard 14: Preceptor qualifications
- NCAAA KPI Report: Program outcomes

**Export Formats:**
- PDF (formatted reports)
- Excel (raw data)
- CSV (for further analysis)

### 6.3 Analytics & Insights

**Predictive Analytics:**
- At-risk student identification (low EPA, attendance)
- Site performance trends
- Preceptor engagement scores
- Capacity forecasting

**Benchmarking:**
- Program-to-program comparison
- Year-over-year trends
- Site performance ranking
- Student cohort analysis

---

## Technical Requirements

### Architecture
- **Pattern:** Microservices or modular monolith
- **API:** RESTful with JWT authentication
- **Database:** PostgreSQL with read replicas
- **Caching:** Redis for sessions and frequent queries
- **Queue:** Bull/BullMQ for background jobs
- **Storage:** AWS S3 or MinIO for file uploads

### Backend Stack
- **Runtime:** Node.js 20 LTS
- **Framework:** NestJS (recommended) or Express
- **Language:** TypeScript
- **ORM:** TypeORM or Prisma
- **Validation:** class-validator + class-transformer
- **Authentication:** Passport.js with JWT strategy
- **Authorization:** CASL (RBAC library)
- **Scheduler:** node-cron or Bull Queue
- **Email:** Nodemailer + SendGrid
- **SMS:** Twilio
- **Testing:** Jest + Supertest

### Frontend Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **UI Library:** Tailwind CSS + shadcn/ui
- **State Management:** Zustand or Redux Toolkit
- **Forms:** React Hook Form + Zod validation
- **HTTP Client:** Axios
- **Charts:** Recharts or Chart.js
- **Tables:** TanStack Table
- **Date Handling:** date-fns
- **Icons:** Lucide React

### Database Design
- **Primary:** PostgreSQL 15+
- **Design Principles:**
  - Normalized (3NF)
  - Foreign key constraints
  - Indexes on frequently queried fields
  - Soft deletes (deleted_at timestamp)
  - Audit columns (created_at, updated_at, created_by, updated_by)

### Security
- **Authentication:** JWT with refresh tokens
- **Password:** bcrypt hashing (10 rounds)
- **RBAC:** Role-based + resource-based permissions
- **Audit Logs:** All write operations logged
- **Data Encryption:** AES-256 for sensitive fields
- **HTTPS:** Enforced in production
- **CORS:** Configured for allowed origins
- **Rate Limiting:** 100 requests/minute per IP

### Deployment
- **Containerization:** Docker + Docker Compose
- **CI/CD:** GitHub Actions
- **Hosting:** AWS, Azure, or on-premise
- **Monitoring:** Sentry for errors, Prometheus for metrics
- **Logging:** Winston + ELK Stack

---

## Success Metrics

### Operational Efficiency
- 90% reduction in manual scheduling time
- 95% automation of compliance tracking
- 100% digital evaluation submission
- < 5 minutes average schedule generation time

### User Satisfaction
- 85%+ student satisfaction with platform
- 90%+ preceptor satisfaction
- 95%+ coordinator satisfaction

### Compliance & Quality
- 100% student compliance before rotation start
- 98%+ evaluation completion rate
- < 2% evaluation late submission rate
- Zero accreditation deficiencies

### System Performance
- 99.9% uptime
- < 2 second page load time
- < 500ms API response time (95th percentile)

---

## Deliverables

1. ✅ Architecture diagram (text format)
2. ✅ Database schema with ERD
3. ✅ API routes list
4. ✅ Automation rules list
5. ✅ Matching algorithm logic
6. ✅ Backend code scaffold (NestJS)
7. ✅ Frontend code scaffold (Next.js)

---

## Timeline

**Phase 1: Foundation (Weeks 1-4)**
- Database schema setup
- Authentication & RBAC
- User management
- Basic dashboards

**Phase 2: Core Modules (Weeks 5-12)**
- Compliance engine
- Rotation management
- Matching algorithm
- Evaluation system

**Phase 3: Automation (Weeks 13-16)**
- Notification scheduler
- Auto-reminders
- Auto-grade calculation
- Compliance monitoring

**Phase 4: Reporting (Weeks 17-20)**
- Dashboard analytics
- Report generation
- Evidence packs
- Data export

**Phase 5: Testing & Launch (Weeks 21-24)**
- User acceptance testing
- Bug fixes
- Documentation
- Production deployment

---

## Risk Mitigation

**Technical Risks:**
- Complex matching algorithm → Start with simple rules, iterate
- Data migration from existing systems → Build import tools with validation
- Performance with large datasets → Index optimization, caching strategy

**User Adoption Risks:**
- Resistance to change → Comprehensive training, phased rollout
- Learning curve → Intuitive UI, contextual help, video tutorials

**Compliance Risks:**
- Missed deadlines → Multiple automation layers, manual overrides
- Data accuracy → Validation rules, audit trails, reconciliation reports

---

## Future Enhancements

- Mobile app (React Native)
- Advanced analytics with ML predictions
- Integration with university SIS
- Calendar sync (Google/Outlook)
- Digital signature for agreements
- Student portfolio builder
- Preceptor community forum
- Automated CPE credit tracking
