'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const drinks = [
  { name: "Lavender Oat Latte", price: "$6.50", desc: "Organic espresso with floral lavender and creamy oat milk." },
  { name: "Honey Sage Brew", price: "$5.75", desc: "Slow-brewed coffee infused with fresh sage and local honey." },
  { name: "Maple Cream Cold Brew", price: "$6.25", desc: "Smooth cold brew topped with maple-infused cream." },
];

const Featured = () => {
  return (
    <section className="py-32 bg-paper paper-texture overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-6">Seasonal Favorites</h2>
            <div className="w-24 h-1 bg-sage-light mx-auto mb-8" />
            <p className="text-sage/60 max-w-lg mx-auto italic">
              Crafted with the freshest local ingredients to warm your soul and soothe your spirit.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {drinks.map((drink, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-cream p-10 rounded-[60px] organic-shadow group cursor-pointer"
            >
              <div className="relative h-64 mb-8 overflow-hidden rounded-[40px]">
                <Image 
                  src="/treats.png" 
                  alt={drink.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl">{drink.name}</h3>
                <span className="text-earth font-bold">{drink.price}</span>
              </div>
              <p className="text-sage/60 leading-relaxed mb-8">
                {drink.desc}
              </p>
              <button className="text-sage font-bold uppercase text-xs tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <span className="text-xl">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
