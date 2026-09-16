# Implementation Prompt: Vertex Design System

**Date:** September 14, 2026  
**Version:** 1.0  
**Status:** Awaiting Approval

## Goal

Implement a complete design system for Vertex learning platform based on the provided design reference image. The system includes design tokens, Tailwind configuration, reusable React components, and a showcase page demonstrating all design elements.

## Skills & Documentation Read

- AGENTS.md (section 3 UI work, section 14 when in doubt)
- Tailwind CSS v4 documentation
- Next.js App Router patterns
- React TypeScript component patterns

## Code Inspection Done

Current project state:
- **Package.json**: Next.js 16.3.5, React 19.2.8, Tailwind v4, TypeScript
- **Existing CSS**: `app/globals.css` has basic Tailwind import and root variables
- **Components folder**: Empty, ready for new components
- **Design-system page**: Exists at `app/design-system/page.tsx` but imports non-existent components

## Key Decisions & Assumptions

1. **Design Reference is Truth**: All colors, typography, spacing, and components match the provided design image exactly
2. **Tailwind + CSS Variables**: Use Tailwind config with extended theme + CSS custom properties in globals.css for dual access
3. **Component Library Scope**: Build 9 core components used throughout Vertex (Button, Input, Select, Badge, Card, StatusIndicator, ProgressBar, LessonCard, VideoResultCard)
4. **No Dark Mode**: Design reference shows only light mode; defer dark mode to future
5. **Responsive First**: Components work mobile-first, adapting layout sensibly without mobile reference
6. **No Over-engineering**: Build exactly to design, no bonus features or "nice-to-haves"
7. **TypeScript Throughout**: All components properly typed with React.FC and interfaces
8. **Reusable, not Page-specific**: Components are domain-agnostic utilities, not Sanity-aware

## Files to Touch/Create

### Create:
- `tailwind.config.ts` — Design tokens (colors, typography, spacing, radius, shadows)
- `app/globals.css` — CSS variables + utility classes for all components
- `components/Button.tsx` — Button component with 4 variants (primary, secondary, tertiary, text)
- `components/Input.tsx` — Text input with label, error, help text support
- `components/Select.tsx` — Select dropdown with options
- `components/Badge.tsx` — Badge/tag component with 5 variants
- `components/Card.tsx` — Container card with optional hover effects
- `components/StatusIndicator.tsx` — Status dot + label (in-progress, completed, now-playing, landed)
- `components/ProgressBar.tsx` — Progress visualization with percentage
- `components/LessonCard.tsx` — Lesson-specific card (title, instructor, duration, progress)
- `components/VideoResultCard.tsx` — Video result card (lesson + course info + timestamp)
- `components/index.ts` — Barrel export for all components
- `DESIGN_SYSTEM.md` — Documentation (principles, tokens, usage, accessibility guidelines)

### Update:
- `app/design-system/page.tsx` — Currently imports non-existent components; will work once components exist

## Design Reference Mapping

From `@design/vertex-desingsystem.png`:

### Colors (01)
- **Primary**: #E83D1A (900), #F36C37 (500), #FF8C54 (400), #FFBA81 (300), #F7E4C5 (100)
- **Neutral**: #1F1D2A (900), #3D3B53 (800), #6C6B88 (700), #A0A0B1 (600), #D0CED1 (300), #F4F4F0 (100), #FFFFFF (0)

### Typography (02)
- **Display Fonts**: Playfair Display (serif) — elegant, for headlines
- **Body Font**: Inter (sans-serif) — clean, modern, readable
- **Sizes**: Display1 (48px/700), Display2 (36px/700), Heading1-3 (28-18px), Body variants (16-12px)

### Spacing (04)
- **Base unit**: 4px (all spacing multiples of 4)
- **Scale**: 4, 8, 12, 16, 24, 32, 40, 48, 64px

### Radius & Shadows (05)
- **Radius**: None (0), XS (4px), SM (8px), MD (12px), LG (16px), XL (24px), Full (100%)
- **Shadows**: XS-XL (5 levels of elevation)

### Button Variants (07)
- **Primary**: Orange background, white text (get started actions)
- **Secondary**: Transparent with orange border (explore, view more)
- **Tertiary**: Transparent, neutral text (less emphasis)
- **Text**: Minimal, link-like appearance

