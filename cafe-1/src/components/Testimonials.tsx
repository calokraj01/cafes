'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The best organic coffee I've had in years. The atmosphere is just so calming and focused.",
    author: "Sarah J.",
    role: "Regular Customer"
  },
  {
    quote: "I love their commitment to sustainability. Every sip feels like you're doing something good for the planet.",
    author: "Michael R.",
    role: "Eco-activist"
  },
  {
    quote: "The Ethiopian Yirgacheffe is a revelation. Truly a premium experience in every sense.",
    author: "Emma W.",
    role: "Coffee Enthusiast"
  }
];

const Testimonials = () => {
  return (
    <section className="container" style={{ background: '#F4F1EA', borderRadius: '40px', padding: '10rem 4rem' }}>
      <div className="section-header">
        <span className="section-tag">Reviews</span>
        <h2 className="section-title">What Our Community Says</h2>
      </div>

      <div className="menu-grid">
        {testimonials.map((t, index) => (
          <motion.div 
            key={index}
            className="menu-card"
            style={{ border: '1px solid rgba(27, 48, 34, 0.05)' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '2rem', opacity: 0.8 }}>"{t.quote}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--accent)', borderRadius: '50%' }}></div>
              <div>
                <h4 style={{ fontSize: '1rem' }}>{t.author}</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
