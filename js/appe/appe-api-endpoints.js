/**
 * APPE API ENDPOINTS
 * RESTful API design for APPE management system
 * Organized by functional area with full CRUD operations
 */

const APPE_API_ENDPOINTS = {

    // ================================
    // AUTHENTICATION & AUTHORIZATION
    // ================================
    auth: {
        login: {
            method: 'POST',
            endpoint: '/api/auth/login',
            body: { email: 'string', password: 'string', userType: 'STUDENT|PRECEPTOR|ADMIN' },
            response: { token: 'JWT', user: 'object', permissions: 'array' }
        },
        logout: {
            method: 'POST',
            endpoint: '/api/auth/logout',
            headers: { Authorization: 'Bearer {token}' }
        },
        refreshToken: {
            method: 'POST',
            endpoint: '/api/auth/refresh',
            body: { refreshToken: 'string' }
        }
    },

    // ================================
    // STUDENT ENDPOINTS
    // ================================
    students: {
        // Get all students (Admin only)
        getAll: {
            method: 'GET',
            endpoint: '/api/students',
            query: { cohort: 'string', status: 'string', page: 'int', limit: 'int' },
            response: { students: 'array', total: 'int', page: 'int' }
        },

        // Get single student
        getById: {
            method: 'GET',
            endpoint: '/api/students/:id',
            response: { student: 'object' }
        },

        // Create student
        create: {
            method: 'POST',
            endpoint: '/api/students',
            body: {
                university_id: 'string',
                first_name: 'string',
                last_name: 'string',
                email: 'string',
                cohort: 'string'
            },
            response: { student: 'object', clearance: 'object' }
        },

        // Update student
        update: {
            method: 'PUT',
            endpoint: '/api/students/:id',
            body: { /* any student fields */ },
            response: { student: 'object' }
        },

        // Get student clearance status
        getClearance: {
            method: 'GET',
            endpoint: '/api/students/:id/clearance',
            response: {
                student_id: 'string',
                overall_status: 'COMPLETE|INCOMPLETE|EXPIRED',
                completion_percentage: 'int',
                clearance_items: 'array',
                expired_items: 'array',
                expiring_soon: 'array'
            }
        },

        // Update clearance item
        updateClearance: {
            method: 'PUT',
            endpoint: '/api/students/:id/clearance',
            body: {
                item_name: 'string',
                status: 'boolean',
                expiry_date: 'date',
                document_url: 'string'
            },
            response: { clearance: 'object', auto_validation_result: 'object' }
        },

        // Get student rotations
        getRotations: {
            method: 'GET',
            endpoint: '/api/students/:id/rotations',
            query: { status: 'SCHEDULED|ACTIVE|COMPLETED', academic_year: 'string' },
            response: { rotations: 'array' }
        },

        // Get student performance dashboard
        getPerformanceDashboard: {
            method: 'GET',
            endpoint: '/api/students/:id/performance',
            response: {
                current_rotations: 'array',
                completed_rotations: 'array',
                gpa: 'float',
                epa_progress: 'object',
                attendance_summary: 'object',
                risk_level: 'GREEN|YELLOW|RED',
                alerts: 'array'
            }
        }
    },

    // ================================
    // CLEARANCE MANAGEMENT
    // ================================
    clearances: {
        // Validate all students (batch process)
        validateAll: {
            method: 'POST',
            endpoint: '/api/clearances/validate-all',
            response: {
                total_students: 'int',
                cleared: 'int',
                pending: 'int',
                blocked: 'int',
                validation_results: 'array'
            }
        },

        // Get expiring clearances
        getExpiring: {
            method: 'GET',
            endpoint: '/api/clearances/expiring',
            query: { days: 'int' }, // default 30
            response: { expiring_items: 'array' }
        }
    },

    // ================================
    // ROTATION SCHEDULING
    // ================================
    rotations: {
        // Get all rotation blocks
        getBlocks: {
            method: 'GET',
            endpoint: '/api/rotations/blocks',
            query: { academic_year: 'string' },
            response: { blocks: 'array' }
        },

        // Create rotation assignment
        createAssignment: {
            method: 'POST',
            endpoint: '/api/rotations/assignments',
            body: {
                student_id: 'string',
                block_id: 'int',
                rotation_type_id: 'int',
                site_id: 'int',
                preceptor_id: 'int',
                start_date: 'date',
                end_date: 'date'
            },
            response: {
                assignment: 'object',
                validation_result: 'object', // from automation engine
                clearance_verified: 'boolean'
            }
        },

        // Validate assignment (pre-check before creating)
        validateAssignment: {
            method: 'POST',
            endpoint: '/api/rotations/validate-assignment',
            body: { /* same as createAssignment */ },
            response: {
                valid: 'boolean',
                errors: 'array',
                warnings: 'array',
                can_proceed: 'boolean'
            }
        },

        // Get rotation availability
        getAvailability: {
            method: 'GET',
            endpoint: '/api/rotations/availability',
            query: {
                block_id: 'int',
                rotation_type_id: 'int',
                site_id: 'int'
            },
            response: {
                available_slots: 'int',
                total_capacity: 'int',
                available_preceptors: 'array'
            }
        },

        // Update rotation status
        updateStatus: {
            method: 'PUT',
            endpoint: '/api/rotations/assignments/:id/status',
            body: { status: 'SCHEDULED|ACTIVE|COMPLETED|WITHDRAWN' },
            response: { assignment: 'object' }
        }
    },

    // ================================
    // PRECEPTOR MANAGEMENT
    // ================================
    preceptors: {
        // Get all preceptors
        getAll: {
            method: 'GET',
            endpoint: '/api/preceptors',
            query: {
                specialty: 'string',
                site_id: 'int',
                active: 'boolean',
                license_status: 'ACTIVE|EXPIRED'
            },
            response: { preceptors: 'array' }
        },

        // Get preceptor schedule
        getSchedule: {
            method: 'GET',
            endpoint: '/api/preceptors/:id/schedule',
            query: { start_date: 'date', end_date: 'date' },
            response: {
                preceptor: 'object',
                current_students: 'array',
                upcoming_rotations: 'array',
                capacity_status: 'object'
            }
        },

        // Get preceptor evaluations to complete
        getPendingEvaluations: {
            method: 'GET',
            endpoint: '/api/preceptors/:id/evaluations/pending',
            response: {
                pending_evaluations: 'array',
                overdue_evaluations: 'array'
            }
        },

        // Update preceptor license
        updateLicense: {
            method: 'PUT',
            endpoint: '/api/preceptors/:id/license',
            body: {
                license_number: 'string',
                license_expiry: 'date',
                license_status: 'ACTIVE|EXPIRED'
            },
            response: {
                preceptor: 'object',
                auto_validation: 'object'
            }
        }
    },

    // ================================
    // SITE MANAGEMENT
    // ================================
    sites: {
        // Get all sites
        getAll: {
            method: 'GET',
            endpoint: '/api/sites',
            query: { region: 'string', site_type: 'string', active: 'boolean' },
            response: { sites: 'array' }
        },

        // Get site capacity analysis
        getCapacityAnalysis: {
            method: 'GET',
            endpoint: '/api/sites/:id/capacity',
            query: { block_id: 'int' },
            response: {
                max_capacity: 'int',
                current_utilization: 'int',
                utilization_percentage: 'float',
                available_slots: 'int',
                scheduled_students: 'array'
            }
        }
    },

    // ================================
    // EVALUATIONS & EPAs
    // ================================
    evaluations: {
        // Create evaluation
        create: {
            method: 'POST',
            endpoint: '/api/evaluations',
            body: {
                assignment_id: 'int',
                evaluation_type: 'MID_ROTATION|FINAL',
                clinical_knowledge: 'int',
                problem_solving: 'int',
                communication_skills: 'int',
                professionalism: 'int',
                // ... other rubric scores
                strengths: 'string',
                weaknesses: 'string',
                overall_comments: 'string'
            },
            response: {
                evaluation: 'object',
                auto_calculated_grade: 'object', // from automation engine
                rotation_updated: 'boolean'
            }
        },

        // Submit evaluation
        submit: {
            method: 'POST',
            endpoint: '/api/evaluations/:id/submit',
            response: {
                evaluation: 'object',
                notification_sent: 'boolean',
                grade_updated: 'boolean'
            }
        },

        // Get evaluation by ID
        getById: {
            method: 'GET',
            endpoint: '/api/evaluations/:id',
            response: { evaluation: 'object' }
        }
    },

    epas: {
        // Create EPA assessment
        createAssessment: {
            method: 'POST',
            endpoint: '/api/epas/assessments',
            body: {
                assignment_id: 'int',
                student_id: 'string',
                epa_id: 'int',
                entrustment_level: 'int', // 1-5
                knowledge_score: 'int',
                skills_score: 'int',
                attitude_score: 'int',
                strengths: 'string',
                areas_for_improvement: 'string'
            },
            response: {
                assessment: 'object',
                epa_progression: 'object' // auto-calculated
            }
        },

        // Get student EPA progress
        getStudentProgress: {
            method: 'GET',
            endpoint: '/api/epas/students/:id/progress',
            response: {
                epa_domains: 'array',
                overall_progress: 'object',
                at_risk_epas: 'array',
                progression_trends: 'object'
            }
        }
    },

    // ================================
    // ATTENDANCE & INCIDENTS
    // ================================
    attendance: {
        // Record attendance
        create: {
            method: 'POST',
            endpoint: '/api/attendance',
            body: {
                assignment_id: 'int',
                student_id: 'string',
                attendance_date: 'date',
                status: 'PRESENT|ABSENT|EXCUSED|LATE',
                reason: 'string'
            },
            response: {
                attendance: 'object',
                updated_stats: 'object', // auto-calculated
                alerts: 'array' // if threshold exceeded
            }
        },

        // Get attendance summary
        getSummary: {
            method: 'GET',
            endpoint: '/api/attendance/summary/:assignment_id',
            response: {
                total_days: 'int',
                days_attended: 'int',
                days_absent: 'int',
                attendance_percentage: 'float',
                status: 'SATISFACTORY|AT_RISK',
                violation_alerts: 'array'
            }
        }
    },

    incidents: {
        // Create incident report
        create: {
            method: 'POST',
            endpoint: '/api/incidents',
            body: {
                assignment_id: 'int',
                student_id: 'string',
                incident_type: 'PROFESSIONALISM|SAFETY|COMPETENCE|ATTENDANCE|ETHICS',
                severity: 'LOW|MODERATE|HIGH|CRITICAL',
                description: 'string',
                action_taken: 'string'
            },
            response: {
                incident: 'object',
                notifications_sent: 'array',
                risk_level_updated: 'boolean'
            }
        },

        // Get student incidents
        getByStudent: {
            method: 'GET',
            endpoint: '/api/incidents/students/:id',
            query: { status: 'OPEN|RESOLVED', severity: 'string' },
            response: { incidents: 'array' }
        }
    },

    // ================================
    // NOTIFICATIONS
    // ================================
    notifications: {
        // Get user notifications
        getByUser: {
            method: 'GET',
            endpoint: '/api/notifications',
            query: {
                user_id: 'string',
                read_status: 'boolean',
                priority: 'LOW|MEDIUM|HIGH|URGENT'
            },
            response: { notifications: 'array', unread_count: 'int' }
        },

        // Mark as read
        markAsRead: {
            method: 'PUT',
            endpoint: '/api/notifications/:id/read',
            response: { notification: 'object' }
        },

        // Bulk mark as read
        markAllAsRead: {
            method: 'PUT',
            endpoint: '/api/notifications/mark-all-read',
            body: { user_id: 'string' },
            response: { updated_count: 'int' }
        }
    },

    // ================================
    // REPORTING & ANALYTICS
    // ================================
    reports: {
        // ACPE Accreditation Report
        getACPEReport: {
            method: 'GET',
            endpoint: '/api/reports/acpe',
            query: { academic_year: 'string' },
            response: {
                program_summary: 'object',
                student_outcomes: 'object',
                epa_achievement: 'object',
                site_utilization: 'object',
                preceptor_metrics: 'object',
                quality_indicators: 'object'
            }
        },

        // NCAAA Report
        getNCAAAAReport: {
            method: 'GET',
            endpoint: '/api/reports/ncaaa',
            query: { academic_year: 'string' },
            response: { /* similar structure */ }
        },

        // Student Performance Report
        getStudentPerformanceReport: {
            method: 'GET',
            endpoint: '/api/reports/student-performance',
            query: {
                cohort: 'string',
                start_date: 'date',
                end_date: 'date'
            },
            response: {
                cohort_statistics: 'object',
                grade_distribution: 'object',
                epa_achievement_rates: 'object',
                at_risk_students: 'array',
                top_performers: 'array'
            }
        },

        // Site Utilization Report
        getSiteUtilizationReport: {
            method: 'GET',
            endpoint: '/api/reports/site-utilization',
            query: { academic_year: 'string' },
            response: {
                sites: 'array',
                total_capacity: 'int',
                utilization_rate: 'float',
                underutilized_sites: 'array',
                overutilized_sites: 'array'
            }
        },

        // Preceptor Compliance Report
        getPreceptorComplianceReport: {
            method: 'GET',
            endpoint: '/api/reports/preceptor-compliance',
            response: {
                total_preceptors: 'int',
                compliant_preceptors: 'int',
                expired_licenses: 'array',
                missing_training: 'array',
                compliance_rate: 'float'
            }
        },

        // Export report
        exportReport: {
            method: 'POST',
            endpoint: '/api/reports/export',
            body: {
                report_type: 'string',
                format: 'PDF|EXCEL|CSV',
                parameters: 'object'
            },
            response: {
                file_url: 'string',
                file_name: 'string',
                generated_at: 'timestamp'
            }
        }
    },

    // ================================
    // AUTOMATION & SYSTEM
    // ================================
    automation: {
        // Trigger manual automation run
        runDailyTasks: {
            method: 'POST',
            endpoint: '/api/automation/run-daily',
            requiresAuth: 'ADMIN',
            response: {
                tasks_executed: 'array',
                notifications_sent: 'int',
                errors: 'array'
            }
        },

        // Get automation logs
        getLogs: {
            method: 'GET',
            endpoint: '/api/automation/logs',
            query: { start_date: 'date', end_date: 'date', trigger_type: 'string' },
            response: { logs: 'array' }
        }
    },

    // ================================
    // DASHBOARD ANALYTICS
    // ================================
    analytics: {
        // Admin overview dashboard
        getAdminDashboard: {
            method: 'GET',
            endpoint: '/api/analytics/admin-dashboard',
            response: {
                total_students: 'int',
                active_rotations: 'int',
                clearance_compliance: 'float',
                pending_evaluations: 'int',
                at_risk_students: 'int',
                site_utilization: 'float',
                recent_incidents: 'array',
                upcoming_deadlines: 'array'
            }
        },

        // Student dashboard
        getStudentDashboard: {
            method: 'GET',
            endpoint: '/api/analytics/student-dashboard/:id',
            response: {
                current_rotation: 'object',
                clearance_status: 'object',
                upcoming_rotations: 'array',
                epa_progress: 'object',
                attendance_summary: 'object',
                notifications: 'array'
            }
        },

        // Preceptor dashboard
        getPreceptorDashboard: {
            method: 'GET',
            endpoint: '/api/analytics/preceptor-dashboard/:id',
            response: {
                current_students: 'array',
                pending_evaluations: 'array',
                upcoming_rotations: 'array',
                license_status: 'object',
                performance_metrics: 'object'
            }
        }
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APPE_API_ENDPOINTS;
}
