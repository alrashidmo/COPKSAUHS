# 📘 APPE Management System - User Guide

## 🎯 Quick Access Guide

This guide shows you how to manage preceptors, sites, and access the student portal.

---

## 👨‍⚕️ PRECEPTOR MANAGEMENT

### ✏️ Edit Preceptor Availability

**Location:** APPE Hub → Preceptors Tab

**Steps:**
1. Navigate to the **Preceptors** section
2. Find the preceptor in the table
3. Click the **✏️ Edit** button in the "Availability" column
4. A modal will open showing all 10 rotations (R1-R10)
5. Check/uncheck rotations where the preceptor is available
6. Click **💾 Save Availability**

**Features:**
- Visual checkboxes for each rotation period
- Shows rotation dates for reference
- Color-coded availability (green = available, gray = not available)
- Real-time update of preceptor table

---

### ➕ Add New Preceptor

**Location:** APPE Hub → Preceptors Tab

**Steps:**
1. Click the **+ Add Preceptor** button (top right)
2. Fill in the required fields:
   - **Full Name** *
   - **Credentials** (e.g., PharmD, BCPS)
   - **Specialty** * (dropdown)
   - **Training Site** * (dropdown)
   - **License Number**
   - **License Expiry**
   - **Email Address**
3. Click **✅ Add Preceptor**

**Auto-generated:**
- Preceptor ID (P001, P002, etc.)
- Default rating (4.5)
- Empty availability (can be set later via Edit button)

**After Adding:**
- New preceptor appears in the table immediately
- Can edit availability right away
- Ready to be assigned in rotation planning

---

### 📊 View Preceptor Details

**Location:** APPE Hub → Preceptors Tab

**Steps:**
1. Find the preceptor in the table
2. Click **📄 View** button
3. Modal shows:
   - Current students assigned
   - Rating
   - Number of rotations available
   - Contact information
   - License details
   - List of assigned students with rotation details

---

### 🔍 Filter Preceptors

**Location:** APPE Hub → Preceptors Tab

**How to Use:**
- Use the search box at the top
- Type any keyword (name, specialty, site)
- Table filters in real-time
- Shows only matching rows

---

### 📥 Export Preceptors

**Location:** APPE Hub → Preceptors Tab

**Steps:**
1. Click **📥 Export** button
2. Downloads a CSV file with all preceptor data
3. Includes:
   - ID, Name, Credentials
   - Specialty, Site
   - License info
   - Student count, Rating
   - Email, Availability (R1;R2;R3...)

**Filename Format:** `preceptors-YYYY-MM-DD.csv`

---

## 🏥 SITE MANAGEMENT

### ➕ Add New Training Site

**Location:** APPE Hub → Sites Tab

**Steps:**
1. Click the **+ Add New Site** button (top right)
2. Fill in the required fields:
   - **Site Name** *
   - **Site Type** * (Hospital, Clinic, Community Pharmacy, Specialty Center)
   - **Address** *
   - **Contact Number** *
   - **Student Capacity** * (number, default 20)
   - **Available Specialties** * (checkboxes - select multiple)
3. Click **✅ Add Site**

**After Adding:**
- Site appears in the sites list
- Shows 0 active students initially
- Ready for preceptor assignment
- Can be selected when adding new preceptors

---

### ✏️ Edit Training Site

**Location:** APPE Hub → Sites Tab

**Steps:**
1. Find the site in the list
2. Click **✏️ Edit Site** button
3. Modal opens with current data
4. Edit any of:
   - Site type
   - Contact number
   - Address
   - Student capacity
   - Available specialties (checkboxes)
5. Click **💾 Save Changes**

**Note:** Site name cannot be changed (primary identifier)

---

### 📊 View Site Details

**Location:** APPE Hub → Sites Tab

**Available Actions:**
- **📊 View Analytics** - Shows site utilization stats (coming soon)
- **👥 View Students** - Lists all students currently assigned to this site
- **📞 Contact** - Shows contact info and phone number

---

## 👨‍🎓 STUDENT PORTAL

### 🎓 Access Student Portal View

**Location:** APPE Hub → Students Tab

**Steps:**
1. Navigate to the **Students** section
2. Find the student in the table
3. Click the **🎓 Portal** button

**What Students See:**

#### 📊 Summary Cards
- **Total Rotations** - Number of assigned rotations
- **Total Hours** - Cumulative hours completed
- **Average Score** - Average across all rotations

#### 📋 My Rotation Assignments
Each assignment shows:
- **Rotation Name & Period** (e.g., R1, R2, R3...)
- **Dates** (Start - End)
- **Status** (Active, Past, Future)
- **Preceptor Information:**
  - Name
  - Specialty
  - Training site
  - Email (clickable link)
- **Rotation Details:**
  - Rotation type
  - Current score (color-coded)
- **Hours Progress Bar:**
  - Hours completed / Required (160 hrs)
  - Visual progress indicator
  - Color changes based on completion

#### ✅ Log Attendance
- Only available for **Active** rotations
- Click **✅ Log Today's Attendance**
- Enter hours (0-8)
- Updates progress immediately

#### 📅 Full Rotation Schedule
- Shows all 10 rotation periods (R1-R10)
- Highlights assigned rotations in green
- Shows rotation type and preceptor name
- Unassigned periods show as "Not assigned"

---

## 🔗 HOW EVERYTHING CONNECTS

### Data Flow Integration

