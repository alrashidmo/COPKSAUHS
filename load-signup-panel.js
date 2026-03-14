/**
 * Auto-load Pending Signups panel when Admin Hub loads
 * Add this to the end of app.js or as a separate script
 */

// Wait for page to load
window.addEventListener('DOMContentLoaded', async () => {
    console.log('🔄 Checking for IMMEDIATE ACTIONS panel...');

    // Wait a bit for the admin hub to render
    setTimeout(async () => {
        // Find the IMMEDIATE ACTIONS section content
        const immediateSection = document.getElementById('section-immediate');

        if (immediateSection) {
            console.log('✅ Found IMMEDIATE ACTIONS section');

            // Find the section-content div
            const contentDiv = immediateSection.querySelector('.section-content');

            if (contentDiv && typeof window.AdminSignupManager !== 'undefined') {
                console.log('📋 Loading Pending Signups panel...');

                try {
                    // Render the new panel
                    const panelHTML = await window.AdminSignupManager.renderSignupApprovalPanel();

                    // Replace the old content
                    contentDiv.innerHTML = panelHTML;

                    // Update the section title
                    const titleDiv = immediateSection.querySelector('.section-title');
                    if (titleDiv) {
                        titleDiv.innerHTML = `
                            PENDING SIGNUPS
                            <span class="section-badge" id="badge-immediate">${window.AdminSignupManager.pendingSignups.length}</span>
                        `;
                    }

                    console.log('✅ Pending Signups panel loaded successfully!');
                } catch (error) {
                    console.error('❌ Failed to load Pending Signups panel:', error);
                }
            }
        }
    }, 1000); // Wait 1 second for admin hub to render
});

console.log('✅ Signup panel auto-loader ready');
