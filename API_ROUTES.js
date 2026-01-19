/**
 * ============================================================================
 * CLINICAL AFFAIRS EXPERIENCE HUB - API ROUTES
 * ============================================================================
 * 
 * Complete RESTful API endpoint documentation
 * Base URL: /api/v1
 * Authentication: JWT Bearer Token
 * 
 * Version: 1.0.0
 * Last Updated: January 10, 2026
 * ============================================================================
 */

const API_ROUTES = {

    // ========================================================================
    // AUTHENTICATION & AUTHORIZATION
    // ========================================================================

    auth: {
        baseUrl: '/api/v1/auth',
        
        endpoints: [
            {
                method: 'POST',
                path: '/register',
                auth: false,
                body: {
                    email: 'string',
                    password: 'string',
                    firstName: 'string',
                    lastName: 'string',
                    role: 'STUDENT | PRECEPTOR | COORDINATOR | ADMIN'
                },
                response: {
                    user: {},
                    accessToken: 'string',
                    refreshToken: 'string'
                }
            },
            {
                method: 'POST',
                path: '/login',
                auth: false,
                body: {
                    email: 'string',
                    password: 'string'
                },
                response: {
                    user: {},
                    accessToken: 'string',
                    refreshToken: 'string'
                }
            },
            {
                method: 'POST',
                path: '/refresh',
                auth: false,
                description: 'Refresh access token using refresh token',
                body: {
                    refreshToken: 'string'
                },
                response: {
                    accessToken: 'string',
                    refreshToken: 'string'
                }
            },
            {
                method: 'POST',
                path: '/logout',
                auth: true,
                description: 'Revoke refresh token'
            },
            {
                method: 'POST',
                path: '/forgot-password',
                auth: false,
                body: {
                    email: 'string'
                },
                response: {
                    message: 'Password reset email sent'
                }
            },
            {
                method: 'POST',
                path: '/reset-password',
                auth: false,
                body: {
                    token: 'string',
                    newPassword: 'string'
                }
            },
            {
                method: 'POST',
                path: '/change-password',
                auth: true,
                roles: ['ALL'],
                body: {
                    currentPassword: 'string',
                    newPassword: 'string'
                }
            },
            {
                method: 'GET',
                path: '/me',
                auth: true,
                roles: ['ALL'],
                description: 'Get current user profile',
                response: {
                    user: {},
                    permissions: []
                }
            }
        ]
    },

    // ========================================================================
    // USERS MANAGEMENT
    // ========================================================================

    users: {
        baseUrl: '/api/v1/users',
        
        endpoints: [
            {
                method: 'GET',
                path: '/',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                query: {
                    page: 'number',
                    limit: 'number',
                    role: 'string',
                    status: 'string',
                    search: 'string'
                },
                response: {
                    data: [],
                    meta: {}
                }
            },
            {
                method: 'GET',
                path: '/:id',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                response: {
                    user: {}
                }
            },
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['ADMIN'],
                body: {
                    email: 'string',
                    password: 'string',
                    firstName: 'string',
                    lastName: 'string',
                    phone: 'string',
                    role: 'string'
                }
            },
            {
                method: 'PATCH',
                path: '/:id',
                auth: true,
                roles: ['ADMIN'],
                body: {
                    firstName: 'string',
                    lastName: 'string',
                    phone: 'string',
                    status: 'string'
                }
            },
            {
                method: 'DELETE',
                path: '/:id',
                auth: true,
                roles: ['ADMIN'],
                description: 'Soft delete user'
            },
            {
                method: 'PATCH',
                path: '/:id/role',
                auth: true,
                roles: ['ADMIN'],
                body: {
                    role: 'string'
                }
            }
        ]
    },

    // ========================================================================
    // STUDENTS
    // ========================================================================

    students: {
        baseUrl: '/api/v1/students',
        
        endpoints: [
            {
                method: 'GET',
                path: '/',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                query: {
                    page: 'number',
                    limit: 'number',
                    program: 'PHARMD | PHARMT',
                    academicYear: 'number',
                    complianceStatus: 'GREEN | YELLOW | RED',
                    search: 'string'
                },
                response: {
                    data: [],
                    meta: {}
                }
            },
            {
                method: 'GET',
                path: '/:id',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'STUDENT (own)'],
                response: {
                    student: {},
                    compliance: {},
                    rotations: []
                }
            },
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                body: {
                    userId: 'uuid',
                    studentId: 'string',
                    program: 'PHARMD | PHARMT',
                    academicYear: 'number',
                    cohort: 'string'
                }
            },
            {
                method: 'PATCH',
                path: '/:id',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                body: {
                    academicYear: 'number',
                    cgpa: 'number',
                    isActive: 'boolean'
                }
            },
            {
                method: 'GET',
                path: '/:id/compliance',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'STUDENT (own)'],
                response: {
                    status: 'GREEN | YELLOW | RED',
                    completionPercent: 'number',
                    requirements: []
                }
            },
            {
                method: 'POST',
                path: '/:id/compliance/:requirementType',
                auth: true,
                roles: ['STUDENT (own)', 'ADMIN'],
                description: 'Upload compliance document',
                body: {
                    file: 'multipart/form-data',
                    expiryDate: 'date'
                }
            },
            {
                method: 'GET',
                path: '/:id/rotations',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'STUDENT (own)'],
                response: {
                    upcoming: [],
                    current: [],
                    past: []
                }
            },
            {
                method: 'GET',
                path: '/:id/evaluations',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'STUDENT (own)'],
                response: {
                    evaluations: []
                }
            },
            {
                method: 'GET',
                path: '/:id/performance',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'STUDENT (own)'],
                description: 'Performance analytics',
                response: {
                    overallGpa: 'number',
                    rotationsCompleted: 'number',
                    epaAchievement: {},
                    gradeDistribution: {}
                }
            }
        ]
    },

    // ========================================================================
    // PRECEPTORS
    // ========================================================================

    preceptors: {
        baseUrl: '/api/v1/preceptors',
        
        endpoints: [
            {
                method: 'GET',
                path: '/',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                query: {
                    page: 'number',
                    limit: 'number',
                    siteId: 'uuid',
                    licenseStatus: 'ACTIVE | EXPIRED | SUSPENDED',
                    search: 'string'
                },
                response: {
                    data: [],
                    meta: {}
                }
            },
            {
                method: 'GET',
                path: '/:id',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'PRECEPTOR (own)'],
                response: {
                    preceptor: {},
                    site: {},
                    assignments: []
                }
            },
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['ADMIN'],
                body: {
                    userId: 'uuid',
                    licenseNumber: 'string',
                    licenseState: 'string',
                    licenseExpiryDate: 'date',
                    primarySiteId: 'uuid',
                    maxStudents: 'number'
                }
            },
            {
                method: 'PATCH',
                path: '/:id',
                auth: true,
                roles: ['ADMIN', 'PRECEPTOR (own - limited fields)'],
                body: {
                    licenseExpiryDate: 'date',
                    maxStudents: 'number',
                    isActive: 'boolean'
                }
            },
            {
                method: 'GET',
                path: '/:id/students',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'PRECEPTOR (own)'],
                description: 'Get assigned students',
                query: {
                    status: 'CURRENT | UPCOMING | PAST'
                },
                response: {
                    students: []
                }
            },
            {
                method: 'GET',
                path: '/:id/evaluations',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'PRECEPTOR (own)'],
                query: {
                    status: 'PENDING | COMPLETED'
                },
                response: {
                    pending: [],
                    completed: []
                }
            },
            {
                method: 'GET',
                path: '/:id/performance',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                description: 'Preceptor performance metrics',
                response: {
                    evaluationCompletionRate: 'number',
                    avgSubmissionTime: 'number',
                    studentSatisfaction: 'number',
                    totalStudents: 'number'
                }
            }
        ]
    },

    // ========================================================================
    // SITES
    // ========================================================================

    sites: {
        baseUrl: '/api/v1/sites',
        
        endpoints: [
            {
                method: 'GET',
                path: '/',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                query: {
                    page: 'number',
                    limit: 'number',
                    city: 'RIYADH | JEDDAH',
                    siteType: 'string',
                    isActive: 'boolean'
                },
                response: {
                    data: [],
                    meta: {}
                }
            },
            {
                method: 'GET',
                path: '/:id',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'SITE_COORDINATOR (own)'],
                response: {
                    site: {},
                    preceptors: [],
                    capacity: {}
                }
            },
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['ADMIN'],
                body: {
                    name: 'string',
                    siteType: 'string',
                    address: 'string',
                    city: 'string',
                    coordinatorId: 'uuid',
                    maxCapacity: 'number',
                    affiliationStartDate: 'date',
                    affiliationEndDate: 'date'
                }
            },
            {
                method: 'PATCH',
                path: '/:id',
                auth: true,
                roles: ['ADMIN', 'SITE_COORDINATOR (own)'],
                body: {
                    maxCapacity: 'number',
                    isActive: 'boolean'
                }
            },
            {
                method: 'GET',
                path: '/:id/capacity',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                description: 'Get available capacity for rotation blocks',
                query: {
                    rotationBlockId: 'uuid'
                },
                response: {
                    maxCapacity: 'number',
                    assigned: 'number',
                    available: 'number',
                    utilizationPercent: 'number'
                }
            },
            {
                method: 'GET',
                path: '/:id/assignments',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'SITE_COORDINATOR (own)'],
                query: {
                    rotationBlockId: 'uuid'
                },
                response: {
                    assignments: []
                }
            }
        ]
    },

    // ========================================================================
    // ROTATION BLOCKS
    // ========================================================================

    rotationBlocks: {
        baseUrl: '/api/v1/rotation-blocks',
        
        endpoints: [
            {
                method: 'GET',
                path: '/',
                auth: true,
                roles: ['ALL'],
                query: {
                    page: 'number',
                    limit: 'number',
                    rotationTypeId: 'uuid',
                    status: 'string',
                    startDate: 'date',
                    endDate: 'date'
                },
                response: {
                    data: [],
                    meta: {}
                }
            },
            {
                method: 'GET',
                path: '/:id',
                auth: true,
                roles: ['ALL'],
                response: {
                    block: {},
                    rotationType: {},
                    assignments: []
                }
            },
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                body: {
                    rotationTypeId: 'uuid',
                    name: 'string',
                    startDate: 'date',
                    endDate: 'date',
                    registrationStart: 'date',
                    registrationEnd: 'date',
                    city: 'string',
                    maxStudents: 'number'
                }
            },
            {
                method: 'PATCH',
                path: '/:id',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                body: {
                    name: 'string',
                    maxStudents: 'number',
                    status: 'string'
                }
            },
            {
                method: 'POST',
                path: '/:id/publish',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                description: 'Publish rotation block for student registration',
                response: {
                    message: 'Block published successfully'
                }
            },
            {
                method: 'GET',
                path: '/:id/eligible-students',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                description: 'Get students eligible for this rotation',
                response: {
                    eligible: [],
                    ineligible: []
                }
            },
            {
                method: 'GET',
                path: '/:id/available-sites',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN', 'STUDENT'],
                description: 'Get sites available for this rotation block',
                response: {
                    sites: []
                }
            }
        ]
    },

    // ========================================================================
    // ROTATION ASSIGNMENTS
    // ========================================================================

    rotationAssignments: {
        baseUrl: '/api/v1/rotation-assignments',
        
        endpoints: [
            {
                method: 'GET',
                path: '/',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                query: {
                    rotationBlockId: 'uuid',
                    studentId: 'uuid',
                    siteId: 'uuid',
                    preceptorId: 'uuid',
                    status: 'string'
                },
                response: {
                    data: [],
                    meta: {}
                }
            },
            {
                method: 'GET',
                path: '/:id',
                auth: true,
                roles: ['ALL'],
                response: {
                    assignment: {},
                    student: {},
                    site: {},
                    preceptor: {},
                    evaluations: []
                }
            },
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                description: 'Manually create assignment',
                body: {
                    rotationBlockId: 'uuid',
                    studentId: 'uuid',
                    siteId: 'uuid',
                    preceptorId: 'uuid',
                    assignmentType: 'MANUAL'
                }
            },
            {
                method: 'PATCH',
                path: '/:id',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                body: {
                    preceptorId: 'uuid',
                    status: 'string'
                }
            },
            {
                method: 'DELETE',
                path: '/:id',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                description: 'Cancel assignment (before start date only)'
            },
            {
                method: 'POST',
                path: '/:id/confirm',
                auth: true,
                roles: ['STUDENT (own)', 'COORDINATOR', 'ADMIN'],
                description: 'Student confirms assignment'
            },
            {
                method: 'GET',
                path: '/:id/grade',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'STUDENT (own)'],
                description: 'Get calculated grade',
                response: {
                    finalGrade: 'number',
                    components: {
                        midpoint: 'number',
                        final: 'number',
                        epa: 'number',
                        attendance: 'number'
                    }
                }
            }
        ]
    },

    // ========================================================================
    // STUDENT PREFERENCES
    // ========================================================================

    preferences: {
        baseUrl: '/api/v1/rotation-blocks/:blockId/preferences',
        
        endpoints: [
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['STUDENT'],
                description: 'Submit rotation preferences',
                body: {
                    preferences: [
                        { siteId: 'uuid', rank: 1 },
                        { siteId: 'uuid', rank: 2 },
                        { siteId: 'uuid', rank: 3 }
                    ]
                }
            },
            {
                method: 'GET',
                path: '/',
                auth: true,
                roles: ['STUDENT (own)', 'COORDINATOR', 'ADMIN'],
                description: 'Get student preferences for block',
                response: {
                    preferences: []
                }
            },
            {
                method: 'DELETE',
                path: '/',
                auth: true,
                roles: ['STUDENT'],
                description: 'Clear preferences (before registration close)'
            }
        ]
    },

    // ========================================================================
    // MATCHING ALGORITHM
    // ========================================================================

    matching: {
        baseUrl: '/api/v1/rotation-blocks/:blockId/matching',
        
        endpoints: [
            {
                method: 'POST',
                path: '/run',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                description: 'Run matching algorithm',
                body: {
                    algorithm: 'HUNGARIAN | GREEDY',
                    weights: {
                        preference: 40,
                        geographic: 20,
                        quality: 15,
                        diversity: 15,
                        balance: 10
                    }
                },
                response: {
                    matched: [],
                    unmatched: [],
                    conflicts: [],
                    statistics: {}
                }
            },
            {
                method: 'GET',
                path: '/preview',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                description: 'Preview matching results without saving',
                response: {
                    assignments: [],
                    quality_score: 'number'
                }
            },
            {
                method: 'POST',
                path: '/publish',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                description: 'Publish matching results and create assignments',
                response: {
                    created: 'number',
                    notified: 'number'
                }
            },
            {
                method: 'POST',
                path: '/validate',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                description: 'Validate constraints before matching',
                response: {
                    valid: 'boolean',
                    errors: []
                }
            }
        ]
    },

    // ========================================================================
    // EVALUATIONS
    // ========================================================================

    evaluations: {
        baseUrl: '/api/v1/evaluations',
        
        endpoints: [
            {
                method: 'GET',
                path: '/',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                query: {
                    rotationAssignmentId: 'uuid',
                    evaluatorId: 'uuid',
                    type: 'MIDPOINT | FINAL | SELF',
                    status: 'DRAFT | SUBMITTED | REVIEWED'
                },
                response: {
                    data: [],
                    meta: {}
                }
            },
            {
                method: 'GET',
                path: '/:id',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'PRECEPTOR (own)', 'STUDENT (own)'],
                response: {
                    evaluation: {},
                    template: {},
                    assignment: {}
                }
            },
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['PRECEPTOR', 'STUDENT'],
                description: 'Create evaluation (draft)',
                body: {
                    rotationAssignmentId: 'uuid',
                    templateId: 'uuid',
                    type: 'MIDPOINT | FINAL | SELF'
                }
            },
            {
                method: 'PATCH',
                path: '/:id',
                auth: true,
                roles: ['PRECEPTOR (own)', 'STUDENT (own)'],
                description: 'Update evaluation (draft only)',
                body: {
                    rubricScores: {},
                    comments: 'string',
                    redFlag: 'boolean'
                }
            },
            {
                method: 'POST',
                path: '/:id/submit',
                auth: true,
                roles: ['PRECEPTOR (own)', 'STUDENT (own)'],
                description: 'Submit evaluation (locks it)',
                response: {
                    evaluation: {},
                    gradeCalculated: 'boolean'
                }
            },
            {
                method: 'GET',
                path: '/:id/pdf',
                auth: true,
                roles: ['ALL'],
                description: 'Download evaluation as PDF',
                response: {
                    url: 'string'
                }
            },
            {
                method: 'GET',
                path: '/pending',
                auth: true,
                roles: ['PRECEPTOR'],
                description: 'Get preceptor pending evaluations',
                response: {
                    pending: []
                }
            },
            {
                method: 'POST',
                path: '/token/:token',
                auth: false,
                description: 'Access evaluation with passwordless token',
                response: {
                    evaluation: {},
                    accessToken: 'string (temporary)'
                }
            }
        ]
    },

    // ========================================================================
    // EPA ASSESSMENTS
    // ========================================================================

    epas: {
        baseUrl: '/api/v1/epa-assessments',
        
        endpoints: [
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['PRECEPTOR'],
                description: 'Record EPA assessment',
                body: {
                    rotationAssignmentId: 'uuid',
                    epaDomainId: 'uuid',
                    entrustmentLevel: 'number (1-5)',
                    comments: 'string'
                }
            },
            {
                method: 'GET',
                path: '/student/:studentId',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'STUDENT (own)'],
                description: 'Get EPA progression for student',
                response: {
                    domains: [],
                    progression: [],
                    achievements: {}
                }
            },
            {
                method: 'GET',
                path: '/rotation/:assignmentId',
                auth: true,
                roles: ['ALL'],
                description: 'Get EPAs for specific rotation',
                response: {
                    assessments: []
                }
            }
        ]
    },

    // ========================================================================
    // ATTENDANCE
    // ========================================================================

    attendance: {
        baseUrl: '/api/v1/attendance',
        
        endpoints: [
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['PRECEPTOR', 'SITE_COORDINATOR'],
                description: 'Record daily attendance',
                body: {
                    rotationAssignmentId: 'uuid',
                    date: 'date',
                    status: 'PRESENT | ABSENT_EXCUSED | ABSENT_UNEXCUSED | LATE | LEFT_EARLY',
                    hoursWorked: 'number',
                    notes: 'string'
                }
            },
            {
                method: 'GET',
                path: '/rotation/:assignmentId',
                auth: true,
                roles: ['ALL'],
                description: 'Get attendance records for rotation',
                response: {
                    records: [],
                    summary: {
                        totalDays: 'number',
                        present: 'number',
                        absent: 'number',
                        percentage: 'number'
                    }
                }
            },
            {
                method: 'PATCH',
                path: '/:id',
                auth: true,
                roles: ['PRECEPTOR', 'COORDINATOR', 'ADMIN'],
                description: 'Update attendance record',
                body: {
                    status: 'string',
                    notes: 'string'
                }
            }
        ]
    },

    // ========================================================================
    // INCIDENTS
    // ========================================================================

    incidents: {
        baseUrl: '/api/v1/incidents',
        
        endpoints: [
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['PRECEPTOR', 'SITE_COORDINATOR'],
                description: 'Report professionalism incident',
                body: {
                    rotationAssignmentId: 'uuid',
                    incidentDate: 'date',
                    incidentType: 'string',
                    severity: 'MINOR | MODERATE | SEVERE',
                    description: 'string',
                    actionTaken: 'string'
                }
            },
            {
                method: 'GET',
                path: '/',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR'],
                query: {
                    studentId: 'uuid',
                    severity: 'string',
                    status: 'string'
                },
                response: {
                    data: [],
                    meta: {}
                }
            },
            {
                method: 'PATCH',
                path: '/:id',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                description: 'Update incident status',
                body: {
                    status: 'UNDER_REVIEW | RESOLVED | ESCALATED',
                    reviewedBy: 'uuid'
                }
            }
        ]
    },

    // ========================================================================
    // NOTIFICATIONS
    // ========================================================================

    notifications: {
        baseUrl: '/api/v1/notifications',
        
        endpoints: [
            {
                method: 'GET',
                path: '/',
                auth: true,
                roles: ['ALL'],
                query: {
                    page: 'number',
                    limit: 'number',
                    isRead: 'boolean',
                    type: 'string'
                },
                response: {
                    data: [],
                    unreadCount: 'number',
                    meta: {}
                }
            },
            {
                method: 'PATCH',
                path: '/:id/read',
                auth: true,
                roles: ['ALL'],
                description: 'Mark notification as read'
            },
            {
                method: 'POST',
                path: '/read-all',
                auth: true,
                roles: ['ALL'],
                description: 'Mark all notifications as read'
            },
            {
                method: 'DELETE',
                path: '/:id',
                auth: true,
                roles: ['ALL'],
                description: 'Delete notification'
            }
        ]
    },

    // ========================================================================
    // MESSAGES
    // ========================================================================

    messages: {
        baseUrl: '/api/v1/messages',
        
        endpoints: [
            {
                method: 'GET',
                path: '/',
                auth: true,
                roles: ['ALL'],
                query: {
                    folder: 'INBOX | SENT',
                    isRead: 'boolean'
                },
                response: {
                    data: [],
                    meta: {}
                }
            },
            {
                method: 'GET',
                path: '/:id',
                auth: true,
                roles: ['ALL'],
                response: {
                    message: {}
                }
            },
            {
                method: 'POST',
                path: '/',
                auth: true,
                roles: ['ALL'],
                description: 'Send message',
                body: {
                    recipientId: 'uuid',
                    subject: 'string',
                    body: 'string',
                    attachments: 'array'
                }
            },
            {
                method: 'POST',
                path: '/broadcast',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                description: 'Send bulk message',
                body: {
                    subject: 'string',
                    body: 'string',
                    filters: {
                        role: 'string',
                        program: 'string',
                        rotationBlockId: 'uuid'
                    }
                }
            },
            {
                method: 'PATCH',
                path: '/:id/read',
                auth: true,
                roles: ['ALL']
            },
            {
                method: 'DELETE',
                path: '/:id',
                auth: true,
                roles: ['ALL']
            }
        ]
    },

    // ========================================================================
    // REPORTS
    // ========================================================================

    reports: {
        baseUrl: '/api/v1/reports',
        
        endpoints: [
            {
                method: 'POST',
                path: '/compliance-summary',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN', 'LEADERSHIP'],
                description: 'Generate compliance summary report',
                body: {
                    program: 'string',
                    cohort: 'string',
                    format: 'PDF | EXCEL | CSV'
                },
                response: {
                    reportId: 'uuid',
                    status: 'GENERATING',
                    estimatedTime: 'number (seconds)'
                }
            },
            {
                method: 'POST',
                path: '/rotation-completion',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN', 'LEADERSHIP'],
                body: {
                    rotationBlockId: 'uuid',
                    format: 'PDF | EXCEL | CSV'
                }
            },
            {
                method: 'POST',
                path: '/evaluation-completion',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN'],
                body: {
                    rotationBlockId: 'uuid',
                    format: 'PDF | EXCEL | CSV'
                }
            },
            {
                method: 'POST',
                path: '/site-utilization',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN', 'LEADERSHIP'],
                body: {
                    startDate: 'date',
                    endDate: 'date',
                    city: 'string',
                    format: 'PDF | EXCEL | CSV'
                }
            },
            {
                method: 'POST',
                path: '/preceptor-workload',
                auth: true,
                roles: ['ADMIN', 'LEADERSHIP'],
                body: {
                    siteId: 'uuid',
                    startDate: 'date',
                    endDate: 'date',
                    format: 'PDF | EXCEL | CSV'
                }
            },
            {
                method: 'POST',
                path: '/grade-distribution',
                auth: true,
                roles: ['COORDINATOR', 'ADMIN', 'LEADERSHIP'],
                body: {
                    program: 'string',
                    rotationTypeId: 'uuid',
                    academicYear: 'string',
                    format: 'PDF | EXCEL | CSV'
                }
            },
            {
                method: 'POST',
                path: '/accreditation-evidence',
                auth: true,
                roles: ['ADMIN', 'LEADERSHIP'],
                description: 'ACPE/NCAAA evidence pack',
                body: {
                    standard: 'string',
                    startDate: 'date',
                    endDate: 'date',
                    format: 'PDF'
                }
            },
            {
                method: 'GET',
                path: '/:id',
                auth: true,
                roles: ['ALL'],
                description: 'Get report status',
                response: {
                    report: {},
                    status: 'GENERATING | READY | FAILED',
                    downloadUrl: 'string'
                }
            },
            {
                method: 'GET',
                path: '/:id/download',
                auth: true,
                roles: ['ALL'],
                description: 'Download generated report'
            }
        ]
    },

    // ========================================================================
    // ANALYTICS
    // ========================================================================

    analytics: {
        baseUrl: '/api/v1/analytics',
        
        endpoints: [
            {
                method: 'GET',
                path: '/dashboard/admin',
                auth: true,
                roles: ['ADMIN'],
                response: {
                    totalStudents: 'number',
                    activeRotations: 'number',
                    complianceOverview: {},
                    evaluationCompletionRate: 'number',
                    systemHealth: {}
                }
            },
            {
                method: 'GET',
                path: '/dashboard/coordinator',
                auth: true,
                roles: ['COORDINATOR'],
                query: {
                    program: 'string'
                },
                response: {
                    students: {},
                    rotations: {},
                    evaluations: {},
                    alerts: []
                }
            },
            {
                method: 'GET',
                path: '/dashboard/student/:id',
                auth: true,
                roles: ['STUDENT (own)', 'COORDINATOR', 'ADMIN'],
                response: {
                    compliance: {},
                    upcomingRotations: [],
                    grades: {},
                    notifications: []
                }
            },
            {
                method: 'GET',
                path: '/dashboard/preceptor/:id',
                auth: true,
                roles: ['PRECEPTOR (own)', 'ADMIN'],
                response: {
                    assignedStudents: [],
                    pendingEvaluations: [],
                    performanceMetrics: {}
                }
            },
            {
                method: 'GET',
                path: '/trends/compliance',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'LEADERSHIP'],
                query: {
                    program: 'string',
                    startDate: 'date',
                    endDate: 'date'
                },
                response: {
                    trends: []
                }
            },
            {
                method: 'GET',
                path: '/trends/epa-achievement',
                auth: true,
                roles: ['ADMIN', 'COORDINATOR', 'LEADERSHIP'],
                query: {
                    program: 'string',
                    cohort: 'string'
                },
                response: {
                    domains: [],
                    achievement: {}
                }
            }
        ]
    },

    // ========================================================================
    // SYSTEM ADMINISTRATION
    // ========================================================================

    admin: {
        baseUrl: '/api/v1/admin',
        
        endpoints: [
            {
                method: 'GET',
                path: '/audit-logs',
                auth: true,
                roles: ['ADMIN'],
                query: {
                    userId: 'uuid',
                    action: 'string',
                    entityType: 'string',
                    startDate: 'date',
                    endDate: 'date',
                    page: 'number',
                    limit: 'number'
                },
                response: {
                    data: [],
                    meta: {}
                }
            },
            {
                method: 'GET',
                path: '/settings',
                auth: true,
                roles: ['ADMIN'],
                response: {
                    settings: []
                }
            },
            {
                method: 'PATCH',
                path: '/settings/:key',
                auth: true,
                roles: ['ADMIN'],
                body: {
                    value: 'string'
                }
            },
            {
                method: 'POST',
                path: '/import/students',
                auth: true,
                roles: ['ADMIN'],
                description: 'Bulk import students from CSV/Excel',
                body: {
                    file: 'multipart/form-data'
                },
                response: {
                    imported: 'number',
                    failed: 'number',
                    errors: []
                }
            },
            {
                method: 'GET',
                path: '/system-health',
                auth: true,
                roles: ['ADMIN'],
                response: {
                    database: 'HEALTHY | DEGRADED | DOWN',
                    cache: 'HEALTHY | DEGRADED | DOWN',
                    queue: 'HEALTHY | DEGRADED | DOWN',
                    uptime: 'number (seconds)'
                }
            }
        ]
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_ROUTES;
}
