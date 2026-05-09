'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Leaf = ({ delay, left, size }: { delay: number, left: string, size: number }) => (
  <motion.div
    initial={{ y: -100, x: 0, rotate: 0, opacity: 0 }}
    animate={{ 
      y: [0, 800], 
      x: [0, 50, -50, 0],
      rotate: [0, 180, 360],
      opacity: [0, 0.4, 0.4, 0]
    }}
    transition={{ 
      duration: 15, 
      delay, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="leaf-float"
    style={{ left, width: size, height: size }}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-sage opacity-40">
      <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8.17,20C12.31,20 16,14.63 16,8C16,7.4 15.9,6.81 15.71,6.24C14.16,3.47 10.32,1.38 6,1C10,6 10,12 10,12C10,12 11,10 17,8Z" />
    </svg>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden sun-glow bg-cream">
      {/* Floating Leaves Background */}
      <Leaf delay={0} left="10%" size={40} />
      <Leaf delay={5} left="80%" size={30} />
      <Leaf delay={2} left="50%" size={50} />
      <Leaf delay={8} left="25%" size={20} />

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-earth uppercase tracking-[0.3em] font-bold text-sm mb-6 block">
                Handcrafted & Organic
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9]">
                Your Slow <br />
                <span className="italic">Morning</span> <br />
                Starts Here.
              </h1>
              <p className="text-xl md:text-2xl text-sage/70 max-w-xl mb-12 leading-relaxed">
                Step into a world where time slows down. Freshly roasted organic beans, sunlight through the windows, and the simple joy of a peaceful brew.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button className="bg-sage text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-earth transition-all hover:scale-105 active:scale-95 organic-shadow">
                  Visit the Café
                </button>
                <button className="text-sage border-2 border-sage/20 px-10 py-5 rounded-full text-lg font-medium hover:border-sage transition-all">
                  Our Story
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-[600px] h-[400px] md:h-[500px] lg:h-[600px] mx-auto">
              <div className="absolute inset-0 bg-sage-light rounded-[100px] rotate-[-5deg] organic-shadow z-0" />
              <div className="absolute inset-4 overflow-hidden rounded-[80px] z-10">
                <img 
                  src="/hero.png" 
                  alt="Morning Coffee" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Floating Element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl organic-shadow hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center text-sage">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13C4,15.21 5.79,17 8,17H14C16.21,17 18,15.21 18,13V10H20A2,2 0 0,0 22,8V5A2,2 0 0,0 20,3Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Brewed Fresh</div>
                    <div className="text-xs text-sage/60 text-nowrap">Daily from 7:00 AM</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] fill-paper">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.55,142.15,108.82,211.75,93,255.33,83.05,283.47,63.47,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
