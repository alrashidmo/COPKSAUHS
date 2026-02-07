/**
 * ADMIN COMMAND CENTER - DATA MODEL
 * King Saud Bin Abdulaziz University for Health Sciences
 * College of Pharmacy
 */

// ============================================
// CORE DATA STRUCTURES
// ============================================

window.AdminDataModel = {
    // ========== REQUESTS TABLE ==========
    requests: [
        // Academic Affairs Examples
        { id: 'COP-REQ-2026-000001', studentId: '441210049', studentName: 'Ahmed Al-Dosari', unit: 'academic', requestType: 'tutoring', status: 'pending', priority: 'high', createdAt: '2026-01-28', assignedTo: 'Dr. Sarah', ownerOffice: 'Academic Affairs', slaDay: 3, slaDueAt: '2026-01-31', lastActionAt: '2026-01-29', nextAction: 'Review documents', notes: 'Needs remedial support in pharmacology' },
        { id: 'COP-REQ-2026-000002', studentId: '441210050', studentName: 'Fatima Al-Shami', unit: 'academic', requestType: 'appeal', status: 'waiting_student', priority: 'medium', createdAt: '2026-01-27', assignedTo: 'Mr. Ahmed', ownerOffice: 'Academic Affairs', slaDay: 5, slaDueAt: '2026-02-01', lastActionAt: '2026-01-28', nextAction: 'Awaiting student submission', notes: 'Grade appeal - awaiting additional documents' },
        { id: 'COP-REQ-2026-000003', studentId: '441210051', studentName: 'Omar Khalil', unit: 'academic', requestType: 'mentorship', status: 'new', priority: 'low', createdAt: '2026-01-31', assignedTo: null, ownerOffice: 'Academic Affairs', slaDay: 3, slaDueAt: '2026-02-03', lastActionAt: '2026-01-31', nextAction: 'Assign mentor', notes: 'First year student seeking academic mentorship' },

        // Clinical Affairs Examples
        { id: 'COP-REQ-2026-000004', studentId: '441210049', studentName: 'Ahmed Al-Dosari', unit: 'clinical', requestType: 'rotation_change', status: 'pending', priority: 'high', createdAt: '2026-01-29', assignedTo: 'Dr. Layla', ownerOffice: 'Clinical Affairs', slaDay: 2, slaDueAt: '2026-01-31', lastActionAt: '2026-01-30', nextAction: 'Confirm site availability', notes: 'Urgent: Preceptor illness - needs immediate rotation change' },
        { id: 'COP-REQ-2026-000005', studentId: '441210052', studentName: 'Nora Saleh', unit: 'clinical', requestType: 'schedule_conflict', status: 'overdue', priority: 'high', createdAt: '2026-01-26', assignedTo: 'Mr. Khalid', ownerOffice: 'Clinical Affairs', slaDay: 3, slaDueAt: '2026-01-29', lastActionAt: '2026-01-26', nextAction: 'Escalate to unit head', notes: 'SLA BREACHED - Schedule conflict resolution needed' },

        // QA Unit Examples
        { id: 'COP-REQ-2026-000006', studentId: '441210053', studentName: 'Yasmin Fareed', unit: 'qa', requestType: 'complaint', status: 'pending', priority: 'high', createdAt: '2026-01-25', assignedTo: 'Dr. Rashed', ownerOffice: 'Quality Assurance', slaDay: 5, slaDueAt: '2026-01-30', lastActionAt: '2026-01-26', nextAction: 'Investigation ongoing', notes: 'CONFIDENTIAL: Grade unfairness complaint' },
        { id: 'COP-REQ-2026-000007', studentId: '441210054', studentName: 'Hassan Malik', unit: 'qa', requestType: 'grievance', status: 'new', priority: 'medium', createdAt: '2026-01-31', assignedTo: null, ownerOffice: 'Quality Assurance', slaDay: 5, slaDueAt: '2026-02-05', lastActionAt: '2026-01-31', nextAction: 'Assign investigator', notes: 'CONFIDENTIAL: Workplace conduct grievance' },

        // Research Unit Examples
        { id: 'COP-REQ-2026-000008', studentId: '441210055', studentName: 'Lina Ahmed', unit: 'research', requestType: 'conference_travel', status: 'pending', priority: 'medium', createdAt: '2026-01-28', assignedTo: 'Dr. Mustafa', ownerOffice: 'Research Unit', slaDay: 10, slaDueAt: '2026-02-07', lastActionAt: '2026-01-30', nextAction: 'Await budget confirmation', notes: 'Travel for ACPE conference presentation' },

        // Alumni Unit Examples
        { id: 'COP-REQ-2026-000009', studentId: 'ALUM-2020-045', studentName: 'Ibrahim Hassan', unit: 'alumni', requestType: 'mentorship', status: 'new', priority: 'low', createdAt: '2026-01-31', assignedTo: null, ownerOffice: 'Alumni Unit', slaDay: 7, slaDueAt: '2026-02-07', lastActionAt: '2026-01-31', nextAction: 'Match with mentor', notes: 'Alumni seeking career guidance' },

        // Community Service Examples
        { id: 'COP-REQ-2026-000010', studentId: '441210056', studentName: 'Maryam Salim', unit: 'community', requestType: 'hours_verification', status: 'waiting_student', priority: 'medium', createdAt: '2026-01-20', assignedTo: 'Ms. Hana', ownerOffice: 'Community Service', slaDay: 14, slaDueAt: '2026-02-03', lastActionAt: '2026-01-28', nextAction: 'Awaiting student documentation', notes: 'Verification of 80 community service hours' }
    ],

    // ========== SLA RULES TABLE ==========
    slaRules: [
        // Academic Affairs
        { unit: 'academic', requestType: 'tutoring', stage: 'initial', workingDays: 3, escalationRule: 'coordinator' },
        { unit: 'academic', requestType: 'appeal', stage: 'initial', workingDays: 5, escalationRule: 'head' },
        { unit: 'academic', requestType: 'mentorship', stage: 'initial', workingDays: 3, escalationRule: 'coordinator' },

        // Clinical Affairs
        { unit: 'clinical', requestType: 'rotation_change', stage: 'initial', workingDays: 2, escalationRule: 'immediate' },
        { unit: 'clinical', requestType: 'schedule_conflict', stage: 'initial', workingDays: 3, escalationRule: 'head' },
        { unit: 'clinical', requestType: 'preceptor_concern', stage: 'initial', workingDays: 2, escalationRule: 'head' },

        // QA Unit
        { unit: 'qa', requestType: 'complaint', stage: 'investigation', workingDays: 5, escalationRule: 'head' },
        { unit: 'qa', requestType: 'grievance', stage: 'investigation', workingDays: 5, escalationRule: 'head' },

        // Research Unit
        { unit: 'research', requestType: 'conference_travel', stage: 'approval', workingDays: 10, escalationRule: 'head' },
        { unit: 'research', requestType: 'publication_support', stage: 'approval', workingDays: 7, escalationRule: 'coordinator' },

        // Alumni Unit
        { unit: 'alumni', requestType: 'mentorship', stage: 'matching', workingDays: 7, escalationRule: 'coordinator' },

        // Community Service
        { unit: 'community', requestType: 'hours_verification', stage: 'verification', workingDays: 14, escalationRule: 'coordinator' }
    ],

    // ========== USERS/ROLES TABLE ==========
    users: [
        { userId: 'STAFF-001', name: 'Dr. Sarah', role: 'unit_coordinator', units: ['academic'], permissions: ['view', 'assign', 'approve', 'close'] },
        { userId: 'STAFF-002', name: 'Mr. Ahmed', role: 'admin_staff', units: ['academic'], permissions: ['view', 'assign', 'reply'] },
        { userId: 'STAFF-003', name: 'Dr. Layla', role: 'unit_coordinator', units: ['clinical'], permissions: ['view', 'assign', 'approve', 'close'] },
        { userId: 'STAFF-004', name: 'Mr. Khalid', role: 'admin_staff', units: ['clinical'], permissions: ['view', 'assign', 'reply'] },
        { userId: 'STAFF-005', name: 'Dr. Rashed', role: 'unit_head', units: ['qa'], permissions: ['view', 'assign', 'approve', 'close', 'escalate'] },
        { userId: 'STAFF-006', name: 'Dr. Mustafa', role: 'unit_coordinator', units: ['research'], permissions: ['view', 'assign', 'approve', 'close'] },
        { userId: 'STAFF-007', name: 'Ms. Fatima', role: 'unit_coordinator', units: ['alumni'], permissions: ['view', 'assign', 'approve', 'close'] },
        { userId: 'STAFF-008', name: 'Ms. Hana', role: 'admin_staff', units: ['community'], permissions: ['view', 'assign', 'reply'] },
        { userId: 'ADMIN-001', name: 'Dr. Hassan Al-Rashid', role: 'super_admin', units: ['all'], permissions: ['view', 'assign', 'approve', 'close', 'escalate', 'manage'] }
    ],

    // ========== UNITS CONFIGURATION ==========
    units: [
        {
            id: 'academic',
            name: 'Academic Affairs',
            icon: '📚',
            color: '#1B5E20',
            requestTypes: ['tutoring', 'appeal', 'mentorship', 'remediation'],
            metrics: ['response_time', 'sla_compliance', 'resolution_rate'],
            head: 'Dr. Sarah'
        },
        {
            id: 'clinical',
            name: 'Clinical Affairs',
            icon: '🏥',
            color: '#C5B358',
            requestTypes: ['rotation_change', 'schedule_conflict', 'preceptor_concern', 'site_issue'],
            metrics: ['site_availability', 'sla_compliance', 'student_satisfaction'],
            head: 'Dr. Layla'
        },
        {
            id: 'qa',
            name: 'Quality Assurance',
            icon: '✓',
            color: '#008080',
            requestTypes: ['complaint', 'grievance', 'appeals_review'],
            metrics: ['resolution_time', 'compliance_rate', 'accreditation'],
            head: 'Dr. Rashed'
        },
        {
            id: 'research',
            name: 'Research Unit',
            icon: '🔬',
            color: '#0D3B12',
            requestTypes: ['conference_travel', 'publication_support', 'grant_application', 'irb_review'],
            metrics: ['approval_rate', 'funding_support', 'publications'],
            head: 'Dr. Mustafa'
        },
        {
            id: 'alumni',
            name: 'Alumni Unit',
            icon: '👥',
            color: '#666666',
            requestTypes: ['mentorship', 'alumni_verification', 'event_participation'],
            metrics: ['engagement', 'participation_rate', 'satisfaction'],
            head: 'Ms. Fatima'
        },
        {
            id: 'community',
            name: 'Community Service',
            icon: '🤝',
            color: '#28a745',
            requestTypes: ['participation_request', 'hours_verification', 'certificate_generation'],
            metrics: ['hours_tracked', 'certificates_issued', 'participation'],
            head: 'Ms. Hana'
        }
    ],

    // ========== WORKFLOW STATES ==========
    requestStatuses: [
        { status: 'new', label: 'New', color: '#2196F3', icon: '📬' },
        { status: 'pending', label: 'Pending Review', color: '#FF9800', icon: '⏳' },
        { status: 'waiting_student', label: 'Waiting for Student', color: '#9C27B0', icon: '👤' },
        { status: 'waiting_site', label: 'Waiting for Site', color: '#9C27B0', icon: '🏢' },
        { status: 'approved', label: 'Approved', color: '#4CAF50', icon: '✅' },
        { status: 'rejected', label: 'Rejected', color: '#F44336', icon: '❌' },
        { status: 'closed', label: 'Closed', color: '#757575', icon: '🔒' },
        { status: 'escalated', label: 'Escalated', color: '#E91E63', icon: '⚠️' }
    ],

    // ========== PRIORITY LEVELS ==========
    priorities: [
        { level: 'low', label: 'Low', color: '#4CAF50', icon: '→' },
        { level: 'medium', label: 'Medium', color: '#FF9800', icon: '→→' },
        { level: 'high', label: 'High', color: '#F44336', icon: '→→→' }
    ],

    // ========== HELPER METHODS ==========
    
    // Get all requests for a user based on role
    getRequestsByRole(user) {
        if (user.role === 'super_admin') {
            return this.requests;
        }
        
        if (user.role === 'unit_head') {
            return this.requests.filter(r => user.units.includes(r.unit));
        }
        
        if (user.role === 'unit_coordinator') {
            return this.requests.filter(r => user.units.includes(r.unit));
        }
        
        // admin_staff - only assigned to them
        return this.requests.filter(r => r.assignedTo === user.name);
    },

    // Calculate days pending
    getDaysPending(createdAt) {
        const created = new Date(createdAt);
        const today = new Date('2026-01-31');
        return Math.floor((today - created) / (1000 * 60 * 60 * 24));
    },

    // Calculate SLA status
    getSLAStatus(slaDueAt) {
        const dueDate = new Date(slaDueAt);
        const today = new Date('2026-01-31');
        const daysRemaining = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
        
        if (daysRemaining < 0) return { status: 'breached', days: Math.abs(daysRemaining), color: '#F44336' };
        if (daysRemaining <= 1) return { status: 'critical', days: daysRemaining, color: '#FF6F00' };
        if (daysRemaining <= 2) return { status: 'warning', days: daysRemaining, color: '#FF9800' };
        return { status: 'ok', days: daysRemaining, color: '#4CAF50' };
    },

    // Get KPI metrics
    getKPIMetrics(user) {
        const relevantRequests = this.getRequestsByRole(user);
        
        return {
            newRequests: relevantRequests.filter(r => r.status === 'new').length,
            pendingRequests: relevantRequests.filter(r => r.status === 'pending' || r.status === 'waiting_student' || r.status === 'waiting_site').length,
            overdueRequests: relevantRequests.filter(r => this.getSLAStatus(r.slaDueAt).status === 'breached').length,
            resolvedThisWeek: relevantRequests.filter(r => r.status === 'closed').length,
            waitingStudent: relevantRequests.filter(r => r.status === 'waiting_student').length
        };
    },

    // Get requests by unit summary
    getUnitSummary() {
        const summary = {};
        this.units.forEach(unit => {
            const unitRequests = this.requests.filter(r => r.unit === unit.id);
            summary[unit.id] = {
                name: unit.name,
                new: unitRequests.filter(r => r.status === 'new').length,
                pending: unitRequests.filter(r => r.status === 'pending').length,
                overdue: unitRequests.filter(r => this.getSLAStatus(r.slaDueAt).status === 'breached').length,
                total: unitRequests.length
            };
        });
        return summary;
    },

    // Get critical requests (My Action Required)
    getCriticalRequests(user) {
        const relevant = this.getRequestsByRole(user);
        return relevant
            .filter(r => r.status !== 'closed' && r.status !== 'approved' && r.status !== 'rejected')
            .filter(r => this.getSLAStatus(r.slaDueAt).status !== 'ok')
            .sort((a, b) => {
                // Overdue first
                const aSLA = this.getSLAStatus(a.slaDueAt);
                const bSLA = this.getSLAStatus(b.slaDueAt);
                if (aSLA.status === 'breached' && bSLA.status !== 'breached') return -1;
                if (bSLA.status === 'breached' && aSLA.status !== 'breached') return 1;
                
                // Then by SLA days remaining
                return aSLA.days - bSLA.days;
            });
    },

    // Get RAG (Red/Amber/Green) status
    getRAGStatus() {
        const overdue = this.requests.filter(r => this.getSLAStatus(r.slaDueAt).status === 'breached');
        const critical = this.requests.filter(r => this.getSLAStatus(r.slaDueAt).status === 'critical');
        
        if (overdue.length > 5) return { status: 'red', message: `${overdue.length} overdue requests require immediate action`, icon: '🔴' };
        if (overdue.length > 0 || critical.length > 3) return { status: 'amber', message: `${overdue.length} overdue, ${critical.length} critical SLA approaching`, icon: '🟠' };
        return { status: 'green', message: 'All SLAs within target', icon: '🟢' };
    }
};
