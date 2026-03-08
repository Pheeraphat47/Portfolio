'use client';

const milestones = [
  {
    number: '01',
    label: 'EDUCATION',
    year: '2022',
    title: 'Started at KMUTT',
    description:
      'Began a Bachelor of Science in Information Technology at King Mongkut\'s University of Technology Thonburi.',
  },
  {
    number: '02',
    label: 'FIRST INTERNSHIP',
    year: '2023',
    title: 'Frontend Developer',
    description:
      'Built responsive web interfaces at Innovasive Co., collaborating with designers and product teams.',
  },
  {
    number: '03',
    label: 'GROWTH',
    year: '2024',
    title: 'UX Researcher',
    description:
      'Conducted usability testing and synthesized user feedback at ADIREK & CO to inform design decisions.',
  },
  {
    number: '04',
    label: 'LEADERSHIP',
    year: '2025',
    title: 'QA & Product Owner',
    description:
      'QA Automation at SCB and Product Owner Co-op at Innovasive, plus BD Intern at Skooldio.',
  },
];

export default function Timeline() {
  return (
    <section className="py-16 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((item) => (
            <div key={item.number} className="space-y-3">
              <p className="text-xs text-sage-dark font-body tracking-wider uppercase">
                {item.number} \ {item.label}
              </p>
              <p className="text-5xl font-heading font-black text-sage/80">
                {item.year}
              </p>
              <h3 className="text-base font-heading font-bold text-dark">
                {item.title} <span className="text-sage-dark">—</span>
              </h3>
              <p className="text-xs text-muted font-body leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
