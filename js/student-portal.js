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

// Student Portal Data & State Management
const StudentPortalManager = {
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

    // Sample Tickets (for tracking)
    tickets: [
        {
            ticketId: 'COP-TICKET-2026-000001',
            studentId: '441210049',
            title: 'Request Training Letter for Internship',
            requestType: 'letter',
            status: 'in-progress',
            priority: 'high',
            department: 'academic',
            submissionDate: new Date(2026, 0, 28, 10, 30),
            lastUpdate: new Date(2026, 0, 29, 14, 15),
            assignedTo: { name: 'Dr. Fatima Al-Hajri', email: 'f.alhajri@ksau-hs.edu.sa' },
            dueDate: new Date(2026, 1, 5),
            sla: '3 working days',
            messages: [
                {
                    id: 1,
                    sender: 'student',
                    senderName: 'Bishier Alfadhl',
                    senderRole: 'Student',
                    timestamp: new Date(2026, 0, 28, 10, 30),
                    message: 'Hi, I need a training letter for my internship application at XYZ Company. Needed by Feb 5.',
                    attachments: []
                },
                {
                    id: 2,
                    sender: 'admin',
                    senderName: 'Dr. Fatima Al-Hajri',
                    senderRole: 'Academic Affairs Coordinator',
                    timestamp: new Date(2026, 0, 28, 15, 45),
                    message: 'Hello Bishier, I received your request. Can you please provide the following details:\n\n1. Specific details about the internship\n2. Company name and contact information\n3. Required format (if any)',
                    attachments: []
                },
                {
                    id: 3,
                    sender: 'student',
                    senderName: 'Bishier Alfadhl',
                    senderRole: 'Student',
                    timestamp: new Date(2026, 0, 29, 9, 20),
                    message: 'Sure! Details attached. Let me know if you need anything else.',
                    attachments: [{ name: 'internship_details.pdf', size: '245 KB', type: 'pdf' }]
                },
                {
                    id: 4,
                    sender: 'admin',
                    senderName: 'Dr. Fatima Al-Hajri',
                    senderRole: 'Academic Affairs Coordinator',
                    timestamp: new Date(2026, 0, 29, 14, 15),
                    message: 'Perfect! I\'m preparing your letter now. It should be ready by tomorrow. You\'ll receive it via email and can also download it from your portal.',
                    attachments: []
                }
            ]
        },
        {
            ticketId: 'COP-TICKET-2026-000002',
            studentId: '441210049',
            title: 'Rotation Site Change Request',
            requestType: 'clinical',
            status: 'submitted',
            priority: 'medium',
            department: 'clinical',
            submissionDate: new Date(2026, 0, 20, 11, 0),
            lastUpdate: new Date(2026, 0, 29, 14, 0),
            assignedTo: { name: 'Ahmed Al-Dosari', email: 'a.aldosari@ksau-hs.edu.sa' },
            dueDate: new Date(2026, 1, 1),
            sla: '5 working days',
            messages: [
                {
                    id: 1,
                    sender: 'student',
                    senderName: 'Bishier Alfadhl',
                    senderRole: 'Student',
                    timestamp: new Date(2026, 0, 20, 11, 0),
                    message: 'I would like to change my rotation site from Hospital A to Hospital B due to scheduling conflicts.',
                    attachments: []
                },
                {
                    id: 2,
                    sender: 'admin',
                    senderName: 'Ahmed Al-Dosari',
                    senderRole: 'Clinical Affairs Coordinator',
                    timestamp: new Date(2026, 0, 20, 15, 30),
                    message: 'Request received. I will contact Hospital B to confirm availability.',
                    attachments: []
                }
            ]
        },
        {
            ticketId: 'COP-TICKET-2026-000003',
            studentId: '441210049',
            title: 'Transcript Request for Postgraduate Studies',
            requestType: 'letter',
            status: 'in-progress',
            priority: 'high',
            department: 'academic',
            submissionDate: new Date(2026, 0, 27, 9, 0),
            lastUpdate: new Date(2026, 0, 29, 10, 0),
            assignedTo: { name: 'Dr. Sarah Al-Zahrani', email: 's.alzahrani@ksau-hs.edu.sa' },
            dueDate: new Date(2026, 1, 3),
            sla: '3 working days',
            messages: [
                {
                    id: 1,
                    sender: 'student',
                    senderName: 'Bishier Alfadhl',
                    senderRole: 'Student',
                    timestamp: new Date(2026, 0, 27, 9, 0),
                    message: 'I need an official transcript for my postgraduate application. Deadline is Feb 15.',
                    attachments: []
                },
                {
                    id: 2,
                    sender: 'admin',
                    senderName: 'Dr. Sarah Al-Zahrani',
                    senderRole: 'Academic Affairs Coordinator',
                    timestamp: new Date(2026, 0, 27, 11, 30),
                    message: 'Request received. Preparing your transcript now.',
                    attachments: []
                }
            ]
        },
        {
            ticketId: 'COP-TICKET-2026-000004',
            studentId: '441210049',
            title: 'LMS Portal Access Issue',
            requestType: 'it-support',
            status: 'closed',
            priority: 'critical',
            department: 'it',
            submissionDate: new Date(2026, 0, 15, 8, 0),
            lastUpdate: new Date(2026, 0, 15, 10, 30),
            assignedTo: { name: 'Muhammad Al-Otaibi', email: 'm.alotaibi@ksau-hs.edu.sa' },
            dueDate: new Date(2026, 0, 15),
            sla: '2 hours for critical issues',
            messages: [
                {
                    id: 1,
                    sender: 'student',
                    senderName: 'Bishier Alfadhl',
                    senderRole: 'Student',
                    timestamp: new Date(2026, 0, 15, 8, 0),
                    message: 'I cannot access the LMS portal. Getting "Access Denied" error. Please help ASAP as I need to submit assignment today.',
                    attachments: []
                },
                {
                    id: 2,
                    sender: 'admin',
                    senderName: 'Muhammad Al-Otaibi',
                    senderRole: 'IT Support',
                    timestamp: new Date(2026, 0, 15, 8, 45),
                    message: 'Working on this. Let me check your account permissions.',
                    attachments: []
                },
                {
                    id: 3,
                    sender: 'admin',
                    senderName: 'Muhammad Al-Otaibi',
                    senderRole: 'IT Support',
                    timestamp: new Date(2026, 0, 15, 10, 30),
                    message: 'Issue resolved! Your access has been restored. Please clear your browser cache and try again. You should be able to access now.',
                    attachments: []
                }
            ]
        }
    ],

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
    }
};

