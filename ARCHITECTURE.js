/**
 * ============================================================================
 * CLINICAL AFFAIRS EXPERIENCE HUB - SYSTEM ARCHITECTURE
 * ============================================================================
 * 
 * A comprehensive experiential learning management platform for College of
 * Pharmacy Clinical Affairs departments.
 * 
 * Version: 1.0.0
 * Last Updated: January 10, 2026
 * ============================================================================
 */

/*
┌──────────────────────────────────────────────────────────────────────────┐
│                          SYSTEM ARCHITECTURE                              │
│                                                                           │
│  ┌─────────────────┐         ┌─────────────────┐                        │
│  │   Next.js App   │────────▶│   NestJS API    │                        │
│  │   (Frontend)    │◀────────│   (Backend)     │                        │
│  └─────────────────┘         └─────────────────┘                        │
│         │                             │                                  │
│         │                             ├──────────┬──────────────┐       │
│         │                             │          │              │       │
│         ▼                             ▼          ▼              ▼       │
│  ┌─────────────┐           ┌──────────────┐  ┌─────────┐  ┌─────────┐ │
│  │   Browser   │           │  PostgreSQL  │  │  Redis  │  │   S3    │ │
│  │   Storage   │           │   Database   │  │  Cache  │  │  Files  │ │
│  └─────────────┘           └──────────────┘  └─────────┘  └─────────┘ │
│                                     │                                    │
│                                     ▼                                    │
│                            ┌──────────────────┐                         │
│                            │  Background Jobs │                         │
│                            │  (Bull Queue)    │                         │
│                            └──────────────────┘                         │
│                                     │                                    │
│                    ┌────────────────┼────────────────┐                  │
│                    │                │                │                  │
│                    ▼                ▼                ▼                  │
│            ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│            │   Email      │  │     SMS     │  │   Cron      │          │
│            │  (SendGrid)  │  │  (Twilio)   │  │  Scheduler  │          │
│            └─────────────┘  └─────────────┘  └─────────────┘          │
└──────────────────────────────────────────────────────────────────────────┘
*/

