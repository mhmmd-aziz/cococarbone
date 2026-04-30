import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, QrCode } from 'lucide-react';

// 1. Import gambar-gambar
import logoCococarbone from '../assets/logoweb12.png';
import logoCV from '../assets/logo-cv1.png';
import qrCodeImg from '../assets/qr.png'; // Import QR Code

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#14452F]/10">

      {/* Main Footer Content */}
      <div className="px-6 mx-auto max-w-7xl lg:px-8 pt-16 pb-10">

        {/* Grid 5 kolom */}
        <div className="grid gap-10 mb-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* Brand Col - Makan 2 kolom */}
          <div className="lg:col-span-2 flex flex-col">
            <Link to="/" className="inline-block transition-opacity hover:opacity-80 mb-4 w-fit">
              <img
                src={logoCococarbone}
                alt="Cococarbone Logo"
                className="h-12 w-auto object-contain mix-blend-multiply"
              />
            </Link>

            <div className="flex items-center gap-2.5 mb-5 pb-5 border-b border-[#14452F]/10 w-fit">
              <img
                src={logoCV}
                alt="CV Gemilang Indo Nusantara"
                className="h-6 w-auto object-contain mix-blend-multiply grayscale opacity-70"
              />
              <p className="text-[10px] font-bold text-[#14452F]/70 uppercase tracking-[0.18em]">
                CV. Gemilang Indo Nusantara
              </p>
            </div>

            <p className="leading-relaxed text-[#14452F]/55 text-sm max-w-xs">
              {t('footer.company_desc') || "Exporting Indonesia's finest agricultural products to the world."}
            </p>
          </div>

          {/* Quick Links - 1 kolom */}
          <div>
            <h4 className="mb-5 text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#14452F] pb-3 border-b border-[#14452F]/10">
              {t('footer.quick_links') || "Quick Links"}
            </h4>
            <ul className="space-y-3 text-[#14452F]/65 text-sm">
              <li>
                <Link to="/" className="hover:text-[#14452F] hover:pl-1 inline-block transition-all duration-200">
                  {t('nav.home') || "Home"}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#14452F] hover:pl-1 inline-block transition-all duration-200">
                  {t('nav.about') || "About"}
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#14452F] hover:pl-1 inline-block transition-all duration-200">
                  {t('nav.products') || "Products"}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#14452F] hover:pl-1 inline-block transition-all duration-200">
                  {t('nav.contact') || "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - 1 kolom */}
          <div>
            <h4 className="mb-5 text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#14452F] pb-3 border-b border-[#14452F]/10">
              {t('footer.contact') || "Contact Us"}
            </h4>
            <ul className="space-y-3.5 text-[#14452F]/65 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={2} className="shrink-0 mt-0.5 text-[#14452F]/40" />
                <span className="leading-relaxed hover:text-[#14452F] transition-colors">
                  {t('footer.address') || "Indonesia"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} strokeWidth={2} className="shrink-0 mt-0.5 text-[#14452F]/40" />
                <a 
                  href="tel:+6281519646990" 
                  className="leading-relaxed hover:text-[#14452F] transition-colors text-left w-full"
                >
                  +62 815-1964-6990
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} strokeWidth={2} className="shrink-0 mt-0.5 text-[#14452F]/40" />
                <a href="mailto:[EMAIL_ADDRESS]" className="hover:text-[#14452F] transition-colors text-xs leading-snug">
                  exportcococarbone@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* QR CODE SECTION - Warna Asli */}
          <div className="flex flex-col md:items-start lg:items-end">
            <h4 className="mb-5 text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#14452F] pb-3 border-b border-[#14452F]/10 w-full lg:text-right">
              Scan to Visit
            </h4>
            <div className="inline-block border border-[#14452F]/12 bg-[#F7F9F7] p-2.5 shadow-sm rounded-sm">
              <div className="bg-white p-1.5 border border-[#14452F]/8 rounded-sm">
                <img
                  src={qrCodeImg}
                  alt="Cococarbone Website QR Code"
                  className="w-24 h-24 md:w-28 md:h-28 object-contain mix-blend-multiply"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[#14452F]/50">
                <QrCode size={11} strokeWidth={2.5} />
                <span className="text-[8px] font-bold uppercase tracking-widest">
                  Digital Profile
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#14452F]/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] text-[#14452F]/40 uppercase tracking-widest font-semibold">
            &copy; {currentYear} CV. Gemilang Indo Nusantara. {t('footer.rights') || "All rights reserved."}
          </p>
        </div>

      </div>
    </footer>
  );
}