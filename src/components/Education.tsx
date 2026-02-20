'use client';

import { FaUniversity, FaAward, FaCertificate, FaUsers } from 'react-icons/fa';

export default function Education() {
    return (
        <section id="education" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
                    <div className="w-16 h-1 bg-line-green mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main Degree Card */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-lg text-line-green shadow-sm">
                                    <FaUniversity size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">King Mongkut’s University of Technology Thonburi</h3>
                                    <p className="text-gray-600">Bachelor of Science in Information Technology</p>
                                </div>
                            </div>
                            <span className="mt-4 md:mt-0 px-4 py-1.5 bg-line-green/10 text-line-green font-semibold rounded-full text-sm">
                                2022 – Present
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Scholarships & Honors */}
                        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <FaAward className="text-line-green text-xl" />
                                <h4 className="font-bold text-gray-900">Scholarships & Honors</h4>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-line-green rounded-full mt-1.5 shrink-0"></span>
                                    <span><strong className="text-gray-900">Saad-Lueang-RueangRung Scholarship:</strong> 100% tuition waiver & stipend (Creative & Innovation)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-line-green rounded-full mt-1.5 shrink-0"></span>
                                    <span><strong className="text-gray-900">Chiaranaiphet Scholarship:</strong> Academic Excellence (2023)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-line-green rounded-full mt-1.5 shrink-0"></span>
                                    <span><strong className="text-gray-900">SIT Outstanding Accomplishment:</strong> Recognized Student Activity</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-line-green rounded-full mt-1.5 shrink-0"></span>
                                    <span><strong className="text-gray-900">Hall of Fame:</strong> SIT KMUTT Student Award</span>
                                </li>
                            </ul>
                        </div>

                        {/* Activities & Certifications */}
                        <div className="space-y-6">
                            {/* Leadership */}
                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaUsers className="text-line-green text-xl" />
                                    <h4 className="font-bold text-gray-900">Leadership & Activities</h4>
                                </div>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-line-green rounded-full mt-1.5 shrink-0"></span>
                                        <span>Former Vice President of <strong className="text-gray-900">SAMO SIT</strong></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-line-green rounded-full mt-1.5 shrink-0"></span>
                                        <span>Microsoft Learn Student Ambassador (Beta)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-line-green rounded-full mt-1.5 shrink-0"></span>
                                        <span>Google Developer Student Club (Core Team)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-line-green rounded-full mt-1.5 shrink-0"></span>
                                        <span>Member of SIT MUSIC and SIT PHOTO CLUB</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Certifications */}
                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaCertificate className="text-line-green text-xl" />
                                    <h4 className="font-bold text-gray-900">Certifications</h4>
                                </div>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-line-green rounded-full mt-1.5 shrink-0"></span>
                                        <span>Google Project Management (Coursera)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-line-green rounded-full mt-1.5 shrink-0"></span>
                                        <span>Product Management Bootcamp 8th (Skooldio)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
