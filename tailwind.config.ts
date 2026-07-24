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
        // Blue accent — technical, confident, calm.
        brand: {
          50:  "#EEF4FF",
          100: "#D9E6FF",
          200: "#BBD1FF",
          300: "#8EB3FD",
          400: "#5E8CF9",
          500: "#3B6AF0",
          600: "#254FDD",
          700: "#1D3EBE",
          800: "#1D379A",
          900: "#1D3379",
        },
        // Cool near-black ink + neutrals.
        ink: {
          DEFAULT: "#0f1420",
          soft: "#2b3242",
          mute: "#5c6474",
          faint: "#8b93a3",
          line: "#e5e8ef",
          wash: "#f4f6fa",
          paper: "#f9fafc",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-dots":
          "radial-gradient(circle, rgba(23,19,16,0.09) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-dots": "22px 22px",
      },
    },
  },
  plugins: [],
};

export default config;
