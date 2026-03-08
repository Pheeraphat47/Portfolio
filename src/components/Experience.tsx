'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { FaChevronLeft, FaChevronRight, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

interface ExperienceItem {
  id: number;
  number: string;
  date: string;
  role: string;
  company: string;
  duration: string;
  details: string[];
  images?: string[];
  pdfFile?: string;
  logo?: string;
}

function ImageSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-full w-full">
      <Image
        src={images[currentIndex]}
        alt={`${alt} - ${currentIndex + 1}`}
        fill
        className="object-cover"
      />
      {images.length > 1 && (
        <>
          <button onClick={goToPrevious} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10" aria-label="Previous image">
            <FaChevronLeft size={14} />
          </button>
          <button onClick={goToNext} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10" aria-label="Next image">
            <FaChevronRight size={14} />
          </button>
          <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 text-white text-xs rounded-md z-10">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    number: '01',
    date: 'SEP 2024 - FEB 2025',
    role: 'QA Automation Engineer',
    company: 'Siam Commercial Bank (SCB)',
    duration: 'Sep 2024 - Feb 2025',
    details: [
      'Developed internal QA automation tools in Python to validate API responses (XML/JSON)',
      'Supported end-to-end testing using Cypress and test data preparation',
      'Designed test scenarios for comprehensive validation coverage',
    ],
    images: ['/experience/scb1.jpg', '/experience/scb2.jpg'],
    logo: '/Logo/SCB_Logo.png',
  },
  {
    id: 2,
    number: '02',
    date: 'JUN - AUG 2025',
    role: 'Business Development Intern',
    company: 'Skooldio Company Limited',
    duration: 'Jun - Aug 2025',
    details: [
      'Built n8n automation workflows to optimize internal BD processes, reducing manual workload by 20%',
      'Analyzed market and product performance data to identify growth opportunities',
      'Translated data insights into actionable recommendations for stakeholders',
    ],
    images: ['/experience/skd1.jpg', '/experience/skd2.jpg', '/experience/skd3.jpg', '/experience/skd4.jpg'],
    logo: '/Logo/Skooldio_Logo.png',
  },
  {
    id: 3,
    number: '03',
    date: 'JAN - MAY 2025',
    role: 'Product Owner Cooperative Intern',
    company: 'Innovasive Company Limited',
    duration: 'Jan - May 2025',
    details: [
      'Translated stakeholder and user needs into clear user stories and acceptance criteria',
      'Prioritized product backlog based on user impact, feasibility, and business goals',
      'Supported feature launches from discovery to release including post-launch evaluation',
    ],
    pdfFile: '/experience/innovasive_po.pdf',
    logo: '/Logo/innovasive_logo.png',
  },
  {
    id: 4,
    number: '04',
    date: 'JUN - JUL 2024',
    role: 'UX Researcher Intern',
    company: 'ADIREK & CO Company Limited',
    duration: 'Jun - Jul 2024',
    details: [
      'Conducted usability testing and synthesized user feedback into actionable insights',
      'Collaborated with product and design teams to inform UI improvements',
    ],
    pdfFile: '/experience/ux.pdf',
    logo: '/Logo/adirek&co_Logo.png',
  },
  {
    id: 5,
    number: '05',
    date: 'JUN - JUL 2023',
    role: 'Frontend Developer Intern',
    company: 'Innovasive Company Limited',
    duration: 'Jun - Jul 2023',
    details: [
      'Built responsive web interfaces and collaborated with designers and product teams',
    ],
    pdfFile: '/experience/innovasive_frontend.pdf',
    logo: '/Logo/innovasive_logo.png',
  },
];

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-black text-dark font-heading mb-4">
          Work Experience
        </h2>
        <p className="text-muted font-body text-sm mb-2">
          My professional journey through internships and contract roles.
        </p>
        <div className="w-full h-px bg-gray-300 mb-12" />

        <div className="space-y-0">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const hasImage = exp.images && exp.images.length > 0;
            return (
              <div
                key={exp.id}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white cursor-pointer hover:shadow-lg transition-shadow duration-300`}
                onClick={() => {
                  setSelectedExp(exp);
                  document.body.style.overflow = 'hidden';
                }}
              >
                {/* Image Side */}
                <div className="md:w-1/2 relative aspect-video md:aspect-auto min-h-[250px] bg-gray-100 flex items-center justify-center">
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-sage/20">
                      <FaFilePdf className="text-sage-dark text-4xl" />
                    </div>
                  )}
                </div>

                {/* Text Side */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-xs text-sage-dark font-body tracking-wider uppercase mb-3">
                    {exp.number} / {exp.date}
                  </p>
                  <h3 className="text-2xl font-heading font-bold text-dark mb-3">
                    {exp.role}
                  </h3>
                  <p className="text-muted font-body text-sm mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.details.slice(0, 2).map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted font-body text-xs leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 bg-sage-dark rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedExp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => {
            setSelectedExp(null);
            document.body.style.overflow = 'auto';
          }}
        >
          <div
            className="bg-white shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start z-10">
              <div className="flex items-start gap-4">
                {selectedExp.logo && (
                  <Image
                    src={selectedExp.logo}
                    alt={`${selectedExp.company} logo`}
                    width={48}
                    height={48}
                    className="object-contain flex-shrink-0 mt-1"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-dark pr-8">{selectedExp.role}</h3>
                  <p className="text-sage-dark font-body text-sm mt-1">{selectedExp.company}</p>
                  <p className="text-muted font-body text-xs mt-1">{selectedExp.duration}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedExp(null);
                  document.body.style.overflow = 'auto';
                }}
                className="p-2 hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <IoClose size={24} />
              </button>
            </div>

            {selectedExp.images && selectedExp.images.length > 0 && (
              <div className="relative h-72 w-full bg-black">
                <ImageSlideshow images={selectedExp.images} alt={selectedExp.company} />
              </div>
            )}

            {selectedExp.pdfFile && (
              <div className="border-b border-gray-200">
                <div className="relative w-full h-[400px] bg-gray-100">
                  <iframe
                    src={`${selectedExp.pdfFile}#toolbar=0&navpanes=0`}
                    className="w-full h-full"
                    title={`${selectedExp.role} - Document`}
                  />
                </div>
                <div className="p-4 bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted">
                    <FaFilePdf className="text-red-500" />
                    <span className="text-sm font-body">Document</span>
                  </div>
                  <a
                    href={selectedExp.pdfFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark text-white text-sm font-body hover:bg-sage-dark transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt size={12} />
                    Open PDF
                  </a>
                </div>
              </div>
            )}

            <div className="p-8">
              <h4 className="font-heading font-bold text-dark mb-4">Key Responsibilities</h4>
              <ul className="space-y-3">
                {selectedExp.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted font-body text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 bg-sage-dark rounded-full flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
