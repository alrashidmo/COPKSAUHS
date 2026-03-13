/**
 * Supabase Authentication Service
 * Handles user signup, login, and session management
 */

const SupabaseAuth = {
    supabase: null,
    currentUser: null,

    /**
     * Initialize the auth service with Supabase client
     */
    async init(supabaseClient) {
        this.supabase = supabaseClient;
        console.log('🔐 Supabase Auth initialized');

        // Check for existing session
        const { data: { session } } = await this.supabase.auth.getSession();
        if (session) {
            this.currentUser = session.user;
            console.log('✅ Existing session found:', this.currentUser.email);
        }

        // Listen for auth state changes
        this.supabase.auth.onAuthStateChange((event, session) => {
            console.log('🔄 Auth state changed:', event);
            this.currentUser = session?.user || null;

            if (event === 'SIGNED_IN') {
                console.log('✅ User signed in:', this.currentUser?.email);
            } else if (event === 'SIGNED_OUT') {
                console.log('🚪 User signed out');
            }
        });
    },

    /**
     * Sign up a new user
     * Creates pending signup request in database for admin approval
     */
    async signUp(userData) {
        try {
            console.log('📝 Signing up user:', userData.email);

            // Create the signup request in pending_signups table
            const signupRequest = {
                email: userData.email,
                password_hash: userData.password, // Will be hashed by Supabase when approved
                full_name: userData.name,
                phone: userData.phone,
                account_type: userData.accountType,
                student_id: userData.studentId || null,
                staff_id: userData.staffId || null,
                class_year: userData.classPreference || null,
                department: userData.department || null,
                role: userData.role || null,
                status: 'pending',
                submitted_at: new Date().toISOString(),
                metadata: {
                    userAgent: navigator.userAgent,
                    signupSource: 'web'
                }
            };

            const { data, error } = await this.supabase
                .from('pending_signups')
                .insert([signupRequest])
                .select()
                .single();

            if (error) {
                console.error('❌ Signup error:', error);
                throw new Error(error.message);
            }

            console.log('✅ Signup request created:', data);
            return {
                success: true,
                message: 'Signup request submitted successfully! Please wait for admin approval.',
                data
            };

        } catch (error) {
            console.error('❌ Signup failed:', error);
            return {
                success: false,
                message: error.message || 'Signup failed. Please try again.'
            };
        }
    },

    /**
     * Sign in existing user
     */
    async signIn(email, password) {
        try {
            console.log('🔑 Attempting login:', email);

            const { data, error } = await this.supabase.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                console.error('❌ Login error:', error);
                throw new Error(error.message);
            }

            this.currentUser = data.user;
            console.log('✅ Login successful:', this.currentUser.email);

            // Get user profile from database
            const profile = await this.getUserProfile(this.currentUser.id);

            return {
                success: true,
                user: this.currentUser,
                profile
            };

        } catch (error) {
            console.error('❌ Login failed:', error);
            return {
                success: false,
                message: error.message || 'Invalid email or password'
            };
        }
    },

    /**
     * Sign out current user
     */
    async signOut() {
        try {
            const { error } = await this.supabase.auth.signOut();

            if (error) throw error;

            this.currentUser = null;
            console.log('✅ Signed out successfully');

            return { success: true };

        } catch (error) {
            console.error('❌ Sign out error:', error);
            return { success: false, message: error.message };
        }
    },

    /**
     * Get user profile from user_profiles table
     */
    async getUserProfile(userId) {
        try {
            const { data, error } = await this.supabase
                .from('user_profiles')
                .select('*')
                .eq('user_id', userId)
                .single();

            if (error) {
                console.warn('⚠️ No profile found:', error.message);
                return null;
            }

            return data;

        } catch (error) {
            console.error('❌ Error fetching profile:', error);
            return null;
        }
    },

    /**
     * Check if current user is admin
     */
    async isAdmin() {
        if (!this.currentUser) return false;

        const profile = await this.getUserProfile(this.currentUser.id);
        return profile?.account_type === 'admin' && profile?.is_approved === true;
    },

    /**
     * Get current session
     */
    async getSession() {
        const { data: { session } } = await this.supabase.auth.getSession();
        return session;
    },

    /**
     * Admin: Get all pending signup requests
     */
    async getPendingSignups() {
        try {
            const { data, error } = await this.supabase
                .from('pending_signups')
                .select('*')
                .eq('status', 'pending')
                .order('submitted_at', { ascending: false });

            if (error) throw error;

            return { success: true, data };

        } catch (error) {
            console.error('❌ Error fetching pending signups:', error);
            return { success: false, message: error.message };
        }
    },

    /**
     * Admin: Approve a signup request
     * Creates actual user account in Supabase Auth
     */
    async approveSignup(signupId) {
        try {
            // Get the pending signup
            const { data: signup, error: fetchError } = await this.supabase
                .from('pending_signups')
                .select('*')
                .eq('id', signupId)
                .single();

            if (fetchError) throw fetchError;

            // Create the user in Supabase Auth
            const { data: authData, error: authError } = await this.supabase.auth.admin.createUser({
                email: signup.email,
                password: signup.password_hash,
                email_confirm: true,
                user_metadata: {
                    full_name: signup.full_name,
                    account_type: signup.account_type
                }
            });

            if (authError) throw authError;

            // Create user profile
            const { error: profileError } = await this.supabase
                .from('user_profiles')
                .insert([{
                    user_id: authData.user.id,
                    email: signup.email,
                    full_name: signup.full_name,
                    phone: signup.phone,
                    account_type: signup.account_type,
                    student_id: signup.student_id,
                    staff_id: signup.staff_id,
                    class_year: signup.class_year,
                    department: signup.department,
                    role: signup.role,
                    is_approved: true,
                    approved_at: new Date().toISOString(),
                    approved_by: this.currentUser?.id
                }]);

            if (profileError) throw profileError;

            // Update signup request status
            const { error: updateError } = await this.supabase
                .from('pending_signups')
                .update({
                    status: 'approved',
                    approved_at: new Date().toISOString(),
                    approved_by: this.currentUser?.id
                })
                .eq('id', signupId);

            if (updateError) throw updateError;

            console.log('✅ Signup approved:', signup.email);
            return { success: true, message: 'User approved successfully!' };

        } catch (error) {
            console.error('❌ Error approving signup:', error);
            return { success: false, message: error.message };
        }
    },

    /**
     * Admin: Reject a signup request
     */
    async rejectSignup(signupId, reason = '') {
        try {
            const { error } = await this.supabase
                .from('pending_signups')
                .update({
                    status: 'rejected',
                    rejected_at: new Date().toISOString(),
                    rejected_by: this.currentUser?.id,
                    rejection_reason: reason
                })
                .eq('id', signupId);

            if (error) throw error;

            console.log('✅ Signup rejected:', signupId);
            return { success: true, message: 'Signup request rejected' };

        } catch (error) {
            console.error('❌ Error rejecting signup:', error);
            return { success: false, message: error.message };
        }
    }
};

// Export to window
window.SupabaseAuth = SupabaseAuth;

console.log('✅ Supabase Auth service loaded');
