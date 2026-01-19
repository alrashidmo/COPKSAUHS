/**
 * APPE AUTOMATION ENGINE
 * Handles all automated workflows, triggers, and business rules
 * Eliminates manual work through intelligent automation
 */

class APPEAutomationEngine {
    
    constructor() {
        this.automationRules = this.initializeAutomationRules();
        this.activeTimers = new Map();
    }

    // ================================
    // AUTOMATION RULES CONFIGURATION
    // ================================
    initializeAutomationRules() {
        return {
            // CLEARANCE AUTOMATION
            clearanceExpiry: {
                name: 'Clearance Expiry Monitor',
                triggers: [
                    { days: 30, action: 'sendReminderEmail', priority: 'MEDIUM' },
                    { days: 14, action: 'sendUrgentReminder', priority: 'HIGH' },
                    { days: 7, action: 'blockScheduling', priority: 'URGENT' },
                    { days: 0, action: 'deactivateStudent', priority: 'CRITICAL' }
                ],
                checkFrequency: 'daily'
            },

            // EVALUATION AUTOMATION
            evaluationDue: {
                name: 'Evaluation Due Monitor',
                triggers: [
                    { days: 7, action: 'notifyPreceptor', priority: 'MEDIUM' },
                    { days: 3, action: 'sendUrgentReminder', priority: 'HIGH' },
                    { days: 0, action: 'escalateToCoordinator', priority: 'URGENT' },
                    { days: -2, action: 'autoMarkIncomplete', priority: 'CRITICAL' }
                ],
                checkFrequency: 'daily'
            },

            // ROTATION START AUTOMATION
            rotationStart: {
                name: 'Rotation Start Workflow',
                triggers: [
                    { days: 7, action: 'sendOrientationInfo', priority: 'MEDIUM' },
                    { days: 3, action: 'verifyAllClearances', priority: 'HIGH' },
                    { days: 1, action: 'sendStartReminder', priority: 'HIGH' },
                    { days: 0, action: 'activateRotation', priority: 'CRITICAL' }
                ],
                checkFrequency: 'daily'
            },

            // ATTENDANCE THRESHOLD
            attendanceThreshold: {
                name: 'Attendance Violation Monitor',
                rules: [
                    { threshold: 90, action: 'sendWarning', priority: 'MEDIUM' },
                    { threshold: 85, action: 'flagAtRisk', priority: 'HIGH' },
                    { threshold: 80, action: 'mandatoryMeeting', priority: 'URGENT' },
                    { threshold: 75, action: 'academicWarning', priority: 'CRITICAL' }
                ],
                checkFrequency: 'realtime'
            },

            // PRECEPTOR LICENSE
            preceptorLicense: {
                name: 'Preceptor License Monitor',
                triggers: [
                    { days: 60, action: 'notifyPreceptor', priority: 'MEDIUM' },
                    { days: 30, action: 'notifyAdmin', priority: 'HIGH' },
                    { days: 0, action: 'suspendPreceptor', priority: 'CRITICAL' }
                ],
                checkFrequency: 'daily'
            }
        };
    }