```
1. PRECEPTOR AVAILABILITY
   └─> Preceptor has availability: ['R1', 'R2', 'R3']
       └─> These map to ROTATION_PERIODS (R1 = July 2025, R2 = Aug 2025...)

2. ROTATION PLANNING
   └─> Admin goes to Schedule → Clicks "Plan Period" on R8
       └─> Modal shows available preceptors for R8
           └─> Only shows preceptors who have 'R8' in their availability array

3. AUTO-ASSIGNMENT
   └─> Admin clicks "Auto-Assign"
       └─> System creates ASSIGNMENTS:
           {
             studentId: 'S001',
             rotationId: 'R8',
             preceptor: 'Dr. Sarah AlMutairi',
             rotation: 'Critical Care',
             score: 0
           }

4. STUDENT PORTAL
   └─> Student clicks "🎓 Portal"
       └─> System filters ASSIGNMENTS where studentId matches
           └─> Shows:
               - Rotation period (R8)
               - Dates from ROTATION_PERIODS
               - Preceptor details from PRECEPTORS
               - Site info from TRAINING_SITES
               - Hours from ATTENDANCE_RECORDS

5. ATTENDANCE TRACKING
   └─> Student logs hours via portal
       └─> Creates/updates ATTENDANCE_RECORDS:
           {
             studentId: 'S001',
             rotationId: 'R8',
             hours: 40,
             status: 'Present'
           }
       └─> Progress bar updates in student portal
```

---

## 📋 TYPICAL WORKFLOWS

### Workflow 1: Adding a New Preceptor & Assigning Students

1. **Add Preceptor**
   - Go to Preceptors tab
   - Click "+ Add Preceptor"
   - Fill in: Name, Specialty, Site
   - Click "Add Preceptor"

2. **Set Availability**
   - Find preceptor in table
   - Click "✏️ Edit" in Availability column
   - Check R8, R9, R10 (future rotations)
   - Click "Save Availability"

3. **Plan Rotation**
   - Go to Schedule tab
   - Find R8 (upcoming rotation)
   - Click "Plan Period"
   - See new preceptor in available list
   - Click "Auto-Assign"
   - Students assigned automatically

4. **Verify in Student Portal**
   - Go to Students tab
   - Click any student's "🎓 Portal"
   - See new assignment with preceptor details

---

### Workflow 2: Setting Up a New Training Site

1. **Add Site**
   - Go to Sites tab
   - Click "+ Add New Site"
   - Fill in: Name, Type, Address, Contact, Capacity
   - Select specialties (checkboxes)
   - Click "Add Site"

2. **Add Preceptors to Site**
   - Go to Preceptors tab
   - Click "+ Add Preceptor"
   - In "Training Site" dropdown, select the new site
   - Complete other fields
   - Click "Add Preceptor"

3. **Verify Site Shows Preceptors**
   - Go to Sites tab
   - Find your site
   - Number under "Active Preceptors" should increase
   - Click "👥 View Students" to see assignments

---

### Workflow 3: Student Checking Their Assignments

1. **Coordinator Opens Portal**
   - Go to Students tab
   - Find student
   - Click "🎓 Portal"

2. **Student Sees:**
   - All assigned rotations (past, current, future)
   - Preceptor contact info
   - Current scores
   - Hours completed
   - Full schedule calendar

3. **Student Logs Hours** (for active rotations)
   - Click "✅ Log Today's Attendance"
   - Enter hours (e.g., 8)
   - Progress bar updates
   - Hours saved to system

---

## ⚙️ SYSTEM SETTINGS

### Rotation Configuration
- **Total Rotations:** 10 (R1-R10)
- **Period:** July 2025 - May 2026
- **Duration:** 4 weeks per rotation
- **Required Hours:** 160 hours per rotation

### Default Values
- **New Preceptor Rating:** 4.5
- **Default License Expiry:** 2027-12-31
- **Email Format:** firstname.lastname@ngha.med.sa
- **Site Capacity Default:** 20 students

---

## 🔑 KEY FEATURES

### ✅ Real-Time Updates
- All changes reflect immediately
- No page refresh needed
- Tables update dynamically

### 💾 Data Persistence
- All data stored in JavaScript arrays
- Changes saved in browser session
- Export to CSV available

### 🔍 Smart Filtering
- Search works across all fields
- Case-insensitive
- Real-time filtering

### 📊 Visual Indicators
- Color-coded status badges
- Progress bars for hours
- Capacity utilization graphs

---

## 🆘 TROUBLESHOOTING

### Problem: "Preceptor not showing in planning modal"
**Solution:** Check if preceptor has the rotation in their availability array
- Go to Preceptors tab
- Click "✏️ Edit" next to preceptor
- Check the box for the rotation period (e.g., R8)
- Save changes

### Problem: "Student portal shows no assignments"
**Solution:** Student hasn't been assigned yet
- Go to Schedule tab
- Click "Plan Period" on a rotation
- Click "Auto-Assign" or manually assign
- Student portal will update

### Problem: "Cannot add new site"
**Solution:** Fill all required fields
- Site name, type, address, contact, capacity must be filled
- At least one specialty must be selected
- Check for validation errors

---

## 📞 SUPPORT

For additional help:
- Check APPE_WORKFLOW.md for detailed integration guide
- Review dashboard workflow visualization
- Contact system administrator

---

**Last Updated:** December 2024  
**Version:** 2.0  
**System:** APPE Clinical Rotation Management System
