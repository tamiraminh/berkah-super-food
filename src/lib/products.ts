import { products } from "@/data/products";
import type { Product, ProductCategory } from "@/types/product";

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured && p.isAvailable);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category && p.isAvailable);
}

export function getAvailableProducts(): Product[] {
  return products.filter((p) => p.isAvailable);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export const categoryLabels: Record<ProductCategory, string> = {
  "minuman-herbal": "Minuman Herbal",
  suplemen: "Suplemen",
  "rempah-segar": "Rempah Segar",
  jamu: "Jamu",
};