    // ================================
    // 1. CLEARANCE AUTO-VALIDATION
    // ================================
    async validateStudentClearance(studentId) {
        const clearance = await this.getClearanceData(studentId);
        const today = new Date();
        
        const clearanceItems = [
            { name: 'hep_b_complete', expiry: clearance.hep_b_expiry },
            { name: 'bls_certified', expiry: clearance.bls_expiry },
            { name: 'acls_certified', expiry: clearance.acls_expiry },
            { name: 'background_check', expiry: clearance.background_check_expiry },
            { name: 'health_insurance', expiry: clearance.health_insurance_expiry },
            { name: 'malpractice_insurance', expiry: clearance.malpractice_expiry }
        ];

        let totalItems = clearanceItems.length;
        let completedItems = 0;
        let expiredItems = [];
        let expiringItems = [];

        clearanceItems.forEach(item => {
            if (clearance[item.name]) {
                completedItems++;
                
                // Check expiry
                if (item.expiry) {
                    const expiryDate = new Date(item.expiry);
                    const daysUntilExpiry = Math.floor((expiryDate - today) / (1000 * 60 * 60 * 24));
                    
                    if (daysUntilExpiry < 0) {
                        expiredItems.push(item.name);
                    } else if (daysUntilExpiry <= 30) {
                        expiringItems.push({ item: item.name, days: daysUntilExpiry });
                    }
                }
            }
        });

        const completionPercentage = Math.round((completedItems / totalItems) * 100);
        
        // AUTO-DETERMINE STATUS
        let status, canSchedule;
        if (expiredItems.length > 0) {
            status = 'BLOCKED';
            canSchedule = false;
        } else if (completionPercentage === 100) {
            status = 'CLEARED';
            canSchedule = true;
        } else {
            status = 'PENDING';
            canSchedule = false;
        }

        // AUTO-UPDATE DATABASE
        await this.updateClearanceStatus(studentId, {
            overall_status: status,
            completion_percentage: completionPercentage,
            last_updated: new Date()
        });

        // AUTO-TRIGGER NOTIFICATIONS
        if (expiredItems.length > 0) {
            await this.sendClearanceExpiredAlert(studentId, expiredItems);
        }
        
        if (expiringItems.length > 0) {
            await this.sendExpiringItemsReminder(studentId, expiringItems);
        }

        return {
            status,
            canSchedule,
            completionPercentage,
            expiredItems,
            expiringItems
        };
    }

    // ================================
    // 2. ROTATION SCHEDULING RULES
    // ================================
    async validateRotationAssignment(assignmentData) {
        const {
            studentId,
            rotationTypeId,
            siteId,
            preceptorId,
            blockId,
            startDate,
            endDate
        } = assignmentData;

        const validationResults = {
            valid: true,
            errors: [],
            warnings: []
        };

        // RULE 1: Student clearance must be complete
        const clearance = await this.validateStudentClearance(studentId);
        if (!clearance.canSchedule) {
            validationResults.valid = false;
            validationResults.errors.push({
                rule: 'CLEARANCE_REQUIRED',
                message: 'Student clearance incomplete. Cannot schedule rotation.',
                data: clearance
            });
        }

        // RULE 2: Check site capacity
        const siteCapacity = await this.checkSiteCapacity(siteId, startDate, endDate);
        if (siteCapacity.isAtCapacity) {
            validationResults.valid = false;
            validationResults.errors.push({
                rule: 'SITE_CAPACITY_EXCEEDED',
                message: `Site has reached maximum capacity (${siteCapacity.current}/${siteCapacity.max})`,
                data: siteCapacity
            });
        }

        // RULE 3: Check preceptor availability
        const preceptorAvailability = await this.checkPreceptorAvailability(preceptorId, startDate, endDate);
        if (!preceptorAvailability.available) {
            validationResults.valid = false;
            validationResults.errors.push({
                rule: 'PRECEPTOR_UNAVAILABLE',
                message: 'Preceptor has reached maximum student capacity or is unavailable',
                data: preceptorAvailability
            });
        }

        // RULE 4: Check for scheduling conflicts
        const conflicts = await this.checkSchedulingConflicts(studentId, startDate, endDate);
        if (conflicts.hasConflict) {
            validationResults.valid = false;
            validationResults.errors.push({
                rule: 'SCHEDULING_CONFLICT',
                message: 'Student already has overlapping rotation',
                data: conflicts
            });
        }

        // RULE 5: Verify prerequisites
        const prerequisites = await this.verifyPrerequisites(studentId, rotationTypeId);
        if (!prerequisites.met) {
            validationResults.valid = false;
            validationResults.errors.push({
                rule: 'PREREQUISITES_NOT_MET',
                message: 'Student has not completed required prerequisite rotations',
                data: prerequisites
            });
        }

        // RULE 6: Check preceptor license status
        const preceptorLicense = await this.checkPreceptorLicense(preceptorId);
        if (preceptorLicense.status !== 'ACTIVE') {
            validationResults.valid = false;
            validationResults.errors.push({
                rule: 'PRECEPTOR_LICENSE_INVALID',
                message: 'Preceptor license is expired or inactive',
                data: preceptorLicense
            });
        }

        return validationResults;
    }

