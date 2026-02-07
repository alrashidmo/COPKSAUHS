// ============================================================
// STUDENT PORTAL - WITH API INTEGRATION
// Complete implementation with backend API calls
// ============================================================

// ============================================================
// API CONFIGURATION
// ============================================================

const API_BASE_URL = process.env.NODE_ENV === 'production' 
    ? 'https://your-api-server.com/api'
    : 'http://localhost:5000/api';

// ============================================================
// API SERVICE FUNCTIONS
// ============================================================

const StudentPortalAPI = {
    async createTicket(ticketData) {
        const response = await fetch(`${API_BASE_URL}/tickets/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ticketData)
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || 'Failed to create ticket');
        return result;
    },

    async getStudentTickets(studentId, status = 'all') {
        const url = new URL(`${API_BASE_URL}/tickets/student/${studentId}`);
        if (status !== 'all') url.searchParams.append('status', status);
        const response = await fetch(url.toString());
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || 'Failed to fetch tickets');
        return result.tickets;
    },

    async getTicketDetail(ticketId) {
        const response = await fetch(`${API_BASE_URL}/tickets/${ticketId}`);
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || 'Failed to fetch ticket');
        return result;
    },

    async sendMessage(ticketId, messageData) {
        const response = await fetch(`${API_BASE_URL}/tickets/${ticketId}/messages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(messageData)
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || 'Failed to send message');
        return result;
    },

    async getRequestTypes() {
        try {
            const response = await fetch(`${API_BASE_URL}/request-types`);
            const result = await response.json();
            if (!response.ok) throw new Error();
            return result.requestTypes;
        } catch {
            return StudentPortalManager.requestTypes;
        }
    },

    async getDepartments() {
        try {
            const response = await fetch(`${API_BASE_URL}/departments`);
            const result = await response.json();
            if (!response.ok) throw new Error();
            return result.departments;
        } catch {
            return StudentPortalManager.departments;
        }
    },

    async getStudentProfile(studentId) {
        try {
            const response = await fetch(`${API_BASE_URL}/students/${studentId}`);
            const result = await response.json();
            if (!response.ok) throw new Error();
            return result.student;
        } catch {
            return StudentPortalManager.currentStudent;
        }
    },

    async checkHealth() {
        try {
            const response = await fetch(`${API_BASE_URL}/health`);
            const result = await response.json();
            return result.success;
        } catch {
            return false;
        }
    }
};

window.StudentPortalAPI = StudentPortalAPI;

// ============================================================
// STUDENT PORTAL MANAGER
// ============================================================

