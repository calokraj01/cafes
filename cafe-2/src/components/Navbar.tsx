'use client';

import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">MIDNIGHT<span style={{ color: 'var(--amber-glow)' }}>.</span></div>
      
      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#menu" className="nav-link">Menu</a>
        <a href="#gallery" className="nav-link">Experience</a>
        <a href="#booking" className="nav-link">Booking</a>
      </div>

      <button className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '0.8rem' }}>Order Now</button>
    </nav>
  );
};

export default Navbar;
