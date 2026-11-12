import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NowStrip from '../components/NowStrip';
import About from '../components/About';
import Teaching from '../components/Teaching';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Writing from '../components/Writing';
import Toolbox from '../components/Toolbox';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const SECTION_IDS = ['about', 'teaching', 'education', 'projects', 'writing', 'toolbox', 'contact'];

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) current = id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="paper-grain" aria-hidden="true" />
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <NowStrip />
        <About />
        <Teaching />
        <Education />
        <Projects />
        <Writing />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
