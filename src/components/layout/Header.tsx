"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden ring-2 ring-brand-200 group-hover:ring-earth-400 transition-all">
              <Image
                src="/logo.svg"
                alt="Berkah Super Food"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-brand-900 text-lg tracking-tight group-hover:text-brand-700 transition-colors">
                BERKAH
              </span>
              <span className="font-semibold text-earth-600 text-xs tracking-widest uppercase">
                Super Food
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-brand-700 transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/#products"
              className="text-sm font-medium text-gray-600 hover:text-brand-700 transition-colors"
            >
              Produk
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-gray-600 hover:text-brand-700 transition-colors"
            >
              Tentang Kami
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-gray-600 hover:text-brand-700 transition-colors"
            >
              Kontak
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/6281122848999?text=${encodeURIComponent("Halo kak! Saya mau pesan Moringa Honey. Boleh dibantu? ^ ^")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-earth-500 hover:bg-earth-400 text-brand-900 text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
            >
              <span>Pesan Sekarang</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-brand-100 bg-white px-4 py-3 space-y-1">
          {[
            { href: "/", label: "Beranda" },
            { href: "/#products", label: "Produk" },
            { href: "/#about", label: "Tentang Kami" },
            { href: "/#contact", label: "Kontak" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-700 hover:bg-brand-50 transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href={`https://wa.me/6281122848999?text=${encodeURIComponent("Halo kak! Saya mau pesan Moringa Honey. Boleh dibantu? ^ ^")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-earth-500 hover:bg-earth-400 text-brand-900 text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
