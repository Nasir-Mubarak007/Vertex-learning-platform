'use client'

import { Badge, Button, Input, ProgressBar, Select, StatusIndicator } from '@/components'

const colors = [
  ['Primary 500', '#F97316', 'orange'], ['Primary 400', '#FF923C', 'coral'], ['Primary 300', '#FDBA74', 'peach'], ['Primary 200', '#FDE7DA', 'cream'], ['Primary 100', '#FFF1E5', 'pale'],
  ['Neutral 900', '#0F172A', 'ink'], ['Neutral 700', '#334155', 'slate'], ['Neutral 500', '#64748B', 'muted'], ['Neutral 300', '#CBD5E1', 'line'], ['Neutral 200', '#E2E8F0', 'mist'], ['Neutral 100', '#F1F5F9', 'fog'], ['Neutral 50', '#FAFAFC', 'white-soft'], ['Neutral 0', '#FAFAFC', 'white-soft'], ['White', '#FFFFFF', 'white'],
] as const
const typeRows = [['Display 1', 'Playfair Display', '48 / 56', 'Bold', 'Page titles'], ['Display 2', 'Playfair Display', '36 / 44', 'Bold', 'Section titles'], ['Heading 1', 'Inter', '28 / 36', 'Semi Bold', 'Card titles'], ['Heading 2', 'Inter', '22 / 30', 'Semi Bold', 'Sub section'], ['Heading 3', 'Inter', '18 / 24', 'Medium', 'Small titles'], ['Body Large', 'Inter', '16 / 24', 'Regular', 'Body copy'], ['Body', 'Inter', '14 / 20', 'Regular', 'Supporting text'], ['Small', 'Inter', '12 / 16', 'Regular', 'Captions, meta']]
const spacing = [4, 8, 12, 16, 24, 32, 40, 48, 64]
const radii = [['4px', 'xs'], ['8px', 'sm'], ['12px', 'md'], ['16px', 'lg'], ['24px', 'xl'], ['Full', 'full']]
const shadows = [['Sm', '0 1px 2px 0 rgba(15,23,42,.06)'], ['Md', '0 4px 12px -3px rgba(15,23,42,.08)'], ['Lg', '0 12px 24px -6px rgba(15,23,42,.10)'], ['Xl', '0 20px 40px -8px rgba(15,23,42,.12)']]

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="ds-label"><span>{number}</span>{children}</div>
}
function MiniIcon({ kind }: { kind: 'eye' | 'grid' | 'focus' | 'access' | 'doc' }) {
  return <span className={`mini-icon mini-icon-${kind}`} aria-hidden="true">{kind === 'doc' ? '▤' : ''}</span>
}

