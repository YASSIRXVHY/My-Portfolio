import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { SectionHead } from './marks';

const jobs = [
  {
    period: '2026 — now',
    role: 'Online English Tutor',
    org: 'Preply · Remote',
    body: 'Deliver customized 1-on-1 online English sessions to international students across A1–C1 proficiency levels, prioritizing practical communication. Specialize in conversational fluency, pronunciation coaching, phonetics correction, and personalized study roadmaps.',
  },
  {
    period: '2025 — now',
    role: 'Founder & Lead English Educator',
    org: 'Abyssal Academy · Remote',
    body: 'Founded an online English academy; authored comprehensive communicative curricula, standardized exam banks, and digital lesson workflows. Developed the academy’s proprietary LMS platform (Next.js, SQL, Vercel) integrating scheduling, content delivery, and student lifecycle management.',
    link: { label: 'abyssalacademy.vercel.app', href: 'https://abyssalacademy.vercel.app/' },
  },
  {
    period: '2025 — 2026',
    role: 'English Teacher & Digital Solutions Specialist',
    org: 'Okole Dahabia School (Private) · Tangier',
    body: 'Delivered curriculum-aligned English instruction across primary grades (CP to CM2), leveraging multimedia tools to elevate engagement. Designed professional visual aids, phonics slides, and interactive vocabulary modules with Canva, and engineered automated assessment pipelines using AI tools (ChatGPT, Claude).',
  },
  {
    period: '2023 — 2025',
    role: 'Academic Researcher',
    org: 'Abdelmalek Essaâdi University · Tétouan',
    body: 'Researched magical realism and postcolonial literature, produced critical essays, and guided peers through the harder theory with simplified explanations — my first taste of teaching, before I had a classroom of my own.',
  },
  {
    period: '2024',
    role: 'Developer Student',
    org: 'SoliCode & personal projects · Tangier',
    body: 'A year of building small, real things: full-stack applications, school management portals, interactive learning dashboards, and database-backed platforms. Learning by shipping.',
    link: { label: 'github.com/YASSIRXVHY', href: 'https://github.com/YASSIRXVHY' },
  },
];

const Teaching = () => (
  <section id="teaching" className="scroll-mt-16 bg-paper-deep border-y border-line">
    <div className="container-page py-20 sm:py-28">
      <SectionHead no="02" title="Teaching & Work" note="The day job" />

      <div>
        {jobs.map((job, i) => (
          <Reveal key={job.role + job.period} delay={i * 0.04}>
            <article className="ledger-row grid md:grid-cols-[170px_1fr] gap-x-10 gap-y-3 py-8 sm:py-10 px-2 sm:px-4 -mx-2 sm:-mx-4">
              <div className="font-mono text-xs sm:text-[0.8rem] font-medium tracking-[0.14em] text-pen uppercase pt-1.5">
                {job.period}
              </div>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-tight">
                  {job.role}
                </h3>
                <p className="kicker mt-2 normal-case tracking-[0.16em]">{job.org}</p>
                <p className="mt-4 text-ink-soft leading-[1.8] max-w-2xl">{job.body}</p>
                {job.link && (
                  <a
                    href={job.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-ink inline-flex items-center gap-1 mt-3 font-mono text-xs tracking-wide"
                  >
                    {job.link.label} <ArrowUpRight size={13} className="text-pen" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Teaching;
