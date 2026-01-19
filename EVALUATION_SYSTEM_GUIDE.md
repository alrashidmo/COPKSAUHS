# APPE Evaluation Management System - User Guide

## 🎯 Overview
Complete evaluation data management system with **4 input methods** and automatic dashboard KPI updates.

---

## 📊 Features

### 1. **Direct Admin Editing** ✏️
- Click any score/rating in the tables to edit inline
- Changes save instantly and update dashboard automatically
- Color-coded inputs (green = excellent, yellow = good, red = needs support)

### 2. **Google Forms Integration** 📋
- Collect evaluations from students/preceptors remotely
- Copy responses from Google Sheets → Import to system
- Forms setup wizard with question templates

### 3. **CSV/Excel Import** 📁
- Bulk upload evaluation data from spreadsheets
- Supports .csv, .xlsx, .xls formats
- One-click import with automatic validation

### 4. **Dashboard Entry Forms** 💻
- Quick manual entry through modal interfaces
- Organized by category (Students, Preceptors, Sites)
- Real-time status indicators

---

## 🚀 Quick Start Guide

### Step 1: Access Evaluation Hub
1. Open APPE Dashboard
2. Click **"📊 Manage Evaluations"** button (top right)
3. Choose your management option:
   - 👨‍🎓 **Student Evaluations** - APPE scores (0-100%)
   - 👨‍⚕️ **Preceptor Ratings** - Performance ratings (0-5 ⭐)
   - 🏥 **Site Ratings** - Facility ratings (0-5 ⭐)
   - 📁 **Bulk Operations** - Import/export CSV/Excel

---

## 📖 Detailed Instructions

### A. Managing Student Evaluations

#### **Method 1: Direct Edit**
1. Click **"👨‍🎓 Student Evaluations"**
2. Find student in table
3. Click score field → Type new score
4. Press Enter/Tab → Auto-saves
5. Dashboard updates immediately

#### **Method 2: Import CSV**
1. Prepare CSV with columns: `Student Name`, `ID`, `Rotation`, `APPE Score`
2. Click **"📁 Import CSV/Excel"**
3. Select your file
4. Click **"Upload & Import"**
5. Verify imported data

#### **Method 3: Google Forms**
**Setup:**
1. Click **"📋 Google Forms Setup"**
2. Create form with questions:
   - Student Name (short answer)
   - Student ID (short answer)
   - APPE Score (number, 0-100)
   - Comments (paragraph, optional)
3. Share form link with evaluators

**Import Responses:**
1. Open Google Form responses in Sheets
2. File → Download → CSV
3. Import CSV using Method 2

---

### B. Managing Preceptor Ratings

#### **Direct Edit**
1. Click **"👨‍⚕️ Preceptor Ratings"**
2. Click rating field (0.0 - 5.0)
3. Enter new rating
4. Auto-saves + dashboard updates

#### **CSV Format**
```
Preceptor Name,Specialty,Site,Rating
Dr. Sarah Johnson,Cardiology,KAMC,4.8
Dr. Ahmed Al-Rashid,Oncology,KFMC,4.9
```

---

### C. Managing Site Ratings

#### **Direct Edit**
1. Click **"🏥 Training Site Ratings"**
2. Click rating field
3. Enter 0.0 - 5.0 rating
4. Auto-saves instantly

#### **CSV Format**
```
Site Name,Type,Rating
KAMC - Riyadh,Hospital,4.7
KFMC - Riyadh,Medical City,4.8
```

---

### D. Bulk Operations

#### **Export All Data**
1. Click **"📁 Bulk Operations"**
2. Choose export type:
   - 👨‍🎓 Students → `student-evaluations-YYYY-MM-DD.csv`
   - 👨‍⚕️ Preceptors → `preceptor-ratings-YYYY-MM-DD.csv`
   - 🏥 Sites → `site-ratings-YYYY-MM-DD.csv`
3. File downloads automatically

#### **Import from Excel**
1. Prepare Excel file (.xlsx) with correct columns
2. Save as CSV
3. Click **"📥 Upload & Import"**
4. Select CSV file
5. Review imported records

---

## 🎨 Dashboard Integration

### Automatic KPI Updates
Every edit/import automatically updates:

**Student Metrics:**
- Top Performers count (≥95%)
- At-Risk students (<85%)
- Average APPE score

**Preceptor Metrics:**
- Average rating
- Highest rated preceptor (name + rating)
- Lowest rated preceptor (name + rating)

**Site Metrics:**
- Highest utilized site
- Lowest utilized site
- Site rating indicators

