import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Writing from '../components/Writing';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'writing', 'certifications', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-[200]"
        style={{ scaleX }}
      />

      <Preloader onComplete={() => setLoading(false)} />

      {/* Base background */}
      <div className="fixed inset-0 bg-black z-0 pointer-events-none"></div>

      {/* Content */}
      <div className={`relative z-10 min-h-screen transition-opacity duration-700 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Header activeSection={activeSection} />
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Writing />
        <Certifications />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
