import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center px-4 py-1.5 text-sm font-semibold transition-all border-2 rounded-full text-primary border-primary hover:bg-primary hover:text-white"
    >
      {i18n.language === 'en' ? 'ID' : 'EN'}
    </button>
  );
}