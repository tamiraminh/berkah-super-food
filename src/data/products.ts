import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "moringa-honey",
    name: "Moringa Honey",
    tagline: "Madu + Tepung Kelor Premium",
    description:
      "Perpaduan istimewa madu murni dengan tepung daun kelor (Moringa Honey), superfood herbal alami yang kaya nutrisi, vitamin, dan mineral untuk mendukung vitalitas tubuh secara menyeluruh.",
    longDescription:
      "Moringa Honey dari Berkah Super Food adalah inovasi superfood yang menggabungkan dua kekuatan alam terbaik: madu murni pilihan dan tepung daun kelor (Moringa oleifera). Daun kelor, yang dikenal sebagai 'The Miracle Tree', mengandung lebih dari 90 nutrisi esensial termasuk Vitamin A untuk kesehatan mata & kulit, Vitamin B untuk energi & fungsi otak, Vitamin C untuk meningkatkan imunitas, serta Vitamin E sebagai antioksidan pelindung sel. Dikombinasikan dengan madu alami yang kaya enzim dan antioksidan alami untuk mendukung imunitas tubuh, Moringa Honey hadir sebagai sumber nutrisi harian paling lengkap dari alam. Setiap jar diproduksi tanpa bahan pengawet, pewarna, atau perisa buatan.",
    category: "superfood",
    price: 95000,
    unit: "jar",
    weight: "125g",
    images: [
      "/products/moringa-honey-1.jpg",
      "/products/moringa-honey-2.jpg",
      "/products/moringa-honey-3.jpg",
    ],
    imagePlaceholder: "#2D5A27",
    benefits: [
      { icon: "🍯", label: "Madu Alami" },
      { icon: "🌿", label: "Nutrisi Kelor" },
      { icon: "🍅👀", label: "Vitamin A & E" },
      { icon: "💪🔋🧠", label: "Vitamin B & C" },
      { icon: "🛡️", label: "Meningkatkan Imunitas" },
      { icon: "✨", label: "Antioksidan Alami" },
    ],
    vitamins: [
      {
        name: "Vitamin A",
        benefit: "Mendukung kesehatan mata dan kulit",
        source: "Daun Kelor",
      },
      {
        name: "Vitamin B",
        benefit: "Membantu metabolisme energi dan fungsi otak",
        source: "Daun Kelor",
      },
      {
        name: "Vitamin C",
        benefit: "Meningkatkan daya tahan tubuh dan membantu penyerapan zat besi",
        source: "Daun Kelor",
      },
      {
        name: "Vitamin E",
        benefit: "Melindungi sel tubuh dari kerusakan (antioksidan)",
        source: "Daun Kelor",
      },
      {
        name: "Enzim & Antioksidan Alami",
        benefit: "Mendukung imunitas dan kesehatan tubuh secara menyeluruh",
        source: "Madu",
      },
    ],
    ingredients: [
      "Madu murni pilihan",
      "Tepung daun kelor (Moringa oleifera)",
    ],
    howToUse: [
      "Konsumsi 1–2 sendok makan per hari",
      "Dapat dimakan langsung atau dicampurkan ke dalam air hangat",
      "Dapat dicampur ke dalam yogurt, smoothie, atau oatmeal",
      "Terbaik dikonsumsi pagi hari sebelum sarapan",
      "Simpan di tempat sejuk, jauhkan dari paparan sinar matahari langsung",
    ],
    isAvailable: true,
    isFeatured: true,
    tags: ["moringa", "kelor", "madu", "superfood", "vitamin-a", "vitamin-b", "vitamin-c", "vitamin-e", "mineral", "imunitas", "antioksidan"],
  },
];
