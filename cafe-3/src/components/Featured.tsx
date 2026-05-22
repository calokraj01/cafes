'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const drinks = [
  { name: "Acid Latte", price: "$6.66", color: "neon-green", border: "border-neon-green", text: "group-hover:text-neon-green", bg: "bg-neon-green" },
  { name: "Cyber Brew", price: "$7.20", color: "neon-blue", border: "border-neon-blue", text: "group-hover:text-neon-blue", bg: "bg-neon-blue" },
  { name: "Pink Punk", price: "$5.50", color: "neon-pink", border: "border-neon-pink", text: "group-hover:text-neon-pink", bg: "bg-neon-pink" },
  { name: "Orange Overdrive", price: "$6.90", color: "neon-orange", border: "border-neon-orange", text: "group-hover:text-neon-orange", bg: "bg-neon-orange" }
];

const Featured = () => {
  return (
    <section id="featured" className="py-32 px-8 bg-midnight overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <h2 className="text-[10vw] leading-none tracking-tighter">
            THE <br />
            <span className="text-neon-pink italic">FUEL</span>
          </h2>
          <p className="max-w-md text-xl opacity-70 border-l-4 border-neon-green pl-6 py-2">
            Engineered for the chaotic, brewed for the bold. Our signature line-up hits different than your average caffeine fix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {drinks.map((drink, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: i % 2 === 0 ? 5 : -5,
                transition: { duration: 0.2 } 
              }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-[40px] relative group border-b-8 border-r-8 ${drink.border}`}
            >
              <div className="relative h-64 mb-8">
                <Image 
                  src="/treats.png" 
                  alt={drink.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain transition-transform group-hover:scale-125"
                />
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  <h3 className={`text-3xl mb-2 text-white ${drink.text}`}>
                    {drink.name}
                  </h3>
                  <p className="text-4xl font-black text-white">{drink.price}</p>
                </div>
                <div className={`w-12 h-12 ${drink.bg} rounded-full flex items-center justify-center text-black font-black text-2xl`}>
                  +
                </div>
              </div>

              {/* Decorative Stickers */}
              {i % 2 === 0 && (
                <div className="absolute -top-4 -left-4 bg-neon-purple text-white px-4 py-1 text-xs font-black uppercase rotate-[-15deg] shadow-lg">
                  LOUD AF
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
