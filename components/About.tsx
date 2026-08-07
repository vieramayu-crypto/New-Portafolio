import React from 'react';
import { motion } from 'motion/react';
import heroPortraitBW from '../src/assets/images/hero_portrait_bw_1786010923167.jpg';
import { ProductionScope } from './ProductionScope';
import { Testimonials } from './Testimonials';
import { DigitalReach } from './DigitalReach';

interface AboutProps {
  onOpenAvailability: () => void;
}

const WHY_COLLABORATE = [
  'Dirección creativa alineada con tu propiedad',
  'Coherencia visual: arquitectura, lifestyle y atmósfera',
  'Proceso de producción organizado y entrega cuidada',
  'Imágenes pensadas para durar y funcionar bien en digital',
];

export const About: React.FC<AboutProps> = ({ onOpenAvailability }) => {
  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1918] pt-28 pb-24 px-6 md:px-12 max-w-6xl mx-auto font-sans">
      {/* Bio Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden border border-[#1a1918]/15 shadow-md">
            <img
              src={heroPortraitBW}
              alt="Mayurlin Viera, Directora Creativa"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[50%_20%] grayscale contrast-110"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">Sobre mí</span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#1a1918] leading-tight">
            Mayurlin Viera <span className="text-[#5a5854] text-2xl md:text-3xl">— Directora Creativa</span>
          </h1>
          <p className="text-sm md:text-base text-[#5a5854] leading-relaxed">
            Creo fotografía y contenido cinematográfico para hoteles y propiedades de lujo.
          </p>
          <p className="text-sm md:text-base text-[#5a5854] leading-relaxed">
            Mi trabajo parte de una dirección visual cuidada, sensibilidad arquitectónica y coherencia con la
            identidad de cada marca. Cada proyecto se desarrolla con claridad y precisión, asegurando una imagen
            consistente en todas las plataformas digitales.
          </p>
          <p className="text-sm md:text-base text-[#5a5854] leading-relaxed">
            Colaboro con propiedades que combinan lujo y responsabilidad con el entorno.
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenAvailability}
              className="bg-[#1a1918] text-[#f5f3ed] px-6 py-3 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#5a5854] transition-colors"
            >
              Iniciar un proyecto
            </button>
          </div>
        </motion.div>
      </div>

      {/* Why collaborate */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">Por qué trabajar conmigo</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {WHY_COLLABORATE.map((item) => (
            <div key={item} className="flex items-start gap-3 border border-[#1a1918]/10 bg-white/40 p-5">
              <span className="font-serif text-lg text-[#1a1918]/40 mt-0.5">&mdash;</span>
              <p className="text-sm text-[#1a1918] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Production scope */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854] block mb-2">
            Alcance de producción
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-[#1a1918]">Todo lo incluido en el servicio</h2>
        </div>
        <ProductionScope />
      </div>

      {/* Testimonials */}
      <div className="mb-24">
        <div className="text-center mb-10">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">
            Marcas y testimonios
          </span>
        </div>
        <Testimonials />
      </div>

      {/* Digital reach */}
      <div>
        <div className="text-center mb-10">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">
            Alcance digital internacional
          </span>
        </div>
        <DigitalReach />
      </div>
    </div>
  );
};
