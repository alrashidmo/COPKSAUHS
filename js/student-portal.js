// ============================================================
// STUDENT PORTAL - TICKET TRACKING & REQUEST SYSTEM
// ============================================================

// User role tracking
let currentUserRole = 'student'; // 'student' or 'admin'

// Check if StudentPortalAPI is available, if not create a fallback
if (typeof StudentPortalAPI === 'undefined') {
    window.StudentPortalAPI = {
        async getStudentTickets(studentId) {
            // Fallback: return empty array - will use static data instead
            return [];
        },
        async createTicket(ticketData) {
            // Fallback: mock response
            return {
                ticketId: 'COP-TICKET-2026-' + Math.floor(Math.random() * 10000).toString().padStart(6, '0'),
                dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
            };
        }
    };
}

// Helper function to safely serialize ticket data for localStorage (handles Date objects)
function serializeTicket(ticket) {
    const serialized = { ...ticket };
    // Convert all Date objects to ISO strings
    if (serialized.submissionDate instanceof Date) serialized.submissionDate = serialized.submissionDate.toISOString();
    if (serialized.lastUpdate instanceof Date) serialized.lastUpdate = serialized.lastUpdate.toISOString();
    if (serialized.dueDate instanceof Date) serialized.dueDate = serialized.dueDate.toISOString();
    return serialized;
}

// Helper function to deserialize ticket data from localStorage
function deserializeTicket(ticket) {
    const deserialized = { ...ticket };
    if (typeof deserialized.submissionDate === 'string') deserialized.submissionDate = new Date(deserialized.submissionDate);
    if (typeof deserialized.lastUpdate === 'string') deserialized.lastUpdate = new Date(deserialized.lastUpdate);
    if (typeof deserialized.dueDate === 'string') deserialized.dueDate = new Date(deserialized.dueDate);
    return deserialized;
}

// Student Portal Data & State Management
const StudentPortalManager = {
    // Load locally submitted tickets on startup
    locallySubmittedTickets: JSON.parse(localStorage.getItem('studentSubmittedTickets') || '[]'),
    currentStudent: {
        studentId: '441210049',
        firstName: 'Bishier',
        lastName: 'Alfadhl',
        email: 'alfadhl10049@ksau-hs.edu.sa',
        phone: '+966501234567',
        program: 'PharmD',
        cohort: 'IPPE II',
        year: '2025-2026',
        gpa: 3.9,
        academicStanding: 'Good'
    },

    // Departments for auto-routing
    departments: [
        { id: 'academic', name: 'Academic Affairs', email: 'academic@ksau-hs.edu.sa', color: '#1B5E20', icon: '📚' },
        { id: 'clinical', name: 'Clinical Affairs', email: 'clinical@ksau-hs.edu.sa', color: '#008080', icon: '🏥' },
        { id: 'it', name: 'IT Support', email: 'itsupport@ksau-hs.edu.sa', color: '#1565C0', icon: '💻' },
        { id: 'student-services', name: 'Student Services', email: 'studentservices@ksau-hs.edu.sa', color: '#6A1B9A', icon: '👥' },
        { id: 'research', name: 'Research Unit', email: 'research@ksau-hs.edu.sa', color: '#D32F2F', icon: '🔬' }
    ],

    // Request Types with auto-routing
    requestTypes: [
        {
            id: 'letter',
            name: 'Letter Requests',
            icon: '📄',
            description: 'Training, Enrollment, or Official Letters',
            department: 'academic',
            icon_detail: '📋'
        },
        {
            id: 'clinical',
            name: 'Clinical/Rotation Issue',
            icon: '🏥',
            description: 'Rotation change, site issue, preceptor concern',
            department: 'clinical',
            icon_detail: '⚠️'
        },
        {
            id: 'academic-support',
            name: 'Academic Support',
            icon: '📚',
            description: 'Tutoring, mentorship, remediation',
            department: 'academic',
            icon_detail: '🎓'
        },
        {
            id: 'it-support',
            name: 'IT Support',
            icon: '💻',
            description: 'Portal access, technical issues',
            department: 'it',
            icon_detail: '🔧'
        },
        {
            id: 'event-participation',
            name: 'Event/Conference Request',
            icon: '🎉',
            description: 'Conferences, events, competitions',
            department: 'student-services',
            icon_detail: '🎊'
        },
        {
            id: 'general-inquiry',
            name: 'General Inquiry',
            icon: '❓',
            description: 'Other questions or requests',
            department: 'student-services',
            icon_detail: '💬'
        }
    ],

    // Production Tickets - starts empty, will be populated from Supabase or student submissions
    tickets: [],

    // Format date helper
    formatDate: (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    },

    // Format time helper
    formatTime: (date) => {
        const options = { hour: '2-digit', minute: '2-digit' };
        return new Date(date).toLocaleTimeString('en-US', options);
    },

    // Get department by ID
    getDepartmentById: (deptId) => {
        return StudentPortalManager.departments.find(d => d.id === deptId);
    },

    // Get request type by ID
    getRequestTypeById: (typeId) => {
        return StudentPortalManager.requestTypes.find(t => t.id === typeId);
    },

    // Generate new ticket ID
    generateTicketId: () => {
        const timestamp = new Date();
        const year = timestamp.getFullYear();
        const random = Math.floor(Math.random() * 10000).toString().padStart(6, '0');
        return `COP-TICKET-${year}-${random}`;
    },

    // 🏥 CLINICAL AFFAIRS TRACKING
    clinicalTracking: {
        submitted: 0,      // Total clinical/rotation issues submitted
        approved: 0,       // Admin approved
        rejected: 0,       // Admin rejected
        pending: 0,        // Awaiting admin decision
        inProgress: 0,     // Being processed
        
        // Update stats based on tickets
        updateStats: function() {
            const clinicalTickets = StudentPortalManager.tickets.filter(t => t.requestType === 'clinical');
            
            this.submitted = clinicalTickets.length;
            this.approved = clinicalTickets.filter(t => t.status === 'approved').length;
            this.rejected = clinicalTickets.filter(t => t.status === 'rejected').length;
            this.inProgress = clinicalTickets.filter(t => ['in-progress'].includes(t.status)).length;
            this.pending = clinicalTickets.filter(t => ['submitted'].includes(t.status)).length;
            
            console.log(`📊 Clinical Stats Updated:`, this);
            return this;
        }
    },

    // 🎉 COMMUNITY SERVICES TRACKING (Events/Conferences)
    communityServicesTracking: {
        submitted: 0,      // Total event/conference requests submitted
        approved: 0,       // Admin approved
        rejected: 0,       // Admin rejected
        pending: 0,        // Awaiting admin decision
        inProgress: 0,     // Being processed
        
        // Update stats based on tickets
        updateStats: function() {
            const communityTickets = StudentPortalManager.tickets.filter(t => t.requestType === 'event-participation');
            
            this.submitted = communityTickets.length;
            this.approved = communityTickets.filter(t => t.status === 'approved').length;
            this.rejected = communityTickets.filter(t => t.status === 'rejected').length;
            this.inProgress = communityTickets.filter(t => ['in-progress'].includes(t.status)).length;
            this.pending = communityTickets.filter(t => ['submitted'].includes(t.status)).length;
            
            console.log(`🎉 Community Services Stats Updated:`, this);
            return this;
        }
    }
};

// Initialize stats
StudentPortalManager.clinicalTracking.updateStats();

// ============================================================
// RENDER HOME PAGE - TICKET OVERVIEW
// ============================================================

function renderStudentPortalHome() {
    const root = document.getElementById('app-root');
    const { formatDate, formatTime } = StudentPortalManager;
    
    // 🔄 Sync currentStudent from AuthSystem to ensure consistency
    if (typeof AuthSystem !== 'undefined' && AuthSystem.currentUser && AuthSystem.currentUserRole === 'student') {
        StudentPortalManager.currentStudent.studentId = AuthSystem.currentUser;
        if (AuthSystem.currentUserName) {
            const nameParts = AuthSystem.currentUserName.split(' ');
            StudentPortalManager.currentStudent.firstName = nameParts[0];
            StudentPortalManager.currentStudent.lastName = nameParts.slice(1).join(' ');
        }
    }
    
    // Get student data from AuthSystem if available, otherwise use currentStudent
    let student;
    if (typeof AuthSystem !== 'undefined' && AuthSystem.currentUserRole === 'student') {
        // Create student object from logged-in user data
        student = {
            firstName: (AuthSystem.currentUserName || AuthSystem.currentUser).split(' ')[0],
            name: AuthSystem.currentUserName || AuthSystem.currentUser,
            studentId: AuthSystem.currentUser,
            program: 'PharmD Program',
            cohort: 'Cohort 2023',
            year: 'Year 4'
        };
    } else {
        student = StudentPortalManager.currentStudent;
    }

    // Count tickets by status - ONLY current student's tickets (exclude samples and submitted tickets)
    const currentStudentTickets = StudentPortalManager.tickets.filter(t => t.studentId === student.studentId && !t.isSample && t.status !== 'submitted');
    const totalTickets = currentStudentTickets.length;
    const activeTickets = currentStudentTickets.filter(t => ['in-progress'].includes(t.status)).length;
    const pendingResponse = currentStudentTickets.filter(t => t.status === 'waiting-student').length;
    const resolvedTickets = currentStudentTickets.filter(t => ['approved', 'closed', 'resolved'].includes(t.status)).length;

    let html = `
    <div class="student-portal-home">
        
        <!-- WELCOME BANNER -->
        <section class="home-section" style="background: linear-gradient(135deg, #1B5E20 0%, #0D3B12 100%); color: white; margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h2 style="margin: 0 0 8px 0;">Welcome, ${student.firstName}! 👋</h2>
                    <p style="margin: 0; opacity: 0.9;">Student ID: ${student.studentId} • ${student.program}</p>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 2.5rem; opacity: 0.3;">📧</div>
                </div>
            </div>
        </section>

        <!-- TICKET STATS -->
        <section class="ticket-stats">
            <div class="stat-card">
                <div class="stat-number">${totalTickets}</div>
                <div class="stat-label">Total Tickets</div>
            </div>
            <div class="stat-card active">
                <div class="stat-number">${activeTickets}</div>
                <div class="stat-label">Active</div>
            </div>
            <div class="stat-card pending">
                <div class="stat-number">${pendingResponse}</div>
                <div class="stat-label">Awaiting Your Response</div>
            </div>
            <div class="stat-card resolved">
                <div class="stat-number">${resolvedTickets}</div>
                <div class="stat-label">Resolved</div>
            </div>
        </section>

        <!-- QUICK ACTION BUTTONS -->
        <section class="home-section">
            <div class="section-header">
                <h3>Need Help?</h3>
            </div>
            <div class="quick-action-buttons">
                <button class="action-btn primary" onclick="StudentPortal.showSubmitForm()">
                    <span class="btn-icon">➕</span>
                    <span class="btn-text">Submit New Request</span>
                </button>
                <button class="action-btn secondary" onclick="StudentPortal.showAllTickets()">
                    <span class="btn-icon">📋</span>
                    <span class="btn-text">View All Tickets</span>
                </button>
                <button class="action-btn secondary" onclick="StudentPortal.showKnowledgeBase()">
                    <span class="btn-icon">❓</span>
                    <span class="btn-text">FAQ & Help</span>
                </button>
            </div>
        </section>

        <!-- ACTIVE TICKETS PREVIEW -->
        <section class="home-section">
            <div class="section-header">
                <h3>Active Tickets</h3>
                <a href="#" onclick="StudentPortal.showAllTickets(); return false;" class="view-all">View All →</a>
            </div>
    `;

    // Show recent active tickets - ONLY for current student, ONLY SUBMITTED tickets
    const activeTickets_list = StudentPortalManager.tickets
        .filter(t => t.studentId === student.studentId) // Only this user's tickets
        .filter(t => t.status === 'submitted') // Only tickets waiting for action
        .slice(0, 3);
    
    if (activeTickets_list.length > 0) {
        activeTickets_list.forEach(ticket => {
            const requestType = StudentPortalManager.getRequestTypeById(ticket.requestType);
            const dept = StudentPortalManager.getDepartmentById(ticket.department);
            
            html += `
            <div class="ticket-preview-card" onclick="StudentPortal.openTicket('${ticket.ticketId}')">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <span style="font-size: 1.5rem;">${requestType.icon}</span>
                        <div>
                            <h4 style="margin: 0; color: var(--text-dark);">${ticket.title}</h4>
                            <small style="color: var(--text-muted);">${ticket.ticketId}</small>
                        </div>
                    </div>
                    <span class="ticket-status-badge ${ticket.status}">${ticket.status.replace('-', ' ')}</span>
                </div>
                <div style="display: flex; gap: 20px; font-size: 0.9rem; margin: 10px 0; padding-top: 10px; border-top: 1px solid var(--border-color);">
                    <span>🕐 ${formatDate(ticket.lastUpdate)}</span>
                    <span>📌 ${dept.name}</span>
                    <span>⏱️ SLA: ${ticket.sla}</span>
                </div>
                <div style="color: var(--primary-green); font-weight: 600; margin-top: 8px; font-size: 0.9rem;">
                    Click to view conversation →
                </div>
            </div>
            `;
        });
    } else {
        html += `
        <div style="padding: 40px; text-align: center; background: var(--light-green); border-radius: 8px;">
            <div style="font-size: 2rem; margin-bottom: 10px;">✨</div>
            <p style="margin: 0; color: var(--text-muted);">No active tickets. All caught up!</p>
        </div>
        `;
    }

    html += `
        </section>

        <!-- RECENT ACTIVITY / MESSAGES -->
        <section class="home-section">
            <div class="section-header">
                <h3>Recent Messages</h3>
            </div>
    `;

    // Get recent messages from latest ticket - ONLY current student's tickets (hide submitted)
    const studentTickets = StudentPortalManager.tickets.filter(t => t.studentId === student.studentId && !t.isSample && t.status !== 'submitted');
    if (studentTickets.length > 0) {
        const latestTicket = studentTickets[0];
        const recentMessages = latestTicket.messages.slice(-2);
        
        recentMessages.forEach(msg => {
            const isStudent = msg.sender === 'student';
            html += `
            <div style="padding: 12px; margin-bottom: 12px; background: ${isStudent ? 'var(--light-green)' : '#F5F5F5'}; border-radius: 8px; border-left: 3px solid ${isStudent ? 'var(--primary-green)' : '#999'};">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <strong style="font-size: 0.95rem;">${msg.senderName}</strong>
                    <small style="color: var(--text-muted);">${formatTime(msg.timestamp)}</small>
                </div>
                <p style="margin: 0; color: var(--text-dark); line-height: 1.4;">${msg.message.substring(0, 100)}...</p>
            </div>
            `;
        });
    }

    html += `
        </section>

    </div>
    `;

    root.innerHTML = html;
}

