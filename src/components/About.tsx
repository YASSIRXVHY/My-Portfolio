import Reveal from './Reveal';
import { SectionHead, MarginNote } from './marks';
import portrait from '../img/portrait.jpg';

const About = () => (
  <section id="about" className="scroll-mt-16">
    <div className="container-page py-20 sm:py-28">
      <SectionHead no="01" title="About" note="Tangier → Tétouan" />

      <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20">
        {/* Photo — sticks alongside the text on desktop */}
        <Reveal className="order-2 lg:order-1">
          <figure className="photo-frame max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:sticky lg:top-24">
            <img
              src={portrait}
              alt="Yassir Gattoa — studio portrait"
              className="w-full h-auto block grayscale-[15%] contrast-[1.02]"
            />
            <figcaption className="photo-caption flex items-baseline justify-between gap-3">
              <span>Studio portrait, Tangier — 2025</span>
              <span className="text-pen">fig. 1</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Text */}
        <div className="order-1 lg:order-2 space-y-6 text-[1.08rem] sm:text-lg leading-[1.85] text-ink-soft">
          <Reveal>
            <p className="text-2xl sm:text-[1.7rem] leading-snug text-ink font-display font-normal">
              I&apos;m from Tangier. I fell in love with English through books, and it has been deciding my
              life ever since.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p>
              I completed my <strong className="text-ink font-semibold">Bachelor of Arts in English
              Literature</strong> from Abdelmalek Essaâdi University (2025 — July 2026), specialising in
              postcolonial literature, magical realism and discourse analysis — which is a fancy way of
              saying I spent three years reading{' '}
              <strong className="text-ink font-semibold">Márquez, Okri and Rushdie</strong> and writing
              about them. My final-year mémoire was titled{' '}
              <em className="text-ink">&ldquo;Magical Realism in Ben Okri&apos;s The Famished Road.&rdquo;</em>{' '}
              Today, I continue that academic journey as a Master&apos;s student in Interdisciplinary
              Studies in English Language, Culture and Literature in Tétouan.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p>
              On the pedagogical side, I am a <strong className="text-ink font-semibold">Certified
              TESOL/TEFL English Teacher</strong> (120-hour accredited graduate from World TESOL Academy,
              UKRLP: 10087431) and EdTech specialist. My classroom background spans primary education
              (CP to CM2) delivering curriculum-aligned instruction with Canva visual aids and automated
              AI assessment pipelines (ChatGPT, Claude), alongside customized 1-on-1 international
              tutoring on <strong className="text-ink font-semibold">Preply</strong> focusing on
              conversational fluency and pronunciation coaching.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p>
              To bring structured communicative language teaching to a wider audience, I founded{' '}
              <a
                href="https://abyssalacademy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-ink"
              >
                Abyssal Academy
              </a>
              , engineering its proprietary LMS platform from scratch with Next.js, SQL and Vercel.
              The other half of my life is code: trained at{' '}
              <strong className="text-ink font-semibold">SoliCode</strong> in Tangier, building real-world
              tools with React, TypeScript and modern web architectures. Teaching and programming feed
              each other — every tool I build exists because a learner or classroom needed it.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="hairline-t pt-6">
              <MarginNote>n.b. — </MarginNote>
              I designed and coded this page myself. React, TypeScript and Tailwind — no template, no
              website builder. It&apos;s supposed to feel like a well-kept notebook; that&apos;s the vibe I
              aim for in my work too.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
