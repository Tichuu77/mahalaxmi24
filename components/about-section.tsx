'use client';
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, Shield, Leaf, Banknote, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { otherProjects, Project, ProjectPopup } from './hero-section';

const highlights = [
  {
    icon: Shield,
    title: 'Premium Security',
    desc: 'Gated community with elegant perimeter fencing and 24/7 surveillance.',
  },
  {
    icon: Leaf,
    title: 'Green Living',
    desc: 'Lush plantations and meticulously curated landscapes for a serene lifestyle.',
  },
  {
    icon: Banknote,
    title: 'Peace of Mind',
    desc: 'Full RL compliance with up to 80% funding from top-tier nationalized banks.',
  },
];

export default function AboutSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', phone: '', requiredLocation: '',  message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllPills, setShowAllPills] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const PILLS_INITIAL = 4;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '857fa585-2a03-48fb-84c8-b0ebfac11be8',
          ...formData,
          subject: 'New Property Inquiry - Mahalaxmi Nagar 49',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', requiredLocation: '',   message: '' });
        router.push('/thank-you');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="overview"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f9f7f4 0%, #f0ede6 100%)' }}
    >
      {/* Decorative circle */}
      <div
        className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── LEFT: Editorial content (reordered) ── */}
          <div className="scroll-fade">
            {/* Nearby Locations - FIRST */}
            <div className="mb-10">
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                Nearby Connectivity & Landmarks
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['D-MART','SAMRUDHI CIRCLE','ORANGE CITY LOGISTIC PARK','ERA INTERNATIONAL SCHOOL SUMTHANA','AIIMS', 'IIM', 'METRO STATION NCI',].map((place) => (
                  <span
                    key={place}
                    className="flex items-center gap-1.5"
                    style={{
                      padding: '6px 14px',
                      borderRadius: '999px',
                      border: '1px solid var(--secondary)',
                      background: 'rgba(201, 134, 43, 0.08)',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <MapPin size={12} style={{ color: 'var(--secondary)' }} className="flex-shrink-0" />
                    {place}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Overview - SECOND */}
            <span className="section-chip mb-5 block w-fit">Project Overview</span>

            <h2
              className="heading-underline mb-8 leading-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: 'var(--primary)',
              }}
            >
              Where Luxury Meets Growth.
            </h2>

            <p
              className="mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)', color: '#4a5568', fontSize: '1.05rem' }}
            >
              Experience the pinnacle of urban planning at Mahalaxmi Nagar 49. This isn't just
              a layout — it's a canvas for your dreams. Designed for those who seek exclusivity,
              our NIT / NMRDA sanctioned plots offer unmatched value and lifestyle.
            </p>

            {/* Feature rows */}
            <div className="space-y-5">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-2xl transition-all hover:shadow-md"
                  style={{ background: 'rgba(48,83,74,0.06)', border: '1px solid rgba(48,83,74,0.1)' }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--primary)' }}
                  >
                    <Icon size={20} color="var(--secondary)" />
                  </div>
                  <div>
                    <p
                      className="font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', color: 'var(--primary)' }}
                    >
                      {title}
                    </p>
                    <p style={{ fontFamily: 'var(--font-sans)', color: '#667', fontSize: '0.92rem' }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
         

          {/* ── RIGHT: Glassmorphism inquiry form - THIRD ── */}
          <div className="scroll-fade-delay-1">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: 'var(--primary)' }}
            >
              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-20"
                style={{ background: 'var(--secondary)' }}
              />

              <div className="relative p-8 md:p-10">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-heading)', color: '#fff' }}
                >
                  Book a Site Visit
                </h3>
                <p className="text-sm mb-7" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-sans)' }}>
                  Fill the form — our team will call you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="from_name" value="Mahalaxmi Nagar 43 Website" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-heading)' }}>Name *</label>
                      <input
                        type="text" name="name" required value={formData.name} onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all"
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontFamily: 'var(--font-sans)', '--tw-ring-color': 'var(--secondary)' } as React.CSSProperties}
                      />
                    </div>
                    {/* Phone */}
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-heading)' }}>Phone *</label>
                      <input
                        type="tel" name="phone" required minLength={10} maxLength={14}
                        value={formData.phone} onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all"
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontFamily: 'var(--font-sans)' }}
                      />
                    </div>
                     
                    {/* Preferred Location/Requirements */}
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-heading)' }}>Preferred Location/Requirements</label>
                      <input
                        type="text" name="requiredLocation" value={formData.requiredLocation} onChange={handleChange}
                        placeholder="Preferred location or requirements"
                        className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all"
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontFamily: 'var(--font-sans)' }}
                      />
                    </div>
                   
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-heading)' }}>Message</label>
                    <textarea
                      name="message" rows={3} value={formData.message} onChange={handleChange}
                      placeholder="Any special requirements…"
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 transition-all resize-none"
                      style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontFamily: 'var(--font-sans)' }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {isSubmitting ? 'Submitting…' : submitStatus === 'success' ? 'Submitted!' : 'Submit Inquiry'}
                    <Send size={15} />
                  </button>

                  {submitStatus === 'success' && (
                    <p className="flex items-center gap-2 text-green-400 text-sm font-medium">
                      <CheckCircle size={16} /> Thank you! We'll contact you soon.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="flex items-center gap-2 text-red-400 text-sm font-medium">
                      <AlertCircle size={16} /> Failed. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* ── OTHER PROJECTS PILLS ── */}
            <div className="mt-6 p-6 rounded-2xl shadow-xl" style={{ background: 'var(--primary)' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: '#FFD700', textTransform: 'uppercase', marginBottom: '12px' }}>
                Other Projects
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {((isMobile && !showAllPills) ? otherProjects.slice(0, PILLS_INITIAL) : otherProjects).map((project) => (
                  <button
                    key={project.name}
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    style={{
                      padding: '5px 13px',
                      borderRadius: '999px',
                      border: '1px solid #FFD700',
                      background: 'transparent',
                      color: 'rgba(255,255,255,0.75)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'background 0.18s, border-color 0.18s, color 0.18s',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.background = 'transparent';
                      el.style.borderColor = '#FFEB3B';
                      el.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = 'transparent';
                      el.style.borderColor = '#FFD700';
                      el.style.color = 'rgba(255,255,255,0.75)';
                    }}
                  >
                    {project.name}
                  </button>
                ))}

                {isMobile && (
                  <button
                    type="button"
                    onClick={() => setShowAllPills(!showAllPills)}
                    style={{
                      padding: '5px 13px',
                      borderRadius: '999px',
                      border: '1px solid var(--secondary)',
                      background: 'rgba(255,255,255,0.06)',
                      color: 'var(--secondary)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'background 0.18s',
                    }}
                  >
                    {showAllPills ? '− Less' : `+ ${otherProjects.length - PILLS_INITIAL} More`}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROJECT POPUP ── */}
      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}