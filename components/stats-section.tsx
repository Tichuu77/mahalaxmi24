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
      className="py-16 md:py-24 relative overflow-hidden"
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
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade">
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
          <p
            className="text-base md:text-lg text-gray-600 leading-relaxed font-sans"
          >
            We take pride in our track record of delivering premium residential layouts with top-tier infrastructure, legal compliance, and unmatched value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {statsData.map((stat, idx) => {
            return (
              <StatCard
                key={idx}
                icon={stat.icon}
                targetValue={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
                triggerCount={inView}
              />
            );
          })}
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

    let start = 0;
    const duration = 2000; // 2 seconds
    const end = targetValue;
    
    // Calculate increment speed based on the target value size
    const frameRate = 1000 / 60; // ~60fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Ease out quad formula: -c * t * (t - 2) + b
      const progress = frame / totalFrames;
      const easeProgress = -progress * (progress - 2);
      const currentVal = Math.round(easeProgress * end);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentVal);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [triggerCount, targetValue]);

  // Format count if it's large (e.g. 10000 -> 10,000)
  const formattedCount = count.toLocaleString('en-IN');

  return (
    <div
      className="flex flex-col items-center text-center p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white scroll-fade"
      style={{
        borderColor: 'rgba(48, 83, 74, 0.08)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
      }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 hover:rotate-6"
        style={{
          background: 'rgba(201, 134, 43, 0.08)',
          border: '1px solid rgba(201, 134, 43, 0.15)',
        }}
      >
        <Icon size={28} style={{ color: 'var(--secondary)' }} />
      </div>

      <div
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2"
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--primary)',
        }}
      >
        {formattedCount}
        <span style={{ color: 'var(--secondary)' }}>{suffix}</span>
      </div>

      <h3
        className="text-lg font-bold uppercase tracking-wider mb-2"
        style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--primary)',
        }}
      >
        {label}
      </h3>

      <p
        className="text-sm text-gray-500 leading-relaxed font-sans"
        style={{ maxWidth: '280px' }}
      >
        {description}
      </p>
    </div>
  );
}
