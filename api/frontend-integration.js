// ============================================================
// STUDENT PORTAL - FRONTEND API INTEGRATION
// Add this to js/student-portal.js to connect to backend
// ============================================================

// ============================================================
// API CONFIGURATION
// ============================================================

const API_BASE_URL = process.env.NODE_ENV === 'production' 
    ? 'https://your-api-server.com/api'
    : 'http://localhost:5000/api';

// Alternative: if API is on same server
// const API_BASE_URL = '/api';

// ============================================================
// API SERVICE FUNCTIONS
// ============================================================

const StudentPortalAPI = {
    
    // ========================================================
    // CREATE NEW TICKET
    // ========================================================
    async createTicket(ticketData) {
        try {
            const response = await fetch(`${API_BASE_URL}/tickets/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticketData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to create ticket');
            }

            return result;
        } catch (error) {
            console.error('Error creating ticket:', error);
            throw error;
        }
    },

    // ========================================================
    // GET ALL TICKETS FOR STUDENT
    // ========================================================
    async getStudentTickets(studentId, status = 'all') {
        try {
            const url = new URL(`${API_BASE_URL}/tickets/student/${studentId}`);
            if (status !== 'all') {
                url.searchParams.append('status', status);
            }

            const response = await fetch(url.toString());
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to fetch tickets');
            }

            return result.tickets;
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw error;
        }
    },

    // ========================================================
    // GET SINGLE TICKET WITH CONVERSATION
    // ========================================================
    async getTicketDetail(ticketId) {
        try {
            const response = await fetch(`${API_BASE_URL}/tickets/${ticketId}`);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to fetch ticket');
            }

            return result;
        } catch (error) {
            console.error('Error fetching ticket:', error);
            throw error;
        }
    },

    // ========================================================
    // SEND MESSAGE/REPLY TO TICKET
    // ========================================================
    async sendMessage(ticketId, messageData) {
        try {
            const response = await fetch(`${API_BASE_URL}/tickets/${ticketId}/messages`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messageData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to send message');
            }

            return result;
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    },

    // ========================================================
    // GET REQUEST TYPES
    // ========================================================
    async getRequestTypes() {
        try {
            const response = await fetch(`${API_BASE_URL}/request-types`);
            const result = await response.json();

            if (!response.ok) {
                throw new Error('Failed to fetch request types');
            }

            return result.requestTypes;
        } catch (error) {
            console.error('Error fetching request types:', error);
            // Return fallback data if API fails
            return StudentPortalManager.requestTypes;
        }
    },

    // ========================================================
    // GET DEPARTMENTS
    // ========================================================
    async getDepartments() {
        try {
            const response = await fetch(`${API_BASE_URL}/departments`);
            const result = await response.json();

            if (!response.ok) {
                throw new Error('Failed to fetch departments');
            }

            return result.departments;
        } catch (error) {
            console.error('Error fetching departments:', error);
            // Return fallback data if API fails
            return StudentPortalManager.departments;
        }
    },

    // ========================================================
    // UPDATE TICKET STATUS (Admin)
    // ========================================================
    async updateTicketStatus(ticketId, status) {
        try {
            const response = await fetch(`${API_BASE_URL}/tickets/${ticketId}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to update status');
            }

            return result;
        } catch (error) {
            console.error('Error updating status:', error);
            throw error;
        }
    },

    // ========================================================
    // GET STUDENT PROFILE
    // ========================================================
    async getStudentProfile(studentId) {
        try {
            const response = await fetch(`${API_BASE_URL}/students/${studentId}`);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to fetch student');
            }

            return result.student;
        } catch (error) {
            console.error('Error fetching student:', error);
            throw error;
        }
    },

    // ========================================================
    // CHECK API HEALTH
    // ========================================================
    async checkHealth() {
        try {
            const response = await fetch(`${API_BASE_URL}/health`);
            const result = await response.json();
            return result.success;
        } catch (error) {
            console.error('API is not available:', error);
            return false;
        }
    }
};

// Export for global use
window.StudentPortalAPI = StudentPortalAPI;

// ============================================================
// MODIFIED FORM SUBMISSION HANDLER
// Replace the existing one in renderRequestForm()
// ============================================================

/*
USAGE IN renderRequestForm(typeId):

Replace this:
```
document.getElementById('requestForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Request submitted successfully!');
    StudentPortal.renderHome();
});
```

With this:
```
document.getElementById('requestForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const title = form.querySelector('input[name="title"]').value;
    const description = form.querySelector('textarea[name="description"]').value;
    const priority = form.querySelector('select[name="priority"]').value;
    const contactMethod = form.querySelector('select[name="contact"]').value;
    
    try {
        // Disable submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = '📤 Submitting...';

        // Call API
        const result = await StudentPortalAPI.createTicket({
            studentId: StudentPortalManager.currentStudent.studentId,
            title,
            description,
            requestTypeId: typeId,
            priority,
            contactMethod
        });

        // Success!
        alert(`✅ Request submitted successfully!\\n\\nTicket ID: ${result.ticketId}\\nDue Date: ${result.dueDate}`);
        
        // Refresh tickets in background
        StudentPortalManager.lastTickets = await StudentPortalAPI.getStudentTickets(
            StudentPortalManager.currentStudent.studentId
        );
        
        // Go back to home
        StudentPortal.renderHome();
        
    } catch (error) {
        alert(`❌ Error: ${error.message}`);
        console.error('Form submission error:', error);
    } finally {
        // Re-enable submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = false;
        submitBtn.textContent = '📤 Submit Request';
    }
});
```
*/

// ============================================================
// MODIFIED REPLY FORM SUBMISSION
// Replace the existing one in renderTicketDetail(ticketId)
// ============================================================

/*
USAGE IN renderTicketDetail(ticketId):

Replace this:
```
document.getElementById('replyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Your reply has been sent successfully!');
    StudentPortal.openTicket(ticketId);
});
```

With this:
```
document.getElementById('replyForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const message = form.querySelector('textarea[name="reply"]').value;
    
    try {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = '📤 Sending...';

        await StudentPortalAPI.sendMessage(ticketId, {
            senderType: 'student',
            senderName: `${StudentPortalManager.currentStudent.firstName} ${StudentPortalManager.currentStudent.lastName}`,
            senderEmail: StudentPortalManager.currentStudent.email,
            senderRole: 'Student',
            message
        });

        alert('✅ Your reply has been sent successfully!');
        
        // Refresh ticket detail
        StudentPortal.openTicket(ticketId);
        
    } catch (error) {
        alert(`❌ Error: ${error.message}`);
        console.error('Reply error:', error);
    } finally {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Reply';
    }
});
```
*/

// ============================================================
// INITIALIZE API ON PAGE LOAD
// ============================================================

// Check API health when page loads
document.addEventListener('DOMContentLoaded', async () => {
    const isHealthy = await StudentPortalAPI.checkHealth();
    if (!isHealthy) {
        console.warn('⚠️ API is not available - using fallback data');
    } else {
        console.log('✅ API is available');
    }
});
