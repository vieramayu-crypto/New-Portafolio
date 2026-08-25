import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/collaborations';
import { useSiteContent } from '../src/lib/content';

interface ValueBlockProps {
  onOpenAvailability: () => void;
  /** Id de la siguiente seccion de hotel, para el boton "seguir viendo". */
  nextSectionId?: string;
}

/** Entrada compartida: desenfoque que se aclara y sube. Se reproduce una vez
 *  al entrar en pantalla y se queda fija, como pidió Mayurlin. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26, filter: 'blur(10px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-90px' },
  transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1] as const, delay },
});

export const ValueBlock: React.FC<ValueBlockProps> = ({ onOpenAvailability, nextSectionId }) => {
  const { valueBlock, milestones } = useSiteContent();
  const testimonial = TESTIMONIALS[0];

  const continueBrowsing = () => {
    if (!nextSectionId) return;
    document.getElementById(`hotel-${nextSectionId}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="value-block" className="relative w-full bg-[#fbfaf6] py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.span
          {...rise(0)}
          className="block text-[10px] font-sans uppercase tracking-[0.3em] text-[#5a5854] md:text-xs"
        >
          {valueBlock.eyebrow}
        </motion.span>

        {/* Afirmación — la escala manda */}
        <motion.h2
          {...rise(0.08)}
          className="mt-8 font-serif text-[11vw] leading-[1.02] text-[#1a1918] sm:text-[8vw] md:mt-12 md:text-[5.6vw] lg:text-[5.2vw]"
        >
          {valueBlock.claim}
        </motion.h2>

        {/* Las dos cosas */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          {valueBlock.benefits.map((benefit, i) => (
            <motion.p
              key={benefit}
              {...rise(0.18 + i * 0.1)}
              className="border-t border-[#1a1918]/15 pt-6 font-serif text-2xl leading-[1.35] text-[#1a1918] sm:text-3xl md:pt-8 md:text-[2.05rem]"
            >
              {benefit}
            </motion.p>
          ))}
        </div>

        {/* Para quién es */}
        <motion.p
          {...rise(0.4)}
          className="mt-16 max-w-3xl font-sans text-sm uppercase leading-relaxed tracking-[0.2em] text-[#5a5854] md:mt-20 md:text-base"
        >
          {valueBlock.audience}
        </motion.p>

        {/* Prueba: trayectoria */}
        <motion.div
          {...rise(0.48)}
          className="mt-16 grid grid-cols-3 gap-x-6 border-y border-[#1a1918]/15 py-10 md:mt-20 md:gap-x-12 md:py-12"
        >
          {milestones.items.map((item) => (
            <div key={item.label}>
              <div className="font-serif text-4xl leading-none text-[#1a1918] md:text-6xl">{item.value}</div>
              <div className="mt-3 text-[10px] font-sans uppercase leading-relaxed tracking-[0.2em] text-[#5a5854] md:mt-4 md:text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Prueba: una voz de cliente, estática. El carrusel completo vive en Contacto. */}
        {testimonial && (
          <motion.figure {...rise(0.56)} className="mt-14 max-w-3xl md:mt-16">
            <blockquote className="font-serif text-xl leading-[1.45] text-[#1a1918] md:text-[1.6rem]">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-[10px] font-sans uppercase tracking-[0.22em] text-[#5a5854] md:text-xs">
              {testimonial.author}
              {testimonial.role ? ` · ${testimonial.role}` : ''} · {testimonial.brandName}
            </figcaption>
          </motion.figure>
        )}

        {/* Acción — el CTA principal y la salida para seguir viendo el trabajo */}
        <motion.div {...rise(0.64)} className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-stretch md:mt-20">
          <button
            onClick={onOpenAvailability}
            className="bg-[#1a1918] px-10 py-5 text-xs font-sans uppercase tracking-[0.25em] font-medium text-[#f5f3ed] transition-colors hover:bg-[#5a5854] md:px-12 md:py-6 md:text-sm"
          >
            {valueBlock.ctaLabel}
          </button>
          {nextSectionId && (
            <button
              onClick={continueBrowsing}
              className="border border-[#1a1918] px-10 py-5 text-xs font-sans uppercase tracking-[0.25em] font-medium text-[#1a1918] transition-colors hover:bg-[#1a1918] hover:text-[#f5f3ed] md:px-12 md:py-6 md:text-sm"
            >
              Ver más trabajo
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};
