# 🚀 Production Reset Guide

This guide will help you reset everything to start with a clean production environment.

## ✅ What's Already Done

1. **Sample tickets cleared** from [js/student-portal.js](js/student-portal.js)
   - All 4 demo tickets removed
   - Tickets array now empty and ready for real submissions

2. **Cache updated** in [index.html](index.html)
   - `student-portal.js?v=20260317002` - Will force reload

## 📋 Next Steps

### Step 1: Run Database Reset (Optional)

If you want to clear all tickets from the database, run:

```bash
# In Supabase SQL Editor, paste and run:
```

```sql
-- Clear all tickets (if tickets table exists)
DELETE FROM tickets;

-- Keep real approved students, remove any test/demo students
DELETE FROM students
WHERE approved_date IS NULL
   OR account_status = 'demo'
   OR email LIKE '%test%';
```

### Step 2: Student Data Decision

You have **two options** for student data:

#### Option A: Keep Hardcoded Students (Current Setup)
- [js/app.js](js/app.js) has ~60+ hardcoded students (IPPE I, II, III, APPE)
- These will display immediately on page load
- Approved signups will be added via student-loader.js

**Action:** Do nothing - keep as is ✅

#### Option B: Start Completely Fresh (Empty Student Database)
- Remove hardcoded students from app.js
- Only show students who sign up and get approved
- Empty Student Database on first load

**Action:** Run this SQL to remove hardcoded students:
```sql
DELETE FROM students
WHERE approved_date IS NULL;
```

And edit [js/app.js](js/app.js) line 3 to:
```javascript
const APPE_DATABASE = {
    students: []  // Empty - will be populated from database
};
```

### Step 3: Deploy to Production

```bash
# Commit and push changes
git add .
git commit -m "Production reset: Clear demo tickets and prepare for launch"
git push origin main
```

Vercel will auto-deploy in ~2 minutes.

## 📊 Expected Results After Reset

### Admin Hub - Analytics & Trends
- **📊 New:** 0 (no tickets in last 24h)
- **📋 Pending:** 0 (no active tickets)
- **⏰ Overdue:** 0 (no overdue tickets)
- **📈 Resolved:** 0 (no resolved tickets)
- **⏱️ Avg Response:** N/A (no data)
- **✅ SLA %:** N/A (no data)

### Admin Hub - Requests by Unit
All departments will show 0:
- 📚 Academic Affairs: 0
- 🏥 Clinical Affairs: 0
- 💻 IT Support: 0
- 👥 Student Services: 0
- 🔬 Research Unit: 0

### Student Database
- **Option A:** Shows all hardcoded students (~60+)
- **Option B:** Empty until students sign up and get approved

### Pending Signups
- Will show any signup requests that haven't been approved yet

## 🎯 Production Workflow

Once reset is complete:

1. **Students sign up** → Added to `pending_signups` table
2. **Admin approves** → Creates user account + adds to `students` table
3. **Student logs in** → Can submit tickets
4. **Tickets appear** → Admin Hub shows real data
5. **Analytics update** → Metrics calculated from real tickets

## ⚠️ Important Notes

- **Do NOT run** `reset-for-production.sql` if you want to keep approved students
- **Student-loader.js** will automatically sync database students on page load
- **Analytics are dynamic** - they calculate in real-time from tickets array
- **Approved signups** persist in database and survive page refreshes

## 🔄 Rollback Plan

If you need to restore demo data for testing:
```bash
git log --oneline  # Find commit before reset
git revert <commit-hash>
git push origin main
```

---

**Current Status:**
✅ Sample tickets cleared
✅ Cache updated
⏳ Waiting for database cleanup decision
⏳ Waiting for deployment
