import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Home, Info, ShoppingBag, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logoCococarbone from '../assets/logoweb12.png';
import Dock from './ReactBits/Dock';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  // REDESIGN: Tambahkan !bg-[#14452F] ke className saat aktif biar warnanya sama persis dengan View Details
  const dockItems = [
    { icon: <Home size={18} color={isActive('/') ? '#ffffff' : '#14452F'} />, label: t('nav.home'), onClick: () => navigate('/'), className: isActive('/') ? 'dock-item-active !bg-[#14452F] shadow-md' : '' },
    { icon: <Info size={18} color={isActive('/about') ? '#ffffff' : '#14452F'} />, label: t('nav.about'), onClick: () => navigate('/about'), className: isActive('/about') ? 'dock-item-active !bg-[#14452F] shadow-md' : '' },
    { 
      icon: <ShoppingBag size={18} color={isActive('/products') || location.pathname.startsWith('/products/') ? '#ffffff' : '#14452F'} />, 
      label: t('nav.products'), 
      onClick: () => navigate('/products'), 
      className: isActive('/products') || location.pathname.startsWith('/products/') ? 'dock-item-active !bg-[#14452F] shadow-md' : '' 
    },
    { icon: <Phone size={18} color={isActive('/contact') ? '#ffffff' : '#14452F'} />, label: t('nav.contact'), onClick: () => navigate('/contact'), className: isActive('/contact') ? 'dock-item-active !bg-[#14452F] shadow-md' : '' },
    
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/80 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 z-50">
            <img
              src={logoCococarbone}
              alt="Cococarbone Logo"
              className="h-10 w-auto object-contain mix-blend-multiply"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-1 justify-end items-center px-4"> 
            <div className="relative"> 
              <Dock 
                items={dockItems}
                panelHeight={58}
                baseItemSize={42}
                magnification={60}
                className="!static !relative !transform-none !bottom-auto !left-auto !translate-x-0"
                actionButton={
                  <Link
                    to="/products"
                    className="flex items-center px-5 h-[42px] border-2 border-[#14452F] text-[#14452F] text-[14px] font-bold rounded-[10px] hover:bg-[#14452F] hover:text-white transition-all duration-300 whitespace-nowrap"
                  >
                    {t('nav.products')}
                  </Link>
                }
              />
            </div>
          </div>

          {/* Language Switcher + Mobile Hamburger */}
          <div className="flex items-center gap-2 z-50 relative">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#14452F]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-0 left-0 right-0 bg-white shadow-2xl pt-24 pb-8 px-6"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  // REDESIGN: Ubah warna aktif di mobile menu jadi hijau gelap (#14452F)
                  className={`text-xl font-medium text-center px-6 py-2 rounded-full transition-all duration-300 ${
                    isActive(link.path) || (link.path === '/products' && location.pathname.startsWith('/products/'))
                      ? 'bg-[#14452F] text-white shadow-md'
                      : 'text-[#14452F]/70 hover:text-[#14452F]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 flex justify-center">
                <Link
                  to="/products"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 border-2 border-[#14452F] text-[#14452F] text-lg font-bold rounded-full hover:bg-[#14452F] hover:text-white transition-all"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}