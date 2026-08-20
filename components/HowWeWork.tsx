import React from 'react';
import { motion } from 'motion/react';
import { useSiteContent } from '../src/lib/content';

export const HowWeWork: React.FC = () => {
  const { howWeWork } = useSiteContent();

  return (
    <section className="w-full py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#5a5854]">
            {howWeWork.eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1a1918]">{howWeWork.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-16 md:gap-x-20">
          {howWeWork.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col gap-4 border-t border-[#1a1918]/15 pt-6"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl md:text-4xl text-[#1a1918]/40">{step.number}</span>
                <span className="text-[10px] md:text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">
                  Paso {i + 1} de {howWeWork.steps.length}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#1a1918]">{step.title}</h3>
              <p className="text-base md:text-lg text-[#5a5854] leading-relaxed font-sans">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
