'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { usePopup } from './popup-context';

const navLinks = [
  { name: 'Overview', href: '#overview' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq_sec' },
];

export const otherProjects = [
  { name: 'Mahalaxmi Nagar 46', location: 'Pandhurna Umred Road', image: '/project_46.jpg',  },
  { name: 'Mahalaxmi Nagar 45', location: 'Sumthana', image: '/project_45.jpg',  },
  { name: 'Mahalaxmi Nagar 44', location: 'Tarodi', image: '/project_44.jpg',  },
  { name: 'Tattva Apas', location: 'Beltarodi', image: '/tatva-apas.webp',  },
  { name: 'Mahalaxmi Nagar 52', location: 'Dhamna', image: '/project_52.jpg',  },
  { name: 'Mahalaxmi Nagar 47', location: 'New Nanda', image: '/project_47.jpg',  },
  { name: 'Mahalaxmi Nagar 43', location: 'Shankarpur', image: '/project_43.jpg',  },
  { name: 'Mahalaxmi Nagar 42', location: 'Jamtha', image: '/project_42.webp',  },
  { name: 'Mahalaxmi Nagar 41', location: 'Gumgaon', image: '/project_41.webp',  },
  { name: 'Mahalaxmi Nagar 40', location: 'Kotiwada', image: '/project_40.webp',  },
  { name: 'Mahalaxmi Nagar 38', location: 'Mhasala', image: '/project_38.webp',  },
  { name: 'Mahalaxmi Nagar 31', location: 'Pimpla', image: '/project_31.webp',  },
  { name: 'Mahalaxmi Nagar 30', location: 'Takli', image: '/project_30.webp',  },
];

export type Project = typeof otherProjects[0];

export function ProjectPopup({ project, onClose }: { project: Project; onClose: () => void }) {
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      onClick={handleBackdrop}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        style={{
          background: 'rgba(13,42,33,0.98)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '16px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
          maxWidth: '480px',
          width: '100%',
          overflow: 'hidden',
          animation: 'slideUp 0.25s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: '220px', background: '#0a1f16' }}>
          <img
            src={project.image}
            alt={project.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }}
          />
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '20px 24px 24px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--secondary)',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {project.name}
          </h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={12} /> {project.location}
          </p>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="tel:+919327210650"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                padding: '10px 16px',
                borderRadius: '999px',
                background: 'var(--secondary)',
                color: '#fff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                textDecoration: 'none',
              }}
            >
              <Phone size={13} /> Call
            </a>
            <a
              href="https://wa.me/919327210650"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '7px',
                padding: '10px 16px',
                borderRadius: '999px',
                background: '#25D366',
                color: '#fff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                textDecoration: 'none',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
}

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* ── NAV ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(13, 42, 33, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          padding: scrolled ? '0.5rem 0' : '1.25rem 0',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.35)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="/" className="flex-shrink-0 flex items-center gap-2">
            <img src="/Malaxmi-Final-Logo.-2png.png" alt="Mahalaxmi Nagar 49 Logo" className="h-28 w-28 object-contain" />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative text-sm font-semibold uppercase tracking-widest transition-colors"
                style={{ fontFamily: 'var(--font-heading)', color: activeLink === link.name ? 'var(--secondary)' : '#fff' }}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full" style={{ background: 'var(--secondary)' }} />
                )}
              </a>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest transition-colors"
                style={{ fontFamily: 'var(--font-heading)', color: isDropdownOpen ? 'var(--secondary)' : '#fff', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                Other Projects
                <ChevronDown size={15} style={{ transition: 'transform 0.3s ease', transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: isDropdownOpen ? 'var(--secondary)' : '#fff' }} />
              </button>

              <div style={{ position: 'absolute', top: 'calc(100% + 16px)', right: 0, minWidth: '220px', background: 'rgba(13, 42, 33, 0.98)', backdropFilter: 'blur(16px)', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', maxHeight: isDropdownOpen ? '420px' : '0', opacity: isDropdownOpen ? 1 : 0, transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease', overflowY: isDropdownOpen ? 'auto' : 'hidden', pointerEvents: isDropdownOpen ? 'auto' : 'none', scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}>
                {otherProjects.map((project, idx) => (
                  <button
                    key={project.name}
                    onClick={() => { setSelectedProject(project); setIsDropdownOpen(false); }}
                    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 18px', fontSize: '0.8rem', fontFamily: 'var(--font-heading)', fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.85)', background: 'transparent', border: 'none', transition: 'background 0.18s, color 0.18s', borderBottom: idx < otherProjects.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', textTransform: 'uppercase', cursor: 'pointer' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.color = 'var(--secondary)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}
                  >
                    {project.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          <a href="tel:+919327210650" className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all hover:scale-105" style={{ background: 'var(--secondary)', color: '#fff', fontFamily: 'var(--font-heading)' }}>
            <Phone size={15} />
            +91 9327210650
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Toggle menu" style={{ color: '#fff' }}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out`} style={{ maxHeight: isMenuOpen ? '620px' : '0', background: 'rgba(13,42,33,0.97)', backdropFilter: 'blur(12px)' }}>
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => { setIsMenuOpen(false); setActiveLink(link.name); }} className="py-3 px-3 rounded-lg text-base font-semibold uppercase tracking-widest transition-colors hover:bg-white/10" style={{ fontFamily: 'var(--font-heading)', color: activeLink === link.name ? 'var(--secondary)' : '#fff' }}>
                {link.name}
              </a>
            ))}

            <div>
              <button onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)} className="w-full flex items-center justify-between py-3 px-3 rounded-lg text-base font-semibold uppercase tracking-widest transition-colors hover:bg-white/10" style={{ fontFamily: 'var(--font-heading)', color: isMobileProjectsOpen ? 'var(--secondary)' : '#fff', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                Other Projects
                <ChevronDown size={16} style={{ transition: 'transform 0.3s ease', transform: isMobileProjectsOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }} />
              </button>
              <div style={{ maxHeight: isMobileProjectsOpen ? '360px' : '0', overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)', overflowY: isMobileProjectsOpen ? 'auto' : 'hidden' }}>
                <div style={{ marginLeft: '12px', borderLeft: '2px solid var(--secondary)', paddingLeft: '12px', marginTop: '4px', marginBottom: '8px' }}>
                  {otherProjects.map((project) => (
                    <button
                      key={project.name}
                      onClick={() => { setSelectedProject(project); setIsMenuOpen(false); }}
                      style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 6px', fontSize: '0.78rem', fontFamily: 'var(--font-heading)', fontWeight: 600, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.75)', background: 'none', border: 'none', textTransform: 'uppercase', transition: 'color 0.18s', cursor: 'pointer' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--secondary)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)'; }}
                    >
                      {project.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a href="tel:+919552147036" className="mt-3 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm uppercase tracking-wide" style={{ background: 'var(--secondary)', color: '#fff', fontFamily: 'var(--font-heading)' }}>
              <Phone size={15} />
              +91 95521 47036
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-end md:items-center overflow-hidden"
        style={{ background: '#0d2a20',backgroundImage: 'url(/gallery_6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
        aria-label="Hero section"
      >
        <div className="absolute inset-0" style={{ backgroundImage: '', backgroundSize: 'cover', backgroundPosition: 'center 40%', animation: 'kenBurns 18s ease-in-out infinite alternate' }} />
        <div className="absolute inset-0" style={{ background: isMobile ? 'linear-gradient(to top, rgba(10,30,20,0.95) 0%, rgba(10,30,20,0.7) 20%, rgba(10,30,20,0.35) 100%)' : 'linear-gradient(105deg, rgba(10,30,20,0.92) 0%, rgba(10,30,20,0.75) 25%, rgba(10,30,20,0.15) 100%)' }} />
        <div className="absolute left-0 top-0 bottom-0 w-1 hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, var(--secondary), transparent)' }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-28 md:mt-20 md:py-6">
          <div className="max-w-2xl">
            <h1 className="font-bold mb-4 leading-tight" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', color: '#fff', textShadow: '0 4px 24px rgba(0,0,0,0.5)', lineHeight: 1.08 }}>
              Mahalaxmi<br />Nagar 49
            </h1>
            <p className="text-3xl font-bold mb-4" style={{ fontWeight: 'bolder', color: 'var(--background)', fontFamily: 'var(--font-heading)' }}>₹47.50 LAKH</p>
            <p className="text-lg font-semibold mb-4" style={{ color: 'var(--background)', fontFamily: 'var(--font-heading)', fontWeight: 'bolder' }}>RERA No: A51000042498</p>
            <p className="mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(1rem, 2.2vw, 1.2rem)' }}>
              Premium Residential Plots in Nagpur — crafted for those who seek exclusivity, green living, and long-term growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button onClick={() => { console.log('Enquire Now clicked'); openPopup(); }} className="btn-gold w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base uppercase tracking-widest" style={{ fontFamily: 'var(--font-heading)' }}>
                Enquire Now
              </button>
              <a href="#gallery">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base uppercase tracking-widest transition-all hover:bg-white/10" style={{ fontFamily: 'var(--font-heading)', border: '2px solid rgba(255,255,255,0.4)', color: '#fff' }}>
                  View Gallery
                </button>
              </a>
            </div>

               {/* Nearby Locations */}

          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs uppercase tracking-widest" style={{ color: '#fff', fontFamily: 'var(--font-sans)' }}>Scroll</span>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #fff, transparent)' }} />
        </div>
      </section>

      {/* ── PROJECT POPUP ── */}
      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <style jsx>{`
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
      `}</style>
    </>
  );
}