'use client';

export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--background)] text-[var(--foreground)] border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">JM Portfolio</h3>
          <p className="text-[var(--foreground)] mb-4 max-w-2xl">
            Full Stack Developer passionate about creating beautiful and functional web applications.
          </p>
          
          {/* Quick Links - Aligned with header navigation */}
          <div className="w-full">
            <h4 className="text-lg font-semibold mb-4 text-[var(--foreground)]">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
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
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-[var(--foreground)]">
            © 2025 JM Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 