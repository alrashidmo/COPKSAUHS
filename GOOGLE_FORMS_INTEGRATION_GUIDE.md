# 📋 Google Forms Integration - Preceptor Availability System

## 🎯 **Complete Workflow Guide**

### ✅ **What's Been Updated:**

1. **Real Rotation Schedule** → 10 rotations (July 2025 - May 2026) instead of 4 generic periods
2. **Actual Preceptor Data** → 27+ preceptors with real availability imported from your Excel
3. **Google Forms Integration** → Preceptors submit availability via Google Form → Auto-import to APPE Hub

---

## 📅 **NEW ROTATION SCHEDULE (2025-2026)**

| Rotation | Dates | Duration | Notes |
|----------|-------|----------|-------|
| **Rotation 1** | July 20 - Aug 14, 2025 | 4 weeks | Sun-Thurs 8AM-5PM |
| **Rotation 2** | Aug 17 - Sep 11, 2025 | 4 weeks | Sun-Thurs 8AM-5PM |
| **Rotation 3** | Sep 14 - Oct 9, 2025 | 4 weeks | Sun-Thurs 8AM-5PM |
| **Rotation 4** | Oct 19 - Nov 13, 2025 | 4 weeks | Sun-Thurs 8AM-5PM |
| **Rotation 5** | Nov 16 - Dec 11, 2025 | 4 weeks | Sun-Thurs 8AM-5PM |
| **Rotation 6** | Dec 14, 2025 - Jan 8, 2026 | 4 weeks | Sun-Thurs 8AM-5PM |
| **Rotation 7** | Jan 18 - Feb 12, 2026 | 4 weeks | Sun-Thurs 8AM-5PM |
| **Rotation 8** | Feb 15 - Mar 12, 2026 (Ramadan) | 4 weeks | Sun-Thurs 8AM-5PM |
| **Rotation 9** | Mar 29 - Apr 23, 2026 | 4 weeks | Sun-Thurs 8AM-5PM |
| **Rotation 10** | Apr 26 - May 21, 2026 | 4 weeks | Sun-Thurs 8AM-5PM |

---

## 🔧 **SETUP: Create Google Form (5 Minutes)**

### **Step 1: Access Google Forms Setup**
```
1. Navigate to: Data Management tab
2. Click: "📋 Google Forms Setup" button
3. Click: "📝 Create Form Template"
4. Instructions window opens with full step-by-step guide
```

### **Step 2: Create the Google Form**

1. **Open:** https://docs.google.com/forms
2. **Click:** "+ Blank" to create new form
3. **Set Title:** "APPE Preceptor Availability Form - 2025-2026"
4. **Set Description:** "Please indicate your availability for each rotation period. This information will be used to match students with preceptors."

### **Step 3: Add Questions (EXACT ORDER)**

#### **Question 1:** Full Name
- Type: **Short answer**
- Required: ✅ Yes

#### **Question 2:** Specialty
- Type: **Short answer**
- Required: ✅ Yes

#### **Question 3:** Email Address
- Type: **Email**
- Required: ✅ Yes

#### **Question 4:** Rotation No. 1 (July 20 - Aug 14, 2025)
- Type: **Multiple choice**
- Options:
  - Yes - Available
  - No - Not Available
- Required: ✅ Yes

#### **Question 5:** Rotation No. 2 (Aug 17 - Sep 11, 2025)
- Type: **Multiple choice**
- Options:
  - Yes - Available
  - No - Not Available
- Required: ✅ Yes

#### **Question 6-13:** Repeat for Rotations 3-10
(Same format as above, just change the dates)

#### **Question 14:** Maximum number of students you can supervise per rotation
- Type: **Short answer**
- Response validation: **Number**
  - Minimum: 1
  - Maximum: 10
- Required: ✅ Yes

### **Step 4: Link Form to Spreadsheet**

1. Click **"Responses"** tab at top
2. Click **green Google Sheets icon** (📊)
3. Select **"Create a new spreadsheet"**
4. Click **"Create"**
5. Spreadsheet opens automatically
6. **Copy the URL** of the spreadsheet

### **Step 5: Save Configuration in APPE Hub**

1. Return to APPE Hub → Google Forms Setup modal
2. **Google Form URL:** Paste form link (from Send button)
3. **Google Sheets ID (optional):** Paste spreadsheet ID from URL
   - Example: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`
4. Click **"✅ Save Configuration"**

---

## 📤 **DISTRIBUTE: Share Form with Preceptors**

### **Get Shareable Link:**
1. In your Google Form, click **"Send"** button
2. Click **link icon** (🔗)
3. Click **"Shorten URL"** (optional)
4. Click **"Copy"**

### **Share via Email:**
```
Subject: APPE Preceptor Availability Form - Action Required

Dear Preceptors,

Please submit your availability for the 2025-2026 APPE rotations using this form:

[PASTE GOOGLE FORM LINK HERE]

Deadline: [YOUR DEADLINE]

The form takes 2-3 minutes to complete. Your responses will be used to match students with preceptors for each rotation period.

Thank you for your cooperation!

