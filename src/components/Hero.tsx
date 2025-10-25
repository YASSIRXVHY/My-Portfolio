import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code, GraduationCap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import FadeInSection from './FadeInSection';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animated Counter Component
  const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTimestamp: number | null = null;
            const duration = 3000; // 3 seconds - slower animation

            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              
              // Easing function for smoother animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              setCount(Math.floor(easeOutQuart * target));

              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };

            window.requestAnimationFrame(step);
          }
        },
        { threshold: 0.5 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [target, hasAnimated]);

    return (
      <div ref={elementRef}>
        {count}{suffix}
      </div>
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <FadeInSection>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-8">
                <Sparkles size={16} className="animate-pulse" />
                Welcome to my portfolio
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
              <span className="block text-gray-900 mb-2">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Yassir Gattoa
              </span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4 text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                <Code size={28} className="text-blue-600" />
                Developer
              </span>
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                <GraduationCap size={28} className="text-blue-600" />
                Educator
              </span>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              I build elegant web applications and empower students to master English. 
              Combining technical expertise with educational passion to create meaningful impact.
            </p>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-md hover:shadow-lg"
              >
                View Projects
              </button>

              <a
                href="/MY CV FINAL.pdf"
                download="Yassir_Gattoa_CV.pdf"
                className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-medium hover:from-gray-800 hover:to-gray-900 transition-all shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  <Download size={18} className="group-hover:animate-bounce" />
                  Download CV
                </span>
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay={500}>
            <div className="flex items-center justify-center gap-6 mb-16">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all shadow-md hover:shadow-lg"
              >
                <Github size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all shadow-md hover:shadow-lg"
              >
                <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all shadow-md hover:shadow-lg"
              >
                <Mail size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </FadeInSection>

          {/* Stats Section with Animated Counters */}
          <FadeInSection delay={600}>
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16">
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                  <AnimatedCounter target={3} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Years Exp.</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                  <AnimatedCounter target={15} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Projects</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                  <AnimatedCounter target={200} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">Students</div>
              </div>
            </div>
          </FadeInSection>

          <button
            onClick={() => scrollToSection('about')}
            className="inline-block animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
