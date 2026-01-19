# Database Package

Prisma configuration for APPE Student Portal.

## Setup

```bash
# Generate Prisma Client
pnpm generate

# Push schema to database (development)
pnpm push

# Create and apply migrations (production)
pnpm migrate

# Open Prisma Studio
pnpm studio

# Seed database
pnpm seed
```

## Environment Variables

Create `.env` in the root of the monorepo:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/appe_db?schema=public"
```
