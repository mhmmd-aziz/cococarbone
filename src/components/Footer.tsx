import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

// 1. Import kedua logo dari folder assets
import logoCococarbone from '../assets/logoweb12.png';
import logoCV from '../assets/logo-cv1.png';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-8 text-white bg-primary-dark">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-col gap-4 items-start">
              {/* Logo Cococarbone */}
              <div className="bg-white p-2 rounded-xl inline-block">
                <img 
                  src={logoCococarbone} 
                  alt="Cococarbone Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              
              <div className="flex items-center gap-3 mt-2">
                {/* Logo CV Indo Nusantara (Lebih kecil mendampingi nama CV) */}
                <div className="bg-white p-1.5 rounded-lg inline-block shadow-sm">
                  <img 
                    src={logoCV} 
                    alt="CV Indo Nusantara" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <p className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                  CV. Indo Nusantara
                </p>
              </div>
            </div>
            <p className="max-w-md mb-8 leading-relaxed text-gray-400">
              {t('footer.company_desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold">{t('footer.quick_links')}</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-bold">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="shrink-0" />
                <span>export@cococarbone.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-sm text-center text-gray-500 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} CV. Indo Nusantara. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}