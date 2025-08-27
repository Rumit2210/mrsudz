// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Baloo 2"', "system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
        cartoon: ['"Lilita One"', "cursive"],
        jumbo: ['"Jumbo Sale Trial"', "sans-serif"], // 👈 new
      },
    },
  },
  plugins: [],
}
