import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Package, Flame, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAWhatsapp from '../components/CTAWhatsapp';

// 1. Import gambar arang
import imgCharcoal from '../assets/product-charcoal.png';

export default function Charcoal() {
  const { t } = useTranslation();

  return (
    <div className="bg-background pb-20">
      {/* Hero Product */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-carbone-light/80 z-10"></div>
        
        {/* 2. Panggil gambar arangnya di sini */}
        <img 
          src={imgCharcoal} 
          alt="Charcoal Briquettes" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <Link to="/products" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} /> Back to Products
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t('charcoal_page.title')}
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-30">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Col: Description & Specs */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Flame className="text-coconut" /> Premium Quality
              </h2>
              <p className="text-carbone-light leading-relaxed mb-8 text-lg">
                {t('charcoal_page.desc')}
              </p>

              <h3 className="text-xl font-bold text-carbone mb-6">{t('charcoal_page.specs_title')}</h3>
              <div className="space-y-3">
                {[
                  { label: "Ash Content", value: t('charcoal_page.specs.ash') },
                  { label: "Fixed Carbon", value: t('charcoal_page.specs.carbon') },
                  { label: "Moisture", value: t('charcoal_page.specs.moisture') },
                  { label: "Volatile Matter", value: t('charcoal_page.specs.volatile') },
                  { label: "Calorific Value", value: t('charcoal_page.specs.calorie') },
                  { label: "Burning Time", value: t('charcoal_page.specs.burning') },
                  { label: "Available Shapes", value: t('charcoal_page.specs.shape') },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-carbone-light">{spec.label}</span>
                    <span className="font-bold text-carbone text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Packaging & CTA */}
            <div>
              <div className="bg-background rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Package className="text-primary" /> {t('charcoal_page.pack_title')}
                </h3>
                
                <ul className="space-y-4 mb-8">
                  {[
                    t('charcoal_page.packaging.inner'),
                    t('charcoal_page.packaging.master'),
                    t('charcoal_page.packaging.custom'),
                    `20ft Container: ${t('charcoal_page.packaging.load_20ft')}`,
                    `40ft Container: ${t('charcoal_page.packaging.load_40ft')}`
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="text-carbone-light font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-carbone-light mb-4">
                    Ready to place an order or need a custom specification? Contact our sales team directly.
                  </p>
                  <CTAWhatsapp text="Request Quotation" className="w-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}