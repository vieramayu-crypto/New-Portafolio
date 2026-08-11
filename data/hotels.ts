import { HotelStory } from '../types';
import { publicImage } from '../src/lib/content';

export const HOTEL_STORIES: HotelStory[] = [
  {
    id: 'ritz-carlton-abama',
    hotelName: 'THE RITZ-CARLTON TENERIFE, ABAMA',
    leftTag: 'HOTEL',
    coupleName: 'Fotografía & Video',
    location: 'Guía de Isora, Tenerife',
    country: 'España',
    year: '2026',
    category: 'Hotel de Lujo',
    layoutVariant: 0,
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    galleryVideo: {
      url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      poster: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85',
    },
    description: 'Ubicado en las orillas cristalinas del Lago di Como, el Grand Hotel Tremezzo representa la cima del glamour italiano de la belle époque. Sus jardines escalonados descienden hasta el agua, enmarcando cada celebración con la calma del lago y el eco de las montañas circundantes. Dentro, los salones conservan el espíritu de la belle époque: mármoles claros, arañas de cristal y una luz que parece detenida en el tiempo. Cada rincón del hotel cuenta una historia distinta, y juntos forman el escenario perfecto para una boda que se siente íntima incluso en su grandeza.',
    quote: 'Un romance envuelto en velos de encaje vintage y la brisa atemporal del lago.',
    photos: [
      {
        id: 'gt-1',
        url: publicImage('sec1-foto1-v.jpg'),
        alt: 'Vista aérea del resort Abama entre plataneras y el campo de golf',
        caption: 'El resort visto desde el aire',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-2',
        url: publicImage('sec1-foto2-v.jpg'),
        alt: 'Mujer descendiendo la escalinata terracota junto al estanque de Abama',
        caption: 'La icónica escalinata de la Citadel',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-3',
        url: publicImage('sec1-foto3-h.jpg'),
        alt: 'Choza de bambú con clase de yoga entre palmeras',
        caption: 'Yoga bajo la choza junto al campo de golf',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'gt-4',
        url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85',
        alt: 'Paseo privado al amanecer junto al lago',
        caption: 'Amanecer sobre el Lago di Como',
        aspectRatio: 'landscape',
        isBlackAndWhite: true
      },
      {
        id: 'gt-5',
        url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=900&q=85',
        alt: 'Detalle arquitectónico de la fachada belle époque',
        caption: 'Fachada belle époque',
        aspectRatio: 'portrait',
        isBlackAndWhite: true
      },
      {
        id: 'gt-6',
        url: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=85',
        alt: 'Piscina infinita con reflejos dorados sobre el lago',
        caption: 'Piscina infinita al atardecer',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'gt-7',
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85',
        alt: 'Mesa imperial iluminada por faroles junto al lago',
        caption: 'Cena privada a la orilla del lago',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'gt-8',
        url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=85',
        alt: 'Detalles de papelería y alta costura sobre mármol',
        caption: 'Detalles artesanales de la ceremonia',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-9',
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
        alt: 'Vista panorámica de la villa italiana entre olivos',
        caption: 'Vista panorámica sobre el jardín',
        aspectRatio: 'landscape',
        isBlackAndWhite: true
      },
      {
        id: 'gt-10',
        url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=85',
        alt: 'Paseo romántico por los jardines renacentistas del lago',
        caption: 'Últimos pasos de la celebración',
        aspectRatio: 'portrait',
        isBlackAndWhite: true
      }
    ]
  },
  {
    id: 'villa-cimbrone-ravello',
    hotelName: 'VESTIGE BINIDUFÀ',
    leftTag: 'FINCA',
    coupleName: 'Fotografía & Video',
    location: 'Ferreries, Menorca',
    country: 'España',
    year: '2026',
    category: 'Villa Histórica',
    layoutVariant: 1,
    coverImage: 'https://images.unsplash.com/photo-1545232979-fbfd42e000b5?auto=format&fit=crop&w=1200&q=85',
    description:
      'En un valle del norte de Menorca, dentro de una finca privada de 800 hectáreas, Vestige Binidufà restaura una possessió agrícola del siglo XVIII — piedra, barro y materiales naturales que toman su tono directamente del paisaje que la rodea, con la herencia morisca aún presente en su nombre.',
    quote: 'Piedra, tierra y silencio — el norte de Menorca tal como siempre fue.',
    photos: [
      {
        id: 'vc-1',
        url: publicImage('sec2-foto1-h.jpg'),
        alt: 'Vista aérea de la finca de Vestige Binidufà entre olivos y campos del norte de Menorca',
        caption: 'La finca vista desde el aire',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vc-2',
        url: publicImage('sec2-foto2-c.jpg'),
        alt: 'Mujer caminando por el camino de tierra hacia las casas de piedra de la finca',
        caption: 'El camino hacia la possessió',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'vc-3',
        url: publicImage('sec2-foto3-v.jpg'),
        alt: 'Gran vasija de barro y planta en un rincón de paredes encaladas',
        caption: 'Materiales que nacen del paisaje',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'hotel-caruso-belmond',
    hotelName: 'DELTAPARK VITALRESORT',
    leftTag: 'RESORT',
    coupleName: 'Fotografía & Video',
    location: 'Gwatt, Thunersee',
    country: 'Suiza',
    year: '2026',
    category: 'Escapada Romántica',
    layoutVariant: 2,
    coverImage: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=85',
    description:
      'A orillas del lago de Thun, entre dos reservas naturales del Kanderdelta, Deltapark Vitalresort combina arquitectura alpina contemporánea con un spa de 2.000 m² — agua, montaña y bienestar en un mismo horizonte.',
    quote: 'El silencio de los Alpes se refleja entero en el lago de Thun.',
    photos: [
      {
        id: 'hc-1',
        url: publicImage('sec3-foto1-v.jpg'),
        alt: 'Servicio de café y folleto de Deltapark Vitalresort sobre la cama',
        caption: 'Los pequeños detalles del servicio',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-2',
        url: publicImage('sec3-foto2-h.jpg'),
        alt: 'Vista aérea del resort junto al lago de Thun',
        caption: 'El resort visto desde el aire',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hc-3',
        url: publicImage('sec3-foto3-v.jpg'),
        alt: 'Cesta de mimbre con toallas recién lavadas junto a la entrada',
        caption: 'El detalle del spa alpino',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'borgo-egnazia-puglia',
    hotelName: 'HONEYMOON PETRA VILLAS',
    leftTag: 'VILLAS',
    coupleName: 'Fotografía & Video',
    location: 'Imerovigli, Santorini',
    country: 'Grecia',
    year: '2026',
    category: 'Hotel de Lujo',
    layoutVariant: 3,
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    description:
      'Suspendido sobre el acantilado de Imerovigli, tallado en roca volcánica sobre la caldera de Santorini, Honeymoon Petra Villas ofrece una de las piscinas más buscadas del Egeo — un balcón de piedra sobre el mar más azul de Grecia.',
    quote: 'Roca volcánica y horizonte infinito — así se ve el amanecer sobre la caldera.',
    photos: [
      {
        id: 'be-1',
        url: publicImage('sec4-foto1-v.jpg'),
        alt: 'Pareja desayunando frente a la caldera de Santorini',
        caption: 'Desayuno frente a la caldera',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-2',
        url: publicImage('sec4-foto2-c.jpg'),
        alt: 'Arquitectura de cúpulas blancas de Honeymoon Petra Villas con el mar Egeo al fondo',
        caption: 'Cúpulas blancas sobre el Egeo',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'be-3',
        url: publicImage('sec4-foto3-h.jpg'),
        alt: 'Piscina infinita sobre el acantilado de Imerovigli',
        caption: 'Una de las piscinas más buscadas del Egeo',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'hotel-danieli-venezia',
    hotelName: 'GPRO VALPARAÍSO PALACE & SPA',
    leftTag: 'PALACE',
    coupleName: 'Fotografía & Video',
    location: 'Bonanova, Palma de Mallorca',
    country: 'España',
    year: '2026',
    category: 'Hotel de Lujo',
    layoutVariant: 4,
    coverImage: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=85',
    description:
      'En lo alto del distrito de Bonanova, rodeado de jardines privados con vistas a la bahía de Palma, GPRO Valparaíso Palace & Spa alberga el spa más grande de Mallorca — un refugio sereno entre agua, piedra y vegetación mediterránea.',
    quote: 'Jardines, agua y la bahía de Palma extendida al fondo de cada terraza.',
    photos: [
      {
        id: 'hd-1',
        url: publicImage('sec5-foto1-h.jpg'),
        alt: 'Piscina interior del spa con cascada de agua',
        caption: 'El spa más grande de Mallorca',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hd-2',
        url: publicImage('sec5-foto2-v.jpg'),
        alt: 'Llegada a la habitación con maleta y frutas de bienvenida',
        caption: 'La llegada a la suite',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-3',
        url: publicImage('sec5-foto3-v.jpg'),
        alt: 'Huésped en albornoz leyendo el folleto de tratamientos con vista a la bahía de Palma',
        caption: 'Tratamientos con vista a la bahía',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'villa-deste-como',
    hotelName: 'HOTEL ESPLÉNDIDO',
    leftTag: 'HOTEL',
    coupleName: 'Fotografía & Video',
    location: 'Port de Sóller, Mallorca',
    country: 'España',
    year: '2026',
    category: 'Hotel de Lujo',
    layoutVariant: 5,
    coverImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
    description:
      'En primera línea de la bahía de Puerto de Sóller, con la Serra de Tramuntana como telón de fondo, Hotel Espléndido combina fachadas de piedra caliza, terrazas frente al mar y el tranvía histórico que aún recorre el paseo marítimo.',
    quote: 'Piedra, mar y el eco del tranvía sobre los adoquines de Sóller.',
    photos: [
      {
        id: 'vde-1',
        url: publicImage('sec6-foto1-c.jpg'),
        alt: 'Entrada de Hotel Espléndido con el bistro Davant la Mar',
        caption: 'La entrada sobre el paseo marítimo',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'vde-2',
        url: publicImage('sec6-foto2-v.jpg'),
        alt: 'Vista elevada del tranvía histórico y la playa de Puerto de Sóller',
        caption: 'El tranvía histórico junto a la bahía',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-3',
        url: publicImage('sec6-foto3-h.jpg'),
        alt: 'Pareja conversando en la terraza con vista a la bahía de Sóller',
        caption: 'Terraza frente a la bahía',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'aman-venice',
    hotelName: 'INTERCONTINENTAL LISBOA',
    leftTag: 'HOTEL',
    coupleName: 'Fotografía & Video',
    location: 'Lisboa',
    country: 'Portugal',
    year: '2026',
    category: 'Hotel de Lujo',
    layoutVariant: 6,
    coverImage: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=85',
    description:
      'Construido sobre una de las siete colinas de Lisboa, frente al Parque Eduardo VII, InterContinental Lisboa combina arquitectura contemporánea con vistas que se extienden hasta el río Tajo — una lectura moderna del skyline lisboeta.',
    quote: 'Lisboa entera se despliega desde lo alto de esta colina.',
    photos: [
      {
        id: 'av-1',
        url: publicImage('sec7-foto1-v.jpg'),
        alt: 'Servicio de café y zumo de naranja en la mesa de la suite',
        caption: 'El detalle del servicio en suite',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-2',
        url: publicImage('sec7-foto2-v.jpg'),
        alt: 'Juego de luz y sombra entre las cortinas de la habitación',
        caption: 'Luz de media tarde en la suite',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-3',
        url: publicImage('sec7-foto3-v.jpg'),
        alt: 'Fachada de InterContinental Lisboa construida sobre una de las siete colinas',
        caption: 'La fachada sobre la colina',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'san-domenico-palace',
    hotelName: 'WELMOON VILLAS PAISAJE',
    leftTag: 'GLAMPING',
    coupleName: 'Fotografía & Video',
    location: 'Caravaca de la Cruz, Murcia',
    country: 'España',
    year: '2026',
    category: 'Escapada Romántica',
    layoutVariant: 7,
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    description:
      'Entre pinares de Caravaca de la Cruz, las villas abovedadas de Welmoon Paisaje están pensadas para dormir bajo un manto de estrellas — arquitectura íntima, hecha para desconectar del ruido y mirar el cielo sin filtros.',
    quote: 'Un techo de estrellas y el silencio de la sierra murciana.',
    photos: [
      {
        id: 'sdp-1',
        url: publicImage('sec8-foto1-c.jpg'),
        alt: 'Telescopio y tumbona en la terraza de madera entre pinos',
        caption: 'Preparados para mirar las estrellas',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-2',
        url: publicImage('sec8-foto2-c.jpg'),
        alt: 'Pareja relajada en la cama con dosel bajo el techo abovedado',
        caption: 'La cama bajo el cielo abierto',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-3',
        url: publicImage('sec8-foto3-h.jpg'),
        alt: 'Interior de la villa abovedada con techo de cristal y vistas al bosque',
        caption: 'El techo de cristal hacia el bosque',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  }
];
