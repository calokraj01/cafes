'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { src: '/hero.png', alt: 'Ethos Coffee' },
  { src: '/interior.png', alt: 'Cafe Interior' },
  { src: '/beans.png', alt: 'Organic Beans' },
  { src: '/latte.png', alt: 'Latte Art' }
];

const Gallery = () => {
  return (
    <section id="gallery" className="container gallery-section">
      <div className="section-header">
        <span className="section-tag">Visuals</span>
        <h2 className="section-title">The Ethos Experience</h2>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <motion.div 
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="hero-image-wrapper">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="hero-image"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
