import { useState, useRef, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import FadeInSection from './FadeInSection';

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
    <section id="contact" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest uppercase text-neutral-500 mb-4">Get in touch</p>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Contact
              </h2>
            </div>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <FadeInSection delay={100}>
              <div className="space-y-8">
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white border border-neutral-200"
                      >
                        <div className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-black text-sm">{item.title}</h3>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-neutral-600 hover:text-black transition-colors text-sm"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-neutral-600 text-sm">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-black text-white p-8">
                  <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    I'm currently available for freelance work and exciting collaborations. Let's build something great together!
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Right Side - Form */}
            <FadeInSection delay={200}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white p-8 border border-neutral-200"
              >
                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="user_name"
                      className="flex items-center gap-2 text-sm font-medium text-black mb-2"
                    >
                      <User size={16} className="text-neutral-500" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-black outline-none transition-colors text-black placeholder:text-neutral-400"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="user_email"
                      className="flex items-center gap-2 text-sm font-medium text-black mb-2"
                    >
                      <Mail size={16} className="text-neutral-500" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-black outline-none transition-colors text-black placeholder:text-neutral-400"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="flex items-center gap-2 text-sm font-medium text-black mb-2"
                    >
                      <MessageSquare size={16} className="text-neutral-500" />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-black outline-none transition-colors resize-none text-black placeholder:text-neutral-400"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200">
                      <p className="text-green-800 text-sm font-medium">Message sent! I'll get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200">
                      <p className="text-red-800 text-sm font-medium">Failed to send. Please try again.</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-black text-white font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
