import Reveal from './Reveal';
import { SectionHead } from './marks';

const groups = [
  {
    title: 'TESOL & Pedagogy',
    rows: [
      { label: 'Methodology', value: 'Communicative Language Teaching (CLT) & Task-Based Pedagogy' },
      { label: '1-on-1 Tutoring', value: 'Pronunciation coaching, phonetics correction & fluency (Preply)' },
      { label: 'Curriculum', value: 'Curriculum alignment & structured lesson planning (CP to CM2)' },
      { label: 'Assessment', value: 'Standardized exam, quiz & rubric design' },
    ],
  },
  {
    title: 'EdTech & AI',
    rows: [
      { label: 'Visual Design', value: 'Canva — Phonics slides, visual aids & interactive vocabulary' },
      { label: 'AI Workflows', value: 'ChatGPT & Claude pipelines for automated assessment & lesson prep' },
      { label: 'LMS Platform', value: 'Abyssal Academy LMS (Next.js, SQL, Vercel) & Google Classroom' },
      { label: 'Productivity', value: 'Notion, Microsoft Office Suite & Google Workspace' },
    ],
  },
  {
    title: 'Languages & Core',
    rows: [
      { label: 'Arabic', value: 'Native proficiency — Darija & Modern Standard Arabic' },
      { label: 'English', value: 'C1 Advanced — Fluent instruction, phonetics & research' },
      { label: 'French', value: 'B1 Intermediate — Academic & administrative communication' },
      { label: 'Management', value: 'Classroom management, student engagement & time tracking' },
    ],
  },
  {
    title: 'Web & code',
    rows: [
      { label: 'Front-end', value: 'HTML · CSS · JavaScript · TypeScript · React · Tailwind' },
      { label: 'Back-end', value: 'Node.js · Next.js · Python · Flask · REST APIs' },
      { label: 'Data & Cloud', value: 'SQL · MySQL · PostgreSQL · Prisma · Vercel' },
      { label: 'Dev Tools', value: 'Git · GitHub · VS Code · Figma' },
    ],
  },
];

const Toolbox = () => (
  <section id="toolbox" className="scroll-mt-16 bg-paper-deep border-y border-line">
    <div className="container-page py-20 sm:py-28">
      <SectionHead no="06" title="Toolbox" note="Honest levels, no rating bars" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {groups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.06}>
            <div>
              <h3 className="font-display italic text-2xl text-ink lowercase mb-6 hairline-b pb-4">
                {group.title}
              </h3>
              <dl className="space-y-6">
                {group.rows.map((row) => (
                  <div key={row.label}>
                    <dt className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-pen mb-1.5">
                      {row.label}
                    </dt>
                    <dd className="text-ink-soft leading-relaxed text-[0.98rem]">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Toolbox;
