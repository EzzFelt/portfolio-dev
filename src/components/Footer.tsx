


import { Github, Linkedin, Mail, MessageCircle, Instagram, Youtube } from 'lucide-react';
import { useTranslation} from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className=" py-12 px-4 bg-gray-300 w-full h-35">
     <div className=''>
        {/* Ícones sociais */}
        <div className="flex justify-center space-x-4 mb-4">
          <Github className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" />
          <Linkedin className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" />
          <Mail className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" />
          <MessageCircle className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" />
          <Instagram className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" />
          <Youtube className="w-6 h-6 text-black hover:text-gray-800 cursor-pointer" />
        </div>
        
        <p className="text-sm text-gray-600 text-center">
          {t("made_with_heart")}
        </p>
      </div>
    </footer>
  );
};
