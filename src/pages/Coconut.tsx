import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle2, Package, FileText, Settings2, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAWhatsapp from '../components/CTAWhatsapp';

// 1. Import gambar kelapa dan infografis spesifikasi
import imgCoconut from '../assets/kelapaori1.png';
import imgCoconut2 from '../assets/updatekelapa.png';
import imgCoconut3 from '../assets/kelapa1.png';
import imgSpekKelapa from '../assets/spekkelapa.png'; // <-- Gambar Spek Kelapa

export default function Coconut() {
  const { t } = useTranslation();

  const gallery = [imgCoconut, imgCoconut2, imgCoconut3];
  const [activeImage, setActiveImage] = useState(gallery[0]);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 px-2 py-2 pr-6 text-xs font-bold text-[#14452F] uppercase tracking-[0.15em] bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-[#14452F]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F8FAF8] text-[#14452F] group-hover:bg-[#14452F] group-hover:text-white transition-colors duration-300">
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
            </div>
            Back to Products
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column: Product Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32 space-y-4">
              <div className="bg-[#F8FAF8] border border-gray-200 p-4 aspect-square flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    alt="Semi Husked Coconut"
                    className="w-full h-full object-cover shadow-sm"
                  />
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative aspect-square overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === img
                        ? 'border-[#14452F] opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover bg-[#F8FAF8]"
                    />
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center border border-gray-200 px-6 py-4 bg-gray-50 mt-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Origin</span>
                <span className="text-sm font-bold text-[#14452F]">Indonesia</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content & Specs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#14452F] mb-6 leading-tight">
                {t('coconut_page.title')}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('coconut_page.desc')}
              </p>
            </div>

            {/* Visual Specification Sheet (INFOGRAFIS MASUK DI SINI) */}
            <div className="mb-12">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <ImageIcon size={16} /> Visual Specification Sheet
              </h3>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-[#F8FAF8] p-2">
                <img 
                  src={imgSpekKelapa} 
                  alt="Coconut Specification Data Sheet" 
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Technical Specifications Table (HTML) */}
            <div className="mb-12">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Settings2 size={16} /> Data Sheet Summary
              </h3>

              <div className="border-t-2 border-[#14452F]">
                {[
                  { label: "Appearance", value: t('coconut_page.specs.appearance') },
                  { label: "Diameter", value: t('coconut_page.specs.diameter') },
                  { label: "Weight per Piece", value: t('coconut_page.specs.weight') },
                  { label: "Maturity", value: t('coconut_page.specs.maturity') },
                  { label: "Water Content", value: t('coconut_page.specs.water_content') },
                  { label: "Meat Thickness", value: t('coconut_page.specs.meat_thickness') },
                  { label: "Color", value: t('coconut_page.specs.color') },
                ].map((spec, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-4 border-b border-gray-100 group hover:bg-gray-50 transition-colors px-2">
                    <span className="font-medium text-gray-500 mb-1 sm:mb-0">{spec.label}</span>
                    <span className="font-bold text-[#14452F] text-left sm:text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging & Call to Action */}
            <div className="bg-[#F8FAF8] border border-gray-200 p-8 lg:p-10 mt-auto relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
                <Package size={200} />
              </div>

              <h3 className="text-xl font-bold text-[#14452F] mb-6 flex items-center gap-3 relative z-10">
                <FileText size={24} className="text-[#18A19A]" />
                {t('coconut_page.pack_title')}
              </h3>

              <ul className="space-y-4 mb-10 relative z-10">
                {[
                  t('coconut_page.packaging.bag'),
                  t('coconut_page.packaging.qty'),
                  `20ft Container: ${t('coconut_page.packaging.load_20ft')}`,
                  `40ft HC: ${t('coconut_page.packaging.load_40ft')}`
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#18A19A] shrink-0 mt-0.5" />
                    <span className="text-[#14452F]/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-gray-200 relative z-10">
                <p className="text-sm font-medium text-gray-500 mb-5">
                  Need CIF pricing or specific packaging for mature coconut? Send us a message!
                </p>
                <CTAWhatsapp text={t('coconut_page.inquire_btn')} productName="Semi Husked Coconut" className="w-full !rounded-none py-4 text-lg" />
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
}