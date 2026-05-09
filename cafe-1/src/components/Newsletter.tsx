'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center' }}
      >
        <span className="section-tag">Newsletter</span>
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>Stay Grounded</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 4rem', opacity: 0.7, fontSize: '1.2rem' }}>
          Join our community of coffee lovers and get updates on new arrivals, ethical sourcing stories, and special events.
        </p>

        <form className="newsletter-form" style={{ display: 'flex', gap: '1rem', maxWidth: '600px', margin: '0 auto' }} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            style={{ 
              flex: 1, 
              padding: '1.5rem 2.5rem', 
              borderRadius: '50px', 
              border: '1px solid rgba(27, 48, 34, 0.1)', 
              background: 'var(--white)',
              fontSize: '1.1rem'
            }} 
          />
          <button 
            className="nav-cta" 
            style={{ border: 'none', cursor: 'pointer', padding: '0 3rem' }}
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
