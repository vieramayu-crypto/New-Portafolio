import React from 'react';

const PILLARS = [
  {
    title: 'Producción Visual',
    items: [
      'Selección curada de fotografía de lifestyle y arquitectura en alta resolución.',
      'Video cinematográfico orientado a la marca.',
    ],
  },
  {
    title: 'Visibilidad Digital',
    items: [
      'Cortometrajes de marca alineados con la narrativa del hotel.',
      'Cobertura diaria de stories durante la estancia.',
      'Distribución en Instagram y TikTok.',
    ],
  },
  {
    title: 'Entrega de Material',
    items: [
      'Archivos editados, con corrección de color, listos para usar.',
      'Entrega digital organizada para web, redes sociales y plataformas de reservas.',
    ],
  },
  {
    title: 'Alineación Estratégica',
    items: ['Revisión y ajuste de marca en postproducción.'],
  },
];

export const ProductionScope: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      {PILLARS.map((pillar, i) => (
        <div key={pillar.title} className="space-y-3 border-t border-[#1a1918]/15 pt-5">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-2xl text-[#1a1918]/30">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-serif text-xl text-[#1a1918]">{pillar.title}</h3>
          </div>
          <ul className="space-y-2">
            {pillar.items.map((item) => (
              <li key={item} className="text-sm text-[#5a5854] leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
