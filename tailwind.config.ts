import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#86745f",
          light: "#a89482",
          dark: "#6b5d4c",
        },
        secondary: {
          DEFAULT: "#f8c7c0",
          light: "#fce0dc",
          dark: "#f5a89f",
        },
        accent: {
          DEFAULT: "#cac8ac",
          light: "#e0dec8",
          dark: "#b3b193",
        },
        neutral: {
          DEFAULT: "#fff9f3",
          dark: "#000000",
        },
        // Theme-specific colors
        "theme-primary": "var(--primary)",
        "theme-secondary": "var(--secondary)",
        "theme-accent": "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-assistant)", "system-ui", "sans-serif"],
        heading: ["var(--font-rubik)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
