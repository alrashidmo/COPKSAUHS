/**
 * APPE Experience Hub Module
 * Integrated into Clinical Affairs Dashboard under APPE
 */

// Render functions
function renderDashboardView() {
    return `
        <div class="dashboard-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
            <div class="appe-stat-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
                <div style="font-size: 0.9rem; color: #666;">Total Students</div>
                <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">156</div>
                <small style="color: #4CAF50;">↑ 12% vs last cohort</small>
            </div>
            <div class="appe-stat-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
                <div style="font-size: 0.9rem; color: #666;">Active Rotations</div>
                <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">26</div>
                <small style="color: #4CAF50;">Across 8 sites</small>
            </div>
            <div class="appe-stat-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
                <div style="font-size: 0.9rem; color: #666;">Compliance Rate</div>
                <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">91%</div>
                <small style="color: #4CAF50;">142/156 students</small>
            </div>
            <div class="appe-stat-card" style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
                <div style="font-size: 0.9rem; color: #666;">Active Preceptors</div>
                <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">89</div>
                <small style="color: #666;">Licensed & Active</small>
            </div>
        </div>
        <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h3>🎯 APPE Experience Hub - Welcome!</h3>
            <p>This is your centralized dashboard for managing all APPE-related activities including students, rotations, assignments, evaluations, and more.</p>
        </div>
    `;
}

window.renderAPPEExperienceHub = function() {
    const activeSection = window.appeActiveSection || 'dashboard';
    
    const sections = {
        dashboard: renderDashboardView,
        students: function() { return '<div style="padding: 2rem;"><h2>Students View</h2><p>Student management coming soon...</p></div>'; },
        preferences: function() { return '<div style="padding: 2rem;"><h2>Preferences View</h2></div>'; },
        compliance: function() { return '<div style="padding: 2rem;"><h2>Compliance View</h2></div>'; },
        rotations: function() { return '<div style="padding: 2rem;"><h2>Rotations View</h2></div>'; },
        matching: function() { return '<div style="padding: 2rem;"><h2>Matching View</h2></div>'; },
        assignments: function() { return '<div style="padding: 2rem;"><h2>Assignments View</h2></div>'; },
        evaluations: function() { return '<div style="padding: 2rem;"><h2>Evaluations View</h2></div>'; },
        epas: function() { return '<div style="padding: 2rem;"><h2>EPAs View</h2></div>'; },
        preceptors: function() { return '<div style="padding: 2rem;"><h2>Preceptors View</h2></div>'; },
        sites: function() { return '<div style="padding: 2rem;"><h2>Sites View</h2></div>'; },
        reports: function() { return '<div style="padding: 2rem;"><h2>Reports View</h2></div>'; },
        automation: function() { return '<div style="padding: 2rem;"><h2>Automation View</h2></div>'; },
        dataManagement: function() { return '<div style="padding: 2rem;"><h2>Data Management View</h2></div>'; }
    };
    
    const html = `
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
        </style>
        
        <div class="appe-hub-nav">
            <button class="appe-nav-btn ${activeSection === 'dashboard' ? 'active' : ''}" onclick="window.switchAPPESection('dashboard')">
                📊 Dashboard
            </button>
            <button class="appe-nav-btn ${activeSection === 'students' ? 'active' : ''}" onclick="window.switchAPPESection('students')">
                👨‍🎓 Students
            </button>
            <button class="appe-nav-btn ${activeSection === 'preferences' ? 'active' : ''}" onclick="window.switchAPPESection('preferences')">
                ⭐ Preferences
            </button>
            <button class="appe-nav-btn ${activeSection === 'compliance' ? 'active' : ''}" onclick="window.switchAPPESection('compliance')">
                ✅ Compliance
            </button>
            <button class="appe-nav-btn ${activeSection === 'rotations' ? 'active' : ''}" onclick="window.switchAPPESection('rotations')">
                📅 Rotations
            </button>
            <button class="appe-nav-btn ${activeSection === 'matching' ? 'active' : ''}" onclick="window.switchAPPESection('matching')">
                🎯 Auto-Match
            </button>
            <button class="appe-nav-btn ${activeSection === 'assignments' ? 'active' : ''}" onclick="window.switchAPPESection('assignments')">
                📋 Assignments
            </button>
            <button class="appe-nav-btn ${activeSection === 'evaluations' ? 'active' : ''}" onclick="window.switchAPPESection('evaluations')">
                📝 Evaluations
            </button>
            <button class="appe-nav-btn ${activeSection === 'epas' ? 'active' : ''}" onclick="window.switchAPPESection('epas')">
                ⭐ EPAs
            </button>
            <button class="appe-nav-btn ${activeSection === 'preceptors' ? 'active' : ''}" onclick="window.switchAPPESection('preceptors')">
                👨‍⚕️ Preceptors
            </button>
            <button class="appe-nav-btn ${activeSection === 'sites' ? 'active' : ''}" onclick="window.switchAPPESection('sites')">
                🏥 Sites
            </button>
            <button class="appe-nav-btn ${activeSection === 'reports' ? 'active' : ''}" onclick="window.switchAPPESection('reports')">
                📈 Reports
            </button>
            <button class="appe-nav-btn ${activeSection === 'automation' ? 'active' : ''}" onclick="window.switchAPPESection('automation')">
                🤖 Automation
            </button>
            <button class="appe-nav-btn ${activeSection === 'dataManagement' ? 'active' : ''}" onclick="window.switchAPPESection('dataManagement')">
                ⚙️ Data Management
            </button>
        </div>
        
        <div id="appe-hub-content">
            ${sections[activeSection] ? sections[activeSection]() : '<p>Section not found</p>'}
        </div>
    `;
    
    return html;
};

