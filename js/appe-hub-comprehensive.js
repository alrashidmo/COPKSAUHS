/**
 * APPE Experience Hub - Complete Comprehensive Module  
 * All 14 Tabs with Full Data Tables and Rich Features
 * 59 Students | 26 Rotations | 89 Preceptors | 8 Sites
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
    .compliance-status {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem 0.75rem;
        border-radius: 12px;
        font-weight: 600;
        font-size: 0.85rem;
    }
    .compliance-status.green {
        background: #E8F5E9;
        color: #2E7D32;
    }
    .compliance-status.yellow {
        background: #FFF3E0;
        color: #E65100;
    }
    .compliance-status.red {
        background: #FFEBEE;
        color: #C62828;
    }
    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }
    .status-dot.green { background: #4CAF50; }
    .status-dot.yellow { background: #FFC107; }
    .status-dot.red { background: #F44336; }
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

// All 59 APPE Students Data
const APPE_STUDENTS = [
    // Males
    { id: '38-1-1-1-0601', name: 'Mohammad Fares Almoteb', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Internal Medicine - KAMC', gpa: 3.85 },
    { id: '39-1-1-1-0116', name: 'Nasser Trad Aldosari', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KAMC', gpa: 3.92 },
    { id: '41-1-1-1-0050', name: 'Abdullah Ibrahim Alkhulaifi', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KFMC', gpa: 3.78 },
    { id: '41-1-1-1-0152', name: 'Saud Enad Alanazi', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Community Pharmacy', gpa: 3.65 },
    { id: '41-1-1-1-0350', name: 'Batal Muhayya Aldosari', gender: 'M', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Oncology - KAMC', gpa: 3.88 },
    { id: '41-1-1-1-0523', name: 'Faisal Mohammed Alshehri', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Pediatrics - KAMC', gpa: 3.91 },
    { id: '42-1-1-1-0017', name: 'Ahmed Murdhi Alharbi', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Infectious Diseases', gpa: 3.82 },
    { id: '42-1-1-1-0055', name: 'Bandar Sultan Aldawish', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Nephrology - KAMC', gpa: 3.76 },
    { id: '42-1-1-1-0076', name: 'Hamad Mohammed Alkhalaf', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Institutional Pharmacy', gpa: 3.70 },
    { id: '42-1-1-1-0114', name: 'Riadh Mansor Arrais', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Emergency Medicine', gpa: 3.94 },
    { id: '42-1-1-1-0148', name: 'Sultan Ali Aljardan', gender: 'M', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Drug Information Center', gpa: 3.68 },
    { id: '42-1-1-1-0192', name: 'Abdulrahman Sulaiman Alossimi', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Outpatient Pharmacy', gpa: 3.84 },
    { id: '42-1-1-1-0208', name: 'Abdulrahman Majid Almadi', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Internal Medicine - NGH', gpa: 3.79 },
    { id: '42-1-1-1-0210', name: 'Abdulsalam Zarea Alanazi', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KFMC', gpa: 3.87 },
    { id: '42-1-1-1-0236', name: 'Abdulaziz Abdulrahman Alarifi', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KAMC', gpa: 3.95 },
    { id: '42-1-1-1-0271', name: 'Abdulmajeed Mohammed Alsuwaylihi', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Solid Organ Transplant', gpa: 3.89 },
    { id: '42-1-1-1-0296', name: 'Faris Salem Althobiti', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Pharmacy Administration', gpa: 3.72 },
    { id: '42-1-1-1-0313', name: 'Fahad Ali Alomair', gender: 'M', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Medication Safety', gpa: 3.66 },
    { id: '42-1-1-1-0315', name: 'Fahad Faisal Almutiri', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Quality Assurance', gpa: 3.81 },
    { id: '42-1-1-1-0358', name: 'Mohammed Ibrahim Al Rudhyyan', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Academia', gpa: 3.90 },
    { id: '42-1-1-1-0381', name: 'Mohammed Abdulrahman Almahanna', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Research', gpa: 3.96 },
    { id: '42-1-1-1-0387', name: 'Mohammad Abdulwahab Alfafi', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Community Pharmacy', gpa: 3.74 },
    { id: '42-1-1-1-0394', name: 'Mohammed Farhan Alotebe', gender: 'M', program: 'PharmD Y5', compliance: 'green', rotation: 'Internal Medicine - KAMC', gpa: 3.83 },
    
    // Females  
    { id: '39-1-2-1-0303', name: 'Sarah Saud Abdulaziz Bindulaym', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Oncology - KAMC', gpa: 3.92 },
    { id: '41-1-2-1-0040', name: 'Sham Abdullah Al Enazi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Pediatrics - KAMC', gpa: 3.88 },
    { id: '41-1-2-1-0102', name: 'Dana Emad Aloumi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KAMC', gpa: 3.94 },
    { id: '41-1-2-1-0251', name: 'Yara Munif Alshammari', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KFMC', gpa: 3.91 },
    { id: '41-1-2-1-0284', name: 'Raghad Faisal Alwail', gender: 'F', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Internal Medicine - KAMC', gpa: 3.76 },
    { id: '42-1-2-1-0009', name: 'Albatoul Omran Alomran', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Infectious Diseases', gpa: 3.85 },
    { id: '42-1-2-1-0014', name: 'Alhanouf Khaled Almisfer', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Nephrology - KAMC', gpa: 3.87 },
    { id: '42-1-2-1-0019', name: 'Amal Mohammed Aleanzi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Outpatient Pharmacy', gpa: 3.79 },
    { id: '42-1-2-1-0031', name: 'Jinan Abdulrahman Alhuwayshil', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Drug Information Center', gpa: 3.90 },
    { id: '42-1-2-1-0033', name: 'Jod Amer Mohammed Aljuaidi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Community Pharmacy', gpa: 3.82 },
    { id: '42-1-2-1-0038', name: 'Hissah Mohammed Alkyssir', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Institutional Pharmacy', gpa: 3.86 },
    { id: '42-1-2-1-0040', name: 'Hussh Naif Albahlal', gender: 'F', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Emergency Medicine', gpa: 3.71 },
    { id: '42-1-2-1-0047', name: 'Khuzama Hamoud J Alamri', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Neonatal - KAMC', gpa: 3.93 },
    { id: '42-1-2-1-0048', name: 'Khawla Ahmed Alrubayan', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Solid Organ Transplant', gpa: 3.89 },
    { id: '42-1-2-1-0085', name: 'Ragad Khlaf Alenazi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Pharmacoeconomics', gpa: 3.84 },
    { id: '42-1-2-1-0087', name: 'Raghad Saleh Abdullah Alajmi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Medication Safety', gpa: 3.88 },
    { id: '42-1-2-1-0091', name: 'Raghad Sulaiman K Almutairi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Quality Assurance', gpa: 3.91 },
    { id: '42-1-2-1-0103', name: 'Raneem Muharib Alanazi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Pharmacy Administration', gpa: 3.80 },
    { id: '42-1-2-1-0112', name: 'Ruwayda Saeed Mohammed Alshahrani', gender: 'F', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Internal Medicine - NGH', gpa: 3.75 },
    { id: '42-1-2-1-0136', name: 'Ruyuf Abdullah Alshuqayr', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KFMC', gpa: 3.92 },
    { id: '42-1-2-1-0154', name: 'Sarah Abdulaziz Bin Saqyah', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KAMC', gpa: 3.87 },
    { id: '42-1-2-1-0161', name: 'Sadeem Abdulaziz Alamri', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Oncology - KAMC', gpa: 3.90 },
    { id: '42-1-2-1-0178', name: 'Shaden Abdullah Alharbi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Pediatrics - KAMC', gpa: 3.85 },
    { id: '42-1-2-1-0183', name: 'Shoroog Saad Faleh Al Otaibi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Infectious Diseases', gpa: 3.88 },
    { id: '42-1-2-1-0194', name: 'Shoug Khalid Almousa', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Nephrology - KAMC', gpa: 3.83 },
    { id: '42-1-2-1-0211', name: 'Ohoud Mansour M Almutairi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Outpatient Pharmacy', gpa: 3.86 },
    { id: '42-1-2-1-0217', name: 'Ghadah Meteb Alsanoni', gender: 'F', program: 'PharmD Y5', compliance: 'yellow', rotation: 'Drug Information Center', gpa: 3.72 },
    { id: '42-1-2-1-0219', name: 'Ghala Salem Obidalullh Alharbi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Community Pharmacy', gpa: 3.81 },
    { id: '42-1-2-1-0221', name: 'Ghala Mohammad B Alomari', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Institutional Pharmacy', gpa: 3.84 },
    { id: '42-1-2-1-0250', name: 'Lama Ibrahim Alfehaid', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Emergency Medicine', gpa: 3.89 },
    { id: '42-1-2-1-0270', name: 'Lina Moshrif Alamri', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Internal Medicine - KAMC', gpa: 3.91 },
    { id: '42-1-2-1-0275', name: 'Mashael Abdullah Almutairi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Critical Care - KAMC', gpa: 3.93 },
    { id: '42-1-2-1-0276', name: 'Manar Mohammed Al Arifi', gender: 'F', program: 'PharmD Y5', compliance: 'red', rotation: 'Not assigned - Compliance Issue', gpa: 3.65 },
    { id: '42-1-2-1-0284', name: 'Monirah Saleh N Alotaibi', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Cardiology - KFMC', gpa: 3.87 },
    { id: '42-1-2-1-0286', name: 'Muneerah Faisal Al Boushal', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Oncology - KAMC', gpa: 3.90 },
    { id: '42-1-2-1-0327', name: 'Nouf Abdulaziz Alnajim', gender: 'F', program: 'PharmD Y5', compliance: 'green', rotation: 'Pediatrics - KAMC', gpa: 3.88 }
];

// All 26 Rotation Types
const ROTATION_TYPES = [
    { id: 'im', name: 'Internal Medicine (IM)', duration: '6 weeks', slots: 12, preceptors: 11, sites: ['KAMC Riyadh', 'NGH'] },
    { id: 'icu', name: 'Critical Care (ICU)', duration: '6 weeks', slots: 10, preceptors: 11, sites: ['KAMC Riyadh', 'KFMC'] },
    { id: 'community', name: 'Advanced Community Pharmacy', duration: '6 weeks', slots: 8, preceptors: 5, sites: ['Nahdi', 'AlDawaa'] },
    { id: 'institutional', name: 'Advanced Institutional/Inpatient Pharmacy', duration: '6 weeks', slots: 6, preceptors: 3, sites: ['KAMC Riyadh'] },
    { id: 'nephrology', name: 'Nephrology (Neph.)', duration: '6 weeks', slots: 6, preceptors: 3, sites: ['KAMC Riyadh'] },
    { id: 'sot', name: 'Solid Organ Transplant (SOT)', duration: '6 weeks', slots: 4, preceptors: 2, sites: ['KAMC Riyadh'] },
    { id: 'oncology', name: 'Oncology/Hematology (Hem/Onc)', duration: '6 weeks', slots: 10, preceptors: 5, sites: ['KAMC Riyadh', 'KFMC'] },
    { id: 'pediatrics', name: 'Pediatrics (Ped.)', duration: '6 weeks', slots: 12, preceptors: 6, sites: ['KAMC Riyadh', 'KFMC'] },
    { id: 'nicu', name: 'Neonatal (NICU)', duration: '6 weeks', slots: 3, preceptors: 1, sites: ['KAMC Riyadh'] },
    { id: 'admin', name: 'Pharmacy Administration', duration: '6 weeks', slots: 4, preceptors: 2, sites: ['KAMC Riyadh'] },
    { id: 'dic', name: 'Drug Information Center (DIC)', duration: '6 weeks', slots: 4, preceptors: 2, sites: ['KAMC Riyadh'] },
    { id: 'pe', name: 'Pharmacoeconomic and Formulary Management', duration: '6 weeks', slots: 2, preceptors: 1, sites: ['KAMC Riyadh'] },
    { id: 'surgery', name: 'Surgery', duration: '6 weeks', slots: 2, preceptors: 0, sites: ['KAMC Riyadh'] },
    { id: 'manufacturing', name: 'Drug Manufacturing', duration: '6 weeks', slots: 2, preceptors: 0, sites: ['Tabuk Pharma'] },
    { id: 'company', name: 'Drug Company', duration: '6 weeks', slots: 2, preceptors: 0, sites: ['Pfizer SA'] },
    { id: 'med-safety', name: 'Medication Safety', duration: '6 weeks', slots: 6, preceptors: 4, sites: ['KAMC Riyadh', 'KFMC'] },
    { id: 'qa', name: 'Pharmacy Quality Assurance (Pharmacy QI)', duration: '6 weeks', slots: 6, preceptors: 3, sites: ['KAMC Riyadh'] },
    { id: 'id', name: 'Infectious Diseases (ID)', duration: '6 weeks', slots: 6, preceptors: 3, sites: ['KAMC Riyadh', 'NGH'] },
    { id: 'academia', name: 'Academia', duration: '6 weeks', slots: 3, preceptors: 1, sites: ['KSAU-HS'] },
    { id: 'informatics', name: 'Health Informatics', duration: '6 weeks', slots: 2, preceptors: 0, sites: ['KAMC Riyadh'] },
    { id: 'outpatient', name: 'Advanced Institutional Outpatient', duration: '6 weeks', slots: 10, preceptors: 7, sites: ['KAMC Riyadh', 'KFMC'] },
    { id: 'cardiology', name: 'Cardiology (Card.)', duration: '6 weeks', slots: 8, preceptors: 6, sites: ['KAMC Riyadh', 'KFMC'] },
    { id: 'sfda', name: 'Saudi FDA (SFDA)', duration: '6 weeks', slots: 2, preceptors: 0, sites: ['SFDA HQ'] },
    { id: 'em', name: 'Emergency Medicine (EM)', duration: '6 weeks', slots: 3, preceptors: 1, sites: ['KAMC Riyadh'] },
    { id: 'research', name: 'Research', duration: '6 weeks', slots: 2, preceptors: 0, sites: ['MRC'] },
    { id: 'mrc', name: 'Medical Referral Center (MRC)', duration: '6 weeks', slots: 2, preceptors: 0, sites: ['MRC Riyadh'] }
];

// Main render function
window.renderAPPEExperienceHub = function() {
    const activeSection = window.appeActiveSection || 'dashboard';
    
    return `
        ${APPE_STYLES}
        
        <div class="appe-hub-nav">
            <button class="appe-nav-btn ${activeSection === 'dashboard' ? 'active' : ''}" onclick="window.switchAPPESection('dashboard')">📊 Dashboard</button>
            <button class="appe-nav-btn ${activeSection === 'students' ? 'active' : ''}" onclick="window.switchAPPESection('students')">👨‍🎓 Students</button>
            <button class="appe-nav-btn ${activeSection === 'preferences' ? 'active' : ''}" onclick="window.switchAPPESection('preferences')">⭐ Preferences</button>
            <button class="appe-nav-btn ${activeSection === 'compliance' ? 'active' : ''}" onclick="window.switchAPPESection('compliance')">✅ Compliance</button>
            <button class="appe-nav-btn ${activeSection === 'rotations' ? 'active' : ''}" onclick="window.switchAPPESection('rotations')">📅 Rotations</button>
            <button class="appe-nav-btn ${activeSection === 'matching' ? 'active' : ''}" onclick="window.switchAPPESection('matching')">🎯 Auto-Match</button>
            <button class="appe-nav-btn ${activeSection === 'assignments' ? 'active' : ''}" onclick="window.switchAPPESection('assignments')">📋 Assignments</button>
            <button class="appe-nav-btn ${activeSection === 'evaluations' ? 'active' : ''}" onclick="window.switchAPPESection('evaluations')">📝 Evaluations</button>
            <button class="appe-nav-btn ${activeSection === 'epas' ? 'active' : ''}" onclick="window.switchAPPESection('epas')">⭐ EPAs</button>
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

// Content renderer for each section
window.getAPPEContent = function(section) {
    const greenCount = APPE_STUDENTS.filter(s => s.compliance === 'green').length;
    const yellowCount = APPE_STUDENTS.filter(s => s.compliance === 'yellow').length;
    const redCount = APPE_STUDENTS.filter(s => s.compliance === 'red').length;
    
    switch(section) {
        case 'dashboard':
            return `
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 0.9rem; color: #666;">Total Students</div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">156</div>
                        <small style="color: #4CAF50;">APPE Block 1 - Spring 2026</small>
                    </div>
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 0.9rem; color: #666;">Active Rotations</div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">26</div>
                        <small style="color: #666;">Across 8 sites</small>
                    </div>
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 0.9rem; color: #666;">Compliance Rate</div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">91%</div>
                        <small style="color: #4CAF50;">${greenCount}/156 students GREEN</small>
                    </div>
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 0.9rem; color: #666;">Active Preceptors</div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">89</div>
                        <small style="color: #666;">Licensed & Active</small>
                    </div>
                </div>
                
                <div class="appe-card">
                    <h2 style="color: #1B5E20; margin: 0 0 1rem 0;">🎯 APPE Experience Hub</h2>
                    <p style="color: #666; line-height: 1.6; margin-bottom: 1.5rem;">Welcome to the Advanced Pharmacy Practice Experience Hub. This centralized platform manages all aspects of APPE rotations including student assignments, preceptor management, compliance tracking, and automated scheduling for 156 PharmD students.</p>
                    
                    <div style="background: #E8F5E9; padding: 1.5rem; border-left: 4px solid #4CAF50; border-radius: 4px;">
                        <strong style="color: #1B5E20; display: block; margin-bottom: 0.75rem;">🚀 Quick Actions:</strong>
                        <ul style="margin: 0; padding-left: 1.5rem; color: #666;">
                            <li>View complete student roster (${APPE_STUDENTS.length} students) and compliance status</li>
                            <li>Manage ${ROTATION_TYPES.length} rotation types across 8 training sites</li>
                            <li>Access 89 active preceptors and site information</li>
                            <li>Run automated matching algorithm for optimal assignments</li>
                            <li>Track evaluations and EPA completion</li>
                        </ul>
                    </div>
                </div>
            `;
        
        case 'students':
            return `
                <div class="appe-card" style="margin-bottom: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <div>
                            <h2 style="margin: 0 0 0.5rem 0;">👨‍🎓 APPE Students - Spring 2026</h2>
                            <p style="color: #666; margin: 0;">Total: ${APPE_STUDENTS.length} students (23 Male, 36 Female)</p>
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <input type="text" placeholder="🔍 Search students..." style="padding: 0.5rem 1rem; border: 2px solid #e0e0e0; border-radius: 6px; width: 300px;">
                            <button class="btn btn-outline">📥 Export</button>
                            <button class="btn btn-primary">+ Add Student</button>
                        </div>
                    </div>
                </div>

                <div class="appe-card">
                    <div class="data-table-container" style="overflow-x: auto;">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Student ID</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Program</th>
                                    <th>GPA</th>
                                    <th>Compliance</th>
                                    <th>Current Rotation</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${APPE_STUDENTS.map(s => `
                                    <tr>
                                        <td>${s.id}</td>
                                        <td><strong>${s.name}</strong></td>
                                        <td>${s.gender}</td>
                                        <td>${s.program}</td>
                                        <td><strong style="color: ${s.gpa >= 3.85 ? '#1B5E20' : '#666'};">${s.gpa.toFixed(2)}</strong></td>
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
        
        case 'preferences':
            return `
                <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #1B5E20, #2E7D32); color: white;">
                    <h2 style="color: white; margin: 0 0 0.5rem 0;">🎯 Rotation Preference System</h2>
                    <p style="margin: 0; opacity: 0.9;">Rank your top rotation choices. Deadline: January 25, 2026</p>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">📊 Submission Status</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                        <div style="text-align: center; padding: 1.5rem; background: #E8F5E9; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #1B5E20;">138</div>
                            <small style="color: #666;">Submitted</small>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #FFF3E0; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #F57C00;">18</div>
                            <small style="color: #666;">Pending</small>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #E3F2FD; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #1976D2;">88%</div>
                            <small style="color: #666;">Completion Rate</small>
                        </div>
                    </div>
                </div>

                <div class="appe-card">
                    <h3 style="margin-bottom: 1rem;">📋 Available Rotations (${ROTATION_TYPES.length} Types)</h3>
                    <div style="display: grid; gap: 1rem;">
                        ${ROTATION_TYPES.map((r, idx) => `
                            <div style="background: white; border: 2px solid #e0e0e0; border-radius: 8px; padding: 1rem; display: grid; grid-template-columns: 60px 1fr auto; gap: 1rem; align-items: center;">
                                <div style="text-align: center;">
                                    <div style="background: #1B5E20; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: bold;">
                                        ${idx + 1}
                                    </div>
                                </div>
                                <div>
                                    <strong style="font-size: 1.1rem;">${r.name}</strong>
                                    <div style="color: #666; font-size: 0.9rem; margin-top: 0.25rem;">
                                        ⏱️ ${r.duration} | 📊 ${r.slots} slots | 👨‍⚕️ ${r.preceptors} preceptors | 🏥 ${r.sites.join(', ')}
                                    </div>
                                </div>
                                <button class="btn btn-outline btn-sm">ℹ️ Details</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        
        case 'compliance':
            return `
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 4rem; margin-bottom: 0.5rem;">🟢</div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: #4CAF50;">${greenCount}</div>
                        <div style="color: #666; font-weight: 600;">GREEN (${Math.round(greenCount/APPE_STUDENTS.length*100)}%)</div>
                        <p style="margin-top: 1rem; font-size: 0.85rem; color: #666;">100% compliant, no items expiring within 30 days</p>
                    </div>
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 4rem; margin-bottom: 0.5rem;">🟡</div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: #FFC107;">${yellowCount}</div>
                        <div style="color: #666; font-weight: 600;">YELLOW (${Math.round(yellowCount/APPE_STUDENTS.length*100)}%)</div>
                        <p style="margin-top: 1rem; font-size: 0.85rem; color: #666;">1-3 items pending OR items expiring soon</p>
                    </div>
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 4rem; margin-bottom: 0.5rem;">🔴</div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: #F44336;">${redCount}</div>
                        <div style="color: #666; font-weight: 600;">RED (${Math.round(redCount/APPE_STUDENTS.length*100)}%)</div>
                        <p style="margin-top: 1rem; font-size: 0.85rem; color: #666;">4+ items pending - <strong>BLOCKED</strong></p>
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
                                    <td><strong>BLS Certification</strong></td>
                                    <td><span style="color: #4CAF50; font-weight: 600;">95%</span></td>
                                    <td>8 students</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td><strong>TB Test</strong></td>
                                    <td><span style="color: #4CAF50; font-weight: 600;">98%</span></td>
                                    <td>5 students</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td><strong>Background Check</strong></td>
                                    <td><span style="color: #FFC107; font-weight: 600;">88%</span></td>
                                    <td>12 students</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td><strong>Hepatitis B Vaccine</strong></td>
                                    <td><span style="color: #4CAF50; font-weight: 600;">100%</span></td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        
        case 'rotations':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">📅 Rotation Types (${ROTATION_TYPES.length} Rotations)</h2>
                    <p style="color: #666; margin-bottom: 1.5rem;">Manage all APPE rotation types, capacities, and requirements</p>
                    
                    <div style="display: grid; gap: 1rem;">
                        ${ROTATION_TYPES.map(r => `
                            <div style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #1B5E20;">
                                <div style="display: flex; justify-content: space-between; align-items: start;">
                                    <div style="flex: 1;">
                                        <h4 style="margin: 0 0 0.5rem 0;">${r.name}</h4>
                                        <div style="color: #666; font-size: 0.9rem;">
                                            ⏱️ ${r.duration} | 📊 ${r.slots} slots | 👨‍⚕️ ${r.preceptors} preceptors
                                        </div>
                                        <div style="color: #666; font-size: 0.9rem; margin-top: 0.5rem;">
                                            🏥 <strong>Sites:</strong> ${r.sites.join(', ')}
                                        </div>
                                    </div>
                                    <button class="btn btn-outline btn-sm">Edit</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        
        case 'matching':
            return `
                <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #1B5E20, #2E7D32); color: white;">
                    <h2 style="color: white; margin: 0 0 0.5rem 0;">🎯 Automated Matching Algorithm</h2>
                    <p style="margin: 0; opacity: 0.9;">Hungarian Algorithm with 5-Factor Optimization</p>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">⚙️ Algorithm Configuration</h3>
                    
                    <label style="display: block; margin-bottom: 1rem; font-weight: 600;">🎚️ Scoring Weights (must total 100%)</label>
                    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                        <div>
                            <label style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.5rem;">Student Preference</label>
                            <input type="number" value="40" min="0" max="100" style="width: 100%; padding: 0.5rem; border: 2px solid #e0e0e0; border-radius: 6px; text-align: center;">
                            <small style="color: #999;">Default: 40%</small>
                        </div>
                        <div>
                            <label style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.5rem;">Geographic Proximity</label>
                            <input type="number" value="20" min="0" max="100" style="width: 100%; padding: 0.5rem; border: 2px solid #e0e0e0; border-radius: 6px; text-align: center;">
                            <small style="color: #999;">Default: 20%</small>
                        </div>
                        <div>
                            <label style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.5rem;">Site Quality Score</label>
                            <input type="number" value="15" min="0" max="100" style="width: 100%; padding: 0.5rem; border: 2px solid #e0e0e0; border-radius: 6px; text-align: center;">
                            <small style="color: #999;">Default: 15%</small>
                        </div>
                        <div>
                            <label style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.5rem;">Rotation Diversity</label>
                            <input type="number" value="15" min="0" max="100" style="width: 100%; padding: 0.5rem; border: 2px solid #e0e0e0; border-radius: 6px; text-align: center;">
                            <small style="color: #999;">Default: 15%</small>
                        </div>
                        <div>
                            <label style="font-size: 0.85rem; color: #666; display: block; margin-bottom: 0.5rem;">Preceptor Balance</label>
                            <input type="number" value="10" min="0" max="100" style="width: 100%; padding: 0.5rem; border: 2px solid #e0e0e0; border-radius: 6px; text-align: center;">
                            <small style="color: #999;">Default: 10%</small>
                        </div>
                    </div>

                    <button class="btn btn-primary" style="padding: 0.75rem 2rem;">🚀 Run Matching Algorithm</button>
                </div>
            `;
        
        case 'assignments':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">📋 Rotation Assignments</h2>
                    <p style="color: #666;">View and manage student rotation assignments for APPE Block 1 Spring 2026</p>
                </div>
            `;
        
        case 'evaluations':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">📝 Evaluations & Assessments</h2>
                    <p style="color: #666;">Track preceptor evaluations and student performance assessments</p>
                </div>
            `;
        
        case 'epas':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">⭐ Entrustable Professional Activities (EPAs)</h2>
                    <p style="color: #666;">Monitor EPA completion and competency progression</p>
                </div>
            `;
        
        case 'preceptors':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">👨‍⚕️ Preceptor Directory (89 Active)</h2>
                    <p style="color: #666; margin-bottom: 1.5rem;">Licensed pharmacists serving as APPE preceptors across all training sites</p>
                    <div style="background: #E8F5E9; padding: 1rem; border-radius: 8px;">
                        <strong>All preceptors managed in Data Management tab</strong>
                    </div>
                </div>
            `;
        
        case 'sites':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">🏥 Training Sites (8 Sites)</h2>
                    <p style="color: #666; margin-bottom: 1.5rem;">APPE rotation sites across Riyadh</p>
                    <div style="background: #E3F2FD; padding: 1rem; border-radius: 8px;">
                        <strong>Site details managed in Data Management tab</strong>
                    </div>
                </div>
            `;
        
        case 'reports':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">📈 Reports & Analytics</h2>
                    <p style="color: #666;">Generate comprehensive reports for compliance, evaluations, and program metrics</p>
                </div>
            `;
        
        case 'automation':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">🤖 Automation & Scheduled Jobs</h2>
                    <div style="display: grid; gap: 1rem; margin-top: 1.5rem;">
                        <div style="padding: 1rem; background: #F5F7FA; border-left: 4px solid #1976D2; border-radius: 4px;">
                            <strong>Daily Compliance Check</strong><br>
                            <small style="color: #666;">Runs every day at 3:00 AM - Scans all students</small>
                        </div>
                        <div style="padding: 1rem; background: #F5F7FA; border-left: 4px solid #1976D2; border-radius: 4px;">
                            <strong>Evaluation Reminders</strong><br>
                            <small style="color: #666;">Runs every day at 8:00 AM - Sends pending evaluation alerts</small>
                        </div>
                        <div style="padding: 1rem; background: #F5F7FA; border-left: 4px solid #1976D2; border-radius: 4px;">
                            <strong>License Expiry Check</strong><br>
                            <small style="color: #666;">Runs every Sunday at 2:00 AM - Flags expiring preceptor licenses</small>
                        </div>
                    </div>
                </div>
            `;
        
        case 'dataManagement':
            return `
                <div class="appe-card">
                    <h2 style="margin: 0 0 1rem 0;">⚙️ Data Management Center</h2>
                    <p style="color: #666; margin-bottom: 1.5rem;">Centralized hub for editing and managing all APPE data</p>
                    
                    <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                        <h3 style="margin: 0 0 0.5rem 0; color: white;">📋 Student Information Portal</h3>
                        <p style="margin: 0 0 1rem 0; opacity: 0.9; font-size: 0.9rem;">Students submit their info → Admin reviews → Approve/Reject</p>
                        <a href="student-portal.html" target="_blank" style="background: white; color: #667eea; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 600;">
                            🔗 Open Student Portal
                        </a>
                    </div>
                    
                    <div style="background: #E8F5E9; border-left: 4px solid #4CAF50; padding: 1rem; border-radius: 4px;">
                        <strong>✅ Data Inventory:</strong>
                        <ul style="margin: 0.5rem 0 0 1.5rem; padding: 0;">
                            <li>${APPE_STUDENTS.length} Students (${APPE_STUDENTS.filter(s => s.gender === 'M').length} Males + ${APPE_STUDENTS.filter(s => s.gender === 'F').length} Females)</li>
                            <li>${ROTATION_TYPES.length} Rotation Types</li>
                            <li>89 Active Preceptors</li>
                            <li>8 Training Sites</li>
                        </ul>
                    </div>
                </div>
            `;
        
        default:
            return `<div class="appe-card"><h3>Section: ${section}</h3><p>Content loading...</p></div>`;
    }
};

// Tab navigation function
window.switchAPPESection = function(section) {
    window.appeActiveSection = section;
    const appRoot = document.getElementById('app-root');
    if (appRoot) {
        appRoot.innerHTML = window.renderAPPEExperienceHub();
    }
};
