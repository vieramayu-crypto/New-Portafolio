import React, { useState } from 'react';
import { CollaborationInquiry } from '../types';
import { motion } from 'motion/react';
import { BrandsMarquee } from './BrandsMarquee';
import { ProductionScope } from './ProductionScope';
import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';
import { publicImage, useSiteContent } from '../src/lib/content';
import { openInquiryMail } from '../src/lib/inquiry';

/** Campos al mismo sistema de hairlines que el resto del sitio: sin relleno
 *  blanco ni sombra, que era lo único que quedaba con aire de plantilla. */
const fieldClass =
  'w-full border border-[#1a1918]/25 bg-transparent px-5 py-4 text-base text-[#1a1918] placeholder:text-[#5a5854] transition-colors focus:border-[#1a1918] focus:outline-none';

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
  const [composed, setComposed] = useState('');

  // El sitio es estático: no hay servidor que reciba el formulario. La consulta
  // se entrega abriendo el correo del visitante con todo el mensaje redactado,
  // y se deja el texto a la vista por si no tiene cliente de correo.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComposed(
      openInquiryMail(content.contact.emailAddress, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        propertyName: formData.propertyName,
        scope: formData.collaborationType,
        availabilityDate: formData.availabilityDate,
        message: formData.message,
      })
    );
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1918] pt-28 font-sans">
      {/* Portada de Contacto — centrada y simétrica, como el resto de la web.
          La trayectoria cierra la sección dentro de un contenedor. */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 pb-16 text-center md:pb-24">
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="block text-[10px] font-sans uppercase tracking-[0.3em] text-[#5a5854] md:text-xs"
        >
          {content.contact.eyebrow}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1], delay: 0.08 }}
          className="mt-8 flex flex-col items-center md:mt-12"
        >
          <h1 className="font-serif text-[13vw] leading-[1.02] text-[#1a1918] sm:text-[9vw] md:text-[5.2vw]">
            {content.contact.heading}
          </h1>
          <p className="mt-8 max-w-2xl font-serif text-[1.35rem] leading-[1.35] text-[#1a1918] sm:text-2xl md:mt-10 md:text-[1.8rem]">
            {content.contact.subheading}
          </p>

          <img
            src={publicImage('sec4-gal06-piscina-mujer-v.jpg')}
            alt=""
            className="mt-12 w-full max-w-xs object-cover md:mt-16 md:max-w-sm"
            style={{ aspectRatio: '3 / 4' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1], delay: 0.16 }}
          className="mt-20 border-y border-[#1a1918]/15 md:mt-28"
        >
          <div className="grid grid-cols-3 gap-x-6 py-10 md:gap-x-12 md:py-14">
            {content.milestones.items.map((item) => (
              <div key={item.label}>
                <div className="font-serif text-4xl leading-none text-[#1a1918] md:text-6xl">{item.value}</div>
                <div className="mx-auto mt-3 max-w-[12rem] text-[10px] font-sans uppercase leading-relaxed tracking-[0.2em] text-[#5a5854] md:mt-4 md:text-xs">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {content.milestones.footnote && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mx-auto mt-10 max-w-3xl font-sans text-xs uppercase leading-relaxed tracking-[0.2em] text-[#5a5854]"
          >
            {content.milestones.footnote}
          </motion.p>
        )}
      </section>

      {/* Production scope — moved from Acerca de, presented as "qué entregamos" */}
      <section className="w-full border-t border-[#1a1918]/10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14 md:mb-20 space-y-3">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#5a5854]">
            Qué entregamos
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1a1918]">Alcance de producción</h2>
        </div>
          <ProductionScope />
        </div>
      </section>

      {/* Testimonials — real quotes from clients */}
      <section className="w-full border-t border-[#1a1918]/10 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14 space-y-3">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#5a5854]">
            Lo que dicen los equipos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1918]">Voces de la industria</h2>
        </div>
          <Testimonials />
        </div>
      </section>

      {/* Form + email CTA */}
      <div className="w-full border-t border-[#1a1918]/10 pt-16 md:pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 space-y-3">
          <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#5a5854]">
            Escríbenos
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
            className="mx-auto max-w-3xl border border-[#1a1918]/25 p-8 md:p-12 text-center space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-[#1a1918] text-[#f5f3ed] mx-auto flex items-center justify-center font-serif text-xl">
              ✓
            </div>
            <h2 className="font-serif text-3xl text-[#1a1918]">Tu solicitud está lista</h2>
            <p className="text-sm text-[#5a5854] max-w-md mx-auto leading-relaxed">
              Gracias, <span className="font-semibold text-[#1a1918]">{formData.name}</span>. Abrimos tu correo con
              la consulta de{' '}
              <span className="font-semibold text-[#1a1918]">{formData.propertyName || 'tu propiedad'}</span> ya
              redactada — sólo queda enviarla. Respondemos en 48 h.
            </p>
            <p className="text-sm text-[#5a5854] max-w-md mx-auto leading-relaxed">
              ¿No se abrió tu cliente de correo? Copia el mensaje y escríbenos a{' '}
              <a
                href={`mailto:${content.contact.emailAddress}`}
                className="font-semibold text-[#1a1918] underline underline-offset-4"
              >
                {content.contact.emailAddress}
              </a>
              .
            </p>
            {composed && (
              <pre className="mx-auto max-h-56 max-w-md overflow-auto whitespace-pre-wrap bg-[#fbfaf6] p-4 text-left text-xs leading-relaxed text-[#5a5854]">
                {composed}
              </pre>
            )}
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-sans tracking-widest uppercase underline underline-offset-4 text-[#1a1918]"
            >
              Enviar otra consulta
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-5">
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
                className={fieldClass}
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
                Consultar disponibilidad
              </button>
            </div>
          </form>
        )}
        </div>
      </div>

      {/* FAQ */}
      <FAQ />

      {/* Brands marquee */}
      <BrandsMarquee />
    </div>
  );
};
