/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "shadow-color": "rgba(0, 0, 0, 0.05)",
        "on-hover-shadow": "rgba(0, 0, 0, 0.12)",
        "on-card-shadow": "rgba(0, 0, 0, 0.02)",
        "on-card-hover": "rgba(0,0,0,0.06)",
        "card-font": "rgba(41, 41, 41)",
        "lower-banner-txt": "rgba(248, 248, 248)",
        "footer-text": "rgb(109, 109, 109)",
      },
    },
  },
  plugins: [],
};
