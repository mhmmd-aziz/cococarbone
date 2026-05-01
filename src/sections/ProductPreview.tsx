import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react'; // Tambah ChevronRight untuk variasi ikon

// Import semua gambar produk dari folder assets
import imgCharcoal from '../assets/arang3.png';
import imgCoconut from '../assets/kelapa2.png';

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
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        
        {/* Header Tetap Sama */}
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
            {/* <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 font-semibold transition-colors border-2 rounded-full text-primary border-primary hover:bg-primary hover:text-white">
              View All Products <ArrowRight size={20} />
            </Link> */}
          </motion.div>
        </div>

        {/* Cards Grid - 2 Kolom, ditengah */}
        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Gambar Atas */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" 
                />
                {/* Efek Vignette halus biar mewah */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100"></div>
              </div>

              {/* Konten & Teks */}
              <div className="flex flex-col flex-grow p-8 pb-6">
                <h3 className="mb-3 text-2xl font-bold text-carbone group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="mb-8 leading-relaxed text-carbone-light flex-grow">
                  {product.desc}
                </p>
              </div>

              {/* REDESIGN: Tombol View Details jadi Solid Block di bawah */}
              <div className="px-8 pb-8 mt-auto">
                <Link 
                  to={product.link} 
                  className="flex items-center justify-between w-full px-6 py-4 font-semibold text-white transition-all bg-primary rounded-xl hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                >
                  <span className="tracking-wide uppercase text-sm">{t('products_preview.btn')}</span>
                  <div className="p-1 bg-white/20 rounded-lg group-hover:bg-white group-hover:text-primary transition-colors">
                    <ChevronRight size={18} />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}