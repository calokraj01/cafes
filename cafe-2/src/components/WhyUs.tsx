'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, Music, Moon } from 'lucide-react';

const features = [
  {
    title: "Fast Service",
    desc: "Your midnight fuel, prepared with precision and speed.",
    icon: <Zap size={32} />
  },
  {
    title: "Organic Beans",
    desc: "100% sustainably sourced, ethically roasted perfection.",
    icon: <Leaf size={32} />
  },
  {
    title: "Artisan Recipes",
    desc: "Unique blends crafted for the sophisticated palate.",
    icon: <Music size={32} />
  },
  {
    title: "Midnight Vibe",
    desc: "A cinematic atmosphere designed for late-night focus.",
    icon: <Moon size={32} />
  }
];

const WhyUs = () => {
  return (
    <section className="container" style={{ background: 'var(--espresso-deep)', borderRadius: '100px', padding: '10rem 6rem' }}>
      <div className="section-header">
        <span className="section-tag">Why Midnight</span>
        <h2 className="section-title">Elevating the Ritual</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50, skewY: 5 }}
            whileInView={{ opacity: 1, y: 0, skewY: 0 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              textAlign: 'center',
              background: 'rgba(255,255,255,0.02)',
              padding: '4rem 2rem',
              borderRadius: '40px',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s'
            }}
          >
            <div style={{ 
              width: '80px', 
              height: '80px', 
              background: 'rgba(198, 124, 78, 0.1)', 
              borderRadius: '24px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--amber-glow)',
              margin: '0 auto 2.5rem',
              border: '1px solid rgba(198, 124, 78, 0.2)'
            }}>
              {f.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{f.title}</h3>
            <p style={{ opacity: 0.6, fontSize: '0.95rem' }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
