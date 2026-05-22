import React from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import Experience from '@/components/Experience';
import Merch from '@/components/Merch';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="noise-bg selection:bg-neon-pink selection:text-black">
        <Navbar />
        <Cursor />
        <Hero />
        
        {/* Separator Marquee */}
        <div className="bg-neon-blue py-6 overflow-hidden border-y-4 border-black">
          <div className="marquee">
            <div className="marquee-content text-black font-black text-4xl uppercase italic whitespace-nowrap">
              {[...Array(10)].map((_, i) => (
                <span key={i}>NEON SIP / STREET FUEL / NO SLEEP CLUB / PURE ENERGY /&nbsp;</span>
              ))}
            </div>
          </div>
        </div>

        <Featured />
        <Experience />
        <Merch />
        <Events />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

