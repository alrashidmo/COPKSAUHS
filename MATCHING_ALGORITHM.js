/**
 * ============================================================================
 * CLINICAL AFFAIRS EXPERIENCE HUB - ROTATION MATCHING ALGORITHM
 * ============================================================================
 * 
 * Intelligent student-to-site matching algorithm with constraint validation
 * and multi-criteria optimization.
 * 
 * Algorithm: Hungarian Algorithm (optimal assignment) with constraint checking
 * 
 * Version: 1.0.0
 * Last Updated: January 10, 2026
 * ============================================================================
 */

/**
 * ============================================================================
 * MATCHING ALGORITHM OVERVIEW
 * ============================================================================
 * 
 * Goal: Assign students to rotation sites optimally while respecting all constraints
 * 
 * Approach:
 * 1. Pre-filtering: Remove ineligible students/sites
 * 2. Constraint validation: Check hard constraints
 * 3. Score calculation: Multi-criteria scoring (40% preference + 20% geo + 15% quality + 15% diversity + 10% balance)
 * 4. Optimization: Hungarian algorithm for optimal assignment
 * 5. Post-processing: Validate assignments, handle unmatched
 * 
 * ============================================================================
 */

class RotationMatchingEngine {
    
    constructor(rotationBlockId, database, config = {}) {
        this.rotationBlockId = rotationBlockId;
        this.db = database;
        
        // Configurable weights (default values)
        this.weights = {
            preference: config.preferenceWeight || 40,
            geographic: config.geographicWeight || 20,
            siteQuality: config.siteQualityWeight || 15,
            rotationDiversity: config.rotationDiversityWeight || 15,
            preceptorBalance: config.preceptorBalanceWeight || 10
        };
        
        // Validation
        const totalWeight = Object.values(this.weights).reduce((a, b) => a + b, 0);
        if (totalWeight !== 100) {
            throw new Error('Weights must sum to 100');
        }
    }
    
    // ========================================================================
    // MAIN MATCHING FUNCTION
    // ========================================================================
    
    async runMatching() {
        console.log(`[Matching] Starting matching for rotation block ${this.rotationBlockId}`);
        
        // Step 1: Fetch data
        const rotationBlock = await this.fetchRotationBlock();
        const students = await this.fetchEligibleStudents(rotationBlock);
        const sites = await this.fetchAvailableSites(rotationBlock);
        const preferences = await this.fetchStudentPreferences();
        const studentHistory = await this.fetchStudentHistory(students);
        
        console.log(`[Matching] Found ${students.length} students, ${sites.length} sites`);
        
        // Step 2: Validate constraints
        const validationResult = await this.validateConstraints(students, sites);
        if (!validationResult.valid) {
            return {
                success: false,
                errors: validationResult.errors,
                matched: [],
                unmatched: students.map(s => s.id)
            };
        }
        
        // Step 3: Build cost matrix (negative scores for minimization)
        const costMatrix = this.buildCostMatrix(students, sites, preferences, studentHistory);
        
        // Step 4: Run Hungarian algorithm
        const assignments = this.hungarianAlgorithm(costMatrix, students, sites);
        
        // Step 5: Validate assignments against all constraints
        const validatedAssignments = await this.validateAssignments(assignments, students, sites);
        
        // Step 6: Prepare results
        const matched = validatedAssignments.filter(a => a.valid);
        const unmatched = students.filter(s => !matched.find(m => m.studentId === s.id));
        
        // Step 7: Generate statistics
        const statistics = this.generateStatistics(matched, unmatched, students, sites);
        
        console.log(`[Matching] Completed: ${matched.length} matched, ${unmatched.length} unmatched`);
        
        return {
            success: true,
            matched: matched,
            unmatched: unmatched,
            conflicts: validatedAssignments.filter(a => !a.valid),
            statistics: statistics,
            timestamp: new Date().toISOString()
        };
    }
    
