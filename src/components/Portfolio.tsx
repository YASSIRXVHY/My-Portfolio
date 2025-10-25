import { useState } from 'react';
import { Code, BookOpen, ArrowUpRight, Sparkles, Zap } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      category: 'programming',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce with payment integration',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      category: 'programming',
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['TypeScript', 'React', 'Firebase'],
      link: '#',
    },
    {
      category: 'programming',
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization dashboard',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
      tags: ['React', 'API', 'Charts'],
      link: '#',
    },
    {
      category: 'teaching',
      title: 'English Grammar Course',
      description: 'Comprehensive online course for intermediate learners',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
      tags: ['Curriculum', 'E-Learning'],
      link: '#',
    },
    {
      category: 'teaching',
      title: 'Vocabulary Builder',
      description: 'Interactive vocabulary learning with gamification',
      image: 'https://images.pexels.com/photos/261857/pexels-photo-261857.jpeg',
      tags: ['Education', 'Learning'],
      link: '#',
    },
    {
      category: 'teaching',
      title: 'Speaking Practice Program',
      description: 'Structured speaking exercises for fluency development',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
      tags: ['Speaking', 'Fluency'],
      link: '#',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-16 overflow-hidden">
      {/* Animated background blobs - REMOVED since App.tsx has them */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Compact Header */}
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-full text-xs font-bold text-blue-700 mb-5 shadow-sm">
                <Zap size={14} className="animate-pulse" />
                FEATURED WORK
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Selected Projects
                </span>
              </h2>
              
              <p className="text-sm text-gray-600 max-w-xl mx-auto mb-8">
                Showcasing development and education expertise
              </p>

              {/* Sleek Filter Pills */}
              <div className="inline-flex gap-2 p-1 bg-white rounded-xl shadow-lg border border-gray-200">
                {[
                  { value: 'all', label: 'All', icon: null },
                  { value: 'programming', label: 'Dev', icon: Code },
                  { value: 'teaching', label: 'Edu', icon: BookOpen }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.value}
                      onClick={() => setFilter(item.value)}
                      className={`px-5 py-2 rounded-lg font-semibold text-xs transition-all flex items-center gap-1.5 ${
                        filter === item.value
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md scale-105'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {Icon && <Icon size={14} />}
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeInSection>

          {/* Ultra-Modern Grid with Masonry Effect */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, index) => (
              <FadeInSection key={index} delay={index * 80}>
                <a
                  href={project.link}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border-2 border-transparent hover:border-blue-400 transition-all duration-500 transform hover:-translate-y-3"
                >
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-blue-400/0 to-blue-600/0 group-hover:from-blue-400/10 group-hover:via-blue-500/5 group-hover:to-blue-600/10 transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Image with parallax */}
                  <div className="relative overflow-hidden aspect-[16/11] bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                    
                    {/* Floating icon */}
                    <div className="absolute top-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                    
                    {/* Category badge on image */}
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 shadow-lg">
                        {project.category === 'programming' ? (
                          <><Code size={12} /> DEV</>
                        ) : (
                          <><BookOpen size={12} /> EDU</>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Compact Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Minimal tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-semibold bg-blue-50 text-blue-700 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover indicator bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </a>
              </FadeInSection>
            ))}
          </div>

          {/* Sleek CTA */}
          <FadeInSection delay={500}>
            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-sm hover:shadow-2xl transition-all hover:scale-105 shadow-lg"
              >
                <Sparkles size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                Let's Collaborate
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 20s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default Portfolio;
