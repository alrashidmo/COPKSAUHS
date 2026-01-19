/**
 * Outcomes Dashboard Module
 * Displays comprehensive outcomes analytics
 */

// Mock data for outcomes
const outcomesData = {
    studentSatisfaction: {
        overall: 4.5,
        categories: [
            { name: 'Learning Experience', score: 4.6, responses: 145 },
            { name: 'Preceptor Support', score: 4.7, responses: 145 },
            { name: 'Site Resources', score: 4.3, responses: 145 },
            { name: 'Course Materials', score: 4.4, responses: 145 },
            { name: 'Clinical Exposure', score: 4.8, responses: 145 }
        ]
    },
    redFlags: {
        total: 8,
        critical: 2,
        moderate: 6,
        items: [
            { student: 'Mashael Abdullah Almutairi', issue: 'Low attendance (75%)', severity: 'critical', rotation: 'IPPE I' },
            { student: 'Albatoul Omran Alomran', issue: 'GPA below threshold (2.7)', severity: 'critical', rotation: 'APPE' },
            { student: 'Sarah Nahis Alharbi', issue: 'Attendance concern (82%)', severity: 'moderate', rotation: 'IPPE I' },
            { student: 'Lina Moshrif Alamri', issue: 'Missed clearances', severity: 'moderate', rotation: 'IPPE II' },
            { student: 'Rayed Ali Alaklabi', issue: 'Low GPA (2.7)', severity: 'moderate', rotation: 'IPPE I' },
            { student: 'Shaden Abdullah Alharbi', issue: 'Attendance (82%)', severity: 'moderate', rotation: 'IPPE II' }
        ]
    },
    alignment: {
        clo: 24,
        plo: 12,
        nqf: 8,
        mapped: 22,
        unmapped: 2,
        coverage: 91.7
    },
    preceptorMetrics: {
        total: 95,
        active: 78,
        availability: 82.1,
        avgEvaluation: 4.6,
        topPerformers: [
            { name: 'Dr. Majed Alyami', specialty: 'Internal Medicine', rating: 4.9, students: 15 },
            { name: 'Dr. Lama Alfehaid', specialty: 'Cardiology', rating: 4.8, students: 12 },
            { name: 'Prof. Shmeylan Al Harbi', specialty: 'ICU', rating: 4.8, students: 10 }
        ]
    },
    siteMetrics: {
        total: 15,
        active: 12,
        capacity: 150,
        currentUtilization: 128,
        utilizationRate: 85.3,
        topSites: [
            { name: 'King Abdulaziz Medical City', students: 45, capacity: 50, rating: 4.7 },
            { name: 'King Faisal Specialist Hospital', students: 38, capacity: 45, rating: 4.6 },
            { name: 'Prince Sultan Cardiac Center', students: 25, capacity: 30, rating: 4.8 }
        ]
    },
    outcomeDomains: {
        knowledge: { achieved: 89, target: 85, percentage: 104.7 },
        skills: { achieved: 92, target: 85, percentage: 108.2 },
        values: { achieved: 87, target: 85, percentage: 102.4 }
    }
};

