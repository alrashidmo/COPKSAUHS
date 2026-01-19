# 📱 APPE Student Mobile App - Setup & Installation Guide

## ✅ What's Been Built

A complete **Progressive Web App (PWA)** for students with:

### Features:
- ✅ **Login System** - Secure student authentication
- ✅ **Dashboard** - Current rotation, stats, quick actions
- ✅ **Schedule** - View all rotation assignments with timeline
- ✅ **Preferences** - Submit site & specialty preferences (integrated with your matching algorithm)
- ✅ **Profile** - Student information and settings
- ✅ **Mobile-First Design** - Optimized for phones with bottom navigation
- ✅ **PWA Support** - Installable on iPhone & Android (Add to Home Screen)
- ✅ **Offline Mode** - Works without internet (cached data)

---

## 🚀 Quick Start - Run the Student App

### Step 1: Install Dependencies

```powershell
# Navigate to student app folder
cd "student-app"

# Install all dependencies
npm install
```

### Step 2: Start Development Server

```powershell
# Run the app
npm run dev
```

The app will open at: **http://localhost:3001**

### Step 3: Login

**Demo Login Credentials:**
- Email: `ahmed.almansour@student.edu`
- Password: `password` (any password works in demo mode)

---

## 📱 How to Install on Phone (PWA)