export default function DesignSystemPage() {
  return (
    <main className="design-sheet">
      <header className="ds-panel ds-hero">
        <div className="hero-copy">
          <div className="brand"><span className="brand-mark">▼</span><strong>Vertex</strong></div>
          <h1>Design System</h1>
          <p>A unified design language for Vertex<br />learning platform. Clean, modern and<br />focused on clarity, consistency and<br />intuitive learning experiences.</p>
          <div className="version">VERSION 1.0 <i /> MAY 2025</div>
        </div>
        <div className="hero-colors">
          <SectionLabel number="01">COLORS</SectionLabel>
          <div className="color-group"><b>Primary</b><div className="swatches">{colors.slice(0, 5).map(([name, hex, tone]) => <div className="swatch-item" key={name}><div className={`swatch ${tone}`} /><small>{name}</small><em>{hex}</em></div>)}</div></div>
          <div className="color-group"><b>Neutral</b><div className="swatches">{colors.slice(5).map(([name, hex, tone]) => <div className="swatch-item" key={name}><div className={`swatch ${tone}`} /><small>{name}</small><em>{hex}</em></div>)}</div></div>
        </div>
      </header>

      <div className="ds-grid ds-grid-top">
        <section className="ds-panel typography-panel"><SectionLabel number="02">TYPOGRAPHY</SectionLabel><div className="font-samples"><div className="font-sample"><span className="ag serif">Ag</span><div><strong>Playfair Display</strong><small>Elegant <i /> Readable <i /> Timeless</small></div></div><div className="font-sample"><span className="ag sans">Ag</span><div><strong>Inter</strong><small>Clean <i /> Modern <i /> Highly legible</small></div></div></div></section>
        <section className="ds-panel type-scale"><SectionLabel number="03">TYPE SCALE</SectionLabel><div className="type-head"><span>Style</span><span>Font</span><span>Size / Line Height</span><span>Weight</span><span>Use</span></div>{typeRows.map(row => <div className="type-row" key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span><span>{row[2]}</span><span>{row[3]}</span><span>{row[4]}</span></div>)}</section>
      </div>

      <div className="ds-grid ds-grid-middle">
        <section className="ds-panel spacing-panel"><SectionLabel number="04">SPACING SYSTEM</SectionLabel><small>Base unit: 4px</small><div className="spacing-row">{spacing.map(value => <div className="space-item" key={value}><span style={{ height: `${Math.max(5, value / 2)}px` }} /><b>{value}</b><em>({value / 16}rem)</em></div>)}</div></section>
        <section className="ds-panel radius-panel"><SectionLabel number="05">RADIUS &amp; SHADOWS</SectionLabel><small>Radius</small><div className="radius-row">{radii.map(([label, cls]) => <div key={label}><span className={`radius-box ${cls}`} /><em>{label}<br />({cls})</em></div>)}</div><small className="shadow-title">Shadows</small><div className="shadow-row">{shadows.map(([label, value]) => <div className="shadow-card" key={label}><b>{label}</b><small>{value}</small></div>)}</div></section>
      </div>

      <div className="ds-grid ds-grid-components">
        <section className="ds-panel icon-panel"><SectionLabel number="06">ICONS</SectionLabel><small>Outline Style</small><div className="icon-line">♧　⌕　▣　▤　▥　◉　♙　›</div><small>Filled Style</small><div className="icon-line filled">♧　⌕　▣　▤　▥　◉　♙　›</div><small>Icon Specs</small><ul><li>24px × 24px grid</li><li>2px stroke width (outline)</li><li>Rounded line caps</li><li>Consistent optical balance</li></ul></section>
        <section className="ds-panel button-panel"><SectionLabel number="07">BUTTONS</SectionLabel><div className="button-table"><div className="button-corner" /><strong>Primary</strong><strong>Secondary</strong><strong>Tertiary</strong><strong>Text</strong><strong>Default</strong><Button variant="primary" className="spec-button spec-primary">Get Started</Button><Button variant="secondary" className="spec-button spec-secondary">Explore Courses</Button><Button variant="tertiary" className="spec-button spec-tertiary">View Lesson ♐</Button><Button variant="text" className="spec-button spec-text">Watch Video ▶️</Button><strong>Hover</strong><Button variant="primary" className="spec-button spec-primary spec-button-hover">Get Started</Button><Button variant="secondary" className="spec-button spec-secondary spec-button-hover">Explore Courses</Button><Button variant="tertiary" className="spec-button spec-tertiary spec-button-hover">View Lesson ♐</Button><Button variant="text" className="spec-button spec-text spec-button-hover">Watch Video ▶️</Button><strong>Disabled</strong><Button variant="primary" className="spec-button spec-primary" disabled>Get Started</Button><Button variant="secondary" className="spec-button spec-secondary" disabled>Explore Courses</Button><Button variant="tertiary" className="spec-button spec-tertiary" disabled>View Lesson ♐</Button><Button variant="text" className="spec-button spec-text" disabled>Watch Video ▶️</Button></div><small className="button-spec-label">Button Specs</small><ul className="button-specs"><li>Height: 44px (default)</li><li>Padding: 0 16px (lg), 0 12px (md)</li><li>Radius: 12px</li><li>Font: Inter Medium (14–16px)</li></ul></section>
        <section className="ds-panel input-panel"><SectionLabel number="08">INPUTS</SectionLabel><small>Search / Text Input</small><Input placeholder="Search anything..." /><small>Select</small><Select options={[{ value: 'relevance', label: 'Most Relevant' }]} /><small>Field Specs</small><ul><li>Height: 44px</li><li>Radius: 12px</li><li>Border: 1px solid #E2E8F0</li><li>Padding: 0 16px</li><li>Focus: Border color #F97316</li></ul></section>
      </div>

      <div className="ds-grid ds-grid-small">
        <section className="ds-panel"><SectionLabel number="09">BADGES / TAGS</SectionLabel><div className="badge-showcase"><span>Video<Badge variant="video">VIDEO</Badge></span><span>Lesson<Badge variant="lesson">LESSON</Badge></span><span>Popular<Badge variant="popular">POPULAR</Badge></span></div></section>
        <section className="ds-panel"><SectionLabel number="10">STATUS / INDICATORS</SectionLabel><div className="status-showcase"><StatusIndicator status="in-progress" label="In Progress" /><StatusIndicator status="completed" label="Completed" /><StatusIndicator status="now-playing" label="Now Playing" /><StatusIndicator status="landed" label="Locked" /></div></section>
        <section className="ds-panel progress-panel"><SectionLabel number="11">PROGRESS BAR</SectionLabel><div className="progress-line"><ProgressBar percentage={64} /><small>35% complete</small></div></section>
      </div>

      <section className="ds-panel cards-panel"><SectionLabel number="12">CARDS</SectionLabel><div className="card-labels"><small>Course Card</small><small>Lesson Card (Video)</small><small>Lesson Card (Lesson)</small><small>Resource Card</small></div><div className="reference-cards"><article><div className="course-logo">N</div><strong>Next.js for Production</strong><p>Build scalable, high-performance web applications with Next.js.</p><footer>▥ Intermediate　◷ 18h 24m　▱ 12 modules</footer></article><article><Badge variant="video">VIDEO</Badge><strong>Data Fetching in Server Components</strong><p>Learn how fetch data on the server using async/await and Next.js best practices.</p><footer>Lesson 5.1　◷ 12:46 <b>◉ Watch from 12:45</b></footer></article><article><Badge variant="lesson">LESSON</Badge><strong>Data Fetching &amp; Caching</strong><p>Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.</p><footer>Module 5 <b>View lesson ♐</b></footer></article><article><MiniIcon kind="doc" /><strong>Caching and Revalidation Guide</strong><p>Deep dive into Next.js caching strategies.</p><footer>PDF　·　1.2 MB <b>♐</b></footer></article></div></section>
      <section className="ds-panel navigation-panel"><SectionLabel number="13">NAVIGATION</SectionLabel><div className="nav-row"><div className="nav-brand"><span className="brand-mark">▼</span><strong>Vertex</strong></div><b>Courses</b><span>My Learning</span><small>Breadcrumbs<br /><b>All Courses　›　Next.js for Production　›　Data Fetching &amp; Caching</b></small><small>Pagination<br /><b>‹　<span className="page-active">1</span>　2　3　…　8　›</b></small></div></section>
      <section className="ds-panel principles-panel"><SectionLabel number="14">PRINCIPLES</SectionLabel><div className="principles"><div><MiniIcon kind="eye" /><b>Clarity First</b><small>Every element should communicate clearly.</small></div><div><MiniIcon kind="grid" /><b>Consistency</b><small>Use components and patterns consistently across the platform.</small></div><div><MiniIcon kind="focus" /><b>Focus &amp; Calm</b><small>Remove noise and help learners focus on what matters.</small></div><div><MiniIcon kind="access" /><b>Accessible</b><small>Design with accessibility and inclusivity in mind.</small></div></div></section>
    </main>
  )
}
