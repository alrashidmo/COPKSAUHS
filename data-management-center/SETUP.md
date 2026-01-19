# 🚀 SETUP INSTRUCTIONS

## Complete Installation Guide

### 1. Prerequisites

Install the following:
- **Node.js 18+**: https://nodejs.org/
- **PostgreSQL 14+**: https://www.postgresql.org/download/
- **Redis 6+**: https://redis.io/download/
- **Git**: https://git-scm.com/downloads

### 2. Database Setup

```bash
# Start PostgreSQL service
# Windows: Start via Services or pg_ctl
# Mac: brew services start postgresql
# Linux: sudo systemctl start postgresql

# Create database
psql -U postgres
CREATE DATABASE data_management_db;
\q
```

### 3. Redis Setup

```bash
# Start Redis
# Windows: redis-server.exe
# Mac: brew services start redis
# Linux: sudo systemctl start redis
```

### 4. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your database credentials
# Windows: notepad .env
# Mac/Linux: nano .env

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed database
npm run prisma:seed

# Start backend (development)
npm run start:dev

# Backend runs on http://localhost:3001
```

### 5. Frontend Setup

Open a NEW terminal window:

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Edit if needed (default should work)
# Windows: notepad .env.local
# Mac/Linux: nano .env.local

# Start frontend (development)
npm run dev

# Frontend runs on http://localhost:3000
```

### 6. Access the Application

1. Open browser: **http://localhost:3000**
2. Login with default credentials:

**Admin Account:**
```
Email: admin@ksau-hs.edu.sa
Password: Admin@2026
```

**Coordinator Account:**
```
Email: coordinator@ksau-hs.edu.sa
Password: Coord@2026
```

### 7. Verify Setup

✅ Backend running on http://localhost:3001
✅ Frontend running on http://localhost:3000
✅ Can login with admin credentials
✅ Can navigate to Dashboard
✅ Can see sample data

## Common Issues

### Port Already in Use

```bash
# Kill process on port 3001 (backend)
# Windows: 
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3001 | xargs kill -9

# Kill process on port 3000 (frontend)
# Similar commands as above, replace 3001 with 3000
```

### Database Connection Failed

1. Check PostgreSQL is running
2. Verify database exists: `psql -U postgres -l`
3. Check DATABASE_URL in .env matches your setup
4. Try connection string: `postgresql://postgres:yourpassword@localhost:5432/data_management_db`

### Redis Connection Failed

1. Check Redis is running: `redis-cli ping` (should return PONG)
2. Verify REDIS_HOST and REDIS_PORT in .env

### Prisma Errors

```bash
# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Regenerate client
npx prisma generate

# Create new migration
npx prisma migrate dev --name <migration_name>
```

## Development Commands

### Backend

```bash
# Start development server
npm run start:dev

# Build for production
npm run build

# Start production server
npm run start:prod

# Run tests
npm run test

# Open Prisma Studio (database GUI)
npm run prisma:studio

# Create new migration
npx prisma migrate dev --name <name>

# Reset database and reseed
npx prisma migrate reset
```

### Frontend

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run tests
npm run test

# Lint code
npm run lint
```

## Project Structure Guide

```
backend/
├── src/
│   ├── main.ts                    # Entry point
│   ├── app.module.ts              # Root module
│   ├── auth/                      # JWT auth, guards, strategies
│   ├── users/                     # User CRUD
│   ├── master-data/               # Courses, Students, Preceptors, Sites
│   ├── imports/                   # CSV import processing
│   ├── validation/                # Validation rules engine
│   ├── automation/                # Automation rules executor
│   ├── audit/                     # Audit logging middleware
│   ├── exports/                   # Export generators
│   ├── notifications/             # Email service with templates
│   └── jobs/                      # Background jobs (BullMQ)
├── prisma/
│   ├── schema.prisma              # Database schema
│   ├── seed.ts                    # Seed data script
│   └── migrations/                # Migration history
└── uploads/                       # CSV upload directory

frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Home/redirect
│   │   ├── login/                 # Login page
│   │   └── dashboard/             # Protected routes
│   │       ├── layout.tsx         # Dashboard layout with sidebar
│   │       ├── overview/          # Dashboard home
│   │       ├── master-data/       # CRUD tables
│   │       ├── imports/           # CSV import UI
│   │       ├── validation/        # Rules management
│   │       ├── automation/        # Automation config
│   │       ├── permissions/       # RBAC management
│   │       ├── audit-logs/        # Audit log viewer
│   │       └── exports/           # Export generator UI
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── layout/                # Layout components
│   │   ├── tables/                # Data tables
│   │   └── forms/                 # Form components
│   ├── lib/
│   │   ├── api.ts                 # API client
│   │   ├── auth.ts                # Auth helpers
│   │   └── utils.ts               # Utilities
│   └── types/                     # TypeScript types
└── public/                        # Static assets
```

## Next Steps

1. **Customize Data Models**: Edit `prisma/schema.prisma` to match your needs
2. **Add Business Logic**: Implement services in backend modules
3. **Build UI Components**: Create pages in frontend/src/app/dashboard/
4. **Configure Email**: Set up SMTP credentials in .env
5. **Add Validation Rules**: Create rules via UI or seed file
6. **Set Up Automation**: Configure automation rules
7. **Deploy**: Follow deployment guides in README.md

## API Documentation

Once backend is running, visit:
- Swagger UI: http://localhost:3001/api/docs

## Database GUI

```bash
cd backend
npm run prisma:studio
# Opens at http://localhost:5555
```

## Troubleshooting

### "Cannot find module '@prisma/client'"
```bash
cd backend
npx prisma generate
```

### "Migration failed"
```bash
npx prisma migrate reset
npx prisma migrate dev
npm run prisma:seed
```

### "Port 3000/3001 already in use"
```bash
# Change port in .env (backend) or next.config.js (frontend)
```

## Support

For additional help:
1. Check README.md
2. Review Prisma docs: https://www.prisma.io/docs
3. Review NestJS docs: https://docs.nestjs.com
4. Review Next.js docs: https://nextjs.org/docs

## Production Deployment

See DEPLOYMENT.md for production setup guides for:
- AWS
- DigitalOcean
- Railway
- Vercel (frontend)