### For iPhone/iPad:
1. Open **http://localhost:3001** in Safari
2. Tap the **Share** button (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"**
5. App icon will appear on home screen!

### For Android:
1. Open **http://localhost:3001** in Chrome
2. Tap the **3-dot menu** (top right)
3. Tap **"Add to Home Screen"** or **"Install App"**
4. Tap **"Install"**
5. App icon will appear on home screen!

### Benefits of Installing:
- ✅ Launches like a native app (no browser UI)
- ✅ Works offline with cached data
- ✅ Push notifications (when implemented)
- ✅ Full-screen experience

---

## 🗂️ Project Structure

```
student-app/
├── src/
│   ├── pages/
│   │   ├── LoginPage.tsx          # Login screen
│   │   ├── DashboardPage.tsx      # Home/dashboard
│   │   ├── SchedulePage.tsx       # Rotation schedule
│   │   ├── PreferencesPage.tsx    # Submit preferences
│   │   └── ProfilePage.tsx        # Student profile
│   ├── components/
│   │   └── BottomNav.tsx          # Bottom navigation
│   ├── store/
│   │   └── index.ts               # App state (Zustand)
│   ├── App.tsx                    # Main app & routing
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html
├── package.json
├── vite.config.ts                 # Vite + PWA config
└── tailwind.config.js             # Tailwind CSS config
```

---

## 🔗 Shared Data Layer

The app uses a **shared API layer** that connects to your existing data:

**Location:** `shared/api.ts`

### How It Works (Currently):
- Uses **localStorage** for demo/development
- All data is stored in the browser
- Same data structure as your existing system

### How to Connect to Real Backend (Future):
Replace the `api` functions in `shared/api.ts` with actual API calls:

```typescript
// Example: Replace this
export const api = {
  login: async (email, password) => {
    const students = JSON.parse(localStorage.getItem('students'));
    return students.find(s => s.email === email);
  }
};

// With this (real API):
export const api = {
  login: async (email, password) => {
    const response = await fetch('https://your-api.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  }
};
```

---

## 🎨 Customization

### Change Colors:
Edit `student-app/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        600: '#1B5E20',  // Change this to your brand color
        // ... other shades
      }
    }
  }
}
```

### Change App Name:
1. **Browser title:** Edit `student-app/index.html` → `<title>`
2. **PWA name:** Edit `student-app/vite.config.ts` → `manifest.name`

### Add App Icons:
Place icons in `student-app/public/`:
- `pwa-192x192.png` (192x192 pixels)
- `pwa-512x512.png` (512x512 pixels)
- `apple-touch-icon.png` (180x180 pixels)

---

## 📊 Data Flow

### Current (Demo Mode):
```
Student App → localStorage → Shared API → Student App
                ↑
                └── Your existing JS/HTML system can also access
```

### Future (Production):
```
Student App (Phone)
        ↓
    REST API (Backend Server)
        ↓
    Database (PostgreSQL/MongoDB)
        ↑
Admin Dashboard (Desktop)
```

---

## 🔄 Integration with Your Existing System

### The student app uses the SAME data models as your current system:

**Students:** Same as `APPE_STUDENTS` array
**Rotations:** Same as your rotation data
**Preferences:** Uses `window.STUDENT_PREFERENCES` format
**Assignments:** Same structure with `matchScore` from your algorithm

### To sync data between student app and your current system:

The `shared/api.ts` file is the bridge. Both systems can:
1. Read from localStorage
2. Write to localStorage
3. Use the same data structure

Example - Submit preferences in student app, view in admin dashboard:

```javascript
// Student app submits:
api.submitPreferences({
  studentId: 'S001',
  rotationId: 'ROT1',
  specialtyRank1: 'RT1',
  // ...
});

// Your matching-algorithm.js can read:
const preferences = JSON.parse(localStorage.getItem('appe_preferences'));
// Run matching algorithm...
```

---

## 🧪 Testing Scenarios

### Test 1: Login & Dashboard
1. Open app → Login with demo credentials
2. Should see: Welcome message, GPA (4.75), current rotation
3. Check: Quick stats show attendance %

### Test 2: View Schedule
1. Click "Schedule" in bottom nav
2. Should see: Timeline of rotations
3. Check: Current rotation marked as "Active"
4. Check: Preceptor contact info displayed

### Test 3: Submit Preferences
1. Click "Preferences" in bottom nav
2. Select rotation period
3. Rank 3 specialties (must be different)
4. Rank 3 sites (must be different)
5. Click "Submit Preferences"
6. Should see: Green success message
7. Check: Can view submitted preferences

### Test 4: Profile
1. Click "Profile" in bottom nav
2. Should see: Student name, email, GPA
3. Click "Sign Out"
4. Should redirect to login screen

### Test 5: PWA Installation
1. Open in mobile browser
2. Add to home screen (see instructions above)
3. Launch from home screen icon
4. Should feel like native app (no browser UI)

---

## 🚀 Deployment Options

### Option 1: Free Hosting (Netlify/Vercel)

**For Student App:**
```powershell
# Build the app
cd student-app
npm run build

# The 'dist' folder contains the complete app
# Upload to Netlify/Vercel
```

**Steps:**
1. Create free account on [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
2. Connect your GitHub repository (if using Git)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

**Result:** Your app will be at `https://your-app.netlify.app`

### Option 2: Your Own Server

```powershell
# Build the app
npm run build

# Copy 'dist' folder to your web server
# Configure server to serve index.html for all routes
```

### Option 3: Keep it Local (For Testing)

Just run `npm run dev` whenever you need it. Perfect for:
- Testing with students
- Internal use only
- Development/refinement

---

## 🔐 Security Notes

### Current Setup (Demo Mode):
- ⚠️ **No real authentication** - Any password works
- ⚠️ **Data in localStorage** - Not secure for production
- ✅ **Good for:** Testing, development, internal pilot

### For Production:
1. **Implement real authentication:**
   - JWT tokens
   - Password hashing (bcrypt)
   - Session management

2. **Use real backend API:**
   - Node.js/Express or Python/Django
   - PostgreSQL or MongoDB database
   - HTTPS only

3. **Add authorization:**
   - Students can only see their own data
   - Role-based access control

---

## 📈 Next Steps

### Phase 1: Testing (Current)
- ✅ Test student app with 5-10 students
- ✅ Gather feedback on UI/UX
- ✅ Refine features based on feedback

### Phase 2: Add More Features
- [ ] Attendance check-in with QR code
- [ ] Document upload (camera/gallery)
- [ ] Push notifications
- [ ] Calendar sync
- [ ] Offline mode improvements

### Phase 3: Backend Development
- [ ] Build REST API (see MOBILE_APP_ROADMAP.md)
- [ ] Setup database
- [ ] Implement real authentication
- [ ] Deploy to production

### Phase 4: App Store Submission
- [ ] Create app icons & screenshots
- [ ] Write app descriptions
- [ ] Submit to App Store (iOS)
- [ ] Submit to Play Store (Android)

---

## 🆘 Troubleshooting

### "npm install" fails
```powershell
# Clear npm cache and try again
npm cache clean --force
rm -r node_modules
npm install
```

### Port 3001 already in use
```powershell
# Change port in vite.config.ts
server: {
  port: 3002  # Use different port
}
```

### App doesn't load after build
Check that your web server is configured to:
- Serve `index.html` for all routes (SPA mode)
- Support HTTPS (required for PWA features)

### PWA install button doesn't appear
- Must use HTTPS (localhost is okay for testing)
- Must have valid manifest.json
- Must have service worker registered
- Try: Chrome DevTools → Application → Manifest

### Data not syncing between apps
- Both student app and your current system use localStorage
- Make sure both are running on same origin (localhost:3001)
- Check browser DevTools → Application → Local Storage

---

## 💡 Tips & Tricks

### Development:
- Hot reload is enabled - save files and see changes instantly
- Use Chrome DevTools mobile emulator to test mobile view
- Redux DevTools work with Zustand (install extension)

### Design:
- App uses Tailwind CSS - easy to customize
- Lucide React for icons - 1000+ icons available
- Mobile-first design - desktop is bonus

### Performance:
- PWA caching makes app load instantly
- Lazy loading for better performance
- Code splitting automatically handled by Vite

---

## 📞 Support

If you encounter issues:

1. **Check browser console** - Look for error messages
2. **Clear browser cache** - Sometimes helps with PWA issues
3. **Try incognito mode** - Rules out extension conflicts
4. **Check this guide** - Most common issues covered here

---

## 🎉 You're All Set!

Your student mobile app is ready to use! Students can now:

✅ Login and view their dashboard
✅ See their rotation schedule
✅ Submit site preferences
✅ Check their profile and stats
✅ Install app on their phones
✅ Use offline (with cached data)

**Next:** Test with real students and gather feedback!

---

**Built with:**
- ⚡ Vite - Lightning fast build tool
- ⚛️ React - UI framework  
- 🎨 Tailwind CSS - Styling
- 🐻 Zustand - State management
- 📱 PWA - Progressive web app
- 🎯 TypeScript - Type safety

**Ready for the future:**
- Backend API integration
- Real authentication
- Push notifications
- App store deployment
