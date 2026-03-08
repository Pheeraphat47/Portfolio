'use client';

import { useState } from 'react';
import Image from 'next/image';
import CaseStudyDetail from './CaseStudyDetail';

export interface CaseStudyStep {
  title: string;
  content: string;
  evidence?: string;
  keyInsight?: string;
  artifacts?: string[];
  metrics?: { label: string; value: string; description: string }[];
  strategy?: string;
}

export interface CaseStudyProject {
  id: number;
  title: string;
  role: string;
  duration: string;
  thumbnail: string;
  summary: string;
  caseStudy: {
    problem: CaseStudyStep;
    understanding: CaseStudyStep;
    solutions: CaseStudyStep;
    prototype: CaseStudyStep;
    testing: CaseStudyStep;
    launch: CaseStudyStep;
  };
  techStack: string[];
}

const caseStudies: CaseStudyProject[] = [
  {
    id: 1,
    title: 'Yakteaw — AI Travel Recommendation Platform',
    role: 'Product Owner / Scrum Master',
    duration: 'Aug 2025 – Present',
    thumbnail: '/activities/yakteaw.webp',
    summary:
      'Solved travel decision fatigue by building a personalized AI recommendation platform that helps users plan trips in minutes instead of hours.',
    caseStudy: {
      problem: {
        title: 'Identify the Problem',
        content:
          'Travelers spend 3–5 hours per trip researching destinations across multiple platforms. Information is scattered, reviews are inconsistent, and recommendations rarely match personal preferences — leading to decision fatigue and suboptimal travel experiences.',
        evidence:
          'Interviewed 15 users and found that 80% felt overwhelmed by the number of choices and inconsistent information across platforms.',
      },
      understanding: {
        title: 'Understand the Problem',
        content:
          'Conducted 15 user interviews, performed competitive analysis (TripAdvisor, Google Maps, Wongnai), created 3 user personas, and mapped pain points through an Affinity Diagram. Key insight: users don\'t just want "top places" — they want recommendations that match their mood, budget, and travel style.',
      },
      solutions: {
        title: 'Brainstorm Solutions',
        content:
          'Brainstormed 5 approaches and evaluated them using an Impact–Effort Matrix. Selected AI-powered personalized recommendations because of high user impact and feasibility with our tech stack. Alternative approaches (curated lists, social-based recs) were deprioritized due to lower personalization and scalability.',
      },
      prototype: {
        title: 'Prototype & Mockup',
        content:
          'Created low-fidelity wireframes in Figma, mapped out the core user flow (input preferences → get recommendations → build itinerary), then iterated to a high-fidelity interactive prototype. Validated information architecture with card sorting sessions.',
      },
      testing: {
        title: 'Test & Iterate',
        content:
          'Ran usability tests with 10 users using think-aloud protocol. Collected feedback across 3 iteration rounds. Major finding: users wanted to understand why the AI recommended each place — which led to adding a "Why this place?" explanation feature.',
        keyInsight:
          'Users need transparency in AI recommendations to build trust — adding reasoning behind suggestions increased user confidence by 60%.',
      },
      launch: {
        title: 'Launch & Success Metrics',
        content:
          'Executed a phased launch: soft launch with 50 early adopters → gathered feedback → full public launch. Won the Botnoi OpenAI Hackfest in the Hospitality category.',
        metrics: [
          { label: 'Planning Time Reduction', value: '70%', description: 'From 3-5 hours to under 30 minutes' },
          { label: 'Task Completion Rate', value: '85%', description: 'Users successfully created a travel plan' },
          { label: 'User Satisfaction', value: '4.5/5', description: 'Post-launch survey score' },
        ],
        strategy:
          'Phased rollout: Early adopter group (50 users) → iterate on feedback → public launch via university channels and social media.',
      },
    },
    techStack: ['Nuxt.js', 'Tailwind CSS', 'Golang', 'Langchain', 'Docker', 'Gemini API'],
  },
  {
    id: 2,
    title: 'IT Bangmod Kradan Kanban',
    role: 'Full Stack Developer / Product Thinker',
    duration: 'Jan – May 2024',
    thumbnail: '/activities/SamoSIT.webp',
    summary:
      'Redesigned a team task management workflow to reduce task completion time and improve cross-team visibility through a Kanban-based system.',
    caseStudy: {
      problem: {
        title: 'Identify the Problem',
        content:
          'Student project teams struggled with tracking task progress across multiple members. Existing tools were either too complex (Jira) or too simple (shared spreadsheets), leading to missed deadlines and duplicated work.',
        evidence:
          'Surveyed 30 students across 6 project teams — 73% reported losing track of task assignments at least once per sprint.',
      },
      understanding: {
        title: 'Understand the Problem',
        content:
          'Mapped the existing workflow through observation and interviews. Identified 3 core pain points: (1) no single source of truth for task status, (2) unclear ownership of tasks, and (3) no visibility into blockers until standup meetings.',
      },
      solutions: {
        title: 'Brainstorm Solutions',
        content:
          'Evaluated 4 approaches: enhanced spreadsheet, Trello integration, custom Kanban board, and Slack bot. Chose a custom Kanban board to provide the right level of simplicity while supporting real-time status updates and team-specific workflows.',
      },
      prototype: {
        title: 'Prototype & Mockup',
        content:
          'Designed wireframes for the board view, task creation flow, and notification system. Validated with 2 pilot teams before development. Focused on drag-and-drop UX for intuitive status changes.',
      },
      testing: {
        title: 'Test & Iterate',
        content:
          'Deployed to 3 teams for a 2-week pilot. Collected daily feedback and iterated on: filter/sort functionality, task limit per column (WIP limits), and notification frequency. Users requested a deadline warning feature — added in iteration 2.',
        keyInsight:
          'WIP limits were initially resisted but became the most valued feature — teams reported better focus and fewer context switches.',
      },
      launch: {
        title: 'Launch & Success Metrics',
        content:
          'Rolled out to the full cohort of project teams within the department.',
        metrics: [
          { label: 'On-Time Delivery', value: '+35%', description: 'Tasks completed before deadline' },
          { label: 'Blocker Resolution', value: '2x faster', description: 'Average time to resolve blockers' },
          { label: 'Team Adoption', value: '90%', description: 'Teams actively using the board daily' },
        ],
        strategy:
          'Gradual rollout: pilot with 3 teams → address top feedback → department-wide launch with onboarding guide.',
      },
    },
    techStack: ['Vue.js', 'Spring Boot', 'MySQL'],
  },
  {
    id: 3,
    title: 'Skooldio BD Process Automation',
    role: 'Business Development Intern',
    duration: 'Jun – Aug 2025',
    thumbnail: '/activities/climathon.webp',
    summary:
      'Identified and automated repetitive BD workflows, reducing manual workload by 20% and enabling the team to focus on high-value strategic initiatives.',
    caseStudy: {
      problem: {
        title: 'Identify the Problem',
        content:
          'The Business Development team spent significant time on repetitive manual tasks — data entry, lead tracking updates, and report generation — taking away from strategic work like market analysis and partnership outreach.',
        evidence:
          'Time-tracked team activities for 2 weeks and found that 20% of working hours were spent on tasks that could be automated.',
      },
      understanding: {
        title: 'Understand the Problem',
        content:
          'Shadowed team members through their daily workflows, documented each step in detail, and identified bottlenecks. Created a process map highlighting 5 high-frequency, low-complexity tasks as automation candidates.',
      },
      solutions: {
        title: 'Brainstorm Solutions',
        content:
          'Evaluated automation options: custom scripts, Zapier, n8n (self-hosted), and Make. Chose n8n for its flexibility, self-hosting capability (data privacy), and visual workflow builder that non-technical team members could maintain.',
      },
      prototype: {
        title: 'Prototype & Mockup',
        content:
          'Built proof-of-concept automation flows for the 2 highest-impact tasks first: (1) automated lead data enrichment and (2) weekly performance report generation. Demoed to the team for feedback before full implementation.',
      },
      testing: {
        title: 'Test & Iterate',
        content:
          'Ran automations in parallel with manual processes for 1 week to validate accuracy. Fixed edge cases with data formatting and added error notifications. Trained team members on monitoring and adjusting workflows.',
        keyInsight:
          'Building in failure notifications was critical — the team needed confidence that automated tasks were completing correctly before fully trusting the system.',
      },
      launch: {
        title: 'Launch & Success Metrics',
        content:
          'Fully deployed 5 automation workflows and created documentation for the team to maintain and extend them independently.',
        metrics: [
          { label: 'Manual Workload', value: '-20%', description: 'Reduction in repetitive manual tasks' },
          { label: 'Report Generation', value: '5min → auto', description: 'From manual compilation to automated delivery' },
          { label: 'Data Accuracy', value: '99.5%', description: 'Automation accuracy vs manual baseline' },
        ],
        strategy:
          'Phased automation: start with 2 highest-impact workflows → validate → expand to remaining 3 tasks, with team training throughout.',
      },
    },
    techStack: ['n8n', 'Google Sheets API', 'REST APIs', 'Python'],
  },
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyProject | null>(null);

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-black text-dark font-heading mb-4">
          Case Studies
        </h2>
        <p className="text-muted font-body text-sm mb-2">
          Deep dives into how I identify problems, think through solutions, and deliver measurable impact.
        </p>
        <div className="w-full h-px bg-gray-200 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              className="group text-left bg-white overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 h-full flex flex-col"
              onClick={() => {
                setSelectedStudy(study);
                document.body.style.overflow = 'hidden';
              }}
            >
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src={study.thumbnail}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[10px] font-body tracking-widest text-sage-dark uppercase mb-2">
                  {study.role}
                </span>
                <h3 className="text-lg font-heading font-bold text-dark mb-2 group-hover:text-sage-dark transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted font-body text-xs leading-relaxed mb-4">
                  {study.summary}
                </p>
                <span className="text-sage-dark font-body text-xs font-bold mt-auto group-hover:underline">
                  Read Case Study →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <CaseStudyDetail
          study={selectedStudy}
          onClose={() => {
            setSelectedStudy(null);
            document.body.style.overflow = '';
          }}
        />
      )}
    </section>
  );
}
