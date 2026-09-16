# Vertex Design System Documentation

## Overview

The Vertex Design System is a unified design language for the Vertex learning platform. It provides a complete set of design tokens, components, and guidelines to ensure consistency across all user interfaces.

**Version:** 1.0 | **Last Updated:** September 14, 2025

## Design Principles

### 1. **Clarity First**
Every element should communicate its purpose clearly. Visual hierarchy, spacing, and typography guide users through the interface intuitively.

### 2. **Consistency**
Use components and patterns consistently across the platform. This builds familiarity and reduces cognitive load.

### 3. **Focus & Calm**
Minimize visual noise. Highlight what matters most. Provide a focused learning environment free from distractions.

### 4. **Accessible**
Design for everyone. Ensure sufficient contrast, readable typography, and keyboard navigation throughout the interface.

## Color Palette

### Primary Colors
- **Primary 900**: #E83D1A — Interactive element states (hover, active)
- **Primary 500**: #F36C37 — Primary actions and highlights
- **Primary 400**: #FF8C54 — Secondary highlights
- **Primary 300**: #FFBA81 — Light accents
- **Primary 100**: #F7E4C5 — Very light backgrounds

### Neutral Colors
- **Neutral 900**: #1F1D2A — Headlines and primary text
- **Neutral 800**: #3D3B53 — Secondary text
- **Neutral 700**: #6C6B88 — Tertiary text
- **Neutral 600**: #A0A0B1 — Placeholder text
- **Neutral 300**: #D0CED1 — Borders and dividers
- **Neutral 100**: #F4F4F0 — Light backgrounds
- **Neutral 0**: #FFFFFF — Pure white

### Status Colors
- **In Progress**: #F36C37 — Currently active (animated)
- **Completed**: #4CAF50 — Finished
- **Now Playing**: #FF8C54 — Active playback (animated)
- **Landed**: #A0A0B1 — Neutral/inactive

## Typography

### Font Families
- **Display**: Playfair Display (serif) — Headlines and visual emphasis
- **Body**: Inter (sans-serif) — Body text, UI elements

### Type Scale

| Style | Size | Weight | Line Height | Use Case |
|-------|------|--------|-------------|----------|
| Display 1 | 48px | 700 | 56px | Page titles |
| Display 2 | 36px | 700 | 44px | Section titles |
| Heading 1 | 28px | 700 | 36px | Card titles |
| Heading 2 | 22px | 700 | 30px | Subsection titles |
| Heading 3 | 18px | 600 | 24px | Small headings |
| Body Large | 16px | 400 | 24px | Primary content |
| Body | 14px | 400 | 20px | Secondary content |
| Body Small | 12px | 400 | 16px | Captions, meta |

## Spacing System

Base unit: **4px**

All spacing uses multiples of 4 for consistency:
- 4px (1 unit)
- 8px (2 units)
- 12px (3 units)
- 16px (4 units)
- 24px (6 units)
- 32px (8 units)
- 40px (10 units)
- 48px (12 units)
- 64px (16 units)

## Border Radius

| Name | Value | Use Case |
|------|-------|----------|
| None | 0px | Sharp edges |
| XS | 4px | Buttons, small elements |
| SM | 8px | Inputs, tags |
| MD | 12px | Cards |
| LG | 16px | Large cards, modals |
| XL | 24px | Special emphasis |
| Full | 100% | Circles, avatars |

## Shadows

| Level | Style | Use Case |
|-------|-------|----------|
| XS | 0 1px 2px rgba(0,0,0,0.05) | Subtle depth |
| SM | 0 2px 4px rgba(0,0,0,0.08) | Minor elevation |
| MD | 0 4px 8px rgba(0,0,0,0.1) | Card elevation |
| LG | 0 8px 16px rgba(0,0,0,0.15) | Modal/popover |
| XL | 0 20px 40px rgba(0,0,0,0.2) | Maximum depth |

## Components

### Button
Primary action element with 4 variants and multiple states.

**Variants:**
- `primary` — Main call-to-action, orange background
- `secondary` — Alternative actions, outlined
- `tertiary` — Tertiary actions, minimal style
- `text` — Link-like appearance, text only

**Props:**
```tsx
<Button 
  variant="primary" 
  size="md"
  isLoading={false}
  disabled={false}
  icon={<IconComponent />}
>
  Click me
</Button>
```

**States:** default, hover, active, disabled, loading

---

### Input
Text input field with optional label, error message, and help text.

**Props:**
```tsx
<Input 
  label="Email address"
  placeholder="you@example.com"
  error="Invalid email format"
  helpText="We'll never share your email"
  icon={<IconComponent />}
/>
```

**States:** default, hover, focus, error, disabled

---

### Select
Dropdown selector for choosing from a list of options.

**Props:**
```tsx
<Select 
  label="Sort by"
  options={[
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'popular', label: 'Most Popular' },
  ]}
  error={undefined}
  helpText="Choose a sorting method"
/>
```

---

### Badge
Tags and labels for content categorization and status.

**Variants:**
- `primary` — Default badge styling
- `neutral` — Neutral variant
- `video` — Video content indicator
- `lesson` — Lesson content indicator
- `popular` — Popular content indicator

**Props:**
```tsx
<Badge variant="video">VIDEO</Badge>
```

---

### Card
Container for grouped content with optional interactive hover effects.

