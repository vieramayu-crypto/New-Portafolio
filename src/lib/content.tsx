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
      hotelName: 'GRAND HOTEL TREMEZZO',
      coupleName: 'EMY & OLY',
      description:
        'Ubicado en las orillas cristalinas del Lago di Como, el Grand Hotel Tremezzo representa la cima del glamour italiano de la belle époque. Sus jardines escalonados descienden hasta el agua, enmarcando cada celebración con la calma del lago y el eco de las montañas circundantes. Dentro, los salones conservan el espíritu de la belle époque: mármoles claros, arañas de cristal y una luz que parece detenida en el tiempo. Cada rincón del hotel cuenta una historia distinta, y juntos forman el escenario perfecto para una boda que se siente íntima incluso en su grandeza.',
      quote: 'Un romance envuelto en velos de encaje vintage y la brisa atemporal del lago.',
    },
    {
      seccion: 2,
      hotelName: 'VILLA CIMBRONE',
      coupleName: 'DAVY & DAVID',
      description:
        'En lo alto de los acantilados de Ravello, la Terrazza dell’Infinito de Villa Cimbrone ofrece vistas panorámicas sobre el mar Tirreno.',
      quote: 'Donde los arcos góticos rozan las nubes y el Mediterráneo se vuelve infinito.',
    },
    {
      seccion: 3,
      hotelName: 'BELMOND HOTEL CARUSO',
      coupleName: 'CLARA & JULIAN',
      description:
        'Un palacio del siglo XI suspendido entre el cielo y el mar, famoso por su piscina infinita que parece fundirse con el horizonte amalfitano.',
      quote: 'La elegancia serena del romanticismo italiano clásico.',
    },
    {
      seccion: 4,
      hotelName: 'BORGO EGNAZIA',
      coupleName: 'ELENA & MATTEO',
      description:
        'Una reinterpretación contemporánea de una villa apuliana tradicional, construida en piedra caliza blanca con olivos milenarios.',
      quote: 'Piedra blanca, olivos milenarios y la luz dorada del mar Adriático.',
    },
    {
      seccion: 5,
      hotelName: 'HOTEL DANIELI',
      coupleName: 'SOPHIA & LUCAS',
      description:
        'Un palacio gótico veneciano del siglo XIV a pasos de la Plaza de San Marcos, cargado de historia, mármol rosado y chandeliers de Murano.',
      quote: 'Góndolas al anochecer y el misterio dorado del Gran Canal.',
    },
    {
      seccion: 6,
      hotelName: "VILLA D'ESTE",
      coupleName: 'CAMILLA & ADRIAN',
      description:
        'Una legendaria residencia renacentista del siglo XVI rodeada de 25 hectáreas de jardines privados con estatuas y nymphaeums.',
      quote: 'Elegancia majestuosa en los jardines renacentistas del lago.',
    },
    {
      seccion: 7,
      hotelName: 'AMAN VENICE',
      coupleName: 'VALENTINA & MARCO',
      description:
        'El Palazzo Papadopoli alberga frescos del siglo XVIII de Tiepolo, jardines privados y salones barrocos sobre el Gran Canal.',
      quote: 'Lujo sutil y silencio dorado sobre las aguas de Venecia.',
    },
    {
      seccion: 8,
      hotelName: 'SAN DOMENICO PALACE',
      coupleName: 'ISABELLA & MATHIEU',
      description:
        'Un antiguo convento dominico del siglo XIV transformado en hotel Four Seasons con vistas al volcán Etna y la bahía de Taormina.',
      quote: 'Aromas de azahar, claustros de piedra y el resplandor del Etna.',
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
