import { MessageCircle } from 'lucide-react';

interface CTAProps {
  className?: string;
  text?: string;
  productName?: string;
}

export default function CTAWhatsapp({ className, text, productName }: CTAProps) {
  const phone = "6281519646990"; // Ganti dengan nomor WA lu
  
  // Custom message based on whether a product name is passed
  const baseMessage = productName 
    ? `*Product Inquiry*\n\nHello Cococarbone, I am interested in your *${productName}* product. Could you please provide more information?`
    : `*General Inquiry*\n\nHello Cococarbone, I would like to inquire about your products.`;
    
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(baseMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className={`flex items-center justify-center gap-2 px-8 py-4 font-bold text-white transition-all rounded-full bg-primary hover:bg-primary-light shadow-lg hover:shadow-primary/30 active:scale-95 ${className}`}
    >
      <MessageCircle size={20} />
      {text || "Contact via WhatsApp"}
    </a>
  );
}