'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  { name: "Midnight Espresso", price: "$5.00", tag: "Signature" },
  { name: "Amber Latte", price: "$6.50", tag: "Popular" },
  { name: "Eclipse Cold Brew", price: "$7.00", tag: "Limited" },
  { name: "Velvet Mocha", price: "$6.00", tag: "Cozy" }
];

const Collection = () => {
  return (
    <section className="container">
      <div className="section-header">
        <span className="section-tag">Curated Selection</span>
        <h2 className="section-title">The Collection</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{
              background: 'var(--espresso-deep)',
              padding: '3rem',
              borderRadius: '40px',
              border: '1px solid var(--glass-border)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '0.7rem', color: 'var(--amber-glow)', fontWeight: '700', textTransform: 'uppercase' }}>
              {item.tag}
            </div>
            
            <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '3rem' }}>
              <Image 
                src="/collection.png" 
                alt={item.name} 
                fill 
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}
              />
            </div>

            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.name}</h3>
            <p style={{ opacity: 0.6, fontSize: '0.9rem', marginBottom: '2rem' }}>A deep, rich flavor profile with notes of dark chocolate and roasted nuts.</p>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--amber-glow)' }}>{item.price}</div>
            
            <motion.div 
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                height: '4px',
                background: 'var(--amber-glow)',
                transform: 'scaleX(0)',
                transition: 'transform 0.3s'
              }}
              className="card-glow-bar"
            />
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .menu-card:hover .card-glow-bar {
          transform: scaleX(1);
        }
      `}</style>
    </section>
  );
};

export default Collection;
