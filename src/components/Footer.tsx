import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Yassir Gattoa</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Programmer, English Teacher, and Founder of Abyssal Academy.
                Passionate about technology and education.
              </p>
              <a
                href="https://abyssalacademy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm text-neutral-300 hover:text-white transition-colors"
              >
                <ExternalLink size={14} />
                Visit Abyssal Academy
              </a>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-3">
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
                        className="text-sm text-neutral-400 hover:text-white transition-colors"
                      >
                        {item}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/YASSIRXVHY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yassir-gattoa-53b9782aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:yassirgattoa@gmail.com"
                  className="w-10 h-10 flex items-center justify-center border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 text-center">
            <p className="text-neutral-500 text-sm">
              {new Date().getFullYear()} Yassir Gattoa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
