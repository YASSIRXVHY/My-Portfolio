import { Code, BookOpen, Users, Award, ExternalLink } from 'lucide-react';
import FadeInSection from './FadeInSection';
import profilePhoto from '../img/PXL_20250724_142119572.jpg';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Programming',
      description: 'Building innovative solutions with modern technologies',
    },
    {
      icon: BookOpen,
      title: 'Teaching',
      description: 'Helping students master English language skills',
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Guiding learners in tech and language development',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering quality in every project',
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest uppercase text-neutral-500 mb-4">Get to know me</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                About Me
              </h2>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <FadeInSection>
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Yassir Gattoa"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  Passionate About Code & Education
                </h3>

                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    With a unique blend of technical expertise and teaching experience, I bring a fresh perspective to both programming and education. My journey has taught me that the best solutions come from clear communication and thoughtful problem-solving.
                  </p>
                  <p>
                    As a programmer, I craft efficient, elegant code that solves real-world problems. As an English teacher, I help students unlock their potential through language mastery.
                  </p>
                  <p>
                    I'm also the <strong className="text-black">Founder of Abyssal Academy</strong>, an online English learning platform designed to help students worldwide master English from anywhere.
                  </p>
                </div>

                <a
                  href="https://abyssalacademy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black font-medium hover:text-neutral-600 transition-colors"
                >
                  Visit Abyssal Academy
                  <ExternalLink size={16} />
                </a>
              </div>
            </FadeInSection>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="p-6 border border-neutral-200 hover:border-black transition-colors">
                  <item.icon size={24} className="text-black mb-4" />
                  <h4 className="text-lg font-bold text-black mb-2">
                    {item.title}
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
