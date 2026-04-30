import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Award, X } from 'lucide-react';
import TargetCursor from '../components/ReactBits/TargetCursor';

export default function AboutPreview() {
  const { t } = useTranslation();
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const stats = [
    {
      id: 1,
      icon: <TrendingUp className="w-10 h-10 mb-4 text-primary" />,
      title: "High",
      label: t('about_preview.stats.cap'),
      detailTitle: "High Volume Capacity",
      description: "Kami memiliki kapasitas produksi yang besar untuk memenuhi permintaan global secara konsisten. Fasilitas kami mampu menghasilkan ribuan ton arang carbon kelapa berkualitas tinggi setiap bulannya untuk melayani kebutuhan industri dan ritel di berbagai benua.",
      extra: ["Kapasitas Produksi Masif", "Suplai Berkelanjutan", "Kontrol Kualitas Ketat"]
    },
    {
      id: 2,
      icon: <Award className="w-10 h-10 mb-4 text-primary" />,
      title: "100%",
      label: t('about_preview.stats.qual'),
      className: "sm:translate-y-8",
      detailTitle: "100% Premium Grade",
      description: "Hanya bahan baku kelapa terbaik yang kami gunakan. Arang carbon kami memiliki kadar abu rendah, panas yang stabil, dan tanpa bahan kimia tambahan, menjadikannya standar emas untuk BBQ dan Shisha di pasar internasional.",
      extra: ["Kadar Abu Low (< 2.5%)", "Panas Maksimal", "Eco-Friendly"]
    },
    {
      id: 3,
      icon: <CheckCircle2 className="w-10 h-10 mb-4 text-primary" />,
      title: "Global",
      label: t('about_preview.stats.exp'),
      detailTitle: "Global Export Ready",
      description: "Berpengalaman mengirimkan produk ke berbagai belahan dunia dengan dokumen ekspor lengkap. Kami memastikan setiap pengiriman dilakukan dengan standar logistik internasional untuk menjamin keamanan produk hingga sampai ke tangan Anda.",
      extra: ["Dokumen Ekspor Lengkap", "Logistik Terpercaya", "Jangkauan Seluruh Dunia"]
    }
  ];

  const selectedCardData = stats.find(s => s.id === selectedCard);

  return (
    <section 
      className="py-24 bg-white relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && <TargetCursor targetSelector=".cursor-target" />}
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Teks Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
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
            
           <Link 
            to="/about" 
            className="group inline-flex items-center gap-5 px-2 py-2 pr-8 mt-6 text-xs font-bold text-white uppercase tracking-[0.2em] bg-[#14452F] rounded-full shadow-md hover:shadow-xl hover:shadow-[#14452F]/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Lingkaran Ikon Interaktif */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white group-hover:bg-white group-hover:text-[#14452F] transition-colors duration-300">
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            <span>{t('about_preview.btn')}</span>
          </Link>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                onClick={() => setSelectedCard(stat.id)}
                className={`cursor-target p-8 border border-gray-100 rounded-3xl bg-background shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${stat.className || ''}`}
              >
                {stat.icon}
                <h3 className="mb-2 text-xl font-bold text-carbone">{stat.title}</h3>
                <p className="text-sm font-medium text-carbone-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedCard && selectedCardData && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
            />
            <motion.div
              layoutId={`card-${selectedCard}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden"
            >
              <div className="p-8 md:p-12 relative">
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-900"
                >
                  <X size={24} />
                </button>

                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-primary/5 rounded-2xl">
                    {selectedCardData.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-1">{selectedCardData.label}</h4>
                    <h3 className="text-3xl font-bold text-carbone">{selectedCardData.detailTitle}</h3>
                  </div>
                </div>

                <p className="text-lg text-carbone-light leading-relaxed mb-8">
                  {selectedCardData.description}
                </p>

                <div className="space-y-4">
                  {selectedCardData.extra.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-primary font-medium">
                      <CheckCircle2 size={20} />
                      {item}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedCard(null)}
                  className="w-full mt-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}