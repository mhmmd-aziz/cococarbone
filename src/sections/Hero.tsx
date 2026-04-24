import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Typewriter } from '../components/ReactBits/Typewriter';
import BlurText from '../components/ReactBits/BlurText';
import { ShinyText } from '../components/ReactBits/ShinyText';
import LineWaves from '../components/ReactBits/LineWaves';

import arangNoBg from '../assets/arangNoBg.png';
import kelapaNoBg from '../assets/kelapaNoBg.png';
// import kemiriNoBg from '../assets/kemiriNoBg.png';

const heroImages = [
  { id: 1, src: arangNoBg, alt: 'Premium Coconut Charcoal' },
  { id: 2, src: kelapaNoBg, alt: 'Fresh Indonesian Coconuts' },
  // { id: 3, src: kemiriNoBg, alt: 'High Quality Candlenuts' }
];

export default function Hero() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optional: Auto-slide every 5 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      
      {/* Background Pattern (Minimalist Grid & Ambient Natural Glow) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#14452F 2px, transparent 2px)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-emerald-400/5 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#14452F]/5 rounded-full blur-[100px] md:blur-[150px] translate-y-1/3 -translate-x-1/4 pointer-events-none mix-blend-multiply" />
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between pt-20">
        
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 z-10 text-[#14452F] flex flex-col pt-10 md:pt-0 md:-mt-16 lg:-mt-24 pointer-events-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl font-medium tracking-wide mb-2 text-[#14452F]/80"
          >
            <ShinyText text="Welcome to" speed={3} />
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-6 tracking-tight overflow-hidden"
          >
            <BlurText 
              text="Cococarbone"
              delay={50}
              animateBy="letters"
              direction="bottom"
              className="text-[#14452F]"
            />
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#14452F]/80 text-sm md:text-base leading-relaxed max-w-md mb-10"
          >
            Discover the highest quality coconut charcoal briquettes directly from Indonesia. Sustainable, long-lasting, and meticulously crafted for your needs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <Link 
              to="/products"
              className="bg-[#14452F] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#14452F]/90 transition-all shadow-lg"
            >
              Learn More
            </Link>
            <Link 
              to="/contact"
              className="border border-[#14452F] text-[#14452F] px-8 py-3.5 rounded-full font-semibold hover:bg-[#14452F] hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Right Image/Product Area */}
        <div className="w-full md:w-1/2 relative h-[380px] md:h-[450px] lg:h-[550px] flex items-center justify-center mt-8 md:mt-0 z-10 pointer-events-none">
          
          {/* Main Floating Product Carousel */}
          <motion.div 
            animate={{ y: [-15, 15] }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
            }}
            className="relative z-20 w-[85%] md:w-[115%] lg:w-[120%] -ml-0 lg:-ml-10 flex items-center justify-center h-full"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src={heroImages[currentIndex].src} 
                alt={heroImages[currentIndex].alt}
                className="w-full max-h-[90%] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
              />
            </AnimatePresence>
          </motion.div>

          {/* Carousel Controls */}
          <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40 pointer-events-auto">
            <button 
              onClick={handlePrev} 
              className="p-2 bg-white/80 backdrop-blur-md border border-[#14452F]/10 rounded-full shadow-lg hover:bg-[#14452F] hover:text-white transition-all text-[#14452F]"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2.5 items-center">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 h-2.5 bg-[#14452F]' : 'w-2.5 h-2.5 bg-[#14452F]/20 hover:bg-[#14452F]/40'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext} 
             className="p-2 bg-white/80 backdrop-blur-md border border-[#14452F]/10 rounded-full shadow-lg hover:bg-[#14452F] hover:text-white transition-all text-[#14452F]"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Floating Element 1 - Top Left */}



        </div>
      </div>
    </section>
  );
}