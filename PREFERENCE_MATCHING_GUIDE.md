# 🎯 Student Preference & Matching System Guide

## Overview

The APPE system now includes a complete student preference and matching algorithm that automatically assigns students to rotations based on their preferences, GPA, and preceptor availability.

---

## 🔄 Complete Workflow

```
1. SET PRECEPTOR AVAILABILITY
   ↓
2. STUDENTS SUBMIT PREFERENCES
   ↓
3. RUN MATCHING ALGORITHM
   ↓
4. REVIEW RESULTS
   ↓
5. FINALIZE ASSIGNMENTS
```

---

## 📋 STEP 1: Set Preceptor Availability

**Before students can submit preferences**, preceptors must have their availability set for the rotation period.

**Location:** APPE Hub → Preceptors Tab

**Steps:**
1. Find the preceptor in the table
2. Click **✏️ Edit** in the "Availability" column
3. Check the rotation periods they're available for (e.g., R8, R9, R10)
4. Click **💾 Save Availability**

**Why this matters:**
- Students can only see specialties/sites that have available preceptors
- The matching algorithm only considers preceptors marked as available

---

## 🎯 STEP 2: Students Submit Preferences

### Option A: From Student Portal (Recommended)

**Location:** APPE Hub → Students Tab → Click **🎓 Portal** button

**Student View:**
1. Student sees their rotation schedule
2. For **Upcoming** rotations, they see "🎯 Submit Preferences" button
3. They click the button and fill in their preferences:
   - **3 Specialty Choices** (1st, 2nd, 3rd)
   - **3 Site Choices** (1st, 2nd, 3rd)
4. Click **✅ Submit Preferences**

**What Students See:**
- Only specialties/sites where preceptors are available
- Cannot select the same specialty twice
- Cannot select the same site twice
- Instructions about how matching works

### Option B: Administrator Can Submit On Behalf

You can also manually submit preferences for students if needed.

---

## 🚀 STEP 3: Run Matching Algorithm

### From Schedule View

**Location:** APPE Hub → Schedule Tab

**Steps:**
1. Find the upcoming rotation (e.g., R8, R9, R10)
2. Click **🎯 Run Matching** button
3. Modal shows:
   - Number of preferences submitted
   - Number of available preceptors
   - How many students haven't submitted
4. Choose matching type:
   - **Automatic Matching** - Saves results immediately (recommended)
   - **Preview Only** - Shows results without saving (review first)
5. Click **🚀 Run Matching**

### From Preferences View

**Location:** APPE Hub → Preferences Tab

**Shows:**
- Total preferences submitted
- Breakdown by rotation period
- Top specialty and site choices
- **🎯 Run Matching Algorithm** button for each rotation

---

## ⚙️ How the Matching Algorithm Works

### Scoring System

The algorithm assigns match scores based on preference ranking:

| Specialty Rank | Site Rank | Score |
|----------------|-----------|-------|
| 1st | 1st | **100** (Perfect match) |
| 1st | 2nd | 90 |
| 2nd | 1st | 85 |
| 1st | 3rd | 80 |
| 2nd | 2nd | 75 |
| 3rd | 1st | 70 |
| 2nd | 3rd | 65 |
| 3rd | 2nd | 60 |
| 3rd | 3rd | 55 |

### Matching Process

1. **Sort Students by GPA** (highest first)
   - Students with higher GPAs get priority in matching
   - Fair advantage for academic performance

2. **For Each Student (in GPA order):**
   - Try all 9 combinations of preferences (3 specialties × 3 sites)
   - Find the best available match that:
     - Has a preceptor for that specialty + site combination
     - Preceptor must be available for this rotation period
     - Preceptor has capacity (max 3 students each)

3. **Assign Best Match:**
   - Student gets highest possible score
   - Preceptor load increments
   - Move to next student

4. **Fallback for No Match:**
   - If no preference match found, assign to any available preceptor
   - Score = 0 (marked as "N/A")

