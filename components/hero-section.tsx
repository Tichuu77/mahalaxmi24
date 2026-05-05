'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { usePopup } from './popup-context';

const navLinks = [
  { name: 'Overview', href: '#overview' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq_sec' },
];

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { openPopup } = usePopup();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <header
        className="fixed  top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(13, 42, 33, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          padding: scrolled ? '0.5rem 0' : '1.25rem 0',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.35)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/Malaxmi-Final-Logo.-2png.png"
              alt="Mahalaxmi Nagar 49 Logo"
              className="h-28 w-28 object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative text-sm font-semibold uppercase tracking-widest transition-colors"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: activeLink === link.name ? 'var(--secondary)' : '#fff',
                }}
              >
                {link.name}
                {activeLink === link.name && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: 'var(--secondary)' }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:+919327210650"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all hover:scale-105"
            style={{ background: 'var(--secondary)', color: '#fff', fontFamily: 'var(--font-heading)' }}
          >
            <Phone size={15} />
            +91 9327210650
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            style={{ color: '#fff' }}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out`}
          style={{
            maxHeight: isMenuOpen ? '420px' : '0',
            background: 'rgba(13,42,33,0.97)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => { setIsMenuOpen(false); setActiveLink(link.name); }}
                className="py-3 px-3 rounded-lg text-base font-semibold uppercase tracking-widest transition-colors hover:bg-white/10"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: activeLink === link.name ? 'var(--secondary)' : '#fff',
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919552147036"
              className="mt-3 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm uppercase tracking-wide"
              style={{ background: 'var(--secondary)', color: '#fff', fontFamily: 'var(--font-heading)' }}
            >
              <Phone size={15} />
              +91 95521 47036
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative  min-h-screen flex items-end md:items-center overflow-hidden"
        style={{ background: '#4b3838' }}
        aria-label="Hero section"
      >
        {/* Background image with Ken Burns */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/BANNER-2.jpg.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            animation: 'kenBurns 18s ease-in-out infinite alternate',
          }}
        />

        {/* Multi-layer gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: isMobile
              ? 'linear-gradient(to top, rgba(12, 20, 16, 0.95) 0%, rgba(10,30,20,0.7) 50%, rgba(10,30,20,0.35) 100%)'
              : 'linear-gradient(105deg, rgba(10,30,20,0.92) 0%, rgba(10,30,20,0.75) 45%, rgba(10,30,20,0.15) 100%)',
          }}
        />

        {/* Decorative vertical line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 hidden md:block"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--secondary), transparent)' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-28 md:mt-20 md:py-6">
          <div className="max-w-2xl">


            {/* H1 */}
            <h1
              className="font-bold mb-4 leading-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                color: '#fff',
                textShadow: '0 4px 24px rgba(0,0,0,0.5)',
                lineHeight: 1.08,
              }}
            >
              Mahalaxmi<br />
              <span style={{ color: 'var(--secondary)' }}>Nagar 49</span>
            </h1>

             {/* Price */}
            <p
              className="text-3xl font-bold mb-4"
              style={{
                color: 'var(--secondary)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              ₹32.5 LAKH
            </p>

             {/* RERA No */}
            <p
              className="text-lg font-semibold mb-4"
              style={{
                color: 'var(--secondary)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              RERA No:  A51000042498
            </p>

            {/* Subheading */}
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'rgba(255,255,255,0.82)',
                fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
              }}
            >
              Premium Residential Plots in Nagpur — crafted for those who seek exclusivity,
              green living, and long-term growth.
            </p>

            {/* Location */}
            <div className="mb-3 flex items-between gap-4">
              
              <div className="mb-3 leading-relaxed">
                <div className='flex gap-3'>
                  <MapPin size={30} style={{ color: 'var(--secondary)' }} />
                   <p className="mb-2 leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255,255,255,0.82)',
                    fontSize: 'clamp(1rem, 1.2vw, 1rem)',
                  }}>AIRPORT-3MIN</p>
                </div>
                
                <div className='flex gap-3'>
                    <MapPin size={30} style={{ color: 'var(--secondary)' }} />
                      <p className="mb-2 leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255,255,255,0.82)',
                    fontSize: 'clamp(1rem, 1.2vw, 1rem)',
                  }}>BELTARODI D-MART -3MIN</p>
                </div>
            
                <div className='flex gap-3'>
                    <MapPin size={30} style={{ color: 'var(--secondary)' }} />
                     <p className="mb-2 leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255,255,255,0.82)',
                    fontSize: 'clamp(1rem, 1.2vw, 1rem)',
                  }}>WARDHA ROAD-3MIN</p>
                </div>
             
                <div className='flex gap-3'>
                    <MapPin size={30} style={{ color: 'var(--secondary)' }} />
                     <p className="mb-2 leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255,255,255,0.82)',
                    fontSize: 'clamp(1rem, 1.2vw, 1rem)',
                  }}>GOVERMENT ENGINEERING COLLAGE-3MIN</p>
                </div>

                <div className='flex gap-3'>
                    <MapPin size={30} style={{ color: 'var(--secondary)' }} />
                     <p className="mb-2 leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'rgba(255,255,255,0.82)',
                    fontSize: 'clamp(1rem, 1.2vw, 1rem)',
                  }}>NEW MANISH NAGAR-4MIN</p>
                </div>
                
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                onClick={() => {
                  console.log('Enquire Now clicked');
                  openPopup();
                }}
                className="btn-gold w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Enquire Now
              </button>
              <a href="#gallery">
                <button
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base uppercase tracking-widest transition-all hover:bg-white/10"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    border: '2px solid rgba(255,255,255,0.4)',
                    color: '#fff',
                  }}
                >
                  View Gallery
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 ">
              {[
                { value: '70+', label: 'Projects' },
                { value: '17000+', label: 'Happy Clients' },
                { value: 'RERA', label: 'Approved' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl px-5 py-4 min-w-[110px] text-center"
                >
                  <div
                    className="font-bold leading-none mb-1"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', color: 'var(--secondary)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-sans)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: '#fff', fontFamily: 'var(--font-sans)' }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, #fff, transparent)' }}
          />
        </div>
      </section>

      <style jsx>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
      `}</style>
    </>
  );
}