'use client';

import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';

export default function Header() {
  const { theme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--background)] text-[var(--foreground)] backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Image
              src={theme === 'dark' ? "/logos/portfolio-light.png" : "/logos/portfolio-dark.png"}
              alt="{gmnjm} </>"
              width={70}
              height={70}
              className="object-contain"
              priority
            />
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              className="text-[var(--foreground)] hover:underline transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[var(--foreground)] hover:underline transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-[var(--foreground)] hover:underline transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-[var(--foreground)] hover:underline transition-colors duration-200"
            >
              Education
            </a>
            <a
              href="#projects"
              className="text-[var(--foreground)] hover:underline transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[var(--foreground)] hover:underline transition-colors duration-200"
            >
              Contact
            </a>
            <ThemeToggle />
          </nav>

          {/* Hamburger Button for Mobile */}
          <button
            className={`md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${mobileOpen ? 'hidden' : ''}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer via Portal */}
      {mobileOpen && typeof window !== 'undefined' && ReactDOM.createPortal(
        <div className="fixed inset-0 z-[9999]">
          <div className="absolute inset-0 bg-[var(--background)]" />
          <nav className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-8">
            <button
              className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#home" className="text-2xl font-semibold hover:underline" onClick={() => setMobileOpen(false)}>Home</a>
            <a href="#about" className="text-2xl font-semibold hover:underline" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#experience" className="text-2xl font-semibold hover:underline" onClick={() => setMobileOpen(false)}>Experience</a>
            <a href="#education" className="text-2xl font-semibold hover:underline" onClick={() => setMobileOpen(false)}>Education</a>
            <a href="#projects" className="text-2xl font-semibold hover:underline" onClick={() => setMobileOpen(false)}>Projects</a>
            <a href="#contact" className="text-2xl font-semibold hover:underline" onClick={() => setMobileOpen(false)}>Contact</a>
            <div className="pt-8"><ThemeToggle /></div>
          </nav>
        </div>,
        document.body
      )}
    </header>
  );
} 