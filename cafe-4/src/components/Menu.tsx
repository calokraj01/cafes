'use client';

import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  { category: "Breakfast Bowls", items: [
    { name: "Organic Acai", price: "$12", desc: "Wild berries, house-made granola, local honey." },
    { name: "Golden Porridge", price: "$10", desc: "Oats, turmeric, toasted almonds, maple." }
  ]},
  { category: "Artisan Pastries", items: [
    { name: "Honey Almond Croissant", price: "$6", desc: "Twice-baked, almond cream, local honey glaze." },
    { name: "Sourdough Cinnamon Roll", price: "$7", desc: "Long fermentation, cream cheese frosting." }
  ]}
];

const Menu = () => {
  return (
    <section className="py-32 bg-paper paper-texture relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl mb-6">Our Morning Menu</h2>
            <p className="text-earth font-serif italic text-2xl">Simple, wholesome, and handmade daily.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {menuItems.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl mb-12 border-b border-sage/10 pb-4">{cat.category}</h3>
                <div className="flex flex-col gap-10">
                  {cat.items.map((item, j) => (
                    <div key={j} className="group">
                      <div className="flex justify-between items-end mb-2">
                        <h4 className="text-2xl font-sans not-italic font-medium text-sage group-hover:text-earth transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-lg font-bold text-earth">{item.price}</span>
                      </div>
                      <p className="text-sage/60 italic leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <button className="border-b-2 border-sage text-sage font-bold uppercase text-sm tracking-widest hover:text-earth hover:border-earth transition-all pb-2">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-sage-light/30 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-warm-beige/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Menu;
