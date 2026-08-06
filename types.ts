export type Page = 'home' | 'portfolio' | 'about' | 'contact';

export type CollaborationCategory =
  | 'Grandes Resorts de Lujo'
  | 'Boutique y Destino'
  | 'Experiencial y Sostenible';

export interface CollaborationCase {
  id: string;
  brandName: string;
  category: CollaborationCategory;
  location?: string;
  summary: string;
  /** True once real photography/video for this collaboration has been added. */
  hasMedia: boolean;
  coverImage?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  brandName: string;
}

export interface CollaborationInquiry {
  name: string;
  email: string;
  phone?: string;
  propertyName: string;
  collaborationType: string;
  availabilityDate: string;
  message: string;
}
