import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectModalProps } from '../types/ProjectType';
import { techIcons } from '../pages/Projects'
import { useTranslation } from 'react-i18next';

export const Modal: React.FC<ProjectModalProps> = ({ 
  isOpen, 
  onClose, 
  project 
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const { t } = useTranslation();

  // Always call hooks first!
  React.useEffect(() => {
    setCurrentImg(0);
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const images = project.images || [];

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

return (
  <>
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backdropFilter: 'blur(8px)' }}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white rounded-lg w-140 max-w-2xl shadow-2xl transform transition-all duration-500 ease-out ${
          isOpen 
            ? 'translate-y-0 opacity-100 scale-100' 
            : '-translate-y-20 opacity-0 scale-95'
        } max-h-[90vh] overflow-y-auto`}
        style={{ 
          animation: isOpen ? 'slideDown 0.5s ease-out' : 'slideUp 0.5s ease-out'
        }}
      >
        <style>{`
          @keyframes slideDown {
            from { transform: translateY(-100px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(-100px); opacity: 0; }
          }
        `}</style>
        {/* Header with Close Button */}
        <div className="flex justify-end p-3">
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Title */}
        <div className="px-6 pb-4">
          <h2 className="text-center text-2xl font-bold text-gray-900">{t(project.title)}</h2>
        </div>

        {/* Carousel */}
        <div className="px-6 pb-6">
          <div className="relative bg-gray-900 rounded-lg flex items-center justify-center h-64 overflow-hidden">
            {images.length > 0 ? (
              <>
                <img
                  src={images[currentImg]}
                  alt={`${project.title} screenshot ${currentImg + 1}`}
                  className="object-cover w-full h-full rounded"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImg}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-1 rounded-full shadow"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImg}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-1 rounded-full shadow"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {images.map((_, idx: any) => (
                        <span
                          key={idx}
                          className={`block w-2 h-2 rounded-full ${idx === currentImg ? 'bg-blue-600' : 'bg-white/60'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-white">
                <div className="w-16 h-16 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded"></div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{t(project.title)}</h4>
                <p className="text-sm text-gray-400 text-center">
                  Sem imagens do projeto
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Description and Technologies */}
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row gap-8 mb-6">
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-900 mb-2">{t("description")}</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {t(project.description)}
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-900 mb-3">{t("technologies")}</h3>
              <div className="flex flex-wrap gap-3 items-center">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="w-7 h-7 flex items-center justify-center"
                    title={typeof tech === 'string' ? tech : tech.name}
                  >
                    {techIcons[typeof tech === 'string' ? tech : tech.name]}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => project.repositoryUrl && window.open(project.repositoryUrl, '_blank')}
              className="w-full bg-gray-100 hover:bg-blue-800 text-gray-700 hover:text-white py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              {t("view_project")}
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);
}