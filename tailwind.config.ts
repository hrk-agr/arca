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
          50:  "#EEF4FB",
          100: "#D9E8F5",
          200: "#B4D1EB",
          300: "#8FBAE1",
          400: "#6BA3D8",
          500: "#5A8EC4",
          600: "#4A79B0",
          700: "#3A609A",
          800: "#2D4B7A",
          900: "#1E3358",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
