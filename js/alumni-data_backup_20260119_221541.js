/**
 * Alumni Unit Dashboard - Complete Alumni Database & Functions
 * 245 Total Alumni | 236 Active | 97% Employment Rate | 338 Board-Certified
 * Generated: January 19, 2026
 */

const ALUMNI_DATA = {
    // Alumni Statistics
    stats: {
        total: 245,
        active: 236,
        employmentRate: 97,
        boardCertified: 338,
        postgraduateTraining: 128,
        alumniMentors: 42,
        activePreceptors: 89,
        trainingSites: 28
    },

    // Program Distribution
    programs: [
        { id: 'pharmd', name: 'PharmD', total: 453, alumni: 180 },
        { id: 'bpharm', name: 'BPharm', total: 647, alumni: 65 }
    ],

    // Sample Alumni Records
    alumni: [
        // Class of 2024
        { id: 'A001', name: 'Dr. Sarah Al-Rashid', email: 'sarah.rashid@example.com', program: 'PharmD', graduationYear: 2024, status: 'employed', employer: 'KAMC Riyadh', position: 'Clinical Pharmacist - Oncology', boardCert: true, specialty: 'Oncology', engagement: 'active', mentorStatus: 'mentor' },
        { id: 'A002', name: 'Dr. Ahmed Al-Ghamdi', email: 'ahmed.ghamdi@example.com', program: 'PharmD', graduationYear: 2024, status: 'employed', employer: 'KFMC', position: 'Clinical Pharmacist - Cardiology', boardCert: true, specialty: 'Cardiology', engagement: 'active', mentorStatus: 'none' },
        { id: 'A003', name: 'Dr. Fatima Al-Otaibi', email: 'fatima.otaibi@example.com', program: 'PharmD', graduationYear: 2024, status: 'postgraduate', postgraduateType: 'Residency', institution: 'UT Health San Antonio', boardCert: false, specialty: 'Internal Medicine', engagement: 'moderate', mentorStatus: 'none' },
        { id: 'A004', name: 'Dr. Mohammed Al-Shehri', email: 'mohammed.shehri@example.com', program: 'PharmD', graduationYear: 2024, status: 'employed', employer: 'Pfizer SA', position: 'Clinical Research Manager', boardCert: false, specialty: 'Research', engagement: 'active', mentorStatus: 'none' },
        { id: 'A005', name: 'Dr. Hana Al-Zahra', email: 'hana.zahra@example.com', program: 'PharmD', graduationYear: 2024, status: 'employed', employer: 'Nahdi Pharmacy', position: 'Community Pharmacy Manager', boardCert: false, specialty: 'Community', engagement: 'low', mentorStatus: 'none' },
        
        // Class of 2023
        { id: 'A006', name: 'Dr. Khalid Al-Dosari', email: 'khalid.dosari@example.com', program: 'PharmD', graduationYear: 2023, status: 'employed', employer: 'NGH', position: 'Clinical Pharmacist - ICU', boardCert: true, specialty: 'Critical Care', engagement: 'active', mentorStatus: 'mentor' },
        { id: 'A007', name: 'Dr. Noura Al-Harbi', email: 'noura.harbi@example.com', program: 'PharmD', graduationYear: 2023, status: 'postgraduate', postgraduateType: 'Fellowship', institution: 'UC San Diego', boardCert: true, specialty: 'Pediatrics', engagement: 'active', mentorStatus: 'mentor' },
        { id: 'A008', name: 'Dr. Rayan Al-Qahtani', email: 'rayan.qahtani@example.com', program: 'BPharm', graduationYear: 2023, status: 'employed', employer: 'Ministry of Health', position: 'Pharmacy Inspector', boardCert: false, specialty: 'Regulatory', engagement: 'moderate', mentorStatus: 'none' },
        { id: 'A009', name: 'Dr. Lama Al-Saleh', email: 'lama.saleh@example.com', program: 'PharmD', graduationYear: 2023, status: 'employed', employer: 'King Faisal Specialist Hospital', position: 'Clinical Pharmacist - Transplant', boardCert: true, specialty: 'Transplant', engagement: 'active', mentorStatus: 'mentor' },
        { id: 'A010', name: 'Dr. Hassan Al-Anazi', email: 'hassan.anazi@example.com', program: 'PharmD', graduationYear: 2023, status: 'employed', employer: 'KAMC', position: 'Hospital Pharmacy Director', boardCert: true, specialty: 'Administration', engagement: 'active', mentorStatus: 'mentor' },
        
        // Class of 2022
        { id: 'A011', name: 'Dr. Maha Al-Mutairi', email: 'maha.mutairi@example.com', program: 'PharmD', graduationYear: 2022, status: 'postgraduate', postgraduateType: 'PhD', institution: 'University of Michigan', boardCert: true, specialty: 'Pharmacokinetics', engagement: 'moderate', mentorStatus: 'none' },
        { id: 'A012', name: 'Dr. Jamal Al-Shammari', email: 'jamal.shammari@example.com', program: 'PharmD', graduationYear: 2022, status: 'employed', employer: 'AstraZeneca Middle East', position: 'Regional Medical Manager', boardCert: false, specialty: 'Pharmaceutical Industry', engagement: 'low', mentorStatus: 'none' },
    ],

    // Top Engagement Activities
    engagementActivities: [
        { type: 'Guest Lectures', count: 25, year: 2025 },
        { type: 'Career Days', count: 15, year: 2025 },
        { type: 'Workshops', count: 18, year: 2025 },
        { type: 'Panel Discussions', count: 12, year: 2025 },
        { type: 'Research Collaborations', count: 8, year: 2025 },
        { type: 'Mentoring Sessions', count: 45, year: 2025 }
    ],

    // Employment Sectors
    employmentSectors: [
        { name: 'Hospital/Clinical', percentage: 45, count: 107 },
        { name: 'Community Pharmacy', percentage: 20, count: 47 },
        { name: 'Pharmaceutical Industry', percentage: 15, count: 36 },
        { name: 'Government/Public Health', percentage: 12, count: 28 },
        { name: 'Academic/Research', percentage: 8, count: 18 }
    ],

    // Postgraduate Training Data
    postgraduatePrograms: [
        { name: 'Residency', count: 67, institutions: ['UT Health San Antonio', 'UC San Diego', 'University of Michigan'] },
        { name: 'Fellowship', count: 41, institutions: ['UC San Diego', 'Boston Medical Center', 'Mayo Clinic'] },
        { name: 'PhD Program', count: 20, institutions: ['University of Michigan', 'UC San Diego', 'University of Texas'] }
    ],

    // Specialties
    specialties: [
        { name: 'Internal Medicine', count: 42, certified: 38 },
        { name: 'Oncology', count: 28, certified: 26 },
        { name: 'Cardiology', count: 23, certified: 21 },
        { name: 'Critical Care', count: 19, certified: 18 },
        { name: 'Pediatrics', count: 16, certified: 15 },
        { name: 'Community Pharmacy', count: 42, certified: 8 },
        { name: 'Administration', count: 15, certified: 12 },
        { name: 'Research', count: 18, certified: 5 }
    ],

    // Mentorship Program
    mentors: [
        { id: 'M001', name: 'Dr. Sarah Al-Rashid', specialty: 'Oncology', mentees: 4, yearsInvolved: 2 },
        { id: 'M002', name: 'Dr. Khalid Al-Dosari', specialty: 'Critical Care', mentees: 3, yearsInvolved: 3 },
        { id: 'M003', name: 'Dr. Noura Al-Harbi', specialty: 'Pediatrics', mentees: 5, yearsInvolved: 2 },
    ],

    // Preceptor Status
    preceptors: {
        total: 89,
        active: 82,
        sites: 28,
        topSites: [
            { name: 'KAMC Riyadh', preceptors: 28, students: 45 },
            { name: 'King Faisal Specialist Hospital', preceptors: 15, students: 23 },
            { name: 'National Guard Hospital', preceptors: 12, students: 18 },
            { name: 'Nahdi Pharmacy Chain', preceptors: 10, students: 12 }
        ]
    },

    // Events & Communication
    events: [
        { id: 'E001', title: 'Annual Alumni Gala 2025', date: '2025-10-15', attendees: 180, type: 'celebration' },
        { id: 'E002', title: 'Career Development Workshop', date: '2025-11-20', attendees: 65, type: 'workshop' },
        { id: 'E003', title: 'Research Symposium', date: '2025-12-10', attendees: 95, type: 'academic' }
    ]
};

