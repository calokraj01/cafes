'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    
    const elements = document.querySelectorAll('button, a, .glass-card');
    elements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[10000] mix-blend-difference border-2 border-neon-blue"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 245, 255, 1)' : 'rgba(0, 245, 255, 0)',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[10000] bg-neon-pink shadow-[0_0_15px_#FF0080]"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 800, mass: 0.2 }}
      />
    </>
  );
};

export default Cursor;