    // ========================================================================
    // DATA FETCHING
    // ========================================================================
    
    async fetchRotationBlock() {
        const result = await this.db.query(`
            SELECT rb.*, rt.name as rotation_type_name, rt.available_cities
            FROM rotation_blocks rb
            JOIN rotation_types rt ON rt.id = rb.rotation_type_id
            WHERE rb.id = $1
        `, [this.rotationBlockId]);
        
        return result.rows[0];
    }
    
    async fetchEligibleStudents(rotationBlock) {
        const result = await this.db.query(`
            SELECT 
                s.*,
                u.first_name,
                u.last_name,
                u.email
            FROM students s
            JOIN users u ON u.id = s.user_id
            WHERE s.is_active = TRUE
            AND s.compliance_status = 'GREEN'
            AND s.program = $1
            AND s.deleted_at IS NULL
            AND NOT EXISTS (
                -- Exclude students already assigned to this rotation block
                SELECT 1 FROM rotation_assignments ra
                WHERE ra.student_id = s.id
                AND ra.rotation_block_id = $2
            )
        `, [rotationBlock.program, this.rotationBlockId]);
        
        return result.rows;
    }
    
    async fetchAvailableSites(rotationBlock) {
        const result = await this.db.query(`
            SELECT 
                s.*,
                (
                    SELECT COUNT(*) 
                    FROM rotation_assignments ra
                    WHERE ra.site_id = s.id
                    AND ra.rotation_block_id = $1
                ) as current_assignments,
                (s.max_capacity - (
                    SELECT COUNT(*) 
                    FROM rotation_assignments ra
                    WHERE ra.site_id = s.id
                    AND ra.rotation_block_id = $1
                )) as available_slots
            FROM sites s
            WHERE s.is_active = TRUE
            AND s.affiliation_end_date > $2
            AND s.deleted_at IS NULL
            ${rotationBlock.city ? 'AND s.city = $3' : ''}
        `, rotationBlock.city ? 
            [this.rotationBlockId, rotationBlock.end_date, rotationBlock.city] : 
            [this.rotationBlockId, rotationBlock.end_date]
        );
        
        return result.rows.filter(site => site.available_slots > 0);
    }
    
    async fetchStudentPreferences() {
        const result = await this.db.query(`
            SELECT 
                student_id,
                site_id,
                rank
            FROM student_rotation_preferences
            WHERE rotation_block_id = $1
            ORDER BY student_id, rank
        `, [this.rotationBlockId]);
        
        // Convert to map: studentId -> { siteId -> rank }
        const preferencesMap = {};
        result.rows.forEach(pref => {
            if (!preferencesMap[pref.student_id]) {
                preferencesMap[pref.student_id] = {};
            }
            preferencesMap[pref.student_id][pref.site_id] = pref.rank;
        });
        
        return preferencesMap;
    }
    
    async fetchStudentHistory(students) {
        const studentIds = students.map(s => s.id);
        
        const result = await this.db.query(`
            SELECT 
                ra.student_id,
                s.id as site_id,
                s.site_type,
                s.city
            FROM rotation_assignments ra
            JOIN sites s ON s.id = ra.site_id
            WHERE ra.student_id = ANY($1)
            AND ra.status IN ('COMPLETED', 'IN_PROGRESS')
        `, [studentIds]);
        
        // Convert to map: studentId -> array of site info
        const historyMap = {};
        result.rows.forEach(row => {
            if (!historyMap[row.student_id]) {
                historyMap[row.student_id] = [];
            }
            historyMap[row.student_id].push({
                siteId: row.site_id,
                siteType: row.site_type,
                city: row.city
            });
        });
        
        return historyMap;
    }
    
    // ========================================================================
    // CONSTRAINT VALIDATION
    // ========================================================================
    
