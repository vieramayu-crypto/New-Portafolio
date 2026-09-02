import { HotelStory } from '../types';
import { publicImage } from '../src/lib/content';

export const HOTEL_STORIES: HotelStory[] = [
  {
    id: 'ritz-carlton-abama',
    hotelName: 'THE RITZ-CARLTON TENERIFE, ABAMA',
    leftTag: 'HOTEL',
    coupleName: 'Moorish architecture',
    location: 'Guía de Isora, Tenerife',
    country: 'Spain',
    year: '2026',
    category: 'Luxury Hotel',
    layoutVariant: 0,
    caseStudy: {
      season: 'July · Summer',
      duration: '4 days',
      usage: 'Social media · Peak season campaign',
    },
    coverImage: publicImage('sec1-portada.jpg'),
    description: 'A Moorish estate of terracotta walls above the cliffs of Guía de Isora, The Ritz-Carlton Tenerife, Abama spreads its subtropical gardens down to the Atlantic, with La Gomera on the horizon. Inside, the arcades, courtyards and stepped fountains carry the same language: warm stone, water and shade. Every corner of the property tells a different story, and together they form one of the most complete stages we have filmed.',
    quote: 'Terracotta, ocean and garden: three tones that meet at every corner of Abama.',
    photos: [
      {
        id: 'gt-1',
        url: publicImage('sec1-foto1-v.jpg'),
        alt: 'Aerial view of the Abama resort between banana plantations and the golf course',
        caption: 'The resort seen from the air',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-2',
        url: publicImage('sec1-foto2-v.jpg'),
        alt: 'Woman walking down the terracotta staircase beside the Abama pond',
        caption: 'The iconic Citadel staircase',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-3',
        url: publicImage('sec1-foto3-h.jpg'),
        alt: 'Bamboo hut with a yoga class among the palm trees',
        caption: 'Yoga under the hut beside the golf course',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ],
    galleryPhotos: [
      {
        id: 'gt-gal-1',
        url: publicImage('sec1-gal1-facade-v.jpg'),
        alt: 'Terracotta façade of Abama among palm trees and stepped fountains',
        caption: 'The Moorish façade, among palms and fountains',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-2',
        url: publicImage('sec1-gal2-paseo-v.jpg'),
        alt: 'Woman walking with a camera in hand in front of the resort façade',
        caption: 'A walk through the resort gardens',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-3',
        url: publicImage('sec1-gal3-habitacion-v.jpg'),
        alt: 'Room detail: bedside table and pendant lamp beside the bed',
        caption: 'The detail in every room',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-4',
        url: publicImage('sec1-gal4-playa-h.jpg'),
        alt: 'Elevated view of the private Abama cove with parasols and sun loungers',
        caption: 'The private cove of the resort',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-5',
        url: publicImage('sec1-gal5-reflejo-v.jpg'),
        alt: 'Symmetrical reflection of the palm trees and the façade in a pond',
        caption: 'Symmetry between water and architecture',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-6',
        url: publicImage('sec1-gal6-piscina-v.jpg'),
        alt: 'Main resort pool among palm trees and ornamental gardens',
        caption: 'The main pool, among the palms',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-7',
        url: publicImage('sec1-gal7-spa-v.jpg'),
        alt: 'Hot stone treatment at the resort spa',
        caption: 'A quiet moment at the spa',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'gt-gal-8',
        url: publicImage('sec1-gal8-restaurante-h.jpg'),
        alt: 'Fine dining dish served at the resort restaurant',
        caption: 'Fine dining to close the day',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'aman-venice',
    hotelName: 'INTERCONTINENTAL LISBOA',
    leftTag: 'HOTEL',
    coupleName: 'Urban heights',
    location: 'Lisbon',
    country: 'Portugal',
    year: '2026',
    category: 'Luxury Hotel',
    layoutVariant: 6,
    caseStudy: {
      season: 'September · Summer',
      duration: '3 days',
      usage: 'Social media',
    },
    coverImage: publicImage('sec7-portada.jpg'),
    description:
      "Built on one of Lisbon’s seven hills, facing Parque Eduardo VII, InterContinental Lisboa combines contemporary architecture with views reaching all the way to the Tagus, a modern reading of the Lisbon skyline.",
    quote: 'The whole of Lisbon unfolds from the top of this hill.',
    photos: [
      {
        id: 'av-1',
        url: publicImage('sec7-portada.jpg'),
        alt: 'Vertical view of the InterContinental Lisboa façade, the whole building on the hill',
        caption: 'The façade, above the hill',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-2',
        url: publicImage('sec7-gal12-tranvia-v.jpg'),
        alt: 'Yellow tram number 28 passing along a cobbled street in Lisbon',
        caption: 'Lisbon, just outside the hotel',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-3',
        url: publicImage('sec7-gal08-cafe-v.jpg'),
        alt: 'Waiter pouring coffee with a glass of orange juice in the foreground',
        caption: 'Coffee, served with care',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ],
    galleryPhotos: [
      {
        id: 'av-gal-1',
        url: publicImage('sec7-gal02-fachada-h.jpg'),
        alt: 'Corner view of the InterContinental Lisboa façade, with the entrance canopy',
        caption: 'The entrance, from the avenue',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-2',
        url: publicImage('sec7-gal03-recepcion-h.jpg'),
        alt: 'Hotel reception with a golden desk and an illuminated blue marble panel',
        caption: 'Checking in, between blue marble and brass',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-3',
        url: publicImage('sec7-foto1-v.jpg'),
        alt: 'Hotel lobby with pendant lamps of amber glass globes',
        caption: 'The lobby, beneath the glass lamps',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-4',
        url: publicImage('sec7-gal04-escritorio-h.jpg'),
        alt: 'Desk in the room with a laptop and lamp beside the window overlooking the Lisbon skyline',
        caption: 'The room, with Lisbon beyond',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-5',
        url: publicImage('sec7-gal05-cama-detalle-v.jpg'),
        alt: 'Bed detail with turquoise embroidered cushions and lamps lit',
        caption: 'The bed, among embroidered cushions',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-6',
        url: publicImage('sec7-foto2-v.jpg'),
        alt: 'Waiter serving breakfast in the suite',
        caption: 'Service, in the room',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-7',
        url: publicImage('sec7-foto3-v.jpg'),
        alt: 'Overhead view of breakfast served in the room',
        caption: 'Breakfast, seen from above',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-8',
        url: publicImage('sec7-gal07-cama-h.jpg'),
        alt: 'Couple in white robes toasting with orange juice in bed, breakfast served in front of them',
        caption: 'A toast, before the day begins',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-9',
        url: publicImage('sec7-gal06-silueta-v.jpg'),
        alt: 'Silhouette of a woman opening the curtain against the morning light',
        caption: 'First light, as the curtain opens',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-10',
        url: publicImage('sec7-gal09-cortinas-v.jpg'),
        alt: 'Light and shadow from the curtains falling across the bedroom carpet',
        caption: 'Late afternoon light in the suite',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-11',
        url: publicImage('sec7-gal10-gym-v.jpg'),
        alt: 'Woman running on a treadmill in the hotel gym',
        caption: 'A moment in the gym',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'av-gal-12',
        url: publicImage('sec7-gal11-lampara-v.jpg'),
        alt: 'Lamp and plant on a marble table in the restaurant at dusk',
        caption: 'Dinner, between warm light and marble',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'villa-cimbrone-ravello',
    hotelName: 'VESTIGE COLLECTION, BINIDUFÀ',
    leftTag: 'ESTATE',
    coupleName: 'Menorcan heritage',
    location: 'Ferreries, Menorca',
    country: 'Spain',
    year: '2026',
    category: 'Historic Villa',
    layoutVariant: 1,
    caseStudy: {
      season: 'June · Summer',
      duration: '3 days',
      usage: 'Social media · Peak season campaign',
    },
    coverImage: publicImage('sec2-portada.jpg'),
    description:
      'In a valley in northern Menorca, within a private estate of 800 hectares, Vestige Binidufà restores an agricultural possessió from the 18th century: stone, clay and natural materials that take their tone directly from the landscape around them, with the Moorish heritage still present in its name.',
    quote: 'Stone, earth and silence. Northern Menorca as it has always been.',
    photos: [
      {
        id: 'vc-1',
        url: publicImage('sec2-foto1-h.jpg'),
        alt: 'Aerial view of the Vestige Binidufà estate among olive trees and fields in northern Menorca',
        caption: 'The estate seen from the air',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vc-2',
        url: publicImage('sec2-foto2-c.jpg'),
        alt: 'Woman walking along the dirt track towards the stone houses of the estate',
        caption: 'The path towards the possessió',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'vc-3',
        url: publicImage('sec2-foto3-v.jpg'),
        alt: 'Large clay vessel and plant in a corner of whitewashed walls',
        caption: 'Materials born of the landscape',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ],
    galleryPhotos: [
      {
        id: 'vc-gal-1',
        url: publicImage('sec2-gal01-aerea-h.jpg'),
        alt: 'Aerial view of the estate among farmland and hills',
        caption: 'The estate seen from the air',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-2',
        url: publicImage('sec2-gal02-facade-h.jpg'),
        alt: 'Stone façade of the estate with sun loungers and a parasol on the terrace',
        caption: 'The stone façade, among the hills',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-3',
        url: publicImage('sec2-gal03-salon-v.jpg'),
        alt: 'Man walking through the rustic lounge with wooden ceilings',
        caption: 'A walk through the common spaces',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-4',
        url: publicImage('sec2-gal04-urna-v.jpg'),
        alt: 'Large clay vessel and plant in a corner of whitewashed walls',
        caption: 'Materials born of the landscape',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-5',
        url: publicImage('sec2-gal05-camino-h.jpg'),
        alt: 'Woman walking along the dirt track towards the stone houses of the estate',
        caption: 'The path towards the possessió',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-6',
        url: publicImage('sec2-gal06-patio-v.jpg'),
        alt: 'Woman reading in an armchair beneath a stone arch beside the room',
        caption: 'A quiet moment in the courtyard',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-7',
        url: publicImage('sec2-gal07-gym-v.jpg'),
        alt: 'Vaulted gym with sea views through an arched window',
        caption: 'The gym, facing the sea',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-8',
        url: publicImage('sec2-gal08-vacas-v.jpg'),
        alt: 'Cattle grazing in the fields surrounding the estate',
        caption: 'The farmland that surrounds the estate',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-9',
        url: publicImage('sec2-gal09-piscina-h.jpg'),
        alt: 'Aerial view of the oval pool among sun loungers and greenery',
        caption: 'The pool, seen from the air',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vc-gal-10',
        url: publicImage('sec2-gal10-habitacion-h.jpg'),
        alt: 'Woman in a bathrobe sitting in the room beside a stone wall',
        caption: 'Rest, beside the stone',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'hotel-caruso-belmond',
    hotelName: 'DELTAPARK VITALRESORT',
    leftTag: 'RESORT',
    coupleName: 'Alpine wellness',
    location: 'Gwatt, Thunersee',
    country: 'Switzerland',
    year: '2026',
    category: 'Romantic Escape',
    layoutVariant: 2,
    caseStudy: {
      season: 'September · Summer',
      duration: '3 days',
      usage: 'Social media',
    },
    coverImage: publicImage('sec3-portada.jpg'),
    description:
      'On the shore of Lake Thun, between two nature reserves of the Kander delta, Deltapark Vitalresort combines contemporary Alpine architecture with a 2,000 m² spa: water, mountain and wellness on a single horizon.',
    quote: 'The silence of the Alps, reflected whole in Lake Thun.',
    photos: [
      {
        id: 'hc-1',
        url: publicImage('sec3-foto1-v.jpg'),
        alt: 'Coffee service and Deltapark Vitalresort brochure on the bed',
        caption: 'The small details of the service',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-2',
        url: publicImage('sec3-foto2-h.jpg'),
        alt: 'Aerial view of the resort beside Lake Thun',
        caption: 'The resort seen from the air',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hc-3',
        url: publicImage('sec3-foto3-v.jpg'),
        alt: 'Wicker basket of freshly laundered towels beside the entrance',
        caption: 'A detail of the Alpine spa',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ],
    galleryPhotos: [
      {
        id: 'hc-gal-1',
        url: publicImage('sec3-foto2-h.jpg'),
        alt: 'Aerial view of the resort beside Lake Thun',
        caption: 'The resort, seen from the air',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-2',
        url: publicImage('sec3-gal01-fireplace-v.jpg'),
        alt: 'Designer fireplace in the resort lobby',
        caption: 'The lobby fireplace',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-3',
        url: publicImage('sec3-gal02-checkin-v.jpg'),
        alt: 'Woman in a Deltapark robe walking through the garden towards the resort',
        caption: 'On the way to reception',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-4',
        url: publicImage('sec3-foto1-v.jpg'),
        alt: 'Coffee service and Deltapark Vitalresort brochure on the bed',
        caption: 'The small details of the service',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-5',
        url: publicImage('sec3-gal03-balcon-v.jpg'),
        alt: 'Woman in a robe drinking coffee on the room balcony',
        caption: 'Coffee on the balcony, facing the lake',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-6',
        url: publicImage('sec3-gal04-desayuno-v.jpg'),
        alt: 'Coffee and an apple on a Deltapark robe on the bed',
        caption: 'Breakfast in the room',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-7',
        url: publicImage('sec3-foto3-v.jpg'),
        alt: 'Wicker basket of freshly laundered towels beside the entrance',
        caption: 'A detail of the Alpine spa',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-8',
        url: publicImage('sec3-gal05-sauna-v.jpg'),
        alt: 'Woman sitting in the wooden spa sauna',
        caption: 'A quiet moment in the sauna',
        aspectRatio: 'portrait',
        isBlackAndWhite: true
      },
      {
        id: 'hc-gal-9',
        url: publicImage('sec3-gal06-lounge-v.jpg'),
        alt: 'Woman in a robe seated before the lake view from the relaxation area',
        caption: 'The relaxation area, facing the lake',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-10',
        url: publicImage('sec3-gal07-atardecer-v.jpg'),
        alt: 'Sunset over Lake Thun with sailing boats moored',
        caption: 'Sunset over the lake',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-11',
        url: publicImage('sec3-gal08-fachada-h.jpg'),
        alt: 'Resort façade lit at dusk among the trees',
        caption: 'The façade, at dusk',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hc-gal-12',
        url: publicImage('sec3-gal09-aerea-v.jpg'),
        alt: 'Overhead aerial view of the resort beside the lake',
        caption: 'The resort, seen from above',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'borgo-egnazia-puglia',
    hotelName: 'HONEYMOON PETRA VILLAS',
    leftTag: 'VILLAS',
    coupleName: 'Aegean cliffside',
    location: 'Imerovigli, Santorini',
    country: 'Greece',
    year: '2026',
    category: 'Luxury Hotel',
    layoutVariant: 3,
    caseStudy: {
      season: 'May · Spring',
      duration: '4 days',
      usage: 'Social media',
    },
    coverImage: publicImage('sec4-portada.jpg'),
    description:
      'Suspended above the cliffs of Imerovigli, carved into volcanic rock over the Santorini caldera, Honeymoon Petra Villas offers one of the most coveted pools in the Aegean, a stone balcony above the bluest sea in Greece.',
    quote: 'Volcanic rock and an endless horizon. This is sunrise over the caldera.',
    photos: [
      {
        id: 'be-1',
        url: publicImage('sec4-foto1-v.jpg'),
        alt: 'Couple having breakfast facing the Santorini caldera',
        caption: 'Breakfast facing the caldera',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-2',
        url: publicImage('sec4-foto2-c.jpg'),
        alt: 'White domed architecture of Honeymoon Petra Villas with the Aegean Sea beyond',
        caption: 'White domes above the Aegean',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'be-3',
        url: publicImage('sec4-foto3-h.jpg'),
        alt: 'Infinity pool above the cliffs of Imerovigli',
        caption: 'One of the most coveted pools in the Aegean',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ],
    galleryPhotos: [
      {
        id: 'be-gal-1',
        url: publicImage('sec4-gal01-entrada-h.jpg'),
        alt: 'Entrance to Honeymoon Petra Villas with the blue dome of a church beyond',
        caption: 'The entrance, with the blue dome beyond',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-2',
        url: publicImage('sec4-gal02-detalle-hat-v.jpg'),
        alt: 'Hat and embroidered Honeymoon Petra towel on the bed',
        caption: 'The details of the welcome',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-3',
        url: publicImage('sec4-gal03-habitacion-v.jpg'),
        alt: 'Room with a wooden headboard and an embroidered Honeymoon Petra Villas cushion',
        caption: 'Rest, carved into the rock',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-4',
        url: publicImage('sec4-gal04-terraza-caminando-v.jpg'),
        alt: 'Woman in a blue dress walking along the terrace towards the caldera view',
        caption: 'On the way to the terrace',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-5',
        url: publicImage('sec4-foto1-v.jpg'),
        alt: 'Couple having breakfast facing the Santorini caldera',
        caption: 'Breakfast facing the caldera',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-6',
        url: publicImage('sec4-gal05-desayuno-v.jpg'),
        alt: 'Slices of watermelon served at the breakfast buffet',
        caption: 'Flavours of the island at breakfast',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-7',
        url: publicImage('sec4-foto2-c.jpg'),
        alt: 'White domed architecture of Honeymoon Petra Villas with the Aegean Sea beyond',
        caption: 'White domes above the Aegean',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-8',
        url: publicImage('sec4-gal06-piscina-mujer-v.jpg'),
        alt: 'Woman under the Honeymoon Petra parasol at the edge of the pool',
        caption: 'Shade at the edge of the pool',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-9',
        url: publicImage('sec4-gal07-piscina-cruceros-v.jpg'),
        alt: 'Infinity pool overlooking the cruise ships anchored in the caldera',
        caption: 'The pool, facing the cruise ships in the caldera',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-10',
        url: publicImage('sec4-gal08-piscina-panorama-h.jpg'),
        alt: 'Panoramic view of the pool with the caldera and cruise ships beyond',
        caption: 'The whole caldera, from the pool',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-11',
        url: publicImage('sec4-foto3-h.jpg'),
        alt: 'Infinity pool above the cliffs of Imerovigli',
        caption: 'One of the most coveted pools in the Aegean',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'be-gal-12',
        url: publicImage('sec4-gal09-piscina-imerovigli-v.jpg'),
        alt: 'Sunlight reflected in the infinity pool with the white houses of Imerovigli behind',
        caption: 'Last reflections over Imerovigli',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'hotel-danieli-venezia',
    hotelName: 'GPRO VALPARAÍSO PALACE & SPA',
    leftTag: 'PALACE',
    coupleName: 'Mediterranean spa',
    location: 'Bonanova, Palma de Mallorca',
    country: 'Spain',
    year: '2026',
    category: 'Luxury Hotel',
    layoutVariant: 4,
    caseStudy: {
      season: 'Summer · 2023, 2024 and 2026',
      duration: '5 days',
      usage: 'Social media · Peak season campaign',
    },
    coverImage: publicImage('sec5-portada.jpg'),
    description:
      'High in the Bonanova district, surrounded by private gardens overlooking the Bay of Palma, GPRO Valparaíso Palace & Spa houses the largest spa in Mallorca, a serene retreat of water, stone and Mediterranean planting.',
    quote: 'Gardens, water and the Bay of Palma stretching out beyond every terrace.',
    photos: [
      {
        id: 'hd-1',
        url: publicImage('sec5-foto1-h.jpg'),
        alt: 'Indoor spa pool with a water cascade',
        caption: 'The largest spa in Mallorca',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hd-2',
        url: publicImage('sec5-foto2-v.jpg'),
        alt: 'Arriving in the room with a suitcase and a welcome fruit plate',
        caption: 'Arriving at the suite',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-3',
        url: publicImage('sec5-foto3-v.jpg'),
        alt: 'Guest in a bathrobe reading the treatment brochure overlooking the Bay of Palma',
        caption: 'Treatments overlooking the bay',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ],
    galleryPhotos: [
      {
        id: 'hd-gal-1',
        url: publicImage('sec5-gal01-recepcion-h.jpg'),
        alt: 'Host welcoming a guest at the GPRO Valparaíso reception desk',
        caption: 'Reception, the first welcome',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-2',
        url: publicImage('sec5-gal10-cartel-jardin-v.jpg'),
        alt: 'Garden signpost pointing to the Pool, Hall, Gamba Palace, Wellness & Spa, Tennis and Bistro Mar Blau',
        caption: 'A glance at the resort map',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-3',
        url: publicImage('sec5-foto2-v.jpg'),
        alt: 'Arriving in the room with a suitcase and a welcome fruit plate',
        caption: 'Arriving at the suite',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-4',
        url: publicImage('sec5-gal03-cafe-cama-v.jpg'),
        alt: 'Hand lifting a coffee cup above the bed, with the mustard leather headboard behind',
        caption: 'Coffee, good morning',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-5',
        url: publicImage('sec5-gal02-cava-v.jpg'),
        alt: 'Bottle of Codorníu Cuvée Original cava with two glasses and the GPRO Valparaíso Palace & Spa card on the bed',
        caption: 'A cava welcome in the room',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-6',
        url: publicImage('sec5-gal04-silueta-cortina-v.jpg'),
        alt: 'Silhouette of a woman in a white robe opening the curtain onto the balcony overlooking the bay',
        caption: 'Morning light enters the suite',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-7',
        url: publicImage('sec5-foto3-v.jpg'),
        alt: 'Guest in a bathrobe reading the treatment brochure overlooking the Bay of Palma',
        caption: 'Treatments overlooking the bay',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-8',
        url: publicImage('sec5-gal05-sauna-v.jpg'),
        alt: 'Silhouette of a woman sitting in the sauna, warm light behind illuminating the wooden panels',
        caption: 'A quiet moment in the sauna',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-9',
        url: publicImage('sec5-foto1-h.jpg'),
        alt: 'Indoor spa pool with a water cascade and green marble architecture',
        caption: 'The largest spa in Mallorca',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-10',
        url: publicImage('sec5-gal06-jacuzzi-spa-h.jpg'),
        alt: 'Couple relaxing in the indoor spa jacuzzi overlooking the tropical garden',
        caption: 'The spa jacuzzi, facing the garden',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-11',
        url: publicImage('sec5-gal07-piscina-bali-h.jpg'),
        alt: 'Outdoor pool at GPRO with palm trees and Bali beds beside the water',
        caption: 'The outdoor pool, among the palms',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-12',
        url: publicImage('sec5-gal08-piernas-frutas-v.jpg'),
        alt: 'Legs at the edge of the pool with an orange, an apple and a nectarine on the rim',
        caption: 'The edge of the pool, with fruit',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'hd-gal-13',
        url: publicImage('sec5-gal09-piscina-palmeras-v.jpg'),
        alt: 'Outdoor resort pool with tall palm trees and open sky',
        caption: 'Palms and open sky',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'villa-deste-como',
    hotelName: 'HOTEL ESPLÉNDIDO',
    leftTag: 'HOTEL',
    coupleName: 'Bay and stone',
    location: 'Port de Sóller, Mallorca',
    country: 'Spain',
    year: '2026',
    category: 'Luxury Hotel',
    layoutVariant: 5,
    caseStudy: {
      season: 'July · 2024 and 2026',
      duration: '3 days',
      usage: 'Social media',
    },
    coverImage: publicImage('sec6-portada.jpg'),
    description:
      'On the seafront of the Bay of Port de Sóller, with the Serra de Tramuntana as a backdrop, Hotel Espléndido combines limestone façades, sea-facing terraces and the historic tram that still runs along the promenade.',
    quote: 'Stone, sea and the echo of the tram on the cobbles of Sóller.',
    photos: [
      {
        id: 'vde-1',
        url: publicImage('sec6-foto1-c.jpg'),
        alt: 'Entrance to Hotel Espléndido with the Davant la Mar bistro',
        caption: 'The entrance on the seafront promenade',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'vde-2',
        url: publicImage('sec6-foto2-v.jpg'),
        alt: 'Elevated view of the historic tram and the beach at Port de Sóller',
        caption: 'The historic tram beside the bay',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-3',
        url: publicImage('sec6-foto3-h.jpg'),
        alt: 'Couple talking on the terrace overlooking the Bay of Sóller',
        caption: 'Terrace facing the bay',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ],
    galleryPhotos: [
      {
        id: 'vde-gal-1',
        url: publicImage('sec6-gal01-fachada-noche-h.jpg'),
        alt: 'Hotel Espléndido façade lit at night, with the vintage orange tram and the bistro terrace',
        caption: 'The façade, as night falls',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-2',
        url: publicImage('sec6-gal02-guia-flatlay-v.jpg'),
        alt: 'The Hotel Espléndido de Sóller guide open on the bed, with a straw hat and a mandarin',
        caption: 'The hotel guide, on the bed',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-3',
        url: publicImage('sec6-gal03-detalle-habitacion-v.jpg'),
        alt: 'Room detail with a leather headboard, a lit lamp, a turquoise armchair and a straw hat',
        caption: 'A detail of the room',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-4',
        url: publicImage('sec6-gal04-spa-entrada-v.jpg'),
        alt: 'Woman with a straw basket and lace kaftan entering the Hotel Espléndido spa',
        caption: 'On the way to the spa',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-5',
        url: publicImage('sec6-gal05-spa-interior-h.jpg'),
        alt: 'Indoor spa pool lit in turquoise with a decorative white lattice',
        caption: 'The indoor spa pool',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-6',
        url: publicImage('sec6-gal06-bahia-panoramica-v.jpg'),
        alt: 'Panorama of the Bay of Port de Sóller with gulls, sailing boats and the white pebble beach',
        caption: 'The Bay of Sóller, among the gulls',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-7',
        url: publicImage('sec6-gal07-playa-vestido-v.jpg'),
        alt: 'Woman in a turquoise dress sitting on the pebble beach, seen from the room through the palm trees',
        caption: 'The beach, seen from the room',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-8',
        url: publicImage('sec6-gal08-piscina-pareja-h.jpg'),
        alt: 'Couple swimming in the rooftop pool overlooking the Bay of Sóller and its lighthouse',
        caption: 'The pool, facing the lighthouse',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-9',
        url: publicImage('sec6-gal09-piscina-coco-v.jpg'),
        alt: 'Woman in a white swimsuit at the edge of the rooftop pool drinking from a green coconut',
        caption: 'A coconut at the edge of the pool',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-10',
        url: publicImage('sec6-gal10-piscina-copa-v.jpg'),
        alt: 'Legs at the edge of the pool with a glass of cava and the Hotel Espléndido de Sóller guide open',
        caption: 'Cava and the guide in the sun',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-11',
        url: publicImage('sec6-foto1-c.jpg'),
        alt: 'Entrance to Hotel Espléndido with the Davant la Mar bistro and its red flowers',
        caption: 'The entrance on the seafront promenade',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-12',
        url: publicImage('sec6-foto3-h.jpg'),
        alt: 'Couple talking on the terrace overlooking the Bay of Sóller',
        caption: 'Terrace facing the bay',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'vde-gal-13',
        url: publicImage('sec6-foto2-v.jpg'),
        alt: 'Elevated view of the historic tram and the beach at Port de Sóller',
        caption: 'The historic tram beside the bay',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'district-hive',
    hotelName: 'DISTRICT HIVE',
    leftTag: 'PODTEL',
    coupleName: 'Off-grid in the desert',
    location: 'Gorafe, Granada',
    country: 'Spain',
    year: '2026',
    category: 'Romantic Escape',
    layoutVariant: 8,
    caseStudy: {
      season: 'October · Autumn',
      duration: '4 days',
      usage: 'Social media',
    },
    coverImage: publicImage('sec9-foto1-v.jpg'),
    description:
      'In the heart of the Gorafe desert, District Hive is a capsule of glass and steel suspended above the Granada badlands, with architecture that runs off the grid and is designed to disappear into it: water from the air, energy from the sun, and the absolute silence of inland Andalusia.',
    quote: 'The whole sky for a roof, the whole badlands for a horizon.',
    photos: [
      {
        id: 'dh-1',
        url: publicImage('sec9-foto1-v.jpg'),
        alt: 'Man walking beside the glass and steel District Hive capsule in the Gorafe desert',
        caption: 'A walk beside the capsule',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-2',
        url: publicImage('sec9-foto2-v.jpg'),
        alt: 'Hexagonal District Hive logo on the window, with the Gorafe badlands beyond',
        caption: 'The logo, above the desert',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-3',
        url: publicImage('sec9-foto3-h.jpg'),
        alt: 'Glass District Hive capsule with its outdoor pool overhanging the Gorafe badlands',
        caption: 'The capsule, with its pool above the desert',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ],
    galleryPhotos: [
      {
        id: 'dh-gal-1',
        url: publicImage('sec9-gal06-panoramica-h.jpg'),
        alt: 'Panorama of the Gorafe badlands with the reservoir and a white village in the distance',
        caption: 'The Gorafe badlands, out to the reservoir',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-2',
        url: publicImage('sec9-gal02-badlands-aerea-v.jpg'),
        alt: 'High aerial view of the Gorafe desert with the property barely visible in the distance',
        caption: 'The property, barely visible in the desert',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-3',
        url: publicImage('sec9-foto1-v.jpg'),
        alt: 'Man walking beside the glass and steel District Hive capsule',
        caption: 'A walk beside the capsule',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-4',
        url: publicImage('sec9-gal05-atardecer-v.jpg'),
        alt: 'Woman walking towards the capsule at sunset with the District Hive logo visible on its side',
        caption: 'The capsule, as evening falls',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-5',
        url: publicImage('sec9-gal01-aerea-h.jpg'),
        alt: 'Aerial view of the District Hive capsule on the canyon edge in the Gorafe desert',
        caption: 'The capsule, on the edge of the canyon',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-6',
        url: publicImage('sec9-foto2-v.jpg'),
        alt: 'Hexagonal District Hive logo on the window, with the Gorafe badlands beyond',
        caption: 'The logo, above the desert',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-7',
        url: publicImage('sec9-gal03-ducha-v.jpg'),
        alt: 'District Hive outdoor shower with the capsule beyond, among gravel and red earth',
        caption: 'The outdoor shower, beside the capsule',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-8',
        url: publicImage('sec9-foto3-h.jpg'),
        alt: 'Glass District Hive capsule with its outdoor pool overhanging the badlands',
        caption: 'The capsule, with its pool above the desert',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'dh-gal-9',
        url: publicImage('sec9-gal04-jacuzzi-h.jpg'),
        alt: 'The capsule seen from the outdoor jacuzzi pool with the mountains beyond',
        caption: 'The capsule, seen from the jacuzzi',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ]
  },
  {
    id: 'san-domenico-palace',
    hotelName: 'WELMOON VILLAS PAISAJE',
    leftTag: 'GLAMPING',
    coupleName: 'Under the stars',
    location: 'Caravaca de la Cruz, Murcia',
    country: 'Spain',
    year: '2026',
    category: 'Romantic Escape',
    layoutVariant: 7,
    caseStudy: {
      season: 'March · Spring',
      duration: '3 days',
      usage: 'Social media',
    },
    coverImage: publicImage('sec8-portada.jpg'),
    description:
      'Among the pine woods of Caravaca de la Cruz, the vaulted villas of Welmoon Paisaje are designed for sleeping under a blanket of stars: intimate architecture, made for switching off from the noise and looking at the sky unfiltered.',
    quote: 'A roof of stars and the silence of the Murcian sierra.',
    photos: [
      {
        id: 'sdp-1',
        url: publicImage('sec8-foto1-c.jpg'),
        alt: 'Telescope and sun lounger on the wooden terrace among the pines',
        caption: 'Ready to watch the stars',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-2',
        url: publicImage('sec8-foto2-c.jpg'),
        alt: 'Couple relaxing on the outdoor bed with the vaulted villa beyond',
        caption: 'The outdoor bed, beside the villa',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-3',
        url: publicImage('sec8-foto3-h.jpg'),
        alt: 'Interior of the vaulted villa with a glass roof and forest views',
        caption: 'The glass roof onto the forest',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      }
    ],
    galleryPhotos: [
      {
        id: 'sdp-gal-1',
        url: publicImage('sec8-gal01-fachada-v.jpg'),
        alt: 'Wooden façade of the vaulted Welmoon Paisaje villa among the pines, with a cushioned bench on the terrace',
        caption: 'The villa, among the pines',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-2',
        url: publicImage('sec8-gal02-cats-h.jpg'),
        alt: 'Two tabby cats on the "Welmoon" doormat at the villa entrance',
        caption: 'The Welmoon welcoming party',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-3',
        url: publicImage('sec8-gal03-interior-cama-h.jpg'),
        alt: 'Interior of the vaulted villa with bed, cushions and a view through to the marble bathroom and the forest',
        caption: 'The interior, under the vaulted roof',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-4',
        url: publicImage('sec8-gal04-bano-v.jpg'),
        alt: 'Villa bathroom with a stone basin, a circular mirror and pampas grass',
        caption: 'The bathroom, between wood and stone',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-5',
        url: publicImage('sec8-gal05-amenities-v.jpg'),
        alt: 'Welmoon amenities detail: branded jars, an embroidered towel and a welcome box with a heart',
        caption: 'The Welmoon detail',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-6',
        url: publicImage('sec8-gal06-vista-bosque-h.jpg'),
        alt: 'View of the pine forest from the bed, through the large vaulted window',
        caption: 'The pine wood, from the bed',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-7',
        url: publicImage('sec8-foto3-h.jpg'),
        alt: 'Interior of the vaulted villa with a glass roof and forest views',
        caption: 'The glass roof onto the forest',
        aspectRatio: 'landscape',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-8',
        url: publicImage('sec8-gal07-desayuno-v.jpg'),
        alt: 'Breakfast served on the wooden table with a croissant, fruit, jam and a warm lamp',
        caption: 'Breakfast, among warm wood',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-9',
        url: publicImage('sec8-foto1-c.jpg'),
        alt: 'Telescope and sun lounger on the wooden terrace among the pines',
        caption: 'Ready to watch the stars',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-10',
        url: publicImage('sec8-foto2-c.jpg'),
        alt: 'Couple relaxing on the outdoor bed with the vaulted villa beyond',
        caption: 'The outdoor bed, beside the villa',
        aspectRatio: 'square',
        isBlackAndWhite: false
      },
      {
        id: 'sdp-gal-11',
        url: publicImage('sec8-gal08-jacuzzi-noche-v.jpg'),
        alt: 'Wooden hot tub with a log stove and lit candles on the terrace, night sky through the pines',
        caption: 'The jacuzzi by candlelight',
        aspectRatio: 'portrait',
        isBlackAndWhite: false
      }
    ]
  }
];