---

## 📊 STEP 4: Review Results

After running matching, you'll see:

### Statistics Dashboard

- **Perfect Matches (100)** - Got 1st choice specialty + 1st choice site
- **Good Matches (75-99)** - Got 1st or 2nd choices
- **Fair Matches (50-74)** - Got 2nd or 3rd choices
- **Poor Matches (<50)** - Assigned to available preceptor

### Average Match Score
- Overall quality of matching
- Higher = better preference satisfaction

### Detailed Results Table

For each student:
- Name
- GPA
- Assigned Preceptor
- Assigned Specialty
- Assigned Site
- **Preference Rank** (e.g., "1/1" = 1st specialty, 1st site)
- **Match Score** (color-coded)

### Actions Available

- **Save to Assignments** - Finalize and save
- **Export CSV** - Download results
- **Close** - Cancel (if preview mode)

---

## ✅ STEP 5: Finalize Assignments

### From Results Modal

1. Review all matches carefully
2. Click **✅ Finalize Matches** (or **💾 Save to Assignments**)
3. System creates ASSIGNMENTS records
4. Students can now see assignments in their portal

### What Gets Saved

Each assignment includes:
```javascript
{
  studentId: 'S001',
  rotationId: 'R8',
  preceptor: 'Dr. Sarah AlMutairi',
  rotation: 'Critical Care',
  site: 'KAMC-Riyadh',
  matchScore: 100,
  preferenceRank: '1/1',
  status: 'Assigned'
}
```

---

## 📈 Viewing Preferences

### Preferences Tab

**Shows:**
- Total preferences submitted across all rotations
- Completion rate (% of students who submitted)
- Breakdown by rotation period
- Top specialty choices (weighted by rank)
- Top site choices (weighted by rank)

### Per-Rotation View

For each rotation with submissions:
- Number of students who submitted
- Most popular specialties
- Most popular sites
- Button to run matching
- Button to view all preferences

---

## 💡 Example Workflow

### Scenario: Planning R8 (October 2026 Rotation)

**1. Coordinator Sets Availability (Now - August 2026)**
```
Go to Preceptors Tab
→ For each preceptor, click "Edit" in Availability column
→ Check R8 for available preceptors
→ Save
Result: 15 preceptors available for R8
```

**2. Students Submit Preferences (August - September 2026)**
```
Student "Ahmad Ali" logs in
→ Views Portal
→ Sees R8 with "Submit Preferences" button
→ Selects:
   1st Specialty: Critical Care
   2nd Specialty: Cardiology
   3rd Specialty: Nephrology
   1st Site: KAMC-Riyadh
   2nd Site: KFMC
   3rd Site: NGH
→ Clicks "Submit Preferences"
Result: 45/59 students have submitted
```

**3. Run Matching (Late September 2026)**
```
Go to Schedule Tab
→ Find R8 card
→ Click "Run Matching"
→ See: 45 preferences, 15 preceptors available
→ Choose "Preview Only"
→ Click "Run Matching"
Result: See match results with scores
```

**4. Review Results**
```
Results show:
- 30 perfect matches (100 score)
- 10 good matches (75-99)
- 5 fair matches (50-74)
- 0 poor matches
- Average score: 88.5 / 100
Action: Looks good! Click "Finalize Matches"
```

**5. Students See Assignments**
```
Ahmad Ali views his portal
→ Sees R8 assignment:
   Critical Care rotation (his 1st choice)
   KAMC-Riyadh (his 1st choice)
   Dr. Sarah AlMutairi
   Match: Perfect (100)
```

---

## 🔧 Advanced Features

### Capacity Management

- **Max 3 students per preceptor** (configurable)
- Algorithm automatically respects capacity
- If preceptor full, tries next best match

### GPA Priority

- Students sorted by GPA before matching
- Higher GPA = earlier in selection order
- Fair advantage for academic performance