**Props:**
```tsx
<Card hoverable={true} onClick={() => {}}>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

---

### StatusIndicator
Visual indicator for content status with animated pulse for active states.

**Statuses:**
- `in-progress` — Currently active (animated)
- `completed` — Finished/done
- `now-playing` — Active playback (animated)
- `landed` — Neutral/inactive

**Props:**
```tsx
<StatusIndicator status="in-progress" label="In Progress" />
```

---

### ProgressBar
Progress visualization showing completion percentage.

**Props:**
```tsx
<ProgressBar progress={65} showLabel={true} />
```

---

### LessonCard
Specialized card for displaying lesson content with progress tracking.

**Props:**
```tsx
<LessonCard
  title="Data Fetching & Caching"
  description="Learn best practices..."
  instructor="Sarah Chen"
  duration="45 min"
  progress={60}
  isFree={false}
  thumbnail="/lesson-image.jpg"
  onClick={() => navigateToLesson()}
/>
```

---

### VideoResultCard
Specialized card for displaying video search results with lesson and course information.

**Props:**
```tsx
<VideoResultCard
  lessonTitle="Server-Side Rendering"
  courseName="Next.js Mastery"
  moduleLabel="Lesson 3.2 in Performance Optimization"
  description="Learn how to implement SSR..."
  timestamp="12:45"
  duration="5 min clip"
  thumbnail="/video-thumbnail.jpg"
  onClick={() => navigateToLesson()}
/>
```

## Usage Guidelines

### When to Use Each Button Variant
- **Primary**: Main call-to-action, "Get Started", "Save", "Submit", "Explore Courses"
- **Secondary**: Alternative actions, "View Lesson", "Cancel", "Learn More"
- **Tertiary**: Tertiary actions with less emphasis, navigation links
- **Text**: Minimal actions, "Watch Video", "Show More", inline links

### Color Usage
- Use **Primary 500** for interactive elements users can click
- Use **Neutral 900** for headlines and critical text
- Use **Neutral 700** for body copy and descriptions
- Use **Neutral 600** for helper text and placeholders
- Use **Status colors** only for status indicators
- Maintain contrast: minimum 4.5:1 for body text, 3:1 for large text

### Spacing Recommendations
- **Card padding**: 16px
- **Button padding**: 10px vertical × 16px horizontal
- **Section margins**: 24px–48px between sections
- **Component gaps**: 16px between items in a row
- **Text margins**: 8px–12px between text elements

### Form Field Guidelines
- Always include labels above inputs (unless space-constrained)
- Provide helpful placeholder text as a guide, not a substitute for labels
- Show validation errors inline and in real-time when possible
- Use `helpText` to explain optional fields or requirements
- Ensure select dropdowns are clearly visible and accessible

### Card Usage
- Use cards to group related content logically
- Apply consistent padding (16px) for visual uniformity
- Enable hover effects only for interactive cards
- Maintain clear visual hierarchy with typography
- Include all essential information without overcrowding

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum for body, 3:1 for large text)
- Don't rely on color alone to convey information (use labels, icons, text)

### Typography
- Maintain minimum font size of 12px for body text
- Use sufficient line height (1.5 or greater) for readability
- Limit line length to 50–75 characters for comfortable reading
- Use semantic heading hierarchy (h1 → h6)

### Interactive Elements
- Minimum touch target size: 44px × 44px
- Clear focus indicators visible on all focusable elements
- Keyboard navigation support throughout (Tab, Enter, Escape)
- Sufficient time for users to read and interact

### Images and Media
- Include descriptive `alt` text on all images
- Provide captions and transcripts for videos
- Ensure embedded players are keyboard accessible

## Responsive Design

The design system is responsive by default. Key breakpoints:
- **Mobile**: 0–640px
- **Tablet**: 640px–1024px
- **Desktop**: 1024px+

### Adaptation Rules
- Stack columns vertically on mobile
- Reduce padding slightly on small screens
- Simplify navigation and content hierarchy for mobile
- Maintain visual hierarchy and readability across all sizes
- Test on actual devices, not just browser resize

## Token Access

### Tailwind Classes
All tokens are available as Tailwind utilities:
```tsx
<div className="text-primary-500 bg-neutral-0 p-4 rounded-md shadow-md">
  Content
</div>
```

### CSS Variables
Access design tokens via CSS custom properties:
```css
.component {
  color: var(--color-primary-500);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
}
```

### TypeScript Imports
Import component types for proper type checking:
```tsx
import { 
  Button, type ButtonVariant,
  Card,
  Badge, type BadgeVariant,
} from '@/components';
```

## Contributing

When adding new components or modifying existing ones:

1. Follow the naming conventions and file structure
2. Ensure all TypeScript types are properly defined
3. Meet accessibility standards (WCAG AA minimum)
4. Test across mobile, tablet, and desktop sizes
5. Update this documentation with new component specs
6. Run type check and lint before submitting

## Component Status

| Component | Status | Version |
|-----------|--------|---------|
| Button | ✅ Ready | 1.0 |
| Input | ✅ Ready | 1.0 |
| Select | ✅ Ready | 1.0 |
| Badge | ✅ Ready | 1.0 |
| Card | ✅ Ready | 1.0 |
| StatusIndicator | ✅ Ready | 1.0 |
| ProgressBar | ✅ Ready | 1.0 |
| LessonCard | ✅ Ready | 1.0 |
| VideoResultCard | ✅ Ready | 1.0 |

## Future Enhancements

- [ ] Dark mode support
- [ ] Additional button sizes (XS, XL)
- [ ] Tooltip component
- [ ] Modal/Dialog component
- [ ] Dropdown/Menu component
- [ ] Tabs component
- [ ] Breadcrumb component
- [ ] Alert/Toast component
- [ ] Pagination component with current showcase
- [ ] Icon library integration

## Support

For questions or feedback about the design system, refer to [AGENTS.md](./AGENTS.md) for project guidelines or open an issue in the project repository.

---

**Last Updated:** September 14, 2025  
**Maintained by:** Vertex Engineering Team
