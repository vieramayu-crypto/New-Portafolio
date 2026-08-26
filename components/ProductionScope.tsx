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
      {/* Reserva la altura de la diapositiva más larga (medidas: 358px en móvil,
          383px en escritorio) para que los puntos no salten al rotar. */}
      <div className="relative w-full max-w-3xl text-center min-h-[300px] md:min-h-[330px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="space-y-8"
          >
            <h3 className="font-serif text-4xl text-[#1a1918] md:text-6xl">{pillar.title}</h3>
            {/* Filas separadas por hairlines, el mismo sistema de contenedores
                que las preguntas frecuentes y la franja de trayectoria. */}
            <ul className="divide-y divide-[#1a1918]/10 border-y border-[#1a1918]/10">
              {pillar.items.map((item) => (
                <li
                  key={item}
                  className="py-5 font-serif text-xl leading-[1.35] text-[#1a1918] md:py-6 md:text-[1.65rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-3 pt-16">
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
