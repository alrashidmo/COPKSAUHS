/**
 * ============================================================================
 * CLINICAL AFFAIRS EXPERIENCE HUB - AUTOMATION RULES ENGINE
 * ============================================================================
 * 
 * Comprehensive automation rules for:
 * - Compliance monitoring
 * - Evaluation reminders
 * - License tracking
 * - Attendance monitoring
 * - Notification management
 * - Auto-grading
 * 
 * Version: 1.0.0
 * Last Updated: January 10, 2026
 * ============================================================================
 */

const AUTOMATION_RULES = {

    // ========================================================================
    // 1. COMPLIANCE AUTOMATION
    // ========================================================================

    compliance: {
        name: 'Student Compliance Monitoring',
        schedule: '0 3 * * *', // Daily at 3:00 AM
        
        rules: [
            {
                id: 'COMP001',
                name: 'Daily Compliance Status Check',
                trigger: 'DAILY',
                conditions: 'All students',
                
                actions: [
                    {
                        step: 1,
                        action: 'Fetch all students',
                        query: 'SELECT * FROM students WHERE deleted_at IS NULL'
                    },
                    {
                        step: 2,
                        action: 'For each student, fetch compliance requirements',
                        query: 'SELECT * FROM student_compliance WHERE student_id = ?'
                    },
                    {
                        step: 3,
                        action: 'Calculate compliance percentage',
                        logic: `
                            total_requirements = count(all requirements)
                            approved_requirements = count(status = 'APPROVED')
                            compliance_percent = (approved_requirements / total_requirements) * 100
                        `
                    },
                    {
                        step: 4,
                        action: 'Determine traffic light status',
                        logic: `
                            IF any requirement is EXPIRED:
                                status = 'RED'
                            ELSE IF compliance_percent == 100 AND no items expiring within 30 days:
                                status = 'GREEN'
                            ELSE IF compliance_percent >= 75:
                                status = 'YELLOW'
                            ELSE:
                                status = 'RED'
                        `
                    },
                    {
                        step: 5,
                        action: 'Update student record',
                        query: 'UPDATE students SET compliance_status = ?, compliance_percent = ? WHERE id = ?'
                    },
                    {
                        step: 6,
                        action: 'If status changed to RED, send alert',
                        notification: {
                            type: 'COMPLIANCE_STATUS_CHANGE',
                            priority: 'HIGH',
                            recipients: ['student', 'coordinator'],
                            channels: ['EMAIL', 'IN_APP']
                        }
                    }
                ]
            },
            
            {
                id: 'COMP002',
                name: 'Expiry Date Monitoring',
                trigger: 'DAILY',
                
                actions: [
                    {
                        step: 1,
                        action: 'Find items expiring in 60 days',
                        query: `SELECT * FROM student_compliance 
                                WHERE expiry_date <= CURRENT_DATE + INTERVAL '60 days'
                                AND expiry_date > CURRENT_DATE + INTERVAL '59 days'`,
                        notification: {
                            type: 'COMPLIANCE_EXPIRY_WARNING',
                            priority: 'LOW',
                            template: '60-day reminder',
                            channels: ['IN_APP']
                        }
                    },
                    {
                        step: 2,
                        action: 'Find items expiring in 30 days',
                        query: `SELECT * FROM student_compliance 
                                WHERE expiry_date <= CURRENT_DATE + INTERVAL '30 days'
                                AND expiry_date > CURRENT_DATE + INTERVAL '29 days'`,
                        notification: {
                            type: 'COMPLIANCE_EXPIRY_WARNING',
                            priority: 'MEDIUM',
                            template: '30-day warning',
                            channels: ['EMAIL', 'IN_APP']
                        }
                    },
                    {
                        step: 3,
                        action: 'Find items expiring in 14 days',
                        query: `SELECT * FROM student_compliance 
                                WHERE expiry_date <= CURRENT_DATE + INTERVAL '14 days'
                                AND expiry_date > CURRENT_DATE + INTERVAL '13 days'`,
                        notification: {
                            type: 'COMPLIANCE_EXPIRY_URGENT',
                            priority: 'HIGH',
                            template: '14-day urgent',
                            channels: ['EMAIL', 'SMS', 'IN_APP']
                        }
                    },
                    {
                        step: 4,
                        action: 'Find items expiring in 7 days',
                        query: `SELECT * FROM student_compliance 
                                WHERE expiry_date <= CURRENT_DATE + INTERVAL '7 days'
                                AND expiry_date > CURRENT_DATE + INTERVAL '6 days'`,
                        notification: {
                            type: 'COMPLIANCE_EXPIRY_CRITICAL',
                            priority: 'URGENT',
                            template: '7-day critical',
                            channels: ['EMAIL', 'SMS', 'IN_APP'],
                            cc: ['coordinator']
                        }
                    },
                    {
                        step: 5,
                        action: 'Mark expired items',
                        query: `UPDATE student_compliance 
                                SET status = 'EXPIRED' 
                                WHERE expiry_date < CURRENT_DATE AND status = 'APPROVED'`,
                        notification: {
                            type: 'COMPLIANCE_EXPIRED',
                            priority: 'URGENT',
                            template: 'Item expired',
                            channels: ['EMAIL', 'SMS', 'IN_APP'],
                            cc: ['coordinator']
                        }
                    }
                ]
            },
            
            {
                id: 'COMP003',
                name: 'Block Non-Compliant Students from Scheduling',
                trigger: 'REAL_TIME',
                event: 'BEFORE_ROTATION_ASSIGNMENT',
                
                validation: {
                    check: 'Student compliance status',
                    rule: `
                        IF student.compliance_status == 'RED':
                            BLOCK assignment
                            SEND notification to student
                            SEND notification to coordinator
                            RETURN error "Student not compliant - cannot be assigned"
                        ELSE:
                            ALLOW assignment
                    `
                }
            }
        ]
    },

    // ========================================================================
    // 2. EVALUATION AUTOMATION
    // ========================================================================

    evaluations: {
        name: 'Evaluation Reminder System',
        schedule: '0 8 * * *', // Daily at 8:00 AM
        
        rules: [
            {
                id: 'EVAL001',
                name: 'Midpoint Evaluation Creation',
                trigger: 'REAL_TIME',
                event: 'ROTATION_STARTED',
                
                actions: [
                    {
                        step: 1,
                        action: 'Calculate midpoint due date',
                        logic: `
                            rotation_duration = rotation.end_date - rotation.start_date
                            midpoint_date = rotation.start_date + (rotation_duration * 0.5)
                            due_date = midpoint_date + 7 days
                        `
                    },
                    {
                        step: 2,
                        action: 'Create midpoint evaluation task',
                        query: `INSERT INTO evaluations (rotation_assignment_id, template_id, type, due_date, status)
                                VALUES (?, ?, 'MIDPOINT', ?, 'DRAFT')`
                    },
                    {
                        step: 3,
                        action: 'Send notification to preceptor',
                        notification: {
                            type: 'EVALUATION_CREATED',
                            priority: 'LOW',
                            template: 'Midpoint evaluation scheduled',
                            channels: ['IN_APP']
                        }
                    }
                ]
            },
            
            {
                id: 'EVAL002',
                name: 'Final Evaluation Creation',
                trigger: 'REAL_TIME',
                event: 'ROTATION_STARTED',
                
                actions: [
                    {
                        step: 1,
                        action: 'Calculate final due date',
                        logic: 'due_date = rotation.end_date + 5 days'
                    },
                    {
                        step: 2,
                        action: 'Create final evaluation task',
                        query: `INSERT INTO evaluations (rotation_assignment_id, template_id, type, due_date, status)
                                VALUES (?, ?, 'FINAL', ?, 'DRAFT')`
                    }
                ]
            },
            
            {
                id: 'EVAL003',
                name: 'Evaluation Due Reminders',
                trigger: 'DAILY',
                
                actions: [
                    {
                        step: 1,
                        action: '7 days before due - Info reminder',
                        query: `SELECT * FROM evaluations 
                                WHERE due_date = CURRENT_DATE + INTERVAL '7 days' 
                                AND status != 'SUBMITTED'`,
                        notification: {
                            type: 'EVALUATION_DUE_REMINDER',
                            priority: 'LOW',
                            template: '7-day reminder',
                            channels: ['EMAIL', 'IN_APP']
                        }
                    },
                    {
                        step: 2,
                        action: '3 days before due - Warning',
                        query: `SELECT * FROM evaluations 
                                WHERE due_date = CURRENT_DATE + INTERVAL '3 days' 
                                AND status != 'SUBMITTED'`,
                        notification: {
                            type: 'EVALUATION_DUE_WARNING',
                            priority: 'MEDIUM',
                            template: '3-day warning',
                            channels: ['EMAIL', 'IN_APP']
                        }
                    },
                    {
                        step: 3,
                        action: '1 day before due - Urgent',
                        query: `SELECT * FROM evaluations 
                                WHERE due_date = CURRENT_DATE + INTERVAL '1 day' 
                                AND status != 'SUBMITTED'`,
                        notification: {
                            type: 'EVALUATION_DUE_URGENT',
                            priority: 'HIGH',
                            template: '1-day urgent',
                            channels: ['EMAIL', 'SMS', 'IN_APP']
                        }
                    },
                    {
                        step: 4,
                        action: 'Due date - Critical',
                        query: `SELECT * FROM evaluations 
                                WHERE due_date = CURRENT_DATE 
                                AND status != 'SUBMITTED'`,
                        notification: {
                            type: 'EVALUATION_DUE_TODAY',
                            priority: 'URGENT',
                            template: 'Due today',
                            channels: ['EMAIL', 'SMS', 'IN_APP']
                        }
                    },
                    {
                        step: 5,
                        action: 'Overdue - Escalation',
                        query: `SELECT * FROM evaluations 
                                WHERE due_date < CURRENT_DATE 
                                AND status != 'SUBMITTED'`,
                        notification: {
                            type: 'EVALUATION_OVERDUE',
                            priority: 'URGENT',
                            template: 'Evaluation overdue',
                            channels: ['EMAIL', 'SMS', 'IN_APP'],
                            cc: ['coordinator', 'admin']
                        }
                    }
                ]
            },
            
            {
                id: 'EVAL004',
                name: 'Auto Grade Calculation',
                trigger: 'REAL_TIME',
                event: 'EVALUATION_SUBMITTED',
                
                actions: [
                    {
                        step: 1,
                        action: 'Fetch all evaluations for rotation',
                        query: `SELECT * FROM evaluations 
                                WHERE rotation_assignment_id = ? 
                                AND status = 'SUBMITTED'`
                    },
                    {
                        step: 2,
                        action: 'Calculate weighted grade',
                        logic: `
                            midpoint_score = midpoint_evaluation.overall_percentage
                            final_score = final_evaluation.overall_percentage
                            
                            // EPA average
                            epa_scores = SELECT AVG(entrustment_level) FROM epa_assessments 
                                        WHERE rotation_assignment_id = ?
                            epa_percentage = (epa_scores / 5) * 100
                            
                            // Attendance percentage
                            attendance = SELECT 
                                COUNT(*) FILTER (WHERE status = 'PRESENT') as present,
                                COUNT(*) as total
                            FROM attendance_records
                            WHERE rotation_assignment_id = ?
                            attendance_percentage = (present / total) * 100
                            
                            // Final grade calculation
                            final_grade = (midpoint_score * 0.30) + 
                                         (final_score * 0.50) + 
                                         (epa_percentage * 0.15) + 
                                         (attendance_percentage * 0.05)
                            
                            // Pass/Fail determination
                            IF final_grade >= 70:
                                pass_fail = 'PASS'
                            ELSE:
                                pass_fail = 'FAIL'
                        `
                    },
                    {
                        step: 3,
                        action: 'Update rotation assignment',
                        query: `UPDATE rotation_assignments 
                                SET final_grade = ?, pass_fail = ?, status = 'COMPLETED'
                                WHERE id = ?`
                    },
                    {
                        step: 4,
                        action: 'Check if failing',
                        condition: 'final_grade < 70',
                        notification: {
                            type: 'GRADE_FAILING',
                            priority: 'URGENT',
                            template: 'Failing grade alert',
                            recipients: ['student', 'coordinator'],
                            channels: ['EMAIL', 'IN_APP']
                        }
                    },
                    {
                        step: 5,
                        action: 'Send grade notification to student',
                        notification: {
                            type: 'GRADE_POSTED',
                            priority: 'MEDIUM',
                            template: 'Grade available',
                            channels: ['EMAIL', 'IN_APP']
                        }
                    }
                ]
            },
            
            {
                id: 'EVAL005',
                name: 'Red Flag Alert',
                trigger: 'REAL_TIME',
                event: 'EVALUATION_SUBMITTED',
                
                conditions: 'evaluation.red_flag == true',
                
                actions: [
                    {
                        step: 1,
                        action: 'Send immediate alert to coordinator',
                        notification: {
                            type: 'EVALUATION_RED_FLAG',
                            priority: 'URGENT',
                            template: 'Red flag raised',
                            recipients: ['coordinator', 'admin'],
                            channels: ['EMAIL', 'SMS', 'IN_APP']
                        }
                    },
                    {
                        step: 2,
                        action: 'Create incident record',
                        query: `INSERT INTO professionalism_incidents 
                                (rotation_assignment_id, incident_type, severity, description, reported_by)
                                VALUES (?, 'EVALUATION_RED_FLAG', 'SEVERE', ?, ?)`
                    },
                    {
                        step: 3,
                        action: 'Flag student for review',
                        query: `UPDATE students SET flags = array_append(flags, 'RED_FLAG_EVALUATION') 
                                WHERE id = ?`
                    }
                ]
            }
        ]
    },

    // ========================================================================
    // 3. PRECEPTOR LICENSE MONITORING
    // ========================================================================

    preceptors: {
        name: 'Preceptor Compliance Monitoring',
        schedule: '0 2 * * 0', // Weekly on Sunday at 2:00 AM
        
        rules: [
            {
                id: 'PREC001',
                name: 'License Expiry Monitoring',
                trigger: 'WEEKLY',
                
                actions: [
                    {
                        step: 1,
                        action: '90 days before expiry',
                        query: `SELECT * FROM preceptors 
                                WHERE license_expiry_date <= CURRENT_DATE + INTERVAL '90 days'
                                AND license_expiry_date > CURRENT_DATE + INTERVAL '83 days'`,
                        notification: {
                            type: 'LICENSE_RENEWAL_REMINDER',
                            priority: 'LOW',
                            template: '90-day renewal reminder',
                            channels: ['EMAIL', 'IN_APP']
                        }
                    },
                    {
                        step: 2,
                        action: '60 days before expiry',
                        query: `SELECT * FROM preceptors 
                                WHERE license_expiry_date <= CURRENT_DATE + INTERVAL '60 days'
                                AND license_expiry_date > CURRENT_DATE + INTERVAL '53 days'`,
                        notification: {
                            type: 'LICENSE_RENEWAL_WARNING',
                            priority: 'MEDIUM',
                            template: '60-day warning',
                            channels: ['EMAIL', 'SMS', 'IN_APP']
                        }
                    },
                    {
                        step: 3,
                        action: '30 days before expiry',
                        query: `SELECT * FROM preceptors 
                                WHERE license_expiry_date <= CURRENT_DATE + INTERVAL '30 days'
                                AND license_expiry_date > CURRENT_DATE + INTERVAL '23 days'`,
                        notification: {
                            type: 'LICENSE_RENEWAL_URGENT',
                            priority: 'HIGH',
                            template: '30-day urgent',
                            channels: ['EMAIL', 'SMS', 'IN_APP'],
                            cc: ['admin']
                        }
                    },
                    {
                        step: 4,
                        action: '14 days before expiry',
                        query: `SELECT * FROM preceptors 
                                WHERE license_expiry_date <= CURRENT_DATE + INTERVAL '14 days'
                                AND license_expiry_date > CURRENT_DATE + INTERVAL '7 days'`,
                        notification: {
                            type: 'LICENSE_RENEWAL_CRITICAL',
                            priority: 'URGENT',
                            template: '14-day critical',
                            channels: ['EMAIL', 'SMS', 'IN_APP'],
                            cc: ['admin', 'coordinator']
                        }
                    },
                    {
                        step: 5,
                        action: 'License expired - Auto-disable',
                        query: `UPDATE preceptors 
                                SET license_status = 'EXPIRED', is_active = FALSE 
                                WHERE license_expiry_date < CURRENT_DATE 
                                AND license_status != 'EXPIRED'`,
                        notification: {
                            type: 'LICENSE_EXPIRED',
                            priority: 'URGENT',
                            template: 'License expired - account disabled',
                            channels: ['EMAIL', 'SMS', 'IN_APP'],
                            cc: ['admin', 'coordinator']
                        }
                    },
                    {
                        step: 6,
                        action: 'Remove from future assignments',
                        query: `UPDATE rotation_assignments 
                                SET preceptor_id = NULL, status = 'REASSIGNMENT_NEEDED'
                                WHERE preceptor_id IN (SELECT id FROM preceptors WHERE license_status = 'EXPIRED')
                                AND start_date > CURRENT_DATE`
                    }
                ]
            },
            
            {
                id: 'PREC002',
                name: 'Preceptor Training Expiry',
                trigger: 'WEEKLY',
                
                actions: [
                    {
                        step: 1,
                        action: 'Find training expiring in 60 days',
                        query: `SELECT * FROM preceptors 
                                WHERE training_expiry_date <= CURRENT_DATE + INTERVAL '60 days'
                                AND training_expiry_date > CURRENT_DATE`,
                        notification: {
                            type: 'TRAINING_RENEWAL_REMINDER',
                            priority: 'MEDIUM',
                            template: 'Training renewal required',
                            channels: ['EMAIL', 'IN_APP']
                        }
                    },
                    {
                        step: 2,
                        action: 'Auto-disable if training expired',
                        query: `UPDATE preceptors 
                                SET is_active = FALSE 
                                WHERE training_expiry_date < CURRENT_DATE 
                                AND is_active = TRUE`,
                        notification: {
                            type: 'TRAINING_EXPIRED',
                            priority: 'URGENT',
                            template: 'Training expired',
                            channels: ['EMAIL', 'SMS', 'IN_APP'],
                            cc: ['admin']
                        }
                    }
                ]
            },
            
            {
                id: 'PREC003',
                name: 'Evaluation Completion Tracking',
                trigger: 'WEEKLY',
                
                actions: [
                    {
                        step: 1,
                        action: 'Calculate preceptor evaluation completion rate',
                        query: `
                            SELECT 
                                p.id,
                                COUNT(e.id) FILTER (WHERE e.status = 'SUBMITTED' AND e.submitted_at <= e.due_date) as on_time,
                                COUNT(e.id) FILTER (WHERE e.status = 'SUBMITTED' AND e.submitted_at > e.due_date) as late,
                                COUNT(e.id) FILTER (WHERE e.status != 'SUBMITTED' AND e.due_date < CURRENT_DATE) as missing,
                                COUNT(e.id) as total
                            FROM preceptors p
                            LEFT JOIN rotation_assignments ra ON ra.preceptor_id = p.id
                            LEFT JOIN evaluations e ON e.rotation_assignment_id = ra.id
                            WHERE e.created_at >= CURRENT_DATE - INTERVAL '1 year'
                            GROUP BY p.id
                        `
                    },
                    {
                        step: 2,
                        action: 'Flag preceptors with low completion rate',
                        condition: 'completion_rate < 0.80 OR late_count >= 3',
                        notification: {
                            type: 'PRECEPTOR_PERFORMANCE_CONCERN',
                            priority: 'MEDIUM',
                            template: 'Low evaluation completion rate',
                            recipients: ['admin', 'coordinator'],
                            channels: ['EMAIL', 'IN_APP']
                        }
                    }
                ]
            }
        ]
    },

    // ========================================================================
    // 4. SITE AFFILIATION MONITORING
    // ========================================================================

    sites: {
        name: 'Site Affiliation Monitoring',
        schedule: '0 1 1 * *', // Monthly on 1st at 1:00 AM
        
        rules: [
            {
                id: 'SITE001',
                name: 'Affiliation Agreement Expiry',
                trigger: 'MONTHLY',
                
                actions: [
                    {
                        step: 1,
                        action: '180 days before expiry - Start renewal',
                        query: `SELECT * FROM sites 
                                WHERE affiliation_end_date <= CURRENT_DATE + INTERVAL '180 days'
                                AND affiliation_end_date > CURRENT_DATE + INTERVAL '150 days'`,
                        notification: {
                            type: 'AFFILIATION_RENEWAL_START',
                            priority: 'LOW',
                            template: 'Start affiliation renewal process',
                            recipients: ['admin'],
                            channels: ['EMAIL', 'IN_APP']
                        }
                    },
                    {
                        step: 2,
                        action: '90 days before expiry - Warning',
                        query: `SELECT * FROM sites 
                                WHERE affiliation_end_date <= CURRENT_DATE + INTERVAL '90 days'
                                AND affiliation_end_date > CURRENT_DATE + INTERVAL '60 days'`,
                        notification: {
                            type: 'AFFILIATION_EXPIRY_WARNING',
                            priority: 'MEDIUM',
                            template: '90-day warning',
                            recipients: ['admin'],
                            channels: ['EMAIL', 'IN_APP']
                        }
                    },
                    {
                        step: 3,
                        action: '60 days before expiry - Urgent',
                        query: `SELECT * FROM sites 
                                WHERE affiliation_end_date <= CURRENT_DATE + INTERVAL '60 days'
                                AND affiliation_end_date > CURRENT_DATE + INTERVAL '30 days'`,
                        notification: {
                            type: 'AFFILIATION_EXPIRY_URGENT',
                            priority: 'HIGH',
                            template: '60-day urgent',
                            recipients: ['admin'],
                            channels: ['EMAIL', 'SMS', 'IN_APP']
                        }
                    },
                    {
                        step: 4,
                        action: '30 days before expiry - Critical',
                        query: `SELECT * FROM sites 
                                WHERE affiliation_end_date <= CURRENT_DATE + INTERVAL '30 days'
                                AND affiliation_end_date > CURRENT_DATE`,
                        notification: {
                            type: 'AFFILIATION_EXPIRY_CRITICAL',
                            priority: 'URGENT',
                            template: '30-day critical',
                            recipients: ['admin'],
                            channels: ['EMAIL', 'SMS', 'IN_APP']
                        }
                    },
                    {
                        step: 5,
                        action: 'Affiliation expired - Auto-disable',
                        query: `UPDATE sites 
                                SET is_active = FALSE 
                                WHERE affiliation_end_date < CURRENT_DATE 
                                AND is_active = TRUE`,
                        notification: {
                            type: 'AFFILIATION_EXPIRED',
                            priority: 'URGENT',
                            template: 'Affiliation expired - site disabled',
                            recipients: ['admin'],
                            channels: ['EMAIL', 'SMS', 'IN_APP']
                        }
                    }
                ]
            }
        ]
    },

    // ========================================================================
    // 5. ATTENDANCE MONITORING
    // ========================================================================

    attendance: {
        name: 'Attendance Monitoring',
        schedule: '0 20 * * *', // Daily at 8:00 PM
        
        rules: [
            {
                id: 'ATT001',
                name: 'Daily Attendance Calculation',
                trigger: 'DAILY',
                
                actions: [
                    {
                        step: 1,
                        action: 'Calculate attendance percentage for active rotations',
                        query: `
                            SELECT 
                                ra.id,
                                ra.student_id,
                                COUNT(*) FILTER (WHERE ar.status = 'PRESENT') as present,
                                COUNT(*) FILTER (WHERE ar.status IN ('ABSENT_UNEXCUSED', 'ABSENT_EXCUSED')) as absent,
                                COUNT(*) as total,
                                (COUNT(*) FILTER (WHERE ar.status = 'PRESENT')::FLOAT / COUNT(*)::FLOAT * 100) as percentage
                            FROM rotation_assignments ra
                            LEFT JOIN attendance_records ar ON ar.rotation_assignment_id = ra.id
                            WHERE ra.status = 'IN_PROGRESS'
                            GROUP BY ra.id, ra.student_id
                        `
                    },
                    {
                        step: 2,
                        action: 'Flag if < 80% attendance',
                        condition: 'percentage < 80',
                        notification: {
                            type: 'ATTENDANCE_FAILING',
                            priority: 'URGENT',
                            template: 'Attendance below threshold',
                            recipients: ['student', 'preceptor', 'coordinator'],
                            channels: ['EMAIL', 'SMS', 'IN_APP']
                        }
                    },
                    {
                        step: 3,
                        action: 'Warning if 80-85% attendance',
                        condition: 'percentage >= 80 AND percentage < 85',
                        notification: {
                            type: 'ATTENDANCE_WARNING',
                            priority: 'MEDIUM',
                            template: 'Attendance warning',
                            recipients: ['student', 'preceptor'],
                            channels: ['EMAIL', 'IN_APP']
                        }
                    },
                    {
                        step: 4,
                        action: 'Alert on unexcused absences',
                        query: `SELECT * FROM attendance_records 
                                WHERE status = 'ABSENT_UNEXCUSED' 
                                AND date = CURRENT_DATE`,
                        notification: {
                            type: 'UNEXCUSED_ABSENCE',
                            priority: 'HIGH',
                            template: 'Unexcused absence reported',
                            recipients: ['student', 'coordinator'],
                            channels: ['EMAIL', 'IN_APP']
                        }
                    }
                ]
            }
        ]
    },

    // ========================================================================
    // 6. ROTATION LIFECYCLE AUTOMATION
    // ========================================================================

    rotations: {
        name: 'Rotation Lifecycle Management',
        schedule: '0 6 * * *', // Daily at 6:00 AM
        
        rules: [
            {
                id: 'ROT001',
                name: 'Rotation Start Notifications',
                trigger: 'DAILY',
                
                actions: [
                    {
                        step: 1,
                        action: 'Find rotations starting in 7 days',
                        query: `SELECT * FROM rotation_assignments 
                                WHERE start_date = CURRENT_DATE + INTERVAL '7 days'
                                AND status = 'CONFIRMED'`,
                        notification: {
                            type: 'ROTATION_STARTING_SOON',
                            priority: 'MEDIUM',
                            template: '7-day rotation start reminder',
                            recipients: ['student', 'preceptor', 'site_coordinator'],
                            channels: ['EMAIL', 'IN_APP']
                        }
                    },
                    {
                        step: 2,
                        action: 'Find rotations starting today',
                        query: `SELECT * FROM rotation_assignments 
                                WHERE start_date = CURRENT_DATE`,
                        then: [
                            {
                                action: 'Update status to IN_PROGRESS',
                                query: `UPDATE rotation_assignments 
                                        SET status = 'IN_PROGRESS' 
                                        WHERE start_date = CURRENT_DATE`
                            },
                            {
                                action: 'Send welcome notification',
                                notification: {
                                    type: 'ROTATION_STARTED',
                                    priority: 'HIGH',
                                    template: 'Rotation started today',
                                    recipients: ['student', 'preceptor'],
                                    channels: ['EMAIL', 'IN_APP']
                                }
                            }
                        ]
                    },
                    {
                        step: 3,
                        action: 'Find rotations ending today',
                        query: `SELECT * FROM rotation_assignments 
                                WHERE end_date = CURRENT_DATE 
                                AND status = 'IN_PROGRESS'`,
                        then: [
                            {
                                action: 'Update status',
                                query: `UPDATE rotation_assignments 
                                        SET status = 'AWAITING_EVALUATION' 
                                        WHERE end_date = CURRENT_DATE`
                            },
                            {
                                action: 'Send completion notification',
                                notification: {
                                    type: 'ROTATION_COMPLETED',
                                    priority: 'MEDIUM',
                                    template: 'Rotation completed',
                                    recipients: ['student', 'preceptor'],
                                    channels: ['EMAIL', 'IN_APP']
                                }
                            }
                        ]
                    }
                ]
            },
            
            {
                id: 'ROT002',
                name: 'Registration Window Management',
                trigger: 'DAILY',
                
                actions: [
                    {
                        step: 1,
                        action: 'Open registration windows',
                        query: `UPDATE rotation_blocks 
                                SET status = 'OPEN_REGISTRATION' 
                                WHERE registration_start = CURRENT_DATE 
                                AND status = 'DRAFT'`,
                        notification: {
                            type: 'REGISTRATION_OPENED',
                            priority: 'HIGH',
                            template: 'Rotation registration now open',
                            recipients: ['students_in_program'],
                            channels: ['EMAIL', 'IN_APP']
                        }
                    },
                    {
                        step: 2,
                        action: 'Close registration windows',
                        query: `UPDATE rotation_blocks 
                                SET status = 'CLOSED_REGISTRATION' 
                                WHERE registration_end = CURRENT_DATE 
                                AND status = 'OPEN_REGISTRATION'`,
                        notification: {
                            type: 'REGISTRATION_CLOSED',
                            priority: 'MEDIUM',
                            template: 'Registration closed',
                            recipients: ['coordinator'],
                            channels: ['EMAIL', 'IN_APP']
                        }
                    }
                ]
            }
        ]
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUTOMATION_RULES;
}
