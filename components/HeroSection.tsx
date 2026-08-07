import React from 'react';
import { Page } from '../types';
import heroPortraitBW from '../src/assets/images/hero_portrait_bw_1786010923167.jpg';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
  onOpenAvailability: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenAvailability }) => {
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

      {/* Marquee Name (z-20) */}
      <div className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-20 overflow-hidden pointer-events-none">
        <div className="anim-fade-up" style={{ animationDelay: '500ms' }}>
          <div className="animate-marquee whitespace-nowrap font-serif text-[16vh] sm:text-[26vh] leading-none text-[#1a1918]/80 tracking-tight">
            <span className="pr-[6vw]">Mayu Travel &mdash;&nbsp;</span>
            <span className="pr-[6vw]">Mayu Travel &mdash;&nbsp;</span>
            <span className="pr-[6vw]">Mayu Travel &mdash;&nbsp;</span>
            <span className="pr-[6vw]">Mayu Travel &mdash;&nbsp;</span>
          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      <div
        className="absolute inset-x-6 sm:inset-x-10 bottom-[6.5rem] sm:bottom-28 z-30 h-0.5 bg-[#1a1918]/20 anim-line"
        style={{ animationDelay: '1200ms' }}
      />

      {/* Desktop Footer Info */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-sans text-[#1a1918] pointer-events-auto">
        <div className="anim-fade-up" style={{ animationDelay: '1400ms' }}>
          <div className="font-medium">Mayurlin Viera</div>
          <div className="text-[#5a5854]">Directora Creativa</div>
          <div className="text-[#5a5854]">Producción visual para hotelería de lujo</div>
        </div>

        {/* Scroll Down Hint Button */}
        <button
          onClick={scrollToContent}
          className="anim-fade-up flex flex-col items-center gap-1 group text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity"
          style={{ animationDelay: '1450ms' }}
        >
          <span className="text-[10px] text-[#5a5854]">Desplazar</span>
          <span className="w-6 h-6 rounded-full border border-[#1a1918]/30 flex items-center justify-center group-hover:translate-y-1 transition-transform">
            ↓
          </span>
        </button>

        <div className="text-right anim-fade-up" style={{ animationDelay: '1550ms' }}>
          <div className="text-[#5a5854]">Fotografía &amp;</div>
          <div className="font-medium">Dirección Cinematográfica</div>
        </div>
      </footer>

      {/* Main Hero Photo (Black & White Editorial Style) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <img
          src={heroPortraitBW}
          alt="Mayu Travel Editorial Hero Portrait"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-[50%_25%] sm:object-[50%_30%] md:object-[50%_35%] filter grayscale contrast-[1.12] brightness-[0.98] opacity-90 sm:opacity-85 anim-rise-in transition-all duration-700"
          style={{ animationDelay: '200ms' }}
        />
        {/* Soft gradient overlay at bottom and top to ensure high readability of header and footer text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf6]/40 via-transparent to-[#fbfaf6]/60 pointer-events-none" />
      </div>

      {/* Header Navigation Links */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8 pointer-events-auto">
        {/* Brand Link */}
        <button
          onClick={() => onNavigate('home')}
          className="border border-[#1a1918]/20 bg-[#fbfaf6]/80 backdrop-blur-sm px-4 py-1.5 text-sm md:text-base font-serif tracking-[0.25em] font-medium text-[#1a1918] hover:bg-[#1a1918] hover:text-[#fbfaf6] transition-all duration-300 shadow-sm"
        >
          MAYU
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-start gap-12 lg:gap-16 text-sm font-sans">
          <span className="text-[#5a5854] font-mono">2025</span>
          <button
            onClick={() => onNavigate('portfolio')}
            className="text-[#1a1918] hover:opacity-60 transition-opacity"
          >
            Portafolio
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="text-[#1a1918] hover:opacity-60 transition-opacity"
          >
            Acerca de
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-[#1a1918] hover:opacity-60 transition-opacity"
          >
            Contacto
          </button>
          <button
            onClick={onOpenAvailability}
            className="bg-[#1a1918] text-[#fbfaf6] px-4 py-1 text-xs font-medium tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            Disponibilidad
          </button>
        </div>
      </header>
    </section>
  );
};
