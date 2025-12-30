import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah saya harus punya pengalaman desain sebelumnya?",
    answer: "Tidak perlu sama sekali! Semua materi kami dirancang untuk pemula yang belum pernah menggunakan Canva sebelumnya. Kami mulai dari dasar-dasar hingga teknik yang lebih advanced.",
  },
  {
    question: "Bagaimana cara akses kursus setelah pembelian?",
    answer: "Setelah pembayaran dikonfirmasi, kamu akan mendapat link akses ke platform kursus kami via WhatsApp dan email. Tinggal klik dan mulai belajar!",
  },
  {
    question: "Apakah template bisa diedit sesuai kebutuhan saya?",
    answer: "Tentu! Semua template yang kami sediakan 100% bisa kamu edit dan sesuaikan dengan brand atau kebutuhanmu. Template tersedia dalam format Canva yang mudah diedit.",
  },
  {
    question: "Berapa lama akses ke kursus dan materi?",
    answer: "Akses selamanya! Sekali beli, kamu bisa akses semua materi kapan saja tanpa batas waktu. Termasuk update materi di masa depan.",
  },
  {
    question: "Bagaimana jika saya kesulitan mengikuti materi?",
    answer: "Tenang, kami siap membantu! Kamu bisa langsung chat kami via WhatsApp jika ada kendala atau pertanyaan. Tim kami akan dengan senang hati membantu.",
  },
  {
    question: "Apakah ada garansi uang kembali?",
    answer: "Ya! Kami memberikan garansi 7 hari uang kembali jika kamu merasa materi tidak sesuai ekspektasi. Tidak ada risiko untukmu!",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima transfer bank (BCA, BNI, BRI, Mandiri), e-wallet (GoPay, OVO, Dana), dan QRIS. Semua proses pembayaran melalui WhatsApp untuk kemudahan.",
  },
  {
    question: "Apa perbedaan paket bundling dengan beli satuan?",
    answer: "Paket bundling memberikan akses ke SEMUA produk (Kursus + Ebook + Template) dengan harga yang jauh lebih hemat hingga 60%. Sangat direkomendasikan untuk hasil belajar maksimal!",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pertanyaan yang Sering{" "}
            <span className="gradient-text">Ditanyakan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Belum yakin? Cek dulu jawaban dari pertanyaan yang sering diajukan oleh calon peserta.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;