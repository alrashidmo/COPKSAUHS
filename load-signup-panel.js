/**
 * Auto-load Pending Signups panel when Admin Hub loads
 * This hooks into the app rendering system
 */

// Override the app.renderAdminHub to inject our panel
(function() {
    console.log('🔄 Setting up Pending Signups panel injector...');

    // Wait for app to be available
    const checkInterval = setInterval(() => {
        if (window.app && typeof window.app.renderAdminHub === 'function') {
            clearInterval(checkInterval);

            // Store the original function
            const originalRenderAdminHub = window.app.renderAdminHub;

            // Override with our version
            window.app.renderAdminHub = async function() {
                // Call the original function first
                await originalRenderAdminHub.call(this);

                // Then replace the IMMEDIATE ACTIONS content
                setTimeout(async () => {
                    console.log('📋 Injecting Pending Signups panel...');

                    const immediateSection = document.getElementById('section-immediate');
                    if (immediateSection && typeof window.AdminSignupManager !== 'undefined') {
                        const contentDiv = immediateSection.querySelector('.section-content');

                        if (contentDiv) {
                            try {
                                // Load pending signups first
                                await window.AdminSignupManager.loadPendingSignups();

                                // Render the new panel
                                const panelHTML = await window.AdminSignupManager.renderSignupApprovalPanel();

                                // Replace the old content
                                contentDiv.innerHTML = panelHTML;

                                // Update the section title
                                const sectionTitle = immediateSection.querySelector('.section-title');
                                if (sectionTitle) {
                                    const badge = sectionTitle.querySelector('.section-badge');
                                    if (badge) {
                                        badge.textContent = window.AdminSignupManager.pendingSignups.length;
                                    }
                                    // Change title text
                                    const titleText = Array.from(sectionTitle.childNodes).find(n => n.nodeType === 3);
                                    if (titleText) {
                                        titleText.textContent = 'PENDING SIGNUPS ';
                                    }
                                }

                                console.log('✅ Pending Signups panel injected successfully!');
                            } catch (error) {
                                console.error('❌ Failed to inject Pending Signups panel:', error);
                            }
                        }
                    }
                }, 500); // Wait 500ms for DOM to settle
            };

            console.log('✅ Pending Signups panel injector ready');
        }
    }, 100);
})();

console.log('✅ Signup panel loader initialized');
