import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useSiteContent } from '../src/lib/content';

/** Bloque de dudas, cerrado de entrada.
 *
 *  En reposo sólo se ve la cabecera y una flecha centrada: quien viene a
 *  contratar no tropieza con una lista de preguntas antes de decidir. Al
 *  desplegar aparecen todas, y cada una conserva su propio acordeón. */
export const FAQ: React.FC = () => {
  const { faq } = useSiteContent();
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#5a5854] md:text-xs">
            {faq.eyebrow}
          </span>

          <button
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="group mx-auto mt-4 flex flex-col items-center gap-6 md:gap-7"
          >
            <h2 className="font-serif text-4xl text-[#1a1918] md:text-5xl">{faq.heading}</h2>
            <span
              aria-hidden
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#1a1918]/30 text-[#1a1918] transition-all duration-300 group-hover:border-[#1a1918] md:h-10 md:w-10 ${
                expanded ? 'rotate-180' : ''
              }`}
            >
              &darr;
            </span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-12 divide-y divide-[#1a1918]/10 md:mt-16">
                {faq.questions.map((entry, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={entry.question} className="py-2">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
                      >
                        <span className="font-serif text-lg leading-snug text-[#1a1918] md:text-2xl">
                          {entry.question}
                        </span>
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#1a1918]/40 text-[#1a1918] transition-transform duration-300 md:h-7 md:w-7 ${
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
                            <p className="pb-6 pr-10 font-sans text-base leading-relaxed text-[#5a5854] md:pb-8 md:text-lg">
                              {entry.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
