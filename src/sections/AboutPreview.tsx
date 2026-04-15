import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Award } from 'lucide-react';

export default function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Teks Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }} // <-- Ini yang diubah (once: false)
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase rounded-full text-primary bg-primary/10">
              {t('about_preview.badge')}
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl text-primary leading-tight">
              {t('about_preview.title')}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-carbone-light">
              {t('about_preview.desc')}
            </p>
            
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold transition-colors text-primary hover:text-primary-light group">
              {t('about_preview.btn')}
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }} // <-- Ini yang diubah (once: false)
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="p-8 border border-gray-100 rounded-3xl bg-background shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="w-10 h-10 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-carbone">High</h3>
              <p className="text-sm font-medium text-carbone-light">{t('about_preview.stats.cap')}</p>
            </div>
            
            <div className="p-8 border border-gray-100 rounded-3xl bg-background shadow-sm hover:shadow-md transition-shadow sm:translate-y-8">
              <Award className="w-10 h-10 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-carbone">100%</h3>
              <p className="text-sm font-medium text-carbone-light">{t('about_preview.stats.qual')}</p>
            </div>
            
            <div className="p-8 border border-gray-100 rounded-3xl bg-background shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-10 h-10 mb-4 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-carbone">Global</h3>
              <p className="text-sm font-medium text-carbone-light">{t('about_preview.stats.exp')}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}