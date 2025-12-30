import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Video, BookOpen, Layout, Package, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const products = {
  "kursus-video": {
    title: "Kursus Video Canva",
    tagline: "Belajar desain Canva dari nol dengan video tutorial step-by-step",
    description: "Kursus video lengkap yang dirancang khusus untuk pemula. Kamu akan belajar dari dasar-dasar Canva hingga teknik desain profesional yang bisa langsung kamu terapkan.",
    price: "Rp 149.000",
    originalPrice: "Rp 299.000",
    icon: Video,
    features: [
      "20+ video tutorial HD berkualitas tinggi",
      "Durasi total 5+ jam pembelajaran",
      "Materi dari dasar hingga advanced",
      "Project praktik di setiap modul",
      "Akses selamanya tanpa batas waktu",
      "Update materi gratis selamanya",
      "Support via WhatsApp",
    ],
    modules: [
      "Pengenalan Canva & Interface",
      "Memahami Elemen Desain",
      "Bekerja dengan Teks & Typography",
      "Menggunakan Gambar & Ilustrasi",
      "Membuat Desain Social Media",
      "Desain untuk Bisnis (Logo, Kartu Nama)",
      "Tips & Trik Desain Profesional",
    ],
    suitable: ["Content creator pemula", "Pemilik bisnis online", "Social media manager", "Mahasiswa & pelajar", "Siapa saja yang ingin belajar desain"],
  },
  "ebook-tutorial": {
    title: "Ebook Tutorial Canva",
    tagline: "Panduan lengkap dalam bentuk PDF yang bisa dibaca kapan saja",
    description: "Ebook komprehensif berisi 100+ halaman panduan praktis menggunakan Canva. Dilengkapi dengan screenshot, tips, dan latihan yang mudah diikuti.",
    price: "Rp 79.000",
    originalPrice: "Rp 149.000",
    icon: BookOpen,
    features: [
      "100+ halaman panduan lengkap",
      "Format PDF yang mudah dibaca",
      "Screenshot detail setiap langkah",
      "Bisa diakses offline",
      "Bonus checklist desain",
      "Update gratis selamanya",
    ],
    modules: [
      "Bab 1: Mengenal Canva",
      "Bab 2: Dasar-Dasar Desain",
      "Bab 3: Bekerja dengan Template",
      "Bab 4: Tipografi yang Menarik",
      "Bab 5: Kombinasi Warna",
      "Bab 6: Desain untuk Social Media",
      "Bab 7: Tips Desain Profesional",
    ],
    suitable: ["Pembaca yang suka belajar mandiri", "Yang butuh referensi offline", "Pemula absolut", "Yang ingin belajar dengan pace sendiri"],
  },
  "template-canva": {
    title: "Template Canva Siap Pakai",
    tagline: "50+ template profesional yang siap diedit untuk berbagai kebutuhan",
    description: "Koleksi template Canva premium yang sudah dirancang profesional. Tinggal edit teks dan gambar, desainmu langsung jadi! Cocok untuk content creator dan bisnis online.",
    price: "Rp 99.000",
    originalPrice: "Rp 199.000",
    icon: Layout,
    features: [
      "50+ template premium",
      "Berbagai kategori (Instagram, Story, dll)",
      "Desain profesional & modern",
      "100% bisa diedit di Canva",
      "Panduan penggunaan",
      "Update template baru gratis",
    ],
    modules: [
      "Instagram Feed (15 template)",
      "Instagram Story (10 template)",
      "Facebook Post (10 template)",
      "YouTube Thumbnail (10 template)",
      "Poster & Flyer (5 template)",
    ],
    suitable: ["Content creator", "Pemilik bisnis online", "Social media manager", "Freelance designer pemula"],
  },
  "paket-bundling": {
    title: "Paket Bundling Lengkap",
    tagline: "Semua produk dalam satu paket dengan harga super hemat!",
    description: "Dapatkan akses ke SEMUA produk Rowsign: Kursus Video + Ebook Tutorial + Template Canva. Paket terlengkap untuk kamu yang serius ingin menguasai desain Canva!",
    price: "Rp 249.000",
    originalPrice: "Rp 647.000",
    icon: Package,
    highlight: true,
    features: [
      "Kursus Video (20+ video, nilai Rp 299k)",
      "Ebook Tutorial (100+ halaman, nilai Rp 149k)",
      "Template Canva (50+ template, nilai Rp 199k)",
      "BONUS: Template eksklusif bundling",
      "BONUS: Akses grup diskusi",
      "Hemat hingga 60%!",
      "Akses selamanya + update gratis",
    ],
    modules: [
      "Semua materi Kursus Video",
      "Semua isi Ebook Tutorial",
      "Semua Template Canva",
      "Bonus Template Eksklusif",
      "Akses Grup Diskusi",
    ],
    suitable: ["Yang ingin hasil maksimal", "Yang serius belajar desain", "Yang mau hemat dengan paket lengkap", "Content creator & bisnis online"],
  },
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Button asChild>
            <Link to="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = product.icon;
  const isBundle = productId === "paket-bundling";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto">
          {/* Back Button */}
          <Link
            to="/#produk"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Katalog
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Product Info */}
            <div className="space-y-6">
              {/* Icon & Badge */}
              <div className="flex items-start gap-4">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${isBundle ? "bg-primary" : "bg-primary/10"}`}>
                  <Icon className={`w-10 h-10 ${isBundle ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                {isBundle && (
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Best Value
                  </Badge>
                )}
              </div>

              {/* Title & Tagline */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
                <p className="text-lg text-muted-foreground">{product.tagline}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground">{product.description}</p>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className={`w-full sm:w-auto rounded-full px-10 text-lg font-semibold ${isBundle ? "animate-pulse-glow" : ""}`}
              >
                <a
                  href={`https://wa.me/6282154945903?text=Saya%20ingin%20membeli%20${encodeURIComponent(product.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beli Sekarang via WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            {/* Right - Features & Details */}
            <div className="space-y-8">
              {/* Features */}
              <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">Apa yang Kamu Dapatkan</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modules/Contents */}
              <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">Isi Materi</h2>
                <ul className="space-y-2">
                  {product.modules.map((module, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      {module}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitable For */}
              <div className="bg-card rounded-2xl border border-border/50 p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">Cocok Untuk</h2>
                <div className="flex flex-wrap gap-2">
                  {product.suitable.map((item, index) => (
                    <Badge key={index} variant="secondary" className="bg-accent text-accent-foreground">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;