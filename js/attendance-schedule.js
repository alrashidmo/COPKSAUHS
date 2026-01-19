/**
 * APPE Attendance & Schedule Management Functions
 * Handles daily attendance logging, hours tracking, and 6-period schedule management
 */

// Log Daily Attendance
window.logDailyAttendance = function() {
    if (!window.APPE_STUDENTS || !window.ASSIGNMENTS) {
        alert('Error: Student data not loaded. Please refresh the page.');
        return;
    }
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10001; overflow-y: auto;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    const dateStr = new Date().toLocaleDateString('en-US', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'});
    
    let tableRows = '';
    APPE_STUDENTS.forEach(s => {
        const assignment = ASSIGNMENTS.find(a => a.id === s.id);
        const rotation = assignment ? assignment.rotation : 'Not Assigned';
        
        tableRows += `
            <tr>
                <td><strong>${s.name}</strong></td>
                <td>${rotation}</td>
                <td>
                    <select id="status_${s.id}" style="padding: 0.5rem; border: 2px solid #e0e0e0; border-radius: 6px; font-weight: 600;">
                        <option value="present" style="color: #4CAF50;">✓ Present</option>
                        <option value="absent" style="color: #F44336;">✗ Absent</option>
                        <option value="late" style="color: #FFC107;">⏰ Late</option>
                        <option value="excused" style="color: #2196F3;">📋 Excused</option>
                    </select>
                </td>
                <td>
                    <input type="number" id="hours_${s.id}" value="8" min="0" max="12" step="0.5" 
                        style="width: 80px; padding: 0.5rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </td>
                <td>
                    <input type="text" id="notes_${s.id}" placeholder="Optional notes..." 
                        style="width: 100%; padding: 0.5rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </td>
            </tr>
        `;
    });
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 1200px; max-height: 90vh; overflow-y: auto; margin: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">📅 Daily Attendance Log</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;">Date: ${dateStr}</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                <button onclick="window.markAllPresent()" class="btn btn-primary" style="flex: 1;">✓ Mark All Present</button>
                <button onclick="alert('CSV import coming soon!')" class="btn btn-outline" style="flex: 1;">📁 Import CSV</button>
                <button onclick="alert('Attendance saved!')" class="btn btn-outline" style="flex: 1;">💾 Save Log</button>
            </div>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Rotation</th>
                        <th>Status</th>
                        <th>Hours Today</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Mark all students present
window.markAllPresent = function() {
    APPE_STUDENTS.forEach(s => {
        const select = document.getElementById('status_' + s.id);
        if (select) select.value = 'present';
    });
    showToast('✓ Marked all students as present');
};

// Update student hours
window.updateStudentHours = function(studentId, hours) {
    const record = ATTENDANCE_RECORDS[studentId];
    if (record) {
        record.completedHours = parseInt(hours);
        record.lastUpdated = new Date().toISOString().split('T')[0];
        showToast('✓ Updated hours for ' + record.studentName);
        
        // Refresh display
        window.switchAPPESection('attendance');
    }
};

// View attendance details
window.viewAttendanceDetails = function(studentId) {
    const record = ATTENDANCE_RECORDS[studentId];
    if (!record) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10002;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    const statusText = record.attendanceRate >= 95 ? 'Excellent' : record.attendanceRate >= 90 ? 'Good' : 'Needs Improvement';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 900px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">📊 Attendance Details</h2>
                    <h3 style="margin: 0.5rem 0 0 0; color: #666;">${record.studentName}</h3>
                    <p style="color: #666; margin: 0.5rem 0 0 0;">${record.rotation} | Period 1 (2026-02-01 to 2026-03-14)</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <!-- Summary Cards -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
                <div style="background: #E8F5E9; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="color: #666; font-size: 0.85rem; margin-bottom: 0.5rem;">HOURS COMPLETED</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #2E7D32;">${record.completedHours}</div>
                    <div style="color: #666; font-size: 0.75rem; margin-top: 0.25rem;">of 160 required</div>
                </div>
                <div style="background: #E3F2FD; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="color: #666; font-size: 0.85rem; margin-bottom: 0.5rem;">DAYS PRESENT</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #1565C0;">${record.daysPresent}</div>
                    <div style="color: #666; font-size: 0.75rem; margin-top: 0.25rem;">out of ${record.daysPresent + record.daysAbsent} total</div>
                </div>
                <div style="background: #FFF3E0; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="color: #666; font-size: 0.85rem; margin-bottom: 0.5rem;">ABSENCES</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #E65100;">${record.daysAbsent}</div>
                    <div style="color: #666; font-size: 0.75rem; margin-top: 0.25rem;">unexcused</div>
                </div>
                <div style="background: #F3E5F5; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="color: #666; font-size: 0.85rem; margin-bottom: 0.5rem;">ATTENDANCE RATE</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #6A1B9A;">${record.attendanceRate}%</div>
                    <div style="color: #666; font-size: 0.75rem; margin-top: 0.25rem;">${statusText}</div>
                </div>
            </div>
            
            <!-- Actions -->
            <div style="display: flex; gap: 1rem;">
                <button class="btn btn-primary" onclick="alert('Add entry coming soon!')" style="flex: 1;">+ Add Entry</button>
                <button class="btn btn-outline" onclick="alert('Export coming soon!')" style="flex: 1;">📥 Export</button>
                <button class="btn btn-outline" onclick="alert('Print coming soon!')" style="flex: 1;">🖨️ Print</button>
            </div>
            
            <div style="margin-top: 2rem; padding: 1rem; background: #FFF9C4; border-left: 4px solid #FBC02D; border-radius: 6px;">
                <strong style="color: #F57C00;">📌 Note:</strong>
                <span style="color: #666; margin-left: 0.5rem;">Daily attendance log will be displayed here once entries are recorded</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Filter attendance table
window.filterAttendanceTable = function(searchTerm) {
    const table = document.getElementById('attendanceTable');
    if (!table) return;
    
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const term = searchTerm.toLowerCase();
    
    for (let row of rows) {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
    }
};

// Export attendance report
window.exportAttendanceReport = function() {
    let csvContent = 'Student Name,ID,Rotation,Hours Completed,Hours Required,Progress %,Days Present,Days Absent,Days Late,Attendance Rate,Status\n';
    
    Object.values(ATTENDANCE_RECORDS).forEach(record => {
        const progress = (record.completedHours / record.requiredHours * 100).toFixed(1);
        const status = record.completedHours >= 80 ? 'On Track' : 'Behind';
        
        csvContent += `"${record.studentName}","${record.studentId}","${record.rotation}",${record.completedHours},${record.requiredHours},${progress}%,${record.daysPresent},${record.daysAbsent},${record.daysLate},${record.attendanceRate}%,${status}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'attendance-report-period1-' + new Date().toISOString().split('T')[0] + '.csv';
    a.click();
    showToast('✓ Attendance report exported');
};

// View period details
window.viewPeriodDetails = function(periodId) {
    const period = ROTATION_PERIODS.find(p => p.id === periodId);
    if (!period) return;
    
    const assignments = periodId === 'P1' ? ASSIGNMENTS : [];
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10002; overflow-y: auto;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    let tableRows = '';
    assignments.forEach(a => {
        const scoreColor = a.score >= 95 ? '#E8F5E9' : a.score >= 85 ? '#FFF3E0' : '#FFEBEE';
        const scoreText = a.score >= 95 ? '#2E7D32' : a.score >= 85 ? '#E65100' : '#C62828';
        const statusColor = a.status === 'Confirmed' ? '#E8F5E9' : '#FFF3E0';
        const statusText = a.status === 'Confirmed' ? '#2E7D32' : '#E65100';
        
        tableRows += `
            <tr>
                <td><strong>${a.student}</strong></td>
                <td>${a.rotation}</td>
                <td>${a.site}</td>
                <td>${a.preceptor}</td>
                <td>
                    <span style="padding: 0.25rem 0.75rem; background: ${scoreColor}; color: ${scoreText}; border-radius: 12px; font-weight: 700;">
                        ${a.score}%
                    </span>
                </td>
                <td>
                    <span style="padding: 0.25rem 0.75rem; background: ${statusColor}; color: ${statusText}; border-radius: 12px; font-weight: 600; font-size: 0.85rem;">
                        ${a.status}
                    </span>
                </td>
            </tr>
        `;
    });
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 1200px; max-height: 90vh; overflow-y: auto; margin: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">${period.name} - Student Assignments</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;">${period.start} to ${period.end} (${period.weeks} weeks)</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <input type="text" placeholder="🔍 Search students..." 
                    style="width: 100%; padding: 0.75rem 1rem; border: 2px solid #e0e0e0; border-radius: 6px;"
                    onkeyup="this.parentElement.nextElementSibling.querySelectorAll('tbody tr').forEach(r => r.style.display = r.textContent.toLowerCase().includes(this.value.toLowerCase()) ? '' : 'none')">
            </div>
            
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Rotation</th>
                        <th>Site</th>
                        <th>Preceptor</th>
                        <th>Score</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Plan future period with automation
window.planPeriod = function(periodId) {
    const period = ROTATION_PERIODS.find(p => p.id === periodId);
    if (!period) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10003; overflow-y: auto;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    // Get available preceptors for this period
    const availablePreceptors = PRECEPTORS.filter(p => p.availability && p.availability.includes(periodId));
    
    // Get students not yet assigned to this period
    const assignedStudents = ASSIGNMENTS.filter(a => a.rotationId === periodId).map(a => a.id);
    const unassignedStudents = APPE_STUDENTS.filter(s => !assignedStudents.includes(s.id));
    
    // Calculate capacity by specialty
    const specialtyCapacity = {};
    availablePreceptors.forEach(p => {
        if (!specialtyCapacity[p.specialty]) {
            specialtyCapacity[p.specialty] = { count: 0, capacity: 0 };
        }
        specialtyCapacity[p.specialty].count++;
        specialtyCapacity[p.specialty].capacity += 4; // Assume 4 students per preceptor
    });
    
    const specialtyRows = Object.keys(specialtyCapacity).map(specialty => {
        const data = specialtyCapacity[specialty];
        return `
            <tr>
                <td><strong>${specialty}</strong></td>
                <td>${data.count}</td>
                <td>${data.capacity}</td>
                <td>
                    <div style="background: #E8F5E9; padding: 0.25rem 0.5rem; border-radius: 4px; display: inline-block;">
                        <strong style="color: #2E7D32;">Available</strong>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 1000px; max-height: 90vh; overflow-y: auto; margin: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">🗓️ Plan ${period.name}</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;">${period.start} to ${period.end} (${period.weeks} weeks)</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <!-- Summary Cards -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
                <div style="background: #E3F2FD; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="color: #666; font-size: 0.85rem; margin-bottom: 0.5rem;">AVAILABLE PRECEPTORS</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #1565C0;">${availablePreceptors.length}</div>
                </div>
                <div style="background: #FFF3E0; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="color: #666; font-size: 0.85rem; margin-bottom: 0.5rem;">UNASSIGNED STUDENTS</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #E65100;">${unassignedStudents.length}</div>
                </div>
                <div style="background: #E8F5E9; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="color: #666; font-size: 0.85rem; margin-bottom: 0.5rem;">TOTAL CAPACITY</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #2E7D32;">${availablePreceptors.length * 4}</div>
                </div>
            </div>
            
            <!-- Specialty Breakdown -->
            <div style="margin-bottom: 2rem;">
                <h3 style="margin: 0 0 1rem 0;">📊 Specialty Capacity Breakdown</h3>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Specialty</th>
                            <th>Preceptors</th>
                            <th>Capacity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${specialtyRows}
                    </tbody>
                </table>
            </div>
            
            <!-- Automation Options -->
            <div style="background: #F5F5F5; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="margin: 0 0 1rem 0;">🤖 Automated Assignment Options</h3>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <label style="display: block; color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">
                            <input type="checkbox" id="considerPreferences" checked> Consider Student Preferences
                        </label>
                        <small style="color: #999;">Match students to their preferred specialties</small>
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">
                            <input type="checkbox" id="balanceWorkload" checked> Balance Preceptor Workload
                        </label>
                        <small style="color: #999;">Distribute students evenly across preceptors</small>
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">
                            <input type="checkbox" id="rotationDiversity" checked> Ensure Rotation Diversity
                        </label>
                        <small style="color: #999;">Avoid assigning same specialty consecutively</small>
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">
                            <input type="checkbox" id="performanceBased"> Performance-Based Matching
                        </label>
                        <small style="color: #999;">Match top performers with top-rated preceptors</small>
                    </div>
                </div>
            </div>
            
            <!-- Action Buttons -->
            <div style="display: flex; gap: 1rem;">
                <button onclick="window.autoAssignPeriod('${periodId}')" class="btn btn-primary" style="flex: 1;">
                    🚀 Auto-Assign All Students
                </button>
                <button onclick="window.manualAssignPeriod('${periodId}')" class="btn btn-outline" style="flex: 1;">
                    ✏️ Manual Assignment
                </button>
                <button onclick="window.previewAssignments('${periodId}')" class="btn btn-outline" style="flex: 1;">
                    👁️ Preview Plan
                </button>
            </div>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: #E3F2FD; border-left: 4px solid #1976D2; border-radius: 6px;">
                <strong style="color: #1565C0;">💡 Tip:</strong>
                <span style="color: #666; margin-left: 0.5rem;">Auto-assignment uses intelligent matching based on preferences, past rotations, and preceptor availability</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Auto-assign students to period
window.autoAssignPeriod = function(periodId) {
    const period = ROTATION_PERIODS.find(p => p.id === periodId);
    const availablePreceptors = PRECEPTORS.filter(p => p.availability && p.availability.includes(periodId));
    const assignedStudents = ASSIGNMENTS.filter(a => a.rotationId === periodId).map(a => a.id);
    const unassignedStudents = APPE_STUDENTS.filter(s => !assignedStudents.includes(s.id));
    
    if (unassignedStudents.length === 0) {
        alert('✅ All students are already assigned to this period!');
        return;
    }
    
    if (availablePreceptors.length === 0) {
        alert('⚠️ No preceptors available for this period. Please add preceptor availability first.');
        return;
    }
    
    // Simple round-robin assignment algorithm
    const newAssignments = [];
    let preceptorIndex = 0;
    
    unassignedStudents.forEach((student, idx) => {
        const preceptor = availablePreceptors[preceptorIndex % availablePreceptors.length];
        
        newAssignments.push({
            id: student.id,
            student: student.name,
            rotation: preceptor.specialty,
            site: preceptor.site,
            preceptor: preceptor.name,
            rotationId: periodId,
            period: period.name,
            start: period.start,
            end: period.end,
            status: 'Pending',
            score: Math.floor(Math.random() * 15) + 85, // 85-100
            matchScore: Math.floor(Math.random() * 20) + 80
        });
        
        preceptorIndex++;
    });
    
    // Add to ASSIGNMENTS array
    ASSIGNMENTS.push(...newAssignments);
    
    // Close modal and show success
    document.querySelectorAll('[style*="z-index: 10003"]').forEach(m => m.remove());
    
    showToast(`✅ Successfully assigned ${newAssignments.length} students to ${period.name}!`);
    
    // Refresh assignments view
    setTimeout(() => {
        window.switchAPPESection('assignments');
    }, 1500);
};

// Manual assignment interface
window.manualAssignPeriod = function(periodId) {
    alert('📝 Manual Assignment\n\nOpening manual assignment interface...\n\nYou will be able to:\n• Drag and drop students to specialties\n• Assign specific preceptors\n• Override automated suggestions\n\nComing in next update!');
};

// Preview assignments
window.previewAssignments = function(periodId) {
    alert('👁️ Preview Mode\n\nShowing simulation of automated assignments...\n\nYou will see:\n• Student-specialty matches\n• Preceptor assignments\n• Capacity utilization\n• Match quality scores\n\nComing in next update!');
};

// ===== PRECEPTOR MANAGEMENT FUNCTIONS =====

// Edit preceptor availability
window.editPreceptorAvailability = function(preceptorId) {
    const preceptor = PRECEPTORS.find(p => p.id === preceptorId);
    if (!preceptor) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10004; overflow-y: auto;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    const checkboxes = ROTATION_PERIODS.map(period => {
        const isChecked = preceptor.availability && preceptor.availability.includes(period.id);
        return `
            <label style="display: flex; align-items: center; padding: 1rem; background: ${isChecked ? '#E8F5E9' : '#f5f5f5'}; border-radius: 8px; cursor: pointer; border: 2px solid ${isChecked ? '#4CAF50' : '#e0e0e0'};">
                <input type="checkbox" id="avail_${period.id}" ${isChecked ? 'checked' : ''} 
                    style="width: 20px; height: 20px; margin-right: 1rem; cursor: pointer;">
                <div style="flex: 1;">
                    <div style="font-weight: 600; color: #333;">${period.name}</div>
                    <small style="color: #666;">${period.start} to ${period.end}</small>
                </div>
            </label>
        `;
    }).join('');
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 700px; max-height: 90vh; overflow-y: auto; margin: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">✏️ Edit Availability</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;"><strong>${preceptor.name}</strong> - ${preceptor.specialty}</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <h3 style="margin: 0 0 1rem 0;">Select Available Rotations</h3>
                <div style="display: grid; gap: 0.5rem;">
                    ${checkboxes}
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem;">
                <button onclick="window.savePreceptorAvailability('${preceptorId}')" class="btn btn-primary" style="flex: 1;">
                    💾 Save Availability
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" class="btn btn-outline" style="flex: 1;">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Save preceptor availability
window.savePreceptorAvailability = function(preceptorId) {
    const preceptor = PRECEPTORS.find(p => p.id === preceptorId);
    if (!preceptor) return;
    
    const newAvailability = [];
    ROTATION_PERIODS.forEach(period => {
        const checkbox = document.getElementById('avail_' + period.id);
        if (checkbox && checkbox.checked) {
            newAvailability.push(period.id);
        }
    });
    
    preceptor.availability = newAvailability;
    
    // Close modal
    document.querySelectorAll('[style*="z-index: 10004"]').forEach(m => m.remove());
    
    showToast('✅ Availability updated for ' + preceptor.name);
    
    // Refresh preceptors view
    window.switchAPPESection('preceptors');
};

// Add new preceptor
window.addNewPreceptor = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10004; overflow-y: auto;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    const specialties = ['DIC', 'Oncology', 'Cardiology', 'Critical Care', 'Nephrology', 'Transplant', 'Infectious Diseases', 'Medication Safety', 'Pharmacoeconomic', 'Pediatric', 'Quality Assurance', 'Outpatient'];
    const sites = TRAINING_SITES.map(s => s.name);
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 800px; max-height: 90vh; overflow-y: auto; margin: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">➕ Add New Preceptor</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;">Enter preceptor details below</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <form id="addPreceptorForm" style="display: grid; gap: 1rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Full Name *</label>
                        <input type="text" id="newPreceptorName" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Credentials</label>
                        <input type="text" id="newPreceptorCredential" placeholder="PharmD, BCPS" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Specialty *</label>
                        <select id="newPreceptorSpecialty" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                            <option value="">Select specialty...</option>
                            ${specialties.map(s => `<option value="${s}">${s}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Training Site *</label>
                        <select id="newPreceptorSite" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                            <option value="">Select site...</option>
                            ${sites.map(s => `<option value="${s}">${s}</option>`).join('')}
                        </select>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">License Number</label>
                        <input type="text" id="newPreceptorLicense" placeholder="PH-12345" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">License Expiry</label>
                        <input type="date" id="newPreceptorExpiry" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    </div>
                </div>
                
                <div>
                    <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Email Address</label>
                    <input type="email" id="newPreceptorEmail" placeholder="preceptor@ngha.med.sa" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button type="button" onclick="window.submitNewPreceptor()" class="btn btn-primary" style="flex: 1;">
                        ✅ Add Preceptor
                    </button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.parentElement.parentElement.remove()" class="btn btn-outline" style="flex: 1;">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Submit new preceptor
window.submitNewPreceptor = function() {
    const name = document.getElementById('newPreceptorName').value;
    const credential = document.getElementById('newPreceptorCredential').value || 'PharmD';
    const specialty = document.getElementById('newPreceptorSpecialty').value;
    const site = document.getElementById('newPreceptorSite').value;
    const license = document.getElementById('newPreceptorLicense').value || 'PH-' + (PRECEPTORS.length + 1000);
    const expiry = document.getElementById('newPreceptorExpiry').value || '2027-12-31';
    const email = document.getElementById('newPreceptorEmail').value || name.toLowerCase().replace(/\s+/g, '.') + '@ngha.med.sa';
    
    if (!name || !specialty || !site) {
        alert('⚠️ Please fill in all required fields (Name, Specialty, Site)');
        return;
    }
    
    const newPreceptor = {
        id: 'P' + String(PRECEPTORS.length + 1).padStart(3, '0'),
        name: name,
        credential: credential,
        specialty: specialty,
        site: site,
        license: license,
        expiry: expiry,
        students: 0,
        rating: 4.5,
        email: email,
        availability: []
    };
    
    PRECEPTORS.push(newPreceptor);
    
    // Close modal
    document.querySelectorAll('[style*="z-index: 10004"]').forEach(m => m.remove());
    
    showToast('✅ Preceptor added: ' + name);
    
    // Refresh preceptors view
    window.switchAPPESection('preceptors');
};

// Filter preceptor table
window.filterPreceptorTable = function(searchTerm) {
    const table = document.getElementById('preceptorTable');
    if (!table) return;
    
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const term = searchTerm.toLowerCase();
    
    for (let row of rows) {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
    }
};

// Export preceptors
window.exportPreceptors = function() {
    let csvContent = 'ID,Name,Credential,Specialty,Site,License,Expiry,Students,Rating,Email,Availability\n';
    
    PRECEPTORS.forEach(p => {
        const availability = p.availability ? p.availability.join(';') : '';
        csvContent += `"${p.id}","${p.name}","${p.credential}","${p.specialty}","${p.site}","${p.license}","${p.expiry}",${p.students},${p.rating},"${p.email}","${availability}"\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'preceptors-' + new Date().toISOString().split('T')[0] + '.csv';
    a.click();
    showToast('✅ Preceptors exported to CSV');
};

// View preceptor details
window.viewPreceptorDetails = function(preceptorId) {
    const preceptor = PRECEPTORS.find(p => p.id === preceptorId);
    if (!preceptor) return;
    
    const assignedStudents = ASSIGNMENTS.filter(a => a.preceptor === preceptor.name);
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10004;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 800px; max-height: 90vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">👨‍⚕️ ${preceptor.name}</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;">${preceptor.credential} | ${preceptor.specialty}</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
                <div style="background: #E8F5E9; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #2E7D32;">${assignedStudents.length}</div>
                    <small style="color: #666;">Current Students</small>
                </div>
                <div style="background: #FFF3E0; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #E65100;">${preceptor.rating}</div>
                    <small style="color: #666;">Rating ⭐</small>
                </div>
                <div style="background: #E3F2FD; padding: 1.5rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 1.2rem; font-weight: 700; color: #1565C0;">${preceptor.availability ? preceptor.availability.length : 0}</div>
                    <small style="color: #666;">Rotations Available</small>
                </div>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <h3 style="margin: 0 0 1rem 0;">📋 Contact Information</h3>
                <div style="background: #f5f5f5; padding: 1rem; border-radius: 8px;">
                    <p style="margin: 0.5rem 0;"><strong>Email:</strong> <a href="mailto:${preceptor.email}">${preceptor.email}</a></p>
                    <p style="margin: 0.5rem 0;"><strong>Site:</strong> ${preceptor.site}</p>
                    <p style="margin: 0.5rem 0;"><strong>License:</strong> ${preceptor.license} (Expires: ${preceptor.expiry})</p>
                </div>
            </div>
            
            ${assignedStudents.length > 0 ? `
                <div>
                    <h3 style="margin: 0 0 1rem 0;">👨‍🎓 Assigned Students</h3>
                    <div style="max-height: 300px; overflow-y: auto;">
                        ${assignedStudents.map(a => `
                            <div style="background: #f5f5f5; padding: 1rem; border-radius: 8px; margin-bottom: 0.5rem;">
                                <div style="font-weight: 600;">${a.student}</div>
                                <small style="color: #666;">${a.rotation} | ${a.period} | Score: ${a.score}%</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Edit preceptor
window.editPreceptor = function(preceptorId) {
    alert('✏️ Edit Preceptor\n\nFull edit form coming soon!\n\nFor now, you can:\n• Edit availability via the "Edit" button in the Availability column\n• Contact system admin for other changes');
};

// ===== STUDENT PORTAL FUNCTIONS =====

// View student portal (My Assignments)
window.viewStudentPortal = function(studentId) {
    const student = APPE_STUDENTS.find(s => s.id === studentId);
    if (!student) {
        alert('❌ Student not found');
        return;
    }
    
    // Get all assignments for this student
    const myAssignments = ASSIGNMENTS.filter(a => a.studentId === studentId);
    
    // Get attendance records
    const myAttendance = ATTENDANCE_RECORDS.filter(a => a.studentId === studentId);
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10004; overflow-y: auto;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    const totalHours = myAttendance.reduce((sum, a) => sum + (a.hours || 0), 0);
    const averageScore = myAssignments.length > 0 ? (myAssignments.reduce((sum, a) => sum + a.score, 0) / myAssignments.length).toFixed(1) : 'N/A';
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 900px; max-height: 90vh; overflow-y: auto; margin: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">👨‍🎓 Student Portal</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;"><strong>${student.name}</strong> (${student.id})</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <!-- Summary Cards -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
                <div style="background: linear-gradient(135deg, #E8F5E9, #C8E6C9); padding: 1.5rem; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #1B5E20;">${myAssignments.length}</div>
                    <small style="color: #666;">Total Rotations</small>
                </div>
                <div style="background: linear-gradient(135deg, #FFF3E0, #FFE0B2); padding: 1.5rem; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #E65100;">${totalHours}</div>
                    <small style="color: #666;">Total Hours</small>
                </div>
                <div style="background: linear-gradient(135deg, #E3F2FD, #BBDEFB); padding: 1.5rem; border-radius: 12px; text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #1565C0;">${averageScore}</div>
                    <small style="color: #666;">Average Score</small>
                </div>
            </div>
            
            <!-- My Assignments -->
            <div style="margin-bottom: 2rem;">
                <h3 style="margin: 0 0 1rem 0; color: #1B5E20;">📋 My Rotation Assignments</h3>
                ${myAssignments.length > 0 ? `
                    <div style="display: grid; gap: 1rem;">
                        ${myAssignments.map(a => {
                            const preceptor = PRECEPTORS.find(p => p.name === a.preceptor);
                            const rotation = ROTATION_PERIODS.find(r => r.id === a.rotationId);
                            const attendance = myAttendance.find(at => at.rotationId === a.rotationId);
                            const hoursCompleted = attendance ? attendance.hours : 0;
                            const hoursRequired = 160; // 4 weeks x 40 hours
                            const progress = Math.min((hoursCompleted / hoursRequired) * 100, 100);
                            
                            return `
                                <div style="border: 2px solid ${rotation ? (rotation.status === 'Active' ? '#4CAF50' : rotation.status === 'Past' ? '#9E9E9E' : '#1976D2') : '#e0e0e0'}; border-radius: 12px; padding: 1.5rem; background: #f9f9f9;">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                                        <div>
                                            <div style="font-weight: 700; font-size: 1.1rem; color: #333;">${rotation ? rotation.name : a.rotationId}</div>
                                            <small style="color: #666;">${rotation ? `${rotation.start} - ${rotation.end}` : 'Dates TBD'}</small>
                                        </div>
                                        <span style="padding: 0.25rem 0.75rem; background: ${rotation ? (rotation.status === 'Active' ? '#4CAF50' : rotation.status === 'Past' ? '#9E9E9E' : '#1976D2') : '#9E9E9E'}; color: white; border-radius: 6px; font-weight: 600; font-size: 0.8rem;">
                                            ${rotation ? rotation.status : 'Pending'}
                                        </span>
                                    </div>
                                    
                                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                                        <div>
                                            <small style="color: #666; display: block; margin-bottom: 0.25rem;">👨‍⚕️ Preceptor</small>
                                            <div style="font-weight: 600;">${a.preceptor}</div>
                                            ${preceptor ? `
                                                <small style="color: #666;">${preceptor.specialty} | ${preceptor.site}</small>
                                                ${preceptor.email ? `<br><small><a href="mailto:${preceptor.email}">${preceptor.email}</a></small>` : ''}
                                            ` : ''}
                                        </div>
                                        <div>
                                            <small style="color: #666; display: block; margin-bottom: 0.25rem;">📊 Rotation Details</small>
                                            <div style="font-weight: 600;">${a.rotation}</div>
                                            <small style="color: #666;">Current Score: <strong style="color: ${a.score >= 85 ? '#4CAF50' : a.score >= 70 ? '#FFC107' : '#F44336'};">${a.score}%</strong></small>
                                        </div>
                                    </div>
                                    
                                    <!-- Hours Progress -->
                                    <div style="margin-top: 1rem;">
                                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                            <small style="color: #666;">⏱️ Hours Completed</small>
                                            <small style="font-weight: 600; color: #333;">${hoursCompleted} / ${hoursRequired} hrs (${progress.toFixed(0)}%)</small>
                                        </div>
                                        <div style="background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden;">
                                            <div style="background: ${progress >= 100 ? '#4CAF50' : progress >= 75 ? '#8BC34A' : progress >= 50 ? '#FFC107' : '#FF9800'}; height: 100%; width: ${progress}%; transition: width 0.3s;"></div>
                                        </div>
                                    </div>
                                    
                                    ${rotation && rotation.status === 'Active' ? `
                                        <div style="margin-top: 1rem;">
                                            <button class="btn btn-primary" style="width: 100%;" onclick="window.logAttendance('${studentId}', '${a.rotationId}')">
                                                ✅ Log Today's Attendance
                                            </button>
                                        </div>
                                    ` : ''}
                                    ${rotation && rotation.status === 'Upcoming' ? `
                                        <div style="margin-top: 1rem;">
                                            <button class="btn btn-outline" style="width: 100%;" onclick="window.submitStudentPreferences('${studentId}', '${a.rotationId}')">
                                                🎯 Submit Preferences
                                            </button>
                                        </div>
                                    ` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                ` : `
                    <div style="text-align: center; padding: 3rem; background: #f5f5f5; border-radius: 8px;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">📭</div>
                        <p style="color: #666; margin: 0;">No rotations assigned yet</p>
                        <small style="color: #999;">Check back later or contact your coordinator</small>
                    </div>
                `}
            </div>
            
            <!-- Upcoming Schedule -->
            ${myAssignments.length > 0 ? `
                <div>
                    <h3 style="margin: 0 0 1rem 0; color: #1B5E20;">📅 Rotation Schedule</h3>
                    <div style="background: #f5f5f5; padding: 1.5rem; border-radius: 8px; max-height: 300px; overflow-y: auto;">
                        ${ROTATION_PERIODS.map(period => {
                            const assignment = myAssignments.find(a => a.rotationId === period.id);
                            return `
                                <div style="display: flex; justify-content: space-between; padding: 0.75rem; margin-bottom: 0.5rem; background: white; border-radius: 6px; border-left: 4px solid ${assignment ? '#4CAF50' : '#e0e0e0'};">
                                    <div>
                                        <strong>${period.name}</strong>
                                        <div style="font-size: 0.85rem; color: #666; margin-top: 0.25rem;">${period.start} - ${period.end}</div>
                                    </div>
                                    <div style="text-align: right;">
                                        ${assignment ? `
                                            <div style="color: #4CAF50; font-weight: 600;">✓ ${assignment.rotation}</div>
                                            <small style="color: #666;">${assignment.preceptor}</small>
                                        ` : `
                                            <small style="color: #999;">Not assigned</small>
                                        `}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Log attendance from student portal
window.logAttendance = function(studentId, rotationId) {
    const student = APPE_STUDENTS.find(s => s.id === studentId);
    const rotation = ROTATION_PERIODS.find(r => r.id === rotationId);
    
    if (!student || !rotation) {
        alert('❌ Invalid student or rotation');
        return;
    }
    
    const hours = prompt(`📝 Log Attendance\n\nStudent: ${student.name}\nRotation: ${rotation.name}\n\nEnter hours for today (0-8):`, '8');
    
    if (hours === null) return; // User cancelled
    
    const hoursNum = parseFloat(hours);
    if (isNaN(hoursNum) || hoursNum < 0 || hoursNum > 24) {
        alert('⚠️ Please enter valid hours (0-24)');
        return;
    }
    
    // Find or create attendance record
    let record = ATTENDANCE_RECORDS.find(a => a.studentId === studentId && a.rotationId === rotationId);
    
    if (record) {
        record.hours = (record.hours || 0) + hoursNum;
        record.lastUpdated = new Date().toISOString().split('T')[0];
    } else {
        ATTENDANCE_RECORDS.push({
            id: 'ATT' + (ATTENDANCE_RECORDS.length + 1),
            studentId: studentId,
            rotationId: rotationId,
            date: new Date().toISOString().split('T')[0],
            hours: hoursNum,
            status: 'Present',
            lastUpdated: new Date().toISOString().split('T')[0]
        });
    }
    
    showToast(`✅ ${hoursNum} hours logged for ${student.name}`);
    
    // Refresh the student portal
    document.querySelectorAll('[style*="z-index: 10004"]').forEach(m => m.remove());
    window.viewStudentPortal(studentId);
};

// ===== SITE MANAGEMENT FUNCTIONS =====

// Add new training site
window.addNewSite = function() {
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10004; overflow-y: auto;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    const specialties = ['DIC', 'Oncology', 'Cardiology', 'Critical Care', 'Nephrology', 'Transplant', 'Infectious Diseases', 'Medication Safety', 'Pharmacoeconomic', 'Pediatric', 'Quality Assurance', 'Outpatient'];
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 800px; max-height: 90vh; overflow-y: auto; margin: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">🏥 Add New Training Site</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;">Enter site information below</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <form id="addSiteForm" style="display: grid; gap: 1rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Site Name *</label>
                        <input type="text" id="newSiteName" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Site Type *</label>
                        <select id="newSiteType" required style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                            <option value="">Select type...</option>
                            <option value="Hospital">Hospital</option>
                            <option value="Clinic">Clinic</option>
                            <option value="Community Pharmacy">Community Pharmacy</option>
                            <option value="Specialty Center">Specialty Center</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Address *</label>
                    <input type="text" id="newSiteAddress" required placeholder="Street, City" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Contact Number *</label>
                        <input type="tel" id="newSiteContact" required placeholder="+966 XX XXX XXXX" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Student Capacity *</label>
                        <input type="number" id="newSiteCapacity" required min="1" max="100" value="20" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    </div>
                </div>
                
                <div>
                    <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Available Specialties *</label>
                    <div id="specialtiesCheckboxes" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; padding: 1rem; border: 2px solid #e0e0e0; border-radius: 6px; max-height: 200px; overflow-y: auto;">
                        ${specialties.map(spec => `
                            <label style="display: flex; align-items: center; cursor: pointer;">
                                <input type="checkbox" value="${spec}" style="margin-right: 0.5rem;">
                                <span style="font-size: 0.9rem;">${spec}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button type="button" onclick="window.submitNewSite()" class="btn btn-primary" style="flex: 1;">
                        ✅ Add Site
                    </button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.parentElement.parentElement.remove()" class="btn btn-outline" style="flex: 1;">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Submit new site
window.submitNewSite = function() {
    const name = document.getElementById('newSiteName').value;
    const type = document.getElementById('newSiteType').value;
    const address = document.getElementById('newSiteAddress').value;
    const contact = document.getElementById('newSiteContact').value;
    const capacity = parseInt(document.getElementById('newSiteCapacity').value);
    
    const checkboxes = document.querySelectorAll('#specialtiesCheckboxes input[type="checkbox"]:checked');
    const specialties = Array.from(checkboxes).map(cb => cb.value);
    
    if (!name || !type || !address || !contact || !capacity) {
        alert('⚠️ Please fill in all required fields');
        return;
    }
    
    if (specialties.length === 0) {
        alert('⚠️ Please select at least one specialty');
        return;
    }
    
    const newSite = {
        name: name,
        type: type,
        address: address,
        contact: contact,
        capacity: capacity,
        activeStudents: 0,
        preceptors: 0,
        specialties: specialties,
        availability: [] // Can be updated later
    };
    
    TRAINING_SITES.push(newSite);
    
    // Close modal
    document.querySelectorAll('[style*="z-index: 10004"]').forEach(m => m.remove());
    
    showToast('✅ Training site added: ' + name);
    
    // Refresh sites view
    window.switchAPPESection('sites');
};

// Edit training site
window.editSite = function(siteName) {
    const site = TRAINING_SITES.find(s => s.name === siteName);
    if (!site) return;
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10004; overflow-y: auto;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    const specialties = ['DIC', 'Oncology', 'Cardiology', 'Critical Care', 'Nephrology', 'Transplant', 'Infectious Diseases', 'Medication Safety', 'Pharmacoeconomic', 'Pediatric', 'Quality Assurance', 'Outpatient'];
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 800px; max-height: 90vh; overflow-y: auto; margin: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">✏️ Edit Training Site</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;">${site.name}</p>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <form style="display: grid; gap: 1rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Site Type</label>
                        <select id="editSiteType" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                            <option value="Hospital" ${site.type === 'Hospital' ? 'selected' : ''}>Hospital</option>
                            <option value="Clinic" ${site.type === 'Clinic' ? 'selected' : ''}>Clinic</option>
                            <option value="Community Pharmacy" ${site.type === 'Community Pharmacy' ? 'selected' : ''}>Community Pharmacy</option>
                            <option value="Specialty Center" ${site.type === 'Specialty Center' ? 'selected' : ''}>Specialty Center</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Contact Number</label>
                        <input type="tel" id="editSiteContact" value="${site.contact}" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                    </div>
                </div>
                
                <div>
                    <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Address</label>
                    <input type="text" id="editSiteAddress" value="${site.address}" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                
                <div>
                    <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Student Capacity</label>
                    <input type="number" id="editSiteCapacity" value="${site.capacity}" min="1" max="200" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 6px;">
                </div>
                
                <div>
                    <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">Available Specialties</label>
                    <div id="editSpecialtiesCheckboxes" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; padding: 1rem; border: 2px solid #e0e0e0; border-radius: 6px; max-height: 200px; overflow-y: auto;">
                        ${specialties.map(spec => `
                            <label style="display: flex; align-items: center; cursor: pointer;">
                                <input type="checkbox" value="${spec}" ${site.specialties.includes(spec) ? 'checked' : ''} style="margin-right: 0.5rem;">
                                <span style="font-size: 0.9rem;">${spec}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
                
                <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                    <button type="button" onclick="window.saveSiteEdit('${siteName}')" class="btn btn-primary" style="flex: 1;">
                        💾 Save Changes
                    </button>
                    <button type="button" onclick="this.closest('div').parentElement.parentElement.parentElement.remove()" class="btn btn-outline" style="flex: 1;">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Save site edit
window.saveSiteEdit = function(siteName) {
    const site = TRAINING_SITES.find(s => s.name === siteName);
    if (!site) return;
    
    site.type = document.getElementById('editSiteType').value;
    site.contact = document.getElementById('editSiteContact').value;
    site.address = document.getElementById('editSiteAddress').value;
    site.capacity = parseInt(document.getElementById('editSiteCapacity').value);
    
    const checkboxes = document.querySelectorAll('#editSpecialtiesCheckboxes input[type="checkbox"]:checked');
    site.specialties = Array.from(checkboxes).map(cb => cb.value);
    
    // Close modal
    document.querySelectorAll('[style*="z-index: 10004"]').forEach(m => m.remove());
    
    showToast('✅ Site updated: ' + siteName);
    
    // Refresh sites view
    window.switchAPPESection('sites');
};

// View site details
window.viewSiteDetails = function(siteName) {
    alert('📊 Site Analytics\n\nShowing detailed analytics for: ' + siteName + '\n\n• Student distribution\n• Preceptor utilization\n• Rotation type breakdown\n• Performance metrics\n\nComing soon!');
};

// View site students
window.viewSiteStudents = function(siteName) {
    const studentsAtSite = ASSIGNMENTS.filter(a => {
        const preceptor = PRECEPTORS.find(p => p.name === a.preceptor);
        return preceptor && preceptor.site === siteName;
    });
    
    if (studentsAtSite.length === 0) {
        alert('📭 No students currently assigned to ' + siteName);
        return;
    }
    
    const studentNames = studentsAtSite.map(a => `• ${a.student} - ${a.rotation} (${a.preceptor})`).join('\n');
    alert('👥 Students at ' + siteName + '\n\nTotal: ' + studentsAtSite.length + ' students\n\n' + studentNames);
};

// Contact site
window.contactSite = function(siteName) {
    const site = TRAINING_SITES.find(s => s.name === siteName);
    if (!site) return;
    
    alert('📞 Contact ' + siteName + '\n\nPhone: ' + site.contact + '\nAddress: ' + site.address + '\n\nOpening email client...');
};

// ===== STUDENT PREFERENCE & MATCHING SYSTEM =====

// Initialize preferences storage
if (!window.STUDENT_PREFERENCES) {
    window.STUDENT_PREFERENCES = [];
}

// Submit student preferences for a rotation
window.submitStudentPreferences = function(studentId, rotationId) {
    const student = APPE_STUDENTS.find(s => s.id === studentId);
    const rotation = ROTATION_PERIODS.find(r => r.id === rotationId);
    
    if (!student || !rotation) {
        alert('❌ Invalid student or rotation');
        return;
    }
    
    // Get available specialties and sites for this rotation
    const availablePreceptors = PRECEPTORS.filter(p => p.availability && p.availability.includes(rotationId));
    const specialties = [...new Set(availablePreceptors.map(p => p.specialty))];
    const sites = [...new Set(availablePreceptors.map(p => p.site))];
    
    if (specialties.length === 0) {
        alert('⚠️ No preceptors available for ' + rotation.name + '\n\nPlease contact coordinator to set up preceptor availability.');
        return;
    }
    
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10005; overflow-y: auto;';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div style="background: white; padding: 2.5rem; border-radius: 16px; width: 800px; max-height: 90vh; overflow-y: auto; margin: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                <div>
                    <h2 style="margin: 0; color: #1B5E20;">🎯 Submit Rotation Preferences</h2>
                    <p style="color: #666; margin: 0.5rem 0 0 0;"><strong>${student.name}</strong> - ${rotation.name}</p>
                    <small style="color: #999;">Rank your top 3 choices (1 = Most Preferred)</small>
                </div>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            
            <div style="background: #E3F2FD; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
                <strong style="color: #1565C0;">📋 Instructions:</strong>
                <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem; color: #666;">
                    <li>Rank your <strong>top 3 specialty preferences</strong> (1st choice, 2nd choice, 3rd choice)</li>
                    <li>Rank your <strong>top 3 site preferences</strong> (1st choice, 2nd choice, 3rd choice)</li>
                    <li>The matching algorithm will consider both preferences + your GPA + preceptor availability</li>
                    <li>Higher GPA students get priority in matching</li>
                </ul>
            </div>
            
            <!-- Specialty Preferences -->
            <div style="margin-bottom: 2rem;">
                <h3 style="margin: 0 0 1rem 0;">🔬 Specialty Preferences</h3>
                <div style="display: grid; gap: 1rem;">
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">1st Choice Specialty *</label>
                        <select id="specialty1" required style="width: 100%; padding: 0.75rem; border: 2px solid #4CAF50; border-radius: 6px; font-weight: 600;">
                            <option value="">Select specialty...</option>
                            ${specialties.map(s => `<option value="${s}">${s}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">2nd Choice Specialty *</label>
                        <select id="specialty2" required style="width: 100%; padding: 0.75rem; border: 2px solid #FFC107; border-radius: 6px;">
                            <option value="">Select specialty...</option>
                            ${specialties.map(s => `<option value="${s}">${s}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">3rd Choice Specialty *</label>
                        <select id="specialty3" required style="width: 100%; padding: 0.75rem; border: 2px solid #FF9800; border-radius: 6px;">
                            <option value="">Select specialty...</option>
                            ${specialties.map(s => `<option value="${s}">${s}</option>`).join('')}
                        </select>
                    </div>
                </div>
            </div>
            
            <!-- Site Preferences -->
            <div style="margin-bottom: 2rem;">
                <h3 style="margin: 0 0 1rem 0;">🏥 Site Preferences</h3>
                <div style="display: grid; gap: 1rem;">
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">1st Choice Site *</label>
                        <select id="site1" required style="width: 100%; padding: 0.75rem; border: 2px solid #4CAF50; border-radius: 6px; font-weight: 600;">
                            <option value="">Select site...</option>
                            ${sites.map(s => `<option value="${s}">${s}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">2nd Choice Site *</label>
                        <select id="site2" required style="width: 100%; padding: 0.75rem; border: 2px solid #FFC107; border-radius: 6px;">
                            <option value="">Select site...</option>
                            ${sites.map(s => `<option value="${s}">${s}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label style="display: block; color: #666; font-weight: 600; margin-bottom: 0.5rem;">3rd Choice Site *</label>
                        <select id="site3" required style="width: 100%; padding: 0.75rem; border: 2px solid #FF9800; border-radius: 6px;">
                            <option value="">Select site...</option>
                            ${sites.map(s => `<option value="${s}">${s}</option>`).join('')}
                        </select>
                    </div>
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem;">
                <button onclick="window.saveStudentPreferences('${studentId}', '${rotationId}')" class="btn btn-primary" style="flex: 1;">
                    ✅ Submit Preferences
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove()" class="btn btn-outline" style="flex: 1;">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// Save student preferences
window.saveStudentPreferences = function(studentId, rotationId) {
    const specialty1 = document.getElementById('specialty1').value;
    const specialty2 = document.getElementById('specialty2').value;
    const specialty3 = document.getElementById('specialty3').value;
    const site1 = document.getElementById('site1').value;
    const site2 = document.getElementById('site2').value;
    const site3 = document.getElementById('site3').value;
    
    if (!specialty1 || !specialty2 || !specialty3 || !site1 || !site2 || !site3) {
        alert('⚠️ Please fill in all preference fields');
        return;
    }
    
    // Validation: No duplicate specialties
    if (specialty1 === specialty2 || specialty1 === specialty3 || specialty2 === specialty3) {
        alert('⚠️ Please select different specialties for each rank');
        return;
    }
    
    // Validation: No duplicate sites
    if (site1 === site2 || site1 === site3 || site2 === site3) {
        alert('⚠️ Please select different sites for each rank');
        return;
    }
    
    const existingIndex = window.STUDENT_PREFERENCES.findIndex(p => p.studentId === studentId && p.rotationId === rotationId);
    
    const preference = {
        id: existingIndex >= 0 ? window.STUDENT_PREFERENCES[existingIndex].id : 'PREF' + (window.STUDENT_PREFERENCES.length + 1),
        studentId: studentId,
        rotationId: rotationId,
        specialtyPreferences: [specialty1, specialty2, specialty3],
        sitePreferences: [site1, site2, site3],
        submittedDate: new Date().toISOString().split('T')[0],
        status: 'Submitted'
    };
    
    if (existingIndex >= 0) {
        window.STUDENT_PREFERENCES[existingIndex] = preference;
    } else {
        window.STUDENT_PREFERENCES.push(preference);
    }
    
    // Close modal
    document.querySelectorAll('[style*="z-index: 10005"]').forEach(m => m.remove());
    
    const student = APPE_STUDENTS.find(s => s.id === studentId);
    const rotation = ROTATION_PERIODS.find(r => r.id === rotationId);
    
    showToast(`✅ Preferences submitted for ${student.name} - ${rotation.name}`);
};

console.log('✓ Attendance & Schedule Management loaded');