// ============================================================
// RENDER SUBMIT NEW TICKET FORM
// ============================================================

function renderSubmitRequestForm() {
    const root = document.getElementById('app-root');

    let html = `
    <div class="student-portal-home">
        <div class="section-header" style="margin-bottom: 30px;">
            <h3>Submit New Request</h3>
            <button class="btn btn-outline" onclick="StudentPortal.renderHome()">← Back</button>
        </div>

        <!-- REQUEST TYPE SELECTION -->
        <section class="home-section">
            <h4 style="margin-bottom: 20px; color: var(--primary-green);">Select Request Type</h4>
            <div class="request-type-grid">
    `;

    StudentPortalManager.requestTypes.forEach(type => {
        html += `
        <div class="request-type-card" onclick="StudentPortal.showRequestForm('${type.id}')">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">${type.icon}</div>
            <h5 style="margin: 0 0 5px 0; color: var(--text-dark);">${type.name}</h5>
            <p style="margin: 0; font-size: 0.9rem; color: var(--text-muted);">${type.description}</p>
            <div style="margin-top: 10px; font-size: 0.85rem; color: var(--primary-green); font-weight: 500;">
                Select →
            </div>
        </div>
        `;
    });

    html += `
            </div>
        </section>
    </div>
    `;

    root.innerHTML = html;
}

// ============================================================
// RENDER REQUEST FORM (DETAILED)
// ============================================================

function renderRequestForm(requestTypeId) {
    const root = document.getElementById('app-root');
    const requestType = StudentPortalManager.getRequestTypeById(requestTypeId);
    const dept = StudentPortalManager.getDepartmentById(requestType.department);
    const student = StudentPortalManager.currentStudent;

    // 🎉 SPECIAL FORM FOR EVENT/CONFERENCE REQUESTS
    if (requestTypeId === 'event-participation') {
        let html = `
        <div class="student-portal-home">
            <div class="section-header" style="margin-bottom: 30px;">
                <h3>🎉 Event/Conference Request</h3>
                <button class="btn btn-outline" onclick="StudentPortal.showSubmitForm()">← Back</button>
            </div>

            <section class="home-section">
                <div style="background: ${dept.color}15; border-left: 4px solid ${dept.color}; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                    <strong>${dept.icon} Will be routed to: ${dept.name}</strong>
                    <p style="margin: 8px 0 0 0; font-size: 0.9rem; color: #666;">Expected approval timeline: 2-3 working days</p>
                </div>

                <form id="ticketForm" onsubmit="StudentPortal.submitEventRequest(event)">
                    <!-- Event Basic Information -->
                    <fieldset style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <legend style="font-weight: 700; color: #1B5E20; padding: 0 10px;">📋 Event Information</legend>
                        
                        <div class="form-group">
                            <label>Event Name *</label>
                            <input type="text" name="eventName" required placeholder="e.g., Saudi Pharmaceutical Society Annual Conference" maxlength="200">
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Event Type *</label>
                                <select name="eventType" required>
                                    <option value="">Select event type...</option>
                                    <option value="conference">Conference/Symposium</option>
                                    <option value="workshop">Workshop/Seminar</option>
                                    <option value="competition">Competition</option>
                                    <option value="community-event">Community Service Event</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Event Level *</label>
                                <select name="eventLevel" required>
                                    <option value="">Select level...</option>
                                    <option value="local">Local (City/Region)</option>
                                    <option value="national">National (Saudi Arabia)</option>
                                    <option value="regional">Regional (GCC)</option>
                                    <option value="international">International</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Event Date *</label>
                                <input type="date" name="eventDate" required>
                            </div>

                            <div class="form-group">
                                <label>Duration (Days) *</label>
                                <input type="number" name="eventDuration" required min="1" placeholder="e.g., 3">
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Event Location / Venue *</label>
                            <input type="text" name="eventLocation" required placeholder="City, Country (if international)">
                        </div>

                        <div class="form-group">
                            <label>Organizer/Host Institution *</label>
                            <input type="text" name="eventOrganizer" required placeholder="e.g., Saudi Pharmaceutical Society, WHO, etc.">
                        </div>
                    </fieldset>

                    <!-- Student Role & Participation -->
                    <fieldset style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <legend style="font-weight: 700; color: #1B5E20; padding: 0 10px;">👤 Your Role & Participation</legend>
                        
                        <div class="form-group">
                            <label>Your Role in Event *</label>
                            <select name="studentRole" required>
                                <option value="">Select your role...</option>
                                <option value="attendee">Attendee</option>
                                <option value="presenter">Presenter (Poster)</option>
                                <option value="presenter-oral">Presenter (Oral)</option>
                                <option value="volunteer">Volunteer</option>
                                <option value="competitor">Competitor</option>
                                <option value="organizer">Organizer/Committee Member</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Professional Benefits & Learning Outcomes *</label>
                            <textarea name="learningOutcomes" required rows="4" placeholder="Explain what you hope to gain from this event and how it aligns with your professional development..." maxlength="1000"></textarea>
                        </div>

                        <div class="form-group">
                            <label>Number of Students Participating (if team) *</label>
                            <input type="number" name="studentCount" required min="1" placeholder="1">
                        </div>
                    </fieldset>

                    <!-- Support Required -->
                    <fieldset style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <legend style="font-weight: 700; color: #1B5E20; padding: 0 10px;">💼 Support Required (Select All That Apply)</legend>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                            <label style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" name="support" value="approval-letter"> Approval Letter from Dean
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" name="support" value="registration-fee"> Registration Fee Support
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" name="support" value="travel"> Travel Support
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" name="support" value="accommodation"> Accommodation Support
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" name="support" value="excused-absence"> Excused Absence from Rotation
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" name="support" value="funding"> Funding Request
                            </label>
                        </div>
                    </fieldset>

                    <!-- Budget (if applicable) -->
                    <fieldset style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <legend style="font-weight: 700; color: #1B5E20; padding: 0 10px;">💰 Budget (if applicable)</legend>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>Registration Fee (SAR)</label>
                                <input type="number" name="feeCost" step="0.01" placeholder="0.00">
                            </div>
                            <div class="form-group">
                                <label>Travel & Accommodation (SAR)</label>
                                <input type="number" name="travelCost" step="0.01" placeholder="0.00">
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Total Budget Requested (SAR)</label>
                            <input type="number" name="totalBudget" step="0.01" placeholder="0.00">
                        </div>

                        <div class="form-group">
                            <label>Budget Justification</label>
                            <textarea name="budgetJustification" rows="3" placeholder="Explain why this event is important for your development..." maxlength="500"></textarea>
                        </div>
                    </fieldset>

                    <!-- Schedule Conflict -->
                    <fieldset style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <legend style="font-weight: 700; color: #1B5E20; padding: 0 10px;">⏰ Schedule Impact</legend>
                        
                        <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
                            <input type="radio" name="scheduleConflict" value="no" checked> No conflict with rotation/classes
                        </label>
                        <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
                            <input type="radio" name="scheduleConflict" value="yes"> Requires time away from rotation/classes
                        </label>

                        <div class="form-group">
                            <label>Days Needed Away from Regular Duties *</label>
                            <input type="number" name="daysAway" required min="0" placeholder="0">
                        </div>
                    </fieldset>

                    <!-- Attachments -->
                    <fieldset style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <legend style="font-weight: 700; color: #1B5E20; padding: 0 10px;">📎 Attachments</legend>
                        
                        <div class="form-group">
                            <label>Upload Supporting Documents (Optional)</label>
                            <small style="display: block; margin-bottom: 10px; color: #666;">Event invitation, acceptance letter, abstract, etc.</small>
                            <div class="file-upload">
                                <input type="file" id="attachmentInput" name="attachments" multiple accept=".pdf,.doc,.docx,.jpg,.png" />
                                <label for="attachmentInput" class="file-upload-label">
                                    📎 Click to upload files or drag & drop
                                </label>
                                <small style="display: block; margin-top: 8px; color: var(--text-muted);">Max 5 files, 5MB each</small>
                            </div>
                        </div>
                    </fieldset>

                    <!-- Agreement -->
                    <div style="background: #FFF3CD; padding: 15px; border-radius: 6px; border-left: 4px solid #FF9800; margin-bottom: 20px;">
                        <label style="display: flex; align-items: flex-start; gap: 10px;">
                            <input type="checkbox" name="agreement" required style="margin-top: 4px;">
                            <div>
                                <strong>Declaration</strong>
                                <p style="margin: 5px 0 0 0; font-size: 0.9rem; color: #666;">
                                    I confirm that all information provided is accurate and complete. I understand that attendance is conditional on academic standing and that I may be required to submit photos/certificates after the event.
                                </p>
                            </div>
                        </label>
                    </div>

                    <div style="background: var(--light-green); padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                        <strong>📋 Approval Process</strong>
                        <ul style="margin: 10px 0 0 20px; padding: 0; color: var(--text-muted); font-size: 0.9rem;">
                            <li>✓ Your request will be reviewed by Student Services</li>
                            <li>✓ You'll receive email confirmation and approval status</li>
                            <li>✓ Approval letter will be sent if approved</li>
                            <li>✓ Timeline: 2-3 working days</li>
                        </ul>
                    </div>

                    <div style="display: flex; gap: 10px; margin-top: 20px;">
                        <button type="submit" class="btn btn-primary" style="flex: 1;">
                            📨 Submit Request
                        </button>
                        <button type="button" class="btn btn-outline" onclick="StudentPortal.showSubmitForm()" style="flex: 1;">
                            Cancel
                        </button>
                    </div>
                </form>
            </section>
        </div>
        `;

        root.innerHTML = html;
        return;
    }

    // 🔄 STANDARD FORM FOR OTHER REQUEST TYPES
    let html = `
    <div class="student-portal-home">
        <div class="section-header" style="margin-bottom: 30px;">
            <h3>${requestType.name}</h3>
            <button class="btn btn-outline" onclick="StudentPortal.showSubmitForm()">← Back</button>
        </div>

        <section class="home-section">
            <div style="background: ${dept.color}15; border-left: 4px solid ${dept.color}; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                <strong>${dept.icon} Will be routed to: ${dept.name}</strong>
            </div>

            <form id="ticketForm" onsubmit="StudentPortal.submitTicket(event, '${requestTypeId}')">
                <div class="form-group">
                    <label>Subject / Title *</label>
                    <input type="text" required placeholder="Brief description of your request" maxlength="100">
                </div>

                <div class="form-group">
                    <label>Description *</label>
                    <textarea required placeholder="Provide detailed information about your request..." rows="6" maxlength="1000"></textarea>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Priority</label>
                        <select>
                            <option value="low">Low - Can wait</option>
                            <option value="medium" selected>Medium - Normal</option>
                            <option value="high">High - Urgent</option>
                            <option value="critical">Critical - ASAP</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Preferred Contact Method</label>
                        <select>
                            <option value="email" selected>Email</option>
                            <option value="phone">Phone</option>
                            <option value="portal">Portal Message</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label>Attachments (Optional)</label>
                    <div class="file-upload">
                        <input type="file" id="attachmentInput" multiple accept=".pdf,.doc,.docx,.jpg,.png" />
                        <label for="attachmentInput" class="file-upload-label">
                            📎 Click to upload files or drag & drop
                        </label>
                        <small style="display: block; margin-top: 8px; color: var(--text-muted);">Max 5 files, 5MB each (PDF, DOC, images)</small>
                    </div>
                </div>

                <div style="background: var(--light-green); padding: 15px; border-radius: 6px; margin: 20px 0;">
                    <strong>📋 What happens next?</strong>
                    <ul style="margin: 10px 0 0 20px; padding: 0; color: var(--text-muted); font-size: 0.9rem;">
                        <li>Your ticket will be assigned a unique ID</li>
                        <li>Routed automatically to ${dept.name}</li>
                        <li>You'll receive a confirmation email</li>
                        <li>Expected response within SLA timeline</li>
                        <li>Track progress anytime from your portal</li>
                    </ul>
                </div>

                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button type="submit" class="btn btn-primary" style="flex: 1;">
                        Submit Ticket
                    </button>
                    <button type="button" class="btn btn-outline" onclick="StudentPortal.renderHome()" style="flex: 1;">
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    </div>
    `;

    root.innerHTML = html;
}

