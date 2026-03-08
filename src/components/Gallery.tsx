'use client';

import Image from 'next/image';
import { useState } from 'react';

const galleryItems = [
  { src: '/activities/SamoSIT.webp', title: 'Vice President of SAMOSIT', category: 'LEADERSHIP' },
  { src: '/activities/kmuttstartupplayground1.webp', title: 'KMUTT Startup Playground Activities', category: 'Event Organizer' },
  { src: '/activities/SamoSIT3.jpg', title: 'SIT Openhouse 2023', category: 'Head of Workshop sessions' },
  { src: '/activities/Rethink_Restart.png', title: 'Rethink-Restart Workshop 2024, KMUTTACT4S', category: 'Event Organizer' },
  { src: '/activities/SIT Helloworld Goose.png', title: 'SIT Helloworld Goose Camp', category: 'Speaker in DevOps Class' },
  { src: '/activities/ITStarterpack.png', title: 'IT Starterpack Camp', category: 'Speaker in Database Class' },
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl md:text-5xl text-sage-dark font-bold font-heading mb-4">
          Activities & Highlights
        </h2>
        <p className="text-muted font-body text-sm mb-2">
          A selection of activities, competitions, and leadership experiences.
        </p>
        <div className="w-full h-px bg-gray-200 mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-white font-heading font-bold text-xl mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 font-body text-xs tracking-widest uppercase">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