Best regards,
APPE Coordination Team
```

---

## 📥 **IMPORT: Get Responses into APPE Hub**

### **Method 1: Copy-Paste Import (Recommended)**

1. **Open your Google Sheets** (with form responses)
2. **Select all data** (Ctrl+A or Cmd+A)
3. **Copy** (Ctrl+C or Cmd+C)
4. **Go to APPE Hub** → Data Management → Google Forms Setup
5. **Click:** "📥 Import Responses Now"
6. **Paste** into text area (Ctrl+V or Cmd+V)
7. **Click:** "📥 Import Data"

**Result:** 
- New preceptors automatically created
- Existing preceptors updated
- Availability synced across all rotations

### **Method 2: Manual Review**

1. Open Google Sheets with responses
2. Review each preceptor's availability
3. Go to APPE Hub → Availability Calendar → Preceptor Availability
4. Click **"✏️ Edit"** next to each preceptor
5. Check/uncheck rotations manually

---

## 🔄 **UPDATE: When Preceptors Change Availability**

### **Scenario 1: New Submissions**
```
1. Preceptor fills form again (or you allow edits)
2. New row added to Google Sheets
3. Re-import using Method 1 above
4. System updates existing preceptor
```

### **Scenario 2: Quick Manual Update**
```
1. Availability Calendar → Preceptor Availability
2. Click "✏️ Edit" next to preceptor name
3. Check/uncheck rotations
4. Adjust "Max Students Per Rotation"
5. Save
```

---

## 📊 **EXPORT: Share Data Back to Google Sheets**

### **Export Current Availability:**
```
1. Data Management → Google Forms Setup
2. Click: "📤 Export Current Data to Google Sheets"
3. Data copied to clipboard (or downloads as .tsv file)
4. Open Google Sheets
5. Paste (Ctrl+V)
6. Data formatted in columns automatically
```

**Use Cases:**
- Share updated availability with admin team
- Create backup before making changes
- Generate reports for department head

---

## ✅ **VERIFICATION: Check Import Success**

### **After Importing:**
1. Go to **Availability Calendar** → **Preceptor Availability**
2. **Search** for a preceptor you know submitted the form
3. **Check** their availability row:
   - ✅ Green = Available
   - ❌ Red = Not available
4. **Verify** "Max/Period" column shows correct number

### **Summary Statistics:**
- Bottom of table shows **number of available preceptors per rotation**
- Verify counts match expected responses

---

## 🎯 **COMPLETE WORKFLOW (Start to Finish)**

```
┌─────────────────────────────────────────────────────┐
│ STEP 1: SETUP (One-time, 5 min)                   │
│ ✅ Create Google Form with 14 questions            │
│ ✅ Link to Google Sheets                           │
│ ✅ Save config in APPE Hub                         │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ STEP 2: DISTRIBUTE (One-time, 2 min)              │
│ ✅ Copy form link                                   │
│ ✅ Email to all 27+ preceptors                     │
│ ✅ Set deadline (e.g., 1 week)                     │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ STEP 3: WAIT FOR RESPONSES (1 week)               │
│ 📊 Monitor Google Sheets for new submissions       │
│ 📧 Send reminders to non-responders                │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ STEP 4: IMPORT (After deadline, 1 min)            │
│ ✅ Open Google Sheets                              │
│ ✅ Ctrl+A → Ctrl+C                                 │
│ ✅ Import to APPE Hub                              │
│ ✅ Verify counts                                   │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ STEP 5: AUTO-MATCH (Immediately after import)     │
│ ✅ Students submit preferences                     │
│ ✅ Click "🤖 Auto-Match Students"                  │
│ ✅ System matches based on availability            │
│ ✅ Export assignments                              │
└─────────────────────────────────────────────────────┘
```

---

## 🔍 **TROUBLESHOOTING**

### ❌ **"No data imported"**
**Cause:** Data not copied correctly
**Fix:** Make sure you selected ALL cells (Ctrl+A) before copying

### ❌ **"Preceptor not found after import"**
**Cause:** Name mismatch
**Fix:** Check spelling in form vs. APPE Hub (must match exactly)

### ❌ **"Availability not updating"**
**Cause:** Column order wrong in Google Sheets
**Fix:** Make sure rotations are in columns 5-14 (after Name, Specialty, Email)

### ❌ **"Form responses not saving to Sheets"**
**Cause:** Not linked properly
**Fix:** In Google Form → Responses tab → Click green Sheets icon → Create new

---

## 📋 **SAMPLE GOOGLE FORM LINK**

Once you create your form, the link will look like:
```
https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXX/viewform
```

Share this link with preceptors!

---

## 🎉 **BENEFITS OF GOOGLE FORMS INTEGRATION**

✅ **No Manual Entry** - Preceptors submit directly  
✅ **No Errors** - Data imported automatically  
✅ **Time Saved** - 5 minutes vs. 2 hours manual entry  
✅ **Always Updated** - Re-import anytime for latest data  
✅ **Audit Trail** - Google Sheets timestamp all submissions  
✅ **Easy Distribution** - Just email the link  
✅ **Mobile Friendly** - Preceptors can fill on phone  

---

## 📞 **SUPPORT**

**For Google Forms issues:**
- Google Forms Help: https://support.google.com/docs/answer/6281888

**For APPE Hub import issues:**
- Check this guide first
- Verify data format (Name | Specialty | Email | R1 | R2 | ... | Max Students)
- Contact APPE admin

---

**Last Updated:** January 12, 2026  
**System Version:** 3.0 - Google Forms Integration  
**Rotation Year:** 2025-2026 (10 rotations)
