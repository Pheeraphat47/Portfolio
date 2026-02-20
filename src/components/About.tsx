'use client';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-600 leading-relaxed text-center md:text-left">
                    <p>
                        I&apos;m passionate about <span className="font-semibold text-gray-900">Product Management</span>, <span className="font-semibold text-gray-900">Business Development</span>, <span className="font-semibold text-gray-900">Quality Assurance</span>, and <span className="font-semibold text-gray-900">UX Research</span>.
                    </p>
                    <p>
                        As the former vice president of <span className="font-semibold text-blue-600">SAMO SIT</span>, I have experience working with cross-functional teams and organizing activities for SIT KMUTT students.
                        I recently completed the <span className="font-semibold text-gray-900">Google Project Management Career Certificate</span>, which covers traditional and Agile project management.
                    </p>
                    <p>
                        My intern roles as a software developer and UX researcher have refined my technical and user-centered design skills. Additionally, participating in Hackathons and Startup Competitions has enhanced my creativity, solution development, and product creation abilities.
                    </p>
                </div>
            </div>
        </section>
    );
}