// ============================================================
// RENDER ALL TICKETS / TRACKING VIEW
// ============================================================

function renderAllTickets() {
    const root = document.getElementById('app-root');
    const { formatDate } = StudentPortalManager;

    let html = `
    <div class="student-portal-home">
        <div class="section-header" style="margin-bottom: 30px;">
            <h3>My Tickets</h3>
            <button class="btn btn-outline" onclick="StudentPortal.renderHome()">← Back to Home</button>
        </div>

        <!-- FILTERS -->
        <section class="home-section" style="margin-bottom: 20px;">
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button class="filter-btn active" onclick="StudentPortal.filterTickets('all')">All (${StudentPortalManager.tickets.filter(t => t.studentId === student.studentId && !t.isSample && t.status !== 'submitted').length})</button>
                <button class="filter-btn" onclick="StudentPortal.filterTickets('active')">Active</button>
                <button class="filter-btn" onclick="StudentPortal.filterTickets('resolved')">Resolved</button>
                <button class="filter-btn" onclick="StudentPortal.filterTickets('closed')">Closed</button>
            </div>
        </section>

        <!-- TICKETS LIST -->
        <section class="home-section tickets-container">
    `;

    StudentPortalManager.tickets
        .filter(ticket => ticket.studentId === student.studentId && !ticket.isSample && ticket.status !== 'submitted')
        .forEach(ticket => {
        const requestType = StudentPortalManager.getRequestTypeById(ticket.requestType);
        const dept = StudentPortalManager.getDepartmentById(ticket.department);
        const messageCount = ticket.messages.length;

        html += `
        <div class="ticket-card" onclick="StudentPortal.openTicket('${ticket.ticketId}')">
            <div class="ticket-card-header">
                <div style="display: flex; gap: 10px; align-items: center; flex: 1;">
                    <span style="font-size: 1.8rem;">${requestType.icon}</span>
                    <div style="flex: 1;">
                        <h4 style="margin: 0 0 4px 0;">${ticket.title}</h4>
                        <small style="color: var(--text-muted);">${ticket.ticketId}</small>
                    </div>
                </div>
                <div style="text-align: right;">
                    <span class="ticket-status-badge ${ticket.status}">${ticket.status.replace('-', ' ')}</span>
                    ${ticket.priority === 'critical' || ticket.priority === 'high' ? `<div style="color: #E74C3C; font-size: 1.2rem; margin-top: 5px;">!</div>` : ''}
                </div>
            </div>

            <div class="ticket-card-body">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; font-size: 0.9rem;">
                    <div>
                        <small style="color: var(--text-muted); display: block;">Department</small>
                        <strong>${dept.name}</strong>
                    </div>
                    <div>
                        <small style="color: var(--text-muted); display: block;">Submitted</small>
                        <strong>${formatDate(ticket.submissionDate)}</strong>
                    </div>
                    <div>
                        <small style="color: var(--text-muted); display: block;">Assigned To</small>
                        <strong>${ticket.assignedTo.name}</strong>
                    </div>
                    <div>
                        <small style="color: var(--text-muted); display: block;">SLA</small>
                        <strong>${ticket.sla}</strong>
                    </div>
                </div>
            </div>

            <div class="ticket-card-footer">
                <span style="color: var(--text-muted);">💬 ${messageCount} messages</span>
                <span style="color: var(--primary-green); font-weight: 600;">View Details →</span>
            </div>
        </div>
        `;
    });

    html += `
        </section>
    </div>
    `;

    root.innerHTML = html;
}

// ============================================================
// RENDER TICKET DETAIL VIEW (CONVERSATION)
// ============================================================

function renderTicketDetail(ticketId) {
    const root = document.getElementById('app-root');
    const ticket = StudentPortalManager.tickets.find(t => t.ticketId === ticketId);
    const { formatDate, formatTime } = StudentPortalManager;
    
    if (!ticket) return;

    const requestType = StudentPortalManager.getRequestTypeById(ticket.requestType);
    const dept = StudentPortalManager.getDepartmentById(ticket.department);

    let html = `
    <div class="student-portal-home">
        <div class="section-header" style="margin-bottom: 20px;">
            <div>
                <h3>${ticket.title}</h3>
                <small style="color: var(--text-muted);">${ticket.ticketId}</small>
            </div>
            <button class="btn btn-outline" onclick="StudentPortal.showAllTickets()">← Back to Tickets</button>
        </div>

        <!-- TICKET INFO HEADER -->
        <section class="home-section" style="background: ${dept.color}05; border-left: 4px solid ${dept.color}; margin-bottom: 20px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                <div>
                    <small style="color: var(--text-muted);">Status</small>
                    <div style="margin-top: 5px;">
                        <span class="ticket-status-badge ${ticket.status}">${ticket.status.replace('-', ' ')}</span>
                    </div>
                </div>
                <div>
                    <small style="color: var(--text-muted);">Department</small>
                    <p style="margin: 5px 0 0 0;"><strong>${dept.name}</strong></p>
                </div>
                <div>
                    <small style="color: var(--text-muted);">Assigned To</small>
                    <p style="margin: 5px 0 0 0;"><strong>${ticket.assignedTo.name}</strong></p>
                </div>
                <div>
                    <small style="color: var(--text-muted);">Response SLA</small>
                    <p style="margin: 5px 0 0 0;"><strong>${ticket.sla}</strong></p>
                </div>
                <div>
                    <small style="color: var(--text-muted);">Submitted</small>
                    <p style="margin: 5px 0 0 0;"><strong>${formatDate(ticket.submissionDate)}</strong></p>
                </div>
                <div>
                    <small style="color: var(--text-muted);">Due Date</small>
                    <p style="margin: 5px 0 0 0;"><strong>${formatDate(ticket.dueDate)}</strong></p>
                </div>
            </div>
        </section>

        <!-- CONVERSATION / MESSAGES -->
        <section class="home-section">
            <h4 style="margin-bottom: 20px; color: var(--primary-green);">Conversation History</h4>
            <div class="conversation-thread">
    `;

    ticket.messages.forEach(msg => {
        const isStudent = msg.sender === 'student';
        html += `
        <div class="message ${isStudent ? 'from-student' : 'from-admin'}">
            <div class="message-header">
                <div>
                    <strong>${msg.senderName}</strong>
                    <small style="color: var(--text-muted);">${msg.senderRole}</small>
                </div>
                <small style="color: var(--text-muted);">${formatDate(msg.timestamp)} ${formatTime(msg.timestamp)}</small>
            </div>
            <div class="message-body">
                ${msg.message.split('\n').map(line => `<p style="margin: 0 0 8px 0; line-height: 1.5;">${line}</p>`).join('')}
            </div>
            ${msg.attachments && msg.attachments.length > 0 ? `
            <div class="message-attachments">
                ${msg.attachments.map(att => `
                    <a href="#" class="attachment-link">
                        📎 ${att.name} (${att.size})
                    </a>
                `).join('')}
            </div>
            ` : ''}
        </div>
        `;
    });

    html += `
            </div>
        </section>

        <!-- ADMIN ACTIONS SECTION -->
        ${currentUserRole === 'admin' ? `
        <section class="home-section" style="background: #FFF3E0; border-left: 4px solid #FF9800; padding: 20px;">
            <h4 style="margin: 0 0 15px 0; color: #FF6F00;">🔧 Admin Actions</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
                <div>
                    <label style="font-size: 0.9rem; color: var(--text-muted);">Update Status</label>
                    <select id="statusUpdate" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; margin-top: 5px;">
                        <option value="">-- Select Status --</option>
                        <option value="submitted">Submitted</option>
                        <option value="in-progress">In Progress</option>
                        <option value="waiting-student">Waiting for Student</option>
                        <option value="approved">Approved</option>
                        <option value="closed">Closed</option>
                        <option value="resolved">Resolved</option>
                    </select>
                </div>
                <div>
                    <label style="font-size: 0.9rem; color: var(--text-muted);">Assign To</label>
                    <select id="assignTo" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; margin-top: 5px;">
                        <option value="">-- Select Staff --</option>
                        <option value="Dr. Fatima Al-Hajri">Dr. Fatima Al-Hajri</option>
                        <option value="Ahmed Al-Dosari">Ahmed Al-Dosari</option>
                        <option value="Muhammad Al-Otaibi">Muhammad Al-Otaibi</option>
                        <option value="Dr. Sarah Al-Zahrani">Dr. Sarah Al-Zahrani</option>
                    </select>
                </div>
                <div>
                    <label style="font-size: 0.9rem; color: var(--text-muted);">Priority</label>
                    <select id="priorityUpdate" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; margin-top: 5px;">
                        <option value="">-- Select Priority --</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                    </select>
                </div>
            </div>
            <div style="margin-top: 15px;">
                <label style="font-size: 0.9rem; color: var(--text-muted);">Internal Notes</label>
                <textarea id="adminNotes" placeholder="Add admin notes (not visible to student)..." rows="3" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; margin-top: 5px; font-family: Arial, sans-serif;"></textarea>
            </div>
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <button class="btn btn-primary" onclick="StudentPortal.updateTicketAdmin('${ticketId}')" style="flex: 1;">💾 Save Changes</button>
                <button class="btn btn-outline" onclick="StudentPortal.closeTicketAdmin('${ticketId}')" style="flex: 1; background: #FFE0B2;">🔒 Close Ticket</button>
            </div>
        </section>
        ` : ''}

        <!-- STUDENT REPLY SECTION -->
        ${currentUserRole === 'student' ? `
        <section class="home-section">
            <h4 style="margin-bottom: 15px; color: var(--primary-green);">Send Reply</h4>
            <form onsubmit="StudentPortal.sendReply(event, '${ticketId}')">
                <div class="form-group">
                    <textarea placeholder="Type your message here..." rows="5" required></textarea>
                </div>
                
                <div class="form-group">
                    <label>Attach Files (Optional)</label>
                    <div class="file-upload">
                        <input type="file" id="replyAttachmentInput" multiple />
                        <label for="replyAttachmentInput" class="file-upload-label">
                            📎 Click or drag files
                        </label>
                    </div>
                </div>

                <div style="display: flex; gap: 10px;">
                    <button type="submit" class="btn btn-primary" style="flex: 1;">Send Message</button>
                    <button type="button" class="btn btn-outline" onclick="StudentPortal.showAllTickets()" style="flex: 1;">Back to Tickets</button>
                </div>
            </form>
        </section>
        ` : ''}
    </div>
    `;

    root.innerHTML = html;
}

