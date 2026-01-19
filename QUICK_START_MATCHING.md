# 🎯 Student Preference & Matching System - Quick Start

## 🚀 Complete System Overview

Your APPE system now has **automated preference-based matching** that:

✅ Lets students rank their top 3 specialty & site preferences  
✅ Runs smart algorithm considering GPA, preferences, and availability  
✅ Maximizes student satisfaction while respecting capacity limits  
✅ Exports results and saves to assignments automatically  

---

## 📊 Visual Workflow

```
┌─────────────────────────────────────────────────────────────┐
│              PREFERENCE & MATCHING WORKFLOW                 │
└─────────────────────────────────────────────────────────────┘

┌──────────────────────┐
│  ADMIN PREPARATION   │
│  (You do this first) │
└──────────┬───────────┘
           │
           ▼
    🗂️ Set Preceptor Availability
    ┌──────────────────────────────────┐
    │ Preceptors Tab                   │
    │ → Edit availability for R8       │
    │ → Check R8 for each preceptor    │
    │ → Save                           │
    └──────────┬───────────────────────┘
               │
               ▼
    ✅ Result: 15 preceptors available
    
    
┌──────────────────────┐
│  STUDENT SUBMISSION  │
│  (Students do this)  │
└──────────┬───────────┘
           │
           ▼
    🎓 Student Opens Portal
    ┌──────────────────────────────────┐
    │ Students Tab → 🎓 Portal button  │
    │ → Sees upcoming rotations        │
    │ → Clicks "Submit Preferences"    │
    └──────────┬───────────────────────┘
               │
               ▼
    📋 Fills Preference Form
    ┌──────────────────────────────────┐
    │ 1st Choice: Critical Care        │
    │ 2nd Choice: Cardiology           │
    │ 3rd Choice: Nephrology           │
    │                                  │
    │ 1st Site: KAMC-Riyadh           │
    │ 2nd Site: KFMC                  │
    │ 3rd Site: NGH                   │
    └──────────┬───────────────────────┘
               │
               ▼
    ✅ Submission Saved
    

┌──────────────────────┐
│  ADMIN MATCHING      │
│  (You run algorithm) │
└──────────┬───────────┘
           │
           ▼
    🔍 View Submission Status
    ┌──────────────────────────────────┐
    │ Preferences Tab                  │
    │ → See 45/59 students submitted   │
    │ → See top choices                │
    │ → Click "Run Matching"           │
    └──────────┬───────────────────────┘
               │
               ▼
    ⚙️ Configure Matching
    ┌──────────────────────────────────┐
    │ Choose:                          │
    │ ○ Automatic (saves immediately)  │
    │ ● Preview (review first)         │
    │                                  │
    │ Click "Run Matching"             │
    └──────────┬───────────────────────┘
               │
               ▼
    🤖 Algorithm Runs
    ┌──────────────────────────────────┐
    │ 1. Sort students by GPA          │
    │ 2. For each student:             │
    │    - Try 9 preference combos     │
    │    - Find best available match   │
    │    - Check preceptor capacity    │
    │ 3. Assign best match             │
    └──────────┬───────────────────────┘
               │
               ▼
    📊 View Results
    ┌──────────────────────────────────┐
    │ Perfect Matches: 30 (100 score)  │
    │ Good Matches: 10 (75-99)         │
    │ Fair Matches: 5 (50-74)          │
    │ Average Score: 88.5/100          │
    │                                  │
    │ ✅ Finalize Matches              │
    └──────────┬───────────────────────┘
               │
               ▼
    💾 Saved to Assignments
    

┌──────────────────────┐
│  STUDENT VIEW        │
│  (Students see)      │
└──────────┬───────────┘
           │
           ▼
    🎓 Check Portal
    ┌──────────────────────────────────┐
    │ Portal shows new assignment:     │
    │                                  │
    │ R8 - Critical Care               │
    │ KAMC-Riyadh                     │
    │ Dr. Sarah AlMutairi             │
    │ Match: Perfect (100)             │
    │ Status: Assigned                 │
    └──────────────────────────────────┘
```

---

## 🎯 Quick Access Guide

### For You (Administrator)

| Task | Location | Action |
|------|----------|--------|
| **Set preceptor availability** | Preceptors Tab | Click ✏️ Edit → Check R8 → Save |
| **View submitted preferences** | Preferences Tab | See counts & top choices |
| **Run matching algorithm** | Schedule Tab or Preferences Tab | Click 🎯 Run Matching |
| **Review match results** | After matching | See scores & assignments |
| **Export results** | Results modal | Click 📥 Export CSV |

