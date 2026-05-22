'use client';

import React, { useState } from 'react';
import ReservationModal from './ReservationModal';

const ReservationTeaser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-32 bg-sage-light text-center relative z-0">
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl mb-8 font-serif">Save Your Seat</h2>
          <p className="text-xl text-sage/70 max-w-xl mx-auto mb-12 italic leading-relaxed">
            We keep a few tables open for spontaneous visits, but a reservation ensures your favorite sun-drenched spot is waiting.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-earth text-white border-2 border-[#1A1A1A] px-12 py-5 rounded-[40px] text-lg font-medium hover:bg-sage transition-all hover:scale-105 shadow-lg cursor-pointer"
          >
            Book a Table
          </button>
        </div>
      </section>

      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ReservationTeaser;
