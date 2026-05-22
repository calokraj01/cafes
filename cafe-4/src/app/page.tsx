import React from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import ReservationTeaser from '@/components/ReservationTeaser';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="selection:bg-sage-light selection:text-sage">
        <Navbar />
        <Hero />
        
        {/* Subtle Section Transition */}
        <div className="bg-paper py-20 flex justify-center border-y border-sage/5">
          <div className="text-earth font-serif italic text-3xl opacity-50 tracking-[0.2em]">
            Breathe In. Sip Slow.
          </div>
        </div>

        <Featured />
        <Story />
        <Menu />
        
        <ReservationTeaser />

        <Footer />
      </main>
    </SmoothScroll>
  );
}
