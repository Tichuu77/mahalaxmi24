'use client';
import React, { useState, useRef } from 'react';

/* ── All slides: features (image) + amenities (icon) ────────── */
type Slide =
  | { kind: 'feature'; title: string; description: string; tab: string; image: string }
  | { kind: 'amenity'; title: string; description: string; tab: string; customIcon: React.ReactNode };

const slides: Slide[] = [
  /* ── Features ── */
  {
    kind: 'feature',
    title: 'Kids Play Area',
    description:
      'A vibrant, safe play zone designed for children of all ages — featuring colorful slides, swings, climbing frames, and soft-surface flooring surrounded by shaded seating for parents.',
    tab: 'Kids Play Area',
    image: '/aminity1.jpeg',
  },
  {
    kind: 'feature',
    title: 'Pool',
    description:
      'A resort-style swimming pool with dedicated lanes, a shallow wading section for kids, and a sun deck with loungers — perfect for relaxation and recreation year-round.',
    tab: 'Pool',
    image: '/aminity2.jpeg',
  },
  {
    kind: 'feature',
    title: 'Basketball Court',
    description:
      'A full-sized, professionally marked basketball court with high-quality flooring and floodlights — ideal for evening matches, fitness drills, and friendly neighbourhood tournaments.',
    tab: 'Basketball Court',
    image: '/aminity3.jpeg',
  },
  {
    kind: 'feature',
    title: 'Badminton Court',
    description:
      'A covered, well-lit badminton court built to standard dimensions — offering residents a premium space for daily fitness, casual rallies, and competitive community play.',
    tab: 'Badminton Court',
    image: '/aminity4.jpeg',
  },
  {
    kind: 'feature',
    title: 'Meditation Area',
    description:
      'A serene, dedicated meditation corner nestled amid lush greenery — designed with calming landscaping, natural stone seating, and peaceful water features.',
    tab: 'Meditation Area',
    image: '/aminity5.jpeg',
  },
  {
    kind: 'feature',
    title: 'Yoga Park',
    description:
      'An open-air yoga park with a smooth, spacious deck, morning sunlight, and a tranquil green backdrop — providing the perfect environment for daily practice.',
    tab: 'Yoga Park',
    image: '/aminity6.jpeg',
  },

  /* ── Amenities ── */
  {
    kind: 'amenity',
    title: 'Internal Cement Concrete Road',
    description: 'A paved road within the premises connecting all major parts.',
    tab: 'CC Road',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <polygon stroke="#C9862b" strokeWidth="1.5" strokeLinejoin="round" fill="#C9862b" fillOpacity="0.08" points="10,44 20,12 36,12 46,44"/>
        <line x1="28" y1="12" x2="28" y2="44" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="28" y1="15" x2="28" y2="20" stroke="#C9862b" strokeWidth="1.5" strokeDasharray="2,3"/>
        <line x1="28" y1="24" x2="28" y2="29" stroke="#C9862b" strokeWidth="1.5" strokeDasharray="2,3"/>
        <line x1="28" y1="33" x2="28" y2="38" stroke="#C9862b" strokeWidth="1.5" strokeDasharray="2,3"/>
      </svg>
    ),
  },
  {
    kind: 'amenity',
    title: 'Sewage Line',
    description: 'Underground waste disposal system in layout.',
    tab: 'Sewage Line',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <line x1="4" y1="22" x2="52" y2="22" stroke="#C9862b" strokeWidth="1.5" strokeDasharray="3,2"/>
        <rect x="6" y="28" width="44" height="10" rx="5" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="14" y1="33" x2="24" y2="33" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <polyline points="21,30 24,33 21,36" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="30" y1="33" x2="40" y2="33" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <polyline points="37,30 40,33 37,36" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <ellipse cx="28" cy="22" rx="6" ry="2.5" stroke="#C9862b" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    kind: 'amenity',
    title: 'Electric Network With Transformer',
    description: 'Electricity distribution infrastructure for plots and amenities.',
    tab: 'Electric',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <line x1="28" y1="8" x2="28" y2="46" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="16" x2="42" y2="16" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14,16 Q8,22 4,22" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M42,16 Q48,22 52,22" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="22" y="26" width="12" height="10" rx="2" stroke="#C9862b" strokeWidth="1.5"/>
        <polygon points="29,27.5 26.5,31.5 29,31.5 27,35.5 30.5,30 28,30" fill="#C9862b"/>
      </svg>
    ),
  },
  {
    kind: 'amenity',
    title: 'Kids Park',
    description: 'A playground for children in layout.',
    tab: 'Kids Park',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <line x1="12" y1="10" x2="12" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="10" x2="30" y2="10" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M30,10 L44,40" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="44" x2="52" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="36" y1="6" x2="50" y2="6" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="38" y1="6" x2="38" y2="22" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="48" y1="6" x2="48" y2="22" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M35,22 Q43,26 51,22" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="30" cy="14" r="3" stroke="#C9862b" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    kind: 'amenity',
    title: 'Garden',
    description: 'Landscaped green space with plantation for better experience.',
    tab: 'Garden',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="18" cy="20" r="10" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="18" y1="30" x2="18" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="38" cy="26" r="7" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="38" y1="33" x2="38" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="44" x2="52" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="30" cy="41" r="2" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="30" y1="43" x2="30" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    kind: 'amenity',
    title: 'Storm Water Drainage',
    description: 'Efficient stormwater management system across the entire layout.',
    tab: 'Drainage',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <path d="M12,26 Q12,16 20,16 Q22,10 30,12 Q38,12 38,20 Q42,20 42,26 Q42,30 38,30 L12,30 Q8,30 8,26 Q8,22 12,26Z" stroke="#C9862b" strokeWidth="1.5" strokeLinejoin="round"/>
        <line x1="16" y1="33" x2="14" y2="39" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="25" y1="33" x2="23" y2="39" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="34" y1="33" x2="32" y2="39" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="14" y="40" width="22" height="6" rx="1" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="19" y1="40" x2="19" y2="46" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="25" y1="40" x2="25" y2="46" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="31" y1="40" x2="31" y2="46" stroke="#C9862b" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    kind: 'amenity',
    title: 'Open Space Public Utility',
    description: 'An open-use area available to all the residents in the layout.',
    tab: 'Public Utility',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="8" y="30" width="40" height="4" rx="2" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="14" y1="34" x2="14" y2="42" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="42" y1="34" x2="42" y2="42" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="8" y="22" width="40" height="4" rx="2" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="14" y1="22" x2="14" y2="30" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="42" y1="22" x2="42" y2="30" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="16" r="3" stroke="#C9862b" strokeWidth="1.5"/>
        <circle cx="28" cy="16" r="3" stroke="#C9862b" strokeWidth="1.5"/>
        <circle cx="38" cy="16" r="3" stroke="#C9862b" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    kind: 'amenity',
    title: 'Sewage Treatment Plant',
    description: 'A dedicated sewage treatment plant for effective wastewater management.',
    tab: 'STP',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="4" y="20" width="18" height="22" rx="3" stroke="#C9862b" strokeWidth="1.5"/>
        <rect x="34" y="20" width="18" height="22" rx="3" stroke="#C9862b" strokeWidth="1.5"/>
        <path d="M6,28 Q9,25 13,28 Q17,31 20,28" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M36,30 Q39,28 43,30 Q47,32 50,30" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="22" y1="31" x2="34" y2="31" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <polyline points="30,28 34,31 30,34" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polygon points="24,16 32,16 30,20 26,20" stroke="#C9862b" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M13,20 L13,14 L4,14" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M43,42 L43,48 L52,48" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    kind: 'amenity',
    title: 'Open Space Compound Wall',
    description: 'Fenced open area boundary to the space provided.',
    tab: 'Compound Wall',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="4" y="36" width="48" height="8" rx="2" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="28" y1="36" x2="28" y2="44" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="16" y1="36" x2="16" y2="44" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="40" y1="36" x2="40" y2="44" stroke="#C9862b" strokeWidth="1.5"/>
        <rect x="4" y="14" width="8" height="22" rx="1" stroke="#C9862b" strokeWidth="1.5"/>
        <rect x="24" y="14" width="8" height="22" rx="1" stroke="#C9862b" strokeWidth="1.5"/>
        <rect x="44" y="14" width="8" height="22" rx="1" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="12" y1="20" x2="24" y2="20" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="28" x2="24" y2="28" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="32" y1="20" x2="44" y2="20" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="32" y1="28" x2="44" y2="28" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="3" y1="14" x2="13" y2="14" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="23" y1="14" x2="33" y2="14" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="43" y1="14" x2="53" y2="14" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    kind: 'amenity',
    title: 'Meditation Centre',
    description: 'Dedicated space for contemplation and relaxation.',
    tab: 'Meditation',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="28" cy="10" r="4" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="28" y1="14" x2="28" y2="26" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M28,19 Q20,22 16,26" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M28,19 Q36,22 40,26" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M28,26 Q18,28 16,26 Q12,32 18,36" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M28,26 Q38,28 40,26 Q44,32 38,36" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16,36 Q28,40 40,36" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="28" cy="24" r="16" stroke="#C9862b" strokeWidth="0.8" strokeDasharray="2,3"/>
      </svg>
    ),
  },
];

