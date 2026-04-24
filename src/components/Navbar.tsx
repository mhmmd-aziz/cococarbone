import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Home, Info, ShoppingBag, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logoCococarbone from '../assets/logoweb12.png';
import Dock from './ReactBits/Dock';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const dockItems = [
    { icon: <Home size={18} color="#14452F" />, label: t('nav.home'), onClick: () => navigate('/') },
    { icon: <Info size={18} color="#14452F" />, label: t('nav.about'), onClick: () => navigate('/about') },
    { icon: <ShoppingBag size={18} color="#14452F" />, label: t('nav.products'), onClick: () => navigate('/products') },
    { icon: <Phone size={18} color="#14452F" />, label: t('nav.contact'), onClick: () => navigate('/contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

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
          <div className="hidden md:flex items-center gap-10">
            <Dock 
              items={dockItems}
              panelHeight={58}
              baseItemSize={42}
              magnification={60}
              className="!static !transform-none !bottom-auto !left-auto"
              actionButton={
                <Link
                  to="/products"
                  className="flex items-center px-5 h-[42px] border border-[#14452F] text-[#14452F] text-[14px] font-medium rounded-[10px] hover:bg-[#14452F] hover:text-white transition-all duration-300 whitespace-nowrap"
                >
                  Shop Now
                </Link>
              }
            />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#14452F] z-50 relative"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                  className={`text-xl font-medium text-center ${
                    isActive(link.path) ? 'text-[#14452F]' : 'text-[#14452F]/70'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 flex justify-center">
                <Link
                  to="/products"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 border-2 border-[#14452F] text-[#14452F] text-lg font-medium rounded-full hover:bg-[#14452F] hover:text-white transition-all"
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