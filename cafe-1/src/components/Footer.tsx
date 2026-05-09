'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-logo">ETHOS<span>.</span></Link>
            <p className="footer-desc">
              Ethically sourced, organic coffee for the conscious mind. Join us in our journey towards a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link href="#story" className="footer-link">Our Story</Link></li>
              <li><Link href="#menu" className="footer-link">Menu</Link></li>
              <li><Link href="#process" className="footer-link">The Process</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Visit</h4>
            <ul className="footer-links">
              <li><span className="footer-link">123 Green St, Portland, OR</span></li>
              <li><span className="footer-link">Mon - Fri: 7am - 6pm</span></li>
              <li><span className="footer-link">Sat - Sun: 8am - 4pm</span></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Instagram</a></li>
              <li><a href="#" className="footer-link">Twitter</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Ethos Coffee. All rights reserved.</p>
          <p>Designed for the future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
