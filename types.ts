export type Page = 'home' | 'portfolio' | 'about' | 'contact';

// Home page hero/scroll experience (original design) -- kept alongside the
// newer CollaborationCase model used on the About/Portfolio/Contact pages.
export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  isBlackAndWhite?: boolean;
}

export interface HotelStory {
  id: string;
  hotelName: string;
  leftTag?: string; // e.g. "HOTEL", "VILLA", "PALAZZO"
  coupleName: string;
  location: string;
  country: string;
  year: string;
  coverImage: string;
  description: string;
  photos: PhotoItem[]; // 3 or 4 photos for the section composition
  // Optional horizontal video for the story detail page gallery (position ~4, never first).
  galleryVideo?: {
    url: string;
    poster: string;
  };
  quote?: string;
  category: 'Hotel de Lujo' | 'Boda Destino' | 'Escapada Romántica' | 'Villa Histórica';
  layoutVariant?: number; // 0 to 7 unique layout variations
}

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
