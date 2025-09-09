// tailwind.config.ts
import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/uploadthing/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // allow aesthetic dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#A78BFA", // soft lavender (aesthetic primary)
          light: "#C4B5FD",
          dark: "#7C3AED",
        },
        secondary: {
          DEFAULT: "#FBCFE8", // blush pink
          light: "#FDE2F5",
          dark: "#DB2777",
        },
        accent: {
          DEFAULT: "#FDE68A", // pastel yellow
          light: "#FEF3C7",
          dark: "#CA8A04",
        },
        neutral: {
          DEFAULT: "#F3F4F6", // soft gray
          light: "#FFFFFF",
          dark: "#D1D5DB",
        },
        background: {
          DEFAULT: "#FFFDF9", // warm cream white
          dark: "#1E1E24",   // aesthetic deep gray for dark mode
        },
        foreground: {
          DEFAULT: "#374151", // soft dark gray
          muted: "#6B7280",
        },
        success: "#86EFAC", // mint green
        warning: "#FCD34D", // pastel amber
        error: "#FCA5A5",   // pastel red
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        aesthetic: ["Poppins", "sans-serif"], // clean & soft look
      },
    },
  },
  plugins: [],
};

export default withUt(config);
