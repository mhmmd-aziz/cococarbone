import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en.json';
import idTranslations from './id.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    id: { translation: idTranslations },
  },
  lng: 'en', // Bahasa default: Inggris (karena target B2B Global)
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React udah aman dari XSS
  },
});

export default i18n;