# ADMIN HUB - COMPLETE SPECIFICATION
**Generated: January 31, 2026**  
**Status: PRODUCTION READY**

---

## A) INFORMATION ARCHITECTURE

### Admin Navigation Structure
```
🏠 Admin Hub (Main Command Center)
  ├── My Action Required (Personal Queue)
  ├── Unit Queues
  │   ├── 📚 Academic Affairs Queue
  │   ├── 🏥 Clinical Affairs Queue
  │   ├── ✓ Quality Assurance Queue
  │   ├── 🔬 Research Unit Queue
  │   ├── 🎓 Alumni Unit Queue
  │   └── 🤝 Community Service Queue
  ├── Reports & Analytics
  │   ├── SLA Performance Dashboard
  │   ├── Response Time Trends
  │   ├── Request Volume Analysis
  │   └── Unit Comparison Report
  ├── Announcements/News Management
  │   ├── Create Banner
  │   ├── Publish News Item
  │   └── Email Notifications
  └── Settings
      ├── Role Management
      ├── SLA Rules Configuration
      ├── Email Templates
      └── System Preferences
```

---

## B) ADMIN HOME PAGE LAYOUT

### 1) Global Alert Bar (RAG Status)
**Location:** Top of page (sticky)

**Visual States:**
- 🔴 **RED**: ≥5 overdue requests
  - Message: "X overdue requests require immediate action"
  - Background: #FF0000 with white text
  - Action: Click to filter "Overdue" queue

- 🟠 **AMBER**: 2-4 overdue OR ≥5 at risk (SLA warning)
  - Message: "X overdue, Y at risk - SLA attention needed"
  - Background: #FFA500 with white text
  - Action: Click to filter high-priority requests

- 🟢 **GREEN**: <2 overdue AND <5 warning
  - Message: "All SLAs within target"
  - Background: #28A745 with white text

**Calculation Logic:**
```javascript
breachedCount = requests.filter(r => r.slaStatus === 'breached').length
warningCount = requests.filter(r => r.slaStatus === 'warning').length

if (breachedCount >= 5) → RED
else if (breachedCount >= 2 || warningCount >= 5) → AMBER
else → GREEN
```

---

### 2) KPI Tiles (5 Outstanding Numbers)

| Tile | Icon | Calculation | Click Action | Refresh |
|------|------|-------------|--------------|---------|
| **New Requests Today** | 🆕 | `requests.filter(r => createdAt > 24h ago).length` | Link to "New" queue | Every 30min |
| **Pending Requests** | ⏳ | `requests.filter(r => status IN [pending_review, pending_student, pending_docs, pending_site, in_progress]).length` | Link to "Pending" queue | Every 15min |
| **Overdue (SLA Breached)** | 🔴 | `requests.filter(r => slaDueAt < now && status !== closed).length` | Link to "Overdue" queue (CRITICAL) | Every 5min |
| **Resolved This Week** | ✅ | `requests.filter(r => status IN [approved, closed] && updatedAt > 7d ago).length` | Link to "Closed" filter | Daily |
| **Waiting for Student** | 📧 | `requests.filter(r => status === pending_student).length` | Link to "Waiting" queue | Every 10min |

**Styling:** 
- Card-based layout, 5-column grid
- Large number (2.5rem font), color-coded
- Hover effect: slight shadow lift
- Click anywhere on card to deep-link

---

### 3) Requests by Unit (Summary Table)

**Columns:**
| Column | Content | Sortable | Clickable |
|--------|---------|----------|-----------|
| Unit | Icon + Name | Yes | Yes → Unit Dashboard |
| New | Count with red badge | Yes | Yes → Unit "New" queue |
| Pending | Count with orange badge | Yes | Yes → Unit "Pending" queue |
| Overdue | Count with red badge | Yes | Yes → Unit "Overdue" queue |
| Avg Response Time | e.g., "2.5h" | Yes | No |
| SLA Compliance % | Color-coded (green/amber) | Yes | Yes → SLA report |

