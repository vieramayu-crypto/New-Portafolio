import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useSiteContent } from '../src/lib/content';
import { openInquiryMail } from '../src/lib/inquiry';

/** Los campos comparten el hairline del resto del sitio: sin caja, sin relleno,
 *  sin sombra. Serif grande para lo que el visitante escribe. */
const fieldClass =
  'block w-full border-0 bg-transparent p-0 font-serif text-xl text-[#1a1918] outline-none placeholder:text-[#5a5854]/50 md:text-[22px]';

const SCOPE_OPTIONS = [
  'Photography',
  'Cinematic film',
  'Photography + film',
  'Production + distribution',
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

interface InquiryModalProps {
  open: boolean;
  onClose: () => void;
}

/** El único formulario de la web.
 *
 *  Vive aquí y no dentro de Contacto porque lo abren cinco sitios: el CTA de
 *  Contacto, el del bloque de valor, el del cierre de Inicio, el de Acerca de y
 *  "Consultar disponibilidad" del menú. Antes había dos formularios distintos y
 *  el visitante veía uno u otro según por dónde entrara.
 */
export const InquiryModal: React.FC<InquiryModalProps> = ({ open, onClose }) => {
  const { contact } = useSiteContent();
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
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  // El sitio es estático: la consulta se entrega abriendo el correo del
  // visitante con el mensaje ya redactado, y se deja copiable por si no
  // tiene cliente de correo configurado.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComposed(openInquiryMail(contact.emailAddress, form));
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
        {open && (
          <>
            {/* Velo mucho más crema que en el prototipo (.16). Aquel vivía sólo
                sobre la página de Contacto, que ya es crema; este se abre
                también sobre una foto a pantalla completa y sobre el cierre en
                negro, y a baja opacidad el fondo atravesaba el cristal: mancha
                cálida en un sitio, losa gris en el otro. A .90 el panel se ve
                igual se abra desde donde se abra. */}
            <motion.div
              key="veil"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={onClose}
              className="fixed inset-0 z-[60] bg-[#f5f3ed]/90 backdrop-blur-[9px]"
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
                aria-labelledby="inquiry-modal-title"
                initial={{ opacity: 0, y: 12, scale: 0.982 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.982 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mt-glass mt-glass-light no-scrollbar pointer-events-auto relative max-h-full w-full overflow-y-auto overflow-x-hidden rounded-lg text-[#1a1918] md:max-h-[min(820px,calc(100svh-80px))] md:w-[min(1040px,100%)] md:rounded-[10px]"
              >
                <div className="relative px-6 pb-9 pt-16 md:px-[clamp(34px,6vw,84px)] md:pb-[clamp(56px,5.5vw,76px)] md:pt-[clamp(50px,5.5vw,76px)]">
                  <button
                    onClick={onClose}
                    aria-label="Close"
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
                        Your enquiry is ready
                      </h2>
                      <p className="mx-auto max-w-md text-sm leading-relaxed text-[#5a5854]">
                        Thank you, <span className="font-medium text-[#1a1918]">{form.name}</span>.
                        We have opened your email client with the enquiry for{' '}
                        <span className="font-medium text-[#1a1918]">
                          {form.propertyName || 'your property'}
                        </span>{' '}
                        already written — all that is left is to send it.
                      </p>
                      <p className="mx-auto max-w-md text-sm leading-relaxed text-[#5a5854]">
                        Did your email client not open? Copy the message and write to us at{' '}
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
                        Send another enquiry
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-14">
                        <div className="mb-4 font-sans text-[9px] uppercase tracking-[0.28em] text-[#5a5854] md:text-[10px]">
                          {contact.modalKicker}
                        </div>
                        <h2
                          id="inquiry-modal-title"
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
                        <Field label="Name">
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

                        <Field label="Property">
                          <input
                            required
                            value={form.propertyName}
                            onChange={(e) => setForm({ ...form, propertyName: e.target.value })}
                            className={fieldClass}
                          />
                        </Field>

                        <Field label="What you need">
                          <select
                            required
                            value={form.scope}
                            onChange={(e) => setForm({ ...form, scope: e.target.value })}
                            className={fieldClass}
                          >
                            <option value="">Select</option>
                            {SCOPE_OPTIONS.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </Field>

                        <Field label="Project" wide>
                          <textarea
                            required
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Your goal, approximate dates and any context you think is useful."
                            className={`${fieldClass} h-48 min-h-[190px] resize-y`}
                          />
                        </Field>

                        <div className="flex justify-center pt-4 md:col-span-2">
                          <button
                            type="submit"
                            className="border-b border-[#1a1918]/65 pb-3 text-[10px] font-sans uppercase tracking-[0.22em] text-[#1a1918] transition-colors hover:border-[#1a1918]"
                          >
                            Send enquiry →
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
  );
};
