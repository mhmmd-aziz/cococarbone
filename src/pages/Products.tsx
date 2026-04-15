import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProductPreview from '../sections/ProductPreview';

export default function Products() {
  const { t } = useTranslation();

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-primary/5 pt-32 pb-16 px-6 text-center border-b border-primary/10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          {t('products_page.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="text-carbone-light text-lg max-w-2xl mx-auto"
        >
          {t('products_page.subtitle')}
        </motion.p>
      </div>

      {/* Panggil komponen grid produk yang udah ada */}
      <div className="-mt-24">
        <ProductPreview />
      </div>
    </div>
  );
}