'use client';

import { useState, useEffect } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Activities', href: '#activities' },
  { name: 'Contact Me', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 120,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-sm' : ''}`}
    >
      {/* Top Bar */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3"
          >
            <div className="text-sage-dark">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="8" width="18" height="13" rx="1" />
                <path d="M7 8V5a5 5 0 0 1 10 0v3" />
                <line x1="7" y1="12" x2="7" y2="17" />
                <line x1="12" y1="12" x2="12" y2="17" />
                <line x1="17" y1="12" x2="17" y2="17" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-dark leading-tight font-heading tracking-tight">
                Pheeraphat
              </h1>
              <p className="text-[10px] text-muted tracking-widest uppercase font-body">
                Fresh Graduate IT Student
              </p>
            </div>
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-muted hover:text-dark transition-colors font-body tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/Pheeraphat47" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-muted hover:text-dark hover:border-dark transition-colors">
              <FaGithub size={14} />
            </a>
            <a href="https://www.linkedin.com/in/pheeraphat-dhirachaisuphakij/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-muted hover:text-dark hover:border-dark transition-colors">
              <FaLinkedin size={14} />
            </a>
            <a href="mailto:pheeraphat.dhi@gmail.com"
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-muted hover:text-dark hover:border-dark transition-colors">
              <FaEnvelope size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-dark focus:outline-none ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-body text-muted hover:text-dark cursor-pointer tracking-wide"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-4 pt-4">
          <a href="https://github.com/Pheeraphat47" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-muted hover:text-dark transition-colors">
            <FaGithub size={14} />
          </a>
          <a href="https://www.linkedin.com/in/pheeraphat-dhirachaisuphakij/" target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-muted hover:text-dark transition-colors">
            <FaLinkedin size={14} />
          </a>
          <a href="mailto:pheeraphat.dhi@gmail.com"
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-muted hover:text-dark transition-colors">
            <FaEnvelope size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}