**Definition of Statuses:**
- **New**: status = 'new' (unassigned, created < 24h)
- **Pending**: status IN ['pending_review', 'pending_student', 'pending_docs', 'pending_site', 'in_progress']
- **Overdue**: SLA breach (slaDueAt < now AND status NOT IN ['closed', 'approved'])

**Unit List (6 Units):**
1. 📚 Academic Affairs (Dr. Sarah Al-Mansour)
2. 🏥 Clinical Affairs (Dr. Fatima Al-Rashid)
3. ✓ Quality Assurance (Dr. Mohammed Al-Shammari)
4. 🔬 Research Unit (Dr. Karim Al-Malik)
5. 🎓 Alumni Unit (Dr. Samira Al-Rashid)
6. 🤝 Community Service (Dr. Aisha Al-Johara)

---

### 4) "My Action Required" Critical Requests Table

**Mandatory Columns:**
| Column | Example | Sortable | Filter | Width |
|--------|---------|----------|--------|-------|
| Request ID | COP-REQ-2026-000101 | Yes | Yes | 140px |
| Student Name | Fatima Al-Rashid | Yes | Yes | 150px |
| Type | Rotation Change | Yes | Yes | 130px |
| Unit | Clinical Affairs | Yes | Yes | 130px |
| Status | Pending Review | Yes | Yes | 120px |
| Days Pending | 7 | Yes | Yes | 80px |
| SLA Countdown | 🔴 -1d (OVERDUE) | Yes (primary sort) | Yes | 100px |
| Priority | H / M / L | Yes | Yes | 70px |
| Next Action | Confirm with Preceptor | No | No | 180px |
| Actions | [✓] [View] | No | No | 120px |

**Status Color Coding:**
- New: #FF6B6B (Red)
- Pending Review: #FFA500 (Orange)
- Pending Student: #FFD700 (Gold)
- Pending Docs: #FFC0CB (Pink)
- Pending Site: #87CEEB (Blue)
- In Progress: #4CAF50 (Green)
- Approved: #228B22 (Dark Green)
- Escalated: #FF1493 (Deep Pink)

**SLA Visual Indicators:**
```
🟢 GREEN:  > 48 hours remaining
🟠 AMBER:  24-48 hours remaining
🔴 RED:    < 24 hours remaining OR breached
```

**Default Sorting:**
1. **Primary**: SLA Status (Breached first, then Warning, then OK)
2. **Secondary**: Priority (High → Medium → Low)
3. **Tertiary**: Days Remaining (ascending - soonest first)

**Pagination:**
- Display top 15 critical requests by default
- Pagination: 25 / 50 / 100 per page option
- Total count shown: "Showing 1-15 of 87 requests"

**Action Buttons per Row:**
- ✓ **Approve** (Quick action - requires confirmation dialog)
- **View** (Opens detail modal)
- **Assign** (Reassign to staff member)
- **Reply** (Send message to student)
- **Request Info** (Ask for missing documents)
- **Close** (Mark as resolved - requires reason)
- **Escalate** (Move to unit head - auto-notifies)

---

### 5) Notifications Center
**Location:** Bottom of page OR collapsible sidebar  
**Visible Notification Categories:**

| Category | Trigger | Count | Example |
|----------|---------|-------|---------|
| New Request Assigned | New request routed to you | 3 | "New Clinical Affairs request assigned" |
| Student Reply Received | Student responds to pending | 2 | "Fatima Al-Rashid replied to REQ-000101" |
| Missing Documents | Student not submitted docs | 5 | "3 requests missing attachments" |
| SLA Warning | 24h before breach | 4 | "2 requests SLA expiring in 24h" |
| Escalation Alert | Request escalated to unit head | 1 | "REQ-000202 escalated to Clinical Head" |

---

### 6) Quick Actions
**Location:** Right sidebar OR button group  
**Actions:**

