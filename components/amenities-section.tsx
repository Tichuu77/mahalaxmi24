'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
 
} from 'lucide-react';

/* ── Image Showcase ────────────────────────────────────────── */
const showcaseImages = [
  { src: '/gallery_2.jpg', label: 'Central Amenity Park' },
  { src: '/gallery_5.jpg', label: "Children's Play Area" },
  { src: '/gallery_1.jpg', label: 'Garden Seating Lounge' },
  { src: '/gallery_3.jpg', label: 'Landscape & Green Spaces' },
  { src: '/gallery_4.jpg', label: 'Master Layout Plan' },
];

/* ── Amenities with clear, understandable icons ─────────────── */
const amenities = [
  {
    title: 'Internal Cement Concrete Road',
    desc: 'A paved road within the premises connecting all major parts.',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <polygon stroke="#C9862b" strokeWidth="1.5" strokeLinejoin="round" fill="#C9862b" fillOpacity="0.08" points="10,44 20,12 36,12 46,44"/>
        <line x1="28" y1="12" x2="28" y2="44" stroke="#C9862b" strokeWidth="1.5"/>
        <line x1="28" y1="15" x2="28" y2="20" stroke="#C9862b" strokeWidth="1.5" strokeDasharray="2,3"/>
        <line x1="28" y1="24" x2="28" y2="29" stroke="#C9862b" strokeWidth="1.5" strokeDasharray="2,3"/>
        <line x1="28" y1="33" x2="28" y2="38" stroke="#C9862b" strokeWidth="1.5" strokeDasharray="2,3"/>
      </svg>
    ),
  },
  {
    title: 'Sewage Line',
    desc: 'Underground waste disposal system in layout.',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
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
    title: 'Electric Network With Transformer',
    desc: 'Electricity distribution infrastructure for plots and amenities.',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
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
    title: 'Kids Park',
    desc: 'A playground for children in layout.',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
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
    title: 'Garden',
    desc: 'Landscaped green space with plantation for better experience.',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
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
    title: 'Storm Water Drainage',
    desc: 'Efficient stormwater management system across the entire layout.',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
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
    title: 'Open Space Public Utility',
    desc: 'An open-use area available to all the residents in the layout.',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
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
    title: 'Sewage Treatment Plant',
    desc: 'A dedicated sewage treatment plant for effective wastewater management.',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
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
    title: 'Open Space Compound Wall',
    desc: 'Fenced open area boundary to the space provided.',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
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
    title: 'Meditation Centre',
    desc: 'Dedicated space for contemplation and relaxation.',
    customIcon: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
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

/* ── Component ─────────────────────────────────────────────── */
export default function LuxuryAmenities() {
  const [activeImg, setActiveImg] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveImg((p) => (p + 1) % showcaseImages.length);
    }, 4000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const go = (dir: 'prev' | 'next') => {
    setActiveImg((p) =>
      dir === 'prev'
        ? (p === 0 ? showcaseImages.length - 1 : p - 1)
        : (p + 1) % showcaseImages.length
    );
    resetTimer();
  };

  return (
    <section
      id="amenities"
      className="py-20 md:py-28"
      style={{ background: '#f9f7f4' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 scroll-fade">
          <div>
            <span className="section-chip mb-3 block w-fit">World-Class Amenities</span>
            <h2
              className="leading-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                color: 'var(--primary)',
              }}
            >
              Amenities that Enhance Your{' '}
              <span style={{ color: 'var(--secondary)', fontStyle: 'italic' }}>
                Lifestyle
              </span>
            </h2>
          </div>
        </div>

        {/* Showcase */}
        <div className="relative rounded-3xl overflow-hidden mb-14 scroll-fade" style={{ height: 'clamp(240px, 50vw, 480px)' }}>
          {showcaseImages.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                opacity: i === activeImg ? 1 : 0,
                zIndex: i === activeImg ? 1 : 0,
              }}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
            </div>
          ))}

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 50%, rgba(8,24,16,0.75) 100%)',
            }}
          />

          {/* Label */}
          <div className="absolute bottom-5 left-6 z-10" key={activeImg}>
            <span
              className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                background: 'var(--secondary)',
                color: '#fff',
              }}
            >
              {showcaseImages[activeImg].label}
            </span>
          </div>

          {/* Dots */}
          <div className="absolute bottom-5 right-5 flex gap-2 z-10">
            {showcaseImages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveImg(i);
                  resetTimer();
                }}
                className="rounded-full transition-all"
                style={{
                  width: i === activeImg ? '24px' : '8px',
                  height: '8px',
                  background: i === activeImg
                    ? 'var(--secondary)'
                    : 'rgba(255,255,255,0.5)',
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <button onClick={() => go('prev')} className="nav-btn left-4">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => go('next')} className="nav-btn right-4">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {amenities.map((amenity, index) => (
            <AmenityRow key={index} amenity={amenity} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── Row ───────────────────────────────────────────── */
function AmenityRow({
  amenity,
}: {
  amenity: { title: string; desc: string; customIcon: React.ReactNode };
}) {
  return (
    <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border transition-all hover:shadow-lg hover:-translate-y-0.5">
      <div className=" w-20 h-20 flex items-center justify-center rounded-xl bg-[#30534A]/10">
        {amenity.customIcon}
      </div>
      <div>
        <h3 className="font-bold text-sm text-[var(--primary)] mb-1">{amenity.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{amenity.desc}</p>
      </div>
    </div>
  );
}