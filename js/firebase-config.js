/**
 * Firebase Configuration
 * Store your Firebase project credentials here
 * 
 * To get these values:
 * 1. Go to Firebase Console (firebase.google.com)
 * 2. Create a new project
 * 3. Go to Project Settings
 * 4. Scroll to "Your apps" section
 * 5. Click on Web app icon (</> )
 * 6. Copy the firebaseConfig object
 */

const FIREBASE_CONFIG = {
    apiKey: process.env.FIREBASE_API_KEY || "YOUR_API_KEY_HERE",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
    databaseURL: process.env.FIREBASE_DATABASE_URL || "https://your-project.firebaseio.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "your-project",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "your-sender-id",
    appId: process.env.FIREBASE_APP_ID || "your-app-id"
};

// Validate configuration
function validateFirebaseConfig() {
    const required = ['apiKey', 'authDomain', 'databaseURL', 'projectId', 'storageBucket'];
    const missing = required.filter(key => !FIREBASE_CONFIG[key] || FIREBASE_CONFIG[key].includes('YOUR_'));
    
    if (missing.length > 0) {
        console.warn('⚠️ Firebase configuration incomplete. Missing:', missing);
        console.warn('⚠️ Please set up Firebase credentials before deploying.');
        return false;
    }
    
    return true;
}

// Export
window.FirebaseConfig = FIREBASE_CONFIG;
window.validateFirebaseConfig = validateFirebaseConfig;
