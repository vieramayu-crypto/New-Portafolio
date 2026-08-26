import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TESTIMONIALS } from '../data/collaborations';
import { publicImage, useSiteContent } from '../src/lib/content';

interface ValueBlockProps {
  onOpenAvailability: () => void;
}

/** Una foto real por cada cosa que deja un rodaje. La primera es el material
 *  en sí; la segunda, alguien descubriendo el sitio por primera vez. */
const BENEFIT_PHOTOS = ['sec5-gal03-cafe-cama-v.jpg', 'sec5-gal04-silueta-cortina-v.jpg'];

/** Entrada compartida: desenfoque que se aclara y sube. Se reproduce una vez
 *  al entrar en pantalla y se queda fija, como pidió Mayurlin. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26, filter: 'blur(10px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-90px' },
  transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1] as const, delay },
});

export const ValueBlock: React.FC<ValueBlockProps> = ({ onOpenAvailability }) => {
  const { valueBlock } = useSiteContent();
  const testimonial = TESTIMONIALS[0];
  const benefits = valueBlock.benefits;
  const [index, setIndex] = useState(0);

  // Sin bucle: entra una vez y se cambia haciendo clic en la foto.
  const next = () => setIndex((prev) => (prev + 1) % benefits.length);
  const current = benefits[index];

  return (
    <section id="value-block" className="relative w-full bg-[#fbfaf6] py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.h2
          {...rise(0)}
          className="text-center font-serif text-[11vw] leading-[1.02] text-[#1a1918] sm:text-[8vw] md:text-[5.2vw]"
        >
          {valueBlock.claim}
        </motion.h2>

        {/* Las dos cosas comparten una ranura, con el mismo esqueleto que
            "Voces de la industria": ancla discreta, foto flotada y el texto
            envolviéndola. Se pasa de una a otra pulsando la foto. */}
        <motion.div {...rise(0.1)} className="mt-20 md:mt-28">
          <div className="relative min-h-[430px] sm:min-h-[400px] md:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
              >
                <div className="md:grid md:grid-cols-[auto_1fr] md:gap-x-10 lg:gap-x-16">
                  <div
                    aria-hidden
                    className="mb-4 font-sans text-[10px] uppercase tracking-[0.3em] text-[#5a5854] md:mb-0 md:pt-3 md:text-xs"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div>
                    <button
                      onClick={next}
                      aria-label="Ver la otra cosa que deja un rodaje"
                      className="float-left mb-3 mr-5 block w-28 cursor-pointer sm:w-36 md:mb-4 md:mr-8 md:w-[210px] lg:w-[240px]"
                    >
                      <img
                        src={publicImage(BENEFIT_PHOTOS[index % BENEFIT_PHOTOS.length])}
                        alt=""
                        className="w-full object-cover transition-opacity duration-300 hover:opacity-85"
                        style={{ aspectRatio: '3 / 4' }}
                      />
                    </button>

                    <p className="font-serif text-[1.45rem] leading-[1.3] text-[#1a1918] sm:text-3xl md:text-[2.35rem] md:leading-[1.28] lg:text-[2.6rem]">
                      {current}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {benefits.length > 1 && (
            <div className="flex items-center justify-center gap-3 pt-12 md:pt-14">
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

        {/* Una voz de cliente, en el mismo lenguaje que el carrusel de Contacto */}
        {testimonial && (
          <motion.figure
            {...rise(0.28)}
            className="mt-24 md:mt-32 md:grid md:grid-cols-[auto_1fr] md:gap-x-10 lg:gap-x-16"
          >
            <div
              aria-hidden
              className="mb-4 font-serif text-6xl leading-none text-[#1a1918]/25 md:mb-0 md:text-8xl lg:text-9xl"
            >
              &ldquo;
            </div>

            <div>
              {testimonial.photo && (
                <img
                  src={testimonial.photo}
                  alt=""
                  className="float-left mb-3 mr-5 w-28 object-cover sm:w-36 md:mb-4 md:mr-8 md:w-[210px] lg:w-[240px]"
                  style={{ aspectRatio: '3 / 4' }}
                />
              )}

              <blockquote className="font-serif text-[1.45rem] leading-[1.3] text-[#1a1918] sm:text-3xl md:text-[2.35rem] md:leading-[1.28] lg:text-[2.6rem]">
                {testimonial.quote}
              </blockquote>

              <figcaption className="clear-left pt-8 md:pt-10">
                <div className="font-serif text-xl text-[#1a1918] md:text-2xl">{testimonial.author}</div>
                <div className="mt-1 text-[10px] font-sans uppercase tracking-[0.22em] text-[#5a5854] md:text-xs">
                  {testimonial.role ? `${testimonial.role} · ` : ''}
                  {testimonial.brandName}
                </div>
              </figcaption>
            </div>
          </motion.figure>
        )}

        <motion.div {...rise(0.36)} className="mt-20 text-center md:mt-24">
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
