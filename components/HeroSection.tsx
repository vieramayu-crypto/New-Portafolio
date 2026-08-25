import React from 'react';
import { motion } from 'motion/react';
import { HERO_PHOTO } from '../data/media';
import { useSiteContent } from '../src/lib/content';

const TEXTURE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85';

export const HeroSection: React.FC = () => {
  const content = useSiteContent();

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
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.45 }}
          className="max-w-[17ch] font-serif text-[12.5vw] leading-[1.0] text-white sm:max-w-[16ch] sm:text-[9vw] md:max-w-[15ch] md:text-[6.4vw] lg:text-[6vw]"
        >
          {content.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.85 }}
          className="mt-6 max-w-[30ch] font-sans text-base uppercase leading-relaxed tracking-[0.2em] text-white sm:max-w-[46ch] sm:text-lg md:mt-8 md:max-w-[58ch] md:text-xl md:tracking-[0.22em]"
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
