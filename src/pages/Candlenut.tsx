import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Package, ArrowLeft, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAWhatsapp from '../components/CTAWhatsapp';

// Import gambar kemiri yang udah lu masukin ke assets tadi
import imgCandlenut from '../assets/product-candlenut.png';

export default function Candlenut() {
  const { t } = useTranslation();

  return (
    <div className="bg-background pb-20">
      {/* Hero Product */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark/60 z-10"></div>
        <img 
          src={imgCandlenut} 
          alt="Premium Candlenut" 
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
            {t('candlenut_page.title')}
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
                <Droplets className="text-yellow-600" /> High Oil Content
              </h2>
              <p className="text-carbone-light leading-relaxed mb-8 text-lg">
                {t('candlenut_page.desc')}
              </p>

              <h3 className="text-xl font-bold text-carbone mb-6">{t('candlenut_page.specs_title')}</h3>
              <div className="space-y-3">
                {[
                  { label: "Type", value: t('candlenut_page.specs.type') },
                  { label: "Color", value: t('candlenut_page.specs.color') },
                  { label: "Moisture", value: t('candlenut_page.specs.moisture') },
                  { label: "Quality Grade", value: t('candlenut_page.specs.quality') },
                  { label: "Foreign Matter", value: t('candlenut_page.specs.foreign') },
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
                  <Package className="text-primary" /> {t('candlenut_page.pack_title')}
                </h3>
                
                <ul className="space-y-4 mb-8">
                  {[
                    t('candlenut_page.packaging.bag'),
                    t('candlenut_page.packaging.weight'),
                    t('candlenut_page.packaging.custom'),
                    `20ft Container: ${t('candlenut_page.packaging.load_20ft')}`
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="text-carbone-light font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-carbone-light mb-4">
                    Interested in our premium candlenuts? Contact us for a detailed price list and shipping options.
                  </p>
                  <CTAWhatsapp text="Inquire Price" className="w-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}