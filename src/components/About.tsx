'use client';

import Image from 'next/image';
import { IoCheckmarkSharp } from 'react-icons/io5';

const skills = [
  'Product Management',
  'UX Research',
  'QA Automation',
  'Data Analysis',
  'Agile & Scrum',
  'Leadership',
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="flex-1 relative">
            <div className="absolute -left-4 -top-4 w-full h-full bg-sage/30 -z-10" />
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              <Image
                src="/profile.jpg"
                alt="Pheeraphat Dherachaisuphakij"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-dark font-heading leading-tight">
              A Few Words<br />About Me
            </h2>

            <p className="font-heading font-bold text-dark text-lg">
              From user problems to business impact &mdash;
            </p>

            <p className="text-muted font-body text-sm leading-relaxed">
              I bridge the gap between user needs and business goals. As an IT student
              at KMUTT with hands-on experience as a Product Owner, UX Researcher,
              and Business Development intern, I bring a data-driven approach to product
              decisions — from discovery and user research to prioritization, delivery,
              and measuring success.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              <span className="text-dark font-body font-bold text-sm mr-2">I&apos;m good at:</span>
              {skills.map((skill) => (
                <span key={skill} className="flex items-center gap-1 text-sm text-muted font-body">
                  <IoCheckmarkSharp className="text-sage-dark" />
                  {skill}
                </span>
              ))}
            </div>

            <p className="text-muted font-body text-sm leading-relaxed">
              My strength is in the full product lifecycle: identifying real user pain points
              through research, prioritizing solutions based on impact and feasibility,
              coordinating cross-functional teams to ship, and measuring results with clear
              success metrics. I believe great products come from deeply understanding
              the people who use them.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="border-2 border-dark text-dark px-6 py-3 text-sm font-body tracking-wider hover:bg-dark hover:text-white transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="border-2 border-dark text-dark px-6 py-3 text-sm font-body tracking-wider hover:bg-dark hover:text-white transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
