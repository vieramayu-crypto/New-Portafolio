import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hotel, setHotel] = useState('Grand Hotel Tremezzo');
  const [date, setDate] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setName('');
    setEmail('');
    setDate('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1a1918]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#f5f3ed] border border-[#1a1918]/20 max-w-lg w-full p-8 md:p-10 shadow-2xl z-10 font-sans"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-xs font-sans tracking-widest uppercase text-[#5a5854] hover:text-[#1a1918]"
            >
              [ ✕ ]
            </button>

            {sent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-[#1a1918] text-[#f5f3ed] rounded-full mx-auto flex items-center justify-center font-serif">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-[#1a1918]">Fecha en Revisión</h3>
                <p className="text-xs text-[#5a5854] leading-relaxed">
                  Gracias {name}. Verificaremos la disponibilidad para el {date || 'evento'} en {hotel} y nos comunicaremos a {email} a la brevedad.
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
                    Atención Rápida
                  </span>
                  <h3 className="font-serif text-2xl text-[#1a1918]">
                    Comprobar Disponibilidad
                  </h3>
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
                      placeholder="Su nombre"
                      className="w-full bg-white border border-[#1a1918]/20 p-2.5 text-xs focus:outline-none focus:border-[#1a1918]"
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
                      className="w-full bg-white border border-[#1a1918]/20 p-2.5 text-xs focus:outline-none focus:border-[#1a1918]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-sans tracking-widest uppercase text-[#5a5854] block">
                      Hotel / Villa
                    </label>
                    <select
                      value={hotel}
                      onChange={(e) => setHotel(e.target.value)}
                      className="w-full bg-white border border-[#1a1918]/20 p-2.5 text-xs focus:outline-none focus:border-[#1a1918]"
                    >
                      <option value="Grand Hotel Tremezzo">Grand Hotel Tremezzo</option>
                      <option value="Villa Cimbrone">Villa Cimbrone</option>
                      <option value="Belmond Hotel Caruso">Belmond Hotel Caruso</option>
                      <option value="Borgo Egnazia">Borgo Egnazia</option>
                      <option value="Hotel Danieli">Hotel Danieli</option>
                      <option value="Villa d'Este">Villa d'Este</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-sans tracking-widest uppercase text-[#5a5854] block">
                      Fecha del Evento
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-[#1a1918]/20 p-2.5 text-xs focus:outline-none focus:border-[#1a1918]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a1918] text-[#f5f3ed] py-3 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#5a5854] transition-colors mt-2"
                  >
                    Consultar Fecha
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