const StudentPortalManager = {
    // ========================================================
    // STATE
    // ========================================================
    currentStudent: {
        studentId: '441210049',
        firstName: 'أحمد',
        lastName: 'الراشد',
        email: '441210049@stu.ksu.edu.sa',
        program: 'PharmD',
        gpa: 3.85
    },

    currentPage: 'home',
    lastTickets: [],
    apiAvailable: false,

    requestTypes: [
        { requestTypeId: 1, name: 'رسالة دعم أكاديمي', icon: '📜', slaHours: 24 },
        { requestTypeId: 2, name: 'مشكلة إكلينيكية', icon: '🏥', slaHours: 2 },
        { requestTypeId: 3, name: 'استفسار أكاديمي', icon: '❓', slaHours: 48 },
        { requestTypeId: 4, name: 'دعم تقني', icon: '💻', slaHours: 4 },
        { requestTypeId: 5, name: 'طلب فعالية', icon: '📅', slaHours: 72 },
        { requestTypeId: 6, name: 'استفسار عام', icon: '📝', slaHours: 24 }
    ],

    departments: [
        { departmentId: 1, name: 'شؤون الطلاب', responsibleOfficer: 'د. محمد الأحمد', avgResponseDays: 1 },
        { departmentId: 2, name: 'الصيدلة السريرية', responsibleOfficer: 'د. فاطمة الحربي', avgResponseDays: 1 },
        { departmentId: 3, name: 'تقنية المعلومات', responsibleOfficer: 'أ. علي السلمان', avgResponseDays: 2 },
        { departmentId: 4, name: 'الشؤون الإدارية', responsibleOfficer: 'أ. سارة الشهري', avgResponseDays: 1 },
        { departmentId: 5, name: 'الشؤون الأكاديمية', responsibleOfficer: 'د. خالد العتيبي', avgResponseDays: 2 }
    ],

    // ========================================================
    // INITIALIZATION
    // ========================================================
    async init() {
        console.log('🚀 Student Portal initializing...');
        this.apiAvailable = await StudentPortalAPI.checkHealth();
        
        if (this.apiAvailable) {
            console.log('✅ Backend API is available');
            try {
                this.lastTickets = await StudentPortalAPI.getStudentTickets(this.currentStudent.studentId);
            } catch (error) {
                console.warn('⚠️ Failed to load tickets:', error);
                this.lastTickets = [];
            }
        } else {
            console.log('⚠️ Backend API not available - using fallback data');
            this.lastTickets = [];
        }

        this.render();
    },

    // ========================================================
    // RENDER MAIN INTERFACE
    // ========================================================
    render() {
        const app = document.getElementById('app');
        
        if (this.currentPage === 'home') {
            this.renderHome();
        } else if (this.currentPage === 'request') {
            this.renderRequestForm(this.currentRequestTypeId);
        } else if (this.currentPage === 'tickets') {
            this.renderTickets();
        } else if (this.currentPage === 'ticket-detail') {
            this.renderTicketDetail(this.currentTicketId);
        } else if (this.currentPage === 'profile') {
            this.renderProfile();
        }
    },

    // ========================================================
    // HOME PAGE
    // ========================================================
    renderHome() {
        const app = document.getElementById('app');
        
        const html = `
            <div class="student-portal-container">
                <header class="sp-header">
                    <div class="sp-header-content">
                        <h1>🎓 نظام طلبات الدعم الطلابي</h1>
                        <p>مرحباً ${this.currentStudent.firstName} ${this.currentStudent.lastName}</p>
                    </div>
                    <button onclick="StudentPortalManager.logout()" class="logout-btn">تسجيل الخروج</button>
                </header>

                <nav class="sp-nav">
                    <button class="nav-btn active" onclick="StudentPortalManager.currentPage = 'home'; StudentPortalManager.render();">
                        🏠 الرئيسية
                    </button>
                    <button class="nav-btn" onclick="StudentPortalManager.currentPage = 'tickets'; StudentPortalManager.render();">
                        📋 طلباتي (${this.lastTickets.length})
                    </button>
                    <button class="nav-btn" onclick="StudentPortalManager.currentPage = 'profile'; StudentPortalManager.render();">
                        👤 ملفي الشخصي
                    </button>
                </nav>

                <main class="sp-main">
                    <section class="sp-section">
                        <h2>🆕 قدم طلباً جديداً</h2>
                        <div class="request-types-grid">
                            ${this.requestTypes.map(type => `
                                <div class="request-type-card" onclick="StudentPortalManager.openRequestForm(${type.requestTypeId})">
                                    <div class="rtc-icon">${type.icon}</div>
                                    <h3>${type.name}</h3>
                                    <p>⏱️ وقت الرد: ${type.slaHours} ساعة</p>
                                </div>
                            `).join('')}
                        </div>
                    </section>

                    <section class="sp-section">
                        <h2>📊 ملخص الطلبات</h2>
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-number">${this.lastTickets.filter(t => t.status === 'open').length}</div>
                                <div class="stat-label">طلبات مفتوحة</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">${this.lastTickets.filter(t => t.status === 'in_progress').length}</div>
                                <div class="stat-label">قيد المعالجة</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">${this.lastTickets.filter(t => t.status === 'closed').length}</div>
                                <div class="stat-label">طلبات مكتملة</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">${this.lastTickets.length}</div>
                                <div class="stat-label">إجمالي الطلبات</div>
                            </div>
                        </div>
                    </section>

                    ${this.lastTickets.length > 0 ? `
                        <section class="sp-section">
                            <h2>📝 آخر الطلبات</h2>
                            <div class="tickets-list">
                                ${this.lastTickets.slice(0, 3).map(ticket => `
                                    <div class="ticket-item" onclick="StudentPortalManager.openTicket('${ticket.ticketId}')">
                                        <div class="ticket-header">
                                            <span class="ticket-id">${ticket.ticketId}</span>
                                            <span class="ticket-status status-${ticket.status}">${this.getStatusLabel(ticket.status)}</span>
                                        </div>
                                        <h4>${ticket.title}</h4>
                                        <p>${ticket.description.substring(0, 80)}...</p>
                                        <div class="ticket-footer">
                                            <span>📅 ${new Date(ticket.createdDate).toLocaleDateString('ar-SA')}</span>
                                            <span>🔴 ${ticket.priority}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    ` : `
                        <section class="sp-section">
                            <p class="empty-message">📭 لا توجد طلبات حتى الآن</p>
                        </section>
                    `}
                </main>
            </div>
        `;

        app.innerHTML = html;
        this.currentPage = 'home';
    },

    // ========================================================
    // REQUEST FORM
    // ========================================================
    renderRequestForm(typeId) {
        const app = document.getElementById('app');
        const requestType = this.requestTypes.find(t => t.requestTypeId === typeId);

        if (!requestType) return;

        const html = `
            <div class="student-portal-container">
                <header class="sp-header">
                    <button onclick="StudentPortalManager.renderHome()" class="back-btn">← رجوع</button>
                    <h1>${requestType.icon} ${requestType.name}</h1>
                </header>

                <main class="sp-main">
                    <section class="sp-section">
                        <form id="requestForm" class="request-form">
                            <div class="form-group">
                                <label for="title">عنوان الطلب <span class="required">*</span></label>
                                <input type="text" id="title" name="title" required placeholder="أدخل عنوان الطلب">
                            </div>

                            <div class="form-group">
                                <label for="description">تفاصيل الطلب <span class="required">*</span></label>
                                <textarea id="description" name="description" required placeholder="اشرح المشكلة أو الطلب بالتفصيل"></textarea>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="priority">الأولوية <span class="required">*</span></label>
                                    <select id="priority" name="priority" required>
                                        <option value="low">منخفضة</option>
                                        <option value="medium" selected>متوسطة</option>
                                        <option value="high">عالية</option>
                                        <option value="urgent">عاجلة</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="contact">وسيلة التواصل <span class="required">*</span></label>
                                    <select id="contact" name="contact" required>
                                        <option value="email" selected>البريد الإلكتروني</option>
                                        <option value="phone">الهاتف</option>
                                        <option value="whatsapp">واتس آب</option>
                                    </select>
                                </div>
                            </div>

                            <div class="info-box">
                                <p>ℹ️ <strong>وقت الاستجابة المتوقع:</strong> ${requestType.slaHours} ساعة</p>
                            </div>

                            <button type="submit" class="submit-btn">📤 إرسال الطلب</button>
                        </form>
                    </section>
                </main>
            </div>
        `;

        app.innerHTML = html;
        this.currentRequestTypeId = typeId;
        this.currentPage = 'request';

        // ========================================================
        // FORM SUBMISSION - WITH API
        // ========================================================
        document.getElementById('requestForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const form = e.target;
            const title = form.querySelector('input[name="title"]').value;
            const description = form.querySelector('textarea[name="description"]').value;
            const priority = form.querySelector('select[name="priority"]').value;
            const contactMethod = form.querySelector('select[name="contact"]').value;
            
            try {
                const submitBtn = form.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = '⏳ جاري الإرسال...';

                // CALL API TO CREATE TICKET
                const result = await StudentPortalAPI.createTicket({
                    studentId: this.currentStudent.studentId,
                    title,
                    description,
                    requestTypeId: typeId,
                    priority,
                    contactMethod
                });

                alert(`✅ تم استقبال طلبك بنجاح!\n\nرقم الطلب: ${result.ticketId}\nتاريخ الانتهاء المتوقع: ${result.dueDate}`);
                
                // Refresh tickets
                this.lastTickets = await StudentPortalAPI.getStudentTickets(this.currentStudent.studentId);
                
                // Return to home
                this.renderHome();
                
            } catch (error) {
                alert(`❌ حدث خطأ: ${error.message}`);
                console.error('Form submission error:', error);
            } finally {
                const submitBtn = form.querySelector('button[type="submit"]');
                submitBtn.disabled = false;
                submitBtn.textContent = '📤 إرسال الطلب';
            }
        });
    },

    // ========================================================
    // TICKETS LIST
    // ========================================================
    renderTickets() {
        const app = document.getElementById('app');

        const html = `
            <div class="student-portal-container">
                <header class="sp-header">
                    <button onclick="StudentPortalManager.renderHome()" class="back-btn">← رجوع</button>
                    <h1>📋 طلباتي</h1>
                </header>

                <main class="sp-main">
                    <section class="sp-section">
                        <div class="filter-buttons">
                            <button class="filter-btn active" onclick="StudentPortalManager.filterStatus = 'all'; StudentPortalManager.renderTickets();">الكل (${this.lastTickets.length})</button>
                            <button class="filter-btn" onclick="StudentPortalManager.filterStatus = 'open'; StudentPortalManager.renderTickets();">مفتوح (${this.lastTickets.filter(t => t.status === 'open').length})</button>
                            <button class="filter-btn" onclick="StudentPortalManager.filterStatus = 'in_progress'; StudentPortalManager.renderTickets();">قيد المعالجة (${this.lastTickets.filter(t => t.status === 'in_progress').length})</button>
                            <button class="filter-btn" onclick="StudentPortalManager.filterStatus = 'closed'; StudentPortalManager.renderTickets();">مكتمل (${this.lastTickets.filter(t => t.status === 'closed').length})</button>
                        </div>

                        ${this.lastTickets.length > 0 ? `
                            <div class="tickets-list">
                                ${this.lastTickets.map(ticket => `
                                    <div class="ticket-item" onclick="StudentPortalManager.openTicket('${ticket.ticketId}')">
                                        <div class="ticket-header">
                                            <span class="ticket-id">${ticket.ticketId}</span>
                                            <span class="ticket-status status-${ticket.status}">${this.getStatusLabel(ticket.status)}</span>
                                        </div>
                                        <h4>${ticket.title}</h4>
                                        <p>${ticket.description.substring(0, 100)}...</p>
                                        <div class="ticket-footer">
                                            <span>📅 ${new Date(ticket.createdDate).toLocaleDateString('ar-SA')}</span>
                                            <span>🔴 ${ticket.priority}</span>
                                            <span>⏱️ متوقع: ${new Date(ticket.dueDate).toLocaleDateString('ar-SA')}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : `
                            <p class="empty-message">📭 لا توجد طلبات</p>
                        `}
                    </section>
                </main>
            </div>
        `;

        app.innerHTML = html;
        this.currentPage = 'tickets';
    },

    // ========================================================
    // TICKET DETAIL WITH MESSAGES
    // ========================================================
    async renderTicketDetail(ticketId) {
        const app = document.getElementById('app');
        
        try {
            const ticketData = await StudentPortalAPI.getTicketDetail(ticketId);
            const ticket = ticketData.ticket;
            const messages = ticketData.messages || [];

            const html = `
                <div class="student-portal-container">
                    <header class="sp-header">
                        <button onclick="StudentPortalManager.renderTickets()" class="back-btn">← رجوع</button>
                        <h1>📋 تفاصيل الطلب</h1>
                    </header>

                    <main class="sp-main">
                        <section class="sp-section ticket-detail">
                            <div class="ticket-detail-header">
                                <h2>${ticket.title}</h2>
                                <span class="ticket-status status-${ticket.status}">${this.getStatusLabel(ticket.status)}</span>
                            </div>

                            <div class="ticket-info-grid">
                                <div class="info-item">
                                    <strong>رقم الطلب:</strong>
                                    <span>${ticket.ticketId}</span>
                                </div>
                                <div class="info-item">
                                    <strong>الحالة:</strong>
                                    <span>${this.getStatusLabel(ticket.status)}</span>
                                </div>
                                <div class="info-item">
                                    <strong>الأولوية:</strong>
                                    <span>${ticket.priority}</span>
                                </div>
                                <div class="info-item">
                                    <strong>تاريخ الإنشاء:</strong>
                                    <span>${new Date(ticket.createdDate).toLocaleDateString('ar-SA')}</span>
                                </div>
                                <div class="info-item">
                                    <strong>الموعد المتوقع:</strong>
                                    <span>${new Date(ticket.dueDate).toLocaleDateString('ar-SA')}</span>
                                </div>
                                <div class="info-item">
                                    <strong>الجهة المختصة:</strong>
                                    <span>${ticket.departmentId ? this.departments.find(d => d.departmentId === ticket.departmentId)?.name : 'قيد التعيين'}</span>
                                </div>
                            </div>

                            <div class="ticket-description">
                                <h3>تفاصيل الطلب:</h3>
                                <p>${ticket.description}</p>
                            </div>
                        </section>

                        <section class="sp-section messages-section">
                            <h3>💬 الرسائل والردود</h3>
                            <div class="messages-container">
                                ${messages.length > 0 ? messages.map(msg => `
                                    <div class="message ${msg.senderType === 'student' ? 'message-student' : 'message-staff'}">
                                        <div class="message-header">
                                            <strong>${msg.senderName}</strong>
                                            <small>${new Date(msg.sentDate).toLocaleDateString('ar-SA', { 
                                                hour: '2-digit', 
                                                minute: '2-digit'
                                            })}</small>
                                        </div>
                                        <div class="message-body">
                                            ${msg.message}
                                        </div>
                                    </div>
                                `).join('') : `
                                    <p class="empty-message">لا توجد رسائل بعد</p>
                                `}
                            </div>
                        </section>

                        ${ticket.status !== 'closed' ? `
                            <section class="sp-section">
                                <h3>📨 إضافة رد</h3>
                                <form id="replyForm" class="reply-form">
                                    <textarea id="reply" name="reply" required placeholder="اكتب ردك أو سؤالك..."></textarea>
                                    <button type="submit" class="submit-btn">📤 إرسال الرد</button>
                                </form>
                            </section>
                        ` : `
                            <div class="info-box">
                                <p>✅ تم إغلاق هذا الطلب</p>
                            </div>
                        `}
                    </main>
                </div>
            `;

            app.innerHTML = html;
            this.currentPage = 'ticket-detail';
            this.currentTicketId = ticketId;

            // REPLY FORM SUBMISSION - WITH API
            if (ticket.status !== 'closed') {
                document.getElementById('replyForm').addEventListener('submit', async (e) => {
                    e.preventDefault();
                    
                    const form = e.target;
                    const message = form.querySelector('textarea[name="reply"]').value;
                    
                    try {
                        const submitBtn = form.querySelector('button[type="submit"]');
                        submitBtn.disabled = true;
                        submitBtn.textContent = '⏳ جاري الإرسال...';

                        // CALL API TO SEND MESSAGE
                        await StudentPortalAPI.sendMessage(ticketId, {
                            senderType: 'student',
                            senderName: `${this.currentStudent.firstName} ${this.currentStudent.lastName}`,
                            senderEmail: this.currentStudent.email,
                            senderRole: 'Student',
                            message
                        });

                        alert('✅ تم إرسال ردك بنجاح!');
                        
                        // Refresh ticket detail
                        this.renderTicketDetail(ticketId);
                        
                    } catch (error) {
                        alert(`❌ خطأ: ${error.message}`);
                        console.error('Reply error:', error);
                    } finally {
                        const submitBtn = form.querySelector('button[type="submit"]');
                        submitBtn.disabled = false;
                        submitBtn.textContent = '📤 إرسال الرد';
                    }
                });
            }

        } catch (error) {
            app.innerHTML = `
                <div class="student-portal-container">
                    <header class="sp-header">
                        <button onclick="StudentPortalManager.renderTickets()" class="back-btn">← رجوع</button>
                    </header>
                    <main class="sp-main">
                        <section class="sp-section">
                            <p class="error-message">❌ خطأ: ${error.message}</p>
                        </section>
                    </main>
                </div>
            `;
        }
    },

    // ========================================================
    // PROFILE PAGE
    // ========================================================
    renderProfile() {
        const app = document.getElementById('app');

        const html = `
            <div class="student-portal-container">
                <header class="sp-header">
                    <button onclick="StudentPortalManager.renderHome()" class="back-btn">← رجوع</button>
                    <h1>👤 ملفي الشخصي</h1>
                </header>

                <main class="sp-main">
                    <section class="sp-section profile-section">
                        <div class="profile-header">
                            <div class="profile-avatar">👨‍🎓</div>
                            <div class="profile-name">
                                <h2>${this.currentStudent.firstName} ${this.currentStudent.lastName}</h2>
                                <p>${this.currentStudent.studentId}</p>
                            </div>
                        </div>

                        <div class="profile-info-grid">
                            <div class="profile-item">
                                <strong>البريد الإلكتروني:</strong>
                                <p>${this.currentStudent.email}</p>
                            </div>
                            <div class="profile-item">
                                <strong>البرنامج:</strong>
                                <p>${this.currentStudent.program}</p>
                            </div>
                            <div class="profile-item">
                                <strong>المعدل التراكمي:</strong>
                                <p>${this.currentStudent.gpa.toFixed(2)}</p>
                            </div>
                            <div class="profile-item">
                                <strong>رقم الطالب:</strong>
                                <p>${this.currentStudent.studentId}</p>
                            </div>
                        </div>
                    </section>

                    <section class="sp-section">
                        <h3>📊 إحصائيات الطلبات</h3>
                        <div class="stats-grid">
                            <div class="stat-card">
                                <div class="stat-number">${this.lastTickets.length}</div>
                                <div class="stat-label">إجمالي الطلبات</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">${this.lastTickets.filter(t => t.status === 'open').length}</div>
                                <div class="stat-label">طلبات مفتوحة</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">${this.lastTickets.filter(t => t.status === 'closed').length}</div>
                                <div class="stat-label">طلبات مكتملة</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">${Math.round((this.lastTickets.filter(t => t.status === 'closed').length / Math.max(this.lastTickets.length, 1)) * 100)}%</div>
                                <div class="stat-label">معدل الإتمام</div>
                            </div>
                        </div>
                    </section>

                    <section class="sp-section">
                        <h3>🔐 الأمان والخصوصية</h3>
                        <div class="settings-group">
                            <label class="setting-item">
                                <input type="checkbox" checked>
                                تفعيل إشعارات البريد الإلكتروني
                            </label>
                            <label class="setting-item">
                                <input type="checkbox" checked>
                                إظهار حالة الطلبات في الملف الشخصي
                            </label>
                        </div>
                    </section>
                </main>
            </div>
        `;

        app.innerHTML = html;
        this.currentPage = 'profile';
    },

    // ========================================================
    // HELPER METHODS
    // ========================================================
    getStatusLabel(status) {
        const statusLabels = {
            'open': '🔴 مفتوح',
            'in_progress': '🟡 قيد المعالجة',
            'closed': '🟢 مكتمل',
            'pending': '⏳ قيد الانتظار'
        };
        return statusLabels[status] || status;
    },

    openRequestForm(typeId) {
        this.currentRequestTypeId = typeId;
        this.renderRequestForm(typeId);
    },

    openTicket(ticketId) {
        this.currentTicketId = ticketId;
        this.renderTicketDetail(ticketId);
    },

    logout() {
        if (confirm('هل تريد تسجيل الخروج؟')) {
            alert('تم تسجيل الخروج بنجاح');
            // Reset to login or home
            this.currentPage = 'home';
            this.render();
        }
    }
};

window.StudentPortalManager = StudentPortalManager;

// ============================================================
// MAIN STUDENT PORTAL NAVIGATION
// ============================================================

const StudentPortal = {
    renderHome() {
        StudentPortalManager.renderHome();
    },
    openRequestForm(typeId) {
        StudentPortalManager.openRequestForm(typeId);
    },
    openTicket(ticketId) {
        StudentPortalManager.openTicket(ticketId);
    }
};

window.StudentPortal = StudentPortal;

// ============================================================
// INITIALIZE ON PAGE LOAD
// ============================================================

document.addEventListener('DOMContentLoaded', async () => {
    await StudentPortalManager.init();
});
