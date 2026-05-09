'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Reservation = () => {
  return (
    <section className="container">
      <div style={{ 
        background: 'linear-gradient(135deg, var(--espresso-deep) 0%, var(--midnight-black) 100%)',
        borderRadius: '60px',
        padding: '10rem 8rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10rem',
        alignItems: 'center',
        border: '1px solid var(--glass-border)'
      }}>
        <div>
          <span className="section-tag" style={{ textAlign: 'left' }}>Reserve A Spot</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem' }}>Join Us for the Night.</h2>
          <p style={{ opacity: 0.7, fontSize: '1.1rem', marginBottom: '4rem' }}>
            Secure your table for an unforgettable late-night experience. Whether it's a creative session or a quiet date, we have the perfect corner for you.
          </p>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div>
              <div style={{ color: 'var(--amber-glow)', fontWeight: '700', marginBottom: '0.5rem' }}>Location</div>
              <div style={{ opacity: 0.6 }}>123 Midnight Avenue, NY</div>
            </div>
            <div>
              <div style={{ color: 'var(--amber-glow)', fontWeight: '700', marginBottom: '0.5rem' }}>Opening Hours</div>
              <div style={{ opacity: 0.6 }}>6:00 PM - 4:00 AM</div>
            </div>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="input-group">
              <label>Guests</label>
              <select>
                <option>2 People</option>
                <option>4 People</option>
                <option>6+ People</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <label>Date & Time</label>
            <input type="datetime-local" />
          </div>
          <button className="btn-primary" style={{ width: '100%', marginTop: '2rem' }}>Book Table</button>
        </motion.form>
      </div>

      <style jsx>{`
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--amber-glow);
          font-weight: 700;
        }
        input, select {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 20px;
          color: var(--white);
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition);
        }
        input:focus, select:focus {
          outline: none;
          border-color: var(--amber-glow);
          background: rgba(255,255,255,0.05);
        }
      `}</style>
    </section>
  );
};

export default Reservation;
