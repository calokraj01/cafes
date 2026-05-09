'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-12 border-t-8 border-neon-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-24 mb-32 relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-[10vw] font-black leading-none mb-12 tracking-tighter text-white">
              NEON <span className="text-neon-blue">SIP.</span>
            </h2>
            <p className="text-2xl font-bold max-w-md opacity-60">
              The future of coffee is here. It's loud, it's bright, and it's always brewing. Join the no-sleep club.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="text-neon-pink font-black uppercase mb-8 tracking-widest">Connect</h4>
              <ul className="flex flex-col gap-4 text-xl font-bold">
                <li className="hover:text-neon-pink cursor-pointer transition-colors">INSTAGRAM</li>
                <li className="hover:text-neon-pink cursor-pointer transition-colors">TIKTOK</li>
                <li className="hover:text-neon-pink cursor-pointer transition-colors">DISCORD</li>
              </ul>
            </div>
            <div>
              <h4 className="text-neon-blue font-black uppercase mb-8 tracking-widest">Navigate</h4>
              <ul className="flex flex-col gap-4 text-xl font-bold">
                <li className="hover:text-neon-blue cursor-pointer transition-colors">VIBE</li>
                <li className="hover:text-neon-blue cursor-pointer transition-colors">FUEL</li>
                <li className="hover:text-neon-blue cursor-pointer transition-colors">DRIP</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 opacity-30 text-sm font-black uppercase tracking-widest">
          <div>© 2026 NEON SIP / ALL RIGHTS RESERVED</div>
          <div>PRIVACY / TERMS / REBELLION</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