    async validateConstraints(students, sites) {
        const errors = [];
        
        // 1. Check if there are any students
        if (students.length === 0) {
            errors.push('No eligible students found for this rotation');
        }
        
        // 2. Check if there are any sites
        if (sites.length === 0) {
            errors.push('No available sites for this rotation');
        }
        
        // 3. Check total capacity
        const totalCapacity = sites.reduce((sum, site) => sum + site.available_slots, 0);
        if (totalCapacity < students.length) {
            errors.push(`Insufficient capacity: ${totalCapacity} slots for ${students.length} students`);
        }
        
        // 4. Validate each student's compliance
        const nonCompliantStudents = students.filter(s => s.compliance_status !== 'GREEN');
        if (nonCompliantStudents.length > 0) {
            errors.push(`${nonCompliantStudents.length} students are not compliant (should have been filtered)`);
        }
        
        // 5. Check if students have submitted preferences
        const preferences = await this.fetchStudentPreferences();
        const studentsWithoutPreferences = students.filter(s => !preferences[s.id] || Object.keys(preferences[s.id]).length === 0);
        if (studentsWithoutPreferences.length > 0) {
            console.warn(`[Matching] Warning: ${studentsWithoutPreferences.length} students have no preferences`);
        }
        
        return {
            valid: errors.length === 0,
            errors: errors
        };
    }
    
    async validateAssignments(assignments, students, sites) {
        const validated = [];
        
        for (const assignment of assignments) {
            const student = students.find(s => s.id === assignment.studentId);
            const site = sites.find(s => s.id === assignment.siteId);
            
            const validationErrors = [];
            
            // Constraint 1: Student compliance
            if (student.compliance_status !== 'GREEN') {
                validationErrors.push('Student is not compliant');
            }
            
            // Constraint 2: Site capacity (check current + this assignment)
            const siteAssignments = assignments.filter(a => a.siteId === site.id);
            if (siteAssignments.length > site.available_slots) {
                validationErrors.push('Site capacity exceeded');
            }
            
            // Constraint 3: No conflicts (student not already assigned)
            const studentAssignments = assignments.filter(a => a.studentId === student.id);
            if (studentAssignments.length > 1) {
                validationErrors.push('Student has multiple assignments');
            }
            
            // Constraint 4: Preceptor availability (if preceptor assigned)
            if (assignment.preceptorId) {
                const preceptor = await this.fetchPreceptor(assignment.preceptorId);
                if (!preceptor.is_active || preceptor.license_status !== 'ACTIVE') {
                    validationErrors.push('Preceptor is not active or license expired');
                }
                
                const preceptorLoad = assignments.filter(a => a.preceptorId === preceptor.id).length;
                if (preceptorLoad > preceptor.max_students) {
                    validationErrors.push('Preceptor student capacity exceeded');
                }
            }
            
            // Constraint 5: Prerequisites (check if student has completed required rotations)
            const rotationBlock = await this.fetchRotationBlock();
            const rotationType = await this.fetchRotationType(rotationBlock.rotation_type_id);
            if (rotationType.prerequisites && rotationType.prerequisites.length > 0) {
                const completedRotations = await this.fetchCompletedRotations(student.id);
                const missingPrereqs = rotationType.prerequisites.filter(prereq => 
                    !completedRotations.includes(prereq)
                );
                if (missingPrereqs.length > 0) {
                    validationErrors.push('Student has not completed prerequisite rotations');
                }
            }
            
            validated.push({
                ...assignment,
                valid: validationErrors.length === 0,
                validationErrors: validationErrors
            });
        }
        
        return validated;
    }
    
    async fetchPreceptor(preceptorId) {
        const result = await this.db.query('SELECT * FROM preceptors WHERE id = $1', [preceptorId]);
        return result.rows[0];
    }
    
    async fetchRotationType(rotationTypeId) {
        const result = await this.db.query('SELECT * FROM rotation_types WHERE id = $1', [rotationTypeId]);
        return result.rows[0];
    }
    
