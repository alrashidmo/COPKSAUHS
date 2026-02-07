# CSV Column Mapping Guide

## Your Microsoft Forms Export Structure

When you export data from your Microsoft Forms, you'll get these columns:

```
ID
Start time
Completion time ← Used as Import Date
Email
Name ← Used as Student Name
Last modified time
Rotation ← Used as Rotation Type
[Likert Scale Questions - 13 total]
  - I had adequate patient contact...
  - I had access to necessary patient info...
  - I had access to all necessary reference materials...
  - This rotation provided opportunities to interact with other healthcare professionals...
  - This rotation provided an environment that facilitated my learning...
  - This rotation enhanced my verbal communication skills...
  - This rotation enhanced my written communication skills...
  - This rotation enhanced my clinical skills...
  - This rotation allowed me to apply previously learned PharmD course...
  - Rotation requirements were achieved easily...
  - Rotation time was appropriate...
  - Rotation duration was enough...
  - I believe this experience helped me to be better pharmacist...
"Overall, how would you rate this rotation?" ← Used as Score (Text→Numeric Conversion)
Would you recommend this rotation to other students? ← Optional recommendation
How might this practice experience be improved? ← Optional feedback
Please share your feedback with us: ← Optional comments
```

## What the Dashboard Uses

The dashboard ONLY extracts these key fields:

| Column Name | Purpose | Required | Note |
|---|---|---|---|
| `Name` | Student Identifier | ✅ Yes | Used to track who submitted the evaluation |
| `Rotation` | Which rotation was evaluated | ✅ Yes | Must match one of 26 configured rotations |
| `Overall, how would you rate this rotation?` | Performance Score | ✅ Yes | Converted: Excellent→5.0, Very Good→4.0, Good→3.0, Fair→2.0, Poor→1.0 |
| `Completion time` | Import Timestamp | ⚠️ Optional | Used to track when evaluation was submitted |
| `Email` | Contact Info | ⚠️ Optional | For reference only |

## How to Export from Microsoft Forms

1. **Go to your Microsoft Form**
2. **Click "Responses" tab**
3. **Click "Open in Excel"**
   - This automatically opens Excel with your responses
   - Depending on your version, it may show online or download
4. **File → Export as → CSV**
   - Windows: Right-click → Save As → CSV format
   - Mac: File → Export → CSV format
5. **Save as**: `evaluation_data.csv` (or any name)

## CSV Format Requirements

Your CSV export must have:

✅ **First row must be column headers** (the exact names from Forms)
✅ **Data starting from row 2**
✅ **UTF-8 encoding** (automatic from Excel export)
✅ **Commas as separators** (not semicolons)

Example structure:
```
ID,Start time,Completion time,Email,Name,Last modified time,Rotation,...,"Overall, how would you rate this rotation?",...
1,8/20/25 12:51:45,8/20/25 12:54:25,421210221@ksau-hs.edu.sa,GHALA MOHAMMAD B ALOMARI,,Oncology/ Hematology,...,Excellent,...
2,8/21/25 10:15:30,8/21/25 10:18:45,421210222@ksau-hs.edu.sa,SARA KHALID ALOMARI,,Internal Medicine,...,Very Good,...
```

## Rotation Name Matching

The dashboard tries to match rotation names intelligently. These variations all work:

### Internal Medicine variations:
- `Internal Medicine`
- `Internal Medicine (IM)`
- `IM`
- `internal-medicine`

### Oncology/Hematology variations:
- `Oncology/ Hematology`
- `Oncology/Hematology`
- `Hem/Onc`
- `oncology`
- `hematology`

### All 26 Rotations (Use Exactly):
1. `Internal Medicine (IM)` or just `Internal Medicine` or `IM`
2. `Critical Care (ICU)` or `ICU`
3. `Advanced Community Pharmacy` or `Community`
4. `Advanced Institutional/Inpatient Pharmacy` or `Institutional`
5. `Nephrology (Neph.)` or `Nephrology`
6. `Solid Organ Transplant (SOT)` or `SOT`
7. `Oncology/Hematology (Hem/Onc)` or any variation
8. `Pediatrics (Ped.)` or `Pediatrics`
9. `Neonatal (NICU)` or `NICU`
10. `Pharmacy Administration` or `Admin`
11. `Drug Information Center (DIC)` or `DIC`
12. `Pharmacoeconomic and Formulary Management`
13. `Surgery`
14. `Drug Manufacturing`
15. `Drug Company`
16. `Medication Safety (Med.Safety)` or `Medication Safety`
17. `Pharmacy Quality Assurance (Pharmacy QI)` or `Pharmacy QI`
18. `Infectious Diseases (ID)` or `ID`
19. `Academia`
20. `Health Informatics`
21. `Advanced Institutional Outpatient` or `Outpatient`
22. `Cardiology (Card.)` or `Cardiology`
23. `Saudi FDA (SFDA)` or `SFDA`
24. `Emergency Medicine (EM)` or `EM`
25. `Research`
26. `Medical Referral Center (MRC)` or `MRC`

## Rating Scale Matching

The dashboard converts these text values to numeric scores:

```javascript
Excellent      → 5.0 ⭐⭐⭐⭐⭐
Very Good      → 4.0 ⭐⭐⭐⭐
Good           → 3.0 ⭐⭐⭐
Fair           → 2.0 ⭐⭐
Poor           → 1.0 ⭐

Also supports Microsoft Forms Likert Scale:
5. Strongly Agree      → 5.0
4. Agree               → 4.0
3. Neutral             → 3.0
2. Disagree            → 2.0
1. Strongly Disagree   → 1.0
```

## Troubleshooting

### "Data didn't import" or no records appeared
**Check:**
1. Did you select an APPE period in the modal?
2. Does the CSV have data (more than 1 row)?
3. Do student names exist in the `Name` column?
4. Do rotation names match the 26 configured rotations?

### "Scores show as 3.0"
**Cause:** Rating text wasn't recognized
**Solution:** Check that Forms column is: `"Overall, how would you rate this rotation?"`
**Workaround:** Replace rating values in CSV before importing

### "Only some records imported"
**Cause:** Some rows are missing Name or Rotation
**Solution:** Check CSV for empty cells in required columns

### "Rotation name not recognized"
**Solution:** Check exact rotation name in your form response
**Try:** Use the abbreviated version (e.g., `IM` instead of full name)

---

## Technical Note

The CSV parser is case-insensitive and flexible:
- Column names: `Rotation`, `rotation`, `ROTATION` all work
- Rating values: `Excellent`, `EXCELLENT`, `excellent` all convert to 5.0
- Whitespace is trimmed automatically

This makes the system forgiving of minor formatting differences in your Forms export.
