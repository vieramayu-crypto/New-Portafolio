import React, { useRef, useState } from 'react';

const ELEGANT = 'font-serif italic tracking-wide text-2xl md:text-3xl';

const BRANDS: { name: string; sub?: string; className: string }[] = [
  { name: 'The Ritz-Carlton', className: 'font-serif tracking-[0.15em] text-2xl md:text-3xl' },
  { name: 'InterContinental', sub: 'LISBON', className: 'font-serif font-semibold tracking-wide text-2xl md:text-3xl' },
  { name: 'GPRO Valparaíso Palace & Spa', className: ELEGANT },
  { name: 'Villa Venecia', className: ELEGANT },
  { name: 'Honeymoon Petra Villas', sub: 'SANTORINI', className: 'font-sans font-medium uppercase tracking-[0.1em] text-lg md:text-xl' },
  { name: 'Terra Dominicata', className: 'font-serif italic text-2xl md:text-3xl' },
  { name: 'Delta Park', className: ELEGANT },
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ startX: 0, startScrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    drag.current = { startX: e.clientX, startScrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !isDragging) return;
    el.scrollLeft = drag.current.startScrollLeft - (e.clientX - drag.current.startX);
  };

  const stopDragging = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    scrollRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-white pt-20 md:pt-28 pb-6 md:pb-8 overflow-hidden">
      <div
        ref={scrollRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
        className={`no-scrollbar select-none overflow-x-auto ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
      >
        <div className="animate-marquee-slow whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {BRANDS.map((brand) => (
                <BrandLogo key={`${copy}-${brand.name}`} brand={brand} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
