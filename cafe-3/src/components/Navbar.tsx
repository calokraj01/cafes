'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'FUEL', href: '#featured', index: '01' },
    { name: 'VIBE', href: '#experience', index: '02' },
    { name: 'DRIP', href: '#merch', index: '03' },
    { name: 'NIGHTS', href: '#events', index: '04' },
    { name: 'SIGNAL', href: '#contact-section', index: '05' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[9995] transition-all duration-300 ${
          scrolled 
            ? 'bg-black/85 backdrop-blur-xl border-b-2 border-neon-blue/40 py-3 shadow-[0_4px_30px_rgba(0,245,255,0.15)]' 
            : 'bg-black/40 backdrop-blur-md border-b border-white/10 py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, '#')}
            className="flex items-center gap-2 group font-syne font-black text-xl md:text-2xl tracking-tighter text-white"
          >
            <span>NEON</span>
            <span className="text-neon-pink group-hover:text-neon-blue transition-colors">SIP.</span>
            <span className="w-2.5 h-2.5 bg-neon-green rounded-full shadow-[0_0_8px_#B4FF00] animate-pulse" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative font-mono text-sm font-bold text-white/70 hover:text-white transition-colors py-2 px-3 group"
              >
                <span className="opacity-0 group-hover:opacity-100 text-neon-blue mr-1 transition-all duration-200">
                  [
                </span>
                <span className="group-hover:text-neon-blue transition-all duration-200">
                  {link.name}
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-neon-blue ml-1 transition-all duration-200">
                  ]
                </span>
              </a>
            ))}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact-section"
              onClick={(e) => handleLinkClick(e, '#contact-section')}
              className="hidden sm:inline-block bg-neon-pink text-black px-5 py-2 font-mono text-xs font-black uppercase border-2 border-white tracking-wider cursor-pointer shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-neon-blue hover:text-black transition-all"
            >
              [ LOCK SPOT ]
            </a>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden border-2 border-white/20 p-2 text-white bg-white/5 hover:bg-white/10 hover:border-white transition-all cursor-pointer font-mono text-xs flex items-center gap-1.5"
            >
              {isOpen ? (
                <>
                  <X className="w-4 h-4 text-neon-pink" />
                  <span className="font-bold text-neon-pink">CLOSE</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-neon-blue" />
                  <span className="font-bold text-neon-blue">MENU</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full bg-black/95 border-b-4 border-neon-blue backdrop-blur-3xl overflow-hidden md:hidden z-[9996]"
            >
              <div className="px-8 py-10 flex flex-col gap-6 font-mono">
                <div className="text-[10px] text-white/40 uppercase tracking-widest border-b border-white/10 pb-2 mb-2 flex items-center justify-between">
                  <span>[ SYSTEM INDEX NAVIGATION ]</span>
                  <Terminal className="w-3.5 h-3.5 text-neon-blue animate-pulse" />
                </div>
                
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center gap-4 text-2xl font-black text-white hover:text-neon-pink transition-colors py-2 border-b border-white/5 group"
                  >
                    <span className="text-xs text-neon-blue font-bold font-mono">{link.index} //</span>
                    <span className="group-hover:neon-glow-pink">{link.name}</span>
                  </a>
                ))}

                <div className="pt-6">
                  <a
                    href="#contact-section"
                    onClick={(e) => handleLinkClick(e, '#contact-section')}
                    className="w-full text-center block bg-neon-pink text-black py-4 font-mono font-black uppercase border-2 border-white tracking-widest shadow-[4px_4px_0px_#00F5FF]"
                  >
                    [ ENCRYPT TABLE SLOT ]
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