window.switchAPPESection = function(section) {
    window.appeActiveSection = section;
    const appRoot = document.getElementById('app-root');
    if (appRoot) {
        appRoot.innerHTML = window.renderAPPEExperienceHub();
    }
};
                background: #E8F5E9;
            }
            .appe-nav-btn.active {
                border-color: #1B5E20;
                background: #1B5E20;
                color: white;
            }
            .appe-stat-card {
                background: white;
                padding: 1.5rem;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                text-align: center;
            }
            .appe-stat-value {
                font-size: 2.5rem;
                font-weight: 700;
                color: #1B5E20;
                margin: 0.5rem 0;
            }
            .appe-stat-label {
                font-size: 0.9rem;
                color: #666;
            }
            .appe-card {
                background: white;
                border-radius: 12px;
                padding: 1.5rem;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
        </style>
        
        <div class="appe-hub-nav">
            <button class="appe-nav-btn ${activeSection === 'dashboard' ? 'active' : ''}" onclick="window.switchAPPESection('dashboard')">
                📊 Dashboard
            </button>
            <button class="appe-nav-btn ${activeSection === 'students' ? 'active' : ''}" onclick="window.switchAPPESection('students')">
                👨‍🎓 Students
            </button>
            <button class="appe-nav-btn ${activeSection === 'preferences' ? 'active' : ''}" onclick="window.switchAPPESection('preferences')">
                ⭐ Preferences
            </button>
            <button class="appe-nav-btn ${activeSection === 'compliance' ? 'active' : ''}" onclick="window.switchAPPESection('compliance')">
                ✅ Compliance
            </button>
            <button class="appe-nav-btn ${activeSection === 'rotations' ? 'active' : ''}" onclick="window.switchAPPESection('rotations')">
                📅 Rotations
            </button>
            <button class="appe-nav-btn ${activeSection === 'matching' ? 'active' : ''}" onclick="window.switchAPPESection('matching')">
                🎯 Auto-Match
            </button>
            <button class="appe-nav-btn ${activeSection === 'assignments' ? 'active' : ''}" onclick="window.switchAPPESection('assignments')">
                📋 Assignments
            </button>
            <button class="appe-nav-btn ${activeSection === 'evaluations' ? 'active' : ''}" onclick="window.switchAPPESection('evaluations')">
                📝 Evaluations
            </button>
            <button class="appe-nav-btn ${activeSection === 'epas' ? 'active' : ''}" onclick="window.switchAPPESection('epas')">
                ⭐ EPAs
            </button>
            <button class="appe-nav-btn ${activeSection === 'preceptors' ? 'active' : ''}" onclick="window.switchAPPESection('preceptors')">
                👨‍⚕️ Preceptors
            </button>
            <button class="appe-nav-btn ${activeSection === 'sites' ? 'active' : ''}" onclick="window.switchAPPESection('sites')">
                🏥 Sites
            </button>
            <button class="appe-nav-btn ${activeSection === 'reports' ? 'active' : ''}" onclick="window.switchAPPESection('reports')">
                📈 Reports
            </button>
            <button class="appe-nav-btn ${activeSection === 'automation' ? 'active' : ''}" onclick="window.switchAPPESection('automation')">
                🤖 Automation
            </button>
            <button class="appe-nav-btn ${activeSection === 'dataManagement' ? 'active' : ''}" onclick="window.switchAPPESection('dataManagement')">
                ⚙️ Data Management
            </button>
        </div>
        
        <div id="appe-hub-content">
            ${sections[activeSection] ? sections[activeSection]() : '<p>Section not found</p>'}
        </div>
    `;
    
    return html;
};

window.switchAPPESection = function(section) {
    window.appeActiveSection = section;
    const appRoot = document.getElementById('app-root');
    if (appRoot) {
        appRoot.innerHTML = window.renderAPPEExperienceHub();
    }
};

function renderDashboardView() {
    return `
        <div class="dashboard-grid" style="grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
            <div class="appe-stat-card">
                <div class="appe-stat-label">Total Students</div>
                <div class="appe-stat-value">156</div>
                <small style="color: #4CAF50;">↑ 12% vs last cohort</small>
            </div>
            <div class="appe-stat-card">
                <div class="appe-stat-label">Compliant (GREEN)</div>
                <div class="appe-stat-value">142</div>
                <small style="color: #4CAF50;">↑ 91%</small>
            </div>
            <div class="appe-stat-card">
                <div class="appe-stat-label">Active Rotations</div>
                <div class="appe-stat-value">45</div>
                <small>Current period</small>
            </div>
            <div class="appe-stat-card">
                <div class="appe-stat-label">Evaluation Rate</div>
                <div class="appe-stat-value">98%</div>
                <small style="color: #4CAF50;">↑ On target</small>
            </div>
        </div>

        <div class="appe-card" style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem;">⚡ Quick Actions</h3>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="switchAPPESection('rotations')">Create Rotation Block</button>
                <button class="btn btn-primary" onclick="switchAPPESection('matching')">Run Matching Algorithm</button>
                <button class="btn btn-outline" onclick="switchAPPESection('reports')">Generate Reports</button>
                <button class="btn btn-outline" onclick="switchAPPESection('compliance')">View Compliance</button>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div class="appe-card">
                <h3 style="margin-bottom: 1rem;">⚠️ Alerts</h3>
                <div style="padding: 1rem; background: #FFF9C4; border-left: 4px solid #FBC02D; border-radius: 8px; margin-bottom: 1rem;">
                    <strong>14 students</strong> have items expiring within 30 days
                </div>
                <div style="padding: 1rem; background: #E3F2FD; border-left: 4px solid #1976D2; border-radius: 8px;">
                    <strong>3 evaluations</strong> are due this week
                </div>
            </div>

            <div class="appe-card">
                <h3 style="margin-bottom: 1rem;">🕒 Recent Activity</h3>
                <div style="padding: 0.75rem; border-bottom: 1px solid #eee;">
                    <strong>10:30 AM</strong> - Rotation assignment confirmed (Ahmed Al-Rashid)
                </div>
                <div style="padding: 0.75rem; border-bottom: 1px solid #eee;">
                    <strong>09:15 AM</strong> - Mid-rotation evaluation submitted
                </div>
                <div style="padding: 0.75rem;">
                    <strong>08:45 AM</strong> - BLS certificate uploaded (Fatima Al-Zahrani)
                </div>
            </div>
        </div>
    `;
}

function renderStudentsView() {
    // Actual APPE students - Spring 2026 cohort
    const students = [
        // Males
        { id: '38-1-1-1-0601', name: 'Mohammad Fares Almoteb', program: 'PharmD Y5', compliance: 'green', rotation: 'Internal Medicine - KAMC' },
        { id: '39-1-1-1-0116', name: 'Nasser Trad Aldosari', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KAMC' },
        { id: '41-1-1-1-0050', name: 'Abdullah Ibrahim Alkhulaifi', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KFMC' },
        { id: '41-1-1-1-0152', name: 'Saud Enad Alanazi', program: 'PharmD Y5', compliance: 'green', rotation: 'Community Pharmacy' },
        { id: '41-1-1-1-0350', name: 'Batal Muhayya Aldosari', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Oncology - KAMC' },
        { id: '41-1-1-1-0523', name: 'Faisal Mohammed Alshehri', program: 'PharmD Y5', compliance: 'green', rotation: 'Pediatrics - KAMC' },
        { id: '42-1-1-1-0017', name: 'Ahmed Murdhi Alharbi', program: 'PharmD Y5', compliance: 'green', rotation: 'Infectious Diseases' },
        { id: '42-1-1-1-0055', name: 'Bandar Sultan Aldawish', program: 'PharmD Y5', compliance: 'green', rotation: 'Nephrology - KAMC' },
        { id: '42-1-1-1-0076', name: 'Hamad Mohammed Alkhalaf', program: 'PharmD Y5', compliance: 'green', rotation: 'Institutional Pharmacy' },
        { id: '42-1-1-1-0114', name: 'Riadh Mansor Arrais', program: 'PharmD Y5', compliance: 'green', rotation: 'Emergency Medicine' },
        { id: '42-1-1-1-0148', name: 'Sultan Ali Aljardan', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Drug Information Center' },
        { id: '42-1-1-1-0192', name: 'Abdulrahman Sulaiman Alossimi', program: 'PharmD Y5', compliance: 'green', rotation: 'Outpatient Pharmacy' },
        { id: '42-1-1-1-0208', name: 'Abdulrahman Majid Almadi', program: 'PharmD Y5', compliance: 'green', rotation: 'Internal Medicine - NGH' },
        { id: '42-1-1-1-0210', name: 'Abdulsalam Zarea Alanazi', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KFMC' },
        { id: '42-1-1-1-0236', name: 'Abdulaziz Abdulrahman Alarifi', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KAMC' },
        { id: '42-1-1-1-0271', name: 'Abdulmajeed Mohammed Alsuwaylihi', program: 'PharmD Y5', compliance: 'green', rotation: 'Solid Organ Transplant' },
        { id: '42-1-1-1-0296', name: 'Faris Salem Althobiti', program: 'PharmD Y5', compliance: 'green', rotation: 'Pharmacy Administration' },
        { id: '42-1-1-1-0313', name: 'Fahad Ali Alomair', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Medication Safety' },
        { id: '42-1-1-1-0315', name: 'Fahad Faisal Almutiri', program: 'PharmD Y5', compliance: 'green', rotation: 'Quality Assurance' },
        { id: '42-1-1-1-0358', name: 'Mohammed Ibrahim Al Rudhyyan', program: 'PharmD Y5', compliance: 'green', rotation: 'Academia' },
        { id: '42-1-1-1-0381', name: 'Mohammed Abdulrahman Almahanna', program: 'PharmD Y5', compliance: 'green', rotation: 'Research' },
        { id: '42-1-1-1-0387', name: 'Mohammad Abdulwahab Alfafi', program: 'PharmD Y5', compliance: 'green', rotation: 'Community Pharmacy' },
        { id: '42-1-1-1-0394', name: 'Mohammed Farhan Alotebe', program: 'PharmD Y5', compliance: 'green', rotation: 'Internal Medicine - KAMC' },
        
        // Females
        { id: '39-1-2-1-0303', name: 'Sarah Saud Abdulaziz Bindulaym', program: 'PharmD Y5', compliance: 'green', rotation: 'Oncology - KAMC' },
        { id: '41-1-2-1-0040', name: 'Sham Abdullah Al Enazi', program: 'PharmD Y5', compliance: 'green', rotation: 'Pediatrics - KAMC' },
        { id: '41-1-2-1-0102', name: 'Dana Emad Aloumi', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KAMC' },
        { id: '41-1-2-1-0251', name: 'Yara Munif Alshammari', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KFMC' },
        { id: '41-1-2-1-0284', name: 'Raghad Faisal Alwail', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Internal Medicine - KAMC' },
        { id: '42-1-2-1-0009', name: 'Albatoul Omran Alomran', program: 'PharmD Y5', compliance: 'green', rotation: 'Infectious Diseases' },
        { id: '42-1-2-1-0014', name: 'Alhanouf Khaled Almisfer', program: 'PharmD Y5', compliance: 'green', rotation: 'Nephrology - KAMC' },
        { id: '42-1-2-1-0019', name: 'Amal Mohammed Aleanzi', program: 'PharmD Y5', compliance: 'green', rotation: 'Outpatient Pharmacy' },
        { id: '42-1-2-1-0031', name: 'Jinan Abdulrahman Alhuwayshil', program: 'PharmD Y5', compliance: 'green', rotation: 'Drug Information Center' },
        { id: '42-1-2-1-0033', name: 'Jod Amer Mohammed Aljuaidi', program: 'PharmD Y5', compliance: 'green', rotation: 'Community Pharmacy' },
        { id: '42-1-2-1-0038', name: 'Hissah Mohammed Alkyssir', program: 'PharmD Y5', compliance: 'green', rotation: 'Institutional Pharmacy' },
        { id: '42-1-2-1-0040', name: 'Hussh Naif Albahlal', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Emergency Medicine' },
        { id: '42-1-2-1-0047', name: 'Khuzama Hamoud J Alamri', program: 'PharmD Y5', compliance: 'green', rotation: 'Neonatal - KAMC' },
        { id: '42-1-2-1-0048', name: 'Khawla Ahmed Alrubayan', program: 'PharmD Y5', compliance: 'green', rotation: 'Solid Organ Transplant' },
        { id: '42-1-2-1-0085', name: 'Ragad Khlaf Alenazi', program: 'PharmD Y5', compliance: 'green', rotation: 'Pharmacoeconomics' },
        { id: '42-1-2-1-0087', name: 'Raghad Saleh Abdullah Alajmi', program: 'PharmD Y5', compliance: 'green', rotation: 'Medication Safety' },
        { id: '42-1-2-1-0091', name: 'Raghad Sulaiman K Almutairi', program: 'PharmD Y5', compliance: 'green', rotation: 'Quality Assurance' },
        { id: '42-1-2-1-0103', name: 'Raneem Muharib Alanazi', program: 'PharmD Y5', compliance: 'green', rotation: 'Pharmacy Administration' },
        { id: '42-1-2-1-0112', name: 'Ruwayda Saeed Mohammed Alshahrani', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Internal Medicine - NGH' },
        { id: '42-1-2-1-0136', name: 'Ruyuf Abdullah Alshuqayr', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KFMC' },
        { id: '42-1-2-1-0154', name: 'Sarah Abdulaziz Bin Saqyah', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KAMC' },
        { id: '42-1-2-1-0161', name: 'Sadeem Abdulaziz Alamri', program: 'PharmD Y5', compliance: 'green', rotation: 'Oncology - KAMC' },
        { id: '42-1-2-1-0178', name: 'Shaden Abdullah Alharbi', program: 'PharmD Y5', compliance: 'green', rotation: 'Pediatrics - KAMC' },
        { id: '42-1-2-1-0183', name: 'Shoroog Saad Faleh Al Otaibi', program: 'PharmD Y5', compliance: 'green', rotation: 'Infectious Diseases' },
        { id: '42-1-2-1-0194', name: 'Shoug Khalid Almousa', program: 'PharmD Y5', compliance: 'green', rotation: 'Nephrology - KAMC' },
        { id: '42-1-2-1-0211', name: 'Ohoud Mansour M Almutairi', program: 'PharmD Y5', compliance: 'green', rotation: 'Outpatient Pharmacy' },
        { id: '42-1-2-1-0217', name: 'Ghadah Meteb Alsanoni', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Drug Information Center' },
        { id: '42-1-2-1-0219', name: 'Ghala Salem Obidalullh Alharbi', program: 'PharmD Y5', compliance: 'green', rotation: 'Community Pharmacy' },
        { id: '42-1-2-1-0221', name: 'Ghala Mohammad B Alomari', program: 'PharmD Y5', compliance: 'green', rotation: 'Institutional Pharmacy' },
        { id: '42-1-2-1-0250', name: 'Lama Ibrahim Alfehaid', program: 'PharmD Y5', compliance: 'green', rotation: 'Emergency Medicine' },
        { id: '42-1-2-1-0270', name: 'Lina Moshrif Alamri', program: 'PharmD Y5', compliance: 'green', rotation: 'Internal Medicine - KAMC' },
        { id: '42-1-2-1-0275', name: 'Mashael Abdullah Almutairi', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KAMC' },
        { id: '42-1-2-1-0276', name: 'Manar Mohammed Al Arifi', program: 'PharmD Y5', compliance: 'red', rotation: 'Not assigned - Compliance Issue' },
        { id: '42-1-2-1-0284', name: 'Monirah Saleh N Alotaibi', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KFMC' },
        { id: '42-1-2-1-0286', name: 'Muneerah Faisal Al Boushal', program: 'PharmD Y5', compliance: 'green', rotation: 'Oncology - KAMC' },
        { id: '42-1-2-1-0327', name: 'Nouf Abdulaziz Alnajim', program: 'PharmD Y5', compliance: 'green', rotation: 'Pediatrics - KAMC' }
    ];

    return `
        <div class="appe-card" style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h2 style="margin: 0 0 0.5rem 0;">👨‍🎓 APPE Students - Spring 2026</h2>
                    <p style="color: #666; margin: 0;">Total: ${students.length} students (23 Male, 36 Female)</p>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <input type="text" class="form-control" placeholder="🔍 Search students..." style="width: 300px;">
                    <button class="btn btn-outline">📥 Export</button>
                    <button class="btn btn-primary">+ Add Student</button>
                </div>
            </div>
        </div>

        <div class="appe-card">
            <div class="data-table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Program</th>
                            <th>Compliance Status</th>
                            <th>Current Rotation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${students.map(s => `
                            <tr>
                                <td>${s.id}</td>
                                <td><strong>${s.name}</strong></td>
                                <td>${s.program}</td>
                                <td>
                                    <span class="compliance-status ${s.compliance}">
                                        <span class="status-dot ${s.compliance}"></span>
                                        ${s.compliance.toUpperCase()}
                                    </span>
                                </td>
                                <td>${s.rotation}</td>
                                <td>
                                    <button class="btn btn-outline btn-sm">View</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderPreferencesView() {
    // Actual APPE rotations available
    const rotationTypes = [
        { id: 'im', name: 'Internal Medicine (IM)', duration: '6 weeks', slots: 12, preceptors: 11 },
        { id: 'icu', name: 'Critical Care (ICU)', duration: '6 weeks', slots: 10, preceptors: 11 },
        { id: 'community', name: 'Advanced Community Pharmacy', duration: '6 weeks', slots: 8, preceptors: 5 },
        { id: 'institutional', name: 'Advanced Institutional/Inpatient Pharmacy', duration: '6 weeks', slots: 6, preceptors: 3 },
        { id: 'nephrology', name: 'Nephrology (Neph.)', duration: '6 weeks', slots: 6, preceptors: 3 },
        { id: 'sot', name: 'Solid Organ Transplant (SOT)', duration: '6 weeks', slots: 4, preceptors: 2 },
        { id: 'oncology', name: 'Oncology/Hematology (Hem/Onc)', duration: '6 weeks', slots: 10, preceptors: 5 },
        { id: 'pediatrics', name: 'Pediatrics (Ped.)', duration: '6 weeks', slots: 12, preceptors: 6 },
        { id: 'nicu', name: 'Neonatal (NICU)', duration: '6 weeks', slots: 3, preceptors: 1 },
        { id: 'admin', name: 'Pharmacy Administration', duration: '6 weeks', slots: 4, preceptors: 2 },
        { id: 'dic', name: 'Drug Information Center (DIC)', duration: '6 weeks', slots: 4, preceptors: 2 },
        { id: 'pe', name: 'Pharmacoeconomic and Formulary Management', duration: '6 weeks', slots: 2, preceptors: 1 },
        { id: 'surgery', name: 'Surgery', duration: '6 weeks', slots: 2, preceptors: 0 },
        { id: 'manufacturing', name: 'Drug Manufacturing', duration: '6 weeks', slots: 2, preceptors: 0 },
        { id: 'company', name: 'Drug Company', duration: '6 weeks', slots: 2, preceptors: 0 },
        { id: 'med-safety', name: 'Medication Safety', duration: '6 weeks', slots: 6, preceptors: 4 },
        { id: 'qa', name: 'Pharmacy Quality Assurance (Pharmacy QI)', duration: '6 weeks', slots: 6, preceptors: 3 },
        { id: 'id', name: 'Infectious Diseases (ID)', duration: '6 weeks', slots: 6, preceptors: 3 },
        { id: 'academia', name: 'Academia', duration: '6 weeks', slots: 3, preceptors: 1 },
        { id: 'informatics', name: 'Health Informatics', duration: '6 weeks', slots: 2, preceptors: 0 },
        { id: 'outpatient', name: 'Advanced Institutional Outpatient', duration: '6 weeks', slots: 10, preceptors: 7 },
        { id: 'cardiology', name: 'Cardiology (Card.)', duration: '6 weeks', slots: 8, preceptors: 6 },
        { id: 'sfda', name: 'Saudi FDA (SFDA)', duration: '6 weeks', slots: 2, preceptors: 0 },
        { id: 'em', name: 'Emergency Medicine (EM)', duration: '6 weeks', slots: 3, preceptors: 1 },
        { id: 'research', name: 'Research', duration: '6 weeks', slots: 2, preceptors: 0 },
        { id: 'mrc', name: 'Medical Referral Center (MRC)', duration: '6 weeks', slots: 2, preceptors: 0 }
    ];

    return `
        <div class="appe-card" style="margin-bottom: 2rem;">
            <div style="background: linear-gradient(135deg, #1B5E20, #2E7D32); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                <h2 style="margin: 0 0 0.5rem 0; color: white;">🎯 Rotation Preference System</h2>
                <p style="margin: 0; opacity: 0.9;">Rank your top rotation choices. Our algorithm will automatically match you with available preceptors and sites based on your preferences, academic performance, and site availability.</p>
            </div>
        </div>

        <div class="appe-card" style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem;">📋 Student Information</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; background: #f5f5f5; padding: 1rem; border-radius: 8px;">
                <div>
                    <small style="color: #666;">Student Name</small>
                    <div style="font-weight: 600;">Ahmed Al-Rashid</div>
                </div>
                <div>
                    <small style="color: #666;">Student ID</small>
                    <div style="font-weight: 600;">PHD2023001</div>
                </div>
                <div>
                    <small style="color: #666;">GPA</small>
                    <div style="font-weight: 600; color: #1B5E20;">3.85</div>
                </div>
            </div>
        </div>

        <div class="appe-card" style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="margin: 0;">🎯 Rank Your Rotation Preferences</h3>
                <div style="background: #FFF3E0; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.9rem;">
                    <strong>Deadline:</strong> January 25, 2026
                </div>
            </div>

            <div style="background: #E3F2FD; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <strong>📌 Instructions:</strong> Drag and drop to rank rotations from 1 (most preferred) to 26 (least preferred). You must rank all rotations.
            </div>

            <div style="display: grid; gap: 1rem;">
                ${rotationTypes.map((rotation, index) => `
                    <div style="background: white; border: 2px solid #e0e0e0; border-radius: 8px; padding: 1rem; display: grid; grid-template-columns: 60px 1fr auto auto; gap: 1rem; align-items: center; cursor: move;">
                        <div style="text-align: center;">
                            <div style="background: #1B5E20; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold;">
                                ${index + 1}
                            </div>
                            <small style="color: #666;">Rank</small>
                        </div>
                        <div>
                            <strong style="font-size: 1.1rem;">${rotation.name}</strong>
                            <div style="color: #666; font-size: 0.9rem; margin-top: 0.25rem;">
                                ⏱️ ${rotation.duration} | 📊 ${rotation.slots} slots | 👨‍⚕️ ${rotation.preceptors} preceptors
                            </div>
                        </div>
                        <div style="display: flex; gap: 0.5rem;">
                            <button class="btn btn-outline btn-sm" onclick="movePreference(${index}, -1)" ${index === 0 ? 'disabled' : ''}>
                                ⬆️
                            </button>
                            <button class="btn btn-outline btn-sm" onclick="movePreference(${index}, 1)" ${index === rotationTypes.length - 1 ? 'disabled' : ''}>
                                ⬇️
                            </button>
                        </div>
                        <button class="btn btn-outline btn-sm" onclick="viewRotationDetails('${rotation.id}')">
                            ℹ️ Details
                        </button>
                    </div>
                `).join('')}
            </div>

            <div style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid #e0e0e0; display: flex; justify-content: space-between; align-items: center;">
                <div style="color: #666;">
                    <small>💡 Tip: Your GPA, compliance status, and preferences will all be considered in the matching algorithm</small>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-outline">Save as Draft</button>
                    <button class="btn btn-primary" onclick="submitPreferences()" style="background: #1B5E20; padding: 0.75rem 2rem;">
                        ✅ Submit Preferences
                    </button>
                </div>
            </div>
        </div>

        <div class="appe-card">
            <h3 style="margin-bottom: 1rem;">📊 Preference Statistics</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                <div style="text-align: center; padding: 1rem; background: #E8F5E9; border-radius: 8px;">
                    <div style="font-size: 2rem; font-weight: bold; color: #1B5E20;">89%</div>
                    <small style="color: #666;">Students Submitted</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #FFF3E0; border-radius: 8px;">
                    <div style="font-size: 2rem; font-weight: bold; color: #F57C00;">15</div>
                    <small style="color: #666;">Days Remaining</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #E3F2FD; border-radius: 8px;">
                    <div style="font-size: 2rem; font-weight: bold; color: #1976D2;">156</div>
                    <small style="color: #666;">Total Students</small>
                </div>
            </div>
        </div>
    `;
}

function renderComplianceView() {
    return `
        <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
            <div class="appe-card" style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 0.5rem;">🟢</div>
                <div class="appe-stat-value" style="color: #4CAF50;">142</div>
                <div class="appe-stat-label">GREEN (91%)</div>
                <p style="margin-top: 1rem; font-size: 0.85rem; color: #666;">
                    100% compliant, no items expiring within 30 days
                </p>
            </div>
            <div class="appe-card" style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 0.5rem;">🟡</div>
                <div class="appe-stat-value" style="color: #FFC107;">11</div>
                <div class="appe-stat-label">YELLOW (7%)</div>
                <p style="margin-top: 1rem; font-size: 0.85rem; color: #666;">
                    1-3 items pending OR items expiring soon
                </p>
            </div>
            <div class="appe-card" style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 0.5rem;">🔴</div>
                <div class="appe-stat-value" style="color: #F44336;">3</div>
                <div class="appe-stat-label">RED (2%)</div>
                <p style="margin-top: 1rem; font-size: 0.85rem; color: #666;">
                    4+ items pending - <strong>BLOCKED</strong>
                </p>
            </div>
        </div>

        <div class="appe-card">
            <h3 style="margin-bottom: 1.5rem;">Required Compliance Items</h3>
            <div class="data-table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Requirement</th>
                            <th>Compliance Rate</th>
                            <th>Expiring Soon (30 days)</th>
                            <th>Expired</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BLS Certification</td>
                            <td>95%</td>
                            <td>8 students</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>TB Test</td>
                            <td>98%</td>
                            <td>5 students</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Background Check</td>
                            <td>88%</td>
                            <td>12 students</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Hepatitis B Vaccine</td>
                            <td>100%</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="appe-card" style="margin-top: 1.5rem;">
            <h3 style="margin-bottom: 1rem;">🤖 Automated Compliance Monitoring</h3>
            <div style="padding: 1rem; background: #E8F5E9; border-left: 4px solid #4CAF50; border-radius: 8px;">
                <strong>✓ Daily Check:</strong> Runs every day at 3:00 AM - Next run in 16 hours
            </div>
            <ul style="margin-top: 1rem; color: #666; line-height: 1.8;">
                <li><strong>60 days before expiry:</strong> Info notification</li>
                <li><strong>30 days before expiry:</strong> Warning (EMAIL + IN_APP)</li>
                <li><strong>14 days before expiry:</strong> Urgent (EMAIL + SMS)</li>
                <li><strong>7 days before expiry:</strong> Critical + coordinator alert</li>
                <li><strong>Day of expiry:</strong> Status RED, student blocked</li>
            </ul>
        </div>
    `;
}

function renderMatchingView() {
    return `
        <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #1B5E20, #2E7D32); color: white;">
            <h2 style="color: white; margin-bottom: 0.5rem;">🎯 Automated Matching System</h2>
            <p style="opacity: 0.9; margin: 0;">Hungarian Algorithm with Multi-Factor Optimization</p>
        </div>

        <div class="appe-card" style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem;">📊 Current Status</h3>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
                <div style="text-align: center; padding: 1rem; background: #E8F5E9; border-radius: 8px;">
                    <div style="font-size: 1.8rem; font-weight: bold; color: #1B5E20;">138</div>
                    <small style="color: #666;">Preferences Submitted</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #FFF3E0; border-radius: 8px;">
                    <div style="font-size: 1.8rem; font-weight: bold; color: #F57C00;">18</div>
                    <small style="color: #666;">Pending Submissions</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #E3F2FD; border-radius: 8px;">
                    <div style="font-size: 1.8rem; font-weight: bold; color: #1976D2;">45</div>
                    <small style="color: #666;">Available Sites</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #F3E5F5; border-radius: 8px;">
                    <div style="font-size: 1.8rem; font-weight: bold; color: #7B1FA2;">89</div>
                    <small style="color: #666;">Active Preceptors</small>
                </div>
            </div>
        </div>

        <div class="appe-card" style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem;">⚙️ Algorithm Configuration</h3>
            
            <div class="form-group" style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Select Rotation Block</label>
                <select class="form-control" style="max-width: 500px;">
                    <option value="">-- Select Block --</option>
                    <option value="block1" selected>APPE Block 1 - Spring 2026 (156 students)</option>
                    <option value="block2">APPE Block 2 - Fall 2026 (142 students)</option>
                </select>
            </div>

            <label style="display: block; margin-bottom: 1rem; font-weight: 600;">🎚️ Scoring Weights (must total 100%)</label>
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div>
                    <label style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.5rem;">Student Preference Match</label>
                    <input type="number" class="form-control" value="40" min="0" max="100" style="text-align: center;">
                    <small style="color: #999;">Default: 40%</small>
                </div>
                <div>
                    <label style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.5rem;">Geographic Proximity</label>
                    <input type="number" class="form-control" value="20" min="0" max="100" style="text-align: center;">
                    <small style="color: #999;">Default: 20%</small>
                </div>
                <div>
                    <label style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.5rem;">Site Quality Score</label>
                    <input type="number" class="form-control" value="15" min="0" max="100" style="text-align: center;">
                    <small style="color: #999;">Default: 15%</small>
                </div>
                <div>
                    <label style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.5rem;">Rotation Diversity</label>
                    <input type="number" class="form-control" value="15" min="0" max="100" style="text-align: center;">
                    <small style="color: #999;">Default: 15%</small>
                </div>
                <div>
                    <label style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.5rem;">Preceptor Balance</label>
                    <input type="number" class="form-control" value="10" min="0" max="100" style="text-align: center;">
                    <small style="color: #999;">Default: 10%</small>
                </div>
            </div>

            <div style="background: #E3F2FD; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <strong>📌 How it works:</strong> The system uses the Hungarian algorithm to find optimal student-rotation assignments. Higher weights prioritize that factor more heavily in the matching process.
            </div>

            <div style="display: flex; gap: 1rem;">
                <button class="btn btn-primary" onclick="runMatchingAlgorithm()" style="background: #1B5E20; padding: 0.75rem 2rem;">
                    🚀 Run Automated Matching
                </button>
                <button class="btn btn-outline" onclick="previewMatchResults()">
                    👁️ Preview Results
                </button>
                <button class="btn btn-outline" onclick="exportMatchingReport()">
                    📥 Export Report
                </button>
            </div>
        </div>

        <div class="appe-card" style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem;">✅ Pre-Match Validation</h3>
            <div style="display: grid; gap: 0.75rem;">
                <div style="padding: 0.75rem; background: #E8F5E9; border-left: 4px solid #4CAF50; border-radius: 4px; display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 1.5rem;">✅</span>
                    <div>
                        <strong>Compliance Status</strong>
                        <div style="font-size: 0.9rem; color: #666;">142/156 students GREEN (91%)</div>
                    </div>
                </div>
                <div style="padding: 0.75rem; background: #E8F5E9; border-left: 4px solid #4CAF50; border-radius: 4px; display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 1.5rem;">✅</span>
                    <div>
                        <strong>Site Capacity</strong>
                        <div style="font-size: 0.9rem; color: #666;">All sites within capacity limits</div>
                    </div>
                </div>
                <div style="padding: 0.75rem; background: #E8F5E9; border-left: 4px solid #4CAF50; border-radius: 4px; display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 1.5rem;">✅</span>
                    <div>
                        <strong>Preceptor Availability</strong>
                        <div style="font-size: 0.9rem; color: #666;">89 active preceptors ready</div>
                    </div>
                </div>
                <div style="padding: 0.75rem; background: #E8F5E9; border-left: 4px solid #4CAF50; border-radius: 4px; display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 1.5rem;">✅</span>
                    <div>
                        <strong>Prerequisites</strong>
                        <div style="font-size: 0.9rem; color: #666;">All students meet prerequisites</div>
                    </div>
                </div>
                <div style="padding: 0.75rem; background: #FFF3E0; border-left: 4px solid #FFC107; border-radius: 4px; display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 1.5rem;">⚠️</span>
                    <div>
                        <strong>Pending Preferences</strong>
                        <div style="font-size: 0.9rem; color: #666;">18 students haven't submitted (deadline: Jan 25)</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="appe-card">
            <h3 style="margin-bottom: 1rem;">🤖 Automation Rules</h3>
            <div style="color: #666; line-height: 1.8;">
                <div style="padding: 0.5rem 0; border-bottom: 1px solid #eee;">
                    <strong>Step 1:</strong> Collect student preferences (deadline-based)
                </div>
                <div style="padding: 0.5rem 0; border-bottom: 1px solid #eee;">
                    <strong>Step 2:</strong> Validate all compliance requirements automatically
                </div>
                <div style="padding: 0.5rem 0; border-bottom: 1px solid #eee;">
                    <strong>Step 3:</strong> Run optimization algorithm with configured weights
                </div>
                <div style="padding: 0.5rem 0; border-bottom: 1px solid #eee;">
                    <strong>Step 4:</strong> Generate assignments with conflict detection
                </div>
                <div style="padding: 0.5rem 0; border-bottom: 1px solid #eee;">
                    <strong>Step 5:</strong> Notify students via email with their schedules
                </div>
                <div style="padding: 0.5rem 0;">
                    <strong>Step 6:</strong> Export to calendar systems (Google Calendar, Outlook)
                </div>
            </div>
        </div>
    `;
}

function renderRotationsView() {
    const rotationBlocks = [
        { id: 'block1', name: 'APPE Block 1 - Spring 2026', start: '2026-02-01', end: '2026-03-14', students: 156, status: 'Active' },
        { id: 'block2', name: 'APPE Block 2 - Fall 2026', start: '2026-08-15', end: '2026-09-26', students: 142, status: 'Planning' },
        { id: 'block3', name: 'APPE Block 3 - Winter 2027', start: '2027-01-10', end: '2027-02-21', students: 0, status: 'Draft' }
    ];

    return `
        <div class="appe-card" style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <div>
                    <h2 style="margin: 0 0 0.5rem 0;">📅 Rotation Blocks Management</h2>
                    <p style="color: #666; margin: 0;">Manage APPE rotation blocks and scheduling</p>
                </div>
                <button class="btn btn-primary">+ Create New Rotation Block</button>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                ${rotationBlocks.map(block => `
                    <div style="background: white; border: 2px solid ${block.status === 'Active' ? '#4CAF50' : '#e0e0e0'}; border-radius: 12px; padding: 1.5rem;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <h3 style="margin: 0;">${block.name}</h3>
                            <span style="padding: 0.25rem 0.75rem; background: ${block.status === 'Active' ? '#E8F5E9' : block.status === 'Planning' ? '#FFF3E0' : '#f5f5f5'}; color: ${block.status === 'Active' ? '#1B5E20' : block.status === 'Planning' ? '#F57C00' : '#666'}; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                                ${block.status}
                            </span>
                        </div>
                        
                        <div style="margin-bottom: 1rem;">
                            <div style="color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">
                                📆 ${block.start} → ${block.end}
                            </div>
                            <div style="color: #666; font-size: 0.9rem;">
                                👥 ${block.students} students enrolled
                            </div>
                        </div>

                        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                            <button class="btn btn-outline btn-sm" style="flex: 1;">View Details</button>
                            <button class="btn btn-outline btn-sm" style="flex: 1;">Edit</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="appe-card">
            <h3 style="margin-bottom: 1rem;">📊 Rotation Schedule Calendar</h3>
            <div style="background: #f9f9f9; padding: 2rem; border-radius: 8px; text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📅</div>
                <p style="color: #666;">Interactive calendar view showing all rotation blocks and assignments</p>
                <button class="btn btn-primary" style="margin-top: 1rem;">View Full Calendar</button>
            </div>
        </div>
    `;
}

function renderAssignmentsView() {
    // Mock matched assignments
    const assignments = [
        { student: 'Ahmed Al-Rashid', id: 'PHD2023001', rotation: 'Ambulatory Care', site: 'King Fahad Medical City', preceptor: 'Dr. Sarah Al-Mutairi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 95 },
        { student: 'Fatima Al-Zahrani', id: 'PHD2023002', rotation: 'Acute Care', site: 'National Guard Hospital', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 88 },
        { student: 'Mohammed Al-Qahtani', id: 'PHD2023003', rotation: 'Community Pharmacy', site: 'Nahdi Pharmacy - Olaya', preceptor: 'PharmD. Khaled Al-Harbi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 92 },
        { student: 'Noura Al-Dossary', id: 'PHD2023004', rotation: 'Pediatrics', site: 'King Abdulaziz Medical City', preceptor: 'Dr. Reem Al-Shehri', start: '2026-02-01', end: '2026-03-14', preference: 3, score: 85 },
        { student: 'Abdullah Al-Harbi', id: 'PHD2023005', rotation: 'Critical Care', site: 'King Saud Medical Complex', preceptor: 'Dr. Faisal Al-Omari', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 97 }
    ];

    return `
        <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #1976D2, #1565C0); color: white;">
            <h2 style="color: white; margin-bottom: 0.5rem;">📋 Final Rotation Assignments</h2>
            <p style="opacity: 0.9; margin: 0;">AI-Optimized Matching Results - Spring 2026</p>
        </div>

        <div class="appe-card" style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem;">📊 Matching Results Summary</h3>
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="text-align: center; padding: 1rem; background: #E8F5E9; border-radius: 8px;">
                    <div style="font-size: 1.8rem; font-weight: bold; color: #1B5E20;">156</div>
                    <small style="color: #666;">Students Matched</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #E3F2FD; border-radius: 8px;">
                    <div style="font-size: 1.8rem; font-weight: bold; color: #1976D2;">92%</div>
                    <small style="color: #666;">Got Top 3 Choice</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #F3E5F5; border-radius: 8px;">
                    <div style="font-size: 1.8rem; font-weight: bold; color: #7B1FA2;">87</div>
                    <small style="color: #666;">Avg Match Score</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #FFF3E0; border-radius: 8px;">
                    <div style="font-size: 1.8rem; font-weight: bold; color: #F57C00;">0</div>
                    <small style="color: #666;">Conflicts Found</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #FFEBEE; border-radius: 8px;">
                    <div style="font-size: 1.8rem; font-weight: bold; color: #C62828;">3</div>
                    <small style="color: #666;">Manual Review</small>
                </div>
            </div>

            <div style="background: #E8F5E9; padding: 1rem; border-radius: 8px; border-left: 4px solid #4CAF50;">
                <strong>✅ Matching Completed:</strong> January 10, 2026 at 2:45 PM | Algorithm Runtime: 12.3 seconds
            </div>
        </div>

        <div class="appe-card" style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="margin: 0;">📅 Generated Schedule</h3>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-outline" onclick="filterAssignments()">🔍 Filter</button>
                    <button class="btn btn-outline" onclick="exportToExcel()">📥 Export Excel</button>
                    <button class="btn btn-primary" onclick="sendNotifications()" style="background: #1B5E20;">
                        ✉️ Notify Students
                    </button>
                </div>
            </div>

            <div class="data-table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>ID</th>
                            <th>Assigned Rotation</th>
                            <th>Site</th>
                            <th>Preceptor</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Preference Rank</th>
                            <th>Match Score</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${assignments.map(a => `
                            <tr>
                                <td><strong>${a.student}</strong></td>
                                <td>${a.id}</td>
                                <td>
                                    <div style="font-weight: 600;">${a.rotation}</div>
                                    <small style="color: #666;">6 weeks</small>
                                </td>
                                <td>${a.site}</td>
                                <td>${a.preceptor}</td>
                                <td>${a.start}</td>
                                <td>${a.end}</td>
                                <td>
                                    <span style="display: inline-block; background: ${a.preference === 1 ? '#4CAF50' : a.preference <= 3 ? '#FFC107' : '#F44336'}; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-weight: 600; font-size: 0.85rem;">
                                        #${a.preference}
                                    </span>
                                </td>
                                <td>
                                    <div style="font-weight: 600; color: ${a.score >= 90 ? '#4CAF50' : a.score >= 75 ? '#FFC107' : '#F44336'};">
                                        ${a.score}%
                                    </div>
                                </td>
                                <td>
                                    <div style="display: flex; gap: 0.5rem;">
                                        <button class="btn btn-outline btn-sm" onclick="viewScheduleDetails('${a.id}')">View</button>
                                        <button class="btn btn-outline btn-sm" onclick="editAssignment('${a.id}')">Edit</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="appe-card">
            <h3 style="margin-bottom: 1rem;">📤 Next Steps</h3>
            <div style="display: grid; gap: 1rem;">
                <div style="padding: 1rem; background: #f5f5f5; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 40px; height: 40px; background: #1B5E20; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">1</div>
                    <div>
                        <strong>Review Assignments</strong>
                        <div style="font-size: 0.9rem; color: #666;">Verify all matches meet requirements and resolve any conflicts</div>
                    </div>
                </div>
                <div style="padding: 1rem; background: #f5f5f5; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 40px; height: 40px; background: #1B5E20; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">2</div>
                    <div>
                        <strong>Send Notifications</strong>
                        <div style="font-size: 0.9rem; color: #666;">Email students with their rotation schedules and site information</div>
                    </div>
                </div>
                <div style="padding: 1rem; background: #f5f5f5; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 40px; height: 40px; background: #1B5E20; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">3</div>
                    <div>
                        <strong>Export to Calendar</strong>
                        <div style="font-size: 0.9rem; color: #666;">Generate .ics files for Google Calendar and Outlook integration</div>
                    </div>
                </div>
                <div style="padding: 1rem; background: #f5f5f5; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 40px; height: 40px; background: #1B5E20; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">4</div>
                    <div>
                        <strong>Monitor Progress</strong>
                        <div style="font-size: 0.9rem; color: #666;">Track rotation completion and evaluation submissions</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderEvaluationsView() {
    return `
        <div class="dashboard-grid" style="grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
            <div class="appe-stat-card">
                <div class="appe-stat-label">Completion Rate</div>
                <div class="appe-stat-value" style="color: #4CAF50;">98%</div>
                <small>On target</small>
            </div>
            <div class="appe-stat-card">
                <div class="appe-stat-label">Pending This Week</div>
                <div class="appe-stat-value">3</div>
                <small>Due in 5 days</small>
            </div>
            <div class="appe-stat-card">
                <div class="appe-stat-label">Overdue</div>
                <div class="appe-stat-value" style="color: #F44336;">2</div>
                <small>Escalated to admin</small>
            </div>
            <div class="appe-stat-card">
                <div class="appe-stat-label">Avg. Grade</div>
                <div class="appe-stat-value">85.3</div>
                <small>Current cohort</small>
            </div>
        </div>

        <div class="appe-card">
            <h3 style="margin-bottom: 1rem;">🤖 Automated Grade Calculation</h3>
            <div style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px;">
                <p style="font-weight: 600; margin-bottom: 1rem;">Final Grade Formula:</p>
                <p style="font-family: monospace; font-size: 1.1rem; color: #1B5E20;">
                    Final Grade = (Midpoint × 30%) + (Final Eval × 50%) + (EPA Avg × 15%) + (Attendance × 5%)
                </p>
                <p style="margin-top: 1rem; color: #666;">
                    <strong>Pass Threshold:</strong> ≥ 70% | <strong>Failing:</strong> &lt; 70% (automatic remediation flag)
                </p>
            </div>
        </div>
    `;
}

function renderEPAsView() {
    return `
        <div class="appe-card">
            <h3 style="margin-bottom: 1.5rem;">EPA Domains</h3>
            <div class="data-table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>EPA Code</th>
                            <th>Domain</th>
                            <th>Students at Level 4+</th>
                            <th>Avg. Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>EPA-1</td>
                            <td>Patient Care and Safety</td>
                            <td>85%</td>
                            <td>3.8</td>
                        </tr>
                        <tr>
                            <td>EPA-2</td>
                            <td>Medication Therapy Management</td>
                            <td>78%</td>
                            <td>3.6</td>
                        </tr>
                        <tr>
                            <td>EPA-3</td>
                            <td>Health and Wellness</td>
                            <td>82%</td>
                            <td>3.7</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="appe-card" style="margin-top: 1.5rem;">
            <h3 style="margin-bottom: 1rem;">Entrustment Levels</h3>
            <ul style="color: #666; line-height: 1.8;">
                <li><strong>Level 1:</strong> Observation Only</li>
                <li><strong>Level 2:</strong> Direct Supervision</li>
                <li><strong>Level 3:</strong> Indirect Supervision</li>
                <li><strong>Level 4:</strong> Unsupervised Practice ⭐ (Target)</li>
                <li><strong>Level 5:</strong> Able to Supervise Others</li>
            </ul>
        </div>
    `;
}

function renderPreceptorsView() {
    // Actual preceptors by rotation area
    const preceptorsByArea = {
        'Internal Medicine': [
            { name: 'Dr. Majed Alyami', title: 'Associate Professor', email: 'yamim@ksau-hs.edu.sa', ext: '95014' },
            { name: 'Dr. Omar Alshaya', title: 'Associate Professor', email: 'shayo@ksau-hs.edu.sa', ext: '95027' },
            { name: 'Dr. Fahad Aldhahri', title: 'Assistant Professor', email: 'aldhahrifa@MNGHA.MED.SA', ext: '8363' },
            { name: 'Dr. Dalal Alabdulkareem', title: 'Lecturer', email: 'abdulkareemda@MNGHA.MED.SA', ext: '6767' },
            { name: 'Dr. Abdulrahman Alturaiki', title: 'Clinical Pharmacist', email: 'alturaikiab@MNGHA.MED.SA', ext: '3209' },
            { name: 'Dr. Maha Almolaiki', title: 'Clinical Pharmacist', email: 'almolaikima@MNGHA.MED.SA', ext: '8488' },
            { name: 'Dr. Sumaya Al Mohareb', title: 'Assistant Dean, Assistant Professor', email: 'moharebsu@ksau-hs.edu.sa', ext: '99582' },
            { name: 'Dr. Kholoud Aljoudi', title: 'Assistant Professor', email: 'aljoudikh@MNGHA.MED.SA', ext: '4371' },
            { name: 'Dr. Metab Alwethairi', title: 'Clinical Pharmacy Specialist', email: 'WethairiM@MNGHA.MED.SA', ext: '10737' },
            { name: 'Dr. Abdulrahman Alamri', title: 'Assistant Professor', email: 'amriabdu@ksau-hs.edu.sa', ext: '1312' },
            { name: 'Dr. Atheer Aldairem', title: 'Assistant Professor', email: 'dairema@ksau-hs.edu.sa', ext: '99572' }
        ],
        'Intensive Care Unit (ICU)': [
            { name: 'Prof. Shmeylan Al Harbi', title: 'Associate Dean', email: 'harbish@ksau-hs.edu.sa', ext: '4501' },
            { name: 'Dr. Abdulrahman Alshaya', title: 'Assistant Professor', email: 'shayaab@ksau-hs.edu.sa', ext: '95089' },
            { name: 'Dr. Jawaher Algramish', title: 'Associate Professor', email: 'GramishJ@MNGHA.MED.SA', ext: '1941' },
            { name: 'Dr. Rahaf Alqahtani', title: 'Clinical Pharmacist', email: 'alqahtanira@MNGHA.MED.SA', ext: '9733' },
            { name: 'Dr. Lolowa Alswaidan', title: 'Assistant Professor', email: 'swaidanl@MNGHA.MED.SA', ext: '4640' },
            { name: 'Dr. Khalid Alsulaiman', title: 'Assistant Professor', email: 'alsulaimankh@MNGHA.MED.SA', ext: '6432' },
            { name: 'Dr. Nouf Alharthi', title: 'Clinical Pharmacist', email: 'alharthino@MNGHA.MED.SA', ext: '3867' },
            { name: 'Dr. Maram Aldossari', title: 'Clinical Pharmacist', email: 'Aldossarima6@MNGHA.MED.SA', ext: '7588' },
            { name: 'Dr. Maha Assadoon', title: 'Clinical Pharmacist', email: 'ASSADOONMA@MNGHA.MED.SA', ext: '2908' },
            { name: 'Dr. Abdulmajeed Alshehri', title: 'Assistant Professor', email: 'shehriabdul@ksau-hs.edu.sa', ext: '95077' }
        ],
        'Cardiology': [
            { name: 'Dr. Lama Alfehaid', title: 'Assistant Professor Statistics', email: 'fehaidl@ksau-hs.edu.sa', ext: '95008' },
            { name: 'Dr. Hisham Badreldin', title: 'Associate Professor', email: 'aldeenh@ksau-hs.edu.sa', ext: '95103' },
            { name: 'Dr. Sarah Alyousif', title: 'Assistant Professor', email: 'yousifs@MNGHA.MED.SA', ext: '7573' },
            { name: 'Dr. Majed Almutairi', title: 'Clinical Pharmacist', email: 'Almutairima27@MNGHA.MED.SA', ext: '8862' },
            { name: 'Dr. Sultan Al Raddadi', title: 'Clinical Pharmacist', email: 'raddadis@ngha.med.sa', ext: '15529' },
            { name: 'Dr. Alaa Al Anazi', title: 'Clinical Pharmacist', email: 'Alenazi-alenazial3@MNGHA.MED.SA', ext: '' }
        ],
        'Oncology/Hematology': [
            { name: 'Dr. Nada Alsuhebany', title: 'Assistant Professor', email: 'suhebanyn@ksau-hs.edu.sa', ext: '95072' },
            { name: 'Dr. Ghada Alyousif', title: 'Associate Clinical Pharmacist', email: 'alyousifgh@MNGHA.MED.SA', ext: '2899' },
            { name: 'Dr. Dema Almolaiki', title: 'Associate Clinical Pharmacist', email: 'almolaikide@MNGHA.MED.SA', ext: '51378' },
            { name: 'Dr. Maha AlDoughaim', title: 'Assistant Professor', email: 'doughaimm@ksau-hs.edu.sa', ext: '95074' },
            { name: 'Dr. Mohammed Al Zahrani', title: 'Assistant Professor', email: 'alzahranimoham@ksau-hs.edu.sa', ext: '95042' }
        ],
        'Pediatrics': [
            { name: 'Dr. Diana Almutairi', title: 'Clinical Pharmacist', email: 'almutairidi@MNGHA.MED.SA', ext: '6910' },
            { name: 'Dr. Meshary Almeshary', title: 'Clinical Pharmacist', email: 'almesharyme@MNGHA.MED.SA', ext: '7285' },
            { name: 'Dr. Reham Alhoraibi', title: 'Clinical Pharmacist', email: 'alhoraibire@MNGHA.MED.SA', ext: '6683' },
            { name: 'Dr. Kholoud Alaamer', title: 'Clinical Pharmacist', email: 'alaamerkh@MNGHA.MED.SA', ext: '9991' },
            { name: 'Dr. Hessa Almuqati', title: 'Clinical Pharmacist', email: 'almuqatihe@MNGHA.MED.SA', ext: '9138' },
            { name: 'Dr. Shaima Alshareef', title: 'Clinical Pharmacist', email: 'alshareefsh@MNGHA.MED.SA', ext: '6942' }
        ]
    };

    const allPreceptors = [];
    Object.keys(preceptorsByArea).forEach(area => {
        preceptorsByArea[area].forEach(p => {
            allPreceptors.push({ ...p, area });
        });
    });

    return `
        <div class="appe-card" style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <div>
                    <h2 style="margin: 0 0 0.5rem 0;">👨‍⚕️ Preceptor Directory</h2>
                    <p style="color: #666; margin: 0;">KSAU-HS Clinical Faculty & Preceptors</p>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-outline">📥 Export List</button>
                    <button class="btn btn-primary">+ Add Preceptor</button>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
                <div style="text-align: center; padding: 1rem; background: #E8F5E9; border-radius: 8px;">
                    <div style="font-size: 2rem; font-weight: bold; color: #1B5E20;">${allPreceptors.length}</div>
                    <small style="color: #666;">Total Preceptors</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #E3F2FD; border-radius: 8px;">
                    <div style="font-size: 2rem; font-weight: bold; color: #1976D2;">${Object.keys(preceptorsByArea).length}</div>
                    <small style="color: #666;">Specialty Areas</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #F3E5F5; border-radius: 8px;">
                    <div style="font-size: 2rem; font-weight: bold; color: #7B1FA2;">156</div>
                    <small style="color: #666;">Students Assigned</small>
                </div>
            </div>

            <div style="margin-bottom: 1rem;">
                <input type="text" class="form-control" placeholder="🔍 Search preceptors by name, area, or email..." style="max-width: 500px;">
            </div>
        </div>

        <div class="appe-card">
            <div class="data-table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Rotation Area</th>
                            <th>Email</th>
                            <th>Ext.</th>
                            <th>Current Load</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${allPreceptors.slice(0, 20).map(p => `
                            <tr>
                                <td><strong>${p.name}</strong></td>
                                <td>${p.title}</td>
                                <td>
                                    <span style="background: #E8F5E9; color: #1B5E20; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.85rem;">
                                        ${p.area}
                                    </span>
                                </td>
                                <td><a href="mailto:${p.email}" style="color: #1976D2;">${p.email}</a></td>
                                <td>${p.ext}</td>
                                <td>
                                    <div style="font-weight: 600;">${Math.floor(Math.random() * 6) + 1} students</div>
                                    <small style="color: #666;">Max: 6</small>
                                </td>
                                <td>
                                    <div style="display: flex; gap: 0.5rem;">
                                        <button class="btn btn-outline btn-sm">View</button>
                                        <button class="btn btn-outline btn-sm">Edit</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                        ${allPreceptors.length > 20 ? `
                            <tr>
                                <td colspan="7" style="text-align: center; padding: 1rem; color: #666;">
                                    <em>Showing 20 of ${allPreceptors.length} preceptors. Use search to find more.</em>
                                </td>
                            </tr>
                        ` : ''}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="appe-card" style="margin-top: 1.5rem;">
            <h3 style="margin-bottom: 1rem;">📊 Preceptor Distribution by Area</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                ${Object.entries(preceptorsByArea).map(([area, precs]) => `
                    <div style="padding: 1rem; background: #f9f9f9; border-radius: 8px; border-left: 4px solid #1B5E20;">
                        <strong>${area}</strong>
                        <div style="color: #666; font-size: 0.9rem; margin-top: 0.25rem;">
                            ${precs.length} preceptors | Capacity: ${precs.length * 6} students
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSitesView() {
    const sites = [
        { name: 'King Abdulaziz Medical City (KAMC)', city: 'Riyadh', type: 'Teaching Hospital', capacity: 45, current: 42, status: 'Active', agreement: 'Valid until 2028' },
        { name: 'King Fahad Medical City', city: 'Riyadh', type: 'Tertiary Hospital', capacity: 30, current: 28, status: 'Active', agreement: 'Valid until 2027' },
        { name: 'National Guard Hospital', city: 'Riyadh', type: 'Teaching Hospital', capacity: 35, current: 31, status: 'Active', agreement: 'Valid until 2029' },
        { name: 'King Saud Medical Complex', city: 'Riyadh', type: 'Tertiary Hospital', capacity: 25, current: 20, status: 'Active', agreement: 'Valid until 2026' },
        { name: 'Nahdi Pharmacy - Multiple Locations', city: 'Riyadh', type: 'Community Pharmacy', capacity: 20, current: 18, status: 'Active', agreement: 'Valid until 2027' },
        { name: 'King Abdulaziz Residential City', city: 'Riyadh', type: 'Primary Care', capacity: 15, current: 12, status: 'Active', agreement: 'Valid until 2028' },
        { name: 'KASCH (Specialized Hospital)', city: 'Riyadh', type: 'Specialized Hospital', capacity: 28, current: 25, status: 'Active', agreement: 'Valid until 2027' },
        { name: 'Saudi FDA', city: 'Riyadh', type: 'Regulatory', capacity: 5, current: 2, status: 'Active', agreement: 'Valid until 2029' }
    ];

    return `
        <div class="appe-card" style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <div>
                    <h2 style="margin: 0 0 0.5rem 0;">🏥 Training Sites Directory</h2>
                    <p style="color: #666; margin: 0;">Clinical sites and affiliation management</p>
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-outline">📥 Export List</button>
                    <button class="btn btn-primary">+ Add New Site</button>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
                <div style="text-align: center; padding: 1rem; background: #E8F5E9; border-radius: 8px;">
                    <div style="font-size: 2rem; font-weight: bold; color: #1B5E20;">${sites.length}</div>
                    <small style="color: #666;">Active Sites</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #E3F2FD; border-radius: 8px;">
                    <div style="font-size: 2rem; font-weight: bold; color: #1976D2;">${sites.reduce((sum, s) => sum + s.capacity, 0)}</div>
                    <small style="color: #666;">Total Capacity</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #F3E5F5; border-radius: 8px;">
                    <div style="font-size: 2rem; font-weight: bold; color: #7B1FA2;">${sites.reduce((sum, s) => sum + s.current, 0)}</div>
                    <small style="color: #666;">Current Students</small>
                </div>
                <div style="text-align: center; padding: 1rem; background: #FFF3E0; border-radius: 8px;">
                    <div style="font-size: 2rem; font-weight: bold; color: #F57C00;">${Math.round((sites.reduce((sum, s) => sum + s.current, 0) / sites.reduce((sum, s) => sum + s.capacity, 0)) * 100)}%</div>
                    <small style="color: #666;">Utilization Rate</small>
                </div>
            </div>

            <div style="margin-bottom: 1rem;">
                <input type="text" class="form-control" placeholder="🔍 Search sites by name, city, or type..." style="max-width: 500px;">
            </div>
        </div>

        <div class="appe-card">
            <div class="data-table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Site Name</th>
                            <th>City</th>
                            <th>Type</th>
                            <th>Capacity</th>
                            <th>Current Students</th>
                            <th>Utilization</th>
                            <th>Status</th>
                            <th>Agreement</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sites.map(site => {
                            const utilization = Math.round((site.current / site.capacity) * 100);
                            const utilizationColor = utilization >= 90 ? '#F44336' : utilization >= 75 ? '#FFC107' : '#4CAF50';
                            
                            return `
                            <tr>
                                <td><strong>${site.name}</strong></td>
                                <td>${site.city}</td>
                                <td>
                                    <span style="background: #E3F2FD; color: #1976D2; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.85rem;">
                                        ${site.type}
                                    </span>
                                </td>
                                <td>${site.capacity} students</td>
                                <td>${site.current} students</td>
                                <td>
                                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                                        <div style="flex: 1; background: #f0f0f0; border-radius: 4px; height: 8px; overflow: hidden;">
                                            <div style="width: ${utilization}%; background: ${utilizationColor}; height: 100%;"></div>
                                        </div>
                                        <span style="font-weight: 600; color: ${utilizationColor};">${utilization}%</span>
                                    </div>
                                </td>
                                <td>
                                    <span style="background: #E8F5E9; color: #1B5E20; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                                        ${site.status}
                                    </span>
                                </td>
                                <td>
                                    <div style="font-size: 0.9rem; color: #666;">${site.agreement}</div>
                                </td>
                                <td>
                                    <div style="display: flex; gap: 0.5rem;">
                                        <button class="btn btn-outline btn-sm">View</button>
                                        <button class="btn btn-outline btn-sm">Edit</button>
                                    </div>
                                </td>
                            </tr>
                        `}).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="appe-card" style="margin-top: 1.5rem;">
            <h3 style="margin-bottom: 1rem;">📍 Sites by Type</h3>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                <div style="padding: 1rem; background: #E8F5E9; border-radius: 8px; border-left: 4px solid #1B5E20;">
                    <strong>Teaching Hospitals</strong>
                    <div style="color: #666; font-size: 0.9rem; margin-top: 0.25rem;">
                        2 sites | 80 capacity
                    </div>
                </div>
                <div style="padding: 1rem; background: #E3F2FD; border-radius: 8px; border-left: 4px solid #1976D2;">
                    <strong>Tertiary Hospitals</strong>
                    <div style="color: #666; font-size: 0.9rem; margin-top: 0.25rem;">
                        2 sites | 55 capacity
                    </div>
                </div>
                <div style="padding: 1rem; background: #F3E5F5; border-radius: 8px; border-left: 4px solid #7B1FA2;">
                    <strong>Community Pharmacy</strong>
                    <div style="color: #666; font-size: 0.9rem; margin-top: 0.25rem;">
                        1 site | 20 capacity
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderReportsView() {
    const reports = [
        { icon: '📊', title: 'Compliance Summary', desc: 'Student readiness overview by cohort' },
        { icon: '📅', title: 'Rotation Completion', desc: 'Completion rates by block and program' },
        { icon: '📝', title: 'Evaluation Completion', desc: 'Preceptor compliance and timeliness' },
        { icon: '🏥', title: 'Site Utilization', desc: 'Capacity analysis by site and city' },
        { icon: '👨‍⚕️', title: 'Preceptor Workload', desc: 'Student distribution and performance' },
        { icon: '🎓', title: 'Accreditation Evidence', desc: 'ACPE/NCAAA ready evidence packs' }
    ];

    return `
        <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
            ${reports.map(r => `
                <div class="appe-card" style="cursor: pointer; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform=''">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">${r.icon}</div>
                    <h4>${r.title}</h4>
                    <p style="color: #666; font-size: 0.9rem; margin-top: 0.5rem;">${r.desc}</p>
                    <button class="btn btn-outline btn-sm" style="margin-top: 1rem;">Generate Report</button>
                </div>
            `).join('')}
        </div>
    `;
}

function renderAutomationView() {
    return `
        <div class="appe-card">
            <h3 style="margin-bottom: 1.5rem;">Scheduled Automation Jobs</h3>
            <div class="data-table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Job Name</th>
                            <th>Schedule</th>
                            <th>Last Run</th>
                            <th>Next Run</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Daily Compliance Check</td>
                            <td>Every day at 3:00 AM</td>
                            <td>Today at 3:00 AM</td>
                            <td>Tomorrow at 3:00 AM</td>
                            <td><span class="compliance-status green"><span class="status-dot green"></span>Active</span></td>
                        </tr>
                        <tr>
                            <td>Evaluation Reminders</td>
                            <td>Every day at 8:00 AM</td>
                            <td>Today at 8:00 AM</td>
                            <td>Tomorrow at 8:00 AM</td>
                            <td><span class="compliance-status green"><span class="status-dot green"></span>Active</span></td>
                        </tr>
                        <tr>
                            <td>License Expiry Check</td>
                            <td>Every Sunday at 2:00 AM</td>
                            <td>Jan 7, 2026</td>
                            <td>Jan 14, 2026</td>
                            <td><span class="compliance-status green"><span class="status-dot green"></span>Active</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// Add CSS to style compliance status badges
const style = document.createElement('style');
style.textContent = `
    .compliance-status {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 14px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 0.85rem;
    }
    .compliance-status.green {
        background: #E8F5E9;
        color: #2E7D32;
    }
    .compliance-status.yellow {
        background: #FFF9C4;
        color: #F57F17;
    }
    .compliance-status.red {
        background: #FFEBEE;
        color: #C62828;
    }
    .status-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }
    .status-dot.green { background: #4CAF50; }
    .status-dot.yellow { background: #FFC107; }
    .status-dot.red { background: #F44336; }
`;
document.head.appendChild(style);

// Initialize default section and setup navigation
window.activeAPPESection = 'dashboard';

// Helper Functions for Interactive Features
window.submitPreferences = function() {
    alert('✅ Preferences submitted successfully!\n\nYour rotation preferences have been saved. You will be notified via email once the matching algorithm runs on January 25, 2026.');
};

window.movePreference = function(index, direction) {
    alert(`Moving preference ${index + 1} ${direction > 0 ? 'down' : 'up'}`);
};

window.viewRotationDetails = function(rotationId) {
    alert(`Viewing details for rotation: ${rotationId}\n\nThis would show:\n- Site locations\n- Preceptor bios\n- Required competencies\n- Previous student feedback`);
};

window.runMatchingAlgorithm = function() {
    const confirmed = confirm('🚀 Run Automated Matching?\n\nThis will:\n1. Process all 138 student preferences\n2. Match students with available sites/preceptors\n3. Generate optimized rotation schedules\n4. Send email notifications\n\nEstimated runtime: 10-15 seconds\n\nContinue?');
    
    if (confirmed) {
        alert('⏳ Running matching algorithm...\n\nProcessing:\n- Student preferences\n- Site capacity\n- Preceptor availability\n- Geographic optimization\n\n✅ Matching complete! View results in the Assignments tab.');
        window.switchAPPESection('assignments');
    }
};

window.previewMatchResults = function() {
    alert('👁️ Preview Mode\n\nThis would show:\n- Projected match scores\n- Preference distribution\n- Potential conflicts\n- Optimization suggestions');
};

window.exportMatchingReport = function() {
    alert('📥 Exporting Matching Report...\n\nGenerating PDF with:\n- Algorithm configuration\n- Match statistics\n- Student assignments\n- Quality metrics');
};

window.sendNotifications = function() {
    const confirmed = confirm('✉️ Send Email Notifications to All Students?\n\n156 students will receive:\n- Their rotation assignment\n- Site details and contact\n- Preceptor information\n- Start/end dates\n- Preparation checklist\n\nContinue?');
    
    if (confirmed) {
        alert('✅ Notifications Sent!\n\n156 emails queued for delivery\nEstimated delivery: 5-10 minutes');
    }
};

window.filterAssignments = function() {
    alert('🔍 Filter assignments by:\n- Rotation type\n- Site\n- Preceptor\n- Date range\n- Match score');
};

window.exportToExcel = function() {
    alert('📥 Exporting to Excel...\n\nGenerating spreadsheet with all assignments');
};

window.viewScheduleDetails = function(studentId) {
    alert(`Viewing full schedule for student ${studentId}\n\nIncludes:\n- Full rotation calendar\n- Site contact information\n- Orientation dates\n- Required documentation`);
};

window.editAssignment = function(studentId) {
    alert(`Edit assignment for student ${studentId}\n\n(Admin override - use with caution)`);
};

// ========================================
// DATA MANAGEMENT VIEW
// ========================================

function renderDataManagementView() {
    const activeTab = window.dataManagementTab || 'students';
    
    return `
        <div class="appe-card" style="margin-bottom: 1.5rem;">
            <h2 style="margin: 0 0 1rem 0;">⚙️ Data Management Center</h2>
            <p style="color: #666; margin: 0;">Centralized hub for editing and managing all APPE data</p>
        </div>
        
        <!-- Sub-tabs for different data types -->
        <div class="appe-card" style="margin-bottom: 1.5rem; padding: 0.75rem;">
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button onclick="window.switchDataTab('students')" class="btn ${activeTab === 'students' ? 'btn-primary' : 'btn-outline'}" style="flex: 1; min-width: 120px;">
                    👨‍🎓 Students
                </button>
                <button onclick="window.switchDataTab('rotations')" class="btn ${activeTab === 'rotations' ? 'btn-primary' : 'btn-outline'}" style="flex: 1; min-width: 120px;">
                    📅 Rotations
                </button>
                <button onclick="window.switchDataTab('preceptors')" class="btn ${activeTab === 'preceptors' ? 'btn-primary' : 'btn-outline'}" style="flex: 1; min-width: 120px;">
                    👨‍⚕️ Preceptors
                </button>
                <button onclick="window.switchDataTab('sites')" class="btn ${activeTab === 'sites' ? 'btn-primary' : 'btn-outline'}" style="flex: 1; min-width: 120px;">
                    🏥 Sites
                </button>
                <button onclick="window.switchDataTab('settings')" class="btn ${activeTab === 'settings' ? 'btn-primary' : 'btn-outline'}" style="flex: 1; min-width: 120px;">
                    ⚙️ Settings
                </button>
            </div>
        </div>
        
        <!-- Content area based on active tab -->
        <div id="data-management-content">
            ${renderDataManagementTab(activeTab)}
        </div>
    `;
}

function renderDataManagementTab(tab) {
    switch(tab) {
        case 'students':
            return renderStudentDataEditor();
        case 'rotations':
            return renderRotationDataEditor();
        case 'preceptors':
            return renderPreceptorDataEditor();
        case 'sites':
            return renderSiteDataEditor();
        case 'settings':
            return renderSystemSettings();
        default:
            return '<p>Select a data type to manage</p>';
    }
}

function renderStudentDataEditor() {
    return `
        <div class="appe-card" style="margin-bottom: 1.5rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="margin: 0 0 0.5rem 0; color: white;">📋 Student Information Portal</h3>
                    <p style="margin: 0; opacity: 0.9; font-size: 0.9rem;">Students submit their info → Admin reviews → Approve/Reject</p>
                </div>
                <a href="student-portal.html" target="_blank" class="btn" style="background: white; color: #667eea; padding: 0.75rem 1.5rem; text-decoration: none;">
                    🔗 Open Student Portal
                </a>
            </div>
        </div>

        <!-- Pending Submissions Alert -->
        <div class="appe-card" style="margin-bottom: 1.5rem; background: #FFF3E0; border-left: 4px solid #FF9800;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong style="color: #E65100;">⏳ Pending Review:</strong>
                    <span style="color: #666; margin-left: 0.5rem;" id="pendingCount">0 new submissions</span>
                </div>
                <button onclick="window.reviewSubmissions()" class="btn btn-primary">
                    📥 Review Submissions
                </button>
            </div>
        </div>

        <div class="appe-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="margin: 0;">📊 Student Database (59 students)</h3>
                <button onclick="window.addNewStudent()" class="btn btn-primary">+ Add New Student</button>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <input type="text" id="studentSearchBox" class="form-control" placeholder="🔍 Search by name or ID..." style="max-width: 400px;">
            </div>
            
            <div style="overflow-x: auto;">
                <table class="data-table" style="width: 100%; border-collapse: collapse;">
                    <thead style="background: #f5f7fa;">
                        <tr>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Student ID</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Name</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Program</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Compliance</th>
                            <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #ddd;">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="studentEditTableBody">
                        ${renderStudentEditRows()}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderStudentEditRows() {
    // All 59 APPE students
    const students = [
        { id: '38-1-1-1-0601', name: 'Mohammad Fares Almoteb', program: 'PharmD Y5', compliance: 'green' },
        { id: '39-1-1-1-0116', name: 'Nasser Trad Aldosari', program: 'PharmD Y5', compliance: 'green' },
        { id: '41-1-1-1-0050', name: 'Abdullah Ibrahim Alkhulaifi', program: 'PharmD Y5', compliance: 'green' },
        { id: '41-1-1-1-0152', name: 'Saud Enad Alanazi', program: 'PharmD Y5', compliance: 'green' },
        { id: '41-1-1-1-0350', name: 'Batal Muhayya Aldosari', program: 'PharmD Y5', compliance: 'yellow' },
        { id: '41-1-1-1-0523', name: 'Faisal Mohammed Alshehri', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0017', name: 'Ahmed Murdhi Alharbi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0055', name: 'Bandar Sultan Aldawish', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0076', name: 'Hamad Mohammed Alkhalaf', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0114', name: 'Riadh Mansor Arrais', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0148', name: 'Sultan Ali Aljardan', program: 'PharmD Y5', compliance: 'yellow' },
        { id: '42-1-1-1-0192', name: 'Abdulrahman Sulaiman Alossimi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0208', name: 'Abdulrahman Majid Almadi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0210', name: 'Abdulsalam Zarea Alanazi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0236', name: 'Abdulaziz Abdulrahman Alarifi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0271', name: 'Abdulmajeed Mohammed Alsuwaylihi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0296', name: 'Faris Salem Althobiti', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0313', name: 'Fahad Ali Alomair', program: 'PharmD Y5', compliance: 'yellow' },
        { id: '42-1-1-1-0315', name: 'Fahad Faisal Almutiri', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0358', name: 'Mohammed Ibrahim Al Rudhyyan', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0381', name: 'Mohammed Abdulrahman Almahanna', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0387', name: 'Mohammad Abdulwahab Alfafi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-1-1-0394', name: 'Mohammed Farhan Alotebe', program: 'PharmD Y5', compliance: 'green' },
        { id: '39-1-2-1-0303', name: 'Sarah Saud Abdulaziz Bindulaym', program: 'PharmD Y5', compliance: 'green' },
        { id: '41-1-2-1-0040', name: 'Sham Abdullah Al Enazi', program: 'PharmD Y5', compliance: 'green' },
        { id: '41-1-2-1-0102', name: 'Dana Emad Aloumi', program: 'PharmD Y5', compliance: 'green' },
        { id: '41-1-2-1-0251', name: 'Yara Munif Alshammari', program: 'PharmD Y5', compliance: 'green' },
        { id: '41-1-2-1-0284', name: 'Raghad Faisal Alwail', program: 'PharmD Y5', compliance: 'yellow' },
        { id: '42-1-2-1-0009', name: 'Albatoul Omran Alomran', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0014', name: 'Alhanouf Khaled Almisfer', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0019', name: 'Amal Mohammed Aleanzi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0031', name: 'Jinan Abdulrahman Alhuwayshil', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0033', name: 'Jod Amer Mohammed Aljuaidi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0038', name: 'Hissah Mohammed Alkyssir', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0040', name: 'Hussh Naif Albahlal', program: 'PharmD Y5', compliance: 'yellow' },
        { id: '42-1-2-1-0047', name: 'Khuzama Hamoud J Alamri', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0048', name: 'Khawla Ahmed Alrubayan', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0085', name: 'Ragad Khlaf Alenazi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0087', name: 'Raghad Saleh Abdullah Alajmi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0091', name: 'Raghad Sulaiman K Almutairi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0103', name: 'Raneem Muharib Alanazi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0112', name: 'Ruwayda Saeed Mohammed Alshahrani', program: 'PharmD Y5', compliance: 'yellow' },
        { id: '42-1-2-1-0136', name: 'Ruyuf Abdullah Alshuqayr', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0154', name: 'Sarah Abdulaziz Bin Saqyah', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0161', name: 'Sadeem Abdulaziz Alamri', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0178', name: 'Shaden Abdullah Alharbi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0183', name: 'Shoroog Saad Faleh Al Otaibi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0194', name: 'Shoug Khalid Almousa', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0211', name: 'Ohoud Mansour M Almutairi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0217', name: 'Ghadah Meteb Alsanoni', program: 'PharmD Y5', compliance: 'yellow' },
        { id: '42-1-2-1-0219', name: 'Ghala Salem Obidalullh Alharbi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0221', name: 'Ghala Mohammad B Alomari', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0250', name: 'Lama Ibrahim Alfehaid', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0270', name: 'Lina Moshrif Alamri', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0275', name: 'Mashael Abdullah Almutairi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0276', name: 'Manar Mohammed Al Arifi', program: 'PharmD Y5', compliance: 'red' },
        { id: '42-1-2-1-0284', name: 'Monirah Saleh N Alotaibi', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0286', name: 'Muneerah Faisal Al Boushal', program: 'PharmD Y5', compliance: 'green' },
        { id: '42-1-2-1-0327', name: 'Nouf Abdulaziz Alnajim', program: 'PharmD Y5', compliance: 'green' }
    ];
    
    return students.map(s => `
        <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 0.75rem;">${s.id}</td>
            <td style="padding: 0.75rem;">${s.name}</td>
            <td style="padding: 0.75rem;">${s.program}</td>
            <td style="padding: 0.75rem;">
                <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: ${s.compliance};"></span>
                ${s.compliance === 'green' ? 'Compliant' : s.compliance === 'yellow' ? 'Warning' : 'Issue'}
            </td>
            <td style="padding: 0.75rem; text-align: center;">
                <button onclick="window.editStudentData('${s.id}')" class="btn btn-sm" style="padding: 0.25rem 0.75rem; margin-right: 0.5rem;">✏️ Edit</button>
                <button onclick="window.deleteStudent('${s.id}')" class="btn btn-sm" style="padding: 0.25rem 0.75rem; background: #dc3545; color: white;">🗑️ Delete</button>
            </td>
        </tr>
    `).join('');
}

function renderRotationDataEditor() {
    return `
        <div class="appe-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="margin: 0;">Edit Rotations</h3>
                <button onclick="window.addNewRotation()" class="btn btn-primary">+ Add New Rotation</button>
            </div>
            
            <div style="overflow-x: auto;">
                <table class="data-table" style="width: 100%; border-collapse: collapse;">
                    <thead style="background: #f5f7fa;">
                        <tr>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Rotation Name</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Area</th>
                            <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #ddd;">Slots</th>
                            <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #ddd;">Preceptors</th>
                            <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #ddd;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${renderRotationEditRows()}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderRotationEditRows() {
    const rotations = [
        { name: 'Internal Medicine', area: 'Internal Medicine', slots: 15, preceptors: 11 },
        { name: 'ICU', area: 'Critical Care', slots: 10, preceptors: 10 },
        { name: 'Community Pharmacy', area: 'Community Practice', slots: 12, preceptors: 8 },
        { name: 'Institutional Pharmacy', area: 'Institutional', slots: 10, preceptors: 7 },
        { name: 'Nephrology', area: 'Internal Medicine', slots: 6, preceptors: 5 },
        { name: 'Solid Organ Transplant (SOT)', area: 'Internal Medicine', slots: 4, preceptors: 3 },
        { name: 'Oncology/Hematology', area: 'Oncology/Hematology', slots: 6, preceptors: 5 },
        { name: 'Pediatrics', area: 'Pediatrics', slots: 8, preceptors: 6 },
        { name: 'NICU', area: 'Pediatrics', slots: 5, preceptors: 4 },
        { name: 'Admin', area: 'Administration', slots: 8, preceptors: 5 },
        { name: 'Drug Information Center (DIC)', area: 'Clinical Services', slots: 6, preceptors: 4 },
        { name: 'Pharmacoeconomics', area: 'Clinical Services', slots: 5, preceptors: 3 },
        { name: 'Surgery', area: 'Surgery', slots: 5, preceptors: 3 },
        { name: 'Drug Manufacturing', area: 'Industry', slots: 4, preceptors: 2 },
        { name: 'Drug Company', area: 'Industry', slots: 4, preceptors: 2 },
        { name: 'Medication Safety', area: 'Quality', slots: 6, preceptors: 4 },
        { name: 'Quality Assurance (QA)', area: 'Quality', slots: 6, preceptors: 4 },
        { name: 'Infectious Diseases (ID)', area: 'Internal Medicine', slots: 6, preceptors: 5 },
        { name: 'Academia', area: 'Education', slots: 8, preceptors: 6 },
        { name: 'Health Informatics', area: 'Technology', slots: 5, preceptors: 3 },
        { name: 'Outpatient', area: 'Ambulatory Care', slots: 10, preceptors: 7 },
        { name: 'Cardiology', area: 'Cardiology', slots: 8, preceptors: 6 },
        { name: 'SFDA', area: 'Regulatory', slots: 4, preceptors: 2 },
        { name: 'Emergency Medicine', area: 'Emergency', slots: 6, preceptors: 4 },
        { name: 'Research', area: 'Research', slots: 6, preceptors: 4 },
        { name: 'Medical Research Center (MRC)', area: 'Research', slots: 4, preceptors: 3 }
    ];
    
    return rotations.map(r => `
        <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 0.75rem;"><strong>${r.name}</strong></td>
            <td style="padding: 0.75rem;">${r.area}</td>
            <td style="padding: 0.75rem; text-align: center;">${r.slots}</td>
            <td style="padding: 0.75rem; text-align: center;">${r.preceptors}</td>
            <td style="padding: 0.75rem; text-align: center;">
                <button onclick="window.editRotationData('${r.name}')" class="btn btn-sm" style="padding: 0.25rem 0.75rem; margin-right: 0.5rem;">✏️ Edit</button>
                <button onclick="window.deleteRotation('${r.name}')" class="btn btn-sm" style="padding: 0.25rem 0.75rem; background: #dc3545; color: white;">🗑️ Delete</button>
            </td>
        </tr>
    `).join('');
}

function renderPreceptorDataEditor() {
    return `
        <div class="appe-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="margin: 0;">Edit Preceptors</h3>
                <button onclick="window.addNewPreceptor()" class="btn btn-primary">+ Add New Preceptor</button>
            </div>
            
            <div style="margin-bottom: 1rem;">
                <input type="text" class="form-control" placeholder="🔍 Search by name, specialty, or email..." style="max-width: 400px;">
            </div>
            
            <div style="overflow-x: auto;">
                <table class="data-table" style="width: 100%; border-collapse: collapse;">
                    <thead style="background: #f5f7fa;">
                        <tr>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Name</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Title</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Specialty</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Email</th>
                            <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #ddd;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${renderPreceptorEditRows()}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderPreceptorEditRows() {
    const preceptors = [
        // Internal Medicine
        { name: 'Dr. Majed Alyami', title: 'Associate Professor', specialty: 'Internal Medicine', email: 'yamim@ksau-hs.edu.sa', ext: '95014' },
        { name: 'Dr. Omar Alshaya', title: 'Associate Professor', specialty: 'Internal Medicine', email: 'shayo@ksau-hs.edu.sa', ext: '95027' },
        { name: 'Dr. Fahad Aldhahri', title: 'Assistant Professor', specialty: 'Internal Medicine', email: 'aldhahrifa@MNGHA.MED.SA', ext: '8363' },
        { name: 'Dr. Dalal Alabdulkareem', title: 'Lecturer', specialty: 'Internal Medicine', email: 'abdulkareemda@MNGHA.MED.SA', ext: '6767' },
        { name: 'Dr. Abdulrahman Alturaiki', title: 'Clinical Pharmacist', specialty: 'Internal Medicine', email: 'alturaikiab@MNGHA.MED.SA', ext: '3209' },
        { name: 'Dr. Maha Almolaiki', title: 'Clinical Pharmacist', specialty: 'Internal Medicine', email: 'almolaikima@MNGHA.MED.SA', ext: '8488' },
        { name: 'Dr. Sumaya Al Mohareb', title: 'Assistant Dean, Assistant Professor', specialty: 'Internal Medicine', email: 'moharebsu@ksau-hs.edu.sa', ext: '99582' },
        { name: 'Dr. Kholoud Aljoudi', title: 'Assistant Professor', specialty: 'Internal Medicine', email: 'aljoudikh@MNGHA.MED.SA', ext: '4371' },
        { name: 'Dr. Metab Alwethairi', title: 'Clinical Pharmacy Specialist', specialty: 'Internal Medicine', email: 'WethairiM@MNGHA.MED.SA', ext: '10737' },
        { name: 'Dr. Abdulrahman Alamri', title: 'Assistant Professor', specialty: 'Internal Medicine', email: 'amriabdu@ksau-hs.edu.sa', ext: '1312' },
        { name: 'Dr. Atheer Aldairem', title: 'Assistant Professor', specialty: 'Internal Medicine', email: 'dairema@ksau-hs.edu.sa', ext: '99572' },
        // ICU
        { name: 'Prof. Shmeylan Al Harbi', title: 'Associate Dean', specialty: 'ICU', email: 'harbish@ksau-hs.edu.sa', ext: '4501' },
        { name: 'Dr. Abdulrahman Alshaya', title: 'Assistant Professor', specialty: 'ICU', email: 'shayaab@ksau-hs.edu.sa', ext: '95089' },
        { name: 'Dr. Jawaher Algramish', title: 'Associate Professor', specialty: 'ICU', email: 'GramishJ@MNGHA.MED.SA', ext: '1941' },
        { name: 'Dr. Rahaf Alqahtani', title: 'Clinical Pharmacist', specialty: 'ICU', email: 'alqahtanira@MNGHA.MED.SA', ext: '9733' },
        { name: 'Dr. Lolowa Alswaidan', title: 'Assistant Professor', specialty: 'ICU', email: 'swaidanl@MNGHA.MED.SA', ext: '4640' },
        { name: 'Dr. Khalid Alsulaiman', title: 'Assistant Professor', specialty: 'ICU', email: 'alsulaimankh@MNGHA.MED.SA', ext: '6432' },
        { name: 'Dr. Nouf Alharthi', title: 'Clinical Pharmacist', specialty: 'ICU', email: 'alharthino@MNGHA.MED.SA', ext: '3867' },
        { name: 'Dr. Maram Aldossari', title: 'Clinical Pharmacist', specialty: 'ICU', email: 'Aldossarima6@MNGHA.MED.SA', ext: '7588' },
        { name: 'Dr. Maha Assadoon', title: 'Clinical Pharmacist', specialty: 'ICU', email: 'ASSADOONMA@MNGHA.MED.SA', ext: '2908' },
        { name: 'Dr. Abdulmajeed Alshehri', title: 'Assistant Professor', specialty: 'ICU', email: 'shehriabdul@ksau-hs.edu.sa', ext: '95077' },
        // Cardiology
        { name: 'Dr. Lama Alfehaid', title: 'Assistant Professor Statistics', specialty: 'Cardiology', email: 'fehaidl@ksau-hs.edu.sa', ext: '95008' },
        { name: 'Dr. Hisham Badreldin', title: 'Associate Professor', specialty: 'Cardiology', email: 'aldeenh@ksau-hs.edu.sa', ext: '95103' },
        { name: 'Dr. Sarah Alyousif', title: 'Assistant Professor', specialty: 'Cardiology', email: 'yousifs@MNGHA.MED.SA', ext: '7573' },
        { name: 'Dr. Majed Almutairi', title: 'Clinical Pharmacist', specialty: 'Cardiology', email: 'Almutairima27@MNGHA.MED.SA', ext: '8862' },
        { name: 'Dr. Sultan Al Raddadi', title: 'Clinical Pharmacist', specialty: 'Cardiology', email: 'raddadis@ngha.med.sa', ext: '15529' },
        { name: 'Dr. Alaa Al Anazi', title: 'Clinical Pharmacist', specialty: 'Cardiology', email: 'Alenazi-alenazial3@MNGHA.MED.SA', ext: '' },
        // Oncology
        { name: 'Dr. Nada Alsuhebany', title: 'Assistant Professor', specialty: 'Oncology/Hematology', email: 'suhebanyn@ksau-hs.edu.sa', ext: '95072' },
        { name: 'Dr. Ghada Alyousif', title: 'Associate Clinical Pharmacist', specialty: 'Oncology/Hematology', email: 'alyousifgh@MNGHA.MED.SA', ext: '2899' },
        { name: 'Dr. Dema Almolaiki', title: 'Associate Clinical Pharmacist', specialty: 'Oncology/Hematology', email: 'almolaikide@MNGHA.MED.SA', ext: '51378' },
        { name: 'Dr. Maha AlDoughaim', title: 'Assistant Professor', specialty: 'Oncology/Hematology', email: 'doughaimm@ksau-hs.edu.sa', ext: '95074' },
        { name: 'Dr. Mohammed Al Zahrani', title: 'Assistant Professor', specialty: 'Oncology/Hematology', email: 'alzahranimoham@ksau-hs.edu.sa', ext: '95042' },
        // Pediatrics
        { name: 'Dr. Diana Almutairi', title: 'Clinical Pharmacist', specialty: 'Pediatrics', email: 'almutairidi@MNGHA.MED.SA', ext: '6910' },
        { name: 'Dr. Meshary Almeshary', title: 'Clinical Pharmacist', specialty: 'Pediatrics', email: 'almesharyme@MNGHA.MED.SA', ext: '7285' },
        { name: 'Dr. Reham Alhoraibi', title: 'Clinical Pharmacist', specialty: 'Pediatrics', email: 'alhoraibire@MNGHA.MED.SA', ext: '6683' },
        { name: 'Dr. Kholoud Alaamer', title: 'Clinical Pharmacist', specialty: 'Pediatrics', email: 'alaamerkh@MNGHA.MED.SA', ext: '9991' },
        { name: 'Dr. Hessa Almuqati', title: 'Clinical Pharmacist', specialty: 'Pediatrics', email: 'almuqatihe@MNGHA.MED.SA', ext: '9138' },
        { name: 'Dr. Shaima Alshareef', title: 'Clinical Pharmacist', specialty: 'Pediatrics', email: 'alshareefsh@MNGHA.MED.SA', ext: '6942' }
    ];
    
    return preceptors.map(p => `
        <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 0.75rem;"><strong>${p.name}</strong></td>
            <td style="padding: 0.75rem;">${p.title}</td>
            <td style="padding: 0.75rem;">${p.specialty}</td>
            <td style="padding: 0.75rem;">${p.email}</td>
            <td style="padding: 0.75rem; text-align: center;">
                <button onclick="window.editPreceptorData('${p.name}')" class="btn btn-sm" style="padding: 0.25rem 0.75rem; margin-right: 0.5rem;">✏️ Edit</button>
                <button onclick="window.deletePreceptor('${p.name}')" class="btn btn-sm" style="padding: 0.25rem 0.75rem; background: #dc3545; color: white;">🗑️ Delete</button>
            </td>
        </tr>
    `).join('');
}

function renderSiteDataEditor() {
    return `
        <div class="appe-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="margin: 0;">Edit Training Sites</h3>
                <button onclick="window.addNewSite()" class="btn btn-primary">+ Add New Site</button>
            </div>
            
            <div style="overflow-x: auto;">
                <table class="data-table" style="width: 100%; border-collapse: collapse;">
                    <thead style="background: #f5f7fa;">
                        <tr>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Site Name</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Location</th>
                            <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #ddd;">Capacity</th>
                            <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #ddd;">Current Students</th>
                            <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #ddd;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${renderSiteEditRows()}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderSiteEditRows() {
    const sites = [
        { name: 'King Abdulaziz Medical City (KAMC)', location: 'Riyadh', capacity: 40, current: 35 },
        { name: 'King Fahad Medical City (KFMC)', location: 'Riyadh', capacity: 25, current: 20 },
        { name: 'National Guard Hospital (NGH)', location: 'Riyadh', capacity: 15, current: 12 },
        { name: 'King Saud Medical City', location: 'Riyadh', capacity: 10, current: 8 },
        { name: 'Community Pharmacies', location: 'Riyadh - Various', capacity: 20, current: 15 },
        { name: 'Pharmaceutical Companies', location: 'Riyadh Industrial', capacity: 8, current: 5 },
        { name: 'SFDA Offices', location: 'Riyadh', capacity: 6, current: 4 },
        { name: 'Academic Institutions', location: 'KSAU-HS & Others', capacity: 12, current: 10 }
    ];
    
    return sites.map(s => `
        <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 0.75rem;"><strong>${s.name}</strong></td>
            <td style="padding: 0.75rem;">${s.location}</td>
            <td style="padding: 0.75rem; text-align: center;">${s.capacity}</td>
            <td style="padding: 0.75rem; text-align: center;">${s.current}</td>
            <td style="padding: 0.75rem; text-align: center;">
                <button onclick="window.editSiteData('${s.name}')" class="btn btn-sm" style="padding: 0.25rem 0.75rem; margin-right: 0.5rem;">✏️ Edit</button>
                <button onclick="window.deleteSite('${s.name}')" class="btn btn-sm" style="padding: 0.25rem 0.75rem; background: #dc3545; color: white;">🗑️ Delete</button>
            </td>
        </tr>
    `).join('');
}

function renderSystemSettings() {
    return `
        <div class="appe-card">
            <h3 style="margin: 0 0 1.5rem 0;">System Settings</h3>
            
            <div style="display: grid; gap: 1.5rem;">
                <!-- Matching Algorithm Settings -->
                <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem;">
                    <h4 style="margin: 0 0 1rem 0;">🎯 Matching Algorithm Weights</h4>
                    <div style="display: grid; gap: 1rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Student Preference (Currently: 40%)</label>
                            <input type="range" min="0" max="100" value="40" style="width: 100%;" onchange="this.nextElementSibling.textContent = this.value + '%'">
                            <span>40%</span>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Geographic Proximity (Currently: 20%)</label>
                            <input type="range" min="0" max="100" value="20" style="width: 100%;" onchange="this.nextElementSibling.textContent = this.value + '%'">
                            <span>20%</span>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Site Quality (Currently: 15%)</label>
                            <input type="range" min="0" max="100" value="15" style="width: 100%;" onchange="this.nextElementSibling.textContent = this.value + '%'">
                            <span>15%</span>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Experience Diversity (Currently: 15%)</label>
                            <input type="range" min="0" max="100" value="15" style="width: 100%;" onchange="this.nextElementSibling.textContent = this.value + '%'">
                            <span>15%</span>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Preceptor Balance (Currently: 10%)</label>
                            <input type="range" min="0" max="100" value="10" style="width: 100%;" onchange="this.nextElementSibling.textContent = this.value + '%'">
                            <span>10%</span>
                        </div>
                    </div>
                    <button class="btn btn-primary" style="margin-top: 1rem;" onclick="window.saveAlgorithmSettings()">💾 Save Algorithm Settings</button>
                </div>
                
                <!-- Notification Settings -->
                <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem;">
                    <h4 style="margin: 0 0 1rem 0;">📧 Notification Settings</h4>
                    <div style="display: grid; gap: 0.75rem;">
                        <label style="display: flex; align-items: center; gap: 0.5rem;">
                            <input type="checkbox" checked>
                            Email students when assignments are made
                        </label>
                        <label style="display: flex; align-items: center; gap: 0.5rem;">
                            <input type="checkbox" checked>
                            Email preceptors about new students
                        </label>
                        <label style="display: flex; align-items: center; gap: 0.5rem;">
                            <input type="checkbox">
                            Send reminder 1 week before rotation starts
                        </label>
                        <label style="display: flex; align-items: center; gap: 0.5rem;">
                            <input type="checkbox" checked>
                            Alert coordinators about compliance issues
                        </label>
                    </div>
                    <button class="btn btn-primary" style="margin-top: 1rem;" onclick="window.saveNotificationSettings()">💾 Save Notification Settings</button>
                </div>
                
                <!-- Data Management -->
                <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem;">
                    <h4 style="margin: 0 0 1rem 0;">💾 Data Management</h4>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <button class="btn btn-outline" onclick="window.exportAllData()">📥 Export All Data (JSON)</button>
                        <button class="btn btn-outline" onclick="window.importData()">📤 Import Data (JSON)</button>
                        <button class="btn btn-outline" onclick="window.backupDatabase()">💾 Backup Database</button>
                        <button class="btn btn-outline" style="background: #dc3545; color: white;" onclick="window.resetAllData()">🔄 Reset All Data</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Data Management Helper Functions
window.switchDataTab = function(tab) {
    window.dataManagementTab = tab;
    window.switchAPPESection('dataManagement');
};

window.addNewStudent = function() {
    const modal = `
        <div id="editModal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;">
            <div style="background: white; padding: 2rem; border-radius: 12px; max-width: 600px; width: 90%;">
                <h3 style="margin: 0 0 1.5rem 0;">Add New Student</h3>
                <div style="display: grid; gap: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Student ID</label>
                        <input type="text" class="form-control" placeholder="e.g., 42-1-1-1-0XXX">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Full Name</label>
                        <input type="text" class="form-control" placeholder="Student name">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Program</label>
                        <select class="form-control">
                            <option>PharmD Y5</option>
                            <option>PharmD Y6</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.25rem; font-weight: 500;">Email</label>
                        <input type="email" class="form-control" placeholder="student@ksau-hs.edu.sa">
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 1.5rem; justify-content: flex-end;">
                    <button class="btn btn-outline" onclick="window.closeModal()">Cancel</button>
                    <button class="btn btn-primary" onclick="window.saveNewStudent()">💾 Save Student</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modal);
};

window.editStudentData = function(studentId) {
    alert(`Edit student ${studentId}\n\nOpening edit form...`);
};

window.deleteStudent = function(studentId) {
    if (confirm(`Are you sure you want to delete student ${studentId}?\n\nThis action cannot be undone.`)) {
        alert(`Student ${studentId} has been deleted.`);
    }
};

window.addNewRotation = function() {
    alert('Opening form to add new rotation...');
};

window.editRotationData = function(rotation) {
    alert(`Edit rotation: ${rotation}\n\nOpening edit form...`);
};

window.deleteRotation = function(rotation) {
    if (confirm(`Delete rotation "${rotation}"?`)) {
        alert(`Rotation deleted.`);
    }
};

window.addNewPreceptor = function() {
    alert('Opening form to add new preceptor...');
};

window.editPreceptorData = function(name) {
    alert(`Edit preceptor: ${name}\n\nOpening edit form...`);
};

window.deletePreceptor = function(name) {
    if (confirm(`Delete preceptor "${name}"?`)) {
        alert(`Preceptor deleted.`);
    }
};

window.addNewSite = function() {
    alert('Opening form to add new training site...');
};

window.editSiteData = function(site) {
    alert(`Edit site: ${site}\n\nOpening edit form...`);
};

window.deleteSite = function(site) {
    if (confirm(`Delete site "${site}"?`)) {
        alert(`Site deleted.`);
    }
};

window.saveAlgorithmSettings = function() {
    alert('✅ Algorithm settings saved successfully!');
};

window.saveNotificationSettings = function() {
    alert('✅ Notification settings saved successfully!');
};

window.exportAllData = function() {
    alert('📥 Exporting all data to JSON file...\n\nDownload will start shortly.');
};

window.importData = function() {
    alert('📤 Select a JSON file to import data...');
};

window.backupDatabase = function() {
    alert('💾 Creating database backup...\n\nBackup will be saved to your downloads folder.');
};

window.resetAllData = function() {
    if (confirm('⚠️ WARNING: This will delete ALL data and reset to defaults.\n\nAre you absolutely sure?')) {
        alert('All data has been reset.');
    }
};

window.closeModal = function() {
    const modal = document.getElementById('editModal');
    if (modal) modal.remove();
};

window.saveNewStudent = function() {
    alert('✅ New student saved successfully!');
    window.closeModal();
};

// STUDENT PORTAL INTEGRATION
window.reviewSubmissions = function() {
    // Get submissions from localStorage
    const submissions = JSON.parse(localStorage.getItem('studentSubmissions') || '[]');
    
    if (submissions.length === 0) {
        alert('📭 No pending submissions to review.');
        return;
    }

    // Create modal to show pending submissions
    const modal = document.createElement('div');
    modal.id = 'submissionsModal';
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;';
    
    const pendingSubmissions = submissions.filter(s => !s.reviewed);
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 12px; max-width: 1000px; width: 100%; max-height: 90vh; overflow: auto; padding: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 2px solid #e0e0e0; padding-bottom: 1rem;">
                <h2 style="margin: 0; color: #2E7D32;">📥 Student Information Submissions</h2>
                <button onclick="document.getElementById('submissionsModal').remove()" style="background: #dc3545; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 1.2rem;">✕</button>
            </div>

            <div style="background: #E3F2FD; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <strong>📊 Summary:</strong> ${pendingSubmissions.length} pending submissions out of ${submissions.length} total
            </div>

            <div style="display: grid; gap: 1.5rem;">
                ${pendingSubmissions.map((sub, idx) => `
                    <div style="border: 2px solid #e0e0e0; border-radius: 8px; padding: 1.5rem; background: #fafafa;">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                            <div>
                                <h3 style="margin: 0 0 0.5rem 0; color: #1976D2;">${sub.studentName}</h3>
                                <p style="margin: 0; color: #666; font-size: 0.9rem;">ID: ${sub.studentId} | Submitted: ${new Date(sub.submittedAt).toLocaleString()}</p>
                            </div>
                            <span style="background: #FFC107; color: #000; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">⏳ PENDING</span>
                        </div>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                            <div>
                                <strong style="color: #666; font-size: 0.85rem;">📞 Mobile:</strong><br>
                                ${sub.mobile}
                            </div>
                            <div>
                                <strong style="color: #666; font-size: 0.85rem;">📧 Email:</strong><br>
                                ${sub.email}
                            </div>
                            <div>
                                <strong style="color: #666; font-size: 0.85rem;">🆔 National ID:</strong><br>
                                ${sub.nationalId}
                            </div>
                            <div>
                                <strong style="color: #666; font-size: 0.85rem;">🏙️ City:</strong><br>
                                ${sub.city}
                            </div>
                            <div>
                                <strong style="color: #666; font-size: 0.85rem;">🚗 Transportation:</strong><br>
                                ${sub.ownTransport}
                            </div>
                            <div>
                                <strong style="color: #666; font-size: 0.85rem;">👤 Emergency Contact:</strong><br>
                                ${sub.emergencyName} (${sub.emergencyRelation})<br>
                                <span style="color: #666; font-size: 0.85rem;">${sub.emergencyPhone}</span>
                            </div>
                        </div>

                        ${sub.medicalConditions === 'Yes' ? `
                            <div style="background: #FFF3E0; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem; border-left: 4px solid #FF9800;">
                                <strong style="color: #E65100;">⚕️ Medical Accommodations Needed:</strong><br>
                                <span style="color: #666;">${sub.medicalDetails || 'Details provided (confidential)'}</span>
                            </div>
                        ` : ''}

                        ${sub.specialAccommodations ? `
                            <div style="background: #E3F2FD; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem;">
                                <strong style="color: #1976D2;">📋 Special Accommodations:</strong><br>
                                <span style="color: #666;">${sub.specialAccommodations}</span>
                            </div>
                        ` : ''}

                        <div style="display: flex; gap: 1rem; margin-top: 1rem; border-top: 1px solid #ddd; padding-top: 1rem;">
                            <button onclick="approveSubmission(${idx})" class="btn" style="flex: 1; background: #4CAF50; color: white; padding: 0.75rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
                                ✅ Approve & Save to Database
                            </button>
                            <button onclick="requestRevision(${idx})" class="btn" style="flex: 1; background: #FF9800; color: white; padding: 0.75rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
                                ✏️ Request Revision
                            </button>
                            <button onclick="rejectSubmission(${idx})" class="btn" style="background: #dc3545; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
                                ❌ Reject
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>

            ${pendingSubmissions.length === 0 ? `
                <div style="text-align: center; padding: 3rem; color: #666;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
                    <h3>All submissions have been reviewed!</h3>
                    <p>There are no pending submissions at this time.</p>
                </div>
            ` : ''}
        </div>
    `;
    
    document.body.appendChild(modal);
};

window.approveSubmission = function(index) {
    const submissions = JSON.parse(localStorage.getItem('studentSubmissions') || '[]');
    const submission = submissions[index];
    
    if (confirm(`✅ Approve submission for ${submission.studentName}?\n\nThis will add their information to the student database.`)) {
        // Mark as reviewed and approved
        submission.reviewed = true;
        submission.approved = true;
        submission.reviewedAt = new Date().toISOString();
        submission.reviewedBy = 'Admin';
        
        // Save back to localStorage
        localStorage.setItem('studentSubmissions', JSON.stringify(submissions));
        
        alert(`✅ APPROVED!\n\nStudent: ${submission.studentName}\nID: ${submission.studentId}\n\nInformation has been added to the database.\nConfirmation email will be sent to: ${submission.email}`);
        
        // Refresh the review panel
        window.reviewSubmissions();
        
        // Update the pending count
        updatePendingCount();
    }
};

window.requestRevision = function(index) {
    const submissions = JSON.parse(localStorage.getItem('studentSubmissions') || '[]');
    const submission = submissions[index];
    
    const reason = prompt(`Request revision for ${submission.studentName}\n\nPlease specify what needs to be corrected:`);
    
    if (reason) {
        submission.revisionRequested = true;
        submission.revisionReason = reason;
        submission.reviewedAt = new Date().toISOString();
        
        localStorage.setItem('studentSubmissions', JSON.stringify(submissions));
        
        alert(`✏️ Revision requested!\n\nStudent will be notified via email: ${submission.email}\n\nReason: ${reason}`);
        
        window.reviewSubmissions();
        updatePendingCount();
    }
};

window.rejectSubmission = function(index) {
    const submissions = JSON.parse(localStorage.getItem('studentSubmissions') || '[]');
    const submission = submissions[index];
    
    const reason = prompt(`Reject submission for ${submission.studentName}\n\nPlease provide a reason for rejection:`);
    
    if (reason) {
        if (confirm(`❌ Are you sure you want to REJECT this submission?\n\nStudent: ${submission.studentName}\nReason: ${reason}`)) {
            submission.reviewed = true;
            submission.approved = false;
            submission.rejectionReason = reason;
            submission.reviewedAt = new Date().toISOString();
            
            localStorage.setItem('studentSubmissions', JSON.stringify(submissions));
            
            alert(`❌ Submission rejected.\n\nStudent will be notified via email: ${submission.email}`);
            
            window.reviewSubmissions();
            updatePendingCount();
        }
    }
};

function updatePendingCount() {
    const submissions = JSON.parse(localStorage.getItem('studentSubmissions') || '[]');
    const pendingCount = submissions.filter(s => !s.reviewed).length;
    
    const countElement = document.getElementById('pendingCount');
    if (countElement) {
        countElement.textContent = pendingCount === 0 ? '0 new submissions' : 
            `${pendingCount} new submission${pendingCount > 1 ? 's' : ''} ⚠️`;
        
        // Update count on page load
        const alertCard = countElement.closest('.appe-card');
        if (pendingCount === 0 && alertCard) {
            alertCard.style.background = '#E8F5E9';
            alertCard.style.borderLeftColor = '#4CAF50';
            countElement.innerHTML = '<span style="color: #2E7D32;">✅ All submissions reviewed</span>';
        }
    }
}

// Update pending count on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updatePendingCount, 500);
});
    window.closeModal();
};

// Listen for navigation clicks to APPE Experience Hub
document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-view="appe-experience-hub"]');
    if (link) {
        e.preventDefault();
        const appRoot = document.getElementById('app-root');
        if (appRoot) {
            appRoot.innerHTML = window.renderAPPEExperienceHub();
        }
        
        // Update page title
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) {
            pageTitle.textContent = 'APPE Experience Hub';
        }
        
        // Update active navigation state
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    }
});
})(); // End IIFE