# ⚙️ Data Management Center - KSAU-HS Clinical Affairs Dashboard

Production-ready full-stack Data Management Center for College of Pharmacy clinical affairs operations.

## 📋 Features

### Core Modules
1. **Data Sources & Imports** - CSV upload with validation, field mapping, error handling
2. **Master Data Management** - CRUD for Courses, Blocks, Sites, Preceptors, Requirements, Assessments
3. **Data Dictionary** - Standardization enforcement and field documentation
4. **Validation & Quality Rules** - Configurable rules engine with quality dashboard
5. **Automation Rules Engine** - Event-triggered workflows (notify, lock, escalate, webhook)
6. **RBAC & Audit Logs** - Role-based permissions with full audit trail
7. **Exports & Evidence Packs** - Automated report generation and evidence bundles

### Background Jobs
- Daily Data Health monitoring
- Expiry watchers (licenses, agreements)
- Automated notifications with templates

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: NestJS + TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: JWT + RBAC
- **Jobs**: BullMQ + Redis
- **Validation**: Zod
- **File Upload**: Multer

## 📁 Project Structure

```
data-management-center/
├── backend/                    # NestJS backend
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── auth/              # Authentication & RBAC
│   │   ├── users/             # User management
│   │   ├── master-data/       # CRUD endpoints
│   │   ├── imports/           # CSV import service
│   │   ├── validation/        # Rules engine
│   │   ├── automation/        # Automation executor
│   │   ├── audit/             # Audit logging
│   │   ├── exports/           # Export generation
│   │   ├── notifications/     # Email templates
│   │   └── jobs/              # Background jobs
│   ├── prisma/
│   │   ├── schema.prisma      # Database schema
│   │   └── seed.ts            # Seed data
│   └── package.json
│
├── frontend/                   # Next.js frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── login/
│   │   │   └── dashboard/
│   │   │       ├── overview/
│   │   │       ├── master-data/
│   │   │       ├── imports/
│   │   │       ├── validation/
│   │   │       ├── automation/
│   │   │       ├── permissions/
│   │   │       ├── audit-logs/
│   │   │       └── exports/
│   │   ├── components/
│   │   │   ├── ui/            # shadcn/ui components
│   │   │   ├── layout/
│   │   │   ├── tables/
│   │   │   └── forms/
│   │   ├── lib/
│   │   └── types/
│   └── package.json
│
└── csv-templates/              # Downloadable CSV templates
    ├── students-template.csv
    ├── preceptors-template.csv
    ├── sites-template.csv
    └── ...
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 6+ (for BullMQ)

### Installation

```bash
# Clone or navigate to project directory
cd data-management-center

# Backend setup
cd backend
npm install
cp .env.example .env
# Edit .env with your database credentials

# Run Prisma migrations
npx prisma migrate dev
npx prisma db seed

# Start backend
npm run start:dev

# Frontend setup (new terminal)
cd ../frontend
npm install
cp .env.local.example .env.local
# Edit .env.local with API URL

# Start frontend
npm run dev
```

### Default Credentials
```
Admin:
  Email: admin@ksau-hs.edu.sa
  Password: Admin@2026

Coordinator:
  Email: coordinator@ksau-hs.edu.sa
  Password: Coord@2026
```

## 📊 Database Schema

See `backend/prisma/schema.prisma` for full schema.

Key tables:
- `User`, `Role`, `Permission`
- `Course`, `RotationBlock`, `Student`, `Preceptor`, `Site`
- `RequirementCatalog`, `AssessmentCatalog`
- `ImportRun`, `ImportError`
- `ValidationRule`, `AutomationRule`
- `AuditLog`

## 🔐 RBAC Roles

| Role | Permissions |
|------|------------|
| **Student** | View own records |
| **Preceptor** | View assigned students, submit evaluations |
| **Coordinator** | View all, edit assignments, manage schedules |
| **Admin** | Full CRUD, imports, manage rules, manage users |
| **Leadership** | Read-only analytics, export reports |

## 📤 Import Flow

1. Download CSV template from **Imports & Templates** page
2. Fill template with data
3. Upload CSV file
4. System validates rows and shows errors
5. Fix errors and re-upload OR proceed with valid rows
6. Import completes with summary report

## 🤖 Automation Examples

### Expiry Alert
```
Trigger: daily_schedule
Condition: preceptor.licenseExpiry < 30 days
Action: notify(role=Admin, template=license_expiry_warning)
```

### Evaluation Overdue
```
Trigger: evaluation_overdue
Condition: daysOverdue > 7
Action: escalate_to_role(role=Coordinator)
```

## 📈 Data Quality Metrics

- **Completeness**: % of required fields filled
- **Duplicates**: Count of duplicate records
- **Invalid Enums**: Count of invalid enum values
- **Outliers**: Records outside expected ranges

## 🔍 Audit Trail

Every create/update/delete operation logs:
- Actor (user)
- Resource (table + record ID)
- Action (CREATE/UPDATE/DELETE)
- Before/After JSON diff
- Timestamp
- IP address

## 📦 Deployments

### Backend (NestJS)
- Deploy to: AWS EC2, DigitalOcean, Railway, Heroku
- Requires: PostgreSQL instance, Redis instance

### Frontend (Next.js)
- Deploy to: Vercel, Netlify, AWS Amplify
- Set environment variables for API URL

## 🧪 Testing

```bash
# Backend tests
cd backend
npm run test

# Frontend tests
cd frontend
npm run test
```

## 📝 License

Proprietary - KSAU-HS College of Pharmacy

## 👥 Support

For issues or questions, contact: clinical-affairs@ksau-hs.edu.sa
