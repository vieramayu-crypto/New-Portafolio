import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HERO_PHOTO } from '../data/media';
import { useSiteContent } from '../src/lib/content';

/** Cuánto permanece cada palabra antes de dar paso a la siguiente.
 *  AnimatePresence en modo "wait" encadena salida y entrada, así que el ciclo
 *  real es BLOCK_MS + OUT_S + IN_S: hay que dejar margen o la palabra pasa más
 *  tiempo desvanecida que a la vista. */
const BLOCK_MS = 4200;
const OUT_S = 0.5;
const IN_S = 0.7;

const TEXTURE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85';

export const HeroSection: React.FC = () => {
  const content = useSiteContent();
  const { fixedLine, blocks } = content.hero;
  const { milestones } = content;
  const [blockIndex, setBlockIndex] = useState(0);

  // Sólo rota la segunda línea: "Tu hotel" se queda fijo.
  useEffect(() => {
    if (blocks.length <= 1) return;
    const timer = setInterval(() => {
      setBlockIndex((prev) => (prev + 1) % blocks.length);
    }, BLOCK_MS);
    return () => clearInterval(timer);
  }, [blocks.length]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#fbfaf6] text-[#1a1918] font-sans select-none">
      <img
        src={TEXTURE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-25 anim-fade-in"
      />

      <img
        src={HERO_PHOTO}
        alt="Mayu Travel — producción visual para hoteles de lujo"
        className="absolute inset-0 h-full w-full object-cover object-[56%_28%] md:object-center"
      />

      {/* Velo sólo bajo el bloque de texto, que ahora vive en una esquina.
          La foto se queda entera: nada de banda ni de cortina de lado a lado. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.68) 22%, rgba(0,0,0,0.30) 44%, rgba(0,0,0,0) 64%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.22) 34%, rgba(0,0,0,0) 62%)',
        }}
      />

      {/* Bloque único abajo a la izquierda: titular, subtítulo y trayectoria,
          uno debajo de otro y sin ocupar media pantalla. */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-14 sm:px-10 sm:pb-16 md:px-16 md:pb-20">
        <h1 className="font-serif text-[13vw] leading-[1.04] text-white sm:text-[10vw] md:text-[6.4vw]">
          <span className="block">{fixedLine}</span>
          <span className="relative block">
            <AnimatePresence mode="wait">
              <motion.span
                key={blocks[blockIndex]}
                initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: IN_S, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{
                  opacity: 0,
                  y: -14,
                  filter: 'blur(10px)',
                  transition: { duration: OUT_S, ease: [0.4, 0, 1, 1] },
                }}
                className="block italic"
              >
                {blocks[blockIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.7 }}
          className="mt-6 max-w-[34ch] font-sans text-sm leading-relaxed text-white/85 md:mt-7 md:max-w-[48ch] md:text-base"
        >
          {content.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.9 }}
          className="mt-7 flex max-w-[38ch] flex-wrap items-baseline gap-x-6 gap-y-1 md:mt-9 md:max-w-[70ch] md:gap-x-10"
        >
          {milestones.items.map((item) => (
            <span
              key={item.label}
              className="text-[9px] font-sans uppercase tracking-[0.2em] text-white/80 md:text-[10px]"
            >
              <span className="text-white">{item.value}</span> {item.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
