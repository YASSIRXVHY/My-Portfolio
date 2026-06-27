import { motion } from 'framer-motion';
import { SiDatacamp, SiPython } from 'react-icons/si';
import { FaGraduationCap, FaLinkedin, FaGlobe } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      provider: 'ALX Morocco',
      title: 'VA Certification & AI Career Essentials',
      date: 'Nov 2024 / 2024',
      icon: FaGraduationCap,
      color: 'text-primary-400',
    },
    {
      provider: 'Great Learning',
      title: 'SQL For Data Science, Python, Front-End',
      date: 'Sep 2024',
      icon: SiPython,
      color: 'text-amber-400',
    },
    {
      provider: 'DataCamp',
      title: 'Intermediate & Introduction to SQL',
      date: '2024',
      icon: SiDatacamp,
      color: 'text-emerald-400',
    },
    {
      provider: 'LinkedIn Learning',
      title: 'Data Analytics Foundations & Career Skills',
      date: 'Aug 2024',
      icon: FaLinkedin,
      color: 'text-blue-400',
    },
    {
      provider: 'Missouri State University',
      title: 'Global Teacher Education Exchange',
      date: '2026',
      icon: FaGlobe,
      color: 'text-rose-400',
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-black overflow-hidden border-t border-white/5 z-10 relative">
      <div className="container-wide section-padding relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tighter">
            Certifications.
          </h2>
          <div className="w-16 h-[2px] bg-white/20 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-6xl">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 border border-white/10 flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-white/5 flex-shrink-0 border border-white/5 ${cert.color}`}>
                  <cert.icon size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-medium text-white text-base mb-1 tracking-tight">{cert.title}</h3>
                  <p className="text-neutral-400 text-sm">{cert.provider}</p>
                  <p className="text-neutral-500 text-xs mt-3 font-semibold">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
