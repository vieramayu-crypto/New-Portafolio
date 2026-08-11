import React, { createContext, useContext, useEffect, useState } from 'react';

/** Builds a URL to a file in public/images/, correct in both dev and the built site. */
export function publicImage(filename: string): string {
  return `${import.meta.env.BASE_URL}images/${filename}`;
}

const CONTENT_URL = publicImage('content.json');

export interface HotelContent {
  seccion: number;
  hotelName: string;
  coupleName: string;
  description: string;
  quote: string;
}

export interface SiteContent {
  hero: {
    headline: string;
  };
  about: {
    flipWords: string[];
    introStatement: string;
    legacyQuote: string;
    mayurlin: { name: string; bio: string };
    yerfran: { name: string; bio: string };
    closingStatement: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  hotels: HotelContent[];
}

// Mirrors the site's current text exactly. Used as the immediate render (no
// loading flash) and as a safe fallback for any field missing or malformed
// in content.json once it's fetched.
export const DEFAULT_CONTENT: SiteContent = {
  hero: {
    headline: 'Contamos lo que se siente, no solo lo que se ve.',
  },
  about: {
    flipWords: ['Alma', 'Amor', 'Autenticidad'],
    introStatement:
      'Mayu Travel es un estudio de producción visual para hoteles de lujo, hecho por dos personas que se conocen desde hace años. No trabajamos con fórmulas ni plantillas: cada proyecto nace de mirar de cerca, con tiempo, lo que hace único a cada lugar.',
    legacyQuote:
      'No lo hacemos para llenar un feed. Lo hacemos porque cada hotel tiene un alma que merece verse como se siente vivirlo.',
    mayurlin: {
      name: 'Mayurlin Viera',
      bio: 'Crear contenido fue el sueño de Mayu antes de tener con qué hacerlo. Trabajar con los mejores hoteles del mundo fue, desde siempre, su objetivo número uno. Esa idea no se le fue nunca — solo esperó el momento y las manos correctas para hacerla real.',
    },
    yerfran: {
      name: 'Yerfran',
      bio: 'Yerfran llegó a la fotografía por otro camino: el de capturar lo que una persona siente en un lugar, no solo cómo se ve. Años de mirar con atención se convirtieron en un estilo propio — fotos con alma, hechas desde el cuidado y no desde la fórmula.',
    },
    closingStatement:
      'Con los años, eso se volvió esto. Combinamos lo que cada uno hace mejor para darle a cada hotel lo mismo: una mirada honesta, con el tiempo y el cuidado de dos personas que ya saben trabajar juntas.',
  },
  contact: {
    eyebrow: 'Contacto directo',
    heading: 'Trabajemos juntos',
    subheading: 'Si esto encaja con lo que necesitas ahora, podemos compartir fechas y detalles de entregables.',
  },
  hotels: [
    {
      seccion: 1,
      hotelName: 'THE RITZ-CARLTON TENERIFE, ABAMA',
      coupleName: 'Fotografía & Video',
      description:
        'En lo alto de un acantilado de Guía de Isora, con vistas al Atlántico y a La Gomera, The Ritz-Carlton Tenerife, Abama recrea una finca de arquitectura morisca — muros terracota, formas irregulares y jardines subtropicales de palmeras, lagos y cascadas que envuelven cada rincón del resort.',
      quote: 'Terracota, océano y jardín — tres tonos que se encuentran en cada esquina de Abama.',
    },
    {
      seccion: 2,
      hotelName: 'VESTIGE BINIDUFÀ',
      coupleName: 'Fotografía & Video',
      description:
        'En un valle del norte de Menorca, dentro de una finca privada de 800 hectáreas, Vestige Binidufà restaura una possessió agrícola del siglo XVIII — piedra, barro y materiales naturales que toman su tono directamente del paisaje que la rodea, con la herencia morisca aún presente en su nombre.',
      quote: 'Piedra, tierra y silencio — el norte de Menorca tal como siempre fue.',
    },
    {
      seccion: 3,
      hotelName: 'DELTAPARK VITALRESORT',
      coupleName: 'Fotografía & Video',
      description:
        'A orillas del lago de Thun, entre dos reservas naturales del Kanderdelta, Deltapark Vitalresort combina arquitectura alpina contemporánea con un spa de 2.000 m² — agua, montaña y bienestar en un mismo horizonte.',
      quote: 'El silencio de los Alpes se refleja entero en el lago de Thun.',
    },
    {
      seccion: 4,
      hotelName: 'HONEYMOON PETRA VILLAS',
      coupleName: 'Fotografía & Video',
      description:
        'Suspendido sobre el acantilado de Imerovigli, tallado en roca volcánica sobre la caldera de Santorini, Honeymoon Petra Villas ofrece una de las piscinas más buscadas del Egeo — un balcón de piedra sobre el mar más azul de Grecia.',
      quote: 'Roca volcánica y horizonte infinito — así se ve el amanecer sobre la caldera.',
    },
    {
      seccion: 5,
      hotelName: 'GPRO VALPARAÍSO PALACE & SPA',
      coupleName: 'Fotografía & Video',
      description:
        'En lo alto del distrito de Bonanova, rodeado de jardines privados con vistas a la bahía de Palma, GPRO Valparaíso Palace & Spa alberga el spa más grande de Mallorca — un refugio sereno entre agua, piedra y vegetación mediterránea.',
      quote: 'Jardines, agua y la bahía de Palma extendida al fondo de cada terraza.',
    },
    {
      seccion: 6,
      hotelName: 'HOTEL ESPLÉNDIDO',
      coupleName: 'Fotografía & Video',
      description:
        'En primera línea de la bahía de Puerto de Sóller, con la Serra de Tramuntana como telón de fondo, Hotel Espléndido combina fachadas de piedra caliza, terrazas frente al mar y el tranvía histórico que aún recorre el paseo marítimo.',
      quote: 'Piedra, mar y el eco del tranvía sobre los adoquines de Sóller.',
    },
    {
      seccion: 7,
      hotelName: 'INTERCONTINENTAL LISBOA',
      coupleName: 'Fotografía & Video',
      description:
        'Construido sobre una de las siete colinas de Lisboa, frente al Parque Eduardo VII, InterContinental Lisboa combina arquitectura contemporánea con vistas que se extienden hasta el río Tajo — una lectura moderna del skyline lisboeta.',
      quote: 'Lisboa entera se despliega desde lo alto de esta colina.',
    },
    {
      seccion: 8,
      hotelName: 'WELMOON VILLAS PAISAJE',
      coupleName: 'Fotografía & Video',
      description:
        'Entre pinares de Caravaca de la Cruz, las villas abovedadas de Welmoon Paisaje están pensadas para dormir bajo un manto de estrellas — arquitectura íntima, hecha para desconectar del ruido y mirar el cielo sin filtros.',
      quote: 'Un techo de estrellas y el silencio de la sierra murciana.',
    },
  ],
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

// Merges fetched JSON over the defaults field by field, so a missing or
// malformed field never breaks the page -- it just falls back silently.
function mergeContent(fetched: unknown): SiteContent {
  if (!fetched || typeof fetched !== 'object') return DEFAULT_CONTENT;
  const f = fetched as Partial<SiteContent>;

  const hotels = Array.isArray(f.hotels)
    ? DEFAULT_CONTENT.hotels.map((defaultHotel, i) => {
        const h = f.hotels?.[i];
        if (!h || typeof h !== 'object') return defaultHotel;
        return {
          seccion: defaultHotel.seccion,
          hotelName: isNonEmptyString(h.hotelName) ? h.hotelName : defaultHotel.hotelName,
          coupleName: isNonEmptyString(h.coupleName) ? h.coupleName : defaultHotel.coupleName,
          description: isNonEmptyString(h.description) ? h.description : defaultHotel.description,
          quote: isNonEmptyString(h.quote) ? h.quote : defaultHotel.quote,
        };
      })
    : DEFAULT_CONTENT.hotels;

  return {
    hero: {
      headline: isNonEmptyString(f.hero?.headline) ? f.hero!.headline : DEFAULT_CONTENT.hero.headline,
    },
    about: {
      flipWords:
        Array.isArray(f.about?.flipWords) && f.about!.flipWords.every(isNonEmptyString) && f.about!.flipWords.length > 0
          ? f.about!.flipWords
          : DEFAULT_CONTENT.about.flipWords,
      introStatement: isNonEmptyString(f.about?.introStatement)
        ? f.about!.introStatement
        : DEFAULT_CONTENT.about.introStatement,
      legacyQuote: isNonEmptyString(f.about?.legacyQuote) ? f.about!.legacyQuote : DEFAULT_CONTENT.about.legacyQuote,
      mayurlin: {
        name: isNonEmptyString(f.about?.mayurlin?.name) ? f.about!.mayurlin.name : DEFAULT_CONTENT.about.mayurlin.name,
        bio: isNonEmptyString(f.about?.mayurlin?.bio) ? f.about!.mayurlin.bio : DEFAULT_CONTENT.about.mayurlin.bio,
      },
      yerfran: {
        name: isNonEmptyString(f.about?.yerfran?.name) ? f.about!.yerfran.name : DEFAULT_CONTENT.about.yerfran.name,
        bio: isNonEmptyString(f.about?.yerfran?.bio) ? f.about!.yerfran.bio : DEFAULT_CONTENT.about.yerfran.bio,
      },
      closingStatement: isNonEmptyString(f.about?.closingStatement)
        ? f.about!.closingStatement
        : DEFAULT_CONTENT.about.closingStatement,
    },
    contact: {
      eyebrow: isNonEmptyString(f.contact?.eyebrow) ? f.contact!.eyebrow : DEFAULT_CONTENT.contact.eyebrow,
      heading: isNonEmptyString(f.contact?.heading) ? f.contact!.heading : DEFAULT_CONTENT.contact.heading,
      subheading: isNonEmptyString(f.contact?.subheading)
        ? f.contact!.subheading
        : DEFAULT_CONTENT.contact.subheading,
    },
    hotels,
  };
}

const ContentContext = createContext<SiteContent>(DEFAULT_CONTENT);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);

  useEffect(() => {
    let cancelled = false;
    fetch(CONTENT_URL, { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data) setContent(mergeContent(data));
      })
      .catch(() => {
        // content.json missing/unreachable -- keep the built-in defaults.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
};

export function useSiteContent(): SiteContent {
  return useContext(ContentContext);
}
