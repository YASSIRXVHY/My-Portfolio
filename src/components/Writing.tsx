import { ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { SectionHead, MarginNote } from './marks';

const articles = [
  {
    kicker: 'Academic research',
    title: 'Heart of Darkness: A Postcolonial Analysis',
    deck: 'Imperialism, madness and the human condition in Conrad’s Congo — an essay in the tradition of the postcolonial critique I specialised in.',
    meta: 'Spring 2024 · 12 min read',
    slug: 'heart-of-darkness',
  },
  {
    kicker: 'EdTech',
    title: 'The Role of AI in Modern Language Acquisition',
    deck: 'What Large Language Models actually change for learners heading to C1 — automated feedback, personalised curricula, and why the human teacher stays.',
    meta: 'Jan 2025 · 8 min read',
    slug: 'ai-language-acquisition',
  },
  {
    kicker: 'Software engineering',
    title: 'Building Scalable Platforms with Next.js',
    deck: 'The architectural decisions behind Abyssal Academy’s platform — routing, state, authentication and the trade-offs nobody warns you about.',
    meta: 'Dec 2024 · 15 min read',
    slug: 'scalable-platforms-nextjs',
  },
];

const Writing = () => (
  <section id="writing" className="scroll-mt-16">
    <div className="container-page py-20 sm:py-28">
      <SectionHead no="05" title="Writing & Research" note="Essays & papers" />

      <Reveal>
        <p className="font-display italic text-xl sm:text-2xl text-ink-soft leading-relaxed max-w-3xl mb-14">
          My research lives where magical realism, postcolonial literature and discourse analysis meet —
          think <span className="text-ink">Márquez, Okri, Rushdie</span>. These days the writing splits in
          two: seminar papers for the Master&apos;s, and field notes on teaching with technology.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-10 md:gap-8">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 0.06} className="h-full">
            <Link to={`/article/${a.slug}`} className="group flex flex-col h-full">
              <span className="kicker text-pen">{a.kicker}</span>
              <h3 className="font-display text-[1.45rem] leading-snug font-semibold text-ink mt-3 group-hover:text-pen transition-colors">
                {a.title}
              </h3>
              <p className="text-ink-soft text-[0.98rem] leading-[1.75] mt-3 flex-1">{a.deck}</p>
              <span className="mt-5 font-mono text-xs text-ink-faint tracking-wide flex items-center gap-2 hairline-t pt-4">
                {a.meta}
                <ArrowRight size={13} className="text-pen transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Unpublished mémoire — the honest kind of entry */}
      <Reveal>
        <div className="mt-14 ledger-row grid md:grid-cols-[auto_1fr] gap-4 md:gap-8 items-baseline py-7 px-2 sm:px-4 -mx-2 sm:-mx-4">
          <span className="kicker text-pen shrink-0">Final-year thesis</span>
          <p className="text-lg sm:text-xl text-ink font-display leading-relaxed">
            <span className="font-semibold">“Magical Realism in Ben Okri&apos;s The Famished Road”</span>{' '}
            <Lock size={15} className="inline text-ink-faint -mt-1 mx-0.5" />
            <span className="text-ink-soft font-serif italic text-base">
              — mémoire de licence, defended at Abdelmalek Essaâdi University
            </span>
            <MarginNote className="block mt-2">
              not published online — ask me about it, happy to share
            </MarginNote>
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Writing;
