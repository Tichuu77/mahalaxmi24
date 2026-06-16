'use client';
import React, { useState, useRef } from 'react';

/* ── All slides: features (image) + amenities (icon) ────────── */
type Slide =
  | { kind: 'feature'; title: string; description: string; tab: string; image: string }
  | { kind: 'amenity'; title: string; description: string; tab: string; customIcon: React.ReactNode };

const slides: Slide[] = [
  {
    kind: 'feature',
    title: 'Gym',
    description:
      'A fully equipped modern fitness center featuring premium cardio machines, strength-training equipment, free weights, and dedicated workout zones to help residents maintain a healthy and active lifestyle.',
    tab: 'Gym',
    image: '/gym.jpg',
  },
  {
    kind: 'feature',
    title: 'Amphitheater',
    description:
      'An open-air amphitheater designed for community gatherings, cultural events, performances, movie nights, and celebrations, offering comfortable seating in a vibrant outdoor setting.',
    tab: 'Amphitheater',
    image: '/amphitheater.jpeg',
  },
  {
    kind: 'feature',
    title: 'Sports Turf',
    description:
      'A professionally maintained multi-purpose sports turf ideal for football, cricket, fitness activities, and recreational games, providing residents with an active and energetic environment.',
    tab: 'Turf',
    image: '/turf.jpeg',
  },
  {
    kind: 'feature',
    title: 'Open Party Lawn',
    description:
      'A beautifully landscaped open party lawn perfect for social gatherings, family functions, celebrations, and outdoor events, offering ample space amidst lush green surroundings.',
    tab: 'Party Lawn',
    image: '/open-party-lawn.jpeg',
  },
  {
    kind: 'feature',
    title: 'Zumba Room',
    description:
      'A spacious and energetic Zumba and dance studio with modern flooring, mirrors, sound systems, and ample ventilation, creating the ideal atmosphere for fitness and group workouts.',
    tab: 'Zumba Room',
    image: '/zumba-room.jpeg',
  },
  {
    kind: 'feature',
    title: 'Gazebo',
    description:
      'A charming gazebo surrounded by landscaped gardens, providing a peaceful retreat for relaxation, casual conversations, reading, or enjoying serene outdoor moments with family and friends.',
    tab: 'Gazebo',
    image: '/gazebo.jpeg',
  },
  {
    kind: 'feature',
    title: 'Banquet Hall',
    description:
      'An elegant and spacious banquet hall equipped with modern amenities, perfect for hosting weddings, birthday celebrations, corporate events, community gatherings, and special occasions.',
    tab: 'Banquet Hall',
    image: '/banquet-hall.jpeg',
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