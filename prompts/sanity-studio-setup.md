# Sanity Studio Setup

## Goal
Create a standalone Sanity Studio for project `djy93dxb` (Mubi_vertex), dataset `production`, in the sibling directory `C:\Users\DEVLORD\Desktop\studio-mubi_vertex`. Connect it to the existing Next.js app at `C:\Users\DEVLORD\Desktop\Vertex` without embedding or moving the Studio.

## Skills and references
- `sanity-best-practices`
- `sanity-best-practices/references/get-started.md`
- Existing repository guidance in `AGENTS.md`

## Inspected context
- Existing Next.js app: `C:\Users\DEVLORD\Desktop\Vertex`
- Existing app source: `app/`
- Existing sibling Studio directory: `C:\Users\DEVLORD\Desktop\studio-mubi_vertex`
- Studio directory is currently empty.
- Project uses Next.js 16, TypeScript, npm, and a standalone App Router web app.
- No Sanity Studio config or schema exists yet.

## Decisions
- Keep the Studio in `studio-mubi_vertex`, as a separate workspace.
- Use Sanity CLI `sanity init`, not the deprecated `create-sanity` wrapper.
- Use project `djy93dxb` and dataset `production`.
- Use a clean TypeScript Studio template.
- Do not embed Studio in Next.js.
- Do not modify the Next.js app until the Studio exists and its generated configuration is inspected.
- Keep Sanity credentials in environment/config files that are ignored by Git; never print or commit secrets.

## Expected changes
- Generate the standalone Studio files under `C:\Users\DEVLORD\Desktop\studio-mubi_vertex`.
- Inspect and, only if required, configure the Studio package scripts and Sanity config.
- Add the minimum server-side Sanity client and environment variable wiring to the Next.js app only after the Studio configuration is known.
- Do not create custom content schemas in this setup slice unless separately approved.

## Acceptance criteria
- `studio-mubi_vertex/sanity.config.ts` exists and targets project `djy93dxb`.
- The Studio uses dataset `production`.
- The Studio remains outside the Next.js app directory.
- The Studio starts independently with its own package script.
- The Next.js app remains buildable and its dependency boundaries are preserved.
- No secrets are committed.

## Checks
- Run Sanity CLI diagnostics from the Studio workspace.
- Run the Studio type check/build or its available validation script.
- Run the Next.js type check and lint after any web integration changes.
- Verify Git status and ignored files before reporting completion.

## Manual verification
1. From `C:\Users\DEVLORD\Desktop\studio-mubi_vertex`, run the Studio dev command.
2. Open the printed Studio URL.
3. Confirm the Studio loads for project `djy93dxb` and dataset `production`.
4. From `C:\Users\DEVLORD\Desktop\Vertex`, run the existing Next.js checks.
5. Confirm the Studio and web app can run independently.