    async fetchCompletedRotations(studentId) {
        const result = await this.db.query(`
            SELECT DISTINCT rt.id
            FROM rotation_assignments ra
            JOIN rotation_blocks rb ON rb.id = ra.rotation_block_id
            JOIN rotation_types rt ON rt.id = rb.rotation_type_id
            WHERE ra.student_id = $1
            AND ra.pass_fail = 'PASS'
        `, [studentId]);
        
        return result.rows.map(r => r.id);
    }
    
    // ========================================================================
    // SCORING FUNCTIONS
    // ========================================================================
    
    buildCostMatrix(students, sites, preferences, studentHistory) {
        const matrix = [];
        
        for (let i = 0; i < students.length; i++) {
            const studentRow = [];
            const student = students[i];
            
            for (let j = 0; j < sites.length; j++) {
                const site = sites[j];
                
                // Calculate total score (0-100)
                const score = this.calculateScore(student, site, preferences, studentHistory);
                
                // Hungarian algorithm minimizes, so negate the score
                // Use large number (10000) minus score to ensure positive costs
                const cost = 10000 - score;
                
                studentRow.push(cost);
            }
            
            matrix.push(studentRow);
        }
        
        return matrix;
    }
    
    calculateScore(student, site, preferences, studentHistory) {
        let totalScore = 0;
        
        // 1. Preference Score (40 points)
        const preferenceScore = this.calculatePreferenceScore(student, site, preferences);
        totalScore += (preferenceScore / 100) * this.weights.preference;
        
        // 2. Geographic Score (20 points)
        const geographicScore = this.calculateGeographicScore(student, site);
        totalScore += (geographicScore / 100) * this.weights.geographic;
        
        // 3. Site Quality Score (15 points)
        const qualityScore = this.calculateSiteQualityScore(site);
        totalScore += (qualityScore / 100) * this.weights.siteQuality;
        
        // 4. Rotation Diversity Score (15 points)
        const diversityScore = this.calculateRotationDiversityScore(student, site, studentHistory);
        totalScore += (diversityScore / 100) * this.weights.rotationDiversity;
        
        // 5. Preceptor Balance Score (10 points)
        const balanceScore = this.calculatePreceptorBalanceScore(site);
        totalScore += (balanceScore / 100) * this.weights.preceptorBalance;
        
        return totalScore;
    }
    
    calculatePreferenceScore(student, site, preferences) {
        const studentPrefs = preferences[student.id];
        
        if (!studentPrefs || !studentPrefs[site.id]) {
            return 0; // No preference = 0 points
        }
        
        const rank = studentPrefs[site.id];
        
        // Rank 1 = 100 points, Rank 2 = 80, Rank 3 = 60, Rank 4 = 40, Rank 5 = 20
        const scoreMap = {
            1: 100,
            2: 80,
            3: 60,
            4: 40,
            5: 20
        };
        
        return scoreMap[rank] || 0;
    }
    
    calculateGeographicScore(student, site) {
        // In a real implementation, calculate distance from student's address to site
        // For now, prefer same city
        
        // Placeholder: Assume student prefers Riyadh if no data
        const studentPreferredCity = 'RIYADH'; // In real app, get from student profile
        
        if (site.city === studentPreferredCity) {
            return 100; // Same city
        } else {
            return 50; // Different city
        }
    }
    
    calculateSiteQualityScore(site) {
        // Use site's quality rating (1.0 to 5.0)
        // Convert to 0-100 scale
        
        return (site.quality_rating / 5.0) * 100;
    }
    
    calculateRotationDiversityScore(student, site, studentHistory) {
        const history = studentHistory[student.id] || [];
        
        // Prefer sites the student hasn't been to before
        const hasBeenToSite = history.some(h => h.siteId === site.id);
        if (hasBeenToSite) {
            return 0; // Penalize repeat sites
        }
        
        // Prefer different site types for diversity
        const hasBeenToSiteType = history.some(h => h.siteType === site.site_type);
        if (hasBeenToSiteType) {
            return 50; // Some penalty for same type
        }
        
        return 100; // Full points for new site type
    }
    
