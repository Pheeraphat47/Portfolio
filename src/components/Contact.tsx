'use client';

import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const navLinks = [
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Projects', href: '#projects' },
];

export default function Contact() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({ top: elem.offsetTop - 120, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-dark text-white">
      {/* Top CTA */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-white/60 font-body text-sm max-w-lg mx-auto mb-8">
            I&apos;m always open to discussing product strategy, new opportunities, or how I can contribute to your team.
          </p>
          <a
            href="mailto:pheeraphat.dhi@gmail.com"
            className="inline-block border-2 border-white text-white px-8 py-3 text-sm font-body tracking-wider hover:bg-white hover:text-dark transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-sage">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="8" width="18" height="13" rx="1" />
                  <path d="M7 8V5a5 5 0 0 1 10 0v3" />
                  <line x1="7" y1="12" x2="7" y2="17" />
                  <line x1="12" y1="12" x2="12" y2="17" />
                  <line x1="17" y1="12" x2="17" y2="17" />
                </svg>
              </div>
              <div>
                <p className="text-base font-heading font-bold leading-tight tracking-tight">
                  Pheeraphat
                </p>
                <p className="text-[9px] text-white/40 tracking-widest uppercase font-body">
                  Aspiring Product Manager
                </p>
              </div>
            </div>
            <p className="text-white/50 font-body text-xs leading-relaxed max-w-xs">
              Turning user problems into business impact through data-driven product decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-body tracking-widest uppercase text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/70 hover:text-white font-body transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-body tracking-widest uppercase text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:pheeraphat.dhi@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <FaEnvelope size={14} className="text-sage group-hover:text-sage-light" />
                  <span className="font-body text-sm">pheeraphat.dhi@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <FaPhone size={14} className="text-sage" />
                <span className="font-body text-sm">Available upon request</span>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/pheeraphat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <FaLinkedin size={14} className="text-sage group-hover:text-sage-light" />
                  <span className="font-body text-sm">linkedin.com/in/pheeraphat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 font-body text-xs">
            &copy; {new Date().getFullYear()} Pheeraphat Dherachaisuphakij. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 transition-colors"
            >
              <FaGithub size={14} />
            </a>
            <a
              href="https://linkedin.com/in/pheeraphat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 transition-colors"
            >
              <FaLinkedin size={14} />
            </a>
            <a
              href="mailto:pheeraphat.dhi@gmail.com"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/60 transition-colors"
            >
              <FaEnvelope size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
