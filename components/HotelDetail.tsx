import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { HotelStory, PhotoItem } from '../types';

interface HotelDetailProps {
  story: HotelStory;
  onBack: () => void;
}

interface GalleryPhotoProps {
  photo: PhotoItem;
  y: ReturnType<typeof useTransform<number, string>>;
  aspectClass: string;
  widthClass: string;
  offsetClass?: string;
  bleed?: boolean;
}

function toTitleCase(value: string): string {
  return value
    .toLowerCase()
    .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}

const GalleryPhoto: React.FC<GalleryPhotoProps> = ({ photo, y, aspectClass, widthClass, offsetClass, bleed }) => (
  <motion.div
    style={{ y }}
    className={`relative ${widthClass} ${aspectClass} ${offsetClass || ''} ${
      bleed ? '' : 'shadow-2xl border border-[#1a1918]/10'
    } group overflow-hidden bg-stone-200`}
  >
    <img
      src={photo.url}
      alt={photo.alt}
      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
        photo.isBlackAndWhite ? 'grayscale contrast-125' : ''
      }`}
    />
  </motion.div>
);

interface GalleryVideoProps {
  video: { url: string; poster: string };
  y: ReturnType<typeof useTransform<number, string>>;
}

const GalleryVideo: React.FC<GalleryVideoProps> = ({ video, y }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  return (
    <motion.div style={{ y }} className="relative w-full aspect-[16/9] overflow-hidden bg-stone-200 group">
      <video
        ref={videoRef}
        src={video.url}
        poster={video.poster}
        playsInline
        controls={isPlaying}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      />
      {!isPlaying && (
        <button
          onClick={handlePlay}
          aria-label="Reproducir video"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 shadow-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 translate-x-[2px] text-[#1a1918]" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </motion.div>
  );
};

interface GalleryLayoutProps {
  photos: PhotoItem[];
  y: ReturnType<typeof useTransform<number, string>>[];
  video?: { url: string; poster: string };
}

const Bleed: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">{children}</div>
);

// 8 distinct gallery arrangements -- one per hotel, picked via story.layoutVariant.
// Each hotel already has its own single-digit layoutVariant (0-7) for its home
// teaser block, so it's reused here to also pick a matching, unique gallery
// rhythm: a different opening move, width split, offset direction and aspect
// ratio mix, so no two hotel portfolios read as the same template reordered.
// All blocks are conditional on the photo existing, same as before, so a
// hotel with only 3 photos loaded still renders a complete-feeling page.
const GALLERY_LAYOUTS: Array<React.FC<GalleryLayoutProps>> = [
  // 0 -- THE RITZ-CARLTON TENERIFE, ABAMA (original reference layout)
  ({ photos, y, video }) => (
    <>
      {photos[0] && (
        <div className="w-full">
          <GalleryPhoto photo={photos[0]} y={y[0]} aspectClass="aspect-[16/9]" widthClass="w-full" />
        </div>
      )}
      {(photos[1] || photos[2]) && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {photos[1] && (
            <GalleryPhoto photo={photos[1]} y={y[1]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-[62%]" />
          )}
          {photos[2] && (
            <GalleryPhoto
              photo={photos[2]}
              y={y[2]}
              aspectClass="aspect-[3/4]"
              widthClass="w-full md:w-[34%]"
              offsetClass="md:mt-20"
            />
          )}
        </div>
      )}
      {video ? (
        <Bleed>
          <GalleryVideo video={video} y={y[3]} />
        </Bleed>
      ) : (
        photos[3] && (
          <Bleed>
            <GalleryPhoto photo={photos[3]} y={y[3]} aspectClass="aspect-[16/9]" widthClass="w-full" bleed />
          </Bleed>
        )
      )}
      {(photos[4] || photos[5]) && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {photos[4] && (
            <GalleryPhoto
              photo={photos[4]}
              y={y[4]}
              aspectClass="aspect-[3/4]"
              widthClass="w-full md:w-[34%]"
              offsetClass="md:mt-20"
            />
          )}
          {photos[5] && (
            <GalleryPhoto photo={photos[5]} y={y[5]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-[62%]" />
          )}
        </div>
      )}
      {photos[6] && (
        <div className="w-full flex justify-center">
          <GalleryPhoto photo={photos[6]} y={y[6]} aspectClass="aspect-[4/5]" widthClass="w-full md:w-[68%]" />
        </div>
      )}
      {(photos[7] || photos[8]) && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {photos[7] && (
            <GalleryPhoto photo={photos[7]} y={y[7]} aspectClass="aspect-square" widthClass="w-full md:w-1/2" />
          )}
          {photos[8] && (
            <GalleryPhoto photo={photos[8]} y={y[8]} aspectClass="aspect-square" widthClass="w-full md:w-1/2" />
          )}
        </div>
      )}
      {photos[9] && (
        <div className="w-full">
          <GalleryPhoto photo={photos[9]} y={y[9]} aspectClass="aspect-[16/9]" widthClass="w-full" />
        </div>
      )}
    </>
  ),

  // 1 -- VESTIGE BINIDUFÀ: wide cinematic bleed opens, then a floating pair offset left
  ({ photos, y }) => (
    <>
      {photos[0] && (
        <Bleed>
          <GalleryPhoto photo={photos[0]} y={y[0]} aspectClass="aspect-[21/9]" widthClass="w-full" bleed />
        </Bleed>
      )}
      {(photos[1] || photos[2]) && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
          {photos[1] && (
            <GalleryPhoto
              photo={photos[1]}
              y={y[1]}
              aspectClass="aspect-[4/5]"
              widthClass="w-full md:w-[42%]"
              offsetClass="md:mt-16"
            />
          )}
          {photos[2] && (
            <GalleryPhoto photo={photos[2]} y={y[2]} aspectClass="aspect-[4/5]" widthClass="w-full md:w-[42%]" />
          )}
        </div>
      )}
      {photos[3] && (
        <div className="w-full flex justify-center">
          <GalleryPhoto photo={photos[3]} y={y[3]} aspectClass="aspect-square" widthClass="w-full md:w-[56%]" />
        </div>
      )}
      {(photos[4] || photos[5]) && (
        <div className="flex flex-col gap-6 md:gap-10">
          {photos[4] && (
            <GalleryPhoto photo={photos[4]} y={y[4]} aspectClass="aspect-[16/9]" widthClass="w-full" />
          )}
          {photos[5] && (
            <GalleryPhoto photo={photos[5]} y={y[5]} aspectClass="aspect-[16/9]" widthClass="w-full" />
          )}
        </div>
      )}
    </>
  ),

  // 2 -- DELTAPARK VITALRESORT: calm stacked solos, no early pair
  ({ photos, y }) => (
    <>
      {photos[0] && (
        <div className="w-full flex justify-center">
          <GalleryPhoto photo={photos[0]} y={y[0]} aspectClass="aspect-[4/3]" widthClass="w-full md:w-[70%]" />
        </div>
      )}
      {photos[1] && (
        <Bleed>
          <GalleryPhoto photo={photos[1]} y={y[1]} aspectClass="aspect-[16/9]" widthClass="w-full" bleed />
        </Bleed>
      )}
      {photos[2] && (
        <div className="w-full flex justify-end">
          <GalleryPhoto photo={photos[2]} y={y[2]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-[52%]" />
        </div>
      )}
      {(photos[3] || photos[4]) && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {photos[3] && (
            <GalleryPhoto photo={photos[3]} y={y[3]} aspectClass="aspect-square" widthClass="w-full md:w-1/2" />
          )}
          {photos[4] && (
            <GalleryPhoto photo={photos[4]} y={y[4]} aspectClass="aspect-square" widthClass="w-full md:w-1/2" />
          )}
        </div>
      )}
      {photos[5] && (
        <Bleed>
          <GalleryPhoto photo={photos[5]} y={y[5]} aspectClass="aspect-[16/9]" widthClass="w-full" bleed />
        </Bleed>
      )}
    </>
  ),

  // 3 -- HONEYMOON PETRA VILLAS: square hero opens, then a narrow floating diptych
  ({ photos, y }) => (
    <>
      {photos[0] && (
        <div className="w-full flex justify-center">
          <GalleryPhoto photo={photos[0]} y={y[0]} aspectClass="aspect-square" widthClass="w-full md:w-[62%]" />
        </div>
      )}
      {(photos[1] || photos[2]) && (
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 justify-center items-start">
          {photos[1] && (
            <GalleryPhoto photo={photos[1]} y={y[1]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-[30%]" />
          )}
          {photos[2] && (
            <GalleryPhoto
              photo={photos[2]}
              y={y[2]}
              aspectClass="aspect-[3/4]"
              widthClass="w-full md:w-[30%]"
              offsetClass="md:mt-12"
            />
          )}
        </div>
      )}
      {photos[3] && (
        <Bleed>
          <GalleryPhoto photo={photos[3]} y={y[3]} aspectClass="aspect-[16/9]" widthClass="w-full" bleed />
        </Bleed>
      )}
      {(photos[4] || photos[5] || photos[6]) && (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {photos[4] && (
            <GalleryPhoto photo={photos[4]} y={y[4]} aspectClass="aspect-square" widthClass="w-full md:w-1/3" />
          )}
          {photos[5] && (
            <GalleryPhoto photo={photos[5]} y={y[5]} aspectClass="aspect-square" widthClass="w-full md:w-1/3" />
          )}
          {photos[6] && (
            <GalleryPhoto photo={photos[6]} y={y[6]} aspectClass="aspect-square" widthClass="w-full md:w-1/3" />
          )}
        </div>
      )}
    </>
  ),

  // 4 -- GPRO VALPARAÍSO PALACE & SPA: pair opens (split reversed from #0), then a wide cinematic bleed
  ({ photos, y }) => (
    <>
      {(photos[0] || photos[1]) && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {photos[0] && (
            <GalleryPhoto
              photo={photos[0]}
              y={y[0]}
              aspectClass="aspect-[3/4]"
              widthClass="w-full md:w-[34%]"
              offsetClass="md:mt-20"
            />
          )}
          {photos[1] && (
            <GalleryPhoto photo={photos[1]} y={y[1]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-[62%]" />
          )}
        </div>
      )}
      {photos[2] && (
        <Bleed>
          <GalleryPhoto photo={photos[2]} y={y[2]} aspectClass="aspect-[21/9]" widthClass="w-full" bleed />
        </Bleed>
      )}
      {photos[3] && (
        <div className="w-full flex justify-center">
          <GalleryPhoto photo={photos[3]} y={y[3]} aspectClass="aspect-[4/5]" widthClass="w-full md:w-[58%]" />
        </div>
      )}
      {(photos[4] || photos[5]) && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {photos[4] && (
            <GalleryPhoto photo={photos[4]} y={y[4]} aspectClass="aspect-square" widthClass="w-full md:w-1/2" />
          )}
          {photos[5] && (
            <GalleryPhoto photo={photos[5]} y={y[5]} aspectClass="aspect-square" widthClass="w-full md:w-1/2" />
          )}
        </div>
      )}
    </>
  ),

  // 5 -- HOTEL ESPLÉNDIDO: triptych row opens, then a single wide bleed
  ({ photos, y }) => (
    <>
      {(photos[0] || photos[1] || photos[2]) && (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {photos[0] && (
            <GalleryPhoto photo={photos[0]} y={y[0]} aspectClass="aspect-square" widthClass="w-full md:w-1/3" />
          )}
          {photos[1] && (
            <GalleryPhoto
              photo={photos[1]}
              y={y[1]}
              aspectClass="aspect-square"
              widthClass="w-full md:w-1/3"
              offsetClass="md:mt-10"
            />
          )}
          {photos[2] && (
            <GalleryPhoto photo={photos[2]} y={y[2]} aspectClass="aspect-square" widthClass="w-full md:w-1/3" />
          )}
        </div>
      )}
      {photos[3] && (
        <Bleed>
          <GalleryPhoto photo={photos[3]} y={y[3]} aspectClass="aspect-[16/9]" widthClass="w-full" bleed />
        </Bleed>
      )}
      {(photos[4] || photos[5]) && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {photos[4] && (
            <GalleryPhoto photo={photos[4]} y={y[4]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-[62%]" />
          )}
          {photos[5] && (
            <GalleryPhoto
              photo={photos[5]}
              y={y[5]}
              aspectClass="aspect-[3/4]"
              widthClass="w-full md:w-[34%]"
              offsetClass="md:mt-20"
            />
          )}
        </div>
      )}
    </>
  ),

  // 6 -- INTERCONTINENTAL LISBOA: vertical-forward -- solo portrait, then a clean aligned pair
  ({ photos, y }) => (
    <>
      {photos[0] && (
        <div className="w-full flex justify-center">
          <GalleryPhoto photo={photos[0]} y={y[0]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-[46%]" />
        </div>
      )}
      {(photos[1] || photos[2]) && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {photos[1] && (
            <GalleryPhoto photo={photos[1]} y={y[1]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-1/2" />
          )}
          {photos[2] && (
            <GalleryPhoto photo={photos[2]} y={y[2]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-1/2" />
          )}
        </div>
      )}
      {photos[3] && (
        <Bleed>
          <GalleryPhoto photo={photos[3]} y={y[3]} aspectClass="aspect-[16/9]" widthClass="w-full" bleed />
        </Bleed>
      )}
      {photos[4] && (
        <div className="w-full flex justify-center">
          <GalleryPhoto photo={photos[4]} y={y[4]} aspectClass="aspect-square" widthClass="w-full md:w-[50%]" />
        </div>
      )}
    </>
  ),

  // 7 -- WELMOON VILLAS PAISAJE: square pair opens, wide bleed closes
  ({ photos, y }) => (
    <>
      {(photos[0] || photos[1]) && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {photos[0] && (
            <GalleryPhoto photo={photos[0]} y={y[0]} aspectClass="aspect-square" widthClass="w-full md:w-1/2" />
          )}
          {photos[1] && (
            <GalleryPhoto
              photo={photos[1]}
              y={y[1]}
              aspectClass="aspect-square"
              widthClass="w-full md:w-1/2"
              offsetClass="md:mt-12"
            />
          )}
        </div>
      )}
      {photos[2] && (
        <Bleed>
          <GalleryPhoto photo={photos[2]} y={y[2]} aspectClass="aspect-[16/9]" widthClass="w-full" bleed />
        </Bleed>
      )}
      {(photos[3] || photos[4] || photos[5]) && (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {photos[3] && (
            <GalleryPhoto photo={photos[3]} y={y[3]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-1/3" />
          )}
          {photos[4] && (
            <GalleryPhoto photo={photos[4]} y={y[4]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-1/3" />
          )}
          {photos[5] && (
            <GalleryPhoto photo={photos[5]} y={y[5]} aspectClass="aspect-[3/4]" widthClass="w-full md:w-1/3" />
          )}
        </div>
      )}
    </>
  ),
];

export const HotelDetail: React.FC<HotelDetailProps> = ({ story, onBack }) => {
  const [creditsOpen, setCreditsOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  // STRICT CONSTRAINT: Maximum 10 photos in the gallery
  const photos = (story.photos || []).slice(0, 10);

  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });

  // Same parallax mechanism as the home page hotel sections, extended to 10 photos
  const y0 = useTransform(smoothProgress, [0, 1], ['60px', '-60px']);
  const y1 = useTransform(smoothProgress, [0, 1], ['110px', '-110px']);
  const y2 = useTransform(smoothProgress, [0, 1], ['40px', '-40px']);
  const y3 = useTransform(smoothProgress, [0, 1], ['70px', '-70px']);
  const y4 = useTransform(smoothProgress, [0, 1], ['100px', '-100px']);
  const y5 = useTransform(smoothProgress, [0, 1], ['50px', '-50px']);
  const y6 = useTransform(smoothProgress, [0, 1], ['80px', '-80px']);
  const y7 = useTransform(smoothProgress, [0, 1], ['90px', '-90px']);
  const y8 = useTransform(smoothProgress, [0, 1], ['65px', '-65px']);
  const y9 = useTransform(smoothProgress, [0, 1], ['55px', '-55px']);
  const yTransforms = [y0, y1, y2, y3, y4, y5, y6, y7, y8, y9];

  const venueMapUrl = `https://www.google.com/maps/search/${encodeURIComponent(
    `${story.hotelName} ${story.location} ${story.country}`
  )}`;

  return (
    <div className="bg-[#f5f3ed] text-[#1a1918] font-sans">
      {/* HERO — full-screen horizontal cover photo */}
      <section className="relative h-[100dvh] w-full overflow-hidden bg-stone-200">
        <img
          src={story.coverImage}
          alt={story.hotelName}
          onLoad={() => setHeroLoaded(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1918]/35 via-transparent to-[#1a1918]/10" />

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={heroLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center px-6 text-center pointer-events-none"
        >
          <span
            className="font-serif text-white leading-[0.95] tracking-tight text-[13vw] sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.25)' }}
          >
            {toTitleCase(story.hotelName)}
          </span>
        </motion.h1>

        <button
          onClick={onBack}
          className="absolute top-24 sm:top-28 left-6 md:left-12 z-10 flex items-center gap-2 text-xs md:text-sm font-sans tracking-[0.15em] uppercase text-white/90 hover:text-white transition-colors"
        >
          <span aria-hidden="true">&larr;</span>
          <span>Volver</span>
        </button>
      </section>

      {/* TEXT BLOCK — description + Venue / Location / Credits, its own section between hero and gallery */}
      <section className="px-6 md:px-12 pt-28 md:pt-36 pb-24 md:pb-32 max-w-4xl mx-auto text-center">
        <p className="font-serif text-2xl sm:text-3xl md:text-[2.1rem] leading-[1.5] md:leading-[1.55] text-[#1a1918]">
          {story.description}
        </p>

        <div className="grid grid-cols-3 gap-3 md:gap-6 mt-16 md:mt-20">
          <div>
            <span className="block text-[11px] sm:text-xs md:text-sm text-[#5a5854] mb-2">Venue</span>
            <a
              href={venueMapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-xs sm:text-sm md:text-base font-sans text-[#1a1918] underline underline-offset-4 decoration-[#1a1918]/40 hover:decoration-[#1a1918] transition-colors"
            >
              {story.hotelName}
            </a>
          </div>
          <div>
            <span className="block text-[11px] sm:text-xs md:text-sm text-[#5a5854] mb-2">Location</span>
            <span className="text-xs sm:text-sm md:text-base font-sans text-[#1a1918]">
              {story.location}
            </span>
          </div>
          <div>
            <span className="block text-[11px] sm:text-xs md:text-sm text-[#5a5854] mb-2">Credits</span>
            <button
              onClick={() => setCreditsOpen((v) => !v)}
              aria-expanded={creditsOpen}
              aria-label={creditsOpen ? 'Cerrar créditos' : 'Ver créditos'}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#1a1918] text-[#f5f3ed] flex items-center justify-center mx-auto hover:opacity-80 transition-opacity"
            >
              <motion.span
                animate={{ rotate: creditsOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="text-lg leading-none"
              >
                +
              </motion.span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {creditsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-1.5 text-xs sm:text-sm text-[#5a5854] font-sans">
                <div>Fotografía &amp; Dirección Creativa &mdash; Mayurlin Viera</div>
                <div>Video &amp; Producción &mdash; Yerfran</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* GALLERY — max 10 photos, masonry mix with shared parallax movement */}
      <section
        ref={galleryRef}
        className="px-4 md:px-10 lg:px-16 pb-24 md:pb-32 max-w-[1600px] mx-auto flex flex-col gap-6 md:gap-10"
      >
        {(() => {
          const Layout = GALLERY_LAYOUTS[(story.layoutVariant ?? 0) % GALLERY_LAYOUTS.length];
          return <Layout photos={photos} y={yTransforms} video={story.galleryVideo} />;
        })()}
      </section>
    </div>
  );
};
