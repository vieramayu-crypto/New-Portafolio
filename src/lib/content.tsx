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

export interface MilestoneItem {
  value: string;
  label: string;
}

export interface HowWeWorkStep {
  number: string;
  title: string;
  description: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface SiteContent {
  hero: {
    /** Primera línea del titular. No cambia: sólo rota la de debajo. */
    fixedLine: string;
    /** Palabras que se turnan en la segunda línea, una a la vez. */
    blocks: string[];
    subheadline: string;
  };
  valueBlock: {
    claim: string;
    benefits: string[];
    ctaLabel: string;
  };
  closingCta: {
    heading: string;
    ctaLabel: string;
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
    emailAddress: string;
  };
  milestones: {
    eyebrow: string;
    items: MilestoneItem[];
    footnote: string;
  };
  howWeWork: {
    eyebrow: string;
    heading: string;
    steps: HowWeWorkStep[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    questions: FaqEntry[];
  };
  hotels: HotelContent[];
}

// Mirrors the site's current text exactly. Used as the immediate render (no
// loading flash) and as a safe fallback for any field missing or malformed
// in content.json once it's fetched.
export const DEFAULT_CONTENT: SiteContent = {
  hero: {
    fixedLine: 'Tu hotel',
    blocks: ['rodado', 'visto'],
    subheadline: 'Producción visual para hoteles de lujo con enfoque sostenible.',
  },
  valueBlock: {
    claim: 'Cada rodaje deja dos cosas.',
    benefits: [
      'Fotografía y video que tu equipo usa todo el año. Web, campañas, publicidad — con derechos incluidos.',
      'Y tu hotel delante de una audiencia que aún no lo conocía.',
    ],
    ctaLabel: 'Consultar disponibilidad',
  },
  closingCta: {
    heading: '¿Hablamos de tu propiedad?',
    ctaLabel: 'Consultar disponibilidad',
  },
  about: {
    flipWords: ['Alcance', 'Exposición', 'Audiencia'],
    introStatement:
      'Mayu Travel es un estudio de producción visual para hoteles de lujo, hecho por dos personas que se conocen desde hace años. No trabajamos con fórmulas ni plantillas: cada proyecto nace de mirar de cerca, con tiempo, lo que hace único a cada lugar.',
    legacyQuote:
      'No lo hacemos para llenar un feed. Lo hacemos porque cada hotel tiene un alma que merece verse como se siente vivirlo.',
    mayurlin: {
      name: 'Mayurlin Viera',
      bio: 'Crear contenido fue el sueño de Mayu antes de tener con qué hacerlo. Trabajar con los mejores hoteles del mundo fue, desde siempre, su objetivo número uno. Esa idea no se le fue nunca — solo esperó el momento y las manos correctas para hacerla real. Seis años y más de treinta y cinco propiedades después, sigue mirando cada nuevo hotel como el primero.',
    },
    yerfran: {
      name: 'Yerfran',
      bio: 'Yerfran llegó a la fotografía por otro camino: el de capturar lo que una persona siente en un lugar, no solo cómo se ve. Años de mirar con atención se convirtieron en un estilo propio — fotos con alma, hechas desde el cuidado. Hoy codirige la producción visual de Mayu Travel en hoteles de España, Portugal, Grecia, Suiza y Países Bajos.',
    },
    closingStatement:
      'Una parte importante de nuestro trabajo son propiedades donde la sostenibilidad no es una etiqueta: casas off-grid, fincas agrícolas, hoteles que se sostienen con lo que tienen alrededor. Contarlo bien exige mirarlo de cerca — y es lo que mejor sabemos hacer.',
  },
  contact: {
    eyebrow: 'Reserva de calendario',
    heading: 'Trabajemos juntos',
    subheading:
      'Cuéntanos tu propiedad y las fechas que estás considerando — respondemos en 48 h.',
    emailAddress: 'mayuviera@gmail.com',
  },
  milestones: {
    eyebrow: 'Trayectoria',
    items: [
      { value: '35+', label: 'Propiedades hoteleras producidas' },
      { value: '5', label: 'Países' },
      { value: '6', label: 'Años trabajando en pareja' },
    ],
    footnote:
      'Clientes recurrentes — GPRO Valparaíso (3 rodajes) · Numa Group (3 propiedades) · Hotel Espléndido (2 rodajes) · Portixol (2 rodajes)',
  },
  howWeWork: {
    eyebrow: 'Cómo trabajamos',
    heading: 'El proceso',
    steps: [
      {
        number: '01',
        title: 'Contacto y encaje',
        description:
          'Nos escribes desde el formulario o el email. En una llamada breve entendemos la propiedad, la temporada y el uso que le vas a dar al material.',
      },
      {
        number: '02',
        title: 'Plan visual',
        description:
          'Antes de viajar preparamos brief creativo, lista de tomas y storyboard del cortometraje. Ajustamos con el equipo del hotel para que nada quede fuera.',
      },
      {
        number: '03',
        title: 'Rodaje en la propiedad',
        description:
          'Dos a cinco días en el hotel — el alcance se dimensiona según temporada y actividades. Cubrimos en vivo mientras rodamos.',
      },
      {
        number: '04',
        title: 'Postproducción y entrega',
        description:
          'Corrección de color, edición y entrega en un plazo aproximado de tres semanas, organizada para uso inmediato en web, redes y publicidad.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    heading: 'Antes de escribir',
    questions: [
      {
        question: '¿Con cuánta antelación conviene reservar fechas?',
        answer:
          'Dos a tres semanas es el rango habitual. Para temporadas altas o aperturas conviene consultar antes.',
      },
      {
        question: '¿Quién cubre viajes y alojamiento?',
        answer:
          'Van incluidos en la propuesta económica que armamos para cada proyecto. Nos encargamos nosotros de logística y traslados.',
      },
      {
        question: '¿Qué derechos de uso incluye la entrega?',
        answer:
          'Cesión para uso del hotel en sus canales propios — web, redes, newsletter — y en campañas de publicidad pagada.',
      },
      {
        question: '¿Ofrecen exclusividad geográfica por temporada?',
        answer:
          'Sí, disponible bajo pedido. Se define al cerrar el proyecto y se refleja en la propuesta económica.',
      },
      {
        question: '¿Dan cobertura durante la estancia?',
        answer:
          'Sí. Mínimo tres stories diarias en @mayurlintravel, además de reels en colaboración con la cuenta del hotel y una publicación en el feed.',
      },
    ],
  },
  hotels: [
    {
      seccion: 1,
      hotelName: 'THE RITZ-CARLTON TENERIFE, ABAMA',
      coupleName: 'Editorial de arquitectura morisca',
      description:
        'Una finca morisca de muros terracota sobre el acantilado de Guía de Isora, con jardines subtropicales que descienden hasta el Atlántico y La Gomera al fondo.',
      quote: 'Terracota, océano y jardín — tres tonos que se encuentran en cada esquina de Abama.',
    },
    {
      seccion: 2,
      hotelName: 'INTERCONTINENTAL LISBOA',
      coupleName: 'Editorial urbano de altura',
      description:
        'Arquitectura contemporánea sobre una de las siete colinas de Lisboa, frente al Parque Eduardo VII, con el skyline y el Tajo al fondo.',
      quote: 'Lisboa entera se despliega desde lo alto de esta colina.',
    },
    {
      seccion: 3,
      hotelName: 'VESTIGE COLLECTION, BINIDUFÀ',
      coupleName: 'Editorial de patrimonio menorquín',
      description:
        'Una possessió del siglo XVIII restaurada en una finca privada de 800 hectáreas al norte de Menorca — piedra, barro y silencio agrícola.',
      quote: 'Piedra, tierra y silencio — el norte de Menorca tal como siempre fue.',
    },
    {
      seccion: 4,
      hotelName: 'DELTAPARK VITALRESORT',
      coupleName: 'Editorial alpino de bienestar',
      description:
        'Arquitectura alpina contemporánea a orillas del lago de Thun, entre dos reservas del Kanderdelta, con un spa de 2.000 m².',
      quote: 'El silencio de los Alpes se refleja entero en el lago de Thun.',
    },
    {
      seccion: 5,
      hotelName: 'HONEYMOON PETRA VILLAS',
      coupleName: 'Editorial de acantilado egeo',
      description:
        'Tallado en roca volcánica sobre la caldera de Santorini, con una de las piscinas más buscadas del Egeo suspendida sobre el mar.',
      quote: 'Roca volcánica y horizonte infinito — así se ve el amanecer sobre la caldera.',
    },
    {
      seccion: 6,
      hotelName: 'GPRO VALPARAÍSO PALACE & SPA',
      coupleName: 'Editorial mediterráneo de spa',
      description:
        'Jardines privados sobre la bahía de Palma, en lo alto de Bonanova, con el spa más grande de Mallorca en su interior.',
      quote: 'Jardines, agua y la bahía de Palma extendida al fondo de cada terraza.',
    },
    {
      seccion: 7,
      hotelName: 'HOTEL ESPLÉNDIDO',
      coupleName: 'Editorial de bahía y piedra',
      description:
        'Piedra caliza y terrazas frente a la bahía de Sóller, con la Serra de Tramuntana detrás y el tranvía histórico cruzando el paseo.',
      quote: 'Piedra, mar y el eco del tranvía sobre los adoquines de Sóller.',
    },
    {
      seccion: 8,
      hotelName: 'DISTRICT HIVE',
      coupleName: 'Editorial off-grid en el desierto',
      description:
        'Una cápsula de vidrio y acero suspendida sobre el badlands de Gorafe — arquitectura off-grid con agua del aire y energía solar.',
      quote: 'El cielo entero por techo, el badlands entero por horizonte.',
    },
    {
      seccion: 9,
      hotelName: 'WELMOON VILLAS PAISAJE',
      coupleName: 'Editorial bajo las estrellas',
      description:
        'Villas abovedadas entre pinares de Caravaca de la Cruz, pensadas para dormir bajo un cielo sin filtros de la sierra murciana.',
      quote: 'Un techo de estrellas y el silencio de la sierra murciana.',
    },
  ],
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === 'string' && v.trim().length > 0;
}

function isMilestoneItem(v: unknown): v is MilestoneItem {
  return (
    !!v &&
    typeof v === 'object' &&
    isNonEmptyString((v as MilestoneItem).value) &&
    isNonEmptyString((v as MilestoneItem).label)
  );
}

function isHowWeWorkStep(v: unknown): v is HowWeWorkStep {
  return (
    !!v &&
    typeof v === 'object' &&
    isNonEmptyString((v as HowWeWorkStep).number) &&
    isNonEmptyString((v as HowWeWorkStep).title) &&
    isNonEmptyString((v as HowWeWorkStep).description)
  );
}

function isFaqEntry(v: unknown): v is FaqEntry {
  return (
    !!v &&
    typeof v === 'object' &&
    isNonEmptyString((v as FaqEntry).question) &&
    isNonEmptyString((v as FaqEntry).answer)
  );
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

  const milestoneItems =
    Array.isArray(f.milestones?.items) && f.milestones!.items.every(isMilestoneItem) && f.milestones!.items.length > 0
      ? f.milestones!.items
      : DEFAULT_CONTENT.milestones.items;

  const howWeWorkSteps =
    Array.isArray(f.howWeWork?.steps) && f.howWeWork!.steps.every(isHowWeWorkStep) && f.howWeWork!.steps.length > 0
      ? f.howWeWork!.steps
      : DEFAULT_CONTENT.howWeWork.steps;

  const faqQuestions =
    Array.isArray(f.faq?.questions) && f.faq!.questions.every(isFaqEntry) && f.faq!.questions.length > 0
      ? f.faq!.questions
      : DEFAULT_CONTENT.faq.questions;

  const heroBlocks =
    Array.isArray(f.hero?.blocks) && f.hero!.blocks.every(isNonEmptyString) && f.hero!.blocks.length > 0
      ? f.hero!.blocks
      : DEFAULT_CONTENT.hero.blocks;

  const benefits =
    Array.isArray(f.valueBlock?.benefits) &&
    f.valueBlock!.benefits.every(isNonEmptyString) &&
    f.valueBlock!.benefits.length > 0
      ? f.valueBlock!.benefits
      : DEFAULT_CONTENT.valueBlock.benefits;

  return {
    hero: {
      fixedLine: isNonEmptyString(f.hero?.fixedLine) ? f.hero!.fixedLine : DEFAULT_CONTENT.hero.fixedLine,
      blocks: heroBlocks,
      subheadline: isNonEmptyString(f.hero?.subheadline)
        ? f.hero!.subheadline
        : DEFAULT_CONTENT.hero.subheadline,
    },
    valueBlock: {
      claim: isNonEmptyString(f.valueBlock?.claim) ? f.valueBlock!.claim : DEFAULT_CONTENT.valueBlock.claim,
      benefits,
      ctaLabel: isNonEmptyString(f.valueBlock?.ctaLabel)
        ? f.valueBlock!.ctaLabel
        : DEFAULT_CONTENT.valueBlock.ctaLabel,
    },
    closingCta: {
      heading: isNonEmptyString(f.closingCta?.heading)
        ? f.closingCta!.heading
        : DEFAULT_CONTENT.closingCta.heading,
      ctaLabel: isNonEmptyString(f.closingCta?.ctaLabel)
        ? f.closingCta!.ctaLabel
        : DEFAULT_CONTENT.closingCta.ctaLabel,
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
      emailAddress: isNonEmptyString(f.contact?.emailAddress)
        ? f.contact!.emailAddress
        : DEFAULT_CONTENT.contact.emailAddress,
    },
    milestones: {
      eyebrow: isNonEmptyString(f.milestones?.eyebrow)
        ? f.milestones!.eyebrow
        : DEFAULT_CONTENT.milestones.eyebrow,
      items: milestoneItems,
      footnote: isNonEmptyString(f.milestones?.footnote)
        ? f.milestones!.footnote
        : DEFAULT_CONTENT.milestones.footnote,
    },
    howWeWork: {
      eyebrow: isNonEmptyString(f.howWeWork?.eyebrow)
        ? f.howWeWork!.eyebrow
        : DEFAULT_CONTENT.howWeWork.eyebrow,
      heading: isNonEmptyString(f.howWeWork?.heading)
        ? f.howWeWork!.heading
        : DEFAULT_CONTENT.howWeWork.heading,
      steps: howWeWorkSteps,
    },
    faq: {
      eyebrow: isNonEmptyString(f.faq?.eyebrow) ? f.faq!.eyebrow : DEFAULT_CONTENT.faq.eyebrow,
      heading: isNonEmptyString(f.faq?.heading) ? f.faq!.heading : DEFAULT_CONTENT.faq.heading,
      questions: faqQuestions,
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
