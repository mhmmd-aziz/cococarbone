import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

import logoCococarbone from '../assets/logoweb12.png';
import logoCV from '../assets/logo-cv1.png';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-10 bg-white border-t border-[#14452F]/5">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-col items-start">
              {/* Logo Cococarbone */}
              <Link to="/" className="inline-block transition-transform hover:opacity-90">
                <img 
                  src={logoCococarbone} 
                  alt="Cococarbone Logo" 
                  className="h-14 w-auto object-contain mix-blend-multiply mb-5"
                />
              </Link>
              
              <div className="flex items-center gap-3">
                <img 
                  src={logoCV} 
                  alt="CV Indo Nusantara" 
                  className="h-7 w-auto object-contain mix-blend-multiply grayscale opacity-80"
                />
                <p className="text-xs font-bold text-[#14452F]/80 uppercase tracking-[0.15em]">
                  CV. Indo Nusantara
                </p>
              </div>
            </div>
            <p className="max-w-sm mb-8 leading-relaxed text-[#14452F]/60 text-sm font-medium">
              {t('footer.company_desc') || "Exporting Indonesia's finest agricultural products to the world."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-[0.1em] uppercase text-[#14452F]">{t('footer.quick_links') || "Quick Links"}</h4>
            <ul className="space-y-4 text-[#14452F]/70 text-sm font-medium">
              <li><Link to="/" className="hover:text-[#14452F] hover:translate-x-1 inline-block transition-all">{t('nav.home') || "Home"}</Link></li>
              <li><Link to="/about" className="hover:text-[#14452F] hover:translate-x-1 inline-block transition-all">{t('nav.about') || "About"}</Link></li>
              <li><Link to="/products" className="hover:text-[#14452F] hover:translate-x-1 inline-block transition-all">{t('nav.products') || "Products"}</Link></li>
              <li><Link to="/contact" className="hover:text-[#14452F] hover:translate-x-1 inline-block transition-all">{t('nav.contact') || "Contact"}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-[0.1em] uppercase text-[#14452F]">{t('footer.contact') || "Contact Us"}</h4>
            <ul className="space-y-4 text-[#14452F]/70 text-sm font-medium">
              <li className="flex items-start gap-4">
                <MapPin size={18} strokeWidth={2} className="shrink-0 mt-0.5 text-[#14452F]/40" />
                <span className="leading-relaxed hover:text-[#14452F] transition-colors">{t('footer.address') || "Indonesia"}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} strokeWidth={2} className="shrink-0 text-[#14452F]/40" />
                <span className="hover:text-[#14452F] transition-colors">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} strokeWidth={2} className="shrink-0 text-[#14452F]/40" />
                <span className="hover:text-[#14452F] transition-colors">export@cococarbone.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-[11px] text-[#14452F]/40 border-t border-[#14452F]/10 flex flex-col md:flex-row justify-between items-center gap-4 uppercase tracking-widest font-bold">
          <p>&copy; {currentYear} CV. Indo Nusantara. {t('footer.rights') || "All rights reserved."}</p>
        </div>
      </div>
    </footer>
  );
}