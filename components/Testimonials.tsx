import React from 'react';
import { TESTIMONIALS } from '../data/collaborations';

export const Testimonials: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {TESTIMONIALS.map((t) => (
        <div key={t.id} className="border border-[#1a1918]/10 bg-white/60 p-6 md:p-8 space-y-4">
          <p className="font-serif text-lg text-[#1a1918] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
          <div className="text-xs font-sans uppercase tracking-widest text-[#5a5854]">
            <span className="text-[#1a1918]">{t.author}</span>
            <span> &bull; {t.role}</span>
            <div className="mt-0.5">{t.brandName}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
