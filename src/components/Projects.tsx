'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Yakteaw — AI Travel Platform',
    category: 'Product Owner',
    image: '/activities/yakteaw.webp',
    link: 'https://bscit.sit.kmutt.ac.th/capstone25/cp25sy2/',
    description:
      'Solved travel decision fatigue through personalized AI recommendations — reduced planning time by 70% and achieved 85% task completion rate.',
    techStack: ['Nuxt.js', 'Golang', 'Langchain', 'Gemini API'],
  },
  {
    id: 2,
    title: 'Kradan Kanban Board',
    category: 'Product Thinker',
    image: '/activities/SamoSIT.webp',
    link: '#',
    description:
      'Redesigned team task management to improve cross-team visibility — boosted on-time delivery by 35% and 2x faster blocker resolution.',
    techStack: ['Vue.js', 'Spring Boot', 'MySQL'],
  },
  {
    id: 3,
    title: 'BD Process Automation',
    category: 'Business Development',
    image: '/activities/climathon.webp',
    link: '#',
    description:
      'Identified and automated 5 repetitive BD workflows at Skooldio, reducing manual workload by 20% so the team could focus on strategic initiatives.',
    techStack: ['n8n', 'Google Sheets API', 'Python'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-black text-dark font-heading mb-4">
          Featured Projects
        </h2>
        <p className="text-muted font-body text-sm mb-2">
          Products I shaped — from identifying problems to delivering measurable outcomes.
        </p>
        <div className="w-full h-px bg-gray-200 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link href={project.link} key={project.id} className="group block" target="_blank">
              <div className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 h-full flex flex-col">
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[10px] font-body tracking-widest text-sage-dark uppercase mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-dark mb-2 group-hover:text-sage-dark transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted font-body text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {project.techStack && (
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-sage/20 text-dark text-[10px] font-body">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
