import { useState } from 'react';
import { Code, BookOpen, ArrowUpRight, ExternalLink } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      category: 'academy',
      title: 'Abyssal Academy',
      description: 'Online English learning platform - Founded and developed a comprehensive online academy for teaching English worldwide',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      tags: ['React', 'TypeScript', 'Education'],
      link: 'https://abyssalacademy.vercel.app/',
      isExternal: true,
    },
    {
      category: 'programming',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce with payment integration',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      isExternal: false,
    },
    {
      category: 'programming',
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
      tags: ['TypeScript', 'React', 'Firebase'],
      link: '#',
      isExternal: false,
    },
    {
      category: 'teaching',
      title: 'English Grammar Course',
      description: 'Comprehensive online course for intermediate learners',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      tags: ['Curriculum', 'E-Learning'],
      link: '#',
      isExternal: false,
    },
    {
      category: 'teaching',
      title: 'Vocabulary Builder',
      description: 'Interactive vocabulary learning with gamification',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
      tags: ['Education', 'Learning'],
      link: '#',
      isExternal: false,
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest uppercase text-neutral-500 mb-4">Featured work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Selected Projects
              </h2>

              {/* Filter Buttons */}
              <div className="inline-flex gap-2 mt-8">
                {[
                  { value: 'all', label: 'All' },
                  { value: 'academy', label: 'Academy' },
                  { value: 'programming', label: 'Dev' },
                  { value: 'teaching', label: 'Edu' }
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setFilter(item.value)}
                    className={`px-5 py-2 text-sm font-medium transition-colors ${
                      filter === item.value
                        ? 'bg-black text-white'
                        : 'bg-white text-neutral-600 hover:text-black border border-neutral-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <FadeInSection key={index} delay={index * 80}>
                <a
                  href={project.link}
                  target={project.isExternal ? '_blank' : undefined}
                  rel={project.isExternal ? 'noopener noreferrer' : undefined}
                  className="group block bg-white border border-neutral-200 hover:border-black transition-colors"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-neutral-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-white ${
                        project.category === 'academy'
                          ? 'text-black'
                          : 'text-neutral-600'
                      }`}>
                        {project.category === 'academy' && <ExternalLink size={12} />}
                        {project.category === 'programming' && <Code size={12} />}
                        {project.category === 'teaching' && <BookOpen size={12} />}
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                    {/* Hover arrow */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs text-neutral-500 bg-neutral-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
