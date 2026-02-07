/**
 * APPE Experience Hub - Complete Comprehensive Module  
 * All Tabs with Full Data Tables and Rich Features
 * 11 Students | 6 Rotations | 3 Preceptors | 3 Sites
 */

// Global styles for APPE Hub
const APPE_STYLES = `
<style>
    .appe-hub-nav {
        background: white;
        border-radius: 12px;
        padding: 1rem;
        margin-bottom: 2rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        display: flex;
        gap: 0.5rem;
        overflow-x: auto;
        flex-wrap: wrap;
    }
    .appe-nav-btn {
        padding: 0.75rem 1.5rem;
        border: 2px solid #e0e0e0;
        background: white;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
        font-weight: 600;
        white-space: nowrap;
    }
    .appe-nav-btn:hover {
        border-color: #1B5E20;
        background: #E8F5E9;
    }
    .appe-nav-btn.active {
        border-color: #1B5E20;
        background: #1B5E20;
        color: white;
    }
    .appe-card {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 1.5rem;
    }
    .data-table {
        width: 100%;
        border-collapse: collapse;
    }
    .data-table thead th {
        background: #f5f7fa;
        padding: 1rem;
        text-align: left;
        font-weight: 600;
        border-bottom: 2px solid #e0e0e0;
    }
    .data-table tbody td {
        padding: 1rem;
        border-bottom: 1px solid #eee;
    }
    .data-table tbody tr:hover {
        background: #f9f9f9;
    }
    .btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
    }
    .btn-primary {
        background: #1B5E20;
        color: white;
    }
    .btn-outline {
        background: white;
        border: 2px solid #e0e0e0;
        color: #333;
    }
    .btn-sm {
        padding: 0.375rem 0.75rem;
        font-size: 0.85rem;
    }
</style>
`;

