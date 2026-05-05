'use client';
import React, { useState, useRef, useEffect } from 'react';

const features = [
  {
    title: 'Master Layout Plan',
    description:
      'A meticulously planned township with wide internal roads, numbered plots, a central amenity zone, and a lush green belt — all visible at a glance from above.',
    tab: 'Layout Plan',
    image: '/gallery_4.jpg',
  },
  {
    title: 'Garden Seating Lounge',
    description:
      'A landscaped outdoor lounge with a premium pergola, sculptural seating, and curated flower beds — the perfect spot to unwind within the gated community.',
    tab: 'Garden Lounge',
    image: '/gallery_1.jpg',
  },
  {
    title: 'Central Amenity Park',
    description:
      "An aerial view of the central recreational hub featuring a basketball court, children's play zone, walking trails, open lawns, and artistic sculptures.",
    tab: 'Amenity Park',
    image: '/gallery_2.jpg',
  },
  {
    title: 'Landscape & Green Spaces',
    description:
      'Every plot is bordered by richly landscaped garden strips with seasonal flowers, manicured hedges, and palm-lined pathways creating a resort-like environment.',
    tab: 'Green Spaces',
    image: '/gallery_3.jpg',
  },
  {
    title: "Children's Play Area",
    description:
      'A dedicated play zone with colorful slides, swings, and benches — set against a lush lawn and canopy of jacaranda trees for a safe, joyful outdoor experience.',
    tab: 'Play Area',
    image: '/gallery_5.jpg',
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

  // useEffect(() => {
  //   const strip = tabStripRef.current;
  //   if (!strip) return;
  //   const activeBtn = strip.children[activeIndex];
  //   if (activeBtn) {
  //     activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  //   }
  // }, [activeIndex]);

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
      {/* Background images */}
      {features.map((f, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${f.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === activeIndex ? 1 : 0,
            zIndex: i === activeIndex ? 1 : 0,
            transition: 'opacity 0.65s ease',
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background:
            'linear-gradient(to bottom, rgba(8,24,16,0.6) 0%, rgba(0,0,0,0.05) 38%, rgba(8,24,16,0.82) 72%, rgba(8,24,16,1) 100%)',
        }}
      />

      {/* Top bar */}
      <div
        className="relative flex items-center justify-between px-5"
        style={{ zIndex: 10, paddingTop: '18px' }}
      >
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
          Features
        </span>

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

      {/* Section heading */}
      <div
        className="relative px-5"
        style={{ zIndex: 10, paddingTop: '16px' }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-heading, Georgia, serif)',
            fontSize: 'clamp(1.25rem, 5.5vw, 2.8rem)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
          }}
        >
          Life at Mahalaxmi<br />Nagar 49
        </h2>
      </div>

      {/* Swipe zone — fills middle space */}
      <div className="relative flex-1" style={{ zIndex: 10 }} />

     
      {/* Feature content card */}
      <div
        key={animKey}
        className="relative px-5"
        style={{
          zIndex: 10,
          paddingBottom: '14px',
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
            marginBottom: '10px',
            fontFamily: 'var(--font-sans, sans-serif)',
          }}
        >
          {pad(activeIndex + 1)} / {pad(features.length)}
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-heading, Georgia, serif)',
            fontSize: 'clamp(1.05rem, 4.5vw, 1.6rem)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: '8px',
            letterSpacing: '-0.01em',
          }}
        >
          {features[activeIndex].title}
        </h3>

        <p
          style={{
            fontSize: '13px',
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.68)',
            fontFamily: 'var(--font-sans, sans-serif)',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {features[activeIndex].description}
        </p>
      </div>

      {/* Horizontal tab strip */}
      <div
        ref={tabStripRef}
        className="relative flex"
        style={{
          zIndex: 10,
          gap: '8px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          padding: '2px 20px',
          paddingBottom: 'max(calc(env(safe-area-inset-bottom) + 14px), 18px)',
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
                minWidth: '110px',
                maxWidth: '140px',
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

      {/* Keyframes injected locally as fallback */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          to { opacity: 0; }
        }
      `}</style>
    </section>
  );
}