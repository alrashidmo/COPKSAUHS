# STUDENT PORTAL SPECIFICATION
## College of Pharmacy - KSAU-HS

---

## TABLE OF CONTENTS
1. [Portal Navigation Structure](#1-portal-navigation-structure)
2. [1. HOME Page](#2-home-page)
3. [2. STUDENT INFORMATION HUB](#3-student-information-hub)
4. [3. SUBMIT REQUESTS](#4-submit-requests)
5. [4. TRACKERS](#5-trackers)
6. [5. AUTOMATION REQUIREMENTS](#6-automation-requirements)
7. [6. STUDENT DASHBOARD](#7-student-dashboard)
8. [Data Models & Workflows](#8-data-models--workflows)

---

## 1. PORTAL NAVIGATION STRUCTURE

### Main Navigation (Sidebar)
```
Student Portal
├── Home
├── My Dashboard
├── Submit Request
├── Track My Requests
│   ├── Letters & Documents (Tracker #1)
│   ├── Experiential Requests (Tracker #2)
│   ├── Events & Participation (Tracker #3)
│   ├── Complaints & Grievances (Tracker #4)
│   └── IT Support (Tracker #5)
├── News & Announcements
├── Guides & FAQs
└── Contact Us
```

---

## 2. HOME PAGE

### Layout Structure

#### A. COLLEGE NEWS (Feed)
**Display:** Top 5-10 posts, auto-sorted by most recent date

**Data Fields per News Item:**
- `newsId` (auto-generated)
- `title` (max 100 chars)
- `excerpt` (max 300 chars)
- `content` (full text)
- `category` (e.g., "Academic", "Event", "Announcement", "General")
- `imageUrl` (optional)
- `publishDate` (timestamp)
- `author` (office/person)
- `readMoreLink` (optional)

**HTML Structure:**
```html
<section class="home-news-feed">
    <div class="section-header">
        <h3>College News</h3>
        <a href="#news-announcements" class="view-all">View All →</a>
    </div>
    <div class="news-list">
        <!-- News items repeating -->
        <article class="news-card">
            <div class="news-meta">
                <span class="news-date">Jan 29, 2026</span>
                <span class="news-category">Academic</span>
            </div>
            <h4 class="news-title">Title</h4>
            <p class="news-excerpt">Excerpt...</p>
        </article>
    </div>
</section>
```

---

#### B. ANNOUNCEMENTS (Banner)
**Display:** Urgent items with visual prominence

**Data Fields:**
- `announcementId`
- `title` (max 150 chars)
- `message` (max 500 chars)
- `type` (enum: "deadline", "room-change", "exam-notice", "urgent", "closure")
- `urgencyLevel` (enum: "critical", "high", "medium")
- `startDate`
- `endDate`
- `affectsPrograms[]` (array of program IDs)
- `relatedLinks[]`

**HTML Structure:**
```html
<section class="home-announcements">
    <div class="announcement-banner" data-urgency="critical">
        <div class="announcement-icon">⚠️</div>
        <div class="announcement-content">
            <h4 class="announcement-title">Title</h4>
            <p class="announcement-message">Message...</p>
            <div class="announcement-dates">
                <span>Valid until: DATE</span>
            </div>
        </div>
        <button class="announcement-close" aria-label="Close">×</button>
    </div>
</section>
```

**Urgency Color Coding:**
- `critical` → Red (#E74C3C)
- `high` → Orange (#F39C12)
- `medium` → Yellow (#F1C40F)

---

#### C. THIS WEEK AT COP (Events & Activities)
**Display:** 3-6 bullet items, auto-populated from event calendar

**Data Fields per Item:**
- `eventId`
- `eventName` (max 100 chars)
- `eventDate` (date/time)
- `eventType` (enum: "event", "workshop", "survey", "deadline", "reminder")
- `location` (optional)
- `registrationLink` (optional)
- `relevantTo[]` (array of cohorts/programs)

**HTML Structure:**
```html
<section class="home-this-week">
    <div class="section-header">
        <h3>This Week at COP</h3>
    </div>
    <ul class="weekly-events-list">
        <li class="weekly-event">
            <span class="event-icon">📅</span>
            <div class="event-details">
                <span class="event-name">Event Name</span>
                <span class="event-date">Jan 30, 2026 - 2:00 PM</span>
            </div>
            <a href="#" class="event-link">Learn More →</a>
        </li>
    </ul>
</section>
```

---

#### D. QUICK LINKS
**Display:** Grid or horizontal list of 6 quick access links

**Links:**
1. **Timetable** → `/student-portal?view=timetable`
2. **Student Handbook** → (PDF link)
3. **University Email** → (external)
4. **LMS** → (external - Moodle/Blackboard)
5. **Campus Map** → (PDF/interactive map)
6. **Library** → (external - library portal)

**HTML Structure:**
```html
<section class="home-quick-links">
    <div class="section-header">
        <h3>Quick Links</h3>
    </div>
    <div class="quick-links-grid">
        <a href="#" class="quick-link-card">
            <span class="quick-link-icon">📚</span>
            <span class="quick-link-label">Timetable</span>
        </a>
        <!-- repeat for each link -->
    </div>
</section>
```

---

## 3. STUDENT INFORMATION HUB

### A. ACADEMIC CALENDAR & KEY DEADLINES

**Data Fields:**
- `semesterId`
- `startDate`
- `endDate`
- `deadlines[]` (array):
  - `deadlineId`
  - `title` (e.g., "Drop/Add Deadline", "APPE Rotation Selection")
  - `dueDate`
  - `affectsPrograms[]`
  - `description`
  - `relatedForm` (link to form if applicable)

**Display Format:**
- Timeline view (calendar)
- List view (sortable by date)
- Color-coded by type (academic, experiential, registration)

---

### B. PROGRAM GUIDES

**Sections:**

1. **IPPE/APPE Rules**
   - Rotation requirements (minimum hours, duration)
   - Prerequisite courses
   - GPA/attendance requirements
   - Progression criteria
   - Grading scale

2. **Attendance Policy**
   - Minimum attendance percentage
   - Absence procedures
   - Excused vs unexcused absences
   - Consequences for violations
   - Appeal process

3. **Professionalism Guidelines**
   - Dress code requirements
   - Behavior expectations
   - Communication standards
   - Social media guidelines
   - Consequences for violations

4. **Official Forms**
   - Downloadable list
   - Forms organized by category
   - Links to submission processes
   - Required signatures/approvals

**HTML Structure:**
```html
<section class="info-hub-guides">
    <div class="guides-tabs">
        <button class="tab" data-tab="ippe-appe">IPPE/APPE Rules</button>
        <button class="tab" data-tab="attendance">Attendance Policy</button>
        <button class="tab" data-tab="professionalism">Professionalism</button>
        <button class="tab" data-tab="forms">Official Forms</button>
    </div>
    <div class="tab-content">
        <!-- Content for each tab -->
    </div>
</section>
```

---

### C. TRAINING & ROTATION INFORMATION

**Data Fields:**

1. **Training Sites**
   - Site name
   - Location (address, map link)
   - Contact person (name, email, phone)
   - Available rotations
   - Capacity
   - Special requirements

2. **Rotation Requirements**
   - Rotation name
   - Duration (weeks)
   - Schedule (day/evening/block)
   - Prerequisites
   - Learning outcomes
   - Assessment methods

3. **Vaccination Requirements**
   - Required vaccines (list with CDC guidelines)
   - Proof requirements (documents needed)
   - Exemptions process
   - Timeline for submission

4. **Required Documents**
   - Document type
   - Where to obtain
   - Deadline for submission
   - Verification method

5. **Contact Persons**
   - Name, title
   - Email
   - Phone
   - Office hours
   - Specific responsibility area

---

### D. FAQs AND HOW-TO RESOURCES

**Categories:**
1. How to submit a request
2. How to track a request
3. How to access forms
4. How to register for rotations
5. How to upload documents
6. How to contact support

**Format:**
- Expandable FAQ items (collapsible)
- Embedded instructional videos
- Step-by-step written guides with screenshots
- Search functionality across FAQs

**HTML Structure:**
```html
<section class="info-hub-faqs">
    <input type="search" class="faq-search" placeholder="Search FAQs...">
    <div class="faq-list">
        <div class="faq-item">
            <button class="faq-question">
                How do I submit a request?
                <span class="faq-toggle">+</span>
            </button>
            <div class="faq-answer hidden">
                <ol>
                    <li>Click "Submit Request"</li>
                    <!-- steps -->
                </ol>
                <video src="..." controls></video>
            </div>
        </div>
    </div>
</section>
```

---

## 4. SUBMIT REQUESTS

### Navigation Design
Single modular page with request type tiles/cards. Each tile links to a structured form.

### A. REQUEST TYPES & FORMS

---

#### **TYPE 1: LETTER REQUESTS**

**Tile Description:**
"Request official letters for personal, professional, or academic purposes"

**Form Fields:**
```
Request Type (radio): 
  ○ To Whom It May Concern
  ○ Training Letter
  ○ Enrollment Letter

Letter Details:
  - Letter Purpose (text): [optional - for TWIMC]
  - Number of Copies: [1-10]
  - Delivery Method: ○ Electronic ○ Physical ○ Both
  - Delivery Address (if Physical): [address field]
  - Special Instructions: [textarea]

Timeline:
  - Needed By Date: [date picker]
  - Urgency: ○ Routine ○ Urgent (extra fee may apply)

Attachments:
  - Supporting Documents: [file upload - optional]
    (Examples: invitation letters, job offer details)

Confirmation:
  ☐ I confirm accuracy of information
  [SUBMIT BUTTON]
```

**Auto-Fields:**
- `letterId`: COP-LETTER-YYYY-000XXX
- `studentName` (pre-filled from profile)
- `studentId` (pre-filled from profile)
- `studentEmail` (pre-filled from profile)
- `submissionDate` (system timestamp)
- `status` (initial: "Submitted")

---

#### **TYPE 2: CLINICAL / EXPERIENTIAL REQUESTS**

**Tile Description:**
"Request rotation changes, report site issues, or escalate preceptor concerns"

**Form Fields:**
```
Request Type (radio):
  ○ Rotation Change Request
  ○ Site Issue Report
  ○ Preceptor Concern
  ○ Schedule Conflict

--- IF: Rotation Change Request ---
Current Rotation Details:
  - Current Site: [dropdown]
  - Current Preceptor: [auto-filled]
  - Current Schedule: [display only]
  - Weeks Remaining: [display only]

Requested Changes:
  - Desired Site: [dropdown with availability]
  - Reason for Change: [textarea, max 500 chars]
  - Preferred Start Date: [date picker]
  - Backup Options: [multi-select sites]

--- IF: Site Issue Report ---
Issue Details:
  - Current Site: [dropdown]
  - Issue Category: [multi-select]
    ☐ Safety Concern
    ☐ Learning Environment
    ☐ Equipment/Resources
    ☐ Work Hours
    ☐ Other
  - Issue Description: [textarea, max 1000 chars]
  - Evidence/Documentation: [file upload - optional]
  - Severity: ○ Low ○ Medium ○ High ○ Critical

--- IF: Preceptor Concern ---
Concern Details:
  - Site: [dropdown]
  - Preceptor Name: [text]
  - Concern Type: [radio]
    ○ Professionalism
    ○ Teaching Quality
    ○ Communication
    ○ Feedback Quality
    ○ Other
  - Specific Incident: [textarea, max 1000 chars]
  - Date(s) of Incident: [date(s) picker]
  - Documentation: [file upload - optional]
  - Confidentiality: ☐ Keep Anonymous (if possible)

--- IF: Schedule Conflict ---
Conflict Details:
  - Current Schedule: [display]
  - Conflicting Commitment: [text]
  - Type of Conflict: [radio]
    ○ Personal/Medical
    ○ Academic
    ○ Religious Observance
    ○ Family Emergency
    ○ Other
  - Proposed Adjustment: [textarea]
  - Supporting Documentation: [file upload]
  - Duration: ○ One-time ○ Recurring
  - Start/End Dates: [date range picker]

Submission:
  ☐ I understand this will be escalated to the Coordinator
  [SUBMIT BUTTON]
```

---

#### **TYPE 3: ACADEMIC SUPPORT REQUEST**

**Tile Description:**
"Access tutoring, mentorship, or remediation support"

**Form Fields:**
```
Support Type (radio):
  ○ Tutoring Request
  ○ Mentorship Matching
  ○ Remediation Support

--- IF: Tutoring Request ---
Subject/Course:
  - Course: [dropdown from curriculum]
  - Topic Areas Needed: [multi-select]
  - Current Grade/Performance: [text]
  - Learning Difficulty: [textarea]

Preferences:
  - Format: ○ One-on-One ○ Group ○ Flexible
  - Meeting Format: ○ In-Person ○ Virtual ○ Hybrid
  - Preferred Times: [multi-select time slots]
  - Number of Sessions Needed: [1-20]

Goals:
  - What do you want to achieve?: [textarea]
  - Target Grade/Competency: [text]

--- IF: Mentorship Matching ---
Background:
  - Cohort/Year: [display]
  - Program: [display]
  - Career Interest: [multi-select]
  - Mentorship Type: ○ Academic ○ Professional ○ Career Planning

Preferences:
  - Mentor Demographics: [optional fields]
    - Gender: ○ No preference ○ Same ○ Opposite
    - Specialization: [multi-select]
  - Meeting Frequency: ○ Monthly ○ Bi-weekly ○ Weekly
  - Duration Needed: [number of months]

Goals:
  - What are you hoping to achieve?: [textarea]
  - Specific Topics/Skills: [textarea]

--- IF: Remediation Support ---
Academic Standing:
  - Affected Course(s): [multi-select from transcript]
  - Current Status: [display]
  - Deadline for Improvement: [display]

Support Needed:
  - Type: [multi-select]
    ☐ Tutoring
    ☐ Study Skills Training
    ☐ Exam Preparation
    ☐ Lab Skills Review
    ☐ Professional Counseling
  - Preferred Format: ○ Virtual ○ In-Person ○ Blended
  - Availability: [describe hours available]

Plan:
  - Learning Goals: [textarea]
  - Preferred Timeline: [text]

Submission:
  [SUBMIT BUTTON]
```

---

#### **TYPE 4: IT / ACCESS REQUESTS**

**Tile Description:**
"Request system access, report technical issues, or request account support"

**Form Fields:**
```
Request Type (radio):
  ○ Portal Access Request
  ○ LMS Access Issue
  ○ Account Problem
  ○ Technical Issue
  ○ Software/Tool Request

--- IF: Portal Access Request ---
Access Needed:
  - System/Module: [dropdown]
    (Options: Student Portal, APPE System, Research Portal, etc.)
  - Specific Function/Data: [text]
  - Justification: [textarea]
  - Timeline: [date needed by]

--- IF: LMS Access Issue ---
Issue Details:
  - LMS Platform: [dropdown]
  - Course Code/Name: [dropdown]
  - Issue Type: [radio]
    ○ Cannot Access Course
    ○ Cannot Upload Assignment
    ○ Cannot View Grades
    ○ Cannot Access Materials
    ○ Login Problem
    ○ Other
  - Error Message: [text - if applicable]
  - Browser/Device Used: [text]
  - Steps Already Taken: [textarea]

--- IF: Account Problem ---
Problem Type: [radio]
  ○ Password Reset
  ○ Account Locked
  ○ Two-Factor Authentication Issue
  ○ Email Not Receiving Messages
  ○ Phone Number Update Needed
  ○ Other

Details:
  - Describe the Issue: [textarea]
  - When Did It Start?: [date picker]
  - Impact Level: ○ Low (inconvenient) ○ High (blocking work)

--- IF: Technical Issue ---
System Affected: [dropdown]
Issue Description: [textarea, max 1000 chars]
Browser/OS: [text]
Attachments: [screenshot/error log upload]
Reproducibility: [radio]
  ○ Always happens
  ○ Happens sometimes
  ○ Happened once

--- IF: Software/Tool Request ---
Software Name: [text]
Intended Use: [textarea]
Number of Licenses Needed: [number]
Justification: [textarea - why needed for studies]
Budget Impact: [radio]
  ○ Free ○ Paid (within budget) ○ Paid (requires funding)

Priority:
  - When Needed By?: [date picker]
  - Urgency: ○ Routine ○ High

Submission:
  ☐ I confirm the above information
  [SUBMIT BUTTON]
```

---

#### **TYPE 5: EVENTS, CONFERENCES & COMMUNITY PARTICIPATION REQUEST**

**Tile Description:**
"Participate in conferences, competitions, community service, and external events"

**Form Fields:**

```
REQUEST TYPE (radio):
  ○ Conference Attendance
  ○ Conference Presentation (Poster/Oral)
  ○ Competition Participation
  ○ Community Service / Volunteering
  ○ Student Club External Event

BASIC INFORMATION:
  Event Name: [text, max 200 chars] *required
  Organizer / Host Institution: [text] *required
  Event Category: [dropdown]
    • Academic/Professional
    • Sports/Recreation
    • Cultural
    • Community Service
    • Competition
    • Religious/Social
    • Other
  
  Event Website Link: [URL field] *required
  Event Dates: [date range picker] *required
    Start Date: [date]
    End Date: [date]
  
  Event Location: [radio] *required
    ○ On-Site (Campus) - Location: [text field]
    ○ Off-Site (Riyadh) - Full Address: [text area]
    ○ Online / Virtual - Platform: [text]
    ○ Hybrid - Details: [text]
    ○ Outside Saudi Arabia - Country: [dropdown], City: [text]

STUDENT ROLE: [radio] *required
  ○ Attendee
  ○ Presenter (Poster) - Abstract/Topic: [text area]
  ○ Presenter (Oral) - Abstract/Topic: [text area]
  ○ Volunteer
  ○ Competitor
  ○ Organizer / Committee Member

--- IF: Presenter (Poster/Oral) ---
Presentation Details:
  - Presentation Title: [text, max 200 chars]
  - Presentation Topic/Abstract: [textarea, max 500 chars]
  - Co-Authors/Contributors: [multi-select from students]
  - Advisor/Supervisor Name: [text]
  - Advisor Email: [email]
  - Expected Outcome: [radio]
    ○ Published in Proceedings
    ○ Award/Recognition
    ○ Learning Experience
    ○ Other

--- IF: Volunteer ---
Volunteer Role Details:
  - Volunteer Role: [text] (e.g., "Registration Assistant", "Setup Crew")
  - Organization: [text]
  - Volunteer Hours: [number]
  - Supervision Contact: [text, name + phone]

--- IF: Competitor ---
Competition Details:
  - Competition Name: [text]
  - Team/Individual: [radio] ○ Team ○ Individual
  - Team Members (if applicable): [multi-select]
  - Competition Level: [radio]
    ○ Local
    ○ National
    ○ International
  - Expected Participation Date: [date]

PURPOSE & LEARNING OUTCOMES:
  How does this align with your professional development?: [textarea, max 300 chars] *required
  Expected Learning Outcomes: [text area, 3-5 bullet points] *required
  Example:
    • Gain knowledge in [topic]
    • Network with [professionals/peers]
    • Develop skills in [area]

STUDENT PARTICIPATION IMPACT:
  Will this conflict with any scheduled rotations/classes?: [radio]
    ○ No
    ○ Yes - Describe: [text area]
  
  Will you need time off from clinical/academic duties?: [radio]
    ○ No
    ○ Yes - Date(s): [date range picker]
  
  Total Days Away From Regular Duties: [number]

SUPPORT NEEDED: [multi-select] *required
  ☐ Approval Letter (from College Dean)
  ☐ Registration Support (fee waiver / subsidized registration)
  ☐ Travel Authorization (if required by institution)
  ☐ Travel Support (flight, accommodation, transportation)
  ☐ Funding Request (meals, registration, supplies)
  ☐ Excused Absence From Clinical Rotation
  ☐ Academic Credit / Continuing Education Credits
  ☐ Other: [text field]

--- IF: Funding Request Selected ---
Funding Details:
  - Budget Breakdown: [text area]
    Format:
    • Registration Fee: $XXX
    • Travel: $XXX
    • Accommodation: $XXX
    • Meals: $XXX
    • Other: $XXX
    TOTAL REQUESTED: $XXX
  
  - Justification for Funding: [textarea, max 300 chars]
  - Available Personal Contribution: $[number]
  - Funding Deadline: [date]

ATTACHMENTS: [file uploads - drag & drop]
  ☐ Event Invitation / Call for Papers (PDF)
  ☐ Acceptance Letter / Confirmation (PDF)
  ☐ Abstract / Proposal (PDF) - if presenter/competitor
  ☐ Poster Draft (PDF) - if applicable
  ☐ Travel Quote / Flight Details (PDF)
  ☐ Budget Justification Document (PDF)
  ☐ Supervisor/Advisor Recommendation Letter (PDF)
  ☐ Other Supporting Documents: [file upload]

SCHEDULE CONFLICT DETAILS: [textarea - if applicable]
  "Explain any schedule conflicts and why this opportunity is important"

STUDENT DECLARATION:
  ☑ I confirm that all information is accurate and complete
  ☑ I understand attendance/participation is conditional on academic standing
  ☑ I agree to submit attendance certificate/proof upon completion
  ☑ I understand funding (if approved) is subject to availability
  
  [SUBMIT BUTTON]

ADDITIONAL NOTES:
  - Max 1000 chars for special requirements or additional context
```

---

## 5. TRACKERS

### General Tracker Features (All 5 Trackers)

**Display Elements:**
- Request ID
- Submission Date
- Current Status (with visual indicator)
- Status Change Timeline (history)
- Last Update (date & time)
- Owner / Responsible Office
- Expected Timeline / SLA
- Next Required Action (highlighted for student)
- Attachments (downloadable, if applicable)
- Contact Information for Owner
- Notes / Comments Section

**UI Components:**
```html
<div class="tracker-card">
    <div class="tracker-header">
        <span class="tracker-id">COP-REQ-2026-000123</span>
        <span class="tracker-status" data-status="under-review">Under Review</span>
        <span class="tracker-date">Submitted: Jan 25, 2026</span>
    </div>
    
    <div class="tracker-timeline">
        <!-- Status progression with dates -->
        <div class="timeline-step active">
            <span class="step-label">Submitted</span>
            <span class="step-date">Jan 25, 2026</span>
        </div>
        <div class="timeline-step active">
            <span class="step-label">Under Review</span>
            <span class="step-date">Jan 25, 2026</span>
        </div>
        <div class="timeline-step">
            <span class="step-label">Ready</span>
            <span class="step-date">Pending...</span>
        </div>
    </div>
    
    <div class="tracker-details">
        <p><strong>Owner:</strong> Academic Affairs</p>
        <p><strong>Last Update:</strong> Jan 28, 2026 10:30 AM</p>
        <p><strong>Expected Timeline:</strong> 5 working days per stage</p>
        <p><strong>Next Action:</strong> Waiting for coordinator review</p>
    </div>
    
    <div class="tracker-attachments">
        <a href="#" class="attachment">Request_Form.pdf</a>
    </div>
    
    <div class="tracker-notes">
        <h5>Comments</h5>
        <p>No comments yet</p>
        <!-- Student can add comments/notes -->
    </div>
</div>
```

---

### **TRACKER #1: LETTERS & OFFICIAL DOCUMENTS**

**Status Flow:**
```
Submitted → Under Review → Ready → Delivered/Collected → Closed
```

**Status Definitions:**
- **Submitted**: Request received and logged in system
- **Under Review**: Being processed by issuing office (Academic Affairs)
- **Ready**: Letter generated and available for pickup/delivery
- **Delivered/Collected**: Student has received the letter
- **Closed**: Request completed and archived

**SLA (Service Level Agreement):**
- Submitted → Under Review: Immediate
- Under Review → Ready: 3-5 working days
- Ready → Delivered: 1-2 working days (electronic), 2-3 days (physical)

**Data Fields:**
```
letterId (COP-LETTER-YYYY-000XXX)
studentId
letterType (TWIMC / Training / Enrollment)
purpose
numberOfCopies
deliveryMethod (Electronic / Physical / Both)
deliveryAddress (if physical)
submissionDate
targetDate
urgency (Routine / Urgent)
currentStatus
statusHistory[] (with timestamps)
issuingOffice
officerName
officerEmail
lastUpdate
expectedDeliveryDate
deliveryTrackingNumber (if applicable)
attachments[]
notes/comments
```

---

### **TRACKER #2: EXPERIENTIAL / ROTATION REQUESTS**

**Status Flow:**
```
Submitted → Coordinator Review → Site Confirmation → Approved / Rejected → Closed
```

**Status Definitions:**
- **Submitted**: Request logged in system
- **Coordinator Review**: Clinical Affairs coordinator evaluating request
- **Site Confirmation**: Awaiting confirmation from requested rotation site
- **Approved**: Request approved; rotation confirmed
- **Rejected**: Request denied; reason provided to student
- **Closed**: Process completed; student notified of outcome

**SLA:**
- Submitted → Coordinator Review: 1 day
- Coordinator Review → Site Confirmation: 2-3 days
- Site Confirmation → Approved/Rejected: 3-5 days

**Data Fields:**
```
rotationRequestId (COP-ROT-YYYY-000XXX)
studentId
requestType (Rotation Change / Site Issue / Preceptor Concern / Schedule Conflict)
currentSite
currentPreceptor
requestedSite
reasonForRequest
submissionDate
preferredStartDate
currentStatus
statusHistory[]
coordinator (name, email, phone)
site (name, contact, phone)
isApproved (boolean)
rejectionReason (if applicable)
backupOptions[]
attachments[] (evidence, documentation)
slaTimer (expected resolution date)
nextAction
notes[]
```

---

### **TRACKER #3: EVENTS, CONFERENCES & VOLUNTEER PARTICIPATION**

**Status Flow:**
```
Submitted → Under Review → Approved / Not Approved → Confirmed (Registered / Nominated) → Attended / Participated → Certificate Verified / Logged → Closed
```

**Status Definitions:**
- **Submitted**: Request received and pending initial review
- **Under Review**: Being evaluated for approval eligibility
- **Approved**: Request approved by college (proceeding to event registration/confirmation)
- **Not Approved**: Request denied; student notified
- **Confirmed (Registered)**: Student registered for event (for conferences/competitions)
- **Confirmed (Nominated)**: Student nominated for presentation/speaking role
- **Attended/Participated**: Event completed; awaiting certificate/proof
- **Certificate Verified/Logged**: Participation verified and recorded in academic transcript
- **Closed**: Request fully processed and archived

**SLA:**
- Submitted → Under Review: 1-2 days
- Under Review → Approved/Not Approved: 5-7 working days
- Approved → Confirmed (Registered): 1-3 days (depending on event registration deadline)
- Attended/Participated → Certificate Verified: 5-10 days

**Data Fields:**
```
eventRequestId (COP-EVENT-YYYY-000XXX)
studentId
eventName
eventCategory
organizer
eventDates (start, end)
eventLocation (on-site / off-site / online / international)
studentRole (attendee / presenter / volunteer / competitor / organizer)
eventWebsite
submissionDate
currentStatus
statusHistory[] (with timestamps and officer notes)
approvalOfficer (name, email, phone)
approvalDate
approvalReason
rejectionReason (if not approved)
registrationConfirmation (boolean, date, reference number)
presentationDetails (if presenter)
  - presentationTitle
  - abstract
  - coAuthors[]
  - advisor
volunteerDetails (if volunteer)
  - volunteerRole
  - hoursLogged
  - supervisionContact
competitionDetails (if competitor)
  - teamMembers[]
  - competitionLevel
fundingApproved (boolean, amount)
fundingDetails (budget breakdown, approver)
travelAuthorizationGranted (boolean)
excusedAbsenceGranted (boolean, dates)
attachments[]
  - eventInvitation
  - acceptanceLetter
  - abstract/proposal
  - travelDocuments
  - fundingJustification
  - proofOfAttendance (certificate, etc.)
learningOutcomes (documented)
nextAction
notes/comments
```

---

### **TRACKER #4: COMPLAINTS / APPEALS / GRIEVANCES (CONFIDENTIAL)**

**Status Flow:**
```
Received → Assigned → Investigating → Resolution Proposed → Closed
```

**Status Definitions:**
- **Received**: Complaint logged confidentially in system; case number assigned
- **Assigned**: Case assigned to investigator; student notified (confidentially)
- **Investigating**: Investigation in progress; investigator may request additional info
- **Resolution Proposed**: Proposed resolution provided; awaiting student acceptance/response
- **Closed**: Complaint resolved; documentation sealed per university policy

**Confidentiality Features:**
- Anonymous submission option (if allowed per policy)
- Case number used instead of request titles
- Only authorized personnel can view
- Detailed audit trail for compliance
- Option for third-party investigation

**SLA:**
- Received → Assigned: 1 day
- Assigned → Investigating: 2-3 days
- Investigating: 10-20 days (depending on complexity)
- Investigating → Resolution Proposed: 20-30 days
- Resolution Proposed → Closed: 5-10 days

**Data Fields:**
```
grievanceId (COP-GRIEVANCE-YYYY-000XXX)
studentId
complaintType (Preceptor / Site / Faculty / Peer / System)
anonymousSubmission (boolean)
detailedDescription
dateOfIncident / datePeriod
location/site
partiesInvolved (names, if not anonymous)
desiredResolution (what student is seeking)
submissionDate
currentStatus
statusHistory[]
investigator (name, title, contact)
assignmentDate
investigationStartDate
evidenceGathered (summary)
studentResponseRequired (boolean, deadline)
studentResponseSubmitted (boolean, date)
proposedResolution (text)
resolutionDate
outcomeCode (resolved / partially resolved / not sustained / withdrawn)
notes (sealed, confidential)
nextAction
closureDate
```

---

### **TRACKER #5: IT / ACCESS / TECHNICAL SUPPORT**

**Status Flow:**
```
Ticket Open → In Progress → Waiting for Student → Resolved
```

**Status Definitions:**
- **Ticket Open**: Support request received and triaged
- **In Progress**: IT team actively working on the issue
- **Waiting for Student**: Additional information needed from student before proceeding
- **Resolved**: Issue fixed; solution confirmed with student
- **Closed**: Ticket archived after resolution confirmation

**SLA:**
- Ticket Open → In Progress: 2-4 hours
- In Progress → Waiting/Resolved: 4-24 hours (depending on complexity)
- Waiting for Student → Resolution: 2-3 working days (from student response)

**Severity Levels & Response Times:**
- **Critical** (system unavailable): 1 hour response, 4-hour resolution target
- **High** (major function impaired): 2-4 hour response, 24-hour resolution
- **Medium** (minor inconvenience): 4-8 hour response, 3-day resolution
- **Low** (informational): 24 hour response, 5-day resolution

**Data Fields:**
```
ticketId (COP-IT-YYYY-000XXX)
studentId
issueType (Portal Access / LMS / Account / Technical / Software Request)
systemAffected (Portal / LMS / Email / VPN / etc.)
severity (Critical / High / Medium / Low)
problemDescription
attachments (screenshots, error logs)
steps_already_taken
submissionDate
ticketAssignee (IT staff name, email)
assignmentDate
currentStatus
statusHistory[]
estimatedResolutionDate
resolutionDescription
workaroundProvided (if applicable)
nextAction (what student should do)
followUpRequired (boolean, date)
closureDate
resolutionConfirmed (student confirmation)
satisfactionRating (optional, 1-5)
notes
```

---

## 6. AUTOMATION REQUIREMENTS

### A. AUTO-ID GENERATION

**Format Specifications:**

```
Letter Requests:          COP-LETTER-YYYY-000123
Rotation Requests:        COP-ROT-YYYY-000456
Event Requests:           COP-EVENT-YYYY-000789
Grievance/Complaint:      COP-GRV-YYYY-001011
IT Support Ticket:        COP-IT-YYYY-001213

Pattern: COP-[TYPE]-[YEAR]-[6-DIGIT SEQUENTIAL]
```

**Implementation:**
- Auto-increment counter per request type per year
- Reset counter on January 1st each year
- Zero-padded to 6 digits
- Generated immediately upon form submission (before validation)
- Displayed to student for reference

---

### B. AUTO-ROUTING

**Request routing logic:**

```
Letter Requests
  → Academic Affairs (Registrar's Office)

Rotation Requests
  → Clinical Affairs Coordinator
  → If Site Issue: Site Manager + Clinical Affairs
  → If Preceptor Concern: Clinical Affairs Director
  → If Schedule Conflict: Clinical Affairs + Student Services

Academic Support
  → Student Services / Counseling
  → Tutoring → Academic Department Head
  → Mentorship → Alumni Relations / Mentorship Office
  → Remediation → Student Affairs + Department

IT / Access Requests
  → IT Help Desk
  → Software Request → Finance + IT
  → Portal Access → System Administrator

Events / Conferences / Volunteer
  → Student Affairs / Dean of Student Services
  → International events → International Office
  → Funding request → Finance + Student Affairs
  → Travel authorization → Administration

Complaints / Grievances
  → Compliance / Student Ombudsman
  → Preceptor-related → Clinical Affairs
  → Academic-related → Academic Affairs
  → Discrimination/Harassment → Human Resources / Title IX Office
```

**Implementation:**
- Conditional routing based on request type and content keywords
- Multiple routing (can assign to multiple offices)
- Escalation rules (critical issues bypass standard routing)
- Escalation conditions:
  - "Critical" severity
  - Keywords: "harassment", "discrimination", "safety", "urgent"
  - Complaints/grievances → always escalate to senior leadership
  - Overdue responses → escalate to manager

---

### C. AUTO-NOTIFICATIONS

**Triggers & Channels:**

1. **Email Notifications:**
   - Recipient: Student's registered email
   - Template: Status change + action required (if applicable)
   - Frequency: Immediate (no batching)

2. **In-Portal Notifications:**
   - Recipient: Notification bell in student portal
   - Display: Status change, message, next action
   - Retention: 30 days

3. **WhatsApp/SMS** (Optional):
   - Recipient: Registered phone number
   - Message: Brief status update + tracking link
   - Triggers: Status change, deadline warning

4. **Teams/Slack** (For Assigned Officers):
   - Alert: New request assigned, status change, pending action
   - Channel: Department-specific

**Notification Templates:**

```
TEMPLATE: Status Changed
---
Subject: Your Request [ID] Status: [NEW STATUS]
Body:
Dear [STUDENT NAME],

Your request [REQUEST ID] status has been updated to: [STATUS]

Last Update: [DATE/TIME]
Owner: [OFFICE/PERSON NAME]
Next Action: [ACTION REQUIRED or "No action needed from you at this time"]

View Full Details: [PORTAL LINK]

Contact: [OFFICE EMAIL/PHONE]

---

TEMPLATE: Action Required from Student
---
Subject: URGENT: Action Required on Your Request [ID]
Body:
Dear [STUDENT NAME],

Your request [REQUEST ID] requires action from you.

Required Action: [DESCRIPTION]
Deadline: [DATE - clearly highlighted]
Documents Needed: [LIST]

Submit Here: [PORTAL LINK]

If you have questions, contact: [OFFICE CONTACT]

---

TEMPLATE: Request Approved
---
Subject: Great News! Your Request [ID] Approved
Body:
Dear [STUDENT NAME],

Your request [REQUEST ID] has been APPROVED.

Next Steps: [SPECIFIC NEXT STEPS]
Timeline: [EXPECTED DELIVERY/COMPLETION DATE]

View Details: [PORTAL LINK]

---

TEMPLATE: Request Denied
---
Subject: Update on Your Request [ID]
Body:
Dear [STUDENT NAME],

Unfortunately, your request [REQUEST ID] has not been approved.

Reason: [EXPLANATION]
Appeal Process: [INFORMATION ON HOW TO APPEAL]

Contact for Discussion: [OFFICE NAME/PHONE/EMAIL]

View Details: [PORTAL LINK]
```

---

### D. AUTO-REMINDERS

**Scheduled Reminders:**

1. **Pending Student Action** (3 business days before deadline)
   - Reminder: "Action required by [DATE]"
   - Channel: Email + Portal notification
   - Example: "You need to submit documents for request [ID] by Friday"

2. **Missing Attachments** (Immediate if form submitted without required attachments)
   - System blocks submission
   - Message: "Missing: [LIST]. Please upload before submitting."

3. **Approaching Deadlines** (7 days before, 3 days before, 1 day before)
   - Event registration closes, conference deadline, rotation selection deadline
   - Message: "[EVENT] registration closes in X days"
   - Channel: Email + Portal banner

4. **Overdue Responses from Offices** (1 day after SLA expires)
   - Alert to office manager
   - System flags as "Delayed"
   - Student receives: "Your request is being processed. We appreciate your patience."

5. **Follow-up Survey** (7 days after closure)
   - Automated satisfaction survey
   - "Please rate your experience with this request"
   - Used to improve service

**Implementation Logic:**
```
Every day at 8:00 AM:
  - Check for reminders due
  - Filter by student timezone (if international)
  - Send reminders via registered channels
  - Log in audit trail
  - Mark reminder as sent
```

---

### E. AUTO-SLA TIMER

**Display in Tracker UI:**
```
Current Stage: Under Review
Expected Resolution: 3 business days
Days Remaining: 1 day
⏱️ Status: On Track
[Progress bar: ████░░]
```

**SLA Calculation Logic:**
- Count business days only (Monday-Friday, excluding holidays)
- Start from status entry date
- Alert when 80% of SLA time elapsed
- Escalate when SLA exceeded
- Reset on status change

**Display Rules:**
- Green: On track (< 80% time used)
- Yellow: Caution (80-100% time used)
- Red: Overdue (> 100% time used)

**Auto-Actions:**
- SLA exceeded by 1 day → Escalate to manager
- SLA exceeded by 3 days → Escalate to director
- SLA exceeded by 5 days → Escalate to dean

---

### F. AUTO-TEMPLATES

**Letter Template Generation:**

When letter request is submitted with type = "Training Letter":

1. System retrieves student data from profile:
   - Full name
   - Student ID
   - Program (IPPE/APPE Year)
   - Current rotation site
   - Current preceptor name
   - Date range of rotation

2. System generates letter using template:

```
[COLLEGE LETTERHEAD]
[DATE]

To Whom It May Concern,

This letter certifies that [STUDENT FULL NAME], Student ID [ID], 
is currently enrolled in the [PROGRAM] program at King Saud Bin Abdulaziz 
University for Health Sciences, College of Pharmacy.

[STUDENT NAME] is currently completing [his/her] experiential rotation 
at [SITE NAME] under the supervision of [PRECEPTOR NAME] from 
[START DATE] to [END DATE].

[STUDENT NAME] is making satisfactory progress in [his/her] studies 
and is in good academic standing.

This letter is issued for the purposes of [PURPOSE - from student input].

If you have questions, please contact our office.

Sincerely,

[REGISTRAR/DEAN NAME]
[TITLE]
College of Pharmacy
KSAU-HS
[CONTACT INFO]
```

3. Template is sent to issuing officer for:
   - Review
   - Signature (digital or printed signature on file)
   - Formatting approval

4. Once approved, template becomes final letter ready for delivery

**For Other Request Types:**
- Automation generates standard response templates for common scenarios
- Example: "Schedule Conflict Request - Automatic Denial Template" (if outside policy)
- Example: "Site Issue Report - Automatic Escalation Template"

---

## 7. STUDENT DASHBOARD

### Dashboard Structure

**Layout:** 4-section grid dashboard with customizable widgets (pinning, resizing)

---

#### **SECTION 1: MY REQUESTS (Combined Tracker View)**

**Display:** Cards showing all active requests across all 5 trackers

**Card Format:**
```
[REQUEST ID] [ICON]
Status: [STATUS]
Submitted: [DATE]
[One-line summary]
Next Action: [Action needed or "No action needed"]
[View Details Button]
```

**Filters Available:**
- Status (Submitted / In Progress / Action Needed / Completed)
- Type (Letters / Experiential / Academic Support / IT / Events)
- Date Range (Last 7 days / This month / All)
- Ownership (Waiting for me / Waiting for office)

**Sorting:**
- Most Recent
- Action Required (prioritized)
- Oldest First
- Due Date (nearest deadline)

**Quick Actions:**
- View Full Tracker
- Add Note/Comment
- Upload Document
- Contact Owner

---

#### **SECTION 2: MY TASKS (Action Items)**

**Display:** Prioritized to-do list of things student needs to do

**Task Categories:**

1. **Missing Documents** (with deadline)
   - Example: "Upload vaccination proof for Rotation 2"
   - Due: [DATE]
   - Priority: High
   - Action: Upload

2. **Pending Actions** (specific next steps)
   - Example: "Confirm rotation attendance"
   - Action: Click to confirm
   - Deadline: [DATE]

3. **Upcoming Deadlines** (3 categories)
   - This week: Yellow
   - Next week: Orange
   - 2+ weeks: Gray
   - Example: "Rotation selection closes in 3 days"

4. **Forms to Complete**
   - Example: "Complete event participation form"
   - Progress: 60% complete
   - Action: Continue Editing

5. **Pending Approvals**
   - Example: "Supervisor signature needed on form"
   - Status: "Awaiting external signature"
   - Action: Follow up with supervisor

**UI:**
```html
<section class="my-tasks">
    <div class="task-filters">
        <button class="filter-btn active">All (12)</button>
        <button class="filter-btn">High Priority (4)</button>
        <button class="filter-btn">This Week (6)</button>
        <button class="filter-btn">Overdue (1)</button>
    </div>
    <ul class="task-list">
        <li class="task-card priority-high">
            <span class="task-icon">📌</span>
            <div class="task-content">
                <h5>Task Title</h5>
                <p class="task-description">Description</p>
                <span class="task-due">Due: Jan 31, 2026</span>
            </div>
            <button class="task-action">Take Action</button>
        </li>
    </ul>
</section>
```

---

#### **SECTION 3: MY PARTICIPATION (Achievements & Involvement)**

**Display:** Summary cards of student's extracurricular involvement

**Cards:**

1. **Events Attended**
   - Count: [X events]
   - This semester: [X]
   - Total certificates: [X]
   - List view: Top 5 recent with dates and certificates

2. **Conferences & Presentations**
   - Presentations given: [X]
   - Papers presented: [X]
   - List: Conference name, date, role, outcome

3. **Community Service Hours**
   - Total hours logged: [X]
   - This semester: [X]
   - Organizations: [LIST]
   - Trending: [Graph showing hours by month]

4. **Volunteer Activities**
   - Total volunteer events: [X]
   - Hours contributed: [X]
   - Organizations: [LIST]

5. **Research Participation** (if applicable)
   - Active projects: [X]
   - Publications: [X]
   - Presentations: [X]

**Actions:**
- View Details
- Download Certificate
- Add Hours (if applicable)
- Get Transcript Summary

---

#### **SECTION 4: MY CERTIFICATES (Downloadable PDFs & Status)**

**Display:** Table or grid of certificates

**Columns:**
- Certificate Name
- Issuing Organization
- Issue Date
- Status (Issued / Pending / Approved)
- Actions (Download / View / Print)

**Filters:**
- Status (All / Issued / Pending / Expired)
- Date Range
- Category (Event / Volunteer / Course / Other)

**Features:**
- Download as PDF
- Print directly
- Share (email/WhatsApp)
- Add to digital wallet
- Verify authenticity (QR code)

**Status Indicators:**
- ✅ Issued (green) - Available for download
- ⏳ Pending (yellow) - Awaiting verification
- 🔄 In Review (blue) - Being verified
- ✗ Expired (gray) - No longer valid

---

### Dashboard Data Integration

**Data Sources:**
- Tracker #1 (Letters) → My Requests section
- Tracker #2 (Experiential) → My Requests + My Tasks
- Tracker #3 (Events) → My Requests + My Participation + My Certificates
- Tracker #4 (Grievances) → My Requests (confidential)
- Tracker #5 (IT) → My Tasks + My Requests

**Real-Time Updates:**
- Refresh every 30 seconds
- Show "Updated just now" indicator
- Manual refresh button
- Push notification on major status change

**Personalization:**
- Students can hide/show sections
- Reorder sections (drag & drop)
- Pin important requests to top
- Archive completed requests (hide from view)

---

## 8. DATA MODELS & WORKFLOWS

### Core Data Structure

```javascript
// Student Profile (pre-populated)
{
  studentId: "441210049",
  firstName: "Bishier",
  lastName: "Alfadhl",
  email: "alfadhl10049@ksau-hs.edu.sa",
  phone: "+966...",
  whatsappNumber: "+966...",
  program: "PharmD", // IPPE II / APPE / etc
  cohort: "2024",
  academicYear: "2025-2026",
  gpa: 3.9,
  academicStanding: "Good",
  currentRotation: {
    siteName: "XYZ Hospital",
    preceptor: "Dr. Name",
    startDate: "2026-01-15",
    endDate: "2026-03-15"
  }
}

// Request (Base Template)
{
  requestId: "COP-[TYPE]-YYYY-000XXX",
  studentId: "441210049",
  requestType: "letter" | "experiential" | "academic-support" | "it-access" | "event",
  submissionDate: "2026-01-30T10:30:00Z",
  status: "submitted",
  statusHistory: [
    { status: "submitted", date: "2026-01-30T10:30:00Z", notes: "" },
    { status: "under-review", date: "2026-01-30T11:00:00Z", notes: "Assigned to coordinator" }
  ],
  owner: { name: "Officer Name", email: "email@ksau-hs.edu.sa", office: "Academic Affairs" },
  slaStartDate: "2026-01-30",
  slaEndDate: "2026-02-03",
  expectedNextActionDate: "2026-02-03",
  nextActionDescription: "Coordinator review",
  attachments: [],
  studentNotes: "",
  systemNotes: [],
  lastUpdate: "2026-01-30T11:00:00Z"
}
```

### Workflow State Machines

**Letter Request Workflow:**
```
START
  ↓
[Submitted] → Validate form data
  ↓ (valid)
[Submitted] → Generate letter ID
  ↓
[Submitted] → Auto-route to Registrar
  ↓
[Submitted] → Send notification to student
  ↓
→ [Under Review] (Registrar receives)
  ↓
  Option 1: Auto-generation ↓
  [Under Review] → Generate letter from template
  ↓
  Option 2: Manual review ↓
  [Under Review] → Officer reviews + approves
  ↓
[Ready] → Letter available for pickup/delivery
  ↓
[Delivered/Collected] → Student confirms receipt
  ↓
[Closed] → Request archived
```

**Experiential Request Workflow:**
```
START
  ↓
[Submitted] → Validate data
  ↓
[Submitted] → Auto-route to Coordinator
  ↓
→ [Coordinator Review]
  ↓
  Decision Branch:
  ├─ Cannot approve (e.g., capacity full)
  │  ↓
  │  [Rejected] → Send reason to student
  │  ↓
  │  [Closed] → Allow appeal option
  │
  └─ Can proceed
     ↓
     [Site Confirmation] → Contact site manager
     ↓
     ├─ Site says NO
     │  ↓
     │  [Rejected] → Notify student
     │  ↓
     │  [Closed]
     │
     └─ Site says YES
        ↓
        [Approved] → Notify student + coordinator + site
        ↓
        [Closed] → Once rotation starts, mark as completed
```

### SLA & Escalation Rules

```
IF status.duration > SLA.normal THEN
  priority = "ESCALATE"
  assignee = manager
  notification = "urgent"
END

IF status.duration > SLA.normal * 1.5 THEN
  escalate_to = director
  flag = "OVERDUE"
  student_notification = "apologetic tone"
END

IF status.duration > SLA.normal * 2 THEN
  escalate_to = dean
  flag = "CRITICAL"
  student_satisfaction_follow-up = true
END

IF request.type == "grievance" AND status == "submitted" THEN
  // Auto-escalate all grievances
  route_to = ["ombudsman", "compliance_office"]
  confidentiality_flag = true
END

IF attachment.missing == true AND form.submitted == true THEN
  // Block submission or auto-reject
  student_notification = "Upload required documents to proceed"
  block_submission = true
END
```

### Notification Logic

```
ON form.submit:
  - Generate request ID
  - Create request record
  - Auto-route to office(s)
  - Send email: "Request Received" template
  - Log in audit trail

ON status.change:
  - Update status history
  - Timestamp change
  - Assign new owner (if routed)
  - Send notifications:
    * Email to student (status changed)
    * Email to new owner (new assignment)
    * Portal notification to both
  - Log in audit trail

ON reminder.due:
  - Check for overdue items
  - Send reminder emails
  - Update dashboard flags
  - Log sent reminders

ON deadline.approach:
  - 7 days before: First reminder
  - 3 days before: Second reminder
  - 1 day before: Final reminder
  - On deadline: "Time's up" notification
```

---

## IMPLEMENTATION PRIORITY

### Phase 1 (MVP - Weeks 1-2)
- [ ] HOME page (News, Announcements, This Week, Quick Links)
- [ ] Sidebar navigation structure
- [ ] SUBMIT REQUESTS: Letter Requests form only
- [ ] TRACKER #1: Letters & Documents
- [ ] Basic auto-notifications (email)
- [ ] Basic auto-ID generation

### Phase 2 (Weeks 3-4)
- [ ] SUBMIT REQUESTS: All 5 request types
- [ ] TRACKER #2, #3, #4, #5
- [ ] Auto-routing logic
- [ ] SLA timers
- [ ] Student Dashboard (My Requests section)

### Phase 3 (Weeks 5-6)
- [ ] STUDENT INFORMATION HUB (all sections)
- [ ] Dashboard completion (My Tasks, My Participation, My Certificates)
- [ ] Auto-templates (letter generation)
- [ ] Auto-reminders (scheduled)
- [ ] Advanced filters and sorting

### Phase 4 (Weeks 7+)
- [ ] WhatsApp/SMS notifications
- [ ] Integration with Teams/Slack
- [ ] Advanced analytics
- [ ] Mobile app optimization
- [ ] Certificate digital wallet
- [ ] API for external integrations

---

## END OF SPECIFICATION
