import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// 1. Import semua gambar produk dari folder assets
import imgCharcoal from '../assets/product-charcoal.png';
import imgCoconut from '../assets/product-coconut.png';
import imgCandlenut from '../assets/product-candlenut.png'; // <-- Import kemiri

export default function ProductPreview() {
  const { t } = useTranslation();

  const products = [
    { 
      id: 'charcoal', 
      title: t('products_preview.items.charcoal.title'), 
      desc: t('products_preview.items.charcoal.desc'), 
      image: imgCharcoal, 
      link: '/products/charcoal' 
    },
    { 
      id: 'coconut', 
      title: t('products_preview.items.coconut.title'), 
      desc: t('products_preview.items.coconut.desc'), 
      image: imgCoconut, 
      link: '/products/coconut' 
    },
    { 
      id: 'candlenut', 
      title: t('products_preview.items.candlenut.title'), 
      desc: t('products_preview.items.candlenut.desc'), 
      image: imgCandlenut, 
      link: '/products/candlenut' // <-- Ganti di sini
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center md:flex-row md:justify-between md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase rounded-full text-primary bg-primary/10">
              {t('products_preview.badge')}
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl text-primary">
              {t('products_preview.title')}
            </h2>
            <p className="text-lg text-carbone-light">
              {t('products_preview.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className="mt-8 md:mt-0"
          >
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 font-semibold transition-colors border-2 rounded-full text-primary border-primary hover:bg-primary hover:text-white">
              View All Products <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group flex flex-col bg-background rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={product.image} alt={product.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>
              <div className="flex flex-col flex-grow p-8">
                <h3 className="mb-3 text-2xl font-bold text-carbone group-hover:text-primary transition-colors">{product.title}</h3>
                <p className="mb-6 leading-relaxed text-carbone-light flex-grow">{product.desc}</p>
                <Link to={product.link} className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-light">
                  {t('products_preview.btn')} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}