| Action | Icon | Permission | Modal/Dialog |
|--------|------|-----------|-------------|
| Create Urgent Banner | 📣 | super_admin | Text input + category selector |
| Publish News Item | 📰 | super_admin | WYSIWYG editor + publish date |
| Assign Request | 👤 | unit_coordinator+ | Dropdown staff list + message |
| Export Report | 📊 | all roles | Format selector (PDF/Excel/CSV) |
| Send Announcement | 📧 | super_admin | Rich text + recipient filter |

---

## C) UNIT-SPECIFIC DASHBOARDS

### 1) Academic Affairs Dashboard
**Request Types:**
- Academic Support (Course tutoring, study plans)
- Tutoring/Mentorship (1-on-1 sessions)
- Grade Appeal (Challenge assessment)
- Remediation Plan (Failing course recovery)

**Key Metrics (Display Top 3):**
```
1. Avg Response Time (Target: < 2 days)
2. SLA Compliance % (Target: > 95%)
3. Most Common Request Type (e.g., "Support: 45%")
```

**Unit Queue Filters:**
- Show requests for current week/month
- Filter by instructor/course
- Filter by student level (1st/2nd/3rd year)

**Special Workflow:**
- Remediation requests route to Department Chair for approval
- Appeals require documented justification
- Grade changes audit-logged

**Staffing:**
- Head: Dr. Sarah Al-Mansour
- Coordinator: Ahmed Al-Otaibi
- Available Staff: Dr. Mona Al-Jabri (shared with Clinical)

---

### 2) Clinical Affairs Dashboard
**Request Types:**
- Rotation Change (Site/time swap)
- Site Issue (Facility concern, safety)
- Preceptor Concern (Behavioral/competency)
- Schedule Conflict (Exam/personal emergency)

**Key Metrics:**
```
1. Rotation Change Approval Time (Target: < 2 days)
2. Site Confirmation Pending Count (Visual: # awaiting response)
3. SLA Compliance by Program Filter (APPE/IPPE/IPTE)
```

**Unit Queue Filters:**
- Filter by Program: APPE / IPPE I / IPPE II / IPPE III / IPTE
- Filter by Site/Location
- Filter by Preceptor
- Filter by Rotation Type (Community/Hospital/Clinic)

**Special Workflow:**
- Urgent site issues → Auto-escalate to Preceptor within 24h
- Rotation changes → Check site availability before approval
- Awaiting Site Confirmation state (manual hold until response)

**Staffing:**
- Head: Dr. Fatima Al-Rashid
- Coordinator: Noor Al-Dosari
- Available Staff: Dr. Mona Al-Jabri (shared with Academic)

---

### 3) Quality Assurance Unit Dashboard
**Request Types:**
- Student Complaint (General grievance)
- Appeal/Grievance (Formal challenge to decision)
- Investigation (Allegation requiring inquiry)

**Key Metrics:**
```
1. Complaint Trend (Last 30 days: # complaints)
2. Repeated Issue Detector (Issues appearing 3+ times flagged)
3. SLA Compliance % (Note: QA has longer SLA)
```

**Unit Queue Filters:**
- Filter by Complaint Category (Academic/Conduct/Facilities/Other)
- Filter by Status (Investigation Stage: Initial/Inquiry/Decision/Closed)
- Confidential toggle (Show/Hide restricted access)

**Special Workflow:**
- **Confidentiality**: Some requests only visible to QA Head + assigned investigator
- **Investigation Flow**: 
  1. Initial complaint intake
  2. Evidence collection phase
  3. Hearing/review (if needed)
  4. Decision + communication
  5. Appeal opportunity + closure

**Staffing:**
- Head: Dr. Mohammed Al-Shammari
- Coordinator: Layla Al-Zahra
- Note: Requires high confidentiality clearance

---

### 4) Research Unit Dashboard
**Request Types:**
- Conference Participation (Submission + travel)
- Abstract/Poster Support (Approval + feedback)
- Travel Authorization (Fund approval)

**Key Metrics:**
```
1. Conference Approvals This Semester (Count)
2. Pending Travel Authorizations (Count + Total $)
3. Publications Supported This Year (Count)
```

