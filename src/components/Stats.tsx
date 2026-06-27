import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 4, label: 'Years Exp.', suffix: '+' },
    { value: 18, label: 'Repos', suffix: '+' },
    { value: 200, label: 'Students', suffix: '+' },
    { value: 1, label: 'English', suffix: 'C' },
  ];

  return (
    <section className="relative z-20 py-16 border-y border-white/5 bg-white/[0.01]">
      <div className="container-wide section-padding">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group px-4">
                <div className="text-4xl md:text-5xl font-light text-white transition-colors flex items-center justify-center tracking-tighter">
                  {stat.suffix === 'C' && 'C'}
                  <CountUp 
                    start={0} 
                    end={stat.value} 
                    duration={2.5} 
                    useEasing={true}
                    redraw={true}
                  >
                    {({ countUpRef }) => (
                      <span ref={countUpRef} />
                    )}
                  </CountUp>
                  {stat.suffix !== 'C' && stat.suffix}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-[0.25em] mt-3 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
