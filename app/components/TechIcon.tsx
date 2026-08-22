'use client';

import { 
  SiCakephp, 
  SiJavascript, 
  SiReact, 
  SiJquery, 
  SiMysql, 
  SiAmazon, 
  SiDocker, 
  SiGit, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiDiscord, 
  SiMui, 
  SiTypescript, 
  SiPhp, 
  SiLaravel, 
  SiInertia, 
  SiPostgresql, 
  SiViber,
  SiFlutter,
  SiDart,
  SiMariadb,
  SiSqlite,
  SiBitbucket,
  SiJira,
  SiGoogleplay
} from 'react-icons/si';
import { FaAws, FaBrain, FaRobot } from 'react-icons/fa';
import { TbApi, TbScan } from 'react-icons/tb';
import { BiBot } from 'react-icons/bi';
import { BsCursor } from 'react-icons/bs';

interface TechIconProps {
  tech: string;
  className?: string;
}

export default function TechIcon({ tech, className = "w-4 h-4" }: TechIconProps) {
  const iconStyle = { color: 'var(--foreground)' };
  const icons: { [key: string]: React.ReactNode } = {
    'CakePHP': <SiCakephp className={className} style={iconStyle} title="CakePHP" />,
    'JavaScript': <SiJavascript className={className} style={iconStyle} title="JavaScript" />,
    'React': <SiReact className={className} style={iconStyle} title="React" />,
    'jQuery': <SiJquery className={className} style={iconStyle} title="jQuery" />,
    'MySQL': <SiMysql className={className} style={iconStyle} title="MySQL" />,
    'MariaDB': <SiMariadb className={className} style={iconStyle} title="MariaDB" />,
    'MySQL/MariaDB': <SiMysql className={className} style={iconStyle} title="MySQL/MariaDB" />,
    'SQLite': <SiSqlite className={className} style={iconStyle} title="SQLite" />,
    'AWS': <SiAmazon className={className} style={iconStyle} title="AWS" />,
    'AWS (S3, EC2, API Gateway)': <FaAws className={className} style={iconStyle} title="AWS" />,
    'AWS API Gateway': <FaAws className={className} style={iconStyle} title="AWS API Gateway" />,
    'AWS S3': <FaAws className={className} style={iconStyle} title="AWS S3" />,
    'AWS EC2': <FaAws className={className} style={iconStyle} title="AWS EC2" />,
    'Bootstrap': <SiBootstrap className={className} style={iconStyle} title="Bootstrap" />,
    'Viber API': <SiViber className={className} style={iconStyle} title="Viber API" />,
    'Discord Webhook': <SiDiscord className={className} style={iconStyle} title="Discord Webhook" />,
    'Discord Bot': <BiBot className={className} style={iconStyle} title="Discord Bot" />,
    'Node.js': <SiNodedotjs className={className} style={iconStyle} title="Node.js" />,
    'IndexDB': <TbApi className={className} style={iconStyle} title="IndexDB" />,
    'Material UI': <SiMui className={className} style={iconStyle} title="Material UI" />,
    'Next.js': <SiNextdotjs className={className} style={iconStyle} title="Next.js" />,
    'Tailwind CSS': <SiTailwindcss className={className} style={iconStyle} title="Tailwind CSS" />,
    'TypeScript': <SiTypescript className={className} style={iconStyle} title="TypeScript" />,
    'Docker': <SiDocker className={className} style={iconStyle} title="Docker" />,
    'Git': <SiGit className={className} style={iconStyle} title="Git" />,
    'GitHub': <SiGit className={className} style={iconStyle} title="GitHub" />,
    'Bitbucket': <SiBitbucket className={className} style={iconStyle} title="Bitbucket" />,
    'Jira': <SiJira className={className} style={iconStyle} title="Jira" />,
    'HTML': <SiHtml5 className={className} style={iconStyle} title="HTML5" />,
    'CSS': <SiCss3 className={className} style={iconStyle} title="CSS3" />,
    'PHP': <SiPhp className={className} style={iconStyle} title="PHP" />,
    'Laravel': <SiLaravel className={className} style={iconStyle} title="Laravel" />,
    'Inertia.js': <SiInertia className={className} style={iconStyle} title="Inertia" />,
    'PostgreSQL': <SiPostgresql className={className} style={iconStyle} title="PostgreSQL" />,
    'CursorAI': <BsCursor className={className} style={iconStyle} title="CursorAI" />,
    'Flutter': <SiFlutter className={className} style={iconStyle} title="Flutter" />,
    'Dart': <SiDart className={className} style={iconStyle} title="Dart" />,
    'ML Kit OCR': <TbScan className={className} style={iconStyle} title="ML Kit OCR" />,
    'Google Play Billing': <SiGoogleplay className={className} style={iconStyle} title="Google Play Billing" />,
    'AI-Assisted Dev': <FaRobot className={className} style={iconStyle} title="AI-Assisted Dev" />,
    'REST API design': <TbApi className={className} style={iconStyle} title="REST API design" />,
    'REST APIs': <TbApi className={className} style={iconStyle} title="REST APIs" />,
    'offline-first architecture': <TbApi className={className} style={iconStyle} title="Offline-first architecture" />,
    'AI-augmented development workflows': <FaBrain className={className} style={iconStyle} title="AI-augmented workflows" />,
    'CI/CD': <SiDocker className={className} style={iconStyle} title="CI/CD" />,
    'Agile': <SiJira className={className} style={iconStyle} title="Agile" />,
    'TDD': <TbApi className={className} style={iconStyle} title="TDD" />,
  };

  return icons[tech] || <span className={className} style={iconStyle}>💻</span>;
} 