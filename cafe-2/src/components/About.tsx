'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ position: 'relative', width: '100%', height: '700px', borderRadius: '50px', overflow: 'hidden' }}
        >
          <Image 
            src="/interior.png" 
            alt="Midnight Brew Interior" 
            fill 
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,11,11,0.5), transparent)' }} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="section-tag">Our Philosophy</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>The Art of the Midnight Roast.</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2rem' }}>
            At Midnight Brew, we believe coffee is more than a morning ritual—it's a cinematic experience. Founded in the heart of the city, our cafe serves as a sanctuary for those who find inspiration in the quiet hours.
          </p>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '4rem' }}>
            We source only the rarest organic beans, roasted in small batches to preserve their deep, complex notes. Our space is designed to be a timeless retreat, blending futuristic minimalism with the warmth of a classic bistro.
          </p>
          <button className="btn-outline">Read Our Story</button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
