/** @type {import('tailwindcss').Config} */
const { DEFAULT } = require("@tailwindcss/typography");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "warm-grey": "#E1E3E3",
        "vivid-blue": "#27A6EE",
        "dark-grey": "#2D4857",
        "light-dark-grey": "#7695A7",
        "lighter-grey": "#91B5CA",
      },
      letterSpacing: {
        "extra-wide": "0.20rem",
      },
    },
    fontFamily: {
      sans: ["neue-haas-grotesk-text", "sans-serif"],
      display: ["neue-haas-grotesk-display", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
