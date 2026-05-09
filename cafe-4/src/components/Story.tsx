'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Story = () => {
  return (
    <section className="py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] rounded-[100px] overflow-hidden organic-shadow">
              <Image 
                src="/interior.png" 
                alt="Café Story" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Hand-drawn accent overlay */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 text-earth opacity-40">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10,50 Q25,25 50,50 T90,50" />
                <path d="M20,60 Q35,35 60,60 T80,60" />
              </svg>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-earth font-serif italic text-2xl mb-6 block">Our Story</span>
              <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
                Grown with Care, <br />
                Poured with Love.
              </h2>
              <p className="text-xl text-sage/70 mb-8 leading-relaxed">
                It started with a simple belief: that the best moments happen when we slow down. Founded in a small coastal kitchen, Morning Dew was born from a passion for organic farming and the ritual of the first morning cup.
              </p>
              <p className="text-xl text-sage/70 mb-12 leading-relaxed">
                We work directly with small-scale farmers who treat the earth with the same respect we treat our beans. Every cup is a testament to quality, sustainability, and the beauty of nature.
              </p>
              
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-4xl font-serif mb-1">100%</div>
                  <div className="text-sm text-earth font-bold uppercase tracking-widest">Organic</div>
                </div>
                <div className="w-px h-12 bg-sage/10" />
                <div>
                  <div className="text-4xl font-serif mb-1">12+</div>
                  <div className="text-sm text-earth font-bold uppercase tracking-widest">Local Farms</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
