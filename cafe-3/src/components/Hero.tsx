'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroScene from './HeroScene';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-midnight">
      <HeroScene />
      
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="bg-neon-pink text-black px-4 py-1 text-sm font-black uppercase tracking-[0.3em] inline-block mb-6 skew-x-[-12deg]">
            Est. 2026 / Future Brew
          </span>
        </motion.div>

        <h1 className="text-[15vw] leading-[0.8] tracking-tighter mb-12 relative">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-white italic"
          >
            COFFEE
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-neon-blue neon-glow-blue"
          >
            HITS
          </motion.span>
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-neon-pink neon-glow-pink -mt-4"
          >
            DIFFERENT
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button className="group relative bg-neon-green text-black px-12 py-6 text-xl font-black uppercase transition-all hover:scale-110 hover:-rotate-3 active:scale-95 shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#00F5FF]">
            GET SIPPIN'
          </button>
          <button className="border-4 border-neon-blue text-neon-blue px-12 py-6 text-xl font-black uppercase transition-all hover:bg-neon-blue hover:text-black hover:rotate-3 active:scale-95 shadow-[8px_8px_0px_#FF0080]">
            THE MENU
          </button>
        </motion.div>
      </div>

      {/* Floating 3D Cup Image Overlay */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute right-[10%] bottom-[10%] w-[400px] h-[400px] pointer-events-none hidden lg:block"
      >
        <Image 
          src="/hero-cup.png" 
          alt="Neon Cup" 
          fill 
          loading="eager"
          priority
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-contain drop-shadow-[0_0_50px_rgba(255,0,128,0.5)]"
        />
      </motion.div>

      {/* Background Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-neon-purple py-4 overflow-hidden rotate-[-2deg] origin-bottom-left border-y-4 border-black">
        <div className="marquee">
          <div className="marquee-content text-black font-black text-2xl uppercase italic whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span key={i}>NEON SIP / STREET FUEL / NO SLEEP CLUB / PURE ENERGY /&nbsp;</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
