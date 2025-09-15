
import type { Technology } from '../types/TechnologyType';
import {
  SiGit,
  SiFigma,
  SiGithub,
} from 'react-icons/si';

const otherTechnologies: Technology[] = [
  { name: 'Git', icon: <SiGit className="w-8 h-8 text-orange-500" /> },
  { name: 'Figma', icon: <SiFigma className="w-8 h-8 text-purple-600" /> },
  { name: 'GitHub', icon: <SiGithub className="w-8 h-8 text-gray-800" /> },
];

export default function OthersSession(): React.ReactElement {
  return (
    <>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {otherTechnologies.map((tech, index) => (
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
    </>
  );
}