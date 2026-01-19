# 📅 Site & Preceptor Availability System - Complete Guide

## 🎯 Overview

The APPE Experience Hub now includes a comprehensive availability scheduling system that manages:
- **Time periods** (Spring 2026: 4 periods of 6 weeks each)
- **Preceptor availability** (which periods each preceptor works)
- **Site availability** (which periods each site accepts students)
- **Student preferences** (submitted through the Student Portal)
- **Auto-matching** (automatically matches students with available preceptors/sites)

---

## 📋 Access Points

### 1. **Data Management Tab**
- Navigate to **Data Management** tab in APPE Experience Hub
- Click **"📅 Open Availability Calendar"** button
- Three main views available:
  - 👨‍⚕️ **Preceptor Availability**
  - 🏥 **Site Availability**
  - 📝 **Student Preferences**

---

## 🏥 **PRECEPTOR AVAILABILITY MANAGEMENT**

### View Preceptor Availability
1. Click **"👨‍⚕️ Preceptor Availability"** button
2. See comprehensive table with:
   - Preceptor name, specialty, license
   - Availability across all 4 time periods (✅ Available / ❌ Unavailable)
   - Max students per period
   - Edit button for each preceptor

### Edit Preceptor Availability
1. Click **"✏️ Edit"** button next to any preceptor
2. Modal opens with:
   - **Max Students Per Period** (number input: 1-10)
   - **Available Time Periods** (checkboxes for each period)
3. Check/uncheck periods to set availability
4. Click **"✅ Save Changes"**
5. Table automatically refreshes

### Edit Time Periods
1. In preceptor availability table header, each period has:
   - **✏️ Edit** button - Modify period name, dates, duration
   - **🗑️ Delete** button - Remove period (WARNING: affects all preceptors/sites)
2. Edit modal allows changing:
   - Period name
   - Start date
   - End date
   - Duration (weeks)

### Add New Time Period
1. Click **"➕ Add Time Period"** button (top right)
2. Fill in:
   - Period name (e.g., "Period 5")
   - Start date
   - End date
   - Duration in weeks
3. New period appears in all tables immediately

---

## 🏥 **SITE AVAILABILITY MANAGEMENT**

### View Site Availability
1. Click **"🏥 Site Availability"** button
2. See table with:
   - Site name, total capacity
   - Availability across all 4 periods (✅ Open / ❌ Closed)
   - Capacity per period
   - Edit button for each site

### Edit Site Availability
1. Click **"✏️ Edit"** button next to any site
2. Modal opens with:
   - **Capacity Per Period** (number input: 1-total capacity)
   - **Available Time Periods** (checkboxes for each period)
3. Check/uncheck periods to set when site accepts students
4. Click **"✅ Save Changes"**
5. Table automatically refreshes

### Summary Statistics
- **Bottom of each view shows:**
  - Number of preceptors/sites available per period
  - Total capacity available per period (sites only)
  - Color-coded summaries

---

## 📝 **STUDENT PREFERENCE SUBMISSION**

### Through the Portal (Recommended)

#### **Option 1: Student Portal Integration**
1. Students visit **student-portal.html**
2. After submitting personal information (Step 1):
   - Form automatically shows **Step 2: Rotation Preferences**
   - Select preferred time period from dropdown
   - System shows **available preceptors** for that period
3. Rank top 5 rotation preferences
4. Optionally rank top 3 preceptor preferences
5. Click **"✅ Submit All Information"**

#### **Option 2: Within APPE Hub**
1. Open **📅 Availability Calendar**
2. Click **"📝 Student Preferences"** button
3. Select student from dropdown
4. Choose preferred time period
5. Rank 5 rotations
6. Rank 3 preceptors (filtered by availability)
7. Click **"✅ Submit Preferences"**

### What Happens:
- Preferences saved to student record with timestamp
- Available preceptors filtered based on selected period
- Student can only select preceptors who work in their chosen period
- Confirmation message shows after submission

---

## 🤖 **AUTO-MATCHING SYSTEM**

### How to Run Auto-Match

#### From Preceptor/Site Availability View:
1. Click **"🤖 Auto-Match Students"** button (top right)

#### From Student Preferences View:
1. After students submit preferences
2. Run auto-match to assign them

### Matching Algorithm:
1. **Filters students** who have submitted preferences (period selected)
2. **For each student:**
   - Gets available preceptors for their selected period
   - Tries to match with preferred preceptor first
   - If no preferred match, assigns first available preceptor
   - Gets available sites for the period
   - Assigns first available site
3. **Calculates match score:**
   - 100% if matched with preferred preceptor
   - 85% if matched with available (non-preferred) preceptor
   - 0% if no preceptor available (failed match)

