import { publicImage } from '../src/lib/content';

export const HERO_PHOTO = publicImage('hero-portada.jpg');
export const MAYU_PORTRAIT = publicImage('sobre-mi-mayurlin.jpg');
export const YERFRAN_PORTRAIT = publicImage('sobre-mi-yerfran.jpg');

// Already hosted on Mayurlin's own site (not bundled), so she can already
// swap it herself without touching code -- left as-is.
export const COUPLE_PHOTO = 'https://mayurlintravel.eu/wp-content/uploads/2026/08/Fondo-scaled.webp';

// Same photo as the Home hero background.
export const PORTFOLIO_MENU_PHOTO = HERO_PHOTO;
