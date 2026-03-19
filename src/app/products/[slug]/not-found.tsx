import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center space-y-5">
      <div className="text-6xl">🌿</div>
      <h1 className="text-3xl font-extrabold text-gray-900">
        Produk Tidak Ditemukan
      </h1>
      <p className="text-gray-600 max-w-md">
        Maaf, produk yang Anda cari tidak tersedia atau mungkin telah dipindahkan.
      </p>
      <Link
        href="/#products"
        className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
      >
        Kembali ke Semua Produk
      </Link>
    </div>
  );
}
