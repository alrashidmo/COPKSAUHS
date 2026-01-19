# APPE Student Portal - Monorepo

Complete monorepo for APPE (Advanced Pharmacy Practice Experience) Student Portal system with separated student application and backend API.

## 🏗️ Architecture

```
appe-monorepo/
├── apps/
│   ├── student-app/     # Next.js PWA - Student Mobile Application
│   └── api/             # NestJS Backend API
├── packages/
│   ├── db/              # Prisma ORM + PostgreSQL schema
│   └── shared/          # Shared TypeScript types & validators
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **pnpm** 8+ (install: `npm install -g pnpm`)
- **PostgreSQL** 14+

### Installation

```bash
# Clone or navigate to the monorepo
cd appe-monorepo

# Install all dependencies
pnpm install

# Setup environment variables
cp .env.example .env
# Edit .env with your database credentials

# Generate Prisma Client
pnpm db:generate

# Push database schema (development)
pnpm db:push

# Seed database with sample data
pnpm db:seed
```

### Development

```bash
# Run all apps in development mode
pnpm dev

# Or run individually:
pnpm --filter @appe/api dev          # API on http://localhost:4000
pnpm --filter @appe/student-app dev  # Student App on http://localhost:3001
```

### Access Points

- **Student App**: http://localhost:3001
- **API**: http://localhost:4000
- **API Docs (Swagger)**: http://localhost:4000/api/docs
- **Prisma Studio**: `pnpm db:studio`

### Demo Credentials

```
Email: ahmed.almansour@student.ksau-hs.edu.sa
Password: password
```

## 📱 Student Application (PWA)

Mobile-first Progressive Web App with 4 main sections:

### 1. **Surveys** (Tab 1)
- PHRD 4.1: Student Satisfaction with Services
- PHRD 4.2: Student Satisfaction with Clinical Rotation
- Course/Rotation Evaluations
- Program Evaluation
- **Features**: Likert scale, MCQ, free text, anonymous surveys

### 2. **Participation** (Tab 2)
- PHRD 4.4: Conference/Project Acceptance
- Community Service Activities
- **Workflow**: Draft → Submitted → Approved/Rejected
- **Evidence**: File upload support

### 3. **Student Awards** (Tab 3)
- Achievement portfolio
- Categories: Academic, Research, Leadership, Community, Clinical
- **Levels**: College, University, National, International
- Timeline view with certificate uploads

### 4. **Clinical Affairs** (Tab 4)
- **Training Overview**: IPPE/APPE/IPTE/APTE programs
- **Clearance & Requirements**: Vaccines, BLS, OSHA, TB, Medical
- **Traffic-light Status**: 🟢 Green / 🟡 Yellow / 🔴 Red
- **Assessments**: Mid-rotation & Final evaluations
- **Attendance & Logs**: Absence requests, clinical hours

## 🔧 Backend API

NestJS REST API with comprehensive endpoints:

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/refresh` - Refresh token
- `GET /api/v1/auth/me` - Get current user profile

### Student Endpoints
- `GET /api/v1/students/dashboard` - Dashboard data
- `GET /api/v1/students/training/overview` - Training overview

### Survey Endpoints
- `GET /api/v1/surveys/assigned` - Get assigned surveys
- `GET /api/v1/surveys/:id` - Get survey detail
- `POST /api/v1/surveys/submit` - Submit survey response

### Participation Endpoints
- `GET /api/v1/participation` - Get all records
- `POST /api/v1/participation` - Create record
- `PATCH /api/v1/participation/:id/submit` - Submit for approval
- `DELETE /api/v1/participation/:id` - Delete record

### Awards Endpoints
- `GET /api/v1/awards` - Get all awards
- `POST /api/v1/awards` - Create award
- `PATCH /api/v1/awards/:id/submit` - Submit for approval
- `DELETE /api/v1/awards/:id` - Delete award

### Clearance Endpoints
- `GET /api/v1/clearance` - Get clearance items
- `POST /api/v1/clearance/submit` - Submit evidence

### Rotations Endpoints
- `GET /api/v1/rotations/available` - Get available rotations

## 🗄️ Database Schema

Comprehensive Prisma schema with:

### Core Entities
- **User & Auth**: Role-based access (Student, Admin, Coordinator, Leadership)
- **Student Profile**: Demographics, GPA, enrollment info
- **Courses & Rotations**: Training structure
- **Sites & Preceptors**: Clinical training locations
- **Rotation Assignments**: Student placements with match scores

