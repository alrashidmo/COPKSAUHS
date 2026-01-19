# 🎓 Student Information Portal - Setup Instructions

## 📋 Overview
The Student Information Portal allows students to submit their personal information, which admins can then review and approve.

---

## 🔗 How to Access

### **For Students:**
1. Open the portal: [student-portal.html](student-portal.html)
2. Share this link with students: 
   ```
   https://your-domain.com/student-portal.html
   ```

### **For Admins:**
1. Go to main dashboard [index.html](index.html)
2. Navigate to: **Clinical Affairs → APPE → ⚙️ Data Management**
3. Click **👨‍🎓 Students** tab
4. You'll see the portal link and pending submissions

---

## 📝 Student Workflow

### **Step 1: Login**
- Student enters their University ID (e.g., `38-1-1-1-0601`)
- System validates ID against database
- If valid, student proceeds to information form

### **Step 2: Fill Information**
Student provides:
- **Personal Info**: Arabic name, National ID/Iqama
- **Contact Info**: Mobile, email, emergency contact
- **Address**: Residential address, city, postal code
- **Transportation**: Own car, driving license
- **Medical/Special Needs**: Accommodations required
- **Other**: T-shirt size

### **Step 3: Submit**
- Student checks accuracy confirmation box
- Clicks **"✅ Submit Information"**
- Receives confirmation with reference number
- Gets email confirmation within 24 hours

---

## 👨‍💼 Admin Workflow

### **Step 1: Access Review Panel**

#### **Option A - From Data Management:**
1. Open [index.html](index.html)
2. Go to: **Clinical Affairs → APPE Experience Hub**
3. Click **⚙️ Data Management** tab
4. Click **👨‍🎓 Students** sub-tab
5. You'll see an alert: **"⏳ Pending Review: X new submissions"**
6. Click **"📥 Review Submissions"** button

#### **Option B - Direct Link:**
1. In the Students tab, click **"🔗 Open Student Portal"**
2. This opens the student-facing page in new tab

### **Step 2: Review Submissions**
The review panel shows:
- ✅ Student name, ID, submission time
- 📞 Contact information
- 🏙️ Address and city
- 🚗 Transportation status
- 👤 Emergency contact details
- ⚕️ Medical accommodations (if any)

### **Step 3: Take Action**

For each submission, you have 3 options:

#### **✅ Approve & Save to Database**
- Adds student info to main database
- Sends confirmation email to student
- Marks submission as "Approved"

#### **✏️ Request Revision**
- Admin enters what needs correction
- Student receives email to revise submission
- Submission stays pending until resubmitted

#### **❌ Reject**
- Admin provides rejection reason
- Student receives rejection email
- Submission marked as "Rejected"

---

## 🎯 Quick Access Guide

### **Students need to:**
1. Open `student-portal.html`
2. Enter student ID
3. Fill all required fields (marked with *)
4. Check accuracy box
5. Submit

### **Admins need to:**
1. Open `index.html`
2. Go to **APPE → Data Management → Students**
3. Click **"📥 Review Submissions"**
4. Approve/Revise/Reject each submission

---

## 📊 Features

### **Student Portal Features:**
- ✅ ID-based authentication
- ✅ Pre-filled name from database
- ✅ Validation (mobile format, required fields)
- ✅ Medical confidentiality
- ✅ Submission reference number
- ✅ Mobile-responsive design

### **Admin Review Features:**
- ✅ Pending submissions counter
- ✅ Detailed submission view
- ✅ One-click approve/reject
- ✅ Revision request system
- ✅ Email notifications (automated)
- ✅ Audit trail (who reviewed, when)

---

## 🔐 Data Storage

**Current System (Temporary):**
- Data stored in browser `localStorage`
- Persists until browser cache cleared
- For testing purposes only

**Production System:**
- Will integrate with backend database
- Real-time sync with main dashboard
- Permanent storage with backups

---

## 📧 Email Notifications

### **Automated Emails Sent:**

1. **On Student Submission:**
   - To: Student's email
   - Subject: "APPE Information Submission Received"
   - Contains: Reference number, next steps

2. **On Admin Approval:**
   - To: Student's email
   - Subject: "APPE Information Approved"
   - Contains: Confirmation, next steps

3. **On Revision Request:**
   - To: Student's email
   - Subject: "APPE Information - Revision Needed"
   - Contains: What needs correction

4. **On Rejection:**
   - To: Student's email
   - Subject: "APPE Information Submission Update"
   - Contains: Rejection reason, next steps

5. **Admin Notifications:**
   - To: appe@ksau-hs.edu.sa
   - When: New submission received
   - Contains: Student name, ID, timestamp

---

## 🎨 Sharing the Portal with Students

### **Option 1: Direct Link**
Share this URL with students:
```
https://your-university-domain.com/student-portal.html
```

### **Option 2: QR Code**
Generate a QR code linking to the portal and include in:
- Email announcements
- WhatsApp groups
- Canvas/LMS

### **Option 3: Email Template**
```
Subject: APPE 2026 - Submit Your Information

Dear Students,

Please complete your APPE student information form by January 20, 2026.

🔗 Portal Link: [student-portal.html]

You will need:
- Your University Student ID
- National ID/Iqama number
- Emergency contact details
- Current address

Questions? Contact: appe@ksau-hs.edu.sa

Best regards,
APPE Administration Team
```

---

## ⚠️ Important Notes

1. **Deadline:** Students must submit by **January 25, 2026**
2. **Required Fields:** All fields marked with * are mandatory
3. **Mobile Format:** Must be 10 digits starting with `05`
4. **National ID:** Must be 10 digits
5. **Confidentiality:** Medical information is kept private
6. **One Submission:** Students cannot edit after submission (must request revision)

---

## 🛠️ Troubleshooting

### **Student Issues:**

**Q: Student ID not recognized?**
- Check ID format: `XX-X-X-X-XXXX`
- Ensure student is in database
- Contact admin to verify enrollment

**Q: Can't submit form?**
- Check all required fields filled
- Verify mobile number format (05XXXXXXXX)
- Ensure accuracy checkbox is checked

**Q: Want to edit after submission?**
- Contact admin via email
- Admin can request revision
- Student resubmits with corrections

### **Admin Issues:**

**Q: Not seeing pending submissions?**
- Check browser localStorage enabled
- Refresh the page
- Ensure students have actually submitted

**Q: Approved submission still showing?**
- Close and reopen review panel
- Page will refresh automatically
- Check browser console for errors

---

## 📞 Support

**For Students:**
- Email: appe@ksau-hs.edu.sa
- Phone: [Your support number]

**For Admins:**
- Technical issues: IT department
- Process questions: APPE coordinator

---

## 🚀 Next Steps After Approval

Once student information is approved:

1. ✅ Student receives confirmation email
2. 📅 Student submits rotation preferences (deadline: Jan 25)
3. 🏥 Student completes compliance requirements
4. 🎯 Automated matching algorithm runs
5. 📧 Student receives rotation assignments
6. 🎓 APPE rotations begin

---

**System Version:** 2.0  
**Last Updated:** January 11, 2026  
**Maintained By:** APPE Administration Team
