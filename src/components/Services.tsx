'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  IoDesktopOutline,
  IoSearchOutline,
  IoBarChartOutline,
  IoCodeSlashOutline,
  IoPeopleOutline,
  IoRocketOutline,
} from 'react-icons/io5';

const services = [
  {
    icon: <IoDesktopOutline size={40} />,
    title: 'Product Management',
    description:
      'I define product vision, prioritize backlogs, and drive features from discovery to delivery.',
  },
  {
    icon: <IoSearchOutline size={40} />,
    title: 'UX Research',
    description:
      'I conduct usability testing and synthesize feedback into actionable design improvements.',
  },
  {
    icon: <IoBarChartOutline size={40} />,
    title: 'Data Analysis',
    description:
      'I analyze market and product data to identify growth opportunities and inform decisions.',
  },
  {
    icon: <IoCodeSlashOutline size={40} />,
    title: 'QA Automation',
    description:
      'I build automation tools and testing scripts to validate APIs and improve QA efficiency.',
  },
  {
    icon: <IoPeopleOutline size={40} />,
    title: 'Team Leadership',
    description:
      'I lead cross-functional teams, manage timelines, and align stakeholders toward shared goals.',
  },
  {
    icon: <IoRocketOutline size={40} />,
    title: 'Business Development',
    description:
      'I build automation workflows and translate data insights into actionable growth strategies.',
  },
];

export default function Services() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const goLeft = () => {
    setStartIndex((prev) => (prev === 0 ? services.length - visibleCount : prev - 1));
  };

  const goRight = () => {
    setStartIndex((prev) => (prev >= services.length - visibleCount ? 0 : prev + 1));
  };

  const visibleServices = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleServices.push(services[(startIndex + i) % services.length]);
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Left Arrow */}
        <button
          onClick={goLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-muted hover:text-dark transition-colors z-10"
          aria-label="Previous services"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {visibleServices.map((service, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-sage-dark mx-auto">{service.icon}</div>
              <h3 className="font-heading font-bold text-dark text-sm">
                {service.title} <span className="text-sage-dark">—</span>
              </h3>
              <p className="text-xs text-muted font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-muted hover:text-dark transition-colors z-10"
          aria-label="Next services"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
