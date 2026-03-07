/**
 * Firebase Service Layer
 * Handles all Firebase database and authentication operations
 * Replaces localStorage with cloud persistence
 */

// Initialize Firebase (config will be loaded from environment)
let firebaseApp = null;
let db = null;
let auth = null;

/**
 * Initialize Firebase with configuration
 * @param {Object} config - Firebase config object
 */
async function initializeFirebase(config) {
    try {
        // Dynamically import Firebase modules
        const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js');
        const { getDatabase } = await import('https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js');
        const { getAuth } = await import('https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js');

        firebaseApp = initializeApp(config);
        db = getDatabase(firebaseApp);
        auth = getAuth(firebaseApp);

        console.log('✅ Firebase initialized successfully');
        return true;
    } catch (error) {
        console.error('❌ Firebase initialization failed:', error);
        return false;
    }
}

/**
 * Database operations for tickets
 */
const FirebaseDB = {
    /**
     * Save a submitted ticket to database
     */
    async saveSubmittedTicket(studentId, ticket) {
        try {
            if (!db) throw new Error('Firebase not initialized');
            
            const { getDatabase, ref, push, set } = await import('https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js');
            
            const ticketsRef = ref(db, `submitted_tickets/${studentId}`);
            const newTicketRef = push(ticketsRef);
            
            await set(newTicketRef, {
                ...ticket,
                userId: studentId,
                submittedAt: new Date().toISOString(),
                status: 'submitted'
            });

            console.log('✅ Ticket saved to Firebase:', ticket.ticketId);
            return true;
        } catch (error) {
            console.error('❌ Failed to save ticket:', error);
            return false;
        }
    },

    /**
     * Get all submitted tickets for a student
     */
    async getStudentTickets(studentId) {
        try {
            if (!db) throw new Error('Firebase not initialized');
            
            const { ref, get } = await import('https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js');
            
            const snapshot = await get(ref(db, `submitted_tickets/${studentId}`));
            if (snapshot.exists()) {
                const ticketsObj = snapshot.val();
                return Object.values(ticketsObj).map(t => ({
                    ...t,
                    submittedAt: new Date(t.submittedAt)
                }));
            }
            return [];
        } catch (error) {
            console.error('❌ Failed to fetch student tickets:', error);
            return [];
        }
    },

    /**
     * Get all submitted tickets across all students (admin view)
     */
    async getAllSubmittedTickets() {
        try {
            if (!db) throw new Error('Firebase not initialized');
            
            const { ref, get } = await import('https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js');
            
            const snapshot = await get(ref(db, 'submitted_tickets'));
            if (snapshot.exists()) {
                const allTickets = [];
                const allStudents = snapshot.val();
                
                for (const [studentId, tickets] of Object.entries(allStudents)) {
                    for (const ticket of Object.values(tickets)) {
                        allTickets.push({
                            ...ticket,
                            submittedAt: new Date(ticket.submittedAt)
                        });
                    }
                }
                
                return allTickets.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
            }
            return [];
        } catch (error) {
            console.error('❌ Failed to fetch all tickets:', error);
            return [];
        }
    },

    /**
     * Update ticket status (admin action)
     */
    async updateTicketStatus(studentId, ticketId, newStatus) {
        try {
            if (!db) throw new Error('Firebase not initialized');
            
            const { ref, update } = await import('https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js');
            
            await update(ref(db, `submitted_tickets/${studentId}/${ticketId}`), {
                status: newStatus,
                lastUpdate: new Date().toISOString()
            });

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
const FirebaseAuth = {
    /**
     * Create new user account
     */
    async createUser(email, password) {
        try {
            if (!auth) throw new Error('Firebase not initialized');
            
            const { createUserWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js');
            
            const result = await createUserWithEmailAndPassword(auth, email, password);
            console.log('✅ User created:', result.user.uid);
            return result.user;
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
            if (!auth) throw new Error('Firebase not initialized');
            
            const { signInWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js');
            
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log('✅ User logged in:', result.user.uid);
            return result.user;
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
            if (!auth) throw new Error('Firebase not initialized');
            
            const { signOut } = await import('https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js');
            
            await signOut(auth);
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
        return new Promise((resolve) => {
            if (!auth) {
                resolve(null);
                return;
            }
            
            const { onAuthStateChanged } = require('https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js');
            
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe();
                resolve(user);
            });
        });
    }
};

/**
 * Export for global use
 */
window.FirebaseService = {
    init: initializeFirebase,
    db: FirebaseDB,
    auth: FirebaseAuth
};