### Preference Weighting

- Specialty and site preferences weighted equally
- 1st choice = highest priority
- Algorithm tries all 9 combinations

### Fallback Matching

- If no preference match available:
  - Assigns to any preceptor with capacity
  - Marks as "N/A" preference rank
  - Score = 0 (easy to identify for review)

---

## 📥 Export Options

### Export Matching Results

**From Results Modal:**
- Click **📥 Export CSV**
- Downloads: `matching-results-YYYY-MM-DD.csv`

**Includes:**
- Student Name
- Student ID
- GPA
- Preceptor
- Specialty
- Site
- Preference Rank
- Match Score

### Export Preferences

You can export all submitted preferences for analysis.

---

## 🎯 Best Practices

### 1. Set Deadlines

- Give students 2-3 weeks to submit preferences
- Clearly communicate deadline
- Send reminders to non-submitters

### 2. Communicate Availability Early

- Update preceptor availability at least 1 month before rotation
- Notify students when preferences open

### 3. Use Preview Mode First

- Always preview results before finalizing
- Check for any anomalies
- Review students with poor matches

### 4. Balance Preferences with Needs

- Some students may need specific rotations
- You can manually adjust after auto-matching
- Document any manual changes

### 5. Monitor Completion Rate

- Check Preferences tab regularly
- Follow up with students who haven't submitted
- Consider mandatory submission policy

---

## 📞 Troubleshooting

### Problem: "No preceptors available for R8"

**Solution:**
- Go to Preceptors tab
- Set availability for R8 on preceptors
- Make sure at least 1 preceptor per specialty

### Problem: Student can't see any specialties

**Solution:**
- Check if preceptors are marked available for that rotation
- At least one preceptor must have the rotation in availability array

### Problem: Many students get poor matches

**Possible Causes:**
1. Not enough preceptor capacity
2. All students want same specialty/site
3. Limited preceptor availability

**Solutions:**
- Add more preceptors for popular specialties
- Set availability for more preceptors
- Educate students about all options

### Problem: Matching doesn't save

**Solution:**
- Check browser console for errors
- Make sure matching-algorithm.js is loaded
- Try preview mode first, then finalize

---

## 🔑 Key Functions Reference

### For Administrators

- `submitStudentPreferences(studentId, rotationId)` - Open preference form
- `runMatchingAlgorithm(rotationId)` - Start matching process
- `executeMatching(rotationId)` - Run the algorithm
- `saveMatchesToAssignments(rotationId, matches)` - Save results

### For Students (via Portal)

- `viewStudentPortal(studentId)` - View portal
- `submitStudentPreferences(studentId, rotationId)` - Submit preferences

---

## 📊 Data Structures

### STUDENT_PREFERENCES

```javascript
{
  id: 'PREF001',
  studentId: 'S001',
  rotationId: 'R8',
  specialtyPreferences: ['Critical Care', 'Cardiology', 'Nephrology'],
  sitePreferences: ['KAMC-Riyadh', 'KFMC', 'NGH'],
  submittedDate: '2026-09-01',
  status: 'Submitted'
}
```

### Match Result

```javascript
{
  student: { /* student object */ },
  preceptor: { /* preceptor object */ },
  specialty: 'Critical Care',
  site: 'KAMC-Riyadh',
  score: 100,
  prefRank: '1/1'
}
```

---

## 🎓 Summary

The preference and matching system:

✅ **Automates** student-rotation assignments  
✅ **Considers** student preferences, GPA, and availability  
✅ **Maximizes** satisfaction with 9-combination matching  
✅ **Respects** preceptor capacity limits  
✅ **Provides** transparency with match scores  
✅ **Exports** results for record-keeping  

**Result:** Fair, efficient, and data-driven rotation assignments that respect student preferences while balancing programmatic needs.

---

**Last Updated:** January 2026  
**Version:** 1.0  
**System:** APPE Preference & Matching Module
