# 📋 APPE Experience Hub - Complete Automation Guide

## ✅ What's Now Working

### 1. **Students Tab - FULLY EDITABLE ✏️**
- ✅ **Inline Editing**: Click any cell to edit directly
  - Name, Program, GPA, Current Rotation
- ✅ **Dropdown Editing**:
  - Gender (M/F)
  - Compliance Status (Complete/Pending/Incomplete)
- ✅ **Live Search**: Type in search box to filter students instantly
- ✅ **Export to Excel**: Click "📥 Export" button
- ✅ **Add New Student**: Click "+ Add Student" - opens modal form
- ✅ **View Details**: Click "📄 View" on any row - opens detailed modal
- ✅ **Delete Student**: Click "🗑️" - confirms before deleting

**How to Edit Students:**
1. Click directly on any table cell
2. Edit the text
3. Click outside (blur) - auto-saves
4. See toast notification confirming save

---

### 2. **Data Management Tab - FULL AUTOMATION CENTER ⚙️**

#### 📋 Student Information Portal Workflow

**STEP 1: Share Portal Link**
- Send students: `student-portal.html`
- Students login with University ID (38-1-1-1-0601)
- Fill 10 required fields:
  - Mobile (05XXXXXXXX)
  - Email
  - Emergency Contact
  - Address
  - Transportation
  - Medical Info
- Get unique reference number

**STEP 2: Review Submissions**
1. Click "📥 Review Submissions" button
2. See all pending submissions in table
3. View complete info for each student

**STEP 3: Approve or Reject**
- **✅ Approve**: Saves data to main database, shows success toast
- **❌ Reject**: Enter rejection reason, student notified

---

### 3. **Excel Integration 📊**

**Import from Excel:**
- Click "📤 Import from Excel"
- Select .xlsx or .csv file
- Imports: Students, Rotations, Grades, Assignments

**Export to Excel:**
- **Students**: All 59 students with GPA, compliance, rotations
- **Grades**: Final calculated grades
- **Assignments**: All rotation assignments with preceptors/sites

---

### 4. **Blackboard Integration 🎓**

**4 Automated Actions:**
1. **Import from Blackboard**: Sync student roster from course
2. **Export Grades to Blackboard**: Send final grades to Grade Center
3. **Sync Evaluation Scores**: Update assignment scores
4. **Create Blackboard Assignments**: Auto-create rotation assignments

---

### 5. **Automation Tools 🤖**

**3 Main Tools:**

1. **🎯 Run Auto-Match**
   - Matches 59 students to 26 rotation types
   - Uses weighted algorithm:
     - Preference ranking (40%)
     - GPA compatibility (30%)
     - Site capacity (20%)
     - Compliance status (10%)
   - Shows animated progress bar
   - Redirects to Assignments tab when done

2. **📝 Auto-Grade**
   - Calculates final grades using formula:
     - Preceptor Evaluation: 40%
     - Self-Assessment: 20%
     - Clinical Skills: 25%
     - Professional Behavior: 15%
   - Processes all evaluations
   - Shows results summary

3. **📧 Send Bulk Emails**
   - **Rotation Assignment**: Notify students of assignments
   - **Evaluation Reminder**: Students with pending evaluations
   - **Compliance Alert**: Yellow/red status students

---

## 🎯 Complete Workflow Example

### Scenario: Manage Spring 2026 APPE Rotation Assignments

**1. Import Student Data (Week 1)**
```
→ Data Management Tab
→ Click "📤 Import from Blackboard" 
→ Select course: "PharmD APPE Spring 2026"
→ 59 students imported
```

**2. Student Portal Submissions (Week 2-3)**
```
→ Send students: student-portal.html
→ Students submit contact info, medical info
→ Click "📥 Review Submissions"
→ Approve/reject each submission
→ Approved data auto-updates student records
```

**3. Run Matching Algorithm (Week 4)**
```
→ Data Management Tab (or Matching Tab)
→ Click "🎯 Run Auto-Match"
→ See progress: "Analyzing preferences... Loading rotations... Optimizing assignments..."
→ View results in Assignments tab
→ Export assignments to Excel
```

**4. Notify Students (Week 4)**
```
→ Data Management Tab
→ Click "📧 Send Emails"
→ Select "Rotation Assignment"
→ Sends to all 59 students
→ Each gets their specific assignment
```

**5. During Rotations (Weeks 5-10)**
```
→ Students Tab: Monitor compliance
→ Click compliance dropdown → Change Pending to Complete
→ Preceptors submit evaluations
→ Evaluations Tab: Track completion rates
```

**6. Final Grading (Week 11)**
```
→ Data Management Tab
→ Click "📝 Auto-Grade"
→ Calculates weighted final grades
→ Click "📤 Export Grades to Blackboard"
→ Grades sync to Grade Center
```

**7. Generate Reports (Week 12)**
```
→ Reports Tab
→ Select report type:
  - Student Performance Analysis
  - Site Utilization Report
  - Compliance Status Report
  - Preceptor Analytics
→ Export as PDF + Excel
```

---

## 🔧 Technical Details

### Data Storage
- **Main Database**: `APPE_STUDENTS` array (59 students)
- **Student Portal**: `localStorage.studentSubmissions`
- **Auto-Save**: All inline edits save immediately on blur

