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
    <section className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-[#fbfaf6] text-[#1a1918] font-sans select-none">
      {/* Zona de foto. El titular se reparte dentro: una línea arriba y otra
          abajo, dejando a la persona respirar entre las dos. */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src={TEXTURE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-25 anim-fade-in"
        />

        <img
          src={HERO_PHOTO}
          alt="Mayu Travel — producción visual para hoteles de lujo"
          className="absolute inset-0 h-full w-full object-cover object-[46%_28%] md:object-center"
        />

        {/* Dos velos elípticos anclados a las esquinas donde vive el titular,
            en vez de una cortina que apague media foto. La persona, en el centro
            derecha, queda fuera de los dos. Medido contra el píxel más claro
            bajo cada línea. */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              'radial-gradient(95% 42% at 2% 12%, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.62) 42%, rgba(0,0,0,0.18) 72%, rgba(0,0,0,0) 88%)',
              'radial-gradient(95% 66% at 2% 88%, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.70) 38%, rgba(0,0,0,0.26) 68%, rgba(0,0,0,0) 88%)',
            ].join(', '),
          }}
        />

        <h1 className="pointer-events-none absolute inset-0 flex flex-col justify-between px-6 pb-16 pt-28 font-serif text-[17vw] leading-[0.98] text-white sm:px-10 sm:pt-32 sm:text-[14vw] md:px-16 md:pb-20 md:pt-36 md:text-[12vw]">
          <span className="block" style={{ textShadow: '0 2px 28px rgba(0,0,0,0.42)' }}>
            {fixedLine}
          </span>
          <span className="relative block">
            <AnimatePresence mode="wait">
              <motion.span
                key={blocks[blockIndex]}
                initial={{ opacity: 0, y: 26, filter: 'blur(14px)' }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: IN_S, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  filter: 'blur(14px)',
                  transition: { duration: OUT_S, ease: [0.4, 0, 1, 1] },
                }}
                className="block"
                style={{ textShadow: '0 2px 28px rgba(0,0,0,0.42)' }}
              >
                {blocks[blockIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </div>

      {/* Banda de fondo sólido: el subtítulo y la trayectoria se leen en negro
          sobre crema, sin depender de ningún degradado. */}
      <div className="bg-[#fbfaf6] px-6 py-8 text-center sm:px-10 md:px-16 md:py-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.7 }}
          className="mx-auto max-w-3xl font-serif text-lg leading-snug text-[#1a1918] sm:text-2xl md:text-[1.85rem]"
        >
          {content.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.9 }}
          className="mt-6 flex flex-col items-center gap-y-1.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-center sm:gap-x-12 md:mt-8 md:gap-x-16"
        >
          {milestones.items.map((item) => (
            <span
              key={item.label}
              className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#5a5854] md:text-[11px]"
            >
              <span className="text-[#1a1918]">{item.value}</span> {item.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
