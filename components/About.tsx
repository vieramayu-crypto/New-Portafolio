import React from 'react';
import { motion } from 'motion/react';
import heroPortraitBW from '../src/assets/images/hero_portrait_bw_1786010923167.jpg';
import { ProductionScope } from './ProductionScope';
import { Testimonials } from './Testimonials';
import { DigitalReach } from './DigitalReach';

interface AboutProps {
  onOpenAvailability: () => void;
}

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
              alt="Mayurlin Viera"
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
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">Sobre nosotros</span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#1a1918] leading-tight">
            Detrás de Mayu Travel hay dos personas, no una fórmula.
          </h1>
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#5a5854]">Mayurlin Viera &amp; Yerfran</p>
          <p className="text-sm md:text-base text-[#5a5854] leading-relaxed">
            Crear contenido fue el sueño de Mayu antes de tener con qué hacerlo. Trabajar con los mejores hoteles
            del mundo, su objetivo número uno desde siempre.
          </p>
          <p className="text-sm md:text-base text-[#5a5854] leading-relaxed">
            Yerfran llegó por otro camino: la fotografía con alma. Capturar lo que alguien siente en un lugar, no
            solo cómo se ve.
          </p>
          <p className="text-sm md:text-base text-[#5a5854] leading-relaxed">
            Con los años, eso se volvió esto. Combinamos lo que cada uno hace mejor para darle a cada hotel lo
            mismo: una mirada honesta, con el tiempo y el cuidado de dos personas que ya saben trabajar juntas.
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

      {/* Statement */}
      <div className="mb-24 max-w-2xl mx-auto text-center">
        <p className="font-serif text-2xl md:text-4xl text-[#1a1918] leading-snug">
          &ldquo;No lo hacemos para llenar un feed. Lo hacemos porque cada hotel tiene un alma que merece verse
          como se siente vivirlo.&rdquo;
        </p>
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
