const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-paper border-t border-ink">
      <div className="container-page py-14 sm:py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12">
          {/* Name & colophon */}
          <div>
            <p className="font-display italic font-semibold text-3xl">Yassir Gattoa</p>
            <p className="mt-4 text-paper/70 leading-relaxed max-w-sm text-[0.98rem]">
              TESOL Certified English Teacher &amp; EdTech Specialist in Tangier. Master&apos;s student at
              Abdelmalek Essaâdi University in Tétouan. Founder of Abyssal Academy. Builder of this website.
            </p>
          </div>

          {/* Index */}
          <div>
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-paper/50 mb-5">
              Index
            </p>
            <ul className="space-y-2.5">
              {[
                { id: 'about', label: 'About' },
                { id: 'teaching', label: 'Teaching & Work' },
                { id: 'education', label: 'Education' },
                { id: 'projects', label: 'Projects' },
                { id: 'writing', label: 'Writing' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-paper/80 hover:text-paper text-[0.95rem] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-paper/50 mb-5">
              Elsewhere
            </p>
            <ul className="space-y-2.5 text-[0.95rem]">
              <li>
                <a
                  href="https://github.com/YASSIRXVHY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/80 hover:text-paper transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yassir-gattoa-53b9782aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/80 hover:text-paper transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://abyssalacademy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/80 hover:text-paper transition-colors"
                >
                  Abyssal Academy
                </a>
              </li>
              <li>
                <a
                  href="./Yassir-Gattoa-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/80 hover:text-paper transition-colors"
                >
                  CV — PDF
                </a>
              </li>
              <li>
                <a
                  href="mailto:yassirgattoa@gmail.com"
                  className="text-paper/80 hover:text-paper transition-colors"
                >
                  yassirgattoa@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-14 pt-7 border-t border-paper/20 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <p className="font-mono text-[0.65rem] tracking-[0.12em] text-paper/50 uppercase">
            © {new Date().getFullYear()} Yassir Gattoa · Tangier, Morocco
          </p>
          <p className="font-mono text-[0.65rem] tracking-[0.12em] text-paper/50 uppercase text-right">
            Set in Fraunces, Newsreader &amp; IBM Plex Mono · React + Vite + Tailwind · No template
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
