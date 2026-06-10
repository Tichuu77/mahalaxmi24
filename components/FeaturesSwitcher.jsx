'use client';
import React, { useState, useRef } from 'react';

const features = [
  {
    title: 'Kids Play Area',
    description:
      'A vibrant, safe play zone designed for children of all ages — featuring colorful slides, swings, climbing frames, and soft-surface flooring surrounded by shaded seating for parents.',
    tab: 'Kids Play Area',
    image: '/aminity1.jpeg',
  },
  {
    title: 'Pool',
    description:
      'A resort-style swimming pool with dedicated lanes, a shallow wading section for kids, and a sun deck with loungers — perfect for relaxation and recreation year-round.',
    tab: 'Pool',
    image: '/aminity2.jpeg',
  },
  {
    title: 'Basketball Court',
    description:
      'A full-sized, professionally marked basketball court with high-quality flooring and floodlights — ideal for evening matches, fitness drills, and friendly neighbourhood tournaments.',
    tab: 'Basketball Court',
    image: '/aminity3.jpeg',
  },
  {
    title: 'Badminton Court',
    description:
      'A covered, well-lit badminton court built to standard dimensions — offering residents a premium space for daily fitness, casual rallies, and competitive community play.',
    tab: 'Badminton Court',
    image: '/aminity4.jpeg',
  },
  {
    title: 'Meditation Area',
    description:
      'A serene, dedicated meditation corner nestled amid lush greenery — designed with calming landscaping, natural stone seating, and peaceful water features to help you reconnect with inner stillness.',
    tab: 'Meditation Area',
    image: '/aminity5.jpeg',
  },
  {
    title: 'Yoga Park',
    description:
      'An open-air yoga park with a smooth, spacious deck, morning sunlight, and a tranquil green backdrop — providing the perfect environment for daily practice, stretching, and mindful movement.',
    tab: 'Yoga Park',
    image: '/aminity6.jpeg',
  },
];

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const tabStripRef = useRef(null);
  const isAnimating = useRef(false);

  const goTo = (index) => {
    if (index === activeIndex || isAnimating.current) return;
    if (index < 0 || index >= features.length) return;
    isAnimating.current = true;
    setActiveIndex(index);
    setAnimKey((k) => k + 1);
    setTimeout(() => {
      isAnimating.current = false;
    }, 450);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goTo(activeIndex + 1);
      else goTo(activeIndex - 1);
    }
  };

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{
        background: '#0d1a14',
        height: '100dvh',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* ── IMAGE BLOCK (top, full width) ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          flex: '0 0 52%',
          overflow: 'hidden',
        }}
      >
        {/* Images */}
        {features.map((f, i) => (
          <div
            key={i}
            aria-hidden={i !== activeIndex}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${f.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === activeIndex ? 1 : 0,
              transition: 'opacity 0.65s ease',
            }}
          />
        ))}

        {/* Top bar overlay ON the image */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            zIndex: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 16px',
            background: 'linear-gradient(to bottom, rgba(8,24,16,0.65) 0%, transparent 100%)',
          }}
        >
          {/* Badge */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.22)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: '100px',
              padding: '5px 14px',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.88)',
              fontFamily: 'var(--font-sans, sans-serif)',
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'var(--secondary, #C9862B)',
                display: 'inline-block',
              }}
            />
            Modern Amenities
          </span>

          {/* Counter */}
          <span
            style={{
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderRadius: '100px',
              padding: '5px 14px',
              fontSize: '11px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.05em',
              fontFamily: 'var(--font-sans, sans-serif)',
            }}
          >
            <strong style={{ color: 'var(--secondary, #C9862B)', fontWeight: 700 }}>
              {pad(activeIndex + 1)}
            </strong>{' '}
            / {pad(features.length)}
          </span>
        </div>

        {/* Bottom fade into content area */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '80px',
            background: 'linear-gradient(to bottom, transparent 0%, #0d1a14 100%)',
            zIndex: 4,
          }}
        />
      </div>

      {/* ── CONTENT BLOCK (bottom) ── */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          background: '#0d1a14',
          overflow: 'hidden',
        }}
      >
        {/* Section heading */}
        <div style={{ padding: '4px 20px 0' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading, Georgia, serif)',
              fontSize: 'clamp(1.15rem, 5vw, 2rem)',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Life at Mahalaxmi<br />Nagar 49
          </h2>
        </div>

        {/* Feature content card */}
        <div
          key={animKey}
          style={{
            padding: '10px 20px 0',
            animation: 'fadeInUp 0.45s ease both',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: 'var(--secondary, #C9862B)',
              color: '#fff',
              fontSize: '9px',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '4px',
              marginBottom: '8px',
              fontFamily: 'var(--font-sans, sans-serif)',
            }}
          >
            {pad(activeIndex + 1)} / {pad(features.length)}
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-heading, Georgia, serif)',
              fontSize: 'clamp(1rem, 4vw, 1.4rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.25,
              marginBottom: '6px',
              letterSpacing: '-0.01em',
            }}
          >
            {features[activeIndex].title}
          </h3>

          <p
            style={{
              fontSize: '12.5px',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.65)',
              fontFamily: 'var(--font-sans, sans-serif)',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              margin: 0,
            }}
          >
            {features[activeIndex].description}
          </p>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Horizontal tab strip */}
        <div
          ref={tabStripRef}
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            padding: '8px 20px',
            paddingBottom: 'max(calc(env(safe-area-inset-bottom) + 12px), 16px)',
          }}
        >
          {features.map((f, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  flexShrink: 0,
                  minWidth: '100px',
                  maxWidth: '130px',
                  background: isActive ? 'var(--secondary, #C9862B)' : 'rgba(255,255,255,0.07)',
                  border: `1px solid ${isActive ? 'var(--secondary, #C9862B)' : 'rgba(255,255,255,0.1)'}`,
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 6px 20px rgba(201,134,43,0.35)' : 'none',
                  transform: isActive ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.28s ease',
                }}
              >
                <span
                  style={{
                    fontSize: '9.5px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
                    fontFamily: 'var(--font-sans, sans-serif)',
                    lineHeight: 1.3,
                    display: 'block',
                  }}
                >
                  {f.tab}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}