    // ================================
    // 3. AUTO-GRADE CALCULATION
    // ================================
    async calculateRotationGrade(assignmentId) {
        // Get all evaluation data
        const midEval = await this.getEvaluation(assignmentId, 'MID_ROTATION');
        const finalEval = await this.getEvaluation(assignmentId, 'FINAL');
        const epaScores = await this.getEPAScores(assignmentId);
        const attendance = await this.getAttendancePercentage(assignmentId);

        // GRADING FORMULA
        const weights = {
            midRotation: 0.30,    // 30%
            finalEvaluation: 0.50, // 50%
            epaPerformance: 0.15,  // 15%
            attendance: 0.05       // 5%
        };

        // Calculate weighted scores
        const midScore = midEval ? midEval.percentage : 0;
        const finalScore = finalEval ? finalEval.percentage : 0;
        const epaScore = this.calculateEPAAverage(epaScores);
        const attendanceScore = attendance;

        const weightedGrade = 
            (midScore * weights.midRotation) +
            (finalScore * weights.finalEvaluation) +
            (epaScore * weights.epaPerformance) +
            (attendanceScore * weights.attendance);

        // AUTO-ASSIGN LETTER GRADE
        const letterGrade = this.convertToLetterGrade(weightedGrade);
        const passFailStatus = weightedGrade >= 70 ? 'PASS' : 'FAIL';

        // AUTO-UPDATE DATABASE
        await this.updateRotationGrade(assignmentId, {
            mid_rotation_grade: midScore,
            final_grade: finalScore,
            overall_grade: weightedGrade,
            letter_grade: letterGrade,
            pass_fail: passFailStatus,
            updated_at: new Date()
        });

        // AUTO-TRIGGER ACTIONS
        if (passFailStatus === 'FAIL') {
            await this.triggerRemediationWorkflow(assignmentId);
        }

        return {
            overall_grade: weightedGrade,
            letter_grade: letterGrade,
            pass_fail: passFailStatus,
            breakdown: {
                midRotation: midScore,
                final: finalScore,
                epa: epaScore,
                attendance: attendanceScore
            }
        };
    }

    // ================================
    // 4. EPA TRACKING & PROGRESSION
    // ================================
    async trackEPAProgression(studentId) {
        const allAssessments = await this.getStudentEPAAssessments(studentId);
        
        // Group by EPA domain
        const epaProgress = {};
        
        allAssessments.forEach(assessment => {
            const epaId = assessment.epa_id;
            
            if (!epaProgress[epaId]) {
                epaProgress[epaId] = {
                    epa_code: assessment.epa_code,
                    epa_title: assessment.epa_title,
                    assessments: [],
                    current_level: 0,
                    target_level: 4, // Target: Unsupervised practice
                    progression_trend: 'stable'
                };
            }
            
            epaProgress[epaId].assessments.push({
                date: assessment.assessment_date,
                level: assessment.entrustment_level,
                rotation: assessment.rotation_name
            });
        });

        // Calculate progression for each EPA
        Object.keys(epaProgress).forEach(epaId => {
            const assessments = epaProgress[epaId].assessments;
            
            // Sort by date
            assessments.sort((a, b) => new Date(a.date) - new Date(b.date));
            
            // Current level = most recent assessment
            epaProgress[epaId].current_level = assessments[assessments.length - 1]?.level || 0;
            
            // Determine trend
            if (assessments.length >= 2) {
                const recent = assessments[assessments.length - 1].level;
                const previous = assessments[assessments.length - 2].level;
                
                if (recent > previous) {
                    epaProgress[epaId].progression_trend = 'improving';
                } else if (recent < previous) {
                    epaProgress[epaId].progression_trend = 'declining';
                } else {
                    epaProgress[epaId].progression_trend = 'stable';
                }
            }
        });

        // AUTO-FLAG AT-RISK STUDENTS
        const atRiskEPAs = Object.values(epaProgress).filter(epa => 
            epa.progression_trend === 'declining' || epa.current_level < 3
        );

        if (atRiskEPAs.length > 0) {
            await this.flagStudentAtRisk(studentId, {
                reason: 'EPA_PROGRESSION_CONCERN',
                details: atRiskEPAs
            });
        }

        return epaProgress;
    }

