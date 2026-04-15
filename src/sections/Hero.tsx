import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Leaf } from 'lucide-react';
import CTAWhatsapp from '../components/CTAWhatsapp';

import imgKelapa from '../assets/kelapa.png';
import imgKemiri from '../assets/kemiri.png';
import imgArang from '../assets/arang.png';

export default function Hero() {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [imgKelapa, imgKemiri, imgArang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-carbone-light">
      
      {/* Background Image Slideshow */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={backgroundImages[currentImage]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt="Cococarbone Plantation"
        />
      </AnimatePresence>

      {/* Overlay Dipertebal Biar Teks Makin Kontras */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30 z-10" />

      {/* Konten Teks */}
      <div className="relative z-20 px-6 mx-auto max-w-7xl lg:px-8 w-full mt-16 md:mt-0">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-6 md:space-y-8 max-w-2xl"
        >
          {/* Badge 
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/50 bg-black/40 text-green-400 backdrop-blur-md w-max shadow-lg">
            <Leaf size={16} className="text-green-400" />
            <span className="text-sm font-bold tracking-wider uppercase">Premium Agricultural Export</span>
          </motion.div> */}

          {/* Judul Utama */}
          <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-xl">
            {t('hero.title')} <br />
            {/* Warna hijau daun yang terang biar pop-out tapi tetap tema agrikultur */}
            <span className="text-green-400 drop-shadow-lg">From Indonesia.</span>
          </motion.h1>

          {/* Subtitle - Warna diperputih dan ditebalkan dikit */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed max-w-xl drop-shadow-md">
            {t('hero.subtitle')}
          </motion.p>

          {/* Tombol Aksi */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            {/* Tombol WA pakai aksen warna asli WhatsApp + efek glowing */}
            <CTAWhatsapp text={t('hero.cta')} className="!bg-[#25D366] hover:!bg-[#20bd5a] !text-white !shadow-xl !shadow-[#25D366]/30 border border-[#25D366]/50" />
            
            {/* Tombol Explore bordernya lebih tebal biar jelas */}
            <button className="flex items-center gap-2 px-8 py-4 font-bold text-white border-2 border-white/80 rounded-full hover:bg-white hover:text-primary transition-all backdrop-blur-md shadow-lg">
              Explore Products <ArrowRight size={20} />
            </button>
          </motion.div>

        </motion.div>

        {/* Indikator Slideshow */}
        <div className="absolute bottom-10 left-6 lg:left-8 z-30 flex gap-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                currentImage === index ? 'w-8 bg-green-400' : 'w-4 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}