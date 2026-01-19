# APPE Dashboard - Pharmacy Practice Experience Management System

A comprehensive web-based dashboard for managing Advanced Pharmacy Practice Experience (APPE) and Introductory Pharmacy Practice Experience (IPPE) programs.

## 📋 Features

- **Program Overview Dashboard** - High-level metrics for total students, active rotations, average GPA, and risk assessment
- **APPE Dashboard** - Advanced practice experience tracking with student filtering
- **IPPE Dashboards** - Three levels (Community, Institutional, Clinical) with comprehensive metrics
- **Student Management** - Master database with detailed student profiles and grading
- **Rotation Tracking** - Progress monitoring across 10 rotation blocks
- **Risk Assessment** - Automated identification of at-risk students
- **Performance Analytics** - Charts and visualizations for evaluation trends
- **Competency Tracking** - CLO, EPA, and domain-based assessments

## 🚀 Quick Start

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No server or installation required!

### Running the Application

1. **Download/Extract** the project folder
2. **Open** `index.html` in your web browser
   - Double-click the file, or
   - Right-click → "Open with" → Choose your browser
3. **Start using** the dashboard immediately!

## 📁 Project Structure

```
primal-crater/
├── index.html          # Main application entry point
├── css/
│   └── styles.css      # Application styling
├── js/
│   ├── app.js          # Main application logic
│   └── store.js        # Data management (optional, if separated)
└── README.md           # This file
```

## 💾 Data Storage

- **Local Storage**: All data is stored in your browser's `localStorage`
- **Automatic Saving**: Changes are saved automatically
- **Data Persistence**: Data persists between sessions in the same browser
- **Note**: Data is browser-specific and won't transfer between different browsers or computers

### Resetting Data
To reset to default data:
1. Open browser Developer Tools (F12)
2. Go to "Application" or "Storage" tab
3. Find "Local Storage" → your site
4. Delete the `appe_data_v9` key
5. Refresh the page

## 🎓 Using the Dashboard

### Navigation
- **Dashboard** - Main overview with program-wide metrics
- **Students** - Master database of all students
- **IPPE I/II/III** - Introductory experience dashboards
- **APPE** - Advanced experience dashboard
- **Rotations** - Rotation schedule and assignments (now visible in top white nav; green side bar cleared)
- **Evaluations** - Assessment management
- **Stats** - Statistical analysis
- **Preceptors** - Preceptor directory

### Student Filtering (APPE & IPPE)
1. Look for the **"Filter Student"** dropdown at the top of the dashboard
2. Select **"All Students"** for aggregate metrics
3. Select an **individual student** to view their specific data
4. Metrics automatically update based on your selection

### Adding Students
1. Navigate to **Students** page
2. Click **"+ Add Student"** button
3. Fill in the form (ID, Name, GPA, Risk Status)
4. Click **"Save Student"**

## 🔧 Customization

### Modifying Student Data
Edit the `INITIAL_DATA` object in `js/app.js` to customize:
- Student list
- Rotation sites
- Preceptors
- Evaluation criteria

### Styling
Modify `css/styles.css` to change:
- Colors (CSS variables at the top)
- Layout
- Fonts
- Component styles

## 📤 Sharing This Project

### Option 1: Simple File Sharing
1. Zip the entire `primal-crater` folder
2. Share via email, cloud storage, or USB drive
3. Recipient unzips and opens `index.html`

### Option 2: Cloud Storage
1. Upload the folder to Google Drive, Dropbox, or OneDrive
2. Share the folder link
3. Recipients download and open `index.html`

### Option 3: GitHub
1. Create a GitHub repository
2. Push the project files
3. Share the repository URL
4. Others can clone with: `git clone <repository-url>`

### Option 4: Web Hosting (Advanced)
Deploy to free hosting services:
- **GitHub Pages**: Free, easy setup
- **Netlify**: Drag-and-drop deployment
- **Vercel**: One-click deployment
- **Cloudflare Pages**: Fast global CDN

## 🐛 Troubleshooting

### Dashboard shows "Loading Dashboard..."
1. Open browser console (F12)
2. Check for JavaScript errors
3. Clear browser cache and reload (Ctrl+Shift+R or Cmd+Shift+R)
4. Try a different browser

### Data not saving
1. Check if browser allows localStorage
2. Ensure you're not in private/incognito mode
3. Check browser storage quota

### Charts not displaying
1. Ensure Chart.js library is loaded (check console for errors)
2. Refresh the page
3. Try a different browser

## 📝 Technical Details

- **Framework**: Vanilla JavaScript (no dependencies)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Charts**: Chart.js (loaded via CDN)
- **Data**: Browser localStorage (JSON format)
- **Browser Support**: All modern browsers (Chrome, Firefox, Edge, Safari)

## 🔒 Privacy & Security

- **No Server**: All data stays in your browser
- **No Internet Required**: Works completely offline after initial load
- **No Data Collection**: No analytics or tracking
- **Local Only**: Data never leaves your computer

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review browser console for error messages
3. Ensure you're using a modern browser
4. Try clearing cache and reloading

## 📄 License

This project is provided as-is for educational and internal use.

---

**Version**: 1.0  
**Last Updated**: November 2024  
**Developed for**: Pharmacy Practice Experience Management
