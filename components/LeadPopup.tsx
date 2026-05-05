'use client';
import React, { useEffect, useState } from 'react';
import { X, Send, CheckCircle, AlertCircle, Phone, Gift } from 'lucide-react';
import { usePopup } from './popup-context';

type FormData = { name: string; phone: string; requiredLocation: string; };
type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function LeadPopup() {
  const { isOpen, closePopup } = usePopup();
  const [autoOpen, setAutoOpen] = useState(false);
  const [visible, setVisible] = useState(false); // controls CSS transition
  const [form, setForm] = useState<FormData>({ name: '', phone: '', requiredLocation: '', });
  const [status, setStatus] = useState<Status>('idle');

  /* Show on every page load after 3 s */
useEffect(() => {
  let hasOpened = false;

  const handleScroll = () => {
    if (hasOpened) return;

    // optional: trigger after user scrolls some distance
    if (window.scrollY > 150) {
      hasOpened = true;
      setAutoOpen(true);
      setVisible(true);

      // remove listener after first trigger
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  useEffect(() => {
    console.log('LeadPopup isOpen changed:', isOpen);
    if (isOpen) {
      setVisible(true);
    } else if (!autoOpen) {
      setVisible(false);
    }
  }, [isOpen, autoOpen]);

  const close = () => {
    setVisible(false);
    setTimeout(() => {
      closePopup();
      setAutoOpen(false);
    }, 350);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '857fa585-2a03-48fb-84c8-b0ebfac11be8',
          ...form,
          subject: 'New Lead (Popup) - Mahalaxmi Nagar 49',
          from_name: 'Mahalaxmi Nagar 49 Website',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setTimeout(close, 2800);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  if (!isOpen && !autoOpen) return null;

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        onClick={close}
        style={{
          position: 'fixed', inset: 0, zIndex: 9998,
          background: 'rgba(5,18,12,0.75)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          transition: 'opacity 0.35s ease',
          opacity: visible ? 1 : 0,
        }}
      />

      {/* ── Modal card ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Get a Free Callback"
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            pointerEvents: 'all',
            width: '100%',
            maxWidth: '460px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,0.55)',
            transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(32px)',
          }}
        >
          {/* ── Top image strip ── */}
          <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
            <img
              src="/gallery_1.jpg"
              alt="Mahalaxmi Nagar 49 Garden"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }}
            />
            {/* gradient over image */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(8,24,16,0.35) 0%, rgba(8,24,16,0.72) 100%)',
            }} />

            {/* Badge */}
            <div style={{
              position: 'absolute', top: '14px', left: '16px',
              display: 'flex', alignItems: 'center', gap: '6px',
              background: 'var(--secondary, #C9862b)',
              borderRadius: '999px',
              padding: '4px 12px',
            }}>
              <Gift size={13} color="#fff" />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', color: '#fff', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Free Site Visit
              </span>
            </div>

            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close"
              style={{
                position: 'absolute', top: '12px', right: '12px',
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(6px)',
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
            >
              <X size={16} color="#fff" />
            </button>

            {/* Headline on image */}
            <div style={{ position: 'absolute', bottom: '14px', left: '16px', right: '16px' }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)', color: '#fff',
                fontSize: 'clamp(1.1rem, 3.5vw, 1.35rem)', fontWeight: 700,
                lineHeight: 1.2, margin: 0,
                textShadow: '0 2px 12px rgba(0,0,0,0.5)',
              }}>
                Mahalaxmi Nagar 49
                <span style={{ display: 'block', color: 'var(--secondary, #C9862b)', fontSize: '0.75em', marginTop: '2px' }}>
                  Get a Free Callback from Our Experts
                </span>
              </h2>
            </div>
          </div>

          {/* ── Form body ── */}
          <div style={{ background: 'var(--primary, #30534A)', padding: '22px 24px 24px' }}>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle size={44} color="#4ade80" style={{ margin: '0 auto 12px' }} />
                <p style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.1rem', fontWeight: 700, margin: '0 0 6px' }}>
                  Thank you!
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', margin: 0 }}>
                  Our team will call you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p style={{ fontFamily: 'var(--font-sans)', color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', margin: '0 0 16px', lineHeight: 1.5 }}>
                  Fill in your details — we'll get back to you within 24 hours.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                  {/* Name */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text" name="name" required
                      value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--secondary, #C9862b)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input
                      type="tel" name="phone" required minLength={10} maxLength={14}
                      value={form.phone} onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--secondary, #C9862b)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                    />
                  </div>

                  {/* Required Location */}
                  <div>
                    <label style={labelStyle}>Preferred Location</label>
                    <input
                      type="text" name="requiredLocation"
                      value={form.requiredLocation} onChange={handleChange}
                      placeholder="e.g. Near Airport, Near IT Park"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'var(--secondary, #C9862b)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
                    />
                  </div>


                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    width: '100%', padding: '13px',
                    borderRadius: '12px', border: 'none', cursor: 'pointer',
                    background: 'var(--secondary, #C9862b)',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)', fontSize: '0.82rem',
                    fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    opacity: status === 'submitting' ? 0.6 : 1,
                    transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 20px rgba(201,134,43,0.35)',
                    marginBottom: '8px',
                  }}
                  onMouseEnter={e => {
                    if (status !== 'submitting') {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 28px rgba(201,134,43,0.5)';
                    }
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(201,134,43,0.35)';
                  }}
                >
                  {status === 'submitting' ? 'Sending…' : 'Request Free Callback'}
                  {status !== 'submitting' && <Send size={14} />}
                </button>

                {status === 'error' && (
                  <p style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f87171', fontSize: '0.8rem', fontFamily: 'var(--font-sans)', margin: 0 }}>
                    <AlertCircle size={14} /> Submission failed. Please try again.
                  </p>
                )}

                {/* Phone CTA */}
                <a
                  href="tel:+919552147036"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'var(--font-sans)', fontSize: '0.78rem',
                    textDecoration: 'none', marginTop: '10px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)')}
                >
                  <Phone size={13} /> Or call us directly: +91 95521 47036
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-heading)',
  fontSize: '0.7rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--secondary, #C9862b)',
  marginBottom: '5px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '10px',
  border: '1px solid rgba(255,255,255,0.15)',
  background: 'rgba(255,255,255,0.08)',
  color: '#fff',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.85rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};
