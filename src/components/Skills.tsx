import { Code, GraduationCap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'Python', level: 80 },
    { name: 'SQL', level: 85 },
  ];

  const teachingSkills = [
    { name: 'English Grammar', level: 95 },
    { name: 'Communication', level: 92 },
    { name: 'Curriculum Design', level: 88 },
    { name: 'Student Engagement', level: 90 },
    { name: 'Assessment', level: 87 },
    { name: 'Classroom Management', level: 89 },
  ];

  const AnimatedNumber = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTimestamp: number | null = null;
            const duration = 2000; // 2 seconds

            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              
              setCount(Math.floor(progress * target));

              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };

            window.requestAnimationFrame(step);
          }
        },
        { threshold: 0.5 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [target, hasAnimated]);

    return <span ref={elementRef}>{count}</span>;
  };

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-900 font-medium">{name}</span>
        <span className="text-blue-600 font-medium">
          <AnimatedNumber target={level} />%
        </span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg mr-3 flex items-center justify-center">
                  <Code className="text-blue-600" size={20} />
                </div>
                Technical Skills
              </h3>
              <div>
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-lg mr-3 flex items-center justify-center">
                  <GraduationCap className="text-green-600" size={20} />
                </div>
                Teaching Skills
              </h3>
              <div>
                {teachingSkills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
