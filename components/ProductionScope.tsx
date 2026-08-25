import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const PILLARS = [
  {
    title: 'Producción visual',
    items: [
      'Fotografía editorial de arquitectura, lifestyle y detalle.',
      'Video cinematográfico y cortometraje de marca alineado a la narrativa del hotel.',
    ],
  },
  {
    title: 'Cobertura en vivo',
    items: [
      'Mínimo tres stories diarias en @mayurlintravel durante la estancia.',
      'Reels en colaboración con la cuenta del hotel y publicación en el feed.',
    ],
  },
  {
    title: 'Entrega adaptativa',
    items: [
      'Cada rodaje se dimensiona según propiedad, temporada y actividades.',
      'Cuanto más nos abre el hotel, más historia podemos contar.',
      'Postproducción y entrega organizada en un plazo aproximado de tres semanas.',
    ],
  },
  {
    title: 'Derechos de uso',
    items: [
      'Cesión para uso del hotel en sus canales propios y en publicidad pagada.',
      'Exclusividad geográfica por temporada disponible bajo pedido.',
    ],
  },
];

const AUTO_ADVANCE_MS = 6000;

export const ProductionScope: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PILLARS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  const pillar = PILLARS[index];

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-4xl min-h-[240px] md:min-h-[280px] text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="space-y-8"
          >
            <h3 className="font-serif text-4xl md:text-6xl text-[#1a1918]">{pillar.title}</h3>
            <ul className="space-y-3">
              {pillar.items.map((item) => (
                <li key={item} className="text-lg md:text-2xl text-[#5a5854] leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3 pt-16">
        {PILLARS.map((p, i) => (
          <button
            key={p.title}
            onClick={() => setIndex(i)}
            aria-label={`Ir a ${p.title}`}
            aria-current={i === index}
            className="p-1.5 -m-1.5"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === index ? 'w-2.5 h-2.5 bg-[#1a1918]' : 'w-1.5 h-1.5 bg-[#1a1918]/25'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
