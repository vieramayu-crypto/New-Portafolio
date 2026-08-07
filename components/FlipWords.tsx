import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface FlipWordsProps {
  words: string[];
  className?: string;
  intervalMs?: number;
}

export const FlipWords: React.FC<FlipWordsProps> = ({ words, className = '', intervalMs = 2400 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [words.length, intervalMs]);

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 8, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
