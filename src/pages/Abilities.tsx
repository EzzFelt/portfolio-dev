
import React, { useState } from 'react';
import FrontendSession from '../sessions/FrontEndSession';
import BackendSession from '../sessions/BackEndSession';
import OthersSession from '../sessions/OthersSession';
import { Footer } from '../components/Footer';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"

interface SectionConfig {
  component: React.ComponentType;
  count: number;
}

const sections: Record<string, SectionConfig> = {
  'Front-end': { component: FrontendSession, count: 7 },
  'Back-end': { component: BackendSession, count: 5 },
  'Others': { component: OthersSession, count: 3 }
};

export default function Abilities(): React.ReactElement {
  const [activeSection, setActiveSection] = useState('Front-end');

  const renderActiveSession = (): React.ReactElement => {
    const SessionComponent = sections[activeSection].component;
    return <SessionComponent />;
  };

  const { t } = useTranslation();
  return (
    <>
    <section className="py-20 px-4 text-center max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10">{t("skills")}
      </motion.h2>

      {/* Navigation tabs */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}   
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12 flex justify-center gap-8">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`text-lg font-semibold pb-2 border-b-2 transition-colors duration-200 ${
              activeSection === section
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            {section}
          </button>
        ))}
      </motion.div>

      {/* Technology grid */}
      {
       <motion.div 
        initial={{ opacity: 0, y: 100 }}   
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center min-h-[300px]">
        {renderActiveSession()}
      </motion.div>
      }
    </section>
    <Footer/>
    </>
  );
}