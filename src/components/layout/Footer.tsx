import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-lg">Berkah</span>
                <span className="font-semibold text-brand-300 text-xs tracking-widest uppercase">
                  Super Food
                </span>
              </div>
            </div>
            <p className="text-brand-200 text-sm leading-relaxed">
              Produk herbal alami berkualitas tinggi untuk mendukung gaya hidup
              sehat Anda. Diproduksi dengan standar kebersihan dan keamanan
              pangan.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-white">Navigasi</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Beranda" },
                { href: "/#products", label: "Produk" },
                { href: "/#about", label: "Tentang Kami" },
                { href: "/#contact", label: "Kontak" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-brand-300 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3" id="contact">
            <h3 className="font-semibold text-white">Hubungi Kami</h3>
            <ul className="space-y-2 text-sm text-brand-300">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Jl. Raya Herbal No. 1, Jawa Tengah, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:info@berkahsuperfood.com"
                  className="hover:text-white transition-colors"
                >
                  info@berkahsuperfood.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-400">
          <p>&copy; {currentYear} Berkah Super Food. Hak cipta dilindungi.</p>
          <p>Produk herbal alami · Tanpa pengawet buatan</p>
        </div>
      </div>
    </footer>
  );
}
