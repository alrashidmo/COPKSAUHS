/**
 * Student Database Loader
 * Loads students from Supabase and merges with existing APPE_DATABASE
 */

window.StudentLoader = {
    /**
     * Load students from Supabase database table
     */
    async loadStudentsFromDatabase() {
        try {
            if (!window.SupabaseService?.supabase) {
                console.warn('⚠️ Supabase not initialized, using hardcoded student data');
                return;
            }

            console.log('📊 Loading students from database...');

            const { data, error } = await window.SupabaseService.supabase
                .from('students')
                .select('*')
                .order('name', { ascending: true });

            if (error) {
                console.error('❌ Error loading students:', error);
                return;
            }

            if (!data || data.length === 0) {
                console.log('ℹ️ No students found in database');
                return;
            }

            console.log(`✅ Loaded ${data.length} students from database`);

            // Merge with existing APPE_DATABASE.students
            if (window.APPE_DATABASE && Array.isArray(window.APPE_DATABASE.students)) {
                // Create a map of existing students by ID
                const existingStudentsMap = new Map();
                window.APPE_DATABASE.students.forEach(student => {
                    existingStudentsMap.set(student.id, student);
                });

                // Add/update students from database
                data.forEach(dbStudent => {
                    const studentRecord = {
                        id: dbStudent.id,
                        name: dbStudent.name,
                        email: dbStudent.email,
                        cohort: dbStudent.cohort,
                        gpa: parseFloat(dbStudent.gpa) || 0.0,
                        risk: dbStudent.risk || 'low',
                        attendance: dbStudent.attendance || 0,
                        accountStatus: dbStudent.account_status || 'active',
                        approvedDate: dbStudent.approved_date
                    };

                    // Update existing or add new
                    existingStudentsMap.set(dbStudent.id, studentRecord);
                });

                // Replace the students array with merged data
                window.APPE_DATABASE.students = Array.from(existingStudentsMap.values());

                console.log(`✅ Student database updated: ${window.APPE_DATABASE.students.length} total students`);

                // Trigger a refresh if the Student Database view is open
                this.refreshStudentDatabaseView();
            }

        } catch (error) {
            console.error('❌ Error in loadStudentsFromDatabase:', error);
        }
    },

    /**
     * Refresh the Student Database view if it's currently displayed
     */
    refreshStudentDatabaseView() {
        // Check if we're on the Student Database view
        const studentDbSection = document.querySelector('.students-section');
        if (studentDbSection && typeof window.app !== 'undefined' && typeof window.app.renderStudentDatabase === 'function') {
            console.log('🔄 Refreshing Student Database view...');

            // Re-render the student database
            setTimeout(() => {
                window.app.renderStudentDatabase();
            }, 100);
        }
    },

    /**
     * Initialize - load students when page loads
     */
    async init() {
        // Wait for Supabase to be initialized
        const waitForSupabase = setInterval(async () => {
            if (window.SupabaseService?.supabase) {
                clearInterval(waitForSupabase);
                await this.loadStudentsFromDatabase();
            }
        }, 500);

        // Timeout after 10 seconds
        setTimeout(() => {
            clearInterval(waitForSupabase);
        }, 10000);
    }
};

// Auto-initialize when script loads
console.log('✅ Student Loader initialized');
window.StudentLoader.init();
