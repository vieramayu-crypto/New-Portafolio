import React from 'react';
import { motion } from 'motion/react';
import heroEntrance from '../src/assets/images/hero-entrance.webp';

export const HeroSection: React.FC = () => {
  const scrollToContent = () => {
    const target = document.getElementById('hotel-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#fbfaf6] text-[#1a1918] font-sans select-none">
      {/* Background Image with subtle light overlay */}
      <img
        src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85"
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-25 anim-fade-in"
      />

      {/* Static Editorial Headline (z-20) */}
      <div className="absolute inset-x-0 top-[20vh] sm:top-[16vh] z-20 px-6 sm:px-10 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
          className="max-w-4xl mx-auto text-center font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.15] text-[#1a1918]/90"
        >
          Contamos lo que se siente, no solo lo que se ve.
        </motion.h1>
      </div>

      {/* Horizontal Rule */}
      <div
        className="absolute inset-x-6 sm:inset-x-10 bottom-[9.5rem] sm:bottom-28 z-30 h-0.5 bg-[#1a1918]/20 anim-line"
        style={{ animationDelay: '1200ms' }}
      />

      {/* Footer Info — stacked & consolidated on mobile, original 3-column layout from sm up */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left px-6 pb-6 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-sans text-[#1a1918] pointer-events-auto">
        <div className="anim-fade-up order-1" style={{ animationDelay: '1400ms' }}>
          <div className="font-medium">Dirección Creativa</div>
          <div className="text-[#5a5854] hidden sm:block">Producción visual para hotelería de lujo</div>
          <div className="text-[#5a5854] sm:hidden">Fotografía &amp; Dirección Cinematográfica</div>
        </div>

        {/* Scroll Down Hint Button */}
        <button
          onClick={scrollToContent}
          className="anim-fade-up order-2 flex flex-col items-center gap-1 group text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
          style={{ animationDelay: '1450ms' }}
        >
          <span className="text-[10px] text-[#5a5854]">Desplazar</span>
          <span className="w-6 h-6 rounded-full border border-[#1a1918]/30 flex items-center justify-center group-hover:translate-y-1 transition-transform">
            ↓
          </span>
        </button>

        <div className="hidden sm:block text-right anim-fade-up order-3" style={{ animationDelay: '1550ms' }}>
          <div className="text-[#5a5854]">Fotografía &amp;</div>
          <div className="font-medium">Dirección Cinematográfica</div>
        </div>
      </footer>

      {/* Main Hero Photo (Black & White Editorial Style) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <img
          src={heroEntrance}
          alt="Mayu Travel Editorial Hero Portrait"
          className="h-full w-full object-cover object-[50%_25%] sm:object-[50%_30%] md:object-[50%_35%] filter grayscale contrast-[1.12] brightness-[0.98] opacity-90 sm:opacity-85 transition-all duration-700"
        />
        {/* Soft gradient overlay at bottom and top to ensure high readability of header and footer text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf6]/40 via-transparent to-[#fbfaf6]/60 pointer-events-none" />
      </div>
    </section>
  );
};
