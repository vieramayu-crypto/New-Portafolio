import React from 'react';

const BRANDS: { name: string; sub?: string; className: string }[] = [
  { name: 'The Ritz-Carlton', className: 'font-serif tracking-[0.15em] text-2xl md:text-3xl' },
  { name: 'InterContinental', sub: 'LISBON', className: 'font-serif font-semibold tracking-wide text-2xl md:text-3xl' },
  { name: 'GPRO Valparaíso Palace & Spa', className: 'font-sans font-medium uppercase tracking-[0.1em] text-lg md:text-xl' },
  { name: 'Villa Venecia', className: 'font-serif italic text-2xl md:text-3xl' },
  { name: 'Honeymoon Petra Villas', sub: 'SANTORINI', className: 'font-sans font-medium uppercase tracking-[0.1em] text-lg md:text-xl' },
  { name: 'Terra Dominicata', className: 'font-serif italic text-2xl md:text-3xl' },
  { name: 'Delta Park', className: 'font-sans font-bold uppercase tracking-wide text-xl md:text-2xl' },
  { name: 'numa', className: 'font-sans font-bold lowercase text-2xl md:text-3xl' },
  { name: 'District Hive', className: 'font-sans font-bold uppercase tracking-wide text-xl md:text-2xl' },
];

const BrandLogo: React.FC<{ brand: (typeof BRANDS)[number] }> = ({ brand }) => (
  <div className="flex flex-col items-center justify-center px-10 md:px-14 shrink-0 text-[#1a1918]/70">
    <span className={brand.className}>{brand.name}</span>
    {brand.sub && (
      <span className="mt-1 text-[10px] font-sans uppercase tracking-[0.3em] text-[#5a5854]">{brand.sub}</span>
    )}
  </div>
);

export const BrandsMarquee: React.FC = () => {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen py-16 md:py-24 overflow-hidden">
      <div className="text-center mb-10 md:mb-14">
        <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">
          Colaboraciones seleccionadas
        </span>
      </div>
      <div className="animate-marquee whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {BRANDS.map((brand) => (
              <BrandLogo key={`${copy}-${brand.name}`} brand={brand} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
