
import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import translationsEN from './locale/en/translation.json';
import translationsPT from './locale/pt/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEN },
    pt: { translation: translationsPT },
  },
  lng: 'pt', // idioma padrão
  fallbackLng: 'en', // idioma de fallback
  interpolation:{
    escapeValue: false, // react já faz a sanitização
  }
});

export default i18n;