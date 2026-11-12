import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

/* ------------------------------------------------------------------ */
/* Hand-drawn "red pen" marks — the personality of the design.        */
/* ------------------------------------------------------------------ */

/** A hand-drawn wavy underline, like a teacher marking a key word. */
export const Underline = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={cn('relative inline-block', className)}>
    {children}
    <svg
      className="absolute left-0 right-0 w-full"
      viewBox="0 0 220 12"
      preserveAspectRatio="none"
      style={{ bottom: '-0.08em', height: '0.16em' }}
      aria-hidden="true"
    >
      <path
        d="M4 8 C 48 3, 92 11, 132 6 S 196 4, 216 8"
        fill="none"
        stroke="#B3392C"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

/** A rough ellipse circling a word, like circling something on paper. */
export const CircleMark = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={cn('relative inline-block', className)}>
    {children}
    <svg
      className="absolute pointer-events-none"
      viewBox="0 0 260 84"
      preserveAspectRatio="none"
      style={{ top: '-0.3em', left: '-0.2em', right: '-0.2em', bottom: '-0.28em', width: 'calc(100% + 0.4em)', height: 'calc(100% + 0.58em)' }}
      aria-hidden="true"
    >
      <path
        d="M136 7 C 84 2, 18 16, 14 40 C 10 66, 74 80, 138 76 C 200 72, 248 58, 245 36 C 242 14, 186 3, 122 9"
        fill="none"
        stroke="#B3392C"
        strokeWidth="3.4"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M122 9 C 106 10, 88 14, 76 19"
        fill="none"
        stroke="#B3392C"
        strokeWidth="3.4"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  </span>
);

/** A red rubber stamp, rotated a few degrees. */
export const Stamp = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={cn('stamp', className)}>{children}</span>
);

/** Small marginal note in red mono — like a note pencilled in a margin. */
export const MarginNote = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={cn('font-mono text-[0.65rem] sm:text-xs text-pen italic tracking-wide', className)}>
    {children}
  </span>
);

/* ------------------------------------------------------------------ */
/* Layout primitives                                                   */
/* ------------------------------------------------------------------ */

/** Consistent numbered section header: 01 —— About */
export const SectionHead = ({
  no,
  title,
  note,
}: {
  no: string;
  title: string;
  note?: string;
}) => (
  <div className="mb-12 sm:mb-16">
    <div className="flex items-center gap-4 sm:gap-6 mb-5">
      <span className="font-mono text-xs sm:text-sm font-semibold text-pen tracking-[0.2em]">{no}</span>
      <span className="h-px flex-1 bg-line-strong" aria-hidden="true" />
      {note && <span className="kicker hidden sm:block">{note}</span>}
    </div>
    <h2 className="headline text-[2.1rem] sm:text-5xl text-ink lowercase">{title}</h2>
  </div>
);
