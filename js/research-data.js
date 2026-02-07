// Research Unit Database
const RESEARCH_DATABASE = {
    publications: [
        { id: 1, title: 'Pharmacogenomics in Chronic Disease Management', authors: 'Dr. Ahmed Al-Shammari, Dr. Fatima Al-Dosari', type: 'Faculty-led', journal: 'Journal of Clinical Pharmacy', quartile: 'Q1', year: 2025, doi: '10.1234/jcp.2025.001', citations: 24 },
        { id: 2, title: 'Student Perspectives on Pharmacy Practice', authors: 'Sarah Al-Otaibi (Student), Dr. Mohammed Al-Rashid', type: 'Student-led', journal: 'Pharmacy Education Today', quartile: 'Q2', year: 2025, doi: '10.1234/pet.2025.002', citations: 8 },
        { id: 3, title: 'Digital Health Integration in Community Pharmacy', authors: 'Dr. Noor Al-Harbi, Dr. Hana Al-Mazrou, Khalid Al-Kahtani (Student)', type: 'Collaborative', journal: 'Health Technology Review', quartile: 'Q1', year: 2024, doi: '10.1234/htr.2024.003', citations: 42 },
        { id: 4, title: 'Antimicrobial Stewardship Programs in Saudi Hospitals', authors: 'Dr. Ali Al-Johani, Dr. Layla Al-Ghamdi', type: 'Faculty-led', journal: 'International Journal of Antimicrobial Agents', quartile: 'Q1', year: 2024, doi: '10.1234/ijaa.2024.004', citations: 67 },
        { id: 5, title: 'Drug Interaction Analysis in Geriatric Patients', authors: 'Amina Al-Shehri (Student), Dr. Salim Al-Mutairi', type: 'Student-led', journal: 'Geriatric Pharmacy Journal', quartile: 'Q2', year: 2024, doi: '10.1234/gpj.2024.005', citations: 15 },
    ],
    projects: [
        { id: 1, title: 'Impact of Clinical Decision Support on Prescribing Patterns', pi: 'Dr. Ahmed Al-Shammari', students: 3, status: 'Published', stages: ['Proposal', 'IRB submitted', 'IRB approved', 'Data collection', 'Analysis', 'Manuscript submitted', 'Published'], type: 'Faculty-led', startDate: '2023-01', endDate: '2024-12' },
        { id: 2, title: 'Medication Adherence in Chronic Disease Patients', pi: 'Dr. Noor Al-Harbi', students: 2, status: 'Analysis', stages: ['Proposal', 'IRB submitted', 'IRB approved', 'Data collection', 'Analysis'], type: 'Joint', startDate: '2024-03', endDate: '2026-03' },
        { id: 3, title: 'Pharmacy Student Competencies in Specialized Areas', pi: 'Dr. Mohammed Al-Rashid', students: 1, status: 'IRB approved', stages: ['Proposal', 'IRB submitted', 'IRB approved'], type: 'Student', startDate: '2024-09', endDate: '2025-09' },
        { id: 4, title: 'Natural Products in Diabetes Management', pi: 'Dr. Layla Al-Ghamdi', students: 4, status: 'Data collection', stages: ['Proposal', 'IRB submitted', 'IRB approved', 'Data collection'], type: 'Faculty-led', startDate: '2024-06', endDate: '2026-06' },
    ],
    irb: [
        { id: 'IRB-2024-001', title: 'Clinical Decision Support Study', approval: '2024-03-15', expiry: '2025-03-15', status: 'Active', daysToRenewal: 52 },
        { id: 'IRB-2024-002', title: 'Medication Adherence Research', approval: '2024-06-20', expiry: '2026-06-20', status: 'Active', daysToRenewal: 517 },
        { id: 'IRB-2024-003', title: 'Pharmacy Competency Assessment', approval: '2024-09-10', expiry: '2025-09-10', status: 'Active', daysToRenewal: 263 },
        { id: 'IRB-2023-015', title: 'Previous Study (Closed)', approval: '2023-05-01', expiry: '2024-05-01', status: 'Expired', daysToRenewal: -265 },
    ],
    students: [
        { id: 1, name: 'Sarah Al-Otaibi', publications: 2, presentations: 3, projects: 2, status: 'Active' },
        { id: 2, name: 'Khalid Al-Kahtani', publications: 1, presentations: 2, projects: 2, status: 'Active' },
        { id: 3, name: 'Amina Al-Shehri', publications: 1, presentations: 1, projects: 1, status: 'Active' },
        { id: 4, name: 'Omar Al-Dossari', publications: 0, presentations: 2, projects: 3, status: 'Active' },
        { id: 5, name: 'Layla Al-Dakheel', publications: 1, presentations: 1, projects: 1, status: 'Graduated' },
    ],
    faculty: [
        { id: 1, name: 'Dr. Ahmed Al-Shammari', publications: 34, interests: 'Pharmacogenomics, Clinical Pharmacy', students: 5, projects: 3, orcid: '0000-0001-2345-6789' },
        { id: 2, name: 'Dr. Noor Al-Harbi', publications: 28, interests: 'Community Pharmacy, Patient Education', students: 4, projects: 2, orcid: '0000-0002-3456-7890' },
        { id: 3, name: 'Dr. Mohammed Al-Rashid', publications: 22, interests: 'Pharmacy Education, Practice Development', students: 3, projects: 2, orcid: '0000-0003-4567-8901' },
        { id: 4, name: 'Dr. Layla Al-Ghamdi', publications: 31, interests: 'Natural Products, Medicinal Chemistry', students: 6, projects: 3, orcid: '0000-0004-5678-9012' },
        { id: 5, name: 'Dr. Ali Al-Johani', publications: 26, interests: 'Antimicrobial Stewardship, Hospital Pharmacy', students: 2, projects: 2, orcid: '0000-0005-6789-0123' },
    ],
    collaborations: [
        { id: 1, type: 'Internal', partner: 'College of Medicine', projects: 2, status: 'Active' },
        { id: 2, type: 'External', partner: 'King Saud University - Faculty of Science', projects: 1, status: 'Active' },
        { id: 3, type: 'Industry', partner: 'PharmaCorp Saudi', projects: 1, status: 'Pending' },
        { id: 4, type: 'Hospital', partner: 'King Faisal Specialist Hospital', projects: 3, status: 'Active' },
        { id: 5, type: 'External', partner: 'American University of Beirut', projects: 1, status: 'Active' },
    ],
    recognition: [
        { id: 1, type: 'Award', title: 'Best Research Publication 2024', recipient: 'Dr. Ali Al-Johani', date: '2024-11-15', details: 'For Antimicrobial Stewardship Study' },
        { id: 2, type: 'Citation', title: 'Highly Cited Paper', recipient: 'Dr. Ahmed Al-Shammari', date: '2024-10-20', details: '67 citations - Digital Health Integration' },
        { id: 3, type: 'Presentation', title: 'Invited Talk - International Conference', recipient: 'Dr. Noor Al-Harbi', date: '2024-09-05', details: 'Patient Education in Digital Health' },
        { id: 4, type: 'Award', title: 'Student Research Excellence', recipient: 'Sarah Al-Otaibi', date: '2024-06-30', details: 'Outstanding Student Publication' },
    ],
    analytics: {
        publicationsByYear: [
            { year: 2021, publications: 12, q1: 4, q2: 5, q3: 2, q4: 1 },
            { year: 2022, publications: 18, q1: 8, q2: 6, q3: 3, q4: 1 },
            { year: 2023, publications: 24, q1: 12, q2: 8, q3: 3, q4: 1 },
            { year: 2024, publications: 28, q1: 14, q2: 9, q3: 4, q4: 1 },
            { year: 2025, publications: 12, q1: 8, q2: 3, q3: 1, q4: 0 },
        ],
        facultyVsStudent: [
            { year: 2023, faculty: 22, student: 2 },
            { year: 2024, faculty: 24, student: 4 },
            { year: 2025, faculty: 10, student: 2 },
        ],
    },
    documents: [
        { id: 1, name: 'Research Proposal Template', type: 'Template', updated: '2024-12-01' },
        { id: 2, name: 'IRB Application Form', type: 'Form', updated: '2024-11-15' },
        { id: 3, name: 'Informed Consent Template', type: 'Form', updated: '2024-10-20' },
        { id: 4, name: 'PRISMA Reporting Guidelines', type: 'Guideline', updated: '2024-09-10' },
        { id: 5, name: 'CONSORT Checklist', type: 'Guideline', updated: '2024-08-30' },
    ],
    stats: {
        totalPublications: 115,
        currentYearPublications: 12,
        activeProjects: 8,
        activeIRBs: 3,
        facultyInvolved: 12,
        studentsInvolved: 24,
        studentInvolvementRate: 85,
        studentPresentations: 28,
        studentPublications: 5,
    }
};
