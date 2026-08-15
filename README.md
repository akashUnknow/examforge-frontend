# ExamForge Frontend

Modern exam-preparation platform frontend built with React and JavaScript.

## Stack

- React + Vite
- JavaScript (no TypeScript)
- Tailwind CSS
- React Router
- TanStack Query
- Zustand
- Axios
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

The frontend expects the backend at:

```text
http://localhost:8080/api/v1
```

To change it, copy `.env.example` to `.env` and set `VITE_API_BASE_URL`.

## Current phase

Phase 1 establishes the application foundation, responsive layouts, landing page, exam/test browsing pages, authentication page shells, user dashboard, admin dashboard, API client and authentication state.

The project intentionally uses JavaScript only so the codebase remains approachable while the platform is being learned and developed.
