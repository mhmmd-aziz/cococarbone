import { MessageCircle } from 'lucide-react';

interface CTAProps {
  className?: string;
  text?: string;
}

export default function CTAWhatsapp({ className, text }: CTAProps) {
  const phone = "6281234567890"; // Ganti dengan nomor WA lu
  const message = "Hello Cococarbone, I'm interested in your products.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 px-8 py-4 font-bold text-white transition-all rounded-full bg-primary hover:bg-primary-light shadow-lg hover:shadow-primary/30 active:scale-95 ${className}`}
    >
      <MessageCircle size={20} />
      {text || "Contact via WhatsApp"}
    </a>
  );
}