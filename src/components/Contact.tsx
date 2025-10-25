import { useState, useRef, FormEvent } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Sparkles, 
  User, 
  MessageSquare,
  Clock,
  Globe,
  ArrowRight
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import FadeInSection from './FadeInSection';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
        (result) => {
          console.log('SUCCESS!', result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          console.log('FAILED...', error.text);
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
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  return (
    <section id="contact" className="relative py-16 overflow-hidden">
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Compact Header */}
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-blue-200 rounded-full text-sm font-semibold text-blue-700 mb-6 hover:scale-105 transition-transform shadow-md">
                <Sparkles size={16} className="animate-pulse" />
                Let's Work Together
                <Sparkles size={16} className="animate-pulse" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="block text-gray-900 mb-1">Get In</span>
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Drop me a message and I'll get back to you as soon as possible!
              </p>
            </div>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Compact Contact Cards */}
            <FadeInSection delay={100}>
              <div className="space-y-5">
                {/* Contact Info Cards - 2x2 Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={index}
                        className="group relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:-translate-y-1"
                      >
                        {/* Icon */}
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-md">
                          <Icon className="text-white" size={20} />
                        </div>
                        
                        <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h3>
                        
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="text-gray-600 hover:text-blue-600 transition-colors text-xs font-medium break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-xs font-medium">{item.value}</p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Beautiful "Let's Work Together" Card */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                  
                  <div className="relative">
                    <Globe size={40} className="mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold mb-3">Open to Opportunities</h3>
                    <p className="text-white/90 leading-relaxed">
                      I'm currently available for freelance work and exciting collaborations. Let's build something great together!
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Right Side - Compact Form */}
            <FadeInSection delay={200}>
              <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50"
              >
                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label 
                      htmlFor="user_name" 
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                    >
                      <User size={16} className={`transition-all ${focusedField === 'name' ? 'text-blue-600' : 'text-gray-400'}`} />
                      Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label 
                      htmlFor="user_email" 
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                    >
                      <Mail size={16} className={`transition-all ${focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'}`} />
                      Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                    >
                      <MessageSquare size={16} className={`transition-all ${focusedField === 'message' ? 'text-blue-600' : 'text-gray-400'}`} />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg animate-fadeIn">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-green-800 text-sm font-medium">Message sent! I'll get back to you soon.</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg animate-fadeIn">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <p className="text-red-800 text-sm font-medium">Failed to send. Please try again.</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                          <span>Send Message</span>
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </div>
              </form>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
