import Freelance from "./Freelance"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from 'react-i18next';



export const NavBar = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState('pt');
    const { t } = useTranslation();

    const toggleLang = () => {
    const newLang = language === "pt" ? "en" : "pt";
    setLanguage(newLang);
    i18n.changeLanguage(newLang); 
  };

    return(
        <>
          <div className="flex justify-between items-center ml-1 mr-2 mt-5 sm:ml-7 sm:mr-10 md:justify-evenly xl:justify-evenly 2xl:w-500 2xl:mx-auto" >
            <Link to="/"><img src="public/enzo_font.jpg" alt="Enzo Font" className="rounded-full w-25 h-10 sm:w-30 md:w-30 lg:w-30" /></Link>
            <Freelance />
           <img
             onClick={toggleLang}
              src={
              language === "pt"
              ? "https://hatscripts.github.io/circle-flags/flags/br.svg"
              : "https://hatscripts.github.io/circle-flags/flags/us.svg"
            }
            width="35"
            className="cursor-pointer hover:gray-600 rounded-full"
            alt={language === "pt" ? "Português" : "English"}
           />
          </div>

          <div className="flex justify-between items-center mt-5 ml-5 mr-5 min-w-2xl gap-2 font-bold text-[12px] sm:text-sm sm:justify-evenly md:justify-evenly md:w-140 md:mx-auto lg:justify-evenly xl:justify-evenly">
            <Link to="/about">{t("about")}</Link>
            <Link to="/projects">{t("projects")}</Link>
            <Link to="/abilities">{t("skills")}</Link>
            <Link to="/experience">{t("experience")}</Link>
            <Link to="/contact">{t("contact")}</Link>
          </div>
            <div className="h-px w-45 mx-auto sm:mx-auto sm:w-85 mt-5 bg-black"></div>
        </>
    )
}