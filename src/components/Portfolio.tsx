import { useState } from 'react';
import { ExternalLink, Code, BookOpen, Github, ArrowUpRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      category: 'programming',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and real-time inventory management',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      category: 'programming',
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team collaboration features',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['TypeScript', 'React', 'Firebase'],
      link: '#',
    },
    {
      category: 'programming',
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization dashboard with interactive charts and forecasts',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
      tags: ['React', 'API', 'Charts'],
      link: '#',
    },
    {
      category: 'teaching',
      title: 'English Grammar Course',
      description: 'Comprehensive online course for intermediate learners with interactive exercises',
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg',
      tags: ['Curriculum', 'E-Learning', 'Assessment'],
      link: '#',
    },
    {
      category: 'teaching',
      title: 'Vocabulary Builder',
      description: 'Interactive vocabulary learning application with gamification and progress tracking',
      image: 'https://images.pexels.com/photos/261857/pexels-photo-261857.jpeg',
      tags: ['Education', 'Learning', 'Gamification'],
      link: '#',
    },
    {
      category: 'teaching',
      title: 'Speaking Practice Program',
      description: 'Structured speaking exercises for fluency development with native speaker feedback',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
      tags: ['Speaking', 'Fluency', 'Practice'],
      link: '#',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Selected Work
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                A collection of projects that showcase my skills in development and education
              </p>

              {/* Filter Buttons with Blue Theme */}
              <div className="inline-flex gap-2 p-2 bg-white rounded-full shadow-sm">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                    filter === 'all'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('programming')}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                    filter === 'programming'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Code size={16} />
                  Development
                </button>
                <button
                  onClick={() => setFilter('teaching')}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                    filter === 'teaching'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <BookOpen size={16} />
                  Education
                </button>
              </div>
            </div>
          </FadeInSection>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <a
                  href={project.link}
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* View Project Button */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <ArrowUpRight size={18} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Tag */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600">
                        {project.category === 'programming' ? (
                          <>
                            <Code size={12} />
                            Development
                          </>
                        ) : (
                          <>
                            <BookOpen size={12} />
                            Education
                          </>
                        )}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md"
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

          {/* Bottom CTA */}
          <FadeInSection delay={600}>
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6">
                Interested in working together?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
