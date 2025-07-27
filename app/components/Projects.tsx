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
      technologies: ['Node.js', 'MySQL', 'Discord Bot'],
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
    {
      title: 'Task Manager',
      description: 'A modern task management application built with Laravel 11, React, Inertia.js, and Tailwind CSS. This application allows users to manage their tasks efficiently, with features such as user authentication, task CRUD operations, tagging system, filtering, and soft delete functionality.',
      technologies: ['Laravel', 'React', 'Inertia.js', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'CursorAI'],
      link: 'https://task-manager-y2wx.onrender.com/',
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

        {/* Mobile: Card Layout, Desktop: List Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Logo/Image Section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[var(--card-bg)] rounded-lg flex items-center justify-center border border-[var(--border)]">
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={80}
                        height={80}
                        className="object-contain max-w-full max-h-full p-2"
                      />
                    ) : (
                      <div className="text-[var(--foreground)] text-sm sm:text-lg font-medium">{project.title.split(' ')[0]}</div>
                    )}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed text-sm sm:text-base">
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
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline font-medium flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline font-medium flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
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