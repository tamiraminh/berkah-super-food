import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getProductBySlug,
  formatPrice,
  categoryLabels,
} from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produk Tidak Ditemukan" };
  }

  return {
    title: product.name,
    description: product.description,
    keywords: product.tags,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-brand-600 transition-colors">
          Beranda
        </Link>
        <span>/</span>
        <Link
          href="/#products"
          className="hover:text-brand-600 transition-colors"
        >
          Produk
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        <div className="space-y-4">
          <div
            className="relative w-full aspect-square rounded-3xl flex items-center justify-center"
            style={{ backgroundColor: product.imagePlaceholder + "20" }}
          >
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center text-7xl shadow-inner"
              style={{ backgroundColor: product.imagePlaceholder + "40" }}
            >
              🌿
            </div>
            {product.isFeatured && (
              <span className="absolute top-4 left-4 bg-earth-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Produk Andalan
              </span>
            )}
          </div>

          <p className="text-xs text-center text-gray-400 italic">
            Gambar produk akan segera hadir
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
              {categoryLabels[product.category]}
            </span>
            <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
              {product.name}
            </h1>
            <p className="text-gray-500 mt-1">{product.tagline}</p>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-earth-700">
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
                className="flex items-center gap-2 bg-brand-50 rounded-xl px-3 py-2 text-sm text-brand-800"
              >
                <span className="text-lg">{benefit.icon}</span>
                <span className="font-medium">{benefit.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            {product.isAvailable ? (
              <a
                href={`https://wa.me/6281234567890?text=Halo, saya ingin memesan ${encodeURIComponent(product.name)} (${product.weight})`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Pesan via WhatsApp
              </a>
            ) : (
              <button
                disabled
                className="flex-1 text-center bg-gray-200 text-gray-400 font-semibold px-6 py-3 rounded-full cursor-not-allowed"
              >
                Stok Habis
              </button>
            )}
            <Link
              href="/#products"
              className="flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 font-semibold px-5 py-3 rounded-full border border-gray-200 transition-colors"
            >
              Kembali
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DetailCard title="📖 Deskripsi Lengkap">
          <p className="text-gray-600 text-sm leading-relaxed">
            {product.longDescription}
          </p>
        </DetailCard>

        <DetailCard title="🧪 Bahan-bahan">
          <ul className="space-y-2">
            {product.ingredients.map((ingredient) => (
              <li
                key={ingredient}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                {ingredient}
              </li>
            ))}
          </ul>
        </DetailCard>

        <DetailCard title="📋 Cara Penggunaan">
          <ol className="space-y-2">
            {product.howToUse.map((step, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </DetailCard>
      </div>
    </div>
  );
}

function DetailCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
      <h2 className="font-bold text-gray-900">{title}</h2>
      {children}
    </div>
  );
}