### For Students (via Portal)

| Task | Location | Action |
|------|----------|--------|
| **Submit preferences** | Portal → Upcoming rotation | Click 🎯 Submit Preferences |
| **View assignment** | Portal → My Assignments | See matched rotation details |

---

## 📋 Example: Planning R8 Rotation

### Week 1: Preparation (Early August 2026)

```bash
✅ Go to Preceptors Tab
✅ Set availability for R8:
   - Dr. Sarah AlMutairi → Check R8
   - Dr. Abdullah Al-Rasheed → Check R8
   - Dr. Maha Al-Ghamdi → Check R8
   ... (15 preceptors total)
✅ Result: R8 ready for preferences
```

### Week 2-3: Student Submission (Mid-August 2026)

```bash
📧 Email students: "Submit R8 preferences by Aug 25"

Students submit preferences:
✅ Day 1: 15 students
✅ Day 5: 30 students
✅ Day 10: 45 students
✅ Day 14: 52 students

Check progress: Preferences Tab
```

### Week 4: Run Matching (Late August 2026)

```bash
✅ Go to Preferences Tab
✅ Click "Run Matching" for R8
✅ Choose "Preview Only"
✅ Review results:
   - 35 perfect matches (100)
   - 12 good matches (80-99)
   - 5 fair matches (60-79)
   - Average: 90/100
✅ Looks good! Click "Finalize Matches"
✅ 52 assignments created
```

### Week 5: Students View (Early September 2026)

```bash
Students log in and see:
✅ R8 assignment in portal
✅ Preceptor contact info
✅ Match quality (most got 1st/2nd choice)
✅ Ready to start rotation
```

---

## 🔢 Matching Score Examples

| Student | 1st Spec | 1st Site | Assigned | Score | Interpretation |
|---------|----------|----------|----------|-------|----------------|
| Ahmad Ali | Critical Care | KAMC | Critical Care, KAMC | **100** | Perfect! Both 1st choices |
| Sara Mohammed | Cardiology | KFMC | Cardiology, KAMC | **90** | 1st specialty, 2nd site |
| Fahad Hassan | Oncology | NGH | Critical Care, KAMC | **0** | No match (assigned to available) |

---

## 💡 Pro Tips

### 1. **Communication is Key**
```
- Email students when preferences open
- Set clear deadline (2-3 weeks)
- Send reminders at 1 week, 3 days, 1 day
- Show completion rate in Preferences tab
```

### 2. **Use Preview Mode First**
```
- Always preview before finalizing
- Check for any anomalies
- Review students with score < 50
- Adjust manually if needed
```

### 3. **Balance Capacity**
```
- Each preceptor max 3 students
- If popular specialty, add more preceptors
- Set availability strategically
```

### 4. **Monitor Progress**
```
- Check Preferences tab daily during submission period
- Follow up with non-submitters
- View top choices to predict demand
```

---

## 🆘 Common Questions

**Q: What if student doesn't submit preferences?**  
A: They can be assigned manually OR submit late (you can run matching again)

**Q: Can I override the matching?**  
A: Yes! Results are just assignments - you can edit them manually after

**Q: What if two students want same preceptor?**  
A: Algorithm assigns by GPA order - higher GPA gets priority

**Q: Can student change preferences after submitting?**  
A: Yes, they can resubmit - system updates their record

**Q: How many students per preceptor?**  
A: Max 3 (configurable in code - search for `preceptorLoad[p.id] < 3`)

---

## 📁 Files Modified

```
✅ js/attendance-schedule.js    (preference submission forms)
✅ js/matching-algorithm.js     (NEW - matching logic)
✅ js/appe-hub.js               (schedule buttons, preferences tab)
✅ index.html                   (load matching script)
```

---

## 🎉 You're Ready!

The preference and matching system is now **fully functional** and ready to use!

### Next Steps:

1. **Test the workflow** with a few students for upcoming rotation
2. **Set preceptor availability** for R8, R9, R10
3. **Have students submit** preferences
4. **Run matching** in preview mode
5. **Review and finalize** assignments

---

**Need Help?** Check [PREFERENCE_MATCHING_GUIDE.md](PREFERENCE_MATCHING_GUIDE.md) for detailed documentation.

**Last Updated:** January 12, 2026  
**Version:** 1.0  
**Status:** ✅ Production Ready