**Unit Queue Filters:**
- Filter by Conference Type (International/National/Regional)
- Filter by Funding Status (Approved/Pending/Denied)
- Filter by Student Level (Undergrad/Graduate/Faculty)

**Special Workflow:**
- Abstract deadline triggers auto-reminder (10 days before)
- Travel requests require budget approval before booking
- Faculty requests route differently than student requests

**Staffing:**
- Head: Dr. Karim Al-Malik
- Coordinator: Rania Al-Jaber
- Available Staff: Rashid Al-Qahtani

---

### 5) Alumni Unit Dashboard
**Request Types:**
- Mentorship Request (Connect with grad)
- Alumni Verification (Degree/status confirmation)

**Key Metrics:**
```
1. Mentorship Matches This Month (Count)
2. Verification Turnaround Time (Target: 1 day)
3. Alumni Engagement Rate (%)
```

**Unit Queue Filters:**
- Filter by Mentorship Type (Career/Academic/Entrepreneurship)
- Filter by Alumni Industry (Hospital/Pharmacy/Biotech/etc.)
- Filter by Program (BPharm/PharmD/Tech)

**Special Workflow:**
- Mentorship = connect student with grad (not direct support from unit)
- Verification = quick administrative task (email/document check)

**Staffing:**
- Head: Dr. Samira Al-Rashid
- Coordinator: Hana Al-Khalid
- Available Staff: Rashid Al-Qahtani

---

### 6) Community Service Dashboard
**Request Types:**
- Participation Request (Sign up for activity)
- Hours Verification (Validate volunteer hours)

**Key Metrics:**
```
1. Pending Hours Verification (Count)
2. Certificates Pending Issuance (Count)
3. Total Student Hours Verified This Month (Sum)
```

**Unit Queue Filters:**
- Filter by Activity Type (Clinic/School/Charity/etc.)
- Filter by Status (Pending Approval / In Progress / Verified / Certified)
- Filter by Student Class Year

**Special Workflow:**
- Participation requests = automatic approval (capacity permitting)
- Hours verification = student submits + supervisor signs + unit approves
- Certificate generation = batch process after approval

**Staffing:**
- Head: Dr. Aisha Al-Johara
- Coordinator: Maha Al-Ayouni

---

## D) DATA MODEL

### Request Table (GLOBAL)
```
request_id              VARCHAR(50)      PRIMARY KEY     e.g., COP-REQ-2026-000101
student_id             VARCHAR(20)      NOT NULL        e.g., 441210049
student_name           VARCHAR(100)     NOT NULL        Full name
unit                   VARCHAR(50)      NOT NULL        FK → units table
request_type           VARCHAR(50)      NOT NULL        e.g., "rotation_change"
status                 VARCHAR(50)      NOT NULL        e.g., "pending_review"
priority               VARCHAR(20)      NOT NULL        HIGH / MEDIUM / LOW
created_at             TIMESTAMP        NOT NULL        Auto-set at creation
updated_at             TIMESTAMP        DEFAULT NOW()   Auto-update
assigned_to            VARCHAR(50)      NULLABLE        FK → admin_users.id
owner_office           VARCHAR(100)     NULLABLE        e.g., "Department of Medicine"
sla_due_at             TIMESTAMP        NOT NULL        Calculated from unit + type
last_action_at         TIMESTAMP        NULLABLE        Last status/comment change
next_action            VARCHAR(255)     NULLABLE        Human-readable next step
attachments            JSON             NULLABLE        [{name, url, uploadedAt}, ...]
notes                  TEXT             NULLABLE        Internal notes (logged)
request_history        JSON             NULLABLE        [{actor, action, time, change}, ...]
confidential           BOOLEAN          DEFAULT FALSE   If TRUE, restrict visibility
```

**Indexes:**
- Primary: request_id
- Composite: (unit, status) for queue filtering
- Composite: (assigned_to, status) for personal queue
- Composite: (sla_due_at, status) for SLA tracking
- Composite: (created_at DESC) for recent requests

