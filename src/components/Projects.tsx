'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: "Yakteaw (AI Travel Recommendation)",
        category: "Full Stack / AI",
        image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F29ac087d-0260-45d9-aece-647ea06c448a%2Fimage.png?table=block&id=121e98c0-c946-805e-bf6a-e7dca267bf6a&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=720&userId=&cache=v2",
        link: "https://tattered-hardboard-505.notion.site/Portfolio-6ec0270e2b7e44b0b5f98abd67c68002?p=119e98c0c946805eb253e28fc4b1477a&pm=c",
        description: "Personalized travel recommendations using Nuxt.js, Golang, and Gemini AI."
    },
    {
        id: 2,
        title: "IT Bangmod Kradan Kanban",
        category: "Web Development",
        image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F3eef9c75-ef5c-4e61-a284-4dca2d6a0cac%2Fimage.png?table=block&id=102e98c0-c946-8053-a928-d1cb60534d38&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=720&userId=&cache=v2",
        link: "#",
        description: "A Kanban board application for managing tasks efficiently."
    },
    {
        id: 3,
        title: "MOTTY",
        category: "Web Design",
        image: "https://tattered-hardboard-505.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fde7053b8-41e2-4a9c-b529-0f9c3cb781e1%2F6008f386-c8a3-43ac-8fe0-3e564a560505%2FUntitled.png?table=block&id=f6f9ec22-1acc-4f8a-95cf-633fd1a8d885&spaceId=de7053b8-41e2-4a9c-b529-0f9c3cb781e1&width=1400&userId=&cache=v2",
        link: "#",
        description: "Creative web design project focusing on aesthetics and user experience."
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <div className="w-16 h-1 bg-line-green mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600">Some of my works ranging from Web Development to Product Design.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link href={project.link} key={project.id} className="group block" target="_blank">
                            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <span className="text-xs font-semibold tracking-wider text-line-green uppercase mb-2">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-line-green transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
