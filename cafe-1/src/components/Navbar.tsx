'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href="/" className="nav-logo">
        ETHOS<span>.</span>
      </Link>

      <ul className="nav-links">
        <li><Link href="#story" className="nav-link">Our Story</Link></li>
        <li><Link href="#menu" className="nav-link">Menu</Link></li>
        <li><Link href="#gallery" className="nav-link">Gallery</Link></li>
        <li><Link href="#process" className="nav-link">Process</Link></li>
      </ul>

      <Link href="#contact" className="nav-cta">
        Book a Table
      </Link>
    </motion.nav>
  );
};

export default Navbar;
