/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      sans: "Inter,sans-serif",
    },
    extend: {
      fontWeight: {
        400: "400",
        600: "600",
        700: "700",
      },
      colors: {
        neon: "hsl(75, 94%, 57%)",
        grey: "hsl(0, 0%, 20%)",
        darkgrey: "hsl(0, 0%, 12%)",
        offBlack: "hsl(0, 0%, 8%)",
      },
      screens: {
        sm: "375px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};