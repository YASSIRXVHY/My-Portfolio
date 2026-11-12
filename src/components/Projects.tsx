import { ArrowUpRight, Github } from 'lucide-react';
import Reveal from './Reveal';
import { SectionHead } from './marks';

const projects = [
  {
    no: '01',
    title: 'Abyssal Academy',
    kind: 'Live product',
    year: '2025 —',
    body: 'My online English school — the whole thing: courses, live classes, student tracking and content. I teach on it every week, and I built every screen of it. This is the project where teaching and code finally became one job.',
    tags: ['React', 'TypeScript', 'SQL', 'EdTech'],
    href: 'https://abyssalacademy.vercel.app/',
    external: true,
  },
  {
    no: '02',
    title: 'Learning Dashboard',
    kind: 'Study platform',
    year: '2025',
    body: 'A study platform I use with my own students: flashcards for active recall, section-based MCQs, custom practice sessions, past-exam preparation, learning streaks and statistics. Built because my pupils kept losing their paper flashcards.',
    tags: ['React', 'Gamification'],
    href: 'https://github.com/YASSIRXVHY/Learning-Dashboard-pro',
  },
  {
    no: '03',
    title: 'School Management System',
    kind: 'Full-stack app',
    year: '2025',
    body: 'School administration, done properly: profiles, classes, attendance, grades, fees, notifications, an audit trail, PDF/Excel exports and a dark mode. Built full-stack with Node, Prisma and PostgreSQL.',
    tags: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
    href: 'https://github.com/YASSIRXVHY/school-management-system',
  },
  {
    no: '04',
    title: 'Books Library v2',
    kind: 'Catalogue app',
    year: '2024',
    body: 'A library catalogue app I rebuilt from the ground up as v2 — redesigned interface, faster navigation, and a lot of lessons learned from getting v1 wrong on purpose.',
    tags: ['JavaScript', 'DOM', 'Local storage'],
    href: 'https://github.com/YASSIRXVHY/books-library-project-V2',
  },
  {
    no: '05',
    title: 'DIMFLIX',
    kind: 'Personal experiment',
    year: '2025',
    body: 'A tongue-in-cheek streaming-service page that doubles as a dossier about me. Not everything on a portfolio has to be serious — this one is my reminder that building things should stay fun.',
    tags: ['React', 'UI'],
    href: 'https://github.com/YASSIRXVHY/DIMFLIX',
  },
];

const Projects = () => (
  <section id="projects" className="scroll-mt-16 bg-paper-deep border-y border-line">
    <div className="container-page py-20 sm:py-28">
      <SectionHead no="04" title="Projects" note="No stock photos — click through" />

      <div>
        {projects.map((p, i) => (
          <Reveal key={p.no} delay={i * 0.04}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ledger-row group grid md:grid-cols-[64px_1fr_auto] gap-x-8 gap-y-4 py-8 sm:py-10 px-2 sm:px-4 -mx-2 sm:-mx-4 items-start"
            >
              <span className="font-mono text-sm font-semibold text-pen tracking-[0.15em] pt-2">
                {p.no}
              </span>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-2xl sm:text-[2rem] font-semibold text-ink leading-tight group-hover:text-pen transition-colors">
                    {p.title}
                  </h3>
                  <span className="kicker normal-case tracking-[0.14em]">
                    {p.kind} · {p.year}
                  </span>
                </div>
                <p className="mt-3 text-ink-soft leading-[1.8] max-w-2xl">{p.body}</p>
                <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.65rem] tracking-[0.08em] text-ink-soft border border-line px-2 py-1 bg-paper-card"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="hidden md:flex w-11 h-11 items-center justify-center border border-line text-ink group-hover:border-pen group-hover:text-pen group-hover:bg-pen-wash transition-colors mt-2">
                {p.external ? <ArrowUpRight size={18} /> : <Github size={18} />}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-10 text-ink-soft">
          …and a shelf of earlier experiments —{' '}
          <a
            href="https://github.com/YASSIRXVHY?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="link-ink"
          >
            sixteen public repositories
          </a>{' '}
          at various stages of embarrassment. The good ones are above.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Projects;
