/**
 * Admin Signup Manager
 * Handles approval/rejection of pending user signups
 */

const AdminSignupManager = {
    pendingSignups: [],

    /**
     * Initialize and load pending signups
     */
    async init() {
        console.log('🔐 Initializing Admin Signup Manager...');
        await this.loadPendingSignups();
    },

    /**
     * Load pending signups from Supabase
     */
    async loadPendingSignups() {
        if (typeof window.SupabaseAuth === 'undefined') {
            console.warn('⚠️ SupabaseAuth not available');
            return;
        }

        const result = await window.SupabaseAuth.getPendingSignups();

        if (result.success) {
            this.pendingSignups = result.data || [];
            console.log(`✅ Loaded ${this.pendingSignups.length} pending signups`);
        } else {
            console.error('❌ Failed to load pending signups:', result.message);
            this.pendingSignups = [];
        }
    },

    /**
     * Render the admin signup approval panel
     */
    async renderSignupApprovalPanel() {
        await this.loadPendingSignups();

        const html = `
            <div class="admin-signup-panel">
                <div class="panel-header">
                    <h2>📋 Pending Signup Requests</h2>
                    <p class="panel-subtitle">Review and approve student/admin signup requests</p>
                </div>

                ${this.pendingSignups.length === 0 ? `
                    <div class="empty-state">
                        <div class="empty-icon">✅</div>
                        <h3>No Pending Requests</h3>
                        <p>All signup requests have been processed!</p>
                    </div>
                ` : `
                    <div class="signup-requests-grid">
                        ${this.pendingSignups.map(signup => this.renderSignupCard(signup)).join('')}
                    </div>
                `}
            </div>

            <style>
                .admin-signup-panel {
                    padding: 20px;
                }

                .panel-header {
                    margin-bottom: 30px;
                }

                .panel-header h2 {
                    font-size: 1.8rem;
                    margin-bottom: 8px;
                    color: #1B5E20;
                }

                .panel-subtitle {
                    color: #666;
                    font-size: 0.95rem;
                }

                .signup-requests-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 20px;
                }

                .signup-card {
                    background: white;
                    border: 2px solid #E0E0E0;
                    border-radius: 12px;
                    padding: 20px;
                    transition: all 0.3s;
                }

                .signup-card:hover {
                    border-color: #1B5E20;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }

                .signup-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 15px;
                }

                .signup-account-type {
                    background: #1B5E20;
                    color: white;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                .signup-account-type.admin {
                    background: #0D47A1;
                }

                .signup-details {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-bottom: 15px;
                }

                .detail-row {
                    display: flex;
                    gap: 8px;
                }

                .detail-label {
                    font-weight: 600;
                    color: #666;
                    min-width: 90px;
                }

                .detail-value {
                    color: #1a1a1a;
                }

                .signup-actions {
                    display: flex;
                    gap: 10px;
                    margin-top: 15px;
                    padding-top: 15px;
                    border-top: 1px solid #E0E0E0;
                }

                .signup-btn {
                    flex: 1;
                    padding: 10px;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .signup-btn-approve {
                    background: #4CAF50;
                    color: white;
                }

                .signup-btn-approve:hover {
                    background: #388E3C;
                }

                .signup-btn-reject {
                    background: #F44336;
                    color: white;
                }

                .signup-btn-reject:hover {
                    background: #D32F2F;
                }

                .empty-state {
                    text-align: center;
                    padding: 60px 20px;
                }

                .empty-icon {
                    font-size: 4rem;
                    margin-bottom: 20px;
                }

                .empty-state h3 {
                    font-size: 1.5rem;
                    color: #1B5E20;
                    margin-bottom: 10px;
                }

                .empty-state p {
                    color: #666;
                }
            </style>
        `;

        return html;
    },

    /**
     * Render a single signup request card
     */
    renderSignupCard(signup) {
        const isAdmin = signup.account_type === 'admin';
        const submittedDate = new Date(signup.submitted_at).toLocaleString();

        return `
            <div class="signup-card" data-signup-id="${signup.id}">
                <div class="signup-card-header">
                    <h3 style="margin: 0; font-size: 1.1rem;">${signup.full_name}</h3>
                    <span class="signup-account-type ${isAdmin ? 'admin' : ''}">${isAdmin ? '👨‍💼 Admin' : '🎓 Student'}</span>
                </div>

                <div class="signup-details">
                    <div class="detail-row">
                        <span class="detail-label">Email:</span>
                        <span class="detail-value">${signup.email}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Phone:</span>
                        <span class="detail-value">${signup.phone || 'N/A'}</span>
                    </div>
                    ${signup.student_id ? `
                        <div class="detail-row">
                            <span class="detail-label">Student ID:</span>
                            <span class="detail-value">${signup.student_id}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Class Year:</span>
                            <span class="detail-value">${signup.class_year || 'N/A'}</span>
                        </div>
                    ` : ''}
                    ${signup.staff_id ? `
                        <div class="detail-row">
                            <span class="detail-label">Staff ID:</span>
                            <span class="detail-value">${signup.staff_id}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Department:</span>
                            <span class="detail-value">${signup.department || 'N/A'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Role:</span>
                            <span class="detail-value">${signup.role || 'N/A'}</span>
                        </div>
                    ` : ''}
                    <div class="detail-row">
                        <span class="detail-label">Submitted:</span>
                        <span class="detail-value">${submittedDate}</span>
                    </div>
                </div>

                <div class="signup-actions">
                    <button class="signup-btn signup-btn-approve" onclick="AdminSignupManager.approveSignup(${signup.id})">
                        ✅ Approve
                    </button>
                    <button class="signup-btn signup-btn-reject" onclick="AdminSignupManager.rejectSignup(${signup.id})">
                        ❌ Reject
                    </button>
                </div>
            </div>
        `;
    },

    /**
     * Approve a signup request
     */
    async approveSignup(signupId) {
        const confirm = window.confirm('Are you sure you want to approve this signup request?\n\nThe user will be able to log in immediately.');

        if (!confirm) return;

        console.log('✅ Approving signup:', signupId);

        const result = await window.SupabaseAuth.approveSignup(signupId);

        if (result.success) {
            alert('✅ Signup approved successfully!\n\nThe user can now log in with their credentials.');

            // Refresh the panel
            await this.refreshPanel();
        } else {
            alert(`❌ Failed to approve signup:\n\n${result.message}`);
        }
    },

    /**
     * Reject a signup request
     */
    async rejectSignup(signupId) {
        const reason = prompt('Please enter a reason for rejection (optional):');

        if (reason === null) return; // User clicked cancel

        console.log('❌ Rejecting signup:', signupId);

        const result = await window.SupabaseAuth.rejectSignup(signupId, reason);

        if (result.success) {
            alert('✅ Signup request rejected');

            // Refresh the panel
            await this.refreshPanel();
        } else {
            alert(`❌ Failed to reject signup:\n\n${result.message}`);
        }
    },

    /**
     * Refresh the signup approval panel
     */
    async refreshPanel() {
        const html = await this.renderSignupApprovalPanel();
        const container = document.getElementById('app-root');
        if (container) {
            container.innerHTML = html;
        }
    }
};

// Export to window
window.AdminSignupManager = AdminSignupManager;

console.log('✅ Admin Signup Manager loaded');
