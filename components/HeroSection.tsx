import React from 'react';
import heroPortraitBW from '../src/assets/images/hero_portrait_bw_1786010923167.jpg';

export const HeroSection: React.FC = () => {
  const scrollToContent = () => {
    const target = document.getElementById('main-content');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#fbfaf6] text-[#1a1918] font-sans select-none">
      {/* Marquee Name (decorative) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[18vh] sm:top-[16vh] z-20 overflow-hidden pointer-events-none"
      >
        <div className="anim-fade-up" style={{ animationDelay: '400ms' }}>
          <div className="animate-marquee whitespace-nowrap font-serif text-[15vh] sm:text-[24vh] leading-none text-[#1a1918]/80 tracking-tight">
            <span className="pr-[6vw]">Mayu Travel &mdash;&nbsp;</span>
            <span className="pr-[6vw]">Producción Visual &mdash;&nbsp;</span>
            <span className="pr-[6vw]">Mayu Travel &mdash;&nbsp;</span>
            <span className="pr-[6vw]">Producción Visual &mdash;&nbsp;</span>
          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      <div
        className="absolute inset-x-6 sm:inset-x-10 bottom-[6.5rem] sm:bottom-28 z-30 h-0.5 bg-[#1a1918]/20 anim-line"
        style={{ animationDelay: '900ms' }}
      />

      {/* Footer Info */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-sans text-[#1a1918] pointer-events-auto">
        <div className="anim-fade-up" style={{ animationDelay: '1100ms' }}>
          <div className="font-medium">Mayurlin Viera</div>
          <div className="text-[#5a5854]">Directora Creativa</div>
          <div className="text-[#5a5854] hidden sm:block">Producción visual para hotelería de lujo</div>
        </div>

        <button
          onClick={scrollToContent}
          className="anim-fade-up flex flex-col items-center gap-1 group text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
          style={{ animationDelay: '1150ms' }}
        >
          <span className="text-[10px] text-[#5a5854]">Desplazar</span>
          <span className="w-6 h-6 rounded-full border border-[#1a1918]/30 flex items-center justify-center group-hover:translate-y-1 transition-transform">
            ↓
          </span>
        </button>

        <div className="text-right anim-fade-up hidden sm:block" style={{ animationDelay: '1200ms' }}>
          <div className="text-[#5a5854]">Fotografía &amp; Dirección</div>
          <div className="font-medium">Cinematográfica</div>
        </div>
      </footer>

      {/* Main Hero Photo (Black & White Editorial Style) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <img
          src={heroPortraitBW}
          alt="Retrato editorial de Mayurlin Viera"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-[50%_25%] sm:object-[50%_30%] md:object-[50%_35%] filter grayscale contrast-[1.12] brightness-[0.98] opacity-90 sm:opacity-85 anim-rise-in transition-all duration-700"
          style={{ animationDelay: '150ms' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf6]/40 via-transparent to-[#fbfaf6]/60 pointer-events-none" />
      </div>
    </section>
  );
};
