'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 bg-light-gray">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center min-h-[80vh]">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6 pb-16 md:pb-0">
          <h1 className="text-5xl md:text-7xl font-black text-dark leading-[1.1] font-heading">
            Hello, I&apos;m<br />Pheeraphat!
          </h1>
          <p className="text-muted font-body text-base tracking-wide">
            Aspiring Product Manager — Turning user problems into business impact
          </p>
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block border-2 border-dark text-dark px-8 py-3 text-sm font-body tracking-wider hover:bg-dark hover:text-white transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[500px]">
            <Image
              src="/profile.jpg"
              alt="Pheeraphat Dherachaisuphakij"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
