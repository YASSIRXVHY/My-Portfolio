import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  activeSection: string;
}

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

/** Live local time in Tangier (Africa/Casablanca). */
const useLocalTime = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Africa/Casablanca',
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const Header = ({ activeSection }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const time = useLocalTime();

  const go = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-paper hairline-b">
      <div className="container-page flex items-center justify-between gap-6 h-16">
        {/* Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display italic font-semibold text-xl sm:text-2xl text-ink tracking-tight hover:text-pen transition-colors"
        >
          Yassir Gattoa
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={cn(
                'font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] transition-colors pb-0.5 border-b',
                activeSection === item.id
                  ? 'text-pen border-pen'
                  : 'text-ink-soft border-transparent hover:text-ink hover:border-line-strong'
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side: time + CV */}
        <div className="hidden lg:flex items-center gap-5">
          <span className="font-mono text-[0.68rem] tracking-[0.14em] text-ink-faint uppercase">
            Tangier {time}
          </span>
          <a
            href="./Yassir-Gattoa-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-pen border-b border-pen/50 hover:border-pen hover:bg-pen-wash transition-colors pb-0.5"
          >
            CV <ArrowUpRight size={11} className="inline -mt-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-ink"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-paper hairline-t" aria-label="Mobile">
          <div className="container-page py-6 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="flex items-baseline gap-4 py-3 text-left hairline-t first:border-t-0"
              >
                <span className="font-mono text-[0.65rem] text-pen">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-2xl lowercase text-ink">{item.label}</span>
              </button>
            ))}
            <div className="flex items-center justify-between pt-5 mt-2 hairline-t">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint">
                Tangier {time}
              </span>
              <a
                href="./Yassir-Gattoa-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] text-pen"
              >
                Download CV <ArrowUpRight size={11} className="inline -mt-0.5" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
