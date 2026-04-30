import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Compass, ShieldCheck, Factory } from 'lucide-react';

import Stack from '../components/ReactBits/Stack';
import TextPressure from '../components/ReactBits/TextPressure';
import bgKelapa from '../assets/arang3.png';
import bgDaun from '../assets/kelapa1.png';
import arang from '../assets/arang4.png';
import kelapa from '../assets/kelapa2.png';

// 1. Import gambar legalitas
import imgLegal from '../assets/legal-cert.png';

// 2. Import gambar pabrik/fasilitas (nama file huruf kecil sesuai request)
import pt1 from '../assets/pt1.png';
import pt2 from '../assets/pt2.png';
import pt3 from '../assets/pt3.png';
import pt4 from '../assets/pt4.png';
import pt5 from '../assets/pt5.png';
import pt6 from '../assets/pt6.png';

const stackImages = [bgKelapa, bgDaun, arang, kelapa];
const facilityImages = [pt1, pt2, pt3, pt4, pt5, pt6];

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-white pb-20">
      {/* Interactive TextPressure Header */}
      <div className="relative w-full h-[250px] md:h-[400px] flex items-center justify-center overflow-hidden mb-8 mt-16 px-4 cursor-crosshair">
        <div className="w-full h-full max-w-7xl mx-auto pt-10">
          <TextPressure
            text="ABOUT US"
            flex={true}
            alpha={true}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#14452F"
            strokeColor="#18A19A"
            minFontSize={80}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-10">
        
        {/* Story Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 border border-gray-100 mb-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="md:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-0 mb-4 text-xs font-bold tracking-widest uppercase text-gray-400">
                <ShieldCheck size={16} className="text-[#14452F]" /> Verified Exporter
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#14452F] mb-6 leading-tight">{t('about_page.story_title')}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about_page.story_desc')}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="md:w-1/2 w-full h-80 md:h-[450px]"
            >
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={stackImages.map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt={`Our Story Snapshot ${i + 1}`} 
                    className="w-full h-full object-cover shadow-sm border border-gray-200"
                  />
                ))}
              />
            </motion.div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[#F8FAF8] p-10 border-t-4 border-[#14452F] shadow-sm"
          >
            <Compass className="w-10 h-10 text-[#14452F] mb-6" />
            <h3 className="text-2xl font-bold text-[#14452F] mb-4">{t('about_page.vision_title')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('about_page.vision_desc')}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="bg-[#F8FAF8] p-10 border-t-4 border-[#14452F] shadow-sm"
          >
            <Target className="w-10 h-10 text-[#14452F] mb-6" />
            <h3 className="text-2xl font-bold text-[#14452F] mb-4">{t('about_page.mission_title')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('about_page.mission_desc')}</p>
          </motion.div>
        </div>

        {/* FACILITIES / PABRIK SECTION - Corporate Grid Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                <Factory size={16} className="text-[#14452F]" /> Factory Tour
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#14452F] mb-4">
                {t('about_page.facility_title') || "Our Facilities & Production"}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about_page.facility_desc') || "Take a glimpse into our production lines and warehouses where we process our premium commodities."}
              </p>
            </div>
          </div>

          {/* Grid Foto Pabrik 3 Kolom */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {facilityImages.map((img, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-gray-100 border border-gray-200 aspect-[4/3]"
              >
                <img 
                  src={img} 
                  alt={`Cococarbone Facility ${index + 1}`} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Efek overlay gradient tipis di bawah */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* LEGAL & CERTIFICATION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="pt-16 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Teks - Gaya Editorial */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">
                Company Legality
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-[#14452F] mb-6">
                {t('about_page.legal_title')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {t('about_page.legal_desc')}
              </p>

              {/* Referensi Nomor Resmi */}
              <div className="border-l-2 border-[#14452F] pl-6 py-1">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-bold">Official Registration Number</p>
                <p className="text-xl font-bold text-[#14452F] font-mono tracking-tight">
                  {t('about_page.legal_doc').replace('Nomor Registrasi: ', '').replace('Registration No: ', '')}
                </p>
              </div>
            </div>

            {/* Gambar Dokumen */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-[#F8FAF8] translate-x-4 translate-y-4 -z-10 border border-gray-100"></div>
                <div className="bg-white border border-gray-200 p-6 shadow-sm">
                  <div className="border border-gray-100 p-1">
                    <img 
                      src={imgLegal} 
                      alt="Legal Document CV Gemilang Indo Nusantara" 
                      className="w-full h-auto object-contain mix-blend-multiply grayscale-[20%] contrast-[1.1]" 
                    />
                  </div>
                  <div className="mt-5 pt-4 border-t border-dashed border-gray-200 flex justify-between items-center">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Verified by Ministry of Law</span>
                    <ShieldCheck className="w-4 h-4 text-green-700" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}