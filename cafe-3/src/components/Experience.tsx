'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-neon-purple text-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <h2 className="text-[30vw] font-black uppercase leading-none select-none">VIBE</h2>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div
            initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
            whileInView={{ rotate: -5, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2 aspect-square bg-black p-4 rotate-[-5deg] shadow-[20px_20px_0px_#B4FF00]"
          >
            <Image 
              src="/interior.png" 
              alt="Neon Sip Vibe" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-7xl lg:text-9xl font-black mb-12 italic tracking-tighter"
            >
              NOT YOUR <br />
              <span className="text-white bg-black px-4">GRANDMA'S</span> <br />
              CAFE.
            </motion.h2>
            
            <p className="text-2xl font-bold mb-12 max-w-xl">
              We ditched the acoustic guitars and the beige walls. NEON SIP is an underground fusion of sound, light, and high-voltage caffeine. 
            </p>

            <div className="flex flex-wrap gap-4">
              {["No Chill", "Pure Energy", "Acid Bass", "Hyper Focused"].map((tag, i) => (
                <span key={i} className="bg-black text-neon-green px-6 py-2 rounded-full text-xl font-black uppercase border-2 border-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
