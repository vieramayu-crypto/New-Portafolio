import React, { useState, useEffect } from 'react';
import { HOTEL_STORIES } from '../data/hotels';
import { HotelStory, Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { HeroSection } from './HeroSection';
import { HotelSectionBlock } from './HotelSectionBlock';
import heroPortraitBW from '../src/assets/images/hero_portrait_bw_1786010923167.jpg';

interface HomeMainProps {
  onNavigate: (page: Page) => void;
  onOpenAvailability: () => void;
  onSelectStory?: (story: HotelStory) => void;
}

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
}) => {
  const [viewMode, setViewMode] = useState<'editorial' | 'hotel-scroll'>('hotel-scroll');
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const [isHotelSelectorOpen, setIsHotelSelectorOpen] = useState<boolean>(false);
  const [showFixedLabels, setShowFixedLabels] = useState<boolean>(false);

  const currentStory = HOTEL_STORIES[activeStoryIndex] || HOTEL_STORIES[0];

  // Observe which hotel section is currently in the middle of the viewport
  useEffect(() => {
    if (viewMode !== 'hotel-scroll') {
      setShowFixedLabels(false);
      return;
    }

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

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      if (hotelSectionEl) {
        containerObserver.unobserve(hotelSectionEl);
      }
      containerObserver.disconnect();
    };
  }, [viewMode]);

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
      <HeroSection onNavigate={onNavigate} onOpenAvailability={onOpenAvailability} />

      {/* Target for smooth scroll from Hero */}
      <div id="hotel-section" className="relative pt-6">
        {/* Top Center View Mode Switcher */}
        <div className="sticky top-6 left-1/2 -translate-x-1/2 z-40 w-fit mx-auto flex items-center bg-[#fbfaf6]/90 backdrop-blur-md border border-[#1a1918]/15 rounded-full p-1 shadow-sm text-xs tracking-wider uppercase font-sans">
          <button
            onClick={() => setViewMode('editorial')}
            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
              viewMode === 'editorial'
                ? 'bg-[#1a1918] text-[#fbfaf6] font-medium shadow-sm'
                : 'text-[#1a1918]/70 hover:text-[#1a1918]'
            }`}
          >
            Índice
          </button>
          <button
            onClick={() => setViewMode('hotel-scroll')}
            className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
              viewMode === 'hotel-scroll'
                ? 'bg-[#1a1918] text-[#fbfaf6] font-medium shadow-sm'
                : 'text-[#1a1918]/70 hover:text-[#1a1918]'
            }`}
          >
            Hoteles & Scroll ({HOTEL_STORIES.length})
          </button>
        </div>

        {/* VIEW 1: Editorial Navigation Index */}
        {viewMode === 'editorial' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col justify-between px-6 py-12 md:px-12 md:py-16 max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pt-8">
              {/* Left Photo */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden shadow-sm border border-[#1a1918]/10 group"
                >
                  <img
                    src={heroPortraitBW}
                    alt="Retrato Editorial Mayu Travel"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[50%_25%] filter grayscale contrast-[1.12] brightness-[0.98] group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                </motion.div>
              </div>

              {/* Center Navigation Links */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-8 py-8">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  onClick={() => onNavigate('portfolio')}
                  className="font-serif text-3xl md:text-5xl text-[#1a1918] underline underline-offset-[10px] decoration-1 hover:opacity-70 transition-opacity"
                >
                  Portafolio
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  onClick={() => onNavigate('about')}
                  className="font-serif text-3xl md:text-4xl text-[#1a1918] hover:italic hover:opacity-70 transition-all"
                >
                  acerca de
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  onClick={() => onNavigate('contact')}
                  className="font-serif text-3xl md:text-4xl text-[#1a1918] hover:italic hover:opacity-70 transition-all"
                >
                  Contacto
                </motion.button>
              </div>

              {/* Right Photo */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden shadow-sm border border-[#1a1918]/10 group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85"
                    alt="Pareja de novios caminando por escalinata blanca"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                </motion.div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between pt-12 border-t border-[#1a1918]/10 text-xs font-sans tracking-[0.2em] text-[#1a1918] gap-4">
              <div className="flex items-center space-x-6 uppercase font-medium">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  PINTEREST
                </a>
              </div>

              <button
                onClick={onOpenAvailability}
                className="flex items-center space-x-3 text-[#1a1918] hover:opacity-70 transition-opacity uppercase font-medium group"
              >
                <span>Comprobar disponibilidad</span>
                <span className="w-7 h-7 rounded-full bg-[#1a1918] text-[#fbfaf6] flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                  &rarr;
                </span>
              </button>
            </div>
          </motion.div>
        )}

        {/* VIEW 2: Continuous Hotel Scroll Feed */}
        {viewMode === 'hotel-scroll' && (
          <div className="relative w-full pb-32">
            {/* Viewport-fixed Side Labels (Locked in place at screen vertical center while scrolling) */}
            <AnimatePresence>
              {showFixedLabels && (
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
            {HOTEL_STORIES.map((story, index) => (
              <HotelSectionBlock
                key={story.id}
                story={story}
                index={index}
              />
            ))}

            {/* Bottom Floating Pill Button: "Bodas destacadas ²⁶ ▲" */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
              <button
                onClick={() => setIsHotelSelectorOpen(!isHotelSelectorOpen)}
                className="bg-white/95 backdrop-blur-md border border-[#1a1918]/15 px-5 py-2.5 rounded-full shadow-xl flex items-center space-x-3 text-xs md:text-sm font-sans tracking-wider text-[#1a1918] hover:bg-[#1a1918] hover:text-[#fbfaf6] transition-all duration-300"
              >
                <span className="font-medium">
                  Bodas destacadas <sup className="text-[10px] text-[#5a5854]">26</sup>
                </span>
                <span className="w-5 h-5 rounded-full bg-[#1a1918] text-white flex items-center justify-center text-[10px] transition-transform">
                  {isHotelSelectorOpen ? '▼' : '▲'}
                </span>
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
                      Ir a Hotel / Boda Destacada ({HOTEL_STORIES.length})
                    </div>
                    {HOTEL_STORIES.map((hotel, idx) => (
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
