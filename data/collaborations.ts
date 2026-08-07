import { CollaborationCase, Testimonial } from '../types';

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

// Testimonios reales, tomados del media kit.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-ritz-carlton',
    quote:
      'Fotografía y video excepcionales. Gracias por tu visita y por el contenido tan especial que creaste durante tu estancia.',
    author: 'Jose',
    role: 'Equipo de Marketing',
    brandName: 'The Ritz-Carlton Abama',
  },
  {
    id: 't-gpro',
    quote:
      'Contenido increíble y una experiencia maravillosa. Esperamos que hayas disfrutado tanto como nosotros de tenerte aquí. Muchas gracias por el material tan bueno, le daremos muy buen uso.',
    author: 'Francisco',
    role: 'Director de Marketing',
    brandName: 'GPRO Valparaiso Palace & Spa',
  },
];
