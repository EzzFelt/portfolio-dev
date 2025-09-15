

import { CheckCircle, Hourglass, Laptop, Coffee } from 'lucide-react';
import React from 'react';
import { Footer } from '../components/Footer';
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

interface ExperienceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}


export default function Experience() {
   const { t } = useTranslation();

   const academicExperience: ExperienceItem[] = [
  {
    title: t("academic_title_1"),
    description:
      t("academic_description_1"),
    icon: <CheckCircle className="text-green-600 w-5 h-5" />,
  },
  {
    title: t("academic_title_2"),
    description:
      t("academic_description_2"),
    icon: <Hourglass className="text-yellow-500 w-5 h-5" />,
  },
];

const professionalExperience: ExperienceItem[] = [
  {
    title: t("professional_title_1"),
    description:
      t("professional_description_1"),
    icon: <Coffee className="text-rose-500 w-5 h-5" />,
  },
  {
    title: t("professional_title_2"),
    description:
      t("professional_description_2"),
    icon: <Laptop className="text-blue-600 w-5 h-5" />,
  },
];

  return (
    <>
    <section className="py-16 px-4 sm:px-8 md:px-12">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}   
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        {t("experience")}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* Coluna Acadêmica */}
        <motion.div 
        initial={{ opacity: 0, x: -50 }}   
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative">
          <h3 className="text-xl font-semibold text-center mb-10">{t("academic")}</h3>
          <div className="border-l-1 border-black ml-5">
            {academicExperience.map((item, index) => (
              <div key={index} className="relative pl-10 pb-14">
                <div className="absolute -left-[23px] top-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <div className="bg-white shadow-md rounded-xl p-6">
                  <h4 className="font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}   
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative">
          <h3 className="text-xl font-semibold text-center mb-10">{t("professional")}</h3>
          <div className="border-l-1 border-black ml-5">
            {professionalExperience.map((item, index) => (
              <div key={index} className="relative pl-10 pb-14">
                <div className="absolute -left-[23px] top-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <div className="bg-white shadow-md rounded-xl p-6">
                  <h4 className="font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
    <Footer/>
    </>
  );
}
