'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-cream/80 backdrop-blur-lg py-4 border-b border-sage/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="text-3xl font-serif text-sage tracking-tighter">Morning Dew.</div>
        
        <div className="hidden md:flex items-center gap-12">
          {['Story', 'Menu', 'Gallery', 'Visit'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-bold uppercase tracking-widest text-sage/60 hover:text-earth transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button className="bg-sage text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-earth transition-all organic-shadow">
          Reserve
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
