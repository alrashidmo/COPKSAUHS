# 🚀 Installation & Setup Guide

## Prerequisites
- **Node.js** 16+ and npm
- **MongoDB** (cloud or local)
- **Git** (optional)

---

## 🔧 Step 1: Setup Backend API

### 1a. Navigate to API folder
```bash
cd "C:\Users\rashe\OneDrive - King Saud Bin Abdulaziz University for Health Sciences\2025 - 2026\Most Updated One\api"
```

### 1b. Install dependencies
```bash
npm install
```

### 1c. Configure environment variables
Create/Edit `.env` file:
```
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/clinical-affairs
JWT_SECRET=your-super-secret-key-at-least-32-chars
JWT_EXPIRE=7d
NODE_ENV=development
PORT=5000

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password

FRONTEND_URL=http://localhost:8080
REACT_FRONTEND_URL=http://localhost:5173
```

### 1d. Start backend server
```bash
npm run dev
```

✅ API running on: **http://localhost:5000**
- Health check: http://localhost:5000/api/health

---

## 📱 Step 2: Setup React Dashboard

### 2a. Navigate to React project
```bash
cd "C:\Users\rashe\OneDrive - King Saud Bin Abdulaziz University for Health Sciences\2025 - 2026\Most Updated One\student-dashboard-react"
```

### 2b. Install dependencies
```bash
npm install
```

### 2c. Configure environment
Create `.env.local`:
```
VITE_API_URL=http://localhost:5000/api
```

### 2d. Start development server
```bash
npm run dev
```

✅ Dashboard running on: **http://localhost:5173**

---

## 🌐 Step 3: Run Student Portal

### 3a. Navigate to root folder
```bash
cd "C:\Users\rashe\OneDrive - King Saud Bin Abdulaziz University for Health Sciences\2025 - 2026\Most Updated One"
```

### 3b. Start HTTP server
```bash
npx http-server . -p 8080
```

✅ Portal running on: **http://localhost:8080**
- Open: **http://localhost:8080/student-portal-mobile.html**

---

## 🧪 Test the Application

### Register a new user
```bash
POST http://localhost:5000/api/auth/register
{
  "email": "test@ksau-hs.edu.sa",
  "password": "test123456",
  "firstName": "Ahmed",
  "lastName": "Al-Saud",
  "studentId": "441012345",
  "program": "PharmD",
  "cohortYear": 2024
}
```

### Login
```bash
POST http://localhost:5000/api/auth/login
{
  "email": "test@ksau-hs.edu.sa",
  "password": "test123456"
}
```

Response will include JWT token - use this for authenticated requests.

---

## 📊 MongoDB Setup

### Option A: MongoDB Atlas (Cloud - Recommended)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Add to `.env` as `MONGODB_URI`

### Option B: Local MongoDB
```bash
# Install MongoDB Community
# Start MongoDB service
mongod

# Connection string:
MONGODB_URI=mongodb://localhost:27017/clinical-affairs
```

---

## 📧 Email Setup (Gmail)

1. Enable 2-Factor Authentication in Gmail
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Add to `.env`:
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   ```

---

## 🎯 All 3 Apps Running

| Service | URL | Port |
|---------|-----|------|
| **Student Portal** | http://localhost:8080 | 8080 |
| **React Dashboard** | http://localhost:5173 | 5173 |
| **API Backend** | http://localhost:5000 | 5000 |

---

## 🚨 Troubleshooting

### Port already in use
```bash
# Kill process on port
netstat -ano | findstr :8080
taskkill /PID [PID] /F
```

### MongoDB connection error
- Check `MONGODB_URI` in `.env`
- Ensure MongoDB service is running
- Check firewall settings

### API not connecting from frontend
- Verify `VITE_API_URL` in React `.env.local`
- Check CORS settings in `server.js`
- Ensure API is running on port 5000

### npm install fails
```bash
# Clear cache
npm cache clean --force

# Try again
npm install
```

---

## 📈 Next Steps

1. ✅ Test all 3 apps
2. ✅ Register new users
3. ✅ Log clinical hours
4. ✅ Add activities
5. ✅ View charts
6. ✅ Export data

---

## 🔐 Production Deployment

See main README.md for deployment instructions to:
- Heroku/Railway (Backend)
- Vercel/Netlify (Frontend)
- GitHub Pages (Static)

---

**Version:** 1.0.0  
**Last Updated:** January 19, 2026
