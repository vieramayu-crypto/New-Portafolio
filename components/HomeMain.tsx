import React, { useState, useEffect, useMemo } from 'react';
import { HOTEL_STORIES } from '../data/hotels';
import { HotelStory, Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { HeroSection } from './HeroSection';
import { HotelSectionBlock } from './HotelSectionBlock';
import { ValueBlock } from './ValueBlock';
import { ClosingCta } from './ClosingCta';
import { useSiteContent } from '../src/lib/content';

interface HomeMainProps {
  onNavigate: (page: Page) => void;
  onOpenAvailability: () => void;
  onSelectStory?: (story: HotelStory) => void;
}

/** El bloque de valor entra despues del tercer hotel: primero el prestigio del
 *  trabajo, despues el argumento. */
const VALUE_BLOCK_AFTER_INDEX = 2;

function renderTwoLineHotelName(name: string) {
  const parts = name.trim().split(' ');
  if (parts.length <= 1) {
    return <span>{name}</span>;
  }
  
  const mid = Math.ceil(parts.length / 2);
  const line1 = parts.slice(0, mid).join(' ');
  const line2 = parts.slice(mid).join(' ');

  return (
    <span className="inline-block leading-snug">
      <span className="block">{line1}</span>
      <span className="block">{line2}</span>
    </span>
  );
}

export const HomeMain: React.FC<HomeMainProps> = ({
  onNavigate,
  onOpenAvailability,
  onSelectStory,
}) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const [isHotelSelectorOpen, setIsHotelSelectorOpen] = useState<boolean>(false);
  const [showFixedLabels, setShowFixedLabels] = useState<boolean>(false);
  const [isValueBlockVisible, setIsValueBlockVisible] = useState<boolean>(false);

  const { hotels: hotelContent } = useSiteContent();

  // Structural data (photos, layout, ids, routing) stays in code; the
  // editable text fields are overlaid from content.json at runtime.
  const hotelStories = useMemo(
    () =>
      HOTEL_STORIES.map((story, i) => ({
        ...story,
        hotelName: hotelContent[i]?.hotelName ?? story.hotelName,
        coupleName: hotelContent[i]?.coupleName ?? story.coupleName,
        description: hotelContent[i]?.description ?? story.description,
        quote: hotelContent[i]?.quote ?? story.quote,
      })),
    [hotelContent]
  );

  const currentStory = hotelStories[activeStoryIndex] || hotelStories[0];

  // Observe which hotel section is currently in the middle of the viewport
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const hotelId = entry.target.getAttribute('data-hotel-id');
          const foundIndex = HOTEL_STORIES.findIndex((h) => h.id === hotelId);
          if (foundIndex !== -1) {
            setActiveStoryIndex(foundIndex);
          }
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-25% 0px -25% 0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionElements = document.querySelectorAll('.hotel-section-block');
    sectionElements.forEach((el) => observer.observe(el));

    // Also observe the entire hotel section container to toggle label visibility
    const hotelSectionEl = document.getElementById('hotel-section');
    const containerObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setShowFixedLabels(entries[0].isIntersecting);
        }
      },
      { threshold: 0.02 }
    );
    if (hotelSectionEl) {
      containerObserver.observe(hotelSectionEl);
    }

    // El bloque de valor ocupa la pantalla entera con su propio texto grande:
    // mientras esta a la vista se apartan los rotulos laterales y el boton
    // flotante, que si no se le montarian encima.
    const valueBlockEl = document.getElementById('value-block');
    const valueBlockObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setIsValueBlockVisible(entries[0].isIntersecting);
        }
      },
      { threshold: 0.12 }
    );
    if (valueBlockEl) {
      valueBlockObserver.observe(valueBlockEl);
    }

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      if (hotelSectionEl) {
        containerObserver.unobserve(hotelSectionEl);
      }
      containerObserver.disconnect();
      if (valueBlockEl) {
        valueBlockObserver.unobserve(valueBlockEl);
      }
      valueBlockObserver.disconnect();
    };
  }, []);

  const chromeVisible = showFixedLabels && !isValueBlockVisible;

  const scrollToHotel = (hotelId: string) => {
    setIsHotelSelectorOpen(false);
    const element = document.getElementById(`hotel-${hotelId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fbfaf6] text-[#1a1918] select-none font-sans overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Target for smooth scroll from Hero */}
      <div id="hotel-section" className="relative pt-6">
        <div className="relative w-full pb-32">
          {/* Viewport-fixed Side Labels (Locked in place at screen vertical center while scrolling) */}
          <AnimatePresence>
            {chromeVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-1/2 -translate-y-1/2 left-0 right-0 z-30 pointer-events-none px-2 md:px-3 lg:px-4 hidden md:flex items-center justify-between w-full"
              >
                {/* Left Tag */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStory.id + '-left'}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="font-serif text-base lg:text-xl tracking-[0.25em] text-[#1a1918] uppercase font-light"
                  >
                    [{currentStory.leftTag || 'HOTEL'}]
                  </motion.div>
                </AnimatePresence>

                {/* Right Hotel Name */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStory.id + '-right'}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="font-serif text-base lg:text-xl tracking-[0.18em] text-[#1a1918] uppercase font-light text-right max-w-[200px] lg:max-w-[250px]"
                  >
                    {renderTwoLineHotelName(currentStory.hotelName)}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Seamless Stack of all 8 Hotel Sections (NO DIVIDING LINES) */}
          {hotelStories.map((story, index) => (
            <React.Fragment key={story.id}>
              <HotelSectionBlock story={story} index={index} onSelectStory={onSelectStory} />
              {index === VALUE_BLOCK_AFTER_INDEX && (
                <ValueBlock
                  onOpenAvailability={onOpenAvailability}
                  nextSectionId={hotelStories[index + 1]?.id}
                />
              )}
            </React.Fragment>
          ))}

          {/* Bottom Floating Button: only appears once the first photo section is reached */}
          <AnimatePresence>
            {chromeVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-8 inset-x-0 z-50 flex flex-col items-center px-4"
              >
                <button
                  onClick={() => setIsHotelSelectorOpen(!isHotelSelectorOpen)}
                  className="pointer-events-auto border border-[#1a1918] bg-[#f5f3ed]/90 backdrop-blur-sm px-4 py-1.5 flex items-center gap-3 text-sm md:text-base font-serif tracking-[0.25em] font-medium text-[#1a1918] hover:bg-[#1a1918] hover:text-[#f5f3ed] transition-all duration-300 shadow-sm"
                >
                  <span>Ver trabajo ({hotelStories.length})</span>
                  <span className="text-xs">{isHotelSelectorOpen ? '▼' : '▲'}</span>
                </button>

                {/* Selector Popup Menu to Jump to Any Hotel Section */}
                <AnimatePresence>
                  {isHotelSelectorOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute bottom-16 bg-white border border-[#1a1918]/15 rounded-2xl p-3 shadow-2xl w-80 md:w-96 text-left max-h-80 overflow-y-auto z-50 space-y-1"
                    >
                      <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#5a5854] px-3 py-1.5 border-b border-[#1a1918]/10 mb-1">
                        Ir a Hotel / Cliente ({hotelStories.length})
                      </div>
                      {hotelStories.map((hotel, idx) => (
                        <button
                          key={hotel.id}
                          onClick={() => scrollToHotel(hotel.id)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between text-xs font-sans transition-colors ${
                            activeStoryIndex === idx
                              ? 'bg-[#1a1918] text-[#fbfaf6] font-medium'
                              : 'text-[#1a1918] hover:bg-[#fbfaf6]'
                          }`}
                        >
                          <div>
                            <div className="font-serif text-sm tracking-wide font-medium">{hotel.hotelName}</div>
                            <div className="text-[10px] text-[#5a5854]">{hotel.location} &bull; {hotel.coupleName}</div>
                          </div>
                          <span className="text-[10px] tracking-wider uppercase font-mono text-[#5a5854]">
                            [{hotel.year}]
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ClosingCta onOpenAvailability={onOpenAvailability} onNavigate={onNavigate} />
    </div>
  );
};
