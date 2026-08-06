import React, { useState } from 'react';
import { AvailabilityInquiry } from '../types';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<AvailabilityInquiry>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    hotelName: 'Grand Hotel Tremezzo',
    guestCount: '50 - 100',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1918] pt-28 pb-24 px-6 md:px-12 max-w-4xl mx-auto font-sans">
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">
          Contacto Directo
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-[#1a1918] tracking-wide">
          Comprobar Disponibilidad
        </h1>
        <p className="max-w-lg mx-auto text-sm text-[#5a5854] font-sans leading-relaxed">
          Las reservas para la temporada de bodas se limitan a un número reducido de eventos por año para garantizar dedicación absoluta.
        </p>
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
          <h2 className="font-serif text-3xl text-[#1a1918]">Solicitud Recibida</h2>
          <p className="text-sm text-[#5a5854] max-w-md mx-auto leading-relaxed">
            Gracias por ponerse en contacto, <span className="font-semibold text-[#1a1918]">{formData.name}</span>. Nos pondremos en contacto en menos de 24 horas para revisar la fecha del <span className="font-semibold text-[#1a1918]">{formData.eventDate || 'su evento'}</span> en <span className="font-semibold text-[#1a1918]">{formData.hotelName}</span>.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-sans tracking-widest uppercase underline underline-offset-4 text-[#1a1918]"
          >
            Enviar otra consulta
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white border border-[#1a1918]/15 p-8 md:p-12 shadow-sm space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-sans tracking-widest uppercase text-[#5a5854] block">
                Nombre Completo *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="ej. Clara Vance"
                className="w-full bg-[#f5f3ed]/50 border border-[#1a1918]/20 p-3 text-sm focus:outline-none focus:border-[#1a1918]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-sans tracking-widest uppercase text-[#5a5854] block">
                Correo Electrónico *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ej. clara@ejemplo.com"
                className="w-full bg-[#f5f3ed]/50 border border-[#1a1918]/20 p-3 text-sm focus:outline-none focus:border-[#1a1918]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-sans tracking-widest uppercase text-[#5a5854] block">
                Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+34 600 000 000"
                className="w-full bg-[#f5f3ed]/50 border border-[#1a1918]/20 p-3 text-sm focus:outline-none focus:border-[#1a1918]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-sans tracking-widest uppercase text-[#5a5854] block">
                Fecha Estimada del Evento *
              </label>
              <input
                type="date"
                required
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="w-full bg-[#f5f3ed]/50 border border-[#1a1918]/20 p-3 text-sm focus:outline-none focus:border-[#1a1918]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-sans tracking-widest uppercase text-[#5a5854] block">
                Hotel o Villa de la Boda *
              </label>
              <select
                value={formData.hotelName}
                onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                className="w-full bg-[#f5f3ed]/50 border border-[#1a1918]/20 p-3 text-sm focus:outline-none focus:border-[#1a1918]"
              >
                <option value="Grand Hotel Tremezzo">Grand Hotel Tremezzo (Lago di Como)</option>
                <option value="Villa Cimbrone">Villa Cimbrone (Ravello)</option>
                <option value="Belmond Hotel Caruso">Belmond Hotel Caruso (Ravello)</option>
                <option value="Borgo Egnazia">Borgo Egnazia (Puglia)</option>
                <option value="Hotel Danieli">Hotel Danieli (Venecia)</option>
                <option value="Villa d'Este">Villa d'Este (Cernobbio)</option>
                <option value="Otra ubicación exclusiva">Otra ubicación exclusiva</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-sans tracking-widest uppercase text-[#5a5854] block">
                Número de Invitados
              </label>
              <select
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                className="w-full bg-[#f5f3ed]/50 border border-[#1a1918]/20 p-3 text-sm focus:outline-none focus:border-[#1a1918]"
              >
                <option value="Íntimo (10 - 40)">Íntimo (10 - 40)</option>
                <option value="50 - 100">50 - 100 invitados</option>
                <option value="100 - 200">100 - 200 invitados</option>
                <option value="Más de 200">Más de 200 invitados</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-sans tracking-widest uppercase text-[#5a5854] block">
              Detalles Adicionales & Visión de la Boda
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Cuéntenos sobre su historia, el estilo del evento o cualquier detalle especial..."
              className="w-full bg-[#f5f3ed]/50 border border-[#1a1918]/20 p-3 text-sm focus:outline-none focus:border-[#1a1918]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1a1918] text-[#f5f3ed] py-4 text-xs font-sans tracking-[0.25em] uppercase font-medium hover:bg-[#5a5854] transition-colors"
          >
            Enviar Solicitud de Disponibilidad
          </button>
        </form>
      )}

      {/* Direct Info */}
      <div className="mt-16 text-center space-y-3 text-xs font-sans text-[#5a5854] tracking-wider uppercase">
        <p>Atención directa: <a href="mailto:info@adovasio.it" className="text-[#1a1918] underline">info@adovasio.it</a></p>
        <p>Estudios en Milán &bull; Ravello &bull; Lago di Como</p>
      </div>
    </div>
  );
};
