'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
    return (
        <footer id="contact" className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

                    {/* Brand & Bio */}
                    <div className="md:w-1/3 text-center md:text-left space-y-4">
                        <h2 className="text-2xl font-bold tracking-tight">Pheeraphat.</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Product Manager / UX Researcher dedicated to building user-centric digital experiences.
                            Let&apos;s collaborate to bring ideas to life.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="md:w-1/3 text-center md:text-left space-y-4">
                        <h3 className="text-lg font-semibold text-gray-200">Get in Touch</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:dpheeraphat2547@gmail.com" className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-white transition-colors">
                                    <FaEnvelope /> dpheeraphat2547@gmail.com
                                </a>
                            </li>
                            <li>
                                <span className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                                    <FaPhone /> +66 (0) 99-999-9999
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="md:w-1/3 flex flex-col items-center md:items-end space-y-4">
                        <h3 className="text-lg font-semibold text-gray-200">Connect</h3>
                        <div className="flex gap-6 text-2xl">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-line-green transition-colors">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Pheeraphat Dherachaisuphakij. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
