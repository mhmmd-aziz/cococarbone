import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone } from 'lucide-react';
import HeaderContact from '../sections/HeaderContact';

export default function Contact() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Interactive TextPressure Header */}
      <HeaderContact />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 space-y-12 relative z-10 mt-8 md:mt-16"
      >
        {/* Top Section: Form & Newsletter */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-[#DDE6E8]/40 rounded-[2.5rem] p-8 md:p-12 border border-[#DDE6E8]/50">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder={t('contact_page.form.email')}
                  className="w-full bg-white rounded-full px-8 py-5 text-carbone placeholder:text-carbone/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none border border-transparent focus:border-primary/10 shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="tel" 
                  placeholder={t('contact_page.form.phone')}
                  className="w-full bg-white rounded-full px-8 py-5 text-carbone placeholder:text-carbone/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none border border-transparent focus:border-primary/10 shadow-sm"
                />
              </div>
              <div className="md:col-span-2">
                <input 
                  type="text" 
                  placeholder={t('contact_page.form.name')}
                  className="w-full bg-white rounded-full px-8 py-5 text-carbone placeholder:text-carbone/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none border border-transparent focus:border-primary/10 shadow-sm"
                />
              </div>
              <div className="md:col-span-2">
                <textarea 
                  placeholder={t('contact_page.form.message')}
                  rows={5}
                  className="w-full bg-white rounded-[2.5rem] px-8 py-5 text-carbone placeholder:text-carbone/40 focus:ring-2 focus:ring-primary/20 transition-all outline-none border border-transparent focus:border-primary/10 shadow-sm resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="bg-[#5F8575] hover:bg-[#4A6D5A] text-white font-bold py-5 px-12 rounded-full transition-all shadow-lg shadow-[#5F8575]/20 active:scale-95"
                >
                  {t('contact_page.form.submit')}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Newsletter Box */}
          <motion.div variants={itemVariants} className="bg-[#4E6E5D] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-[#4E6E5D]/20">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">{t('contact_page.newsletter_title')}</h2>
              <p className="text-white/70 mb-8 leading-relaxed text-sm md:text-base">
                {t('contact_page.newsletter_desc')}
              </p>
            </div>
            
            <div className="relative z-10 space-y-4">
              <input 
                type="email" 
                placeholder={t('contact_page.form.email')}
                className="w-full bg-white text-carbone rounded-full px-8 py-5 outline-none border-none shadow-inner"
              />
              <button className="w-full bg-[#2A3F33] hover:bg-[#1A2B23] text-white font-bold py-5 rounded-full transition-all active:scale-95 shadow-lg">
                {t('contact_page.form.submit')}
              </button>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-black/20 rounded-full blur-2xl pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Middle Section: Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -5 }}
            className="bg-[#A4BCB7] rounded-[2.5rem] p-10 text-white shadow-xl shadow-[#A4BCB7]/20 flex flex-col justify-between min-h-[220px]"
          >
            <div className="flex items-center gap-5">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Phone size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold whitespace-nowrap">+62 812-3456-7890</h3>
            </div>
            <p className="text-white/80 text-sm mt-6 leading-relaxed max-w-[240px]">
              {t('contact_page.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -5 }}
            className="bg-[#DDE6E8] rounded-[2.5rem] p-10 text-carbone shadow-xl shadow-[#DDE6E8]/30 flex flex-col justify-between min-h-[220px]"
          >
            <div className="flex items-center gap-5">
              <div className="p-4 bg-white rounded-2xl shadow-sm">
                <Mail size={28} className="text-[#6B9080]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold break-all">export@cococarbone.com</h3>
            </div>
            <p className="text-carbone/50 text-sm mt-6 leading-relaxed max-w-[240px]">
              {t('contact_page.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -5 }}
            className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-[2.5rem] p-10 text-carbone flex flex-col justify-between min-h-[220px]"
          >
            <div className="flex items-center gap-5">
              <div className="p-4 bg-[#F0F4F5] rounded-2xl">
                <MapPin size={28} className="text-[#6B9080]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">{t('contact_page.office')}</h3>
            </div>
            <p className="text-carbone/50 text-sm mt-6 leading-relaxed max-w-[240px]">
              {t('footer.address')}, Indonesia
            </p>
          </motion.div>
        </div>

        {/* Bottom Section: Map */}
        <motion.div 
          variants={itemVariants} 
          className="w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/60 border border-gray-100 p-2 bg-white"
        >
          <div className="w-full h-full rounded-[2rem] overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58290378037!2d107.573116535353!3d-6.903429017415064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a944dc4e0d02!2sBandung%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1713333333333!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1]"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
