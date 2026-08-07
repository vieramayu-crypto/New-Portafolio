import React, { useState } from 'react';
import { COLLABORATIONS } from '../data/collaborations';
import { CollaborationCategory } from '../types';
import { CollaborationCard } from './CollaborationCard';
import { motion } from 'motion/react';

interface PortfolioProps {
  onOpenAvailability: () => void;
}

const CATEGORIES: Array<CollaborationCategory | 'todos'> = [
  'todos',
  'Grandes Resorts de Lujo',
  'Boutique y Destino',
  'Experiencial y Sostenible',
];

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenAvailability }) => {
  const [selectedFilter, setSelectedFilter] = useState<CollaborationCategory | 'todos'>('todos');

  const filtered = COLLABORATIONS.filter(
    (c) => selectedFilter === 'todos' || c.category === selectedFilter
  );

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1918] pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto font-sans">
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">
          Historias visuales para hoteles de lujo
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-[#1a1918] tracking-wide">Trabajo</h1>
        <p className="max-w-xl mx-auto text-sm text-[#5a5854] font-sans leading-relaxed">
          Marcas y destinos con conciencia sostenible. La fotografía y el video de cada proyecto se irán
          publicando aquí a medida que estén listos.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-16 text-xs uppercase tracking-wider font-sans">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              selectedFilter === cat
                ? 'bg-[#1a1918] text-[#f5f3ed] border-[#1a1918]'
                : 'bg-transparent text-[#1a1918] border-[#1a1918]/20 hover:border-[#1a1918]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filtered.map((collaboration, idx) => (
          <motion.div
            key={collaboration.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          >
            <CollaborationCard collaboration={collaboration} />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-20">
        <button
          onClick={onOpenAvailability}
          className="bg-[#1a1918] text-[#f5f3ed] px-8 py-3 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#5a5854] transition-colors"
        >
          Iniciar un proyecto
        </button>
      </div>
    </div>
  );
};
