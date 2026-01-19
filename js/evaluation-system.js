/**
 * APPE Evaluation Management System
 * Complete evaluation workflow with inline editing, CSV import/export, and Google Forms integration
 */

// Manage Student Evaluations
window.manageStudentEvaluations = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10001;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 1000px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h2 style="margin: 0; color: #1B5E20;">👨‍🎓 Student Evaluation Scores</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                <button onclick="window.importStudentEvaluationsCSV()" class="btn btn-outline" style="flex: 1;">📁 Import CSV/Excel</button>
                <button onclick="window.exportStudentEvaluationsCSV()" class="btn btn-outline" style="flex: 1;">📥 Export to Excel</button>
                <button onclick="window.setupStudentEvalForms()" class="btn btn-outline" style="flex: 1;">📋 Google Forms Setup</button>
            </div>
            
            <div style="background: #E8F5E9; padding: 1rem; border-radius: 6px; margin-bottom: 1.5rem;">
                <strong>✏️ Click any score to edit directly</strong>
            </div>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>ID</th>
                        <th>Rotation</th>
                        <th>APPE Score (%)</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${ASSIGNMENTS.map(a => `
                        <tr>
                            <td><strong>${a.student}</strong></td>
                            <td>${a.id}</td>
                            <td>${a.rotation}</td>
                            <td>
                                <input type="number" min="0" max="100" value="${a.score}" 
                                    onchange="window.updateStudentScore('${a.id}', this.value)"
                                    style="width: 80px; padding: 0.5rem; border: 2px solid ${a.score >= 95 ? '#4CAF50' : a.score >= 85 ? '#FFC107' : '#F44336'}; border-radius: 6px; font-weight: 700; text-align: center;">
                            </td>
                            <td>
                                <span style="padding: 0.25rem 0.75rem; background: ${a.score >= 95 ? '#E8F5E9' : a.score >= 85 ? '#FFF3E0' : '#FFEBEE'}; color: ${a.score >= 95 ? '#2E7D32' : a.score >= 85 ? '#E65100' : '#C62828'}; border-radius: 12px; font-weight: 600; font-size: 0.85rem;">
                                    ${a.score >= 95 ? '🌟 Excellent' : a.score >= 85 ? '✓ Good' : '⚠️ Needs Support'}
                                </span>
                            </td>
                            <td>
                                <button onclick="window.viewDetailedEvaluation('${a.id}')" class="btn btn-sm btn-outline">📊 Details</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Update Student Score (inline editing)
window.updateStudentScore = function(studentId, newScore) {
    const assignment = ASSIGNMENTS.find(a => a.id === studentId);
    if (assignment) {
        assignment.score = parseInt(newScore);
        showToast(`✓ Updated ${assignment.student}'s score to ${newScore}%`);
        
        // Refresh dashboard if visible
        if (document.querySelector('.appe-nav-btn.active')?.textContent.includes('Dashboard')) {
            window.switchAPPESection('dashboard');
        }
    }
};

// Manage Preceptor Evaluations
window.managePreceptorEvaluations = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10001;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 1000px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h2 style="margin: 0; color: #1565C0;">👨‍⚕️ Preceptor Ratings</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                <button onclick="window.importPreceptorRatingsCSV()" class="btn btn-outline" style="flex: 1;">📁 Import CSV/Excel</button>
                <button onclick="window.exportPreceptorRatingsCSV()" class="btn btn-outline" style="flex: 1;">📥 Export to Excel</button>
                <button onclick="window.setupPreceptorEvalForms()" class="btn btn-outline" style="flex: 1;">📋 Google Forms Setup</button>
            </div>
            
            <div style="background: #E3F2FD; padding: 1rem; border-radius: 6px; margin-bottom: 1.5rem;">
                <strong>✏️ Click any rating to edit directly (0.0 - 5.0)</strong>
            </div>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Preceptor Name</th>
                        <th>Specialty</th>
                        <th>Site</th>
                        <th>Current Rating</th>
                        <th>Students Supervised</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${PRECEPTORS.map(p => `
                        <tr>
                            <td><strong>${p.name}</strong></td>
                            <td>${p.specialty}</td>
                            <td>${p.site}</td>
                            <td>
                                <input type="number" min="0" max="5" step="0.1" value="${p.rating}" 
                                    onchange="window.updatePreceptorRating('${p.id}', this.value)"
                                    style="width: 80px; padding: 0.5rem; border: 2px solid ${p.rating >= 4.5 ? '#4CAF50' : p.rating >= 4.0 ? '#FFC107' : '#F44336'}; border-radius: 6px; font-weight: 700; text-align: center;">
                                <span style="margin-left: 0.5rem;">⭐</span>
                            </td>
                            <td><strong>${p.students || 0}</strong> students</td>
                            <td>
                                <button onclick="window.viewPreceptorFeedback('${p.id}')" class="btn btn-sm btn-outline">💬 Feedback</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Update Preceptor Rating (inline editing)
window.updatePreceptorRating = function(preceptorId, newRating) {
    const preceptor = PRECEPTORS.find(p => p.id === preceptorId);
    if (preceptor) {
        preceptor.rating = parseFloat(newRating);
        showToast(`✓ Updated ${preceptor.name}'s rating to ${newRating} ⭐`);
        
        // Refresh dashboard
        if (document.querySelector('.appe-nav-btn.active')?.textContent.includes('Dashboard')) {
            window.switchAPPESection('dashboard');
        }
    }
};

