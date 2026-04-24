import { useState } from 'react';
import { motion } from 'framer-motion';
import Stepper, { Step } from '../components/ReactBits/Stepper';

export default function HowToBuy() {
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
              Cara Membeli Produk <span className="block mt-2 font-serif italic font-normal">CocoCarbone</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#14452F]/70 leading-relaxed max-w-lg mb-8"
            >
              Kami merancang proses pemesanan briket arang kelapa premium kami menjadi transparan, aman, dan mudah bagi para mitra B2B di seluruh dunia. Ikuti tahapan terstruktur kami untuk memastikan pesanan Anda tiba tepat waktu.
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
              backButtonText="Sebelumnya"
              nextButtonText="Lanjut"
              disableStepIndicators={false}
              stepCircleContainerClassName="shadow-lg border border-[#e5e5e5] bg-white"
              contentClassName="text-[#14452F]"
            >
              <Step>
                <div className="py-2">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">1. Ajukan Inkuiri</h3>
                  <p className="text-[#14452F]/70 leading-relaxed">
                    Hubungi tim kami dan sampaikan spesifikasi produk yang Anda butuhkan (Grade, ukuran, tipe kemasan), serta estimasi volume pesanan dan pelabuhan tujuan pengiriman.
                  </p>
                </div>
              </Step>

              <Step>
                <div className="py-2">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">2. Konsultasi & Sampel</h3>
                  <p className="text-[#14452F]/70 leading-relaxed">
                    Tim ahli kami akan mendiskusikan harga, kapasitas produksi, dan opsi private label jika diperlukan. Kami juga siap mengirimkan sampel produk agar Anda dapat menguji kualitasnya.
                  </p>
                </div>
              </Step>

              <Step>
                <div className="py-2">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">3. Sales Contract & DP</h3>
                  <p className="text-[#14452F]/70 leading-relaxed">
                    Setelah kesepakatan tercapai, kami akan menerbitkan Proforma Invoice / Sales Contract. Anda dapat melakukan pembayaran Down Payment (DP) atau membuka L/C sesuai term pembayaran.
                  </p>
                </div>
              </Step>

              <Step>
                <div className="py-2">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">4. Produksi & Pengiriman</h3>
                  <p className="text-[#14452F]/70 leading-relaxed">
                    Kami langsung memulai tahapan produksi, uji mutu QC, dan pengemasan. Produk kemudian akan dimuat ke kontainer beserta pengecekan dokumen ekspor secara lengkap.
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
                Anda sudah memahami semua tahapan! Siap untuk mulai berbisnis? Hubungi kami sekarang.
              </motion.div>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
