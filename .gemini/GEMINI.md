# Project: Jailton Cruz Portfolio

## General Instructions:

- Build a personal portfolio using **Next.js 14+ (App Router)** and **TypeScript**.
- Prioritize clean, modern UI with fast performance, accessibility, and mobile responsiveness.
- Include tabs/pages for **Home**, **About**, **Skills**, **Projects**, and **Experience**.
- Work experience should be rendered as a **vertical timeline**, sorted from most recent to oldest.
- The **Projects** tab should highlight the **Kotoba AI** project with key tech and features.
- Do not include personal phone number in the layout.
- Ensure compatibility with **TypeScript 5.0+**, **Node.js 18+**, and **modern browsers**.
- Use pnpm

## Coding Style:

- Use **2 spaces** for indentation.
- Use **camelCase** for variables/functions and **PascalCase** for types/classes/components.
- Prefix **interfaces** with `I` (e.g., `IProjectCard`, `IWorkExperience`).
- Use `private _` for private class members when applicable.
- Use **async/await** with `try/catch` where needed.
- Avoid unnecessary libraries; prefer **native Next.js** features and **React hooks**.
- Add **JSDoc comments** for exported components and utility functions.

## Structure (Next.js - App Router):

### Directory: `src/`

- Follow a file-based routing structure inside `app/`.
- Use `components/` for reusable UI elements (e.g., `Timeline`, `ProjectCard`, `SkillTag`).
- Use `lib/` for utility logic (e.g., `data.ts`, `getExperience.ts`, `getProjects.ts`).
- Tailwind CSS should be used for styling, including responsive layouts and consistent spacing.
- Prefer Radix UI components where needed (e.g., Tabs, Dialog).

## Pages and Features:

### `app/page.tsx` (Home)

- Display name, title, short bio, location, and links:
  - Email: jailtoncruz01@gmail.com
  - GitHub: https://github.com/jailtoncruz
  - LinkedIn: https://linkedin.com/in/jailtoncruz

### `app/about/page.tsx` (About)

- Summary of experience (~7 years full-stack, 9 years in tech)
- Focus on backend, clean code, cloud experience, and agile mindset

### `app/skills/page.tsx` (Skills)

- Grouped by proficiency: **Proficient**, **Intermediate**, **Beginner**
- Technologies: Node.js, TypeScript, React, Angular, .NET, Docker, Azure, GCP, PostgreSQL, etc.

### `app/projects/page.tsx` (Projects)

- List of featured and personal projects with stack tags
- **Kotoba AI**
  - Full-stack language learning platform
  - NestJS backend + React (Vite) frontend
  - Custom spaced repetition system
  - OpenAI + GCP + Prisma ORM + PostgreSQL + Docker
  - Show dates: 10/2024 to now
  - Add GitHub link if available

### `app/experience/page.tsx` (Experience)

- Display work history using a **vertical timeline component**
- Timeline items should show:
  - Company name
  - Job title
  - Dates (e.g., 09/2024 to now)
  - Key responsibilities and technologies used

### `app/contact/page.tsx` (Optional)

- Simple form or links to get in touch via email or LinkedIn

## Timeline Implementation:

- Use a `Timeline` component that stacks entries vertically.
- Each item includes:
  - Company, title, period
  - Bullet list of achievements
  - Tags for tech stack (e.g., NestJS, Azure, SAP HANA)

## Dependencies:

- Use minimal third-party packages.
- Tailwind CSS + Radix UI (optional)
- If needed, `react-icons` for icons or `clsx` for conditional classes

## Optional Enhancements:

- Add light/dark mode toggle
- Include a downloadable CV link (PDF)
- Deploy via Vercel

## Testing & QA:

- Use `jest` or `vitest` for basic component tests.
- Ensure layout works on mobile, tablet, and desktop
- Run Lighthouse to ensure accessibility, performance, and SEO
