'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', zIndex: 10 }}>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="section-tag">The Midnight Experience</span>
          </motion.div>
          
          <motion.h1 
            className="section-title glow-text"
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '2.5rem', lineHeight: '1.2' }}
          >
            Brewed For The <br />
            <span style={{ color: 'var(--amber-glow)', position: 'relative' }}>
              Nights
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1 }}
                style={{ position: 'absolute', bottom: '5px', left: 0, height: '4px', background: 'var(--amber-glow)', opacity: 0.3 }}
              />
            </span> <br />
            That Matter.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '500px', marginBottom: '4rem' }}
          >
            Experience the future of specialty coffee. Cinematic ambiance, artisanal roasts, and a flavor profile as deep as the midnight sky.
          </motion.p>

          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ display: 'flex', gap: '2rem' }}
          >
            <button className="btn-primary" style={{ padding: '1.5rem 4rem' }}>Order Now</button>
            <button className="btn-outline" style={{ padding: '1.5rem 4rem' }}>Explore Menu</button>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', width: '100%', height: '700px' }}
        >
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            <Image 
              src="/hero-cup.png" 
              alt="Midnight Coffee Cup" 
              fill 
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))' }}
              priority
              loading="eager"
            />
          </motion.div>
          {/* Ambient Glows */}
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(198, 124, 78, 0.2) 0%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: -1
            }} 
          />
        </motion.div>
      </div>

      {/* Decorative Particles - Client Side Only to fix hydration mismatch */}
      {isMounted && [...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            y: Math.random() * 1000,
            x: Math.random() * 2000
          }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: [null, -200],
            x: [null, (Math.random() - 0.5) * 100]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: Math.random() * 5 + 10, 
            ease: "linear",
            delay: Math.random() * 10
          }}
          style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: 'var(--amber-glow)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