---

## 📋 CSV Import Templates

### Student Evaluations Template
```csv
Student Name,ID,Rotation,APPE Score
Mohammed Al-Salem,STU001,Community Pharmacy,95
Fatimah Abdullah,STU002,Hospital Pharmacy,88
```

### Preceptor Ratings Template
```csv
Preceptor Name,Specialty,Site,Rating,Students
Dr. Sarah Johnson,Cardiology,KAMC,4.8,3
Dr. Ahmed Al-Rashid,Oncology,KFMC,4.9,2
```

### Site Ratings Template
```csv
Site Name,Type,Capacity,Active Students,Rating
KAMC - Riyadh,Hospital,10,8,4.7
KFMC - Riyadh,Medical City,8,6,4.8
```

---

## 🛡️ Data Validation Rules

### Student Scores
- ✅ Range: 0-100
- ✅ Integer or decimal
- ❌ Empty values → Default: 0
- ✅ Status auto-calculated:
  - ≥95% → 🌟 Excellent
  - 85-94% → ✓ Good
  - <85% → ⚠️ Needs Support

### Preceptor/Site Ratings
- ✅ Range: 0.0 - 5.0
- ✅ One decimal place (e.g., 4.7)
- ❌ Empty → Default: 0.0
- ✅ Color codes:
  - ≥4.5 → Green (Excellent)
  - 4.0-4.4 → Yellow (Good)
  - <4.0 → Red (Needs Improvement)

---

## 🔄 Workflow Examples

### Scenario 1: Mid-Rotation Update
**Situation:** Update all student scores after midterm evaluations

**Steps:**
1. Export current data: **📁 Bulk → 👨‍🎓 Students**
2. Update scores in Excel
3. Save as CSV
4. **📁 Bulk → Upload & Import**
5. Verify dashboard updates

**Time:** ~2 minutes for 50 students

---

### Scenario 2: Preceptor Performance Review
**Situation:** Collect feedback from students about preceptors

**Steps:**
1. **📋 Google Forms Setup → Preceptor Evaluation**
2. Create form with rating questions
3. Share with students
4. Download responses as CSV
5. **👨‍⚕️ Preceptor Ratings → Import CSV**
6. Review dashboard "Highest/Lowest Rated Preceptor"

**Time:** 5 min setup + automatic collection

---

### Scenario 3: New Site Onboarding
**Situation:** Add new training site with initial rating

**Steps:**
1. **🏥 Site Ratings**
2. (Add site manually in TRAINING_SITES array first)
3. Click rating field → Enter 5.0
4. Dashboard shows updated utilization

**Time:** 30 seconds

---

## 🎓 Tips & Best Practices

### ✅ DO:
- Export data weekly for backup
- Use Google Forms for distributed data collection
- Review dashboard after each import
- Set custom KPI thresholds for your program
- Keep CSV files organized by date

### ❌ DON'T:
- Edit CSV files in Excel (may corrupt format) → Use plain text editor
- Import without backup
- Mix up column order in CSV
- Use special characters in names (e.g., commas)
- Forget to save/refresh after manual edits

---

## 🆘 Troubleshooting

### Problem: "Import failed"
**Solutions:**
- Check CSV format matches template exactly
- Remove extra commas/quotes
- Ensure headers are in row 1
- Verify file encoding (UTF-8)

### Problem: "Dashboard not updating"
**Solutions:**
- Refresh browser (F5)
- Click "Dashboard" tab to re-render
- Check browser console for errors
- Verify data saved (check export)

### Problem: "Rating out of range"
**Solutions:**
- Student scores: 0-100 only
- Preceptor/Site ratings: 0.0-5.0 only
- Remove extra decimal places
- Check for negative values

---

## 📞 Support

### Quick Reference
- **Access:** APPE Dashboard → 📊 Manage Evaluations
- **Export:** Always create backups before bulk changes
- **KPI Settings:** ⚙️ Configure KPI Thresholds
- **Forms:** 📋 Google Forms Setup

### File Locations
- Main script: `js/evaluation-system.js`
- Dashboard: `js/appe-hub.js`
- Data storage: Browser localStorage + in-memory arrays

---

## 🎉 Summary

Your evaluation management system provides:
1. ✏️ **Direct editing** - Click & type anywhere
2. 📋 **Google Forms** - Remote data collection
3. 📁 **CSV import** - Bulk uploads
4. 📊 **Auto KPIs** - Real-time dashboard updates

**One system, four ways to manage evaluations!**
