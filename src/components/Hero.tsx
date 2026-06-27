import { Mail, ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-8 px-4 md:px-8 bg-black min-h-screen flex flex-col overflow-hidden items-center justify-center">
      {/* Floating Island Card */}
      <motion.div 
        initial={{ y: 40, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.01, translateY: -5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-7xl flex-grow rounded-[2.5rem] md:rounded-[4rem] bg-[#0A0F1C] border border-white/10 hover:border-primary-500/30 transition-all duration-700 ease-out shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_80px_rgba(37,99,235,0.15)] flex flex-col items-center justify-center overflow-hidden group"
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          {/* Subtle blue glow dots at grid intersections */}
          <div className="absolute top-[8rem] left-[8rem] w-1.5 h-1.5 bg-primary-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
          <div className="absolute top-[16rem] right-[16rem] w-1.5 h-1.5 bg-primary-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
          <div className="absolute bottom-[8rem] left-[24rem] w-1.5 h-1.5 bg-primary-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-4 py-24 md:py-32 flex flex-col items-center">
          
          {/* Top Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-1.5 py-1.5 pr-4 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md cursor-pointer hover:bg-white/10 transition-colors"
          >
            <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">New</span>
            <span className="text-sm font-medium text-neutral-300">Available for new opportunities</span>
            <ArrowRight size={14} className="text-neutral-400" />
          </motion.div>

          {/* Headline - Elegant Serif */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white tracking-tight leading-[1.05] mb-6"
          >
            Developer that<br />
            <span className="italic opacity-90">drives impact</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-neutral-400 text-lg md:text-xl font-medium mb-12 max-w-2xl"
          >
            I'm Yassir Gattoa. I build scalable software, integrate AI systems, and design interfaces loved by users.
          </motion.p>

          {/* CTA Email Mimic Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center w-full max-w-md bg-white rounded-full p-1.5 shadow-[0_0_40px_rgba(37,99,235,0.15)] mb-12"
          >
            <div className="flex-grow flex items-center px-4">
              <Mail size={18} className="mr-3 text-neutral-400" />
              <input 
                type="text" 
                readOnly 
                value="yassirgattoa@gmail.com" 
                className="bg-transparent outline-none w-full text-sm font-medium text-neutral-800" 
              />
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 flex-shrink-0 active:scale-95"
            >
              Let's Talk <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6 text-neutral-500"
          >
            <a href="https://github.com/YASSIRXVHY" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/yassir-gattoa-53b9782aa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
