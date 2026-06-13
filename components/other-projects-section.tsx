'use client';

import React, { useState } from 'react';
import { MapPin, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { otherProjects, Project, ProjectPopup } from './hero-section';

export default function OtherProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects = showAll ? otherProjects : otherProjects.slice(0, 6);

  return (
    <section
      id="other-projects"
      className="py-20 md:py-28 relative bg-[#0d2a20] text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1f16 0%, #0d2a20 50%, #081810 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #fff 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade">
          <span className="section-chip section-chip-white mb-3 inline-block">
            Our Portfolio
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Other Prestigious Projects
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded mb-4"
            style={{ background: 'linear-gradient(90deg, transparent, var(--secondary), transparent)' }}
          />
          <p
            className="text-base md:text-lg leading-relaxed font-sans"
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            Explore our wide range of carefully planned, RERA-sanctioned residential developments and gated layouts in Nagpur's fastest-growing corridors.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
            <div
              key={project.name}
              className="group flex flex-col rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-[#0b1f16]/60 backdrop-blur-md scroll-fade"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.08)',
                animationDelay: `${(idx % 3) * 100}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-60 w-full bg-[#071710]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=600&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f16] via-transparent to-transparent opacity-80" />
                
                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium">
                  <MapPin size={12} className="text-[var(--secondary)]" />
                  <span className="font-sans text-gray-200">{project.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3
                    className="text-xl font-bold mb-3 tracking-wide text-white group-hover:text-[var(--secondary)] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed mb-6">
                     sanitisied and fully sanctioned NIT/NMRDA layout offering premium growth opportunities and state of the art specifications.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 bg-transparent border text-white group-hover:border-[var(--secondary)] hover:!bg-[var(--secondary)] hover:!text-white"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      borderColor: 'rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    View details
                  </button>
                  <a
                    href="tel:+919327210650"
                    className="p-3 rounded-xl border flex items-center justify-center transition-all duration-300 hover:bg-[var(--secondary)] hover:border-[var(--secondary)]"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <Phone size={15} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {otherProjects.length > 6 && (
          <div className="text-center mt-14 scroll-fade">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 border-2"
              style={{
                fontFamily: 'var(--font-heading)',
                borderColor: 'var(--secondary)',
                color: 'var(--secondary)',
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                const btn = e.currentTarget;
                btn.style.background = 'var(--secondary)';
                btn.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                const btn = e.currentTarget;
                btn.style.background = 'transparent';
                btn.style.color = 'var(--secondary)';
              }}
            >
              {showAll ? (
                <>
                  Show Less Projects <ChevronUp size={16} />
                </>
              ) : (
                <>
                  View All Projects ({otherProjects.length}) <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Render Project detail modal */}
      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
