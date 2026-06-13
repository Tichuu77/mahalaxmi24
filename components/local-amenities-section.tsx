'use client';

import React, { useState } from 'react';
import { MapPin, School, HeartPulse, ShoppingBag, Navigation, Clock } from 'lucide-react';

type AmenityItem = {
  name: string;
  time: string;
  distance: string;
  description: string;
};

type Category = 'transit' | 'education' | 'healthcare' | 'commercial';

const amenitiesCategories: Record<Category, {
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  items: AmenityItem[];
}> = {
  transit: {
    label: 'Transit & Connectivity',
    icon: Navigation,
    items: [
      {
        name: 'Samrudhi Circle',
        time: '5 Mins',
        distance: '2.5 Km',
        description: 'Connects directly to the Samruddhi Mahamarg Expressway.',
      },
      {
        name: 'Metro Station NCI',
        time: '8 Mins',
        distance: '4.2 Km',
        description: 'Easy public transit connectivity to the entire Nagpur city core.',
      },
      {
        name: 'Wardha Road',
        time: '10 Mins',
        distance: '6.0 Km',
        description: 'Major arterial highway connecting key parts of Nagpur.',
      },
      {
        name: 'Nagpur Airport (Dr. Babasaheb Ambedkar International)',
        time: '20 Mins',
        distance: '14.5 Km',
        description: 'Quick connectivity to international and domestic flights.',
      },
    ],
  },
  education: {
    label: 'Educational Hubs',
    icon: School,
    items: [
      {
        name: 'Era International School Sumthana',
        time: '3 Mins',
        distance: '1.2 Km',
        description: 'Reputed school offering CBSE curriculum right around the corner.',
      },
      {
        name: 'IIM Nagpur',
        time: '12 Mins',
        distance: '7.5 Km',
        description: 'Premier national management institute located in MIHAN.',
      },
      {
        name: 'IIIT Nagpur',
        time: '15 Mins',
        distance: '9.8 Km',
        description: 'Top engineering and technology research institute.',
      },
    ],
  },
  healthcare: {
    label: 'Healthcare Facilities',
    icon: HeartPulse,
    items: [
      {
        name: 'National Cancer Institute (NCI)',
        time: '7 Mins',
        distance: '3.8 Km',
        description: 'State-of-the-art super specialty hospital and medical campus.',
      },
      {
        name: 'AIIMS Nagpur',
        time: '10 Mins',
        distance: '5.5 Km',
        description: 'All India Institute of Medical Sciences offering comprehensive healthcare.',
      },
    ],
  },
  commercial: {
    label: 'Shopping & Business Hubs',
    icon: ShoppingBag,
    items: [
      {
        name: 'D-Mart Wardha Road',
        time: '6 Mins',
        distance: '3.0 Km',
        description: 'Daily needs and hypermarket shopping for convenience.',
      },
      {
        name: 'Orange City Logistic Park',
        time: '8 Mins',
        distance: '4.5 Km',
        description: 'Rapidly growing commerce and warehousing hub.',
      },
      {
        name: 'MIHAN SEZ',
        time: '12 Mins',
        distance: '7.8 Km',
        description: 'Multi-modal International Cargo Hub and Special Economic Zone.',
      },
    ],
  },
};

export default function LocalAmenitiesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('transit');

  const activeData = amenitiesCategories[activeCategory];
  const ActiveIcon = activeData.icon;

  return (
    <section
      id="local-amenities"
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
            Location Benefits
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
            Mahalaxmi Nagar 49 offers unmatched connectivity to Nagpur's premier hubs, top educational institutes, super-specialty hospitals, and shopping options.
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
                <ActiveIcon size={24} />
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

                  {/* Travel Time Tag */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-[var(--secondary)] border border-amber-100">
                    <Clock size={12} />
                    <span>{item.time} ({item.distance})</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Micro-map marker */}
                <div className="flex items-center gap-1 mt-3.5 text-xs font-medium text-gray-400">
                  <MapPin size={12} className="text-gray-300" />
                  <span>Nagpur Corridor</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
