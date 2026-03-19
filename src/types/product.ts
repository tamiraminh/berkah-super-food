export type ProductCategory =
  | "minuman-herbal"
  | "suplemen"
  | "rempah-segar"
  | "jamu";

export type ProductBenefit = {
  icon: string;
  label: string;
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
  imagePlaceholder: string;
  benefits: ProductBenefit[];
  ingredients: string[];
  howToUse: string[];
  isAvailable: boolean;
  isFeatured: boolean;
  tags: string[];
};
