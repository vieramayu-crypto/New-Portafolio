import React from 'react';
import { motion } from 'motion/react';
import heroPortraitBW from '../src/assets/images/hero_portrait_bw_1786010923167.jpg';
import { FlipWords } from './FlipWords';
import { ProductionScope } from './ProductionScope';
import { Testimonials } from './Testimonials';
import { DigitalReach } from './DigitalReach';

interface AboutProps {
  onOpenAvailability: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAvailability }) => {
  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1918] pt-28 pb-24 px-6 md:px-12 font-sans">
      {/* Flip-words opening statement */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854] block mb-6">
          Sobre nosotros
        </span>
        <h1 className="font-serif text-4xl md:text-7xl text-[#1a1918] leading-[1.1]">
          Fotografía con
          <br />
          <FlipWords words={['Alma', 'Amor', 'Autenticidad']} />
        </h1>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Intro paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <p className="font-serif text-xl md:text-2xl text-[#1a1918] leading-relaxed">
            Mayu Travel es un estudio de producción visual para hoteles de lujo, hecho por dos personas que se
            conocen desde hace años. No trabajamos con fórmulas ni plantillas: cada proyecto nace de mirar de
            cerca, con tiempo, lo que hace único a cada lugar. Ese cuidado — más que cualquier equipo o técnica —
            es lo que ponemos en cada entrega.
          </p>
        </motion.div>

        {/* Legacy statement */}
        <div className="mb-24 max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-4xl text-[#1a1918] leading-snug">
            &ldquo;No lo hacemos para llenar un feed. Lo hacemos porque cada hotel tiene un alma que merece verse
            como se siente vivirlo.&rdquo;
          </p>
        </div>

        {/* Mayu profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-4"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1918]">Mayurlin Viera</h2>
            <p className="text-sm md:text-base text-[#5a5854] leading-relaxed">
              Crear contenido fue el sueño de Mayu antes de tener con qué hacerlo. Trabajar con los mejores
              hoteles del mundo fue, desde siempre, su objetivo número uno. Esa idea no se le fue nunca — solo
              esperó el momento y las manos correctas para hacerla real.
            </p>
          </motion.div>
        </div>

        {/* Yerfran profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-[#1a1918]/15 bg-[radial-gradient(circle_at_30%_20%,#f5f3ed,#e8e5dc)] flex flex-col items-center justify-center gap-3">
              <span className="font-serif text-3xl text-[#1a1918]/25">Y</span>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#5a5854]">
                Foto próximamente
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-4 order-2 lg:order-1"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1918]">Yerfran</h2>
            <p className="text-sm md:text-base text-[#5a5854] leading-relaxed">
              Yerfran llegó a la fotografía por otro camino: el de capturar lo que una persona siente en un
              lugar, no solo cómo se ve. Años de mirar con atención se convirtieron en un estilo propio — fotos
              con alma, hechas desde el cuidado y no desde la fórmula.
            </p>
          </motion.div>
        </div>

        {/* Together */}
        <div className="mb-24 max-w-2xl mx-auto text-center">
          <p className="text-sm md:text-base text-[#5a5854] leading-relaxed">
            Con los años, eso se volvió esto. Combinamos lo que cada uno hace mejor para darle a cada hotel lo
            mismo: una mirada honesta, con el tiempo y el cuidado de dos personas que ya saben trabajar juntas.
          </p>
          <div className="pt-8">
            <button
              onClick={onOpenAvailability}
              className="bg-[#1a1918] text-[#f5f3ed] px-6 py-3 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#5a5854] transition-colors"
            >
              Iniciar un proyecto
            </button>
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
    </div>
  );
};
