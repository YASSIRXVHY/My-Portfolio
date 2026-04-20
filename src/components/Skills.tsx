import { Code, GraduationCap } from 'lucide-react';
import FadeInSection from './FadeInSection';

const Skills = () => {
  const technicalSkills = [
    'JavaScript / TypeScript',
    'React & Next.js',
    'Node.js & Python',
    'SQL & Databases',
    'Tailwind CSS',
    'Git & DevOps',
  ];

  const teachingSkills = [
    'English Grammar',
    'Business English',
    'IELTS Preparation',
    'Curriculum Design',
    'Online Teaching',
    'Student Assessment',
  ];

  return (
    <section id="skills" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest uppercase text-neutral-500 mb-4">What I do best</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Skills & Expertise
              </h2>
            </div>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-12">
            <FadeInSection>
              <div className="bg-white p-8 border border-neutral-200">
                <h3 className="text-xl font-bold text-black mb-8 flex items-center gap-3">
                  <Code size={24} className="text-neutral-600" />
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="p-4 border border-neutral-100 hover:border-neutral-300 transition-colors">
                      <span className="text-neutral-700 text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="bg-white p-8 border border-neutral-200">
                <h3 className="text-xl font-bold text-black mb-8 flex items-center gap-3">
                  <GraduationCap size={24} className="text-neutral-600" />
                  Teaching Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {teachingSkills.map((skill, index) => (
                    <div key={index} className="p-4 border border-neutral-100 hover:border-neutral-300 transition-colors">
                      <span className="text-neutral-700 text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
