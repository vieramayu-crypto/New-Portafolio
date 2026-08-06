import React from 'react';
import { motion } from 'motion/react';

interface AboutProps {
  onOpenAvailability: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAvailability }) => {
  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1918] pt-28 pb-24 px-6 md:px-12 max-w-6xl mx-auto font-sans">
      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Left Editorial Portrait Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden border border-[#1a1918]/15 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
              alt="Fotógrafo Adovasio"
              className="w-full h-full object-cover grayscale contrast-110"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-[#1a1918] text-[#f5f3ed] p-4 font-serif italic text-xs tracking-widest uppercase">
            Milán &bull; Amalfi &bull; Lago di Como
          </div>
        </motion.div>

        {/* Right Artist Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">
            Acerca de / Sobre Mí
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#1a1918] leading-tight">
            «Capturando el romance atemporal en las villas y hoteles más emblemáticos del mundo.»
          </h1>
          <p className="text-sm md:text-base text-[#5a5854] leading-relaxed">
            Con más de una década documentando bodas exclusivas en el Lago di Como, la Costa Amalfitana, Venecia y la Toscana, la fotografía de Adovasio combina el enfoque editorial de la alta costura con la espontaneidad del periodismo visual intimista.
          </p>
          <p className="text-sm md:text-base text-[#5a5854] leading-relaxed">
            Cada imagen es concebida con devoción por la luz natural, las texturas de arquitectura clásica y la elegancia serena que caracteriza a los mejores hoteles de lujo de Italia.
          </p>

          <div className="pt-4 flex items-center space-x-6">
            <button
              onClick={onOpenAvailability}
              className="bg-[#1a1918] text-[#f5f3ed] px-6 py-3 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#5a5854] transition-colors"
            >
              Comprobar disponibilidad
            </button>
          </div>
        </motion.div>
      </div>

      {/* Featured Publications */}
      <div className="border-t border-b border-[#1a1918]/15 py-12 mb-24 text-center space-y-6">
        <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">
          Publicado & Reconocido En
        </span>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 font-serif italic text-2xl md:text-3xl text-[#1a1918]/80">
          <span>Vogue Weddings</span>
          <span>Harper’s Bazaar</span>
          <span>Over The Moon</span>
          <span>Style Me Pretty</span>
          <span>Elle Sposa</span>
        </div>
      </div>

      {/* Philosophy Three Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3 p-6 border border-[#1a1918]/10 bg-white/40">
          <span className="font-serif text-3xl text-[#1a1918]">01</span>
          <h3 className="font-serif text-xl text-[#1a1918]">Visión Editorial</h3>
          <p className="text-xs text-[#5a5854] leading-relaxed font-sans">
            Composición refinada inspirada en la fotografía analógica cinematográfica y en las editoriales de moda europea.
          </p>
        </div>

        <div className="space-y-3 p-6 border border-[#1a1918]/10 bg-white/40">
          <span className="font-serif text-3xl text-[#1a1918]">02</span>
          <h3 className="font-serif text-xl text-[#1a1918]">Arquitectura & Hotel</h3>
          <p className="text-xs text-[#5a5854] leading-relaxed font-sans">
            Integración armoniosa entre los novios y el paisaje histórico de grand hoteles, palazzos y villas mediterráneas.
          </p>
        </div>

        <div className="space-y-3 p-6 border border-[#1a1918]/10 bg-white/40">
          <span className="font-serif text-3xl text-[#1a1918]">03</span>
          <h3 className="font-serif text-xl text-[#1a1918]">Espontaneidad Serena</h3>
          <p className="text-xs text-[#5a5854] leading-relaxed font-sans">
            Capturar emociones auténticas sin posados rígidos, respetando el ritmo íntimo de la celebración.
          </p>
        </div>
      </div>
    </div>
  );
};