    calculatePreceptorBalanceScore(site) {
        // Prefer sites with lower utilization to balance load
        
        const utilizationPercent = (site.current_assignments / site.max_capacity) * 100;
        
        // Inverse score: lower utilization = higher score
        return 100 - utilizationPercent;
    }
    
    // ========================================================================
    // HUNGARIAN ALGORITHM (Optimal Assignment)
    // ========================================================================
    
    hungarianAlgorithm(costMatrix, students, sites) {
        // This is a simplified placeholder for the Hungarian algorithm
        // In production, use a library like 'munkres' or 'hungarian-algorithm'
        
        // For demonstration, we'll use a greedy approach
        // Real implementation should use optimal Hungarian algorithm
        
        return this.greedyMatching(costMatrix, students, sites);
    }
    
    greedyMatching(costMatrix, students, sites) {
        const assignments = [];
        const assignedSites = new Set();
        const assignedStudents = new Set();
        
        // Create array of all possible assignments with their scores
        const allPairs = [];
        for (let i = 0; i < students.length; i++) {
            for (let j = 0; j < sites.length; j++) {
                allPairs.push({
                    studentIndex: i,
                    siteIndex: j,
                    cost: costMatrix[i][j],
                    score: 10000 - costMatrix[i][j] // Convert back to score
                });
            }
        }
        
        // Sort by score (highest first)
        allPairs.sort((a, b) => b.score - a.score);
        
        // Assign greedily
        const siteCapacity = {};
        sites.forEach((site, index) => {
            siteCapacity[index] = site.available_slots;
        });
        
        for (const pair of allPairs) {
            const { studentIndex, siteIndex, score } = pair;
            
            // Check if student already assigned
            if (assignedStudents.has(studentIndex)) continue;
            
            // Check if site has capacity
            if (siteCapacity[siteIndex] <= 0) continue;
            
            // Assign
            assignments.push({
                studentId: students[studentIndex].id,
                studentName: `${students[studentIndex].first_name} ${students[studentIndex].last_name}`,
                siteId: sites[siteIndex].id,
                siteName: sites[siteIndex].name,
                matchingScore: score,
                preferenceRank: this.getPreferenceRank(students[studentIndex].id, sites[siteIndex].id),
                assignmentType: 'AUTO'
            });
            
            assignedStudents.add(studentIndex);
            siteCapacity[siteIndex]--;
        }
        
        return assignments;
    }
    
    async getPreferenceRank(studentId, siteId) {
        const result = await this.db.query(`
            SELECT rank FROM student_rotation_preferences
            WHERE rotation_block_id = $1
            AND student_id = $2
            AND site_id = $3
        `, [this.rotationBlockId, studentId, siteId]);
        
        return result.rows.length > 0 ? result.rows[0].rank : null;
    }
    
    // ========================================================================
    // STATISTICS
    // ========================================================================
    
