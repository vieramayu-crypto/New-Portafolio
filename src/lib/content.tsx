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
    /** Rótulo fino sobre el titular. */
    eyebrow: string;
    /** Titular editorial, en dos partes: la segunda va en cursiva. */
    titleLead: string;
    titleEmphasis: string;
    /** Etiqueta a la izquierda de la banda glass inferior. */
    glassLabel: string;
    /** Enlace al final de la banda glass. */
    ctaLabel: string;
  };
  valueBlock: {
    claim: string;
    /** Titular de cada una de las dos formas de generar valor. */
    benefits: string[];
    /** Párrafo de apoyo de cada una, en el mismo orden que `benefits`. */
    benefitDetails: string[];
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
    /** Portada monumental: una línea por renglón, la última es la que cierra. */
    headingLines: string[];
    /** Segunda pantalla: una sola orientación y el CTA. */
    introMain: string;
    introSub: string;
    ctaLabel: string;
    emailAddress: string;
    /** Cabecera del modal de solicitud. */
    modalKicker: string;
    modalTitle: string;
    modalCopy: string;
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
    eyebrow: 'Mayu Travel · Creative Studio',
    titleLead: 'Producción visual para',
    titleEmphasis: 'hoteles de lujo.',
    glassLabel: 'Foto · Film · Content',
    ctaLabel: 'Proyectos ↓',
  },
  valueBlock: {
    claim: 'Una producción. Dos formas de generar valor.',
    benefits: ['Activos para tu marca.', 'Distribución, cuando suma.'],
    benefitDetails: [
      'Fotografía y video listos para web, campañas, redes y publicidad. El alcance y los derechos se definen en cada propuesta según el uso que necesite la propiedad.',
      'Cuando encaja con el objetivo del proyecto, añadimos cobertura y publicación ante una audiencia internacional interesada en viajes y hotelería. No es un requisito de la producción: es una capa adicional.',
    ],
    ctaLabel: 'Consultar producción',
  },
  closingCta: {
    heading: 'Hablemos de tu propiedad.',
    ctaLabel: 'Consultar disponibilidad',
  },
  about: {
    flipWords: ['Dirección', 'Distribución'],
    introStatement:
      'Mayu Travel es un estudio de producción visual especializado en hotelería de lujo. Trabajamos en pareja y construimos cada proyecto desde la propiedad: su arquitectura, su ritmo, su servicio y la forma en que quiere ser recordada.',
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
      'Nos interesan especialmente las propiedades con un sentido de lugar fuerte: arquitectura, paisaje, gastronomía, wellness, servicio y proyectos donde la sostenibilidad forma parte real de la experiencia.',
  },
  contact: {
    headingLines: ['Hablemos', 'de tu', 'propiedad.'],
    introMain: 'Cuéntanos qué necesitas producir, dónde y cuándo.',
    introSub:
      'Si hay encaje, te respondemos con disponibilidad y próximos pasos. No necesitas preparar un briefing completo.',
    ctaLabel: 'Iniciar proyecto',
    emailAddress: 'mayuviera@gmail.com',
    modalKicker: 'Solicitud de proyecto',
    modalTitle: 'Cuéntanos lo esencial.',
    modalCopy:
      'Con esta información podemos valorar el encaje, la disponibilidad y los próximos pasos.',
  },
  milestones: {
    eyebrow: 'Trayectoria',
    items: [
      { value: '35+', label: 'propiedades' },
      { value: '5', label: 'países' },
      { value: '4', label: 'clientes recurrentes' },
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
    eyebrow: 'Información práctica',
    heading: 'Dudas habituales.',
    questions: [
      {
        question: '¿Con cuánta antelación conviene reservar fechas?',
        answer:
          'Dos a tres semanas es el rango habitual. Para temporadas altas, aperturas o producciones con mayor alcance, conviene consultar antes.',
      },
      {
        question: '¿Quién cubre viajes y alojamiento?',
        answer:
          'Se contemplan dentro de la propuesta económica de cada proyecto. Coordinamos la logística y los traslados necesarios para la producción.',
      },
      {
        question: '¿Qué derechos de uso incluye la entrega?',
        answer:
          'Los derechos se definen según el uso previsto: web, redes, newsletter, PR, plataformas de reserva y campañas de publicidad pagada, entre otros.',
      },
      {
        question: '¿La distribución en @mayurlintravel forma parte de todos los proyectos?',
        answer:
          'No. Producción y distribución son capas distintas. Cuando existe encaje entre la propiedad, la campaña y nuestra audiencia, podemos incorporar publicación y cobertura como parte adicional de la propuesta.',
      },
    ],
  },
  hotels: [
    {
      seccion: 1,
      hotelName: 'THE RITZ-CARLTON TENERIFE, ABAMA',
      coupleName: 'Arquitectura morisca',
      description:
        'Una finca morisca de muros terracota sobre el acantilado de Guía de Isora, con jardines subtropicales que descienden hasta el Atlántico y La Gomera al fondo.',
      quote: 'Terracota, océano y jardín — tres tonos que se encuentran en cada esquina de Abama.',
    },
    {
      seccion: 2,
      hotelName: 'INTERCONTINENTAL LISBOA',
      coupleName: 'Urbano de altura',
      description:
        'Arquitectura contemporánea sobre una de las siete colinas de Lisboa, frente al Parque Eduardo VII, con el skyline y el Tajo al fondo.',
      quote: 'Lisboa entera se despliega desde lo alto de esta colina.',
    },
    {
      seccion: 3,
      hotelName: 'VESTIGE COLLECTION, BINIDUFÀ',
      coupleName: 'Patrimonio menorquín',
      description:
        'Una possessió del siglo XVIII restaurada en una finca privada de 800 hectáreas al norte de Menorca — piedra, barro y silencio agrícola.',
      quote: 'Piedra, tierra y silencio — el norte de Menorca tal como siempre fue.',
    },
    {
      seccion: 4,
      hotelName: 'DELTAPARK VITALRESORT',
      coupleName: 'Alpino de bienestar',
      description:
        'Arquitectura alpina contemporánea a orillas del lago de Thun, entre dos reservas del Kanderdelta, con un spa de 2.000 m².',
      quote: 'El silencio de los Alpes se refleja entero en el lago de Thun.',
    },
    {
      seccion: 5,
      hotelName: 'HONEYMOON PETRA VILLAS',
      coupleName: 'Acantilado egeo',
      description:
        'Tallado en roca volcánica sobre la caldera de Santorini, con una de las piscinas más buscadas del Egeo suspendida sobre el mar.',
      quote: 'Roca volcánica y horizonte infinito — así se ve el amanecer sobre la caldera.',
    },
    {
      seccion: 6,
      hotelName: 'GPRO VALPARAÍSO PALACE & SPA',
      coupleName: 'Mediterráneo de spa',
      description:
        'Jardines privados sobre la bahía de Palma, en lo alto de Bonanova, con el spa más grande de Mallorca en su interior.',
      quote: 'Jardines, agua y la bahía de Palma extendida al fondo de cada terraza.',
    },
    {
      seccion: 7,
      hotelName: 'HOTEL ESPLÉNDIDO',
      coupleName: 'Bahía y piedra',
      description:
        'Piedra caliza y terrazas frente a la bahía de Sóller, con la Serra de Tramuntana detrás y el tranvía histórico cruzando el paseo.',
      quote: 'Piedra, mar y el eco del tranvía sobre los adoquines de Sóller.',
    },
    {
      seccion: 8,
      hotelName: 'DISTRICT HIVE',
      coupleName: 'Off-grid en el desierto',
      description:
        'Una cápsula de vidrio y acero suspendida sobre el badlands de Gorafe — arquitectura off-grid con agua del aire y energía solar.',
      quote: 'El cielo entero por techo, el badlands entero por horizonte.',
    },
    {
      seccion: 9,
      hotelName: 'WELMOON VILLAS PAISAJE',
      coupleName: 'Bajo las estrellas',
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

  const stringList = (value: unknown, fallback: string[]): string[] =>
    Array.isArray(value) && value.length > 0 && value.every(isNonEmptyString)
      ? (value as string[])
      : fallback;

  const benefits = stringList(f.valueBlock?.benefits, DEFAULT_CONTENT.valueBlock.benefits);

  // Cada titular necesita su párrafo: si el JSON trae menos de los que hay
  // titulares, se completa con los de por defecto en vez de dejar huecos.
  const benefitDetails = stringList(
    f.valueBlock?.benefitDetails,
    DEFAULT_CONTENT.valueBlock.benefitDetails
  );

  return {
    hero: {
      eyebrow: isNonEmptyString(f.hero?.eyebrow) ? f.hero!.eyebrow : DEFAULT_CONTENT.hero.eyebrow,
      titleLead: isNonEmptyString(f.hero?.titleLead)
        ? f.hero!.titleLead
        : DEFAULT_CONTENT.hero.titleLead,
      titleEmphasis: isNonEmptyString(f.hero?.titleEmphasis)
        ? f.hero!.titleEmphasis
        : DEFAULT_CONTENT.hero.titleEmphasis,
      glassLabel: isNonEmptyString(f.hero?.glassLabel)
        ? f.hero!.glassLabel
        : DEFAULT_CONTENT.hero.glassLabel,
      ctaLabel: isNonEmptyString(f.hero?.ctaLabel)
        ? f.hero!.ctaLabel
        : DEFAULT_CONTENT.hero.ctaLabel,
    },
    valueBlock: {
      claim: isNonEmptyString(f.valueBlock?.claim) ? f.valueBlock!.claim : DEFAULT_CONTENT.valueBlock.claim,
      benefits,
      benefitDetails,
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
      headingLines: stringList(f.contact?.headingLines, DEFAULT_CONTENT.contact.headingLines),
      introMain: isNonEmptyString(f.contact?.introMain)
        ? f.contact!.introMain
        : DEFAULT_CONTENT.contact.introMain,
      introSub: isNonEmptyString(f.contact?.introSub)
        ? f.contact!.introSub
        : DEFAULT_CONTENT.contact.introSub,
      ctaLabel: isNonEmptyString(f.contact?.ctaLabel)
        ? f.contact!.ctaLabel
        : DEFAULT_CONTENT.contact.ctaLabel,
      emailAddress: isNonEmptyString(f.contact?.emailAddress)
        ? f.contact!.emailAddress
        : DEFAULT_CONTENT.contact.emailAddress,
      modalKicker: isNonEmptyString(f.contact?.modalKicker)
        ? f.contact!.modalKicker
        : DEFAULT_CONTENT.contact.modalKicker,
      modalTitle: isNonEmptyString(f.contact?.modalTitle)
        ? f.contact!.modalTitle
        : DEFAULT_CONTENT.contact.modalTitle,
      modalCopy: isNonEmptyString(f.contact?.modalCopy)
        ? f.contact!.modalCopy
        : DEFAULT_CONTENT.contact.modalCopy,
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
