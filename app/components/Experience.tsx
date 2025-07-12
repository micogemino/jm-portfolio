'use client';

import TechIcon from './TechIcon';

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Leader",
      company: "Trade Dynamics Consulting Int'l Inc",
      period: "2021 - Present",
      location: "Philippines",
      description: "Mentored junior developers through 1900+ code reviews, enforcing coding standards and improving overall code quality by 30%. Collaborated closely with product managers to define project roadmaps, aligning technical execution with business objectives and stakeholder expectations. Oversaw the enhancement and maintenance of 8+ web applications serving the FMCG sector, spanning administration, ticketing, logistics, asset and project management, and API integrations. Led a team of 6 developers to consistently deliver updates on time and with high client satisfaction.",
      technologies: ["CakePHP", "JavaScript", "Bootstrap", "React", "jQuery", "MySQL", "AWS", "Docker", "Git"],
      achievements: [
        "Mentored junior developers through 1900+ code reviews",
        "Improved code quality by 30%",
        "Oversaw 8+ web applications for FMCG sector",
        "Consistently delivered updates on time with high client satisfaction"
      ]
    },
    {
      title: "Software Developer",
      company: "Trade Dynamics Consulting Int'l Inc",
      period: "2020 - 2021",
      location: "Philippines",
      description: "Resolved coding issues and reduced post-deployment bugs by proactively troubleshooting, debugging, and testing, leading to more stable and efficient software releases. Modernized legacy codebases to meet current development standards, improving overall functionality, maintainability, and team productivity. Collaborated with cross-functional teams and contributed to a positive team culture through effective communication, problem-solving, and on-time delivery under tight deadlines.",
      technologies: ["CakePHP", "JavaScript", "Bootstrap", "jQuery", "MySQL", "AWS", "Docker", "Git"],
      achievements: [
        "Reduced post-deployment bugs through proactive troubleshooting",
        "Modernized legacy codebases for better maintainability",
        "Contributed to positive team culture and on-time delivery"
      ]
    },
    {
      title: "Jr. Software Developer",
      company: "Nityo Infotech",
      period: "2019 - 2020",
      location: "Philippines",
      description: "Built and customized features for existing web applications, delivering tailored solutions based on specific client requirements. Improved application stability and performance by identifying and resolving bugs through systematic testing and debugging.",
      technologies: ["CakePHP", "JavaScript", "Bootstrap", "HTML", "CSS", "MySQL"],
      achievements: [
        "Delivered tailored solutions for client requirements",
        "Improved application stability and performance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
            My professional journey in software development, showcasing growth and achievements across different roles.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className={`relative flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-[var(--background)] z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-[var(--foreground)]">
                        {experience.title}
                      </h3>
                      <span className="text-sm text-[var(--muted)] bg-[var(--accent)] px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="font-semibold text-[var(--foreground)]">{experience.company}</span>
                      <span className="text-[var(--muted)]">•</span>
                      <span className="text-[var(--muted)]">{experience.location}</span>
                    </div>

                    <p className="text-[var(--foreground)] mb-4">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-[var(--foreground)] mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                            <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--foreground)] mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="inline-flex items-center gap-2 px-3 py-2 bg-[var(--card-accent-bg)] border border-[var(--muted)] text-[var(--foreground)] rounded-lg text-sm font-medium hover:scale-105 transition-all duration-200 cursor-default group"
                          >
                            <TechIcon tech={tech} className="w-4 h-4 leading-none" />
                            <span className="text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors leading-none">
                              {tech}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 