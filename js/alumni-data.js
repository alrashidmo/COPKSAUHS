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

    // Sample Alumni Records
    alumni: [
        // Class of 2024
        { id: 'A001', name: 'Dr. Sarah Al-Rashid', email: 'sarah.rashid@example.com', program: 'PharmD', graduationYear: 2024, status: 'employed', currentEmployer: 'KAMC Riyadh', jobTitle: 'Clinical Pharmacist - Oncology', boardCert: true, specialty: 'Oncology', engagement: 'active', mentorWilling: true, preceptorWilling: false },
        { id: 'A002', name: 'Dr. Ahmed Al-Ghamdi', email: 'ahmed.ghamdi@example.com', program: 'PharmD', graduationYear: 2024, status: 'employed', currentEmployer: 'KFMC', jobTitle: 'Clinical Pharmacist - Cardiology', boardCert: true, specialty: 'Cardiology', engagement: 'active', mentorWilling: false, preceptorWilling: true },
        { id: 'A003', name: 'Dr. Fatima Al-Otaibi', email: 'fatima.otaibi@example.com', program: 'PharmD', graduationYear: 2024, status: 'postgraduate', currentEmployer: 'UT Health', jobTitle: 'Resident', boardCert: false, specialty: 'Internal Medicine', engagement: 'moderate', mentorWilling: false, preceptorWilling: false },
        { id: 'A004', name: 'Dr. Mohammed Al-Shehri', email: 'mohammed.shehri@example.com', program: 'PharmD', graduationYear: 2024, status: 'employed', currentEmployer: 'Pfizer SA', jobTitle: 'Clinical Research Manager', boardCert: false, specialty: 'Research', engagement: 'active', mentorWilling: false, preceptorWilling: false },
        { id: 'A005', name: 'Dr. Hana Al-Zahra', email: 'hana.zahra@example.com', program: 'PharmD', graduationYear: 2024, status: 'employed', currentEmployer: 'Nahdi Pharmacy', jobTitle: 'Community Pharmacy Manager', boardCert: false, specialty: 'Community', engagement: 'low', mentorWilling: false, preceptorWilling: false },
        { id: 'A006', name: 'Dr. Khalid Al-Dosari', email: 'khalid.dosari@example.com', program: 'PharmD', graduationYear: 2023, status: 'employed', currentEmployer: 'NGH', jobTitle: 'Clinical Pharmacist - ICU', boardCert: true, specialty: 'Critical Care', engagement: 'active', mentorWilling: true, preceptorWilling: true },
        { id: 'A007', name: 'Dr. Noura Al-Harbi', email: 'noura.harbi@example.com', program: 'PharmD', graduationYear: 2023, status: 'postgraduate', currentEmployer: 'UC San Diego', jobTitle: 'Fellow', boardCert: true, specialty: 'Pediatrics', engagement: 'active', mentorWilling: true, preceptorWilling: false },
        { id: 'A008', name: 'Dr. Rayan Al-Qahtani', email: 'rayan.qahtani@example.com', program: 'BPharm', graduationYear: 2023, status: 'employed', currentEmployer: 'Ministry of Health', jobTitle: 'Pharmacy Inspector', boardCert: false, specialty: 'Regulatory', engagement: 'moderate', mentorWilling: false, preceptorWilling: true },
        { id: 'A009', name: 'Dr. Lama Al-Saleh', email: 'lama.saleh@example.com', program: 'PharmD', graduationYear: 2023, status: 'employed', currentEmployer: 'King Faisal', jobTitle: 'Clinical Pharmacist - Transplant', boardCert: true, specialty: 'Transplant', engagement: 'active', mentorWilling: true, preceptorWilling: true },
        { id: 'A010', name: 'Dr. Hassan Al-Anazi', email: 'hassan.anazi@example.com', program: 'PharmD', graduationYear: 2023, status: 'employed', currentEmployer: 'KAMC', jobTitle: 'Pharmacy Director', boardCert: true, specialty: 'Administration', engagement: 'active', mentorWilling: true, preceptorWilling: true },
        { id: 'A011', name: 'Dr. Maha Al-Mutairi', email: 'maha.mutairi@example.com', program: 'PharmD', graduationYear: 2022, status: 'postgraduate', currentEmployer: 'University of Michigan', jobTitle: 'PhD Candidate', boardCert: true, specialty: 'Pharmacokinetics', engagement: 'moderate', mentorWilling: false, preceptorWilling: false },
        { id: 'A012', name: 'Dr. Jamal Al-Shammari', email: 'jamal.shammari@example.com', program: 'PharmD', graduationYear: 2022, status: 'employed', currentEmployer: 'AstraZeneca', jobTitle: 'Regional Manager', boardCert: false, specialty: 'Industry', engagement: 'low', mentorWilling: false, preceptorWilling: false },
    ],

    // Employment Outcomes
    employment_outcomes: {
        employment_rate_12m: 97,
        employment_rate_6m: 95,
        total_employed: 236,
        by_sector: {
            'Hospital/Clinical': 107,
            'Community Pharmacy': 47,
            'Pharmaceutical Industry': 36,
            'Government/Public Health': 28,
            'Academic/Research': 18
        },
        outcomes: [
            { outcome: 'Employed (Full-time)', count: 165, percentage: 70 },
            { outcome: 'Postgraduate Training', count: 128, percentage: 20 },
            { outcome: 'Other', count: 38, percentage: 10 }
        ]
    },

    // Postgraduate Data
    postgraduate: [
        { name: 'Dr. Fatima Al-Otaibi', type: 'Residency', cert: 'PGY-1', specialty: 'Internal Medicine', institution: 'UT Health San Antonio', year: 2024, status: 'Enrolled' },
        { name: 'Dr. Noura Al-Harbi', type: 'Fellowship', cert: 'PGY-2', specialty: 'Pediatrics', institution: 'UC San Diego', year: 2023, status: 'Certified' },
        { name: 'Dr. Maha Al-Mutairi', type: 'Board Certification', cert: 'BCPS', specialty: 'Pharmacokinetics', institution: 'University of Michigan', year: 2022, status: 'Certified' },
    ],

    // Mentorship Data
    mentorship: {
        total_mentors: 42,
        total_mentees: 125,
        avg_rating: 4.7,
        active_pairs: 68,
        mentor_specialties: {
            'Oncology': 6,
            'Critical Care': 8,
            'Pediatrics': 5,
            'Administration': 7,
            'Industry': 9,
            'Research': 7
        }
    },

    // Preceptorship Data
    preceptorship: {
        total_preceptors: 89,
        active_preceptors: 82,
        training_sites: 28,
        utilization_rate: 78,
        current_load: 156,
        total_capacity: 200,
        pending_approval: 8,
        by_type: {
            'Hospital': 12,
            'Community Pharmacy': 10,
            'Clinic': 4,
            'Industry': 2
        }
    },

    // Engagement Data
    engagement: {
        guest_lectures: 25,
        career_days: 15,
        workshops: 18,
        panels: 12,
        conferences: 8,
        total_engagements: 78,
        active_alumni: 156
    },

    // Events
    events: [
        { id: 'E001', title: 'Annual Alumni Gala 2025', date: '2025-10-15', location: 'KSAU-HS Campus', type: 'celebration', registered: 180, status: 'Upcoming' },
        { id: 'E002', title: 'Career Development Workshop', date: '2025-11-20', location: 'Virtual', type: 'workshop', registered: 65, status: 'Upcoming' },
        { id: 'E003', title: 'Research Symposium', date: '2025-12-10', location: 'KSAU-HS Campus', type: 'academic', registered: 95, status: 'Upcoming' }
    ],

    // Achievements
    achievements: [
        { name: 'Dr. Sarah Al-Rashid', achievement: 'Best Oncology Pharmacist Award', type: 'Award', year: 2025 },
        { name: 'Dr. Hassan Al-Anazi', achievement: 'Published 3 papers in IJPP', type: 'Publication', year: 2025 },
        { name: 'Dr. Khalid Al-Dosari', achievement: 'Elected Board Member', type: 'Leadership', year: 2024 },
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
window.ALUMNI_DATABASE = ALUMNI_DATA; // Alias for compatibility

console.log('✅ Alumni Data Module Loaded - ' + ALUMNI_DATA.alumni.length + ' alumni records available');
