import React from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Hero from '@/components/Hero';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-[100] p-8 flex justify-between items-center text-xs font-bold uppercase tracking-[0.2em] text-sand drop-shadow-md">
    <div className="text-xl tracking-tighter">CANOPY.</div>
    <div className="hidden md:flex gap-12 text-sand/70">
      <a href="#" className="hover:text-sand transition-colors">Info</a>
      <a href="#" className="hover:text-sand transition-colors">Tours</a>
      <a href="#" className="hover:text-sand transition-colors">Gallery</a>
      <a href="#" className="hover:text-sand transition-colors">Contacts</a>
    </div>
    <div className="flex gap-4">
      {/* Social Icons Placeholder */}
      <span className="w-4 h-4 bg-sand/20 rounded-full" />
      <span className="w-4 h-4 bg-sand/20 rounded-full" />
    </div>
  </nav>
);

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-void text-mist min-h-screen">
        <Navbar />
        <Hero />
        
        {/* Placeholder for future sections */}
        <section className="h-screen bg-void flex items-center justify-center text-center px-8 relative z-50">
          <h2 className="text-4xl md:text-6xl text-jungle-fresh font-serif italic max-w-3xl leading-relaxed">
            "The deeper you go, the more the forest reveals its secrets. A brew born from the canopy."
          </h2>
        </section>
      </main>
    </SmoothScroll>
  );
}
