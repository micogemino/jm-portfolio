'use client';

import Image from 'next/image';
import TechIcon from './TechIcon';

export default function Projects() {
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
      technologies: ['Next.js', 'Tailwind CSS'],
      logo: '/logos/portfolio-light.png',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={256}
                    height={256}
                    className="object-contain rounded shadow bg-white/30 p-2"
                  />
                ) : (
                  <div className="text-white text-2xl font-bold">{project.title.split(' ')[0]}</div>
                )}
              </div>
              
              <div className="p-6 bg-[var(--card-bg)] text-[var(--card-foreground)]">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-[var(--card-accent-bg)] border border-[var(--muted)] text-[var(--foreground)] rounded-lg text-sm font-medium hover:scale-105 transition-all duration-200 cursor-default group"
                    >
                      <TechIcon tech={tech} className="w-4 h-4 leading-none" />
                      <span className="text-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors leading-none">
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-medium"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 