import React, { useState } from 'react';
import { HOTEL_STORIES } from '../data/hotels';
import { HotelStory } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioProps {
  onOpenAvailability: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenAvailability }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');
  const [activeStory, setActiveStory] = useState<HotelStory | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const categories = ['todos', 'Lago di Como', 'Costa Amalfitana', 'Venecia', 'Puglia'];

  const filteredStories = HOTEL_STORIES.filter((story) => {
    if (selectedFilter === 'todos') return true;
    return story.location.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#1a1918] pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto font-sans">
      {/* Editorial Title */}
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#5a5854]">
          Colección Editorial
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-[#1a1918] tracking-wide">
          Portafolio de Bodas & Hoteles
        </h1>
        <p className="max-w-xl mx-auto text-sm text-[#5a5854] font-sans leading-relaxed">
          Historias de amor capturadas en los hoteles y villas más extraordinarios de Italia.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16 text-xs uppercase tracking-wider font-sans">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              selectedFilter === cat
                ? 'bg-[#1a1918] text-[#f5f3ed] border-[#1a1918]'
                : 'bg-transparent text-[#1a1918] border-[#1a1918]/20 hover:border-[#1a1918]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredStories.map((story, idx) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => {
              setActiveStory(story);
              setActivePhotoIndex(0);
            }}
            className="group cursor-pointer space-y-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e5dc] border border-[#1a1918]/10 shadow-sm">
              <img
                src={story.coverImage}
                alt={story.hotelName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute top-4 left-4 bg-[#f5f3ed]/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-sans tracking-widest text-[#1a1918]">
                {story.category}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-[#5a5854] font-sans tracking-widest uppercase">
                <span>{story.location}</span>
                <span>[{story.year}]</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1a1918] group-hover:italic transition-all">
                {story.hotelName}
              </h3>
              <p className="text-xs text-[#5a5854] font-sans tracking-wider uppercase">
                {story.coupleName}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gallery Lightbox Modal */}
      <AnimatePresence>
        {activeStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1a1918]/95 backdrop-blur-md text-[#f5f3ed] flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#f5f3ed]/20 pb-4">
              <div>
                <span className="text-xs font-sans tracking-widest uppercase text-[#f5f3ed]/60">
                  {activeStory.location} &bull; {activeStory.coupleName}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-[#f5f3ed]">
                  {activeStory.hotelName}
                </h2>
              </div>
              <button
                onClick={() => setActiveStory(null)}
                className="text-xs font-sans tracking-widest uppercase border border-[#f5f3ed]/30 px-4 py-2 hover:bg-[#f5f3ed] hover:text-[#1a1918] transition-colors"
              >
                [ CERRAR ]
              </button>
            </div>

            {/* Main Lightbox Photo Display */}
            <div className="my-8 max-w-4xl mx-auto flex flex-col items-center">
              <div className="relative max-h-[65vh] overflow-hidden rounded-sm border border-[#f5f3ed]/10 shadow-2xl">
                <img
                  src={activeStory.photos[activePhotoIndex]?.url}
                  alt={activeStory.photos[activePhotoIndex]?.alt}
                  className={`max-h-[65vh] w-auto object-contain ${
                    activeStory.photos[activePhotoIndex]?.isBlackAndWhite ? 'grayscale' : ''
                  }`}
                />
              </div>

              <div className="mt-4 text-center space-y-1">
                <p className="text-sm font-sans tracking-wide text-[#f5f3ed]/90">
                  {activeStory.photos[activePhotoIndex]?.caption}
                </p>
                <p className="text-xs font-serif italic text-[#f5f3ed]/60">
                  Foto {activePhotoIndex + 1} de {activeStory.photos.length}
                </p>
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="flex items-center justify-center space-x-3 pt-4 border-t border-[#f5f3ed]/20 overflow-x-auto no-scrollbar">
              {activeStory.photos.map((photo, i) => (
                <button
                  key={photo.id}
                  onClick={() => setActivePhotoIndex(i)}
                  className={`relative w-16 h-16 flex-shrink-0 overflow-hidden rounded border transition-all ${
                    activePhotoIndex === i
                      ? 'border-[#f5f3ed] scale-105'
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={photo.url} alt={photo.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Inquiry Trigger CTA inside Modal */}
            <div className="text-center pt-6">
              <button
                onClick={() => {
                  setActiveStory(null);
                  onOpenAvailability();
                }}
                className="bg-[#f5f3ed] text-[#1a1918] px-8 py-3 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#e8e5dc] transition-colors"
              >
                Consultar disponibilidad para {activeStory.hotelName}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
