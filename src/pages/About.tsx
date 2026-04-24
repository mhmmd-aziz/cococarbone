import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Compass, ShieldCheck } from 'lucide-react';

import Stack from '../components/ReactBits/Stack';
import TextPressure from '../components/ReactBits/TextPressure';
import bgKelapa from '../assets/BgKelapa.jpg';
import bgDaun from '../assets/BgDaun.jpg';
import arang from '../assets/product-charcoal.png';
import kelapa from '../assets/product-coconut.png';

const stackImages = [bgKelapa, bgDaun, arang, kelapa];

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
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="md:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase rounded-full text-primary bg-primary/10">
                <ShieldCheck size={16} /> Verified Exporter
              </div>
              <h2 className="text-3xl font-bold text-carbone mb-6">{t('about_page.story_title')}</h2>
              <p className="text-carbone-light text-lg leading-relaxed">
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
                    className="w-full h-full object-cover rounded-[2rem] shadow-[0_20px_40px_rgba(20,69,47,0.15)]"
                  />
                ))}
              />
            </motion.div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
          >
            <Compass className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-carbone mb-4">{t('about_page.vision_title')}</h3>
            <p className="text-carbone-light leading-relaxed">{t('about_page.vision_desc')}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
          >
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-carbone mb-4">{t('about_page.mission_title')}</h3>
            <p className="text-carbone-light leading-relaxed">{t('about_page.mission_desc')}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}