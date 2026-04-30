import { useTranslation } from 'react-i18next';

// Inline SVG flag components for cross-platform compatibility
function FlagID() {
  return (
    <svg viewBox="0 0 900 600" className="w-5 h-3.5 rounded-[2px] shadow-sm border border-black/10 shrink-0">
      <rect width="900" height="300" fill="#FF0000"/>
      <rect y="300" width="900" height="300" fill="#FFFFFF"/>
    </svg>
  );
}

function FlagGB() {
  return (
    <svg viewBox="0 0 60 30" className="w-5 h-3.5 rounded-[2px] shadow-sm border border-black/10 shrink-0">
      <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isEn = i18n.language === 'en';

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-bold transition-all rounded-full hover:bg-gray-100 active:scale-95 text-[#14452F]"
      title={isEn ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'}
    >
      {isEn ? <FlagGB /> : <FlagID />}
      <span>{isEn ? 'EN' : 'ID'}</span>
    </button>
  );
}