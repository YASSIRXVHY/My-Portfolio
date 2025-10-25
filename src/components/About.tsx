import { Code, BookOpen, Users, Award, Sparkles, Heart, Zap } from 'lucide-react';
import FadeInSection from './FadeInSection';
import profilePhoto from '../img/PXL_20250724_142119572.jpg';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Programming',
      description: 'Building innovative solutions with modern technologies',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      hoverBg: 'from-blue-50 to-transparent',
      hoverBorder: 'hover:border-blue-300',
    },
    {
      icon: BookOpen,
      title: 'Teaching',
      description: 'Helping students master English language skills',
      bgColor: 'bg-gradient-to-br from-green-500 to-green-600',
      hoverBg: 'from-green-50 to-transparent',
      hoverBorder: 'hover:border-green-300',
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Guiding learners in tech and language development',
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600',
      hoverBg: 'from-purple-50 to-transparent',
      hoverBorder: 'hover:border-purple-300',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering quality in every project',
      bgColor: 'bg-gradient-to-br from-orange-500 to-orange-600',
      hoverBg: 'from-orange-50 to-transparent',
      hoverBorder: 'hover:border-orange-300',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
                <Sparkles size={16} />
                Get to know me
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <FadeInSection>
              <div className="relative group">
                {/* Image with decorative border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                <div className="relative">
                  <img 
                    src={profilePhoto} 
                    alt="Yassir Gattoa - Programmer and English Teacher" 
                    className="w-full aspect-square rounded-2xl shadow-2xl object-cover border-4 border-white transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Heart size={24} className="text-white fill-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">200+</div>
                        <div className="text-xs text-gray-600">Happy Students</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
                  <Zap size={18} className="text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700">Dual Expertise</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Passionate About
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Code & Education
                  </span>
                </h3>

                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With a <span className="font-semibold text-blue-600">unique blend</span> of technical expertise and teaching experience, I bring a fresh perspective to both programming and education. My journey has taught me that the best solutions come from clear communication and thoughtful problem-solving.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    As a <span className="font-semibold text-gray-900">programmer</span>, I craft efficient, elegant code that solves real-world problems. As an <span className="font-semibold text-gray-900">English teacher</span>, I help students unlock their potential through language mastery.
                  </p>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                    <Sparkles size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 italic">
                      "Both roles share a common goal: empowerment through knowledge and continuous growth."
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Enhanced Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className={`group relative p-6 rounded-2xl bg-white border-2 border-gray-200 ${item.hoverBorder} transition-all hover:shadow-xl transform hover:-translate-y-2 duration-300`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 mb-4 rounded-xl ${item.bgColor} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                      <item.icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
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
