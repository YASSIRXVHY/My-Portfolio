import { useState, useRef, FormEvent } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal';
import { SectionHead } from './marks';

const channels = [
  { label: 'Email', value: 'yassirgattoa@gmail.com', href: 'mailto:yassirgattoa@gmail.com' },
  { label: 'Phone', value: '+212 675-789717', href: 'tel:+212675789717' },
  { label: 'GitHub', value: 'github.com/YASSIRXVHY', href: 'https://github.com/YASSIRXVHY' },
  { label: 'LinkedIn', value: 'in/yassir-gattoa', href: 'https://linkedin.com/in/yassir-gattoa-53b9782aa' },
  { label: 'Abyssal Academy', value: 'abyssalacademy.vercel.app', href: 'https://abyssalacademy.vercel.app/' },
  { label: 'Location', value: 'Tangier, Morocco — GMT+1', href: null },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm('service_5eprf78', 'template_lgywkfk', formRef.current!, 'xy_IA7Wo5i36Hg4tG')
      .then(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        if (formRef.current) formRef.current.reset();
      })
      .catch(() => {
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="container-page py-20 sm:py-28">
        <SectionHead no="07" title="Contact" note="Say hello" />

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <Reveal>
              <p className="font-display text-2xl sm:text-[1.8rem] leading-snug text-ink max-w-md">
                I&apos;m open to teaching positions, private English lessons, education-technology projects
                — and the occasional web development work.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 text-ink-soft leading-relaxed max-w-md">
                If you&apos;re a parent looking for lessons, a school, a student of literature, or someone
                with an idea at the intersection of teaching and code — write to me. I answer everything,
                usually within a day.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="mt-10">
                {channels.map((c) => (
                  <li key={c.label} className="ledger-row py-3.5 px-2 sm:px-4 -mx-2 sm:-mx-4 flex items-baseline justify-between gap-4">
                    <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-pen">
                      {c.label}
                    </span>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="link-ink font-display text-lg sm:text-xl text-ink text-right"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="font-display text-lg sm:text-xl text-ink">{c.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form ref={formRef} onSubmit={handleSubmit} className="paper-card p-7 sm:p-10" noValidate={false}>
              <p className="font-display italic text-2xl text-ink mb-8">Or write directly here —</p>

              <div className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="field-label">
                    Your name
                  </label>
                  <input type="text" id="user_name" name="user_name" required className="field" placeholder="Amina El Fassi" />
                </div>

                <div>
                  <label htmlFor="user_email" className="field-label">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="field"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="field resize-none"
                    placeholder="I'd like English lessons for my daughter / I have a project idea / …"
                  />
                </div>

                {submitStatus === 'success' && (
                  <p className="text-pen font-medium border-l-2 border-pen pl-4 text-sm">
                    Message sent — thank you. I&apos;ll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-pen-deep font-medium border-l-2 border-pen-deep pl-4 text-sm">
                    Something went wrong — please email me directly at yassirgattoa@gmail.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-ink text-paper font-mono text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 hover:bg-pen active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending…' : 'Send the message'}
                  <Send size={13} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-16 hairline-t pt-6 flex items-center gap-2 kicker">
            <ArrowUpRight size={13} className="text-pen" />
            Fastest way to reach me is email — or a LinkedIn message.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