// ============================================================
// RENDER DASHBOARD - KPI & ANALYTICS
// ============================================================

function renderDashboard() {
    try {
        const root = document.getElementById('app-root');
        if (!root) {
            console.error('ERROR: app-root element not found!');
            return;
        }

        console.log('renderDashboard called - tickets count:', StudentPortalManager.tickets.length);
        
        // Get current logged-in student ID
        const currentStudentId = (typeof AuthSystem !== 'undefined' && AuthSystem.currentUser) ? AuthSystem.currentUser : StudentPortalManager.currentStudent.studentId;
        
        // ONLY show current student's tickets
        const tickets = this.tickets.filter(t => t.studentId === currentStudentId);
        const depts = StudentPortalManager.departments;

        // Calculate KPI metrics
        const totalReq = tickets.length;
        const inProgress = tickets.filter(t => t.status === 'in-progress').length;
        const resolved = tickets.filter(t => ['approved', 'closed', 'resolved'].includes(t.status)).length;
        const waiting = tickets.filter(t => t.status === 'waiting-student').length;
        const submitted = tickets.filter(t => t.status === 'submitted').length;
        
        const today = new Date();
        const overdue = tickets.filter(t => t.dueDate && new Date(t.dueDate) < today && !['closed', 'resolved'].includes(t.status)).length;

        // Modern dashboard HTML with improved styling
        let html = `
        <div class="student-portal-home" style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh; padding: 30px 0;">
            <div style="max-width: 1400px; margin: 0 auto; padding: 0 20px;">
                
                <!-- Header Section -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;">
                    <div>
                        <h1 style="margin: 0; font-size: 2.5rem; color: #1a1a1a; font-weight: 700;">
                            📊 Dashboard
                        </h1>
                        <p style="margin: 8px 0 0 0; color: #666; font-size: 1rem;">Overview of your ticket requests and performance metrics</p>
                    </div>
                    <button class="btn btn-outline" onclick="StudentPortal.renderHome()" style="padding: 10px 20px; font-size: 0.95rem; border-radius: 8px; background: white; border: 2px solid #1B5E20; color: #1B5E20; cursor: pointer; font-weight: 600;">
                        ← Back to Home
                    </button>
                </div>

                <!-- KPI Cards Section -->
                <div style="margin-bottom: 40px;">
                    <h2 style="font-size: 1.3rem; font-weight: 600; color: #1a1a1a; margin-bottom: 20px;">Key Metrics</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                        
                        <!-- Total Requests Card -->
                        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-left: 5px solid #4CAF50; transition: all 0.3s ease;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                <div>
                                    <p style="margin: 0 0 10px 0; color: #666; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Total Requests</p>
                                    <div style="font-size: 2.8rem; font-weight: 700; color: #4CAF50;">${totalReq}</div>
                                    <p style="margin: 8px 0 0 0; color: #999; font-size: 0.85rem;">All submitted requests</p>
                                </div>
                                <div style="font-size: 2.5rem; opacity: 0.15;">✅</div>
                            </div>
                        </div>

                        <!-- In Progress Card -->
                        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-left: 5px solid #2196F3; transition: all 0.3s ease;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                <div>
                                    <p style="margin: 0 0 10px 0; color: #666; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">In Progress</p>
                                    <div style="font-size: 2.8rem; font-weight: 700; color: #2196F3;">${inProgress}</div>
                                    <p style="margin: 8px 0 0 0; color: #999; font-size: 0.85rem;">Being processed</p>
                                </div>
                                <div style="font-size: 2.5rem; opacity: 0.15;">🕒</div>
                            </div>
                        </div>

                        <!-- Resolved Card -->
                        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-left: 5px solid #9C27B0; transition: all 0.3s ease;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                <div>
                                    <p style="margin: 0 0 10px 0; color: #666; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Resolved</p>
                                    <div style="font-size: 2.8rem; font-weight: 700; color: #9C27B0;">${resolved}</div>
                                    <p style="margin: 8px 0 0 0; color: #999; font-size: 0.85rem;">Completed</p>
                                </div>
                                <div style="font-size: 2.5rem; opacity: 0.15;">✔️</div>
                            </div>
                        </div>

                        <!-- Waiting Card -->
                        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-left: 5px solid #FF9800; transition: all 0.3s ease;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                <div>
                                    <p style="margin: 0 0 10px 0; color: #666; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Awaiting You</p>
                                    <div style="font-size: 2.8rem; font-weight: 700; color: #FF9800;">${waiting}</div>
                                    <p style="margin: 8px 0 0 0; color: #999; font-size: 0.85rem;">Need your action</p>
                                </div>
                                <div style="font-size: 2.5rem; opacity: 0.15;">⏳</div>
                            </div>
                        </div>

                        <!-- Overdue Card -->
                        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-left: 5px solid #F44336; transition: all 0.3s ease;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                <div>
                                    <p style="margin: 0 0 10px 0; color: #666; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Overdue</p>
                                    <div style="font-size: 2.8rem; font-weight: 700; color: #F44336;">${overdue}</div>
                                    <p style="margin: 8px 0 0 0; color: #999; font-size: 0.85rem;">SLA breached</p>
                                </div>
                                <div style="font-size: 2.5rem; opacity: 0.15;">⚠️</div>
                            </div>
                        </div>

                        <!-- Success Rate Card -->
                        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-left: 5px solid #00BCD4; transition: all 0.3s ease;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                <div>
                                    <p style="margin: 0 0 10px 0; color: #666; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Success Rate</p>
                                    <div style="font-size: 2.8rem; font-weight: 700; color: #00BCD4;">${totalReq > 0 ? Math.round((resolved / totalReq) * 100) : 0}%</div>
                                    <p style="margin: 8px 0 0 0; color: #999; font-size: 0.85rem;">Resolution rate</p>
                                </div>
                                <div style="font-size: 2.5rem; opacity: 0.15;">📈</div>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- Department Breakdown Section -->
                <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); margin-bottom: 40px;">
                    <h2 style="font-size: 1.3rem; font-weight: 600; color: #1a1a1a; margin: 0 0 25px 0;">Requests by Department</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">`;

        for (let i = 0; i < depts.length; i++) {
            const dept = depts[i];
            const count = tickets.filter(t => t.department === dept.id).length;
            const pct = totalReq > 0 ? Math.round((count / totalReq) * 100) : 0;
            
            html += `
                        <div style="padding: 20px; background: ${dept.color}08; border-radius: 10px; border: 1px solid ${dept.color}20;">
                            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                                <div style="font-size: 1.8rem; margin-right: 12px;">${dept.icon}</div>
                                <div>
                                    <div style="font-weight: 600; color: #1a1a1a; font-size: 1rem;">${dept.name}</div>
                                    <div style="color: #999; font-size: 0.85rem;">${count} request${count !== 1 ? 's' : ''}</div>
                                </div>
                            </div>
                            <div style="background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden; margin-bottom: 10px;">
                                <div style="background: ${dept.color}; height: 100%; width: ${pct}%; transition: width 0.3s ease;"></div>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="color: #666; font-size: 0.9rem; font-weight: 600;">${pct}% of total</span>
                                <span style="background: ${dept.color}20; color: ${dept.color}; padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">${count}</span>
                            </div>
                        </div>`;
        }

        html += `
                    </div>
                </div>

                <!-- Summary Section -->
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px; box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);">
                    <h2 style="font-size: 1.3rem; font-weight: 600; color: white; margin: 0 0 20px 0;">📈 Quick Summary</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; color: white;">
                        <div>
                            <p style="margin: 0 0 5px 0; color: rgba(255,255,255,0.8); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px;">Active Requests</p>
                            <p style="margin: 0; font-size: 2rem; font-weight: 700;">${inProgress + submitted}</p>
                            <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.7); font-size: 0.85rem;">Currently being worked on</p>
                        </div>
                        <div>
                            <p style="margin: 0 0 5px 0; color: rgba(255,255,255,0.8); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px;">Completion Rate</p>
                            <p style="margin: 0; font-size: 2rem; font-weight: 700;">${totalReq > 0 ? Math.round((resolved / totalReq) * 100) : 0}%</p>
                            <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.7); font-size: 0.85rem;">Out of all requests</p>
                        </div>
                        <div>
                            <p style="margin: 0 0 5px 0; color: rgba(255,255,255,0.8); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px;">Average Status</p>
                            <p style="margin: 0; font-size: 2rem; font-weight: 700;">🟢</p>
                            <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.7); font-size: 0.85rem;">${overdue === 0 ? 'All on track' : overdue + ' need attention'}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        `;

        root.innerHTML = html;
        console.log('Dashboard rendered successfully');
        
    } catch (error) {
        console.error('Error rendering dashboard:', error);
        const root = document.getElementById('app-root');
        if (root) {
            root.innerHTML = '<div style="padding: 30px; background: #ffebee; border-radius: 12px; color: #c62828;"><h3 style="margin: 0 0 10px 0;">Error Loading Dashboard</h3><p style="margin: 0 0 15px 0;">' + error.message + '</p><button onclick="StudentPortal.renderHome()" style="padding: 10px 20px; background: #c62828; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">Go Back to Home</button></div>';
        }
    }
}

