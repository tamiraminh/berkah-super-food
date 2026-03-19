import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Berkah Super Food — Herbal Alami Pilihan",
    template: "%s | Berkah Super Food",
  },
  description:
    "Berkah Super Food menghadirkan produk herbal alami berkualitas tinggi — jamu, minuman herbal, dan suplemen berbahan rempah Nusantara.",
  keywords: [
    "herbal",
    "jamu",
    "temulawak",
    "jahe merah",
    "kunyit asem",
    "minuman herbal",
    "suplemen alami",
    "Berkah Super Food",
  ],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Berkah Super Food",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