---

### SLA Rules Table
```
sla_rule_id            INT              PRIMARY KEY     AUTO INCREMENT
unit                   VARCHAR(50)      NOT NULL        FK → units
request_type           VARCHAR(50)      NOT NULL        e.g., "rotation_change"
stage_1_days           INT              NOT NULL        e.g., 2 days for clinical
stage_2_days           INT              NOT NULL        e.g., 3 days total
escalation_enabled     BOOLEAN          DEFAULT TRUE
escalation_rule        VARCHAR(255)     NULLABLE        "escalate_to: unit_head"
notes                  TEXT             NULLABLE        "Working days only"

UNIQUE CONSTRAINT: (unit, request_type)
```

**Pre-populated Rules:**
```
academic_support         → 3 days
academic_tutoring        → 2 days
academic_appeal          → 5 days
academic_remediation     → 4 days

clinical_rotation_change → 2 days (URGENT)
clinical_site_issue      → 1 day (CRITICAL)
clinical_preceptor       → 2 days
clinical_schedule        → 2 days

qa_complaint             → 5 days
qa_appeal                → 7 days
qa_investigation         → 10 days

research_conference      → 7 days
research_abstract        → 3 days
research_travel          → 5 days

alumni_mentorship        → 3 days (no escalation)
alumni_verification      → 2 days

community_participation  → 3 days
community_hours          → 2 days
```

---

### Users/Roles Table
```
user_id                VARCHAR(50)      PRIMARY KEY     e.g., "admin001"
user_name              VARCHAR(100)     NOT NULL
user_email             VARCHAR(100)     NOT NULL        UNIQUE
role                   VARCHAR(50)      NOT NULL        super_admin | unit_coordinator | unit_head | admin_staff
unit_assignments       JSON             NOT NULL        ["academic", "clinical"] or ALL
permissions            JSON             NOT NULL        ["view_all", "approve_unit", "assign", ...]
is_active              BOOLEAN          DEFAULT TRUE
created_at             TIMESTAMP        NOT NULL
last_login             TIMESTAMP        NULLABLE
```

**Roles & Permissions Matrix:**

| Role | View Requests | Approve | Assign | Export | Settings | Units |
|------|---------------|---------|--------|--------|----------|-------|
| super_admin | ALL | ALL | ALL | ✓ | ✓ | ALL |
| unit_head | Own unit | Own unit | Own unit | ✓ | Own unit | 1 |
| unit_coordinator | Own unit | Own unit | Own unit | ✓ | - | 1 |
| admin_staff | Assigned only | Assigned | - | - | - | - |

---

### Notifications Table (Optional)
```
notification_id        INT              PRIMARY KEY     AUTO INCREMENT
request_id             VARCHAR(50)      FK → requests
trigger_type           VARCHAR(50)      NEW_ASSIGNMENT | STUDENT_REPLY | MISSING_DOCS | SLA_WARNING | ESCALATION
recipient_user_id      VARCHAR(50)      FK → users
notification_title     VARCHAR(255)     e.g., "New request assigned to you"
notification_body      TEXT
sent_at                TIMESTAMP        NOT NULL
read_at                TIMESTAMP        NULLABLE
read_status            ENUM             UNREAD / READ
action_url             VARCHAR(500)     Deep link to request detail
```

---

## E) WORKFLOWS & STATUS STATES

### Global Request Lifecycle
```
┌─────────────────────────────────────────────────────────────────┐
│                    REQUEST LIFECYCLE                             │
└─────────────────────────────────────────────────────────────────┘

NEW (Unassigned)
  ↓
  ├→ Auto-assign by unit → PENDING_REVIEW
  │
PENDING_REVIEW
  ├→ More info needed → PENDING_DOCS / PENDING_STUDENT
  ├→ Decision made → APPROVED / REJECTED
  ├→ Awaiting external → PENDING_SITE
  ├→ In active work → IN_PROGRESS
  │
PENDING_DOCS / PENDING_STUDENT / PENDING_SITE
  ├→ Docs received / Student replied / Site confirmed → return to PENDING_REVIEW
  ├→ No response after reminder(s) → ESCALATED
  │
IN_PROGRESS
  ├→ Work complete → APPROVED
  ├→ Cannot fulfill → REJECTED
  │
APPROVED
  └→ Closed (Auto-close or manual) → CLOSED

REJECTED
  └→ Closed → CLOSED

ESCALATED
  ├→ Escalated to next level
  └→ If still unresolved → further escalation or REJECTED
```

