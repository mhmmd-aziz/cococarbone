import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail } from 'lucide-react';
import CTAWhatsapp from '../components/CTAWhatsapp';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="bg-background min-h-[80vh] flex flex-col justify-center py-20">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-gray-100 text-center"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">{t('contact_page.title')}</h1>
          <p className="text-carbone-light text-lg mb-12 max-w-xl mx-auto">
            {t('contact_page.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="bg-background p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
              <MapPin className="text-primary shrink-0 w-8 h-8" />
              <div>
                <h3 className="font-bold text-carbone mb-1">{t('contact_page.office')}</h3>
                <p className="text-carbone-light text-sm">Indonesia</p>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
              <Mail className="text-primary shrink-0 w-8 h-8" />
              <div>
                <h3 className="font-bold text-carbone mb-1">{t('contact_page.email')}</h3>
                <p className="text-carbone-light text-sm">export@cococarbone.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAWhatsapp text={t('contact_page.whatsapp')} className="w-full sm:w-auto px-12 py-5 text-lg" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}