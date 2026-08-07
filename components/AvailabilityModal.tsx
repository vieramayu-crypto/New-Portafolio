import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [availabilityDate, setAvailabilityDate] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setName('');
    setEmail('');
    setPropertyName('');
    setAvailabilityDate('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1a1918]/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#f5f3ed] border border-[#1a1918]/20 max-w-lg w-full p-8 md:p-10 shadow-2xl z-10 font-sans"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 text-xs font-sans tracking-widest uppercase text-[#5a5854] hover:text-[#1a1918] p-2 -m-2"
            >
              [ ✕ ]
            </button>

            {sent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-[#1a1918] text-[#f5f3ed] rounded-full mx-auto flex items-center justify-center font-serif">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-[#1a1918]">Solicitud en revisión</h3>
                <p className="text-xs text-[#5a5854] leading-relaxed">
                  Gracias {name}. Revisaré la disponibilidad para {propertyName || 'tu propiedad'}
                  {availabilityDate ? ` en ${availabilityDate}` : ''} y te escribo a {email} a la brevedad.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 bg-[#1a1918] text-[#f5f3ed] px-6 py-2.5 text-xs font-sans tracking-widest uppercase"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#5a5854] block mb-1">
                    Atención rápida
                  </span>
                  <h3 className="font-serif text-2xl text-[#1a1918]">Iniciar un proyecto</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-sans tracking-widest uppercase text-[#5a5854] block">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full bg-white border border-[#1a1918]/20 p-2.5 text-base focus:outline-none focus:border-[#1a1918]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-sans tracking-widest uppercase text-[#5a5854] block">
                      Correo
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="w-full bg-white border border-[#1a1918]/20 p-2.5 text-base focus:outline-none focus:border-[#1a1918]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-sans tracking-widest uppercase text-[#5a5854] block">
                      Propiedad / Marca
                    </label>
                    <input
                      type="text"
                      required
                      value={propertyName}
                      onChange={(e) => setPropertyName(e.target.value)}
                      placeholder="Nombre del hotel o marca"
                      className="w-full bg-white border border-[#1a1918]/20 p-2.5 text-base focus:outline-none focus:border-[#1a1918]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-sans tracking-widest uppercase text-[#5a5854] block">
                      Fechas de disponibilidad
                    </label>
                    <input
                      type="text"
                      required
                      value={availabilityDate}
                      onChange={(e) => setAvailabilityDate(e.target.value)}
                      placeholder="ej. semana del 12 de marzo"
                      className="w-full bg-white border border-[#1a1918]/20 p-2.5 text-base focus:outline-none focus:border-[#1a1918]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a1918] text-[#f5f3ed] py-3 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#5a5854] transition-colors mt-2"
                  >
                    Consultar fechas
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
