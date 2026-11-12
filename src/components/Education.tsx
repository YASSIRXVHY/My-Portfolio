import { Check } from 'lucide-react';
import Reveal from './Reveal';
import { SectionHead, Stamp } from './marks';
import graduation from '../img/graduation.jpg';

const education = [
  {
    period: '2026 — 2028',
    title: (
      <>
        Master&apos;s in Interdisciplinary Studies in English Language, Culture and Literature
        <Stamp className="ml-3 align-middle hidden sm:inline-block">New · Nov 2026</Stamp>
      </>
    ),
    place: 'Abdelmalek Essaâdi University, Faculty of Letters & Human Sciences — Tétouan',
    note: 'In progress — registered November 2026. Literature, cultural theory, and linguistics under one roof: exactly where I want to be.',
    isNew: true,
  },
  {
    period: '2025 — July 2026',
    title: 'Bachelor of Arts (BA) in English Literature',
    place: 'Abdelmalek Essaâdi University',
    note: 'Specialisation: postcolonial literature, magical realism, discourse analysis. Final-year mémoire: “Magical Realism in Ben Okri’s The Famished Road.”',
  },
  {
    period: '2024 — 2025',
    title: 'DEUG in English Studies',
    place: 'Abdelmalek Essaâdi University',
    note: 'Foundations of linguistics, literature, and cultural civilisation — alongside self-taught software engineering.',
  },
  {
    period: '2020 — 2021',
    title: 'High School Baccalaureate — Literary Track',
    place: 'Abi Abass Sebti High School — Tangier',
    note: 'English, Arabic, and philosophy. Where the passion for English literature began.',
  },
];

const certificates = [
  {
    name: '120-Hour TESOL / TEFL Certificate (Accredited)',
    org: 'World TESOL Academy (ACCREDITAT & CPD • UKRLP: 10087431 • Cert: WTA222138658)',
    year: 'Oct 2026',
    isNew: true,
  },
  { name: 'Preply Language Teaching Certificate', org: 'Preply', year: '2026', isNew: true },
  { name: 'Encouraging Your Learners to Speak', org: 'RS Education', year: '2026', isNew: true },
  { name: 'Global Teacher Education Exchange', org: 'Missouri State University', year: '2026', isNew: false },
  { name: 'ALX Certified Virtual Assistant', org: 'ALX', year: 'Nov 2024', isNew: false },
  { name: 'AI Career Essentials', org: 'ALX', year: '2024', isNew: false },
  { name: 'Web Development', org: 'SoliCode, Tangier', year: '2024', isNew: false },
  { name: 'SQL for Data Science', org: 'Great Learning', year: '2024', isNew: false },
  { name: 'Intro & Intermediate SQL', org: 'DataCamp', year: '2024', isNew: false },
  { name: 'Data Analytics Foundations', org: 'LinkedIn Learning', year: '2024', isNew: false },
];

const Education = () => (
  <section id="education" className="scroll-mt-16">
    <div className="container-page py-20 sm:py-28">
      <SectionHead no="03" title="Education & Certificates" note="The paper trail" />

      {/* Timeline + graduation photo */}
      <div className="grid lg:grid-cols-[7fr_5fr] gap-14 lg:gap-20 items-start">
        <div>
          {education.map((item, i) => (
            <Reveal key={item.period + i} delay={i * 0.04}>
              <article className="relative border-l-2 border-line pl-6 sm:pl-8 pb-10 last:pb-0">
                <span
                  className={`absolute -left-[7px] top-2 w-3 h-3 rounded-full border-2 ${
                    item.isNew ? 'bg-pen border-pen' : 'bg-paper border-line-strong'
                  }`}
                  aria-hidden="true"
                />
                <p className="font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-pen uppercase mb-2">
                  {item.period}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink leading-snug">
                  {item.title}
                </h3>
                <p className="kicker mt-2 normal-case tracking-[0.1em]">{item.place}</p>
                <p className="mt-3 text-ink-soft leading-[1.8] max-w-xl">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <figure className="photo-frame">
            <img
              src={graduation}
              alt="Yassir Gattoa on graduation day at Abdelmalek Essaâdi University, holding his thesis"
              className="w-full h-auto block"
            />
            <figcaption className="photo-caption">
              <span>Graduation day, Abdelmalek Essaâdi University. Thesis in hand.</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* Certificates — full-width ledger */}
      <Reveal delay={0.05}>
        <div className="mt-16 lg:mt-20">
          <h3 className="font-display italic text-2xl sm:text-3xl text-ink lowercase mb-8">
            Certificates
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-14">
            {certificates.map((cert) => (
              <li key={cert.name + cert.org} className="ledger-row flex items-center gap-3 py-3.5 px-2 -mx-2">
                <Check size={15} strokeWidth={2.5} className="text-pen shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-ink font-medium leading-snug">{cert.name}</p>
                  <p className="text-sm text-ink-faint">{cert.org}</p>
                </div>
                {cert.isNew ? (
                  <Stamp className="shrink-0">New</Stamp>
                ) : (
                  <span className="font-mono text-xs text-ink-faint shrink-0">{cert.year}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Education;