// ============================================================
// RENDER HOME PAGE - TICKET OVERVIEW
// ============================================================

function renderStudentPortalHome() {
    const root = document.getElementById('app-root');
    const { formatDate, formatTime } = StudentPortalManager;
    
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

    // Count tickets by status
    const totalTickets = StudentPortalManager.tickets.length;
    const activeTickets = StudentPortalManager.tickets.filter(t => ['submitted', 'in-progress'].includes(t.status)).length;
    const pendingResponse = StudentPortalManager.tickets.filter(t => t.status === 'waiting-student').length;
    const resolvedTickets = StudentPortalManager.tickets.filter(t => ['approved', 'closed', 'resolved'].includes(t.status)).length;

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

    // Show recent active tickets
    const activeTickets_list = StudentPortalManager.tickets.filter(t => ['submitted', 'in-progress'].includes(t.status)).slice(0, 3);
    
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

    // Get recent messages from latest ticket
    if (StudentPortalManager.tickets.length > 0) {
        const latestTicket = StudentPortalManager.tickets[0];
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
                <button class="filter-btn active" onclick="StudentPortal.filterTickets('all')">All (${StudentPortalManager.tickets.length})</button>
                <button class="filter-btn" onclick="StudentPortal.filterTickets('active')">Active</button>
                <button class="filter-btn" onclick="StudentPortal.filterTickets('resolved')">Resolved</button>
                <button class="filter-btn" onclick="StudentPortal.filterTickets('closed')">Closed</button>
            </div>
        </section>

        <!-- TICKETS LIST -->
        <section class="home-section tickets-container">
    `;

    StudentPortalManager.tickets.forEach(ticket => {
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
        
        const tickets = StudentPortalManager.tickets;
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
// EXPORT FOR USE IN MAIN APP
// ============================================================

window.StudentPortal = {
    renderHome: async () => {
        // Fetch real tickets from backend
        try {
            const studentId = StudentPortalManager.currentStudent.studentId;
            const tickets = await StudentPortalAPI.getStudentTickets(studentId);
            // Only update if we got real data
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
            // Otherwise keep the static sample data
        } catch (error) {
            console.log('Backend not available, using sample data');
        }
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
            
            // Add new ticket to the beginning of the list
            StudentPortalManager.tickets.unshift(newTicket);
            
            alert(`✅ Request submitted successfully!\n\nTicket ID: ${ticketId}`);
            
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
    showAllTickets: async () => {
        document.getElementById('page-title').textContent = 'My Tickets';
        // Fetch real tickets from backend
        try {
            const studentId = StudentPortalManager.currentStudent.studentId;
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
    switchUserRole: (role) => {
        currentUserRole = role;
        alert(`Switched to ${role === 'admin' ? 'Admin' : 'Student'} mode`);
        StudentPortal.renderHome();
    }
};
