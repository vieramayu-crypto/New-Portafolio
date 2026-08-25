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

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#fbfaf6] text-[#1a1918] font-sans select-none">
      <img
        src={TEXTURE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-25 anim-fade-in"
      />

      {/* Foto de portada.
          La imagen es 2000x1416, asi que en escritorio el recorte es vertical y
          object-position horizontal no tiene efecto: se desplaza con transform.
          Se amplia primero para que al empujarla a la derecha no aparezca borde.
          En movil el recorte si es horizontal, y ahi manda object-position. */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <img
          src={HERO_PHOTO}
          alt="Mayu Travel — producción visual para hoteles de lujo"
          className="h-full w-full object-cover object-[40%_28%] md:object-[50%_30%] md:scale-125 md:translate-x-[10%] md:origin-center"
        />
      </div>

      {/* Degradado desde abajo, donde vive el texto. Sustituye al tinte plano
          del 10%, que dejaba el subtitulo en 1.78:1 (necesita 4.5:1). */}
      <div
        className="absolute inset-0 z-[12] pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.70) 26%, rgba(0,0,0,0.48) 46%, rgba(0,0,0,0.18) 68%, rgba(0,0,0,0) 88%)',
        }}
      />
      <div
        className="absolute inset-0 z-[13] pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 42%, rgba(0,0,0,0) 72%)',
        }}
      />

      {/* Bloque de texto, abajo a la izquierda */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-20 sm:px-10 sm:pb-24 md:pb-28 pointer-events-none">
        {/* Altura fija de dos líneas y anclado abajo: el subtítulo no salta
            entre bloques y ambos titulares comparten la misma línea base.
            El ancho máximo obliga al bloque largo a partirse en dos líneas,
            que es lo que lo mantiene lejos de la persona de la foto. */}
        <div className="relative min-h-[2.15em] font-serif text-[16vw] leading-[1.0] sm:text-[12vw] md:max-w-[62%] md:text-[9.4vw]">
          <AnimatePresence mode="wait">
            <motion.h1
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
              className="absolute inset-x-0 bottom-0 text-white"
            >
              {blocks[blockIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.85 }}
          className="mt-6 max-w-[34ch] font-sans text-[13px] uppercase leading-relaxed tracking-[0.14em] text-white sm:max-w-[46ch] sm:text-lg sm:tracking-[0.2em] md:mt-8 md:max-w-[58ch] md:text-xl md:tracking-[0.22em]"
        >
          {content.hero.subheadline}
        </motion.p>
      </div>

      {/* Unico elemento del pie: la señal de desplazar. Los rotulos de
          "Dirección Creativa" y "Fotografía & Dirección Cinematográfica" se
          eliminaron por repetir lo que ya dice el subtitulo. */}
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
