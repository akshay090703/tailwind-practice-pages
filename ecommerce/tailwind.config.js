/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "shadow-color": "rgba(0, 0, 0, 0.05)",
        "on-hover-shadow": "rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
