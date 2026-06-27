import { useState, useRef, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        'service_5eprf78', 
        'template_lgywkfk',
        formRef.current!,
        'xy_IA7Wo5i36Hg4tG'
      )
      .then(
        () => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        () => {
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'yassirgattoa@gmail.com',
      link: 'mailto:yassirgattoa@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+212 772 529 274',
      link: 'tel:+212772529274'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Tangier, Morocco',
      link: null
    },
  ];

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden border-t border-white/5 z-10">
      <div className="container-wide section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tighter">
            Contact.
          </h2>
          <div className="w-16 h-[2px] bg-white/20 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-5 p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-white/5 text-primary-400 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-400 text-xs tracking-wider uppercase mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-white hover:text-primary-400 font-medium transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="glass-card p-8 relative overflow-hidden">
              <h3 className="text-xl font-medium mb-3 text-white tracking-tight">Open to Opportunities</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                I'm currently available for remote roles, freelance work, and exciting collaborations. Let's build something great together!
              </p>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 lg:p-10 border border-white/10"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-widest">
                    <User size={14} /> Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3.5 bg-black/50 rounded-xl border border-white/10 focus:border-primary-500 focus:bg-white/[0.03] focus:ring-1 focus:ring-primary-500 outline-none transition-all text-white placeholder:text-neutral-600 text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-widest">
                    <Mail size={14} /> Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3.5 bg-black/50 rounded-xl border border-white/10 focus:border-primary-500 focus:bg-white/[0.03] focus:ring-1 focus:ring-primary-500 outline-none transition-all text-white placeholder:text-neutral-600 text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-widest">
                    <MessageSquare size={14} /> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 bg-black/50 rounded-xl border border-white/10 focus:border-primary-500 focus:bg-white/[0.03] focus:ring-1 focus:ring-primary-500 outline-none transition-all resize-none text-white placeholder:text-neutral-600 text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 text-sm font-medium">
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-rose-500/10 text-rose-400 rounded-xl border border-rose-500/20 text-sm font-medium">
                    Failed to send. Please try again.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-500 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
