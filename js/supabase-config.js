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

const SUPABASE_CONFIG = {
    url: window.SUPABASE_URL || "YOUR_SUPABASE_URL_HERE",
    anonKey: window.SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY_HERE"
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
