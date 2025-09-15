import { useEffect, useState, type JSX } from 'react';
import { Footer } from "../components/Footer";
import { Modal } from '../components/Modal';
import { ProjectCard } from "../components/ProjectCard";
import type { Project } from '../types/ProjectType';
import {
  SiReact,
  SiJavascript,
  SiGit,
  SiNextdotjs,
  SiDocker,
  SiMongodb,
  SiCss3
} from 'react-icons/si';
import { motion } from 'framer-motion';

import { useTranslation } from "react-i18next"

export const techIcons: Record<string, JSX.Element> = {
  react: <SiReact className="w-6 h-6" color="#61DAFB" />,
  javascript: <SiJavascript className="w-6 h-6" color="#F7DF1E" />,
  git: <SiGit className="w-6 h-6" color="#F05032" />,
  nextjs: <SiNextdotjs className="w-6 h-6" color="#000000" />,
  docker: <SiDocker className="w-6 h-6" color="#2496ED" />,
  mongodb: <SiMongodb className="w-6 h-6" color="#47A248" />,
  css3: <SiCss3 className="w-6 h-6" color="#1572B6" />,
};


export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleEyeClick = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch(`/${i18n.language}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, [i18n.language]);

  return (
    <>
    <div className="min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("projects")}</h1>
          <p className="text-xl text-gray-600 ">{t("subtitle_projects")}</p>
        </motion.div>

        {/* Grid dos projetos */}
        <div className="flex flex-wrap gap-8 justify-center align-items-center mr-0.5">
          {projects.map((project) => (
            <div key={project.id} className="flex justify-center flex-col items-center">
              <ProjectCard
              project={project}
              onEyeClick={handleEyeClick}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    <Modal
        isOpen={!!selectedProject}
        onClose={closeModal}
        project={selectedProject}
      />
    </>
  );
};

