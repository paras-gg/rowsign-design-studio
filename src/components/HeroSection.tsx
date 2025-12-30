import { ArrowRight, Play, Star, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cream rounded-full blur-3xl opacity-50" />
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-32 right-[15%] w-16 h-16 bg-primary/20 rounded-2xl rotate-12 animate-float hidden lg:block" />
      <div className="absolute bottom-32 left-[10%] w-12 h-12 bg-accent rounded-xl -rotate-12 animate-float-delayed hidden lg:block" />
      <div className="absolute top-1/2 right-[5%] w-8 h-8 bg-primary/30 rounded-lg rotate-45 animate-bounce hidden lg:block" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/50 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium animate-fade-in-up">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span>Cocok untuk Pemula!</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Belajar Desain{" "}
              <span className="gradient-text">Canva</span>
              <br />
              dari Nol
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Siap jadi kreator visual profesional? Ikuti kursus, baca ebook, dan gunakan template 
              Canva yang sudah kami siapkan khusus untuk pemula seperti kamu.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base font-semibold animate-pulse-glow"
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
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base font-semibold border-primary/30 hover:bg-primary/10"
                onClick={() => document.querySelector("#produk")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="w-5 h-5 mr-2" />
                Lihat Produk
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
                  <Users className="w-5 h-5" />
                  <span>500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Peserta Belajar</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
                  <BookOpen className="w-5 h-5" />
                  <span>20+</span>
                </div>
                <p className="text-sm text-muted-foreground">Materi Video</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
                  <Star className="w-5 h-5 fill-primary" />
                  <span>4.9</span>
                </div>
                <p className="text-sm text-muted-foreground">Rating Peserta</p>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative hidden lg:block animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 bg-card rounded-3xl shadow-lg border border-border/50 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-16 h-16 text-primary">
                      <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.2" />
                      <polygon points="40,30 70,50 40,70" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Mulai Belajar Sekarang</h3>
                  <p className="text-muted-foreground text-sm">
                    Video tutorial step-by-step yang mudah dipahami
                  </p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-md border border-border/50 p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Template Canva</p>
                    <p className="text-xs text-muted-foreground">50+ Template</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-md border border-border/50 p-4 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Ebook Tutorial</p>
                    <p className="text-xs text-muted-foreground">100+ Halaman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;