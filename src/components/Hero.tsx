'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className=" bg-light-gray overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-end min-h-[70vh]">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6 pb-16">
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
        <div className="flex-1 flex justify-center md:justify-end items-end">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[500px]">
            {/* Decorative background shape */}
            <div className="absolute bottom-0 right-0 w-[85%] h-[85%] bg-sage/30 rounded-tl-[80px]" />
            <div className="absolute bottom-4 right-4 w-[85%] h-[85%] border-2 border-sage-dark/20 rounded-tl-[80px]" />
            <Image
              src="/profile-removebg-preview.png"
              alt="Pheeraphat Dherachaisuphakij"
              fill
              className="object-contain object-bottom relative z-10 drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