### Match Results Modal Shows:
- **📊 Success Statistics:**
  - Number of successfully matched students
  - Number of failed matches
  - Overall success rate percentage
- **📋 Detailed Table:**
  - Student name & ID
  - Assigned period
  - Assigned rotation
  - Assigned preceptor
  - Assigned site
  - Match score (color-coded)
  - Status badge (Matched/Failed)
- **📥 Export Results** button - Downloads to Excel

---

## 🔄 **COMPLETE WORKFLOW**

### Step 1: Setup (Admin)
1. Navigate to **Data Management** → **Open Availability Calendar**
2. Review the 4 default time periods (P1-P4)
3. Edit preceptor availability:
   - Click each preceptor's **Edit** button
   - Check which periods they're available
   - Set max students per period
4. Edit site availability:
   - Click each site's **Edit** button
   - Check which periods they accept students
   - Set capacity per period

### Step 2: Student Submission
1. Share **student-portal.html** link with students
2. Students complete:
   - Step 1: Personal information (10 fields)
   - Step 2: Rotation preferences (auto-shown)
     - Select time period
     - See which preceptors are available
     - Rank 5 rotations
     - Rank 3 preceptors (optional)
3. System stores preferences with timestamp

### Step 3: Admin Review
1. Navigate to **Data Management** tab
2. Click **"📥 Review Submissions"** to see:
   - Student personal info submissions
   - Student rotation preferences
3. Approve/reject submissions

### Step 4: Auto-Matching
1. Open **Availability Calendar**
2. Click **"🤖 Auto-Match Students"**
3. Review match results:
   - Check success rate
   - View detailed assignments
   - Export to Excel if needed
4. System assigns students to:
   - Available preceptors in their preferred period
   - Rotations matching their preferences
   - Available training sites

### Step 5: Assignment Finalization
1. Navigate to **Assignments** tab
2. Review auto-generated assignments
3. Edit as needed using **"✏️ Edit"** buttons
4. Print assignment letters
5. Email students their assignments

---

## 📊 **DATA STRUCTURE**

### Time Periods
```javascript
{
    id: 'P1',
    name: 'Period 1',
    start: '2026-01-15',
    end: '2026-02-26',
    weeks: 6
}
```

### Preceptor Availability
```javascript
{
    name: 'Dr. Ahmed Al-Salem',
    availability: ['P1', 'P2', 'P4'],  // Available in periods 1, 2, and 4
    maxStudentsPerPeriod: 3
}
```

### Site Availability
```javascript
{
    name: 'King Abdulaziz Medical City',
    availability: ['P1', 'P2', 'P3', 'P4'],  // Year-round
    capacityPerPeriod: 15
}
```

### Student Preferences
```javascript
{
    period: 'P2',  // Selected time period
    rotations: ['Internal Medicine', 'Critical Care', 'Ambulatory Care'],
    preceptors: ['Dr. Ahmed Al-Salem', 'Dr. Sara Al-Qahtani'],
    submittedAt: '2026-01-12T10:30:00.000Z'
}
```

---

## ✨ **KEY FEATURES**

### ✅ **Real-Time Filtering**
- When student selects a time period
- System automatically shows ONLY available preceptors
- Prevents impossible matches

### ✅ **Visual Indicators**
- Green ✅ = Available
- Red ❌ = Unavailable
- Color-coded match scores
- Summary statistics

### ✅ **Inline Editing**
- Edit any preceptor availability with 2 clicks
- Edit any site availability with 2 clicks
- Changes save immediately

### ✅ **Smart Matching**
- Respects student preferences
- Only matches with available resources
- Calculates match quality scores
- Shows success/failure reasons

### ✅ **Search & Filter**
- Search preceptors by name/specialty/license
- Search sites by name
- Filter results instantly

---

## 🚀 **NEXT STEPS**

### Recommended Actions:
1. **Update all preceptor availability** for Spring 2026
2. **Update all site availability** for each period
3. **Share portal link** with students for preference submission
4. **Monitor submissions** through Review Submissions
5. **Run auto-match** after deadline
6. **Review and finalize** assignments

### Future Enhancements:
- Email notifications when students submit preferences
- Conflict detection (over-subscribed preceptors)
- Waitlist management
- Multi-semester scheduling
- Integration with university calendar

---

## 📞 **SUPPORT**

For questions or issues:
1. Check this guide first
2. Review the **APPE_AUTOMATION_GUIDE.md**
3. Review the **FANCY_FEATURES.md**
4. Contact APPE program coordinator

---

**Last Updated:** January 12, 2026
**Version:** 2.0
**System:** APPE Experience Hub - Availability & Matching Module
