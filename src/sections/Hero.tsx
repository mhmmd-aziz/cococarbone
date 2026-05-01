import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Hero background images
import pt1 from '../assets/pt1.png';
import pt2 from '../assets/pt2.png';
import aranghero1 from '../assets/aranghero1.png';
import aranghero2 from '../assets/aranghero2.png';
import kelapahero1 from '../assets/kelapahero1.png';
import kelapahero2 from '../assets/kelapahero2.png';

const heroSlides = [
  { id: 1, src: pt1, alt: 'Cococarbone Facility 1' },
  { id: 2, src: aranghero1, alt: 'Premium Charcoal Production' },
  { id: 3, src: kelapahero1, alt: 'Fresh Coconut Harvest' },
  { id: 4, src: pt2, alt: 'Cococarbone Facility 2' },
  { id: 5, src: aranghero2, alt: 'Charcoal Quality Control' },
  { id: 6, src: kelapahero2, alt: 'Coconut Processing' },
];

export default function Hero() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section id="hero-section" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      
      {/* Background Image Slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2, ease: 'easeInOut' }, scale: { duration: 6, ease: 'easeOut' } }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroSlides[currentIndex].src}
            alt={heroSlides[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(
            135deg,
            rgba(10, 25, 16, 0.88) 0%,
            rgba(10, 25, 16, 0.72) 35%,
            rgba(10, 25, 16, 0.45) 65%,
            rgba(10, 25, 16, 0.30) 100%
          )`
        }}
      />

      {/* Bottom gradient for seamless transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(248,250,248,1) 0%, transparent 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <div className="w-full md:w-3/5 lg:w-1/2">
          

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.08] mb-6 tracking-tight bg-gradient-to-br from-white via-white to-[#8BC9A4] bg-clip-text text-transparent drop-shadow-sm"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg leading-relaxed max-w-lg mb-10 font-light"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/about"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-900/30"
              style={{ backgroundColor: '#1A5A3C' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#20724C'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1A5A3C'; }}
            >
              {t('about_preview.btn')}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300"
              style={{
                color: 'white',
                border: '1.5px solid rgba(255,255,255,0.5)',
                backdropFilter: 'blur(8px)',
                backgroundColor: 'rgba(255,255,255,0.08)'
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
              }}
            >
              {t('nav.contact')}
            </Link>
          </motion.div>
        </div>
      </div>


    </section>
  );
}