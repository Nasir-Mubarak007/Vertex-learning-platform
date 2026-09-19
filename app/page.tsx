import { ArrowRight, BarChart3, Bell, Clock3, FileText, Search, Star } from "lucide-react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const courses = [
  {
    mark: "N",
    markClass: "course-mark-next",
    title: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
  },
  {
    mark: "docker",
    markClass: "course-mark-docker",
    title: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
  },
  {
    mark: "TS",
    markClass: "course-mark-typescript",
    title: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
  },
];

function VertexMark() {
  return (
    <span className="vertex-mark" aria-hidden="true">
      V
    </span>
  );
}

function SearchIcon() {
  return <Search aria-hidden="true" className="icon" />;
}

function ArrowIcon() {
  return <ArrowRight aria-hidden="true" className="icon icon-small" />;
}

function CourseMetaIcon({ type }: { type: "level" | "duration" | "modules" }) {
  if (type === "level") {
    return <BarChart3 aria-hidden="true" className="meta-icon" />;
  }

  if (type === "duration") {
    return <Clock3 aria-hidden="true" className="meta-icon" />;
  }

  return <FileText aria-hidden="true" className="meta-icon" />;
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vertex home">
          <VertexMark />
          <span>Vertex</span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#courses">Courses</a>
          <a href="#my-learning">My Learning</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button notification-button" type="button" aria-label="Notifications">
            <Bell aria-hidden="true" className="icon" />
          </button>
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="auth-action auth-action-secondary" type="button">Sign in</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="auth-action auth-action-primary" type="button">Sign up</button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <span className="eyebrow">Intelligent learning</span>
          <h1 id="hero-title">Search your learning<br />in plain English.</h1>
          <p className="hero-copy">Vertex understands what you want to learn and<br className="desktop-break" /> finds the exact lessons across all your courses.</p>
          <a className="primary-action" href="#courses">
            Explore Courses
            <ArrowIcon />
          </a>
          <form className="search-box" action="#courses">
            <SearchIcon />
            <label className="sr-only" htmlFor="learning-search">Search your learning</label>
            <input id="learning-search" name="q" type="search" placeholder="Ask anything about your learning..." />
            <span className="keyboard-hint" aria-hidden="true"><span>⌘</span> K</span>
          </form>
        </section>

        <section className="courses-section" id="courses" aria-labelledby="courses-title">
          <div className="section-heading">
            <h2 id="courses-title">All Courses</h2>
            <a href="#courses">View all courses <ArrowIcon /></a>
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.title}>
                <div className={`course-mark ${course.markClass}`} aria-hidden={course.mark === "docker"}>
                  {course.mark === "docker" ? <Image src="/docker.svg" alt="" width={64} height={48} /> : course.mark}
                </div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span><CourseMetaIcon type="level" />{course.level}</span>
                  <span><CourseMetaIcon type="duration" />{course.duration}</span>
                  <span><CourseMetaIcon type="modules" />{course.modules}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="announcement" id="my-learning" aria-label="Vertex updates">
          <span className="announcement-rule" />
          <Star className="announcement-star" aria-hidden="true" />
          <p>New courses and lessons added every week.</p>
          <span className="announcement-rule" />
        </section>
        <div className="steps" aria-hidden="true">
          <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
        </div>
      </main>
    </div>
  );
}
