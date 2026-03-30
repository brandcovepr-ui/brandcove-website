import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EFE6",
        maroon: "#5C1A28",
        "steel-blue": "#8AACBE",
        rose: "#C25469",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        editorial: ["var(--font-editorial)", "serif"],
        script: ["var(--font-dancing)", "cursive"],
        sans: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        "scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "scroll-up-slow": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        "scroll-up": "scroll-up 18s linear infinite",
        "scroll-up-slow": "scroll-up-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
