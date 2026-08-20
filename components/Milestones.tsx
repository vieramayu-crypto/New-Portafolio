import React from 'react';
import { motion } from 'motion/react';
import { useSiteContent } from '../src/lib/content';

export const Milestones: React.FC = () => {
  const { milestones } = useSiteContent();

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#5a5854]">
            {milestones.eyebrow}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 border-y border-[#1a1918]/10 py-12 md:py-16">
          {milestones.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-center space-y-3"
            >
              <div className="font-serif text-6xl md:text-7xl lg:text-8xl text-[#1a1918] leading-none">
                {item.value}
              </div>
              <div className="text-[11px] md:text-xs font-sans tracking-[0.2em] uppercase text-[#5a5854] max-w-[14rem] mx-auto leading-relaxed">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {milestones.footnote && (
          <p className="mt-10 text-center text-[11px] md:text-xs font-sans tracking-[0.18em] uppercase text-[#5a5854] leading-relaxed max-w-3xl mx-auto">
            {milestones.footnote}
          </p>
        )}
      </div>
    </section>
  );
};
