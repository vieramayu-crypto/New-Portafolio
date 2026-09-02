import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { publicImage, useSiteContent } from '../src/lib/content';

interface ValueBlockProps {
  onOpenAvailability: () => void;
}

/** Una foto real por cada forma de generar valor. La primera es el material
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
  const benefits = valueBlock.benefits;
  const [index, setIndex] = useState(0);

  // Sin bucle: entra una vez y se cambia haciendo clic en la foto.
  const next = () => setIndex((prev) => (prev + 1) % benefits.length);
  const current = benefits[index];
  const currentDetail = valueBlock.benefitDetails[index];

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
            envolviéndola. Se pasa de una a otra pulsando la foto.

            La medida de lectura se fija en la columna de la rejilla, nunca con
            un `max-w` en el párrafo: al lado de una foto flotada el max-width
            recorta la caja y el float recorta además las líneas dentro de esa
            caja ya estrecha, y el texto queda en una tira de 160px. */}
        <motion.div {...rise(0.1)} className="mt-20 md:mt-28">
          <div className="relative min-h-[380px] sm:min-h-[400px] md:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
              >
                <div className="md:grid md:grid-cols-[auto_minmax(0,780px)] md:gap-x-10 lg:gap-x-16">
                  <div
                    aria-hidden
                    className="mb-4 font-sans text-[10px] uppercase tracking-[0.3em] text-[#5a5854] md:mb-0 md:pt-3 md:text-xs"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div>
                    <button
                      onClick={next}
                      aria-label="See the other way we create value"
                      className="float-left mb-4 mr-5 block w-[38%] cursor-pointer sm:w-44 md:mb-4 md:mr-8 md:w-[210px] lg:w-[240px]"
                    >
                      <img
                        src={publicImage(BENEFIT_PHOTOS[index % BENEFIT_PHOTOS.length])}
                        alt=""
                        className="w-full object-cover transition-opacity duration-300 hover:opacity-85"
                        style={{ aspectRatio: '3 / 4' }}
                      />
                    </button>

                    <p className="font-serif text-[1.7rem] leading-[1.28] text-[#1a1918] sm:text-3xl md:text-[2.35rem] md:leading-[1.28] lg:text-[2.6rem]">
                      {current}
                    </p>

                    {currentDetail && (
                      <p className="mt-5 font-sans text-sm leading-[1.75] text-[#5f5b55] md:mt-6 md:text-[15px]">
                        {currentDetail}
                      </p>
                    )}
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
                  aria-label={`View ${String(i + 1).padStart(2, '0')}`}
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

        {/* Sin testimonio: las voces de cliente viven ahora en su propio bloque,
            más abajo en esta misma página, y repetirlas aquí duplicaba la cita. */}

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
