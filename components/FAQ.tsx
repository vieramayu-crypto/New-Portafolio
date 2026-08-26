import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useSiteContent } from '../src/lib/content';

export const FAQ: React.FC = () => {
  const { faq } = useSiteContent();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 md:py-28 border-t border-[#1a1918]/10">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#5a5854]">
            {faq.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1918]">{faq.heading}</h2>
        </div>

        <div className="divide-y divide-[#1a1918]/10 border-t border-b border-[#1a1918]/10">
          {faq.questions.map((entry, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={entry.question} className="py-2">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 text-left py-5 md:py-6 group"
                >
                  <span className="font-serif text-lg md:text-2xl text-[#1a1918] leading-snug">
                    {entry.question}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full border border-[#1a1918]/40 flex items-center justify-center text-[#1a1918] transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'group-hover:scale-110'
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 md:pb-8 pr-10 text-base md:text-lg text-[#5a5854] leading-relaxed font-sans">
                        {entry.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
