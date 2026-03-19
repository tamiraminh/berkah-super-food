import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/product/ProductCard";
import { getAvailableProducts, formatPrice, categoryLabels } from "@/lib/products";
import type { Product } from "@/types/product";

export const metadata: Metadata = {
  title: "Berkah Super Food — Moringa Honey Superfood Herbal Alami",
  description:
    "Berkah Super Food menghadirkan Moringa Honey — perpaduan madu murni dengan tepung daun kelor premium, superfood herbal alami yang kaya nutrisi untuk kesehatan optimal.",
};

export default function HomePage() {
  const products = getAvailableProducts();
  const isSingleProduct = products.length === 1;
  const featuredProduct = products.find((p) => p.isFeatured) ?? products[0];

  return (
    <>
      <HeroSection />
      {isSingleProduct && featuredProduct ? (
        <ProductSpotlightSection product={featuredProduct} />
      ) : (
        <AllProductsSection products={products} />
      )}
      {featuredProduct && <BenefitsSection product={featuredProduct} />}
      {isSingleProduct && featuredProduct && (
        <HowToUseSection howToUse={featuredProduct.howToUse} />
      )}
      <WhyUsSection />
      <AboutSection />
      <CtaSection product={featuredProduct} />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border-2 border-earth-500/20 pointer-events-none" />
      <div className="absolute -right-28 -top-28 w-[400px] h-[400px] rounded-full border border-earth-500/10 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full border border-earth-500/10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 bg-earth-500/20 text-earth-300 border border-earth-500/30 text-sm font-semibold px-4 py-1.5 rounded-full">
            🌿 Superfood Herbal Alami
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Kebaikan Alam dalam{" "}
            <span className="text-earth-400">Satu Jar</span>
          </h1>
          <p className="text-lg text-brand-200 leading-relaxed">
            Berkah Super Food menghadirkan Moringa Honey. Perpaduan madu murni
            pilihan dengan tepung daun kelor premium. Superfood herbal alami
            untuk mendukung kesehatan dan vitalitas Anda setiap hari.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-earth-500 hover:bg-earth-400 text-brand-900 font-bold px-6 py-3 rounded-full transition-colors shadow-lg"
            >
              Lihat Produk
            </a>
            <a
              href={`https://wa.me/6281122848999?text=${encodeURIComponent("Halo kak! Saya mau pesan Moringa Honey. Boleh dibantu? ^ ^")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-full border border-white/30 transition-colors"
            >
              Pesan Sekarang
            </a>
          </div>

          <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
            {[
              { value: "100%", label: "Bahan Alami" },
              { value: "0", label: "Pengawet Buatan" },
              { value: "2", label: "Bahan Unggulan" },
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

function ProductSpotlightSection({ product }: { product: Product }) {
  const [mainImage, ...thumbnails] = product.images ?? [];

  return (
    <section id="products" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-3">
            <div
              className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-md"
              style={{ backgroundColor: product.imagePlaceholder + "18" }}
            >
              {mainImage ? (
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  🍯
                </div>
              )}
              <span className="absolute top-4 left-4 bg-earth-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow">
                Produk Unggulan
              </span>
            </div>
            {thumbnails.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {thumbnails.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-xl overflow-hidden shadow-sm"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} foto ${i + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 33vw, 17vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
                {categoryLabels[product.category]}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
                {product.name}
              </h2>
              <p className="text-earth-600 font-semibold mt-1 text-lg">
                {product.tagline}
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-brand-800">
                {formatPrice(product.price)}
              </span>
              <span className="text-gray-400 text-sm">
                / {product.unit} ({product.weight})
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            <div className="grid grid-cols-2 gap-2">
              {product.benefits.map((benefit) => (
                <div
                  key={benefit.label}
                  className="flex items-center gap-2 bg-brand-50 border border-brand-100 rounded-xl px-3 py-2.5"
                >
                  <span className="text-xl">{benefit.icon}</span>
                  <span className="font-semibold text-brand-900 text-sm">
                    {benefit.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {product.isAvailable ? (
                <a
                  href={`https://wa.me/6281122848999?text=${encodeURIComponent("Halo kak! Saya mau pesan Moringa Honey. Boleh dibantu? ^ ^")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-earth-500 hover:bg-earth-400 text-brand-900 font-bold px-6 py-3.5 rounded-full transition-colors shadow-md"
                >
                  🛒 Pesan via WhatsApp
                </a>
              ) : (
                <button
                  disabled
                  className="flex-1 text-center bg-gray-200 text-gray-400 font-bold px-6 py-3.5 rounded-full cursor-not-allowed"
                >
                  Stok Habis
                </button>
              )}
              <Link
                href={`/products/${product.slug}`}
                className="flex-1 text-center bg-white hover:bg-brand-50 text-brand-800 font-semibold px-6 py-3.5 rounded-full border-2 border-brand-200 transition-colors"
              >
                Detail Produk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AllProductsSection({ products }: { products: Product[] }) {
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

function BenefitsSection({ product }: { product: Product }) {
  return (
    <section className="py-16 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Manfaat Utama
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
            Khasiat {product.name}
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Diformulasikan dari bahan-bahan alami terbaik untuk kesehatan
            optimal Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {product.benefits.map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-brand-100 shadow-sm"
            >
              <div className="text-5xl mb-3">{icon}</div>
              <h3 className="font-bold text-brand-900 text-base">{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToUseSection({ howToUse }: { howToUse: string[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-semibold text-earth-600 uppercase tracking-wide">
          Petunjuk Pemakaian
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 mb-10">
          Cara Konsumsi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {howToUse.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-brand-50 rounded-2xl p-5 border border-brand-100"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-earth-500 text-brand-900 font-bold text-sm flex items-center justify-center">
                {index + 1}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed pt-0.5">
                {step}
              </p>
            </div>
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
        "Setiap produk dibuat dari bahan pilihan tanpa bahan kimia sintetis, pengawet, atau pewarna buatan.",
    },
    {
      icon: "🏭",
      title: "Produksi Higienis",
      description:
        "Fasilitas produksi kami memenuhi standar kebersihan dan keamanan pangan yang ketat.",
    },
    {
      icon: "🚚",
      title: "Pengiriman Cepat",
      description:
        "Produk kami dikirim langsung ke rumah Anda dengan pengemasan yang aman dan terpercaya.",
    },
  ];

  return (
    <section className="py-16 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Mengapa Berkah Super Food?
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-brand-100 shadow-sm w-full sm:w-64 lg:w-72 flex-shrink-0"
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
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-sm font-semibold text-earth-600 uppercase tracking-wide">
              Tentang Kami
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Dua Kekuatan Alam dalam Satu Produk
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Berkah Super Food lahir dari keyakinan bahwa alam menyediakan
              segalanya, kita hanya perlu menggabungkannya dengan bijak.
              Moringa Honey adalah wujud nyata dari keyakinan itu: madu murni
              yang telah dikenal ribuan tahun manfaatnya, dipadukan dengan daun
              kelor (Moringa oleifera) yang dijuluki{" "}
              <em>&ldquo;The Miracle Tree&rdquo;</em>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Setiap jar Moringa Honey diproduksi dengan penuh kehati-hatian.
              Tanpa pengawet buatan, tanpa pewarna sintetis, untuk memastikan
              Anda mendapatkan kebaikan alam yang sesungguhnya.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={`https://wa.me/6281122848999?text=${encodeURIComponent("Halo kak! Saya mau pesan Moringa Honey. Boleh dibantu? ^ ^")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: "🌿", label: "Daun Kelor Pilihan" },
              { emoji: "🍯", label: "Madu Murni Alami" },
              { emoji: "✨", label: "Tanpa Pengawet" },
              { emoji: "💪", label: "Nutrisi Lengkap" },
            ].map(({ emoji, label }) => (
              <div
                key={label}
                className="aspect-square rounded-2xl bg-brand-50 border border-brand-100 flex flex-col items-center justify-center gap-3 shadow-sm"
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

function CtaSection({ product }: { product: Product | undefined }) {
  const waMessage = product
    ? encodeURIComponent(`Halo kak! Saya mau pesan ${product.name}. Boleh dibantu proses pemesanannya? 😊`)
    : encodeURIComponent("Halo kak! Saya mau pesan Moringa Honey Berkah Super Food. Boleh dibantu? 😊");

  return (
    <section className="py-16 bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Siap Merasakan Manfaatnya?
        </h2>
        <p className="text-brand-200 max-w-xl mx-auto">
          Pesan Moringa Honey sekarang dan mulai perjalanan hidup sehat Anda
          bersama Berkah Super Food.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/6281122848999?text=${encodeURIComponent("Halo kak! Saya mau pesan Moringa Honey. Boleh dibantu? ^ ^")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-earth-500 hover:bg-earth-400 text-brand-900 font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg"
          >
            🛒 Pesan via WhatsApp
          </a>
          {product && (
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-full border border-white/30 transition-colors"
            >
              Lihat Detail Produk
            </Link>
          )}
        </div>
        {product && (
          <p className="text-earth-400 text-sm font-semibold pt-2">
            {formatPrice(product.price)} / {product.unit} • {product.weight}
          </p>
        )}
      </div>
    </section>
  );
}

