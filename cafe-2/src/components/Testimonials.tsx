'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Alex Rivera",
    role: "Design Lead",
    text: "The ambiance at Midnight Brew is unmatched. It's the only place where I can truly focus on my creative work while enjoying world-class coffee."
  },
  {
    name: "Sarah Chen",
    role: "Tech Entrepreneur",
    text: "The attention to detail in their roast profile is insane. You can taste the quality in every single sip. A true premium experience."
  },
  {
    name: "Marcus Thorne",
    role: "Artist",
    text: "More than just a cafe, it's a cinematic journey. The dark aesthetic and the amber glow create the perfect mood for late-night inspiration."
  }
];

const Testimonials = () => {
  return (
    <section className="container">
      <div className="section-header">
        <span className="section-tag">Reviews</span>
        <h2 className="section-title">What They Say</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
        {reviews.map((r, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              padding: '4rem',
              borderRadius: '40px',
              border: '1px solid var(--glass-border)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--amber-glow)', marginBottom: '2rem' }}>
              {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
            </div>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '3rem', fontStyle: 'italic' }}>"{r.text}"</p>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>{r.name}</div>
              <div style={{ opacity: 0.5, fontSize: '0.9rem' }}>{r.role}</div>
            </div>
            <div style={{ 
              position: 'absolute', 
              top: '2rem', 
              right: '2rem', 
              width: '50px', 
              height: '50px', 
              background: 'rgba(198, 124, 78, 0.05)', 
              borderRadius: '50%',
              zIndex: -1 
            }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
