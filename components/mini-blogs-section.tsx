'use client';
import React, { useState } from 'react';
import {
  ShieldCheck, Search, TrendingUp, AlertTriangle, HelpCircle,
  ChevronDown, ChevronUp, MapPin, Plane, Train, Route, CheckCircle2,
  FileSearch, ArrowRight, BookOpen, Landmark,
} from 'lucide-react';

/* ─── Blog card data ─────────────────────────────────────── */
const blogCards = [
  {
    id: 'rera-nmrda',
    icon: <ShieldCheck size={26} />,
    tag: 'Legal & Safety',
    title: 'What is NMRDA-RERA?',
    summary:
      'NMRDA (Nagpur Metropolitan Region Development Authority) is the planning body that governs land use near Nagpur. RERA (Real Estate Regulatory Authority) is a central government act that protects buyers by ensuring transparency and accountability from developers.',
    points: [
      'NMRDA-approved plots follow the official Development Plan — your investment is legally secured.',
      'RERA registration means the developer has verified documents filed with the government.',
      'Buyers gain legal remedies if a developer fails to deliver as promised.',
      'Look for the RERA registration number on all project brochures & advertisements.',
    ],
    keywords: 'NMRDA plots, RERA approved plots Nagpur',
  },
  {
    id: 'identify-rera',
    icon: <Search size={26} />,
    tag: "Buyer's Guide",
    title: 'How to Identify RERA Approval',
    summary:
      'Before booking any plot, verify RERA approval in 3 simple steps. This safeguards your money and ensures the project meets all legal standards under Maharashtra RERA.',
    points: [
      'Visit maharera.mahaonline.gov.in and search by project name or RERA number.',
      `Check the project's registered documents — layout map, land title, approvals.`,
      `Confirm the developer's name matches the RERA registration certificate.`,
      'Our project RERA No. is displayed on every brochure — always ask for it.',
    ],
    keywords: 'RERA approved plots Nagpur, verify RERA registration',
  },
  {
    id: 'demand',
    icon: <TrendingUp size={26} />,
    tag: 'Investment Insight',
    title: 'Why NMRDA-RL Plots Are in High Demand',
    summary:
      `NMRDA Residential Layout (RL) plots near Wardha Road and MIHAN are among the fastest-appreciating assets in Nagpur. Here's why investors and homebuyers are rushing in.`,
    points: [
      'Limited approved RL supply vs. growing demand from IT, logistics & aviation professionals.',
      'Government-backed infrastructure spend boosts long-term land value.',
      'Clear title and legal clarity make bank loans easier to secure.',
      'Early buyers enjoy 20–35 % appreciation even before possession.',
    ],
    keywords: 'NMRDA RL plots Nagpur, Nagpur investment plots',
  },
];

/* ─── Growth drivers ─────────────────────────────────────── */
const growthDrivers = [
  {
    icon: <Landmark size={22} />,
    title: 'MIHAN Development',
    desc: 'Multi-modal International Hub & Cargo Hub at Nagpur airport is attracting global MNCs, SEZ tenants, and thousands of jobs — directly fueling demand for nearby residential land.',
  },
  {
    icon: <Route size={22} />,
    title: 'Wardha Road Corridor',
    desc: `One of Nagpur's fastest-growing arterial roads, Wardha Road connects MIHAN to the city core with commercial, retail, and residential projects at every kilometre.`,
  },
  {
    icon: <Train size={22} />,
    title: 'Metro Connectivity',
    desc: `Nagpur Metro's upcoming stations along the Wardha Road stretch will slash commute times and increase catchment demand from the wider Nagpur metro area.`,
  },
  {
    icon: <Plane size={22} />,
    title: 'Airport Proximity',
    desc: 'Living minutes from Dr Babasaheb Ambedkar International Airport makes travel effortless and pushes up property values in the surrounding neighbourhoods.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'National Highway Advantage',
    desc: 'Excellent NH connectivity (NH-44 & NH-53) makes Nagpur the geographic centre of India — a logistics and investment hub with unmatched accessibility.',
  },
];

