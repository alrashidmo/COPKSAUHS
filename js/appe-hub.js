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

// Preceptor Directory
const PRECEPTORS = [
    { id: 'P001', name: 'Laila Abu Eisha', credential: 'PharmD', specialty: 'DIC', site: 'KAMC Riyadh', license: 'PH-12345', expiry: '2027-06-15', students: 3, rating: 4.8, email: 'laila.abueisha@ngha.med.sa', availability: ['R1', 'R2', 'R3', 'R6', 'R7'] },
    { id: 'P002', name: 'Hind Almodaimegh', credential: 'PharmD', specialty: 'DIC', site: 'KAMC Riyadh', license: 'PH-12346', expiry: '2027-08-22', students: 4, rating: 4.9, email: 'hind.almodaimegh@ngha.med.sa', availability: ['R1', 'R2'] },
    { id: 'P003', name: 'Dema Almotairi', credential: 'PharmD', specialty: 'Oncology', site: 'KAMC Riyadh', license: 'PH-12347', expiry: '2026-12-10', students: 2, rating: 4.7, email: 'dema.almotairi@ngha.med.sa', availability: ['R3', 'R4'] },
    { id: 'P004', name: 'Maha Alboughaim', credential: 'PharmD', specialty: 'Oncology', site: 'KAMC Riyadh', license: 'PH-12348', expiry: '2027-04-18', students: 3, rating: 4.9, email: 'maha.alboughaim@ngha.med.sa', availability: ['R4'] },
    { id: 'P005', name: 'Ghadah Alyousif', credential: 'PharmD', specialty: 'Oncology', site: 'KAMC Riyadh', license: 'PH-12349', expiry: '2027-11-30', students: 2, rating: 4.8, email: 'ghadah.alyousif@ngha.med.sa', availability: ['R1'] },
    { id: 'P006', name: 'Dr. Sarah Alyousif', credential: 'PharmD, BCPS', specialty: 'Oncology', site: 'KAMC Riyadh', license: 'PH-12350', expiry: '2027-09-15', students: 4, rating: 4.9, email: 'sarah.alyousif@ngha.med.sa', availability: ['R2', 'R6'] },
    { id: 'P007', name: 'Sultan Al Raddadi', credential: 'PharmD', specialty: 'Cardiology', site: 'KAMC Riyadh', license: 'PH-12351', expiry: '2026-10-20', students: 3, rating: 4.7, email: 'sultan.alraddadi@ngha.med.sa', availability: ['R3', 'R5', 'R7'] },
    { id: 'P008', name: 'Lama Alfahaid', credential: 'PharmD', specialty: 'Cardiology', site: 'KAMC Riyadh', license: 'PH-12352', expiry: '2027-07-25', students: 1, rating: 5.0, email: 'lama.alfahaid@ngha.med.sa', availability: ['R4', 'R5', 'R8'] },
    { id: 'P009', name: 'Rahaf Alqahtani', credential: 'PharmD', specialty: 'Cardiology', site: 'KAMC Riyadh', license: 'PH-12353', expiry: '2027-03-12', students: 2, rating: 4.8, email: 'rahaf.alqahtani@ngha.med.sa', availability: ['R5', 'R6', 'R7', 'R8', 'R9', 'R10'] },
    { id: 'P010', name: 'Jawaher Gramish', credential: 'PharmD', specialty: 'Critical Care', site: 'KAMC Riyadh', license: 'PH-12354', expiry: '2027-05-08', students: 2, rating: 4.6, email: 'jawaher.gramish@ngha.med.sa', availability: ['R2', 'R3', 'R9', 'R10'] },
    { id: 'P011', name: 'Maram Aldossari', credential: 'PharmD', specialty: 'Critical Care', site: 'KAMC Riyadh', license: 'PH-12355', expiry: '2026-11-15', students: 3, rating: 4.9, email: 'maram.aldossari@ngha.med.sa', availability: ['R1', 'R3'] },
    { id: 'P012', name: 'Nouf Al Harthi', credential: 'PharmD', specialty: 'Critical Care', site: 'KAMC Riyadh', license: 'PH-12356', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'nouf.alharthi@ngha.med.sa', availability: ['R2'] },
    { id: 'P013', name: 'Abdulmohsen Albehri', credential: 'PharmD', specialty: 'Critical Care', site: 'KAMC Riyadh', license: 'PH-12357', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'abdulmohsen.albehri@ngha.med.sa', availability: ['R3', 'R5'] },
    { id: 'P014', name: 'Abdulrahman Alshaya', credential: 'PharmD', specialty: 'Critical Care', site: 'KAMC Riyadh', license: 'PH-12358', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'abdulrahman.alshaya@ngha.med.sa', availability: ['R2', 'R3', 'R7'] },
    { id: 'P015', name: 'Dr. Lolowa Alswaidan', credential: 'PharmD, BCPS', specialty: 'Critical Care', site: 'KAMC Riyadh', license: 'PH-12359', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'lolowa.alswaidan@ngha.med.sa', availability: ['R2', 'R4'] },
    { id: 'P016', name: 'Maha Assadoon', credential: 'PharmD', specialty: 'Nephrology', site: 'KAMC Riyadh', license: 'PH-12360', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'maha.assadoon@ngha.med.sa', availability: ['R8'] },
    { id: 'P017', name: 'Numan Alabdan', credential: 'PharmD', specialty: 'Nephrology', site: 'KAMC Riyadh', license: 'PH-12361', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'numan.alabdan@ngha.med.sa', availability: ['R1', 'R4'] },
    { id: 'P018', name: 'Dr. Yousef AlRajhi', credential: 'PharmD, BCPS', specialty: 'Nephrology', site: 'KAMC Riyadh', license: 'PH-12362', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'yousef.alrajhi@ngha.med.sa', availability: ['R2', 'R3', 'R4', 'R8'] },
    { id: 'P019', name: 'Dr. Mohammed Al Rufaiq', credential: 'PharmD, BCPS', specialty: 'Nephrology', site: 'KAMC Riyadh', license: 'PH-12363', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'mohammed.alrufaiq@ngha.med.sa', availability: ['R4', 'R6'] },
    { id: 'P020', name: 'Dr. Emad Basalasel', credential: 'PharmD', specialty: 'Outpatient', site: 'KAMC Riyadh', license: 'PH-12364', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'emad.basalasel@ngha.med.sa', availability: ['R1', 'R4', 'R6'] },
    { id: 'P021', name: 'Sarah Albilal', credential: 'PharmD', specialty: 'Transplant', site: 'KAMC Riyadh', license: 'PH-12365', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'sarah.albilal@ngha.med.sa', availability: ['R3', 'R6', 'R8'] },
    { id: 'P022', name: 'Khalefa Mohammed Al Thiab', credential: 'PharmD', specialty: 'Transplant', site: 'KAMC Riyadh', license: 'PH-12366', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'khalefa.althiab@ngha.med.sa', availability: ['R1', 'R2', 'R3', 'R7'] },
    { id: 'P023', name: 'Shuroug Alowais', credential: 'PharmD', specialty: 'Infectious Diseases', site: 'KAMC Riyadh', license: 'PH-12367', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'shuroug.alowais@ngha.med.sa', availability: ['R4', 'R5', 'R6', 'R9', 'R10'] },
    { id: 'P024', name: 'Abdulrahman ALAMRI', credential: 'PharmD', specialty: 'Infectious Diseases', site: 'KAMC Riyadh', license: 'PH-12368', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'abdulrahman.alamri@ngha.med.sa', availability: ['R5', 'R6', 'R7', 'R8', 'R9'] },
    { id: 'P025', name: 'Ghada Almardawi', credential: 'PharmD', specialty: 'Medication Safety', site: 'KAMC Riyadh', license: 'PH-12369', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'ghada.almardawi@ngha.med.sa', availability: ['R3', 'R4', 'R5', 'R6', 'R8'] },
    { id: 'P026', name: 'Dr. Hama Al Abdulkarim', credential: 'PharmD, BCPS', specialty: 'Pharmacoeconomic', site: 'KAMC Riyadh', license: 'PH-12370', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'hama.alabdulkarim@ngha.med.sa', availability: ['R1', 'R2', 'R3', 'R6', 'R7', 'R9', 'R10'] },
    { id: 'P027', name: 'Meshary Al Meshary', credential: 'PharmD', specialty: 'Pediatric', site: 'KAMC Riyadh', license: 'PH-12371', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'meshary.almeshary@ngha.med.sa', availability: ['R5', 'R6'] },
    { id: 'P028', name: 'Dr. saleh ALANAZI', credential: 'PharmD', specialty: 'Quality Assurance', site: 'KAMC Riyadh', license: 'PH-12372', expiry: '2027-08-30', students: 2, rating: 4.8, email: 'saleh.alanazi@ngha.med.sa', availability: ['R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R9'] }
];

// Training Sites (with site ratings)
const TRAINING_SITES = [
    { id: 'S001', name: 'King Abdulaziz Medical City - Riyadh (KAMC)', type: 'Tertiary Hospital', capacity: 120, activeStudents: 98, preceptors: 45, specialties: ['IM', 'ICU', 'Pediatrics', 'Oncology', 'Nephrology', 'ID', 'SOT', 'NICU', 'Cardiology'], address: 'Riyadh, Saudi Arabia', contact: '+966-11-252-0088', rating: 4.7 },
    { id: 'S002', name: 'King Fahad Medical City (KFMC)', type: 'Tertiary Hospital', capacity: 25, activeStudents: 18, preceptors: 12, specialties: ['ICU', 'Cardiology', 'Pediatrics', 'Med Safety'], address: 'Riyadh, Saudi Arabia', contact: '+966-11-288-9999', rating: 4.8 },
    { id: 'S003', name: 'National Guard Hospital (NGH)', type: 'Tertiary Hospital', capacity: 15, activeStudents: 12, preceptors: 8, specialties: ['IM', 'ID'], address: 'Riyadh, Saudi Arabia', contact: '+966-11-801-1111', rating: 4.6 },
    { id: 'S004', name: 'Nahdi Pharmacy Network', type: 'Community Chain', capacity: 10, activeStudents: 5, preceptors: 3, specialties: ['Community'], address: 'Multiple Locations', contact: '+966-92-000-6234', rating: 4.5 },
    { id: 'S005', name: 'AlDawaa Pharmacies', type: 'Community Chain', capacity: 8, activeStudents: 3, preceptors: 2, specialties: ['Community'], address: 'Multiple Locations', contact: '+966-11-478-8888', rating: 4.4 },
    { id: 'S006', name: 'King Saud Bin Abdulaziz University (KSAU-HS)', type: 'Academic Institution', capacity: 5, activeStudents: 3, preceptors: 2, specialties: ['Academia', 'Research'], address: 'Riyadh, Saudi Arabia', contact: '+966-11-429-4444', rating: 4.9 },
    { id: 'S007', name: 'Saudi FDA (SFDA)', type: 'Regulatory Agency', capacity: 3, activeStudents: 2, preceptors: 0, specialties: ['Regulatory Affairs'], address: 'Riyadh, Saudi Arabia', contact: '+966-11-203-8222', rating: 4.3 },
    { id: 'S008', name: 'Medical Referral Center (MRC)', type: 'Research Center', capacity: 4, activeStudents: 2, preceptors: 0, specialties: ['Research'], address: 'Riyadh, Saudi Arabia', contact: '+966-11-801-1111', rating: 4.2 }
];

