'use client';
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Amit Deshmukh',
    role: 'IT Professional, Nagpur',
    rating: 5,
    text: 'I was looking for luxury plots in Nagpur with strong long-term value potential, and this project matched my expectations well. The location, waterfront concept, and amenities make it a premium plotted development in Nagpur for long-term investment.',
    initial: 'A',
  },
  {
    id: 2,
    name: 'Neha Kulkarni',
    role: 'Business Owner',
    rating: 5,
    text: 'What stood out for me was the planning and the brand trust. Investing here feels secure and future-ready. For anyone exploring premium plots in Nagpur with lifestyle value, this project is worth considering.',
    initial: 'N',
  },
  {
    id: 3,
    name: 'Rahul Patil',
    role: 'NRI Investor',
    rating: 5,
    text: 'I was looking for a well-planned real estate option in Nagpur, and this project covers all the key factors — location, connectivity, and luxury. It\'s rare to find such exclusive plotted developments in Nagpur at a pre-market stage.',
    initial: 'R',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="var(--secondary)" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'var(--primary)' }}
    >
      {/* Giant decorative quote */}
      <div
        className="absolute -top-8 -left-6 pointer-events-none select-none"
        style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(12rem, 25vw, 22rem)', color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}
      >
        "
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 scroll-fade">
          <div>
            <span className="section-chip section-chip-white mb-3 block w-fit">Testimonials</span>
            <h2
              className="leading-tight"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff' }}
            >
              Trusted by
              <span style={{ color: 'var(--secondary)' }}> 17,000+ </span>
              Happy Clients
            </h2>
          </div>

          {/* Desktop arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'var(--secondary)' }}
              aria-label="Next"
            >
              <ChevronRight size={20} color="#fff" />
            </button>
          </div>
        </div>

        {/* Cards — snap scroll on all screens */}
        <div
          ref={scrollRef}
          className="mobile-snap-scroll"
          style={{ gap: '1.25rem' }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative rounded-2xl p-7 flex-shrink-0"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(8px)',
                width: 'clamp(300px, 80vw, 360px)',
              }}
            >
              {/* Quote icon */}
              <div
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-50"
                style={{ background: 'var(--secondary)' }}
              >
                <Quote size={16} color="#fff" />
              </div>

              {/* Avatar + name */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                  style={{ background: 'var(--secondary)', color: '#fff', fontFamily: 'var(--font-heading)' }}
                >
                  {t.initial}
                </div>
                <div>
                  <p
                    className="font-bold text-base"
                    style={{ fontFamily: 'var(--font-heading)', color: '#fff' }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'var(--secondary)', fontFamily: 'var(--font-sans)' }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Review */}
              <p
                className="mt-4 leading-relaxed text-sm"
                style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-sans)' }}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#faq_sec">
            <button
              className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-xl"
              style={{ background: 'var(--secondary)', color: '#fff', fontFamily: 'var(--font-heading)' }}
            >
              Book a Site Visit
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}