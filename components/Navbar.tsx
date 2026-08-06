import React, { useState } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenAvailability: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenAvailability }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Right: Minimal Two-Line Menu Icon */}
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
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#f5f3ed] flex flex-col justify-between px-6 py-8 md:px-16 md:py-12 overflow-y-auto"
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

            {/* Main Page Links */}
            <div className="my-auto py-12 flex flex-col items-center justify-center text-center space-y-8 md:space-y-10">
              <button
                onClick={() => handleLinkClick('home')}
                className={`font-serif text-3xl md:text-5xl tracking-wide transition-all duration-300 ${
                  currentPage === 'home' ? 'underline underline-offset-8 decoration-1' : 'hover:italic hover:opacity-70'
                }`}
              >
                Inicio
              </button>

              <button
                onClick={() => handleLinkClick('portfolio')}
                className={`font-serif text-3xl md:text-5xl tracking-wide transition-all duration-300 ${
                  currentPage === 'portfolio' ? 'underline underline-offset-8 decoration-1' : 'hover:italic hover:opacity-70'
                }`}
              >
                Colaboraciones
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

            {/* Bottom Menu Info */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#1a1918]/10 text-xs font-sans tracking-[0.15em] text-[#5a5854] gap-4">
              <a
                href="https://instagram.com/mayurlintravel"
                target="_blank"
                rel="noreferrer"
                className="uppercase hover:text-[#1a1918] transition-colors"
              >
                Instagram &bull; @mayurlintravel
              </a>

              <div className="text-center">
                <span>ESPAÑA &bull; ARGENTINA &bull; ESTADOS UNIDOS &bull; MÉXICO</span>
              </div>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenAvailability();
                }}
                className="flex items-center space-x-2 text-[#1a1918] hover:opacity-70 transition-opacity uppercase font-medium"
              >
                <span>Iniciar una colaboración</span>
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