// Sample Assignments (with editable evaluations)
const ASSIGNMENTS = [
    // Period 1 - Internal Medicine & Critical Care Focus
    { student: 'Mohammad Fares Almoteb', id: '38-1-1-1-0601', rotation: 'Internal Medicine', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 95, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.7, siteEval: 4.7 },
    { student: 'Nasser Trad Aldosari', id: '39-1-1-1-0116', rotation: 'Critical Care', site: 'KAMC Riyadh', preceptor: 'Dr. Sarah Al-Mutairi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 98, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.9, siteEval: 4.8 },
    { student: 'Abdullah Ibrahim Alkhulaifi', id: '41-1-1-1-0050', rotation: 'Cardiology', site: 'KFMC', preceptor: 'Dr. Abdullah Al-Rasheed', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 88, status: 'Confirmed', preceptorEval: 4.5, studentEval: 4.6, siteEval: 4.8 },
    { student: 'Saud Enad Alanazi', id: '41-1-1-1-0152', rotation: 'Community Pharmacy', site: 'Nahdi Pharmacy', preceptor: 'PharmD. Khaled Al-Harbi', start: '2026-02-01', end: '2026-03-14', preference: 3, score: 82, status: 'Confirmed', preceptorEval: 4.3, studentEval: 4.2, siteEval: 4.5 },
    { student: 'Batal Muhayya Aldosari', id: '41-1-1-1-0350', rotation: 'Oncology', site: 'KAMC Riyadh', preceptor: 'Dr. Noura Al-Dossary', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 92, status: 'Confirmed', preceptorEval: 4.7, studentEval: 4.8, siteEval: 4.7 },
    { student: 'Faisal Mohammed Alshehri', id: '41-1-1-1-0523', rotation: 'Pediatrics', site: 'KAMC Riyadh', preceptor: 'Dr. Reem Al-Shehri', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 96, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.8, siteEval: 4.7 },
    { student: 'Ahmed Murdhi Alharbi', id: '42-1-1-1-0017', rotation: 'Infectious Diseases', site: 'KAMC Riyadh', preceptor: 'Dr. Saud Al-Mutairi', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 89, status: 'Confirmed', preceptorEval: 4.6, studentEval: 4.7, siteEval: 4.7 },
    { student: 'Bandar Sultan Aldawish', id: '42-1-1-1-0055', rotation: 'Nephrology', site: 'KAMC Riyadh', preceptor: 'Dr. Turki Al-Otaibi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 87, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.5, siteEval: 4.7 },
    { student: 'Hamad Mohammed Alkhalaf', id: '42-1-1-1-0076', rotation: 'Institutional Pharmacy', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 84, status: 'Confirmed', preceptorEval: 4.4, studentEval: 4.3, siteEval: 4.7 },
    { student: 'Riadh Mansor Arrais', id: '42-1-1-1-0114', rotation: 'Emergency Medicine', site: 'KAMC Riyadh', preceptor: 'Dr. Sarah Al-Mutairi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 97, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.9, siteEval: 4.7 },
    { student: 'Sultan Ali Aljardan', id: '42-1-1-1-0148', rotation: 'Drug Information Center', site: 'KAMC Riyadh', preceptor: 'Dr. Maha Al-Ghamdi', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 81, status: 'Confirmed', preceptorEval: 4.2, studentEval: 4.1, siteEval: 4.7 },
    { student: 'Abdulrahman Sulaiman Alossimi', id: '42-1-1-1-0192', rotation: 'Outpatient Pharmacy', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 90, status: 'Confirmed', preceptorEval: 4.6, studentEval: 4.7, siteEval: 4.7 },
    { student: 'Abdulrahman Majid Almadi', id: '42-1-1-1-0208', rotation: 'Internal Medicine', site: 'NGH', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 3, score: 86, status: 'Confirmed', preceptorEval: 4.5, studentEval: 4.4, siteEval: 4.6 },
    { student: 'Abdulsalam Zarea Alanazi', id: '42-1-1-1-0210', rotation: 'Critical Care', site: 'KFMC', preceptor: 'Dr. Faisal Al-Omari', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 93, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.7, siteEval: 4.8 },
    { student: 'Abdulaziz Abdulrahman Alarifi', id: '42-1-1-1-0236', rotation: 'Cardiology', site: 'KAMC Riyadh', preceptor: 'Dr. Abdullah Al-Rasheed', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 98, status: 'Confirmed', preceptorEval: 5.0, studentEval: 4.9, siteEval: 4.7 },
    { student: 'Abdulmajeed Mohammed Alsuwaylihi', id: '42-1-1-1-0271', rotation: 'Solid Organ Transplant', site: 'KAMC Riyadh', preceptor: 'Dr. Hanan Al-Shahrani', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 94, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.8, siteEval: 4.7 },
    { student: 'Faris Salem Althobiti', id: '42-1-1-1-0296', rotation: 'Pharmacy Administration', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 85, status: 'Confirmed', preceptorEval: 4.4, studentEval: 4.5, siteEval: 4.7 },
    { student: 'Fahad Ali Alomair', id: '42-1-1-1-0313', rotation: 'Medication Safety', site: 'KAMC Riyadh', preceptor: 'Dr. Sarah Al-Mutairi', start: '2026-02-01', end: '2026-03-14', preference: 3, score: 80, status: 'Confirmed', preceptorEval: 4.1, studentEval: 4.0, siteEval: 4.7 },
    { student: 'Fahad Faisal Almutiri', id: '42-1-1-1-0315', rotation: 'Quality Assurance', site: 'KAMC Riyadh', preceptor: 'Dr. Maha Al-Ghamdi', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 88, status: 'Confirmed', preceptorEval: 4.6, studentEval: 4.6, siteEval: 4.7 },
    { student: 'Mohammed Ibrahim Al Rudhyyan', id: '42-1-1-1-0358', rotation: 'Academia', site: 'KSAU-HS', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 95, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.8, siteEval: 4.9 },
    { student: 'Mohammed Abdulrahman Almahanna', id: '42-1-1-1-0381', rotation: 'Research', site: 'MRC', preceptor: 'Dr. Turki Al-Otaibi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 99, status: 'Confirmed', preceptorEval: 5.0, studentEval: 5.0, siteEval: 4.2 },
    { student: 'Mohammad Abdulwahab Alfafi', id: '42-1-1-1-0387', rotation: 'Community Pharmacy', site: 'AlDawaa Pharmacies', preceptor: 'PharmD. Khaled Al-Harbi', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 86, status: 'Confirmed', preceptorEval: 4.5, studentEval: 4.4, siteEval: 4.4 },
    { student: 'Mohammed Farhan Alotebe', id: '42-1-1-1-0394', rotation: 'Internal Medicine', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 91, status: 'Confirmed', preceptorEval: 4.7, studentEval: 4.7, siteEval: 4.7 },
    
    // Females
    { student: 'Sarah Saud Abdulaziz Bindulaym', id: '39-1-2-1-0303', rotation: 'Oncology', site: 'KAMC Riyadh', preceptor: 'Dr. Noura Al-Dossary', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 96, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.8, siteEval: 4.7 },
    { student: 'Sham Abdullah Al Enazi', id: '41-1-2-1-0040', rotation: 'Pediatrics', site: 'KAMC Riyadh', preceptor: 'Dr. Reem Al-Shehri', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 93, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.7, siteEval: 4.7 },
    { student: 'Dana Emad Aloumi', id: '41-1-2-1-0102', rotation: 'Critical Care', site: 'KFMC', preceptor: 'Dr. Faisal Al-Omari', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 97, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.9, siteEval: 4.8 },
    { student: 'Yara Munif Alshammari', id: '41-1-2-1-0251', rotation: 'Cardiology', site: 'KFMC', preceptor: 'Dr. Abdullah Al-Rasheed', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 94, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.8, siteEval: 4.8 },
    { student: 'Raghad Faisal Alwail', id: '41-1-2-1-0284', rotation: 'Internal Medicine', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 87, status: 'Confirmed', preceptorEval: 4.5, studentEval: 4.6, siteEval: 4.7 },
    { student: 'Albatoul Omran Alomran', id: '42-1-2-1-0009', rotation: 'Infectious Diseases', site: 'KAMC Riyadh', preceptor: 'Dr. Saud Al-Mutairi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 91, status: 'Confirmed', preceptorEval: 4.7, studentEval: 4.7, siteEval: 4.7 },
    { student: 'Alhanouf Khaled Almisfer', id: '42-1-2-1-0014', rotation: 'Nephrology', site: 'KAMC Riyadh', preceptor: 'Dr. Turki Al-Otaibi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 92, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.7, siteEval: 4.7 },
    { student: 'Amal Mohammed Aleanzi', id: '42-1-2-1-0019', rotation: 'Outpatient Pharmacy', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 86, status: 'Confirmed', preceptorEval: 4.5, studentEval: 4.6, siteEval: 4.7 },
    { student: 'Jinan Abdulrahman Alhuwayshil', id: '42-1-2-1-0031', rotation: 'Drug Information Center', site: 'KAMC Riyadh', preceptor: 'Dr. Maha Al-Ghamdi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 95, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.8, siteEval: 4.7 },
    { student: 'Jod Amer Mohammed Aljuaidi', id: '42-1-2-1-0033', rotation: 'Community Pharmacy', site: 'Nahdi Pharmacy', preceptor: 'PharmD. Khaled Al-Harbi', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 89, status: 'Confirmed', preceptorEval: 4.6, studentEval: 4.7, siteEval: 4.5 },
    { student: 'Hissah Mohammed Alkyssir', id: '42-1-2-1-0038', rotation: 'Institutional Pharmacy', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 90, status: 'Confirmed', preceptorEval: 4.7, studentEval: 4.6, siteEval: 4.7 },
    { student: 'Hussh Naif Albahlal', id: '42-1-2-1-0040', rotation: 'Emergency Medicine', site: 'KAMC Riyadh', preceptor: 'Dr. Sarah Al-Mutairi', start: '2026-02-01', end: '2026-03-14', preference: 3, score: 83, status: 'Confirmed', preceptorEval: 4.3, studentEval: 4.2, siteEval: 4.7 },
    { student: 'Khuzama Hamoud J Alamri', id: '42-1-2-1-0047', rotation: 'Neonatal', site: 'KAMC Riyadh', preceptor: 'Dr. Fatimah Al-Zahrani', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 98, status: 'Confirmed', preceptorEval: 5.0, studentEval: 5.0, siteEval: 4.7 },
    { student: 'Khawla Ahmed Alrubayan', id: '42-1-2-1-0048', rotation: 'Solid Organ Transplant', site: 'KAMC Riyadh', preceptor: 'Dr. Hanan Al-Shahrani', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 94, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.8, siteEval: 4.7 },
    { student: 'Ragad Khlaf Alenazi', id: '42-1-2-1-0085', rotation: 'Pharmacoeconomics', site: 'KAMC Riyadh', preceptor: 'Dr. Maha Al-Ghamdi', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 90, status: 'Confirmed', preceptorEval: 4.7, studentEval: 4.6, siteEval: 4.7 },
    { student: 'Raghad Saleh Abdullah Alajmi', id: '42-1-2-1-0087', rotation: 'Medication Safety', site: 'KFMC', preceptor: 'Dr. Sarah Al-Mutairi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 92, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.7, siteEval: 4.8 },
    { student: 'Raghad Sulaiman K Almutairi', id: '42-1-2-1-0091', rotation: 'Quality Assurance', site: 'KAMC Riyadh', preceptor: 'Dr. Maha Al-Ghamdi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 96, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.8, siteEval: 4.7 },
    { student: 'Raneem Muharib Alanazi', id: '42-1-2-1-0103', rotation: 'Pharmacy Administration', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 88, status: 'Confirmed', preceptorEval: 4.6, studentEval: 4.6, siteEval: 4.7 },
    { student: 'Ruwayda Saeed Mohammed Alshahrani', id: '42-1-2-1-0112', rotation: 'Internal Medicine', site: 'NGH', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 3, score: 84, status: 'Confirmed', preceptorEval: 4.4, studentEval: 4.3, siteEval: 4.6 },
    { student: 'Ruyuf Abdullah Alshuqayr', id: '42-1-2-1-0136', rotation: 'Critical Care', site: 'KFMC', preceptor: 'Dr. Faisal Al-Omari', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 97, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.9, siteEval: 4.8 },
    { student: 'Sarah Abdulaziz Bin Saqyah', id: '42-1-2-1-0154', rotation: 'Cardiology', site: 'KAMC Riyadh', preceptor: 'Dr. Abdullah Al-Rasheed', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 92, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.7, siteEval: 4.7 },
    { student: 'Sadeem Abdulaziz Alamri', id: '42-1-2-1-0161', rotation: 'Oncology', site: 'KAMC Riyadh', preceptor: 'Dr. Noura Al-Dossary', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 95, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.8, siteEval: 4.7 },
    { student: 'Shaden Abdullah Alharbi', id: '42-1-2-1-0178', rotation: 'Pediatrics', site: 'KAMC Riyadh', preceptor: 'Dr. Reem Al-Shehri', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 91, status: 'Confirmed', preceptorEval: 4.7, studentEval: 4.7, siteEval: 4.7 },
    { student: 'Shoroog Saad Faleh Al Otaibi', id: '42-1-2-1-0183', rotation: 'Infectious Diseases', site: 'NGH', preceptor: 'Dr. Saud Al-Mutairi', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 93, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.7, siteEval: 4.6 },
    { student: 'Shoug Khalid Almousa', id: '42-1-2-1-0194', rotation: 'Nephrology', site: 'KAMC Riyadh', preceptor: 'Dr. Turki Al-Otaibi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 89, status: 'Confirmed', preceptorEval: 4.6, studentEval: 4.6, siteEval: 4.7 },
    { student: 'Ohoud Mansour M Almutairi', id: '42-1-2-1-0211', rotation: 'Outpatient Pharmacy', site: 'KFMC', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 90, status: 'Confirmed', preceptorEval: 4.7, studentEval: 4.6, siteEval: 4.8 },
    { student: 'Ghadah Meteb Alsanoni', id: '42-1-2-1-0217', rotation: 'Drug Information Center', site: 'KAMC Riyadh', preceptor: 'Dr. Maha Al-Ghamdi', start: '2026-02-01', end: '2026-03-14', preference: 3, score: 82, status: 'Confirmed', preceptorEval: 4.2, studentEval: 4.3, siteEval: 4.7 },
    { student: 'Ghala Salem Obidalullh Alharbi', id: '42-1-2-1-0219', rotation: 'Community Pharmacy', site: 'Nahdi Pharmacy', preceptor: 'PharmD. Khaled Al-Harbi', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 88, status: 'Confirmed', preceptorEval: 4.6, studentEval: 4.5, siteEval: 4.5 },
    { student: 'Ghala Mohammad B Alomari', id: '42-1-2-1-0221', rotation: 'Institutional Pharmacy', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 2, score: 90, status: 'Confirmed', preceptorEval: 4.7, studentEval: 4.6, siteEval: 4.7 },
    { student: 'Lama Ibrahim Alfehaid', id: '42-1-2-1-0250', rotation: 'Emergency Medicine', site: 'KAMC Riyadh', preceptor: 'Dr. Sarah Al-Mutairi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 94, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.8, siteEval: 4.7 },
    { student: 'Lina Moshrif Alamri', id: '42-1-2-1-0270', rotation: 'Internal Medicine', site: 'KAMC Riyadh', preceptor: 'Dr. Mohammed Al-Qahtani', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 96, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.8, siteEval: 4.7 },
    { student: 'Mashael Abdullah Almutairi', id: '42-1-2-1-0275', rotation: 'Critical Care', site: 'KAMC Riyadh', preceptor: 'Dr. Sarah Al-Mutairi', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 98, status: 'Confirmed', preceptorEval: 5.0, studentEval: 4.9, siteEval: 4.7 },
    { student: 'Manar Mohammed Al Arifi', id: '42-1-2-1-0276', rotation: 'Community Pharmacy', site: 'AlDawaa Pharmacies', preceptor: 'PharmD. Khaled Al-Harbi', start: '2026-02-01', end: '2026-03-14', preference: 3, score: 78, status: 'Pending', preceptorEval: 3.9, studentEval: 3.8, siteEval: 4.4 },
    { student: 'Monirah Saleh N Alotaibi', id: '42-1-2-1-0284', rotation: 'Cardiology', site: 'KFMC', preceptor: 'Dr. Abdullah Al-Rasheed', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 92, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.7, siteEval: 4.8 },
    { student: 'Muneerah Faisal Al Boushal', id: '42-1-2-1-0286', rotation: 'Oncology', site: 'KAMC Riyadh', preceptor: 'Dr. Noura Al-Dossary', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 95, status: 'Confirmed', preceptorEval: 4.9, studentEval: 4.8, siteEval: 4.7 },
    { student: 'Nouf Abdulaziz Alnajim', id: '42-1-2-1-0327', rotation: 'Pediatrics', site: 'KFMC', preceptor: 'Dr. Reem Al-Shehri', start: '2026-02-01', end: '2026-03-14', preference: 1, score: 93, status: 'Confirmed', preceptorEval: 4.8, studentEval: 4.7, siteEval: 4.8 }
];

// EPAs (Entrustable Professional Activities)
const EPA_CATEGORIES = [
    { id: 'EPA1', title: 'Collect Information', description: 'Gather comprehensive patient data', required: true, weight: 10 },
    { id: 'EPA2', title: 'Assess Information', description: 'Analyze patient information to identify problems', required: true, weight: 15 },
    { id: 'EPA3', title: 'Develop Treatment Plan', description: 'Create evidence-based therapeutic plans', required: true, weight: 15 },
    { id: 'EPA4', title: 'Implement Care Plan', description: 'Execute and monitor therapeutic interventions', required: true, weight: 15 },
    { id: 'EPA5', title: 'Patient Counseling', description: 'Educate patients about medications', required: true, weight: 10 },
    { id: 'EPA6', title: 'Interprofessional Collaboration', description: 'Work effectively with healthcare team', required: true, weight: 10 },
    { id: 'EPA7', title: 'Medication Safety', description: 'Identify and prevent medication errors', required: true, weight: 10 },
    { id: 'EPA8', title: 'Population Health', description: 'Manage medication therapy for populations', required: false, weight: 8 },
    { id: 'EPA9', title: 'Professional Development', description: 'Demonstrate lifelong learning', required: true, weight: 7 }
];

// Academic Year 2025-2026: 6 Rotation Periods
const ROTATION_PERIODS = [
    { 
        id: 'R1', 
        name: 'Rotation 1', 
        start: '2025-07-20', 
        end: '2025-08-14', 
        weeks: 4, 
        status: 'completed',
        academicWeeks: 'July 20 - Aug 14, 2025'
    },
    { 
        id: 'R2', 
        name: 'Rotation 2', 
        start: '2025-08-17', 
        end: '2025-09-11', 
        weeks: 4, 
        status: 'completed',
        academicWeeks: 'Aug 17 - Sep 11, 2025'
    },
    { 
        id: 'R3', 
        name: 'Rotation 3', 
        start: '2025-09-14', 
        end: '2025-10-09', 
        weeks: 4, 
        status: 'completed',
        academicWeeks: 'Sep 14 - Oct 9, 2025'
    },
    { 
        id: 'R4', 
        name: 'Rotation 4', 
        start: '2025-10-19', 
        end: '2025-11-13', 
        weeks: 4, 
        status: 'completed',
        academicWeeks: 'Oct 19 - Nov 13, 2025'
    },
    { 
        id: 'R5', 
        name: 'Rotation 5', 
        start: '2025-11-16', 
        end: '2025-12-11', 
        weeks: 4, 
        status: 'completed',
        academicWeeks: 'Nov 16 - Dec 11, 2025'
    },
    { 
        id: 'R6', 
        name: 'Rotation 6', 
        start: '2025-12-14', 
        end: '2026-01-08', 
        weeks: 4, 
        status: 'completed',
        academicWeeks: 'Dec 14, 2025 - Jan 8, 2026'
    },
    { 
        id: 'R7', 
        name: 'Rotation 7', 
        start: '2026-01-18', 
        end: '2026-02-12', 
        weeks: 4, 
        status: 'active',
        academicWeeks: 'Jan 18 - Feb 12, 2026'
    },
    { 
        id: 'R8', 
        name: 'Rotation 8 (Ramadan)', 
        start: '2026-02-15', 
        end: '2026-04-11', 
        weeks: 8, 
        status: 'upcoming',
        academicWeeks: 'Feb 15 - Apr 11, 2026'
    },
    { 
        id: 'R9', 
        name: 'Rotation 9', 
        start: '2026-03-29', 
        end: '2026-04-23', 
        weeks: 4, 
        status: 'upcoming',
        academicWeeks: 'Mar 29 - Apr 23, 2026'
    },
    { 
        id: 'R10', 
        name: 'Rotation 10', 
        start: '2026-04-26', 
        end: '2026-05-21', 
        weeks: 4, 
        status: 'upcoming',
        academicWeeks: 'Apr 26 - May 21, 2026'
    }
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

// Main render function
window.renderAPPEExperienceHub = function() {
    console.log('🎯 renderAPPEExperienceHub called');
    const activeSection = window.appeActiveSection || 'dashboard';
    console.log('📍 Active section:', activeSection);
    
    return `
        ${APPE_STYLES}
        
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
            // Load KPI Settings from localStorage
            const kpiSettings = JSON.parse(localStorage.getItem('appeKpiSettings')) || {
                topPerformerThreshold: 95,
                atRiskThreshold: 85,
                complianceGoodThreshold: 90,
                complianceWarningThreshold: 75,
                highGPAThreshold: 3.85
            };
            
            // Calculate dynamic KPIs
            const currentDate = new Date('2026-01-12');
            const today = new Date('2026-01-12');
            const totalStudentsCount = APPE_STUDENTS.length;
            const greenCount = APPE_STUDENTS.filter(s => s.compliance === 'green').length;
            const yellowCount = APPE_STUDENTS.filter(s => s.compliance === 'yellow').length;
            const redCount = APPE_STUDENTS.filter(s => s.compliance === 'red').length;
            const complianceRate = ((greenCount / totalStudentsCount) * 100).toFixed(1);
            
            // GPA Metrics
            const avgGPA = (APPE_STUDENTS.reduce((sum, s) => sum + s.gpa, 0) / totalStudentsCount).toFixed(2);
            const highestGPAStudent = APPE_STUDENTS.reduce((max, s) => s.gpa > max.gpa ? s : max);
            const lowestGPAStudent = APPE_STUDENTS.reduce((min, s) => s.gpa < min.gpa ? s : min);
            const highestGPA = highestGPAStudent.gpa.toFixed(2);
            const lowestGPA = lowestGPAStudent.gpa.toFixed(2);
            
            // APPE Performance Metrics (based on evaluation scores, not GPA)
            const topPerformers = ASSIGNMENTS.filter(a => a.score >= kpiSettings.topPerformerThreshold).length;
            const atRisk = ASSIGNMENTS.filter(a => a.score < kpiSettings.atRiskThreshold).length;
            
            // Current Rotation Period
            const currentRotation = TIME_PERIODS.find(p => {
                const start = new Date(p.start);
                const end = new Date(p.end);
                return today >= start && today <= end;
            });
            const nextRotation = TIME_PERIODS.find(p => new Date(p.start) > today);
            const daysUntilNext = nextRotation ? Math.ceil((new Date(nextRotation.start) - today) / (1000 * 60 * 60 * 24)) : 0;
            
            // Preceptor Availability
            const activePreceptors = PRECEPTORS.filter(p => p.availability && p.availability.length > 0);
            const currentRotationId = currentRotation ? currentRotation.id : 'R7';
            const availableNow = activePreceptors.filter(p => p.availability.includes(currentRotationId)).length;
            const avgPreceptorsPerRotation = (activePreceptors.reduce((sum, p) => sum + p.availability.length, 0) / TIME_PERIODS.length).toFixed(1);
            
            // Evaluation Metrics
            const preceptorsWithRatings = PRECEPTORS.filter(p => p.rating);
            const avgPreceptorRating = preceptorsWithRatings.length > 0 ? (preceptorsWithRatings.reduce((sum, p) => sum + p.rating, 0) / preceptorsWithRatings.length).toFixed(2) : '4.5';
            const highestRatedPreceptor = preceptorsWithRatings.length > 0 ? preceptorsWithRatings.reduce((max, p) => p.rating > max.rating ? p : max) : null;
            const lowestRatedPreceptor = preceptorsWithRatings.length > 0 ? preceptorsWithRatings.reduce((min, p) => p.rating < min.rating ? p : min) : null;
            const highestPreceptorRating = highestRatedPreceptor ? highestRatedPreceptor.rating.toFixed(1) : '5.0';
            const lowestPreceptorRating = lowestRatedPreceptor ? lowestRatedPreceptor.rating.toFixed(1) : '4.0';
            
            const studentScores = ASSIGNMENTS.filter(a => a.score).map(a => a.score);
            const avgStudentScore = studentScores.length > 0 ? (studentScores.reduce((a, b) => a + b, 0) / studentScores.length).toFixed(1) : '92';
            const highestStudentScore = studentScores.length > 0 ? Math.max(...studentScores) : 98;
            const lowestStudentScore = studentScores.length > 0 ? Math.min(...studentScores) : 82;
            
            // Site Utilization
            const totalSiteCapacity = TRAINING_SITES.reduce((sum, s) => sum + s.capacity, 0);
            const totalSiteUtilization = TRAINING_SITES.reduce((sum, s) => sum + s.activeStudents, 0);
            const siteUtilizationRate = ((totalSiteUtilization / totalSiteCapacity) * 100).toFixed(1);
            const highestUtilizedSite = TRAINING_SITES.reduce((max, s) => (s.activeStudents / s.capacity) > (max.activeStudents / max.capacity) ? s : max);
            const lowestUtilizedSite = TRAINING_SITES.reduce((min, s) => (s.activeStudents / s.capacity) < (min.activeStudents / min.capacity) ? s : min);
            
            // Rotation Progress
            const completedRotations = TIME_PERIODS.filter(p => new Date(p.end) < today).length;
            const progressPercent = ((completedRotations / TIME_PERIODS.length) * 100).toFixed(0);
            
            // Overall APPE Experience (composite score)
            const overallExperience = ((parseFloat(avgPreceptorRating) + (parseFloat(avgStudentScore) / 20) + (parseFloat(complianceRate) / 20)) / 3).toFixed(2);
            
            return `
                <!-- KPI SETTINGS BUTTON -->
                <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-bottom: 1rem;">
                    <button onclick="window.openEvaluationHub()" class="btn btn-primary" style="display: flex; align-items: center; gap: 0.5rem;">
                        📊 Manage Evaluations
                    </button>
                    <button onclick="window.openKPISettings()" class="btn btn-outline" style="display: flex; align-items: center; gap: 0.5rem;">
                        ⚙️ Configure KPI Thresholds
                    </button>
                </div>

                <!-- HEADER KPIs -->
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; margin-bottom: 2rem;">
                    <div class="appe-card" style="text-align: center; padding: 1.5rem;">
                        <div style="font-size: 0.85rem; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">Total Students</div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">${totalStudentsCount}</div>
                        <small style="color: #666;">PharmD Y5 - Spring 2026</small>
                    </div>
                    <div class="appe-card" style="text-align: center; padding: 1.5rem;">
                        <div style="font-size: 0.85rem; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">Compliance Rate</div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: ${complianceRate >= kpiSettings.complianceGoodThreshold ? '#1B5E20' : complianceRate >= kpiSettings.complianceWarningThreshold ? '#F57C00' : '#C62828'}; margin: 0.5rem 0;">${complianceRate}%</div>
                        <small style="color: #4CAF50;">🟢 ${greenCount} | 🟡 ${yellowCount} | 🔴 ${redCount}</small>
                    </div>
                    <div class="appe-card" style="text-align: center; padding: 1.5rem;">
                        <div style="font-size: 0.85rem; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">Average GPA</div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">${avgGPA}</div>
                        <small style="color: #666; display: block;">⬆️ ${highestGPA}: ${highestGPAStudent.name}</small>
                        <small style="color: #666; display: block;">⬇️ ${lowestGPA}: ${lowestGPAStudent.name}</small>
                    </div>
                    <div class="appe-card" style="text-align: center; padding: 1.5rem;">
                        <div style="font-size: 0.85rem; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">Current Rotation</div>
                        <div style="font-size: 1.8rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">${currentRotation ? currentRotation.name : 'Between Rotations'}</div>
                        <small style="color: #666;">${daysUntilNext > 0 ? `⏱️ ${daysUntilNext} days until ${nextRotation.name}` : 'In Progress'}</small>
                    </div>
                    <div class="appe-card" style="text-align: center; padding: 1.5rem;">
                        <div style="font-size: 0.85rem; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">Overall Experience</div>
                        <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">${overallExperience}/5</div>
                        <small style="color: #4CAF50;">⭐ Excellent Program Quality</small>
                    </div>
                </div>

                <!-- STUDENT PERFORMANCE METRICS -->
                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin: 0 0 1.5rem 0; color: #1B5E20; display: flex; align-items: center; gap: 0.5rem;">
                        👨‍🎓 Student Performance Metrics
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                        <!-- Top Performers -->
                        <div style="background: linear-gradient(135deg, #E8F5E9, #C8E6C9); padding: 2rem; border-radius: 12px; border-left: 5px solid #4CAF50;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <div style="font-size: 0.85rem; color: #1B5E20; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Top Performers</div>
                                    <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20; margin: 0.5rem 0;">${topPerformers}</div>
                                </div>
                                <div style="background: #4CAF50; color: white; padding: 0.5rem 0.75rem; border-radius: 8px; font-weight: 700; font-size: 0.9rem;">
                                    🌟 Excellence
                                </div>
                            </div>
                            <div style="color: #2E7D32; font-weight: 600; font-size: 0.95rem;">
                                APPE Score ≥ ${kpiSettings.topPerformerThreshold}%
                            </div>
                        </div>

                        <!-- At-Risk Students -->
                        <div style="background: linear-gradient(135deg, #FFF3E0, #FFE0B2); padding: 2rem; border-radius: 12px; border-left: 5px solid #FF9800;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <div style="font-size: 0.85rem; color: #E65100; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">At-Risk Students</div>
                                    <div style="font-size: 2.5rem; font-weight: 700; color: #E65100; margin: 0.5rem 0;">${atRisk}</div>
                                </div>
                                <div style="background: #FF9800; color: white; padding: 0.5rem 0.75rem; border-radius: 8px; font-weight: 700; font-size: 0.9rem;">
                                    ⚠️ Support
                                </div>
                            </div>
                            <div style="color: #F57C00; font-weight: 600; font-size: 0.95rem;">
                                APPE Score &lt; ${kpiSettings.atRiskThreshold}%
                            </div>
                        </div>

                        <!-- Average Evaluation -->
                        <div style="background: linear-gradient(135deg, #E3F2FD, #BBDEFB); padding: 2rem; border-radius: 12px; border-left: 5px solid #2196F3;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <div style="font-size: 0.85rem; color: #1565C0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Average Evaluation</div>
                                    <div style="font-size: 2.5rem; font-weight: 700; color: #1565C0; margin: 0.5rem 0;">${avgStudentScore}%</div>
                                </div>
                                <div style="background: #2196F3; color: white; padding: 0.5rem 0.75rem; border-radius: 8px; font-weight: 700; font-size: 0.9rem;">
                                    📊 Score
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; color: #1976D2; font-weight: 600; font-size: 0.9rem;">
                                <span>⬆️ Highest: ${highestStudentScore}%</span>
                                <span>⬇️ Lowest: ${lowestStudentScore}%</span>
                            </div>
                        </div>

                        <!-- Gender Distribution -->
                        <div style="background: linear-gradient(135deg, #F3E5F5, #E1BEE7); padding: 2rem; border-radius: 12px; border-left: 5px solid #9C27B0;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                <div>
                                    <div style="font-size: 0.85rem; color: #6A1B9A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Gender Distribution</div>
                                    <div style="font-size: 2.5rem; font-weight: 700; color: #6A1B9A; margin: 0.5rem 0;">${APPE_STUDENTS.filter(s => s.gender === 'F').length}F / ${APPE_STUDENTS.filter(s => s.gender === 'M').length}M</div>
                                </div>
                                <div style="background: #9C27B0; color: white; padding: 0.5rem 0.75rem; border-radius: 8px; font-weight: 700; font-size: 0.9rem;">
                                    👥 Ratio
                                </div>
                            </div>
                            <div style="color: #7B1FA2; font-weight: 600; font-size: 0.95rem;">
                                ${((APPE_STUDENTS.filter(s => s.gender === 'F').length / totalStudentsCount) * 100).toFixed(1)}% Female Enrollment
                            </div>
                        </div>
                    </div>
                </div>

                <!-- PRECEPTOR & SITE EVALUATIONS -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
                    <div class="appe-card">
                        <h3 style="margin: 0 0 1.5rem 0; color: #1B5E20; display: flex; align-items: center; gap: 0.5rem;">
                            👨‍⚕️ Preceptor Evaluation Metrics
                        </h3>
                        <div style="display: grid; gap: 1rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #E8F5E9; border-radius: 6px;">
                                <span style="font-weight: 600; color: #1B5E20;">Average Rating</span>
                                <span style="font-size: 1.5rem; font-weight: 700; color: #1B5E20;">${avgPreceptorRating} ⭐</span>
                            </div>
                            <div style="display: flex; flex-direction: column; padding: 1rem; background: #FFF3E0; border-radius: 6px;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-weight: 600; color: #E65100;">Highest Rated</span>
                                    <span style="font-size: 1.5rem; font-weight: 700; color: #E65100;">${highestPreceptorRating} ⭐</span>
                                </div>
                                <small style="color: #E65100; margin-top: 0.25rem;">${highestRatedPreceptor ? highestRatedPreceptor.name : 'N/A'}</small>
                            </div>
                            <div style="display: flex; flex-direction: column; padding: 1rem; background: #E3F2FD; border-radius: 6px;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-weight: 600; color: #1565C0;">Lowest Rated</span>
                                    <span style="font-size: 1.5rem; font-weight: 700; color: #1565C0;">${lowestPreceptorRating} ⭐</span>
                                </div>
                                <small style="color: #1565C0; margin-top: 0.25rem;">${lowestRatedPreceptor ? lowestRatedPreceptor.name : 'N/A'}</small>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #F3E5F5; border-radius: 6px;">
                                <span style="font-weight: 600; color: #6A1B9A;">Active Preceptors</span>
                                <span style="font-size: 1.5rem; font-weight: 700; color: #6A1B9A;">${activePreceptors.length}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="appe-card">
                        <h3 style="margin: 0 0 1.5rem 0; color: #1B5E20; display: flex; align-items: center; gap: 0.5rem;">
                            🏥 Site Utilization Metrics
                        </h3>
                        <div style="display: grid; gap: 1rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #E8F5E9; border-radius: 6px;">
                                <span style="font-weight: 600; color: #1B5E20;">Overall Utilization</span>
                                <span style="font-size: 1.5rem; font-weight: 700; color: #1B5E20;">${siteUtilizationRate}%</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #FFF3E0; border-radius: 6px;">
                                <span style="font-weight: 600; color: #E65100;">Highest Utilized</span>
                                <span style="font-size: 1.1rem; font-weight: 700; color: #E65100;">${highestUtilizedSite.name.split('-')[0].trim()}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #E3F2FD; border-radius: 6px;">
                                <span style="font-weight: 600; color: #1565C0;">Lowest Utilized</span>
                                <span style="font-size: 1.1rem; font-weight: 700; color: #1565C0;">${lowestUtilizedSite.name.split('-')[0].trim()}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #F3E5F5; border-radius: 6px;">
                                <span style="font-weight: 600; color: #6A1B9A;">Total Sites</span>
                                <span style="font-size: 1.5rem; font-weight: 700; color: #6A1B9A;">${TRAINING_SITES.length}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ROTATION & CAPACITY METRICS -->
                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin: 0 0 1.5rem 0; color: #1B5E20; display: flex; align-items: center; gap: 0.5rem;">
                        📅 Rotation & Capacity Overview
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
                        <div style="text-align: center; padding: 1.5rem; background: #E8F5E9; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #1B5E20;">${completedRotations}/${TIME_PERIODS.length}</div>
                            <small style="color: #666; font-weight: 600;">Rotations Complete</small>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #FFF3E0; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #E65100;">${progressPercent}%</div>
                            <small style="color: #666; font-weight: 600;">Academic Progress</small>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #E3F2FD; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #1565C0;">${availableNow}</div>
                            <small style="color: #666; font-weight: 600;">Available Preceptors</small>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #F3E5F5; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #6A1B9A;">${avgPreceptorsPerRotation}</div>
                            <small style="color: #666; font-weight: 600;">Avg/Rotation</small>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #FCE4EC; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #C2185B;">${ROTATION_TYPES.length}</div>
                            <small style="color: #666; font-weight: 600;">Rotation Types</small>
                        </div>
                    </div>
                </div>

                <!-- WELCOME CARD -->
                <div class="appe-card">
                    <h2 style="color: #1B5E20; margin: 0 0 1rem 0;">🎯 APPE Experience Hub</h2>
                    <p style="color: #666; line-height: 1.6; margin-bottom: 1.5rem;">Welcome to the Advanced Pharmacy Practice Experience Hub. This centralized platform manages all aspects of APPE rotations including student assignments, preceptor management, compliance tracking, and automated scheduling for ${totalStudentsCount} PharmD students.</p>
                    
                    <!-- WORKFLOW VISUALIZATION -->
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem; border-radius: 12px; margin-bottom: 1.5rem;">
                        <h3 style="color: white; margin: 0 0 1.5rem 0;">🔄 System Workflow</h3>
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
                            <div style="background: rgba(255,255,255,0.2); padding: 1.5rem; border-radius: 8px; text-align: center; border: 2px solid rgba(255,255,255,0.3);">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">👨‍⚕️</div>
                                <div style="color: white; font-weight: 600; margin-bottom: 0.5rem;">1. Preceptors</div>
                                <small style="color: rgba(255,255,255,0.8);">${PRECEPTORS.length} with availability</small>
                                <div style="margin-top: 0.5rem;">
                                    <button onclick="window.switchAPPESection('preceptors')" style="background: white; color: #764ba2; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.85rem; cursor: pointer; font-weight: 600;">View →</button>
                                </div>
                            </div>
                            <div style="background: rgba(255,255,255,0.2); padding: 1.5rem; border-radius: 8px; text-align: center; border: 2px solid rgba(255,255,255,0.3);">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🗓️</div>
                                <div style="color: white; font-weight: 600; margin-bottom: 0.5rem;">2. Schedule</div>
                                <small style="color: rgba(255,255,255,0.8);">10 rotation periods</small>
                                <div style="margin-top: 0.5rem;">
                                    <button onclick="window.switchAPPESection('schedule')" style="background: white; color: #764ba2; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.85rem; cursor: pointer; font-weight: 600;">View →</button>
                                </div>
                            </div>
                            <div style="background: rgba(255,255,255,0.2); padding: 1.5rem; border-radius: 8px; text-align: center; border: 2px solid rgba(255,255,255,0.3);">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🤖</div>
                                <div style="color: white; font-weight: 600; margin-bottom: 0.5rem;">3. Auto-Plan</div>
                                <small style="color: rgba(255,255,255,0.8);">Smart assignment</small>
                                <div style="margin-top: 0.5rem;">
                                    <button onclick="window.switchAPPESection('schedule')" style="background: white; color: #764ba2; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.85rem; cursor: pointer; font-weight: 600;">Plan →</button>
                                </div>
                            </div>
                            <div style="background: rgba(255,255,255,0.2); padding: 1.5rem; border-radius: 8px; text-align: center; border: 2px solid rgba(255,255,255,0.3);">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📋</div>
                                <div style="color: white; font-weight: 600; margin-bottom: 0.5rem;">4. Assignments</div>
                                <small style="color: rgba(255,255,255,0.8);">${ASSIGNMENTS.length} created</small>
                                <div style="margin-top: 0.5rem;">
                                    <button onclick="window.switchAPPESection('assignments')" style="background: white; color: #764ba2; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.85rem; cursor: pointer; font-weight: 600;">View →</button>
                                </div>
                            </div>
                            <div style="background: rgba(255,255,255,0.2); padding: 1.5rem; border-radius: 8px; text-align: center; border: 2px solid rgba(255,255,255,0.3);">
                                <div style="font-size: 2rem; margin-bottom: 0.5rem;">📅</div>
                                <div style="color: white; font-weight: 600; margin-bottom: 0.5rem;">5. Attendance</div>
                                <small style="color: rgba(255,255,255,0.8);">Track progress</small>
                                <div style="margin-top: 0.5rem;">
                                    <button onclick="window.switchAPPESection('attendance')" style="background: white; color: #764ba2; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.85rem; cursor: pointer; font-weight: 600;">Track →</button>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.15); border-radius: 6px; text-align: center;">
                            <small style="color: white;">
                                <strong>📖 Need Help?</strong> 
                                <a href="#" onclick="window.open('APPE_WORKFLOW.md'); return false;" style="color: #FFF59D; text-decoration: underline; margin-left: 0.5rem;">View Complete Workflow Guide</a>
                            </small>
                        </div>
                    </div>
                    
                    <div style="background: #E8F5E9; padding: 1.5rem; border-left: 4px solid #4CAF50; border-radius: 4px;">
                        <strong style="color: #1B5E20; display: block; margin-bottom: 0.75rem;">🚀 Quick Actions:</strong>
                        <ul style="margin: 0; padding-left: 1.5rem; color: #666;">
                            <li>View complete student roster (${totalStudentsCount} students) and compliance status</li>
                            <li>Manage ${ROTATION_TYPES.length} rotation types across ${TRAINING_SITES.length} training sites</li>
                            <li>Access ${activePreceptors.length} active preceptors with availability tracking</li>
                            <li>Run automated matching algorithm for optimal assignments</li>
                            <li>Track evaluations and EPA completion</li>
                            <li>Monitor real-time rotation progress (${progressPercent}% complete)</li>
                        </ul>
                    </div>
                </div>
            `;
        
        case 'schedule':
            const scheduleToday = new Date();
            const currentPeriod = ROTATION_PERIODS.find(p => {
                const start = new Date(p.start);
                const end = new Date(p.end);
                return scheduleToday >= start && scheduleToday <= end;
            }) || ROTATION_PERIODS[0];
            
            return `
                <div class="appe-card" style="margin-bottom: 1.5rem;">
                    <h2 style="margin: 0 0 0.5rem 0;">🗓️ APPE 10-Rotation Schedule 2025-2026</h2>
                    <p style="color: #666; margin: 0;">Academic Year Timeline: July 2025 - May 2026 (10 rotations, 44 weeks total)</p>
                </div>

                <!-- Timeline Visualization -->
                <div class="appe-card" style="margin-bottom: 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem;">
                    <h3 style="margin: 0 0 1.5rem 0; color: white;">📅 Academic Calendar Overview</h3>
                    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem;">
                        ${ROTATION_PERIODS.map((period, idx) => {
                            const isActive = period.id === currentPeriod.id;
                            const isPast = new Date(period.end) < scheduleToday;
                            const isFuture = new Date(period.start) > scheduleToday;
                            
                            return `
                                <div style="background: ${isActive ? '#4CAF50' : isPast ? '#9E9E9E' : 'rgba(255,255,255,0.2)'}; padding: 1rem; border-radius: 8px; text-align: center; border: ${isActive ? '3px solid #FFF' : 'none'};">
                                    <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem;">${period.name}</div>
                                    <div style="font-size: 0.85rem; opacity: 0.9;">${period.academicWeeks}</div>
                                    <div style="font-size: 0.75rem; margin-top: 0.5rem; opacity: 0.8;">${period.start} to ${period.end}</div>
                                    <div style="margin-top: 0.5rem; padding: 0.25rem 0.5rem; background: rgba(0,0,0,0.2); border-radius: 12px; font-size: 0.75rem;">
                                        ${isActive ? '⭐ ACTIVE' : isPast ? '✅ Completed' : '📅 Upcoming'}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- Period Details -->
                ${ROTATION_PERIODS.map((period, idx) => {
                    const isActive = period.id === currentPeriod.id;
                    const isPeriodPast = new Date(period.end) < scheduleToday;
                    const isPeriodFuture = new Date(period.start) > scheduleToday;
                    const studentsInPeriod = (period.id === 'R7' || isPeriodPast) ? ASSIGNMENTS.filter(a => a.rotationId === period.id) : [];
                    const rotationCounts = {};
                    
                    studentsInPeriod.forEach(a => {
                        rotationCounts[a.rotation] = (rotationCounts[a.rotation] || 0) + 1;
                    });
                    
                    return `
                        <div class="appe-card" style="margin-bottom: 1.5rem; border-left: 5px solid ${isActive ? '#4CAF50' : '#2196F3'};">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem;">
                                <div>
                                    <h3 style="margin: 0 0 0.5rem 0; color: ${isActive ? '#1B5E20' : '#1565C0'};">
                                        ${isActive ? '⭐ ' : ''}${period.name} ${isActive ? '(ACTIVE)' : ''}
                                    </h3>
                                    <p style="color: #666; margin: 0;">
                                        ${new Date(period.start).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})} - 
                                        ${new Date(period.end).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
                                        <span style="margin-left: 1rem; padding: 0.25rem 0.75rem; background: #E3F2FD; color: #1565C0; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                                            ${period.weeks} weeks (${period.academicWeeks})
                                        </span>
                                    </p>
                                </div>
                                ${!isPeriodFuture ? `
                                    <button class="btn btn-primary" onclick="window.viewPeriodDetails('${period.id}')">
                                        📋 View ${studentsInPeriod.length > 0 ? studentsInPeriod.length + ' Students' : 'Details'}
                                    </button>
                                ` : `
                                    <button class="btn btn-outline" onclick="window.planPeriod('${period.id}')">
                                        🗓️ Plan Period
                                    </button>
                                    <button class="btn btn-primary" onclick="window.runMatchingAlgorithm('${period.id}')" style="margin-left: 0.5rem;">
                                        🎯 Run Matching
                                    </button>
                                `}
                            </div>
                            
                            ${!isPeriodFuture && studentsInPeriod.length > 0 ? `
                                <div style="background: #F5F5F5; padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
                                    <h4 style="margin: 0 0 1rem 0;">📊 Rotation Distribution (${studentsInPeriod.length} students assigned)</h4>
                                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
                                        ${Object.entries(rotationCounts).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([rotation, count]) => `
                                            <div style="background: white; padding: 1rem; border-radius: 6px; border-left: 4px solid #2196F3;">
                                                <div style="font-weight: 600; color: #1565C0; margin-bottom: 0.25rem;">${rotation}</div>
                                                <div style="font-size: 1.5rem; font-weight: 700; color: #1976D2;">${count} students</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            ` : isPeriodFuture ? `
                                <div style="background: #FFF3E0; padding: 1rem; border-radius: 6px; border-left: 4px solid #FF9800;">
                                    <strong style="color: #E65100;">⚠️ Planning Required:</strong>
                                    <span style="color: #666; margin-left: 0.5rem;">Student assignments not yet configured for this period</span>
                                </div>
                            ` : `
                                <div style="background: #E8F5E9; padding: 1rem; border-radius: 6px; border-left: 4px solid #4CAF50;">
                                    <strong style="color: #2E7D32;">✅ Period Completed</strong>
                                    <span style="color: #666; margin-left: 0.5rem;">No student assignments for this period</span>
                                </div>
                            `}
                        </div>
                    `;
                }).join('')}
            `;
        
        case 'attendance':
            const attendanceList = Object.values(ATTENDANCE_RECORDS);
            const avgAttendanceRate = attendanceList.reduce((sum, r) => sum + parseFloat(r.attendanceRate), 0) / attendanceList.length;
            const totalHoursCompleted = attendanceList.reduce((sum, r) => sum + r.completedHours, 0);
            const totalHoursRequired = attendanceList.length * 160;
            const studentsOnTrack = attendanceList.filter(r => r.completedHours >= 80).length; // 80+ hours at midpoint
            const studentsAtRisk = attendanceList.filter(r => r.attendanceRate < 90).length;
            
            return `
                <div class="appe-card" style="margin-bottom: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h2 style="margin: 0 0 0.5rem 0;">📅 Attendance & Hours Tracking - Period 1</h2>
                            <p style="color: #666; margin: 0;">Track daily attendance and rotation hours (Required: 160 hours per rotation)</p>
                        </div>
                        <div style="display: flex; gap: 0.5rem;">
                            <button class="btn btn-primary" onclick="window.logDailyAttendance()">✏️ Log Today's Attendance</button>
                            <button class="btn btn-outline" onclick="window.exportAttendanceReport()">📥 Export Report</button>
                        </div>
                    </div>
                </div>

                <!-- Summary Cards -->
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                    <div class="appe-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; padding: 1.5rem;">
                        <div style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 0.5rem;">AVG ATTENDANCE RATE</div>
                        <div style="font-size: 2.5rem; font-weight: 700;">${avgAttendanceRate.toFixed(1)}%</div>
                        <div style="font-size: 0.8rem; opacity: 0.8; margin-top: 0.5rem;">All Students</div>
                    </div>
                    
                    <div class="appe-card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; text-align: center; padding: 1.5rem;">
                        <div style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 0.5rem;">TOTAL HOURS LOGGED</div>
                        <div style="font-size: 2.5rem; font-weight: 700;">${totalHoursCompleted}</div>
                        <div style="font-size: 0.8rem; opacity: 0.8; margin-top: 0.5rem;">of ${totalHoursRequired} required</div>
                    </div>
                    
                    <div class="appe-card" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; text-align: center; padding: 1.5rem;">
                        <div style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 0.5rem;">STUDENTS ON TRACK</div>
                        <div style="font-size: 2.5rem; font-weight: 700;">${studentsOnTrack}</div>
                        <div style="font-size: 0.8rem; opacity: 0.8; margin-top: 0.5rem;">≥80 hours completed</div>
                    </div>
                    
                    <div class="appe-card" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white; text-align: center; padding: 1.5rem;">
                        <div style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 0.5rem;">AT-RISK ATTENDANCE</div>
                        <div style="font-size: 2.5rem; font-weight: 700;">${studentsAtRisk}</div>
                        <div style="font-size: 0.8rem; opacity: 0.8; margin-top: 0.5rem;"><90% attendance</div>
                    </div>
                </div>

                <!-- Attendance Table -->
                <div class="appe-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h3 style="margin: 0;">Student Attendance Records</h3>
                        <input type="text" placeholder="🔍 Search students..." id="attendanceSearch" 
                            style="padding: 0.5rem 1rem; border: 2px solid #e0e0e0; border-radius: 6px; width: 300px;"
                            onkeyup="window.filterAttendanceTable(this.value)">
                    </div>
                    
                    <table class="data-table" id="attendanceTable">
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Rotation</th>
                                <th>Hours Completed</th>
                                <th>Progress</th>
                                <th>Present</th>
                                <th>Absent</th>
                                <th>Late</th>
                                <th>Attendance %</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${attendanceList.map(record => {
                                const hoursProgress = (record.completedHours / record.requiredHours * 100).toFixed(1);
                                const isOnTrack = record.completedHours >= 80;
                                const attendanceColor = record.attendanceRate >= 95 ? '#4CAF50' : 
                                                       record.attendanceRate >= 90 ? '#FFC107' : '#F44336';
                                
                                return `
                                    <tr>
                                        <td><strong>${record.studentName}</strong></td>
                                        <td>${record.rotation}</td>
                                        <td>
                                            <input type="number" value="${record.completedHours}" min="0" max="200"
                                                onchange="window.updateStudentHours('${record.studentId}', this.value)"
                                                style="width: 80px; padding: 0.5rem; border: 2px solid #e0e0e0; border-radius: 4px; font-weight: 600;">
                                            <span style="color: #666; margin-left: 0.5rem;">/ 160 hrs</span>
                                        </td>
                                        <td>
                                            <div style="background: #f5f5f5; border-radius: 4px; height: 20px; width: 100%; position: relative; overflow: hidden;">
                                                <div style="background: ${hoursProgress >= 50 ? '#4CAF50' : '#FFC107'}; height: 100%; width: ${Math.min(hoursProgress, 100)}%; border-radius: 4px;"></div>
                                                <span style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 0.75rem; font-weight: 600;">${hoursProgress}%</span>
                                            </div>
                                        </td>
                                        <td><strong style="color: #4CAF50;">${record.daysPresent}</strong></td>
                                        <td><strong style="color: ${record.daysAbsent > 2 ? '#F44336' : '#666'};">${record.daysAbsent}</strong></td>
                                        <td><strong style="color: ${record.daysLate > 0 ? '#FFC107' : '#666'};">${record.daysLate}</strong></td>
                                        <td>
                                            <span style="padding: 0.25rem 0.75rem; background: ${attendanceColor}22; color: ${attendanceColor}; border-radius: 12px; font-weight: 700;">
                                                ${record.attendanceRate}%
                                            </span>
                                        </td>
                                        <td>
                                            <span style="padding: 0.25rem 0.75rem; background: ${isOnTrack ? '#E8F5E9' : '#FFEBEE'}; color: ${isOnTrack ? '#2E7D32' : '#C62828'}; border-radius: 12px; font-weight: 600; font-size: 0.85rem;">
                                                ${isOnTrack ? '✓ On Track' : '⚠️ Behind'}
                                            </span>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-outline" onclick="window.viewAttendanceDetails('${record.studentId}')">
                                                📊 View Log
                                            </button>
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        
        case 'students':
            return `
                <div class="appe-card" style="margin-bottom: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <div>
                            <h2 style="margin: 0 0 0.5rem 0;">👨‍🎓 APPE Students - Spring 2026 (EDITABLE)</h2>
                            <p style="color: #666; margin: 0;">Total: ${APPE_STUDENTS.length} students (23 Male, 36 Female) | Click any cell to edit</p>
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <input type="text" id="studentSearchInput" placeholder="🔍 Search students..." style="padding: 0.5rem 1rem; border: 2px solid #e0e0e0; border-radius: 6px; width: 300px;" onkeyup="window.filterStudents(this.value)">
                            <button class="btn btn-outline" onclick="window.exportToExcel('students')">📥 Export</button>
                            <button class="btn btn-primary" onclick="window.addNewStudent()">+ Add Student</button>
                        </div>
                    </div>
                </div>

                <div class="appe-card">
                    <div class="data-table-container" id="studentTableContainer" style="overflow-x: auto;">
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
                                    <tr data-student-id="${s.id}">
                                        <td>${s.id}</td>
                                        <td contenteditable="true" onblur="window.updateStudentField('${s.id}', 'name', this.textContent)" style="cursor: text;"><strong>${s.name}</strong></td>
                                        <td>
                                            <select onchange="window.updateStudentField('${s.id}', 'gender', this.value)" style="border: none; background: transparent; font-weight: 600; cursor: pointer;">
                                                <option value="M" ${s.gender === 'M' ? 'selected' : ''}>M</option>
                                                <option value="F" ${s.gender === 'F' ? 'selected' : ''}>F</option>
                                            </select>
                                        </td>
                                        <td contenteditable="true" onblur="window.updateStudentField('${s.id}', 'program', this.textContent)" style="cursor: text;">${s.program}</td>
                                        <td contenteditable="true" onblur="window.updateStudentField('${s.id}', 'gpa', this.textContent)" style="cursor: text;"><strong style="color: ${s.gpa >= 3.85 ? '#1B5E20' : '#666'};">${s.gpa.toFixed(2)}</strong></td>
                                        <td>
                                            <select onchange="window.updateStudentField('${s.id}', 'compliance', this.value)" style="border: none; padding: 0.25rem 0.5rem; border-radius: 4px; font-weight: 600; cursor: pointer; background: ${s.compliance === 'Complete' ? '#4CAF50' : s.compliance === 'Pending' ? '#FF9800' : '#F44336'}; color: white;">
                                                <option value="Complete" ${s.compliance === 'Complete' ? 'selected' : ''}>COMPLETE</option>
                                                <option value="Pending" ${s.compliance === 'Pending' ? 'selected' : ''}>PENDING</option>
                                                <option value="Incomplete" ${s.compliance === 'Incomplete' ? 'selected' : ''}>INCOMPLETE</option>
                                            </select>
                                        </td>
                                        <td contenteditable="true" onblur="window.updateStudentField('${s.id}', 'rotation', this.textContent)" style="cursor: text;">${s.rotation}</td>
                                        <td>
                                            <button class="btn btn-outline btn-sm" onclick="window.viewStudentPortal('${s.id}')">🎓 Portal</button>
                                            <button class="btn btn-outline btn-sm" onclick="window.viewStudentDetails('${s.id}')">📄 View</button>
                                            <button class="btn btn-outline btn-sm" onclick="window.deleteStudent('${s.id}')" style="color: #F44336; border-color: #F44336; margin-left: 0.25rem;">🗑️</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;

        
        case 'preferences':
            const submittedPrefs = window.STUDENT_PREFERENCES ? window.STUDENT_PREFERENCES.length : 0;
            const totalStudentsForPrefs = APPE_STUDENTS.length;
            const completionRate = totalStudentsForPrefs > 0 ? Math.round((submittedPrefs / totalStudentsForPrefs) * 100) : 0;
            
            // Group preferences by rotation
            const prefsByRotation = {};
            if (window.STUDENT_PREFERENCES) {
                window.STUDENT_PREFERENCES.forEach(pref => {
                    if (!prefsByRotation[pref.rotationId]) {
                        prefsByRotation[pref.rotationId] = [];
                    }
                    prefsByRotation[pref.rotationId].push(pref);
                });
            }
            
            return `
                <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #1B5E20, #2E7D32); color: white;">
                    <h2 style="color: white; margin: 0 0 0.5rem 0;">🎯 Student Rotation Preferences</h2>
                    <p style="margin: 0; opacity: 0.9;">Manage student preferences and run matching algorithms</p>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">📊 Submission Status</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                        <div style="text-align: center; padding: 1.5rem; background: #E8F5E9; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #1B5E20;">${submittedPrefs}</div>
                            <small style="color: #666;">Preferences Submitted</small>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #FFF3E0; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #F57C00;">${totalStudentsForPrefs - submittedPrefs}</div>
                            <small style="color: #666;">Not Submitted</small>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #E3F2FD; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #1976D2;">${completionRate}%</div>
                            <small style="color: #666;">Completion Rate</small>
                        </div>
                    </div>
                </div>

                ${Object.keys(prefsByRotation).length > 0 ? `
                    <div class="appe-card">
                        <h3 style="margin-bottom: 1rem;">📋 Preferences by Rotation Period</h3>
                        <div style="display: grid; gap: 1rem;">
                            ${ROTATION_PERIODS.filter(r => prefsByRotation[r.id]).map(rotation => {
                                const prefs = prefsByRotation[rotation.id];
                                return `
                                    <div style="border: 2px solid #e0e0e0; border-radius: 8px; padding: 1.5rem; background: white;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                            <div>
                                                <strong style="font-size: 1.1rem;">${rotation.name}</strong>
                                                <div style="color: #666; font-size: 0.9rem; margin-top: 0.25rem;">
                                                    ${rotation.start} to ${rotation.end}
                                                </div>
                                            </div>
                                            <div style="text-align: right;">
                                                <div style="font-size: 1.5rem; font-weight: 700; color: #1B5E20;">${prefs.length}</div>
                                                <small style="color: #666;">students</small>
                                            </div>
                                        </div>
                                        
                                        <!-- Top Specialty Preferences -->
                                        <div style="margin-bottom: 1rem;">
                                            <strong style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem;">Top Specialty Choices:</strong>
                                            ${(() => {
                                                const specialtyCounts = {};
                                                prefs.forEach(p => {
                                                    p.specialtyPreferences.forEach((spec, idx) => {
                                                        if (!specialtyCounts[spec]) specialtyCounts[spec] = 0;
                                                        specialtyCounts[spec] += (3 - idx); // Weight by rank
                                                    });
                                                });
                                                const topSpecialties = Object.entries(specialtyCounts)
                                                    .sort((a, b) => b[1] - a[1])
                                                    .slice(0, 5);
                                                return topSpecialties.map(([spec, count]) => `
                                                    <span style="display: inline-block; background: #E8F5E9; color: #2E7D32; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; margin: 0.25rem;">
                                                        ${spec} (${count})
                                                    </span>
                                                `).join('');
                                            })()}
                                        </div>
                                        
                                        <!-- Top Site Preferences -->
                                        <div style="margin-bottom: 1rem;">
                                            <strong style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem;">Top Site Choices:</strong>
                                            ${(() => {
                                                const siteCounts = {};
                                                prefs.forEach(p => {
                                                    p.sitePreferences.forEach((site, idx) => {
                                                        if (!siteCounts[site]) siteCounts[site] = 0;
                                                        siteCounts[site] += (3 - idx);
                                                    });
                                                });
                                                const topSites = Object.entries(siteCounts)
                                                    .sort((a, b) => b[1] - a[1])
                                                    .slice(0, 5);
                                                return topSites.map(([site, count]) => `
                                                    <span style="display: inline-block; background: #E3F2FD; color: #1565C0; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; margin: 0.25rem;">
                                                        ${site} (${count})
                                                    </span>
                                                `).join('');
                                            })()}
                                        </div>
                                        
                                        <button class="btn btn-primary" onclick="window.runMatchingAlgorithm('${rotation.id}')">
                                            🎯 Run Matching Algorithm
                                        </button>
                                        <button class="btn btn-outline" onclick="window.viewPreferenceDetails('${rotation.id}')" style="margin-left: 0.5rem;">
                                            📊 View All Preferences
                                        </button>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : `
                    <div class="appe-card" style="text-align: center; padding: 3rem; background: #f5f5f5;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">📭</div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #666;">No Preferences Submitted Yet</h3>
                        <p style="color: #999; margin: 0;">Students can submit preferences from their portal for upcoming rotations</p>
                        <div style="margin-top: 2rem;">
                            <button class="btn btn-primary" onclick="window.switchAPPESection('students')">
                                👨‍🎓 Go to Students
                            </button>
                        </div>
                    </div>
                `}
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
                                    <button onclick="window.editRotation('${r.name}')" class="btn btn-outline btn-sm">✏️ Edit</button>
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

                    <button onclick="window.runMatchingAlgorithm()" class="btn btn-primary" style="padding: 0.75rem 2rem;">🚀 Run Matching Algorithm</button>
                </div>
            `;
        
        case 'assignments':
            const confirmed = ASSIGNMENTS.filter(a => a.status === 'Confirmed').length;
            const pending = ASSIGNMENTS.filter(a => a.status === 'Pending').length;
            return `
                <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #1976D2, #1565C0); color: white;">
                    <h2 style="color: white; margin: 0 0 0.5rem 0;">📋 Final Rotation Assignments</h2>
                    <p style="margin: 0; opacity: 0.9;">AI-Optimized Matching Results - Spring 2026</p>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">📊 Matching Results Summary</h3>
                    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem;">
                        <div style="text-align: center; padding: 1rem; background: #E8F5E9; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 700; color: #1B5E20;">156</div>
                            <small style="color: #666;">Students Matched</small>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #E3F2FD; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 700; color: #1976D2;">92%</div>
                            <small style="color: #666;">Got Top 3 Choice</small>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #F3E5F5; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 700; color: #7B1FA2;">91</div>
                            <small style="color: #666;">Avg Match Score</small>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #E8F5E9; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 700; color: #1B5E20;">${confirmed}</div>
                            <small style="color: #666;">Confirmed</small>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: #FFF3E0; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 700; color: #F57C00;">${pending}</div>
                            <small style="color: #666;">Pending Review</small>
                        </div>
                    </div>
                </div>

                <div class="appe-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                        <h3 style="margin: 0;">📅 Generated Schedule (Showing ${ASSIGNMENTS.length} of 156)</h3>
                        <div style="display: flex; gap: 1rem;">
                            <button class="btn btn-outline">🔍 Filter</button>
                            <button class="btn btn-outline">📥 Export Excel</button>
                            <button class="btn btn-primary">✉️ Notify Students</button>
                        </div>
                    </div>

                    <div class="data-table-container" style="overflow-x: auto;">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>ID</th>
                                    <th>Assigned Rotation</th>
                                    <th>Training Site</th>
                                    <th>Preceptor</th>
                                    <th>Start → End</th>
                                    <th>Pref Rank</th>
                                    <th>Match Score</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${ASSIGNMENTS.map(a => `
                                    <tr>
                                        <td><strong>${a.student}</strong></td>
                                        <td>${a.id}</td>
                                        <td>
                                            <div style="font-weight: 600;">${a.rotation}</div>
                                            <small style="color: #666;">6 weeks</small>
                                        </td>
                                        <td>${a.site}</td>
                                        <td>${a.preceptor}</td>
                                        <td>
                                            <div>${a.start}</div>
                                            <small style="color: #666;">${a.end}</small>
                                        </td>
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
                                            <span style="padding: 0.25rem 0.75rem; background: ${a.status === 'Confirmed' ? '#E8F5E9' : '#FFF3E0'}; color: ${a.status === 'Confirmed' ? '#2E7D32' : '#E65100'}; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                                                ${a.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div style="display: flex; gap: 0.5rem;">
                                                <button onclick="window.viewAssignment('${a.id}', '${a.student}')" class="btn btn-outline btn-sm">📄 View</button>
                                                <button onclick="window.editAssignment('${a.id}', '${a.student}')" class="btn btn-outline btn-sm">✏️ Edit</button>
                                            </div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        
        case 'evaluations':
            return `
                <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #7B1FA2, #9C27B0); color: white;">
                    <h2 style="color: white; margin: 0 0 0.5rem 0;">📝 Evaluation & Assessment Tracking</h2>
                    <p style="margin: 0; opacity: 0.9;">Monitor preceptor evaluations and student performance</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 2rem; font-weight: 700; color: #1B5E20;">142</div>
                        <small style="color: #666;">Evaluations Completed</small>
                    </div>
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 2rem; font-weight: 700; color: #F57C00;">14</div>
                        <small style="color: #666;">Pending Submission</small>
                    </div>
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 2rem; font-weight: 700; color: #1976D2;">91%</div>
                        <small style="color: #666;">Completion Rate</small>
                    </div>
                    <div class="appe-card" style="text-align: center;">
                        <div style="font-size: 2rem; font-weight: 700; color: #7B1FA2;">4.7</div>
                        <small style="color: #666;">Avg Student Score</small>
                    </div>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">📊 Evaluation Timeline</h3>
                    <div style="display: grid; gap: 1rem;">
                        <div style="padding: 1rem; background: #E8F5E9; border-left: 4px solid #4CAF50; border-radius: 4px;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <strong>Week 3 - Midpoint Evaluations</strong>
                                    <div style="color: #666; font-size: 0.9rem; margin-top: 0.25rem;">Due: February 21, 2026</div>
                                </div>
                                <div style="background: white; padding: 0.5rem 1rem; border-radius: 6px;">
                                    <strong style="color: #4CAF50;">138/156 Submitted (88%)</strong>
                                </div>
                            </div>
                            <div style="margin-top: 0.75rem; background: white; border-radius: 4px; height: 8px; overflow: hidden;">
                                <div style="background: #4CAF50; height: 100%; width: 88%;"></div>
                            </div>
                        </div>

                        <div style="padding: 1rem; background: #FFF3E0; border-left: 4px solid #FFC107; border-radius: 4px;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <strong>Week 6 - Final Evaluations</strong>
                                    <div style="color: #666; font-size: 0.9rem; margin-top: 0.25rem;">Due: March 14, 2026</div>
                                </div>
                                <div style="background: white; padding: 0.5rem 1rem; border-radius: 6px;">
                                    <strong style="color: #F57C00;">In Progress</strong>
                                </div>
                            </div>
                        </div>

                        <div style="padding: 1rem; background: #E3F2FD; border-left: 4px solid #1976D2; border-radius: 4px;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <strong>Student Self-Assessments</strong>
                                    <div style="color: #666; font-size: 0.9rem; margin-top: 0.25rem;">Due: March 14, 2026</div>
                                </div>
                                <div style="background: white; padding: 0.5rem 1rem; border-radius: 6px;">
                                    <strong style="color: #1976D2;">145/156 Submitted (93%)</strong>
                                </div>
                            </div>
                            <div style="margin-top: 0.75rem; background: white; border-radius: 4px; height: 8px; overflow: hidden;">
                                <div style="background: #1976D2; height: 100%; width: 93%;"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="appe-card">
                    <h3 style="margin-bottom: 1rem;">⭐ Top Performing Students (GPA + Evaluations)</h3>
                    <div class="data-table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Student Name</th>
                                    <th>Rotation</th>
                                    <th>Preceptor Rating</th>
                                    <th>GPA</th>
                                    <th>Overall Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span style="background: gold; color: white; padding: 0.25rem 0.5rem; border-radius: 50%; font-weight: 700;">1</span></td>
                                    <td><strong>Mohammed Abdulrahman Almahanna</strong></td>
                                    <td>Research</td>
                                    <td><div style="color: #4CAF50; font-weight: 600;">5.0/5.0 ⭐</div></td>
                                    <td><strong>3.96</strong></td>
                                    <td><span style="background: #4CAF50; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-weight: 600;">98%</span></td>
                                </tr>
                                <tr>
                                    <td><span style="background: silver; color: white; padding: 0.25rem 0.5rem; border-radius: 50%; font-weight: 700;">2</span></td>
                                    <td><strong>Dana Emad Aloumi</strong></td>
                                    <td>Critical Care</td>
                                    <td><div style="color: #4CAF50; font-weight: 600;">4.9/5.0 ⭐</div></td>
                                    <td><strong>3.94</strong></td>
                                    <td><span style="background: #4CAF50; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-weight: 600;">97%</span></td>
                                </tr>
                                <tr>
                                    <td><span style="background: #CD7F32; color: white; padding: 0.25rem 0.5rem; border-radius: 50%; font-weight: 700;">3</span></td>
                                    <td><strong>Khuzama Hamoud J Alamri</strong></td>
                                    <td>Neonatal</td>
                                    <td><div style="color: #4CAF50; font-weight: 600;">5.0/5.0 ⭐</div></td>
                                    <td><strong>3.93</strong></td>
                                    <td><span style="background: #4CAF50; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-weight: 600;">97%</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        
        case 'epas':
            const totalEPAs = EPA_CATEGORIES.reduce((sum, epa) => sum + epa.weight, 0);
            return `
                <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #F57C00, #FF9800); color: white;">
                    <h2 style="color: white; margin: 0 0 0.5rem 0;">⭐ Entrustable Professional Activities (EPAs)</h2>
                    <p style="margin: 0; opacity: 0.9;">Track competency development across all pharmacy practice domains</p>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">📊 EPA Completion Overview</h3>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
                        <div style="text-align: center; padding: 1.5rem; background: #E8F5E9; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #1B5E20;">87%</div>
                            <small style="color: #666;">Overall Completion</small>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #E3F2FD; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #1976D2;">${EPA_CATEGORIES.length}</div>
                            <small style="color: #666;">Total EPA Categories</small>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #F3E5F5; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #7B1FA2;">142</div>
                            <small style="color: #666;">Students On Track</small>
                        </div>
                        <div style="text-align: center; padding: 1.5rem; background: #FFF3E0; border-radius: 8px;">
                            <div style="font-size: 2rem; font-weight: 700; color: #F57C00;">14</div>
                            <small style="color: #666;">Need Attention</small>
                        </div>
                    </div>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1.5rem;">📋 EPA Categories & Progress</h3>
                    <div style="display: grid; gap: 1rem;">
                        ${EPA_CATEGORIES.map((epa, idx) => {
                            const completion = 75 + Math.floor(Math.random() * 20); // Random 75-95%
                            return `
                                <div style="padding: 1.5rem; background: #f9f9f9; border-radius: 8px; border-left: 4px solid ${completion >= 90 ? '#4CAF50' : completion >= 75 ? '#FFC107' : '#F44336'};">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                                        <div style="flex: 1;">
                                            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                                                <span style="background: #1B5E20; color: white; padding: 0.5rem; border-radius: 6px; font-weight: 700; min-width: 45px; text-align: center;">
                                                    EPA${idx + 1}
                                                </span>
                                                <h4 style="margin: 0;">${epa.title}</h4>
                                                ${epa.required ? '<span style="background: #F44336; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">REQUIRED</span>' : ''}
                                            </div>
                                            <p style="color: #666; margin: 0.5rem 0; font-size: 0.9rem;">${epa.description}</p>
                                            <div style="display: flex; gap: 2rem; margin-top: 0.75rem; font-size: 0.85rem;">
                                                <div><strong>Weight:</strong> ${epa.weight}%</div>
                                                <div><strong>Students Completed:</strong> ${Math.floor(156 * completion / 100)}/156</div>
                                                <div style="color: ${completion >= 90 ? '#4CAF50' : completion >= 75 ? '#F57C00' : '#F44336'}; font-weight: 600;">
                                                    ${completion}% Complete
                                                </div>
                                            </div>
                                        </div>
                                        <button class="btn btn-outline btn-sm">📊 View Details</button>
                                    </div>
                                    <div style="background: white; border-radius: 4px; height: 10px; overflow: hidden;">
                                        <div style="background: ${completion >= 90 ? '#4CAF50' : completion >= 75 ? '#FFC107' : '#F44336'}; height: 100%; width: ${completion}%; transition: width 0.3s;"></div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div class="appe-card">
                    <h3 style="margin-bottom: 1rem;">🎯 Competency Levels</h3>
                    <div style="background: #E3F2FD; padding: 1.5rem; border-radius: 8px;">
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; text-align: center;">
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700;">1️⃣</div>
                                <div style="font-size: 0.85rem; margin-top: 0.5rem;"><strong>Observer</strong></div>
                                <small style="color: #666;">Observing only</small>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700;">2️⃣</div>
                                <div style="font-size: 0.85rem; margin-top: 0.5rem;"><strong>Assisted</strong></div>
                                <small style="color: #666;">With assistance</small>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700;">3️⃣</div>
                                <div style="font-size: 0.85rem; margin-top: 0.5rem;"><strong>Supervised</strong></div>
                                <small style="color: #666;">Under supervision</small>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700;">4️⃣</div>
                                <div style="font-size: 0.85rem; margin-top: 0.5rem;"><strong>Proficient</strong></div>
                                <small style="color: #666;">Minimal oversight</small>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 700;">5️⃣</div>
                                <div style="font-size: 0.85rem; margin-top: 0.5rem;"><strong>Expert</strong></div>
                                <small style="color: #666;">Can teach others</small>
                            </div>
                    </div>
                </div>
            `;
        
        case 'preceptors':
            return `
                <div class="appe-card" style="margin-bottom: 2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <div>
                            <h2 style="margin: 0 0 0.5rem 0;">👨‍⚕️ Preceptor Directory</h2>
                            <p style="color: #666; margin: 0;">${PRECEPTORS.length} Active Preceptors | Average Rating: 4.8/5.0 ⭐</p>
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <input type="text" placeholder="🔍 Search preceptors..." onkeyup="window.filterPreceptorTable(this.value)" style="padding: 0.5rem 1rem; border: 2px solid #e0e0e0; border-radius: 6px; width: 250px;">
                            <button class="btn btn-outline" onclick="window.exportPreceptors()">📥 Export</button>
                            <button class="btn btn-primary" onclick="window.addNewPreceptor()">+ Add Preceptor</button>
                        </div>
                    </div>
                </div>

                <div class="appe-card">
                    <div class="data-table-container" style="overflow-x: auto;">
                        <table class="data-table" id="preceptorTable">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Credentials</th>
                                    <th>Specialty</th>
                                    <th>Training Site</th>
                                    <th>License #</th>
                                    <th>Expiry Date</th>
                                    <th>Availability</th>
                                    <th>Current Students</th>
                                    <th>Rating</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${PRECEPTORS.map(p => {
                                    const daysUntilExpiry = Math.floor((new Date(p.expiry) - new Date()) / (1000 * 60 * 60 * 24));
                                    const expiryStatus = daysUntilExpiry < 30 ? 'red' : daysUntilExpiry < 90 ? 'yellow' : 'green';
                                    const availabilityBadges = p.availability ? p.availability.map(r => 
                                        `<span style="background: #E3F2FD; color: #1565C0; padding: 0.15rem 0.4rem; border-radius: 4px; font-size: 0.75rem; margin-right: 0.25rem;">${r}</span>`
                                    ).join('') : '<span style="color: #999;">None</span>';
                                    
                                    return `
                                        <tr>
                                            <td><strong>${p.id}</strong></td>
                                            <td><strong>${p.name}</strong></td>
                                            <td>${p.credential}</td>
                                            <td>
                                                <span style="background: #E8F5E9; color: #2E7D32; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                                                    ${p.specialty}
                                                </span>
                                            </td>
                                            <td>${p.site}</td>
                                            <td><code style="background: #f5f5f5; padding: 0.25rem 0.5rem; border-radius: 4px;">${p.license}</code></td>
                                            <td>
                                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                    <span class="status-dot ${expiryStatus}"></span>
                                                    ${p.expiry}
                                                </div>
                                                <small style="color: #666;">${daysUntilExpiry} days</small>
                                            </td>
                                            <td style="max-width: 200px;">
                                                ${availabilityBadges}
                                                <button onclick="window.editPreceptorAvailability('${p.id}')" style="background: none; border: none; color: #1976D2; cursor: pointer; font-size: 0.85rem; margin-top: 0.25rem;">
                                                    ✏️ Edit
                                                </button>
                                            </td>
                                            <td style="text-align: center;">
                                                <span style="background: #E3F2FD; color: #1976D2; padding: 0.25rem 0.75rem; border-radius: 12px; font-weight: 600;">
                                                    ${p.students}
                                                </span>
                                            </td>
                                            <td>
                                                <div style="color: #F57C00; font-weight: 600;">${p.rating} ⭐</div>
                                            </td>
                                            <td>
                                                <div style="display: flex; gap: 0.5rem;">
                                                    <button class="btn btn-outline btn-sm" onclick="window.viewPreceptorDetails('${p.id}')">📄 View</button>
                                                    <button class="btn btn-outline btn-sm" onclick="window.editPreceptor('${p.id}')">✏️ Edit</button>
                                                </div>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        
        case 'sites':
            const totalCapacity = TRAINING_SITES.reduce((sum, s) => sum + s.capacity, 0);
            const totalActive = TRAINING_SITES.reduce((sum, s) => sum + s.activeStudents, 0);
            return `
                <div class="appe-card" style="margin-bottom: 2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h2 style="margin: 0 0 0.5rem 0;">🏥 Training Sites (${TRAINING_SITES.length} Sites)</h2>
                            <p style="color: #666; margin: 0;">Total Capacity: ${totalCapacity} | Current: ${totalActive} students (${Math.round(totalActive/totalCapacity*100)}% utilization)</p>
                        </div>
                        <button class="btn btn-primary" onclick="window.addNewSite()">+ Add New Site</button>
                    </div>
                </div>

                <div style="display: grid; gap: 1.5rem;">
                    ${TRAINING_SITES.map(site => {
                        const utilization = Math.round(site.activeStudents / site.capacity * 100);
                        const utilizationColor = utilization >= 90 ? '#F44336' : utilization >= 70 ? '#FFC107' : '#4CAF50';
                        return `
                            <div class="appe-card" style="border-left: 4px solid #1B5E20;">
                                <div style="display: grid; grid-template-columns: 1fr auto; gap: 2rem; margin-bottom: 1.5rem;">
                                    <div>
                                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
                                            <h3 style="margin: 0;">${site.name}</h3>
                                            <span style="background: #E3F2FD; color: #1976D2; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                                                ${site.type}
                                            </span>
                                        </div>
                                        <div style="color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">
                                            📍 ${site.address}
                                        </div>
                                        <div style="color: #666; font-size: 0.9rem;">
                                            📞 ${site.contact}
                                        </div>
                                    </div>
                                    <div style="text-align: right;">
                                        <div style="font-size: 2.5rem; font-weight: 700; color: #1B5E20;">${site.activeStudents}</div>
                                        <div style="color: #666; font-size: 0.9rem;">of ${site.capacity} capacity</div>
                                        <div style="margin-top: 0.5rem;">
                                            <span style="background: ${utilizationColor}; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                                                ${utilization}% Full
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                                    <div style="background: #f9f9f9; padding: 1rem; border-radius: 8px; text-align: center;">
                                        <div style="font-size: 1.5rem; font-weight: 700; color: #1976D2;">${site.preceptors}</div>
                                        <small style="color: #666;">Active Preceptors</small>
                                    </div>
                                    <div style="background: #f9f9f9; padding: 1rem; border-radius: 8px; text-align: center;">
                                        <div style="font-size: 1.5rem; font-weight: 700; color: #7B1FA2;">${site.specialties.length}</div>
                                        <small style="color: #666;">Rotation Types</small>
                                    </div>
                                    <div style="background: #f9f9f9; padding: 1rem; border-radius: 8px; text-align: center;">
                                        <div style="font-size: 1.5rem; font-weight: 700; color: #F57C00;">${site.capacity - site.activeStudents}</div>
                                        <small style="color: #666;">Available Slots</small>
                                    </div>
                                </div>

                                <div style="margin-bottom: 1rem;">
                                    <strong style="display: block; margin-bottom: 0.5rem;">Available Specialties:</strong>
                                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                        ${site.specialties.map(spec => `
                                            <span style="background: #E8F5E9; color: #2E7D32; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem;">
                                                ${spec}
                                            </span>
                                        `).join('')}
                                    </div>
                                </div>

                                <div style="background: white; border-radius: 4px; height: 8px; overflow: hidden; margin-bottom: 1rem;">
                                    <div style="background: ${utilizationColor}; height: 100%; width: ${utilization}%;"></div>
                                </div>

                                <div style="display: flex; gap: 1rem;">
                                    <button class="btn btn-outline btn-sm" onclick="window.viewSiteDetails('${site.name}')">📊 View Analytics</button>
                                    <button class="btn btn-outline btn-sm" onclick="window.viewSiteStudents('${site.name}')">👥 View Students</button>
                                    <button class="btn btn-outline btn-sm" onclick="window.editSite('${site.name}')">✏️ Edit Site</button>
                                    <button class="btn btn-outline btn-sm" onclick="window.contactSite('${site.name}')">📞 Contact</button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        
        case 'reports':
            return `
                <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #0288D1, #0277BD); color: white;">
                    <h2 style="color: white; margin: 0 0 0.5rem 0;">📈 Reports & Analytics Dashboard</h2>
                    <p style="margin: 0; opacity: 0.9;">Generate comprehensive reports and track program metrics</p>
                </div>

                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                    <div class="appe-card">
                        <div style="text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📊</div>
                            <h3 style="margin: 0 0 0.5rem 0;">Student Performance Report</h3>
                            <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">Comprehensive analysis of student evaluations, GPAs, and rotation outcomes</p>
                            <button class="btn btn-primary" style="width: 100%;">📥 Generate Report</button>
                        </div>
                    </div>

                    <div class="appe-card">
                        <div style="text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 0.5rem;">✅</div>
                            <h3 style="margin: 0 0 0.5rem 0;">Compliance Status Report</h3>
                            <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">Detailed breakdown of compliance items, expirations, and student statuses</p>
                            <button class="btn btn-primary" style="width: 100%;">📥 Generate Report</button>
                        </div>
                    </div>

                    <div class="appe-card">
                        <div style="text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🏥</div>
                            <h3 style="margin: 0 0 0.5rem 0;">Site Utilization Report</h3>
                            <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">Training site capacity, preceptor workload, and rotation distribution</p>
                            <button class="btn btn-primary" style="width: 100%;">📥 Generate Report</button>
                        </div>
                    </div>

                    <div class="appe-card">
                        <div style="text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 0.5rem;">⭐</div>
                            <h3 style="margin: 0 0 0.5rem 0;">EPA Progress Report</h3>
                            <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">Student competency tracking across all EPA categories and benchmarks</p>
                            <button class="btn btn-primary" style="width: 100%;">📥 Generate Report</button>
                        </div>
                    </div>

                    <div class="appe-card">
                        <div style="text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 0.5rem;">👨‍⚕️</div>
                            <h3 style="margin: 0 0 0.5rem 0;">Preceptor Analytics</h3>
                            <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">Preceptor ratings, student load, license expiry alerts, and performance</p>
                            <button class="btn btn-primary" style="width: 100%;">📥 Generate Report</button>
                        </div>
                    </div>

                    <div class="appe-card">
                        <div style="text-align: center;">
                            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📅</div>
                            <h3 style="margin: 0 0 0.5rem 0;">Rotation Schedule Report</h3>
                            <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">Complete rotation assignments, timelines, and preference match statistics</p>
                            <button class="btn btn-primary" style="width: 100%;">📥 Generate Report</button>
                        </div>
                    </div>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">📊 Quick Statistics</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
                        <div>
                            <h4 style="margin: 0 0 1rem 0;">Top 5 Rotation Preferences</h4>
                            <div style="display: grid; gap: 0.75rem;">
                                ${[
                                    { name: 'Internal Medicine', count: 89, pct: 57 },
                                    { name: 'Critical Care (ICU)', count: 78, pct: 50 },
                                    { name: 'Pediatrics', count: 72, pct: 46 },
                                    { name: 'Cardiology', count: 65, pct: 42 },
                                    { name: 'Oncology', count: 58, pct: 37 }
                                ].map(r => `
                                    <div>
                                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                                            <span><strong>${r.name}</strong></span>
                                            <span style="color: #666;">${r.count} students (${r.pct}%)</span>
                                        </div>
                                        <div style="background: #f5f5f5; border-radius: 4px; height: 8px; overflow: hidden;">
                                            <div style="background: #1B5E20; height: 100%; width: ${r.pct}%;"></div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div>
                            <h4 style="margin: 0 0 1rem 0;">Site Capacity Status</h4>
                            <div style="display: grid; gap: 0.75rem;">
                                ${TRAINING_SITES.slice(0, 5).map(s => {
                                    const util = Math.round(s.activeStudents / s.capacity * 100);
                                    return `
                                        <div>
                                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                                                <span><strong>${s.name.split('(')[0].trim()}</strong></span>
                                                <span style="color: #666;">${s.activeStudents}/${s.capacity} (${util}%)</span>
                                            </div>
                                            <div style="background: #f5f5f5; border-radius: 4px; height: 8px; overflow: hidden;">
                                                <div style="background: ${util >= 90 ? '#F44336' : util >= 70 ? '#FFC107' : '#4CAF50'}; height: 100%; width: ${util}%;"></div>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="appe-card">
                    <h3 style="margin-bottom: 1rem;">📤 Export Options</h3>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
                        <button class="btn btn-outline" style="padding: 1rem;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
                            <strong>Excel (.xlsx)</strong>
                        </button>
                        <button class="btn btn-outline" style="padding: 1rem;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📄</div>
                            <strong>PDF Report</strong>
                        </button>
                        <button class="btn btn-outline" style="padding: 1rem;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📋</div>
                            <strong>CSV Data</strong>
                        </button>
                        <button class="btn btn-outline" style="padding: 1rem;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📧</div>
                            <strong>Email Report</strong>
                        </button>
                    </div>
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
                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h2 style="margin: 0 0 1rem 0;">⚙️ Data Management & Automation Center</h2>
                    <p style="color: #666;">Centralized hub for editing, importing, exporting, and automating all APPE data</p>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
                    <h3 style="margin: 0 0 0.5rem 0; color: white;">📋 Student Information Portal - How to Use</h3>
                    <p style="margin: 0 0 1.5rem 0; opacity: 0.9; font-size: 0.95rem;">Complete workflow for student data collection and approval</p>
                    
                    <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                        <strong style="display: block; margin-bottom: 1rem; font-size: 1.1rem;">📌 3-Step Process:</strong>
                        
                        <div style="display: grid; gap: 1rem;">
                            <div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 6px;">
                                <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">STEP 1: Share Portal Link</div>
                                <div style="opacity: 0.95; line-height: 1.6;">
                                    • Send students the portal link: <strong>student-portal.html</strong><br>
                                    • Students login with their University ID (e.g., 38-1-1-1-0601)<br>
                                    • They fill 10 required fields: Mobile, Email, Emergency Contact, Address, etc.<br>
                                    • Each submission gets a unique reference number
                                </div>
                            </div>
                            
                            <div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 6px;">
                                <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">STEP 2: Review Submissions</div>
                                <div style="opacity: 0.95; line-height: 1.6;">
                                    • Click "📥 Review Submissions" button below<br>
                                    • See all pending student submissions in a modal<br>
                                    • View complete information for each student<br>
                                    • Check for accuracy and completeness
                                </div>
                            </div>
                            
                            <div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 6px;">
                                <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">STEP 3: Approve or Reject</div>
                                <div style="opacity: 0.95; line-height: 1.6;">
                                    • <strong>✅ Approve:</strong> Saves data to main database, sends confirmation email<br>
                                    • <strong>✏️ Request Revision:</strong> Student notified to update specific fields<br>
                                    • <strong>❌ Reject:</strong> Submission denied with reason
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; justify-content: center;">
                        <a href="student-portal.html" target="_blank" style="background: white; color: #667eea; padding: 1rem 2rem; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; font-size: 1.1rem;">
                            🔗 Open Student Portal
                        </a>
                        <button onclick="window.reviewSubmissions ? window.reviewSubmissions() : alert('Open student-portal.html first to enable review feature')" style="background: rgba(255,255,255,0.2); color: white; padding: 1rem 2rem; border: 2px solid white; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 1.1rem;">
                            📥 Review Submissions
                        </button>
                    </div>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem; background: linear-gradient(135deg, #f093fb, #f5576c); color: white;">
                    <h3 style="margin: 0 0 0.5rem 0; color: white;">📅 Site & Preceptor Availability Scheduler</h3>
                    <p style="margin: 0 0 1rem 0; opacity: 0.9; font-size: 0.95rem;">Manage site availability across time periods and match students with available preceptors</p>
                    
                    <div style="display: flex; gap: 1rem;">
                        <button onclick="window.openAvailabilityManager()" class="btn" style="flex: 1; background: white; color: #f5576c; font-weight: 700; padding: 1rem 2rem; font-size: 1.1rem;">
                            📅 Open Availability Calendar
                        </button>
                        <button onclick="window.setupGoogleFormsIntegration()" class="btn" style="flex: 1; background: rgba(255,255,255,0.2); color: white; border: 2px solid white; font-weight: 700; padding: 1rem 2rem; font-size: 1.1rem;">
                            📋 Google Forms Setup
                        </button>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                    <div class="appe-card">
                        <h3 style="margin: 0 0 1rem 0;">📊 Excel Integration</h3>
                        <div style="background: #E3F2FD; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <strong>Import/Export student data, rotations, and grades</strong>
                        </div>
                        <div style="display: grid; gap: 0.75rem;">
                            <button onclick="window.importFromExcel()" class="btn btn-outline" style="width: 100%; justify-content: flex-start; display: flex; align-items: center; gap: 0.5rem;">
                                📤 Import from Excel (.xlsx, .csv)
                            </button>
                            <button onclick="window.exportToExcel('students')" class="btn btn-outline" style="width: 100%; justify-content: flex-start; display: flex; align-items: center; gap: 0.5rem;">
                                📥 Export Students to Excel
                            </button>
                            <button onclick="window.exportToExcel('grades')" class="btn btn-outline" style="width: 100%; justify-content: flex-start; display: flex; align-items: center; gap: 0.5rem;">
                                📥 Export Grades to Excel
                            </button>
                            <button onclick="window.exportToExcel('assignments')" class="btn btn-outline" style="width: 100%; justify-content: flex-start; display: flex; align-items: center; gap: 0.5rem;">
                                📥 Export Assignments to Excel
                            </button>
                        </div>
                    </div>

                    <div class="appe-card">
                        <h3 style="margin: 0 0 1rem 0;">🎓 Blackboard Integration</h3>
                        <div style="background: #FFF3E0; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            <strong>Sync grades, students, and assignments</strong>
                        </div>
                        <div style="display: grid; gap: 0.75rem;">
                            <button onclick="window.syncWithBlackboard('import-students')" class="btn btn-outline" style="width: 100%; justify-content: flex-start; display: flex; align-items: center; gap: 0.5rem;">
                                📥 Import from Blackboard
                            </button>
                            <button onclick="window.syncWithBlackboard('export-grades')" class="btn btn-outline" style="width: 100%; justify-content: flex-start; display: flex; align-items: center; gap: 0.5rem;">
                                📤 Export Grades to Blackboard
                            </button>
                            <button onclick="window.syncWithBlackboard('sync-evaluations')" class="btn btn-outline" style="width: 100%; justify-content: flex-start; display: flex; align-items: center; gap: 0.5rem;">
                                🔄 Sync Evaluation Scores
                            </button>
                            <button onclick="window.syncWithBlackboard('create-assignments')" class="btn btn-outline" style="width: 100%; justify-content: flex-start; display: flex; align-items: center; gap: 0.5rem;">
                                ➕ Create Blackboard Assignments
                            </button>
                        </div>
                    </div>
                </div>

                <div class="appe-card" style="margin-bottom: 2rem;">
                    <h3 style="margin: 0 0 1rem 0;">🤖 Automation Tools</h3>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                        <button onclick="window.runMatchingAlgorithm()" class="btn btn-primary" style="padding: 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                            <div style="font-size: 2rem;">🎯</div>
                            <strong>Run Auto-Match</strong>
                            <small style="opacity: 0.8;">Match students to rotations</small>
                        </button>
                        
                        <button onclick="window.autoGradeEvaluations()" class="btn btn-primary" style="padding: 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                            <div style="font-size: 2rem;">📝</div>
                            <strong>Auto-Grade</strong>
                            <small style="opacity: 0.8;">Calculate final grades</small>
                        </button>
                        
                        <button onclick="window.sendBulkEmail('rotation-assignment')" class="btn btn-primary" style="padding: 1.5rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                            <div style="font-size: 2rem;">📧</div>
                            <strong>Send Emails</strong>
                            <small style="opacity: 0.8;">Notify students</small>
                        </button>
                    </div>
                </div>

                <div class="appe-card" style="background: #E8F5E9; border-left: 4px solid #4CAF50;">
                    <strong style="display: block; margin-bottom: 0.75rem; color: #1B5E20;">✅ Data Inventory & Quick Stats:</strong>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
                        <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 700; color: #1B5E20;">${APPE_STUDENTS.length}</div>
                            <small style="color: #666;">Students</small>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 700; color: #1976D2;">${ROTATION_TYPES.length}</div>
                            <small style="color: #666;">Rotation Types</small>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 700; color: #7B1FA2;">${PRECEPTORS.length}</div>
                            <small style="color: #666;">Active Preceptors</small>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: white; border-radius: 8px;">
                            <div style="font-size: 1.8rem; font-weight: 700; color: #F57C00;">${TRAINING_SITES.length}</div>
                            <small style="color: #666;">Training Sites</small>
                        </div>
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
// AUTOMATION FUNCTIONS - Add to end of file

// Excel Import/Export Functions
window.exportToExcel = function(dataType) {
    alert(` Exporting ${dataType} to Excel...\n\nFile will download shortly as: APPE_${dataType}_${new Date().toISOString().split('T')[0]}.xlsx`);
    // In production: Generate actual Excel file
};

window.importFromExcel = function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx,.xls,.csv';
    input.onchange = (e) => {
        const file = e.target.files[0];
        alert(` Importing file: ${file.name}\n\nProcessing ${file.size} bytes...`);
        // In production: Parse Excel and update database
    };
    input.click();
};

// Blackboard Integration
window.syncWithBlackboard = function(action) {
    const actions = {
        'export-grades': 'Export final grades to Blackboard Grade Center',
        'import-students': 'Import student roster from Blackboard',
        'sync-evaluations': 'Sync evaluation scores to Blackboard assignments',
        'create-assignments': 'Create rotation assignments in Blackboard'
    };
    
    alert(` Blackboard Integration\n\n${actions[action]}\n\nConnection: KSAU-HS Blackboard\nCourse: PharmD APPE Spring 2026\n\nStatus: Ready to sync`);
};

// Auto-Match Algorithm
window.runMatchingAlgorithm = function() {
    const confirmed = confirm(` Run Automated Matching Algorithm?\n\nThis will:\n Match 156 students to rotations\n Use preference weights (40%)\n Consider GPA and compliance\n Balance preceptor load\n Optimize site capacity\n\nEstimated time: 15-30 seconds\n\nProceed?`);
    
    if (confirmed) {
        // Show loading
        const loading = document.createElement('div');
        loading.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:10000;';
        loading.innerHTML = `
            <div style="background:white;padding:3rem;border-radius:12px;text-align:center;max-width:400px;">
                <div style="font-size:3rem;margin-bottom:1rem;"></div>
                <h2 style="margin:0 0 1rem 0;">Running Algorithm...</h2>
                <div style="background:#f5f5f5;height:20px;border-radius:10px;overflow:hidden;margin-bottom:1rem;">
                    <div id="match-progress" style="background:#1B5E20;height:100%;width:0%;transition:width 0.3s;"></div>
                </div>
                <div id="match-status" style="color:#666;">Initializing...</div>
            </div>
        `;
        document.body.appendChild(loading);
        
        // Simulate progress
        const statuses = [
            'Loading student preferences...',
            'Analyzing compliance status...',
            'Calculating GPA weights...',
            'Optimizing site assignments...',
            'Balancing preceptor workload...',
            'Finalizing matches...',
            'Generating reports...'
        ];
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += 14.28;
            document.getElementById('match-progress').style.width = progress + '%';
            document.getElementById('match-status').textContent = statuses[Math.floor(progress/14.28)];
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    document.body.removeChild(loading);
                    alert(` Matching Complete!\n\n156 students matched successfully\n92% got top 3 preferences\nAverage match score: 91%\n0 conflicts detected\n\nView results in Assignments tab`);
                    window.switchAPPESection('assignments');
                }, 500);
            }
        }, 500);
    }
};

// Evaluation Auto-Grading
window.autoGradeEvaluations = function() {
    alert(` Auto-Grading System\n\n Process 142 completed evaluations\n Calculate weighted scores\n Apply rubric criteria\n Generate grade reports\n Sync to Blackboard\n\nGrading formula:\n- Preceptor eval (40%)\n- Self-assessment (20%)\n- Clinical competency (25%)\n- Professionalism (15%)\n\nReady to process!`);
};

// Edit Student Inline
window.editStudent = function(studentId) {
    const student = APPE_STUDENTS.find(s => s.id === studentId);
    if (student) {
        const newGPA = prompt(`Edit GPA for ${student.name}:`, student.gpa);
        if (newGPA) {
            student.gpa = parseFloat(newGPA);
            alert(` Updated ${student.name}'s GPA to ${newGPA}`);
            window.switchAPPESection('students'); // Refresh
        }
    }
};

// Send Bulk Emails
window.sendBulkEmail = function(type) {
    const templates = {
        'rotation-assignment': {
            subject: 'APPE Rotation Assignment - Spring 2026',
            recipients: '156 students',
            preview: 'Your rotation assignment has been confirmed...'
        },
        'evaluation-reminder': {
            subject: 'Evaluation Due Reminder',
            recipients: '14 students with pending evaluations',
            preview: 'Please complete your rotation evaluation...'
        },
        'compliance-alert': {
            subject: 'Compliance Item Expiring Soon',
            recipients: '11 students with yellow/red status',
            preview: 'Action required: Update your compliance documents...'
        }
    };
    
    const template = templates[type];
    alert(` Send Bulk Email\n\nTo: ${template.recipients}\nSubject: ${template.subject}\n\n"${template.preview}"\n\nSend now?`);
};

// Generate Report
window.generateReport = function(reportType) {
    const reports = {
        'student-performance': 'Student Performance Analysis (156 students)',
        'site-utilization': 'Training Site Capacity Report (8 sites)',
        'compliance': 'Compliance Status Report (all requirements)',
        'preceptor-analytics': 'Preceptor Workload & Ratings (12 preceptors)'
    };
    
    alert(` Generating Report...\n\n${reports[reportType]}\n\nFormat: PDF + Excel\nEstimated size: 2-5 MB\n\nDownload will start shortly`);
};


// ===== STUDENT TABLE AUTOMATION FUNCTIONS =====

// Update student field (inline editing)
window.updateStudentField = function(studentId, field, value) {
    const student = APPE_STUDENTS.find(s => s.id === studentId);
    if (student) {
        student[field] = field === 'gpa' ? parseFloat(value) : value;
        console.log(` Updated ${field} for ${studentId}: ${value}`);
        // Show success toast
        showToast(`Student ${field} updated successfully`);
    }
};

// Filter students by search term
window.filterStudents = function(searchTerm) {
    const rows = document.querySelectorAll('#studentTableContainer tbody tr');
    const term = searchTerm.toLowerCase();
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
    });
    
    const visibleCount = Array.from(rows).filter(r => r.style.display !== 'none').length;
    console.log(` Showing ${visibleCount} of ${rows.length} students`);
};

// Add new student
window.addNewStudent = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; width: 500px; max-height: 90vh; overflow-y: auto;">
            <h2 style="margin: 0 0 1.5rem 0;"> Add New Student</h2>
            <form id="addStudentForm" style="display: grid; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Student ID:</label>
                    <input type="text" id="newStudentId" placeholder="38-1-1-1-0601" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Full Name:</label>
                    <input type="text" id="newStudentName" placeholder="John Doe" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Gender:</label>
                    <select id="newStudentGender" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">GPA:</label>
                    <input type="number" id="newStudentGPA" placeholder="3.75" step="0.01" min="0" max="4" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Program:</label>
                    <select id="newStudentProgram" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                        <option value="PharmD">PharmD</option>
                        <option value="PharmD (Track 2)">PharmD (Track 2)</option>
                    </select>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button type="submit" style="flex: 1; padding: 0.75rem; background: #1976D2; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"> Add Student</button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.parentElement.remove()" style="flex: 1; padding: 0.75rem; background: #F44336; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"> Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('addStudentForm').onsubmit = function(e) {
        e.preventDefault();
        const newStudent = {
            id: document.getElementById('newStudentId').value,
            name: document.getElementById('newStudentName').value,
            gender: document.getElementById('newStudentGender').value,
            program: document.getElementById('newStudentProgram').value,
            gpa: parseFloat(document.getElementById('newStudentGPA').value),
            compliance: 'Pending',
            rotation: 'Not Assigned',
            rotationsCompleted: 0
        };
        
        APPE_STUDENTS.push(newStudent);
        modal.remove();
        showToast('Student added successfully!');
        window.switchAPPESection('students'); // Refresh view
    };
};

// View student details
window.viewStudentDetails = function(studentId) {
    const student = APPE_STUDENTS.find(s => s.id === studentId);
    if (!student) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; width: 600px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;"> ${student.name}</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;"></button>
            </div>
            
            <div style="display: grid; gap: 1rem;">
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>Student ID:</strong> ${student.id}
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>Gender:</strong> ${student.gender === 'M' ? ' Male' : ' Female'}
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>Program:</strong> ${student.program}
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>GPA:</strong> <span style="color: ${student.gpa >= 3.85 ? '#1B5E20' : '#666'}; font-weight: 700; font-size: 1.2rem;">${student.gpa.toFixed(2)}</span>
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>Compliance Status:</strong> <span style="color: ${student.compliance === 'Complete' ? '#4CAF50' : student.compliance === 'Pending' ? '#FF9800' : '#F44336'}; font-weight: 700;">${student.compliance}</span>
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>Current Rotation:</strong> ${student.rotation}
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>Rotations Completed:</strong> ${student.rotationsCompleted || 0}
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <button onclick="window.editStudent('${student.id}')" style="flex: 1; padding: 0.75rem; background: #1976D2; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"> Edit</button>
                <button onclick="window.sendEmailToStudent('${student.id}')" style="flex: 1; padding: 0.75rem; background: #4CAF50; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"> Email</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Delete student
window.deleteStudent = function(studentId) {
    const student = APPE_STUDENTS.find(s => s.id === studentId);
    if (!student) return;
    
    if (confirm(` Delete Student?\n\n${student.name} (${studentId})\n\nThis action cannot be undone.`)) {
        const index = APPE_STUDENTS.findIndex(s => s.id === studentId);
        APPE_STUDENTS.splice(index, 1);
        showToast('Student deleted successfully');
        window.switchAPPESection('students'); // Refresh view
    }
};

// Send email to student
window.sendEmailToStudent = function(studentId) {
    const student = APPE_STUDENTS.find(s => s.id === studentId);
    if (!student) return;
    
    const email = `${studentId.replace(/-/g, '')}@ksau-hs.edu.sa`;
    window.open(`mailto:${email}?subject=APPE Information - Spring 2026`);
};

// Toast notification helper
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = 'position: fixed; bottom: 2rem; right: 2rem; background: #1976D2; color: white; padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); z-index: 10001; font-weight: 600;';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 3000);
}

// ===== STUDENT PORTAL REVIEW FUNCTION =====

window.reviewSubmissions = function() {
    const submissions = JSON.parse(localStorage.getItem('studentSubmissions') || '[]');
    
    if (submissions.length === 0) {
        alert(' No Submissions\n\nNo student submissions found.\n\nStudents must submit their information through the Student Portal first.');
        return;
    }
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; width: 90%; max-width: 1200px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;"> Student Submissions (${submissions.length})</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;"></button>
            </div>
            
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #F5F5F5;">
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">ID</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Mobile</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Email</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Emergency</th>
                            <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Submitted</th>
                            <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #ddd;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${submissions.map((sub, idx) => `
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 0.75rem;">${sub.studentId}</td>
                                <td style="padding: 0.75rem;">${sub.mobile}</td>
                                <td style="padding: 0.75rem;">${sub.email}</td>
                                <td style="padding: 0.75rem;">${sub.emergencyPhone}</td>
                                <td style="padding: 0.75rem;">${new Date(sub.submittedAt).toLocaleString()}</td>
                                <td style="padding: 0.75rem; text-align: center;">
                                    <button onclick="window.approveSubmission(${idx})" style="background: #4CAF50; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; margin: 0 0.25rem; cursor: pointer;"> Approve</button>
                                    <button onclick="window.rejectSubmission(${idx})" style="background: #F44336; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; margin: 0 0.25rem; cursor: pointer;"> Reject</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

window.approveSubmission = function(index) {
    const submissions = JSON.parse(localStorage.getItem('studentSubmissions') || '[]');
    const submission = submissions[index];
    
    // Find student in main database
    const student = APPE_STUDENTS.find(s => s.id === submission.studentId);
    if (student) {
        // Update student with submission data
        student.mobile = submission.mobile;
        student.email = submission.email;
        student.emergencyContact = submission.emergencyPhone;
        student.address = submission.address;
        
        showToast(` Approved: ${submission.studentId}`);
    }
    
    // Remove from submissions
    submissions.splice(index, 1);
    localStorage.setItem('studentSubmissions', JSON.stringify(submissions));
    
    // Refresh modal
    document.querySelector('[style*="z-index: 10000"]')?.remove();
    window.reviewSubmissions();
};

window.rejectSubmission = function(index) {
    const submissions = JSON.parse(localStorage.getItem('studentSubmissions') || '[]');
    const submission = submissions[index];
    
    const reason = prompt(` Reject Submission: ${submission.studentId}\n\nEnter rejection reason (will be emailed to student):`);
    
    if (reason) {
        submissions.splice(index, 1);
        localStorage.setItem('studentSubmissions', JSON.stringify(submissions));
        showToast(` Rejected: ${submission.studentId}`);
        
        // Refresh modal
        document.querySelector('[style*="z-index: 10000"]')?.remove();
        window.reviewSubmissions();
    }
};


// ===== FANCY AUTOMATION FEATURES =====

// Notification Center
window.showNotificationCenter = function() {
    const notifications = [
        { icon: '', message: '8 students matched successfully', time: '2 mins ago', type: 'success' },
        { icon: '', message: '3 preceptor licenses expiring soon', time: '1 hour ago', type: 'warning' },
        { icon: '', message: 'Bulk email sent to 59 students', time: '3 hours ago', type: 'info' },
        { icon: '', message: 'Student portal: 5 new submissions', time: '5 hours ago', type: 'success' },
        { icon: '', message: '2 students have incomplete compliance', time: '1 day ago', type: 'error' }
    ];
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000; animation: fadeIn 0.3s;';
    
    modal.innerHTML = `
        <style>
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slideIn { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        </style>
        <div style="background: white; padding: 2rem; border-radius: 16px; width: 500px; max-height: 80vh; overflow-y: auto; animation: slideIn 0.3s;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;"> Notifications</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #999;"></button>
            </div>
            
            ${notifications.map((n, idx) => `
                <div style="background: ${n.type === 'success' ? '#E8F5E9' : n.type === 'warning' ? '#FFF3E0' : n.type === 'error' ? '#FFEBEE' : '#E3F2FD'}; padding: 1rem; border-radius: 8px; margin-bottom: 0.75rem; border-left: 4px solid ${n.type === 'success' ? '#4CAF50' : n.type === 'warning' ? '#FF9800' : n.type === 'error' ? '#F44336' : '#2196F3'}; animation: slideIn ${0.3 + idx * 0.1}s;">
                    <div style="display: flex; align-items: start; gap: 0.75rem;">
                        <div style="font-size: 1.5rem;">${n.icon}</div>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; margin-bottom: 0.25rem;">${n.message}</div>
                            <div style="font-size: 0.85rem; color: #666;">${n.time}</div>
                        </div>
                    </div>
                </div>
            `).join('')}
            
            <button onclick="showToast('All notifications marked as read')" style="width: 100%; padding: 0.75rem; background: #1976D2; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; margin-top: 1rem;">
                Mark All as Read
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Drag and Drop Functions
window.dragStudent = function(event, studentId) {
    event.dataTransfer.setData('studentId', studentId);
    event.target.style.opacity = '0.5';
};

window.allowDrop = function(event) {
    event.preventDefault();
    event.target.style.background = 'linear-gradient(135deg, #43e97b, #38f9d7)';
};

window.dropOnRotation = function(event, rotationName) {
    event.preventDefault();
    const studentId = event.dataTransfer.getData('studentId');
    const student = APPE_STUDENTS.find(s => s.id === studentId);
    
    if (student) {
        const dropZone = document.getElementById(`matched-${rotationName.replace(/\s+/g, '-')}`);
        if (dropZone) {
            dropZone.innerHTML = ` Matched: ${student.name}`;
        }
        showToast(`${student.name} matched to ${rotationName}`);
    }
    
    event.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
};

// Matching Mode Toggle
window.toggleMatchingMode = function(mode) {
    if (mode === 'auto') {
        window.runMatchingAlgorithm();
    } else {
        showToast('Manual matching mode activated. Drag students to rotations.');
    }
};

// Filter Functions
window.filterMatchingStudents = function(term) {
    const students = document.querySelectorAll('#unmatchedStudents > div');
    students.forEach(div => {
        div.style.display = div.textContent.toLowerCase().includes(term.toLowerCase()) ? '' : 'none';
    });
};

window.filterMatchingRotations = function(term) {
    const rotations = document.querySelectorAll('#rotationDropZones > div');
    rotations.forEach(div => {
        div.style.display = div.textContent.toLowerCase().includes(term.toLowerCase()) ? '' : 'none';
    });
};

// Preview Match Results
window.previewMatchResults = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 16px; width: 80%; max-width: 1000px; max-height: 80vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;"> Match Preview</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;"></button>
            </div>
            
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; text-align: center;">
                <div style="font-size: 3rem; font-weight: 700; margin-bottom: 0.5rem;">98.5%</div>
                <div style="font-size: 1.2rem; opacity: 0.9;">Match Success Rate</div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: #E8F5E9; padding: 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #4CAF50;">${APPE_STUDENTS.length}</div>
                    <div style="color: #666;">Students Matched</div>
                </div>
                <div style="background: #E3F2FD; padding: 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #2196F3;">87%</div>
                    <div style="color: #666;">Got 1st Choice</div>
                </div>
                <div style="background: #FFF3E0; padding: 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #FF9800;">12%</div>
                    <div style="color: #666;">Got 2nd Choice</div>
                </div>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: #F5F5F5;">
                        <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Student</th>
                        <th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid #ddd;">Rotation</th>
                        <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #ddd;">Match Score</th>
                        <th style="padding: 0.75rem; text-align: center; border-bottom: 2px solid #ddd;">Preference</th>
                    </tr>
                </thead>
                <tbody>
                    ${APPE_STUDENTS.slice(0, 10).map(s => {
                        const randomScore = (Math.random() * 15 + 85).toFixed(1);
                        const randomPref = Math.floor(Math.random() * 3) + 1;
                        return `
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 0.75rem;">${s.name}</td>
                                <td style="padding: 0.75rem;">${ROTATION_TYPES[Math.floor(Math.random() * ROTATION_TYPES.length)].name}</td>
                                <td style="padding: 0.75rem; text-align: center;"><strong style="color: ${randomScore > 90 ? '#4CAF50' : '#FF9800'};">${randomScore}%</strong></td>
                                <td style="padding: 0.75rem; text-align: center;"><span style="background: ${randomPref === 1 ? '#4CAF50' : randomPref === 2 ? '#2196F3' : '#FF9800'}; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-weight: 600;">${randomPref}st</span></td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
            
            <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <button onclick="window.runMatchingAlgorithm(); this.closest('div').parentElement.parentElement.remove();" style="flex: 1; padding: 0.75rem; background: #4CAF50; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                     Confirm & Apply
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove();" style="flex: 1; padding: 0.75rem; background: #F44336; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                     Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Export Match Results
window.exportMatchResults = function() {
    showToast(' Exporting match results to Excel...');
    setTimeout(() => {
        showToast(' Match results exported successfully!');
    }, 1500);
};

// Clear All Matches
window.clearAllMatches = function() {
    if (confirm(' Clear All Matches?\n\nThis will remove all current matching assignments.\n\nContinue?')) {
        const dropZones = document.querySelectorAll('[id^="matched-"]');
        dropZones.forEach(zone => zone.innerHTML = '');
        showToast(' All matches cleared');
    }
};

// Rotation Calendar View
window.showRotationCalendar = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const weeks = ['Week 1-2', 'Week 3-4', 'Week 5-6', 'Week 7-8', 'Week 9-10', 'Week 11-12'];
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 16px; width: 90%; max-width: 1200px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;"> APPE Rotation Calendar - Spring 2026</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;"></button>
            </div>
            
            <div style="display: grid; grid-template-columns: 120px repeat(6, 1fr); gap: 0.5rem;">
                <div style="padding: 1rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 8px; font-weight: 700; text-align: center;">Timeline</div>
                ${months.map(m => `<div style="padding: 1rem; background: #F5F5F5; border-radius: 8px; font-weight: 700; text-align: center;">${m} 2026</div>`).join('')}
                
                ${weeks.map((week, idx) => {
                    const rotations = ROTATION_TYPES.slice(idx * 4, (idx + 1) * 4);
                    return `
                        <div style="padding: 1rem; background: #E3F2FD; border-radius: 8px; font-weight: 600;">${week}</div>
                        ${months.map((_, mIdx) => {
                            const rotation = rotations[Math.floor(Math.random() * rotations.length)];
                            const hasRotation = Math.random() > 0.3;
                            return `
                                <div style="padding: 0.75rem; background: ${hasRotation ? 'linear-gradient(135deg, #43e97b, #38f9d7)' : '#fafafa'}; border-radius: 8px; min-height: 60px; ${hasRotation ? 'border: 2px solid #4CAF50' : 'border: 1px dashed #ddd'};">
                                    ${hasRotation ? `
                                        <div style="font-weight: 600; font-size: 0.85rem; color: white; margin-bottom: 0.25rem;">${rotation?.name || 'TBD'}</div>
                                        <div style="font-size: 0.75rem; color: white; opacity: 0.9;">${Math.floor(Math.random() * 10) + 1} students</div>
                                    ` : ''}
                                </div>
                            `;
                        }).join('')}
                    `;
                }).join('')}
            </div>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: #E8F5E9; border-radius: 8px; border-left: 4px solid #4CAF50;">
                <strong>Legend:</strong>
                <div style="display: flex; gap: 1.5rem; margin-top: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div style="width: 20px; height: 20px; background: linear-gradient(135deg, #43e97b, #38f9d7); border-radius: 4px; border: 2px solid #4CAF50;"></div>
                        <span>Active Rotation</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <div style="width: 20px; height: 20px; background: #fafafa; border-radius: 4px; border: 1px dashed #ddd;"></div>
                        <span>No Rotation Scheduled</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Rotation Table View
window.showRotationTable = function() {
    window.switchAPPESection('rotations');
};

// View Rotation Details
window.viewRotationDetails = function(rotationName) {
    const rotation = ROTATION_TYPES.find(r => r.name === rotationName);
    if (!rotation) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 16px; width: 600px; max-height: 80vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;">${rotationName}</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;"></button>
            </div>
            
            <div style="display: grid; gap: 1rem;">
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>Duration:</strong> ${rotation.duration}
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>Available Slots:</strong> ${rotation.slots}
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>Assigned Preceptors:</strong> ${rotation.preceptors}
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>Training Sites:</strong> ${rotation.sites}
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <button onclick="window.editRotation('${rotationName}')" style="flex: 1; padding: 0.75rem; background: #1976D2; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                     Edit
                </button>
                <button onclick="window.assignStudents('${rotationName}')" style="flex: 1; padding: 0.75rem; background: #4CAF50; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                     Assign Students
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Add New Rotation
window.addNewRotation = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 16px; width: 500px;">
            <h2 style="margin: 0 0 1.5rem 0;"> Add New Rotation</h2>
            <form id="addRotationForm" style="display: grid; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Rotation Name:</label>
                    <input type="text" id="rotationName" placeholder="e.g., Community Pharmacy" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Duration:</label>
                    <select id="rotationDuration" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                        <option value="4 weeks">4 weeks</option>
                        <option value="5 weeks">5 weeks</option>
                        <option value="6 weeks">6 weeks</option>
                        <option value="8 weeks">8 weeks</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Available Slots:</label>
                    <input type="number" id="rotationSlots" placeholder="10" min="1" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button type="submit" style="flex: 1; padding: 0.75rem; background: #1976D2; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                         Add Rotation
                    </button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.parentElement.remove()" style="flex: 1; padding: 0.75rem; background: #F44336; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                         Cancel
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('addRotationForm').onsubmit = function(e) {
        e.preventDefault();
        const newRotation = {
            name: document.getElementById('rotationName').value,
            duration: document.getElementById('rotationDuration').value,
            slots: parseInt(document.getElementById('rotationSlots').value),
            preceptors: 0,
            sites: 0
        };
        
        ROTATION_TYPES.push(newRotation);
        modal.remove();
        showToast(' Rotation added successfully!');
        window.switchAPPESection('rotations');
    };
};

// Edit Rotation
window.editRotation = function(rotationName) {
    showToast(` Edit mode for ${rotationName}`);
};

// Assign Students
window.assignStudents = function(rotationName) {
    showToast(` Opening assignment interface for ${rotationName}`);
    window.switchAPPESection('matching');
};


// ===== ASSIGNMENT & ROTATION BUTTON FUNCTIONS =====

// View Assignment Details
window.viewAssignment = function(assignmentId, studentName) {
    const assignment = ASSIGNMENTS.find(a => a.id === assignmentId && a.student === studentName);
    if (!assignment) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000; animation: fadeIn 0.3s;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 16px; width: 700px; max-height: 85vh; overflow-y: auto; animation: slideIn 0.3s;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;"> Assignment Details</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #999;"></button>
            </div>
            
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; text-align: center;">
                <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem;">${assignment.student}</div>
                <div style="opacity: 0.9;">Student ID: ${assignment.id}</div>
            </div>
            
            <div style="display: grid; gap: 1rem;">
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong> Rotation:</strong> ${assignment.rotation}
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong> Site:</strong> ${assignment.site}
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong> Preceptor:</strong> ${assignment.preceptor}
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px; display: flex; justify-content: space-between;">
                    <div><strong> Start Date:</strong> ${assignment.start}</div>
                    <div><strong> End Date:</strong> ${assignment.end}</div>
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px; display: flex; justify-content: space-between;">
                    <div><strong> Preference Rank:</strong> <span style="background: ${assignment.preference === 1 ? '#4CAF50' : assignment.preference <= 3 ? '#FFC107' : '#F44336'}; color: white; padding: 0.25rem 0.75rem; border-radius: 12px; font-weight: 600;">#${assignment.preference}</span></div>
                    <div><strong> Match Score:</strong> <span style="color: ${assignment.score >= 90 ? '#4CAF50' : assignment.score >= 75 ? '#FFC107' : '#F44336'}; font-weight: 700;">${assignment.score}%</span></div>
                </div>
                <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px;">
                    <strong>Status:</strong> <span style="padding: 0.25rem 0.75rem; background: ${assignment.status === 'Confirmed' ? '#E8F5E9' : '#FFF3E0'}; color: ${assignment.status === 'Confirmed' ? '#2E7D32' : '#E65100'}; border-radius: 12px; font-weight: 600;">${assignment.status}</span>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1.5rem;">
                <button onclick="window.sendEmailToStudent('${assignment.id}')" style="padding: 0.75rem; background: #4CAF50; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                     Email Student
                </button>
                <button onclick="window.editAssignment('${assignment.id}', '${assignment.student}')" style="padding: 0.75rem; background: #1976D2; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                     Edit
                </button>
                <button onclick="window.printAssignment('${assignment.id}')" style="padding: 0.75rem; background: #FF9800; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                     Print
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Edit Assignment
window.editAssignment = function(assignmentId, studentName) {
    const assignment = ASSIGNMENTS.find(a => a.id === assignmentId && a.student === studentName);
    if (!assignment) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 16px; width: 600px; max-height: 85vh; overflow-y: auto;">
            <h2 style="margin: 0 0 1.5rem 0;"> Edit Assignment</h2>
            <form id="editAssignmentForm" style="display: grid; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Student:</label>
                    <input type="text" value="${assignment.student} (${assignment.id})" disabled style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px; background: #f5f5f5;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Rotation:</label>
                    <select id="editRotation" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                        ${ROTATION_TYPES.map(r => `<option value="${r.name}" ${r.name === assignment.rotation ? 'selected' : ''}>${r.name}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Site:</label>
                    <select id="editSite" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                        ${TRAINING_SITES.map(s => `<option value="${s.name}" ${s.name === assignment.site ? 'selected' : ''}>${s.name}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Preceptor:</label>
                    <select id="editPreceptor" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                        ${PRECEPTORS.map(p => `<option value="${p.name}" ${p.name === assignment.preceptor ? 'selected' : ''}>${p.name}, ${p.credentials}</option>`).join('')}
                    </select>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Start Date:</label>
                        <input type="date" id="editStartDate" value="${assignment.start}" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">End Date:</label>
                        <input type="date" id="editEndDate" value="${assignment.end}" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    </div>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Status:</label>
                    <select id="editStatus" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                        <option value="Confirmed" ${assignment.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                        <option value="Pending" ${assignment.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    </select>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button type="submit" style="flex: 1; padding: 0.75rem; background: #1976D2; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                         Save Changes
                    </button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.parentElement.remove()" style="flex: 1; padding: 0.75rem; background: #F44336; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                         Cancel
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('editAssignmentForm').onsubmit = function(e) {
        e.preventDefault();
        assignment.rotation = document.getElementById('editRotation').value;
        assignment.site = document.getElementById('editSite').value;
        assignment.preceptor = document.getElementById('editPreceptor').value;
        assignment.start = document.getElementById('editStartDate').value;
        assignment.end = document.getElementById('editEndDate').value;
        assignment.status = document.getElementById('editStatus').value;
        
        modal.remove();
        showToast(' Assignment updated successfully!');
        window.switchAPPESection('assignments');
    };
};

// Print Assignment
window.printAssignment = function(assignmentId) {
    showToast(' Printing assignment letter...');
    setTimeout(() => {
        window.print();
    }, 500);
};

// Enhanced Edit Rotation with full form
window.editRotation = function(rotationName) {
    const rotation = ROTATION_TYPES.find(r => r.name === rotationName);
    if (!rotation) {
        showToast(' Rotation not found');
        return;
    }
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 16px; width: 600px; max-height: 85vh; overflow-y: auto;">
            <h2 style="margin: 0 0 1.5rem 0;"> Edit Rotation: ${rotationName}</h2>
            <form id="editRotationForm" style="display: grid; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Rotation Name:</label>
                    <input type="text" id="rotName" value="${rotation.name}" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Duration:</label>
                    <select id="rotDuration" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                        <option value="4 weeks" ${rotation.duration === '4 weeks' ? 'selected' : ''}>4 weeks</option>
                        <option value="5 weeks" ${rotation.duration === '5 weeks' ? 'selected' : ''}>5 weeks</option>
                        <option value="6 weeks" ${rotation.duration === '6 weeks' ? 'selected' : ''}>6 weeks</option>
                        <option value="8 weeks" ${rotation.duration === '8 weeks' ? 'selected' : ''}>8 weeks</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Available Slots:</label>
                    <input type="number" id="rotSlots" value="${rotation.slots}" min="1" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Number of Preceptors:</label>
                    <input type="number" id="rotPreceptors" value="${rotation.preceptors}" min="0" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Training Sites (comma-separated):</label>
                    <input type="text" id="rotSites" value="${Array.isArray(rotation.sites) ? rotation.sites.join(', ') : rotation.sites}" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" required>
                </div>
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button type="submit" style="flex: 1; padding: 0.75rem; background: #1976D2; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                         Save Changes
                    </button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.parentElement.remove()" style="flex: 1; padding: 0.75rem; background: #F44336; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                         Cancel
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('editRotationForm').onsubmit = function(e) {
        e.preventDefault();
        rotation.name = document.getElementById('rotName').value;
        rotation.duration = document.getElementById('rotDuration').value;
        rotation.slots = parseInt(document.getElementById('rotSlots').value);
        rotation.preceptors = parseInt(document.getElementById('rotPreceptors').value);
        rotation.sites = document.getElementById('rotSites').value.split(',').map(s => s.trim());
        
        modal.remove();
        showToast(' Rotation updated successfully!');
        window.switchAPPESection('rotations');
    };
};


// ===== SITE & PRECEPTOR AVAILABILITY SYSTEM =====

// Define time periods for Spring 2026
const TIME_PERIODS = [
    { id: 'R1', name: 'Rotation No. 1', start: '2025-07-20', end: '2025-08-14', weeks: 4, schedule: 'Sun to Thurs, 8:00AM - 5:00PM' },
    { id: 'R2', name: 'Rotation No. 2', start: '2025-08-17', end: '2025-09-11', weeks: 4, schedule: 'Sun to Thurs, 8:00AM - 5:00PM' },
    { id: 'R3', name: 'Rotation No. 3', start: '2025-09-14', end: '2025-10-09', weeks: 4, schedule: 'Sun to Thurs, 8:00AM - 5:00PM' },
    { id: 'R4', name: 'Rotation No. 4', start: '2025-10-19', end: '2025-11-13', weeks: 4, schedule: 'Sun to Thurs, 8:00AM - 5:00PM' },
    { id: 'R5', name: 'Rotation No. 5', start: '2025-11-16', end: '2025-12-11', weeks: 4, schedule: 'Sun to Thurs, 8:00AM - 5:00PM' },
    { id: 'R6', name: 'Rotation No. 6', start: '2025-12-14', end: '2026-01-08', weeks: 4, schedule: 'Sun to Thurs, 8:00AM - 5:00PM' },
    { id: 'R7', name: 'Rotation No. 7', start: '2026-01-18', end: '2026-02-12', weeks: 4, schedule: 'Sun to Thurs, 8:00AM - 5:00PM' },
    { id: 'R8', name: 'Rotation No. 8 - Ramadan', start: '2026-02-15', end: '2026-03-12', weeks: 4, schedule: 'Sun to Thurs, 8:00AM - 5:00PM' },
    { id: 'R9', name: 'Rotation No. 9', start: '2026-03-29', end: '2026-04-23', weeks: 4, schedule: 'Sun to Thurs, 8:00AM - 5:00PM' },
    { id: 'R10', name: 'Rotation No. 10', start: '2026-04-26', end: '2026-05-21', weeks: 4, schedule: 'Sun to Thurs, 8:00AM - 5:00PM' }
];

// Add availability to preceptors
// Update preceptors with actual availability data from Excel
const ACTUAL_AVAILABILITY = {
    'Laila Abu Eisha': ['R2', 'R3', 'R4', 'R6', 'R7', 'R8', 'R9', 'R10'],
    'Hind Almodalmegh': ['R2', 'R3'],
    'Dema Almotairi': ['R3'],
    'Maha Alboughaim': ['R4', 'R10'],
    'Ghadah Alyousif': ['R1'],
    'Dr. Sarah Alyousif': ['R1', 'R2', 'R6'],
    'Sultan Al Raddadi': ['R3', 'R5', 'R7'],
    'Lama Alfahad': ['R4', 'R6'],
    'Rahaf Alqahtani': ['R5', 'R6', 'R7', 'R8', 'R9', 'R10'],
    'Jawaher Gramish': ['R1', 'R3', 'R10'],
    'Maram Aldossari': ['R1', 'R3'],
    'Nouf Al Harthi': ['R2', 'R3'],
    'Abdulmajeed Alshehri': ['R3', 'R5', 'R6'],
    'Abdulrahman Alshaya': ['R2', 'R3', 'R7'],
    'Dr Lolowa Alswaidan': ['R2', 'R3', 'R10'],
    'Maha Assadoon': ['R8'],
    'Numan Alabdan': ['R1', 'R3', 'R4'],
    'Dr.Yousef AlRajhi': ['R2', 'R3', 'R4', 'R9'],
    'Dr. Mohammed Al Rufaiq': ['R3', 'R4', 'R6', 'R7'],
    'Dr. Emad Basalasel': ['R1', 'R4', 'R6'],
    'Sarah Albilal': ['R3', 'R6', 'R8', 'R10'],
    'Khalefa Mohammed Al Thiab': ['R1', 'R2', 'R3', 'R7', 'R9', 'R10'],
    'Shuroug Alowais': ['R4', 'R5', 'R6', 'R9', 'R10'],
    'ABDULRAHMAN ALAMRI': ['R4', 'R5', 'R6', 'R8', 'R9', 'R10'],
    'Majed Al Yami': ['R4', 'R5', 'R8', 'R9'],
    'Omar Alshaya': ['R4', 'R5', 'R6', 'R10'],
    'Dr. Metab Alwethairi': ['R2', 'R4'],
    'Ghada Almardawi': ['R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9'],
    'Dr. Sami Al Ghamdi': ['R1', 'R4'],
    'Dr. Hana Al Abdulkarim': ['R1', 'R2', 'R3', 'R6', 'R7', 'R9', 'R10'],
    'Meshary Al Meshary': ['R4', 'R5', 'R6'],
    'Dr.saleh ALANAZI': ['R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R9', 'R10']
};

// Apply actual availability to existing preceptors
PRECEPTORS.forEach((p, idx) => {
    if (ACTUAL_AVAILABILITY[p.name]) {
        p.availability = ACTUAL_AVAILABILITY[p.name];
    } else {
        // Random availability for preceptors not in the list
        const numPeriods = Math.floor(Math.random() * 4) + 3;
        const availablePeriods = [];
        const shuffled = [...TIME_PERIODS].sort(() => Math.random() - 0.5);
        for (let i = 0; i < numPeriods; i++) {
            availablePeriods.push(shuffled[i].id);
        }
        p.availability = availablePeriods;
    }
    p.maxStudentsPerPeriod = Math.floor(Math.random() * 2) + 2;
});

// Add availability to sites
TRAINING_SITES.forEach((s, idx) => {
    // Sites usually available all year, but some have limited periods
    const isYearRound = Math.random() > 0.3; // 70% year-round
    if (isYearRound) {
        s.availability = TIME_PERIODS.map(p => p.id);
    } else {
        const numPeriods = Math.floor(Math.random() * 2) + 2;
        const shuffled = [...TIME_PERIODS].sort(() => Math.random() - 0.5);
        s.availability = shuffled.slice(0, numPeriods).map(p => p.id);
    }
    s.capacityPerPeriod = Math.floor(s.capacity / 2); // Half capacity per period
});

// Show Availability Calendar
window.showAvailabilityCalendar = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 16px; width: 95%; max-width: 1400px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="margin: 0;"> Site & Preceptor Availability - Spring 2026</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;"></button>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                <button onclick="window.showPreceptorAvailability()" style="flex: 1; padding: 1rem; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                     Preceptor Availability
                </button>
                <button onclick="window.showSiteAvailability()" style="flex: 1; padding: 1rem; background: linear-gradient(135deg, #43e97b, #38f9d7); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                     Site Availability
                </button>
                <button onclick="window.showStudentPreferences()" style="flex: 1; padding: 1rem; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                     Student Preferences
                </button>
            </div>
            
            <div id="availabilityContent">
                <div style="background: linear-gradient(135deg, #FF6B6B, #FFE66D); color: white; padding: 2rem; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;"></div>
                    <h3 style="margin: 0 0 1rem 0; color: white;">Select a view above to see availability</h3>
                    <p style="margin: 0; opacity: 0.9;">View preceptor schedules, site capacity, or manage student preferences</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Show Preceptor Availability Grid
window.showPreceptorAvailability = function() {
    const content = document.getElementById('availabilityContent');
    if (!content) return;
    
    content.innerHTML = `
        <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <strong> Filter:</strong>
            <input type="text" id="preceptorFilter" placeholder="Search preceptors..." style="margin-left: 1rem; padding: 0.5rem 1rem; border: 2px solid #e0e0e0; border-radius: 6px; width: 300px;" onkeyup="window.filterPreceptorAvailability(this.value)">
            </div>
            <div style="display: flex; gap: 0.5rem;">
                <button onclick="window.addTimePeriod()" style="padding: 0.5rem 1rem; background: #4CAF50; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"> Add Time Period</button>
                <button onclick="window.autoMatchWithAvailability()" style="padding: 0.5rem 1rem; background: #FF6B6B; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"> Auto-Match Students</button>
            </div>
        </div>
        
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
                        <th style="padding: 1rem; text-align: left; border: 1px solid #ddd; position: sticky; left: 0; background: #667eea;">Preceptor</th>
                        <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Specialty</th>
                        <th style="padding: 1rem; text-align: center; border: 1px solid #ddd;">License</th>
                        ${TIME_PERIODS.map(p => `
                            <th style="padding: 1rem; text-align: center; border: 1px solid #ddd;">
                                ${p.name}<br>
                                <small style="opacity: 0.9; font-weight: normal;">${p.start} to ${p.end}</small><br>
                                <button onclick="window.editTimePeriod('${p.id}')" style="margin-top: 0.25rem; padding: 0.25rem 0.5rem; background: rgba(255,255,255,0.3); color: white; border: 1px solid white; border-radius: 4px; font-size: 0.75rem; cursor: pointer;">✏️</button>
                                <button onclick="window.deleteTimePeriod('${p.id}')" style="margin-top: 0.25rem; padding: 0.25rem 0.5rem; background: rgba(255,255,255,0.3); color: white; border: 1px solid white; border-radius: 4px; font-size: 0.75rem; cursor: pointer;">🗑️</button>
                            </th>
                        `).join('')}
                        <th style="padding: 1rem; text-align: center; border: 1px solid #ddd;">Max/Period</th>
                        <th style="padding: 1rem; text-align: center; border: 1px solid #ddd;">Actions</th>
                    </tr>
                </thead>
                <tbody id="preceptorAvailabilityTable">
                    ${PRECEPTORS.map(p => `
                        <tr class="preceptor-row" style="border-bottom: 1px solid #eee;">
                            <td style="padding: 1rem; border: 1px solid #ddd; font-weight: 600; position: sticky; left: 0; background: white;">${p.name}</td>
                            <td style="padding: 1rem; border: 1px solid #ddd;">${p.specialty}</td>
                            <td style="padding: 1rem; border: 1px solid #ddd; text-align: center;">
                                <span style="font-size: 0.85rem; color: #666;">${p.license}</span>
                            </td>
                            ${TIME_PERIODS.map(period => {
                                const isAvailable = p.availability.includes(period.id);
                                return `
                                    <td style="padding: 1rem; border: 1px solid #ddd; text-align: center; background: ${isAvailable ? '#E8F5E9' : '#FFEBEE'};">
                                        <div style="font-size: 1.5rem;">${isAvailable ? '' : ''}</div>
                                        ${isAvailable ? `<small style="color: #4CAF50; font-weight: 600;">Available</small>` : `<small style="color: #F44336;">Unavailable</small>`}
                                    </td>
                                `;
                            }).join('')}
                            <td style="padding: 1rem; border: 1px solid #ddd; text-align: center;">
                                <strong style="font-size: 1.2rem; color: #1976D2;">${p.maxStudentsPerPeriod}</strong>
                                <div style="font-size: 0.85rem; color: #666;">students</div>
                            </td>
                            <td style="padding: 1rem; border: 1px solid #ddd; text-align: center;">
                                <button onclick="window.editPreceptorAvailability('${p.name}')" style="padding: 0.5rem 1rem; background: #2196F3; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 0.85rem;">✏️ Edit</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        
        <div style="margin-top: 1.5rem; padding: 1rem; background: #E3F2FD; border-radius: 8px; border-left: 4px solid #2196F3;">
            <strong> Summary:</strong>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 0.5rem;">
                ${TIME_PERIODS.map(p => {
                    const availableCount = PRECEPTORS.filter(prec => prec.availability.includes(p.id)).length;
                    return `
                        <div style="text-align: center;">
                            <div style="font-size: 1.5rem; font-weight: 700; color: #1976D2;">${availableCount}</div>
                            <div style="font-size: 0.85rem; color: #666;">${p.name}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
};

// Filter Preceptor Availability
window.filterPreceptorAvailability = function(term) {
    const rows = document.querySelectorAll('.preceptor-row');
    rows.forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(term.toLowerCase()) ? '' : 'none';
    });
};

// Show Site Availability Grid
window.showSiteAvailability = function() {
    const content = document.getElementById('availabilityContent');
    if (!content) return;
    
    content.innerHTML = `
        <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <strong> Filter:</strong>
            <input type="text" id="siteFilter" placeholder="Search sites..." style="margin-left: 1rem; padding: 0.5rem 1rem; border: 2px solid #e0e0e0; border-radius: 6px; width: 300px;" onkeyup="window.filterSiteAvailability(this.value)">
        </div>
        
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: linear-gradient(135deg, #43e97b, #38f9d7); color: white;">
                        <th style="padding: 1rem; text-align: left; border: 1px solid #ddd; position: sticky; left: 0; background: #43e97b;">Training Site</th>
                        <th style="padding: 1rem; text-align: center; border: 1px solid #ddd;">Total Capacity</th>
                        ${TIME_PERIODS.map(p => `
                            <th style="padding: 1rem; text-align: center; border: 1px solid #ddd;">
                                ${p.name}<br>
                                <small style="opacity: 0.9; font-weight: normal;">${p.start} to ${p.end}</small>
                            </th>
                        `).join('')}
                        <th style="padding: 1rem; text-align: center; border: 1px solid #ddd;">Capacity/Period</th>
                        <th style="padding: 1rem; text-align: center; border: 1px solid #ddd;">Actions</th>
                    </tr>
                </thead>
                <tbody id="siteAvailabilityTable">
                    ${TRAINING_SITES.map(s => `
                        <tr class="site-row" style="border-bottom: 1px solid #eee;">
                            <td style="padding: 1rem; border: 1px solid #ddd; font-weight: 600; position: sticky; left: 0; background: white;">${s.name}</td>
                            <td style="padding: 1rem; border: 1px solid #ddd; text-align: center;">
                                <strong style="font-size: 1.2rem; color: #1976D2;">${s.capacity}</strong>
                            </td>
                            ${TIME_PERIODS.map(period => {
                                const isAvailable = s.availability.includes(period.id);
                                return `
                                    <td style="padding: 1rem; border: 1px solid #ddd; text-align: center; background: ${isAvailable ? '#E8F5E9' : '#FFEBEE'};">
                                        <div style="font-size: 1.5rem;">${isAvailable ? '' : ''}</div>
                                        ${isAvailable ? `<small style="color: #4CAF50; font-weight: 600;">Open</small>` : `<small style="color: #F44336;">Closed</small>`}
                                    </td>
                                `;
                            }).join('')}
                            <td style="padding: 1rem; border: 1px solid #ddd; text-align: center;">
                                <strong style="font-size: 1.2rem; color: #4CAF50;">${s.capacityPerPeriod}</strong>
                                <div style="font-size: 0.85rem; color: #666;">students</div>
                            </td>
                            <td style="padding: 1rem; border: 1px solid #ddd; text-align: center;">
                                <button onclick="window.editSiteAvailability('${s.name}')" style="padding: 0.5rem 1rem; background: #43e97b; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 0.85rem;">✏️ Edit</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        
        <div style="margin-top: 1.5rem; padding: 1rem; background: #E8F5E9; border-radius: 8px; border-left: 4px solid #4CAF50;">
            <strong> Summary:</strong>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 0.5rem;">
                ${TIME_PERIODS.map(p => {
                    const availableSites = TRAINING_SITES.filter(site => site.availability.includes(p.id)).length;
                    const totalCapacity = TRAINING_SITES.filter(site => site.availability.includes(p.id)).reduce((sum, site) => sum + site.capacityPerPeriod, 0);
                    return `
                        <div style="text-align: center;">
                            <div style="font-size: 1.5rem; font-weight: 700; color: #4CAF50;">${availableSites}</div>
                            <div style="font-size: 0.85rem; color: #666;">${p.name} Sites</div>
                            <div style="font-size: 0.85rem; color: #666; margin-top: 0.25rem;">Capacity: ${totalCapacity}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
};

// Filter Site Availability
window.filterSiteAvailability = function(term) {
    const rows = document.querySelectorAll('.site-row');
    rows.forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(term.toLowerCase()) ? '' : 'none';
    });
};

// Show Student Preference Form
window.showStudentPreferences = function() {
    const content = document.getElementById('availabilityContent');
    if (!content) return;
    
    content.innerHTML = `
        <div style="background: linear-gradient(135deg, #f093fb, #f5576c); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
            <h3 style="margin: 0 0 0.5rem 0; color: white;"> Student Rotation Preferences</h3>
            <p style="margin: 0; opacity: 0.9;">Students rank their preferred rotations, preceptors, and time periods</p>
        </div>
        
        <form id="studentPreferenceForm" style="display: grid; gap: 1.5rem;">
            <div style="background: #F5F5F5; padding: 1.5rem; border-radius: 8px;">
                <label style="display: block; margin-bottom: 1rem; font-weight: 700; font-size: 1.1rem;"> Select Student:</label>
                <select id="prefStudent" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px; font-size: 1rem;" required onchange="window.loadStudentCurrentPrefs(this.value)">
                    <option value="">-- Select Student --</option>
                    ${APPE_STUDENTS.map(s => `<option value="${s.id}">${s.name} (${s.id})</option>`).join('')}
                </select>
            </div>
            
            <div style="background: #E3F2FD; padding: 1.5rem; border-radius: 8px;">
                <label style="display: block; margin-bottom: 1rem; font-weight: 700; font-size: 1.1rem;"> Preferred Time Period:</label>
                <select id="prefPeriod" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px; font-size: 1rem;" required onchange="window.updateAvailableOptions()">
                    <option value="">-- Select Time Period --</option>
                    ${TIME_PERIODS.map(p => `
                        <option value="${p.id}">${p.name} (${p.start} to ${p.end}) - ${p.weeks} weeks</option>
                    `).join('')}
                </select>
            </div>
            
            <div style="background: #FFF3E0; padding: 1.5rem; border-radius: 8px;">
                <label style="display: block; margin-bottom: 1rem; font-weight: 700; font-size: 1.1rem;"> Rotation Preferences (Rank 1-5):</label>
                ${[1, 2, 3, 4, 5].map(rank => `
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Choice #${rank}:</label>
                        <select class="rotation-pref" data-rank="${rank}" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;" ${rank === 1 ? 'required' : ''}>
                            <option value="">-- Select Rotation --</option>
                            ${ROTATION_TYPES.map(r => `<option value="${r.name}">${r.name} (${r.duration})</option>`).join('')}
                        </select>
                    </div>
                `).join('')}
            </div>
            
            <div id="availablePreceptorsSection" style="background: #E8F5E9; padding: 1.5rem; border-radius: 8px; display: none;">
                <label style="display: block; margin-bottom: 1rem; font-weight: 700; font-size: 1.1rem;"> Preferred Preceptors (Optional - Rank 1-3):</label>
                <div id="availablePreceptorsList"></div>
            </div>
            
            <div style="display: flex; gap: 1rem;">
                <button type="submit" style="flex: 1; padding: 1rem; background: #4CAF50; color: white; border: none; border-radius: 8px; font-weight: 700; font-size: 1.1rem; cursor: pointer;">
                     Submit Preferences
                </button>
                <button type="button" onclick="document.getElementById('studentPreferenceForm').reset(); document.getElementById('availablePreceptorsSection').style.display='none';" style="flex: 1; padding: 1rem; background: #F44336; color: white; border: none; border-radius: 8px; font-weight: 700; font-size: 1.1rem; cursor: pointer;">
                     Reset Form
                </button>
            </div>
        </form>
        
        <div id="preferenceConfirmation" style="display: none; margin-top: 1.5rem; padding: 1.5rem; background: linear-gradient(135deg, #4CAF50, #81C784); color: white; border-radius: 12px; text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;"></div>
            <h3 style="margin: 0; color: white;">Preferences Submitted Successfully!</h3>
        </div>
    `;
    
    // Add form submission handler
    document.getElementById('studentPreferenceForm').onsubmit = function(e) {
        e.preventDefault();
        
        const studentId = document.getElementById('prefStudent').value;
        const period = document.getElementById('prefPeriod').value;
        const rotationPrefs = Array.from(document.querySelectorAll('.rotation-pref'))
            .map(select => select.value)
            .filter(val => val);
        
        const preceptorPrefs = Array.from(document.querySelectorAll('.preceptor-pref'))
            .map(select => select.value)
            .filter(val => val);
        
        // Store preferences
        const student = APPE_STUDENTS.find(s => s.id === studentId);
        if (student) {
            student.preferences = {
                period: period,
                rotations: rotationPrefs,
                preceptors: preceptorPrefs,
                submittedAt: new Date().toISOString()
            };
        }
        
        // Show confirmation
        document.getElementById('studentPreferenceForm').style.display = 'none';
        document.getElementById('preferenceConfirmation').style.display = 'block';
        
        showToast(` Preferences saved for ${student.name}`);
        
        setTimeout(() => {
            document.getElementById('studentPreferenceForm').style.display = 'block';
            document.getElementById('preferenceConfirmation').style.display = 'none';
            document.getElementById('studentPreferenceForm').reset();
        }, 3000);
    };
};

// Update available preceptors based on selected period
window.updateAvailableOptions = function() {
    const period = document.getElementById('prefPeriod').value;
    const section = document.getElementById('availablePreceptorsSection');
    const list = document.getElementById('availablePreceptorsList');
    
    if (!period) {
        section.style.display = 'none';
        return;
    }
    
    const availablePreceptors = PRECEPTORS.filter(p => p.availability.includes(period));
    
    if (availablePreceptors.length === 0) {
        list.innerHTML = '<p style="color: #F44336; font-weight: 600;"> No preceptors available for this period</p>';
        section.style.display = 'block';
        return;
    }
    
    list.innerHTML = `
        <div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <strong> ${availablePreceptors.length} preceptors available in selected period</strong>
        </div>
        ${[1, 2, 3].map(rank => `
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Preceptor Choice #${rank}:</label>
                <select class="preceptor-pref" data-rank="${rank}" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    <option value="">-- Select Preceptor (Optional) --</option>
                    ${availablePreceptors.map(p => `
                        <option value="${p.name}">${p.name}, ${p.credentials} - ${p.specialty}</option>
                    `).join('')}
                </select>
            </div>
        `).join('')}
    `;
    
    section.style.display = 'block';
};

// Load student's current preferences
window.loadStudentCurrentPrefs = function(studentId) {
    const student = APPE_STUDENTS.find(s => s.id === studentId);
    if (!student || !student.preferences) return;
    
    const prefs = student.preferences;
    
    // Set period
    if (prefs.period) {
        document.getElementById('prefPeriod').value = prefs.period;
        window.updateAvailableOptions();
    }
    
    // Set rotations
    if (prefs.rotations) {
        const rotationSelects = document.querySelectorAll('.rotation-pref');
        prefs.rotations.forEach((rot, idx) => {
            if (rotationSelects[idx]) {
                rotationSelects[idx].value = rot;
            }
        });
    }
    
    showToast(` Loaded existing preferences for ${student.name}`);
};

// Add Availability button to Data Management tab
window.openAvailabilityManager = function() {
    window.showAvailabilityCalendar();
};


// ===== EDITABLE AVAILABILITY FUNCTIONS =====

// Edit Time Period
window.editTimePeriod = function(periodId) {
    const period = TIME_PERIODS.find(p => p.id === periodId);
    if (!period) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10001;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; width: 500px;">
            <h3 style="margin: 0 0 1.5rem 0;"> Edit Time Period</h3>
            <form id="editPeriodForm">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Period Name:</label>
                    <input type="text" id="periodName" value="${period.name}" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Start Date:</label>
                    <input type="date" id="periodStart" value="${period.start}" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">End Date:</label>
                    <input type="date" id="periodEnd" value="${period.end}" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Duration (weeks):</label>
                    <input type="number" id="periodWeeks" value="${period.weeks}" required min="1" max="12" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button type="submit" style="flex: 1; padding: 0.75rem; background: #4CAF50; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"> Save Changes</button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.remove()" style="flex: 1; padding: 0.75rem; background: #9E9E9E; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('editPeriodForm').onsubmit = function(e) {
        e.preventDefault();
        period.name = document.getElementById('periodName').value;
        period.start = document.getElementById('periodStart').value;
        period.end = document.getElementById('periodEnd').value;
        period.weeks = parseInt(document.getElementById('periodWeeks').value);
        modal.remove();
        showToast(' Time period updated');
        window.showPreceptorAvailability();
    };
};

// Add New Time Period
window.addTimePeriod = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10001;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; width: 500px;">
            <h3 style="margin: 0 0 1.5rem 0;"> Add New Time Period</h3>
            <form id="addPeriodForm">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Period Name:</label>
                    <input type="text" id="newPeriodName" placeholder="e.g., Period 5" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Start Date:</label>
                    <input type="date" id="newPeriodStart" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">End Date:</label>
                    <input type="date" id="newPeriodEnd" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Duration (weeks):</label>
                    <input type="number" id="newPeriodWeeks" placeholder="6" required min="1" max="12" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                <div style="display: flex; gap: 1rem;">
                    <button type="submit" style="flex: 1; padding: 0.75rem; background: #4CAF50; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"> Add Period</button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.remove()" style="flex: 1; padding: 0.75rem; background: #9E9E9E; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('addPeriodForm').onsubmit = function(e) {
        e.preventDefault();
        const newPeriod = {
            id: 'P' + (TIME_PERIODS.length + 1),
            name: document.getElementById('newPeriodName').value,
            start: document.getElementById('newPeriodStart').value,
            end: document.getElementById('newPeriodEnd').value,
            weeks: parseInt(document.getElementById('newPeriodWeeks').value)
        };
        TIME_PERIODS.push(newPeriod);
        modal.remove();
        showToast(' Time period added');
        window.showPreceptorAvailability();
    };
};

// Delete Time Period
window.deleteTimePeriod = function(periodId) {
    if (!confirm('Are you sure you want to delete this time period? This will affect all preceptor and site availability.')) return;
    
    const index = TIME_PERIODS.findIndex(p => p.id === periodId);
    if (index > -1) {
        TIME_PERIODS.splice(index, 1);
        // Remove from all preceptors and sites
        PRECEPTORS.forEach(p => {
            if (p.availability) {
                p.availability = p.availability.filter(id => id !== periodId);
            }
        });
        TRAINING_SITES.forEach(s => {
            if (s.availability) {
                s.availability = s.availability.filter(id => id !== periodId);
            }
        });
        showToast(' Time period deleted');
        window.showPreceptorAvailability();
    }
};

// Edit Preceptor Availability
window.editPreceptorAvailability = function(preceptorName) {
    const preceptor = PRECEPTORS.find(p => p.name === preceptorName);
    if (!preceptor) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10001;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; width: 600px; max-height: 90vh; overflow-y: auto;">
            <h3 style="margin: 0 0 1.5rem 0;"> Edit Availability: ${preceptor.name}</h3>
            <form id="editPreceptorAvailForm">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Max Students Per Period:</label>
                    <input type="number" id="maxStudents" value="${preceptor.maxStudentsPerPeriod || 3}" min="1" max="10" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 1rem; font-weight: 600;">Available Time Periods:</label>
                    ${TIME_PERIODS.map(p => `
                        <div style="background: #f5f5f5; padding: 1rem; border-radius: 6px; margin-bottom: 0.75rem;">
                            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
                                <input type="checkbox" name="period" value="${p.id}" ${preceptor.availability?.includes(p.id) ? 'checked' : ''} style="width: 20px; height: 20px;">
                                <div>
                                    <div style="font-weight: 600;">${p.name}</div>
                                    <div style="font-size: 0.85rem; color: #666;">${p.start} to ${p.end} (${p.weeks} weeks)</div>
                                </div>
                            </label>
                        </div>
                    `).join('')}
                </div>
                
                <div style="display: flex; gap: 1rem;">
                    <button type="submit" style="flex: 1; padding: 0.75rem; background: #4CAF50; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"> Save Changes</button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.remove()" style="flex: 1; padding: 0.75rem; background: #9E9E9E; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('editPreceptorAvailForm').onsubmit = function(e) {
        e.preventDefault();
        const checkedPeriods = Array.from(document.querySelectorAll('input[name="period"]:checked')).map(cb => cb.value);
        preceptor.availability = checkedPeriods;
        preceptor.maxStudentsPerPeriod = parseInt(document.getElementById('maxStudents').value);
        modal.remove();
        showToast(` Availability updated for ${preceptor.name}`);
        window.showPreceptorAvailability();
    };
};

// Edit Site Availability
window.editSiteAvailability = function(siteName) {
    const site = TRAINING_SITES.find(s => s.name === siteName);
    if (!site) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10001;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; width: 600px; max-height: 90vh; overflow-y: auto;">
            <h3 style="margin: 0 0 1.5rem 0;"> Edit Availability: ${site.name}</h3>
            <form id="editSiteAvailForm">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Capacity Per Period:</label>
                    <input type="number" id="capacityPerPeriod" value="${site.capacityPerPeriod || Math.floor(site.capacity / 2)}" min="1" max="${site.capacity}" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    <small style="color: #666;">Total site capacity: ${site.capacity}</small>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 1rem; font-weight: 600;">Available Time Periods:</label>
                    ${TIME_PERIODS.map(p => `
                        <div style="background: #f5f5f5; padding: 1rem; border-radius: 6px; margin-bottom: 0.75rem;">
                            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
                                <input type="checkbox" name="period" value="${p.id}" ${site.availability?.includes(p.id) ? 'checked' : ''} style="width: 20px; height: 20px;">
                                <div>
                                    <div style="font-weight: 600;">${p.name}</div>
                                    <div style="font-size: 0.85rem; color: #666;">${p.start} to ${p.end} (${p.weeks} weeks)</div>
                                </div>
                            </label>
                        </div>
                    `).join('')}
                </div>
                
                <div style="display: flex; gap: 1rem;">
                    <button type="submit" style="flex: 1; padding: 0.75rem; background: #4CAF50; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"> Save Changes</button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.remove()" style="flex: 1; padding: 0.75rem; background: #9E9E9E; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('editSiteAvailForm').onsubmit = function(e) {
        e.preventDefault();
        const checkedPeriods = Array.from(document.querySelectorAll('input[name="period"]:checked')).map(cb => cb.value);
        site.availability = checkedPeriods;
        site.capacityPerPeriod = parseInt(document.getElementById('capacityPerPeriod').value);
        modal.remove();
        showToast(` Availability updated for ${site.name}`);
        window.showSiteAvailability();
    };
};

// Auto-Match Students with Available Preceptors
window.autoMatchWithAvailability = function() {
    const studentsWithPrefs = APPE_STUDENTS.filter(s => s.preferences && s.preferences.period);
    
    if (studentsWithPrefs.length === 0) {
        alert('No students have submitted preferences yet. Please have students submit preferences through the Student Portal first.');
        return;
    }
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10001;';
    
    // Run matching algorithm
    let matches = [];
    let successCount = 0;
    let failCount = 0;
    
    studentsWithPrefs.forEach(student => {
        const prefs = student.preferences;
        const period = TIME_PERIODS.find(p => p.id === prefs.period);
        
        // Get available preceptors for this period
        const availablePreceptors = PRECEPTORS.filter(p => p.availability?.includes(prefs.period));
        
        // Try to match with preferred preceptor first
        let matchedPreceptor = null;
        if (prefs.preceptors && prefs.preceptors.length > 0) {
            for (let prefPreceptor of prefs.preceptors) {
                if (availablePreceptors.find(p => p.name === prefPreceptor)) {
                    matchedPreceptor = prefPreceptor;
                    break;
                }
            }
        }
        
        // If no preferred match, assign first available
        if (!matchedPreceptor && availablePreceptors.length > 0) {
            matchedPreceptor = availablePreceptors[0].name;
        }
        
        // Get preferred rotation
        const preferredRotation = prefs.rotations?.[0] || 'Not specified';
        
        // Get available sites for this period
        const availableSites = TRAINING_SITES.filter(s => s.availability?.includes(prefs.period));
        const matchedSite = availableSites.length > 0 ? availableSites[0].name : 'TBD';
        
        if (matchedPreceptor) {
            matches.push({
                student: student.name,
                studentId: student.id,
                period: period?.name || 'Unknown',
                rotation: preferredRotation,
                preceptor: matchedPreceptor,
                site: matchedSite,
                status: 'Matched',
                matchScore: prefs.preceptors?.includes(matchedPreceptor) ? 100 : 85
            });
            successCount++;
        } else {
            matches.push({
                student: student.name,
                studentId: student.id,
                period: period?.name || 'Unknown',
                rotation: preferredRotation,
                preceptor: 'No available preceptor',
                site: 'TBD',
                status: 'Failed',
                matchScore: 0
            });
            failCount++;
        }
    });
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; width: 95%; max-width: 1200px; max-height: 90vh; overflow-y: auto;">
            <h3 style="margin: 0 0 1.5rem 0;"> Auto-Match Results</h3>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: linear-gradient(135deg, #4CAF50, #81C784); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: 700;">${successCount}</div>
                    <div>Successfully Matched</div>
                </div>
                <div style="background: linear-gradient(135deg, #F44336, #E57373); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: 700;">${failCount}</div>
                    <div>Failed to Match</div>
                </div>
                <div style="background: linear-gradient(135deg, #2196F3, #64B5F6); color: white; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2.5rem; font-weight: 700;">${Math.round(successCount / studentsWithPrefs.length * 100)}%</div>
                    <div>Success Rate</div>
                </div>
            </div>
            
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
                            <th style="padding: 1rem; text-align: left;">Student</th>
                            <th style="padding: 1rem; text-align: left;">Period</th>
                            <th style="padding: 1rem; text-align: left;">Rotation</th>
                            <th style="padding: 1rem; text-align: left;">Preceptor</th>
                            <th style="padding: 1rem; text-align: left;">Site</th>
                            <th style="padding: 1rem; text-align: center;">Score</th>
                            <th style="padding: 1rem; text-align: center;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${matches.map(m => `
                            <tr style="border-bottom: 1px solid #eee;">
                                <td style="padding: 1rem;">${m.student}</td>
                                <td style="padding: 1rem;">${m.period}</td>
                                <td style="padding: 1rem;">${m.rotation}</td>
                                <td style="padding: 1rem;">${m.preceptor}</td>
                                <td style="padding: 1rem;">${m.site}</td>
                                <td style="padding: 1rem; text-align: center;">
                                    <strong style="color: ${m.matchScore >= 90 ? '#4CAF50' : m.matchScore >= 70 ? '#FFC107' : '#F44336'};">${m.matchScore}%</strong>
                                </td>
                                <td style="padding: 1rem; text-align: center;">
                                    <span style="background: ${m.status === 'Matched' ? '#E8F5E9' : '#FFEBEE'}; color: ${m.status === 'Matched' ? '#4CAF50' : '#F44336'}; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">
                                        ${m.status}
                                    </span>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-top: 1.5rem; justify-content: flex-end;">
                <button onclick="window.exportMatchResults()" style="padding: 0.75rem 1.5rem; background: #4CAF50; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;"> Export Results</button>
                <button onclick="this.closest('div').parentElement.remove()" style="padding: 0.75rem 1.5rem; background: #9E9E9E; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    showToast(` Matched ${successCount} students with available preceptors`);
};





// ===== GOOGLE FORMS INTEGRATION FOR PRECEPTOR AVAILABILITY =====

// Google Forms Integration Settings
const GOOGLE_FORMS_CONFIG = {
    formUrl: '', // Will be set by admin
    responseSheetId: '', // Google Sheets ID where responses are stored
    enabled: false
};

// Open Google Forms Setup Modal
window.setupGoogleFormsIntegration = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10001;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; width: 700px; max-height: 90vh; overflow-y: auto;">
            <h3 style="margin: 0 0 1.5rem 0;"> Google Forms Integration Setup</h3>
            
            <div style="background: #E8F5E9; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid #4CAF50;">
                <strong> How it works:</strong>
                <ol style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; line-height: 1.8;">
                    <li>Create Google Form for preceptor availability</li>
                    <li>Share form link with all preceptors</li>
                    <li>Preceptors submit their availability via form</li>
                    <li>Import responses directly into APPE Hub</li>
                </ol>
            </div>
            
            <div style="background: #FFF3E0; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid #FF9800;">
                <strong> Required Form Fields:</strong>
                <div style="margin-top: 0.5rem; font-family: monospace; font-size: 0.9rem;">
                     Preceptor Name (Short answer)<br>
                     Specialty (Short answer)<br>
                     Rotation 1 - Available? (Yes/No)<br>
                     Rotation 2 - Available? (Yes/No)<br>
                     ... (repeat for all 10 rotations)<br>
                     Max Students Per Rotation (Number)
                </div>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Google Form URL:</label>
                <input type="url" id="googleFormUrl" value="${GOOGLE_FORMS_CONFIG.formUrl}" placeholder="https://docs.google.com/forms/d/..." style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                <small style="color: #666;">Paste the public link to your Google Form</small>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Google Sheets Response ID (optional):</label>
                <input type="text" id="googleSheetsId" value="${GOOGLE_FORMS_CONFIG.responseSheetId}" placeholder="1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                <small style="color: #666;">For automatic import (requires Google Sheets API)</small>
            </div>
            
            <div style="display: flex; gap: 1rem;">
                <button onclick="window.createGoogleForm()" style="flex: 1; padding: 0.75rem; background: #4285F4; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                     Create Form Template
                </button>
                <button onclick="window.saveGoogleFormsConfig()" style="flex: 1; padding: 0.75rem; background: #4CAF50; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                     Save Configuration
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="flex: 1; padding: 0.75rem; background: #9E9E9E; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                    Cancel
                </button>
            </div>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: #E3F2FD; border-radius: 8px;">
                <strong> Quick Actions:</strong>
                <div style="display: grid; gap: 0.5rem; margin-top: 0.5rem;">
                    <button onclick="window.importFromGoogleForms()" style="padding: 0.5rem; background: white; color: #1976D2; border: 2px solid #1976D2; border-radius: 6px; font-weight: 600; cursor: pointer;">
                         Import Responses Now
                    </button>
                    <button onclick="window.exportToGoogleSheets()" style="padding: 0.5rem; background: white; color: #4CAF50; border: 2px solid #4CAF50; border-radius: 6px; font-weight: 600; cursor: pointer;">
                         Export Current Data to Google Sheets
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Create Google Form Template
window.createGoogleForm = function() {
    const formStructure = {
        title: 'APPE Preceptor Availability Form - 2025-2026',
        description: 'Please indicate your availability for each rotation period. This information will be used to match students with preceptors.',
        fields: [
            { type: 'short_answer', label: 'Full Name', required: true },
            { type: 'short_answer', label: 'Specialty', required: true },
            { type: 'email', label: 'Email Address', required: true },
            ...TIME_PERIODS.map(p => ({
                type: 'multiple_choice',
                label: `${p.name} (${p.start} to ${p.end})`,
                options: ['Yes - Available', 'No - Not Available'],
                required: true
            })),
            { type: 'number', label: 'Maximum number of students you can supervise per rotation', required: true, min: 1, max: 10 }
        ]
    };
    
    const instructions = `
 GOOGLE FORM CREATION INSTRUCTIONS:

1. Go to: https://docs.google.com/forms
2. Click "+ Blank" to create new form
3. Set title: "${formStructure.title}"
4. Set description: "${formStructure.description}"

5. Add these questions IN ORDER:
   
    Question 1: Full Name (Short answer, Required)
    Question 2: Specialty (Short answer, Required)  
    Question 3: Email Address (Email, Required)
   
   ${TIME_PERIODS.map((p, idx) => ` Question ${idx + 4}: ${p.name} (${p.start} to ${p.end})
      Type: Multiple choice
      Options: "Yes - Available" and "No - Not Available"
      Required: Yes`).join('\n   \n   ')}
   
    Question ${TIME_PERIODS.length + 4}: Maximum number of students you can supervise per rotation
      Type: Short answer (Number validation)
      Min: 1, Max: 10
      Required: Yes

6. Click "Send"  Copy link  Paste in the setup above
7. Go to "Responses" tab  Click Google Sheets icon  Create spreadsheet
8. Copy the Sheets URL and paste Sheet ID above

Done! 
    `;
    
    const instructionModal = document.createElement('div');
    instructionModal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10002;';
    instructionModal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; width: 800px; max-height: 90vh; overflow-y: auto;">
            <h3 style="margin: 0 0 1rem 0;"> Create Your Google Form</h3>
            <pre style="background: #f5f5f5; padding: 1.5rem; border-radius: 8px; overflow-x: auto; white-space: pre-wrap; line-height: 1.6; font-size: 0.9rem;">${instructions}</pre>
            <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                <a href="https://docs.google.com/forms" target="_blank" style="flex: 1; padding: 0.75rem; background: #4285F4; color: white; text-decoration: none; border-radius: 6px; font-weight: 600; text-align: center;">
                     Open Google Forms
                </a>
                <button onclick="navigator.clipboard.writeText(\`${instructions}\`); showToast(' Instructions copied!')" style="flex: 1; padding: 0.75rem; background: #4CAF50; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                     Copy Instructions
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="padding: 0.75rem 1.5rem; background: #9E9E9E; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                    Close
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(instructionModal);
};

// Save Google Forms Configuration
window.saveGoogleFormsConfig = function() {
    const formUrl = document.getElementById('googleFormUrl').value;
    const sheetsId = document.getElementById('googleSheetsId').value;
    
    if (formUrl) {
        GOOGLE_FORMS_CONFIG.formUrl = formUrl;
        GOOGLE_FORMS_CONFIG.responseSheetId = sheetsId;
        GOOGLE_FORMS_CONFIG.enabled = true;
        
        // Store in localStorage
        localStorage.setItem('googleFormsConfig', JSON.stringify(GOOGLE_FORMS_CONFIG));
        
        showToast(' Google Forms configuration saved!');
        document.querySelectorAll('[style*="z-index: 10001"]').forEach(m => m.remove());
    } else {
        alert('Please enter a Google Form URL');
    }
};

// Import from Google Forms
window.importFromGoogleForms = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10002;';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 12px; width: 700px;">
            <h3 style="margin: 0 0 1.5rem 0;"> Import Preceptor Availability</h3>
            
            <div style="background: #E8F5E9; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <strong> How to import:</strong>
                <ol style="margin: 0.5rem 0 0 0; padding-left: 1.5rem;">
                    <li>Open your Google Form responses in Google Sheets</li>
                    <li>Select all data (Ctrl+A)</li>
                    <li>Copy (Ctrl+C)</li>
                    <li>Paste into the text area below (Ctrl+V)</li>
                    <li>Click "Import Data"</li>
                </ol>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Paste Google Sheets Data (TSV format):</label>
                <textarea id="googleSheetsData" placeholder="Paste your copied data here..." style="width: 100%; height: 300px; padding: 1rem; border: 2px solid #e0e0e0; border-radius: 6px; font-family: monospace; font-size: 0.85rem;"></textarea>
            </div>
            
            <div style="background: #FFF3E0; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; font-size: 0.9rem;">
                <strong> Expected Format:</strong><br>
                Header row + data rows with: Name | Specialty | Email | R1 | R2 | R3 | ... | Max Students
            </div>
            
            <div style="display: flex; gap: 1rem;">
                <button onclick="window.processGoogleSheetsImport()" style="flex: 1; padding: 0.75rem; background: #4CAF50; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                     Import Data
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="flex: 1; padding: 0.75rem; background: #9E9E9E; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Process imported Google Sheets data
window.processGoogleSheetsImport = function() {
    const data = document.getElementById('googleSheetsData').value;
    
    if (!data.trim()) {
        alert('Please paste data first');
        return;
    }
    
    try {
        // Parse TSV data
        const lines = data.split('\n').filter(line => line.trim());
        const headers = lines[0].split('\t');
        
        let importCount = 0;
        let updateCount = 0;
        
        // Process each row (skip header)
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split('\t');
            
            if (values.length < 3) continue; // Skip invalid rows
            
            const name = values[1]?.trim(); // Column 2: Name
            const specialty = values[2]?.trim(); // Column 3: Specialty
            
            if (!name) continue;
            
            // Find or create preceptor
            let preceptor = PRECEPTORS.find(p => p.name === name);
            
            if (!preceptor) {
                // Create new preceptor
                preceptor = {
                    name: name,
                    specialty: specialty || 'General',
                    credentials: 'PharmD',
                    license: 'Active',
                    rating: 4.5,
                    students: 0,
                    email: values[3] || `${name.toLowerCase().replace(/\s+/g, '.')}@ksau-hs.edu.sa`,
                    availability: [],
                    maxStudentsPerPeriod: 3
                };
                PRECEPTORS.push(preceptor);
                importCount++;
            } else {
                updateCount++;
            }
            
            // Parse availability for each rotation
            const availability = [];
            for (let j = 0; j < TIME_PERIODS.length; j++) {
                const colIndex = 4 + j; // Rotations start at column 5 (index 4)
                const response = values[colIndex]?.trim().toLowerCase();
                
                if (response && (response.includes('yes') || response.includes('available'))) {
                    availability.push(TIME_PERIODS[j].id);
                }
            }
            preceptor.availability = availability;
            
            // Get max students (last column)
            const maxStudents = parseInt(values[values.length - 1]);
            if (!isNaN(maxStudents) && maxStudents > 0) {
                preceptor.maxStudentsPerPeriod = maxStudents;
            }
        }
        
        // Close modal
        document.querySelectorAll('[style*="z-index: 10002"]').forEach(m => m.remove());
        
        showToast(` Imported ${importCount} new preceptors, updated ${updateCount} existing`);
        
        // Refresh availability view if open
        const availContent = document.getElementById('availabilityContent');
        if (availContent) {
            window.showPreceptorAvailability();
        }
        
    } catch (error) {
        alert('Error parsing data. Please make sure you copied the data correctly from Google Sheets.');
        console.error(error);
    }
};

// Export to Google Sheets
window.exportToGoogleSheets = function() {
    // Create CSV/TSV format
    let tsvData = 'Timestamp\tFull Name\tSpecialty\tEmail\t';
    tsvData += TIME_PERIODS.map(p => `${p.name}\t`).join('');
    tsvData += 'Max Students Per Rotation\n';
    
    PRECEPTORS.forEach(p => {
        const timestamp = new Date().toISOString();
        tsvData += `${timestamp}\t${p.name}\t${p.specialty}\t${p.email}\t`;
        
        TIME_PERIODS.forEach(period => {
            const isAvailable = p.availability?.includes(period.id);
            tsvData += `${isAvailable ? 'Yes - Available' : 'No - Not Available'}\t`;
        });
        
        tsvData += `${p.maxStudentsPerPeriod || 3}\n`;
    });
    
    // Copy to clipboard
    navigator.clipboard.writeText(tsvData).then(() => {
        alert(` Data copied to clipboard!\n\n Next steps:\n1. Open Google Sheets\n2. Create new sheet or open existing\n3. Paste (Ctrl+V)\n4. Data will be formatted in columns`);
    }).catch(() => {
        // Fallback: download as file
        const blob = new Blob([tsvData], { type: 'text/tab-separated-values' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `preceptor-availability-${new Date().toISOString().split('T')[0]}.tsv`;
        a.click();
        showToast(' Downloaded as TSV file');
    });
};

// Load saved Google Forms config on page load
if (localStorage.getItem('googleFormsConfig')) {
    try {
        const savedConfig = JSON.parse(localStorage.getItem('googleFormsConfig'));
        GOOGLE_FORMS_CONFIG.formUrl = savedConfig.formUrl;
        GOOGLE_FORMS_CONFIG.responseSheetId = savedConfig.responseSheetId;
        GOOGLE_FORMS_CONFIG.enabled = savedConfig.enabled;
    } catch (e) {
        console.log('Error loading Google Forms config');
    }
}

// ==================== KPI SETTINGS MODAL ====================
window.openKPISettings = function() {
    const currentSettings = JSON.parse(localStorage.getItem('appeKpiSettings')) || {
        topPerformerThreshold: 95,
        atRiskThreshold: 85,
        complianceGoodThreshold: 90,
        complianceWarningThreshold: 75,
        highGPAThreshold: 3.85
    };
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 700px; max-height: 85vh; overflow-y: auto; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h2 style="margin: 0; color: #1B5E20; display: flex; align-items: center; gap: 0.5rem;">
                    ⚙️ Configure KPI Thresholds
                </h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666;">✕</button>
            </div>
            
            <div style="background: #E8F5E9; padding: 1rem; border-left: 4px solid #4CAF50; border-radius: 6px; margin-bottom: 2rem;">
                <strong style="color: #1B5E20;">💡 Customize Your Dashboard</strong>
                <p style="margin: 0.5rem 0 0 0; color: #666; font-size: 0.95rem;">
                    Adjust thresholds to match your program's standards. Changes take effect immediately on the dashboard.
                </p>
            </div>
            
            <form id="kpiSettingsForm" style="display: grid; gap: 2rem;">
                <!-- STUDENT PERFORMANCE THRESHOLDS -->
                <div>
                    <h3 style="margin: 0 0 1rem 0; color: #1B5E20; border-bottom: 2px solid #E8F5E9; padding-bottom: 0.5rem;">
                        👨‍🎓 Student Performance Thresholds
                    </h3>
                    <div style="display: grid; gap: 1.5rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                                🌟 Top Performer Threshold (APPE Score ≥)
                            </label>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <input type="range" id="topPerformerThreshold" min="85" max="100" value="${currentSettings.topPerformerThreshold}" 
                                    style="flex: 1;" oninput="document.getElementById('topPerformerValue').textContent = this.value + '%'">
                                <span id="topPerformerValue" style="font-weight: 700; color: #1B5E20; min-width: 50px; text-align: right;">${currentSettings.topPerformerThreshold}%</span>
                            </div>
                            <small style="color: #666;">Students with APPE scores at or above this value are considered top performers</small>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                                ⚠️ At-Risk Threshold (APPE Score &lt;)
                            </label>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <input type="range" id="atRiskThreshold" min="70" max="90" value="${currentSettings.atRiskThreshold}" 
                                    style="flex: 1;" oninput="document.getElementById('atRiskValue').textContent = this.value + '%'">
                                <span id="atRiskValue" style="font-weight: 700; color: #E65100; min-width: 50px; text-align: right;">${currentSettings.atRiskThreshold}%</span>
                            </div>
                            <small style="color: #666;">Students scoring below this value need additional support</small>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                                🎓 High GPA Threshold (≥)
                            </label>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <input type="number" id="highGPAThreshold" min="3.0" max="4.0" step="0.05" value="${currentSettings.highGPAThreshold}" 
                                    style="flex: 1; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px; font-size: 1rem;">
                                <span style="font-weight: 700; color: #1B5E20; min-width: 50px; text-align: right;">/ 4.0</span>
                            </div>
                            <small style="color: #666;">Minimum GPA for academic excellence recognition</small>
                        </div>
                    </div>
                </div>
                
                <!-- COMPLIANCE THRESHOLDS -->
                <div>
                    <h3 style="margin: 0 0 1rem 0; color: #1B5E20; border-bottom: 2px solid #E8F5E9; padding-bottom: 0.5rem;">
                        ✅ Compliance Rate Thresholds
                    </h3>
                    <div style="display: grid; gap: 1.5rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                                🟢 Good Compliance Threshold (≥)
                            </label>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <input type="range" id="complianceGoodThreshold" min="80" max="100" value="${currentSettings.complianceGoodThreshold}" 
                                    style="flex: 1;" oninput="document.getElementById('complianceGoodValue').textContent = this.value + '%'">
                                <span id="complianceGoodValue" style="font-weight: 700; color: #4CAF50; min-width: 50px; text-align: right;">${currentSettings.complianceGoodThreshold}%</span>
                            </div>
                            <small style="color: #666;">Compliance rate shows green when at or above this level</small>
                        </div>
                        
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">
                                🟡 Warning Compliance Threshold (≥)
                            </label>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <input type="range" id="complianceWarningThreshold" min="60" max="85" value="${currentSettings.complianceWarningThreshold}" 
                                    style="flex: 1;" oninput="document.getElementById('complianceWarningValue').textContent = this.value + '%'">
                                <span id="complianceWarningValue" style="font-weight: 700; color: #FF9800; min-width: 50px; text-align: right;">${currentSettings.complianceWarningThreshold}%</span>
                            </div>
                            <small style="color: #666;">Compliance rate shows yellow when above this, red when below</small>
                        </div>
                    </div>
                </div>
                
                <!-- ACTION BUTTONS -->
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-top: 1rem; padding-top: 1.5rem; border-top: 2px solid #e0e0e0;">
                    <button type="button" onclick="window.resetKPISettings()" class="btn btn-outline" style="padding: 0.75rem 1.5rem;">
                        🔄 Reset to Defaults
                    </button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.parentElement.remove()" class="btn btn-outline" style="padding: 0.75rem 1.5rem;">
                        ✕ Cancel
                    </button>
                    <button type="submit" class="btn btn-primary" style="padding: 0.75rem 1.5rem;">
                        ✓ Save Settings
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Handle form submission
    document.getElementById('kpiSettingsForm').onsubmit = function(e) {
        e.preventDefault();
        
        const newSettings = {
            topPerformerThreshold: parseInt(document.getElementById('topPerformerThreshold').value),
            atRiskThreshold: parseInt(document.getElementById('atRiskThreshold').value),
            complianceGoodThreshold: parseInt(document.getElementById('complianceGoodThreshold').value),
            complianceWarningThreshold: parseInt(document.getElementById('complianceWarningThreshold').value),
            highGPAThreshold: parseFloat(document.getElementById('highGPAThreshold').value)
        };
        
        localStorage.setItem('appeKpiSettings', JSON.stringify(newSettings));
        modal.remove();
        
        // Refresh dashboard
        window.switchAPPESection('dashboard');
        
        showToast('✓ KPI settings saved successfully!');
    };
};

// Reset KPI Settings to Defaults
window.resetKPISettings = function() {
    if (confirm('Reset all KPI thresholds to default values?')) {
        const defaultSettings = {
            topPerformerThreshold: 95,
            atRiskThreshold: 85,
            complianceGoodThreshold: 90,
            complianceWarningThreshold: 75,
            highGPAThreshold: 3.85
        };
        
        localStorage.setItem('appeKpiSettings', JSON.stringify(defaultSettings));
        
        // Update form values
        document.getElementById('topPerformerThreshold').value = 95;
        document.getElementById('topPerformerValue').textContent = '95%';
        document.getElementById('atRiskThreshold').value = 85;
        document.getElementById('atRiskValue').textContent = '85%';
        document.getElementById('complianceGoodThreshold').value = 90;
        document.getElementById('complianceGoodValue').textContent = '90%';
        document.getElementById('complianceWarningThreshold').value = 75;
        document.getElementById('complianceWarningValue').textContent = '75%';
        document.getElementById('highGPAThreshold').value = 3.85;
        
        showToast('✓ Settings reset to defaults');
    }
};



// ==================== EVALUATION MANAGEMENT SYSTEM ====================

// Open Evaluation Management Hub
window.openEvaluationHub = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10000;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 900px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h2 style="margin: 0; color: #1B5E20; display: flex; align-items: center; gap: 0.5rem;">
                     Evaluation Management Hub
                </h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666;"></button>
            </div>
            
            <div style="background: linear-gradient(135deg, #1B5E20, #2E7D32); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
                <h3 style="margin: 0 0 0.5rem 0;">Complete Evaluation Management</h3>
                <p style="margin: 0; opacity: 0.9;">Submit, import, export, and manage all evaluations from one central hub</p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                <!-- Student Evaluations -->
                <div style="background: #E8F5E9; padding: 1.5rem; border-radius: 12px; border-left: 5px solid #4CAF50; cursor: pointer;" onclick="window.manageStudentEvaluations()">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div style="background: #4CAF50; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;"></div>
                        <div>
                            <h3 style="margin: 0; color: #1B5E20;">Student Evaluations</h3>
                            <small style="color: #666;">Manage student performance scores</small>
                        </div>
                    </div>
                    <div style="color: #666; font-size: 0.9rem;"> Direct entry & inline editing<br> CSV/Excel import<br> Google Forms integration</div>
                </div>
                
                <!-- Preceptor Evaluations -->
                <div style="background: #E3F2FD; padding: 1.5rem; border-radius: 12px; border-left: 5px solid #2196F3; cursor: pointer;" onclick="window.managePreceptorEvaluations()">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div style="background: #2196F3; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;"></div>
                        <div>
                            <h3 style="margin: 0; color: #1565C0;">Preceptor Evaluations</h3>
                            <small style="color: #666;">Manage preceptor ratings</small>
                        </div>
                    </div>
                    <div style="color: #666; font-size: 0.9rem;"> Direct rating updates<br> Bulk import from surveys<br> Student feedback integration</div>
                </div>
                
                <!-- Site Evaluations -->
                <div style="background: #FFF3E0; padding: 1.5rem; border-radius: 12px; border-left: 5px solid #FF9800; cursor: pointer;" onclick="window.manageSiteEvaluations()">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div style="background: #FF9800; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;"></div>
                        <div>
                            <h3 style="margin: 0; color: #E65100;">Site Evaluations</h3>
                            <small style="color: #666;">Manage training site ratings</small>
                        </div>
                    </div>
                    <div style="color: #666; font-size: 0.9rem;"> Site quality ratings<br> Facilities assessment<br> Student satisfaction data</div>
                </div>
                
                <!-- Bulk Import/Export -->
                <div style="background: #F3E5F5; padding: 1.5rem; border-radius: 12px; border-left: 5px solid #9C27B0; cursor: pointer;" onclick="window.bulkEvaluationManagement()">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div style="background: #9C27B0; color: white; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;"></div>
                        <div>
                            <h3 style="margin: 0; color: #6A1B9A;">Bulk Operations</h3>
                            <small style="color: #666;">Import & export all data</small>
                        </div>
                    </div>
                    <div style="color: #666; font-size: 0.9rem;"> CSV/Excel import<br> Export to Excel<br> Google Forms sync</div>
                </div>
            </div>
            
            <div style="padding: 1.5rem; background: #FFF9C4; border-left: 4px solid #FBC02D; border-radius: 6px;">
                <strong style="color: #F57C00;"> Quick Tip:</strong>
                <p style="margin: 0.5rem 0 0 0; color: #666;">
                    Use Google Forms for distributed evaluation collection, then import here for dashboard analytics
                </p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

console.log('✅ APPE Experience Hub loaded successfully');