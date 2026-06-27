import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/5 relative z-10">
      <div className="container-wide section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light mb-4 tracking-tighter">YASSIR<span className="text-primary-500">.</span></h3>
              <p className="text-neutral-400 leading-relaxed text-sm max-w-sm">
                Full-Stack Developer, English Teacher, and AI Specialist. Founder of Abyssal Academy. Passionate about empowering learning through technology.
              </p>
              <a
                href="https://abyssalacademy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-white hover:text-primary-400 transition-colors group"
              >
                Visit Abyssal Academy
                <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map(
                  (item) => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          const element = document.getElementById(
                            item.toLowerCase()
                          );
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                      >
                        {item}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/YASSIRXVHY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/yassir-gattoa-53b9782aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:yassirgattoa@gmail.com"
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5 transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-neutral-500 text-sm font-medium">
            <p>
              &copy; {new Date().getFullYear()} Yassir Gattoa. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Designed & Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
