'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-void">
      {/* 1. BACKGROUND: Misty Mountains */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-void/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1518001479836-8a7e04f0d619?q=80&w=2500&auto=format&fit=crop" 
          alt="Misty Mountains" 
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* 2. MIDGROUND: Rocky Silhouettes (Simulated with gradients for framing) */}
      <motion.div style={{ y: yMid }} className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-void via-void/80 to-transparent" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-void via-void/80 to-transparent" />
      </motion.div>

      {/* 3. TEXT LAYER */}
      <motion.div style={{ y: yText }} className="relative z-20 h-full flex flex-col items-center justify-center text-center px-8">
        <span className="text-sand font-bold uppercase tracking-[0.5em] text-sm mb-6 drop-shadow-lg">
          LET US BREW YOU A PERFECT
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-mist font-serif leading-[0.9] drop-shadow-2xl">
          CANOPY <br /> EXPERIENCE
        </h1>
        <div className="mt-12 text-mist/60 text-xs font-bold uppercase tracking-[0.4em] drop-shadow-lg cursor-pointer hover:text-sand transition-colors">
          Explore Details ↓
        </div>
      </motion.div>

      {/* 4. FOREGROUND: Foliage & Birds */}
      <motion.div style={{ y: yFg }} className="absolute inset-0 z-30 pointer-events-none">
        
        {/* Left Side Ferns */}
        <motion.div 
          animate={{ rotate: [-2, 2, -2], x: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-20%] w-[80%] h-[90%] mix-blend-screen opacity-80"
          style={{ maskImage: 'linear-gradient(to right, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1200&auto=format&fit=crop"
            alt="Foreground Fern" 
            className="w-full h-full object-cover rounded-full filter brightness-75"
          />
        </motion.div>
        
        {/* Right Side Ferns */}
        <motion.div 
          animate={{ rotate: [2, -2, 2], y: [5, -5, 5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] mix-blend-screen opacity-60"
          style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1596745124036-79db0407a0c7?q=80&w=1200&auto=format&fit=crop"
            alt="Foreground Fern" 
            className="w-full h-full object-cover rounded-full filter brightness-50"
          />
        </motion.div>

        {/* Right Side Bird */}
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] w-[300px] h-[300px] mix-blend-screen opacity-90"
          style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=800&auto=format&fit=crop"
            alt="Flying Bird" 
            className="w-full h-full object-cover rounded-full filter saturate-150"
          />
        </motion.div>

      </motion.div>

      {/* 5. TOP GRADIENT & VIGNETTE */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-void/80 to-transparent z-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-void to-transparent z-40 pointer-events-none" />
    </section>
  );
};

export default Hero;
