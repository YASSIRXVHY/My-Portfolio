import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Yassir completely transformed our digital presence. His ability to fuse clean code with deep understanding of educational tools is unmatched. Abyssal Academy is a testament to his skill.",
      author: "Dr. Sarah Mitchell",
      role: "Education Consultant",
      company: "EdTech Innovators"
    },
    {
      quote: "As a teacher, Yassir brings an incredible technological edge to his lessons. As a developer, he brings pedagogical clarity to his interfaces. A rare and brilliant combination.",
      author: "Ahmed R.",
      role: "Principal",
      company: "Okole Dahabia School"
    },
    {
      quote: "His research on postcolonial literature was insightful, but watching him apply that same rigorous analytical thinking to data structures and web development has been astonishing.",
      author: "Prof. L. Benali",
      role: "Department Head",
      company: "Abdelmalek Essaâdi University"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-black relative overflow-hidden border-t border-white/5 z-10">
      <div className="container-wide section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tighter">
            What They Say.
          </h2>
          <div className="w-16 h-[2px] bg-white/20 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="h-full"
            >
              <div className="glass-card p-8 h-full flex flex-col relative group hover:border-white/20 transition-colors duration-500">
                <Quote size={40} className="text-white/5 absolute top-6 right-6 group-hover:text-primary-500/10 transition-colors duration-500" />
                
                <p className="text-neutral-400 leading-relaxed font-normal text-sm md:text-base mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center flex-shrink-0 text-neutral-500 font-serif italic">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">{testimonial.author}</h4>
                    <p className="text-neutral-500 text-xs mt-0.5">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
