import React from 'react';
import { motion } from 'motion/react';
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
  const { valueBlock, milestones } = useSiteContent();
  const testimonial = TESTIMONIALS[0];

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

        {/* Las dos cosas, con el mismo esqueleto que "El proceso" y "Voces de
            la industria": cifra sobredimensionada de ancla, foto flotada y el
            texto en serif grande envolviéndola. */}
        <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
          {valueBlock.benefits.map((benefit, i) => (
            <motion.div
              key={benefit}
              {...rise(0.16 + i * 0.06)}
              className="md:grid md:grid-cols-[auto_1fr] md:gap-x-10 lg:gap-x-16"
            >
              <div
                aria-hidden
                className="mb-6 font-serif text-6xl leading-none text-[#1a1918]/25 md:mb-0 md:pt-2 md:text-8xl lg:text-9xl"
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* En móvil la foto va encima y el texto debajo a ancho completo:
                  flotarla dejaba el texto en una columna de cuatro palabras.
                  En escritorio pasa a dos columnas centradas entre sí y
                  alternando lado, para que un texto corto no deje un hueco
                  muerto debajo de la foto. */}
              <div
                className={`md:grid md:items-center md:gap-x-10 lg:gap-x-14 ${
                  i % 2 === 0 ? 'md:grid-cols-[auto_1fr]' : 'md:grid-cols-[1fr_auto]'
                }`}
              >
                <img
                  src={publicImage(BENEFIT_PHOTOS[i % BENEFIT_PHOTOS.length])}
                  alt=""
                  className={`mb-8 w-48 object-cover sm:w-60 md:mb-0 md:w-[250px] lg:w-[290px] ${
                    i % 2 === 0 ? '' : 'md:order-2'
                  }`}
                  style={{ aspectRatio: '3 / 4' }}
                />

                <p
                  className={`font-serif text-[1.45rem] leading-[1.3] text-[#1a1918] sm:text-3xl md:text-[2.35rem] md:leading-[1.28] lg:text-[2.6rem] ${
                    i % 2 === 0 ? '' : 'md:order-1'
                  }`}
                >
                  {benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trayectoria y para quién es, dentro de un mismo contenedor: los
            números dan el ritmo y la línea de público deja de flotar suelta. */}
        <motion.div
          {...rise(0.3)}
          className="mt-24 border-y border-[#1a1918]/15 md:mt-32 md:grid md:grid-cols-[1fr_auto]"
        >
          <div className="grid grid-cols-3 gap-x-6 py-10 md:gap-x-12 md:py-14 md:pr-12">
            {milestones.items.map((item) => (
              <div key={item.label}>
                <div className="font-serif text-4xl leading-none text-[#1a1918] md:text-6xl">{item.value}</div>
                <div className="mt-3 text-[10px] font-sans uppercase leading-relaxed tracking-[0.2em] text-[#5a5854] md:mt-4 md:text-xs">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <p className="max-w-sm border-t border-[#1a1918]/15 py-10 font-sans text-xs uppercase leading-relaxed tracking-[0.2em] text-[#5a5854] md:my-10 md:max-w-[19rem] md:border-l md:border-t-0 md:py-4 md:pl-12">
            {valueBlock.audience}
          </p>
        </motion.div>

        {/* Una voz de cliente, en el mismo lenguaje que el carrusel de Contacto */}
        {testimonial && (
          <motion.figure
            {...rise(0.38)}
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

        {/* Un solo botón: el de "ver más" vive ahora al entrar en la galería
            siguiente, para que no compitan entre sí. */}
        <motion.div {...rise(0.46)} className="mt-20 md:mt-28">
          <button
            onClick={onOpenAvailability}
            className="bg-[#1a1918] px-10 py-5 text-xs font-sans uppercase tracking-[0.25em] font-medium text-[#f5f3ed] transition-colors hover:bg-[#5a5854] md:px-12 md:py-6 md:text-sm"
          >
            {valueBlock.ctaLabel}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
