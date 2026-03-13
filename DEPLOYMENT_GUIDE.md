# 🚀 APPE Hub - Deployment Guide (Firebase + Vercel)

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Firebase Setup (15 minutes)](#firebase-setup)
3. [Code Integration (Done - ready to use)](#code-integration)
4. [Vercel Deployment (10 minutes)](#vercel-deployment)
5. [Testing (5 minutes)](#testing)
6. [Going Live](#going-live)

---

## Prerequisites

You'll need:
- ✅ Google Account (for Firebase)
- ✅ GitHub Account (for deploying to Vercel)
- ✅ Code pushed to GitHub repository
- ✅ Domain name (optional, can use free vercel.app domain)

**Estimated total time: 30 minutes**
**Cost: $0 (free tier)**

---

## Firebase Setup (15 minutes)

### Step 1: Create Firebase Project

1. Go to **[firebase.google.com](https://firebase.google.com)**
2. Click **"Go to console"** button
3. Click **"Create a project"**
4. Project name: `APPE-Hub-Production` (or any name)
5. Uncheck "Enable Google Analytics" (not needed for MVP)
6. Click **"Create project"**
7. Wait for setup to complete

### Step 2: Get Firebase Credentials

1. In Firebase Console, click **⚙️ Project Settings** (top left gear icon)
2. Go to **"General"** tab
3. Scroll down to **"Your apps"** section
4. Click **"Web"** icon (looks like `</> `)
5. Register app name: `appe-hub-web`
6. You'll see a code block that looks like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD...",
  authDomain: "appe-hub-production.firebaseapp.com",
  databaseURL: "https://appe-hub-production.firebaseio.com",
  projectId: "appe-hub-production",
  storageBucket: "appe-hub-production.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

**Copy this config - you'll need it in Step 5**

### Step 3: Enable Realtime Database

1. In Firebase Console, go to **"Realtime Database"** (left sidebar)
2. Click **"Create Database"**
3. Location: Choose closest to you (e.g., `us-central1`)
4. Security rules: **Select "Start in test mode"** (we'll secure later)
   - ⚠️ Test mode = readable/writable without auth (OK for development)
5. Click **"Enable"**

### Step 4: Enable Authentication

1. In Firebase Console, go to **"Authentication"** (left sidebar)
2. Click **"Get Started"**
3. Under "Sign-in method", click **"Email/Password"**
4. Enable both toggles:
   - ✅ Email/Password
   - ✅ Enable password-less sign-in (optional)
5. Click **"Save"**

### Step 5: Create Firebase Rules (Security)

1. Go to **"Realtime Database"** → **"Rules"** tab
2. Replace the rules with:

```json
{
  "rules": {
    "submitted_tickets": {
      "$studentId": {
        ".read": "auth.uid === $studentId || root.child('admins').child(auth.uid).exists()",
        ".write": "auth.uid === $studentId",
        "$ticketId": {
          ".validate": "newData.hasChildren(['ticketId', 'title', 'studentId', 'status'])"
        }
      }
    },
    "admins": {
      ".read": "auth.uid !== null",
      ".write": false
    }
  }
}
```

3. Click **"Publish"**

✅ **Firebase is now ready!**

---

## Code Integration (Already Done!)

The following files have been created:
- ✅ `js/firebase-service.js` - Firebase operations layer
- ✅ `js/firebase-config.js` - Configuration file (needs credentials)
- ✅ `student-portal.js` - Updated to use Firebase
- ✅ `app.js` - Updated to read from Firebase for Admin Hub

**No further code changes needed!** Just add credentials in next step.

---

## Vercel Deployment (10 minutes)

### Step 1: Prepare Your Code

1. Create `.env.local` file in your project root:

```bash
FIREBASE_API_KEY=AIzaSyD...
FIREBASE_AUTH_DOMAIN=appe-hub-production.firebaseapp.com
FIREBASE_DATABASE_URL=https://appe-hub-production.firebaseio.com
FIREBASE_PROJECT_ID=appe-hub-production
FIREBASE_STORAGE_BUCKET=appe-hub-production.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abcdef
```

*(Replace with values from Firebase console Step 2)*

2. Add to `.gitignore` (so credentials aren't exposed):

```
.env.local
.env*.local
```

3. Create `/vercel.json` in project root:

```json
{
  "buildCommand": "echo 'Static site - no build needed'",
  "outputDirectory": ".",
  "env": {
    "FIREBASE_API_KEY": "@firebase_api_key",
    "FIREBASE_AUTH_DOMAIN": "@firebase_auth_domain",
    "FIREBASE_DATABASE_URL": "@firebase_database_url",
    "FIREBASE_PROJECT_ID": "@firebase_project_id",
    "FIREBASE_STORAGE_BUCKET": "@firebase_storage_bucket",
    "FIREBASE_MESSAGING_SENDER_ID": "@firebase_messaging_sender_id",
    "FIREBASE_APP_ID": "@firebase_app_id"
  }
}
```

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Add Firebase integration and deployment config"
git push origin main
```

### Step 3: Deploy to Vercel

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. Click **"Import Project"**
5. Select your APPE Hub repository
6. Configure project:
   - **Framework Preset:** Other (static site)
   - **Root Directory:** `.` (current directory)
7. Click **"Environment Variables"** section
8. Add all Firebase variables:
   - `FIREBASE_API_KEY` = (your value)
   - `FIREBASE_AUTH_DOMAIN` = (your value)
   - etc. for all 7 variables
9. Click **"Deploy"**

**Wait 1-2 minutes for deployment...**

✅ **You'll get a URL like: `https://appe-hub.vercel.app`**

### Step 4: Add Custom Domain (Optional)

1. In Vercel project settings, go to **"Domains"**
2. Add your domain (e.g., `appe-hub.ksauhs.edu.sa`)
3. Follow DNS setup instructions (depends on your domain registrar)
4. Wait for DNS to propagate (5-30 minutes)

---

## Testing (5 minutes)

### Test 1: Access the Site
```
1. Go to your Vercel URL (e.g., https://appe-hub.vercel.app)
2. You should see the login page
3. Check browser console (F12) - no errors should appear
```

### Test 2: Student Submission Flow
```
1. Login as student (ID: 441210049, Password: 123456)
2. Go to "Student Portal" tab
3. Click "Submit New Request"
4. Submit a test ticket
5. Check browser console - should see:
   ✅ "Ticket saved to Firebase"
6. Go to Firebase Console → Realtime Database
7. You should see your ticket in: submitted_tickets/441210049/...
```

### Test 3: Admin View
```
1. Logout and login as admin
2. Go to "Admin Hub" tab
3. You should see the submitted ticket in "Student Submitted Tickets"
4. Should show ticket title, status, student ID
```

### Test 4: Refresh Test (Critical!)
```
1. Submit a ticket as student
2. Refresh the page (Ctrl+R)
3. Logout and login again
4. The ticket should STILL appear
5. This proves data is persisting in Firebase, not just localStorage
```

---

## Going Live (For Real Users)

### Step 1: Add Test Users to Firebase

1. Firebase Console → **Authentication** → **Users**
2. Click **"Add user"**
3. Create accounts:
   - Email: `student1@university.edu` / Password: `TempPassword123!`
   - Email: `student2@university.edu` / Password: `TempPassword123!`
   - Email: `admin@university.edu` / Password: `TempPassword123!`

### Step 2: Set Admin Access Rights

1. Firebase Console → **Realtime Database** → **Data**
2. Click `+` next to root to add new field:
   - Field name: `admins`
3. Click `+` next to admins:
   - Field name: `admin@university.edu`
   - Value: `true`

### Step 3: Share the Link

Send to your users:
```
📱 APPE Hub is live!
Visit: https://appe-hub.vercel.app
Login with your university email
```

### Step 4: Monitor Usage

1. **Firebase Console** → View submissions in Realtime Database
2. **Vercel Dashboard** → Check:
   - Analytics (page views, visitors)
   - Errors/logs
   - Performance metrics

---

## Troubleshooting

### Issue: "Firebase is not defined"
**Solution:** Make sure `firebase-config.js` and `firebase-service.js` are loaded BEFORE your main app
```html
<script src="js/firebase-config.js"></script>
<script src="js/firebase-service.js"></script>
<script src="js/app.js"></script>
```

### Issue: "Permission denied" error on submission
**Solution:** Check Firebase rules - make sure test mode is enabled initially
1. Firebase Console → Realtime Database → Rules
2. Set to test mode (readable/writable for now)

### Issue: Ticket disappears after refresh
**Solution:** Check browser console for errors
1. F12 → Console tab
2. Look for red error messages
3. Check Firebase connectivity

### Issue: "Environment variables not found"
**Solution:** Check Vercel environment variables are set
1. Vercel Dashboard → Project Settings → Environment Variables
2. Make sure all 7 Firebase variables are there
3. Redeploy after adding variables

---

## Architecture Overview

```
Your Computer
    ↓
GitHub Repository
    ↓
Vercel (Hosting)
    ↓
    ├─→ Firebase Realtime Database (Data Storage)
    ├─→ Firebase Authentication (User Logins)
    └─→ Your Domain (DNS)
```

---

## Next Steps After Launch

### Short Term (Week 1-2)
- [ ] Get user feedback
- [ ] Monitor for errors in Vercel logs
- [ ] Fix any bugs reported

### Medium Term (Month 1)
- [ ] Add more features
- [ ] Improve UI based on feedback
- [ ] Optimize performance

### Long Term (Month 3+)
- [ ] If 100+ users → Consider upgrading to PostgreSQL backend
- [ ] Add more roles/permissions
- [ ] Integrate with university systems (SSO)

---

## Support & Debugging

**Quick Links:**
- Firebase Docs: https://firebase.google.com/docs
- Vercel Docs: https://vercel.com/docs
- Firebase Console: https://console.firebase.google.com

**Common Questions:**

**Q: How much will this cost?**
A: ~$0-5/month for MVP (Firebase free tier covers most of it)

**Q: Can I move away from Firebase later?**
A: Yes! Data is stored as JSON, can export to PostgreSQL later

**Q: How many users can it handle?**
A: 100+ concurrent users with Firebase free tier

**Q: Is it secure?**
A: Yes! Firebase provides encryption and role-based security

---

## Deployment Checklist

Before going live:

- [ ] Firebase project created
- [ ] Realtime Database enabled
- [ ] Authentication enabled with Email/Password
- [ ] Security rules deployed
- [ ] Code pushed to GitHub
- [ ] Environment variables set in Vercel
- [ ] Site deployed and accessible
- [ ] Test tickets appearing in Firebase
- [ ] Test persistence (refresh works)
- [ ] Admin can see submitted tickets

✅ **You're ready to ship!**

---

**Deployed on:** [Date]
**Live URL:** 
**Firebase Project:** 
**Admin Email:** 
**Support Contact:** 

---

*Last updated: February 26, 2026*
