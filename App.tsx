import React, { useState } from 'react';
import { Page, HotelStory } from './types';
import { HOTEL_STORIES } from './data/hotels';
import { Navbar } from './components/Navbar';
import { HomeMain } from './components/HomeMain';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { AvailabilityModal } from './components/AvailabilityModal';
import { Footer } from './components/Footer';
import { HotelDetail } from './components/HotelDetail';
import { PhotoZoomTransition } from './components/PhotoZoomTransition';
import { IntroLoader } from './components/IntroLoader';
import { ContentProvider } from './src/lib/content';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState<boolean>(false);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      {/* Main View Router */}
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
                onNavigate={handleNavigate}
                onOpenAvailability={() => setIsAvailabilityOpen(true)}
                onSelectStory={handleSelectStory}
              />
            )}

            {currentPage === 'about' && (
              <About onOpenAvailability={() => setIsAvailabilityOpen(true)} />
            )}

            {currentPage === 'contact' && <Contact />}
          </>
        )}
      </main>

      {/* El pie cierra todas las páginas, Inicio incluido: hasta ahora Inicio
          terminaba en seco, sin Instagram, sin navegación y sin aviso legal. */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      {/* Quick Availability Modal */}
      <AvailabilityModal
        isOpen={isAvailabilityOpen}
        onClose={() => setIsAvailabilityOpen(false)}
      />

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
