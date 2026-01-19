// Student Portal - Preference Submission Integration

// Load TIME_PERIODS and ROTATION_TYPES from parent window or define locally
const TIME_PERIODS = window.parent.TIME_PERIODS || [
    { id: 'P1', name: 'Period 1', start: '2026-01-15', end: '2026-02-26', weeks: 6 },
    { id: 'P2', name: 'Period 2', start: '2026-03-01', end: '2026-04-12', weeks: 6 },
    { id: 'P3', name: 'Period 3', start: '2026-04-15', end: '2026-05-27', weeks: 6 },
    { id: 'P4', name: 'Period 4', start: '2026-06-01', end: '2026-07-13', weeks: 6 }
];

const ROTATION_TYPES = window.parent.ROTATION_TYPES || [
    { name: 'Ambulatory Care', duration: '6 weeks' },
    { name: 'Community Pharmacy', duration: '6 weeks' },
    { name: 'Internal Medicine', duration: '6 weeks' },
    { name: 'Pediatrics', duration: '6 weeks' },
    { name: 'Critical Care', duration: '6 weeks' }
];

const PRECEPTORS = window.parent.PRECEPTORS || [];

// Add preference section after student information form is submitted
function showPreferenceSection() {
    const preferenceSection = document.createElement('div');
    preferenceSection.id = 'preferenceSection';
    preferenceSection.className = 'form-section';
    preferenceSection.innerHTML = `
        <div class="info-card">
            <h3 style="margin: 0 0 0.5rem 0;"> Step 2: Rotation Preferences</h3>
            <p style="margin: 0;">Select your preferred time period and rank your rotation choices</p>
        </div>
        
        <div class="form-group">
            <label for="prefPeriod">Preferred Time Period *</label>
            <select id="prefPeriod" required>
                <option value="">-- Select Time Period --</option>
                ${TIME_PERIODS.map(p => `
                    <option value="${p.id}">${p.name} (${p.start} to ${p.end}) - ${p.weeks} weeks</option>
                `).join('')}
            </select>
        </div>
        
        <div id="availabilityInfo" style="display: none; background: #E3F2FD; padding: 1rem; border-radius: 6px; margin-bottom: 1rem;">
            <strong> Available Options for Selected Period:</strong>
            <div id="availabilityDetails" style="margin-top: 0.5rem;"></div>
        </div>
        
        <div class="form-group">
            <label>Rotation Preferences (Rank 1-5)</label>
            ${[1, 2, 3, 4, 5].map(rank => `
                <div style="margin-bottom: 0.75rem;">
                    <label style="font-weight: 500; font-size: 0.9rem;">Choice #${rank}:</label>
                    <select class="rotation-pref" data-rank="${rank}" ${rank === 1 ? 'required' : ''}>
                        <option value="">-- Select Rotation --</option>
                        ${ROTATION_TYPES.map(r => `<option value="${r.name}">${r.name} (${r.duration})</option>`).join('')}
                    </select>
                </div>
            `).join('')}
        </div>
        
        <div id="preceptorSection" style="display: none;">
            <div class="form-group">
                <label>Preferred Preceptors (Optional - Rank 1-3)</label>
                <div id="preceptorList"></div>
            </div>
        </div>
        
        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
            <button type="button" onclick="submitPreferences()" class="btn btn-primary" style="flex: 1;">
                 Submit All Information
            </button>
            <button type="button" onclick="goBack()" class="btn btn-secondary" style="flex: 1;">
                 Back to Info
            </button>
        </div>
    `;
    
    return preferenceSection;
}

// Update available preceptors when period is selected
function updateAvailablePreceptors(periodId) {
    const availabilityInfo = document.getElementById('availabilityInfo');
    const availabilityDetails = document.getElementById('availabilityDetails');
    const preceptorSection = document.getElementById('preceptorSection');
    const preceptorList = document.getElementById('preceptorList');
    
    if (!periodId) {
        availabilityInfo.style.display = 'none';
        preceptorSection.style.display = 'none';
        return;
    }
    
    // Get available preceptors from parent or use demo data
    let availablePreceptors = [];
    try {
        if (window.parent.PRECEPTORS) {
            availablePreceptors = window.parent.PRECEPTORS.filter(p => 
                p.availability && p.availability.includes(periodId)
            );
        }
    } catch (e) {
        console.log('Using local preceptor data');
    }
    
    // Show availability summary
    availabilityInfo.style.display = 'block';
    availabilityDetails.innerHTML = `
        <div style="color: #1976D2; font-weight: 600;">
             ${availablePreceptors.length} preceptors available<br>
             All rotation types available<br>
             Multiple training sites open
        </div>
    `;
    
    // Show preceptor selection if any available
    if (availablePreceptors.length > 0) {
        preceptorSection.style.display = 'block';
        preceptorList.innerHTML = `
            <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.5rem; border: 2px solid #e0e0e0;">
                <strong style="color: #4CAF50;"> ${availablePreceptors.length} preceptors available in this period</strong>
            </div>
            ${[1, 2, 3].map(rank => `
                <div style="margin-bottom: 0.75rem;">
                    <label style="font-weight: 500; font-size: 0.9rem;">Preceptor Choice #${rank}:</label>
                    <select class="preceptor-pref" data-rank="${rank}">
                        <option value="">-- Select Preceptor (Optional) --</option>
                        ${availablePreceptors.map(p => `
                            <option value="${p.name}">${p.name}, ${p.credentials} - ${p.specialty}</option>
                        `).join('')}
                    </select>
                </div>
            `).join('')}
        `;
    } else {
        preceptorSection.style.display = 'none';
    }
}

// Export function to be used in student portal
if (typeof window !== 'undefined') {
    window.showPreferenceSection = showPreferenceSection;
    window.updateAvailablePreceptors = updateAvailablePreceptors;
}
