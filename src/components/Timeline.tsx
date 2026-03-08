'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { FaChevronLeft, FaChevronRight, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

interface Milestone {
  number: string;
  label: string;
  year: string;
  title: string;
  company: string;
  duration: string;
  logo: string;
  description: string;
  details: string[];
  images?: string[];
  pdfFile?: string;
}

function ImageSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i === 0 ? images.length - 1 : i - 1)); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i === images.length - 1 ? 0 : i + 1)); };
  return (
    <div className="relative h-full w-full">
      <Image src={images[idx]} alt={`${alt} ${idx + 1}`} fill className="object-cover" />
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10" aria-label="Previous">
            <FaChevronLeft size={13} />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-10" aria-label="Next">
            <FaChevronRight size={13} />
          </button>
          <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/50 text-white text-xs rounded z-10">
            {idx + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

const milestones: Milestone[] = [
  {
    number: '01',
    label: 'QA ENGINEER',
    year: '2026',
    title: 'QA Automation Engineer (Contract)',
    company: 'Siam Commercial Bank (SCB)',
    duration: 'Sep 2025 – Feb 2026',
    logo: '/Logo/SCB_Logo.png',
    description: 'Developed internal QA tools in Python and supported end-to-end testing using Cypress at Siam Commercial Bank.',
    details: [
      'Developed internal QA automation tools in Python to validate API responses (XML/JSON)',
      'Supported end-to-end testing using Cypress and test data preparation',
      'Designed test scenarios for comprehensive validation coverage',
    ],
    images: ['/experience/scb1.jpg', '/experience/scb2.jpg'],
  },
  {
    number: '02',
    label: 'BUSINESS DEV',
    year: '2025',
    title: 'BD Intern',
    company: 'Skooldio Company Limited',
    duration: 'Jun – Aug 2025',
    logo: '/Logo/Skooldio_Logo.png',
    description: 'Built n8n automation workflows at Skooldio, reducing manual BD workload by 20% and supporting growth strategies.',
    details: [
      'Built n8n automation workflows to optimize internal BD processes, reducing manual workload by 20%',
      'Analyzed market and product performance data to identify growth opportunities',
      'Translated data insights into actionable recommendations for stakeholders',
    ],
    images: ['/experience/skd1.jpg', '/experience/skd2.jpg', '/experience/skd3.jpg', '/experience/skd4.jpg'],
  },
  {
    number: '03',
    label: 'CO-OP',
    year: '2025',
    title: 'Product Owner Co-op Intern',
    company: 'Innovasive Company Limited',
    duration: 'Jan – May 2025',
    logo: '/Logo/innovasive_logo.png',
    description: 'Translated stakeholder needs into user stories and managed the product backlog at Innovasive Company Limited.',
    details: [
      'Translated stakeholder and user needs into clear user stories and acceptance criteria',
      'Prioritized product backlog based on user impact, feasibility, and business goals',
      'Supported feature launches from discovery to release including post-launch evaluation',
    ],
    pdfFile: '/experience/innovasive_po.pdf',
  },
  {
    number: '04',
    label: 'UX RESEARCH',
    year: '2024',
    title: 'UX Researcher',
    company: 'ADIREK & CO Company Limited',
    duration: 'Jun – Jul 2024',
    logo: '/Logo/adirek&co_Logo.png',
    description: 'Conducted usability testing and synthesized user feedback at ADIREK & CO to inform design decisions.',
    details: [
      'Conducted usability testing and synthesized user feedback into actionable insights',
      'Collaborated with product and design teams to inform UI improvements',
    ],
    pdfFile: '/experience/ux.pdf',
  },
  {
    number: '05',
    label: 'FIRST INTERNSHIP',
    year: '2023',
    title: 'Frontend Developer Intern',
    company: 'Innovasive Company Limited',
    duration: 'Jun – Jul 2023',
    logo: '/Logo/innovasive_logo.png',
    description: 'Built responsive web interfaces at Innovasive Co., collaborating with designers and product teams.',
    details: [
      'Built responsive web interfaces and collaborated with designers and product teams',
    ],
    pdfFile: '/experience/innovasive_frontend.pdf',
  },
];

export default function Timeline() {
  const [selected, setSelected] = useState<Milestone | null>(null);

  const open = (item: Milestone) => {
    setSelected(item);
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    setSelected(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="experience" className="py-16 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-5xl text-sage-dark font-bold tracking-widest uppercase mb-8">
            Work Experience
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {milestones.map((item) => (
              <div
                key={item.number}
                className="space-y-3 cursor-pointer group"
                onClick={() => open(item)}
              >
                <p className="text-md text-sage-dark font-body tracking-wider uppercase">
                  {item.number} \ {item.label}
                </p>
                <p className="text-3xl font-heading font-black text-sage/80">
                  {item.year}
                </p>
                <div className="relative w-16 h-8">
                  <Image
                    src={item.logo}
                    alt={item.company}
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h3 className="text-base font-heading font-bold text-dark">
                  {item.title} <span className="text-sage-dark">—</span>
                </h3>
                <p className="text-xs text-muted font-body">{item.company}</p>
                <p className="text-xs text-muted font-body leading-relaxed">
                  {item.description}
                </p>
                <p className="text-xs text-sage-dark font-body underline underline-offset-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  View details →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={close}
        >
          <div
            className="bg-white shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start z-10">
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src={selected.logo}
                    alt={selected.company}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-dark pr-8">{selected.title}</h3>
                  <p className="text-sage-dark font-body text-sm mt-0.5">{selected.company}</p>
                  <p className="text-muted font-body text-xs mt-0.5">{selected.duration}</p>
                </div>
              </div>
              <button
                onClick={close}
                className="p-2 hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <IoClose size={22} />
              </button>
            </div>
            {/* Image slideshow */}
            {selected.images && selected.images.length > 0 && (
              <div className="relative h-64 w-full bg-black">
                <ImageSlideshow images={selected.images} alt={selected.company} />
              </div>
            )}

            {/* PDF link */}
            {selected.pdfFile && (
              <div className="border-b border-gray-100 px-6 py-4 flex items-center gap-3">
                <FaFilePdf className="text-sage-dark text-lg shrink-0" />
                <a
                  href={selected.pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-sage-dark hover:underline flex items-center gap-1.5"
                >
                  View Certificate / Reference PDF <FaExternalLinkAlt size={11} />
                </a>
              </div>
            )}

            <div className="p-6">
              <ul className="space-y-3">
                {selected.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted font-body leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 bg-sage-dark rounded-full shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
