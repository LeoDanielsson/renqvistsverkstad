/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Montserrat", "sans-serif"],
        body: ["Helvetica Neue", "sans-serif"],
      },
      colors: {
        gold: "#a8763e",
        linen: "#f7f3e3",
        white: "#d9ddde",
        copper: "#6f1a07",
        darkGreen: "#03191e",
        black: "#333",
      },
      backgroundImage: {
        "hero-image":
          "linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 1) 100%),url('/images/gryta.jpg')",
      },
    },
  },
  plugins: [],
};