// Alumni Analytics Functions
const ALUMNI_ANALYTICS = {
    getEmploymentStats: function() {
        const employed = ALUMNI_DATA.alumni.filter(a => a.status === 'employed').length;
        const postgrad = ALUMNI_DATA.alumni.filter(a => a.status === 'postgraduate').length;
        return {
            employed,
            postgraduate: postgrad,
            other: ALUMNI_DATA.alumni.length - employed - postgrad
        };
    },

    getBoardCertStats: function() {
        const certified = ALUMNI_DATA.alumni.filter(a => a.boardCert).length;
        return {
            certified,
            percentage: ((certified / ALUMNI_DATA.alumni.length) * 100).toFixed(1)
        };
    },

    getGraduationYearStats: function() {
        const byYear = {};
        ALUMNI_DATA.alumni.forEach(a => {
            byYear[a.graduationYear] = (byYear[a.graduationYear] || 0) + 1;
        });
        return byYear;
    },

    getProgramStats: function() {
        const byProgram = {};
        ALUMNI_DATA.alumni.forEach(a => {
            byProgram[a.program] = (byProgram[a.program] || 0) + 1;
        });
        return byProgram;
    },

    getSpecialtyStats: function() {
        const bySpecialty = {};
        ALUMNI_DATA.alumni.forEach(a => {
            bySpecialty[a.specialty] = (bySpecialty[a.specialty] || 0) + 1;
        });
        return bySpecialty;
    },

    getEngagementStats: function() {
        const byEngagement = { active: 0, moderate: 0, low: 0 };
        ALUMNI_DATA.alumni.forEach(a => {
            byEngagement[a.engagement]++;
        });
        return byEngagement;
    }
};

// Make globally available
window.ALUMNI_DATA = ALUMNI_DATA;
window.ALUMNI_ANALYTICS = ALUMNI_ANALYTICS;

console.log('✅ Alumni Data Module Loaded - ' + ALUMNI_DATA.alumni.length + ' alumni records available');
