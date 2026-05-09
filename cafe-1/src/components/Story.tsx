'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Story = () => {
  return (
    <section id="story" className="container">
      <div className="story-grid">
        <motion.div 
          className="story-image-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="hero-image-wrapper">
            <Image 
              src="/interior.png" 
              alt="Ethos Interior" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="hero-image"
            />
          </div>
        </motion.div>

        <motion.div 
          className="story-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="section-tag">Our Legacy</span>
          <h2 className="section-title" style={{ textAlign: 'left' }}>A commitment to nature in every sip.</h2>
          <p>
            Founded on the principles of sustainability and minimalism, Ethos Coffee began as a small roastery dedicated to finding the most ethical beans on the planet.
          </p>
          <p>
            Every bean we source is 100% organic, supporting fair-trade farmers and protecting the biodiversity of coffee-growing regions. Our cafe is designed as a sanctuary—a place where you can slow down and enjoy the true essence of coffee.
          </p>
          <div>
            <a href="#process" className="nav-link" style={{ borderBottom: '2px solid var(--accent)', paddingBottom: '8px', opacity: 1 }}>Explore our process</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
