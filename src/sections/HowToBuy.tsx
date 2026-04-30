import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Stepper, { Step } from '../components/ReactBits/Stepper';

export default function HowToBuy() {
  const { t } = useTranslation();
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <section className="py-24 bg-[#f8fcf9] text-[#14452F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Bagian Kiri: Judul dan Deskripsi */}
          <div className="space-y-6 lg:pr-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              {t('how_to_buy.title')} <span className="block mt-2 font-serif italic font-normal">{t('how_to_buy.title_brand')}</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#14452F]/70 leading-relaxed max-w-lg mb-8"
            >
              {t('how_to_buy.subtitle')}
            </motion.p>
          </div>

          {/* Bagian Kanan: Stepper React Bits */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Stepper
              initialStep={1}
              onFinalStepCompleted={() => setIsCompleted(true)}
              backButtonText={t('how_to_buy.back')}
              nextButtonText={t('how_to_buy.next')}
              finishButtonText={t('how_to_buy.finish')}
              disableStepIndicators={false}
              stepCircleContainerClassName="shadow-lg border border-[#e5e5e5] bg-white"
              contentClassName="text-[#14452F]"
            >
              <Step>
                <div className="py-2">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{t('how_to_buy.steps.s1_title')}</h3>
                  <p className="text-[#14452F]/70 leading-relaxed">
                    {t('how_to_buy.steps.s1_desc')}
                  </p>
                </div>
              </Step>

              <Step>
                <div className="py-2">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{t('how_to_buy.steps.s2_title')}</h3>
                  <p className="text-[#14452F]/70 leading-relaxed">
                    {t('how_to_buy.steps.s2_desc')}
                  </p>
                </div>
              </Step>

              <Step>
                <div className="py-2">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{t('how_to_buy.steps.s3_title')}</h3>
                  <p className="text-[#14452F]/70 leading-relaxed">
                    {t('how_to_buy.steps.s3_desc')}
                  </p>
                </div>
              </Step>

              <Step>
                <div className="py-2">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{t('how_to_buy.steps.s4_title')}</h3>
                  <p className="text-[#14452F]/70 leading-relaxed">
                    {t('how_to_buy.steps.s4_desc')}
                  </p>
                </div>
              </Step>
            </Stepper>
            
            {isCompleted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="mt-6 text-center text-sm font-medium text-green-700 bg-green-50 p-4 rounded-xl border border-green-200"
              >
                {t('how_to_buy.completed')}
              </motion.div>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

