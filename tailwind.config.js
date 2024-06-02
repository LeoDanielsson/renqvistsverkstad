/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        'gold': '#a8763e',
        'linen': '#f7f3e3',
        'white': '#d9ddde',
        'copper': '#6f1a07',
        'darkGreen': '#03191e',
        'black': '#333',
      },
    },
  },
  plugins: [],
}

