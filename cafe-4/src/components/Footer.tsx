'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-cream pt-32 pb-12 border-t border-sage/10 relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-24 mb-32">
          <div className="lg:w-1/2">
            <h2 className="text-6xl font-serif mb-8 text-sage">Morning Dew.</h2>
            <p className="text-xl text-sage/60 max-w-sm mb-12 italic leading-relaxed">
              Find us where the sunlight hits the table. Our doors are open for your slowest mornings.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'Pinterest', 'Spotify'].map((social) => (
                <a key={social} href="#" className="text-earth font-bold uppercase text-xs tracking-[0.2em] hover:text-sage transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="text-sage font-bold uppercase text-xs tracking-widest mb-8">Visit</h4>
              <p className="text-sage/60 leading-relaxed">
                123 Organic Way<br />
                Eco Valley, CA 90210
              </p>
            </div>
            <div>
              <h4 className="text-sage font-bold uppercase text-xs tracking-widest mb-8">Hours</h4>
              <p className="text-sage/60 leading-relaxed">
                Mon - Fri: 7am - 4pm<br />
                Sat - Sun: 8am - 6pm
              </p>
            </div>
            <div>
              <h4 className="text-sage font-bold uppercase text-xs tracking-widest mb-8">Links</h4>
              <ul className="flex flex-col gap-4 text-sage/60">
                <li className="hover:text-sage transition-colors cursor-pointer">Menu</li>
                <li className="hover:text-sage transition-colors cursor-pointer">Story</li>
                <li className="hover:text-sage transition-colors cursor-pointer">Events</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-sage/10 text-xs font-bold uppercase tracking-[0.2em] text-sage/30">
          <div>© 2026 MORNING DEW CAFÉ / CRAFTED WITH CARE</div>
          <div className="mt-4 md:mt-0">SLOW LIVING IS GOOD LIVING</div>
        </div>
      </div>
      
      {/* Decorative Wave Divider at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 fill-paper">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.55,142.15,108.82,211.75,93,255.33,83.05,283.47,63.47,321.39,56.44Z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
