'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Award, Building2, Users } from 'lucide-react';

const statsData = [
  {
    icon: Award,
    value: 13,
    suffix: '+',
    label: 'Years of Legacy',
    description: 'Of trusted real estate experience and ethical standards.',
  },
  {
    icon: Building2,
    value: 70,
    suffix: '+',
    label: 'Successful Projects',
    description: 'Sanctioned residential layouts and developments completed.',
  },
  {
    icon: Users,
    value: 17000,
    suffix: '+',
    label: 'Happy Families',
    description: 'Satisfied customers served with transparency and care.',
  },
];

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #fdfbfa 0%, #f7f3ed 100%)',
        borderTop: '1px solid rgba(48, 83, 74, 0.08)',
        borderBottom: '1px solid rgba(48, 83, 74, 0.08)',
      }}
    >
      {/* Decorative Background Accents */}
      <div
        className="absolute left-[-10%] top-[-20%] w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)' }}
      />
      <div
        className="absolute right-[-10%] bottom-[-20%] w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header — hidden on mobile to save space */}
        <div className="hidden md:block text-center max-w-3xl mx-auto mb-16 scroll-fade">
          <span className="section-chip mb-3">Mahalaxmi Group</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}
          >
            A Legacy of Excellence
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded mb-4"
            style={{ background: 'linear-gradient(90deg, transparent, var(--secondary), transparent)' }}
          />
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-sans">
            We take pride in our track record of delivering premium residential layouts with
            top-tier infrastructure, legal compliance, and unmatched value.
          </p>
        </div>

        {/* Stats row — always 3 columns */}
        <div className="grid grid-cols-3 gap-3 md:gap-12">
          {statsData.map((stat, idx) => (
            <StatCard
              key={idx}
              icon={stat.icon}
              targetValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              triggerCount={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string; size?: number; style?: React.CSSProperties }>;
  targetValue: number;
  suffix: string;
  label: string;
  description: string;
  triggerCount: boolean;
}

function StatCard({ icon: Icon, targetValue, suffix, label, description, triggerCount }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggerCount) return;

    let frame = 0;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(2000 / frameRate);

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = -progress * (progress - 2);
      const currentVal = Math.round(easeProgress * targetValue);

      if (frame >= totalFrames) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(currentVal);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [triggerCount, targetValue]);

  const formattedCount = count.toLocaleString('en-IN');

  return (
    <div
      className="flex flex-col items-center text-center rounded-xl md:rounded-2xl border transition-all duration-300 md:hover:shadow-xl md:hover:-translate-y-1 bg-white scroll-fade"
      style={{
        padding: 'clamp(10px, 3vw, 32px)',
        borderColor: 'rgba(48, 83, 74, 0.08)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
      }}
    >
      {/* Icon — smaller on mobile */}
      <div
        className="rounded-xl flex items-center justify-center mb-2 md:mb-6"
        style={{
          width: 'clamp(32px, 8vw, 64px)',
          height: 'clamp(32px, 8vw, 64px)',
          background: 'rgba(201, 134, 43, 0.08)',
          border: '1px solid rgba(201, 134, 43, 0.15)',
        }}
      >
        <Icon
          style={{
            color: 'var(--secondary)',
            width: 'clamp(14px, 4vw, 28px)',
            height: 'clamp(14px, 4vw, 28px)',
          }}
        />
      </div>

      {/* Number */}
      <div
        className="font-extrabold tracking-tight mb-1"
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--primary)',
          fontSize: 'clamp(1.2rem, 5vw, 3rem)',
          lineHeight: 1,
        }}
      >
        {formattedCount}
        <span style={{ color: 'var(--secondary)' }}>{suffix}</span>
      </div>

      {/* Label */}
      <h3
        className="font-bold uppercase tracking-wide mb-1 md:mb-2"
        style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--primary)',
          fontSize: 'clamp(0.55rem, 2vw, 1rem)',
          lineHeight: 1.2,
        }}
      >
        {label}
      </h3>

      {/* Description — hidden on mobile */}
      <p
        className="hidden md:block text-sm text-gray-500 leading-relaxed font-sans"
        style={{ maxWidth: '280px' }}
      >
        {description}
      </p>
    </div>
  );
}