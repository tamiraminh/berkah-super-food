import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0f9f3",
          100: "#d9f0e3",
          200: "#b2e1c7",
          300: "#7ccaa7",
          400: "#46ad84",
          500: "#249167",
          600: "#187552",
          700: "#145f42",
          800: "#104c35",
          900: "#0d3d2b",
        },
        earth: {
          50:  "#fdf8e9",
          100: "#faf0ca",
          200: "#f5e094",
          300: "#edcc56",
          400: "#e4b82a",
          500: "#c9a020",
          600: "#a6801a",
          700: "#876515",
          800: "#6d5011",
          900: "#5a420e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
