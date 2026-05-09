'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/interior.png', alt: 'Cafe Vibe' },
  { src: '/collection.png', alt: 'Signature Drink' },
  { src: '/hero-cup.png', alt: 'Midnight Roast' },
  { src: '/interior.png', alt: 'Cozy Corner' }
];

const Gallery = () => {
  return (
    <section className="container">
      <div className="section-header">
        <span className="section-tag">Gallery</span>
        <h2 className="section-title">The Experience</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: i % 3 === 0 ? '600px' : '400px', 
              borderRadius: '40px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              style={{ objectFit: 'cover' }}
            />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'rgba(11,11,11,0.2)', 
              transition: 'background 0.3s' 
            }} 
            className="gallery-overlay"
            />
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        div:hover > .gallery-overlay {
          background: rgba(11,11,11,0);
        }
      `}</style>
    </section>
  );
};

export default Gallery;
