import Reveal from './Reveal';
import { Stamp } from './marks';

const entries = [
  {
    no: '01',
    title: (
      <>
        Master&apos;s student <Stamp className="ml-2 align-middle">Registered · Nov 2026</Stamp>
      </>
    ),
    body: 'MA in Interdisciplinary Studies in English Language, Culture and Literature — Abdelmalek Essaâdi University, Faculty of Letters & Human Sciences, Tétouan.',
  },
  {
    no: '02',
    title: '120-Hr TESOL Certified',
    body: 'Accredited graduate from World TESOL Academy (UKRLP: 10087431, accredited by ACCREDITAT & CPD) — October 2026.',
  },
  {
    no: '03',
    title: 'Preply & 1-on-1 Tutoring',
    body: 'Delivering customized communicative English sessions to international learners (A1–C1), focusing on fluency and phonetics coaching.',
  },
  {
    no: '04',
    title: 'Abyssal Academy & EdTech',
    body: 'Leading an online English academy — authoring CLT curricula, integrating AI assessment workflows, and building the LMS.',
  },
];

const NowStrip = () => (
  <section className="bg-paper-deep border-y border-line" aria-label="Currently">
    <div className="container-page py-12 sm:py-16">
      <Reveal>
        <div className="flex items-baseline justify-between gap-4 mb-8">
          <h2 className="font-display italic font-semibold text-2xl sm:text-3xl text-ink lowercase">
            Currently
          </h2>
          <span className="kicker">November 2026</span>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
        {entries.map((e, i) => (
          <Reveal key={e.no} delay={i * 0.08}>
            <div className="h-full flex flex-col">
              <span className="font-mono text-xs font-semibold text-pen tracking-[0.2em] mb-3">{e.no}</span>
              <h3 className="font-display text-xl sm:text-[1.35rem] font-semibold leading-snug text-ink mb-2">
                {e.title}
              </h3>
              <p className="text-[0.95rem] text-ink-soft leading-relaxed">{e.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default NowStrip;
