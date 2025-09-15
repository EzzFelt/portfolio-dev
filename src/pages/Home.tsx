import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import type { Project } from '../types/ProjectType';
import { useEffect, useState } from "react";
import { Modal } from "../components/Modal"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";



export const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeModal = () => setSelectedProject(null);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch(`/${i18n.language}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, [i18n.language]);

  return (
    <div className="min-h-screen min-w-130 xl:w-full bg-white">
      <section className="py-20 px-1 sm:w-full"> 
        <div className="mx-auto flex justify-between flex-column flex-wrap items-center text-center md:text-start md:flex-nowrap md:justify-evenly lg:w-200 xl:w-300">
          
          {/* Texto compacto com largura limitada */}
          <div className="max-w-[600px] mr-6">
            <motion.h1
             initial={{ opacity: 0, y: 50 }}   
             whileInView={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true }}
            className=" sm:text-2xl md:text-2xl md:w-120 lg:text-3xl font-extrabold text-gray-900 leading-tight mb-2"
            >
              {t('greetings')}
            </motion.h1>
            <motion.p 
            initial={{ opacity: 0, y: 50 }}   
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" sm:text-1xl md:w-90 md:text-1xl lg:text-1xl xl:w-120 xl:text-start text-gray-500 leading-relaxed mt-2 font-bold sm:text-center">
              {t('greetings_short')}
            </motion.p>
          </div>

          {/* Foto com tamanho aumentado */}
        
          <motion.div 
            initial={{ opacity: 0, y: 50 }}   
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="shrink-0 -translate-y-1 mx-auto md:ml-5 md:mr-5 md:-translate-y-7">
            <div className="w-40 h-40 mt-10 sm:w-55 sm:h-55 md:w-45 md:h-45 lg:w-56 lg:h-56 xl:w-54 xl:h-54 rounded-full overflow-hidden">
              <img 
                src="/foto_pessoal.jpg" 
                alt="Enzo Feltrini" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Melhores Projetos */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}   
             whileInView={{ opacity: 1, x: 0 }} 
             transition={{ duration: 0.9, ease: "easeOut" }}
             viewport={{ once: true }}
            className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-px bg-black"></div>
               <h2 className="text-2xl font-bold text-black mx-4">
               {t("subtitle_1")}
               </h2>
             <div className="w-20 h-px bg-black"></div>
           </div>
          </motion.div>
            <div className="flex flex-wrap gap-8 justify-center">
              {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEyeClick={() => { setSelectedProject(project); }}
              />
              ))}
            </div>
        </div>
      </section>

      {/* Modal para exibir detalhes do projeto */}
      <Modal isOpen={!!selectedProject} onClose={closeModal} project={selectedProject} />

      {/* Seção Sobre Mim */}
      <section className="py-16 px-4 ">
        <motion.div 
          initial={{ opacity: 0, x: 100 }}   
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}        
          className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gray-300"></div>
            <h2 className="text-2xl font-bold text-gray-800 mx-4">
              {t("subtitle_2")}
            </h2>
            <div className="w-20 h-px bg-gray-300"></div>
          </div>
          
          <p className="text-gray-600 sm:w-90 md:w-xl mx-auto mb-8 leading-relaxed">
            {t("about_me_text")}
          </p>
          
          <a
          href="/Curriculo_Enzo.pdf"
          download="Curriculo_FullStack_Enzo"
          className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg transition-colors cursor-pointer font-bold">
            {t("curriculum")}
          </a>
        </motion.div>
      </section>

      {/* Seção Habilidades */}
      <section className="py-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}   
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gray-300"></div>
            <h2 className="text-2xl font-bold text-gray-800 mx-4">
              {t("subtitle_3")}
            </h2>
            <div className="w-20 h-px bg-gray-300"></div>
          </div>
          
          <p className="text-gray-600 sm:w-90 md:w-xl mx-auto leading-relaxed">
            {t("my_stack")}
          </p>
        </motion.div>
      </section>

       {/* Seção "Ficou interessado no meu trabalho?" */}
    <section className="py-16 px-4">
        <motion.div 
            initial={{ opacity: 0, x: -100 }}   
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="sm:text-2xl font-bold text-gray-800 mb-2">
                {t("subtitle_4")}
            </h2>
            <p className="text-gray-600 mb-6 sm:w-90 md:w-xl mx-auto leading-relaxed">
                {t("call_me")}
            </p>
            <Link to="/contact">
            <a 
            className="bg-gray-200 hover:bg-gray-400 text-black px-6 py-3 rounded-lg transition-colors font-bold cursor-pointer"
            >
                {t("send_email")}
            </a>
            </Link>
        </motion.div>
    </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};