// Manage Site Evaluations
window.manageSiteEvaluations = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10001;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 1000px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h2 style="margin: 0; color: #E65100;">🏥 Training Site Ratings</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                <button onclick="window.importSiteRatingsCSV()" class="btn btn-outline" style="flex: 1;">📁 Import CSV/Excel</button>
                <button onclick="window.exportSiteRatingsCSV()" class="btn btn-outline" style="flex: 1;">📥 Export to Excel</button>
                <button onclick="window.setupSiteEvalForms()" class="btn btn-outline" style="flex: 1;">📋 Google Forms Setup</button>
            </div>
            
            <div style="background: #FFF3E0; padding: 1rem; border-radius: 6px; margin-bottom: 1.5rem;">
                <strong>✏️ Click any rating to edit directly (0.0 - 5.0)</strong>
            </div>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Site Name</th>
                        <th>Type</th>
                        <th>Capacity</th>
                        <th>Current Rating</th>
                        <th>Utilization</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${TRAINING_SITES.map(s => `
                        <tr>
                            <td><strong>${s.name}</strong></td>
                            <td>${s.type}</td>
                            <td>${s.activeStudents}/${s.capacity}</td>
                            <td>
                                <input type="number" min="0" max="5" step="0.1" value="${s.rating}" 
                                    onchange="window.updateSiteRating('${s.id}', this.value)"
                                    style="width: 80px; padding: 0.5rem; border: 2px solid ${s.rating >= 4.5 ? '#4CAF50' : s.rating >= 4.0 ? '#FFC107' : '#F44336'}; border-radius: 6px; font-weight: 700; text-align: center;">
                                <span style="margin-left: 0.5rem;">⭐</span>
                            </td>
                            <td>
                                <div style="background: #f5f5f5; border-radius: 4px; height: 8px; width: 100px;">
                                    <div style="background: ${(s.activeStudents/s.capacity) >= 0.8 ? '#4CAF50' : '#FFC107'}; height: 100%; width: ${(s.activeStudents/s.capacity)*100}%; border-radius: 4px;"></div>
                                </div>
                                <small>${((s.activeStudents/s.capacity)*100).toFixed(0)}%</small>
                            </td>
                            <td>
                                <button onclick="window.viewSiteFeedback('${s.id}')" class="btn btn-sm btn-outline">💬 Feedback</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Update Site Rating (inline editing)
window.updateSiteRating = function(siteId, newRating) {
    const site = TRAINING_SITES.find(s => s.id === siteId);
    if (site) {
        site.rating = parseFloat(newRating);
        showToast(`✓ Updated ${site.name.split('-')[0].trim()}'s rating to ${newRating} ⭐`);
        
        // Refresh dashboard
        if (document.querySelector('.appe-nav-btn.active')?.textContent.includes('Dashboard')) {
            window.switchAPPESection('dashboard');
        }
    }
};

