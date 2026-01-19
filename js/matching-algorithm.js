// ===== STUDENT PREFERENCE MATCHING ALGORITHM =====

// Run matching algorithm for a rotation period
window.runMatchingAlgorithm = function(rotationId) {
    const rotation = ROTATION_PERIODS.find(r => r.id === rotationId);
    if (!rotation) return;
    
    if (!window.STUDENT_PREFERENCES) {
        window.STUDENT_PREFERENCES = [];
    }
    
    // Get all preferences for this rotation
    const preferences = window.STUDENT_PREFERENCES.filter(p => p.rotationId === rotationId);
    
    if (preferences.length === 0) {
        alert('⚠️ No student preferences submitted for ' + rotation.name + '\n\nAsk students to submit their preferences first.');
        return;
    }
    
    // Get available preceptors for this rotation
    const availablePreceptors = PRECEPTORS.filter(p => p.availability && p.availability.includes(rotationId));
    
    if (availablePreceptors.length === 0) {
        alert('⚠️ No preceptors available for ' + rotation.name + '\n\nPlease set preceptor availability first.');
        return;
    }
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10005; overflow-y: auto;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 900px; max-height: 90vh; overflow-y: auto; margin: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">🎯 Run Matching Algorithm</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;">${rotation.name} - ${rotation.start} to ${rotation.end}</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
                <div style="background: #E8F5E9; padding: 1.5rem; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #1B5E20;">${preferences.length}</div>
                    <small style="color: #666;">Preferences Submitted</small>
                </div>
                <div style="background: #FFF3E0; padding: 1.5rem; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #E65100;">${availablePreceptors.length}</div>
                    <small style="color: #666;">Available Preceptors</small>
                </div>
                <div style="background: #E3F2FD; padding: 1.5rem; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #1565C0;">${APPE_STUDENTS.length - preferences.length}</div>
                    <small style="color: #666;">Not Submitted</small>
                </div>
            </div>
            
            <div style="background: #FFF3E0; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                <strong style="color: #E65100;">⚙️ Matching Algorithm:</strong>
                <ol style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; color: #666;">
                    <li><strong>Sort students by GPA</strong> (highest first) - priority advantage</li>
                    <li><strong>Match preferences:</strong>
                        <ul style="margin: 0.25rem 0;">
                            <li>1st choice specialty + 1st choice site = 100 points</li>
                            <li>1st specialty + 2nd site = 90 points</li>
                            <li>2nd specialty + 1st site = 85 points</li>
                            <li>And so on...</li>
                        </ul>
                    </li>
                    <li><strong>Check preceptor availability</strong> - must have rotation in availability array</li>
                    <li><strong>Check capacity</strong> - don't overload preceptors (max 3 students each)</li>
                    <li><strong>Assign best match</strong> for each student in GPA order</li>
                </ol>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="margin: 0 0 1rem 0;">📊 Matching Options</h3>
                <div style="display: grid; gap: 1rem;">
                    <label style="display: flex; align-items: center; padding: 1rem; background: #f5f5f5; border-radius: 8px; cursor: pointer;">
                        <input type="radio" name="matchType" value="automatic" checked style="margin-right: 1rem;">
                        <div>
                            <strong>Automatic Matching (Recommended)</strong>
                            <div style="font-size: 0.85rem; color: #666;">System assigns based on preferences + GPA + availability</div>
                        </div>
                    </label>
                    <label style="display: flex; align-items: center; padding: 1rem; background: #f5f5f5; border-radius: 8px; cursor: pointer;">
                        <input type="radio" name="matchType" value="preview" style="margin-right: 1rem;">
                        <div>
                            <strong>Preview Only</strong>
                            <div style="font-size: 0.85rem; color: #666;">Show results without saving (review first, then finalize)</div>
                        </div>
                    </label>
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem;">
                <button onclick="window.executeMatching('${rotationId}')" class="btn btn-primary" style="flex: 1;">
                    🚀 Run Matching
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" class="btn btn-outline" style="flex: 1;">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Execute the matching algorithm
window.executeMatching = function(rotationId) {
    const matchType = document.querySelector('input[name="matchType"]:checked').value;
    
    // Close options modal
    document.querySelectorAll('[style*="z-index: 10005"]').forEach(m => m.remove());
    
    // Get preferences and students
    const preferences = window.STUDENT_PREFERENCES.filter(p => p.rotationId === rotationId);
    const rotation = ROTATION_PERIODS.find(r => r.id === rotationId);
    const availablePreceptors = PRECEPTORS.filter(p => p.availability && p.availability.includes(rotationId));
    
    // Get students with preferences and sort by GPA (highest first)
    const studentsWithPrefs = preferences.map(pref => {
        const student = APPE_STUDENTS.find(s => s.id === pref.studentId);
        return { ...student, preferences: pref };
    }).sort((a, b) => b.gpa - a.gpa);
    
    // Track preceptor assignments (don't overload)
    const preceptorLoad = {};
    availablePreceptors.forEach(p => {
        preceptorLoad[p.id] = 0;
    });
    
    // Calculate match scores and assign
    const matches = [];
    
    studentsWithPrefs.forEach(student => {
        let bestMatch = null;
        let bestScore = -1;
        
        // Try each preference combination
        for (let specIndex = 0; specIndex < 3; specIndex++) {
            for (let siteIndex = 0; siteIndex < 3; siteIndex++) {
                const prefSpecialty = student.preferences.specialtyPreferences[specIndex];
                const prefSite = student.preferences.sitePreferences[siteIndex];
                
                // Calculate score based on preference ranking
                let score = 0;
                if (specIndex === 0 && siteIndex === 0) score = 100;
                else if (specIndex === 0 && siteIndex === 1) score = 90;
                else if (specIndex === 1 && siteIndex === 0) score = 85;
                else if (specIndex === 0 && siteIndex === 2) score = 80;
                else if (specIndex === 1 && siteIndex === 1) score = 75;
                else if (specIndex === 2 && siteIndex === 0) score = 70;
                else if (specIndex === 1 && siteIndex === 2) score = 65;
                else if (specIndex === 2 && siteIndex === 1) score = 60;
                else if (specIndex === 2 && siteIndex === 2) score = 55;
                
                // Find matching preceptor
                const matchingPreceptor = availablePreceptors.find(p => 
                    p.specialty === prefSpecialty && 
                    p.site === prefSite &&
                    preceptorLoad[p.id] < 3 // Max 3 students per preceptor
                );
                
                if (matchingPreceptor && score > bestScore) {
                    bestScore = score;
                    bestMatch = {
                        student: student,
                        preceptor: matchingPreceptor,
                        specialty: prefSpecialty,
                        site: prefSite,
                        score: score,
                        prefRank: `${specIndex + 1}/${siteIndex + 1}`
                    };
                }
            }
        }
        
        if (bestMatch) {
            preceptorLoad[bestMatch.preceptor.id]++;
            matches.push(bestMatch);
        } else {
            // No match found - assign to any available preceptor
            const anyAvailable = availablePreceptors.find(p => preceptorLoad[p.id] < 3);
            if (anyAvailable) {
                preceptorLoad[anyAvailable.id]++;
                matches.push({
                    student: student,
                    preceptor: anyAvailable,
                    specialty: anyAvailable.specialty,
                    site: anyAvailable.site,
                    score: 0,
                    prefRank: 'N/A'
                });
            }
        }
    });
    
    // Show results
    showMatchingResults(rotationId, matches, matchType === 'preview');
};

// Show matching results
function showMatchingResults(rotationId, matches, previewOnly) {
    const rotation = ROTATION_PERIODS.find(r => r.id === rotationId);
    
    // Calculate statistics
    const perfectMatches = matches.filter(m => m.score === 100).length;
    const goodMatches = matches.filter(m => m.score >= 75 && m.score < 100).length;
    const fairMatches = matches.filter(m => m.score >= 50 && m.score < 75).length;
    const poorMatches = matches.filter(m => m.score < 50).length;
    const averageScore = matches.length > 0 ? (matches.reduce((sum, m) => sum + m.score, 0) / matches.length).toFixed(1) : 0;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10006; overflow-y: auto;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    // Prepare matches JSON (escape for HTML attribute)
    const matchesJSON = JSON.stringify(matches).replace(/"/g, '&quot;');
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 1000px; max-height: 90vh; overflow-y: auto; margin: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">📊 Matching Results ${previewOnly ? '(PREVIEW)' : ''}</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;">${rotation.name} - ${matches.length} students matched</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <!-- Statistics -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
                <div style="background: #E8F5E9; padding: 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: #1B5E20;">${perfectMatches}</div>
                    <small style="color: #666;">Perfect (100)</small>
                </div>
                <div style="background: #FFF9C4; padding: 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: #F57F17;">${goodMatches}</div>
                    <small style="color: #666;">Good (75-99)</small>
                </div>
                <div style="background: #FFE0B2; padding: 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: #E65100;">${fairMatches}</div>
                    <small style="color: #666;">Fair (50-74)</small>
                </div>
                <div style="background: #FFCDD2; padding: 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: #C62828;">${poorMatches}</div>
                    <small style="color: #666;">Poor (<50)</small>
                </div>
            </div>
            
            <div style="background: #E3F2FD; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; text-align: center;">
                <strong style="color: #1565C0;">Average Match Score: ${averageScore} / 100</strong>
            </div>
            
            <!-- Match Details -->
            <div style="margin-bottom: 2rem; max-height: 400px; overflow-y: auto;">
                <table class="data-table" style="width: 100%; font-size: 0.85rem;">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>GPA</th>
                            <th>Preceptor</th>
                            <th>Specialty</th>
                            <th>Site</th>
                            <th>Pref Rank</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${matches.map(m => `
                            <tr>
                                <td><strong>${m.student.name}</strong></td>
                                <td>${m.student.gpa.toFixed(2)}</td>
                                <td>${m.preceptor.name}</td>
                                <td>${m.specialty}</td>
                                <td>${m.site}</td>
                                <td><span style="background: ${m.score === 100 ? '#4CAF50' : m.score >= 75 ? '#FFC107' : m.score >= 50 ? '#FF9800' : '#F44336'}; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">${m.prefRank}</span></td>
                                <td><strong style="color: ${m.score === 100 ? '#4CAF50' : m.score >= 75 ? '#F57F17' : m.score >= 50 ? '#E65100' : '#C62828'};">${m.score}</strong></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            ${previewOnly ? `
                <div style="background: #FFF3E0; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <strong style="color: #E65100;">👁️ Preview Mode:</strong> These matches have NOT been saved yet. Review and click "Finalize Matches" to save to assignments.
                </div>
            ` : ''}
            
            <div style="display: flex; gap: 1rem;">
                <button onclick="window.saveMatchesToAssignments('${rotationId}', '${matchesJSON}')" class="btn btn-primary" style="flex: 1;">
                    ${previewOnly ? '✅ Finalize Matches' : '💾 Save to Assignments'}
                </button>
                <button onclick="window.exportMatchingResults('${matchesJSON}')" class="btn btn-outline" style="flex: 1;">
                    📥 Export CSV
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" class="btn btn-outline">
                    Close
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Save matches to ASSIGNMENTS
window.saveMatchesToAssignments = function(rotationId, matchesJSON) {
    const matches = JSON.parse(matchesJSON.replace(/&quot;/g, '"'));
    const rotation = ROTATION_PERIODS.find(r => r.id === rotationId);
    
    let savedCount = 0;
    
    matches.forEach(match => {
        // Check if assignment already exists
        const existingAssignment = ASSIGNMENTS.find(a => 
            a.studentId === match.student.id && a.rotationId === rotationId
        );
        
        if (!existingAssignment) {
            ASSIGNMENTS.push({
                id: 'ASGN' + (ASSIGNMENTS.length + 1),
                studentId: match.student.id,
                student: match.student.name,
                rotationId: rotationId,
                period: rotation.name,
                rotation: match.specialty,
                site: match.site,
                preceptor: match.preceptor.name,
                start: rotation.start,
                end: rotation.end,
                score: 0,
                status: 'Assigned',
                matchScore: match.score,
                preferenceRank: match.prefRank
            });
            savedCount++;
        }
    });
    
    // Close modal
    document.querySelectorAll('[style*="z-index: 10006"]').forEach(m => m.remove());
    
    showToast(`✅ ${savedCount} matches saved to assignments!`);
    
    // Refresh assignments view
    if (window.switchAPPESection) {
        setTimeout(() => window.switchAPPESection('assignments'), 500);
    }
};

// Export matching results
window.exportMatchingResults = function(matchesJSON) {
    const matches = JSON.parse(matchesJSON.replace(/&quot;/g, '"'));
    
    let csvContent = 'Student Name,Student ID,GPA,Preceptor,Specialty,Site,Preference Rank,Match Score\n';
    
    matches.forEach(m => {
        csvContent += `"${m.student.name}","${m.student.id}",${m.student.gpa},"${m.preceptor.name}","${m.specialty}","${m.site}","${m.prefRank}",${m.score}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'matching-results-' + new Date().toISOString().split('T')[0] + '.csv';
    a.click();
    showToast('✅ Matching results exported to CSV');
};

console.log('✓ Matching Algorithm loaded');
