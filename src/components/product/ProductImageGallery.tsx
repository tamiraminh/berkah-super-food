"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  name: string;
  imagePlaceholder: string;
  isFeatured: boolean;
};

export default function ProductImageGallery({
  images,
  name,
  imagePlaceholder,
  isFeatured,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = images.length > 0;

  return (
    <div className="space-y-3">
      <div
        className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-md"
        style={{ backgroundColor: hasImages ? undefined : imagePlaceholder + "18" }}
      >
        {hasImages ? (
          <Image
            src={images[activeIndex]}
            alt={`${name} foto ${activeIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-300"
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-8xl">
            🍯
          </div>
        )}
        {isFeatured && (
          <span className="absolute top-4 left-4 bg-earth-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow">
            Produk Unggulan
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-200 ${
                activeIndex === i
                  ? "ring-2 ring-earth-500 ring-offset-2 opacity-100"
                  : "opacity-60 hover:opacity-90"
              }`}
              aria-label={`Lihat foto ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 33vw, 17vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
