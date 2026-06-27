import { Code, Bot, LineChart, CalendarCheck, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePhoto from '../img/profile-new.jpg';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Dev',
      description: 'Building elegant, responsive applications with Next.js, React, and TypeScript',
    },
    {
      icon: Bot,
      title: 'AI Specialist',
      description: 'Expert prompt engineering and API integrations (ChatGPT, Claude, Gemini)',
    },
    {
      icon: LineChart,
      title: 'Data Analyst',
      description: 'Driving decisions with SQL, Tableau, Power BI, and deep data analysis',
    },
    {
      icon: CalendarCheck,
      title: 'Virtual Assistant',
      description: 'Streamlining operations with Notion, Meta Suite, and Calendar Management',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black z-10">
      <div className="container-wide section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tighter">
              About Me.
            </h2>
            <div className="w-16 h-[2px] bg-white/20 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative group w-full max-w-sm mx-auto md:mx-0"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[4/5]">
                <img
                  src={profilePhoto}
                  alt="Yassir Gattoa"
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="space-y-8"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight tracking-tight">
                Developer, Educator & <span className="text-primary-500">AI Specialist</span>
              </h3>

              <div className="space-y-5 text-neutral-400 leading-relaxed text-base md:text-lg">
                <p>
                  I am a Full-stack developer, AI specialist, and data analyst with deep expertise in EdTech, online instruction, and digital operations. 
                </p>
                <p>
                  I'm the <strong className="text-white font-medium">Founder of Abyssal Academy</strong> (2025), where I independently built a complete learning platform using TypeScript, Next.js, SQL, and integrated AI tools.
                </p>
                <p>
                  I am exceptional at communicating with AI systems like ChatGPT and Claude, and I am a fast analytical problem-solver who rapidly identifies and deploys technical solutions. I am currently seeking remote roles where my technical skills and AI fluency can drive significant impact.
                </p>
              </div>

              <a
                href="https://abyssalacademy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary-400 transition-colors group"
              >
                Visit Abyssal Academy
                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glass-card-hover p-8 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-primary-400 mb-6">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-medium text-white mb-2 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-500 font-normal leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
