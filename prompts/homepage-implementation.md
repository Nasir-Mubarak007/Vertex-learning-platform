# Vertex Homepage Implementation

## Goal

Implement the Vertex homepage from the supplied desktop reference image, adapting the layout cleanly for mobile without changing the visual direction.

## Skills and guidance consulted

- Repository instructions in `AGENTS.md` and `CLAUDE.md`.
- Existing Vertex design tokens in `app/globals.css`.
- Existing shared primitives in `components/`.
- Next.js 16 App Router conventions from the installed project configuration.

## Existing code inspected

- `app/page.tsx` is the untouched create-next-app starter page.
- `app/layout.tsx` still has starter metadata and Geist font variables.
- `app/globals.css` defines the Vertex orange, neutral palette, Playfair Display display type, Inter body type, spacing, radius, and shadow tokens.
- `components/Button.tsx`, `components/Card.tsx`, and `components/Input.tsx` provide reusable primitives, but the reference needs homepage-specific composition and styling.
- `public/` currently contains only starter SVG assets, so course marks and the user avatar should be rendered with accessible CSS/icon treatments or local inline SVG only where necessary; no external image dependency is required.

## Decisions and assumptions

- Keep the homepage self-contained in the existing Next.js app; do not add Sanity, Clerk, or search backend work for this visual slice.
- Use a client component only if needed for the search field interaction. Pressing Enter can route to `/search?q=...` only if that route exists; otherwise the field remains an accessible presentational control without inventing a backend.
- The visible course cards use the reference content: Next.js for Production, Docker Essentials, and TypeScript Deep Dive.
- Use CSS-created course marks and the existing orange palette rather than introducing untracked image assets.
- Update page metadata to Vertex branding.
- Keep the visual frame centered with the subtle warm striped outer edge, cream-white canvas, thin dividers, restrained shadows, and responsive card stacking shown by the reference.

## Files expected to change

- `app/page.tsx`: replace starter markup with the responsive homepage composition and course data.
- `app/layout.tsx`: update title and description; remove starter-specific font class usage if it conflicts with the established global typography.
- `app/globals.css`: add only homepage-specific global utilities or background treatments that cannot be expressed cleanly in the page markup.

## Requirements

- Header with Vertex mark/wordmark, Courses link, My Learning link, notification control, and avatar control.
- Hero eyebrow, two-line Playfair headline, supporting copy, orange Explore Courses CTA with arrow, and large search field with search icon and keyboard hint.
- All Courses section with heading, View all courses link, and three equal-height responsive cards. Each card includes course mark, title, description, level, duration, and module count.
- Bottom announcement row with star icon and “New courses and lessons added every week.” plus the soft orange stepped decorative treatment visible at the bottom of the reference.
- Match the reference spacing, typography hierarchy, colors, borders, radii, and alignment at desktop width.
- Responsive behavior: preserve the header hierarchy, stack cards, prevent text overflow, and keep controls usable on narrow screens.
- Accessibility: semantic landmarks, heading hierarchy, labeled controls, visible focus states, meaningful alt text or `aria-hidden` for decorative marks, and buttons/links with real targets where possible.
- Avoid unrelated component refactors, backend integrations, and content model work.

## Acceptance criteria

- The root route visually matches the supplied reference at desktop dimensions.
- The page remains coherent and usable at mobile widths without horizontal overflow.
- The page contains no create-next-app copy, logo, metadata, or starter links.
- `npm run lint` passes.
- `npm run build` passes.
- `npm run dev` starts successfully for manual visual verification.

## Manual test steps

1. Run `npm run dev` from the repository root.
2. Open the local root URL at a desktop viewport around 768px wide and compare the header, hero, search, course cards, and lower decorative section against the supplied reference.
3. Resize to a narrow mobile viewport and verify no horizontal scrolling, readable text, stacked cards, and usable controls.
4. Tab through the page and confirm links, search, notification, avatar, and CTA have visible focus states.
5. Run `npm run lint` and `npm run build`.