### Surveys & Evaluations
- **Survey Templates**: Reusable survey structures
- **Survey Questions**: Likert, MCQ, text questions
- **Survey Assignments**: Targeted or group assignments
- **Survey Responses**: Student submissions

### Student Records
- **Participation Records**: Conferences, community service
- **Award Records**: Achievements portfolio
- **Clearance Items**: Requirements tracking
- **Evaluations**: Rotation assessments
- **Attendance**: Absence requests
- **Training Logs**: Clinical hours

### Enums
- UserRole, Campus, Program, RotationType, Status
- ParticipationType, ParticipationLevel, AwardCategory
- ClearanceType, ClearanceStatus, SurveyType, QuestionType

## 📦 Package Structure

### `@appe/db`
- Prisma schema with full data model
- Migrations and seed scripts
- Exported Prisma Client

### `@appe/shared`
- TypeScript DTOs and interfaces
- Zod validators
- Shared constants and enums
- Used by both frontend and backend

### `@appe/api`
- NestJS application
- JWT authentication with Passport
- Swagger API documentation
- RBAC (Role-Based Access Control)

### `@appe/student-app`
- Next.js 14 with App Router
- PWA with offline support
- Tailwind CSS styling
- Zustand state management
- Mobile-first responsive design

## 🛠️ Development Commands

```bash
# Install dependencies
pnpm install

# Development (all apps)
pnpm dev

# Build (all apps)
pnpm build

# Lint
pnpm lint

# Database
pnpm db:generate      # Generate Prisma Client
pnpm db:push          # Push schema (dev)
pnpm db:migrate       # Create migration (prod)
pnpm db:seed          # Seed sample data
pnpm db:studio        # Open Prisma Studio

# Individual apps
pnpm --filter @appe/api dev
pnpm --filter @appe/student-app dev
pnpm --filter @appe/db generate
```

## 🔐 Security

- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcrypt (configure before production)
- **RBAC**: Role-based access control
- **CORS**: Configurable origin whitelist
- **Validation**: Input validation with class-validator and Zod
- **Audit Logging**: Track all critical actions

## 📊 PHRD Indicators Supported

- **PHRD 4.1**: Student Satisfaction with Services
- **PHRD 4.2**: Student Satisfaction with Clinical Rotation
- **PHRD 4.4**: Conference/Project Acceptance (National/International)

## 🚢 Deployment

### Prerequisites
- PostgreSQL database
- Node.js runtime environment
- Environment variables configured

### Production Build
```bash
# Build all apps
pnpm build

# Run migrations
pnpm db:migrate

# Start production
pnpm --filter @appe/api start:prod
pnpm --filter @appe/student-app start
```

## 📝 Environment Variables

### Root `.env`
```env
DATABASE_URL=postgresql://user:password@host:5432/appe_db
PORT=4000
NODE_ENV=production
FRONTEND_URL=https://student.yourdomain.com
JWT_SECRET=your-production-secret-key
JWT_EXPIRES_IN=24h
```

### Student App `.env.local`
```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api/v1
```

## 🤝 Contributing

This is a monorepo managed with **Turborepo** and **pnpm workspaces**.

### Adding New Packages
```bash
# Add dependency to specific package
pnpm --filter @appe/api add <package>
pnpm --filter @appe/student-app add <package>
```

### Code Organization
- Keep shared types in `@appe/shared`
- Database models in `@appe/db`
- API endpoints follow REST conventions
- Frontend follows Next.js App Router patterns

## 📚 Documentation

- **API Docs**: http://localhost:4000/api/docs (Swagger)
- **Prisma Schema**: `packages/db/prisma/schema.prisma`
- **Database ERD**: Generated from Prisma schema

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Check PostgreSQL is running
# Verify DATABASE_URL in .env
# Regenerate Prisma Client
pnpm db:generate
```

### Port Already in Use
```bash
# Change PORT in .env (API)
# Change port in package.json dev script (Student App)
```

### Build Errors
```bash
# Clean install
rm -rf node_modules
pnpm install
```

## 📄 License

Proprietary - KSAU-HS College of Pharmacy

## 👥 Support

For issues and questions, contact the development team.

---

**Built with**: Next.js • NestJS • Prisma • PostgreSQL • TypeScript • Turborepo
