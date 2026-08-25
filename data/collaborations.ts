import { CollaborationCase, Testimonial } from '../types';
import { publicImage } from '../src/lib/content';

// Trabajos confirmados en el media kit. Sin fotografía propia todavía
// (hasMedia: false) -- se muestran como casos reservados en vez de usar
// imágenes de archivo que no son un trabajo real.
export const COLLABORATIONS: CollaborationCase[] = [
  {
    id: 'ritz-carlton-abama',
    brandName: 'The Ritz-Carlton Abama',
    category: 'Grandes Resorts de Lujo',
    summary: 'Fotografía y video para uno de los grandes resorts de la marca.',
    hasMedia: false,
  },
  {
    id: 'intercontinental-lisboa',
    brandName: 'InterContinental Lisboa',
    category: 'Grandes Resorts de Lujo',
    location: 'Lisboa',
    summary: 'Proyecto reciente con el grupo IHG Hotels & Resorts.',
    hasMedia: false,
  },
  {
    id: 'gpro-valparaiso',
    brandName: 'GPRO Valparaiso Palace & Spa',
    category: 'Boutique y Destino',
    summary: 'Producción visual para un resort boutique cinco estrellas.',
    hasMedia: false,
  },
  {
    id: 'villa-venecia',
    brandName: 'Villa Venecia Boutique Hotel',
    category: 'Boutique y Destino',
    summary: 'Fotografía editorial para un hotel boutique gourmet.',
    hasMedia: false,
  },
  {
    id: 'honeymoon-petra',
    brandName: 'Honeymoon Petra Villas',
    category: 'Boutique y Destino',
    location: 'Santorini',
    summary: 'Contenido de marca para villas boutique en Santorini.',
    hasMedia: false,
  },
  {
    id: 'terra-dominicata',
    brandName: 'Terra Dominicata',
    category: 'Boutique y Destino',
    summary: 'Historias visuales para un destino boutique con conciencia sostenible.',
    hasMedia: false,
  },
  {
    id: 'delta-park',
    brandName: 'Delta Park',
    category: 'Experiencial y Sostenible',
    summary: 'Producción de contenido experiencial y sostenible.',
    hasMedia: false,
  },
  {
    id: 'numa',
    brandName: 'Numa',
    category: 'Experiencial y Sostenible',
    summary: 'Contenido de marca para la red de alojamientos Numa.',
    hasMedia: false,
  },
  {
    id: 'district-hive',
    brandName: 'District Hive',
    category: 'Experiencial y Sostenible',
    summary: 'Producción visual experiencial y sostenible.',
    hasMedia: false,
  },
];

// Testimonios reales de los equipos de cada propiedad. Ordenados por fuerza
// comercial, no cronológicamente: primero los que hablan en lenguaje de negocio
// (alcance, marca, resultados) y los que acreditan trabajo recurrente.
// Las citas están recortadas -- se quitan saludos y despedidas, el cuerpo queda
// intacto. `photo` solo se rellena cuando tenemos material de esa propiedad.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-honeymoon-petra',
    quote:
      'Su perspectiva única y el uso de imágenes cautivadoras han sido invaluables para compartir nuestra historia y llegar a nuevos públicos. Su imagen positiva ha captado la esencia de nuestra marca.',
    author: 'Aias Mavrikis',
    brandName: 'Honeymoon Petra Villas',
    photo: publicImage('sec4-gal07-piscina-cruceros-v.jpg'),
  },
  {
    id: 't-gpro',
    quote:
      'Gracias a vosotros por, como siempre, la profesionalidad y buen hacer que han mostrado en todo momento. Y, qué decir, el grandísimo material que nos habéis dejado. Será un gusto tenerlos de vuelta en nuestra casa.',
    author: 'Francisco Dominguez',
    role: 'Director de Marketing',
    brandName: 'GPRO Valparaíso Palace & Spa',
    photo: publicImage('sec5-gal09-piscina-palmeras-v.jpg'),
    repeatNote: '3 rodajes juntos',
  },
  {
    id: 't-ritz-carlton',
    quote:
      'Me gustaría agradecerle de parte del departamento su interés por todo el proyecto de The Ritz-Carlton, Abama y nuestra oferta gastronómica, y por el maravilloso contenido que ha creado en su estancia. Esperamos tenerla de vuelta en el futuro.',
    author: 'Jose Lorente',
    role: 'Equipo de Marketing',
    brandName: 'The Ritz-Carlton Tenerife, Abama',
    photo: publicImage('sec1-gal1-facade-v.jpg'),
  },
  {
    id: 't-costa-magica',
    quote:
      'Muchas gracias por tu trabajo. Las fotos y videos son simplemente increíbles. Ganamos muchos seguidores nuevos.',
    author: 'Katerina',
    brandName: 'Costa Mágica',
    photo: publicImage('testi-costa-magica-v.jpg'),
  },
  {
    id: 't-numa',
    quote:
      'Acabamos de revisar el contenido y es absolutamente precioso. Gracias por todo el esfuerzo, el cariño y el amor que le dedicaron.',
    author: 'Luna Nemeth',
    brandName: 'Numa',
    photo: publicImage('testi-numa-v.jpg'),
    repeatNote: '3 propiedades: Madrid, Ámsterdam y Sevilla',
  },
  {
    id: 't-welmoon',
    quote:
      'Un contenido increíble. Sois unos grandes profesionales. Llegaréis lejos poniéndole tanto cariño a lo que hacéis. Estaremos encantados de recibiros en más ocasiones.',
    author: 'Juan',
    brandName: 'Welmoon Villas Paisaje',
    photo: publicImage('sec8-gal08-jacuzzi-noche-v.jpg'),
  },
  {
    id: 't-holiday-inn',
    quote:
      'Estamos muy contentos con el resultado del contenido. Muy satisfechos con la calidad y con el resultado de su creatividad.',
    author: 'Zara',
    brandName: 'Holiday Inn Express — Ámsterdam',
    photo: publicImage('testi-holiday-inn-v.jpg'),
  },
  {
    id: 't-coeo',
    quote:
      'Las fotos están muy bonitas y como contenido para todos los canales nos va muy muy bien, ya las verás en todo lado.',
    author: 'María Andrea',
    brandName: 'COEO Stay & Share',
    photo: publicImage('testi-coeo-v.jpg'),
  },
];
