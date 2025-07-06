'use client';

export default function About() {
  const skills = [
    { name: 'CakePHP', level: 90 },
    { name: 'MYSQL', level: 90 },
    { name: 'PHP', level: 80 },
    { name: 'Javascript', level: 80 },
    { name: 'AWS (EC2, S3, ApiGateway)', level: 75 },
    { name: 'Docker', level: 70 },
    { name: 'React/Next.js', level: 55 },
    { name: 'Laravel', level: 50 },
  ];

  return (
    <section id="about" className="py-20 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            About Me
          </h2>
          <p className="text-xl text-[var(--foreground)] max-w-3xl mx-auto mb-4">
            Full Stack Developer with over 6 years of experience building and optimizing scalable backend systems using PHP, CakePHP, MySQL, and AWS, alongside dynamic front-end development with JavaScript, jQuery, React, and CSS. Skilled in Agile development, CI/CD implementation, and writing clean, maintainable code. Experienced in mentoring junior developers and collaborating cross-functionally to deliver high-quality applications on time. Passionate about problem-solving, performance tuning, and delivering impactful software solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-base text-[var(--muted)]">
            <span className="flex items-center gap-1">
              {/* Map Pin Icon */}
              <svg className="w-5 h-5 mr-1 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Baliuag, Bulacan
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              {/* Envelope Icon */}
              <svg className="w-5 h-5 mr-1 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:gmnojm@gmail.com" className="hover:underline">gmnojm@gmail.com</a>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              {/* Phone Icon */}
              <svg className="w-5 h-5 mr-1 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <a href="tel:+639925943915" className="hover:underline">+63 992 594 3915</a>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              Technical Skills
            </h3>
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Languages:</span> PHP, JavaScript, HTML, CSS
              </div>
              <div>
                <span className="font-semibold">Backend Frameworks:</span> CakePHP, Laravel, Next.js, Node.js
              </div>
              <div>
                <span className="font-semibold">Frontend Frameworks:</span> React, Next.js
              </div>
              <div>
                <span className="font-semibold">CSS Frameworks:</span> Tailwind CSS, Bootstrap
              </div>
              <div>
                <span className="font-semibold">Utilities:</span> jQuery
              </div>
              <div>
                <span className="font-semibold">Databases:</span> MySQL, MariaDB, IndexDB
              </div>
              <div>
                <span className="font-semibold">Tools & Platforms:</span> AWS, Docker, Git
              </div>
              <div>
                <span className="font-semibold">Methodologies:</span> Agile, CI/CD, TDD, RESTful API Development
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[var(--foreground)] pt-8">
              Leadership & Soft Skills
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[var(--foreground)]">
              <li>Team Leadership</li>
              <li>Mentorship</li>
              <li>Technical Decision-Making</li>
              <li>Code Review & Quality Assurance</li>
              <li>Cross-Functional Collaboration</li>
              <li>Project Roadmap Development</li>
              <li>Problem-solving</li>
              <li>Communication</li>
              <li>Adaptability</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              Skills Overview
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--foreground)]">{skill.name}</span>
                    <span className="text-[var(--foreground)]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 