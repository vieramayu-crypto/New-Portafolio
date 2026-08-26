import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TESTIMONIALS } from '../data/collaborations';
import { publicImage, useSiteContent } from '../src/lib/content';

interface ValueBlockProps {
  onOpenAvailability: () => void;
}

/** Una foto real por cada cosa que deja un rodaje. La primera es el material
 *  en sí; la segunda, alguien descubriendo el sitio por primera vez. */
const BENEFIT_PHOTOS = ['sec5-gal03-cafe-cama-v.jpg', 'sec5-gal04-silueta-cortina-v.jpg'];

const AUTO_ADVANCE_MS = 7000;

/** Entrada compartida: desenfoque que se aclara y sube. Se reproduce una vez
 *  al entrar en pantalla y se queda fija, como pidió Mayurlin. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26, filter: 'blur(10px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-90px' },
  transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1] as const, delay },
});

export const ValueBlock: React.FC<ValueBlockProps> = ({ onOpenAvailability }) => {
  const { valueBlock, milestones } = useSiteContent();
  const testimonial = TESTIMONIALS[0];
  const benefits = valueBlock.benefits;
  const [index, setIndex] = useState(0);

  // Las dos cosas ya no se apilan una debajo de otra: ocupan la misma ranura y
  // se turnan solas, y se puede saltar entre ellas con los puntos.
  useEffect(() => {
    if (benefits.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % benefits.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [benefits.length]);

  const current = benefits[index];

  return (
    <section id="value-block" className="relative w-full bg-[#fbfaf6] py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
        {/* Afirmación — la escala manda, y ya no lleva rótulo encima porque lo
            único que hacía era decir lo mismo en pequeño. */}
        <motion.h2
          {...rise(0)}
          className="font-serif text-[11vw] leading-[1.02] text-[#1a1918] sm:text-[8vw] md:text-[5.2vw]"
        >
          {valueBlock.claim}
        </motion.h2>

        {/* Las dos cosas, en una sola ranura que se turna */}
        <motion.div {...rise(0.1)} className="mt-20 md:mt-28">
          <div className="relative flex min-h-[520px] flex-col items-center sm:min-h-[560px] md:min-h-[620px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex flex-col items-center"
              >
                <div
                  aria-hidden
                  className="font-serif text-5xl leading-none text-[#1a1918]/25 md:text-7xl"
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <img
                  src={publicImage(BENEFIT_PHOTOS[index % BENEFIT_PHOTOS.length])}
                  alt=""
                  className="mt-8 w-52 object-cover sm:w-60 md:mt-10 md:w-[280px]"
                  style={{ aspectRatio: '3 / 4' }}
                />

                <p className="mt-10 max-w-2xl font-serif text-[1.45rem] leading-[1.3] text-[#1a1918] sm:text-3xl md:mt-12 md:text-[2.2rem] md:leading-[1.28]">
                  {current}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {benefits.length > 1 && (
            <div className="flex items-center justify-center gap-3">
              {benefits.map((b, i) => (
                <button
                  key={b}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver ${String(i + 1).padStart(2, '0')}`}
                  aria-current={i === index}
                  className="p-1.5 -m-1.5"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      i === index ? 'h-2.5 w-2.5 bg-[#1a1918]' : 'h-1.5 w-1.5 bg-[#1a1918]/25'
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Trayectoria */}
        <motion.div
          {...rise(0.2)}
          className="mt-24 grid grid-cols-3 gap-x-6 border-y border-[#1a1918]/15 py-10 md:mt-32 md:gap-x-12 md:py-14"
        >
          {milestones.items.map((item) => (
            <div key={item.label}>
              <div className="font-serif text-4xl leading-none text-[#1a1918] md:text-6xl">{item.value}</div>
              <div className="mx-auto mt-3 max-w-[12rem] text-[10px] font-sans uppercase leading-relaxed tracking-[0.2em] text-[#5a5854] md:mt-4 md:text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Una voz de cliente */}
        {testimonial && (
          <motion.figure {...rise(0.28)} className="mt-24 flex flex-col items-center md:mt-32">
            <div aria-hidden className="font-serif text-5xl leading-none text-[#1a1918]/25 md:text-7xl">
              &ldquo;
            </div>

            {testimonial.photo && (
              <img
                src={testimonial.photo}
                alt=""
                className="mt-8 w-52 object-cover sm:w-60 md:mt-10 md:w-[280px]"
                style={{ aspectRatio: '3 / 4' }}
              />
            )}

            <blockquote className="mt-10 max-w-2xl font-serif text-[1.45rem] leading-[1.3] text-[#1a1918] sm:text-3xl md:mt-12 md:text-[2.2rem] md:leading-[1.28]">
              {testimonial.quote}
            </blockquote>

            <figcaption className="mt-8 md:mt-10">
              <div className="font-serif text-xl text-[#1a1918] md:text-2xl">{testimonial.author}</div>
              <div className="mt-1 text-[10px] font-sans uppercase tracking-[0.22em] text-[#5a5854] md:text-xs">
                {testimonial.role ? `${testimonial.role} · ` : ''}
                {testimonial.brandName}
              </div>
            </figcaption>
          </motion.figure>
        )}

        {/* Un solo botón, centrado y contenido. El de "ver más" vive al entrar
            en la galería siguiente, para que no compitan. */}
        <motion.div {...rise(0.36)} className="mt-20 md:mt-24">
          <button
            onClick={onOpenAvailability}
            className="bg-[#1a1918] px-8 py-4 text-[11px] font-sans uppercase tracking-[0.22em] font-medium text-[#f5f3ed] transition-colors hover:bg-[#5a5854] md:px-10 md:py-[1.15rem] md:text-xs"
          >
            {valueBlock.ctaLabel}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