    generateStatistics(matched, unmatched, students, sites) {
        const totalStudents = students.length;
        const totalSites = sites.length;
        const totalCapacity = sites.reduce((sum, site) => sum + site.available_slots, 0);
        
        // Preference statistics
        const preferenceStats = {
            rank1: matched.filter(m => m.preferenceRank === 1).length,
            rank2: matched.filter(m => m.preferenceRank === 2).length,
            rank3: matched.filter(m => m.preferenceRank === 3).length,
            rank4: matched.filter(m => m.preferenceRank === 4).length,
            rank5: matched.filter(m => m.preferenceRank === 5).length,
            noPreference: matched.filter(m => m.preferenceRank === null).length
        };
        
        // Site utilization
        const siteUtilization = {};
        sites.forEach(site => {
            const assignedCount = matched.filter(m => m.siteId === site.id).length;
            siteUtilization[site.name] = {
                assigned: assignedCount,
                capacity: site.available_slots,
                utilizationPercent: (assignedCount / site.available_slots * 100).toFixed(1)
            };
        });
        
        // Average matching score
        const avgScore = matched.length > 0 ?
            (matched.reduce((sum, m) => sum + m.matchingScore, 0) / matched.length).toFixed(2) :
            0;
        
        return {
            totalStudents: totalStudents,
            matched: matched.length,
            unmatched: unmatched.length,
            matchRate: ((matched.length / totalStudents) * 100).toFixed(1) + '%',
            totalSites: totalSites,
            totalCapacity: totalCapacity,
            remainingCapacity: totalCapacity - matched.length,
            utilizationRate: ((matched.length / totalCapacity) * 100).toFixed(1) + '%',
            preferenceDistribution: preferenceStats,
            siteUtilization: siteUtilization,
            averageMatchingScore: avgScore
        };
    }
    
    // ========================================================================
    // PUBLISH ASSIGNMENTS
    // ========================================================================
    
    async publishAssignments(matchedAssignments) {
        const rotationBlock = await this.fetchRotationBlock();
        const createdAssignments = [];
        
        for (const assignment of matchedAssignments) {
            // Create rotation assignment record
            const result = await this.db.query(`
                INSERT INTO rotation_assignments (
                    rotation_block_id,
                    student_id,
                    site_id,
                    preceptor_id,
                    assignment_type,
                    status,
                    matching_score,
                    preference_rank,
                    start_date,
                    end_date,
                    assigned_by,
                    assigned_at
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW())
                RETURNING *
            `, [
                this.rotationBlockId,
                assignment.studentId,
                assignment.siteId,
                assignment.preceptorId || null,
                assignment.assignmentType,
                'ASSIGNED',
                assignment.matchingScore,
                assignment.preferenceRank,
                rotationBlock.start_date,
                rotationBlock.end_date,
                assignment.assignedBy || null
            ]);
            
            createdAssignments.push(result.rows[0]);
            
            // Send notification to student
            await this.sendAssignmentNotification(assignment.studentId, result.rows[0]);
        }
        
        // Update rotation block status
        await this.db.query(`
            UPDATE rotation_blocks
            SET status = 'PUBLISHED'
            WHERE id = $1
        `, [this.rotationBlockId]);
        
        return {
            created: createdAssignments.length,
            assignments: createdAssignments
        };
    }
    
    async sendAssignmentNotification(studentId, assignment) {
        // Create notification
        await this.db.query(`
            INSERT INTO notifications (
                user_id,
                type,
                priority,
                title,
                message,
                action_url,
                channels
            ) VALUES (
                (SELECT user_id FROM students WHERE id = $1),
                'ROTATION_ASSIGNMENT',
                'HIGH',
                'Rotation Assignment Confirmed',
                'You have been assigned to your rotation. Please review the details.',
                '/rotations/' || $2,
                ARRAY['EMAIL', 'IN_APP']
            )
        `, [studentId, assignment.id]);
    }
}

// ========================================================================
// USAGE EXAMPLE
// ========================================================================

/*
const matchingEngine = new RotationMatchingEngine(rotationBlockId, database, {
    preferenceWeight: 40,
    geographicWeight: 20,
    siteQualityWeight: 15,
    rotationDiversityWeight: 15,
    preceptorBalanceWeight: 10
});

const result = await matchingEngine.runMatching();

if (result.success) {
    console.log(`Matched: ${result.matched.length}`);
    console.log(`Unmatched: ${result.unmatched.length}`);
    console.log(`Statistics:`, result.statistics);
    
    // Publish assignments
    await matchingEngine.publishAssignments(result.matched);
} else {
    console.error('Matching failed:', result.errors);
}
*/

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RotationMatchingEngine;
}
