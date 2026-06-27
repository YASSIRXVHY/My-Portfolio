import { Code, Bot, LineChart, CalendarCheck, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Full-Stack Development',
      icon: Code,
      description: 'Building scalable, responsive, and performant web applications.',
      skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'HTML5/CSS3', 'REST APIs']
    },
    {
      title: 'AI & Automation',
      icon: Bot,
      description: 'Leveraging AI tools to streamline complex workflows.',
      skills: ['Prompt Engineering', 'ChatGPT / Claude API', 'LLM Workflows']
    },
    {
      title: 'Data & Analytics',
      icon: LineChart,
      description: 'Transforming raw data into actionable insights.',
      skills: ['SQL', 'Tableau', 'Power BI', 'Excel']
    },
    {
      title: 'Virtual Assistance',
      icon: CalendarCheck,
      description: 'Managing operations with digital precision.',
      skills: ['Notion', 'Meta Business Suite', 'Calendar Mgmt']
    },
    {
      title: 'Languages',
      icon: Languages,
      description: 'Fluent communication across borders.',
      skills: ['Arabic (Native)', 'English (C1)', 'French (B1)']
    }
  ];

  return (
    <section id="skills" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="container-wide section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tighter">
            Expertise.
          </h2>
          <div className="w-16 h-[2px] bg-white/20 rounded-full"></div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <div
                className="glass-card glass-card-hover p-8 h-full flex flex-col justify-between group"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-primary-400 mb-6 group-hover:bg-primary-500/10 group-hover:text-primary-300 transition-colors">
                    <category.icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-500 font-normal leading-relaxed mb-8">
                    {category.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-white/[0.03] text-neutral-300 rounded-lg text-xs font-medium border border-white/[0.05] group-hover:border-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
