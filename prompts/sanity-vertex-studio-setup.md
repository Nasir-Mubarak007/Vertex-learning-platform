# Sanity + Studio Setup for Vertex (sanity-best-practices "get-started")

## Goal

Connect the existing Next.js app at `C:\Users\DEVLORD\Desktop\vertex` to Sanity project `djy93dxb` (Mubi_vertex), dataset `production`, with a **standalone** Studio in the empty sibling folder `C:\Users\DEVLORD\Desktop\studio-mubi_vertex`. Deliver the full Vertex content schema now so the later catalog, lesson, and search tasks can read it. Keep the Studio out of the app; do not embed or move it. Design system task is skipped (model has no image input).

## Skills & references read

- `sanity-best-practices` SKILL.md and `references/get-started.md` (three-phase flow)
- `references/nextjs.md` (standalone Studio + App Router client patterns)
- `references/project-structure.md` (standalone Studio layout, schemaTypes/ folders, TypeGen wiring)
- `AGENTS.md` project conventions: server/client boundaries, tokens server-only, no embedded Studio

## Inspected context

- App `C:\Users\DEVLORD\Desktop\vertex`: Next.js 16.3.5, React 19.2.8, Tailwind v4, TS, Clerk 7, lucide-react. No Sanity deps installed. No `src/` dir and no `@/*` path alias, so app integration uses relative imports.
- `app/layout.tsx` wraps `ClerkProvider`; `app/page.tsx` is a fully designed marketing page with a hardcoded course list. It must not be restyled or replaced in this slice.
- `.env.local` holds Clerk keys only. No `.env.example` exists. `.gitignore` covers `*.local`.
- `studio-mubi_vertex` is empty and sits outside the app's git repo.
- Stray Sanity scaffolding inside the app is untracked junk (empty `schemaTypes`, a duplicate clean-template `sanity/`), never imported by app source, and it contradicts the "standalone Studio" rule: root `sanity.config.ts`, root `sanity.cli.ts`, `schemaTypes/`, `static/` (only `.gitkeep`), empty `studio/`, `sanity/`. Remove all of them (user approved).
- Environment: Node v24.12.0 (meets the 22.12+ floor). npm registry access is flaky today (ECONNRESET / ECOMPROMISED / hung npx). Installs and deploys may need retries; if the network keeps failing, hand the exact commands to the user instead.

## Decisions

- **Studio**: build the clean-TS-template Studio files by hand in `studio-mubi_vertex` (deterministic, no interactive login), then `npm install` there. Use project `djy93dxb`, dataset `production`, plugins `structureTool()` + `visionTool()`.
- **Schema = full Vertex model** per AGENTS.md section 8, Studio-owned code:
  - `course`: title, slug, summary, coverImage (Sanity image), level, price (number), popular (boolean), studentCount (number), outcomes[] (icon, title, description), instructor (ref), category (ref), modules[] of embedded `courseModule` objects.
  - `courseModule` (object, embedded in course): title, summary, lessons[] refs to lesson.
  - `lesson`: title, slug, videoUrl (string), poster (image), duration (number, seconds), freePreview (boolean), studentCount (number), notes (Portable Text), keyPoints[] (strings), proTip (string), resources[] (type, title, description, url).
  - `instructor`: name, slug, photo, expertise (string), bio (Portable Text).
  - `category`: title, slug, description.
  - `video` (internal lookup the ingestion pipeline builds): videoId (derived id), url, chapters[] { startSeconds, label }, chunks[] { startSeconds, text }.
  - `progress` (app state keyed by Clerk user id): userId, completedLessons[] refs to lesson, resumePosition { lesson ref, seconds }.
  - `agentContext` is deferred to the search-config task (needs the `@sanity/context` plugin/version check per AGENTS.md section 12). Not in this slice.
