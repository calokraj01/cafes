'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Droplets, Leaf, Wind } from 'lucide-react';

const menuItems = [
  {
    name: "Ethiopian Yirgacheffe",
    desc: "Notes of jasmine, lemon, and peach. Light roast, floral finish.",
    icon: <Leaf />,
    price: "$6.50"
  },
  {
    name: "Cold Brew Reserve",
    desc: "Steeped for 24 hours. Smooth, chocolatey, and low acidity.",
    icon: <Droplets />,
    price: "$7.00"
  },
  {
    name: "Ethos Signature Blend",
    desc: "Our house favorite. Balanced notes of caramel and toasted hazelnut.",
    icon: <Coffee />,
    price: "$5.50"
  },
  {
    name: "Aeropress Special",
    desc: "A clean, concentrated cup highlighting the bean's unique origin.",
    icon: <Wind />,
    price: "$6.00"
  }
];

const Menu = () => {
  return (
    <section id="menu" className="container">
      <div className="section-header">
        <span className="section-tag">The Collection</span>
        <h2 className="section-title">Signature Brews</h2>
      </div>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <motion.div 
            key={index}
            className="menu-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="menu-icon">{item.icon}</div>
            <h3 className="menu-name">{item.name}</h3>
            <p className="menu-desc">{item.desc}</p>
            <div style={{ marginTop: '1.5rem', fontWeight: '700', color: 'var(--accent)' }}>{item.price}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
