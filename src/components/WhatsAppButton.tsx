import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6282154945903?text=Saya%20ingin%20membeli%20produk%20Rowsign"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
      <span className="font-semibold hidden sm:inline">Chat Sekarang</span>
    </a>
  );
};

export default WhatsAppButton;