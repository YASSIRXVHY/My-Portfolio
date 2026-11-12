import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CircleMark, Underline } from './marks';

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="container-page pt-10 sm:pt-14 pb-14 sm:pb-20">
        {/* Masthead rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-between gap-3 hairline-t hairline-b py-3 mb-12 sm:mb-20"
        >
          <span className="kicker">Portfolio — N°02</span>
          <span className="kicker hidden sm:inline">Tangier · Morocco</span>
          <span className="kicker">Updated Nov 2026</span>
        </motion.div>

        {/* Headline */}
        <h1 className="headline text-ink text-[2.7rem] leading-[1.06] sm:text-6xl md:text-7xl lg:text-[5.4rem] max-w-5xl">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            I <CircleMark>teach</CircleMark> English.
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            I <Underline>study</Underline> literature.
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            &amp; I <span className="marker font-display italic font-semibold">build</span> for the web.
          </motion.span>
        </h1>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-10 sm:mt-14 grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-24 items-end"
        >
          <div>
            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-2xl">
              I&apos;m <strong className="font-semibold text-ink">Yassir Gattoa</strong> — a TESOL-certified English
              teacher &amp; EdTech specialist from Tangier, a brand-new Master&apos;s student at Abdelmalek Essaâdi
              University in Tétouan, and a self-taught web developer. This page is the honest version: what I do,
              what I&apos;m studying, and what I&apos;ve built.
            </p>

            {/* Meta links */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { label: 'GitHub', href: 'https://github.com/YASSIRXVHY' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/yassir-gattoa-53b9782aa' },
                { label: 'Abyssal Academy', href: 'https://abyssalacademy.vercel.app/' },
                { label: 'CV — PDF', href: './Yassir-Gattoa-CV.pdf' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink hover:text-pen transition-colors group"
                >
                  {l.label}
                  <ArrowUpRight
                    size={13}
                    className="inline -mt-1 ml-1 text-pen transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Red paragraph mark, like a printer's fleuron */}
          <span className="hidden lg:block font-display text-pen/80 text-6xl leading-none select-none" aria-hidden="true">
            ¶
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
