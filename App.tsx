import React, { useLayoutEffect, useState } from 'react';
import { Page, HotelStory } from './types';
import { HOTEL_STORIES } from './data/hotels';
import { Navbar } from './components/Navbar';
import { HomeMain } from './components/HomeMain';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { InquiryModal } from './components/InquiryModal';
import { Footer } from './components/Footer';
import { HotelDetail } from './components/HotelDetail';
import { PhotoZoomTransition } from './components/PhotoZoomTransition';
import { IntroLoader } from './components/IntroLoader';
import { ContentProvider } from './src/lib/content';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);
  const [selectedStory, setSelectedStory] = useState<HotelStory | null>(null);
  const [pendingTransition, setPendingTransition] = useState<HotelStory | null>(null);
  // The intro plays once per full page load. Internal SPA navigation (e.g.
  // returning to Home from a hotel detail) does not re-trigger it -- a
  // refresh does, because React state resets with the page.
  const [introPlayed, setIntroPlayed] = useState<boolean>(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedStory(null);
    setPendingTransition(null);
  };

  // El reseteo va después del render, no en el manejador: hacerlo antes de que
  // React monte la página nueva dejaba el scroll a media altura.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentPage]);

  const handleSelectStory = (story: HotelStory) => {
    if (pendingTransition) return;
    setPendingTransition(story);
  };

  const handleTransitionComplete = () => {
    if (pendingTransition) {
      setSelectedStory(pendingTransition);
    }
    setPendingTransition(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCloseStory = () => {
    setSelectedStory(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigateStory = (direction: 'prev' | 'next') => {
    if (!selectedStory) return;
    const idx = HOTEL_STORIES.findIndex((s) => s.id === selectedStory.id);
    if (idx === -1) return;
    const total = HOTEL_STORIES.length;
    const newIdx = direction === 'next' ? (idx + 1) % total : (idx - 1 + total) % total;
    setSelectedStory(HOTEL_STORIES[newIdx]);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const currentIdx = selectedStory
    ? HOTEL_STORIES.findIndex((s) => s.id === selectedStory.id)
    : -1;
  const prevStory =
    currentIdx >= 0
      ? HOTEL_STORIES[(currentIdx - 1 + HOTEL_STORIES.length) % HOTEL_STORIES.length]
      : null;
  const nextStory =
    currentIdx >= 0 ? HOTEL_STORIES[(currentIdx + 1) % HOTEL_STORIES.length] : null;

  return (
    <ContentProvider>
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1918] font-sans antialiased selection:bg-[#1a1918] selection:text-[#f5f3ed]">
      {/* Top Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAvailability={() => setIsInquiryOpen(true)}
      />

      {/* Detras del cristal, la pagina se desenfoca y se apaga — sin eso, una
          foto a pantalla completa atraviesa el modal como una mancha. Envuelve
          <main> y el pie, nunca el Navbar: un `filter` distinto de `none` crea
          bloque contenedor y le quitaria el `position: fixed`.
          El desenfoque es generoso a proposito: el velo bajo a .78 para que se
          vea el cristal, y con menos desenfoque una foto a pantalla completa
          atraviesa el panel como una mancha reconocible en vez de como
          escarcha. */}
      <div
        className={`transition-[filter,transform,opacity] duration-[620ms] ease-[cubic-bezier(.22,1,.36,1)] ${
          isInquiryOpen ? 'scale-[.994] opacity-60 blur-[20px]' : ''
        }`}
      >
      <main>
        {selectedStory ? (
          <HotelDetail
            story={selectedStory}
            onBack={handleCloseStory}
            onNavigateStory={handleNavigateStory}
            prevStory={prevStory}
            nextStory={nextStory}
          />
        ) : (
          <>
            {currentPage === 'home' && (
              <HomeMain
                introDone={introPlayed}
                onNavigate={handleNavigate}
                onOpenAvailability={() => setIsInquiryOpen(true)}
                onSelectStory={handleSelectStory}
              />
            )}

            {currentPage === 'about' && (
              <About onOpenAvailability={() => setIsInquiryOpen(true)} />
            )}

            {currentPage === 'contact' && (
              <Contact onOpen={() => setIsInquiryOpen(true)} />
            )}
          </>
        )}
      </main>

      {/* El pie cierra todas las páginas, Inicio incluido: hasta ahora Inicio
          terminaba en seco, sin Instagram, sin navegación y sin aviso legal. */}
      <Footer onNavigate={handleNavigate} />
      </div>

      {/* Un solo formulario de solicitud en toda la web: lo abren el CTA de
          Contacto, el del bloque de valor, el del cierre de Inicio, el de
          Acerca de y "Consultar disponibilidad" del menu. */}
      <InquiryModal open={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />

      {/* Entry transition: clicked photo zooms full-screen into the story page */}
      {pendingTransition && (
        <PhotoZoomTransition imageUrl={pendingTransition.coverImage} onComplete={handleTransitionComplete} />
      )}

      {/* Intro loader plays once per page load. Going back from a hotel does
          not re-trigger it because App-level state persists across the
          inner navigation. */}
      {!introPlayed && <IntroLoader onDone={() => setIntroPlayed(true)} />}
    </div>
    </ContentProvider>
  );
}
