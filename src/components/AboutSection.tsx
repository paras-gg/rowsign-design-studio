import { Check, Lightbulb, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Materi Mudah Dipahami",
      description: "Setiap materi dibuat dengan bahasa yang sederhana dan contoh yang praktis",
    },
    {
      icon: Target,
      title: "Fokus Hasil Nyata",
      description: "Langsung praktek dan hasilkan desain yang bisa kamu pakai",
    },
    {
      icon: Zap,
      title: "Akses Selamanya",
      description: "Sekali beli, akses selamanya tanpa biaya tambahan",
    },
  ];

  return (
    <section id="tentang" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">
                Tentang Rowsign
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Kenapa Harus Belajar di{" "}
                <span className="gradient-text">Rowsign</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Rowsign hadir untuk membantu siapa saja yang ingin belajar desain Canva dari nol. 
                Nggak perlu bakat khusus, cukup ikuti langkah-langkahnya dan kamu bisa jadi kreator visual!
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-4">
              {[
                "Materi step-by-step dari dasar",
                "Video berkualitas HD dan mudah diikuti",
                "Template siap pakai yang bisa langsung diedit",
                "Support via WhatsApp jika ada kendala",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;