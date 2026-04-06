import { useState, useEffect } from 'react';

import introCybersec from './assets/IntroCybersec.png';
import academicexe from './assets/Academicexellence.jpg';
import claudecodeaction from './assets/claudecodeaction.png';
import introdatascience from './assets/introdatascience.png';

const certificates = [
  {
    id: 1,
    title: "Introduction to Cyber Security",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: introCybersec,
  },
  {
    id: 2,
    title: "Academic Excellence",
    issuer: "University of Caloocan City",
    date: "2025",
    image: academicexe,
  },
  {
    id: 3,
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2026",
    image: claudecodeaction,
  },
   {   id: 4,
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "2026",
    image: introdatascience,
  }
];

function Certificate() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCert, setModalCert] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, certificates.length - visibleItems);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const openModal = (cert) => {
    setModalCert(cert);
    // Tiny delay to ensure the DOM is ready for the transition
    setTimeout(() => setIsModalOpen(true), 10);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Wait for animation to finish before removing from DOM
    setTimeout(() => setModalCert(null), 300);
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (modalCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalCert]);

  return (
    <section className="mt-10">
      <div>
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100 uppercase tracking-widest border-b border-gray-100 dark:border-gray-800 pb-2">
          Certificates & Achievements
        </h2>
        
        <div className="relative group p-1">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-4" 
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {certificates.map((cert) => (
                <div 
                  key={cert.id} 
                  onClick={() => openModal(cert)}
                  className="w-full shrink-0 flex flex-col bg-white dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 rounded-sm overflow-hidden hover:border-black dark:hover:border-white transition-all duration-500 shadow-sm hover:shadow-xl cursor-pointer"
                  style={{ width: `calc(${100 / visibleItems}% - ${(visibleItems - 1) * 16 / visibleItems}px)` }}
                >
                  <div className="w-full aspect-video overflow-hidden border-b border-gray-100 dark:border-gray-800">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover brightness-95 grayscale-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
                    />
                  </div>
                  <div className="p-5 flex flex-col space-y-2 grow">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400">
                      {cert.issuer}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed opacity-80 grow">
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {maxIndex > 0 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-full shadow-lg text-black dark:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-full shadow-lg text-black dark:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </>
          )}

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-black dark:bg-white w-4' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal - Outside transformed div */}
      {modalCert && (
        <div 
          className={`fixed inset-0 z-100 flex items-center justify-center p-4 md:p-12 transition-all duration-500 ease-in-out ${
            isModalOpen ? 'bg-black/25' : 'bg-black/0 backdrop-blur-none opacity-0'
          }`}
          onClick={closeModal}
        >
          <div 
            className={`relative flex items-center justify-center transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
              isModalOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 md:-top-12 md:-right-12 p-3 text-white/50 hover:text-white transition-colors z-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <img 
              src={modalCert.image} 
              alt={modalCert.title} 
              className="max-w-[90vw] max-h-[85vh] object-contain  rounded-sm select-none ring-1 ring-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificate;