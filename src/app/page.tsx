import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { getAllProducts, getFeaturedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Berkah Super Food — Herbal Alami Pilihan",
  description:
    "Temukan produk herbal alami Berkah Super Food: jamu tradisional, minuman herbal, dan suplemen rempah Nusantara untuk gaya hidup sehat Anda.",
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const allProducts = getAllProducts();

  return (
    <>
      <HeroSection />
      <FeaturedSection products={featuredProducts} />
      <AllProductsSection products={allProducts} />
      <WhyUsSection />
      <AboutSection />
      <CtaSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none text-earth-400 text-[200px] leading-none overflow-hidden flex flex-wrap gap-4 p-4">
        {["🌿", "🫚", "🧄", "🫛", "🌾", "🍯"].map((emoji, i) => (
          <span key={i}>{emoji}</span>
        ))}
      </div>
      <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border-2 border-earth-500/20 pointer-events-none" />
      <div className="absolute -right-28 -top-28 w-[400px] h-[400px] rounded-full border border-earth-500/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 bg-earth-500/20 text-earth-300 border border-earth-500/30 text-sm font-semibold px-4 py-1.5 rounded-full">
            🌿 100% Herbal Alami
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Khasiat Rempah{" "}
            <span className="text-earth-400">Nusantara</span>{" "}
            untuk Hidup Sehat
          </h1>
          <p className="text-lg text-brand-200 leading-relaxed">
            Berkah Super Food menghadirkan produk herbal alami pilihan –
            diproduksi dari bahan rempah segar berkualitas tinggi, tanpa
            pengawet buatan, untuk mendukung kesehatan keluarga Anda.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-earth-500 hover:bg-earth-400 text-brand-900 font-bold px-6 py-3 rounded-full transition-colors shadow-lg"
            >
              Lihat Semua Produk
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-full border border-white/30 transition-colors"
            >
              Pesan via WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
            {[
              { value: "6+", label: "Produk Herbal" },
              { value: "100%", label: "Bahan Alami" },
              { value: "0", label: "Pengawet Buatan" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-extrabold text-earth-400">
                  {value}
                </div>
                <div className="text-sm text-brand-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedSection({
  products,
}: {
  products: ReturnType<typeof getFeaturedProducts>;
}) {
  if (products.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-sm font-semibold text-earth-600 uppercase tracking-wide">
              Terpopuler
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              Produk Andalan Kami
            </h2>
          </div>
          <Link
            href="/#products"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors hidden sm:block"
          >
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AllProductsSection({
  products,
}: {
  products: ReturnType<typeof getAllProducts>;
}) {
  return (
    <section id="products" className="py-16 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Koleksi Lengkap
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            Semua Produk Berkah Super Food
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Pilihan herbal alami untuk berbagai kebutuhan kesehatan Anda dan
            keluarga.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const features = [
    {
      icon: "🌱",
      title: "Bahan Alami 100%",
      description:
        "Setiap produk dibuat dari bahan rempah segar pilihan tanpa bahan kimia sintetis.",
    },
    {
      icon: "🏭",
      title: "Produksi Higienis",
      description:
        "Fasilitas produksi kami memenuhi standar kebersihan dan keamanan pangan.",
    },
    {
      icon: "🚚",
      title: "Pengiriman Cepat",
      description:
        "Produk segar kami dikirim langsung ke rumah Anda dengan pengemasan yang aman.",
    },
    {
      icon: "💬",
      title: "Konsultasi Gratis",
      description:
        "Tim kami siap membantu Anda memilih produk yang tepat untuk kebutuhan kesehatan Anda.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Mengapa Berkah Super Food?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-50 border border-brand-100"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-16 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-sm font-semibold text-earth-600 uppercase tracking-wide">
              Tentang Kami
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Warisan Herbal Nusantara dengan Sentuhan Modern
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Berkah Super Food lahir dari kecintaan mendalam terhadap kekayaan
              herbal dan rempah Indonesia. Kami percaya bahwa alam Nusantara
              menyimpan khasiat luar biasa yang perlu dilestarikan dan
              dihadirkan dalam kemasan modern yang praktis.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Setiap produk kami dibuat dengan penghormatan terhadap resep
              tradisional, dikombinasikan dengan proses produksi yang higienis
              dan terkontrol untuk memastikan kualitas dan keamanan terbaik bagi
              konsumen.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: "🌿", label: "Rempah Nusantara" },
              { emoji: "🫚", label: "Ekstrak Premium" },
              { emoji: "🍯", label: "Madu Hutan" },
              { emoji: "🌾", label: "Proses Alami" },
            ].map(({ emoji, label }) => (
              <div
                key={label}
                className="aspect-square rounded-2xl bg-white border border-earth-200 flex flex-col items-center justify-center gap-3 shadow-sm"
              >
                <span className="text-5xl">{emoji}</span>
                <span className="text-sm font-semibold text-gray-700 text-center px-2">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-16 bg-brand-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Mulai Perjalanan Sehat Anda Bersama Kami
        </h2>
        <p className="text-brand-200 max-w-xl mx-auto">
          Pesan produk herbal Berkah Super Food sekarang dan rasakan manfaatnya
          untuk kesehatan Anda dan keluarga.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 bg-white hover:bg-brand-50 text-brand-800 font-semibold px-6 py-3 rounded-full transition-colors shadow"
          >
            Lihat Produk
          </Link>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-semibold px-6 py-3 rounded-full border border-brand-400 transition-colors"
          >
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
