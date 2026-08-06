import React from 'react';

export const DigitalReach: React.FC = () => {
  return (
    <div className="border border-[#1a1918]/15 bg-white/50 p-8 md:p-12">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <div className="font-serif text-4xl md:text-5xl text-[#1a1918]">146K+</div>
          <p className="mt-1 text-xs font-sans uppercase tracking-widest text-[#5a5854]">
            Seguidores en Instagram
          </p>
        </div>
        <div>
          <div className="font-serif text-4xl md:text-5xl text-[#1a1918]">3.26M+</div>
          <p className="mt-1 text-xs font-sans uppercase tracking-widest text-[#5a5854]">
            Reproducciones en los últimos 30 días
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[#1a1918]/10 pt-8 sm:grid-cols-2">
        <div>
          <h4 className="text-xs font-sans uppercase tracking-widest text-[#5a5854] mb-2">
            Perfil de audiencia
          </h4>
          <p className="text-sm text-[#1a1918] leading-relaxed">
            70% con base en Europa, interesada en viajes y hotelería.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-sans uppercase tracking-widest text-[#5a5854] mb-2">
            Mercados principales
          </h4>
          <p className="text-sm text-[#1a1918] leading-relaxed">
            España &bull; Argentina &bull; Estados Unidos &bull; México
          </p>
        </div>
      </div>

      <p className="mt-8 text-xs font-sans uppercase tracking-widest text-[#5a5854]">
        Instagram:{' '}
        <a
          href="https://instagram.com/mayurlintravel"
          target="_blank"
          rel="noreferrer"
          className="text-[#1a1918] underline underline-offset-4 hover:opacity-70"
        >
          @mayurlintravel
        </a>
      </p>
    </div>
  );
};
