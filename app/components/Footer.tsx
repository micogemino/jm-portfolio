'use client';

export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">JM Portfolio</h3>
          <p className="text-[var(--foreground)] mb-2">
            Full Stack Developer passionate about creating beautiful and functional web applications.
          </p>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Quick Links</h4>
            <ul className="flex flex-wrap justify-center gap-4">
              <li><a href="#home" className="text-[var(--foreground)] hover:underline transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-[var(--foreground)] hover:underline transition-colors duration-200">About</a></li>
              <li><a href="#projects" className="text-[var(--foreground)] hover:underline transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="text-[var(--foreground)] hover:underline transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-[var(--foreground)]">
            © 2024 JM Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 