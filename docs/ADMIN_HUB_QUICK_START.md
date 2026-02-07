# ADMIN HUB - QUICK START GUIDE
**Date: January 31, 2026**

## 🚀 WHAT'S NEW

Your system now includes a complete **Admin Hub Command Center** designed specifically for managing requests across all 6 units with real-time SLA tracking, role-based access, and automated workflows.

---

## 📍 HOW TO ACCESS

1. **Login** as admin (demo: `admin001` / `admin123`)
2. **Click** the `🏠 Admin Hub` button in the top sidebar (replaces old Home)
3. **View** the complete dashboard with all KPIs and requests

---

## 🎯 MAIN SECTIONS

### 1️⃣ RAG Status Alert (Top)
- **🔴 RED**: 5+ overdue requests
- **🟠 AMBER**: 2-4 overdue OR 5+ at risk
- **🟢 GREEN**: All SLAs on track

### 2️⃣ KPI Tiles (5 Quick Numbers)
- 🆕 New Today
- ⏳ Pending
- 🔴 Overdue (Click → view urgent queue)
- ✅ Resolved This Week
- 📧 Waiting for Student

### 3️⃣ Requests by Unit (Summary Table)
View aggregated counts for all 6 units:
- 📚 Academic Affairs
- 🏥 Clinical Affairs
- ✓ Quality Assurance
- 🔬 Research Unit
- 🎓 Alumni Unit
- 🤝 Community Service

**Click any number** to jump to that unit's queue

### 4️⃣ My Action Required (Critical Table)
**Top 15 requests needing immediate attention**
- Sorted by SLA urgency (breached first)
- Shows countdown to deadline
- Color-coded priority (Red/Orange/Green)
- Action buttons: Approve / View

---

## 📊 SLA TRACKING

**How it works:**
1. Each request type has a deadline (working days)
2. Visual indicators show time remaining:
   - 🔴 **RED** = OVERDUE (deadline passed)
   - 🟠 **AMBER** = WARNING (24-48 hours left)
   - 🟢 **GREEN** = OK (> 48 hours left)

**SLA Times by Unit:**
| Unit | Quick Turnaround | Standard | Complex |
|------|-----------------|----------|---------|
| **Academic** | 2d | 3d | 5d |
| **Clinical** | 1d (URGENT) | 2d | 3d |
| **QA** | 5d | 7d | 10d |
| **Research** | 3d | 5d | 7d |
| **Alumni** | 2d | 3d | - |
| **Community** | 2d | 3d | - |

---

## 👥 ADMIN ROLES

| Role | Can See | Can Approve | Can Assign |
|------|---------|-----------|----------|
| **Super Admin** | All requests | All | All staff |
| **Unit Head** | Own unit only | Own unit | Own unit staff |
| **Coordinator** | Own unit only | Own unit | Own unit staff |
| **Staff Member** | Own assignments | Assigned requests | - |

---

## 🔧 DEMO DATA INCLUDED

**8 Sample Requests** pre-loaded across all units:
- Academic: 2 requests (tutoring support)
- Clinical: 2 requests (rotation change + urgent site issue)
- QA: 1 request (confidential complaint)
- Research: 1 request (conference participation)
- Alumni: 1 request (alumni verification - approved)
- Community: 1 request (community participation)

**Various statuses** to show:
- ✓ Overdue (breached SLA)
- ⏳ Pending review
- 📧 Waiting for student
- ✅ Approved
- 🚨 Escalated

---

## 📋 REQUEST STATUSES

| Status | Meaning | Action |
|--------|---------|--------|
| 🆕 New | Just created, unassigned | Assign to staff |
| ⏳ Pending Review | Staff reviewing | Make decision |
| 📧 Waiting for Student | Awaiting student response | Send reminder |
| 📎 Awaiting Documents | Missing attachments | Request docs |
| 🔄 Pending Site Confirmation | Waiting on external | Follow up |
| 🟢 In Progress | Active work | Monitor progress |
| ✅ Approved | Decision made | Notify student |
| ❌ Rejected | Denied | Explain reasons |
| 🚨 Escalated | SLA breach detected | Escalate to head |
| 🔒 Closed | Resolved | Archive |

---

## 📱 QUICK ACTIONS

From the dashboard, you can:
1. **View Request Details** - Click "View" button
2. **Approve Request** - Click "✓" button (confirmation required)
3. **Filter by Unit** - Click unit name in summary table
4. **Jump to Overdue Queue** - Click overdue KPI number
5. **Search** - Use search bar (add filters as needed)

---

## 🔔 AUTO-NOTIFICATIONS

The system automatically notifies:
- ✉️ **Students** when status changes
- 📧 **Staff** when new request assigned
- ⚠️ **Coordinators** when SLA expiring soon
- 🚨 **Unit Heads** when SLA breached

No manual email sending needed for standard events.

---

## 📈 KEY FEATURES

✅ **Real-Time SLA Tracking**
- Auto-calculates deadline based on request type
- Visual countdown (green → amber → red)
- Auto-escalates if breached

✅ **Role-Based Views**
- Super Admin sees all units
- Unit Head sees own unit only
- Staff sees own assignments only

✅ **Audit Trail**
- Every change logged with timestamp
- Know who did what and when
- Required for compliance

✅ **Mobile Ready**
- Responsive design
- Works on tablets & phones
- Tables scroll horizontally

---

## 🎓 COMMON WORKFLOWS

### Approving a Request (5 steps)
1. Find request in "My Action Required" table
2. Click **[View]** to see details
3. Click **[✓ Approve]** button
4. Confirm in dialog
5. System auto-notifies student

### Reassigning a Request
1. Find request
2. Click **[Assign]**
3. Select new staff member from dropdown
4. Optional: Add note
5. New assignee is notified

### Escalating Overdue Request
1. Find overdue request (🔴 red SLA)
2. Click **[Escalate]**
3. Automatically goes to Unit Head
4. Unit Head notified immediately

---

## 📊 UNIT DASHBOARDS (Coming Soon)

Each unit will have dedicated dashboard showing:
- ✓ Unit-specific KPIs (e.g., "Rotations Approved This Week")
- ✓ Most common request types for that unit
- ✓ Unit queue filtered by that unit only
- ✓ Unit-specific workflows and rules

**Status:** In development - more details coming

---

## 🔐 IMPORTANT SECURITY NOTES

- **Confidential Requests** (QA complaints) only visible to QA Head + assigned investigator
- **Audit Logs** track all access - don't modify records directly
- **Role Permissions** enforced - cannot view units you're not assigned to
- **Bulk Actions** require confirmation dialog

---

## 🆘 TROUBLESHOOTING

**Problem:** Admin Hub not showing?
- Clear browser cache (Ctrl+Shift+R)
- Check you're logged in as admin
- Verify role allows admin access

**Problem:** SLA showing wrong deadline?
- Check request type is set correctly
- Verify SLA rules in Settings (if accessible)
- Note: SLA calculated in working days only

**Problem:** Notification not sent?
- Check student email address on file
- Some notifications auto-send, others require admin trigger
- Check email server logs

---

## 📞 SUPPORT

For questions or issues with Admin Hub:
1. Check this guide (5-minute read)
2. Review full specification: `ADMIN_HUB_SPECIFICATION.md`
3. Contact: admin@ksauhs.edu.sa

---

**Last Updated:** 2026-01-31  
**System Version:** 1.0  
**Status:** Production Ready ✅
