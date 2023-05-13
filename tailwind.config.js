/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  // generate a theme for all h1, h2, h3, p, a, etc.
  theme: {
    extend: {
      colors: {
        // correct
        "brand-primary": "rgb(20,44,74)",
        "brand-font-color": "#2d3748",
        "brand-secondary": "rgb(52, 83, 153)",
        // incorrect
        "brand-reuse": "rgb(154,196,84)",
        "brand-recycle": "rgb(219, 224, 74)",
        "brand-recovery": "rgb(246, 215, 65)",
        "brand-residuals": "rgb(223, 112,51)",
        "brand-accent": "rgb(55, 113, 82)",
        "brand-dark": "#0F2202",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
