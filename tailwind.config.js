/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: {
        25: "#f9fafb",
        50: "#f3f4f6",
        100: "#e5e7eb",
        200: "#d1d5db",
        300: "#9ca3af",
        400: "#6b7280",
        500: "#4b5563",
        600: "#374151",
        700: "#1f2937",
        800: "#111827",
        900: "#030712",
      },
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    fontSize: {
      sm: ["14px", { lineHeight: "20px" }],
      base: ["16px", { lineHeight: "24px" }],
      lg: ["18px", { lineHeight: "28px" }],
      xl: ["20px", { lineHeight: "30px" }],
      "display-sm": ["30px", { lineHeight: "36px", letterSpacing: "-2%" }],
      "display-md": ["36px", { lineHeight: "44px", letterSpacing: "-2%" }],
      "display-lg": ["48px", { lineHeight: "60px", letterSpacing: "-2%" }],
    },
    extend: {
      boxShadow: {
        img: "0 4px 36px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
