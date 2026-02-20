'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// Make sure to copy the profile image to public if not already there, or use a placeholder
import profile from '../../public/profile.jpg';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 bg-gray-50">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h2 className="text-sm font-semibold tracking-widest text-line-green uppercase">
                        Product Management & UX Research
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                        Hi, I&apos;m <span className="text-line-green">Pheeraphat.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                        I bridge the gap between business goals, user needs, and technical feasibility. Passionate about
                        creating impactful digital products through data-driven decisions and user-centric design.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-line-green text-white font-medium rounded-lg hover:bg-[#05b34c] transition-colors w-full sm:w-auto text-center"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-800 hover:text-gray-900 transition-colors w-full sm:w-auto text-center"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="flex justify-center md:justify-start gap-6 pt-6 text-2xl text-gray-500">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-line-green transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:dpheeraphat2547@gmail.com" className="hover:text-red-500 transition-colors">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 flex justify-center md:justify-end relative">
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-green-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                        <Image
                            src={profile}
                            alt="Pheeraphat Dherachaisuphakij"
                            fill
                            className="object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
