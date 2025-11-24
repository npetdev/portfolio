Purpose
This file gives quick, actionable guidance to AI coding agents working in this repository so they can be productive immediately.

Quick context
- Tech: React + TypeScript + Vite (see `package.json`).
- Entry: `src/main.tsx` mounts the app using `AppRouter` (from `src/router.tsx`) — prefer changing routes in `src/router.tsx` rather than `App.tsx`.
- Routing: Uses React Router v7 `createBrowserRouter` + `RouterProvider`. The layout pattern is `MainLayout` (in `src/router.tsx`): `Header` + `<Outlet />` + `Footer`.

How to run (Windows cmd.exe)
```
npm install
npm run dev       # start dev server (vite)
npm run build     # typecheck (tsc -b) then vite build
npm run preview   # preview production build
npm run lint      # run ESLint
```

Key files & where to look
- `src/router.tsx` — routing and layout. Add/remove routes here; child pages live in `src/pages`.
- `src/main.tsx` — app bootstrap that imports global styles (`src/styles/global.scss`).
- `src/pages/*` — page-level components expected to be default exports.
- `src/components/` — UI components split into `common/`, `home/`, `project/`, `ui/`. Follow existing naming (PascalCase) and prop patterns.
- `src/data/` — static data (projects, skills). Update these files to change displayed content.
- `src/styles/` — SCSS files; components import their relevant scss files (global styles are imported in `main.tsx`).
- `eslint.config.js` and `tsconfig.*` — follow existing lint and strict TypeScript rules (see notes).

Project-specific constraints & conventions
- TypeScript: project uses strict compiler options (`tsconfig.app.json`: `strict`, `noUnusedLocals`, `noUnusedParameters`). Avoid unused vars/params and add explicit prop types for components.
- Build pipeline: `npm run build` runs `tsc -b` before `vite build`. Ensure type-checking passes (fix types before running the Vite build).
- Router pattern: Use `MainLayout` + `Outlet` for top-level layout. Add pages as children in `router.tsx` to get header/footer automatically.
- Component locations: put shared UI in `src/components/ui` and page-specific components under `src/components/home` or `src/components/project`.
- Styling: SCSS is used (via `sass-embedded`). Styles are global per file (no CSS modules by default). Keep class names predictable and scoped by filename (e.g., `hero.scss` for `Hero.tsx`).
- Assets: images & icons live in `src/assets/` — import with relative paths.
- Theme: There is a `ThemeSwitcher` in `src/components/common` and a `context/` folder for providers; check `context/` before adding a new global state provider.

Integration points & dependencies to be aware of
- React Router (v7): `createBrowserRouter`, `RouterProvider`, and `Outlet`.
- `react-icons`, `react-scroll` are used by UI components; prefer these libraries to keep visual/interaction consistency.
- Vite + `@vitejs/plugin-react` — fast dev server; avoid changing the Vite config unless necessary (`vite.config.ts`).

How to make common changes (examples)
- Add a new page/route:
  1. Create `src/pages/MyNewPage.tsx` exporting a default React component.
  2. Add a child route in `src/router.tsx` under `children: [...]` { path: '/my-new', element: <MyNewPage /> }.

- Add a new project entry:
  1. Open `src/data/` and locate the projects list file (project data follows a simple JSON/TS-export pattern).
  2. Add/update the object for the project and update any filters in `src/components/project/ProjectFilter.tsx` if needed.

Quick rules for AI edits
- Respect TypeScript strictness and existing export/name styles.
- Keep imports relative and follow existing folder structure.
- Run `npm run lint` and `npm run build` locally (or in CI) after behavioral changes.
- Avoid large refactors without an explicit user request — prefer small, well-tested changes.

If anything is unclear
- Ask the repo owner what content from `src/data/` should be considered canonical (projects, skills).
- If adding global state, check `src/context` for existing patterns.

End
Small, focused edits are preferred. If you need to add tests, ask first — there are currently no tests in this repo.