/* ─── Mistakes buyers should avoid ──────────────────────── */
const mistakes = [
  {
    no: '01',
    title: 'Trusting Brokers Blindly',
    desc: 'Always deal directly with the developer or authorised representatives. Verify credentials, RERA number, and all original documents before paying any token amount.',
  },
  {
    no: '02',
    title: 'Choosing Cheap but Unapproved Land',
    desc: `Low price often means no approval. Unapproved land can't be mortgaged, resold easily, or constructed upon — costing you far more in the future.`,
  },
  {
    no: '03',
    title: 'Ignoring the Development Plan (DP)',
    desc: 'The DP determines what can be built on a plot and its future surroundings. Always check whether the plot is RL (Residential Layout) as per the current DP.',
  },
  {
    no: '04',
    title: 'Delaying the Decision',
    desc: 'Prices in MIHAN and Wardha Road corridors are rising every quarter. Waiting "just a little longer" often means paying significantly more for the same plot.',
  },
];

/* ─── FAQ data ───────────────────────────────────────────── */
const faqs = [
  {
    q: 'Is a home loan / bank loan available for these plots?',
    a: 'Yes. Because our plots are NMRDA-RL approved and RERA registered, leading nationalised and private banks (SBI, HDFC, ICICI, Bank of Maharashtra, etc.) readily offer loans. Typical financing covers up to 70–75 % of the plot cost.',
  },
  {
    q: 'Does the property have a clear title?',
    a: 'Absolutely. All plots at Mahalaxmi Nagar 49 have clear, marketable titles verified by our legal team. Copies of the title deed, 7/12 extract, and encumbrance certificate are available for your review before booking.',
  },
  {
    q: 'Is it NMRDA-RL & RERA approved?',
    a: 'Yes. The project holds valid NMRDA Residential Layout approval and is registered under Maharashtra RERA. Our RERA registration number is available on all project documents and can be verified at maharera.mahaonline.gov.in.',
  },
  {
    q: 'How can I visit the site?',
    a: `Simply call or WhatsApp us at 95521 47036 to schedule a free site visit at a time that's convenient for you. We offer weekend slots too. Our team will arrange pickup from a nearby landmark if required.`,
  },
  {
    q: 'What are the current bank interest rates for plot loans?',
    a: 'Interest rates vary by bank and applicant profile but currently range from approximately 8.5 % to 10 % per annum (floating rate). We work with multiple banking partners and can help you get the best available rate. Contact us for a free loan eligibility check.',
  },
];

