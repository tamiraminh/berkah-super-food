export type ProductCategory =
  | "minuman-herbal"
  | "suplemen"
  | "rempah-segar"
  | "jamu"
  | "superfood";

export type ProductBenefit = {
  icon: string;
  label: string;
};

export type VitaminInfo = {
  name: string;
  benefit: string;
  source: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: ProductCategory;
  price: number;
  unit: string;
  weight: string;
  images: string[];
  imagePlaceholder: string;
  benefits: ProductBenefit[];
  vitamins?: VitaminInfo[];
  ingredients: string[];
  howToUse: string[];
  isAvailable: boolean;
  isFeatured: boolean;
  tags: string[];
};