### Unit-Specific Workflow: Clinical Affairs (Rotation Change)
```
NEW
  ↓
AUTO-ASSIGN TO COORD
  ↓
PENDING_REVIEW (Coordinator reviews request validity)
  ├→ Valid → PENDING_SITE (request sent to new site preceptor)
  ├→ Invalid → REJECTED (notify student)
  │
PENDING_SITE (Awaiting site confirmation) [SLA: 2 days]
  ├→ Site confirmed → APPROVED
  ├→ Site declined → REJECTED (offer alternatives)
  ├→ No response after 48h → ESCALATED (to Clinical Head)
  │
ESCALATED (Clinical Head intervenes)
  ├→ Head approves alternative → APPROVED
  ├→ Head cannot resolve → REJECTED + escalation to Dean
  │
APPROVED
  ├→ Student notified
  └→ CLOSED (Administrative closure after 5 days)
```

### "Waiting for Student" State Handling
**Trigger:** Status = 'pending_student'
- Request assigned to student for action (missing docs, confirmation, etc.)
- Countdown starts: 3 days until escalation
- Notification sent daily: "Action required from student"
- After 3 days without response: Auto-escalate to ESCALATED status

---

## F) AUTOMATIONS

### Auto-ID Generation
**Format:** `COP-{TYPE}-{YEAR}-{SEQUENCE}`

Examples:
- `COP-REQ-2026-000101` (Regular request)
- `COP-COMP-2026-000045` (Complaint)
- `COP-APP-2026-000023` (Appeal)

**Sequence:** 6-digit zero-padded, increments per type per year

### Auto-Routing Logic
```
When request created:
1. User selects unit + type
2. System finds SLA rule (unit + type)
3. System identifies unit coordinator
4. IF request type = "urgent" → assign to head directly
5. ELSE → auto-assign to coordinator
6. Log assignment with timestamp
7. Send auto-notification to assignee
```

### Auto-Notifications (Trigger-Based)

| Event | Recipient | Template | Delay |
|-------|-----------|----------|-------|
| New Request Created | Student | "Your request #{id} received and is being reviewed" | Immediate |
| Request Assigned | Assigned Staff | "New request assigned to you: {type} from {student}" | Immediate |
| Status Change | Student | "Request status changed to {status}" | Immediate |
| Document Requested | Student | "We need {docs} from you - please upload by {date}" | Immediate |
| SLA Warning 48h | Assigned Staff | "Request {id} SLA expires in 48 hours" | Auto-triggered 48h before |
| SLA Breach | Unit Head | "Request {id} SLA BREACHED - escalation required" | Immediate when breached |
| Student Reply Received | Assigned Staff | "Student replied to {request_id}" | Immediate |
| Escalation | Unit Head | "Request {id} escalated to you - action required" | Immediate |

### Auto-Reminders (Scheduled)
| Schedule | Condition | Action |
|----------|-----------|--------|
| Daily 9 AM | Status = pending_student, age > 1 day | Send reminder to student: "Action needed from you" |
| Daily 10 AM | SLA breach tomorrow, status ≠ closed | Notify assigned staff + unit coordinator |
| Daily 11 AM | Status = pending_docs, age > 3 days | Escalate to unit head |
| Weekly Mon 8 AM | Requests pending > 5 days | Unit head receives summary report |
| Monthly 1st | End of cycle | Generate compliance report per unit |

