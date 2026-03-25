/**
 * Alumni Unit Dashboard - Alumni Database
 * Default values zeroed out — real data comes from Supabase (alumni_profiles, alumni_events, alumni_achievements)
 * Editable tabs (Outcomes, Postgraduate, Engagement) use the Edit Tab button to set real numbers
 */

const ALUMNI_DATA = {
    stats: {
        total: 0,
        active: 0,
        employmentRate: 0,
        boardCertified: 0,
        postgraduateTraining: 0,
        alumniMentors: 0,
        activePreceptors: 0,
        trainingSites: 0
    },

    alumni: [],

    employment_outcomes: {
        employment_rate_12m: 0,
        employment_rate_6m: 0,
        total_employed: 0,
        by_sector: {},
        outcomes: []
    },

    postgraduate: [],

    mentorship: {
        total_mentors: 0,
        total_mentees: 0,
        avg_rating: 0,
        active_pairs: 0,
        mentor_specialties: {}
    },

    preceptorship: {
        total_preceptors: 0,
        active_preceptors: 0,
        training_sites: 0,
        utilization_rate: 0,
        current_load: 0,
        total_capacity: 0,
        pending_approval: 0,
        by_type: {}
    },

    engagement: {
        guest_lectures: 0,
        career_days: 0,
        workshops: 0,
        panels: 0,
        conferences: 0,
        total_engagements: 0,
        active_alumni: 0
    },

    events: [],

    achievements: []
};

// Alumni Analytics Functions
const ALUMNI_ANALYTICS = {
    getEmploymentStats: function() {
        const employed = ALUMNI_DATA.alumni.filter(a => a.status === 'employed').length;
        const postgrad = ALUMNI_DATA.alumni.filter(a => a.status === 'postgraduate').length;
        return { employed, postgraduate: postgrad, other: ALUMNI_DATA.alumni.length - employed - postgrad };
    },
    getBoardCertStats: function() {
        const certified = ALUMNI_DATA.alumni.filter(a => a.boardCert).length;
        return { certified, percentage: ALUMNI_DATA.alumni.length ? ((certified / ALUMNI_DATA.alumni.length) * 100).toFixed(1) : 0 };
    },
    getGraduationYearStats: function() {
        const byYear = {};
        ALUMNI_DATA.alumni.forEach(a => { byYear[a.graduationYear] = (byYear[a.graduationYear] || 0) + 1; });
        return byYear;
    },
    getProgramStats: function() {
        const byProgram = {};
        ALUMNI_DATA.alumni.forEach(a => { byProgram[a.program] = (byProgram[a.program] || 0) + 1; });
        return byProgram;
    },
    getSpecialtyStats: function() {
        const bySpecialty = {};
        ALUMNI_DATA.alumni.forEach(a => { bySpecialty[a.specialty] = (bySpecialty[a.specialty] || 0) + 1; });
        return bySpecialty;
    },
    getEngagementStats: function() {
        const byEngagement = { active: 0, moderate: 0, low: 0 };
        ALUMNI_DATA.alumni.forEach(a => { byEngagement[a.engagement]++; });
        return byEngagement;
    }
};

// Make globally available
window.ALUMNI_DATA = ALUMNI_DATA;
window.ALUMNI_ANALYTICS = ALUMNI_ANALYTICS;
window.ALUMNI_DATABASE = ALUMNI_DATA; // Alias for compatibility
