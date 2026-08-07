import React, { useState } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import heroPortraitBW from '../src/assets/images/hero_portrait_bw_1786010923167.jpg';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenAvailability: () => void;
}

const PAGE_LABELS: Partial<Record<Page, string>> = {
  portfolio: 'Trabajo',
  about: 'Sobre nosotros',
  contact: 'Contacto',
};

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenAvailability }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pageLabel = PAGE_LABELS[currentPage];

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Header Chrome */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-12 md:py-8 pointer-events-none">
        {/* Left: Framed Logo Box */}
        <button
          onClick={() => handleLinkClick('home')}
          className="pointer-events-auto border border-[#1a1918] bg-[#f5f3ed]/90 backdrop-blur-sm px-4 py-1.5 text-sm md:text-base font-serif tracking-[0.25em] font-medium text-[#1a1918] hover:bg-[#1a1918] hover:text-[#f5f3ed] transition-all duration-300 shadow-sm"
        >
          MAYU
        </button>

        {/* Right: Page indicator + Minimal Two-Line Menu Icon */}
        <div className="flex items-center gap-4 md:gap-6">
          {pageLabel && !isMenuOpen && (
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.25em] uppercase text-[#5a5854] pointer-events-none">
              {pageLabel}
            </span>
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            className="pointer-events-auto flex flex-col justify-center items-end gap-1.5 p-3 -m-1 focus:outline-none group cursor-pointer"
          >
            <span
              className={`h-[1.5px] bg-[#1a1918] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isMenuOpen ? 'w-7 rotate-45 translate-y-[4px]' : 'w-8 group-hover:w-6'
              }`}
            />
            <span
              className={`h-[1.5px] bg-[#1a1918] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isMenuOpen ? 'w-7 -rotate-45 -translate-y-[3.5px]' : 'w-5 group-hover:w-8'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-[#f5f3ed] flex flex-col justify-between px-6 py-8 md:px-16 md:py-12 overflow-y-auto"
          >
            {/* Top Row inside menu */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleLinkClick('home')}
                className="border border-[#1a1918] px-4 py-1.5 text-sm md:text-base font-serif tracking-[0.25em] font-medium text-[#1a1918]"
              >
                MAYU
              </button>

              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
                className="text-xs font-sans tracking-[0.2em] uppercase text-[#1a1918] hover:opacity-60 transition-opacity p-2"
              >
                [ CERRAR ]
              </button>
            </div>

            {/* Main Page Links + Photo */}
            <div className="my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto w-full">
              <div className="lg:col-span-4 hidden lg:block" />

              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-8 md:space-y-10">
                <button
                  onClick={() => handleLinkClick('portfolio')}
                  className={`font-serif text-3xl md:text-5xl tracking-wide transition-all duration-300 ${
                    currentPage === 'portfolio' ? 'underline underline-offset-8 decoration-1' : 'hover:italic hover:opacity-70'
                  }`}
                >
                  Trabajo
                </button>

                <button
                  onClick={() => handleLinkClick('about')}
                  className={`font-serif text-3xl md:text-5xl tracking-wide transition-all duration-300 ${
                    currentPage === 'about' ? 'underline underline-offset-8 decoration-1' : 'hover:italic hover:opacity-70'
                  }`}
                >
                  Sobre mí
                </button>

                <button
                  onClick={() => handleLinkClick('contact')}
                  className={`font-serif text-3xl md:text-5xl tracking-wide transition-all duration-300 ${
                    currentPage === 'contact' ? 'underline underline-offset-8 decoration-1' : 'hover:italic hover:opacity-70'
                  }`}
                >
                  Contacto
                </button>
              </div>

              {/* Single portrait, animated on hover */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[300px] aspect-[4/5] overflow-hidden shadow-sm border border-[#1a1918]/10 group cursor-pointer">
                  <img
                    src={heroPortraitBW}
                    alt="Mayurlin Viera"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-[50%_20%] grayscale contrast-[1.12] brightness-[0.98] scale-105 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700" />
                </div>
              </div>
            </div>

            {/* Bottom Menu Info */}
            <div className="flex items-center justify-between pt-8 border-t border-[#1a1918]/10 text-xs font-sans tracking-[0.15em] text-[#5a5854] gap-4">
              <a
                href="https://instagram.com/mayurlintravel"
                target="_blank"
                rel="noreferrer"
                className="uppercase hover:text-[#1a1918] transition-colors"
              >
                Instagram
              </a>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenAvailability();
                }}
                className="flex items-center space-x-2 text-[#1a1918] hover:opacity-70 transition-opacity uppercase font-medium"
              >
                <span>Iniciar un proyecto</span>
                <span className="w-5 h-5 rounded-full bg-[#1a1918] text-[#f5f3ed] flex items-center justify-center text-[10px]">
                  &rarr;
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