### Audit Trail Requirements
**Every change logged with:**
- Actor (user_id, role)
- Action (Status change / Reassign / Comment added / etc.)
- Timestamp (precise, with timezone)
- Before/After values (for status/assignee changes)
- IP address (optional, for security)
- Reason/Notes (from actor if applicable)

**Stored in:** `request_history` JSON array, queryable by date/actor/action

---

## G) ADMIN UX DETAILS

### Default Sorting & Filtering
**My Action Required Table:**
1. **Primary Sort:** SLA Status (Breached > Warning > OK)
2. **Secondary Sort:** Priority (High > Medium > Low)
3. **Tertiary Sort:** Days Remaining (ascending)

**Unit Queues:**
- Default: All requests, sorted by created_at DESC
- Common filters (checkboxes):
  - ☐ New
  - ☐ Pending
  - ☐ Overdue
  - ☐ Waiting for Student
  - ☐ My Assignments

**Search/Filter Bar (Global):**
```
[Search field: Request ID / Student name / Type]
[Unit dropdown] [Status dropdown] [Priority checkbox] [Date range picker]
[SLA status: All / Breached / Warning / OK]
```

### Bulk Actions
**Selection:** Checkboxes in table header, per-row

**Available Actions (if 1+ selected):**
- ☐ **Assign To** → Dropdown staff list + bulk notification
- ☐ **Change Status To** → Dropdown statuses (constrained by current state)
- ☐ **Add Tag** → e.g., "Urgent", "Follow-up", "Confidential"
- ☐ **Send Message** → Compose message to selected students
- ☐ **Export Selection** → PDF / Excel (request details)
- ☐ **Close Selected** → With reason textbox (requires confirmation)

### Confirmation Dialogs
Required before executing:

**Approve Request**
```
"Approve request COP-REQ-2026-000101?
This will notify the student immediately."
[Cancel] [Confirm]
```

**Reject Request**
```
"Reject request COP-REQ-2026-000101?
Reason (required): [textarea]
[Cancel] [Reject]
```

**Escalate Request**
```
"Escalate COP-REQ-2026-000101 to Unit Head?
New assignee will be notified.
Notes: [textarea]
[Cancel] [Escalate]
```

### Responsive/Mobile Considerations
- On mobile: Hide "Next Action" column
- Tables: Horizontal scroll with sticky first column
- Modals: Full-screen on mobile, centered on desktop
- KPI tiles: 2-column grid on tablet, 1-column on mobile

---

## IMPLEMENTATION CHECKLIST

### Phase 1: Core (✅ COMPLETED)
- ✅ Data model created (admin-hub-model.js)
- ✅ Admin Hub navigation added
- ✅ Admin Home page layout (RAG, KPIs, Unit table, Critical requests)
- ✅ SLA calculations and status colors
- ✅ Demo data (8 sample requests across all units)

### Phase 2: Interactions (🔄 IN PROGRESS)
- 🔄 Action buttons wired to handlers
- 🔄 Deep-linking from KPI tiles to filtered queues
- 🔄 Modal for request detail view
- 🔄 Status change workflow

### Phase 3: Unit Dashboards (⏳ PENDING)
- ⏳ Academic Affairs dashboard renderer
- ⏳ Clinical Affairs dashboard renderer
- ⏳ QA dashboard renderer
- ⏳ Research dashboard renderer
- ⏳ Alumni dashboard renderer
- ⏳ Community Service dashboard renderer

### Phase 4: Advanced Features (⏳ PENDING)
- ⏳ Bulk actions (select, assign, export)
- ⏳ Notification center with badge count
- ⏳ Auto-reminder triggers
- ⏳ Email notification system integration
- ⏳ Audit trail display
- ⏳ Reports & analytics dashboard

### Phase 5: Security & Polish (⏳ PENDING)
- ⏳ Role-based view filtering
- ⏳ Confidential request restriction (QA only)
- ⏳ Audit logging for all actions
- ⏳ Mobile responsive testing

---

**Last Updated:** 2026-01-31 | **Version:** 1.0  
**Contact:** admin@ksauhs.edu.sa
