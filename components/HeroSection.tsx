import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HERO_PHOTO } from '../data/media';
import { useSiteContent } from '../src/lib/content';

/** Cuánto permanece cada bloque del titular antes de dar paso al siguiente.
 *  AnimatePresence en modo "wait" encadena salida y entrada, así que el ciclo
 *  real es BLOCK_MS + OUT_S + IN_S: hay que dejar margen o el titular pasa más
 *  tiempo desvanecido que a la vista. */
const BLOCK_MS = 4200;
const OUT_S = 0.5;
const IN_S = 0.7;

const TEXTURE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85';

export const HeroSection: React.FC = () => {
  const content = useSiteContent();
  const blocks = content.hero.blocks;
  const [blockIndex, setBlockIndex] = useState(0);

  // Los bloques se turnan en bucle: aparece uno, se desvanece, entra el
  // siguiente. Con un solo bloque no hay temporizador que mantener.
  useEffect(() => {
    if (blocks.length <= 1) return;
    const timer = setInterval(() => {
      setBlockIndex((prev) => (prev + 1) % blocks.length);
    }, BLOCK_MS);
    return () => clearInterval(timer);
  }, [blocks.length]);

  const scrollToContent = () => {
    document.getElementById('hotel-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const current = blocks[blockIndex] ?? '';
  const lines = current.split('\n');

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#fbfaf6] text-[#1a1918] font-sans select-none">
      <img
        src={TEXTURE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-25 anim-fade-in"
      />

      {/* Foto de portada. Con el titular centrado la composición ya no depende
          de dejar libre una esquina: se encuadra a la persona hacia la derecha
          para que el bloque de texto caiga sobre el suelo, no sobre ella. */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <img
          src={HERO_PHOTO}
          alt="Mayu Travel — producción visual para hoteles de lujo"
          /* En móvil el titular ocupa el 73% del ancho: no hay recorte que deje
             a la persona libre y a la vez visible. Se encuadra para que el texto
             caiga sobre la parte más uniforme de la escena; medido, el peor
             contraste ahí es 8.19:1 sobre un mínimo de 3. */
          className="h-full w-full object-cover object-[62%_30%] md:object-center md:scale-[1.6] md:translate-x-[26.5%] md:origin-center"
        />
      </div>

      {/* Velo de contraste. El titular ya no vive abajo, así que en vez de un
          degradado inferior se oscurece el centro con una viñeta radial más un
          tinte general suave. Medido: el blanco puro pasa de sobra el mínimo. */}
      <div
        className="absolute inset-0 z-[12] pointer-events-none"
        style={{
          background:
            'radial-gradient(120% 85% at 45% 50%, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.52) 38%, rgba(0,0,0,0.30) 66%, rgba(0,0,0,0.16) 100%)',
        }}
      />
      <div className="absolute inset-0 z-[13] bg-black/20 pointer-events-none" />

      {/* Titular centrado en los dos ejes. Playfair Display al 600 en vez de
          Cormorant: Cormorant es una serif ligera y de alto contraste que no
          gana peso ni en su grado más alto. */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-5 text-center pointer-events-none">
        <div className="relative flex w-full items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              initial={{ opacity: 0, y: 30, filter: 'blur(16px)' }}
              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: IN_S, ease: [0.22, 1, 0.36, 1] },
              }}
              exit={{
                opacity: 0,
                y: -24,
                filter: 'blur(16px)',
                transition: { duration: OUT_S, ease: [0.4, 0, 1, 1] },
              }}
              className="font-display font-semibold tracking-[-0.02em] text-[22vw] leading-[0.94] text-white sm:text-[18vw] md:text-[14.5vw]"
            >
              {lines.map((line, i) => (
                <span key={`${line}-${i}`} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.85 }}
          className="mt-10 max-w-[26ch] font-sans text-[11px] uppercase leading-relaxed tracking-[0.22em] text-white sm:max-w-none sm:text-sm md:mt-14 md:text-base md:tracking-[0.28em]"
        >
          {content.hero.subheadline}
        </motion.p>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 flex justify-center pb-6 sm:pb-8 pointer-events-auto">
        <button
          onClick={scrollToContent}
          className="anim-fade-up flex flex-col items-center gap-1.5 group text-[10px] uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors"
          style={{ animationDelay: '1400ms' }}
        >
          <span>Desplazar</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 group-hover:translate-y-1 transition-transform">
            ↓
          </span>
        </button>
      </div>
    </section>
  );
};
