import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import { formatPrice, categoryLabels } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <div
        className="relative h-48 w-full overflow-hidden"
        style={{ backgroundColor: product.imagePlaceholder + "20" }}
        aria-label={`Foto produk ${product.name}`}
      >
        {product.images?.[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-inner"
              style={{ backgroundColor: product.imagePlaceholder + "40" }}
            >
              🌿
            </div>
          </div>
        )}
        {product.isFeatured && (
          <span className="absolute top-3 left-3 bg-earth-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            Andalan
          </span>
        )}
        {!product.isAvailable && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            <span className="text-gray-500 font-semibold text-sm">
              Stok Habis
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 gap-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-xs font-medium text-brand-600 uppercase tracking-wide">
              {categoryLabels[product.category]}
            </span>
            <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-brand-700 transition-colors mt-0.5">
              {product.name}
            </h3>
          </div>
          <span className="text-xs text-gray-400 shrink-0">{product.weight}</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed flex-1">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1 mt-1">
          {product.benefits.slice(0, 2).map((benefit) => (
            <span
              key={benefit.label}
              className="inline-flex items-center gap-1 text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full"
            >
              {benefit.icon} {benefit.label}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 mt-auto border-t border-gray-100">
          <span className="font-bold text-earth-700 text-base">
            {formatPrice(product.price)}
            <span className="text-xs font-normal text-gray-400">
              /{product.unit}
            </span>
          </span>
          <span className="text-xs font-semibold text-brand-600 group-hover:underline">
            Lihat Detail →
          </span>
        </div>
      </div>
    </Link>
  );
}
