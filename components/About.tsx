import React from 'react';
import { motion } from 'motion/react';
import { FlipWords } from './FlipWords';
import { ProductionScope } from './ProductionScope';

const COUPLE_DEMO_PHOTO =
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2400&q=80';

const MAYU_PORTRAIT = 'https://mayurlintravel.eu/wp-content/uploads/2026/08/P1002251.RW22-scaled.webp';
const YERFRAN_PORTRAIT = 'https://mayurlintravel.eu/wp-content/uploads/2026/08/P1001995.RW2_-scaled.webp';

interface AboutProps {
  onOpenAvailability: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAvailability }) => {
  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1918] font-sans">
      {/* Flip-words opening statement — full viewport, brutalist scale */}
      <section className="min-h-[100dvh] w-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif font-medium text-[18vw] sm:text-[14vw] md:text-[11vw] leading-[1.15] text-[#1a1918]">
          Fotografía con
          <br />
          <FlipWords words={['Alma', 'Amor', 'Autenticidad']} />
        </h1>
      </section>

      {/* Intro paragraph — its own full-screen section, generous breathing room */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="min-h-[100dvh] w-full flex items-center justify-center px-6 py-24"
      >
        <p className="font-serif text-4xl sm:text-5xl md:text-7xl text-[#1a1918] leading-[1.2] max-w-6xl text-center">
          Mayu Travel es un estudio de producción visual para hoteles de lujo, hecho por dos personas que se
          conocen desde hace años. No trabajamos con fórmulas ni plantillas: cada proyecto nace de mirar de
          cerca, con tiempo, lo que hace único a cada lugar.
        </p>
      </motion.section>

      {/* Legacy statement — full-width photo background, text overlaid */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen min-h-[90vh] md:min-h-[100dvh] mb-24 md:mb-32 overflow-hidden">
        <img
          src={COUPLE_DEMO_PHOTO}
          alt=""
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative min-h-[90vh] md:min-h-[100dvh] flex items-center justify-center px-6 md:px-16">
          <p className="font-serif text-white text-3xl sm:text-4xl md:text-6xl leading-[1.2] max-w-5xl text-center">
            &ldquo;No lo hacemos para llenar un feed. Lo hacemos porque cada hotel tiene un alma que merece verse
            como se siente vivirlo.&rdquo;
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
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
                src={MAYU_PORTRAIT}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-[#1a1918]/15 shadow-md">
              <img
                src={YERFRAN_PORTRAIT}
                alt="Yerfran"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[50%_20%] grayscale contrast-110"
              />
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
        <div className="min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center px-2 py-20 mb-32 md:mb-40">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1a1918] leading-relaxed max-w-3xl">
            Con los años, eso se volvió esto. Combinamos lo que cada uno hace mejor para darle a cada hotel lo
            mismo: una mirada honesta, con el tiempo y el cuidado de dos personas que ya saben trabajar juntas.
          </p>
          <div className="pt-16">
            <button
              onClick={onOpenAvailability}
              className="bg-[#1a1918] text-[#f5f3ed] px-12 py-6 text-base md:text-lg font-sans tracking-[0.25em] uppercase font-semibold hover:bg-[#5a5854] transition-colors"
            >
              Iniciar un proyecto
            </button>
          </div>
        </div>

        {/* Production scope */}
        <div className="min-h-[70vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center py-24">
          <h2 className="font-serif font-semibold text-5xl md:text-7xl text-[#1a1918] mb-24 md:mb-32">
            Alcance de producción
          </h2>
          <ProductionScope />
        </div>
      </div>
    </div>
  );
};
