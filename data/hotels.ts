import { HotelStory } from '../types';
import { publicImage } from '../src/lib/content';

export const HOTEL_STORIES: HotelStory[] = [
  {
    id: 'ritz-carlton-abama',
    hotelName: 'THE RITZ-CARLTON TENERIFE, ABAMA',
    leftTag: 'HOTEL',
    coupleName: 'Arquitectura morisca',
    location: 'Guía de Isora, Tenerife',
    country: 'España',
    year: '2026',
    category: 'Hotel de Lujo',
    layoutVariant: 0,
    caseStudy: {
      season: 'Julio · Verano',
      duration: '4 días',
      usage: 'Redes sociales · Campaña de temporada alta',
    },
    coverImage: publicImage('sec1-portada.jpg'),
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
      }
    ],
    galleryPhotos: [
      {
        id: 'gt-gal-1',
        url: publicImage('sec1-gal1-facade-v.jpg'),
        alt: 'Fachada terracota de Abama entre palmeras y fuentes escalonadas',
        caption: 'La fachada morisca, entre palmeras y fuentes',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-2',
        url: publicImage('sec1-gal2-paseo-v.jpg'),
        alt: 'Mujer paseando con cámara en mano frente a la fachada del resort',
        caption: 'Un paseo por los jardines del resort',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-3',
        url: publicImage('sec1-gal3-habitacion-v.jpg'),
        alt: 'Detalle de la habitación, mesita de noche y lámpara colgante junto a la cama',
        caption: 'El detalle de cada habitación',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-4',
        url: publicImage('sec1-gal4-playa-h.jpg'),
        alt: 'Vista elevada de la cala privada de Abama con sombrillas y tumbonas',
        caption: 'La cala privada del resort',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-5',
        url: publicImage('sec1-gal5-reflejo-v.jpg'),
        alt: 'Reflejo simétrico de las palmeras y la fachada en un estanque',
        caption: 'Simetría entre agua y arquitectura',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-6',
        url: publicImage('sec1-gal6-piscina-v.jpg'),
        alt: 'Piscina principal del resort entre palmeras y jardines decorativos',
        caption: 'La piscina principal, entre palmeras',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-7',
        url: publicImage('sec1-gal7-spa-v.jpg'),
        alt: 'Tratamiento de piedras calientes en el spa del resort',
        caption: 'Un momento de calma en el spa',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-8',
        url: publicImage('sec1-gal8-restaurante-h.jpg'),
        alt: 'Plato de alta gastronomía servido en el restaurante del resort',
        caption: 'Alta cocina para cerrar el día',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'aman-venice',
    hotelName: 'INTERCONTINENTAL LISBOA',
    leftTag: 'HOTEL',
    coupleName: 'Urbano de altura',
    location: 'Lisboa',
    country: 'Portugal',
    year: '2026',
    category: 'Hotel de Lujo',
    layoutVariant: 6,
    caseStudy: {
      season: 'Septiembre · Verano',
      duration: '3 días',
      usage: 'Redes sociales',
    },
    coverImage: publicImage('sec7-portada.jpg'),
    description:
      'Construido sobre una de las siete colinas de Lisboa, frente al Parque Eduardo VII, InterContinental Lisboa combina arquitectura contemporánea con vistas que se extienden hasta el río Tajo — una lectura moderna del skyline lisboeta.',
    quote: 'Lisboa entera se despliega desde lo alto de esta colina.',
    photos: [
      {
        id: 'av-1',
        url: publicImage('sec7-portada.jpg'),
        alt: 'Fachada vertical del InterContinental Lisboa, edificio completo sobre la colina',
        caption: 'La fachada, sobre la colina',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-2',
        url: publicImage('sec7-gal12-tranvia-v.jpg'),
        alt: 'Tranvía amarillo número 28 pasando por una calle empedrada de Lisboa',
        caption: 'Lisboa, a la salida del hotel',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-3',
        url: publicImage('sec7-gal08-cafe-v.jpg'),
        alt: 'Camarero sirviendo café con la copa de zumo de naranja en primer plano',
        caption: 'El café, servido al detalle',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ],
    galleryPhotos: [
      {
        id: 'av-gal-1',
        url: publicImage('sec7-gal02-fachada-h.jpg'),
        alt: 'Fachada del InterContinental Lisboa vista de esquina, con la marquesina de entrada',
        caption: 'La entrada, desde la avenida',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-2',
        url: publicImage('sec7-gal03-recepcion-h.jpg'),
        alt: 'Recepción del hotel con mostrador dorado y panel de mármol azul iluminado',
        caption: 'El check-in, entre mármol azul y latón',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-3',
        url: publicImage('sec7-foto1-v.jpg'),
        alt: 'Lobby del hotel con lámparas colgantes de globos de cristal ámbar',
        caption: 'El lobby, bajo las lámparas de cristal',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-4',
        url: publicImage('sec7-gal04-escritorio-h.jpg'),
        alt: 'Escritorio de la habitación con laptop y lámpara junto al ventanal con vista al skyline de Lisboa',
        caption: 'La habitación, con Lisboa al fondo',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-5',
        url: publicImage('sec7-gal05-cama-detalle-v.jpg'),
        alt: 'Detalle de la cama con cojines bordados turquesa y lámparas encendidas',
        caption: 'La cama, entre cojines bordados',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-6',
        url: publicImage('sec7-foto2-v.jpg'),
        alt: 'Camarero sirviendo el desayuno en la suite',
        caption: 'El servicio, en la habitación',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-7',
        url: publicImage('sec7-foto3-v.jpg'),
        alt: 'Vista cenital del desayuno servido en la habitación',
        caption: 'El desayuno, visto desde arriba',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-8',
        url: publicImage('sec7-gal07-cama-h.jpg'),
        alt: 'Pareja en batas blancas brindando con zumo de naranja en la cama, con el desayuno servido delante',
        caption: 'Un brindis, antes de empezar el día',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-9',
        url: publicImage('sec7-gal06-silueta-v.jpg'),
        alt: 'Silueta de una mujer abriendo la cortina del ventanal al contraluz de la mañana',
        caption: 'La primera luz, al abrir la cortina',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-10',
        url: publicImage('sec7-gal09-cortinas-v.jpg'),
        alt: 'Juego de luz y sombra entre las cortinas de la habitación sobre la alfombra',
        caption: 'Luz de media tarde en la suite',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-11',
        url: publicImage('sec7-gal10-gym-v.jpg'),
        alt: 'Mujer corriendo en una cinta del gimnasio del hotel',
        caption: 'Un momento en el gimnasio',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-12',
        url: publicImage('sec7-gal11-lampara-v.jpg'),
        alt: 'Detalle de lámpara y planta sobre mesa de mármol en el restaurante al anochecer',
        caption: 'La cena, entre luz cálida y mármol',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'villa-cimbrone-ravello',
    hotelName: 'VESTIGE COLLECTION, BINIDUFÀ',
    leftTag: 'FINCA',
    coupleName: 'Patrimonio menorquín',
    location: 'Ferreries, Menorca',
    country: 'España',
    year: '2026',
    category: 'Villa Histórica',
    layoutVariant: 1,
    caseStudy: {
      season: 'Junio · Verano',
      duration: '3 días',
      usage: 'Redes sociales · Campaña de temporada alta',
    },
    coverImage: publicImage('sec2-portada.jpg'),
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
    ],
    galleryPhotos: [
      {
        id: 'vc-gal-1',
        url: publicImage('sec2-gal01-aerea-h.jpg'),
        alt: 'Vista aérea del conjunto de la finca entre campos de cultivo y colinas',
        caption: 'La finca vista desde el aire',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-2',
        url: publicImage('sec2-gal02-facade-h.jpg'),
        alt: 'Fachada de piedra de la finca con tumbonas y sombrilla en la terraza',
        caption: 'La fachada de piedra, entre colinas',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-3',
        url: publicImage('sec2-gal03-salon-v.jpg'),
        alt: 'Hombre caminando por el salón rústico de techos de madera',
        caption: 'Un paseo por los espacios comunes',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-4',
        url: publicImage('sec2-gal04-urna-v.jpg'),
        alt: 'Gran vasija de barro y planta en un rincón de paredes encaladas',
        caption: 'Materiales que nacen del paisaje',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-5',
        url: publicImage('sec2-gal05-camino-h.jpg'),
        alt: 'Mujer caminando por el camino de tierra hacia las casas de piedra de la finca',
        caption: 'El camino hacia la possessió',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-6',
        url: publicImage('sec2-gal06-patio-v.jpg'),
        alt: 'Mujer leyendo en un sillón bajo un arco de piedra junto a la habitación',
        caption: 'Un momento de calma en el patio',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-7',
        url: publicImage('sec2-gal07-gym-v.jpg'),
        alt: 'Gimnasio abovedado con vistas al mar desde una ventana arqueada',
        caption: 'El gimnasio, frente al mar',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-8',
        url: publicImage('sec2-gal08-vacas-v.jpg'),
        alt: 'Vacas pastando en los campos que rodean la finca',
        caption: 'El paisaje agrícola que envuelve la finca',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-9',
        url: publicImage('sec2-gal09-piscina-h.jpg'),
        alt: 'Vista aérea de la piscina ovalada entre tumbonas y vegetación',
        caption: 'La piscina, vista desde el aire',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-10',
        url: publicImage('sec2-gal10-habitacion-h.jpg'),
        alt: 'Mujer en albornoz sentada en la habitación junto a una pared de piedra',
        caption: 'El descanso, junto a la piedra',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'hotel-caruso-belmond',
    hotelName: 'DELTAPARK VITALRESORT',
    leftTag: 'RESORT',
    coupleName: 'Alpino de bienestar',
    location: 'Gwatt, Thunersee',
    country: 'Suiza',
    year: '2026',
    category: 'Escapada Romántica',
    layoutVariant: 2,
    caseStudy: {
      season: 'Septiembre · Verano',
      duration: '3 días',
      usage: 'Redes sociales',
    },
    coverImage: publicImage('sec3-portada.jpg'),
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
    ],
    galleryPhotos: [
      {
        id: 'hc-gal-1',
        url: publicImage('sec3-foto2-h.jpg'),
        alt: 'Vista aérea del resort junto al lago de Thun',
        caption: 'El resort, visto desde el aire',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-2',
        url: publicImage('sec3-gal01-fireplace-v.jpg'),
        alt: 'Chimenea de diseño en el lobby del resort',
        caption: 'La chimenea del lobby',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-3',
        url: publicImage('sec3-gal02-checkin-v.jpg'),
        alt: 'Mujer con bata de Deltapark caminando por el jardín hacia el resort',
        caption: 'Camino hacia la recepción',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-4',
        url: publicImage('sec3-foto1-v.jpg'),
        alt: 'Servicio de café y folleto de Deltapark Vitalresort sobre la cama',
        caption: 'Los pequeños detalles del servicio',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-5',
        url: publicImage('sec3-gal03-balcon-v.jpg'),
        alt: 'Mujer en bata tomando café en el balcón de la habitación',
        caption: 'Café en el balcón, frente al lago',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-6',
        url: publicImage('sec3-gal04-desayuno-v.jpg'),
        alt: 'Detalle de café y manzana en bata Deltapark sobre la cama',
        caption: 'Desayuno en la habitación',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-7',
        url: publicImage('sec3-foto3-v.jpg'),
        alt: 'Cesta de mimbre con toallas recién lavadas junto a la entrada',
        caption: 'El detalle del spa alpino',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-8',
        url: publicImage('sec3-gal05-sauna-v.jpg'),
        alt: 'Mujer sentada en la sauna de madera del spa',
        caption: 'Un momento de calma en la sauna',
        aspectRatio: 'portrait',
        isBlackAndWhite: true
      },
      {
        id: 'hc-gal-9',
        url: publicImage('sec3-gal06-lounge-v.jpg'),
        alt: 'Mujer en bata sentada frente a la vista del lago desde el área de relajación',
        caption: 'El área de relajación, frente al lago',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-10',
        url: publicImage('sec3-gal07-atardecer-v.jpg'),
        alt: 'Atardecer sobre el lago de Thun con veleros amarrados',
        caption: 'Atardecer sobre el lago',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-11',
        url: publicImage('sec3-gal08-fachada-h.jpg'),
        alt: 'Fachada del resort iluminada al anochecer entre los árboles',
        caption: 'La fachada, al anochecer',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-12',
        url: publicImage('sec3-gal09-aerea-v.jpg'),
        alt: 'Vista aérea cenital del complejo del resort junto al lago',
        caption: 'El complejo, visto desde arriba',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'borgo-egnazia-puglia',
    hotelName: 'HONEYMOON PETRA VILLAS',
    leftTag: 'VILLAS',
    coupleName: 'Acantilado egeo',
    location: 'Imerovigli, Santorini',
    country: 'Grecia',
    year: '2026',
    category: 'Hotel de Lujo',
    layoutVariant: 3,
    caseStudy: {
      season: 'Mayo · Primavera',
      duration: '4 días',
      usage: 'Redes sociales',
    },
    coverImage: publicImage('sec4-portada.jpg'),
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
    ],
    galleryPhotos: [
      {
        id: 'be-gal-1',
        url: publicImage('sec4-gal01-entrada-h.jpg'),
        alt: 'Entrada de Honeymoon Petra Villas con la cúpula azul de una iglesia al fondo',
        caption: 'La entrada, con la cúpula azul asomando',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-2',
        url: publicImage('sec4-gal02-detalle-hat-v.jpg'),
        alt: 'Sombrero y toalla bordada Honeymoon Petra sobre la cama',
        caption: 'Los detalles del recibimiento',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-3',
        url: publicImage('sec4-gal03-habitacion-v.jpg'),
        alt: 'Habitación con cabecera de madera y cojín bordado de Honeymoon Petra Villas',
        caption: 'El descanso, tallado en la roca',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-4',
        url: publicImage('sec4-gal04-terraza-caminando-v.jpg'),
        alt: 'Mujer con vestido azul caminando por la terraza hacia la vista de la caldera',
        caption: 'Camino a la terraza',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-5',
        url: publicImage('sec4-foto1-v.jpg'),
        alt: 'Pareja desayunando frente a la caldera de Santorini',
        caption: 'Desayuno frente a la caldera',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-6',
        url: publicImage('sec4-gal05-desayuno-v.jpg'),
        alt: 'Rebanadas de sandía servidas en el buffet del desayuno',
        caption: 'Sabores de la isla en el desayuno',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-7',
        url: publicImage('sec4-foto2-c.jpg'),
        alt: 'Arquitectura de cúpulas blancas de Honeymoon Petra Villas con el mar Egeo al fondo',
        caption: 'Cúpulas blancas sobre el Egeo',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-8',
        url: publicImage('sec4-gal06-piscina-mujer-v.jpg'),
        alt: 'Mujer bajo la sombrilla Honeymoon Petra en el borde de la piscina',
        caption: 'Sombra al borde de la piscina',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-9',
        url: publicImage('sec4-gal07-piscina-cruceros-v.jpg'),
        alt: 'Piscina infinita con vista a los cruceros anclados en la caldera',
        caption: 'La piscina, frente a los cruceros de la caldera',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-10',
        url: publicImage('sec4-gal08-piscina-panorama-h.jpg'),
        alt: 'Vista panorámica de la piscina con la caldera y cruceros al fondo',
        caption: 'La caldera entera, desde la piscina',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-11',
        url: publicImage('sec4-foto3-h.jpg'),
        alt: 'Piscina infinita sobre el acantilado de Imerovigli',
        caption: 'Una de las piscinas más buscadas del Egeo',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-12',
        url: publicImage('sec4-gal09-piscina-imerovigli-v.jpg'),
        alt: 'Reflejo del sol en la piscina infinita con las casas blancas de Imerovigli detrás',
        caption: 'Últimos reflejos sobre Imerovigli',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'hotel-danieli-venezia',
    hotelName: 'GPRO VALPARAÍSO PALACE & SPA',
    leftTag: 'PALACE',
    coupleName: 'Mediterráneo de spa',
    location: 'Bonanova, Palma de Mallorca',
    country: 'España',
    year: '2026',
    category: 'Hotel de Lujo',
    layoutVariant: 4,
    caseStudy: {
      season: 'Verano · 2023, 2024 y 2026',
      duration: '5 días',
      usage: 'Redes sociales · Campaña de temporada alta',
    },
    coverImage: publicImage('sec5-portada.jpg'),
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
    ],
    galleryPhotos: [
      {
        id: 'hd-gal-1',
        url: publicImage('sec5-gal01-recepcion-h.jpg'),
        alt: 'Anfitriona rubia recibiendo a una huésped en la recepción del GPRO Valparaíso',
        caption: 'La recepción, primera bienvenida',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-2',
        url: publicImage('sec5-gal10-cartel-jardin-v.jpg'),
        alt: 'Cartel del jardín señalando Piscina, Hall, Gamba Palace, Wellness & Spa, Tenis y Bistro Mar Blau',
        caption: 'Un vistazo al mapa del resort',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-3',
        url: publicImage('sec5-foto2-v.jpg'),
        alt: 'Llegada a la habitación con maleta y frutas de bienvenida',
        caption: 'La llegada a la suite',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-4',
        url: publicImage('sec5-gal03-cafe-cama-v.jpg'),
        alt: 'Mano levantando la taza de café por encima de la cama, con el cabecero de cuero mostaza detrás',
        caption: 'El café, buenos días',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-5',
        url: publicImage('sec5-gal02-cava-v.jpg'),
        alt: 'Botella de cava Codorníu Cuvée Original con dos copas y la tarjeta del GPRO Valparaíso Palace & Spa sobre la cama',
        caption: 'Bienvenida con cava en la habitación',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-6',
        url: publicImage('sec5-gal04-silueta-cortina-v.jpg'),
        alt: 'Silueta de mujer en bata blanca abriendo la cortina hacia el balcón con vista a la bahía',
        caption: 'La luz de la mañana entra a la suite',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-7',
        url: publicImage('sec5-foto3-v.jpg'),
        alt: 'Huésped en albornoz leyendo el folleto de tratamientos con vista a la bahía de Palma',
        caption: 'Tratamientos con vista a la bahía',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-8',
        url: publicImage('sec5-gal05-sauna-v.jpg'),
        alt: 'Silueta de mujer sentada en la sauna con luz cálida detrás iluminando los paneles de madera',
        caption: 'Un momento de calma en la sauna',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-9',
        url: publicImage('sec5-foto1-h.jpg'),
        alt: 'Piscina interior del spa con cascada de agua y arquitectura de mármol verde',
        caption: 'El spa más grande de Mallorca',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-10',
        url: publicImage('sec5-gal06-jacuzzi-spa-h.jpg'),
        alt: 'Pareja relajándose en el jacuzzi interior del spa con vista al jardín tropical',
        caption: 'El jacuzzi del spa, frente al jardín',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-11',
        url: publicImage('sec5-gal07-piscina-bali-h.jpg'),
        alt: 'Piscina exterior del GPRO con palmeras y bali beds junto al agua',
        caption: 'La piscina exterior, entre palmeras',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-12',
        url: publicImage('sec5-gal08-piernas-frutas-v.jpg'),
        alt: 'Piernas al borde de la piscina con naranja, manzana y nectarina sobre el bordillo',
        caption: 'El borde de la piscina, con frutas',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-13',
        url: publicImage('sec5-gal09-piscina-palmeras-v.jpg'),
        alt: 'Piscina exterior del resort con palmeras altas y cielo abierto',
        caption: 'Palmeras y cielo abierto',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'villa-deste-como',
    hotelName: 'HOTEL ESPLÉNDIDO',
    leftTag: 'HOTEL',
    coupleName: 'Bahía y piedra',
    location: 'Port de Sóller, Mallorca',
    country: 'España',
    year: '2026',
    category: 'Hotel de Lujo',
    layoutVariant: 5,
    caseStudy: {
      season: 'Julio · 2024 y 2026',
      duration: '3 días',
      usage: 'Redes sociales',
    },
    coverImage: publicImage('sec6-portada.jpg'),
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
    ],
    galleryPhotos: [
      {
        id: 'vde-gal-1',
        url: publicImage('sec6-gal01-fachada-noche-h.jpg'),
        alt: 'Fachada iluminada del Hotel Espléndido de noche, con el tranvía vintage naranja y la terraza del bistro',
        caption: 'La fachada, al caer la noche',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-2',
        url: publicImage('sec6-gal02-guia-flatlay-v.jpg'),
        alt: 'Guía del Hotel Espléndido de Sóller abierta sobre la cama, con sombrero de paja y una mandarina',
        caption: 'La guía del hotel, sobre la cama',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-3',
        url: publicImage('sec6-gal03-detalle-habitacion-v.jpg'),
        alt: 'Detalle de la habitación con cabecero de cuero, lámpara encendida, sillón turquesa y sombrero de paja',
        caption: 'El detalle de la habitación',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-4',
        url: publicImage('sec6-gal04-spa-entrada-v.jpg'),
        alt: 'Mujer con capazo y camisola de encaje entrando al SPA del Hotel Espléndido',
        caption: 'Camino al spa',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-5',
        url: publicImage('sec6-gal05-spa-interior-h.jpg'),
        alt: 'Piscina interior del spa iluminada en turquesa con celosía blanca decorativa',
        caption: 'La piscina interior del spa',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-6',
        url: publicImage('sec6-gal06-bahia-panoramica-v.jpg'),
        alt: 'Panorámica de la bahía de Puerto de Sóller con gaviotas, veleros y la playa de guijarros blancos',
        caption: 'La bahía de Sóller, entre gaviotas',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-7',
        url: publicImage('sec6-gal07-playa-vestido-v.jpg'),
        alt: 'Mujer con vestido turquesa sentada en la playa de guijarros, vista desde la habitación entre palmeras',
        caption: 'La playa, vista desde la habitación',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-8',
        url: publicImage('sec6-gal08-piscina-pareja-h.jpg'),
        alt: 'Pareja bañándose en la piscina de la azotea con vista a la bahía de Sóller y su faro',
        caption: 'La piscina, frente al faro',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-9',
        url: publicImage('sec6-gal09-piscina-coco-v.jpg'),
        alt: 'Mujer en bañador blanco al borde de la piscina de la azotea bebiendo un coco verde',
        caption: 'Un coco al borde de la piscina',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-10',
        url: publicImage('sec6-gal10-piscina-copa-v.jpg'),
        alt: 'Piernas al borde de la piscina con copa de cava y guía Hotel Espléndido de Sóller abierta',
        caption: 'Cava y guía al sol',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-11',
        url: publicImage('sec6-foto1-c.jpg'),
        alt: 'Entrada de Hotel Espléndido con el bistro Davant la Mar y sus flores rojas',
        caption: 'La entrada sobre el paseo marítimo',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-12',
        url: publicImage('sec6-foto3-h.jpg'),
        alt: 'Pareja conversando en la terraza con vista a la bahía de Sóller',
        caption: 'Terraza frente a la bahía',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-13',
        url: publicImage('sec6-foto2-v.jpg'),
        alt: 'Vista elevada del tranvía histórico y la playa de Puerto de Sóller',
        caption: 'El tranvía histórico junto a la bahía',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'district-hive',
    hotelName: 'DISTRICT HIVE',
    leftTag: 'PODTEL',
    coupleName: 'Off-grid en el desierto',
    location: 'Gorafe, Granada',
    country: 'España',
    year: '2026',
    category: 'Escapada Romántica',
    layoutVariant: 8,
    caseStudy: {
      season: 'Octubre · Otoño',
      duration: '4 días',
      usage: 'Redes sociales',
    },
    coverImage: publicImage('sec9-foto1-v.jpg'),
    description:
      'En el corazón del desierto de Gorafe, District Hive es una cápsula de vidrio y acero suspendida sobre el badlands granadino — arquitectura off-grid pensada para desaparecer en el paisaje: agua del aire, energía del sol, y el silencio absoluto de Andalucía interior.',
    quote: 'El cielo entero por techo, el badlands entero por horizonte.',
    photos: [
      {
        id: 'dh-1',
        url: publicImage('sec9-foto1-v.jpg'),
        alt: 'Hombre caminando junto a la cápsula de vidrio y acero de District Hive en el desierto de Gorafe',
        caption: 'Un paseo junto a la cápsula',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-2',
        url: publicImage('sec9-foto2-v.jpg'),
        alt: 'Logotipo hexagonal de District Hive sobre el ventanal, con el badlands de Gorafe al fondo',
        caption: 'El logo, sobre el desierto',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-3',
        url: publicImage('sec9-foto3-h.jpg'),
        alt: 'Cápsula de vidrio de District Hive con piscina exterior asomando sobre el badlands de Gorafe',
        caption: 'La cápsula, con su piscina sobre el desierto',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ],
    galleryPhotos: [
      {
        id: 'dh-gal-1',
        url: publicImage('sec9-gal06-panoramica-h.jpg'),
        alt: 'Panorámica del badlands de Gorafe con el pantano y un pueblo blanco a lo lejos',
        caption: 'El badlands de Gorafe, hasta el pantano',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-2',
        url: publicImage('sec9-gal02-badlands-aerea-v.jpg'),
        alt: 'Vista aérea alta del desierto de Gorafe con la propiedad apenas visible en la distancia',
        caption: 'La propiedad, apenas visible en el desierto',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-3',
        url: publicImage('sec9-foto1-v.jpg'),
        alt: 'Hombre caminando junto a la cápsula de vidrio y acero de District Hive',
        caption: 'Un paseo junto a la cápsula',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-4',
        url: publicImage('sec9-gal05-atardecer-v.jpg'),
        alt: 'Mujer caminando hacia la cápsula al atardecer con el logo de District Hive visible en el lateral',
        caption: 'La cápsula, al caer la tarde',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-5',
        url: publicImage('sec9-gal01-aerea-h.jpg'),
        alt: 'Vista aérea de la cápsula de District Hive sobre el borde del cañón en el desierto de Gorafe',
        caption: 'La cápsula, sobre el filo del cañón',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-6',
        url: publicImage('sec9-foto2-v.jpg'),
        alt: 'Logotipo hexagonal de District Hive sobre el ventanal, con el badlands de Gorafe al fondo',
        caption: 'El logo, sobre el desierto',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-7',
        url: publicImage('sec9-gal03-ducha-v.jpg'),
        alt: 'Ducha exterior de District Hive con la cápsula al fondo entre gravilla y tierra roja',
        caption: 'La ducha exterior, junto a la cápsula',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-8',
        url: publicImage('sec9-foto3-h.jpg'),
        alt: 'Cápsula de vidrio de District Hive con piscina exterior asomando sobre el badlands',
        caption: 'La cápsula, con su piscina sobre el desierto',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-9',
        url: publicImage('sec9-gal04-jacuzzi-h.jpg'),
        alt: 'La cápsula vista desde el jacuzzi/piscina exterior con las montañas al fondo',
        caption: 'La cápsula, vista desde el jacuzzi',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'san-domenico-palace',
    hotelName: 'WELMOON VILLAS PAISAJE',
    leftTag: 'GLAMPING',
    coupleName: 'Bajo las estrellas',
    location: 'Caravaca de la Cruz, Murcia',
    country: 'España',
    year: '2026',
    category: 'Escapada Romántica',
    layoutVariant: 7,
    caseStudy: {
      season: 'Marzo · Primavera',
      duration: '3 días',
      usage: 'Redes sociales',
    },
    coverImage: publicImage('sec8-portada.jpg'),
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
        alt: 'Pareja relajada en la cama exterior con la villa abovedada al fondo',
        caption: 'La cama al aire libre, junto a la villa',
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
    ],
    galleryPhotos: [
      {
        id: 'sdp-gal-1',
        url: publicImage('sec8-gal01-fachada-v.jpg'),
        alt: 'Fachada de madera de la villa abovedada de Welmoon Paisaje entre pinos, con banco acolchado en la terraza',
        caption: 'La villa, entre pinos',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-2',
        url: publicImage('sec8-gal02-cats-h.jpg'),
        alt: 'Dos gatos atigrados sobre el felpudo "Welmoon" en la entrada de la villa',
        caption: 'Los recibidores de Welmoon',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-3',
        url: publicImage('sec8-gal03-interior-cama-h.jpg'),
        alt: 'Interior de la villa abovedada con cama, cojines y vista al baño de mármol y bosque',
        caption: 'El interior, bajo el techo abovedado',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-4',
        url: publicImage('sec8-gal04-bano-v.jpg'),
        alt: 'Baño de la villa con lavamanos de piedra, espejo circular y pampas grass',
        caption: 'El baño, entre madera y piedra',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-5',
        url: publicImage('sec8-gal05-amenities-v.jpg'),
        alt: 'Detalle de amenities Welmoon: tarros con logo, toalla bordada y caja de bienvenida con corazón',
        caption: 'El detalle Welmoon',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-6',
        url: publicImage('sec8-gal06-vista-bosque-h.jpg'),
        alt: 'Vista del bosque de pinos desde la cama, a través del gran ventanal abovedado',
        caption: 'El pinar, desde la cama',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-7',
        url: publicImage('sec8-foto3-h.jpg'),
        alt: 'Interior de la villa abovedada con techo de cristal y vistas al bosque',
        caption: 'El techo de cristal hacia el bosque',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-8',
        url: publicImage('sec8-gal07-desayuno-v.jpg'),
        alt: 'Desayuno servido en la mesa de madera con croissant, frutas, mermelada y lámpara cálida',
        caption: 'El desayuno, entre madera cálida',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-9',
        url: publicImage('sec8-foto1-c.jpg'),
        alt: 'Telescopio y tumbona en la terraza de madera entre pinos',
        caption: 'Preparados para mirar las estrellas',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-10',
        url: publicImage('sec8-foto2-c.jpg'),
        alt: 'Pareja relajada en la cama exterior con la villa abovedada al fondo',
        caption: 'La cama al aire libre, junto a la villa',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-11',
        url: publicImage('sec8-gal08-jacuzzi-noche-v.jpg'),
        alt: 'Jacuzzi de madera con estufa de leña y velas encendidas en la terraza, cielo nocturno entre pinos',
        caption: 'El jacuzzi al calor de las velas',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  }
];
