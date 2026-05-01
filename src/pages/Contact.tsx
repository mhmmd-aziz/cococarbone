import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone, Send, CheckCircle2, BellRing } from 'lucide-react';
import HeaderContact from '../sections/HeaderContact';

const WA_NUMBER = '6281519646990';

export default function Contact() {
  const { t } = useTranslation();

  // --- Form State ---
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  // --- Toast State ---
  const [toast, setToast] = useState<{ show: boolean; msg: string; type: 'success' | 'info' }>({ show: false, msg: '', type: 'success' });

  const showToast = (msg: string, type: 'success' | 'info') => {
    setToast({ show: true, msg, type });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 3500);
  };

  // --- WhatsApp Submit Handler ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in Name, Email, and Message.', 'info');
      return;
    }
    const text = encodeURIComponent(
      `*New Inquiry via Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || '-'}\n\n` +
      `*Message:*\n${formData.message}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
  };

  const inputClass = "w-full bg-white rounded-xl px-6 py-4 text-[#14452F] font-medium placeholder:text-[#14452F]/40 focus:ring-2 focus:ring-[#14452F]/20 transition-all outline-none border border-gray-200 focus:border-[#14452F] shadow-sm";

  return (
    <div className="bg-white min-h-screen pb-20 relative">

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-24 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl text-white font-semibold text-sm backdrop-blur-md
              ${toast.type === 'success' ? 'bg-[#14452F]' : 'bg-[#18A19A]'}`}
          >
            {toast.type === 'success' ? <CheckCircle2 size={20} /> : <BellRing size={20} />}
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive TextPressure Header */}
      <HeaderContact />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 space-y-12 relative z-10 mt-8 md:mt-16"
      >
        {/* Top Section: Form */}
        <div className="max-w-4xl mx-auto">
          {/* Contact Form - WhatsApp Submit */}
          <motion.div variants={itemVariants} className="bg-[#F8FAF8] rounded-[2rem] p-8 md:p-12 border border-[#14452F]/10 shadow-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                  placeholder={t('contact_page.form.email')}
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                  placeholder={t('contact_page.form.phone')}
                  className={inputClass}
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                  placeholder={t('contact_page.form.name')}
                  className={inputClass}
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  value={formData.message}
                  onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                  placeholder={t('contact_page.form.message')}
                  rows={5}
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-2 flex flex-col md:flex-row md:items-center gap-4">
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 bg-[#14452F] hover:bg-[#0F3523] text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-[#14452F]/20 active:scale-[0.98] w-full md:w-auto"
                >
                  <span>{t('contact_page.form.submit')}</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
                <p className="text-xs text-[#14452F]/40 font-medium">
                  {t('contact_page.form.whatsapp_info')}
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Middle Section: Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white border border-[#14452F]/10 shadow-lg shadow-[#14452F]/5 rounded-[2rem] p-8 flex flex-col justify-between min-h-[200px]"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#14452F]/5 rounded-xl text-[#14452F]">
                <Phone size={24} />
              </div>
              <a href="tel:+6281519646990" className="text-xl font-bold text-[#14452F] whitespace-nowrap hover:text-[#18A19A] transition-colors">+62 815-1964-6990</a>
            </div>
            <p className="text-[#14452F]/60 text-sm mt-6 leading-relaxed font-medium">
              {t('contact_page.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white border border-[#14452F]/10 shadow-lg shadow-[#14452F]/5 rounded-[2rem] p-8 flex flex-col justify-between min-h-[200px]"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#14452F]/5 rounded-xl text-[#14452F]">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#14452F] break-all">exportcococarbone@gmail.com</h3>
            </div>
            <p className="text-[#14452F]/60 text-sm mt-6 leading-relaxed font-medium">
              {t('contact_page.subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white border border-[#14452F]/10 shadow-lg shadow-[#14452F]/5 rounded-[2rem] p-8 flex flex-col justify-between min-h-[200px]"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#14452F]/5 rounded-xl text-[#14452F]">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#14452F]">{t('contact_page.office')}</h3>
            </div>
            <p className="text-[#14452F]/60 text-sm mt-6 leading-relaxed font-medium">
              Jalan Bajak 2 H, Komplek ITM No. A2, Medan - North Sumatera, Indonesia
            </p>
          </motion.div>

        </div>

        {/* Bottom Section: Map */}
        <motion.div
          variants={itemVariants}
          className="w-full h-[450px] rounded-[2rem] overflow-hidden shadow-xl shadow-[#14452F]/5 border border-[#14452F]/10 p-2 bg-white"
        >
          <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.4837230540656!2d98.70054607503458!3d3.534272696463038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f7e4a5e4e4d%3A0x7e8e8e8e8e8e8e8e!2sJl.%20Bajak%20II%20H%2C%20Harjosari%20I%2C%20Kec.%20Medan%20Amplas%2C%20Kota%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sen!2sid!4v1690000000001!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.3] contrast-[1.05]"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
