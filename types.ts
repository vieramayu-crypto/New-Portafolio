export type Page = 'home' | 'portfolio' | 'about' | 'contact';

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
  quote?: string;
  category: 'Hotel de Lujo' | 'Boda Destino' | 'Escapada Romántica' | 'Villa Histórica';
  layoutVariant?: number; // 0 to 7 unique layout variations
}

export interface AvailabilityInquiry {
  name: string;
  email: string;
  phone?: string;
  eventDate: string;
  hotelName: string;
  guestCount: string;
  message: string;
}
