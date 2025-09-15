// src/components/Freelance.tsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Freelance() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden bg-gray-300 rounded-full px-4 py-1 w-32 sm:w-50 md:w-80 lg:w-96 ">
      <motion.div
        className="flex items-center gap-2 w-max font-semibold text-sm text-black"
        animate={{ x: ['-100%', '120%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      >
        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        {t("freelance")}
      </motion.div>
    </div>
  );
}
