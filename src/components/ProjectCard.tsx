import React, { useState } from 'react';
import { Eye, Link2 } from 'lucide-react';
import type { ProjectCardProps } from '../types/ProjectType';
import { motion } from "framer-motion";

interface ProjectCardWithModalProps extends ProjectCardProps {
  onEyeClick: (project: ProjectCardProps['project']) => void;
}

export const ProjectCard: React.FC<ProjectCardWithModalProps> = ({ project, onEyeClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    console.log('Link copiado!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}   
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }} 
      className="relative w-40 h-40 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl border border-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Conteúdo principal do card */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        
        {/* Título do projeto - animação de descer e sumir */}
        <h3 className={`text-xl font-semibold text-gray-800 text-center px-4 z-10 relative transition-all duration-500 ease-out ${isHovered ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
          {project.title}
        </h3>
      </div>

      {/* Overlay que desce de cima para baixo */}
      <div className={`absolute top-0 left-0 right-0 bg-gray-600/90 backdrop-blur-md flex items-center justify-center gap-6 transition-all duration-700 ease-out overflow-hidden ${isHovered ? 'h-full' : 'h-0 pointer-events-none'}`}>
        {/* Ícones que sobem do fundo */}
        <div className={`flex gap-6 transition-all duration-500 ease-out ${isHovered ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-12 opacity-0 delay-0'}`}>
          {/* Botão Visualizar */}
          <button 
            onClick={() => onEyeClick(project)}
            className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-colors duration-200
              ${isHovered ? 'bg-gray-700' : 'bg-white'}
              ${isHovered ? 'hover:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}
            `}
            title="Visualizar projeto"
          >
            <Eye className={`w-6 h-6 cursor-pointer transition-colors duration-200
              ${isHovered ? 'text-white' : 'text-gray-700'}
            `} />
          </button>

          {/* Botão Copiar Link */}
          <button 
            onClick={() => copyToClipboard(project.repositoryUrl ?? '')}
            className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-colors duration-200
                ${isHovered ? 'bg-gray-700' : 'bg-white'}
                ${isHovered ? 'hover:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}
              `}
            title="Copiar link do repositório"
          >
            <Link2 className={`w-6 h-6 cursor-pointer transition-colors duration-200
                ${isHovered ? 'text-white' : 'text-gray-700'}
              `} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
