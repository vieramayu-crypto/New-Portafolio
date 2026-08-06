import React, { useState } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { HomeMain } from './components/HomeMain';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { AvailabilityModal } from './components/AvailabilityModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState<boolean>(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1918] font-sans antialiased selection:bg-[#1a1918] selection:text-[#f5f3ed]">
      {/* Top Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAvailability={() => setIsAvailabilityOpen(true)}
      />

      {/* Main View Router */}
      <main>
        {currentPage === 'home' && (
          <HomeMain
            onNavigate={handleNavigate}
            onOpenAvailability={() => setIsAvailabilityOpen(true)}
          />
        )}

        {currentPage === 'portfolio' && (
          <Portfolio onOpenAvailability={() => setIsAvailabilityOpen(true)} />
        )}

        {currentPage === 'about' && (
          <About onOpenAvailability={() => setIsAvailabilityOpen(true)} />
        )}

        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Render Footer on pages other than full home scroll, or at bottom */}
      {currentPage !== 'home' && (
        <Footer
          onNavigate={handleNavigate}
          onOpenAvailability={() => setIsAvailabilityOpen(true)}
        />
      )}

      {/* Quick Availability Modal */}
      <AvailabilityModal
        isOpen={isAvailabilityOpen}
        onClose={() => setIsAvailabilityOpen(false)}
      />
    </div>
  );
}