// ============================================================
// SUBMIT EVENT/CONFERENCE REQUEST - DETAILED FORM
// ============================================================

async function submitEventRequest(event) {
    event.preventDefault();
    const form = event.target;
    const student = StudentPortalManager.currentStudent;
    
    try {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = '📤 Submitting...';
        
        // Gather form data
        const formData = new FormData(form);
        const supportCheckedBoxes = form.querySelectorAll('input[name="support"]:checked');
        const supportNeeded = Array.from(supportCheckedBoxes).map(cb => cb.value);
        
        // Create comprehensive event request ticket
        const ticketId = 'EV-TICKET-' + new Date().getTime();
        const requestType = StudentPortalManager.getRequestTypeById('event-participation');
        const dept = StudentPortalManager.getDepartmentById(requestType.department);
        
        const eventRequestData = {
            // Basic ticket info
            ticketId: ticketId,
            studentId: student.studentId,
            studentEmail: student.email,
            studentName: student.firstName + ' ' + student.lastName,
            title: formData.get('eventName'),
            requestType: 'event-participation',
            status: 'submitted',
            priority: 'high',
            department: requestType.department,
            submissionDate: new Date(),
            lastUpdate: new Date(),
            assignedTo: { name: 'Unassigned', email: dept.email },
            dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days SLA
            sla: '3 working days',
            
            // Event-specific details
            eventDetails: {
                name: formData.get('eventName'),
                type: formData.get('eventType'),
                level: formData.get('eventLevel'),
                date: formData.get('eventDate'),
                duration: parseInt(formData.get('eventDuration')),
                location: formData.get('eventLocation'),
                organizer: formData.get('eventOrganizer'),
                daysAway: parseInt(formData.get('daysAway')),
                scheduleConflict: formData.get('scheduleConflict') === 'yes'
            },
            
            // Participation details
            participationDetails: {
                role: formData.get('studentRole'),
                learningOutcomes: formData.get('learningOutcomes'),
                studentCount: parseInt(formData.get('studentCount'))
            },
            
            // Budget
            budget: {
                registrationFee: parseFloat(formData.get('feeCost')) || 0,
                travelCost: parseFloat(formData.get('travelCost')) || 0,
                totalRequested: parseFloat(formData.get('totalBudget')) || 0,
                justification: formData.get('budgetJustification')
            },
            
            //Support needed
            supportNeeded: supportNeeded,
            
            // Messages/History
            messages: [{
                id: 1,
                sender: 'student',
                senderName: student.firstName + ' ' + student.lastName,
                senderRole: 'Student',
                timestamp: new Date(),
                message: formData.get('eventName') + ' - Event participation request',
                attachments: []
            }],
            
            // Admin fields (initially empty)
            approvalStatus: null,
            approvalNotes: '',
            approvalDate: null,
            approver: null,
            approvalLetter: null
        };
        
        // Add to tickets list and mark as locally submitted (so it survives backend sync)
        eventRequestData.isLocallySubmitted = true;
        StudentPortalManager.tickets.unshift(eventRequestData);
        
        // IMPORTANT: Also store in localStorage so it survives page refreshes and API syncs
        // CRITICAL: Must serialize Date objects to strings for localStorage!
        const storedSubmissions = JSON.parse(localStorage.getItem('studentSubmittedTickets') || '[]');
        const serialized = serializeTicket(eventRequestData);
        storedSubmissions.unshift(serialized);
        try {
            localStorage.setItem('studentSubmittedTickets', JSON.stringify(storedSubmissions));
            console.log('✅ [SUBMISSION] Ticket STORED in localStorage');
            console.log('💾 [SUBMISSION] Serialized data:', serialized);
        } catch (e) {
            console.error('❌ [SUBMISSION] Failed to save to localStorage:', e.message);
        }
        
        console.log('✅ [SUBMISSION] Ticket added to StudentPortalManager.tickets');
        console.log('📊 [SUBMISSION] StudentPortalManager.tickets.length:', StudentPortalManager.tickets.length);
        console.log('📊 [SUBMISSION] window.StudentPortalManager.tickets.length:', window.StudentPortalManager.tickets.length);
        console.log('📋 [SUBMISSION] New ticket ID:', eventRequestData.ticketId);
        
        // Update community services tracking
        if (typeof StudentPortalManager.communityServicesTracking !== 'undefined') {
            StudentPortalManager.communityServicesTracking.updateStats();
        }
        
        // Show success message
        alert(`✅ Event Request Submitted Successfully!\n\n` +
              `Ticket ID: ${ticketId}\n` +
              `Event: ${formData.get('eventName')}\n` +
              `Status: Submitted for Review\n\n` +
              `You will receive an email confirmation shortly.\n` +
              `Expected approval timeline: 2-3 working days`);
        
        // Ticket is now in StudentPortalManager.tickets - Admin Hub will show it when opened/refreshed
        console.log('✅ Ticket submitted and stored in StudentPortalManager');
        console.log('📊 Total tickets:', StudentPortalManager.tickets.length);
        
        // Return to home
        StudentPortal.renderHome();
        
    } catch (error) {
        console.error('Event request submission error:', error);
        alert(`❌ Error submitting request: ${error.message}`);
    } finally {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = '📨 Submit Request';
        }
    }
}

// ============================================================
// EXPORT FOR USE IN MAIN APP
// ============================================================

