'use client';

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "ICCT Colleges Foundation Inc.",
      period: "2014 - 2017",
      location: "Philippines",
      description: "Developed a web application during On-the-Job Training (OJT), gaining hands-on experience in real-world software development. Designed and built a mobile application as a capstone thesis project, showcasing proficiency in end-to-end app development. Gained foundational knowledge in software engineering, databases, networking, and system analysis.",
      achievements: [
        "Developed a web application during OJT",
        "Built a mobile application as a capstone thesis project",
        "Gained foundational knowledge in software engineering, databases, networking, and system analysis"
      ],
      relevantCourses: [
        "Software Engineering",
        "Database Management",
        "Networking",
        "System Analysis"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            Education
          </h2>
          <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
            My academic background that has shaped my career in software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-8 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Academic Background
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h4 className="text-lg font-bold text-[var(--foreground)]">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-[var(--muted)] bg-[var(--accent)] px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-semibold text-[var(--foreground)]">{edu.school}</span>
                    <span className="text-[var(--muted)]">•</span>
                    <span className="text-[var(--muted)]">{edu.location}</span>
                  </div>

                  <p className="text-[var(--foreground)] mb-4">
                    {edu.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-[var(--foreground)] mb-2">Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
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
                    <h5 className="font-semibold text-[var(--foreground)] mb-2">Relevant Courses:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[var(--accent)] text-[var(--foreground)] rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
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