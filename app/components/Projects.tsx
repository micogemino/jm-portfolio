'use client';

import Image from 'next/image';
import TechIcon from './TechIcon';
import { useTheme } from '../contexts/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();
  const projects = [
    {
      title: 'Engagia Admin System (EAS)',
      description: 'The most complete, easiest to use and end to end integrated sales force automation system designed for consumer goods.',
      technologies: ['CakePHP', 'JavaScript', 'jQuery', 'MySQL', 'Bootstrap'],
      logo: '/logos/engagia.png',
      link: '#',
      github: '#'
    },
    {
      title: 'Boxtrakker',
      description: 'The easiest to use, end-to-end integrated, and real-time shareable logistics management system for consumer goods.',
      technologies: ['CakePHP', 'JavaScript', 'jQuery', 'MySQL', 'Bootstrap'],
      logo: '/logos/boxtrakker.png',
      link: '#',
      github: '#'
    },
    {
      title: 'Shopmetrix',
      description: 'The easiest to use, end-to-end integrated, and real-time shareable retail inventory management system for consumer goods.',
      technologies: ['CakePHP', 'JavaScript', 'jQuery', 'MySQL', 'Bootstrap'],
      logo: '/logos/shopmetrix.png',
      link: '#',
      github: '#'
    },
    {
      title: 'Engagia API',
      description: 'A comprehensive REST API system that enables seamless integration between Engagia and various ERP systems like Odoo and NetSuite. Provides multiple endpoints for GET, POST, and PUT operations, allowing clients to efficiently sync and manage their data across different business platforms.',
      technologies: ['CakePHP', 'MySQL', 'AWS API Gateway'],
      link: '#',
      github: '#'
    },
    {
      title: 'Tradynamics Management System (TMS)',
      description: 'TMS serves as the core management hub where administrators can perform high-level system configurations, create and manage users across all Trade Dynamics products, set up database tables and columns, and monitor login logs.',
      technologies: ['CakePHP', 'JavaScript', 'jQuery', 'MySQL', 'Bootstrap'],
      logo: '/logos/td.png',
      link: '#',
      github: '#'
    },
    {
      title: 'Doovop',
      description: 'A comprehensive client ticket, task, and bug management system designed to streamline project workflows and issue tracking.',
      technologies: ['CakePHP', 'JavaScript', 'jQuery', 'MySQL', 'Bootstrap'],
      logo: '/logos/td.png',
      link: '#',
      github: '#'
    },
    {
      title: 'Viber Chat Bot',
      description: 'A real-time Viber chatbot integrated with Doovop ticketing system to handle user concerns and support requests. Built using Viber API to provide seamless customer service experience for users who prefer Viber communication.',
      technologies: ['CakePHP', 'JavaScript', 'jQuery', 'MySQL', 'Bootstrap', 'Viber API'],
      link: '#',
      github: '#'
    },
    {
      title: 'Discord Alert',
      description: 'A Discord webhook integration system that sends real-time alerts for server errors, bugs, and task status updates from Doovop to Discord channels. Designed for remote work teams to maintain seamless communication and immediate notification of critical system events.',
      technologies: ['CakePHP', 'MySQL', 'Discord Webhook'],
      link: '#',
      github: '#'
    },
    {
      title: 'Discord Bot',
      description: 'A Discord bot with custom commands for Doovop integration, allowing users to check task status, bug reports, and system login information directly from Discord. Streamlines remote work monitoring by eliminating the need to switch between applications for status updates.',
      technologies: ['Node.JS', 'MySQL', 'Discord Bot'],
      link: '#',
      github: '#'
    },
    {
      title: 'Gcash Cashout Dashboard',
      description: 'A Progressive Web App (PWA) for tracking GCash cashout transactions with Excel file import/export, image reference tracking, and offline capabilities using IndexDB. Mobile-first design for recording cash disbursements and tracking recipients.',
      technologies: ['React', 'IndexDB', 'Material UI'],
      link: 'https://gcashout-dashboard.vercel.app/',
      github: '#'
    },
    {
      title: 'Portfolio',
      description: 'A modern portfolio website with dark/light theme toggle and responsive design.',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      logo: theme === 'dark' ? '/logos/portfolio-light.png' : '/logos/portfolio-dark.png',
      link: '#',
      github: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            My Projects
          </h2>
          <p className="text-xl text-[var(--foreground)] max-w-3xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-b border-[var(--border)] pb-8 last:border-b-0"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Logo/Image Section */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[var(--card-bg)] rounded-lg flex items-center justify-center border border-[var(--border)]">
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={80}
                        height={80}
                        className="object-contain max-w-full max-h-full p-2"
                      />
                    ) : (
                      <div className="text-[var(--foreground)] text-lg font-medium">{project.title.split(' ')[0]}</div>
                    )}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2 py-1 bg-[var(--accent)] text-[var(--accent-foreground)] rounded text-xs font-medium"
                      >
                        <TechIcon tech={tech} className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 text-sm">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline font-medium"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline font-medium"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 