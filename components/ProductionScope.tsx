import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const PILLARS = [
  {
    title: 'Producción Visual',
    items: [
      'Selección curada de fotografía de lifestyle y arquitectura en alta resolución.',
      'Video cinematográfico orientado a la marca.',
    ],
  },
  {
    title: 'Visibilidad Digital',
    items: [
      'Cortometrajes de marca alineados con la narrativa del hotel.',
      'Cobertura diaria de stories durante la estancia.',
      'Distribución en Instagram y TikTok.',
    ],
  },
  {
    title: 'Entrega de Material',
    items: [
      'Archivos editados, con corrección de color, listos para usar.',
      'Entrega digital organizada para web, redes sociales y plataformas de reservas.',
    ],
  },
  {
    title: 'Alineación Estratégica',
    items: ['Revisión y ajuste de marca en postproducción.'],
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
      <div className="relative w-full max-w-4xl min-h-[320px] md:min-h-[380px] text-center">
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
