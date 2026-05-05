'use client';
import React, { useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

type GalleryItem = { id: number; src: string; alt?:string; span?: string };

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/gallery_4.jpg', alt: 'Gallery Image 1' , span: 'row-span-2'},
  { id: 2, src: '/gallery_1.jpg', alt: 'Gallery Image 2' , span: 'row-span-1'},
  { id: 3, src: '/gallery_5.jpg', alt: 'Gallery Image 3' , span: 'row-span-3'},
  { id: 4, src: '/gallery_2.jpg', alt: 'Gallery Image 4' , span: 'row-span-1'},
  { id: 5, src: '/gallery_3.jpg', alt: 'Gallery Image 5' , span: 'row-span-2'},
  { id: 6, src: '/gallery_7.jpeg', alt: 'Gallery Image 6' , span: 'row-span-1'},
  { id: 7, src: '/gallery_8.jpeg', alt: 'Gallery Image 7' , span: 'row-span-2'},
  { id: 8, src: '/gallery_9.jpeg', alt: 'Gallery Image 8' , span: 'row-span-1'},
  { id: 9, src: '/gallery_10.jpeg', alt: 'Gallery Image 9' , span: 'row-span-2'},
  { id: 10, src: '/gallery_11.jpeg', alt: 'Gallery Image 10' , span: 'row-span-1'},
  { id: 11, src: '/gallery_12.jpeg', alt: 'Gallery Image 11' , span: 'row-span-2'},
  { id: 12, src: '/gallery_13.jpeg', alt: 'Gallery Image 12' , span: 'row-span-1'},
  { id: 13, src: '/gallery_14.jpeg', alt: 'Gallery Image 13' , span: 'row-span-2'},
  { id: 14, src: '/gallery_15.jpeg', alt: 'Gallery Image 14' , span: 'row-span-2'}];

export default function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const navigateModal = (dir: 'prev' | 'next') => {
    if (selectedId === null) return;
    const idx = galleryItems.findIndex((i) => i.id === selectedId);
    const next = dir === 'prev'
      ? (idx === 0 ? galleryItems.length - 1 : idx - 1)
      : (idx + 1) % galleryItems.length;
    setSelectedId(galleryItems[next].id);
  };

  const selectedItem = galleryItems.find((i) => i.id === selectedId);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(160deg, #f0ede6 0%, #f9f7f4 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 scroll-fade">
          <div>
            <span className="section-chip mb-3 block w-fit">Photo Gallery</span>
            <h2
              className="leading-tight"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--primary)' }}
            >
              Our Gallery
              <span className="block" style={{ color: 'var(--secondary)' }}>Where Luxury Meets Design</span>
            </h2>
          </div>
          <a href="#faq_sec">
            <button
              className="whitespace-nowrap px-7 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: 'var(--primary)', color: '#fff', fontFamily: 'var(--font-heading)' }}
            >
              Enquire Now
            </button>
          </a>
        </div>

        {/* MOBILE: horizontal snap carousel */}
        <div
          ref={mobileScrollRef}
          className="mobile-snap-scroll md:hidden"
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              style={{ width: '72vw', height: '56vw', flexShrink: 0 }}
              onClick={() => setSelectedId(item.id)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 size={28} color="#fff" />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 p-3 text-xs font-bold uppercase tracking-widest"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                  color: '#fff',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                {item.alt}
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP: masonry-style CSS grid — 3-col so all tiles fill perfectly */}
        <div
          className="hidden md:grid gap-4"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '240px' }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative overflow-hidden rounded-2xl cursor-pointer group scroll-fade`}
              onClick={() => setSelectedId(item.id)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
                    style={{ background: 'var(--secondary)' }}
                  >
                    <Maximize2 size={22} color="#fff" />
                  </div>
                </div>
                <div
                  className="absolute bottom-4 left-4 right-4 text-sm font-semibold leading-snug"
                  style={{ color: '#fff', fontFamily: 'var(--font-heading)' }}
                >
                  {item.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {selectedId !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem?.src}
              alt={selectedItem?.alt}
              className="w-full rounded-2xl object-contain"
              style={{ maxHeight: '80vh' }}
            />

            {/* Nav */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModal('prev'); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'var(--secondary)' }}
              aria-label="Previous"
            >
              <ChevronLeft size={24} color="#fff" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateModal('next'); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'var(--secondary)' }}
              aria-label="Next"
            >
              <ChevronRight size={24} color="#fff" />
            </button>

            {/* Close */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)' }}
              aria-label="Close"
            >
              <X size={20} color="#fff" />
            </button>

            {/* Caption & counter */}
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3">
              <div
                className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: 'var(--secondary)', color: '#fff', fontFamily: 'var(--font-heading)' }}
              >
                {selectedItem?.alt}
              </div>
              <div
                className="px-3 py-2 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', backdropFilter: 'blur(6px)', fontFamily: 'var(--font-sans)' }}
              >
                {galleryItems.findIndex(i => i.id === selectedId) + 1} / {galleryItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}