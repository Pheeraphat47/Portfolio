'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Activity {
    id: number;
    title: string;
    role: string;
    organization?: string;
    duration: string;
    images: string[];
    details: string[];
    techStack?: string[];
    link?: string;
    github?: string;
}

const activities: Activity[] = [
    {
        id: 1,
        title: "Yakteaw (AI Travel Recommendation Platform)",
        role: "Won the Botnoi OpenAI Hackfest in the Hospitality & Food & Beverage category",
        duration: "Aug 2025 - Present",
        images: ["/activities/yakteaw.webp"],
        details: [
            "Focused on solving user travel decision pain points through personalized recommendations",
            "Evaluated AI output quality and iterated prompts to improve recommendation relevance"
        ],
        techStack: ["Nuxt.js", "Tailwind CSS", "Golang", "Langchain", "GitLab CI/CD", "Docker", "Gemini", "Google Maps API"],
        link: "https://bscit.sit.kmutt.ac.th/capstone25/cp25sy2/"
    },
    {
        id: 2,
        title: "Bangkok Climathon Environhack",
        role: "1st Runner-Up",
        duration: "Oct 2022",
        images: ["/activities/climathon.webp"],
        details: [
            "Competed among 9 teams in the final round, conducted in-depth SWOT Analysis to address augmentin green spaces in Bangkok",
            "Assisted in operational planning for the project's seamless execution"
        ]
    },
    {
        id: 3,
        title: "Charm Case Competition",
        role: "1st Runner-Up at Chulalongkorn University",
        duration: "Aug - Sep 2022",
        images: ["/activities/charmcasecompetition.webp"],
        details: [
            "Competed among 51 University teams, created a competitive strategy for the Chula Co-op Store business"
        ]
    },
    {
        id: 4,
        title: "Vice President of the Student Association, School of Information Technology",
        role: "Student Representative & Primary Liaison",
        duration: "2023 - 2024",
        images: [
            "/activities/SamoSIT.webp",
            "/activities/SamoSIT.jpg",
            "/activities/SamoSIT3.jpg",
            "/activities/SamoSIT4.png",
            "/activities/SamoSIT5.png"
        ],
        details: [
            "Served as a student representative and primary liaison with faculty and university student organizations",
            "Led planning and execution of faculty-level activities, managing teams and timelines",
            "Aligned budgets and resources to support key events such as IT3K, SIT Open House, IT Starterpack, and SIT HelloWorld"
        ]
    },
    {
        id: 5,
        title: "Vice President of KMUTT Startup Playground",
        role: "Vice President & Project Coordinator",
        duration: "2023 - 2024",
        images: [
            "/activities/kmuttstartupplayground1.webp",
            "/activities/kmuttstartupplayground2.webp",
            "/activities/kmuttstartupplayground3.webp",
            "/activities/kmuttstartupplayground4.webp"
        ],
        details: [
            "Business Innovation: Facilitated hands-on activities for ideating innovative business solutions",
            "Investor Pitching: Arranged pitching sessions to impart effective presentation skills to investors",
            "Networking: Created opportunities for interactions with industry professionals to gain valuable insights",
            "Speaker and Judge Coordination: Handled logistics and communications to ensure engaging sessions",
            "Sponsor Management: Established and nurtured sponsor relationships",
            "Event Organization: Supervised planning and execution for a seamless event experience"
        ]
    }
];

// Slideshow Component
function ImageSlideshow({ 
    images, 
    alt, 
    className = "",
    imageClassName = "",
    showIndicators = true
}: { 
    images: string[]; 
    alt: string; 
    className?: string;
    imageClassName?: string;
    showIndicators?: boolean;
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        setCurrentIndex(index);
    };

    if (images.length === 1) {
        return (
            <div className={`relative ${className}`}>
                <Image
                    src={images[0]}
                    alt={alt}
                    fill
                    className={imageClassName}
                />
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <Image
                src={images[currentIndex]}
                alt={`${alt} - ${currentIndex + 1}`}
                fill
                className={imageClassName}
            />
            
            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                aria-label="Previous image"
            >
                <FaChevronLeft size={16} />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                aria-label="Next image"
            >
                <FaChevronRight size={16} />
            </button>

            {/* Indicators */}
            {showIndicators && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => goToSlide(e, index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentIndex 
                                    ? 'bg-white w-4' 
                                    : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Image Counter */}
            <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 text-white text-xs rounded-md z-10">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}

export default function Activities() {
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

    const openModal = (activity: Activity) => {
        setSelectedActivity(activity);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedActivity(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="activities" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Extracurricular Activities</h2>
                    <div className="w-16 h-1 bg-line-green mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600">Competitions, Hackathons, and Projects that shaped my journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            onClick={() => openModal(activity)}
                            className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                        >
                            {/* Image Container with Slideshow */}
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <ImageSlideshow
                                    images={activity.images}
                                    alt={activity.title}
                                    className="h-full w-full"
                                    imageClassName="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" />
                            </div>

                            {/* Content - Title Only */}
                            <div className="p-6 text-center bg-gray-50 flex-grow flex items-center justify-center">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-line-green transition-colors">
                                    {activity.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedActivity && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200 flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white text-gray-500 hover:text-red-500 rounded-full z-10 transition-colors shadow-sm"
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Modal Image with Slideshow */}
                        <div className="relative h-96 w-full flex-shrink-0 bg-black">
                            <ImageSlideshow
                                images={selectedActivity.images}
                                alt={selectedActivity.title}
                                className="h-full w-full"
                                imageClassName="object-contain"
                            />
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            <div className="mb-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900">{selectedActivity.title}</h3>
                                    <span className="px-3 py-1 bg-green-50 text-line-green text-sm font-semibold rounded-full w-fit">
                                        {selectedActivity.duration}
                                    </span>
                                </div>
                                <p className="text-lg font-medium text-gray-700">{selectedActivity.role}</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {selectedActivity.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                                        <span className="mt-2 w-1.5 h-1.5 bg-line-green rounded-full flex-shrink-0"></span>
                                        <span className="leading-relaxed">{detail}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            {selectedActivity.techStack && (
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedActivity.techStack.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Links */}
                            <div className="flex gap-4 pt-4 border-t border-gray-100">
                                {selectedActivity.github && (
                                    <Link
                                        href={selectedActivity.github}
                                        target="_blank"
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                                    >
                                        <FaGithub />
                                        <span>View Code</span>
                                    </Link>
                                )}
                                {selectedActivity.link && (
                                    <Link
                                        href={selectedActivity.link}
                                        target="_blank"
                                        className="flex items-center gap-2 px-4 py-2 bg-line-green text-white rounded-lg hover:bg-[#05b34c] transition-colors"
                                    >
                                        <FaExternalLinkAlt />
                                        <span>View Project</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
