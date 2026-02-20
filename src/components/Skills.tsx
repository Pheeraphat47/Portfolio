'use client';

const skills = [
    {
        category: "Hard Skills",
        items: ["Market Research", "Competitive Analysis", "Agile & Scrum", "Data Analysis", "Technical Understanding"]
    },
    {
        category: "Soft Skills",
        items: ["Leadership", "Adaptability", "Communication", "Collaboration", "Analytical Thinking", "Problem-Solving"]
    },
    {
        category: "Tools & Technologies",
        items: ["Jira", "Miro", "Trello", "Figma", "Power BI", "Google Sheets", "Google Slides", "Microsoft Office", "Next.js", "Tailwind CSS"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Proficiencies</h2>
                    <div className="w-16 h-1 bg-line-green mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600">A mix of technical knowledge and interpersonal abilities.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-100">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-green-50 hover:text-line-green transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