function pad(n: number) {
  return String(n).padStart(2, '0');
}

/* ── Component ─────────────────────────────────────────────── */
export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const tabStripRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const active = slides[activeIndex];

  const goTo = (index: number) => {
    if (index === activeIndex || isAnimating.current) return;
    if (index < 0 || index >= slides.length) return;
    isAnimating.current = true;
    setActiveIndex(index);
    setAnimKey((k) => k + 1);
    // scroll the tab into view
    setTimeout(() => {
      const strip = tabStripRef.current;
      if (strip) {
        const btn = strip.children[index] as HTMLElement;
        if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
      isAnimating.current = false;
    }, 100);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goTo(activeIndex + 1);
      else goTo(activeIndex - 1);
    }
  };

  return (
    <section
      id="amenities"
      className="relative flex flex-col overflow-hidden"
      style={{ background: '#0d1a14', height: '100dvh' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* ── VISUAL BLOCK (top 52%) ── */}
      <div style={{ position: 'relative', width: '100%', flex: '0 0 52%', overflow: 'hidden' }}>

        {/* Feature slides — image */}
        {slides.map((slide, i) =>
          slide.kind === 'feature' ? (
            <div
              key={i}
              aria-hidden={i !== activeIndex}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: i === activeIndex ? 1 : 0,
                transition: 'opacity 0.65s ease',
              }}
            />
          ) : null
        )}

        {/* Amenity slides — dark panel with large icon */}
        {slides.map((slide, i) =>
          slide.kind === 'amenity' ? (
            <div
              key={i}
              aria-hidden={i !== activeIndex}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: i === activeIndex ? 1 : 0,
                transition: 'opacity 0.65s ease',
                background: 'radial-gradient(ellipse at center, rgba(201,134,43,0.10) 0%, transparent 70%)',
              }}
            >
              {/* Large centered icon */}
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '28px',
                  background: 'rgba(201,134,43,0.10)',
                  border: '1px solid rgba(201,134,43,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div style={{ transform: 'scale(2.2)', transformOrigin: 'center' }}>
                  {slide.customIcon}
                </div>
              </div>
            </div>
          ) : null
        )}

        {/* Top bar */}
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
            {active.kind === 'feature' ? 'Modern Amenities' : 'World-Class Amenities'}
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
            / {pad(slides.length)}
          </span>
        </div>

        {/* Bottom fade */}
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

        {/* Animated content card */}
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
            {pad(activeIndex + 1)} / {pad(slides.length)}
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
            {active.title}
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
            {active.description}
          </p>
        </div>

        <div style={{ flex: 1 }} />

        {/* Tab strip — all slides */}
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
          {slides.map((slide, i) => {
            const isActive = i === activeIndex;
            const isAmenity = slide.kind === 'amenity';
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  flexShrink: 0,
                  minWidth: '90px',
                  maxWidth: '130px',
                  background: isActive
                    ? 'var(--secondary, #C9862B)'
                    : isAmenity
                    ? 'rgba(201,134,43,0.07)'
                    : 'rgba(255,255,255,0.07)',
                  border: `1px solid ${
                    isActive
                      ? 'var(--secondary, #C9862B)'
                      : isAmenity
                      ? 'rgba(201,134,43,0.18)'
                      : 'rgba(255,255,255,0.1)'
                  }`,
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
                  {slide.tab}
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