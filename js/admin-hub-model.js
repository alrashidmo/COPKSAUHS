/**
 * ADMIN HUB DATA MODEL
 * Complete system for request management, SLA tracking, and admin workflows
 * Generated: 2026-01-31
 */

window.AdminHubModel = {
    // ============================================
    // A) CORE DATA STRUCTURES
    // ============================================

    /**
     * SLA RULES by Unit and Request Type
     * Format: {unit}_{type} → { working_days, escalation_rules }
     */
    slaRules: {
        'academic_support': { stage1: 3, stage2: 5, escalation: true },
        'academic_tutoring': { stage1: 2, stage2: 4, escalation: true },
        'academic_appeal': { stage1: 5, stage2: 7, escalation: true },
        'academic_remediation': { stage1: 4, stage2: 6, escalation: true },
        
        'clinical_rotation_change': { stage1: 2, stage2: 3, escalation: true },
        'clinical_site_issue': { stage1: 1, stage2: 2, escalation: true },
        'clinical_preceptor_concern': { stage1: 2, stage2: 3, escalation: true },
        'clinical_schedule': { stage1: 2, stage2: 4, escalation: true },
        
        'qa_complaint': { stage1: 5, stage2: 7, escalation: true },
        'qa_appeal': { stage1: 7, stage2: 10, escalation: true },
        'qa_investigation': { stage1: 10, stage2: 15, escalation: true },
        
        'research_conference': { stage1: 7, stage2: 14, escalation: true },
        'research_abstract': { stage1: 3, stage2: 5, escalation: true },
        'research_travel': { stage1: 5, stage2: 7, escalation: true },
        
        'alumni_mentorship': { stage1: 3, stage2: 5, escalation: false },
        'alumni_verification': { stage1: 2, stage2: 3, escalation: false },
        
        'community_participation': { stage1: 3, stage2: 5, escalation: false },
        'community_hours': { stage1: 2, stage2: 4, escalation: false }
    },

    /**
     * REQUEST STATUSES & WORKFLOW STATES
     */
    statuses: {
        'new': { label: 'New', color: '#FF6B6B', icon: '🆕' },
        'pending_review': { label: 'Pending Review', color: '#FFA500', icon: '⏳' },
        'pending_student': { label: 'Waiting for Student', color: '#FFD700', icon: '📧' },
        'pending_docs': { label: 'Awaiting Documents', color: '#FFC0CB', icon: '📎' },
        'pending_site': { label: 'Awaiting Site Confirmation', color: '#87CEEB', icon: '🔄' },
        'in_progress': { label: 'In Progress', color: '#4CAF50', icon: '🔄' },
        'approved': { label: 'Approved', color: '#228B22', icon: '✅' },
        'rejected': { label: 'Rejected', color: '#8B0000', icon: '❌' },
        'closed': { label: 'Closed', color: '#808080', icon: '🔒' },
        'escalated': { label: 'Escalated', color: '#FF1493', icon: '🚨' }
    },

    /**
     * APPROVED CREDENTIALS STORAGE
     * Stores login credentials for approved students and admins
     */
    approvedCredentials: {
        student: {},
        admin: {}
    },

    /**
     * UNITS & CONFIGURATIONS
     */
    units: [
        {
            id: 'academic',
            name: 'Academic Affairs',
            icon: '📚',
            head: 'Dr. Sarah Al-Mansour',
            headEmail: 'sarah.mansour@ksauhs.edu.sa',
            coordinator: 'Ahmed Al-Otaibi',
            coordinator_email: 'ahmed.otaibi@ksauhs.edu.sa',
            requestTypes: ['support', 'tutoring', 'appeal', 'remediation'],
            avgResponseTime: 2.5,
            slaCompliance: 94,
            pendingRequests: 12
        },
        {
            id: 'clinical',
            name: 'Clinical Affairs',
            icon: '🏥',
            head: 'Dr. Fatima Al-Rashid',
            headEmail: 'fatima.rashid@ksauhs.edu.sa',
            coordinator: 'Noor Al-Dosari',
            coordinator_email: 'noor.dosari@ksauhs.edu.sa',
            requestTypes: ['rotation_change', 'site_issue', 'preceptor_concern', 'schedule'],
            avgResponseTime: 1.8,
            slaCompliance: 97,
            pendingRequests: 18
        },
        {
            id: 'qa',
            name: 'Quality Assurance',
            icon: '✓',
            head: 'Dr. Mohammed Al-Shammari',
            headEmail: 'mohammed.shammari@ksauhs.edu.sa',
            coordinator: 'Layla Al-Zahra',
            coordinator_email: 'layla.zahra@ksauhs.edu.sa',
            requestTypes: ['complaint', 'appeal', 'investigation'],
            avgResponseTime: 4.2,
            slaCompliance: 89,
            pendingRequests: 8
        },
        {
            id: 'research',
            name: 'Research Unit',
            icon: '🔬',
            head: 'Dr. Karim Al-Malik',
            headEmail: 'karim.malik@ksauhs.edu.sa',
            coordinator: 'Rania Al-Jaber',
            coordinator_email: 'rania.jaber@ksauhs.edu.sa',
            requestTypes: ['conference', 'abstract', 'travel'],
            avgResponseTime: 5.5,
            slaCompliance: 92,
            pendingRequests: 6
        },
        {
            id: 'alumni',
            name: 'Alumni Unit',
            icon: '🎓',
            head: 'Dr. Samira Al-Rashid',
            headEmail: 'samira.rashid@ksauhs.edu.sa',
            coordinator: 'Hana Al-Khalid',
            coordinator_email: 'hana.khalid@ksauhs.edu.sa',
            requestTypes: ['mentorship', 'verification'],
            avgResponseTime: 3.0,
            slaCompliance: 95,
            pendingRequests: 4
        },
        {
            id: 'community',
            name: 'Community Service',
            icon: '🤝',
            head: 'Dr. Aisha Al-Johara',
            headEmail: 'aisha.johara@ksauhs.edu.sa',
            coordinator: 'Maha Al-Ayouni',
            coordinator_email: 'maha.ayouni@ksauhs.edu.sa',
            requestTypes: ['participation', 'hours'],
            avgResponseTime: 2.8,
            slaCompliance: 96,
            pendingRequests: 5
        }
    ],

    /**
     * REQUEST TYPE TAXONOMY
     */
    requestTypeMapping: {
        'academic': {
            'support': { label: 'Academic Support', icon: '📖' },
            'tutoring': { label: 'Tutoring/Mentorship', icon: '👨‍🏫' },
            'appeal': { label: 'Grade Appeal', icon: '📝' },
            'remediation': { label: 'Remediation Plan', icon: '🎯' }
        },
        'clinical': {
            'rotation_change': { label: 'Rotation Change Request', icon: '🔄' },
            'site_issue': { label: 'Site Issue/Concern', icon: '⚠️' },
            'preceptor_concern': { label: 'Preceptor Concern', icon: '👨‍⚕️' },
            'schedule': { label: 'Schedule Conflict', icon: '📅' }
        },
        'qa': {
            'complaint': { label: 'Student Complaint', icon: '📢' },
            'appeal': { label: 'Appeal/Grievance', icon: '⚖️' },
            'investigation': { label: 'Investigation', icon: '🔍' }
        },
        'research': {
            'conference': { label: 'Conference Participation', icon: '🗣️' },
            'abstract': { label: 'Abstract/Poster Support', icon: '📄' },
            'travel': { label: 'Travel Authorization', icon: '✈️' }
        },
        'alumni': {
            'mentorship': { label: 'Mentorship Request', icon: '🤝' },
            'verification': { label: 'Alumni Verification', icon: '✓' }
        },
        'community': {
            'participation': { label: 'Participation Request', icon: '📋' },
            'hours': { label: 'Hours Verification', icon: '⏱️' }
        }
    },

    /**
     * ADMIN STAFF & ROLES
     */
    adminUsers: [
        {
            id: 'admin001',
            name: 'Dr. Abdullah Al-Dosari',
            email: 'abdullah.dosari@ksauhs.edu.sa',
            role: 'super_admin',
            units: ['academic', 'clinical', 'qa', 'research', 'alumni', 'community'],
            permissions: ['view_all', 'approve_all', 'export', 'analytics', 'settings'],
            activeRequests: 45
        },
        {
            id: 'coord001',
            name: 'Ahmed Al-Otaibi',
            email: 'ahmed.otaibi@ksauhs.edu.sa',
            role: 'unit_coordinator',
            units: ['academic'],
            permissions: ['view_unit', 'approve_unit', 'assign', 'export'],
            activeRequests: 12
        },
        {
            id: 'coord002',
            name: 'Noor Al-Dosari',
            email: 'noor.dosari@ksauhs.edu.sa',
            role: 'unit_coordinator',
            units: ['clinical'],
            permissions: ['view_unit', 'approve_unit', 'assign', 'export'],
            activeRequests: 18
        },
        {
            id: 'coord003',
            name: 'Layla Al-Zahra',
            email: 'layla.zahra@ksauhs.edu.sa',
            role: 'unit_coordinator',
            units: ['qa'],
            permissions: ['view_unit', 'approve_unit', 'assign', 'export'],
            activeRequests: 8
        },
        {
            id: 'staff001',
            name: 'Mona Al-Jabri',
            email: 'mona.jabri@ksauhs.edu.sa',
            role: 'admin_staff',
            units: ['academic', 'clinical'],
            permissions: ['view_assigned', 'update_assigned'],
            activeRequests: 7
        },
        {
            id: 'staff002',
            name: 'Rashid Al-Qahtani',
            email: 'rashid.qahtani@ksauhs.edu.sa',
            role: 'admin_staff',
            units: ['research', 'alumni'],
            permissions: ['view_assigned', 'update_assigned'],
            activeRequests: 5
        }
    ],

    /**
     * SAMPLE REQUESTS (DEMO DATA)
     * Real requests across all units with various statuses
     */
    requests: [
        // ACADEMIC AFFAIRS
        {
            id: 'COP-REQ-2026-000101',
            studentId: '441210049',
            studentName: 'Fatima Al-Rashid',
            unit: 'academic',
            type: 'support',
            status: 'pending_review',
            priority: 'high',
            createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            slaDueAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
            assignedTo: 'coord001',
            notes: 'Student struggling with pharmacokinetics course',
            attachments: ['course_transcript.pdf'],
            nextAction: 'Schedule tutoring session'
        },
        {
            id: 'COP-REQ-2026-000102',
            studentId: '441210050',
            studentName: 'Mohammed Al-Anzi',
            unit: 'academic',
            type: 'tutoring',
            status: 'pending_student',
            priority: 'medium',
            createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
            slaDueAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            assignedTo: 'staff001',
            notes: 'Tutoring assigned - awaiting student confirmation',
            attachments: [],
            nextAction: 'Wait for student to accept tutoring'
        },
        // CLINICAL AFFAIRS
        {
            id: 'COP-REQ-2026-000201',
            studentId: '441210051',
            studentName: 'Sara Al-Dosari',
            unit: 'clinical',
            type: 'rotation_change',
            status: 'pending_site',
            priority: 'high',
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            slaDueAt: new Date(Date.now() + 0.5 * 24 * 60 * 60 * 1000),
            assignedTo: 'coord002',
            notes: 'Urgent rotation change - awaiting site confirmation',
            attachments: ['site_confirmation.pdf'],
            nextAction: 'Confirm with preceptor'
        },
        {
            id: 'COP-REQ-2026-000202',
            studentId: '441210052',
            studentName: 'Ali Al-Shammari',
            unit: 'clinical',
            type: 'site_issue',
            status: 'escalated',
            priority: 'high',
            createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
            slaDueAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
            assignedTo: 'coord002',
            notes: 'SLA breached - site conditions unacceptable',
            attachments: ['incident_report.pdf', 'photos.zip'],
            nextAction: 'Escalate to Clinical Head'
        },
        // QA UNIT
        {
            id: 'COP-REQ-2026-000301',
            studentId: '441210053',
            studentName: 'Layla Al-Qahtani',
            unit: 'qa',
            type: 'complaint',
            status: 'pending_review',
            priority: 'high',
            createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
            slaDueAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            assignedTo: 'coord003',
            notes: 'Confidential: Complaint regarding faculty conduct',
            attachments: ['complaint_form.pdf'],
            nextAction: 'Schedule investigation'
        },
        // RESEARCH UNIT
        {
            id: 'COP-REQ-2026-000401',
            studentId: '441210054',
            studentName: 'Hana Al-Malik',
            unit: 'research',
            type: 'conference',
            status: 'pending_docs',
            priority: 'medium',
            createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
            slaDueAt: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
            assignedTo: 'staff002',
            notes: 'Conference participation request - missing abstract',
            attachments: ['conference_details.pdf'],
            nextAction: 'Request abstract submission'
        },
        // ALUMNI UNIT
        {
            id: 'COP-REQ-2026-000501',
            studentId: '441210055',
            studentName: 'Omar Al-Rashid',
            unit: 'alumni',
            type: 'verification',
            status: 'approved',
            priority: 'low',
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            slaDueAt: new Date(Date.now() + 0.5 * 24 * 60 * 60 * 1000),
            assignedTo: 'staff002',
            notes: 'Alumni verification approved',
            attachments: ['degree_certificate.pdf'],
            nextAction: 'Send verification letter'
        },
        // COMMUNITY SERVICE
        {
            id: 'COP-REQ-2026-000601',
            studentId: '441210056',
            studentName: 'Nadia Al-Ayouni',
            unit: 'community',
            type: 'participation',
            status: 'in_progress',
            priority: 'medium',
            createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
            slaDueAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            assignedTo: 'coord003',
            notes: 'Community service participation in progress',
            attachments: [],
            nextAction: 'Collect participation certificate'
        }
    ],

    // ============================================
    // B) HELPER METHODS & CALCULATIONS
    // ============================================

    /**
     * Calculate SLA Status
     * Returns: { status: 'ok'|'warning'|'breached', daysRemaining, hoursRemaining }
     */
    getSLAStatus(request) {
        const now = new Date();
        const slaDue = new Date(request.slaDueAt);
        const diffMs = slaDue - now;
        const diffHours = diffMs / (1000 * 60 * 60);
        const diffDays = diffHours / 24;

        if (diffMs < 0) {
            return { status: 'breached', daysRemaining: Math.ceil(diffDays), hoursRemaining: Math.round(diffHours % 24), color: '#FF0000' };
        } else if (diffHours <= 48) {
            return { status: 'warning', daysRemaining: Math.ceil(diffDays), hoursRemaining: Math.round(diffHours % 24), color: '#FFA500' };
        } else {
            return { status: 'ok', daysRemaining: Math.ceil(diffDays), hoursRemaining: Math.round(diffHours % 24), color: '#28A745' };
        }
    },

    /**
     * Calculate days pending
     */
    getDaysPending(createdAt) {
        const days = Math.floor((new Date() - new Date(createdAt)) / (1000 * 60 * 60 * 24));
        return days;
    },

    /**
     * Get KPI metrics
     */
    getKPIMetrics() {
        // ✅ GET REAL STUDENT TICKETS instead of sample data
        const tickets = (typeof StudentPortalManager !== 'undefined' && StudentPortalManager.tickets) 
            ? StudentPortalManager.tickets 
            : this.requests;  // Fallback to sample data
        
        const now = new Date();
        const oneWeekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
        const oneDayAgo = new Date(now - 1 * 24 * 60 * 60 * 1000);

        // Count NEW: tickets submitted in last 24 hours
        const newCount = tickets.filter(t => {
            const createdDate = new Date(t.submissionDate || t.createdAt);
            return createdDate > oneDayAgo;
        }).length;
        
        // Count PENDING: submitted or in-progress status
        const pendingCount = tickets.filter(t => 
            ['submitted', 'in-progress', 'waiting-student', 'pending_review', 'pending_student'].includes(t.status)
        ).length;
        
        // Count OVERDUE: due date has passed and not resolved
        const overdueCount = tickets.filter(t => {
            const dueDate = new Date(t.dueDate);
            const isUnresolved = !['approved', 'closed', 'resolved'].includes(t.status);
            return dueDate < now && isUnresolved;
        }).length;
        
        // Count RESOLVED: approved/closed in last week
        const resolvedCount = tickets.filter(t => {
            const updatedDate = new Date(t.lastUpdate || t.submissionDate);
            return ['approved', 'closed', 'resolved'].includes(t.status) && updatedDate > oneWeekAgo;
        }).length;
        
        // Count WAITING: waiting for student response
        const waitingCount = tickets.filter(t => t.status === 'waiting-student').length;

        return {
            new: newCount,
            pending: pendingCount,
            overdue: overdueCount,
            resolved: resolvedCount,
            waiting: waitingCount
        };
    },

    /**
     * Get RAG status
     * Red: >= 5 breached
     * Amber: 2-4 breached or 5+ warning
     * Green: < 2 breached
     */
    getRAGStatus() {
        const breachedCount = this.requests.filter(r => this.getSLAStatus(r).status === 'breached').length;
        const warningCount = this.requests.filter(r => this.getSLAStatus(r).status === 'warning').length;

        if (breachedCount >= 5) {
            return { status: 'red', color: '#FF0000', message: `${breachedCount} overdue requests require immediate action`, icon: '🔴' };
        } else if (breachedCount >= 2 || warningCount >= 5) {
            return { status: 'amber', color: '#FFA500', message: `${breachedCount} overdue, ${warningCount} at risk`, icon: '🟠' };
        } else {
            return { status: 'green', color: '#28A745', message: 'All SLAs within target', icon: '🟢' };
        }
    },

    /**
     * Get unit summary
     */
    getUnitSummary() {
        // ✅ Get real student tickets
        const tickets = (typeof StudentPortalManager !== 'undefined' && StudentPortalManager.tickets) 
            ? StudentPortalManager.tickets 
            : this.requests;

        // If using student tickets, group by department instead of unit
        if (typeof StudentPortalManager !== 'undefined' && StudentPortalManager.tickets) {
            // Group tickets by department
            const departmentMap = {};
            tickets.forEach(t => {
                const deptId = t.department || 'general';
                if (!departmentMap[deptId]) {
                    departmentMap[deptId] = [];
                }
                departmentMap[deptId].push(t);
            });

            return Object.entries(departmentMap).map(([deptId, deptTickets]) => {
                const newCount = deptTickets.filter(t => {
                    const submittedDate = new Date(t.submissionDate);
                    const oneDayAgo = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
                    return submittedDate > oneDayAgo;
                }).length;
                
                const pendingCount = deptTickets.filter(t => 
                    ['submitted', 'in-progress', 'waiting-student'].includes(t.status)
                ).length;
                
                const overdueCount = deptTickets.filter(t => {
                    const dueDate = new Date(t.dueDate);
                    const isUnresolved = !['approved', 'closed', 'resolved'].includes(t.status);
                    return dueDate < new Date() && isUnresolved;
                }).length;

                // Get department info from StudentPortalManager if available
                let deptInfo = { id: deptId, name: deptId, icon: '📁' };
                if (typeof StudentPortalManager !== 'undefined' && StudentPortalManager.departments) {
                    const found = StudentPortalManager.departments.find(d => d.id === deptId);
                    if (found) {
                        deptInfo = { id: found.id, name: found.name, icon: found.icon };
                    }
                }

                return {
                    id: deptInfo.id,
                    name: deptInfo.name,
                    icon: deptInfo.icon,
                    new: newCount,
                    pending: pendingCount,
                    overdue: overdueCount,
                    total: deptTickets.length,
                    avgResponseTime: 2.4,
                    slaCompliance: 92
                };
            });
        }
        
        // Fallback to original unit-based logic for sample data
        return this.units.map(unit => {
            const unitRequests = this.requests.filter(r => r.unit === unit.id);
            const newCount = unitRequests.filter(r => r.status === 'new').length;
            const pendingCount = unitRequests.filter(r => ['pending_review', 'pending_student', 'pending_docs', 'pending_site', 'in_progress'].includes(r.status)).length;
            const overdueCount = unitRequests.filter(r => this.getSLAStatus(r).status === 'breached').length;

            return {
                id: unit.id,
                name: unit.name,
                icon: unit.icon,
                new: newCount,
                pending: pendingCount,
                overdue: overdueCount,
                total: unitRequests.length,
                avgResponseTime: unit.avgResponseTime,
                slaCompliance: unit.slaCompliance
            };
        });
    },

    /**
     * Get critical requests (sorted by SLA urgency)
     */
    getCriticalRequests(limit = 10) {
        return this.requests
            .filter(r => !['approved', 'closed', 'rejected'].includes(r.status))
            .map(r => ({
                ...r,
                slaInfo: this.getSLAStatus(r),
                daysPending: this.getDaysPending(r.createdAt),
                unitInfo: this.units.find(u => u.id === r.unit)
            }))
            .sort((a, b) => {
                // Breached first
                if (a.slaInfo.status === 'breached' && b.slaInfo.status !== 'breached') return -1;
                if (a.slaInfo.status !== 'breached' && b.slaInfo.status === 'breached') return 1;
                // Then by priority (high first)
                const priorityMap = { high: 0, medium: 1, low: 2 };
                if (priorityMap[a.priority] !== priorityMap[b.priority]) {
                    return priorityMap[a.priority] - priorityMap[b.priority];
                }
                // Then by days remaining
                return a.slaInfo.daysRemaining - b.slaInfo.daysRemaining;
            })
            .slice(0, limit);
    },

    /**
     * Filter requests by role and user
     */
    getRequestsByRole(userRole, userId, userUnits) {
        if (userRole === 'super_admin') {
            return this.requests;
        } else if (userRole === 'unit_coordinator') {
            return this.requests.filter(r => userUnits.includes(r.unit));
        } else if (userRole === 'admin_staff') {
            return this.requests.filter(r => r.assignedTo === userId);
        }
        return [];
    },

    getDashboardStats() {
        // ✅ GET REAL STUDENT TICKETS instead of sample data
        const hasStudentPortalManager = typeof StudentPortalManager !== 'undefined' && StudentPortalManager.tickets;
        const tickets = hasStudentPortalManager ? StudentPortalManager.tickets : this.requests;
        
        console.log(`📊 getDashboardStats - Using: ${hasStudentPortalManager ? '🔗 StudentPortalManager.tickets' : '📋 Sample Data'}`);
        console.log(`   Total Tickets: ${tickets.length}`);
        if (hasStudentPortalManager) {
            console.log(`   First ticket:`, tickets[0] ? { id: tickets[0].ticketId, status: tickets[0].status, studentId: tickets[0].studentId } : 'none');
        }
        
        const totalStudents = new Set(tickets.map(t => t.studentId)).size;
        const totalTickets = tickets.length;  // Total number of all tickets
        // Active: submitted, in-progress, waiting-student (not closed, resolved, or approved)
        const activeTickets = tickets.filter(t => !['approved', 'rejected', 'closed', 'resolved'].includes(t.status)).length;
        let avgResponseTime = 2.4;
        const units = this.getUnitSummary();
        if (units && units.length > 0) {
            const totalAvg = units.reduce((sum, u) => sum + (u.avgResponseTime || 0), 0);
            avgResponseTime = (totalAvg / units.length).toFixed(1);
        }
        const now = new Date();
        const todayDateString = now.toLocaleDateString('en-CA'); // Format: YYYY-MM-DD (timezone-safe)
        
        const resolvedToday = tickets.filter(t => {
            const updatedDate = new Date(t.lastUpdate || t.submissionDate);
            const updatedDateString = updatedDate.toLocaleDateString('en-CA');
            const isResolved = ['approved', 'closed', 'resolved'].includes(t.status);
            const isTodayDate = updatedDateString === todayDateString;
            
            if (isResolved && isTodayDate) {
                console.log(`✅ Resolved Today: ${t.ticketId} - Status: ${t.status}, Updated: ${updatedDateString}`);
            }
            
            return isResolved && isTodayDate;
        }).length;
        
        console.log(`✅ Dashboard Stats - Total: ${totalTickets}, Active: ${activeTickets}, Resolved: ${resolvedToday}`);
        return { totalStudents, totalTickets, activeTickets, avgResponseTime, resolvedToday };
    },

    getRequestTrends() {
        const trends = {};
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            const dayEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            trends[dateStr] = this.requests.filter(r => {
                const createdDate = new Date(r.createdAt);
                return createdDate >= dayStart && createdDate < dayEnd;
            }).length;
        }
        return trends;
    },

    getUnitPerformance() {
        return this.units.map(u => {
            const unitReqs = this.requests.filter(r => r.unit === u.id);
            const breachedCount = unitReqs.filter(r => this.getSLAStatus(r).status === 'breached').length;
            const totalActive = unitReqs.filter(r => !['approved', 'rejected', 'closed'].includes(r.status)).length;
            return {
                name: u.name,
                icon: u.icon,
                totalRequests: unitReqs.length,
                activeRequests: totalActive,
                breachedSLA: breachedCount,
                slaCompliance: u.slaCompliance,
                avgResponseTime: u.avgResponseTime
            };
        });
    },

    getAdminUsers() {
        return this.adminUsers.map(user => ({
            ...user,
            assignedCount: this.requests.filter(r => r.assignedTo === user.id).length,
            completedCount: this.requests.filter(r => r.assignedTo === user.id && ['approved', 'closed'].includes(r.status)).length
        }));
    },

    getSystemAlerts() {
        const alerts = [];
        const breachedCount = this.requests.filter(r => this.getSLAStatus(r).status === 'breached').length;
        if (breachedCount >= 3) {
            alerts.push({ type: 'error', icon: '🔴', title: `${breachedCount} SLA Breaches`, message: 'Critical: Multiple requests have exceeded SLA' });
        }
        const warningCount = this.requests.filter(r => this.getSLAStatus(r).status === 'warning').length;
        if (warningCount >= 5) {
            alerts.push({ type: 'warning', icon: '🟠', title: `${warningCount} At Risk`, message: 'Requests approaching SLA deadline' });
        }
        const newCount = this.requests.filter(r => r.status === 'new').length;
        if (newCount > 0) {
            alerts.push({ type: 'info', icon: '🔵', title: `${newCount} New Requests`, message: 'Awaiting initial review' });
        }
        return alerts;
    },

    /**
     * STUDENT SIGNUP MANAGEMENT
     */
    pendingApprovals: [
        {
            id: 'signup001',
            studentId: '441210060',
            name: 'Mohammed Al-Dosari',
            email: 'm.dosari@ksauhs.edu.sa',
            phone: '+966501234567',
            requestedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            status: 'pending',
            classPreference: 'P2',
            notes: 'New student registration'
        },
        {
            id: 'signup002',
            studentId: '441210061',
            name: 'Fatima Al-Ghamdi',
            email: 'f.ghamdi@ksauhs.edu.sa',
            phone: '+966502345678',
            requestedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
            status: 'pending',
            classPreference: 'P3',
            notes: 'Transfer from another program'
        },
        {
            id: 'signup003',
            studentId: '441210062',
            name: 'Ahmed Al-Shammari',
            email: 'a.shammari@ksauhs.edu.sa',
            phone: '+966503456789',
            requestedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
            status: 'pending',
            classPreference: 'P1',
            notes: 'First year enrollment'
        }
    ],

    approvedStudents: [
        {
            id: 'stud001',
            studentId: '441210001',
            name: 'Hana Al-Malik',
            email: 'hana.malik@ksauhs.edu.sa',
            class: 'P4',
            approvedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
            status: 'active'
        },
        {
            id: 'stud002',
            studentId: '441210002',
            name: 'Omar Al-Mansour',
            email: 'omar.mansour@ksauhs.edu.sa',
            class: 'P2',
            approvedAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
            status: 'active'
        }
    ],

    pendingAdminSignups: [
        {
            id: 'admin-signup001',
            staffId: 'STAFF001',
            name: 'Dr. Noor Al-Qahtani',
            email: 'n.qahtani@ksauhs.edu.sa',
            phone: '+966501112222',
            requestedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
            status: 'pending',
            department: 'Academic',
            role: 'Coordinator'
        }
    ],

    approvedAdminUsers: [
        {
            id: 'admin001',
            staffId: 'ADMIN001',
            name: 'Dr. Khalid Al-Rashid',
            email: 'k.rashid@ksauhs.edu.sa',
            department: 'Clinical',
            role: 'Director',
            approvedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
            status: 'active'
        }
    ],

    getPendingApprovals() {
        // Get pending approvals from both model data and localStorage
        const localStoragePendings = JSON.parse(localStorage.getItem('pendingSignups') || '[]');
        const modelStudentPendings = this.pendingApprovals.filter(s => s.status === 'pending');
        const modelAdminPendings = this.pendingAdminSignups.filter(s => s.status === 'pending');
        
        // Combine and remove duplicates based on ID
        const combined = [...modelStudentPendings, ...modelAdminPendings, ...localStoragePendings];
        const uniqueMap = new Map();
        
        combined.forEach(item => {
            if (!uniqueMap.has(item.id)) {
                uniqueMap.set(item.id, item);
            }
        });
        
        return Array.from(uniqueMap.values()).filter(s => s.status === 'pending');
    },

    getStudentSignups() {
        return this.getPendingApprovals().filter(s => s.accountType !== 'admin');
    },

    getAdminSignups() {
        return this.getPendingApprovals().filter(s => s.accountType === 'admin');
    },

    approveStudent(signupId, classAssigned) {
        // Check in localStorage first
        let localStoragePendings = JSON.parse(localStorage.getItem('pendingSignups') || '[]');
        let signup = localStoragePendings.find(s => s.id === signupId);
        
        // If not in localStorage, check model
        if (!signup) {
            signup = this.pendingApprovals.find(s => s.id === signupId);
        }
        
        if (signup) {
            signup.status = 'approved';
            signup.classAssigned = classAssigned;
            signup.approvedAt = new Date();
            
            // Update localStorage if it exists there
            if (localStoragePendings.find(s => s.id === signupId)) {
                localStorage.setItem('pendingSignups', JSON.stringify(localStoragePendings));
            } else {
                // Update model
                const modelSignup = this.pendingApprovals.find(s => s.id === signupId);
                if (modelSignup) {
                    modelSignup.status = 'approved';
                    modelSignup.classAssigned = classAssigned;
                }
            }
            
            // Add to approved students
            this.approvedStudents.push({
                id: 'stud' + Date.now(),
                studentId: signup.studentId,
                name: signup.name,
                email: signup.email,
                class: classAssigned,
                approvedAt: new Date(),
                status: 'active'
            });
            
            console.log('✅ Student approved:', signup.name, 'Class:', classAssigned);
            return true;
        }
        return false;
    },

    rejectStudent(signupId, reason) {
        // Check in localStorage first
        let localStoragePendings = JSON.parse(localStorage.getItem('pendingSignups') || '[]');
        let signup = localStoragePendings.find(s => s.id === signupId);
        
        // If not in localStorage, check model
        if (!signup) {
            signup = this.pendingApprovals.find(s => s.id === signupId);
        }
        
        if (signup) {
            signup.status = 'rejected';
            signup.rejectReason = reason;
            signup.rejectedAt = new Date();
            
            // Update localStorage if it exists there
            if (localStoragePendings.find(s => s.id === signupId)) {
                localStorage.setItem('pendingSignups', JSON.stringify(localStoragePendings));
            } else {
                // Update model
                const modelSignup = this.pendingApprovals.find(s => s.id === signupId);
                if (modelSignup) {
                    modelSignup.status = 'rejected';
                    modelSignup.rejectReason = reason;
                }
            }
            
            console.log('❌ Student rejected:', signup.name, 'Reason:', reason);
            return true;
        }
        return false;
    },

    getSystemAlerts() {
        const alerts = [];
        const breachedCount = this.requests.filter(r => this.getSLAStatus(r).status === 'breached').length;
        if (breachedCount >= 3) {
            alerts.push({ type: 'error', icon: '🔴', title: `${breachedCount} SLA Breaches`, message: 'Critical: Multiple requests have exceeded SLA' });
        }
        const warningCount = this.requests.filter(r => this.getSLAStatus(r).status === 'warning').length;
        if (warningCount >= 5) {
            alerts.push({ type: 'warning', icon: '🟠', title: `${warningCount} At Risk`, message: 'Requests approaching SLA deadline' });
        }
        const newCount = this.requests.filter(r => r.status === 'new').length;
        if (newCount > 0) {
            alerts.push({ type: 'info', icon: '🔵', title: `${newCount} New Requests`, message: 'Awaiting initial review' });
        }
        return alerts;
    },

    /**
     * PENDING STUDENT ACCESS REQUESTS - Awaiting approval
     */
    pendingStudentRequests: [],

    /**
     * PENDING ADMIN STAFF ACCESS REQUESTS - Awaiting approval
     */
    pendingAdminRequests: [
        {
            id: 'ADMIN-REQ-001',
            name: 'Dr. Noor Al-Qahtani',
            email: 'noor.qahtani@ksauhs.edu.sa',
            phone: '+966551234567',
            staffId: 'STAFF-NEW-001',
            requestedRole: 'unit_coordinator',
            requestedUnits: ['academic'],
            experience: '10 years - Clinical Pharmacist',
            requestDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            status: 'pending',
            requestedBy: 'HR Department'
        },
        {
            id: 'ADMIN-REQ-002',
            name: 'Mr. Khalid Al-Mansour',
            email: 'khalid.mansour@ksauhs.edu.sa',
            phone: '+966551234568',
            staffId: 'STAFF-NEW-002',
            requestedRole: 'admin_staff',
            requestedUnits: ['clinical'],
            experience: '5 years - Admin Coordinator',
            requestDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
            status: 'pending',
            requestedBy: 'Clinical Department'
        }
    ],

    /**
     * CLEAR ALL PENDING REQUESTS - For fresh implementation
     */
    clearAllPendingRequests() {
        console.log('🗑️ Clearing all pending requests...');
        localStorage.removeItem('pendingSignups');
        this.pendingStudentRequests = [];
        this.pendingAdminRequests = [];
        console.log('✅ All pending requests cleared!');
        return true;
    },

    /**
     * Sync pending student requests from localStorage
     * Combines model data with localStorage signups
     */
    syncPendingStudentRequests() {
        const localStoragePendings = JSON.parse(localStorage.getItem('pendingSignups') || '[]');
        
        // Filter to only student signups
        const studentSignups = localStoragePendings.filter(s => s.accountType === 'student' || !s.accountType);
        
        // Combine with existing model data (model data takes precedence)
        const combined = [...this.pendingStudentRequests];
        
        // Add localStorage signups that aren't already in model
        studentSignups.forEach(signup => {
            if (!combined.find(req => req.id === signup.id)) {
                combined.push(signup);
            }
        });
        
        this.pendingStudentRequests = combined;
        console.log('✅ Synced pending student requests from localStorage:', combined.length);
        return combined;
    },

    /**
     * Sync pending admin requests from localStorage
     */
    syncPendingAdminRequests() {
        const localStoragePendings = JSON.parse(localStorage.getItem('pendingSignups') || '[]');
        
        // Filter to only admin signups
        const adminSignups = localStoragePendings.filter(s => s.accountType === 'admin');
        
        // Combine with existing model data
        const combined = [...this.pendingAdminRequests];
        
        // Add localStorage signups that aren't already in model
        adminSignups.forEach(signup => {
            if (!combined.find(req => req.id === signup.id)) {
                combined.push(signup);
            }
        });
        
        this.pendingAdminRequests = combined;
        console.log('✅ Synced pending admin requests from localStorage:', combined.length);
        return combined;
    },

    /**
     * Sync all pending requests from localStorage
     */
    syncAllPendingRequests() {
        this.syncPendingStudentRequests();
        this.syncPendingAdminRequests();
    },

    /**
     * APPROVE STUDENT REQUEST - Move to active users
     */
    approveStudentRequest: function(requestId, assignedClass) {
        console.log('\n📋 ===== APPROVE STUDENT REQUEST START =====');
        console.log('Request ID:', requestId);
        console.log('Pending requests:', this.pendingStudentRequests.map(r => ({ id: r.id, name: r.name, hasPassword: !!r.password })));
        
        const request = this.pendingStudentRequests.find(r => r.id === requestId);
        if (!request) {
            console.error('❌ Request not found!');
            return false;
        }

        console.log('✅ Request found:', {
            id: request.id,
            studentId: request.studentId,
            name: request.name,
            email: request.email,
            passwordValue: request.password,
            passwordExists: !!request.password
        });

        // Create new student record
        const newStudent = {
            id: request.studentId,
            name: request.name,
            email: request.email,
            password: request.password,  // Use password from signup
            cohort: this.getLevelCohort(assignedClass),
            gpa: 3.5,
            risk: 'low',
            attendance: 100,
            approvedDate: new Date(),
            approvedBy: 'Admin',
            accountStatus: 'active'
        };

        console.log('New student object created:', newStudent);

        // Store approved credentials in our model for reference
        if (!this.approvedCredentials) this.approvedCredentials = { student: {}, admin: {} };
        this.approvedCredentials.student[request.studentId] = request.password;
        
        // ALSO save to localStorage for persistence across page reloads
        let approvedCreds = JSON.parse(localStorage.getItem('approvedCredentials') || '{"student":{},"admin":{}}');
        approvedCreds.student[request.studentId] = request.password;
        localStorage.setItem('approvedCredentials', JSON.stringify(approvedCreds));
        console.log('💾 ALSO saved to localStorage:', approvedCreds);
        
        // Verify storage immediately
        const verifyStored = this.approvedCredentials.student[request.studentId];
        console.log('✅ Stored in approvedCredentials:', {
            studentId: request.studentId,
            passwordStored: request.password,
            passwordRetrieved: verifyStored,
            passwordMatch: request.password === verifyStored ? '✅ YES' : '❌ NO',
            allApprovedStudents: Object.keys(this.approvedCredentials.student)
        });
        
        // Add credentials to global AuthSystem reference if accessible
        try {
            if (typeof AuthSystem !== 'undefined' && AuthSystem.accounts) {
                if (!AuthSystem.accounts.student) {
                    AuthSystem.accounts.student = {};
                }
                AuthSystem.accounts.student[request.studentId] = request.password;
                console.log('✅ Added student credentials to AuthSystem:', request.studentId);
            } else {
                console.warn('⚠️ AuthSystem not found, credentials stored in AdminHubModel only');
            }
        } catch(e) {
            console.warn('⚠️ Could not access AuthSystem:', e.message);
        }

        // Add to active students in APPE_DATABASE
        // Do this regardless of StudentManagement, as it's needed for login
        try {
            if (!window.APPE_DATABASE) window.APPE_DATABASE = {};
            if (!window.APPE_DATABASE.students) window.APPE_DATABASE.students = [];
            
            window.APPE_DATABASE.students.push(newStudent);
            console.log('✅ Added student to APPE_DATABASE.students. Total students now:', window.APPE_DATABASE.students.length);
            
            // Also notify StudentManagement if it exists
            if (window.StudentManagement && typeof window.StudentManagement.renderStudentDatabase === 'function') {
                window.StudentManagement.renderStudentDatabase();
                console.log('✅ Notified StudentManagement to refresh view');
            }
        } catch(e) {
            console.error('❌ Error adding to APPE_DATABASE:', e.message);
        }

        // Remove from pending
        this.pendingStudentRequests = this.pendingStudentRequests.filter(r => r.id !== requestId);
        console.log('✅ Removed from pending requests. Remaining pending:', this.pendingStudentRequests.length);
        console.log('===== APPROVE STUDENT REQUEST END =====\n');
        return true;
    },

    /**
     * APPROVE ADMIN REQUEST - Add to admin staff
     */
    approveAdminRequest: function(requestId) {
        console.log('\n📋 ===== APPROVE ADMIN REQUEST START =====');
        console.log('Request ID:', requestId);
        console.log('Pending admin requests:', this.pendingAdminRequests.map(r => ({ id: r.id, name: r.name, hasPassword: !!r.password })));
        
        const request = this.pendingAdminRequests.find(r => r.id === requestId);
        if (!request) {
            console.error('❌ Admin request not found!');
            return false;
        }

        console.log('✅ Admin request found:', {
            id: request.id,
            staffId: request.staffId,
            name: request.name,
            email: request.email,
            password: request.password ? '(exists)' : '(MISSING - THIS IS THE PROBLEM!)'
        });

        // Create new admin record
        const newAdmin = {
            id: request.staffId,
            name: request.name,
            email: request.email,
            password: request.password,  // Use password from signup
            role: request.requestedRole,
            units: request.requestedUnits,
            permissions: this.getPermissionsForRole(request.requestedRole),
            activeRequests: 0,
            approvedDate: new Date(),
            approvedBy: 'Super Admin',
            accountStatus: 'active'
        };

        console.log('New admin object created:', newAdmin);

        // Store approved credentials in our model for reference
        if (!this.approvedCredentials) this.approvedCredentials = { student: {}, admin: {} };
        this.approvedCredentials.admin[request.staffId] = request.password;
        
        // ALSO save to localStorage for persistence across page reloads
        let approvedCreds = JSON.parse(localStorage.getItem('approvedCredentials') || '{"student":{},"admin":{}}');
        approvedCreds.admin[request.staffId] = request.password;
        localStorage.setItem('approvedCredentials', JSON.stringify(approvedCreds));
        console.log('💾 ALSO saved to localStorage:', approvedCreds);
        
        console.log('✅ Stored in approvedCredentials:', {
            staffId: request.staffId,
            password: request.password,
            allApprovedAdmins: Object.keys(this.approvedCredentials.admin)
        });
        
        // Add credentials to global AuthSystem reference if accessible
        try {
            if (typeof AuthSystem !== 'undefined' && AuthSystem.accounts) {
                if (!AuthSystem.accounts.admin) {
                    AuthSystem.accounts.admin = {};
                }
                AuthSystem.accounts.admin[request.staffId] = request.password;
                console.log('✅ Added admin credentials to AuthSystem:', request.staffId);
            } else {
                console.warn('⚠️ AuthSystem not found, credentials stored in AdminHubModel only');
            }
        } catch(e) {
            console.warn('⚠️ Could not access AuthSystem:', e.message);
        }

        // Add to admin users
        try {
            if (!window.AdminUsers) window.AdminUsers = [];
            window.AdminUsers.push(newAdmin);
            console.log('✅ Added admin to window.AdminUsers. Total admins now:', window.AdminUsers.length);
        } catch(e) {
            console.error('❌ Error adding to AdminUsers:', e.message);
        }

        // Remove from pending
        this.pendingAdminRequests = this.pendingAdminRequests.filter(r => r.id !== requestId);
        console.log('✅ Removed from pending admin requests. Remaining pending:', this.pendingAdminRequests.length);
        console.log('===== APPROVE ADMIN REQUEST END =====\n');
        return true;
    },

    /**
     * HELPER: Get permissions based on role
     */
    getPermissionsForRole: function(role) {
        const permissions = {
            'super_admin': ['view_all', 'approve_all', 'export', 'analytics', 'settings'],
            'unit_coordinator': ['view_unit', 'approve_unit', 'assign', 'export'],
            'admin_staff': ['view_assigned', 'update_assigned', 'reply'],
            'unit_head': ['view_unit', 'approve_all_unit', 'escalate', 'settings_unit']
        };
        return permissions[role] || [];
    },

    /**
     * HELPER: Convert level to cohort
     */
    getLevelCohort: function(level) {
        const map = { 'P1': 'IPPE I', 'P2': 'IPPE II', 'P3': 'IPPE III', 'P4': 'APPE' };
        return map[level] || 'IPPE I';
    },

    /**
     * REJECT STUDENT REQUEST
     */
    rejectStudentRequest: function(requestId, reason) {
        this.pendingStudentRequests = this.pendingStudentRequests.filter(r => r.id !== requestId);
        console.log(`❌ Student request ${requestId} rejected: ${reason}`);
        return true;
    },

    /**
     * REJECT ADMIN REQUEST
     */
    rejectAdminRequest: function(requestId, reason) {
        this.pendingAdminRequests = this.pendingAdminRequests.filter(r => r.id !== requestId);
        console.log(`❌ Admin request ${requestId} rejected: ${reason}`);
        return true;
    },

    // ========== EXECUTION & EMAIL SYSTEM ==========

    /**
     * Execution History - Track all actions on requests
     */
    executionHistory: [],
    
    /**
     * Email Queue - Track emails sent and pending follow-ups
     */
    emailQueue: [],

    /**
     * Approve Request - Professional workflow
     */
    approveRequest: function(requestId, approverName, approverEmail, notes = '') {
        const request = this.requests.find(r => r.id === requestId);
        if (!request) return { success: false, error: 'Request not found' };

        // Update request status
        request.status = 'approved';
        request.approvedBy = approverName;
        request.approvedAt = new Date().toISOString();
        request.updatedAt = new Date().toISOString();  // Track when it was resolved
        request.approvalNotes = notes;

        // Add to execution history
        this.executionHistory.push({
            requestId: requestId,
            action: 'APPROVED',
            actor: approverName,
            actorEmail: approverEmail,
            timestamp: new Date().toISOString(),
            notes: notes,
            recipients: {
                student: request.studentEmail,
                department: request.unitInfo ? request.unitInfo.headEmail : 'unit@example.com',
                admin: approverEmail
            }
        });

        console.log(`✅ Request ${requestId} APPROVED by ${approverName}`);
        return { success: true, action: 'APPROVED', request: request };
    },

    /**
     * Reject Request - Professional workflow
     */
    rejectRequest: function(requestId, approverName, approverEmail, reason = '') {
        const request = this.requests.find(r => r.id === requestId);
        if (!request) return { success: false, error: 'Request not found' };

        // Update request status
        request.status = 'rejected';
        request.rejectedBy = approverName;
        request.rejectedAt = new Date().toISOString();
        request.updatedAt = new Date().toISOString();  // Track when it was resolved
        request.rejectionReason = reason;

        // Add to execution history
        this.executionHistory.push({
            requestId: requestId,
            action: 'REJECTED',
            actor: approverName,
            actorEmail: approverEmail,
            timestamp: new Date().toISOString(),
            reason: reason,
            recipients: {
                student: request.studentEmail,
                department: request.unitInfo ? request.unitInfo.headEmail : 'unit@example.com',
                admin: approverEmail
            }
        });

        console.log(`❌ Request ${requestId} REJECTED by ${approverName} - ${reason}`);
        return { success: true, action: 'REJECTED', request: request };
    },

    /**
     * Delegate Request - Route to department head
     */
    delegateRequest: function(requestId, delegatedFrom, delegatedTo, delegatedToEmail, departmentName, note = '') {
        const request = this.requests.find(r => r.id === requestId);
        if (!request) return { success: false, error: 'Request not found' };

        // Update request status
        request.status = 'delegated';
        request.delegatedBy = delegatedFrom;
        request.delegatedTo = delegatedTo;
        request.delegatedToEmail = delegatedToEmail;
        request.delegatedAt = new Date().toISOString();
        request.updatedAt = new Date().toISOString();  // Track when it was updated
        request.delegationNote = note;
        request.department = departmentName;

        // Add to execution history
        this.executionHistory.push({
            requestId: requestId,
            action: 'DELEGATED',
            actor: delegatedFrom,
            actorEmail: 'admin@example.com',
            delegatedTo: delegatedTo,
            delegatedToEmail: delegatedToEmail,
            timestamp: new Date().toISOString(),
            department: departmentName,
            note: note,
            recipients: {
                student: request.studentEmail,
                department: delegatedToEmail,
                admin: 'admin@example.com'
            }
        });

        // Add to follow-up queue (7 working days)
        this.emailQueue.push({
            type: 'FOLLOW_UP_REMINDER',
            requestId: requestId,
            delegatedTo: delegatedTo,
            delegatedToEmail: delegatedToEmail,
            scheduleDate: this.addWorkingDays(new Date(), 7),
            created: new Date().toISOString(),
            notified: false
        });

        console.log(`↪️ Request ${requestId} DELEGATED to ${delegatedTo} (${departmentName})`);
        return { success: true, action: 'DELEGATED', request: request };
    },

    /**
     * Send Email - Multiple recipients with professional template
     */
    sendEmail: function(requestId, action, approverName, recipients = {}) {
        const request = this.requests.find(r => r.id === requestId);
        if (!request) return { success: false, error: 'Request not found' };

        const emailLog = {
            requestId: requestId,
            action: action,
            timestamp: new Date().toISOString(),
            sentTo: [],
            templates: {}
        };

        // STUDENT EMAIL
        if (recipients.student) {
            const studentEmailContent = this.generateStudentEmailTemplate(request, action, approverName);
            emailLog.sentTo.push({
                recipient: recipients.student,
                type: 'STUDENT',
                subject: studentEmailContent.subject,
                status: 'SENT'
            });
            emailLog.templates.student = studentEmailContent;
        }

        // DEPARTMENT EMAIL
        if (recipients.department) {
            const deptEmailContent = this.generateDepartmentEmailTemplate(request, action, approverName);
            emailLog.sentTo.push({
                recipient: recipients.department,
                type: 'DEPARTMENT',
                subject: deptEmailContent.subject,
                status: 'SENT'
            });
            emailLog.templates.department = deptEmailContent;
        }

        // ADMIN EMAIL
        if (recipients.admin) {
            const adminEmailContent = this.generateAdminEmailTemplate(request, action, approverName);
            emailLog.sentTo.push({
                recipient: recipients.admin,
                type: 'ADMIN',
                subject: adminEmailContent.subject,
                status: 'SENT'
            });
            emailLog.templates.admin = adminEmailContent;
        }

        // Log email sending
        this.emailQueue.push(emailLog);
        
        console.log(`📧 Emails sent for request ${requestId} (${action}) to ${emailLog.sentTo.length} recipients`);
        return { success: true, emailLog: emailLog };
    },

    /**
     * Generate Student Email Template
     */
    generateStudentEmailTemplate: function(request, action, approverName) {
        // Safe defaults for missing properties
        const unitName = request?.unitInfo?.name || 'Clinical Department';
        const unitEmail = request?.unitInfo?.headEmail || 'unit@ksau-hs.edu.sa';
        const unitPhone = request?.unitInfo?.phone || 'Available upon request';
        
        const templates = {
            'APPROVED': {
                subject: `✅ Your Request Has Been APPROVED - ${request.id}`,
                body: `
Dear ${request.studentName || 'Student'},

Your request has been successfully APPROVED.

REQUEST DETAILS:
───────────────────────────────
Request ID: ${request.id}
Type: ${request.type || 'General Request'}
Unit: ${unitName}
Status: ✅ APPROVED
Approved by: ${approverName}
Approved on: ${new Date().toLocaleDateString()}

NEXT STEPS:
───────────────────────────────
Your request has been processed and is now active.
The responsible department will contact you with further details.

Expected Timeline: 3-5 working days
Contact: ${unitName} Department
───────────────────────────────

Best regards,
Clinical Affairs Administration
KSAU-HS
`
            },
            'REJECTED': {
                subject: `❌ Your Request Requires Additional Information - ${request.id}`,
                body: `
Dear ${request.studentName || 'Student'},

Your request cannot be processed at this time.

REQUEST DETAILS:
───────────────────────────────
Request ID: ${request.id}
Type: ${request.type || 'General Request'}
Unit: ${unitName}
Status: ❌ CANNOT BE PROCESSED
Reviewed by: ${approverName}
Date: ${new Date().toLocaleDateString()}

REASON FOR REJECTION:
───────────────────────────────
${request.rejectionReason || 'Documentation incomplete'}

WHAT YOU NEED TO DO:
───────────────────────────────
Please submit a new request with the required documentation.
Contact the department below for clarification.

Department Email: ${unitEmail}
Phone: ${unitPhone}

Resubmission Deadline: Within 14 calendar days
───────────────────────────────

Best regards,
Clinical Affairs Administration
KSAU-HS
`
            },
            'DELEGATED': {
                subject: `📋 Your Request Is Being Reviewed - ${request.id}`,
                body: `
Dear ${request.studentName || 'Student'},

Your request has been forwarded to the appropriate department for specialized review.

REQUEST DETAILS:
───────────────────────────────
Request ID: ${request.id}
Type: ${request.type || 'General Request'}
Unit: ${request.delegatedTo || 'Department'}
Status: 📋 UNDER REVIEW
Forwarded on: ${new Date().toLocaleDateString()}

WHAT HAPPENS NEXT:
───────────────────────────────
Your request is now being reviewed by the ${request.delegatedTo || 'department'}.
You can expect a response within 7 working days.

TRACKING:
───────────────────────────────
You can track your request at any time via the Student Portal.
Request ID for reference: ${request.id}

Questions? Contact: ${request.delegatedToEmail || 'unit@ksau-hs.edu.sa'}
───────────────────────────────

Best regards,
Clinical Affairs Administration
KSAU-HS
`
            }
        };

        return templates[action] || { subject: 'Request Update', body: 'Your request has been updated.' };
    },

    /**
     * Generate Department Email Template
     */
    generateDepartmentEmailTemplate: function(request, action, approverName) {
        const templates = {
            'APPROVED': {
                subject: `✅ REQUEST APPROVED - Proceed with Implementation: ${request.id}`,
                body: `
ADMINISTRATIVE NOTIFICATION

A student request has been APPROVED and is ready for departmental action.

REQUEST SUMMARY:
───────────────────────────────
Request ID: ${request.id}
Student: ${request.studentName || 'Student'} (${request.studentId || 'N/A'})
Type: ${request.type || 'General Request'}
Priority: ${request.priority || 'Normal'}
Status: ✅ APPROVED
Approved by: ${approverName}
Date: ${new Date().toLocaleDateString()}

REQUIRED ACTIONS:
───────────────────────────────
1. Acknowledge receipt of this notification
2. Implement the approved request
3. Document any relevant outcomes
4. Update the student within 24 hours

SLA DEADLINE: ${this.addWorkingDays(new Date(), 5).toLocaleDateString()}

For questions or escalations, contact the admin team.

───────────────────────────────
Clinical Affairs Administration
KSAU-HS
`
            },
            'REJECTED': {
                subject: `❌ REQUEST REJECTED - Student Notification Required: ${request.id}`,
                body: `
ADMINISTRATIVE NOTIFICATION

A student request has been REJECTED due to insufficient documentation.

REQUEST DETAILS:
───────────────────────────────
Request ID: ${request.id}
Student: ${request.studentName || 'Student'} (${request.studentId || 'N/A'})
Reason: ${request.rejectionReason || 'Documentation incomplete'}
Reviewed by: ${approverName}

YOUR RESPONSIBILITY:
───────────────────────────────
1. Review the rejection reason below
2. If you disagree, escalate to the admin team
3. Inform the student of the requirements

Student Contact: ${request.studentEmail || 'student@ksau-hs.edu.sa'}

───────────────────────────────
Clinical Affairs Administration
KSAU-HS
`
            },
            'DELEGATED': {
                subject: `🔄 REQUEST DELEGATED TO YOUR DEPARTMENT: ${request.id}`,
                body: `
REQUEST DELEGATION NOTICE

You have been assigned a student request for review and approval.

REQUEST DETAILS:
───────────────────────────────
Request ID: ${request.id}
Student: ${request.studentName} (${request.studentId})
Type: ${request.type}
Request Date: ${new Date(request.createdAt).toLocaleDateString()}
Priority: ${request.priority}

DELEGATION NOTE:
───────────────────────────────
${request.delegationNote || 'Please review and provide approval or rejection.'}

YOUR NEXT STEPS:
───────────────────────────────
1. Review the request details (see portal for full information)
2. Make an approval/rejection decision
3. Document your decision
4. Notify the student within 5 working days

SLA DEADLINE: ${this.addWorkingDays(new Date(), 7).toLocaleDateString()}

If you need clarification, reply to this email or check the request portal.

───────────────────────────────
Clinical Affairs Administration
KSAU-HS
`
            }
        };

        return templates[action] || { subject: 'Request Notification', body: 'A request requires your attention.' };
    },

    /**
     * Generate Admin Email Template (for audit trail)
     */
    generateAdminEmailTemplate: function(request, action, approverName) {
        const templates = {
            'APPROVED': {
                subject: `📊 AUDIT LOG: Request Approved by ${approverName}`,
                body: `[AUDIT TRAIL]

Action: APPROVED
Request ID: ${request.id}
Approver: ${approverName}
Timestamp: ${new Date().toISOString()}
Student: ${request.studentName}

This is an automated audit record for administrative tracking.
`
            },
            'REJECTED': {
                subject: `📊 AUDIT LOG: Request Rejected by ${approverName}`,
                body: `[AUDIT TRAIL]

Action: REJECTED
Request ID: ${request.id}
Reviewer: ${approverName}
Reason: ${request.rejectionReason}
Timestamp: ${new Date().toISOString()}
Student: ${request.studentName}

This is an automated audit record for administrative tracking.
`
            },
            'DELEGATED': {
                subject: `📊 AUDIT LOG: Request Delegated by ${approverName}`,
                body: `[AUDIT TRAIL]

Action: DELEGATED
Request ID: ${request.id}
Delegated by: ${approverName}
Delegated to: ${request.delegatedTo}
Department: ${request.department}
Timestamp: ${new Date().toISOString()}
Student: ${request.studentName}

This is an automated audit record for administrative tracking.
`
            }
        };

        return templates[action] || { subject: 'Audit Log Entry', body: 'Audit trail record.' };
    },

    /**
     * Helper: Add working days (exclude weekends)
     */
    addWorkingDays: function(date, days) {
        const result = new Date(date);
        let count = 0;
        
        while (count < days) {
            result.setDate(result.getDate() + 1);
            if (result.getDay() !== 0 && result.getDay() !== 6) { // 0 = Sunday, 6 = Saturday
                count++;
            }
        }
        return result;
    },

    /**
     * Check Follow-Up Reminders
     * Should be called daily to send reminder emails
     */
    checkFollowUpReminders: function() {
        const now = new Date();
        const remindersToSend = this.emailQueue.filter(email => 
            email.type === 'FOLLOW_UP_REMINDER' &&
            !email.notified &&
            new Date(email.scheduleDate) <= now
        );

        remindersToSend.forEach(reminder => {
            const request = this.requests.find(r => r.id === reminder.requestId);
            if (request) {
                // Send reminder email to delegated person
                console.log(`📧 REMINDER: Sending follow-up for request ${reminder.requestId} to ${reminder.delegatedTo}`);
                reminder.notified = true;
                reminder.sendAt = now.toISOString();
            }
        });

        return remindersToSend.length;
    }
};

console.log('✅ Admin Hub Model Loaded - %d requests initialized', window.AdminHubModel.requests.length);
