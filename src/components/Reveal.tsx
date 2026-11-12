import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * A quiet, one-time reveal. Small distance, soft ease — content should
 * feel like it settles onto the page, not fly in.
 */
const Reveal = ({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
