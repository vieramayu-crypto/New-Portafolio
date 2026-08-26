import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { publicImage, useSiteContent } from '../src/lib/content';

// One photo per step, matched by index. Photos live in code (not content.json)
// so Mayurlin can rewrite the step copy without needing to touch image paths.
const STEP_PHOTOS = [
  publicImage('sec3-gal02-checkin-v.jpg'),
  publicImage('sec1-gal5-reflejo-v.jpg'),
  publicImage('sec1-gal2-paseo-v.jpg'),
  publicImage('sec4-gal09-piscina-imerovigli-v.jpg'),
];

const AUTO_ADVANCE_MS = 7500;

export const HowWeWork: React.FC = () => {
  const { howWeWork } = useSiteContent();
  const steps = howWeWork.steps;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (steps.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [steps.length]);

  const step = steps[index];
  const photo = STEP_PHOTOS[index % STEP_PHOTOS.length];
  const nextPhoto = STEP_PHOTOS[(index + 1) % STEP_PHOTOS.length];

  if (!step) return null;

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32">
      {/* Peripheral slice of the next photo, bleeding off the left edge.
          Sits level with the slide's photo band, echoing a carousel mid-motion. */}
      <div className="pointer-events-none absolute left-0 top-[40%] hidden h-[300px] w-[38px] -translate-y-1/2 overflow-hidden md:block lg:w-[54px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={nextPhoto}
            src={nextPhoto}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full object-cover"
            style={{ objectPosition: '80% 50%' }}
          />
        </AnimatePresence>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Section label */}
        <div className="text-center mb-16 space-y-3 md:mb-24">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#5a5854] md:text-xs">
            {howWeWork.eyebrow}
          </span>
          <h2 className="font-serif text-4xl text-[#1a1918] md:text-6xl">{howWeWork.heading}</h2>
        </div>

        {/* Slide */}
        <div className="relative min-h-[700px] sm:min-h-[740px] md:min-h-[800px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Cifra sobredimensionada — el ancla de la composición */}
                <div aria-hidden className="font-serif text-5xl leading-none text-[#1a1918]/25 md:text-7xl">
                  {step.number}
                </div>

                <img
                  src={photo}
                  alt=""
                  className="mt-8 w-52 object-cover sm:w-60 md:mt-10 md:w-[280px]"
                  style={{ aspectRatio: '3 / 4' }}
                />

                <p className="mt-10 max-w-2xl font-serif text-[1.45rem] leading-[1.3] text-[#1a1918] sm:text-3xl md:mt-12 md:text-[2.2rem] md:leading-[1.28]">
                  {step.description}
                </p>

                <div className="mt-8 md:mt-10">
                  <div className="font-serif text-xl text-[#1a1918] md:text-2xl">{step.title}</div>
                  <div className="mt-1 text-[10px] font-sans uppercase tracking-[0.25em] text-[#5a5854] md:text-xs">
                    Paso {index + 1} de {steps.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot pagination */}
        <div className="flex items-center justify-center gap-3 pt-14 md:pt-16">
          {steps.map((s, i) => (
            <button
              key={s.number}
              onClick={() => setIndex(i)}
              aria-label={`Ir al paso ${i + 1}: ${s.title}`}
              aria-current={i === index}
              className="p-1.5 -m-1.5"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === index ? 'h-2.5 w-2.5 bg-[#1a1918]' : 'h-1.5 w-1.5 bg-[#1a1918]/25'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