    // ================================
    // 5. ATTENDANCE MONITORING
    // ================================
    async monitorAttendance(assignmentId, newAttendanceRecord) {
        // Get all attendance for this rotation
        const allAttendance = await this.getAttendanceRecords(assignmentId);
        const rotationDetails = await this.getRotationDetails(assignmentId);
        
        const totalDays = rotationDetails.total_days_required;
        const presentDays = allAttendance.filter(a => a.status === 'PRESENT').length;
        const absentDays = allAttendance.filter(a => a.status === 'ABSENT').length;
        const excusedDays = allAttendance.filter(a => a.status === 'EXCUSED').length;
        
        const attendancePercentage = (presentDays / totalDays) * 100;
        
        // AUTO-UPDATE ROTATION RECORD
        await this.updateAttendanceStats(assignmentId, {
            days_attended: presentDays,
            days_absent: absentDays,
            attendance_percentage: attendancePercentage
        });

        // AUTO-APPLY ATTENDANCE RULES
        const thresholds = this.automationRules.attendanceThreshold.rules;
        
        for (const rule of thresholds) {
            if (attendancePercentage < rule.threshold) {
                await this.executeAction(rule.action, {
                    assignmentId,
                    attendancePercentage,
                    absentDays,
                    priority: rule.priority
                });
            }
        }

        // AUTO-FLAG if exceeds absence limit
        if (absentDays > 3) { // Policy: Max 3 unexcused absences
            await this.updateRotationFlag(assignmentId, {
                has_absences_exceeding_limit: true,
                at_risk: true
            });
            
            await this.sendNotification({
                studentId: rotationDetails.student_id,
                type: 'ATTENDANCE_VIOLATION',
                message: `You have exceeded the maximum allowed absences (${absentDays}/3).`,
                priority: 'URGENT'
            });
        }

        return {
            attendancePercentage,
            presentDays,
            absentDays,
            excusedDays,
            status: attendancePercentage >= 80 ? 'SATISFACTORY' : 'AT_RISK'
        };
    }

    // ================================
    // 6. NOTIFICATION AUTOMATION
    // ================================
    async sendAutomatedNotification(config) {
        const {
            userId,
            userType,
            notificationType,
            priority,
            title,
            message,
            actionRequired,
            actionUrl
        } = config;

        const notification = {
            user_id: userId,
            user_type: userType,
            notification_type: notificationType,
            priority: priority || 'MEDIUM',
            title,
            message,
            action_required: actionRequired || false,
            action_url: actionUrl || null,
            read_status: false,
            sent_date: new Date()
        };

        // Insert into database
        await this.insertNotification(notification);

        // Send email if HIGH or URGENT
        if (priority === 'HIGH' || priority === 'URGENT') {
            await this.sendEmail(userId, title, message);
        }

        // Send SMS if URGENT
        if (priority === 'URGENT') {
            await this.sendSMS(userId, message);
        }

        return notification;
    }

    // ================================
    // 7. DAILY AUTOMATION RUNNER
    // ================================
    async runDailyAutomation() {
        console.log('[AUTOMATION] Starting daily automation tasks...');
        
        const today = new Date();
        
        // Check clearance expiries
        await this.checkClearanceExpiries(today);
        
        // Check evaluation due dates
        await this.checkEvaluationDueDates(today);
        
        // Check upcoming rotations
        await this.checkUpcomingRotations(today);
        
        // Check preceptor licenses
        await this.checkPreceptorLicenses(today);
        
        // Check site affiliations
        await this.checkSiteAffiliations(today);
        
        // Generate daily reports
        await this.generateDailyReports(today);
        
        console.log('[AUTOMATION] Daily automation completed.');
    }

    async checkClearanceExpiries(today) {
        const students = await this.getAllActiveStudents();
        
        for (const student of students) {
            const clearance = await this.getClearanceData(student.student_id);
            const expiryChecks = [
                { field: 'bls_expiry', name: 'BLS Certification' },
                { field: 'acls_expiry', name: 'ACLS Certification' },
                { field: 'background_check_expiry', name: 'Background Check' },
                { field: 'health_insurance_expiry', name: 'Health Insurance' },
                { field: 'malpractice_expiry', name: 'Malpractice Insurance' }
            ];

            for (const check of expiryChecks) {
                if (clearance[check.field]) {
                    const daysUntilExpiry = this.daysBetween(today, new Date(clearance[check.field]));
                    
                    const triggers = this.automationRules.clearanceExpiry.triggers;
                    for (const trigger of triggers) {
                        if (daysUntilExpiry === trigger.days) {
                            await this.executeAction(trigger.action, {
                                studentId: student.student_id,
                                itemName: check.name,
                                expiryDate: clearance[check.field],
                                daysRemaining: daysUntilExpiry
                            });
                        }
                    }
                }
            }
        }
    }

