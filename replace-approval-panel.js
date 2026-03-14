// Script to replace the old approval panel with new Supabase-based one
const fs = require('fs');

const appJsPath = './js/app.js';
let content = fs.readFileSync(appJsPath, 'utf8');

// Find and replace the ACCESS MANAGEMENT SECTION
const oldSection = `// ACCESS MANAGEMENT SECTION - STUDENT & ADMIN APPROVALS
            console.log('? Building access management section...');
            const approvalModel = window.AdminHubModel;
            const pendingStudents = approvalModel.pendingStudentRequests || [];
            const pendingAdmins = approvalModel.pendingAdminRequests || [];

            // Get approved students from APPE_DATABASE
            const approvedStudents = (window.APPE_DATABASE?.students || []).filter(s => s.accountStatus === 'active' && s.approvedDate);
            const approvedAdmins = (window.AdminUsers || []).filter(a => a.accountStatus === 'active' && a.approvedDate);`;

const newSection = `// PENDING SIGNUPS SECTION - NEW SUPABASE-BASED APPROVAL SYSTEM
            console.log('📋 Loading Pending Signups panel from Supabase...');

            // Load panel asyncronously
            let accessManagement = '';
            if (typeof window.AdminSignupManager !== 'undefined') {
                accessManagement = await window.AdminSignupManager.renderSignupApprovalPanel();
            } else {
                accessManagement = \`
                    <div style="padding: 2rem; background: #FFF3E0; border-left: 4px solid #FF9800; border-radius: 8px;">
                        <h3 style="margin: 0 0 1rem 0; color: #E65100;">⚠️ Admin Signup Manager Not Loaded</h3>
                        <p style="margin: 0; color: #BF360C;">Please refresh the page to load the approval system.</p>
                    </div>
                \`;
            }`;

if (content.includes(oldSection)) {
    content = content.replace(oldSection, newSection);

    // Also need to remove the old const accessManagement line
    content = content.replace(/\n\s+const accessManagement = `/, '\n');

    fs.writeFileSync(appJsPath, content, 'utf8');
    console.log('✅ Successfully replaced approval panel!');
} else {
    console.log('❌ Could not find the old section');
}