### Components (08-12)
- Icons (outline & filled styles)
- Badges/Tags (5 variants: video, lesson, popular, primary, neutral)
- Status Indicators (4 states with animated dots)
- Progress Bar (completion visualization)
- Cards (lessons, videos, resources)
- Input & Select (form elements)
- Navigation (breadcrumbs, pagination)

## Requirements

1. **Design Accuracy**
   - All colors match hex values exactly
   - Typography scales and weights match
   - Spacing follows 4px base unit
   - Component states (hover, active, disabled) match design

2. **TypeScript Quality**
   - No `any` types
   - All props properly typed with interfaces
   - React.forwardRef for input components
   - Proper return types on all functions

3. **Accessibility**
   - Minimum contrast ratios (WCAG AA)
   - Interactive elements focusable
   - Form labels associated with inputs
   - Semantic HTML when appropriate

4. **Responsive Design**
   - Components work at all breakpoints
   - Typography scales on mobile
   - Touch targets ≥44px minimum
   - No horizontal scroll on mobile

5. **Code Quality**
   - Consistent naming conventions
   - Barrel exports for clean imports
   - No unused dependencies
   - Comments on complex logic

## Security Considerations

- No sensitive data in components (they're presentational only)
- No client-side API calls in design system components
- Tailwind JIT compiler doesn't expose secrets
- CSS variables don't contain sensitive values

## Acceptance Criteria

- [ ] All 9 components created and exported from `components/index.ts`
- [ ] `tailwind.config.ts` includes all design tokens (colors, typography, spacing, radius, shadows)
- [ ] `app/globals.css` defines CSS custom properties for all tokens
- [ ] `app/design-system/page.tsx` imports all components without errors
- [ ] Design-system page displays all colors, typography, spacing, radius, shadows
- [ ] All components render without TypeScript errors
- [ ] Button component supports 4 variants + disabled + loading states
- [ ] Input component supports labels, errors, help text
- [ ] Select component renders with options
- [ ] LessonCard and VideoResultCard display all required fields
- [ ] StatusIndicator shows 4 different statuses
- [ ] ProgressBar shows percentage with label
- [ ] `DESIGN_SYSTEM.md` documents all tokens and components

## Checks to Run

1. **Type Check**: `npx tsc --noEmit` — No TypeScript errors
2. **Lint**: `npm run lint` — No ESLint violations
3. **Build**: `npm run build` — Production build succeeds
4. **Dev Server**: `npm run dev` — Server starts without errors

## Manual Test Steps

1. Start dev server: `npm run dev`
2. Navigate to `http://localhost:3000/design-system`
3. Verify page loads without import errors
4. Scroll through all sections:
   - **Colors**: All 11 colors display correctly with hex values
   - **Typography**: Display and Body fonts render with correct sizes/weights
   - **Buttons**: All 4 variants visible + hover/active/disabled states work
   - **Form Elements**: Input field interactive, Select dropdown opens
   - **Badges**: 5 variants display with correct colors
   - **Cards**: LessonCard and VideoResultCard render content
   - **Status**: 4 status indicators show with correct colors
   - **Progress**: Progress bars at 25%, 60%, 100% display correctly
   - **Spacing/Radius/Shadows**: Visual reference shows all scales
5. Test responsive: Resize browser to mobile size, verify layout adapts
6. Interact: Click buttons, focus inputs, hover cards to verify states

## Edge Cases & Risks

- **Components exist but fail**: Check imports in `components/index.ts`
- **Colors don't match exactly**: Verify hex values against design image
- **Tailwind classes conflict**: Ensure no name collisions with existing Tailwind defaults
- **Type errors in design-system page**: May need to update page component structure

## Rollback Plan

If issues arise:
1. Files are new, can delete `components/`, `tailwind.config.ts`, update `globals.css`, `DESIGN_SYSTEM.md`
2. `design-system/page.tsx` was previously scaffolded, restore to empty state if needed
3. Verify `package.json` unchanged (no new dependencies added)

---

**Ready to proceed?** Please confirm Yes/No to proceed with implementation.
