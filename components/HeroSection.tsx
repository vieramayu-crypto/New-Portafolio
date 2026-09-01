import React from 'react';
import { motion } from 'motion/react';
import { HERO_PHOTO } from '../data/media';
import { useSiteContent } from '../src/lib/content';

/** Entrada compartida del bloque editorial: sube y se aclara una sola vez.
 *  El HTML aprobado no la lleva, pero el hero entra justo después del video
 *  de intro y un corte seco ahí se lee como un fallo de carga. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1] as const, delay },
});

/** Hero D — Editorial Index refinado.
 *
 *  Titular a media altura sobre el margen izquierdo, y toda la trayectoria
 *  recogida en una banda de cristal estrecha al pie. La banda no es decorativa:
 *  es donde vive la prueba (35+ propiedades, 5 países, 4 clientes recurrentes)
 *  sin robarle aire al titular.
 */
export const HeroSection: React.FC = () => {
  const { hero, milestones } = useSiteContent();

  return (
    <section className="relative h-[100svh] min-h-[680px] w-full select-none overflow-hidden bg-[#1a1918] font-sans text-white">
      <img
        src={HERO_PHOTO}
        alt="Mayu Travel — producción visual para hoteles de lujo"
        className="absolute inset-0 h-full w-full object-cover object-[61%_28%] saturate-[.84] md:object-[56%_28%]"
      />

      {/* Dos velos cruzados: uno lateral que sostiene el titular sobre el
          margen izquierdo, y uno inferior muy leve para asentar la banda. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,.30), transparent 62%), linear-gradient(0deg, rgba(0,0,0,.13), transparent 42%)',
        }}
      />

      {/* Bloque editorial, a media altura sobre el margen izquierdo */}
      <div className="absolute inset-x-5 top-[43%] z-[3] -translate-y-[52%] md:right-auto md:left-[clamp(22px,3.4vw,54px)] md:top-1/2">
        <motion.p
          {...rise(0.1)}
          className="mb-[15px] text-[9px] uppercase tracking-[0.28em] text-white/[.72]"
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          {...rise(0.18)}
          className="m-0 max-w-[7.7ch] font-serif text-[clamp(58px,16.5vw,82px)] font-normal leading-[.84] tracking-[-0.045em] md:max-w-[8.7ch] md:text-[clamp(64px,7.3vw,116px)]"
        >
          {hero.titleLead} <i>{hero.titleEmphasis}</i>
        </motion.h1>
      </div>

      {/* Banda de cristal: etiqueta, trayectoria y el enlace a los proyectos.
          Se centra con `mx-auto`, no con `translate`: Framer Motion escribe su
          propio `transform` para animar y se llevaría por delante el centrado. */}
      <motion.div
        {...rise(0.42)}
        className="mt-glass absolute inset-x-0 bottom-[max(14px,env(safe-area-inset-bottom))] z-[3] mx-auto h-32 w-[calc(100vw-28px)] overflow-hidden rounded-[9px] md:bottom-[clamp(22px,3vw,42px)] md:h-[76px] md:w-[min(68vw,1120px)] md:min-w-[680px] md:rounded-[10px]"
      >
        {/* Las columnas son algo más anchas que en el prototipo: la métrica
            aprobada ("4 clientes recurrentes") es más larga que la que había
            ("6 años") y con el reparto original partía en dos líneas. */}
        <div className="grid h-full grid-cols-3 grid-rows-2 items-center px-4 py-3.5 text-[6.5px] uppercase tracking-[0.18em] md:grid-cols-[1.05fr_repeat(3,0.88fr)_0.9fr] md:grid-rows-1 md:whitespace-nowrap md:px-6 md:py-0 md:text-[8px]">
          <div className="col-span-2 md:col-span-1">{hero.glassLabel}</div>

          {milestones.items.map((item, i) => (
            <div
              key={item.label}
              className={`pl-0 md:border-l md:border-white/[.14] md:pl-5 ${
                i === 0 ? '' : 'border-l border-white/[.14] pl-2.5'
              }`}
            >
              <b className="mb-0.5 block font-serif text-[24px] font-normal italic tracking-normal md:mb-0 md:mr-[7px] md:inline md:text-[21px]">
                {item.value}
              </b>
              {item.label}
            </div>
          ))}

          <button
            onClick={() =>
              document.getElementById('hotel-section')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="col-start-3 row-start-1 text-right uppercase tracking-[0.18em] text-white/90 transition-opacity hover:opacity-100 md:col-start-auto md:row-start-auto"
          >
            {hero.ctaLabel}
          </button>
        </div>
      </motion.div>
    </section>
  );
};