    async checkEvaluationDueDates(today) {
        const pendingEvaluations = await this.getPendingEvaluations();
        
        for (const evaluation of pendingEvaluations) {
            const daysUntilDue = this.daysBetween(today, new Date(evaluation.due_date));
            
            const triggers = this.automationRules.evaluationDue.triggers;
            for (const trigger of triggers) {
                if (daysUntilDue === trigger.days) {
                    await this.executeAction(trigger.action, {
                        evaluationId: evaluation.evaluation_id,
                        preceptorId: evaluation.preceptor_id,
                        studentId: evaluation.student_id,
                        dueDate: evaluation.due_date
                    });
                }
            }
        }
    }

    // ================================
    // HELPER FUNCTIONS
    // ================================
    
    convertToLetterGrade(percentage) {
        if (percentage >= 90) return 'A';
        if (percentage >= 85) return 'B+';
        if (percentage >= 80) return 'B';
        if (percentage >= 75) return 'C+';
        if (percentage >= 70) return 'C';
        if (percentage >= 65) return 'D';
        return 'F';
    }

    calculateEPAAverage(epaScores) {
        if (!epaScores || epaScores.length === 0) return 0;
        
        const sum = epaScores.reduce((acc, score) => acc + score.overall_score, 0);
        return (sum / epaScores.length) * 20; // Convert to 100-point scale
    }

    daysBetween(date1, date2) {
        const diffTime = date2 - date1;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    async executeAction(actionName, context) {
        console.log(`[ACTION] Executing: ${actionName}`, context);
        
        // Map actions to their implementations
        const actions = {
            sendReminderEmail: this.sendReminderEmail,
            sendUrgentReminder: this.sendUrgentReminder,
            blockScheduling: this.blockScheduling,
            deactivateStudent: this.deactivateStudent,
            notifyPreceptor: this.notifyPreceptor,
            escalateToCoordinator: this.escalateToCoordinator,
            autoMarkIncomplete: this.autoMarkIncomplete,
            sendOrientationInfo: this.sendOrientationInfo,
            verifyAllClearances: this.verifyAllClearances,
            sendStartReminder: this.sendStartReminder,
            activateRotation: this.activateRotation,
            sendWarning: this.sendWarning,
            flagAtRisk: this.flagAtRisk,
            mandatoryMeeting: this.mandatoryMeeting,
            academicWarning: this.academicWarning,
            notifyAdmin: this.notifyAdmin,
            suspendPreceptor: this.suspendPreceptor
        };

        if (actions[actionName]) {
            await actions[actionName].call(this, context);
        }
    }

    // Placeholder database methods (to be implemented with actual DB)
    async getClearanceData(studentId) { return {}; }
    async updateClearanceStatus(studentId, data) { }
    async checkSiteCapacity(siteId, startDate, endDate) { return { isAtCapacity: false }; }
    async checkPreceptorAvailability(preceptorId, startDate, endDate) { return { available: true }; }
    async checkSchedulingConflicts(studentId, startDate, endDate) { return { hasConflict: false }; }
    async verifyPrerequisites(studentId, rotationTypeId) { return { met: true }; }
    async checkPreceptorLicense(preceptorId) { return { status: 'ACTIVE' }; }
    async getEvaluation(assignmentId, type) { return null; }
    async getEPAScores(assignmentId) { return []; }
    async getAttendancePercentage(assignmentId) { return 100; }
    async updateRotationGrade(assignmentId, data) { }
    async insertNotification(notification) { }
    async sendEmail(userId, title, message) { }
    async sendSMS(userId, message) { }
    async getAllActiveStudents() { return []; }
    async getPendingEvaluations() { return []; }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APPEAutomationEngine;
}

// Initialize global instance
window.appeAutomation = new APPEAutomationEngine();
