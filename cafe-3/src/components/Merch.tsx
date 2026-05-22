'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Merch = () => {
  return (
    <section id="merch" className="py-32 bg-midnight border-y-8 border-neon-green">
      <div className="container mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-8xl font-black text-neon-green mb-4 neon-glow-green uppercase tracking-widest">DRIP</h2>
          <p className="text-xl opacity-60 uppercase tracking-[0.5em]">Wear the energy</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative w-full lg:w-1/3 aspect-[4/5] glass-card p-12 flex flex-col items-center justify-center border-t-8 border-neon-pink"
          >
            <div className="relative w-full h-full mb-8">
              <Image src="/merch.png" alt="Hoodie" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain" />
            </div>
            <h3 className="text-4xl font-black mb-4">NEON HOODIE</h3>
            <p className="text-neon-pink text-3xl font-black">$69.00</p>
            <button className="mt-8 bg-white text-black px-8 py-4 font-black uppercase hover:bg-neon-pink transition-colors">
              ADD TO BAG
            </button>
          </motion.div>

          <div className="flex flex-col gap-8 w-full lg:w-1/4">
            {[1, 2].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 20 }}
                className="glass-card p-8 flex items-center gap-8 border-l-8 border-neon-blue"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image src="/merch.png" alt="Sticker" fill className="object-contain" />
                </div>
                <div>
                  <h4 className="text-2xl font-black">STRIKER PACK</h4>
                  <p className="text-neon-blue text-xl font-black">$12.00</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merch;
