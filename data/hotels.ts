import { HotelStory } from '../types';
import { publicImage } from '../src/lib/content';

export const HOTEL_STORIES: HotelStory[] = [
  {
    id: 'grand-hotel-tremezzo',
    hotelName: 'GRAND HOTEL TREMEZZO',
    leftTag: 'HOTEL',
    coupleName: 'EMY & OLY',
    location: 'Lago di Como',
    country: 'Italia',
    year: '2025',
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
        alt: 'Novios riendo juntos en abrazo emocional',
        caption: 'La risa espontánea tras el «sí, quiero»',
        aspectRatio: 'portrait',
        isBlackAndWhite: true
      },
      {
        id: 'gt-2',
        url: publicImage('sec1-foto2-v.jpg'),
        alt: 'Lanzamiento de globos y brindis en la piscina',
        caption: 'Celebración frente al lago',
        aspectRatio: 'portrait',
        isBlackAndWhite: true
      },
      {
        id: 'gt-3',
        url: publicImage('sec1-foto3-h.jpg'),
        alt: 'Beso romántico con luz de atardecer en las colinas',
        caption: 'Atardecer en la terraza del lago',
        aspectRatio: 'landscape',
        isBlackAndWhite: true
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
    hotelName: 'VILLA CIMBRONE',
    leftTag: 'VILLA',
    coupleName: 'DAVY & DAVID',
    location: 'Ravello, Costa Amalfitana',
    country: 'Italia',
    year: '2025',
    category: 'Villa Histórica',
    layoutVariant: 1,
    coverImage: 'https://images.unsplash.com/photo-1545232979-fbfd42e000b5?auto=format&fit=crop&w=1200&q=85',
    description: 'En lo alto de los acantilados de Ravello, la Terrazza dell’Infinito de Villa Cimbrone ofrece vistas panorámicas sobre el mar Tirreno.',
    quote: 'Donde los arcos góticos rozan las nubes y el Mediterráneo se vuelve infinito.',
    photos: [
      {
        id: 'vc-1',
        url: publicImage('sec2-foto1-h.jpg'),
        alt: 'Novia en vestido editorial sobre balcón de arcos mirando al mar',
        caption: 'Arco gótico de la terraza',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vc-2',
        url: publicImage('sec2-foto2-c.jpg'),
        alt: 'Pareja bajando por escalinata de piedra blanca',
        caption: 'Escalinata de las buganvillas',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vc-3',
        url: publicImage('sec2-foto3-v.jpg'),
        alt: 'Abrazo elegante de los novios entre jardines románticos',
        caption: 'Jardines secretos de Ravello',
        aspectRatio: 'square',
        isBlackAndWhite: true
      }
    ]
  },
  {
    id: 'hotel-caruso-belmond',
    hotelName: 'BELMOND HOTEL CARUSO',
    leftTag: 'PALAZZO',
    coupleName: 'CLARA & JULIAN',
    location: 'Ravello',
    country: 'Italia',
    year: '2024',
    category: 'Hotel de Lujo',
    layoutVariant: 2,
    coverImage: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=85',
    description: 'Un palacio del siglo XI suspendido entre el cielo y el mar, famoso por su piscina infinita que parece fundirse con el horizonte amalfitano.',
    quote: 'La elegancia serena del romanticismo italiano clásico.',
    photos: [
      {
        id: 'hc-1',
        url: publicImage('sec3-foto1-v.jpg'),
        alt: 'Beso apasionado de los novios bajo arcos',
        caption: 'Paseo privado al amanecer',
        aspectRatio: 'portrait',
        isBlackAndWhite: true
      },
      {
        id: 'hc-2',
        url: publicImage('sec3-foto2-h.jpg'),
        alt: 'Piscina infinita con reflejos dorados',
        caption: 'Piscina infinita sobre las nubes',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hc-3',
        url: publicImage('sec3-foto3-v.jpg'),
        alt: 'Detalles de papelería y alta costura',
        caption: 'Detalles bordados artesanalmente',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'borgo-egnazia-puglia',
    hotelName: 'BORGO EGNAZIA',
    leftTag: 'BORGO',
    coupleName: 'ELENA & MATTEO',
    location: 'Savelletri di Fasano, Puglia',
    country: 'Italia',
    year: '2024',
    category: 'Boda Destino',
    layoutVariant: 3,
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    description: 'Una reinterpretación contemporánea de una villa apuliana tradicional, construida en piedra caliza blanca con olivos milenarios.',
    quote: 'Piedra blanca, olivos milenarios y la luz dorada del mar Adriático.',
    photos: [
      {
        id: 'be-1',
        url: publicImage('sec4-foto1-v.jpg'),
        alt: 'Novios caminando por callejuela de piedra blanca',
        caption: 'La quietud de las callejuelas apulianas',
        aspectRatio: 'portrait',
        isBlackAndWhite: true
      },
      {
        id: 'be-2',
        url: publicImage('sec4-foto2-c.jpg'),
        alt: 'Patio de cal blanca y sol cenital',
        caption: 'Arquitectura de piedra caliza',
        aspectRatio: 'square',
        isBlackAndWhite: true
      },
      {
        id: 'be-3',
        url: publicImage('sec4-foto3-h.jpg'),
        alt: 'Mesa imperial iluminada por faroles artesanales',
        caption: 'Fiesta nocturna bajo las estrellas',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'hotel-danieli-venezia',
    hotelName: 'HOTEL DANIELI',
    leftTag: 'PALAZZO',
    coupleName: 'SOPHIA & LUCAS',
    location: 'Venecia',
    country: 'Italia',
    year: '2024',
    category: 'Hotel de Lujo',
    layoutVariant: 4,
    coverImage: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=85',
    description: 'Un palacio gótico veneciano del siglo XIV a pasos de la Plaza de San Marcos, cargado de historia, mármol rosado y chandeliers de Murano.',
    quote: 'Góndolas al anochecer y el misterio dorado del Gran Canal.',
    photos: [
      {
        id: 'hd-1',
        url: publicImage('sec5-foto1-h.jpg'),
        alt: 'Brindis con champán en la terraza Terrazza Danieli',
        caption: 'Vista sobre la laguna veneciana',
        aspectRatio: 'landscape',
        isBlackAndWhite: true
      },
      {
        id: 'hd-2',
        url: publicImage('sec5-foto2-v.jpg'),
        alt: 'Pareja en góndola veneciana vestida de gala',
        caption: 'Navegando el Gran Canal',
        aspectRatio: 'portrait',
        isBlackAndWhite: true
      },
      {
        id: 'hd-3',
        url: publicImage('sec5-foto3-v.jpg'),
        alt: 'Beso bajo los arcos de mármol del Palacio Ducal',
        caption: 'Arquitectura veneciana atemporal',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'villa-deste-como',
    hotelName: "VILLA D'ESTE",
    leftTag: 'RESORT',
    coupleName: 'CAMILLA & ADRIAN',
    location: 'Cernobbio, Lago di Como',
    country: 'Italia',
    year: '2025',
    category: 'Hotel de Lujo',
    layoutVariant: 5,
    coverImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85',
    description: 'Una legendaria residencia renacentista del siglo XVI rodeada de 25 hectáreas de jardines privados con estatuas y nymphaeums.',
    quote: 'Elegancia majestuosa en los jardines renacentistas del lago.',
    photos: [
      {
        id: 'vde-1',
        url: publicImage('sec6-foto1-c.jpg'),
        alt: 'Paseo romántico por los jardines renacentistas',
        caption: 'Jardines históricos de Villa d’Este',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'vde-2',
        url: publicImage('sec6-foto2-v.jpg'),
        alt: 'Novia preparando su vestido junto al mirador',
        caption: 'Preparativos al amanecer',
        aspectRatio: 'portrait',
        isBlackAndWhite: true
      },
      {
        id: 'vde-3',
        url: publicImage('sec6-foto3-h.jpg'),
        alt: 'Llegada en embarcación histórica Riva por el lago',
        caption: 'Navegación privada al atardecer',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'aman-venice',
    hotelName: 'AMAN VENICE',
    leftTag: 'PALAZZO',
    coupleName: 'VALENTINA & MARCO',
    location: 'Venecia',
    country: 'Italia',
    year: '2025',
    category: 'Hotel de Lujo',
    layoutVariant: 6,
    coverImage: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1200&q=85',
    description: 'El Palazzo Papadopoli alberga frescos del siglo XVIII de Tiepolo, jardines privados y salones barrocos sobre el Gran Canal.',
    quote: 'Lujo sutil y silencio dorado sobre las aguas de Venecia.',
    photos: [
      {
        id: 'av-1',
        url: publicImage('sec7-foto1-v.jpg'),
        alt: 'Mirada compartida en el balcón del Palazzo Papadopoli',
        caption: 'Balcón privado sobre el Gran Canal',
        aspectRatio: 'landscape',
        isBlackAndWhite: true
      },
      {
        id: 'av-2',
        url: publicImage('sec7-foto2-v.jpg'),
        alt: 'Novia con capa de tul bajo techos frescos de Tiepolo',
        caption: 'Frescos históricos de Tiepolo',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-3',
        url: publicImage('sec7-foto3-v.jpg'),
        alt: 'Brindis íntimo en los jardines privados del hotel',
        caption: 'Jardines secretos del palacio',
        aspectRatio: 'portrait',
        isBlackAndWhite: true
      }
    ]
  },
  {
    id: 'san-domenico-palace',
    hotelName: 'SAN DOMENICO PALACE',
    leftTag: 'RELAIS',
    coupleName: 'ISABELLA & MATHIEU',
    location: 'Taormina, Sicilia',
    country: 'Italia',
    year: '2024',
    category: 'Hotel de Lujo',
    layoutVariant: 7,
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    description: 'Un antiguo convento dominico del siglo XIV transformado en hotel Four Seasons con vistas al volcán Etna y la bahía de Taormina.',
    quote: 'Aromas de azahar, claustros de piedra y el resplandor del Etna.',
    photos: [
      {
        id: 'sdp-1',
        url: publicImage('sec8-foto1-c.jpg'),
        alt: 'Claustro de piedra y patio de los limoneros',
        caption: 'Claustro dominico del siglo XIV',
        aspectRatio: 'square',
        isBlackAndWhite: true
      },
      {
        id: 'sdp-2',
        url: publicImage('sec8-foto2-c.jpg'),
        alt: 'Novia contemplando la bahía de Taormina al atardecer',
        caption: 'Atardecer mediterráneo en Taormina',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-3',
        url: publicImage('sec8-foto3-h.jpg'),
        alt: 'Cena romántica al aire libre entre olivos y bougainvillea',
        caption: 'Banquete en los jardines sicilianos',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  }
];
