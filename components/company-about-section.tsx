'use client';
import React from 'react';

export default function CompanyAboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">


          <div className="flex flex-col justify-center">
            <span className="section-chip mb-4 block w-fit">About Us</span>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}
            >
              Trusted Since 2012
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)', color: '#4a5568' }}
            >
              Since our journey began in 2012, Mahalaxmi Developers has been a trusted name in
              Nagpur's real estate landscape. Built on the strong foundation of honesty,
              transparency, and absolute integrity, we don't just develop land — we build lasting
              relationships with our customers. Over the years, our commitment to timely delivery
              and clear titles has earned us the unwavering trust of hundreds of happy families.
              At Mahalaxmi Developers, your dream of a premium lifestyle is safe with us. 🤝
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}