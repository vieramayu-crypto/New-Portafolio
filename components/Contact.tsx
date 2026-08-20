import React, { useState } from 'react';
import { CollaborationInquiry } from '../types';
import { motion } from 'motion/react';
import { BrandsMarquee } from './BrandsMarquee';
import { Milestones } from './Milestones';
import { ProductionScope } from './ProductionScope';
import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';
import { useSiteContent } from '../src/lib/content';

const fieldClass =
  'w-full bg-white px-5 py-4 text-base text-[#1a1918] placeholder:text-[#5a5854] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#1a1918]/40 transition-shadow';

export const Contact: React.FC = () => {
  const content = useSiteContent();
  const [formData, setFormData] = useState<CollaborationInquiry>({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    collaborationType: 'Fotografía + Video',
    availabilityDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1918] pt-28 font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-4 mb-8">
        <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">{content.contact.eyebrow}</span>
        <h1 className="font-serif text-4xl md:text-6xl text-[#1a1918] tracking-wide">{content.contact.heading}</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-[#5a5854] font-sans leading-relaxed">
          {content.contact.subheading}
        </p>
      </div>

      {/* Milestones */}
      <Milestones />

      {/* Production scope — moved from Acerca de, presented as "qué entregamos" */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-[#1a1918]/10">
        <div className="text-center mb-14 md:mb-20 space-y-3">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#5a5854]">
            Qué entregamos
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1a1918]">Alcance de producción</h2>
        </div>
        <ProductionScope />
      </section>

      {/* Testimonials — real quotes from clients */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-[#1a1918]/10">
        <div className="text-center mb-14 space-y-3">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#5a5854]">
            Lo que dicen los equipos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1918]">Voces de la industria</h2>
        </div>
        <Testimonials />
      </section>

      {/* Form + email CTA */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24 border-t border-[#1a1918]/10">
        <div className="text-center mb-12 space-y-3">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#5a5854]">
            Escribinos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1a1918]">Cuéntanos del proyecto</h2>
          <div className="pt-2">
            <a
              href={`mailto:${content.contact.emailAddress}`}
              className="inline-flex items-center gap-3 border border-[#1a1918] px-6 py-3 text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-[#1a1918] hover:bg-[#1a1918] hover:text-[#f5f3ed] transition-colors"
            >
              <span>{content.contact.emailAddress}</span>
              <span aria-hidden>&rarr;</span>
            </a>
            <p className="mt-3 text-[11px] font-sans tracking-widest uppercase text-[#5a5854]">
              o completa el formulario
            </p>
          </div>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-[#1a1918]/15 p-8 md:p-12 text-center space-y-6 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[#1a1918] text-[#f5f3ed] mx-auto flex items-center justify-center font-serif text-xl">
              ✓
            </div>
            <h2 className="font-serif text-3xl text-[#1a1918]">Solicitud recibida</h2>
            <p className="text-sm text-[#5a5854] max-w-md mx-auto leading-relaxed">
              Gracias por escribir, <span className="font-semibold text-[#1a1918]">{formData.name}</span>. Te
              responderé a <span className="font-semibold text-[#1a1918]">{formData.email}</span> para revisar el
              proyecto con{' '}
              <span className="font-semibold text-[#1a1918]">{formData.propertyName || 'tu propiedad'}</span>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-sans tracking-widest uppercase underline underline-offset-4 text-[#1a1918]"
            >
              Enviar otra consulta
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nombre completo*"
                className={fieldClass}
              />

              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Correo electrónico*"
                className={fieldClass}
              />

              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Teléfono / WhatsApp (opcional)"
                className={fieldClass}
              />

              <input
                type="text"
                required
                value={formData.propertyName}
                onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                placeholder="Nombre de la propiedad*"
                className={fieldClass}
              />

              <select
                value={formData.collaborationType}
                onChange={(e) => setFormData({ ...formData, collaborationType: e.target.value })}
                className={`${fieldClass} appearance-none`}
              >
                <option value="Fotografía">Fotografía</option>
                <option value="Dirección cinematográfica">Dirección cinematográfica</option>
                <option value="Fotografía + Video">Fotografía + Video</option>
                <option value="Otro">Otro</option>
              </select>

              <input
                type="text"
                required
                value={formData.availabilityDate}
                onChange={(e) => setFormData({ ...formData, availabilityDate: e.target.value })}
                placeholder="Fechas de disponibilidad*"
                className={fieldClass}
              />
            </div>

            <textarea
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Detalles del proyecto (opcional)"
              className={`${fieldClass} resize-none`}
            />

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#1a1918] text-[#f5f3ed] px-12 py-4 text-xs font-sans tracking-[0.25em] uppercase font-medium hover:bg-[#5a5854] transition-colors"
              >
                Enviar solicitud
              </button>
            </div>
          </form>
        )}
      </div>

      {/* FAQ */}
      <FAQ />

      {/* Brands marquee */}
      <BrandsMarquee />
    </div>
  );
};
