'use client';

import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { day: "FRI", time: "22:00", name: "ACID HOUSE SESSIONS", dj: "DJ NEON" },
  { day: "SAT", time: "23:30", name: "TECHNO COFFEE RAVE", dj: "VORTEX" },
  { day: "SUN", time: "20:00", name: "CHILLHOP MIDNIGHT", dj: "LOFI CAT" }
];

const Events = () => {
  return (
    <section className="py-32 px-8 bg-black relative">
      <div className="container mx-auto">
        <h2 className="text-[12vw] font-black leading-none mb-24 text-center">
          LATE <span className="text-neon-orange">NIGHTS</span>
        </h2>

        <div className="flex flex-col gap-4">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,122,0,0.1)' }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between p-12 border-4 border-neon-orange rounded-3xl transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-12">
                <div className="text-6xl font-black text-neon-orange">{event.day}</div>
                <div>
                  <div className="text-2xl opacity-50">{event.time}</div>
                  <h3 className="text-4xl font-black group-hover:text-neon-orange transition-colors">{event.name}</h3>
                </div>
              </div>
              <div className="text-3xl font-bold italic opacity-70 group-hover:opacity-100">
                FEAT. {event.dj}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Floating Label */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute top-1/2 right-10 w-40 h-40 border-4 border-dashed border-neon-blue rounded-full flex items-center justify-center p-8 text-center text-xs font-black uppercase"
      >
        LIVE SETS EVERY WEEKEND
      </motion.div>
    </section>
  );
};

export default Events;
