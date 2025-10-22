import { Briefcase, GraduationCap, Calendar, Building2, Sparkles } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Experience = () => {
  const experiences = [
    {
      type: 'programming',
      icon: Briefcase,
      title: 'Software Developer',
      organization: 'Tech Company',
      period: '2021 - Present',
      description:
        'Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      highlights: [
        'Built responsive web applications with React and TypeScript',
        'Implemented RESTful APIs and database solutions',
        'Improved application performance by 40%',
      ],
    },
    {
      type: 'teaching',
      icon: GraduationCap,
      title: 'Teacher of English',
      organization: 'Okole Dahabia',
      period: '2025 - Present',
      description:
        'Teaching English language skills to diverse student groups. Developed engaging curriculum and assessment methods to enhance student learning outcomes.',
      highlights: [
        'Designed comprehensive English language curriculum',
        'Improved student test scores by 35%',
        'Mentored over 200 students to language proficiency',
      ],
    },
    {
      type: 'programming',
      icon: Briefcase,
      title: 'Junior Developer',
      organization: 'Freelancer',
      period: '2023 - 2024',
      description:
        'Contributed to various web development projects in a fast-paced startup environment. Gained experience in full-stack development and agile methodologies.',
      highlights: [
        'Developed features for customer-facing applications',
        'Participated in code reviews and team meetings',
        'Learned modern development practices and tools',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Experience
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-lg text-gray-600">
                My journey through technology and education
              </p>
            </div>
          </FadeInSection>

          <div className="relative">
            {/* Animated Timeline */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 transform md:-translate-x-1/2 rounded-full shadow-lg"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <FadeInSection key={index} delay={index * 150}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot with Animation */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-2">
                      <div className="relative">
                        <div className="w-6 h-6 bg-white rounded-full border-4 border-blue-600 shadow-lg z-10 relative">
                          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <Sparkles className="text-blue-600 w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                      <div
                        className={`relative rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group ${
                          exp.type === 'programming'
                            ? 'bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100'
                            : 'bg-gradient-to-br from-green-50 to-white border-2 border-green-100'
                        }`}
                      >
                        {/* Decorative Corner Element */}
                        <div
                          className={`absolute top-0 right-0 w-24 h-24 transform translate-x-8 -translate-y-8 rounded-full opacity-20 ${
                            exp.type === 'programming' ? 'bg-blue-400' : 'bg-green-400'
                          }`}
                        ></div>

                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6 relative z-10">
                          <div
                            className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300 ${
                              exp.type === 'programming'
                                ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                                : 'bg-gradient-to-br from-green-500 to-green-600 text-white'
                            }`}
                          >
                            <exp.icon size={28} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-600 mb-2">
                              <Building2 size={16} />
                              <p className="text-sm font-medium">{exp.organization}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-blue-600" />
                              <p className="text-sm font-semibold text-blue-600">
                                {exp.period}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                          {exp.description}
                        </p>

                        {/* Highlights with Enhanced Design */}
                        <div className="space-y-3 relative z-10">
                          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                            Key Achievements
                          </h4>
                          {exp.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 group/item"
                            >
                              <div
                                className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 shadow-sm ${
                                  exp.type === 'programming'
                                    ? 'bg-blue-600'
                                    : 'bg-green-600'
                                }`}
                              ></div>
                              <p className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors">
                                {highlight}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Animated Border Effect */}
                        <div
                          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                            exp.type === 'programming'
                              ? 'bg-gradient-to-r from-blue-400/20 via-transparent to-blue-400/20'
                              : 'bg-gradient-to-r from-green-400/20 via-transparent to-green-400/20'
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <FadeInSection delay={500}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-sm text-gray-600 font-medium">Students Taught</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-orange-600 mb-2">40%</div>
                <div className="text-sm text-gray-600 font-medium">Performance Boost</div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Experience;
