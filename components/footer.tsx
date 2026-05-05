import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'var(--primary)', borderTop: '3px solid var(--secondary)' }}
    >
      {/* Large decorative background element */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-tl-full opacity-5 pointer-events-none"
        style={{ background: 'var(--secondary)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/Malaxmi-Final-Logo.-2png.png"
              alt="Mahalaxmi Infra Logo"
              className="h-28 w-28 object-contain mb-4"
            />
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}
            >
              Premium residential plots in Nagpur. NMRDA &amp; RL approved, near MIHAN and Wardha Road.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/mahalaxmiinfra', icon: Facebook, label: 'Facebook' },
                { href: 'https://www.instagram.com/mahalaxmiinfra', icon: Instagram, label: 'Instagram' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <Icon size={16} color="rgba(255,255,255,0.8)" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--secondary)' }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#overview',     label: 'About' },
                { href: '#amenities',    label: 'Amenities' },
                { href: '#gallery',      label: 'Gallery' },
                { href: '#testimonials', label: 'Testimonials' },
                { href: '#faq_sec',      label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-all hover:text-white flex items-center gap-2 group"
                    style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:bg-amber-400 transition-colors"
                      style={{ background: 'rgba(201,134,43,0.5)' }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--secondary)' }}
            >
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#faq_sec',   label: 'FAQ' },
                { href: '#documents', label: 'Brochure' },
                { href: '#faq_sec',   label: 'Site Visit' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-all hover:text-white flex items-center gap-2 group"
                    style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-sans)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:bg-amber-400 transition-colors"
                      style={{ background: 'rgba(201,134,43,0.5)' }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--secondary)' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="text-sm font-bold mb-1" style={{ color: '#fff', fontFamily: 'var(--font-heading)' }}>
                  Mayur Dhomne
                </p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-sans)' }}>Wealth Advisor, Mahalaxmi Infra</p>
              </li>
              <li>
                <a
                  href="tel:+919327210650"
                  className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group"
                  style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-sans)' }}
                >
                  <Phone size={14} color="var(--secondary)" />
                  +91 9327210650
                </a>
              </li>
              <li>
                <a
                  href="mailto:akdhomne@gmail.com"
                  className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-sans)' }}
                >
                  <Mail size={14} color="var(--secondary)" />
                  akdhomne@gmail.com
                </a>
              </li>
              <li>
                <div
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-sans)' }}
                >
                  <MapPin size={14} color="var(--secondary)" className="flex-shrink-0 mt-0.5" />
                  Wardha Road, Nagpur, Maharashtra — 441108
                </div>
              </li>
              <li>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(201,134,43,0.15)', color: 'var(--secondary)', border: '1px solid rgba(201,134,43,0.3)', fontFamily: 'var(--font-sans)' }}
                >
                  RERA: A51000042498
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO keywords (collapsed, visually subtle) */}
        <div
          className="py-4 px-5 rounded-xl mb-8"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p
            className="text-xs leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.28)', fontFamily: 'var(--font-sans)' }}
          >
            Plots in Nagpur • Residential Property Nagpur • Plot for Sale Nagpur • Property for Sale in South Nagpur •
            Nagpur Investment Plots • Plots near MIHAN Nagpur • Plots near Nagpur Airport • Mahalaxmi Developer Nagpur •
            Plots near Outer Ring Road • RERA Approved Plots Nagpur • NMRDA Approved Plots • RL Plots in Nagpur •
            Clear Title Plots Nagpur • Affordable Plots in Nagpur • Plot on Wardha Road
          </p>
        </div>

        {/* Divider + copyright */}
        <div
          className="h-px mb-6"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-sans)' }}
          >
            © {year} Mahalaxmi Infra. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-sans)' }}
          >
            NMRDA &amp; RL Approved · Wardha Road, Nagpur
          </p>
        </div>
      </div>
    </footer>
  );
}