'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function VirtualTourHero() {
  return (
    <>
      {/* ── MOBILE LAYOUT: image on top, content below ── */}
      <section aria-label="Virtual tour section">

        {/* IMAGE BLOCK — visible on mobile, hidden on desktop */}
        <div
          className="block md:hidden w-full"
          style={{
            height: '55vw',
            minHeight: '240px',
            maxHeight: '360px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src="/aminity6.jpeg"
            alt="Mahalaxmi Nagar project"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
          {/* Bottom fade into dark content area */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, #081810 100%)',
            }}
          />
        </div>

        {/* CONTENT BLOCK — mobile: plain dark bg; desktop: full overlay on image */}
        <div
          className="relative overflow-hidden"
          style={{ background: '#081810' }}
        >
          {/* Desktop background image (hidden on mobile) */}
          <div className="hidden md:block absolute inset-0" style={{ zIndex: 0 }}>
            <img
              src="/home.jpeg"
              alt=""
              aria-hidden="true"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>

          {/* Overlay — desktop only */}
          <div
            className="hidden md:block absolute inset-0"
            style={{
              zIndex: 1,
              background:
                'linear-gradient(115deg, rgba(8,24,16,0.92) 0%, rgba(8,24,16,0.72) 55%, rgba(8,24,16,0.3) 100%)',
            }}
          />

          {/* Decorative vertical accent line */}
          <div
            className="absolute left-0 top-16 bottom-16 w-1 rounded-r-full"
            style={{
              zIndex: 2,
              background: 'linear-gradient(to bottom, transparent, var(--secondary), transparent)',
            }}
          />

          {/* Text content */}
          <div
            className="relative w-full"
            style={{ zIndex: 2 }}
          >
            <div
              className="max-w-7xl mx-auto px-6 w-full"
              style={{ paddingTop: 'clamp(2rem, 5vw, 5rem)', paddingBottom: 'clamp(2rem, 5vw, 5rem)' }}
            >
              {/* Desktop */}
              <div
                className="hidden md:flex items-center"
                style={{ minHeight: '80vh' }}
              >
                <div className="max-w-2xl">
                  <BodyContent />
                </div>
              </div>

              {/* Mobile */}
              <div className="block md:hidden max-w-2xl">
                <BodyContent />
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

function BodyContent() {
  return (
    <>
      {/* Badge */}
      <span className="section-chip section-chip-white mb-6 block w-fit">
        <span
          className="w-2 h-2 rounded-full inline-block"
          style={{
            background: 'var(--secondary)',
            animation: 'pulseDot 1.8s ease-in-out infinite',
          }}
        />
        Premium Gated Society
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
        Where Luxury<br />Meets Growth
      </h2>

      <div className="space-y-4 mb-10">
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'rgba(255,255,255,0.82)',
            fontSize: '1.05rem',
            lineHeight: 1.75,
          }}
        >
          Elevate your lifestyle at our premium gated community, specifically designed for those
          who seek the perfect balance of sophistication and high-value returns. Located in the
          heart of Nagpur's highest growth zone, this project offers an elite, secure, and modern
          living experience away from the city's chaos.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.95rem',
            lineHeight: 1.7,
          }}
        >
          By choosing to live here, you aren't just securing a home; you are investing in a future
          where luxury meets consistent, exponential growth. Experience the pride of owning an
          address that defines status and promises long-term appreciation.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.95rem',
            lineHeight: 1.7,
          }}
        >
          Give your family the upscale lifestyle they deserve and watch your investment soar! ✨
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
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </button>
      </a>
    </>
  );
}