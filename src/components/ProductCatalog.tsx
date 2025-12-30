import { Video, BookOpen, Layout, Package } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "kursus-video",
    title: "Kursus Video Canva",
    description: "Belajar desain Canva dari nol dengan video tutorial step-by-step yang mudah diikuti pemula.",
    price: "Rp 149.000",
    originalPrice: "Rp 299.000",
    icon: Video,
    badge: "Pemula Friendly",
  },
  {
    id: "ebook-tutorial",
    title: "Ebook Tutorial Canva",
    description: "Panduan lengkap dalam bentuk PDF yang bisa kamu baca kapan saja dan di mana saja.",
    price: "Rp 79.000",
    originalPrice: "Rp 149.000",
    icon: BookOpen,
    badge: "Pemula Friendly",
  },
  {
    id: "template-canva",
    title: "Template Canva Siap Pakai",
    description: "50+ template desain profesional yang siap kamu edit dan gunakan untuk berbagai kebutuhan.",
    price: "Rp 99.000",
    originalPrice: "Rp 199.000",
    icon: Layout,
    badge: "Pemula Friendly",
  },
  {
    id: "paket-bundling",
    title: "Paket Bundling Lengkap",
    description: "Dapatkan semua produk (Kursus + Ebook + Template) dengan harga spesial yang sangat hemat!",
    price: "Rp 249.000",
    originalPrice: "Rp 647.000",
    icon: Package,
    badge: "Hemat 60%",
    highlight: true,
  },
];

const ProductCatalog = () => {
  return (
    <section id="produk" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Produk Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pilih Produk yang Cocok{" "}
            <span className="gradient-text">Untukmu</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Semua produk dirancang khusus untuk pemula yang ingin menguasai desain Canva dengan cepat dan praktis.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;