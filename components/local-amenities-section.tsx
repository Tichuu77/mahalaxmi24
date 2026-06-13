'use client';

import React, { useState } from 'react';
import { Sparkles, Activity, ShieldCheck, Heart } from 'lucide-react';

type AmenityItem = {
  name: string;
  description: string;
  customIcon: React.ReactNode;
};

type Category = 'recreation' | 'wellness' | 'infrastructure';

const amenitiesCategories: Record<Category, {
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  items: AmenityItem[];
}> = {
  recreation: {
    label: 'Sports & Recreation',
    icon: Activity,
    items: [
      {
        name: 'Kids Park',
        description: 'A playground for children in layout.',
        customIcon: (
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <line x1="12" y1="10" x2="12" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="12" y1="10" x2="30" y2="10" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M30,10 L44,40" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="4" y1="44" x2="52" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="36" y1="6" x2="50" y2="6" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="38" y1="6" x2="38" y2="22" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="48" y1="6" x2="48" y2="22" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M35,22 Q43,26 51,22" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="30" cy="14" r="3" stroke="#C9862b" strokeWidth="1.5"/>
          </svg>
        ),
      },
    ],
  },
  wellness: {
    label: 'Wellness & Nature',
    icon: Heart,
    items: [
      {
        name: 'Garden',
        description: 'Landscaped green space with plantation for better experience.',
        customIcon: (
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <circle cx="18" cy="20" r="10" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="18" y1="30" x2="18" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="38" cy="26" r="7" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="38" y1="33" x2="38" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="4" y1="44" x2="52" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="30" cy="41" r="2" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="30" y1="43" x2="30" y2="44" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: 'Meditation Centre',
        description: 'Dedicated space for contemplation and relaxation.',
        customIcon: (
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <circle cx="28" cy="10" r="4" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="28" y1="14" x2="28" y2="26" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M28,19 Q20,22 16,26" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M28,19 Q36,22 40,26" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M28,26 Q18,28 16,26 Q12,32 18,36" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M28,26 Q38,28 40,26 Q44,32 38,36" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16,36 Q28,40 40,36" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="28" cy="24" r="16" stroke="#C9862b" strokeWidth="0.8" strokeDasharray="2,3"/>
          </svg>
        ),
      },
      {
        name: 'Open Space Public Utility',
        description: 'An open-use area available to all the residents in the layout.',
        customIcon: (
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <rect x="8" y="30" width="40" height="4" rx="2" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="14" y1="34" x2="14" y2="42" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="42" y1="34" x2="42" y2="42" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="8" y="22" width="40" height="4" rx="2" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="14" y1="22" x2="14" y2="30" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="42" y1="22" x2="42" y2="30" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="18" cy="16" r="3" stroke="#C9862b" strokeWidth="1.5"/>
            <circle cx="28" cy="16" r="3" stroke="#C9862b" strokeWidth="1.5"/>
            <circle cx="38" cy="16" r="3" stroke="#C9862b" strokeWidth="1.5"/>
          </svg>
        ),
      },
    ],
  },
  infrastructure: {
    label: 'Infrastructure & Security',
    icon: ShieldCheck,
    items: [
      {
        name: 'Internal Cement Concrete Road',
        description: 'A paved road within the premises connecting all major parts.',
        customIcon: (
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <polygon stroke="#C9862b" strokeWidth="1.5" strokeLinejoin="round" fill="#C9862b" fillOpacity="0.08" points="10,44 20,12 36,12 46,44"/>
            <line x1="28" y1="12" x2="28" y2="44" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="28" y1="15" x2="28" y2="20" stroke="#C9862b" strokeWidth="1.5" strokeDasharray="2,3"/>
            <line x1="28" y1="24" x2="28" y2="29" stroke="#C9862b" strokeWidth="1.5" strokeDasharray="2,3"/>
            <line x1="28" y1="33" x2="28" y2="38" stroke="#C9862b" strokeWidth="1.5" strokeDasharray="2,3"/>
          </svg>
        ),
      },
      {
        name: 'Sewage Line',
        description: 'Underground waste disposal system in layout.',
        customIcon: (
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <line x1="4" y1="22" x2="52" y2="22" stroke="#C9862b" strokeWidth="1.5" strokeDasharray="3,2"/>
            <rect x="6" y="28" width="44" height="10" rx="5" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="14" y1="33" x2="24" y2="33" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <polyline points="21,30 24,33 21,36" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="30" y1="33" x2="40" y2="33" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <polyline points="37,30 40,33 37,36" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <ellipse cx="28" cy="22" rx="6" ry="2.5" stroke="#C9862b" strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        name: 'Electric Network With Transformer',
        description: 'Electricity distribution infrastructure for plots and amenities.',
        customIcon: (
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <line x1="28" y1="8" x2="28" y2="46" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="14" y1="16" x2="42" y2="16" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M14,16 Q8,22 4,22" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M42,16 Q48,22 52,22" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="22" y="26" width="12" height="10" rx="2" stroke="#C9862b" strokeWidth="1.5"/>
            <polygon points="29,27.5 26.5,31.5 29,31.5 27,35.5 30.5,30 28,30" fill="#C9862b"/>
          </svg>
        ),
      },
      {
        name: 'Storm Water Drainage',
        description: 'Efficient stormwater management system across the entire layout.',
        customIcon: (
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <path d="M12,26 Q12,16 20,16 Q22,10 30,12 Q38,12 38,20 Q42,20 42,26 Q42,30 38,30 L12,30 Q8,30 8,26 Q8,22 12,26Z" stroke="#C9862b" strokeWidth="1.5" strokeLinejoin="round"/>
            <line x1="16" y1="33" x2="14" y2="39" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="25" y1="33" x2="23" y2="39" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="34" y1="33" x2="32" y2="39" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="14" y="40" width="22" height="6" rx="1" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="19" y1="40" x2="19" y2="46" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="25" y1="40" x2="25" y2="46" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="31" y1="40" x2="31" y2="46" stroke="#C9862b" strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        name: 'Sewage Treatment Plant',
        description: 'A dedicated sewage treatment plant for effective wastewater management.',
        customIcon: (
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <rect x="4" y="20" width="18" height="22" rx="3" stroke="#C9862b" strokeWidth="1.5"/>
            <rect x="34" y="20" width="18" height="22" rx="3" stroke="#C9862b" strokeWidth="1.5"/>
            <path d="M6,28 Q9,25 13,28 Q17,31 20,28" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M36,30 Q39,28 43,30 Q47,32 50,30" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="22" y1="31" x2="34" y2="31" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <polyline points="30,28 34,31 30,34" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <polygon points="24,16 32,16 30,20 26,20" stroke="#C9862b" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M13,20 L13,14 L4,14" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M43,42 L43,48 L52,48" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: 'Open Space Compound Wall',
        description: 'Fenced open area boundary to the space provided.',
        customIcon: (
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <rect x="4" y="36" width="48" height="8" rx="2" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="28" y1="36" x2="28" y2="44" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="16" y1="36" x2="16" y2="44" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="40" y1="36" x2="40" y2="44" stroke="#C9862b" strokeWidth="1.5"/>
            <rect x="4" y="14" width="8" height="22" rx="1" stroke="#C9862b" strokeWidth="1.5"/>
            <rect x="24" y="14" width="8" height="22" rx="1" stroke="#C9862b" strokeWidth="1.5"/>
            <rect x="44" y="14" width="8" height="22" rx="1" stroke="#C9862b" strokeWidth="1.5"/>
            <line x1="12" y1="20" x2="24" y2="20" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="12" y1="28" x2="24" y2="28" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="32" y1="20" x2="44" y2="20" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="32" y1="28" x2="44" y2="28" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="3" y1="14" x2="13" y2="14" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="23" y1="14" x2="33" y2="14" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="43" y1="14" x2="53" y2="14" stroke="#C9862b" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
};

export default function LocalAmenitiesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('recreation');

  const activeData = amenitiesCategories[activeCategory];
  const ActiveIcon = activeData.icon;

  return (
    <section
      id="amenities"
      className="py-20 md:py-28 bg-[#fcfbfa]"
      style={{
        background: 'linear-gradient(180deg, #fcfbfa 0%, #f7f4ee 100%)',
        borderTop: '1px solid rgba(48, 83, 74, 0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade">
          <span className="section-chip mb-3 inline-block">
            Modern Layout Features
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}
          >
            All Local Amenities
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded mb-4"
            style={{ background: 'linear-gradient(90deg, transparent, var(--secondary), transparent)' }}
          />
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-sans">
            Mahalaxmi Nagar 49 offers complete state-of-the-art infrastructure, wellness parks, and sports utilities designed for a premium lifestyle.
          </p>
        </div>

        {/* Tab Selectors (Horizontal Scrollable on Mobile) */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none gap-2 md:gap-4 scroll-fade">
          {(Object.keys(amenitiesCategories) as Category[]).map((key) => {
            const category = amenitiesCategories[key];
            const CatIcon = category.icon;
            const isActive = activeCategory === key;

            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'shadow-md scale-105'
                    : 'bg-white hover:bg-gray-50 border border-gray-150 text-gray-600'
                }`}
                style={{
                  background: isActive ? 'var(--primary)' : undefined,
                  color: isActive ? '#fff' : undefined,
                  borderColor: isActive ? 'var(--primary)' : undefined,
                }}
              >
                <CatIcon size={16} />
                <span className="font-sans">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-fade">
          {activeData.items.map((item, index) => (
            <div
              key={item.name}
              className="group flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Category Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: 'rgba(48, 83, 74, 0.05)',
                  color: 'var(--primary)',
                }}
              >
                {item.customIcon}
              </div>

              {/* Card Content */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3
                    className="text-lg font-bold text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}