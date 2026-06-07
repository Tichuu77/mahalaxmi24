'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function VirtualTourHero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-fixed-mobile"
      style={{
        backgroundImage: ' ',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
      }}
      aria-label="Virtual tour section"
    >
      {/* Sophisticated overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(115deg, rgba(8,24,16,0.92) 0%, rgba(8,24,16,0.72) 55%, rgba(8,24,16,0.3) 100%)',
        }}
      />

      {/* Decorative vertical accent line */}
      <div
        className="absolute left-0 top-16 bottom-16 w-1 rounded-r-full"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--secondary), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="section-chip section-chip-white mb-6 block w-fit">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ background: 'var(--secondary)', animation: 'pulseDot 1.8s ease-in-out infinite' }}
            />
            Premium Gated Layout
          </span>

          <h2
            className="font-bold mb-6 leading-tight uppercase tracking-wide"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--secondary)',
              textShadow: '0 2px 16px rgba(0,0,0,0.4)',
            }}
          >
            Living Spaces in<br />Nagpur's Premier Area
          </h2>

          <div className="space-y-4 mb-10">
            <p
              style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', lineHeight: 1.75 }}
            >
              Mahalaxmi Nagar 49 is a top-tier gated layout offering premium residential plots designed for a modern, secure lifestyle. With high-quality cement concrete roads, 24/7 security surveillance, lush green landscapes, and modern amenities, this community is the ideal canvas for your dream home.
            </p>
            <p
              style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7 }}
            >
              Strategically located in Nagpur's premier residential zone with outstanding connectivity to Samrudhi Circle, D-Mart, and leading schools, it offers a perfect balance of serene living and high growth potential.
            </p>
          </div>

          {/* CTA */}
          <a href="#overview">
            <button
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-2xl"
              style={{
                fontFamily: 'var(--font-heading)',
                background: 'transparent',
                border: '2px solid var(--secondary)',
                color: 'var(--secondary)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--secondary)';
                (e.currentTarget as HTMLButtonElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--secondary)';
              }}
            >
              Enquire Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}