- **App integration** (get-started Phase 3, minimal read path only):
  - `npm install next-sanity @sanity/image-url` in the app.
  - Server-only client `lib/sanity/client.ts`: `createClient` with `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `apiVersion "2026-09-20"`, `useCdn: true`.
  - `lib/sanity/queries.ts`: `defineQuery` for course cards (the smoke test's query).
  - Smoke-test route `app/sanity-smoke/page.tsx`: a read-only server component that fetches courses and renders an honest list/empty state. This exercises the Sanity pipeline without touching the designed homepage.
  - `.env.local`: add the two public Sanity vars (values are public-safe). Commit a new `.env.example` listing Clerk + Sanity public vars and the server-only `SANITY_API_READ_TOKEN` placeholder (per AGENTS.md section 12).
- **TypeGen**: configure `typegen` in the Studio's `sanity.cli.ts` (schema `schema.json`, path `../vertex/**/*.{ts,tsx,js,jsx}`, generates `../vertex/sanity.types.ts`, `overloadClientMethods: true`), script `"typegen": "sanity schemas extract --force && sanity typegen generate"`, run once, then use the generated types in the smoke page.
- **CORS + deploys** (attempt after install; hand off if auth/network blocks): from the Studio, `sanity cors add http://localhost:3000 --credentials`, `sanity schemas deploy`, `npx sanity deploy`.
- **No sample content in this slice**: content arrives via the Studio authoring or a later import/sample step.

## Security

- Browser gets only `NEXT_PUBLIC_*` values. Read/write tokens stay server-only and are never in `.env.local` or committed files. Do not print or commit secrets. The dataset stays private.

## Files (expected changes)

- New, Studio: `studio-mubi_vertex/package.json`, `tsconfig.json`, `.gitignore`, `sanity.config.ts`, `sanity.cli.ts`, `schemaTypes/index.ts`, `schemaTypes/documents/{course,lesson,instructor,category,video,progress}.ts`, `schemaTypes/objects/{course-module,outcome,resource}.ts`.
- New, app: `vertex/lib/sanity/client.ts`, `vertex/lib/sanity/queries.ts`, `vertex/app/sanity-smoke/page.tsx`, `vertex/.env.example`, `vertex/sanity.types.ts` (generated).
- Modified, app: `vertex/.env.local`, `vertex/package.json`, `vertex/package-lock.json` (added deps).
- Removed, app (strays): root `sanity.config.ts`, root `sanity.cli.ts`, `schemaTypes/`, `static/`, `studio/`, `sanity/`.

## Acceptance criteria

1. Studio files exist in `studio-mubi_vertex`, target `djy93dxb`/`production`, standalone.
2. `npm install` + `npm run dev` from the Studio start it locally (or the exact command is handed to the user).
3. Full Vertex schema registered in `schemaTypes/index.ts` and used by `sanity.config.ts`.
4. TypeGen generates `vertex/sanity.types.ts` from the real query in `lib/sanity/queries.ts`.
5. App typechecks, lints, and builds with the new client + smoke page; homepage renders unchanged.
6. `.env.example` committed; no secrets in the repo.
7. Strays removed; git status matches the intended change set.

## Checks

- App: `npx tsc --noEmit`, `npm run lint`, `npm run build`, `npm run dev` then open `/sanity-smoke`.
- Studio: `npm run typegen`, Studio `npm run dev`.
- Deploy/CORS: attempt `sanity cors add`, `sanity schemas deploy`, `npx sanity deploy`; report real output; if auth/network blocks, list the exact hand-off commands in the report.
- Report real outputs only; never claim a check passed without running it.

## Manual test steps

1. Terminal A, in `studio-mubi_vertex`: `npm run dev`; open the printed Studio URL; confirm it loads project Mubi_vertex, dataset production, with the Vertex schema types visible in the Structure.
2. Terminal B, in `vertex`: `npm run dev`; open `http://localhost:3000/sanity-smoke`; it should render an honest empty state or fetched list.
3. Open `http://localhost:3000/`; confirm the designed marketing page is unchanged.
4. (If deploy succeeded) open the hosted Studio URL from step "CORS + deploys".