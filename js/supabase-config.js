/**
 * Supabase Configuration
 * Store your Supabase project credentials here
 *
 * To get these values:
 * 1. Go to https://supabase.com
 * 2. Create a new project (free)
 * 3. Go to Project Settings → API
 * 4. Copy the Project URL and anon public key
 */

// NOTE: For local development, add your Supabase credentials to .env.local
// For production (Vercel), add them as environment variables in the Vercel dashboard
const SUPABASE_CONFIG = {
    // These values will be injected by Vercel during deployment
    url: "https://ayswzpiennofznmpooia.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5c3d6cGllbm5vZnpubXBvb2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNTkxMTQsImV4cCI6MjA4ODczNTExNH0.112VFNipAi7_nfQWBKh63cafnWiyS9_Nj_No5XbFx9w"
};

// Validate configuration
function validateSupabaseConfig() {
    if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('YOUR_')) {
        console.warn('⚠️ Supabase URL not configured');
        return false;
    }

    if (!SUPABASE_CONFIG.anonKey || SUPABASE_CONFIG.anonKey.includes('YOUR_')) {
        console.warn('⚠️ Supabase anon key not configured');
        return false;
    }

    return true;
}

// Export
window.SupabaseConfig = SUPABASE_CONFIG;
window.validateSupabaseConfig = validateSupabaseConfig;

// Initialize Supabase when the page loads
(async function initSupabase() {
    // Wait for SupabaseService to be available
    let attempts = 0;
    const maxAttempts = 50;

    const waitForService = setInterval(async () => {
        attempts++;

        if (typeof window.SupabaseService !== 'undefined') {
            clearInterval(waitForService);
            console.log('🔄 Initializing Supabase...');

            const success = await window.SupabaseService.init(SUPABASE_CONFIG);

            if (success) {
                console.log('✅ Supabase initialized successfully!');
                console.log('📡 Connected to:', SUPABASE_CONFIG.url);

                // Initialize SupabaseAuth with the Supabase client
                if (typeof window.SupabaseAuth !== 'undefined') {
                    await window.SupabaseAuth.init(window.SupabaseService.supabase);
                    console.log('✅ Supabase Auth initialized!');
                }
            } else {
                console.error('❌ Supabase initialization failed');
            }
        } else if (attempts >= maxAttempts) {
            clearInterval(waitForService);
            console.error('❌ SupabaseService not loaded after', maxAttempts, 'attempts');
        }
    }, 100); // Check every 100ms
})();
