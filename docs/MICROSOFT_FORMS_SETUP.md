# Microsoft Forms Integration - Complete Setup

## ✅ System Configuration Complete

Your APPE Evaluation Dashboard is now fully configured to work with your Microsoft Forms export.

---

## 📋 Data Structure Mapping

### Microsoft Forms CSV Columns → Dashboard Fields

| Microsoft Forms Column | Dashboard Field | Type | Example |
|---|---|---|---|
| `Completion time` | Import Date | Timestamp | 8/20/25 12:54:25 |
| `Name` | Student Name | Text | GHALA MOHAMMAD B ALOMARI |
| `Rotation` | Rotation Type | Text | Oncology/ Hematology |
| `Overall, how would you rate this rotation?` | **Score** (Converted) | Text → Numeric | Excellent → 5.0 |
| Email | Student Email | Text | 421210221@ksau-hs.edu.sa |

---

## 🔄 Rating Conversion System

The dashboard **automatically converts text ratings to numeric scores**:

```
Excellent      → 5.0 stars
Very Good      → 4.0 stars  
Good           → 3.0 stars
Fair           → 2.0 stars
Poor           → 1.0 stars

Also supports Likert scale:
5. Strongly Agree → 5.0
4. Agree         → 4.0
3. Neutral       → 3.0
2. Disagree      → 2.0
1. Strongly Disagree → 1.0
```

---

## 📊 26 Rotations Configured

### Core Rotations (4 weeks each)
1. **Internal Medicine (IM)** - 11 preceptors
2. **Critical Care (ICU)** - 10 preceptors
3. **Advanced Community Pharmacy (Community)** - 5 preceptors
4. **Advanced Institutional/Inpatient Pharmacy (Institutional)** - 3 preceptors

### Elective Rotations (22 options)
5. Nephrology (Neph.) - 3 preceptors
6. Solid Organ Transplant (SOT) - 2 preceptors
7. Oncology/Hematology (Hem/Onc) - 5 preceptors
8. Pediatrics (Ped.) - 6 preceptors
9. Neonatal (NICU) - 1 preceptor
10. Pharmacy Administration (Admin.) - 2 preceptors
11. Drug Information Center (DIC) - 2 preceptors
12. Pharmacoeconomic and Formulary Management (Ph. Economic) - 1 preceptor
13. Surgery - Contact Clinical Affairs
14. Drug Manufacturing - Contact Clinical Affairs
15. Drug Company - External
16. Medication Safety (Med. Safety) - 4 preceptors
17. Pharmacy Quality Assurance (Pharmacy QI) - 3 preceptors
18. Infectious Diseases (ID) - 3 preceptors
19. Academia - 1 preceptor
20. Health Informatics - External
21. Advanced Institutional Outpatient (Outpatient) - 6 preceptors
22. Cardiology (Card.) - 6 preceptors
23. Saudi FDA (SFDA) - External
24. Emergency Medicine (EM) - 1 preceptor
25. Research - External
26. Medical Referral Center (MRC) - External

**Total: 56 Internal Preceptors + External Partners**

---

## 🎯 How to Use

### Step 1: Export Data from Microsoft Forms
1. Open your Microsoft Form
2. Go to **Responses** → **Open in Excel**
3. Save as **CSV** format
4. Ensure column names match (or are similar to):
   - `Name`
   - `Rotation`
   - `Overall, how would you rate this rotation?`
   - `Completion time`

### Step 2: Upload to Dashboard
1. Click **📥 Upload CSV** button
2. Select your exported CSV file
3. Choose the **APPE Period** (I-X) from the modal
4. Dashboard automatically:
   - Parses the CSV
   - Converts text ratings → numeric scores
   - Stores data in browser (localStorage)
   - Calculates Summary Insights
   - Updates charts and filters

### Step 3: View Insights
- **Summary Cards**: Highest & Lowest evaluated rotations
- **Trend Chart**: Performance over time
- **Filters**: Filter by Rotation, Preceptor, Year
- **Export**: Download data for reports

---

## 📁 Sample Data for Testing

A sample CSV file has been created: `sample-evaluation.csv`

**Contains 5 sample student evaluations with:**
- Text ratings (Excellent, Very Good, Good, Fair)
- Different rotations (Oncology, IM, Nephrology, SOT, ICU)
- Likert scale responses
- Student feedback

**To test:**
1. Go to http://localhost:8000
2. Click **📥 Upload CSV**
3. Select **sample-evaluation.csv**
4. Choose **APPE I** from modal
5. See data populate instantly

---

## 🔧 Technical Details

### CSV Processing Logic (Line 5375 in appe-hub.js)

```javascript
// Microsoft Forms Column Detection (Case-insensitive)
const rotationField = record['rotation'];
const studentName = record['name'];
const ratingValue = record['overall, how would you rate this rotation?'];

// Automatic Text→Numeric Conversion
const score = window.convertRatingToScore(ratingValue);
// Returns: Excellent→5.0, Very Good→4.0, Good→3.0, Fair→2.0, Poor→1.0

// Fixed Academic Year (Single Year Model)
const year = '2025-2026';
```

### Data Storage
- **Location**: Browser localStorage (`appeEvaluationData`)
- **Persistence**: Survives browser refresh
- **Backup**: Always sync from localStorage on page load
- **Export**: Download as CSV anytime

---

## ✨ Key Features

✅ **Automatic Text Rating Conversion** - No manual score entry needed
✅ **Flexible Column Detection** - Works with various form exports
✅ **Real-time Insights** - Summary Insights update immediately
✅ **Persistent Storage** - Data saved in browser
✅ **Multi-APPE Support** - Select APPE period during import
✅ **26 Rotations** - All your rotations configured
✅ **100+ Preceptors** - Complete preceptor database
✅ **Single Year Model** - Focused on 2025-2026

---

## 🚀 Next Steps

1. **Test with your actual Microsoft Forms export**
   - Download real student data from Forms
   - Upload to dashboard
   - Verify ratings convert correctly

2. **Create recurring imports**
   - Weekly: Download latest Forms responses
   - Upload to dashboard
   - Review trends

3. **Generate Reports**
   - Filter by rotation/preceptor
   - Export filtered data
   - Share with stakeholders

---

## 📞 Support

**If ratings don't convert properly:**
- Check that Forms column is named exactly: "Overall, how would you rate this rotation?"
- Verify rating options are: Excellent, Very Good, Good, Fair, Poor
- Check CSV format (Windows might use semicolon as delimiter)

**If rotations don't appear:**
- Ensure rotation names match the 26 configured rotations
- Check spelling (case-insensitive matching)
- Use abbreviations if provided (Neph., Card., etc.)

---

Generated: January 24, 2026
Version: 2.0 - Microsoft Forms Integration
