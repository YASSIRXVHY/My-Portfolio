import { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      category: 'web',
      title: 'Abyssal Academy LMS',
      description: 'A comprehensive online English learning platform built from scratch. Features an interactive curriculum, real-time admin dashboard, AI-powered lesson generation, student progress tracking, and secure authentication.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      tags: ['Next.js', 'React', 'TypeScript', 'SQL', 'OpenAI API'],
      link: 'https://abyssalacademy.vercel.app/',
    },
    {
      category: 'software',
      title: 'School Management System',
      description: 'A robust desktop/web application for managing school operations. Includes modules for student enrollment, grade tracking, attendance, scheduling, and comprehensive reporting to streamline administration.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
      tags: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
      link: '#',
    }
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-black relative overflow-hidden border-t border-white/5 z-10">
      <div className="container-wide section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tighter">
                Selected Work.
              </h2>
              <div className="w-16 h-[2px] bg-white/20 rounded-full"></div>
            </div>

            {/* Filter Buttons */}
            <div className="inline-flex flex-wrap gap-2">
              {[
                { value: 'all', label: 'All' },
                { value: 'web', label: 'Web' },
                { value: 'software', label: 'Software' }
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setFilter(item.value)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    filter === item.value
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                key={project.title}
                className="group relative"
              >
                <div
                  className="glass-card glass-card-hover overflow-hidden h-full flex flex-col relative z-10 border-white/[0.08]"
                >
                  {/* Image Container */}
                  <div 
                    className="relative overflow-hidden aspect-[16/10] bg-white/5"
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/10 uppercase tracking-widest">
                        {project.category === 'web' && <ExternalLink size={12} strokeWidth={2} />}
                        {project.category === 'software' && <Code size={12} strokeWidth={2} />}
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-medium text-white group-hover:text-primary-400 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 rounded-full text-white hover:bg-primary-600 transition-colors shrink-0"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium text-neutral-300 bg-white/[0.03] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
