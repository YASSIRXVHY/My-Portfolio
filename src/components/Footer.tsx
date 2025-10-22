import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
              <p className="text-gray-400 leading-relaxed">
                Programmer and English Teacher, passionate about technology and
                education.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
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
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/YASSIRXVHY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yassir-gattoa-53b9782aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="yassirgattoa@gmail.com"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> Yassir
              Gattoa
            </p>
            <p className="text-gray-500 text-sm mt-2">
              {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