// Bulk Evaluation Management
window.bulkEvaluationManagement = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10001;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 800px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h2 style="margin: 0; color: #6A1B9A;">📁 Bulk Import/Export Operations</h2>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <div style="display: grid; gap: 1.5rem;">
                <!-- CSV Import -->
                <div style="background: #F3E5F5; padding: 1.5rem; border-radius: 12px; border-left: 5px solid #9C27B0;">
                    <h3 style="margin: 0 0 1rem 0; color: #6A1B9A;">📥 Import from CSV/Excel</h3>
                    <p style="color: #666; margin-bottom: 1rem;">Upload a CSV file with evaluation data. Format: Name, ID, Score/Rating</p>
                    <input type="file" accept=".csv,.xlsx,.xls" id="bulkImportFile" style="margin-bottom: 1rem; padding: 0.5rem; border: 2px solid #9C27B0; border-radius: 6px; width: 100%;">
                    <button onclick="window.processBulkImport()" class="btn btn-primary" style="width: 100%;">Upload & Import</button>
                </div>
                
                <!-- Export All -->
                <div style="background: #E8F5E9; padding: 1.5rem; border-radius: 12px; border-left: 5px solid #4CAF50;">
                    <h3 style="margin: 0 0 1rem 0; color: #1B5E20;">📤 Export All Evaluations</h3>
                    <p style="color: #666; margin-bottom: 1rem;">Download complete evaluation data for all students, preceptors, and sites</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem;">
                        <button onclick="window.exportAllEvaluations('students')" class="btn btn-outline">👨‍🎓 Students</button>
                        <button onclick="window.exportAllEvaluations('preceptors')" class="btn btn-outline">👨‍⚕️ Preceptors</button>
                        <button onclick="window.exportAllEvaluations('sites')" class="btn btn-outline">🏥 Sites</button>
                    </div>
                </div>
                
                <!-- Google Forms Integration -->
                <div style="background: #E3F2FD; padding: 1.5rem; border-radius: 12px; border-left: 5px solid #2196F3;">
                    <h3 style="margin: 0 0 1rem 0; color: #1565C0;">📋 Google Forms Integration</h3>
                    <p style="color: #666; margin-bottom: 1rem;">Set up Google Forms for distributed evaluation collection</p>
                    <button onclick="window.setupAllEvaluationForms()" class="btn btn-primary" style="width: 100%;">Configure Google Forms</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Export All Evaluations
window.exportAllEvaluations = function(type) {
    let csvContent = '';
    let filename = '';
    
    if (type === 'students') {
        csvContent = 'Student Name,ID,Rotation,APPE Score,Status\n';
        ASSIGNMENTS.forEach(a => {
            csvContent += `"${a.student}","${a.id}","${a.rotation}",${a.score},"${a.score >= 95 ? 'Excellent' : a.score >= 85 ? 'Good' : 'Needs Support'}"\n`;
        });
        filename = 'student-evaluations';
    } else if (type === 'preceptors') {
        csvContent = 'Preceptor Name,Specialty,Site,Rating,Students\n';
        PRECEPTORS.forEach(p => {
            csvContent += `"${p.name}","${p.specialty}","${p.site}",${p.rating},${p.students || 0}\n`;
        });
        filename = 'preceptor-ratings';
    } else if (type === 'sites') {
        csvContent = 'Site Name,Type,Capacity,Active Students,Rating,Utilization\n';
        TRAINING_SITES.forEach(s => {
            csvContent += `"${s.name}","${s.type}",${s.capacity},${s.activeStudents},${s.rating},${((s.activeStudents/s.capacity)*100).toFixed(1)}%\n`;
        });
        filename = 'site-ratings';
    }
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    showToast(`✓ Exported ${type} evaluations to CSV`);
};

// Setup Evaluation Forms (Google Forms)
window.setupAllEvaluationForms = function() {
    alert(`📋 Google Forms Setup Instructions:

1. STUDENT EVALUATION FORM:
   • Question 1: Student Name
   • Question 2: Student ID  
   • Question 3: APPE Score (0-100)
   • Question 4: Comments (optional)

2. PRECEPTOR EVALUATION FORM:
   • Question 1: Preceptor Name
   • Question 2: Rating (1-5 stars)
   • Question 3: Feedback (optional)

3. SITE EVALUATION FORM:
   • Question 1: Site Name
   • Question 2: Rating (1-5 stars)
   • Question 3: Facilities Quality
   • Question 4: Comments

After creating forms, copy responses from Google Sheets and paste here for import.`);
};

console.log('✓ Evaluation Management System loaded');
