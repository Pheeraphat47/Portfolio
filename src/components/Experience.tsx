'use client';

import { useState } from 'react';
import { IoClose, IoChevronForward } from 'react-icons/io5';

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    duration: string;
    details: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: "QA Automation Engineer (Contract)",
        company: "Siam Commercial Bank Public Company Limited",
        duration: "Sep – Feb 2025",
        details: [
            "Developed automated test scripts to validate core banking modules, improving test efficiency and regression coverage",
            "Performed API and backend testing to ensure data integrity and system reliability"
        ]
    },
    {
        id: 2,
        role: "Business Development Intern",
        company: "Skooldio Company Limited",
        duration: "Jun - Aug 2025",
        details: [
            "Built n8n automation workflows to optimize internal BD processes, reducing manual workload by 20% (Work on Skooldio Hackathon)",
            "Analyzed market and product performance data to identify growth opportunities",
            "Translated data insights into actionable recommendations to support decision-making for internal stakeholders"
        ]
    },
    {
        id: 3,
        role: "Product Owner Cooperative Intern",
        company: "Innovasive Company Limited",
        duration: "Jan - May 2025",
        details: [
            "Translated stakeholder and user needs into clear user stories and acceptance criteria",
            "Prioritized product backlog based on user impact, feasibility, and business goals",
            "Worked closely with UX and engineering teams to iterate features through feedback and testing",
            "Supported feature launches from discovery to release, including post-launch evaluation and improvement"
        ]
    },
    {
        id: 4,
        role: "UX Researcher Intern",
        company: "ADIREK & CO Company Limited",
        duration: "Jun - Jul 2024",
        details: [
            "Conducted usability testing and synthesized user feedback into actionable insights",
            "Collaborated with product and design teams to inform UI improvements and product decisions"
        ]
    },
    {
        id: 5,
        role: "Frontend Developer Intern",
        company: "Innovasive Company Limited",
        duration: "Jun - Jul 2023",
        details: [
            "Built responsive web interfaces and collaborated with designers and product teams to implement user requirements"
        ]
    }
];

export default function Experience() {
    const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

    const openModal = (exp: ExperienceItem) => {
        setSelectedExp(exp);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedExp(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
                    <div className="w-16 h-1 bg-line-green mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            onClick={() => openModal(exp)}
                            className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-line-green transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-center gap-6"
                        >
                            {/* Index Box */}
                            <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white flex items-center justify-center font-bold text-xl rounded-lg group-hover:bg-line-green transition-colors">
                                {index + 1}
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left w-full">
                                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                <p className="text-gray-600">{exp.company}</p>
                            </div>

                            {/* Duration & Arrow */}
                            <div className="flex items-center gap-4 text-gray-500 text-sm md:text-base whitespace-nowrap">
                                <span className="font-medium">{exp.duration}</span>
                                <IoChevronForward className="hidden md:block text-xl group-hover:text-line-green transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Backdrop */}
            {selectedExp && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={closeModal}
                >
                    {/* Modal Content */}
                    <div
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-start z-10">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 pr-8">{selectedExp.role}</h3>
                                <p className="text-line-green font-medium mt-1">{selectedExp.company}</p>
                                <p className="text-gray-500 text-sm mt-1">{selectedExp.duration}</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-2 bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors"
                                aria-label="Close modal"
                            >
                                <IoClose size={24} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-8">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h4>
                            <ul className="space-y-3">
                                {selectedExp.details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                        <span className="mt-2 w-1.5 h-1.5 bg-line-green rounded-full flex-shrink-0"></span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl text-right">
                            <button
                                onClick={closeModal}
                                className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
