import { Palette, Clock, Award, HeartHandshake, Rocket, Shield } from "lucide-react";

const benefits = [
  {
    icon: Palette,
    title: "Desain Tanpa Ribet",
    description: "Nggak perlu skill khusus. Ikuti tutorial kami dan langsung bisa bikin desain keren!",
  },
  {
    icon: Clock,
    title: "Belajar Kapan Saja",
    description: "Akses materi 24/7. Mau belajar tengah malam atau pagi buta? Bebas!",
  },
  {
    icon: Award,
    title: "Hasil Profesional",
    description: "Template dan teknik yang kami ajarkan sudah teruji menghasilkan desain berkualitas.",
  },
  {
    icon: HeartHandshake,
    title: "Support Langsung",
    description: "Ada pertanyaan? Langsung chat kami via WhatsApp. Kami siap bantu!",
  },
  {
    icon: Rocket,
    title: "Langsung Praktik",
    description: "Setiap materi disertai latihan praktik agar kamu langsung bisa menerapkannya.",
  },
  {
    icon: Shield,
    title: "Akses Selamanya",
    description: "Sekali beli, akses seumur hidup. Termasuk update materi di masa depan!",
  },
];

const BenefitSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Kenapa Belajar di{" "}
            <span className="gradient-text">Rowsign</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Kami paham kesulitan pemula. Makanya, semua materi kami rancang agar mudah dipahami dan langsung bisa dipraktikkan.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;