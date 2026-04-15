import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Compass, ShieldCheck } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-background pb-20">
      {/* Header */}
      <div className="bg-primary-dark pt-32 pb-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {t('about_page.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          {t('about_page.subtitle')}
        </motion.p>
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
              className="md:w-1/2 w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" alt="Agriculture" className="w-full h-full object-cover" />
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