'use client';
import React from 'react';
import { Shield, Eye, Target, Lightbulb, Lock, Gavel } from 'lucide-react';

export default function CompanyAboutSection() {
 

  const principles = [
    {
      icon: Target,
      title: 'Our Vision',
      desc: 'At Mahalaxmi Group, we aim to be a beacon of trust and innovation, setting new industry standards through transparency and ethical practices. Our goal is to enrich lives and create a legacy of integrity and reliability.',
    },
    {
      icon: Eye,
      title: 'Our Mission',
      desc: 'Our mission is to exceed expectations by crafting exceptional spaces that embody trust, transparency, and ethics. We leverage our expertise and innovation to enhance lifestyles and contribute positively to the built environment.',
    },
    {
      icon: Shield,
      title: 'Our Values',
      desc: 'We are committed to providing top real estate investment opportunities with creativity, continual improvement, professionalism, honesty, and integrity.',
    },
  ];

  const differentiators = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Innovation is at the heart of everything we do. We consistently integrate the latest technology and design trends to create modern living spaces.',
    },
    {
      icon: Lock,
      title: 'Transparency',
      desc: 'We believe that transparency fosters trust and confidence. Our commitment to open communication and clear documentation ensures that our clients are informed and empowered.',
    },
    {
      icon: Gavel,
      title: 'Ethical Practices',
      desc: 'Integrity is a core value at Mahalaxmi Group. We uphold ethical practices in all our dealings, ensuring fair and honest interactions with our clients.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
   

      {/* Crafting Luxurious Living Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://mahalaxmiinfra.in/frontend/images/Highlight.png"
              alt="Mahalaxmi Group"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}
            >
              Crafting Luxurious Living Spaces in Nagpur's Premier Real Estate Market
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)', color: '#4a5568' }}
            >
              Mahalaxmi Group, a distinguished consortium, leads the construction and development industry with over 54 successful projects and promising ventures ahead. Our legacy is built on trust, transparency, and ethics, serving over 10,000 satisfied clients.
            </p>
          </div>
        </div>
      </div>

      {/* Our Guiding Principles Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}
          >
            Our Guiding Principles
          </h2>
          <p className="text-lg" style={{ color: '#4a5568' }}>
            Our commitment to excellence is driven by a clear vision, a focused mission, and steadfast values.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-8 rounded-2xl border-2 transition-all hover:shadow-lg scroll-fade-delay-1"
              style={{ background: 'var(--primary)', borderColor: 'var(--primary)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'var(--secondary)' }}
              >
                <Icon size={24} color="var(--primary)" />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-heading)', color: '#fff' }}
              >
                {title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 rounded-3xl" style={{ background: '#1a1a1a' }}>
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          What Sets Us Apart
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {differentiators.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 scroll-fade"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'var(--secondary)' }}
              >
                <Icon size={32} color="var(--primary)" />
              </div>
              <div>
                <h3
                  className="text-xl md:text-2xl font-bold mb-3 text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-gray-300">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
