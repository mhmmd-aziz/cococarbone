import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProductPreview from '../sections/ProductPreview';
import TextPressure from '../components/ReactBits/TextPressure';

export default function Products() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Interactive TextPressure Header */}
      <div className="relative w-full h-[250px] md:h-[400px] flex items-center justify-center overflow-hidden mb-8 mt-16 px-4 cursor-crosshair">
        <div className="w-full h-full max-w-7xl mx-auto pt-10">
          <TextPressure
            text="CATALOG"
            flex={true}
            alpha={true}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#14452F"
            strokeColor="#18A19A"
            minFontSize={80}
          />
        </div>
      </div>

      {/* Panggil komponen grid produk yang udah ada */}
      <div className="-mt-24">
        <ProductPreview />
      </div>
    </div>
  );
}