# APPE Dashboard Workflow - Complete Integration Guide

## 🔄 System Integration Overview

### Data Flow Architecture
```
PRECEPTORS (with availability) 
    ↓
ROTATION_PERIODS (10 rotations)
    ↓
PERIOD PLANNING (Auto-assignment)
    ↓
ASSIGNMENTS (Student-Preceptor matches)
    ↓
STUDENT PORTAL (View rotations)
    ↓
ATTENDANCE_RECORDS (Track hours)
```

---

## 📋 Step-by-Step Workflow

### **1. SETUP PHASE** 

#### A. Add Preceptors (👨‍⚕️ Preceptors Tab)
- Navigate to: **Preceptors** tab
- View all 28 preceptors with specialties
- Each preceptor has `availability: ['R1', 'R2', ...]` array
- Example: Dr. Laila Abu Eisha → DIC → Available R1, R2, R3, R6, R7

#### B. Define Rotation Periods (🗓️ 6-Period Schedule Tab)
- Navigate to: **Schedule** tab
- View 10 rotations (R1-R10)
- July 2025 - May 2026
- Each rotation: 4 weeks (except R8 Ramadan: 8 weeks)

---

### **2. PLANNING PHASE**

#### A. Plan Future Rotations
**Location:** 🗓️ Schedule Tab → Click "🗓️ Plan Period" on R8/R9/R10

**What happens:**
1. System shows available preceptors for that rotation
2. Calculates capacity by specialty
3. Shows unassigned students

**Planning Options:**
- ☑️ Consider Student Preferences
- ☑️ Balance Preceptor Workload
- ☑️ Ensure Rotation Diversity
- ☑️ Performance-Based Matching

**Action:** Click **🚀 Auto-Assign All Students**

**Result:**
- System creates assignments in `ASSIGNMENTS` array
- Each assignment has:
  ```javascript
  {
    id: student.id,
    student: "Student Name",
    rotation: "Specialty",
    site: "KAMC Riyadh",
    preceptor: "Preceptor Name",
    rotationId: "R8",
    period: "Rotation 8",
    start: "2026-02-15",
    end: "2026-04-11",
    status: "Pending",
    score: 85-100
  }
  ```

---

### **3. REVIEW PHASE**

#### A. View All Assignments (📋 Assignments Tab)
**Location:** Click **Assignments** tab

**Shows:**
- Table of all 59 students
- Their assigned rotations
- Preceptors
- Sites
- Status (Confirmed/Pending)
- Scores

**Actions:**
- Search by student name
- Filter by rotation
- Export to Excel

#### B. View Period Details (🗓️ Schedule Tab)
**Location:** Schedule Tab → Click "📋 View Students" on any rotation

**Shows:**
- All students assigned to that rotation
- Rotation distribution by specialty
- Preceptor assignments

---

### **4. STUDENT VIEW**

#### Access Student Portal
**Current Setup:** View selector in top header
- Switch to: **👤 View as Student (Raghad)**

**Student Can See:**
- Their upcoming rotations
- Current rotation details
- Preceptor contact info
- Site location
- Start/End dates

---

### **5. ATTENDANCE TRACKING**

#### A. Log Daily Attendance (📅 Attendance Tab)
**Location:** Attendance Tab → Click "✏️ Log Today's Attendance"

**Features:**
- Mark all students present/absent/late
- Record hours (0-12 per day)
- Add notes
- Save to ATTENDANCE_RECORDS

#### B. Track Hours
**Shows:**
- Completed hours / Required hours (160 per rotation)
- Progress percentage
- Days present/absent
- Attendance rate

---

## 🔗 How Everything Links Together

### Example: Planning Rotation 8 (Ramadan)

**Step 1:** Go to 🗓️ **Schedule** tab
- See: Rotation 8 → Feb 15 - Apr 11, 2026
- Click: **🗓️ Plan Period**

**Step 2:** Planning Modal Opens
- Shows: 15 available preceptors for R8
- Calculates: 60 student capacity (15 × 4)
- Lists: Specialties available (Critical Care, Nephrology, etc.)

**Step 3:** Click **🚀 Auto-Assign All Students**
- System assigns 59 students to available preceptors
- Creates 59 new entries in ASSIGNMENTS
- Each student matched to: Specialty → Preceptor → Site

**Step 4:** View Results in 📋 **Assignments** tab
- Filter by: Rotation 8
- See: All 59 students with their matches
- Status: Pending (waiting confirmation)

**Step 5:** Student Portal
- Student logs in
- Sees: "Rotation 8 - Critical Care - Dr. Lama Alfahaid - KAMC Riyadh"
- Dates: Feb 15 - Apr 11, 2026

**Step 6:** During Rotation
- Admin uses 📅 **Attendance** tab
- Logs daily attendance
- Tracks hours toward 160-hour requirement

