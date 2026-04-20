import { Briefcase, GraduationCap, Calendar, Building2, Globe } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Experience = () => {
  const experiences = [
    {
      icon: Globe,
      title: 'Founder & Lead Instructor',
      organization: 'Abyssal Academy',
      period: '2024 - Present',
      description:
        'Founded and operate Abyssal Academy, an online English learning platform. Teaching English to students worldwide while managing curriculum development, platform operations, and student success.',
      highlights: [
        'Founded and launched Abyssal Academy online platform',
        'Teaching 200+ students from diverse backgrounds',
        'Developed comprehensive online curriculum for all levels',
        'Managing all aspects of the academy operations',
      ],
    },
    {
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
    <section id="experience" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest uppercase text-neutral-500 mb-4">My journey</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Experience
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="bg-white p-8 border border-neutral-200 hover:border-black transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0">
                      <exp.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-neutral-500 text-sm mb-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-black mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-neutral-600">
                        <Building2 size={14} />
                        <p className="text-sm font-medium">{exp.organization}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-black mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-neutral-600">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Stats Section */}
          <FadeInSection delay={500}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white border border-neutral-200">
                <div className="text-3xl font-bold text-black mb-1">4+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center p-6 bg-white border border-neutral-200">
                <div className="text-3xl font-bold text-black mb-1">200+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Students</div>
              </div>
              <div className="text-center p-6 bg-white border border-neutral-200">
                <div className="text-3xl font-bold text-black mb-1">15+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center p-6 bg-white border border-neutral-200">
                <div className="text-3xl font-bold text-black mb-1">1</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Academy</div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Experience;
