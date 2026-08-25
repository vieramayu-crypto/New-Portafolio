import React from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { useSiteContent } from '../src/lib/content';

interface ClosingCtaProps {
  onOpenAvailability: () => void;
  onNavigate: (page: Page) => void;
}

/** Cierre de Inicio: la pagina no termina en una foto suelta, termina en una
 *  invitacion. Misma entrada que el bloque de valor — sube y se queda fija. */
export const ClosingCta: React.FC<ClosingCtaProps> = ({ onOpenAvailability, onNavigate }) => {
  const { closingCta, contact } = useSiteContent();

  return (
    <section className="relative w-full bg-[#1a1918] px-6 pb-24 pt-32 text-[#f5f3ed] md:px-12 md:pb-28 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl font-serif text-[11vw] leading-[1.04] sm:text-[8vw] md:text-[5.6vw] lg:text-[5.2vw]"
        >
          {closingCta.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.12 }}
          className="mt-10 max-w-2xl font-sans text-sm uppercase leading-relaxed tracking-[0.2em] text-[#f5f3ed]/70 md:mt-12 md:text-base"
        >
          {contact.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.22 }}
          className="mt-14 flex flex-col gap-4 sm:flex-row md:mt-16"
        >
          <button
            onClick={onOpenAvailability}
            className="bg-[#f5f3ed] px-10 py-5 text-xs font-sans uppercase tracking-[0.25em] font-medium text-[#1a1918] transition-colors hover:bg-[#f5f3ed]/80 md:px-12 md:py-6 md:text-sm"
          >
            {closingCta.ctaLabel}
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="border border-[#f5f3ed]/50 px-10 py-5 text-xs font-sans uppercase tracking-[0.25em] font-medium text-[#f5f3ed] transition-colors hover:border-[#f5f3ed] hover:bg-[#f5f3ed] hover:text-[#1a1918] md:px-12 md:py-6 md:text-sm"
          >
            Conocernos
          </button>
        </motion.div>

        <motion.a
          href={`mailto:${contact.emailAddress}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-12 inline-block font-serif text-xl text-[#f5f3ed]/80 underline decoration-[#f5f3ed]/30 underline-offset-8 transition-colors hover:text-[#f5f3ed] md:mt-14 md:text-2xl"
        >
          {contact.emailAddress}
        </motion.a>
      </div>
    </section>
  );
};