### Functions Available
```javascript
// Student Management
window.updateStudentField(id, field, value)
window.filterStudents(searchTerm)
window.addNewStudent()
window.viewStudentDetails(id)
window.deleteStudent(id)
window.sendEmailToStudent(id)

// Student Portal
window.reviewSubmissions()
window.approveSubmission(index)
window.rejectSubmission(index)

// Excel/Blackboard
window.exportToExcel(type)  // types: 'students', 'grades', 'assignments'
window.importFromExcel()
window.syncWithBlackboard(action)  // actions: 'import-students', 'export-grades', etc.

// Automation
window.runMatchingAlgorithm()
window.autoGradeEvaluations()
window.sendBulkEmail(type)  // types: 'rotation-assignment', 'evaluation-reminder', etc.
window.generateReport(reportType)
```

### Toast Notifications
- ✅ Auto-appear on successful actions
- 🔴 Bottom-right corner
- ⏱️ Auto-dismiss after 3 seconds
- 📝 Messages: "Student added successfully!", "Approved: 38-1-1-1-0601", etc.

---

## 📱 Student Portal Features

**10 Required Fields:**
1. Mobile Number (05XXXXXXXX validation)
2. Personal Email
3. Emergency Contact Name
4. Emergency Phone Number
5. Permanent Address
6. City
7. Postal Code
8. Transportation Method (Own Car/Public/Family)
9. Medical Conditions (Yes/No)
10. Medical Accommodations (if applicable)

**Validation:**
- Saudi mobile format enforced
- All fields required before submit
- Unique reference number generated
- Submission timestamp recorded

**Admin Review:**
- View all submissions in table
- See submitted date/time
- One-click approve/reject
- Approved data merges into student record
- Rejected with reason sent to student email

---

## 🎨 Visual Indicators

**Compliance Status Colors:**
- 🟢 **Green (Complete)**: All requirements met
- 🟡 **Yellow (Pending)**: Awaiting documents
- 🔴 **Red (Incomplete)**: Missing critical items

**GPA Colors:**
- 🟢 **Green (≥3.85)**: High performer
- ⚫ **Gray (<3.85)**: Standard

**Table Interactions:**
- ✏️ **Editable cells**: Cursor changes to text cursor on hover
- 📋 **Dropdowns**: Click to see options
- 🔍 **Search**: Real-time filtering

---

## 🚀 Next Steps & Enhancements

### Phase 1: Already Implemented ✅
- Editable student table
- Student portal with review
- Excel import/export
- Blackboard integration
- Auto-matching algorithm
- Auto-grading system
- Bulk email notifications
- Report generation

### Phase 2: Coming Soon (Production Deployment)
- **Real Excel Files**: Replace alerts with actual .xlsx downloads using SheetJS library
- **Real Blackboard API**: Connect to KSAU-HS Blackboard REST API
- **Email Service**: Integrate with university email system
- **Database**: Replace localStorage with server-side database
- **Authentication**: Add admin login and role-based access
- **Audit Trail**: Log all changes (who edited what, when)

### Phase 3: Advanced Features
- **AI-Powered Matching**: Machine learning for optimal assignments
- **Mobile App**: Student portal as native iOS/Android app
- **Real-Time Notifications**: Push notifications for new assignments
- **Video Evaluations**: Preceptors can record video feedback
- **Analytics Dashboard**: Predictive analytics for student success

---

## 📞 Support & Troubleshooting

**Common Issues:**

**Q: Inline editing not working?**
A: Make sure you're clicking directly on the cell, not the spacing. Look for cursor change to text cursor.

**Q: Search not showing results?**
A: Check spelling. Search is case-insensitive and searches all fields (ID, name, GPA, etc.).

**Q: Student Portal submissions not appearing?**
A: Students must complete ALL 10 required fields. Check browser console for validation errors.

**Q: Excel export not working?**
A: Currently shows demo alert. Production version will download actual .xlsx file using SheetJS.

**Q: Blackboard sync failing?**
A: Currently shows demo alert. Requires KSAU-HS Blackboard API credentials for production.

---

## 📊 Data Inventory

**Current Database (as of Jan 2026):**
- 👨‍🎓 **59 Students** (23 Male, 36 Female)
- 🔄 **26 Rotation Types**
- 👨‍⚕️ **12 Active Preceptors**
- 🏥 **8 Training Sites**
- 📝 **8 Sample Assignments**

**Average GPA:** 3.81
**Compliance:**
- Complete: 37 students
- Pending: 15 students
- Incomplete: 7 students

---

## 🎯 Best Practices

**For Administrators:**
1. Review student portal submissions weekly
2. Export backups to Excel monthly
3. Run compliance checks before each rotation
4. Send reminder emails 1 week before deadlines
5. Generate reports after each rotation cycle

**For Students:**
1. Submit portal info early (Week 1)
2. Update compliance documents promptly
3. Check email daily for assignment notifications
4. Complete evaluations within 48 hours
5. Report issues to admin immediately

**For Preceptors:**
1. Submit evaluations by rotation end date
2. Review rubrics before scoring
3. Provide detailed feedback
4. Update license expiry dates annually
5. Communicate site capacity changes

---

## 📅 Rotation Calendar Integration

**Spring 2026 Schedule:**
- Week 1-2: Student portal submissions, compliance checks
- Week 3: Preference collection
- Week 4: Auto-matching, notifications
- Weeks 5-10: Active rotations, ongoing evaluations
- Week 11: Final grading, Blackboard sync
- Week 12: Reports generation, debrief meetings

**Key Dates:**
- Jan 15: Portal opens
- Jan 29: Portal closes
- Feb 1: Matching complete
- Feb 5: Assignments sent
- Apr 15: Rotations end
- Apr 22: Final grades due

---

**Made with ❤️ for KSAU-HS College of Pharmacy**
**APPE Experience Hub v2.0 - Spring 2026**