/* ─── Component ──────────────────────────────────────────── */
export default function MiniBlogsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      id="mini_blogs"
      aria-label="Mini Blogs — Real Estate Awareness"
      style={{ background: 'linear-gradient(160deg, #f4f7f5 0%, #eef2ef 100%)' }}
      className="py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-16 scroll-fade">
          <span className="section-chip mb-4 block w-fit mx-auto">
            <BookOpen size={13} />
            Real Estate Awareness
          </span>
          <h2
            className="mb-3 heading-underline"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: 'var(--primary)',
            }}
          >
            Mini Blogs
          </h2>
          <p
            className="max-w-xl mx-auto mt-5 text-base leading-relaxed"
            style={{ color: 'var(--muted-foreground)', fontFamily: 'var(--font-sans)' }}
          >
            Short, honest, buyer-focused guides on RERA, NMRDA, and smart real estate decisions in Nagpur.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 rounded-full" style={{ background: 'rgba(48,83,74,0.2)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--secondary)' }} />
            <div className="h-px w-16 rounded-full" style={{ background: 'rgba(48,83,74,0.2)' }} />
          </div>
        </div>

        {/* ── Blog cards ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {blogCards.map((card, i) => {
            const isOpen = expanded === card.id;
            return (
              <article
                key={card.id}
                className="rounded-2xl overflow-hidden flex flex-col scroll-fade"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(48,83,74,0.1)',
                  boxShadow: isOpen ? '0 16px 48px rgba(48,83,74,0.14)' : '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.3s',
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {/* Card header bar */}
                <div
                  className="px-6 pt-6 pb-4"
                  style={{ borderBottom: '1px solid rgba(48,83,74,0.08)' }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(48,83,74,0.08)', color: 'var(--primary)' }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <span className="section-chip text-[0.65rem] mb-1 inline-block">{card.tag}</span>
                      <h3
                        className="text-lg font-bold leading-snug"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="px-6 pt-4 flex-1">
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: '#555', fontFamily: 'var(--font-sans)' }}
                  >
                    {card.summary}
                  </p>

                  {/* Expandable points */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? '400px' : '0' }}
                  >
                    <ul className="space-y-2 mb-4">
                      {card.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: '#444', fontFamily: 'var(--font-sans)' }}>
                          <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--secondary)' }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[0.7rem] italic mb-4" style={{ color: 'rgba(48,83,74,0.5)' }}>
                      🔍 {card.keywords}
                    </p>
                  </div>
                </div>

                {/* Toggle button */}
                <button
                  onClick={() => setExpanded(isOpen ? null : card.id)}
                  className="mx-6 mb-6 mt-2 flex items-center gap-2 text-sm font-semibold transition-all"
                  style={{ color: 'var(--secondary)', fontFamily: 'var(--font-sans)', background: 'none', border: 'none', cursor: 'pointer' }}
                  aria-expanded={isOpen}
                >
                  {isOpen ? (
                    <><ChevronUp size={16} /> Show Less</>
                  ) : (
                    <><ArrowRight size={16} /> Read More</>
                  )}
                </button>
              </article>
            );
          })}
        </div>

        {/* ── Appreciation & Growth Drivers ── */}
        <div
          className="rounded-3xl p-8 md:p-12 mb-16 scroll-fade"
          style={{ background: 'var(--primary)', position: 'relative', overflow: 'hidden' }}
        >
          {/* decorative circle */}
          <div
            style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: '260px', height: '260px', borderRadius: '50%',
              background: 'rgba(201,134,43,0.12)',
            }}
          />
          <div className="relative">
            <span className="section-chip section-chip-white mb-4 inline-block">
              <TrendingUp size={13} />
              Appreciation Potential
            </span>
            <h2
              className="text-white mb-3"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}
            >
              Future Growth Drivers
            </h2>
            <p className="mb-10 max-w-xl text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-sans)' }}>
              Plots near MIHAN and Wardha Road are backed by multiple infrastructure catalysts — making this one of Nagpur's strongest investment corridors.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {growthDrivers.map((d, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 flex gap-4 transition-transform hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(201,134,43,0.2)', color: 'var(--secondary)' }}
                  >
                    {d.icon}
                  </div>
                  <div>
                    <h4
                      className="text-white font-bold mb-1 text-sm"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {d.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}>
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mistakes buyers should avoid ── */}
        <div className="mb-16 scroll-fade">
          <div className="text-center mb-10">
            <span className="section-chip mb-4 inline-block">
              <AlertTriangle size={13} />
              Buyer Awareness
            </span>
            <h2
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'var(--primary)' }}
            >
              Common Mistakes Buyers Should Avoid
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {mistakes.map((m, i) => (
              <div
                key={i}
                className="flex gap-5 rounded-2xl p-6 transition-all hover:shadow-lg"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(48,83,74,0.1)',
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,134,43,0.12), rgba(201,134,43,0.06))',
                    color: 'var(--secondary)',
                    fontFamily: 'var(--font-heading)',
                    border: '1.5px solid rgba(201,134,43,0.2)',
                  }}
                >
                  {m.no}
                </div>
                <div>
                  <h4
                    className="font-bold mb-1.5 text-base"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}
                  >
                    {m.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#666', fontFamily: 'var(--font-sans)' }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ Accordion ── */}
        <div className="scroll-fade">
          <div className="text-center mb-10">
            <span className="section-chip mb-4 inline-block">
              <HelpCircle size={13} />
              Frequently Asked Questions
            </span>
            <h2
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'var(--primary)' }}
            >
              Quick Answers for Smart Buyers
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen ? 'var(--primary)' : '#fff',
                    border: `1px solid ${isOpen ? 'var(--primary)' : 'rgba(48,83,74,0.12)'}`,
                    boxShadow: isOpen ? '0 8px 32px rgba(48,83,74,0.18)' : 'none',
                  }}
                >
                  <button
                    id={`faq-btn-${i}`}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span
                      className="font-semibold text-sm pr-4 leading-snug flex items-center gap-2"
                      style={{ fontFamily: 'var(--font-heading)', color: isOpen ? '#fff' : 'var(--primary)' }}
                    >
                      <FileSearch size={15} className="flex-shrink-0" style={{ color: 'var(--secondary)' }} />
                      {faq.q}
                    </span>
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                      style={{ background: isOpen ? 'var(--secondary)' : 'rgba(48,83,74,0.08)' }}
                    >
                      {isOpen
                        ? <ChevronUp size={15} color="#fff" />
                        : <ChevronDown size={15} color="var(--primary)" />
                      }
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${i}`}
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{ maxHeight: isOpen ? '300px' : '0' }}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                  >
                    <p
                      className="px-5 pb-5 text-sm leading-relaxed"
                      style={{
                        color: isOpen ? 'rgba(255,255,255,0.82)' : 'var(--muted-foreground)',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
