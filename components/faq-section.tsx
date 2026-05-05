'use client';
import React, { useState } from 'react';
import { Plus, Minus, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const faqs = [
  {
    question: 'Why Should I Invest In Luxury Plots In Nagpur?',
    answer: 'Nagpur is rapidly growing with strong infrastructure and connectivity. Luxury plots in Nagpur offer flexibility for homebuyers and investors evaluating long-term land ownership, along with the option for flexible home construction in a well-connected corridor.',
  },
  {
    question: 'Is This Project Suitable For End-Use Or Only For Investment?',
    answer: 'The project is ideal for both. Homebuyers benefit from luxury amenities and connectivity, while investors benefit from planned amenities, connectivity, and early access to the enquiry phase.',
  },
  {
    question: 'Is This A Preferred Plotted Development Option In Nagpur?',
    answer: 'Yes. Due to its location and infrastructure connectivity, it is considered a preferred option among buyers exploring well-planned plotted developments in Nagpur.',
  },
  {
    question: 'How Close Are The Plots Near MIHAN?',
    answer: 'The project is strategically located, offering excellent connectivity to MIHAN, making these plots near MIHAN ideal for professionals, investors, and long-term homeowners.',
  },
];

export default function FAQContactSection() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(0);
  const [formData, setFormData]   = useState({ name: '', phone: '',  requiredLocation: '' , message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
          subject: 'New Property Inquiry - Nagpur Luxury Plots',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '',   requiredLocation: '', message: '' });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section
      className="py-20 md:py-28"
      id="faq_sec"
      style={{ background: 'linear-gradient(160deg, #f9f7f4 0%, #f0ede6 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 scroll-fade">
          <span className="section-chip mb-4 block w-fit mx-auto">Got Questions?</span>
          <h2
            className="mb-3"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--primary)' }}
          >
            Frequently Asked Questions
          </h2>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 rounded-full" style={{ background: 'rgba(48,83,74,0.2)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--secondary)' }} />
            <div className="h-px w-16 rounded-full" style={{ background: 'rgba(48,83,74,0.2)' }} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

          {/* ── Left: Accordion ── */}
          <div className="space-y-3 scroll-fade">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen ? 'var(--primary)' : '#fff',
                    border: `1px solid ${isOpen ? 'var(--primary)' : 'rgba(48,83,74,0.12)'}`,
                    boxShadow: isOpen ? '0 8px 32px rgba(48,83,74,0.18)' : 'none',
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-semibold text-base pr-4 leading-snug"
                      style={{ fontFamily: 'var(--font-heading)', color: isOpen ? '#fff' : 'var(--primary)', fontSize: '0.92rem' }}
                    >
                      {faq.question}
                    </span>
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                      style={{ background: isOpen ? 'var(--secondary)' : 'rgba(48,83,74,0.08)' }}
                    >
                      {isOpen
                        ? <Minus size={15} color="#fff" />
                        : <Plus size={15} color="var(--primary)" />
                      }
                    </div>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{ maxHeight: isOpen ? '300px' : '0' }}
                  >
                    <div
                      className="px-5 pb-5 text-sm leading-relaxed"
                      style={{ color: isOpen ? 'rgba(255,255,255,0.8)' : 'var(--muted-foreground)', fontFamily: 'var(--font-sans)' }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Right: Contact form ── */}
          <div className="scroll-fade-delay-1">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: 'var(--primary)' }}
            >
              {/* Form header */}
              <div
                className="px-8 py-7"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
              >
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-heading)', color: '#fff' }}
                >
                  GET IN TOUCH FUTURE PROJECT
                </h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-sans)' }}>
                  Property FAQs — our team will respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-4">
                <input type="hidden" name="from_name" value="Nagpur Property Website" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-heading)' }}>Name *</label>
                    <input
                      type="text" name="name" required value={formData.name} onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontFamily: 'var(--font-sans)' }}
                    />
                  </div>
                  {/* Phone */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-heading)' }}>Phone *</label>
                    <input
                      type="tel" name="phone" required minLength={10} maxLength={14}
                      value={formData.phone} onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontFamily: 'var(--font-sans)' }}
                    />
                  </div>
                
                     <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-heading)' }}>Email (Optional)</label>
                    <input
                      type="text" name="requiredlocation" value={formData.requiredLocation} onChange={handleChange}
                      placeholder="Preferred location or requirements"
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontFamily: 'var(--font-sans)' }}
                    />
                </div>
                
                </div>
             

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ color: 'var(--secondary)', fontFamily: 'var(--font-heading)' }}>Message</label>
                  <textarea
                    name="message" rows={3} value={formData.message} onChange={handleChange}
                    placeholder="Any special requirements…"
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all resize-none"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontFamily: 'var(--font-sans)' }}
                  />
                </div>

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
        </div>
      </div>
    </section>
  );
}