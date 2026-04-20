import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black text-white pt-20"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <FadeInSection>
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-500 mb-8">
              Programmer & Educator
            </p>
          </FadeInSection>

          <FadeInSection delay={100}>
            <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.02em] mb-8">
              Yassir Gattoa
            </h1>
          </FadeInSection>

          <FadeInSection delay={200}>
            <p className="text-neutral-400 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
              I build elegant web applications and empower students to master English.
              Founder of Abyssal Academy.
            </p>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-neutral-200 transition-colors"
              >
                Let's Talk
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
              >
                View Projects
              </button>
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="flex items-center gap-6 mb-16">
              <a
                href="https://github.com/YASSIRXVHY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yassir-gattoa-53b9782aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:yassirgattoa@gmail.com"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://abyssalacademy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm"
              >
                <ExternalLink size={14} />
                Abyssal Academy
              </a>
            </div>
          </FadeInSection>

          {/* Stats */}
          <FadeInSection delay={500}>
            <div className="flex gap-8 pt-8 border-t border-neutral-800">
              <div>
                <div className="text-2xl font-bold text-white">4+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Students</div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
