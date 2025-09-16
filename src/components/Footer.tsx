


import { Github, Linkedin, Mail, MessageCircle, Instagram, Youtube } from 'lucide-react';
import { useTranslation} from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className=" py-12 px-4 bg-gray-300 w-full h-35">
     <div className=''>
        {/* Ícones sociais */}
        <div className="flex justify-center space-x-4 mb-4">
          <a target="_blank" href="https://github.com/EzzFelt"><Github className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/enzofeltrin/"><Linkedin className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" /></a>
          <a target="_blank" href="mailto:enzobrexo@gmail.com"><Mail className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" /></a>
          <a target="_blank" href="https://wa.me/19991710451"><MessageCircle className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" /></a>
          <a target="_blank" href="https://www.instagram.com/ozne.on/"><Instagram className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" /></a>
          <a target="_blank" href="https://www.youtube.com/@EzzFelt"><Youtube className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" /></a>
        </div>
        
        <p className="text-sm text-gray-600 text-center">
          {t("made_with_heart")}
        </p>
      </div>
    </footer>
  );
};
