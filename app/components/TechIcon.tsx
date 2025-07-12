'use client';

import { SiCakephp, SiJavascript, SiReact, SiJquery, SiMysql, SiAmazon, SiDocker, SiGit, SiHtml5, SiCss3, SiBootstrap, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiDiscord, SiMui, SiTypescript, SiPhp, SiLaravel } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { BiBot } from 'react-icons/bi';
import { SiViber } from 'react-icons/si';

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
    'AWS': <SiAmazon className={className} style={iconStyle} title="AWS" />,
    'AWS API Gateway': <FaAws className={className} style={iconStyle} title="AWS API Gateway" />,
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
    'HTML': <SiHtml5 className={className} style={iconStyle} title="HTML5" />,
    'CSS': <SiCss3 className={className} style={iconStyle} title="CSS3" />,
    'PHP': <SiPhp className={className} style={iconStyle} title="PHP" />,
    'Laravel': <SiLaravel className={className} style={iconStyle} title="Laravel" />,
  };

  return icons[tech] || <span className={className} style={iconStyle}>💻</span>;
} 