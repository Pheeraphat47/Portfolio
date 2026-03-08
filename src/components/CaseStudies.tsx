"use client";

import { useState } from "react";
import Image from "next/image";
import CaseStudyDetail from "./CaseStudyDetail";

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
    problem?: CaseStudyStep;
    understanding?: CaseStudyStep;
    solutions?: CaseStudyStep;
    prototype?: CaseStudyStep;
    testing?: CaseStudyStep;
    launch?: CaseStudyStep;
  };
  techStack: string[];
}

const caseStudies: CaseStudyProject[] = [
  {
    id: 1,
    title: "Skooldio BD Process Automation",
    role: "Business Development Intern",
    duration: "Jun – Aug 2025",
    thumbnail: "/experience/skd4.jpg",
    summary:
      "Identified and automated repetitive BD workflows, reducing manual workload by 20% and enabling the team to focus on high-value strategic initiatives.",
    caseStudy: {
      problem: {
        title: "Identify the Problem",
        content:
          "The Business Development team spent significant time on repetitive manual tasks — data entry, lead tracking updates, and report generation — taking away from strategic work like market analysis and partnership outreach.",
        evidence:
          "Time-tracked team activities for 2 weeks and found that 20% of working hours were spent on tasks that could be automated.",
      },
      understanding: {
        title: "Understand the Problem",
        content:
          "Shadowed team members through their daily workflows, documented each step in detail, and identified bottlenecks. Created a process map highlighting 5 high-frequency, low-complexity tasks as automation candidates.",
      },
      solutions: {
        title: "Brainstorm Solutions",
        content:
          "Evaluated automation options: custom scripts, Zapier, n8n (self-hosted), and Make. Chose n8n for its flexibility, self-hosting capability (data privacy), and visual workflow builder that non-technical team members could maintain.",
      },
      prototype: {
        title: "Prototype & Mockup",
        content:
          "Built proof-of-concept automation flows for the 2 highest-impact tasks first: (1) automated lead data enrichment and (2) weekly performance report generation. Demoed to the team for feedback before full implementation.",
      },
      testing: {
        title: "Test & Iterate",
        content:
          "Ran automations in parallel with manual processes for 1 week to validate accuracy. Fixed edge cases with data formatting and added error notifications. Trained team members on monitoring and adjusting workflows.",
        keyInsight:
          "Building in failure notifications was critical — the team needed confidence that automated tasks were completing correctly before fully trusting the system.",
      },
      launch: {
        title: "Launch & Success Metrics",
        content:
          "Fully deployed 5 automation workflows and created documentation for the team to maintain and extend them independently.",
        metrics: [
          {
            label: "Manual Workload",
            value: "-20%",
            description: "Reduction in repetitive manual tasks",
          },
          {
            label: "Report Generation",
            value: "5min → auto",
            description: "From manual compilation to automated delivery",
          },
          {
            label: "Data Accuracy",
            value: "99.5%",
            description: "Automation accuracy vs manual baseline",
          },
        ],
        strategy:
          "Phased automation: start with 2 highest-impact workflows → validate → expand to remaining 3 tasks, with team training throughout.",
      },
    },
    techStack: ["n8n", "Google Sheets API", "REST APIs", "Python"],
  },
  {
    id: 2,
    title: "CU Co-op Store Revamp (Charm Case Competition)",
    role: "Business Analyst / Team Member",
    duration: "",
    thumbnail: "/activities/charmcasecompetition.webp",
    summary:
      "Proposed strategies to boost sales and student engagement at the CU Cooperative through a share-ownership system, product bundle promotions, and a short-term student internship program.",
    caseStudy: {
      problem: {
        title: "Identify the Problem",
        content:
          "The CU Cooperative faced declining sales revenue, low student engagement, and growing competition from both on- and off-campus vendors. Products also failed to meet students' practical needs.",
        evidence:
          "A survey of 77 students revealed that the main reason for not shopping at the cooperative was the absence of desired products or brands. Furthermore, 76.6% of students were unaware that the cooperative offered share memberships.",
      },
      understanding: {
        title: "Understand the Problem",
        content:
          "Analysis of the 2021 financial statements revealed zero expenditure on advertising and PR (0 THB), and the number of ordinary members was extremely low relative to the total student population — meaning students perceived the cooperative purely as a retail store rather than a community institution.",
      },
      solutions: {
        title: "Brainstorm Solutions",
        content:
          "Proposed 3 core strategies: 1) Drive student buy-in by promoting the cooperative's share-ownership program; 2) Revamp online and offline marketing, including curated product Starter Kits; 3) Launch a 2–4 week student internship program to build ownership and operational capacity.",
      },
      prototype: {
        title: "Prototype & Mockup",
        content:
          "Designed mockups for social media promotional posts, in-store signage, and sample Starter Kit bundles for first-year students — including a male uniform set (1,539 THB), female uniform set (1,119 THB), and engineering lab kit (2,399 THB).",
      },
      launch: {
        title: "Launch & Success Metrics",
        content:
          "Planned a 37,000 THB budget covering PR activities, marketing campaigns, and the student internship program.",
        metrics: [
          {
            label: "Serviceable Obtainable Market (SOM)",
            value: "6,000,000 THB",
            description:
              "Minimum addressable market value for uniform sales, estimated at ~50% capture rate.",
          },
        ],
        strategy:
          "Lead with a clear key message — 'Complete, Compliant, Only at CU CO-OP' — and leverage the cooperative's proximity to student dormitories as a distribution advantage.",
      },
    },
    techStack: ["Business Strategy", "Market Analysis", "Survey Design"],
  },

  {
    id: 3,
    title: "Wat to Park: Pocket Park (Bangkok Climathon)",
    role: "Team Member",
    duration: "",
    thumbnail: "/activities/climathon.webp",
    summary:
      "Proposed converting underutilized temple land (Dhamma Zone) at Wat Kaew Jaem Fa into a community Pocket Park to address the critical shortage of green space in Bangkok.",
    caseStudy: {
      problem: {
        title: "Identify the Problem",
        content:
          "Bangkok residents have limited access to green space. Commuting to parks by vehicle contributes to CO2 emissions, traffic congestion, and the Urban Heat Island effect.",
        evidence:
          "Bangkok has only 40 public green areas — critically insufficient for a city of its population size.",
      },
      understanding: {
        title: "Understand the Problem",
        content:
          "Conducted spatial analysis using GIS, Goodwalk Maps, and Space Syntax Analysis, supplemented by a pilot survey on park-visiting behaviour. Findings revealed that Bangkok's 488 temple grounds represent significant untapped potential for conversion into accessible public green spaces.",
      },
      solutions: {
        title: "Brainstorm Solutions",
        content:
          "Proposed the Dhamma Zone of Wat Kaew Jaem Fa in Bang Rak district as a pilot site — chosen for its central location within a dense residential and commercial area with high foot traffic, making it ideal as a node in a broader Green Space Network.",
      },
      prototype: {
        title: "Prototype & Mockup",
        content:
          "Presented architectural layout concepts and landscaping models for the Pocket Park, designed to restore local biodiversity and create a functional, welcoming public space for the surrounding community.",
      },
      launch: {
        title: "Launch & Success Metrics",
        content:
          "Defined a 15-year phased project roadmap (0–5, 5–10, 10–15 years) covering site selection, funding acquisition, construction, and a behaviour-change communication campaign to encourage community adoption.",
        metrics: [
          {
            label: "Environmental Impact",
            value: "CO2 Reduction",
            description:
              "Reduces CO2 contributing to global warming and increases local oxygen levels through vegetation.",
          },
          {
            label: "Community Value",
            value: "Quality of Life",
            description:
              "Improves residents' wellbeing by providing accessible space for social interaction and outdoor activities.",
          },
        ],
        strategy:
          "Build broad multi-stakeholder collaboration across Bangkok Metropolitan Administration (BMA), the National Health Foundation (THAIHEALTH), temples, academic institutions, and local communities.",
      },
    },
    techStack: [
      "GIS / Spatial Analysis",
      "Space Syntax Analysis",
      "Urban Planning",
      "Design Thinking",
    ],
  },
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyProject | null>(
    null,
  );

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl md:text-5xl text-sage-dark font-bold font-heading mb-4">
          Projects & Case Studies
        </h2>
        <p className="text-muted font-body text-sm mb-2">
          Deep dives into how I identify problems, think through solutions, and
          deliver measurable impact.
        </p>
        <div className="w-full h-px bg-gray-200 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              className="group text-left bg-white overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 h-full flex flex-col"
              onClick={() => {
                setSelectedStudy(study);
                document.body.style.overflow = "hidden";
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
            document.body.style.overflow = "";
          }}
        />
      )}
    </section>
  );
}
