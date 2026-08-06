import React from 'react';
import { motion } from 'motion/react';
import { COLLABORATIONS } from '../data/collaborations';
import { Page } from '../types';
import { HeroSection } from './HeroSection';
import { CollaborationCard } from './CollaborationCard';

interface HomeMainProps {
  onNavigate: (page: Page) => void;
  onOpenAvailability: () => void;
}

export const HomeMain: React.FC<HomeMainProps> = ({ onNavigate, onOpenAvailability }) => {
  const featuredCollaborations = COLLABORATIONS.slice(0, 6);

  return (
    <div className="relative min-h-screen bg-[#fbfaf6] text-[#1a1918] font-sans overflow-x-hidden">
      <HeroSection />

      <div id="main-content" className="relative">
        {/* Intro statement */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="font-serif text-2xl md:text-4xl leading-snug text-[#1a1918]"
          >
            Creo fotografía y contenido cinematográfico para hoteles y propiedades de lujo &mdash; con dirección
            visual cuidada, sensibilidad arquitectónica y coherencia con la identidad de cada marca.
          </motion.p>
          <button
            onClick={() => onNavigate('about')}
            className="mt-8 text-xs font-sans tracking-[0.2em] uppercase text-[#5a5854] hover:text-[#1a1918] underline underline-offset-4 transition-colors"
          >
            Sobre mí
          </button>
        </section>

        {/* Collaborations teaser */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <div className="text-center mb-14">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854] block mb-2">
              Historias visuales para hoteles de lujo
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1a1918]">Colaboraciones</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredCollaborations.map((collaboration, idx) => (
              <motion.div
                key={collaboration.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <CollaborationCard collaboration={collaboration} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <button
              onClick={() => onNavigate('portfolio')}
              className="border border-[#1a1918]/20 px-6 py-3 text-xs font-sans tracking-[0.2em] uppercase text-[#1a1918] hover:bg-[#1a1918] hover:text-[#fbfaf6] transition-colors"
            >
              Ver todas las colaboraciones
            </button>
          </div>
        </section>

        {/* Digital reach stat strip */}
        <section className="bg-[#1a1918] text-[#f5f3ed] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-center sm:text-left">
            <div>
              <div className="font-serif text-4xl md:text-5xl">146K+</div>
              <p className="mt-1 text-xs font-sans uppercase tracking-widest text-[#f5f3ed]/60">
                Seguidores en Instagram
              </p>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl">3.26M+</div>
              <p className="mt-1 text-xs font-sans uppercase tracking-widest text-[#f5f3ed]/60">
                Reproducciones en los últimos 30 días
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="max-w-2xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1a1918] mb-6">Trabajemos juntos</h2>
          <p className="text-sm md:text-base text-[#5a5854] leading-relaxed mb-8">
            Si esto encaja con lo que necesitas ahora, podemos compartir fechas y detalles de entregables.
          </p>
          <button
            onClick={onOpenAvailability}
            className="bg-[#1a1918] text-[#fbfaf6] px-8 py-3.5 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#5a5854] transition-colors"
          >
            Iniciar una colaboración
          </button>
        </section>
      </div>
    </div>
  );
};
