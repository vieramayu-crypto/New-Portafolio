import React from 'react';
import { motion } from 'motion/react';
import { HERO_PHOTO } from '../data/media';
import { publicImage, useSiteContent } from '../src/lib/content';

/* ---------------------------------------------------------------------------
   ANDAMIAJE TEMPORAL — prototipo de hero
   Permite comparar 3 variantes x 2 fotos con ?hero=1|2|3&photo=a|b
   Se elimina en cuanto Mayurlin elija una; queda solo la ganadora.
--------------------------------------------------------------------------- */
const ALT_PHOTO = publicImage('sec3-gal08-fachada-h.jpg');

function useHeroPrototype() {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const variant = params?.get('hero') ?? '1';
  const photo = params?.get('photo') === 'b' ? ALT_PHOTO : HERO_PHOTO;
  return { variant, photo };
}

const TEXTURE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85';

const scrollToContent = () => {
  document.getElementById('hotel-section')?.scrollIntoView({ behavior: 'smooth' });
};

/** Pie compartido por las variantes a sangre completa (V1 y V2). */
const HeroFooter: React.FC<{ light?: boolean }> = ({ light }) => {
  const tone = light ? 'text-white' : 'text-[#1a1918]';
  const soft = light ? 'text-white/75' : 'text-[#5a5854]';
  const ring = light ? 'border-white/40' : 'border-[#1a1918]/30';
  return (
    <footer
      className={`absolute inset-x-0 bottom-0 z-30 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left px-6 pb-6 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-sans ${tone} pointer-events-auto`}
    >
      <div className="anim-fade-up order-1" style={{ animationDelay: '1400ms' }}>
        <div className="font-medium">Dirección Creativa</div>
        <div className={`${soft} hidden sm:block`}>Producción visual para hotelería de lujo</div>
        <div className={`${soft} sm:hidden`}>Fotografía &amp; Dirección Cinematográfica</div>
      </div>

      <button
        onClick={scrollToContent}
        className="anim-fade-up order-2 flex flex-col items-center gap-1 group text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
        style={{ animationDelay: '1450ms' }}
      >
        <span className={`text-[10px] ${soft}`}>Desplazar</span>
        <span
          className={`w-6 h-6 rounded-full border ${ring} flex items-center justify-center group-hover:translate-y-1 transition-transform`}
        >
          ↓
        </span>
      </button>

      <div className="hidden sm:block text-right anim-fade-up order-3" style={{ animationDelay: '1550ms' }}>
        <div className={soft}>Fotografía &amp;</div>
        <div className="font-medium">Dirección Cinematográfica</div>
      </div>
    </footer>
  );
};

export const HeroSection: React.FC = () => {
  const content = useSiteContent();
  const { variant, photo } = useHeroPrototype();

  const headline = content.hero.headline;
  const subheadline = content.hero.subheadline;

  /* ============ V3 — Panel dividido, tipografía brutalista ============ */
  if (variant === '3') {
    return (
      <section className="relative h-[100dvh] w-full overflow-hidden bg-[#f5f3ed] text-[#1a1918] font-sans select-none">
        <div className="flex h-full flex-col md:flex-row">
          {/* Panel de texto */}
          <div className="order-2 flex min-h-0 flex-1 flex-col justify-center px-6 pb-10 pt-8 md:order-1 md:basis-[46%] md:px-12 md:py-16 lg:px-16">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
              className="font-serif leading-[1.02] text-[9vw] md:text-[5.4vw] lg:text-[4.8vw] text-[#1a1918]"
            >
              {headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.75 }}
              className="mt-6 max-w-md font-sans text-[11px] uppercase leading-relaxed tracking-[0.24em] text-[#5a5854] md:mt-10 md:text-sm"
            >
              {subheadline}
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              onClick={scrollToContent}
              className="mt-8 flex items-center gap-3 self-start text-[10px] uppercase tracking-[0.2em] text-[#5a5854] hover:text-[#1a1918] transition-colors md:mt-14 md:text-xs"
            >
              <span>Desplazar</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#1a1918]/30">↓</span>
            </motion.button>
          </div>

          {/* Foto */}
          <div className="relative order-1 basis-[45%] overflow-hidden md:order-2 md:basis-[54%]">
            <img src={photo} alt="" className="h-full w-full object-cover object-[50%_40%]" />
          </div>
        </div>
      </section>
    );
  }

  /* ============ V2 — Texto abajo a la izquierda ============ */
  if (variant === '2') {
    return (
      <section className="relative h-[100dvh] w-full overflow-hidden bg-[#fbfaf6] text-[#1a1918] font-sans select-none">
        <img
          src={TEXTURE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-25 anim-fade-in"
        />
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <img src={photo} alt="" className="h-full w-full object-cover object-[50%_30%]" />
        </div>

        {/* Degradado desde abajo-izquierda, donde vive el texto */}
        <div
          className="absolute inset-0 z-[12] pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.62) 22%, rgba(0,0,0,0.28) 45%, rgba(0,0,0,0.05) 68%, rgba(0,0,0,0) 85%)',
          }}
        />
        <div
          className="absolute inset-0 z-[13] pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0) 70%)',
          }}
        />

        <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-28 sm:px-10 sm:pb-32 md:pb-36 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.45 }}
            className="max-w-3xl font-serif text-[9vw] leading-[1.05] text-white sm:text-[6.5vw] md:text-[4.6vw] lg:text-[4.2vw]"
          >
            {headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.85 }}
            className="mt-5 max-w-xl font-sans text-[11px] uppercase leading-relaxed tracking-[0.24em] text-white md:mt-7 md:text-sm"
          >
            {subheadline}
          </motion.p>
        </div>

        <HeroFooter light />
      </section>
    );
  }

  /* ============ V1 — Centrado, con degradado de verdad ============ */
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#fbfaf6] text-[#1a1918] font-sans select-none">
      <img
        src={TEXTURE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-25 anim-fade-in"
      />
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <img src={photo} alt="" className="h-full w-full object-cover object-[50%_30%]" />
      </div>

      {/* Sustituye al tinte plano del 10%: oscurece de verdad justo donde cae el texto */}
      <div
        className="absolute inset-0 z-[12] pointer-events-none"
        style={{
          background:
            'radial-gradient(58% 46% at 50% 46%, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.24) 72%, rgba(0,0,0,0.06) 100%)',
        }}
      />
      <div className="absolute inset-0 z-[13] bg-black/12 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-7 px-6 sm:px-10 md:gap-9 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.45 }}
          className="mx-auto max-w-6xl text-center font-serif text-[10vw] leading-[1.05] text-white sm:text-[7.5vw] md:text-[6.2vw] lg:text-[5.6vw]"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.85 }}
          className="mx-auto max-w-3xl text-center font-sans text-[11px] uppercase leading-relaxed tracking-[0.24em] text-white md:text-base"
        >
          {subheadline}
        </motion.p>
      </div>

      <div
        className="absolute inset-x-6 sm:inset-x-10 bottom-[9.5rem] sm:bottom-28 z-30 h-0.5 bg-white/25 anim-line"
        style={{ animationDelay: '1200ms' }}
      />
      <HeroFooter light />
    </section>
  );
};
