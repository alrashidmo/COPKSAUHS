# Quick Reference: Microsoft Forms → Dashboard

## 🎯 5-Minute Setup

### What You Need to Do:

1. **Export from Microsoft Forms**
   - Forms → Responses → Open in Excel
   - Save As → CSV format

2. **Upload to Dashboard**
   - Open http://localhost:8000
   - Click 📥 Upload CSV
   - Select your CSV file
   - Choose APPE Period (I-X)
   - ✅ Done!

3. **View Results**
   - Summary Insights show Highest/Lowest evaluated rotations
   - Scores in 5.0 star system
   - Filter by Rotation/Preceptor
   - Export anytime

---

## 🔄 Text to Numeric Conversion (Automatic)

```
Excellent    → ⭐⭐⭐⭐⭐ (5.0)
Very Good    → ⭐⭐⭐⭐   (4.0)
Good         → ⭐⭐⭐     (3.0)
Fair         → ⭐⭐       (2.0)
Poor         → ⭐         (1.0)
```

**System automatically handles text ratings from your Forms!**

---

## ✅ Required Microsoft Forms Columns

Your Microsoft Form MUST have:

1. ✅ **Name** - Student identifier
2. ✅ **Rotation** - Which rotation (matches our 26 rotations)
3. ✅ **Overall, how would you rate this rotation?** - Rating (Excellent/Very Good/Good/Fair/Poor)

**Optional:**
- Completion time (for timestamp)
- Email (for contact info)
- Likert scale questions (feedback)

---

## 📊 26 Rotations Configured

### Core (4 week each):
- Internal Medicine (IM)
- Critical Care (ICU)
- Community Pharmacy
- Institutional Pharmacy

### Electives (22 options):
- Nephrology, SOT, Hem/Onc, Pediatrics, NICU
- Pharmacy Admin, DIC, Pharmacoeconomics
- Surgery, Manufacturing, Drug Company
- Med Safety, Pharmacy QI, Infectious Diseases
- Academia, Health Informatics
- Outpatient, Cardiology, SFDA
- Emergency Medicine, Research, Medical Referral Center

**Total: 26 rotations, 56+ preceptors**

---

## 🎨 How Scores Display

### Dashboard Shows:

**Summary Insights** (Top Section):
- ⭐ **HIGHEST EVALUATED** → Rotation with best average score
- ⚠️ **LOWEST EVALUATED** → Rotation with lowest average score

**Chart** (Below):
- Trend line showing performance over time
- Filterable by Rotation, Preceptor
- Toggle between different views

**Export**:
- Download as CSV for reports
- Use for compliance documentation

---

## 🔧 Common Rotation Name Variations

| You Enter... | Dashboard Recognizes As: |
|---|---|
| IM | Internal Medicine |
| ICU | Critical Care |
| Oncology/Hematology | Hem/Onc |
| Card. | Cardiology |
| Neph. | Nephrology |
| SOT | Solid Organ Transplant |
| NICU | Neonatal |
| DIC | Drug Information Center |

**System is flexible with matching!**

---

## ⚡ Import Process (Inside Dashboard)

```
Upload CSV
    ↓
Select APPE Period (I-X)
    ↓
Parse Columns
    ↓
Convert Text Ratings → Numeric (Excellent→5.0, etc)
    ↓
Store in Browser
    ↓
Calculate Summary Insights (Highest/Lowest)
    ↓
Show Results Instantly
```

**Takes <1 second after upload!**

---

## 📝 Example CSV Structure (What You Export)

```
ID,Name,Rotation,Overall, how would you rate this rotation?,...
1,GHALA ALOMARI,Oncology/ Hematology,Excellent,...
2,SARA KHALID,Internal Medicine,Very Good,...
3,MARYAM AHMED,Nephrology (Neph.),Good,...
```

**That's it! The system handles the rest.**

---

## ❌ If Something Doesn't Work

**Scores show as 3.0:**
- Check column name: must be `"Overall, how would you rate this rotation?"`

**Rotations don't appear:**
- Check spelling matches one of the 26 configured rotations
- Use abbreviated versions if available

**No data imported:**
- Verify CSV has data rows (not empty)
- Check Name and Rotation columns have values

**Wrong APPE period selected:**
- Use the modal to re-import with correct period

---

## 💾 Your Data

**Stored:** Browser localStorage (persistent)
**Auto-sync:** On every page load
**Backup:** Export anytime as CSV
**Privacy:** All data stays on your computer

**No internet connection needed after initial import!**

---

## 📞 Key Features

✅ Automatic text rating conversion (Excellent→5.0)
✅ Real-time summary insights
✅ All 26 rotations configured
✅ 56+ preceptors loaded
✅ Browser-based (no server needed)
✅ Data persists
✅ Export anytime
✅ Filter by rotation/preceptor

---

## 🚀 Ready to Go!

1. **Download your Forms data as CSV**
2. **Go to http://localhost:8000**
3. **Click Upload CSV**
4. **See results instantly**

That's all! Your Microsoft Forms data is now integrated into your dashboard! 🎉

---

Generated: January 24, 2026
Last Updated: Version 2.0
