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
        // Copper / ember accent — arca, the ark: bronze fittings on old wood.
        brand: {
          50:  "#FBF3EC",
          100: "#F7E3D2",
          200: "#EFC6A6",
          300: "#E3A171",
          400: "#D57C42",
          500: "#C05E22",
          600: "#A04A17",
          700: "#7F3A13",
          800: "#663012",
          900: "#532811",
        },
        // Warm near-black surfaces for the dark CTA / footer.
        vault: {
          DEFAULT: "#1B1610",
          900: "#14100B",
          800: "#1B1610",
          700: "#262019",
          card: "#211B14",
        },
        // Warm ink + paper neutrals.
        ink: {
          DEFAULT: "#211D16",
          soft: "#443E33",
          mute: "#6E6759",
          faint: "#958D7D",
          line: "#E7E1D4",
          wash: "#F2EDE2",
          paper: "#FAF7F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
