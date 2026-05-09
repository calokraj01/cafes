'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';

export default function Home() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      
      {/* The Process Section */}
      <section id="process" className="container">
        <div style={{ 
          background: 'var(--foreground)', 
          color: 'var(--white)', 
          borderRadius: '40px', 
          padding: '8rem 4rem',
          boxShadow: 'var(--soft-shadow)'
        }}>
          <div className="section-header">
            <span className="section-tag" style={{ color: 'var(--accent)' }}>Our Method</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>The Ethical Journey</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', textAlign: 'center' }}>
            <div>
              <h3 style={{ fontSize: '4rem', color: 'var(--accent)', marginBottom: '1rem' }}>01</h3>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sourcing</h4>
              <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>Direct trade with organic farms in Ethiopia and Colombia.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '4rem', color: 'var(--accent)', marginBottom: '1rem' }}>02</h3>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Roasting</h4>
              <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>Small-batch roasting to preserve the bean's unique profile.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '4rem', color: 'var(--accent)', marginBottom: '1rem' }}>03</h3>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Brewing</h4>
              <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>Precision brewing techniques for a flawless cup.</p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
