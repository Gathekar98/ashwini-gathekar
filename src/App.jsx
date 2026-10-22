import { useEffect, useState } from 'react';
import { profile, stats, experience, projects, filters, skills, education } from './data.js';

const Icon = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  external: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  ),
  download: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
};

const navLinks = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="logo" aria-label="Ashwini Gathekar, home">
          <span className="logo__bracket">&lt;</span>ashwini<span className="logo__bracket"> /&gt;</span>
        </a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href={profile.resume} className="btn btn--small btn--outline" download onClick={() => setOpen(false)}>
            Resume
          </a>
        </nav>
        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? Icon.close : Icon.menu}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" /> Open to frontend roles · {profile.location}
          </p>
          <h1 className="hero__title">
            Hi, I'm <span className="accent">Ashwini</span>.
            <br />I build interfaces
            <br />
            people <span className="accent-2">enjoy using.</span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View my work
            </a>
            <a href={profile.resume} className="btn btn--outline" download>
              {Icon.download} Download CV
            </a>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              {Icon.github}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              {Icon.linkedin}
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              {Icon.mail}
            </a>
          </div>
        </div>

        <div className="code-card" aria-hidden="true">
          <div className="code-card__bar">
            <span />
            <span />
            <span />
            <em>ashwini.ts</em>
          </div>
          <pre>
            <code>
              <span className="k">const</span> <span className="v">developer</span> = {'{'}
              {'\n  '}name: <span className="s">'Ashwini Gathekar'</span>,
              {'\n  '}role: <span className="s">'Frontend Developer'</span>,
              {'\n  '}experience: <span className="n">2</span> + <span className="s">' years'</span>,
              {'\n  '}stack: [<span className="s">'React'</span>, <span className="s">'TypeScript'</span>,
              {'\n          '}<span className="s">'Redux'</span>, <span className="s">'SCSS'</span>],
              {'\n  '}cares: [<span className="s">'a11y'</span>, <span className="s">'performance'</span>,
              {'\n          '}<span className="s">'pixel-perfect UI'</span>],
              {'\n  '}<span className="f">hire</span>: () =&gt; <span className="k">true</span>,
              {'\n'}
              {'}'};<span className="cursor" />
            </code>
          </pre>
        </div>
      </div>

      <div className="container">
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionHead({ index, title, sub }) {
  return (
    <div className="section-head reveal">
      <p className="section-head__index">
        {index} <span>//</span>
      </p>
      <h2>{title}</h2>
      {sub && <p className="section-head__sub">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <SectionHead index="01" title="About me" />
        <div className="about__body reveal">
          {profile.about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <div className="edu">
            <p className="edu__label">Education</p>
            <p className="edu__degree">{education.degree}</p>
            <p className="edu__meta">
              {education.school} · {education.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead index="02" title="Experience" />
        {experience.map((job) => (
          <article className="job reveal" key={job.company}>
            <div className="job__side">
              <p className="job__period">{job.period}</p>
              <p className="job__loc">{job.location}</p>
            </div>
            <div className="job__main">
              <h3>
                {job.role} <span className="accent">@ {job.company}</span>
              </h3>
              <p className="job__project">
                Project: <strong>{job.project}</strong>
              </p>
              <ul className="job__points">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="chips">
                {job.modules.map((m) => (
                  <span className="chip chip--violet" key={m}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  return (
    <article className={`project ${p.featured ? 'project--featured' : ''}`}>
      <a href={p.live} target="_blank" rel="noreferrer" className="project__media" tabIndex={-1}>
        <img src={p.image} alt={`${p.title} preview`} loading="lazy" width="1280" height="720" />
      </a>
      <div className="project__body">
        <p className="project__tag">
          {p.featured && <span className="badge">Featured</span>}
          {p.category.join(' · ')}
        </p>
        <h3>{p.title}</h3>
        <p className="project__tagline">{p.tagline}</p>
        <p className="project__desc">{p.description}</p>
        <div className="chips">
          {p.tech.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="project__links">
          <a href={p.live} target="_blank" rel="noreferrer" className="btn btn--small btn--primary">
            Live demo {Icon.external}
          </a>
          <a href={p.code} target="_blank" rel="noreferrer" className="btn btn--small btn--ghost">
            {Icon.github} Code
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          index="03"
          title="Selected projects"
          sub="Things I've designed, built and shipped — each one is live and open source."
        />
        <div className="filters reveal" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} className={`filter ${filter === f ? 'is-active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        {/* keyed by filter so the cards replay their entry animation on each change */}
        <div className="projects" key={filter} aria-live="polite">
          {shown.map((p) => (
            <ProjectCard p={p} key={p.id} />
          ))}
        </div>
        <p className="more reveal">
          More experiments on{' '}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub {Icon.external}
          </a>
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead index="04" title="Skills & tools" />
        <div className="skills">
          {skills.map((g) => (
            <div className="skill-group reveal" key={g.group}>
              <h3>{g.group}</h3>
              <div className="chips">
                {g.items.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact reveal">
          <p className="section-head__index">
            05 <span>//</span>
          </p>
          <h2>
            Let's build something <span className="accent">great</span> together.
          </h2>
          <p>I'm open to frontend developer roles. My inbox is always open — I'll get back to you soon.</p>
          <a href={`mailto:${profile.email}`} className="btn btn--primary btn--large">
            {Icon.mail} {profile.email}
          </a>
          <div className="socials socials--center">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              {Icon.github}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              {Icon.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            Designed and built by {profile.name} · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