// Generate Outcomes Dashboard HTML
window.getOutcomesDashboardHTML = function() {
    const data = outcomesData;
    
    return `
        <div class="outcomes-dashboard">
            <div class="dashboard-header">
                <h2>🎯 Outcomes Overview</h2>
                <div class="filter-controls">
                    <div class="filter-group">
                        <label>Program:</label>
                        <select class="filter-select">
                            <option>All Programs</option>
                            <option>PharmD</option>
                            <option>Pharmacy Technician</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Academic Year:</label>
                        <select class="filter-select">
                            <option>2025-2026</option>
                            <option>2024-2025</option>
                            <option>2023-2024</option>
                        </select>
                    </div>
                    <button class="btn btn-primary">
                        <span>📊</span> Export Report
                    </button>
                </div>
            </div>

            <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem;">
                
                <!-- Student Satisfaction -->
                <div class="card">
                    <h3>😊 Student Satisfaction</h3>
                    <div style="text-align: center; margin: 1.5rem 0;">
                        <div style="font-size: 3rem; font-weight: bold; color: var(--primary-green);">
                            ${data.studentSatisfaction.overall}
                        </div>
                        <div style="color: #FFD700; font-size: 1.5rem;">★★★★★</div>
                        <div style="color: var(--text-muted); margin-top: 0.5rem;">Out of 5.0</div>
                    </div>
                    <div class="satisfaction-breakdown">
                        ${data.studentSatisfaction.categories.map(cat => `
                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
                                <span style="font-size: 0.9rem;">${cat.name}</span>
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <div style="width: 80px; height: 6px; background: #e0e0e0; border-radius: 3px; overflow: hidden;">
                                        <div style="width: ${(cat.score / 5) * 100}%; height: 100%; background: var(--primary-green);"></div>
                                    </div>
                                    <span style="font-weight: 600; min-width: 30px;">${cat.score}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Red Flags -->
                <div class="card">
                    <h3>🚩 Red Flags</h3>
                    <div style="display: flex; justify-content: space-around; margin: 1.5rem 0;">
                        <div style="text-align: center;">
                            <div style="font-size: 2.5rem; font-weight: bold; color: var(--danger);">${data.redFlags.critical}</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted);">Critical</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2.5rem; font-weight: bold; color: var(--warning);">${data.redFlags.moderate}</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted);">Moderate</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2.5rem; font-weight: bold; color: var(--text-dark);">${data.redFlags.total}</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted);">Total</div>
                        </div>
                    </div>
                    <div style="max-height: 200px; overflow-y: auto;">
                        ${data.redFlags.items.slice(0, 4).map(item => `
                            <div style="padding: 0.75rem; margin-bottom: 0.5rem; background: ${item.severity === 'critical' ? '#fff5f5' : '#fffbf0'}; border-radius: 6px; border-left: 3px solid ${item.severity === 'critical' ? 'var(--danger)' : 'var(--warning)'};">
                                <div style="font-weight: 600; font-size: 0.9rem;">${item.student}</div>
                                <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">${item.issue} • ${item.rotation}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- CLO-PLO-NQF Alignment -->
                <div class="card">
                    <h3>🎯 CLO-PLO-NQF Alignment</h3>
                    <div style="text-align: center; margin: 1.5rem 0;">
                        <div style="font-size: 3rem; font-weight: bold; color: var(--primary-green);">
                            ${data.alignment.coverage}%
                        </div>
                        <div style="color: var(--text-muted);">Coverage Rate</div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1.5rem;">
                        <div style="text-align: center; padding: 1rem; background: var(--light-green); border-radius: 6px;">
                            <div style="font-size: 1.8rem; font-weight: bold; color: var(--primary-green);">${data.alignment.clo}</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted);">CLOs</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: var(--light-green); border-radius: 6px;">
                            <div style="font-size: 1.8rem; font-weight: bold; color: var(--primary-green);">${data.alignment.plo}</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted);">PLOs</div>
                        </div>
                        <div style="text-align: center; padding: 1rem; background: var(--light-green); border-radius: 6px;">
                            <div style="font-size: 1.8rem; font-weight: bold; color: var(--primary-green);">${data.alignment.nqf}</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted);">NQFs</div>
                        </div>
                    </div>
                    <div style="margin-top: 1rem; padding: 0.75rem; background: #f5f5f5; border-radius: 6px; display: flex; justify-content: space-between;">
                        <span>Mapped: <strong>${data.alignment.mapped}</strong></span>
                        <span>Unmapped: <strong style="color: var(--warning);">${data.alignment.unmapped}</strong></span>
                    </div>
                </div>

                <!-- Preceptor Metrics -->
                <div class="card">
                    <h3>👨‍⚕️ Preceptor Metrics</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1.5rem 0;">
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; color: var(--primary-green);">${data.preceptorMetrics.total}</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted);">Total Preceptors</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; color: var(--primary-green);">${data.preceptorMetrics.active}</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted);">Active</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; color: var(--primary-green);">${data.preceptorMetrics.availability}%</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted);">Availability</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; color: var(--primary-green);">${data.preceptorMetrics.avgEvaluation}</div>
                            <div style="font-size: 0.85rem; color: var(--text-muted);">Avg Rating</div>
                        </div>
                    </div>
                    <div style="margin-top: 1rem;">
                        <h4 style="font-size: 0.9rem; margin-bottom: 0.75rem; color: var(--text-muted);">Top Performers</h4>
                        ${data.preceptorMetrics.topPerformers.map((p, idx) => `
                            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
                                <div>
                                    <div style="font-weight: 600; font-size: 0.9rem;">${idx + 1}. ${p.name}</div>
                                    <div style="font-size: 0.8rem; color: var(--text-muted);">${p.specialty}</div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="color: #FFD700;">★ ${p.rating}</div>
                                    <div style="font-size: 0.8rem; color: var(--text-muted);">${p.students} students</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Site Metrics -->
                <div class="card">
                    <h3>🏥 Site Metrics</h3>
                    <div style="margin: 1.5rem 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <span style="font-size: 0.9rem; color: var(--text-muted);">Utilization</span>
                            <span style="font-size: 1.5rem; font-weight: bold; color: var(--primary-green);">${data.siteMetrics.utilizationRate}%</span>
                        </div>
                        <div style="width: 100%; height: 12px; background: #e0e0e0; border-radius: 6px; overflow: hidden;">
                            <div style="width: ${data.siteMetrics.utilizationRate}%; height: 100%; background: linear-gradient(90deg, var(--primary-green), var(--primary-gold));"></div>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">
                            <span>${data.siteMetrics.currentUtilization} / ${data.siteMetrics.capacity} students</span>
                        </div>
                    </div>
                    <div style="margin-top: 1.5rem;">
                        <h4 style="font-size: 0.9rem; margin-bottom: 0.75rem; color: var(--text-muted);">Top Sites</h4>
                        ${data.siteMetrics.topSites.map((site, idx) => `
                            <div style="margin-bottom: 1rem; padding: 0.75rem; background: var(--light-green); border-radius: 6px;">
                                <div style="display: flex; justify-content: space-between; align-items: start;">
                                    <div style="flex: 1;">
                                        <div style="font-weight: 600; font-size: 0.9rem;">${idx + 1}. ${site.name}</div>
                                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">
                                            ${site.students}/${site.capacity} students • ★ ${site.rating}
                                        </div>
                                    </div>
                                </div>
                                <div style="margin-top: 0.5rem; width: 100%; height: 4px; background: #d0d0d0; border-radius: 2px; overflow: hidden;">
                                    <div style="width: ${(site.students / site.capacity) * 100}%; height: 100%; background: var(--primary-green);"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Outcome Domains -->
                <div class="card">
                    <h3>🎓 Outcome Domains</h3>
                    <div style="margin-top: 1.5rem;">
                        ${Object.entries(data.outcomeDomains).map(([domain, stats]) => `
                            <div style="margin-bottom: 1.5rem;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <span style="font-weight: 600; text-transform: capitalize;">${domain}</span>
                                    <span style="font-weight: bold; color: ${stats.percentage >= 100 ? 'var(--success)' : 'var(--warning)'};">
                                        ${stats.percentage}%
                                    </span>
                                </div>
                                <div style="width: 100%; height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
                                    <div style="width: ${Math.min(stats.percentage, 100)}%; height: 100%; background: ${stats.percentage >= 100 ? 'var(--success)' : 'var(--warning)'};"></div>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 0.25rem; font-size: 0.8rem; color: var(--text-muted);">
                                    <span>Achieved: ${stats.achieved}%</span>
                                    <span>Target: ${stats.target}%</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: var(--light-green); border-radius: 6px; text-align: center;">
                        <div style="font-size: 0.85rem; color: var(--text-muted);">Overall Achievement</div>
                        <div style="font-size: 2rem; font-weight: bold; color: var(--success); margin-top: 0.25rem;">
                            105.1%
                        </div>
                        <div style="font-size: 0.8rem; color: var(--success); margin-top: 0.25rem;">✓ Exceeding Targets</div>
                    </div>
                </div>

            </div>
        </div>
    `;
};

// Initialize outcomes dashboard when needed
window.renderOutcomesDashboard = function() {
    const appRoot = document.getElementById('app-root');
    if (appRoot) {
        appRoot.innerHTML = window.getOutcomesDashboardHTML();
    }
};