const SYSTEM_ARCHITECTURE = {

    // ========================================================================
    // ARCHITECTURE OVERVIEW
    // ========================================================================
    
    overview: {
        pattern: 'Modular Monolith with Service Layer Architecture',
        deployment: 'Containerized (Docker) with orchestration (Docker Compose / Kubernetes)',
        scaling: 'Horizontal scaling for API, Vertical for Database',
        
        layers: {
            presentation: 'Next.js 14 (React, TypeScript, Tailwind CSS)',
            api: 'NestJS REST API with JWT authentication',
            business: 'Service layer with domain-driven design',
            data: 'TypeORM with PostgreSQL',
            infrastructure: 'Redis caching, Bull queues, S3 storage'
        }
    },

    // ========================================================================
    // FRONTEND ARCHITECTURE (Next.js)
    // ========================================================================
    
    frontend: {
        framework: 'Next.js 14 (App Router)',
        language: 'TypeScript',
        
        structure: `
        app/
        ├── (auth)/
        │   ├── login/
        │   └── forgot-password/
        ├── (dashboard)/
        │   ├── student/
        │   │   ├── page.tsx                    # Student dashboard
        │   │   ├── rotations/
        │   │   ├── compliance/
        │   │   └── evaluations/
        │   ├── preceptor/
        │   │   ├── page.tsx                    # Preceptor dashboard
        │   │   ├── students/
        │   │   └── evaluations/
        │   ├── coordinator/
        │   │   ├── page.tsx                    # Coordinator dashboard
        │   │   ├── placements/
        │   │   ├── matching/
        │   │   └── reports/
        │   ├── admin/
        │   │   ├── page.tsx                    # Admin dashboard
        │   │   ├── users/
        │   │   ├── sites/
        │   │   └── preceptors/
        │   └── leadership/
        │       └── page.tsx                    # Leadership analytics
        ├── api/                                # API route handlers (proxy to backend)
        ├── components/
        │   ├── ui/                             # shadcn/ui components
        │   ├── forms/
        │   ├── tables/
        │   └── charts/
        ├── lib/
        │   ├── api-client.ts                   # Axios instance
        │   ├── auth.ts                         # Auth utilities
        │   └── utils.ts
        ├── hooks/
        │   ├── useAuth.ts
        │   ├── useCompliance.ts
        │   └── useRotations.ts
        ├── types/
        │   ├── user.ts
        │   ├── rotation.ts
        │   └── evaluation.ts
        └── store/                              # Zustand state management
            ├── authStore.ts
            └── notificationStore.ts
        `,
        
        stateManagement: {
            global: 'Zustand (auth, notifications, user preferences)',
            server: 'React Query / SWR (API data fetching and caching)',
            forms: 'React Hook Form with Zod validation'
        },
        
        routing: {
            protected: 'Middleware checks JWT token and role',
            layout: 'Shared layout per role (dashboard shell)',
            loading: 'Suspense boundaries with skeleton loaders',
            error: 'Error boundaries with user-friendly messages'
        },
        
        uiComponents: {
            library: 'shadcn/ui (Radix UI + Tailwind)',
            components: [
                'Button, Input, Select, Checkbox, Radio',
                'Table, DataTable with sorting/filtering',
                'Dialog, Sheet, Popover, Tooltip',
                'Card, Badge, Alert, Toast',
                'Calendar, DatePicker',
                'Chart (Recharts)'
            ]
        }
    },

    // ========================================================================
    // BACKEND ARCHITECTURE (NestJS)
    // ========================================================================
    
    backend: {
        framework: 'NestJS',
        language: 'TypeScript',
        
        structure: `
        src/
        ├── main.ts                             # Application entry point
        ├── app.module.ts                       # Root module
        ├── config/
        │   ├── database.config.ts
        │   ├── jwt.config.ts
        │   └── email.config.ts
        ├── common/
        │   ├── decorators/
        │   │   ├── roles.decorator.ts          # @Roles decorator
        │   │   └── current-user.decorator.ts   # @CurrentUser decorator
        │   ├── guards/
        │   │   ├── jwt-auth.guard.ts           # JWT authentication
        │   │   └── roles.guard.ts              # RBAC authorization
        │   ├── interceptors/
        │   │   └── logging.interceptor.ts
        │   ├── filters/
        │   │   └── http-exception.filter.ts
        │   └── pipes/
        │       └── validation.pipe.ts
        ├── modules/
        │   ├── auth/
        │   │   ├── auth.module.ts
        │   │   ├── auth.controller.ts
        │   │   ├── auth.service.ts
        │   │   ├── strategies/
        │   │   │   ├── jwt.strategy.ts
        │   │   │   └── local.strategy.ts
        │   │   └── dto/
        │   │       ├── login.dto.ts
        │   │       └── register.dto.ts
        │   ├── users/
        │   │   ├── users.module.ts
        │   │   ├── users.controller.ts
        │   │   ├── users.service.ts
        │   │   ├── entities/
        │   │   │   └── user.entity.ts
        │   │   └── dto/
        │   │       ├── create-user.dto.ts
        │   │       └── update-user.dto.ts
        │   ├── students/
        │   │   ├── students.module.ts
        │   │   ├── students.controller.ts
        │   │   ├── students.service.ts
        │   │   ├── entities/
        │   │   │   ├── student.entity.ts
        │   │   │   └── student-compliance.entity.ts
        │   │   └── dto/
        │   ├── rotations/
        │   │   ├── rotations.module.ts
        │   │   ├── rotations.controller.ts
        │   │   ├── rotations.service.ts
        │   │   ├── matching.service.ts         # Matching algorithm
        │   │   ├── entities/
        │   │   │   ├── rotation-block.entity.ts
        │   │   │   ├── rotation-assignment.entity.ts
        │   │   │   └── rotation-type.entity.ts
        │   │   └── dto/
        │   ├── compliance/
        │   │   ├── compliance.module.ts
        │   │   ├── compliance.controller.ts
        │   │   ├── compliance.service.ts
        │   │   ├── entities/
        │   │   │   ├── requirement.entity.ts
        │   │   │   └── requirement-item.entity.ts
        │   │   └── dto/
        │   ├── evaluations/
        │   │   ├── evaluations.module.ts
        │   │   ├── evaluations.controller.ts
        │   │   ├── evaluations.service.ts
        │   │   ├── grading.service.ts          # Auto-grade calculation
        │   │   ├── entities/
        │   │   │   ├── evaluation.entity.ts
        │   │   │   ├── epa-assessment.entity.ts
        │   │   │   └── rubric.entity.ts
        │   │   └── dto/
        │   ├── preceptors/
        │   │   ├── preceptors.module.ts
        │   │   ├── preceptors.controller.ts
        │   │   ├── preceptors.service.ts
        │   │   ├── entities/
        │   │   │   └── preceptor.entity.ts
        │   │   └── dto/
        │   ├── sites/
        │   │   ├── sites.module.ts
        │   │   ├── sites.controller.ts
        │   │   ├── sites.service.ts
        │   │   ├── entities/
        │   │   │   └── site.entity.ts
        │   │   └── dto/
        │   ├── notifications/
        │   │   ├── notifications.module.ts
        │   │   ├── notifications.service.ts
        │   │   ├── email.service.ts
        │   │   ├── sms.service.ts
        │   │   └── templates/
        │   ├── reports/
        │   │   ├── reports.module.ts
        │   │   ├── reports.controller.ts
        │   │   ├── reports.service.ts
        │   │   └── generators/
        │   │       ├── pdf.generator.ts
        │   │       └── excel.generator.ts
        │   └── automation/
        │       ├── automation.module.ts
        │       ├── automation.service.ts
        │       ├── jobs/
        │       │   ├── compliance.job.ts       # Daily compliance check
        │       │   ├── reminders.job.ts        # Evaluation reminders
        │       │   └── license.job.ts          # License expiry check
        │       └── processors/
        │           └── notification.processor.ts
        └── database/
            ├── migrations/
            └── seeds/
        `,
        
        modules: {
            auth: 'JWT-based authentication with refresh tokens',
            users: 'User management with RBAC',
            students: 'Student profiles and compliance tracking',
            rotations: 'Rotation blocks, assignments, matching algorithm',
            compliance: 'Requirement tracking with traffic light status',
            evaluations: 'Evaluations, EPAs, auto-grading',
            preceptors: 'Preceptor management with license tracking',
            sites: 'Site management with capacity and affiliation',
            notifications: 'Multi-channel notifications (email, SMS)',
            reports: 'Report generation (PDF, Excel)',
            automation: 'Background jobs and scheduled tasks'
        },
        
        designPatterns: {
            mvc: 'Controller → Service → Repository pattern',
            dto: 'Data Transfer Objects for request/response validation',
            dependency_injection: 'NestJS built-in DI container',
            repository: 'TypeORM repositories for data access',
            strategy: 'Multiple authentication strategies (JWT, local)',
            observer: 'Event-driven notifications'
        }
    },

    // ========================================================================
    // DATABASE ARCHITECTURE
    // ========================================================================
    
    database: {
        engine: 'PostgreSQL 15+',
        orm: 'TypeORM',
        
        design_principles: [
            'Normalized (3NF)',
            'Foreign key constraints',
            'Indexes on frequently queried columns',
            'Soft deletes (deleted_at timestamp)',
            'Audit columns (created_at, updated_at, created_by, updated_by)',
            'UUID primary keys for distributed systems'
        ],
        
        performance: {
            indexing: 'Composite indexes on (user_id, status), (rotation_id, student_id)',
            partitioning: 'Table partitioning for audit_logs by date',
            caching: 'Redis for user sessions, frequent queries',
            connection_pooling: 'PgBouncer for connection management',
            read_replicas: 'For reporting and analytics queries'
        },
        
        backup: {
            frequency: 'Daily automated backups',
            retention: '30 days for daily, 12 months for monthly',
            point_in_time: 'WAL archiving for point-in-time recovery'
        }
    },

    // ========================================================================
    // CACHING STRATEGY
    // ========================================================================
    
    caching: {
        technology: 'Redis',
        
        use_cases: {
            session: 'User sessions (JWT refresh tokens)',
            data: 'Frequently accessed data (user profiles, rotation blocks)',
            rate_limiting: 'API rate limiting counters',
            queue: 'Background job queue (Bull)',
            pub_sub: 'Real-time notifications'
        },
        
        ttl: {
            user_profile: '1 hour',
            rotation_blocks: '30 minutes',
            compliance_status: '15 minutes',
            reports: '5 minutes'
        },
        
        invalidation: {
            strategy: 'Event-driven cache invalidation',
            triggers: 'On update/delete operations'
        }
    },

    // ========================================================================
    // BACKGROUND JOBS & AUTOMATION
    // ========================================================================
    
    backgroundJobs: {
        technology: 'Bull Queue (Redis-based)',
        
        queues: {
            notifications: 'Email and SMS notifications',
            reports: 'Heavy report generation',
            automation: 'Scheduled automation tasks',
            import: 'Bulk data imports'
        },
        
        scheduling: {
            library: 'node-cron',
            jobs: {
                compliance_check: '0 3 * * *',           // Daily at 3 AM
                evaluation_reminders: '0 8 * * *',       // Daily at 8 AM
                license_validation: '0 2 * * 0',         // Weekly on Sunday
                monthly_reports: '0 1 1 * *'             // 1st of month
            }
        },
        
        retry_strategy: {
            attempts: 3,
            backoff: 'Exponential (1min, 5min, 30min)',
            dead_letter: 'Failed jobs moved to DLQ for manual review'
        }
    },

    // ========================================================================
    // SECURITY ARCHITECTURE
    // ========================================================================
    
    security: {
        authentication: {
            method: 'JWT (JSON Web Tokens)',
            access_token: '15 minutes expiry',
            refresh_token: '7 days expiry',
            storage: 'HttpOnly cookies (web), Secure Storage (mobile)',
            logout: 'Token blacklist in Redis'
        },
        
        authorization: {
            model: 'RBAC (Role-Based Access Control)',
            library: 'CASL',
            enforcement: 'Guards on routes and methods',
            permissions: 'Resource-based (can:read:student, can:update:rotation)'
        },
        
        data_protection: {
            at_rest: 'AES-256 encryption for sensitive fields',
            in_transit: 'TLS 1.3',
            pii: 'Encrypted storage, limited access, audit logging',
            passwords: 'bcrypt (10 rounds)'
        },
        
        audit: {
            scope: 'All write operations (create, update, delete)',
            fields: 'User ID, action, resource, timestamp, IP address, changes',
            retention: '7 years (compliance requirement)',
            access: 'Admin and auditors only'
        },
        
        compliance: {
            standards: ['FERPA', 'HIPAA', 'ACPE', 'NCAAA'],
            data_retention: 'Student records: 7 years, Evaluations: 10 years',
            right_to_delete: 'Soft delete with anonymization'
        }
    },

    // ========================================================================
    // API DESIGN
    // ========================================================================
    
    api: {
        style: 'RESTful',
        versioning: 'URI versioning (/api/v1/...)',
        
        conventions: {
            naming: 'Kebab-case for URLs (/student-rotations)',
            http_methods: 'GET (read), POST (create), PUT (replace), PATCH (update), DELETE (delete)',
            status_codes: '200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Server Error)',
            response_format: 'JSON with consistent structure'
        },
        
        response_structure: `
        {
            "success": true,
            "data": { ... },
            "message": "Operation successful",
            "timestamp": "2026-01-10T12:00:00Z"
        }
        
        // Error response
        {
            "success": false,
            "error": {
                "code": "VALIDATION_ERROR",
                "message": "Validation failed",
                "details": [ ... ]
            },
            "timestamp": "2026-01-10T12:00:00Z"
        }
        `,
        
        pagination: {
            method: 'Offset-based',
            params: 'page=1&limit=20',
            response: {
                data: 'Array of items',
                meta: {
                    total: 'Total count',
                    page: 'Current page',
                    limit: 'Items per page',
                    totalPages: 'Total pages'
                }
            }
        },
        
        filtering: {
            method: 'Query parameters',
            examples: [
                '?status=active',
                '?program=APPE',
                '?dateFrom=2026-01-01&dateTo=2026-12-31'
            ]
        },
        
        sorting: {
            method: 'Query parameter',
            format: '?sort=createdAt:DESC'
        },
        
        rate_limiting: {
            default: '100 requests per minute per IP',
            authenticated: '1000 requests per minute per user',
            premium: '10000 requests per minute'
        }
    },

    // ========================================================================
    // FILE STORAGE
    // ========================================================================
    
    fileStorage: {
        technology: 'AWS S3 or MinIO (self-hosted S3-compatible)',
        
        structure: {
            buckets: {
                documents: 'Student compliance documents',
                reports: 'Generated reports (PDF, Excel)',
                avatars: 'User profile pictures',
                attachments: 'Message attachments'
            }
        },
        
        security: {
            access: 'Pre-signed URLs with expiration',
            encryption: 'Server-side encryption (SSE-S3)',
            versioning: 'Enabled for audit trail',
            lifecycle: 'Auto-archive to Glacier after 2 years'
        },
        
        cdn: {
            technology: 'CloudFront or CloudFlare',
            cache: 'Edge caching for static assets',
            compression: 'Gzip/Brotli compression'
        }
    },

    // ========================================================================
    // MONITORING & OBSERVABILITY
    // ========================================================================
    
    monitoring: {
        application: {
            tool: 'Sentry',
            purpose: 'Error tracking and performance monitoring',
            alerts: 'Slack/Email on critical errors'
        },
        
        infrastructure: {
            tool: 'Prometheus + Grafana',
            metrics: 'CPU, memory, disk, network',
            dashboards: 'Real-time system health'
        },
        
        logging: {
            tool: 'Winston (app) + ELK Stack (centralized)',
            levels: 'ERROR, WARN, INFO, DEBUG',
            retention: '30 days in Elasticsearch',
            search: 'Kibana for log analysis'
        },
        
        uptime: {
            tool: 'UptimeRobot or Pingdom',
            checks: 'HTTP endpoint every 1 minute',
            alerts: 'Email/SMS on downtime'
        },
        
        apm: {
            tool: 'New Relic or DataDog',
            tracking: 'API response times, database queries, external calls',
            alerts: 'Threshold-based (response time > 1s)'
        }
    },

    // ========================================================================
    // DEPLOYMENT ARCHITECTURE
    // ========================================================================
    
    deployment: {
        containerization: {
            tool: 'Docker',
            images: [
                'Clinical Affairs Hub - Frontend (Next.js)',
                'Clinical Affairs Hub - Backend (NestJS)',
                'PostgreSQL',
                'Redis',
                'Nginx (reverse proxy)'
            ],
            orchestration: 'Docker Compose (dev/staging), Kubernetes (production)'
        },
        
        ci_cd: {
            tool: 'GitHub Actions',
            pipeline: [
                '1. Code push to GitHub',
                '2. Run linters (ESLint, Prettier)',
                '3. Run tests (Jest)',
                '4. Build Docker images',
                '5. Push to container registry',
                '6. Deploy to staging',
                '7. Run E2E tests (Playwright)',
                '8. Manual approval for production',
                '9. Deploy to production',
                '10. Health check',
                '11. Notify team'
            ]
        },
        
        environments: {
            development: 'Local Docker Compose',
            staging: 'Kubernetes cluster (mimics production)',
            production: 'Kubernetes cluster with auto-scaling'
        },
        
        scaling: {
            frontend: 'Vercel or AWS Amplify (auto-scaling)',
            backend: 'Kubernetes HPA (Horizontal Pod Autoscaler)',
            database: 'Read replicas for scaling reads',
            cache: 'Redis cluster for high availability'
        },
        
        disaster_recovery: {
            rpo: 'Recovery Point Objective: 1 hour (hourly backups)',
            rto: 'Recovery Time Objective: 4 hours',
            backup: 'Automated daily backups to S3',
            failover: 'Multi-AZ deployment for high availability'
        }
    },

    // ========================================================================
    // DATA FLOW EXAMPLES
    // ========================================================================
    
    dataFlows: {
        
        studentLogin: `
        1. User enters email/password in Next.js login form
        2. Frontend sends POST /api/v1/auth/login
        3. Backend validates credentials (bcrypt)
        4. Backend generates JWT access + refresh tokens
        5. Backend sets HttpOnly cookie with refresh token
        6. Backend returns access token in response
        7. Frontend stores access token in memory
        8. Frontend redirects to role-based dashboard
        9. Subsequent requests include Authorization header
        10. Backend validates JWT on each request (Guard)
        `,
        
        complianceCheck: `
        1. Daily cron job triggers at 3:00 AM
        2. Automation service fetches all students
        3. For each student:
           a. Fetch all compliance requirements
           b. Check expiry dates
           c. Calculate days until expiry
           d. Determine traffic light status
           e. Generate notifications if needed
        4. Bulk update student compliance status
        5. Queue notification jobs (email/SMS)
        6. Notification worker processes queue
        7. Send emails via SendGrid
        8. Send SMS via Twilio (urgent only)
        9. Log delivery status
        `,
        
        rotationMatching: `
        1. Coordinator creates rotation block
        2. Sets capacity, dates, requirements
        3. Publishes block for student registration
        4. Students submit preferences (ranked 1-5)
        5. Registration window closes
        6. Coordinator runs matching algorithm
        7. Algorithm:
           a. Filter out RED compliance students
           b. For each student:
              - Score sites based on preference (40%)
              - Score geographic proximity (20%)
              - Score site quality (15%)
              - Score rotation diversity (15%)
              - Score preceptor balance (10%)
           c. Hungarian algorithm for optimal assignment
           d. Validate constraints (capacity, conflicts)
           e. Generate unmatched student list
        8. Coordinator reviews and adjusts
        9. Publish schedule
        10. System sends confirmation emails
        11. Lock schedule after change window
        `,
        
        evaluationSubmission: `
        1. Preceptor receives evaluation due reminder
        2. Preceptor clicks link (auto-login with token)
        3. Frontend loads evaluation form
        4. Preceptor fills rubric scores
        5. If score < 3, comment field becomes required
        6. Preceptor completes EPA assessments
        7. Preceptor submits form
        8. Frontend validates all required fields
        9. Frontend sends POST /api/v1/evaluations
        10. Backend validates data (DTO + Zod)
        11. Backend saves evaluation
        12. Backend triggers grade calculation:
            a. Fetch mid + final evaluations
            b. Calculate weighted average
            c. Add EPA score (15%)
            d. Add attendance score (5%)
            e. Save final grade
        13. If grade < 70%, flag for remediation
        14. Send notification to student
        15. Send confirmation to preceptor
        16. Update dashboard statistics
        `
    }
};

// Export for documentation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SYSTEM_ARCHITECTURE;
}
