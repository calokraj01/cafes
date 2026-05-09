'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';

const ScrollProgress = () => {
  const [scroll, setScroll] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScroll((currentScroll / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scroll}%`,
        height: '4px',
        background: 'var(--amber-glow)',
        zIndex: 10000,
        boxShadow: '0 0 20px var(--amber-glow)'
      }}
    />
  );
};

export default function Home() {
  return (
    <main className="gradient-bg">
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <Hero />
      <div id="collection">
        <Collection />
      </div>
      <div id="about">
        <About />
      </div>
      <WhyUs />
      <div id="gallery">
        <Gallery />
      </div>
      <Testimonials />
      <div id="booking">
        <Reservation />
      </div>
      <Footer />
    </main>
  );
}
