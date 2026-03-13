/**
 * Supabase Service Layer
 * Handles all Supabase database and authentication operations
 * Replaces localStorage with cloud persistence
 */

let supabaseClient = null;

/**
 * Initialize Supabase with configuration
 */
async function initializeSupabase(config) {
    try {
        // Import Supabase client from CDN
        const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');

        supabaseClient = createClient(config.url, config.anonKey);

        console.log('✅ Supabase initialized successfully');
        console.log('📡 Connected to:', config.url);

        return true;
    } catch (error) {
        console.error('❌ Supabase initialization failed:', error);
        return false;
    }
}

/**
 * Database operations for tickets
 */
const SupabaseDB = {
    /**
     * Save a submitted ticket to database
     */
    async saveSubmittedTicket(studentId, ticket) {
        try {
            if (!supabaseClient) throw new Error('Supabase not initialized');

            const ticketData = {
                student_id: studentId,
                ticket_id: ticket.ticketId,
                title: ticket.title,
                description: ticket.description || '',
                status: 'submitted',
                rotation_name: ticket.rotationName || '',
                hospital_name: ticket.hospitalName || '',
                submitted_at: new Date().toISOString(),
                metadata: ticket
            };

            const { data, error } = await supabaseClient
                .from('submitted_tickets')
                .insert([ticketData]);

            if (error) throw error;

            console.log('✅ Ticket saved to Supabase:', ticket.ticketId);
            return true;
        } catch (error) {
            console.error('❌ Failed to save ticket:', error);
            // Fallback to localStorage if database fails
            console.warn('⚠️ Falling back to localStorage');
            let tickets = JSON.parse(localStorage.getItem(`tickets_${studentId}`) || '[]');
            tickets.push(ticket);
            localStorage.setItem(`tickets_${studentId}`, JSON.stringify(tickets));
            return false;
        }
    },

    /**
     * Get all submitted tickets for a student
     */
    async getStudentTickets(studentId) {
        try {
            if (!supabaseClient) throw new Error('Supabase not initialized');

            const { data, error } = await supabaseClient
                .from('submitted_tickets')
                .select('*')
                .eq('student_id', studentId)
                .order('submitted_at', { ascending: false });

            if (error) throw error;

            // Convert database format back to app format
            return data.map(row => ({
                ticketId: row.ticket_id,
                title: row.title,
                description: row.description,
                status: row.status,
                rotationName: row.rotation_name,
                hospitalName: row.hospital_name,
                submittedAt: new Date(row.submitted_at),
                ...row.metadata
            }));
        } catch (error) {
            console.error('❌ Failed to fetch student tickets:', error);
            // Fallback to localStorage
            console.warn('⚠️ Falling back to localStorage');
            const tickets = JSON.parse(localStorage.getItem(`tickets_${studentId}`) || '[]');
            return tickets;
        }
    },

    /**
     * Get all submitted tickets across all students (admin view)
     */
    async getAllSubmittedTickets() {
        try {
            if (!supabaseClient) throw new Error('Supabase not initialized');

            const { data, error } = await supabaseClient
                .from('submitted_tickets')
                .select('*')
                .order('submitted_at', { ascending: false });

            if (error) throw error;

            // Convert database format back to app format
            return data.map(row => ({
                ticketId: row.ticket_id,
                studentId: row.student_id,
                title: row.title,
                description: row.description,
                status: row.status,
                rotationName: row.rotation_name,
                hospitalName: row.hospital_name,
                submittedAt: new Date(row.submitted_at),
                ...row.metadata
            }));
        } catch (error) {
            console.error('❌ Failed to fetch all tickets:', error);
            // Fallback to localStorage (aggregate all student tickets)
            console.warn('⚠️ Falling back to localStorage');
            const allTickets = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith('tickets_')) {
                    const tickets = JSON.parse(localStorage.getItem(key) || '[]');
                    allTickets.push(...tickets);
                }
            }
            return allTickets;
        }
    },

    /**
     * Update ticket status (admin action)
     */
    async updateTicketStatus(studentId, ticketId, newStatus) {
        try {
            if (!supabaseClient) throw new Error('Supabase not initialized');

            const { error } = await supabaseClient
                .from('submitted_tickets')
                .update({
                    status: newStatus,
                    updated_at: new Date().toISOString()
                })
                .eq('student_id', studentId)
                .eq('ticket_id', ticketId);

            if (error) throw error;

            console.log('✅ Ticket status updated:', newStatus);
            return true;
        } catch (error) {
            console.error('❌ Failed to update ticket:', error);
            return false;
        }
    }
};

/**
 * Authentication operations
 */
const SupabaseAuth = {
    /**
     * Create new user account
     */
    async createUser(email, password) {
        try {
            if (!supabaseClient) throw new Error('Supabase not initialized');

            const { data, error } = await supabaseClient.auth.signUp({
                email: email,
                password: password
            });

            if (error) throw error;

            console.log('✅ User created:', data.user.id);
            return data.user;
        } catch (error) {
            console.error('❌ User creation failed:', error.message);
            throw error;
        }
    },

    /**
     * Login user
     */
    async loginUser(email, password) {
        try {
            if (!supabaseClient) throw new Error('Supabase not initialized');

            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) throw error;

            console.log('✅ User logged in:', data.user.id);
            return data.user;
        } catch (error) {
            console.error('❌ Login failed:', error.message);
            throw error;
        }
    },

    /**
     * Logout user
     */
    async logoutUser() {
        try {
            if (!supabaseClient) throw new Error('Supabase not initialized');

            const { error } = await supabaseClient.auth.signOut();

            if (error) throw error;

            console.log('✅ User logged out');
            return true;
        } catch (error) {
            console.error('❌ Logout failed:', error);
            return false;
        }
    },

    /**
     * Get current user
     */
    async getCurrentUser() {
        try {
            if (!supabaseClient) return null;

            const { data: { user } } = await supabaseClient.auth.getUser();
            return user;
        } catch (error) {
            console.error('❌ Failed to get current user:', error);
            return null;
        }
    }
};

/**
 * Export for global use
 */
window.SupabaseService = {
    init: initializeSupabase,
    db: SupabaseDB,
    auth: SupabaseAuth,
    client: () => supabaseClient,
    get supabase() { return supabaseClient; } // Getter for direct access
};
