'use client';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
                    <div className="w-16 h-1 bg-line-green mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-600 leading-relaxed">
                    {/* Education Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">King Mongkut’s University of Technology Thonburi, Bangkok, Thailand</h3>
                            <p className="text-gray-500">Bachelor of Science in Information Technology</p>
                        </div>
                        <span className="text-line-green font-semibold mt-2 md:mt-0">2022 – Present</span>
                    </div>

                    {/* Achievements List */}
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <span className="text-line-green font-bold mt-1">●</span>
                            <span>Recipient of <span className="font-semibold text-gray-900">Saad-Lueang-RueangRung Creativity and Innovation Scholarship</span> with 100% tuition fee waiver and monthly stipends supported, KMUTT Academic year 2023</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-line-green font-bold mt-1">●</span>
                            <span>Recipient of <span className="font-semibold text-gray-900">Chiaranaiphet Scholarship</span>, KMUTT Academic year 2023</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-line-green font-bold mt-1">●</span>
                            <span><span className="font-semibold text-gray-900">SIT Outstanding Accomplishment Scholarship</span></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-line-green font-bold mt-1">●</span>
                            <span>Former Vice President of <span className="font-semibold text-gray-900">SAMO SIT</span></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-line-green font-bold mt-1">●</span>
                            <span>Beta Microsoft Learn Student Ambassadors and Google Developer Student Club (Core Team)</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-line-green font-bold mt-1">●</span>
                            <span>Member of SIT MUSIC and SIT PHOTO CLUB</span>
                        </li>
                    </ul>
                    {/* Additional Info */}
                    <div className="pt-6 space-y-4">
                        <p>
                            <span className="font-bold text-gray-900">Certifications:</span> Google Project Management Certificate (Coursera), Product Management Bootcamp (8th) from Skooldio (Both Discovery and Delivery phase)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
