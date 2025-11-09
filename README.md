# Concert Ticket Management – Monorepo Guide

This repository contains both the **frontend** (Next.js) and the **backend** (NestJS) applications for the concert ticket management platform. The frontend renders the administration and user dashboards while the backend exposes REST APIs backed by Prisma and a PostgreSQL database.

---
## 1. Local Setup & Configuration

### 1.1 Prerequisites
- Node.js 20+
- npm 10+
- PostgreSQL instance (local or managed, e.g. Supabase)

### 1.2 Backend (`/backend`)
1. Install dependencies
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env` file in `/backend` with values similar to:
   ```env
   DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
   DIRECT_URL=postgresql://<user>:<password>@<host>:<port>/<database>
   PORT=4000
   CORS_ORIGIN=http://localhost:3000
   ```
   - `PORT` must align with the frontend environment (`4000` is the default used in the repo).
   - `CORS_ORIGIN` can accept a comma‑separated list if multiple frontends are allowed.
3. Run the database migration and generate the Prisma client
   ```bash
   npm run prisma:migrate:dev
   npm run prisma:generate
   ```
4. Start the API server
   ```bash
   npm run start:dev
   ```

### 1.3 Frontend (`/frontend`)
1. Install dependencies
   ```bash
   cd frontend
   npm install --legacy-peer-deps
   ```
   (The flag keeps React 19 compatible with Testing Library.)
2. Create `/frontend/.env.local`
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
   NEXT_PUBLIC_DEMO_USER_EMAIL=sara.john@example.com
   NEXT_PUBLIC_DEMO_USER_NAME=Sara John
   ```
   These values seed a demo user when the user dashboard loads. Adjust or remove if your auth system differs.
3. Launch the development server
   ```bash
   npm run dev
   ```
   The app becomes available at [http://localhost:3000](http://localhost:3000). Make sure the backend is running first so API calls succeed.

---
## 2. Architecture Overview

### 2.1 Directory Layout
```
/backend   → NestJS REST API (Concerts, Reservations, Users modules)
/frontend  → Next.js App Router UI (admin & user dashboards)
```

### 2.2 Backend Design (NestJS + Prisma)
- **Modules/Services**: Each bounded context (concerts, reservations, users) has its own controller and service. Business logic lives in services and uses the Prisma client for persistence.
- **Prisma ORM**: Typed access to PostgreSQL. Transactions coordinate seat reservations/cancellations while maintaining history snapshots.
- **DTOs & Validation**: DTO classes define the payload contract for create/reserve/cancel actions, keeping controllers slim.
- **Exception flow**: Services raise NestJS HTTP exceptions (`NotFoundException`, `BadRequestException`) so the API communicates consistent status codes.

### 2.3 Frontend Design (Next.js + React)
- **App Router**: Pages live inside `src/app` (`/`, `/history`, `/user`...). `layout.tsx` wires global fonts and styles.
- **State & Data Fetching**: Components such as `Dashboard` and `UserPage` call a shared API helper (`src/lib/api.ts`). Local React state manages forms, toasts, and tab selection.
- **UI Components**: Reusable pieces (`Button`, `Modal`, `Toast`, `Tabs`, `DashboardCard`, `ConcertCard`, `Sidebar`) encapsulate styling and interactions. Tailwind utility classes in `globals.css` define the design system.
- **Role Switching & Navigation**: `Sidebar` handles admin/user menus, highlighting the active route and toggling between roles via Next.js navigation hooks.

- **API Communication**: All HTTP requests go through `lib/api.ts`, which centralises base URL handling, error reporting, and request helpers to keep components clean.

---
## 3. Key Libraries & Their Roles

### Backend
- **NestJS Core (`@nestjs/common`, `@nestjs/core`)** – server framework providing modules, DI, and decorators.
- **Prisma (`@prisma/client`, `prisma`)** – type-safe ORM used for PostgreSQL access and migrations.
- **Jest (bundled with Nest)** – unit test runner for services and controllers.

### Frontend
- **Next.js 16 / React 19** – application framework & UI library (App Router, server/client components).
- **Tailwind CSS 4** – utility-first styling via `globals.css`. The project uses the PostCSS plugin that ships with Tailwind 4.
- **Testing Library (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`)** – user-centric component testing.
- **Jest 29 + `jest-environment-jsdom`** – runs the frontend unit tests and mocks browser APIs.

---
## 4. Running Unit Tests

### Backend Tests
```
cd backend
npm test
```
This runs Jest against all service and controller specs (`*.spec.ts`), including mocked Prisma interactions.

### Frontend Tests
```
cd frontend
npm test
```
The script executes the Testing Library suites located under `src/__tests__/`, covering UI components and the API utility module.

Both commands print suite/test counts; all tests currently pass.

---
## 5. Additional Notes
- The repository assumes a shared database between environments. When pointing to Supabase or another hosted Postgres, keep `DATABASE_URL`/`DIRECT_URL` in sync.
- To change the API port, update both `backend/.env` and `frontend/.env.local` so `NEXT_PUBLIC_API_BASE_URL` matches.
- The frontend demo user seeding is optional; replace it with your authentication strategy as needed.

Happy hacking! If anything is unclear or fails during setup, re-run the steps above or check environment variables for typos.

