import { Briefcase, GraduationCap, Calendar, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { TracingBeam } from './ui/TracingBeam';
import { cn } from '../lib/utils';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'Founder & Full-Stack Developer',
      organization: 'Abyssal Academy',
      period: '2025 - Present',
      description: 'Designed and built a full online English learning platform (TypeScript, Next.js, React). Developed an admin dashboard with real-time KPIs, student analytics, and SQL management. Integrated AI tools (ChatGPT/Claude APIs) to automate lesson prep and applied data visualization to monitor academy metrics.',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'English Teacher & Digital Educator',
      organization: 'Okole Dahabia School',
      period: '2025 - Present',
      description: 'Deliver curriculum-aligned English lessons to primary students. Integrate AI tools, digital aids, and visual content into instruction for enhanced engagement.',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Academic Researcher',
      organization: 'Abdelmalek Essaâdi University',
      period: '2022 - 2024',
      description: 'Researched magical realism and postcolonial literature, producing critical academic essays.',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: "Bachelor's - English Literature",
      organization: 'Abdelmalek Essaâdi University',
      period: 'Graduated 2026 | Tetouan',
      description: '',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'DEUG - English Studies',
      organization: 'Abdelmalek Essaâdi University',
      period: '2022 - 2024 | Tetouan',
      description: '',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Baccalaureate - Literary Track',
      organization: 'Abi Abass Sebti High School',
      period: '2020 - 2021 | Tangier',
      description: '',
    }
  ];


  return (
    <section id="experience" className="py-32 bg-black relative overflow-hidden border-t border-white/5 z-10">
      <div className="container-wide section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tighter">
            Experience.
          </h2>
          <div className="w-16 h-[2px] bg-white/20 rounded-full"></div>
        </motion.div>

        <TracingBeam className="px-6 mb-32">
          <div className="max-w-3xl mx-auto pt-4 relative">
            {experiences.map((item, index) => (
              <div key={`content-${index}`} className="mb-16 group">
                <div className="flex items-start md:items-center flex-col md:flex-row gap-4 md:gap-6 mb-4">
                  <div className={cn(
                    "w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center border transition-all duration-300",
                    item.type === 'work' ? "bg-primary-500/10 text-primary-400 border-primary-500/20" : "bg-white/5 text-neutral-400 border-white/10"
                  )}>
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-neutral-500 mt-2">
                      <span className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1 rounded-md border border-white/5">
                        <Building2 size={12} className="text-neutral-400" />
                        {item.organization}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1 rounded-md border border-white/5">
                        <Calendar size={12} className="text-neutral-400" />
                        {item.period}
                      </span>
                    </div>
                  </div>
                </div>
                
                {item.description && (
                  <div className="text-neutral-400 leading-relaxed text-sm md:text-base md:pl-[72px] mt-4">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </TracingBeam>


      </div>
    </section>
  );
};

export default Experience;
