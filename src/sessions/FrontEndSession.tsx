
import type { Technology } from '../types/TechnologyType';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
} from 'react-icons/si';


const frontendTechnologies: Technology[] = [
  { name: 'React', icon: <SiReact className="w-8 h-8 text-cyan-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 text-blue-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
  { name: 'HTML', icon: <SiHtml5 className="w-8 h-8 text-orange-600" /> },
  { name: 'CSS', icon: <SiCss3 className="w-8 h-8 text-blue-500" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="w-8 h-8 text-sky-400" /> },
  { name: 'Vite', icon: <SiVite className="w-8 h-8 text-purple-500" /> },
  { name: 'NextJS', icon: <SiNextdotjs className="w-8 h-8 text-black" /> },
];

export default function FrontendSession(): React.ReactElement {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {frontendTechnologies.map((tech, index) => (
        <div
          key={tech.name}
          className="group relative bg-white border border-black rounded-lg p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer shadow-sm hover:shadow-md"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="transition-transform duration-200 group-hover:scale-110">
              {tech.icon}
            </div>
            <span className="text-sm font-medium text-gray-800">
              {tech.name}
            </span>
          </div>
          
          <div className="absolute inset-0 bg-black/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
      ))}
    </div>
  );
}