**Step 7:** After Rotation
- Student completes evaluation
- Score recorded in ASSIGNMENTS
- Data used for Dashboard KPIs

---

## 📊 Data Relationships

### PRECEPTORS → ROTATION_PERIODS
```javascript
// Dr. Lama Alfahaid available for R4, R5, R8
availability: ['R4', 'R5', 'R8']
```

### ROTATION_PERIODS → ASSIGNMENTS
```javascript
// Assignment links student to rotation
{
  rotationId: 'R8',  // Links to ROTATION_PERIODS[7]
  student: 'Raghad Alharbi',
  preceptor: 'Dr. Lama Alfahaid',  // Links to PRECEPTORS
  specialty: 'Cardiology'
}
```

### ASSIGNMENTS → ATTENDANCE_RECORDS
```javascript
// Attendance tracked per student per rotation
ATTENDANCE_RECORDS['S001'] = {
  studentId: 'S001',
  rotationId: 'R7',  // Current rotation
  completedHours: 120,
  requiredHours: 160,
  attendanceRate: 95.5
}
```

---

## 🎯 Quick Navigation Guide

| I want to... | Go to Tab | Action |
|-------------|-----------|--------|
| See all preceptors | 👨‍⚕️ Preceptors | View specialty assignments |
| Check preceptor availability | 👨‍⚕️ Preceptors | See `availability` column |
| View rotation calendar | 🗓️ Schedule | See 10-rotation timeline |
| Plan future rotation | 🗓️ Schedule | Click "Plan Period" on R8/R9/R10 |
| Auto-assign students | 🗓️ Schedule → Plan | Click "Auto-Assign All" |
| View all assignments | 📋 Assignments | See full student-preceptor table |
| Check student's rotations | 📋 Assignments | Search student name |
| Log attendance | 📅 Attendance | Click "Log Today's Attendance" |
| View student hours | 📅 Attendance | See progress bars |
| Student view rotation | Switch to Student View | See "My Rotations" |

---

## 💡 Example Scenarios

### Scenario 1: "I need to assign students to Rotation 9"

1. Go to 🗓️ **Schedule**
2. Find **Rotation 9** (Mar 29 - Apr 23, 2026)
3. Click **🗓️ Plan Period**
4. Review: 12 available preceptors shown
5. Click **🚀 Auto-Assign All Students**
6. ✅ 59 students assigned automatically
7. View results in 📋 **Assignments** tab

### Scenario 2: "Which preceptors are available for Rotation 8?"

1. Go to 👨‍⚕️ **Preceptors** tab
2. Look at **Availability** column
3. See: 15 preceptors have "R8" in their availability
4. Specialties available:
   - Critical Care: Dr. Lama Alfahaid
   - Nephrology: Dr. Yousef AlRajhi, Maha Assadoon
   - Transplant: Sarah Albilal
   - Infectious Diseases: Abdulrahman ALAMRI
   - Medication Safety: Ghada Almardawi

### Scenario 3: "How is student Raghad doing in her rotation?"

1. Go to 📅 **Attendance** tab
2. Find **Raghad Alharbi** in the table
3. See: 
   - Hours: 120/160 (75% complete)
   - Days Present: 30
   - Attendance Rate: 96.8%
4. Click **👁️ View** for detailed log

---

## 🔄 Automation Features

### Auto-Assignment Algorithm
**How it works:**
1. Gets all preceptors with availability for that rotation
2. Gets all unassigned students
3. Distributes students evenly using round-robin
4. Creates assignment records
5. Updates ASSIGNMENTS array
6. Redirects to Assignments view

**Factors considered:**
- Preceptor availability ✅
- Balanced workload (4 students/preceptor) ✅
- Specialty distribution ✅
- Random score generation (85-100%) ✅

### Future Enhancements
- Student preference matching
- Avoid consecutive same specialty
- Performance-based preceptor matching
- Geographic proximity
- Site capacity limits

---

## 📱 User Roles

### Admin View (Default)
- Full access to all tabs
- Plan rotations
- Assign students
- Log attendance
- View reports

### Student View
- View personal assignments
- See rotation schedule
- Check attendance hours
- Access preceptor contact info

### Preceptor View (Future)
- See assigned students
- Log student evaluations
- Update availability
- Communication tools

---

## ✅ Success Metrics

After setup and planning, you should see:
- ✅ 28 preceptors loaded with specialties
- ✅ 10 rotation periods defined
- ✅ 59 students in system
- ✅ R7 (current) has assignments
- ✅ R8, R9, R10 ready for planning
- ✅ Attendance tracking active
- ✅ Dashboard KPIs updating automatically

---

**Last Updated:** January 12, 2026
**Version:** 2.0 - Full Integration
