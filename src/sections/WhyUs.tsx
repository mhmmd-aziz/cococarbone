import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Clock, Ship, Leaf } from 'lucide-react';

export default function WhyUs() {
  const { t } = useTranslation();

  const features = [
    { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: t('why_us.cards.c1_title'), desc: t('why_us.cards.c1_desc') },
    { icon: <Clock className="w-8 h-8 text-primary" />, title: t('why_us.cards.c2_title'), desc: t('why_us.cards.c2_desc') },
    { icon: <Ship className="w-8 h-8 text-primary" />, title: t('why_us.cards.c3_title'), desc: t('why_us.cards.c3_desc') },
    { icon: <Leaf className="w-8 h-8 text-primary" />, title: t('why_us.cards.c4_title'), desc: t('why_us.cards.c4_desc') },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }} // <-- Diubah
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase rounded-full text-primary bg-primary/10"
          >
            {t('why_us.badge')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }} // <-- Diubah
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl font-bold md:text-5xl text-primary"
          >
            {t('why_us.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }} // <-- Diubah
            transition={{ delay: 0.2 }}
            className="text-lg text-carbone-light"
          >
            {t('why_us.subtitle')}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }} // <-- Diubah
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 transition-transform duration-300 bg-white border border-gray-100 shadow-sm rounded-3xl hover:-translate-y-2 hover:shadow-lg hover:border-primary/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-primary/5">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-carbone">{feature.title}</h3>
              <p className="leading-relaxed text-carbone-light text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}