window.StudentPortal = {
    renderHome: async () => {
        console.log('🏠 renderHome() called');
        console.log('📊 Current tickets in StudentPortalManager BEFORE sync:', StudentPortalManager.tickets.length);
        console.log('🔍 Locally submitted tickets:', StudentPortalManager.tickets.filter(t => t.isLocallySubmitted).length);
        
        // Update currentStudent from AuthSystem if available
        if (typeof AuthSystem !== 'undefined' && AuthSystem.currentUser && AuthSystem.currentUserRole === 'student') {
            StudentPortalManager.currentStudent.studentId = AuthSystem.currentUser;
            StudentPortalManager.currentStudent.firstName = (AuthSystem.currentUserName || AuthSystem.currentUser).split(' ')[0];
            StudentPortalManager.currentStudent.name = AuthSystem.currentUserName || AuthSystem.currentUser;
            console.log('✅ Updated currentStudent from AuthSystem:', StudentPortalManager.currentStudent.studentId);
        }
        
        // Fetch real tickets from backend but preserve locally submitted ones
        try {
            const studentId = StudentPortalManager.currentStudent.studentId;
            const tickets = await StudentPortalAPI.getStudentTickets(studentId);
            
            // ALWAYS load locally submitted tickets from localStorage
            const storedSubmissionsRaw = JSON.parse(localStorage.getItem('studentSubmittedTickets') || '[]');
            // CRITICAL: Deserialize Date strings back to Date objects!
            const storedSubmissions = storedSubmissionsRaw.map(t => deserializeTicket(t));
            console.log('💾 [renderHome] Loaded from localStorage:', storedSubmissions.length, 'submitted tickets');
            if (storedSubmissions.length > 0) {
                console.log('✅ [renderHome] Submitted tickets from storage:', storedSubmissions.map(t => t.ticketId));
            }
            
            // If backend has real data, use it but preserve all locally submitted ones
            if (tickets && tickets.length > 0) {
                StudentPortalManager.tickets = tickets.map(ticket => ({
                    ...ticket,
                    assignedTo: ticket.assignedTo || { name: 'Unassigned', email: '' },
                    messages: ticket.messages || [],
                    sla: ticket.sla || 'N/A',
                    dueDate: ticket.dueDate ? new Date(ticket.dueDate) : null,
                    submissionDate: ticket.submissionDate ? new Date(ticket.submissionDate) : null,
                    lastUpdate: ticket.lastUpdate ? new Date(ticket.lastUpdate) : null
                }));
                console.log('✅ [renderHome] Updated from backend');
            }
            // REGARDLESS of backend data, add all localStorage submissions to the front
            if (storedSubmissions.length > 0) {
                StudentPortalManager.tickets.unshift(...storedSubmissions);
                console.log('✅ [renderHome] Added localStorage submissions to front, total now:', StudentPortalManager.tickets.length);
            }
        } catch (error) {
            console.log('⚠️ Backend not available, using sample data + local submissions:', error.message);
        }
        
        console.log('📊 Final tickets in StudentPortalManager AFTER sync:', StudentPortalManager.tickets.length);
        console.log('📊 window.StudentPortalManager.tickets:', window.StudentPortalManager.tickets.length);
        renderStudentPortalHome();
    },
    showSubmitForm: () => {
        document.getElementById('page-title').textContent = 'Submit New Request';
        renderSubmitRequestForm();
    },
    showRequestForm: (typeId) => {
        const type = StudentPortalManager.getRequestTypeById(typeId);
        document.getElementById('page-title').textContent = `New Request: ${type.name}`;
        renderRequestForm(typeId);
    },
    submitTicket: async (event, typeId) => {
        event.preventDefault();
        const form = event.target;
        const title = form.querySelector('input[type="text"]').value;
        const description = form.querySelector('textarea').value;
        const priority = form.querySelector('select').value;
        const contactMethod = form.querySelectorAll('select')[1].value;
        try {
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = '📤 Submitting...';
            
            // 🔄 Sync currentStudent from AuthSystem (logged-in user)
            if (typeof AuthSystem !== 'undefined' && AuthSystem.currentUser) {
                StudentPortalManager.currentStudent.studentId = AuthSystem.currentUser;
                if (AuthSystem.currentUserName) {
                    const nameParts = AuthSystem.currentUserName.split(' ');
                    StudentPortalManager.currentStudent.firstName = nameParts[0];
                    StudentPortalManager.currentStudent.lastName = nameParts.slice(1).join(' ');
                }
            }
            
            // Call backend API to create ticket
            const result = await StudentPortalAPI.createTicket({
                studentId: StudentPortalManager.currentStudent.studentId,
                title,
                description,
                requestTypeId: typeId,
                priority,
                contactMethod
            });
            
            const ticketId = result.ticketId || 'COP-TICKET-' + new Date().getTime();
            const requestType = StudentPortalManager.getRequestTypeById(typeId);
            const dept = StudentPortalManager.getDepartmentById(requestType.department);
            
            // Create new ticket object and add to list
            const newTicket = {
                ticketId: ticketId,
                studentId: StudentPortalManager.currentStudent.studentId,
                studentEmail: StudentPortalManager.currentStudent.email,
                title: title,
                description: description,
                requestType: typeId,
                status: 'submitted',
                priority: priority,
                department: requestType.department,
                submissionDate: new Date(),
                lastUpdate: new Date(),
                assignedTo: { name: 'Unassigned', email: dept.email },
                dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
                sla: '3-5 working days',
                messages: [{
                    id: 1,
                    sender: 'student',
                    senderName: StudentPortalManager.currentStudent.firstName + ' ' + StudentPortalManager.currentStudent.lastName,
                    senderRole: 'Student',
                    timestamp: new Date(),
                    message: description,
                    attachments: []
                }]
            };
            
            // Add new ticket to the beginning of the list and mark as locally submitted (so it survives backend sync)
            newTicket.isLocallySubmitted = true;
            StudentPortalManager.tickets.unshift(newTicket);
            console.log('✅ General ticket added to StudentPortalManager.tickets');
            console.log('📊 Total tickets in StudentPortalManager:', StudentPortalManager.tickets.length);
            console.log('📋 New ticket data:', newTicket);
            console.log('🔍 StudentPortalManager accessible from window?', typeof window.StudentPortalManager !== 'undefined');

            // 💾 Save to Supabase database
            if (typeof window.SupabaseService !== 'undefined') {
                try {
                    const saved = await window.SupabaseService.db.saveSubmittedTicket(
                        StudentPortalManager.currentStudent.studentId,
                        newTicket
                    );
                    if (saved) {
                        console.log('✅ Ticket saved to Supabase database');
                    } else {
                        console.warn('⚠️ Ticket saved locally but not to database');
                    }
                } catch (error) {
                    console.error('❌ Failed to save ticket to Supabase:', error);
                }
            }
            
            // 🏥 Update clinical tracking if this is a clinical/rotation issue
            if (typeId === 'clinical' && typeof StudentPortalManager.clinicalTracking !== 'undefined') {
                StudentPortalManager.clinicalTracking.updateStats();
                console.log(`🏥 Clinical issue submitted - Stats updated:`, StudentPortalManager.clinicalTracking);
            }
            
            // 🎉 Update community services tracking if this is an event/conference request
            if (typeId === 'event-participation' && typeof StudentPortalManager.communityServicesTracking !== 'undefined') {
                StudentPortalManager.communityServicesTracking.updateStats();
                console.log(`🎉 Community services request submitted - Stats updated:`, StudentPortalManager.communityServicesTracking);
            }
            
            alert(`✅ Request submitted successfully!\n\nTicket ID: ${ticketId}`);
            
            // Ticket is now in StudentPortalManager.tickets - Admin Hub will show it when opened/refreshed
            console.log('✅ Ticket submitted and stored in StudentPortalManager');
            console.log('📊 Total tickets:', StudentPortalManager.tickets.length);
            
            // Try to refresh tickets from backend if available
            try {
                const tickets = await StudentPortalAPI.getStudentTickets(StudentPortalManager.currentStudent.studentId);
                if (tickets && tickets.length > 0) {
                    StudentPortalManager.tickets = tickets.map(ticket => ({
                        ...ticket,
                        assignedTo: ticket.assignedTo || { name: 'Unassigned', email: '' },
                        messages: ticket.messages || [],
                        sla: ticket.sla || 'N/A',
                        dueDate: ticket.dueDate ? new Date(ticket.dueDate) : null,
                        submissionDate: ticket.submissionDate ? new Date(ticket.submissionDate) : null,
                        lastUpdate: ticket.lastUpdate ? new Date(ticket.lastUpdate) : null
                    }));
                }
            } catch (e) {
                console.log('Backend not available, using local submission');
            }
            
            renderStudentPortalHome();
            document.getElementById('page-title').textContent = 'Student Portal';
        } catch (error) {
            alert(`❌ Error: ${error.message}`);
        } finally {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Ticket';
            }
        }
    },
    submitEventRequest: async (event) => {
        await submitEventRequest(event);
    },
    showAllTickets: async () => {
        document.getElementById('page-title').textContent = 'My Tickets';
        // Fetch real tickets from backend
        try {
            const studentId = (typeof AuthSystem !== 'undefined' && AuthSystem.currentUser) ? AuthSystem.currentUser : StudentPortalManager.currentStudent.studentId;
            const tickets = await StudentPortalAPI.getStudentTickets(studentId);
            // Only update if we got real data
            if (tickets && tickets.length > 0) {
                StudentPortalManager.tickets = tickets.map(ticket => ({
                    ...ticket,
                    // Fallbacks for missing fields (for compatibility with UI)
                    assignedTo: ticket.assignedTo || { name: 'Unassigned', email: '' },
                    messages: ticket.messages || [],
                    sla: ticket.sla || 'N/A',
                    dueDate: ticket.dueDate ? new Date(ticket.dueDate) : null,
                    submissionDate: ticket.submissionDate ? new Date(ticket.submissionDate) : null,
                    lastUpdate: ticket.lastUpdate ? new Date(ticket.lastUpdate) : null
                }));
            }
        } catch (error) {
            console.log('Backend not available, using sample data');
        }
        renderAllTickets();
    },
    filterTickets: (filter) => {
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        // Filtering already done in renderAllTickets
    },
    openTicket: (ticketId) => {
        const ticket = StudentPortalManager.tickets.find(t => t.ticketId === ticketId);
        if (ticket) {
            document.getElementById('page-title').textContent = `Ticket: ${ticket.ticketId}`;
            renderTicketDetail(ticketId);
        }
    },
    sendReply: (event, ticketId) => {
        event.preventDefault();
        const form = event.target;
        const message = form.querySelector('textarea').value;
        alert('✅ Message sent!\n\nThe department has been notified of your reply.');
        StudentPortal.openTicket(ticketId);
    },
    updateTicketAdmin: (ticketId) => {
        const ticket = StudentPortalManager.tickets.find(t => t.ticketId === ticketId);
        if (!ticket) return;
        
        const statusUpdate = document.getElementById('statusUpdate').value;
        const assignTo = document.getElementById('assignTo').value;
        const priorityUpdate = document.getElementById('priorityUpdate').value;
        const adminNotes = document.getElementById('adminNotes').value;
        
        if (statusUpdate) ticket.status = statusUpdate;
        if (assignTo) ticket.assignedTo.name = assignTo;
        if (priorityUpdate) ticket.priority = priorityUpdate;
        if (adminNotes) {
            ticket.adminNotes = (ticket.adminNotes || '') + `\n[${new Date().toLocaleString()}] ${adminNotes}`;
        }
        ticket.lastUpdate = new Date();
        
        alert('✅ Ticket updated successfully!');
        StudentPortal.openTicket(ticketId);
    },
    closeTicketAdmin: (ticketId) => {
        const ticket = StudentPortalManager.tickets.find(t => t.ticketId === ticketId);
        if (!ticket) return;
        
        ticket.status = 'closed';
        ticket.lastUpdate = new Date();
        
        alert('✅ Ticket closed successfully!');
        StudentPortal.showAllTickets();
    },
    showKnowledgeBase: () => {
        document.getElementById('page-title').textContent = 'FAQ & Help Center';
        alert('Knowledge base coming soon');
    },
    showDashboard: () => {
        try {
            const pageTitle = document.getElementById('page-title');
            if (pageTitle) pageTitle.textContent = 'Dashboard & Analytics';
            setTimeout(() => renderDashboard(), 100);
        } catch (error) {
            console.error('Dashboard error:', error);
        }
    },
    showResources: () => {
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) pageTitle.textContent = 'Resources';
        renderResources();
    },
    showRotation: () => {
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) pageTitle.textContent = 'My APPE Rotation';
        renderRotationPreferences();
    },
    switchUserRole: (role) => {
        currentUserRole = role;
        alert(`Switched to ${role === 'admin' ? 'Admin' : 'Student'} mode`);
        StudentPortal.renderHome();
    }
};

// ============================================================
// RENDER RESOURCES PAGE
// ============================================================
async function renderResources() {
    const root = document.getElementById('app-root');
    if (!root) return;

    root.innerHTML = `<div style="padding: 2rem; text-align: center; color: #666;">Loading resources...</div>`;

    let resources = [];
    try {
        if (typeof window.SupabaseAuth !== 'undefined' && window.SupabaseAuth.supabase) {
            const { data, error } = await window.SupabaseAuth.supabase
                .from('college_resources')
                .select('*')
                .eq('is_active', true)
                .order('display_order', { ascending: true });
            if (!error && data) resources = data;
        }
    } catch (e) {
        console.warn('Could not load resources from Supabase:', e);
    }

    const cardsHTML = resources.length === 0
        ? `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: #999;">
               <div style="font-size: 3rem; margin-bottom: 1rem;">📂</div>
               <p style="font-size: 1.1rem;">No resources available yet.</p>
           </div>`
        : resources.map(r => `
            <a href="${r.url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                <div style="background: white; border: 1px solid #e0e0e0; border-radius: 10px; padding: 2rem 1.5rem; text-align: center; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 2px 6px rgba(0,0,0,0.06);"
                     onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.12)';"
                     onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.06)';">
                    <div style="font-size: 2.5rem; margin-bottom: 1rem;">${r.icon || '📄'}</div>
                    <div style="color: #1B5E20; font-weight: 600; font-size: 0.95rem; line-height: 1.4;">${r.title}</div>
                    ${r.category ? `<div style="margin-top: 0.5rem; font-size: 0.78rem; color: #999;">${r.category}</div>` : ''}
                </div>
            </a>`).join('');

    root.innerHTML = `
        <div style="padding: 2rem;">
            <div style="margin-bottom: 2rem;">
                <h1 style="margin: 0 0 0.5rem 0; font-size: 2rem; color: #1a1a1a; font-weight: 700;">📚 Resources</h1>
                <p style="margin: 0; color: #666;">Official documents and resources from the College of Pharmacy</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.25rem;">
                ${cardsHTML}
            </div>
        </div>`;
}

// ============================================================
// RENDER ROTATION PREFERENCES PAGE (Student)
// ============================================================
let _rotPrefList = [];
let _rotCurrentUserId = null;
let _rotSubmissionsOpen = true;

