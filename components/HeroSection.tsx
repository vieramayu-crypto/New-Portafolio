import React from 'react';
import heroPortraitBW from '../src/assets/images/hero_portrait_bw_1786010923167.jpg';

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
          src={heroPortraitBW}
          alt="Mayu Travel Editorial Hero Portrait"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-[50%_25%] sm:object-[50%_30%] md:object-[50%_35%] filter grayscale contrast-[1.12] brightness-[0.98] opacity-90 sm:opacity-85 anim-rise-in transition-all duration-700"
          style={{ animationDelay: '200ms' }}
        />
        {/* Soft gradient overlay at bottom and top to ensure high readability of header and footer text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf6]/40 via-transparent to-[#fbfaf6]/60 pointer-events-none" />
      </div>
    </section>
  );
};