// All APPE Students Data
const APPE_STUDENTS = [
    { id: '38-1-1-1-0601', name: 'Mohammad Fares Almoteb', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Internal Medicine - KAMC', gpa: 3.85 },
    { id: '39-1-1-1-0116', name: 'Nasser Trad Aldosari', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KAMC', gpa: 3.92 },
    { id: '41-1-1-1-0050', name: 'Abdullah Ibrahim Alkhulaifi', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KFMC', gpa: 3.78 },
    { id: '41-1-1-1-0152', name: 'Saud Enad Alanazi', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Community Pharmacy', gpa: 3.65 },
    { id: '41-1-1-1-0350', name: 'Batal Muhayya Aldosari', gender: 'M', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Oncology - KAMC', gpa: 3.88 },
    { id: '41-1-1-1-0523', name: 'Faisal Mohammed Alshehri', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Pediatrics - KAMC', gpa: 3.91 },
    { id: '39-1-2-1-0303', name: 'Sarah Saud Abdulaziz Bindulaym', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Oncology - KAMC', gpa: 3.92 },
    { id: '41-1-2-1-0040', name: 'Sham Abdullah Al Enazi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Pediatrics - KAMC', gpa: 3.88 },
    { id: '41-1-2-1-0102', name: 'Dana Emad Aloumi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KAMC', gpa: 3.94 },
    { id: '41-1-2-1-0251', name: 'Yara Munif Alshammari', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KFMC', gpa: 3.91 },
    { id: '41-1-2-1-0284', name: 'Raghad Faisal Alwail', gender: 'F', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Internal Medicine - KAMC', gpa: 3.76 }
];

// Rotation Types
const ROTATION_TYPES = [
    { id: 'im', name: 'Internal Medicine (IM)', duration: '6 weeks', slots: 12 },
    { id: 'icu', name: 'Critical Care (ICU)', duration: '6 weeks', slots: 10 },
    { id: 'community', name: 'Advanced Community Pharmacy', duration: '6 weeks', slots: 8 },
    { id: 'pediatrics', name: 'Pediatrics (Ped.)', duration: '6 weeks', slots: 12 },
    { id: 'oncology', name: 'Oncology/Hematology', duration: '6 weeks', slots: 10 },
    { id: 'cardiology', name: 'Cardiology (Card.)', duration: '6 weeks', slots: 8 }
];

// Preceptor Directory  
const PRECEPTORS = [
    { id: 'P001', name: 'Laila Abu Eisha', credential: 'PharmD', specialty: 'DIC', site: 'KAMC Riyadh', license: 'PH-12345', expiry: '2027-06-15', students: 3, rating: 4.8 },
    { id: 'P002', name: 'Hind Almodaimegh', credential: 'PharmD', specialty: 'DIC', site: 'KAMC Riyadh', license: 'PH-12346', expiry: '2027-08-22', students: 4, rating: 4.9 },
    { id: 'P003', name: 'Dema Almotairi', credential: 'PharmD', specialty: 'Oncology', site: 'KAMC Riyadh', license: 'PH-12347', expiry: '2026-12-10', students: 2, rating: 4.7 }
];

// Training Sites
const TRAINING_SITES = [
    { id: 'S001', name: 'King Abdulaziz Medical City - Riyadh (KAMC)', type: 'Tertiary Hospital', capacity: 120, activeStudents: 98, preceptors: 45 },
    { id: 'S002', name: 'King Fahad Medical City (KFMC)', type: 'Tertiary Hospital', capacity: 25, activeStudents: 18, preceptors: 12 },
    { id: 'S003', name: 'National Guard Hospital (NGH)', type: 'Tertiary Hospital', capacity: 15, activeStudents: 12, preceptors: 8 }
];

// Sample Assignments
const ASSIGNMENTS = [
    { student: 'Mohammad Fares Almoteb', id: '38-1-1-1-0601', rotation: 'Internal Medicine', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 95, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.7, siteEval: 4.7 }
];

// Rotation Periods
const ROTATION_PERIODS = [
    { id: 'R1', name: 'Rotation 1', start: '2025-07-20', end: '2025-08-14', weeks: 4, status: 'completed', academicWeeks: 'July 20 - Aug 14, 2025' },
    { id: 'R2', name: 'Rotation 2', start: '2025-08-17', end: '2025-09-11', weeks: 4, status: 'completed', academicWeeks: 'Aug 17 - Sep 11, 2025' },
    { id: 'R3', name: 'Rotation 3', start: '2025-09-14', end: '2025-10-09', weeks: 4, status: 'completed', academicWeeks: 'Sep 14 - Oct 9, 2025' },
    { id: 'R7', name: 'Rotation 7', start: '2026-01-18', end: '2026-02-12', weeks: 4, status: 'active', academicWeeks: 'Jan 18 - Feb 12, 2026' }
];

// Attendance Records
const ATTENDANCE_RECORDS = {};
APPE_STUDENTS.forEach(student => {
    ATTENDANCE_RECORDS[student.id] = {
        studentId: student.id,
        studentName: student.name,
        period: 'P1',
        rotation: ASSIGNMENTS.find(a => a.id === student.id)?.rotation || 'Not Assigned',
        requiredHours: 160,
        completedHours: Math.floor(Math.random() * 80) + 60,
        daysPresent: Math.floor(Math.random() * 25) + 15,
        daysAbsent: Math.floor(Math.random() * 3),
        daysLate: Math.floor(Math.random() * 2),
        attendanceRate: 0,
        status: 'active'
    };
    const totalDays = ATTENDANCE_RECORDS[student.id].daysPresent + ATTENDANCE_RECORDS[student.id].daysAbsent;
    ATTENDANCE_RECORDS[student.id].attendanceRate = totalDays > 0 ? 
        ((ATTENDANCE_RECORDS[student.id].daysPresent / totalDays) * 100).toFixed(1) : 0;
});

// Main render function
window.renderAPPEExperienceHub = function() {
    console.log('renderAPPEExperienceHub called');
    const activeSection = window.appeActiveSection || 'dashboard';
    
    return `
        ${APPE_STYLES}
        
        <div class="appe-hub-nav">
            <button class="appe-nav-btn ${activeSection === 'dashboard' ? 'active' : ''}" onclick="window.switchAPPESection('dashboard')">📊 Dashboard</button>
            <button class="appe-nav-btn ${activeSection === 'schedule' ? 'active' : ''}" onclick="window.switchAPPESection('schedule')">🗓️ Schedule</button>
            <button class="appe-nav-btn ${activeSection === 'attendance' ? 'active' : ''}" onclick="window.switchAPPESection('attendance')">📅 Attendance</button>
            <button class="appe-nav-btn ${activeSection === 'students' ? 'active' : ''}" onclick="window.switchAPPESection('students')">👨‍🎓 Students</button>
            <button class="appe-nav-btn ${activeSection === 'preceptors' ? 'active' : ''}" onclick="window.switchAPPESection('preceptors')">👨‍⚕️ Preceptors</button>
            <button class="appe-nav-btn ${activeSection === 'sites' ? 'active' : ''}" onclick="window.switchAPPESection('sites')">🏥 Sites</button>
            <button class="appe-nav-btn ${activeSection === 'awards' ? 'active' : ''}" onclick="window.switchAPPESection('awards')">🏅 Awards</button>
        </div>
        
        <div id="appe-hub-content">
            ${window.getAPPEContent(activeSection)}
        </div>
    `;
};

// Content renderer for each section
window.getAPPEContent = function(section) {
    const greenCount = APPE_STUDENTS.filter(s => s.compliance === 'green').length;
    const yellowCount = APPE_STUDENTS.filter(s => s.compliance === 'yellow').length;
    const redCount = APPE_STUDENTS.filter(s => s.compliance === 'red').length;
    
    switch(section) {
        case 'dashboard':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">📊 APPE Experience Hub Dashboard</h2>
                    <p style="color: #666;">Spring 2026 - ${APPE_STUDENTS.length} Students</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20;">${APPE_STUDENTS.length}</div>
                        <small style="color: #666;">Total Students</small>
                    </div>
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 2.5rem; font-weight: 700; color: #4CAF50;">🟢 ${greenCount}</div>
                        <small style="color: #666;">Compliant</small>
                    </div>
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 2.5rem; font-weight: 700; color: #FF9800;">🟡 ${yellowCount}</div>
                        <small style="color: #666;">At Risk</small>
                    </div>
                </div>

                <div class="appe-card">
                    <h3>Student List</h3>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>GPA</th>
                                <th>Compliance</th>
                                <th>Current Rotation</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${APPE_STUDENTS.map(s => `
                                <tr>
                                    <td><strong>${s.name}</strong></td>
                                    <td>${s.gpa.toFixed(2)}</td>
                                    <td>
                                        <span style="padding: 0.25rem 0.75rem; background: ${s.compliance === 'green' ? '#E8F5E9' : s.compliance === 'yellow' ? '#FFF3E0' : '#FFEBEE'}; color: ${s.compliance === 'green' ? '#2E7D32' : s.compliance === 'yellow' ? '#E65100' : '#C62828'}; border-radius: 12px; font-weight: 600;">
                                            ${s.compliance.toUpperCase()}
                                        </span>
                                    </td>
                                    <td>${s.rotation}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;

        case 'schedule':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">🗓️ APPE Schedule</h2>
                    <div style="display: grid; gap: 1rem;">
                        ${ROTATION_PERIODS.map(p => `
                            <div style="padding: 1rem; background: #f9f9f9; border-left: 4px solid #1B5E20; border-radius: 4px;">
                                <strong>${p.name}</strong> - ${p.start} to ${p.end}<br>
                                <small style="color: #666;">${p.weeks} weeks | ${p.status}</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

        case 'attendance':
            const attendanceList = Object.values(ATTENDANCE_RECORDS);
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">📅 Attendance Tracking</h2>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Hours</th>
                                <th>Days Present</th>
                                <th>Attendance %</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${attendanceList.map(r => `
                                <tr>
                                    <td><strong>${r.studentName}</strong></td>
                                    <td>${r.completedHours} / 160</td>
                                    <td>${r.daysPresent}</td>
                                    <td>${r.attendanceRate}%</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;

        case 'students':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">👨‍🎓 APPE Students</h2>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>GPA</th>
                                <th>Compliance</th>
                                <th>Rotation</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${APPE_STUDENTS.map(s => `
                                <tr>
                                    <td>${s.id}</td>
                                    <td><strong>${s.name}</strong></td>
                                    <td>${s.gender}</td>
                                    <td>${s.gpa.toFixed(2)}</td>
                                    <td>
                                        <span style="padding: 0.25rem 0.75rem; background: ${s.compliance === 'green' ? '#E8F5E9' : '#FFF3E0'}; color: ${s.compliance === 'green' ? '#2E7D32' : '#E65100'}; border-radius: 12px; font-weight: 600;">
                                            ${s.compliance.toUpperCase()}
                                        </span>
                                    </td>
                                    <td>${s.rotation}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;

        case 'preceptors':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">👨‍⚕️ Preceptor Directory</h2>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Specialty</th>
                                <th>Site</th>
                                <th>Students</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${PRECEPTORS.map(p => `
                                <tr>
                                    <td><strong>${p.name}</strong></td>
                                    <td>${p.specialty}</td>
                                    <td>${p.site}</td>
                                    <td>${p.students}</td>
                                    <td>${p.rating} ⭐</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;

        case 'sites':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">🏥 Training Sites</h2>
                    <div style="display: grid; gap: 1.5rem;">
                        ${TRAINING_SITES.map(s => `
                            <div style="padding: 1.5rem; background: #f9f9f9; border-left: 4px solid #1B5E20; border-radius: 8px;">
                                <h3 style="margin: 0 0 0.5rem 0;">${s.name}</h3>
                                <div style="color: #666;">
                                    <strong>Capacity:</strong> ${s.activeStudents}/${s.capacity} (${Math.round(s.activeStudents/s.capacity*100)}%)<br>
                                    <strong>Preceptors:</strong> ${s.preceptors}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

        case 'awards':
            const facultyAwards = [];
            const facultyData = [
                { name: 'Prof. Abdulkareem AlBekairy', awards: [{ name: 'College Strategy Leader', type: 'Internal', year: 2024 }, { name: 'National Health Award', type: 'National', year: 2023 }] },
                { name: 'Prof. Shmeylan Al Harbi', awards: [{ name: 'Research Excellence', type: 'Internal', year: 2023 }] },
                { name: 'Prof. Abdulmalik Alkatheri', awards: [{ name: 'Best Professor', type: 'Internal', year: 2022 }] }
            ];
            facultyData.forEach(f => f.awards.forEach(a => facultyAwards.push({ faculty: f.name, ...a })));

            const studentAwards = [
                { student: 'Mohammed Abdulrahman Almahanna', award: 'Top APPE Performer', type: 'Academic', year: 2026 },
                { student: 'Dana Emad Aloumi', award: 'Clinical Excellence', type: 'Academic', year: 2026 }
            ];

            return `
                <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #FFD700, #FFF3E0); color: #333;">
                    <h2 style="color: #C2185B; margin: 0 0 0.5rem 0;">🏅 Student & Faculty Awards</h2>
                    <p style="margin: 0; opacity: 0.9;">Celebrating outstanding achievements in APPE and Clinical Affairs</p>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem; color: #1B5E20;">Student Awards</h3>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Award</th>
                                <th>Type</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${studentAwards.map(a => `
                                <tr>
                                    <td><strong>${a.student}</strong></td>
                                    <td>${a.award}</td>
                                    <td>${a.type}</td>
                                    <td>${a.year}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <div class="appe-card">
                    <h3 style="margin-bottom: 1rem; color: #1565C0;">Faculty Awards</h3>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Faculty Name</th>
                                <th>Award</th>
                                <th>Type</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${facultyAwards.map(a => `
                                <tr>
                                    <td><strong>${a.faculty}</strong></td>
                                    <td>${a.name}</td>
                                    <td>${a.type}</td>
                                    <td>${a.year}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;

        default:
            return `<div class="appe-card"><h3>Section: ${section}</h3><p>Content loading...</p></div>`;
    }
};

// Tab navigation function
window.switchAPPESection = function(section) {
    console.log('Switching to section:', section);
    window.appeActiveSection = section;
    const appRoot = document.getElementById('app-root');
    if (appRoot) {
        appRoot.innerHTML = window.renderAPPEExperienceHub();
    }
};

console.log('✓ APPE Experience Hub loaded successfully');
