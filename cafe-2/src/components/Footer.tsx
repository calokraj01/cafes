'use client';

import React from 'react';
import { Globe, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--midnight-black)', borderTop: '1px solid var(--glass-border)', padding: '10rem 0 5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '8rem', marginBottom: '8rem' }}>
          <div>
            <div className="nav-logo" style={{ marginBottom: '3rem' }}>MIDNIGHT<span style={{ color: 'var(--amber-glow)' }}>.</span></div>
            <p style={{ opacity: 0.5, fontSize: '1rem', maxWidth: '300px' }}>
              The future of specialty coffee, brewed for the nights that matter. Experience cinematic ambiance and artisanal perfection.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', opacity: 0.6 }}>
              <li><a href="#about" className="nav-link">Our Story</a></li>
              <li><a href="#menu" className="nav-link">Menu</a></li>
              <li><a href="#gallery" className="nav-link">Experience</a></li>
              <li><a href="#booking" className="nav-link">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Contact</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', opacity: 0.6 }}>
              <li>hello@midnightbrew.com</li>
              <li>+1 (555) 000-1234</li>
              <li>123 Midnight Avenue, NY</li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Social</h4>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Globe className="nav-link" size={24} />
              <Mail className="nav-link" size={24} />
              <MessageCircle className="nav-link" size={24} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.05)', opacity: 0.4, fontSize: '0.8rem' }}>
          <div>© 2026 Midnight Brew Cafe. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
