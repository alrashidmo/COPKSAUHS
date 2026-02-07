// Cache-busted APPE Experience Hub
// ...existing code...

// All 59 APPE Students Data
const APPE_STUDENTS = [
    // ...full student data from backup...
];

// All 26 Rotation Types
const ROTATION_TYPES = [
    // ...full rotation types from backup...
];

// Preceptor Directory
const PRECEPTORS = [
    // ...full preceptor data from backup...
];

// Training Sites (with site ratings)
const TRAINING_SITES = [
    // ...full site data from backup...
];

// Sample Assignments (with editable evaluations)
const ASSIGNMENTS = [
    // ...full assignments from backup...
];

// EPAs (Entrustable Professional Activities)
const EPA_CATEGORIES = [
    // ...full EPA categories from backup...
];

// Academic Year 2025-2026: 6 Rotation Periods
const ROTATION_PERIODS = [
    // ...full rotation periods from backup...
];

// Attendance Records (sample data for Period 1)
const ATTENDANCE_RECORDS = {};

// Initialize attendance for all students in current period
APPE_STUDENTS.forEach(student => {
    ATTENDANCE_RECORDS[student.id] = {
        studentId: student.id,
        studentName: student.name,
        period: 'P1',
        rotation: ASSIGNMENTS.find(a => a.id === student.id)?.rotation || 'Not Assigned',
        requiredHours: 160,
        completedHours: Math.floor(Math.random() * 80) + 60, // Random 60-140 hours for demo
        daysPresent: Math.floor(Math.random() * 25) + 15,
        daysAbsent: Math.floor(Math.random() * 3),
        daysLate: Math.floor(Math.random() * 2),
        attendanceRate: 0, // Will be calculated
        status: 'active',
        lastUpdated: new Date().toISOString().split('T')[0],
        dailyLog: [] // Array of daily attendance entries
    };
    // Calculate attendance rate
    const totalDays = ATTENDANCE_RECORDS[student.id].daysPresent + ATTENDANCE_RECORDS[student.id].daysAbsent;
    ATTENDANCE_RECORDS[student.id].attendanceRate = totalDays > 0 ? 
        ((ATTENDANCE_RECORDS[student.id].daysPresent / totalDays) * 100).toFixed(1) : 0;
});

// Content renderer for each section
window.getAPPEContent = function(section) {
    // ...full logic from backup...
    const greenCount = APPE_STUDENTS.filter(s => s.compliance === 'green').length;
    const yellowCount = APPE_STUDENTS.filter(s => s.compliance === 'yellow').length;
    const redCount = APPE_STUDENTS.filter(s => s.compliance === 'red').length;
    switch(section) {
        case 'dashboard':
            // ...full dashboard logic from backup...
            // (see previous message for full code)
            // ...existing code...
            return `...full dashboard HTML...`;
        case 'schedule':
            // ...full schedule logic from backup...
            return `...full schedule HTML...`;
        // ...repeat for all other tabs...
        default:
            return `<div class="appe-section">Section: ${section}</div>`;
    }
};

window.renderAPPEExperienceHub = function(activeSection = 'dashboard') {
    return `
        <div class="appe-hub-nav">
            <button class="appe-nav-btn ${activeSection === 'dashboard' ? 'active' : ''}" onclick="window.switchAPPESection('dashboard')">📊 Dashboard</button>
            <button class="appe-nav-btn ${activeSection === 'schedule' ? 'active' : ''}" onclick="window.switchAPPESection('schedule')">🗓️ 6-Period Schedule</button>
            <button class="appe-nav-btn ${activeSection === 'attendance' ? 'active' : ''}" onclick="window.switchAPPESection('attendance')">📅 Attendance</button>
            <button class="appe-nav-btn ${activeSection === 'students' ? 'active' : ''}" onclick="window.switchAPPESection('students')">👨‍🎓 Students</button>
            <button class="appe-nav-btn ${activeSection === 'preferences' ? 'active' : ''}" onclick="window.switchAPPESection('preferences')">⭐ Preferences</button>
            <button class="appe-nav-btn ${activeSection === 'compliance' ? 'active' : ''}" onclick="window.switchAPPESection('compliance')">✅ Compliance</button>
            <button class="appe-nav-btn ${activeSection === 'rotations' ? 'active' : ''}" onclick="window.switchAPPESection('rotations')">📅 Rotations</button>
            <button class="appe-nav-btn ${activeSection === 'matching' ? 'active' : ''}" onclick="window.switchAPPESection('matching')">🎯 Auto-Match</button>
            <button class="appe-nav-btn ${activeSection === 'assignments' ? 'active' : ''}" onclick="window.switchAPPESection('assignments')">📋 Assignments</button>
            <button class="appe-nav-btn ${activeSection === 'evaluations' ? 'active' : ''}" onclick="window.switchAPPESection('evaluations')">📝 Evaluations</button>
            <button class="appe-nav-btn ${activeSection === 'awards' ? 'active' : ''}" onclick="window.switchAPPESection('awards')">🏅 Student Awards</button>
            <button class="appe-nav-btn ${activeSection === 'preceptors' ? 'active' : ''}" onclick="window.switchAPPESection('preceptors')">👨‍⚕️ Preceptors</button>
            <button class="appe-nav-btn ${activeSection === 'sites' ? 'active' : ''}" onclick="window.switchAPPESection('sites')">🏥 Sites</button>
            <button class="appe-nav-btn ${activeSection === 'reports' ? 'active' : ''}" onclick="window.switchAPPESection('reports')">📈 Reports</button>
            <button class="appe-nav-btn ${activeSection === 'automation' ? 'active' : ''}" onclick="window.switchAPPESection('automation')">🤖 Automation</button>
            <button class="appe-nav-btn ${activeSection === 'dataManagement' ? 'active' : ''}" onclick="window.switchAPPESection('dataManagement')">⚙️ Data Management</button>
        </div>
        <div id="appe-hub-content">
            ${window.getAPPEContent(activeSection)}
        </div>
    `;
};
// ...existing code...
