import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-2xl rotate-45" />
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-white/5 rounded-xl -rotate-12" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 bg-white/20 rounded-2xl flex items-center justify-center animate-bounce">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Jadi Kreator Visual{" "}
            <span className="text-cream">Profesional</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Jangan tunda lagi! Mulai perjalanan desainmu sekarang dan jadilah kreator visual yang 
            bisa menghasilkan desain keren dengan Canva.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-cream rounded-full px-10 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <a
              href="https://wa.me/6282154945903?text=Saya%20ingin%20membeli%20produk%20Rowsign"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beli Sekarang via WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>

          {/* Trust Badge */}
          <p className="mt-6 text-white/60 text-sm">
            💬 Respon cepat • 🔒 Pembayaran aman • ⭐ 500+ pelanggan puas
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;