async function renderRotationPreferences() {
    const root = document.getElementById('app-root');
    if (!root) return;

    root.innerHTML = '<div style="padding:2rem;text-align:center;color:#888;"><div style="font-size:2.5rem;margin-bottom:0.75rem;">⏳</div><p>Loading rotation data...</p></div>';

    let sites = [], settings = { submissions_open: true }, assignment = null, savedPrefs = [];

    try {
        const sb = window.SupabaseAuth?.supabase;
        if (sb) {
            const { data: { user } } = await sb.auth.getUser();
            _rotCurrentUserId = user?.id;

            const [sitesRes, settingsRes, assignRes, prefsRes] = await Promise.all([
                sb.from('rotation_sites').select('id, site_name, specialty').eq('is_active', true).order('site_name'),
                sb.from('rotation_settings').select('*').eq('id', 1).maybeSingle(),
                sb.from('rotation_assignments').select('*, rotation_sites(site_name, specialty)').eq('student_id', _rotCurrentUserId).maybeSingle(),
                sb.from('rotation_preferences').select('site_id, preference_rank, submitted_at, rotation_sites(site_name, specialty)').eq('student_id', _rotCurrentUserId).order('preference_rank')
            ]);

            if (!sitesRes.error && sitesRes.data) sites = sitesRes.data;
            if (!settingsRes.error && settingsRes.data) settings = settingsRes.data;
            if (!assignRes.error) assignment = assignRes.data;
            if (!prefsRes.error && prefsRes.data) savedPrefs = prefsRes.data;
        }
    } catch (e) { console.warn('Rotation prefs load error:', e); }

    _rotSubmissionsOpen = settings.submissions_open !== false;

    _rotPrefList = savedPrefs.map(p => ({
        site_id: p.site_id,
        site_name: p.rotation_sites?.site_name || 'Unknown Site',
        specialty: p.rotation_sites?.specialty || ''
    }));

    const selectedIds = new Set(_rotPrefList.map(p => p.site_id));

    const assignmentBanner = assignment?.site_id ? `
        <div style="background:linear-gradient(135deg,#1B5E20,#2e7d32);color:white;border-radius:14px;padding:1.5rem 2rem;margin-bottom:1.5rem;display:flex;align-items:center;gap:1.5rem;">
            <div style="font-size:3rem;">🎉</div>
            <div>
                <div style="font-size:0.8rem;opacity:0.8;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:0.3rem;">Your APPE Assignment</div>
                <div style="font-size:1.5rem;font-weight:700;margin-bottom:0.2rem;">${assignment.rotation_sites?.site_name || 'Assigned'}</div>
                <div style="opacity:0.9;font-size:0.95rem;">${assignment.rotation_sites?.specialty || ''}</div>
                ${assignment.preference_rank_received ? '<div style="margin-top:0.5rem;font-size:0.82rem;opacity:0.8;background:rgba(255,255,255,0.15);display:inline-block;padding:2px 12px;border-radius:12px;">Your #' + assignment.preference_rank_received + ' choice ✓</div>' : ''}
            </div>
        </div>` : '';

    const closedBanner = !_rotSubmissionsOpen ? `
        <div style="background:#fff3e0;border:1px solid #ffe082;border-radius:8px;padding:0.75rem 1rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:0.5rem;font-size:0.88rem;color:#e65100;">
            🔒 <strong>Submissions are currently closed.</strong> You can view your saved preferences but cannot make changes.
        </div>` : '';

    const siteCards = sites.length === 0
        ? '<div style="grid-column:1/-1;text-align:center;padding:3rem;color:#bbb;"><div style="font-size:2.5rem;margin-bottom:0.75rem;">🏥</div><p>No rotation sites available yet.</p></div>'
        : sites.map(s => {
            const isSel = selectedIds.has(s.id);
            const siteName = (s.site_name || '').replace(/'/g, "\\'");
            const specialty = (s.specialty || '').replace(/'/g, "\\'");
            return `
            <div data-site-card="${s.id}" onclick="window.rotStudent.previewRotation(${s.id},'${specialty}','${siteName}')" style="background:white;border:2px solid ${isSel ? '#a5d6a7' : '#e0e0e0'};border-radius:10px;padding:1.2rem;transition:border-color 0.2s,box-shadow 0.2s;cursor:pointer;" onmouseover="if(!this.style.outline)this.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)'" onmouseout="this.style.boxShadow=''">
                <div style="font-weight:700;color:#1a1a1a;margin-bottom:0.4rem;font-size:0.92rem;line-height:1.35;">${s.site_name}</div>
                <div style="font-size:0.8rem;color:#1B5E20;background:#e8f5e9;display:inline-block;padding:2px 10px;border-radius:12px;margin-bottom:0.9rem;">${s.specialty || '—'}</div>
                <div><button data-site-btn="${s.id}" onclick="event.stopPropagation();window.rotStudent.addToPref(${s.id},'${siteName}','${specialty}')" ${isSel ? 'disabled' : ''} style="width:100%;padding:6px;border:none;border-radius:6px;cursor:${isSel ? 'default' : 'pointer'};font-weight:600;font-size:0.83rem;background:${isSel ? '#e8f5e9' : '#1B5E20'};color:${isSel ? '#2e7d32' : 'white'};transition:all 0.15s;">${isSel ? '✓ Added' : '+ Add to Preferences'}</button></div>
            </div>`;
        }).join('');

    const prefPanelContent = _rotPrefList.length === 0
        ? '<div style="text-align:center;padding:2.5rem 1rem;color:#ccc;"><div style="font-size:2.5rem;margin-bottom:0.75rem;">📋</div><p style="margin:0;font-size:0.88rem;">Click sites on the left to add them here.</p></div>'
        : _rotPrefList.map((p, i) => `
            <div style="background:white;border:1px solid #e0e0e0;border-radius:8px;padding:0.7rem 0.9rem;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.6rem;">
                <span style="background:#1B5E20;color:white;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.8rem;flex-shrink:0;">${i + 1}</span>
                <div style="flex:1;min-width:0;">
                    <div style="font-weight:600;color:#1a1a1a;font-size:0.88rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.site_name}</div>
                    <div style="font-size:0.75rem;color:#aaa;">${p.specialty}</div>
                </div>
                <div style="display:flex;gap:3px;flex-shrink:0;">
                    <button onclick="window.rotStudent.moveUp(${i})" ${i === 0 ? 'disabled' : ''} style="background:#f5f5f5;border:1px solid #ddd;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:0.75rem;opacity:${i === 0 ? '0.3' : '1'};">↑</button>
                    <button onclick="window.rotStudent.moveDown(${i})" ${i === _rotPrefList.length - 1 ? 'disabled' : ''} style="background:#f5f5f5;border:1px solid #ddd;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:0.75rem;opacity:${i === _rotPrefList.length - 1 ? '0.3' : '1'};">↓</button>
                    <button onclick="window.rotStudent.removeFromPref(${i})" style="background:#ffebee;border:none;color:#c62828;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:0.75rem;">✕</button>
                </div>
            </div>`).join('');

    const lastSubmit = savedPrefs.length > 0 && savedPrefs[0]?.submitted_at
        ? new Date(savedPrefs[0].submitted_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : null;

    root.innerHTML = `
        <div style="padding:2rem;max-width:1200px;">
            <div style="margin-bottom:1.5rem;">
                <h1 style="margin:0 0 0.4rem 0;font-size:1.7rem;color:#1a1a1a;font-weight:700;">🏥 APPE Rotation Preferences</h1>
                <p style="margin:0;color:#888;font-size:0.9rem;">Select and rank up to 20 rotation sites. Students with higher MS Survey scores receive their top choices first during assignment.</p>
            </div>

            ${assignmentBanner}
            ${closedBanner}

            <div style="display:grid;grid-template-columns:1fr 360px;gap:1.5rem;align-items:start;">
                <!-- Available Sites -->
                <div>
                    <div style="margin-bottom:0.75rem;display:flex;align-items:center;justify-content:space-between;">
                        <h3 style="margin:0;color:#444;font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Available Sites (${sites.length})</h3>
                    </div>
                    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:0.85rem;">${siteCards}</div>
                </div>

                <!-- Right Column: Eval Preview + Preferences -->
                <div style="position:sticky;top:1rem;display:flex;flex-direction:column;gap:1rem;">

                    <!-- Evaluation Preview -->
                    <div id="rot-eval-container" style="background:#f8f9fa;border-radius:12px;padding:1.25rem;border:2px solid #e0e0e0;">
                        <div style="text-align:center;padding:1.5rem 0.5rem;color:#ccc;">
                            <div style="font-size:2rem;margin-bottom:0.4rem;">⭐</div>
                            <div style="font-size:0.72rem;font-weight:700;color:#aaa;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;">Evaluation Preview</div>
                            <p style="margin:0;font-size:0.8rem;">Click any rotation card to see<br>3 years of student evaluations.</p>
                        </div>
                    </div>

                    <!-- Preferences Panel -->
                    <div style="background:#f8f9fa;border-radius:12px;padding:1.25rem;border:2px solid ${_rotPrefList.length > 0 ? '#a5d6a7' : '#e0e0e0'};">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                            <h3 style="margin:0;color:#333;font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">My Preferences</h3>
                            <span id="rot-pref-count" style="background:${_rotPrefList.length > 0 ? '#1B5E20' : '#ccc'};color:white;padding:2px 10px;border-radius:12px;font-size:0.82rem;font-weight:700;">${_rotPrefList.length}/20</span>
                        </div>
                        <div id="rot-pref-panel" style="max-height:420px;overflow-y:auto;margin-bottom:1rem;">${prefPanelContent}</div>
                        ${_rotSubmissionsOpen ? `
                        <button id="rot-submit-btn" onclick="window.rotStudent.submitPreferences()" style="width:100%;padding:12px;background:${_rotPrefList.length > 0 ? '#1B5E20' : '#ccc'};color:white;border:none;border-radius:8px;cursor:${_rotPrefList.length > 0 ? 'pointer' : 'not-allowed'};font-weight:700;font-size:0.95rem;transition:background 0.2s;">
                            ${savedPrefs.length > 0 ? '🔄 Update Preferences' : '✅ Submit Preferences'}
                        </button>
                        ${lastSubmit ? '<p style="text-align:center;font-size:0.78rem;color:#aaa;margin:0.5rem 0 0 0;">Last submitted: ' + lastSubmit + '</p>' : ''}
                        ` : `
                        <div style="text-align:center;padding:0.75rem;background:#f5f5f5;border-radius:8px;color:#bbb;font-size:0.85rem;">🔒 Submissions are closed</div>
                        ${savedPrefs.length > 0 ? '<p style="text-align:center;font-size:0.78rem;color:#aaa;margin:0.5rem 0 0 0;">' + _rotPrefList.length + ' preferences saved</p>' : ''}
                        `}
                    </div>
                </div>
            </div>
        </div>`;
}

function _ratingBar(label, value, color) {
    if (!value) return '';
    color = color || '#1B5E20';
    const pct = Math.min(100, (value / 5) * 100);
    return `<div style="margin-bottom:0.55rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;">
            <span style="font-size:0.78rem;color:#555;">${label}</span>
            <span style="font-size:0.78rem;font-weight:700;color:#333;">${Number(value).toFixed(1)}</span>
        </div>
        <div style="background:#e0e0e0;border-radius:4px;height:5px;overflow:hidden;">
            <div style="width:${pct}%;background:${color};height:100%;border-radius:4px;"></div>
        </div>
    </div>`;
}

async function renderRotEvalPanel(specialty, displayName) {
    const container = document.getElementById('rot-eval-container');
    if (!container) return;
    container.innerHTML = '<div style="text-align:center;padding:1.5rem;color:#aaa;font-size:0.85rem;">Loading evaluations...</div>';
    try {
        const sb = window.SupabaseAuth?.supabase;
        if (!sb) { container.innerHTML = '<div style="padding:1rem;color:#aaa;font-size:0.85rem;text-align:center;">Not connected.</div>'; return; }
        const [histRes, indivRes] = await Promise.all([
            sb.from('rotation_eval_history').select('*').eq('specialty', specialty).order('academic_year', { ascending: false }),
            sb.from('rotation_evaluations').select('rating_overall,rating_learning,rating_preceptor,rating_career,workload_level,would_recommend,highlight').eq('specialty', specialty)
        ]);
        const history = (!histRes.error && histRes.data) ? histRes.data : [];
        const indiv = (!indivRes.error && indivRes.data) ? indivRes.data : [];

        if (history.length === 0 && indiv.length === 0) {
            container.innerHTML = `<div style="text-align:center;padding:1.5rem 1rem;">
                <div style="font-size:1.8rem;margin-bottom:0.4rem;">📊</div>
                <div style="font-weight:700;color:#333;font-size:0.9rem;margin-bottom:0.25rem;">${displayName}</div>
                <p style="color:#bbb;font-size:0.8rem;margin:0;">No evaluation data yet.</p>
            </div>`;
            return;
        }

        const avg = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;
        const vals = k => indiv.map(r => r[k]).filter(v => v !== null && v !== undefined);
        const aggOverall = avg(vals('rating_overall'));
        const aggLearning = avg(vals('rating_learning'));
        const aggPreceptor = avg(vals('rating_preceptor'));
        const aggCareer = avg(vals('rating_career'));
        const recs = indiv.map(r => r.would_recommend).filter(v => v !== null && v !== undefined);
        const aggRecommend = recs.length ? Math.round(recs.filter(Boolean).length / recs.length * 100) : null;

        const latest = history[0];
        const overallRating = aggOverall || latest?.avg_overall;
        const learningRating = aggLearning || latest?.avg_learning;
        const preceptorRating = aggPreceptor || latest?.avg_preceptor;
        const careerRating = aggCareer || latest?.avg_career;
        const recommendPct = aggRecommend !== null ? aggRecommend : latest?.recommend_pct;
        const totalStudents = indiv.length + history.reduce((a, b) => a + (b.total_students || 0), 0);

        const allWorkloads = [...history.map(h => h.workload_level), ...indiv.map(r => r.workload_level)].filter(Boolean);
        const workloadMode = allWorkloads.length ? allWorkloads.sort((a, b) => allWorkloads.filter(v => v === b).length - allWorkloads.filter(v => v === a).length)[0] : null;
        const workloadColor = { 'Light': '#4caf50', 'Moderate': '#ff9800', 'Heavy': '#f44336', 'Very Heavy': '#b71c1c' };

        const highlights = [];
        history.forEach(h => { if (h.highlight_1) highlights.push(h.highlight_1); if (h.highlight_2) highlights.push(h.highlight_2); if (h.highlight_3) highlights.push(h.highlight_3); });
        indiv.forEach(r => { if (r.highlight) highlights.push(r.highlight); });
        const uniqueHighlights = [...new Set(highlights)].slice(0, 3);

        const yearRows = history.map(h => `<div style="display:flex;justify-content:space-between;align-items:center;padding:0.35rem 0;border-bottom:1px solid #f0f0f0;">
            <span style="font-size:0.75rem;color:#666;font-weight:600;">${h.academic_year}</span>
            <div style="display:flex;gap:0.35rem;align-items:center;flex-wrap:wrap;justify-content:flex-end;">
                <span style="color:#f59e0b;font-size:0.78rem;">${h.avg_overall ? '★ ' + Number(h.avg_overall).toFixed(1) : '—'}</span>
                <span style="font-size:0.7rem;color:#aaa;">${h.total_students || 0} students</span>
                ${h.recommend_pct ? `<span style="font-size:0.68rem;background:#e8f5e9;color:#2e7d32;padding:1px 5px;border-radius:8px;">${h.recommend_pct}% rec.</span>` : ''}
            </div>
        </div>`).join('');

        container.innerHTML = `<div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:0.65rem;">
                <div>
                    <div style="font-size:0.68rem;color:#aaa;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Evaluation Preview</div>
                    <div style="font-weight:700;color:#1a1a1a;font-size:0.9rem;margin-top:1px;">${displayName}</div>
                </div>
                ${overallRating ? `<div style="text-align:center;background:linear-gradient(135deg,#1B5E20,#2e7d32);color:white;border-radius:8px;padding:0.35rem 0.65rem;min-width:44px;">
                    <div style="font-size:1.2rem;font-weight:700;line-height:1;">${Number(overallRating).toFixed(1)}</div>
                    <div style="font-size:0.6rem;opacity:0.8;">/ 5.0</div>
                </div>` : ''}
            </div>

            ${totalStudents > 0 ? `<div style="font-size:0.72rem;color:#aaa;margin-bottom:0.65rem;">${totalStudents} students evaluated · ${history.length} year${history.length !== 1 ? 's' : ''} of data</div>` : ''}

            ${overallRating || learningRating || preceptorRating || careerRating ? `<div style="margin-bottom:0.75rem;">
                ${_ratingBar('Overall', overallRating)}
                ${_ratingBar('Learning Quality', learningRating, '#1565C0')}
                ${_ratingBar('Preceptor Quality', preceptorRating, '#6a1b9a')}
                ${_ratingBar('Career Relevance', careerRating, '#e65100')}
            </div>` : ''}

            <div style="display:flex;gap:0.4rem;margin-bottom:0.75rem;flex-wrap:wrap;">
                ${recommendPct !== null ? `<div style="flex:1;min-width:72px;background:#e8f5e9;border-radius:8px;padding:0.5rem;text-align:center;">
                    <div style="font-size:1.05rem;font-weight:700;color:#1B5E20;">${recommendPct}%</div>
                    <div style="font-size:0.65rem;color:#666;">Would Recommend</div>
                </div>` : ''}
                ${workloadMode ? `<div style="flex:1;min-width:72px;background:#f5f5f5;border-radius:8px;padding:0.5rem;text-align:center;">
                    <div style="font-size:0.8rem;font-weight:700;color:${workloadColor[workloadMode] || '#666'};">⚡ ${workloadMode}</div>
                    <div style="font-size:0.65rem;color:#888;">Workload</div>
                </div>` : ''}
            </div>

            ${uniqueHighlights.length > 0 ? `<div style="margin-bottom:0.75rem;">
                <div style="font-size:0.68rem;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:0.35rem;">Student Highlights</div>
                ${uniqueHighlights.map(h => `<div style="display:inline-flex;align-items:center;gap:3px;background:#fff8e1;border:1px solid #ffe082;color:#e65100;font-size:0.72rem;padding:2px 8px;border-radius:10px;margin:2px 2px 2px 0;">✨ ${h}</div>`).join('')}
            </div>` : ''}

            ${yearRows ? `<div>
                <div style="font-size:0.68rem;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:0.35rem;">Year-by-Year</div>
                ${yearRows}
            </div>` : ''}
        </div>`;
    } catch (e) {
        container.innerHTML = '<div style="padding:1rem;color:#aaa;font-size:0.82rem;text-align:center;">Could not load evaluations.</div>';
    }
}

function _renderRotPrefPanel() {
    const panel = document.getElementById('rot-pref-panel');
    if (!panel) return;

    const countBadge = document.getElementById('rot-pref-count');
    if (countBadge) {
        countBadge.textContent = _rotPrefList.length + '/20';
        countBadge.style.background = _rotPrefList.length > 0 ? '#1B5E20' : '#ccc';
    }
    const submitBtn = document.getElementById('rot-submit-btn');
    if (submitBtn) {
        submitBtn.style.background = _rotPrefList.length > 0 ? '#1B5E20' : '#ccc';
        submitBtn.style.cursor = _rotPrefList.length > 0 ? 'pointer' : 'not-allowed';
    }
    const rightPanel = panel.closest('[style*="border-radius:12px"]');
    if (rightPanel) rightPanel.style.borderColor = _rotPrefList.length > 0 ? '#a5d6a7' : '#e0e0e0';

    if (_rotPrefList.length === 0) {
        panel.innerHTML = '<div style="text-align:center;padding:2.5rem 1rem;color:#ccc;"><div style="font-size:2.5rem;margin-bottom:0.75rem;">📋</div><p style="margin:0;font-size:0.88rem;">Click sites on the left to add them here.</p></div>';
        return;
    }

    panel.innerHTML = _rotPrefList.map((p, i) => `
        <div style="background:white;border:1px solid #e0e0e0;border-radius:8px;padding:0.7rem 0.9rem;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.6rem;">
            <span style="background:#1B5E20;color:white;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.8rem;flex-shrink:0;">${i + 1}</span>
            <div style="flex:1;min-width:0;">
                <div style="font-weight:600;color:#1a1a1a;font-size:0.88rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.site_name}</div>
                <div style="font-size:0.75rem;color:#aaa;">${p.specialty}</div>
            </div>
            <div style="display:flex;gap:3px;flex-shrink:0;">
                <button onclick="window.rotStudent.moveUp(${i})" ${i === 0 ? 'disabled' : ''} style="background:#f5f5f5;border:1px solid #ddd;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:0.75rem;opacity:${i === 0 ? '0.3' : '1'};">↑</button>
                <button onclick="window.rotStudent.moveDown(${i})" ${i === _rotPrefList.length - 1 ? 'disabled' : ''} style="background:#f5f5f5;border:1px solid #ddd;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:0.75rem;opacity:${i === _rotPrefList.length - 1 ? '0.3' : '1'};">↓</button>
                <button onclick="window.rotStudent.removeFromPref(${i})" style="background:#ffebee;border:none;color:#c62828;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:0.75rem;">✕</button>
            </div>
        </div>`).join('');
}

function _updateRotSiteButtons() {
    const selIds = new Set(_rotPrefList.map(p => p.site_id));
    document.querySelectorAll('[data-site-btn]').forEach(btn => {
        const id = parseInt(btn.getAttribute('data-site-btn'));
        const isSel = selIds.has(id);
        btn.textContent = isSel ? '✓ Added' : '+ Add to Preferences';
        btn.style.background = isSel ? '#e8f5e9' : '#1B5E20';
        btn.style.color = isSel ? '#2e7d32' : 'white';
        btn.disabled = isSel;
        btn.style.cursor = isSel ? 'default' : 'pointer';
        const card = document.querySelector('[data-site-card="' + id + '"]');
        if (card) card.style.borderColor = isSel ? '#a5d6a7' : '#e0e0e0';
    });
}

window.rotStudent = {
    previewRotation(siteId, specialty, displayName) {
        // Highlight selected card
        document.querySelectorAll('[data-site-card]').forEach(c => {
            c.style.outline = '';
            c.style.boxShadow = '';
        });
        const card = document.querySelector('[data-site-card="' + siteId + '"]');
        if (card) { card.style.outline = '2px solid #1B5E20'; card.style.boxShadow = '0 4px 14px rgba(27,94,32,0.18)'; }
        // Update eval container border
        const container = document.getElementById('rot-eval-container');
        if (container) container.style.border = '2px solid #a5d6a7';
        renderRotEvalPanel(specialty, displayName);
    },

    addToPref(siteId, siteName, specialty) {
        if (_rotPrefList.length >= 20) { alert('Maximum 20 preferences allowed.'); return; }
        if (_rotPrefList.find(p => p.site_id === siteId)) return;
        _rotPrefList.push({ site_id: siteId, site_name: siteName, specialty });
        _renderRotPrefPanel();
        _updateRotSiteButtons();
    },
    removeFromPref(index) {
        _rotPrefList.splice(index, 1);
        _renderRotPrefPanel();
        _updateRotSiteButtons();
    },
    moveUp(index) {
        if (index <= 0) return;
        [_rotPrefList[index - 1], _rotPrefList[index]] = [_rotPrefList[index], _rotPrefList[index - 1]];
        _renderRotPrefPanel();
    },
    moveDown(index) {
        if (index >= _rotPrefList.length - 1) return;
        [_rotPrefList[index], _rotPrefList[index + 1]] = [_rotPrefList[index + 1], _rotPrefList[index]];
        _renderRotPrefPanel();
    },
    async submitPreferences() {
        if (_rotPrefList.length === 0) { alert('Please add at least one preference before submitting.'); return; }
        if (!confirm('Submit your ' + _rotPrefList.length + ' rotation preference(s)? You can update them later while submissions are open.')) return;
        try {
            const sb = window.SupabaseAuth?.supabase;
            if (!sb || !_rotCurrentUserId) { alert('Not authenticated. Please log in again.'); return; }
            const { error: delErr } = await sb.from('rotation_preferences').delete().eq('student_id', _rotCurrentUserId);
            if (delErr) throw delErr;
            const now = new Date().toISOString();
            const prefs = _rotPrefList.map((p, i) => ({ student_id: _rotCurrentUserId, site_id: p.site_id, preference_rank: i + 1, submitted_at: now, updated_at: now }));
            const { error: insErr } = await sb.from('rotation_preferences').insert(prefs);
            if (insErr) throw insErr;
            alert('✅ Your ' + _rotPrefList.length + ' rotation preferences have been submitted!');
            renderRotationPreferences();
        } catch (e) { alert('Error submitting preferences: ' + e.message); }
    }
};

// ============================================================
// INITIALIZE: Load submitted tickets from localStorage on startup
// ============================================================
const initializeSubmittedTickets = () => {
    const submittedRaw = JSON.parse(localStorage.getItem('studentSubmittedTickets') || '[]');
    if (submittedRaw.length > 0) {
        console.log(`📥 [INIT] Loading ${submittedRaw.length} submitted tickets from localStorage`);
        const submitted = submittedRaw.map(t => deserializeTicket(t));
        // Add submitted tickets to the front of the tickets array
        StudentPortalManager.tickets.unshift(...submitted);
        console.log(`✅ [INIT] Merged submitted tickets. Total tickets now: ${StudentPortalManager.tickets.length}`);
    }
};

// Call initialization on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSubmittedTickets);
} else {
    // Page already loaded
    initializeSubmittedTickets();
}

// Expose StudentPortalManager to global window object so admin hub can access it
window.StudentPortalManager = StudentPortalManager;
