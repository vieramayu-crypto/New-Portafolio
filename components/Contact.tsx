import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FAQ } from './FAQ';
import { useSiteContent } from '../src/lib/content';
import { openInquiryMail } from '../src/lib/inquiry';

/** Los campos del modal comparten el hairline del resto del sitio: sin caja,
 *  sin relleno, sin sombra. Serif grande para lo que el visitante escribe. */
const fieldClass =
  'block w-full border-0 bg-transparent p-0 font-serif text-xl text-[#1a1918] outline-none placeholder:text-[#5a5854]/50 md:text-[22px]';

const SCOPE_OPTIONS = [
  'Fotografía',
  'Vídeo cinematográfico',
  'Fotografía + vídeo',
  'Producción + distribución',
];

interface FieldProps {
  label: string;
  wide?: boolean;
  children: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({ label, wide, children }) => (
  <div className={`border-b border-[#1a1918]/25 pb-4 pt-2 ${wide ? 'md:col-span-2' : ''}`}>
    <label className="mb-3 block font-sans text-[10px] uppercase tracking-[0.2em] text-[#5a5854]">
      {label}
    </label>
    {children}
  </div>
);

/** Contacto — habla el mismo idioma visual que Acerca de.
 *
 *  Portada monumental, una segunda pantalla con una sola orientación, y el
 *  formulario recogido en un modal de cristal para que la página en reposo
 *  siga siendo tipografía sobre crema y no un impreso. */
export const Contact: React.FC = () => {
  const { contact } = useSiteContent();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [composed, setComposed] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    propertyName: '',
    scope: '',
    message: '',
  });

  // Cierre con Escape y bloqueo del scroll de fondo mientras el modal vive.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  // El sitio es estático: la consulta se entrega abriendo el correo del
  // visitante con el mensaje ya redactado, y se deja copiable por si no
  // tiene cliente de correo configurado.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComposed(openInquiryMail(contact.emailAddress, form));
    setSubmitted(true);
  };

  const headingLines = contact.headingLines;
  const lastLine = headingLines[headingLines.length - 1];

  return (
    <div className="min-h-screen bg-[#f5f3ed] font-sans text-[#1a1918]">
      <div
        className={`transition-[filter,transform,opacity] duration-[620ms] ease-[cubic-bezier(.22,1,.36,1)] ${
          open ? 'scale-[.994] opacity-60 blur-[10px]' : ''
        }`}
      >
        {/* Portada monumental */}
        <section className="flex min-h-[calc(100svh-7rem)] items-center justify-center px-6 pb-[8vh] pt-28 text-center md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.06 }}
            className="m-0 font-serif text-[clamp(66px,20vw,100px)] font-medium leading-[1.05] tracking-[-0.055em] md:text-[clamp(76px,10.5vw,170px)]"
          >
            {headingLines.slice(0, -1).map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 10, filter: 'blur(9px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.68, ease: 'easeInOut', delay: 0.58 }}
              className="block"
            >
              {lastLine}
            </motion.span>
          </motion.h1>
        </section>

        {/* Segunda pantalla: una sola orientación y un solo CTA */}
        <section className="flex min-h-[82svh] items-center justify-center px-6 py-[12vh] text-center md:min-h-[88svh] md:px-12">
          <div className="w-full max-w-[940px]">
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
              className="mx-auto max-w-[18ch] font-serif text-[clamp(31px,9vw,42px)] leading-[1.32] tracking-[-0.024em] md:text-[clamp(34px,3.4vw,54px)]"
            >
              {contact.introMain}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.12 }}
              className="mx-auto mt-7 max-w-[52ch] text-[12.5px] leading-[1.75] text-[#5a5854] md:text-[13px]"
            >
              {contact.introSub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="mt-14 flex flex-col items-center gap-6"
            >
              <button
                onClick={() => {
                  setSubmitted(false);
                  setOpen(true);
                }}
                className="bg-[#1a1918] px-8 py-4 text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#f5f3ed] transition-colors hover:bg-[#5a5854] md:px-10 md:py-[1.15rem] md:text-xs"
              >
                {contact.ctaLabel}
              </button>

              <div className="text-[10px] uppercase tracking-[0.14em] text-[#5a5854]">
                O escribe directamente a{' '}
                <a
                  href={`mailto:${contact.emailAddress}`}
                  className="underline underline-offset-4 hover:text-[#1a1918]"
                >
                  {contact.emailAddress}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <FAQ />
      </div>

      {/* Velo y modal de solicitud */}
      <AnimatePresence>
        {open && (
          <>
            {/* Velo más crema que en el prototipo (.16): con el velo casi
                transparente, el titular gigante de detrás sobrevivía al
                desenfoque de la página y se leía como una mancha gris bajo
                los primeros campos en móvil. */}
            <motion.div
              key="veil"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen(false)}
              // Más crema que en el prototipo (.16): con el velo casi transparente,
              // el titular gigante de detrás sobrevivía al desenfoque y se leía
              // como una mancha gris bajo los primeros campos en móvil.
              className="fixed inset-0 z-[60] bg-[#f5f3ed]/45 backdrop-blur-[9px]"
              aria-hidden
            />

            {/* Contenedor fijo que centra, y dentro el panel animado: así el
                `transform` de Framer Motion no compite con el centrado. */}
            <div
              key="modal"
              className="pointer-events-none fixed inset-0 z-[61] flex items-center justify-center p-3 md:p-10"
            >
              <motion.aside
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
                initial={{ opacity: 0, y: 12, scale: 0.982 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.982 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mt-glass mt-glass-light no-scrollbar pointer-events-auto relative max-h-full w-full overflow-y-auto overflow-x-hidden rounded-lg text-[#1a1918] md:max-h-[min(820px,calc(100svh-80px))] md:w-[min(1040px,100%)] md:rounded-[10px]"
              >
              <div className="relative px-6 pb-9 pt-16 md:px-[clamp(34px,6vw,84px)] md:pb-[clamp(56px,5.5vw,76px)] md:pt-[clamp(50px,5.5vw,76px)]">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar"
                  className="absolute right-4 top-4 z-[3] flex h-10 w-10 items-center justify-center rounded-full border border-[#1a1918]/20 bg-white/20 text-xl text-[#1a1918] transition-colors hover:bg-white/40 md:right-6 md:top-6 md:h-[42px] md:w-[42px]"
                >
                  ×
                </button>

                {submitted ? (
                  <div className="mx-auto max-w-xl space-y-6 py-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1918] font-serif text-xl text-[#f5f3ed]">
                      ✓
                    </div>
                    <h2 className="font-serif text-3xl text-[#1a1918] md:text-4xl">
                      Tu solicitud está lista
                    </h2>
                    <p className="mx-auto max-w-md text-sm leading-relaxed text-[#5a5854]">
                      Gracias, <span className="font-medium text-[#1a1918]">{form.name}</span>. Abrimos
                      tu correo con la consulta de{' '}
                      <span className="font-medium text-[#1a1918]">
                        {form.propertyName || 'tu propiedad'}
                      </span>{' '}
                      ya redactada — sólo queda enviarla.
                    </p>
                    <p className="mx-auto max-w-md text-sm leading-relaxed text-[#5a5854]">
                      ¿No se abrió tu cliente de correo? Copia el mensaje y escríbenos a{' '}
                      <a
                        href={`mailto:${contact.emailAddress}`}
                        className="font-medium text-[#1a1918] underline underline-offset-4"
                      >
                        {contact.emailAddress}
                      </a>
                      .
                    </p>
                    {composed && (
                      <pre className="mx-auto max-h-56 max-w-md overflow-auto whitespace-pre-wrap bg-white/40 p-4 text-left text-xs leading-relaxed text-[#5a5854]">
                        {composed}
                      </pre>
                    )}
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[10px] font-sans uppercase tracking-[0.22em] text-[#1a1918] underline underline-offset-4"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-14">
                      <div className="mb-4 font-sans text-[9px] uppercase tracking-[0.28em] text-[#5a5854] md:text-[10px]">
                        {contact.modalKicker}
                      </div>
                      <h2
                        id="contact-modal-title"
                        className="m-0 mb-4 font-serif text-[48px] leading-[.96] tracking-[-0.035em] md:text-[clamp(48px,5.2vw,78px)]"
                      >
                        {contact.modalTitle}
                      </h2>
                      <p className="mx-auto max-w-[58ch] text-[13px] leading-[1.65] text-[#5a5854] md:text-sm">
                        {contact.modalCopy}
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-[34px] md:gap-y-7"
                    >
                      <Field label="Nombre">
                        <input
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={fieldClass}
                        />
                      </Field>

                      <Field label="Email">
                        <input
                          required
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={fieldClass}
                        />
                      </Field>

                      <Field label="Propiedad">
                        <input
                          required
                          value={form.propertyName}
                          onChange={(e) => setForm({ ...form, propertyName: e.target.value })}
                          className={fieldClass}
                        />
                      </Field>

                      <Field label="Qué necesitas">
                        <select
                          required
                          value={form.scope}
                          onChange={(e) => setForm({ ...form, scope: e.target.value })}
                          className={fieldClass}
                        >
                          <option value="">Seleccionar</option>
                          {SCOPE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field label="Proyecto" wide>
                        <textarea
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Objetivo, fechas aproximadas y cualquier contexto que consideres útil."
                          className={`${fieldClass} h-48 min-h-[190px] resize-y`}
                        />
                      </Field>

                      <div className="flex justify-center pt-4 md:col-span-2">
                        <button
                          type="submit"
                          className="border-b border-[#1a1918]/65 pb-3 text-[10px] font-sans uppercase tracking-[0.22em] text-[#1a1918] transition-colors hover:border-[#1a1918]"
                        >
                          Enviar consulta →
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
              </motion.aside>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
