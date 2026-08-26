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
  const [blockIndex, setBlockIndex] = useState(0);

  // Sólo rota la segunda línea: "Tu hotel" se queda fijo.
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

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#fbfaf6] text-[#1a1918] font-sans select-none">
      <img
        src={TEXTURE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-25 anim-fade-in"
      />

      {/* Foto de portada. Con el titular a la izquierda no hace falta forzar el
          encuadre: la persona ya cae fuera de la columna de texto. */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <img
          src={HERO_PHOTO}
          alt="Mayu Travel — producción visual para hoteles de lujo"
          className="h-full w-full object-cover object-[58%_30%] md:object-center"
        />
      </div>

      {/* Velo de contraste. Dos versiones: en escritorio entra desde la
          izquierda y se apaga antes de llegar a la persona; en móvil el titular
          ocupa casi todo el ancho, así que necesita una cortina más plana.
          Medido contra el píxel más claro bajo cada texto. */}
      <div
        className="absolute inset-0 z-[12] pointer-events-none md:hidden"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.74) 58%, rgba(0,0,0,0.48) 84%, rgba(0,0,0,0.32) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-[12] pointer-events-none hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.58) 28%, rgba(0,0,0,0.32) 52%, rgba(0,0,0,0.10) 74%, rgba(0,0,0,0) 92%)',
        }}
      />
      <div
        className="absolute inset-0 z-[13] pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.52) 18%, rgba(0,0,0,0.12) 34%, rgba(0,0,0,0) 46%)',
        }}
      />

      {/* Titular a la izquierda y centrado en vertical. Peso medio y sin
          tracking negativo: al grado 600 y apretado las letras se tocaban. */}
      <div className="absolute inset-0 z-20 flex items-center px-6 sm:px-10 md:px-16 pointer-events-none">
        <h1 className="font-display font-medium text-[16vw] leading-[1.0] text-white sm:text-[13vw] md:text-[11.5vw]">
          <span className="block">{fixedLine}</span>
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
              >
                {blocks[blockIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </div>

      {/* El subtítulo vive abajo, con su propio aire — no colgando del titular */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-24 sm:px-10 sm:pb-28 md:px-16 md:pb-32 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.85 }}
          className="max-w-[28ch] font-sans text-[11px] uppercase leading-relaxed tracking-[0.22em] text-white sm:max-w-[52ch] sm:text-sm md:max-w-[56ch] md:text-base md:tracking-[0.28em]"
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
