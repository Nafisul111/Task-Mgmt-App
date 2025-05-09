/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "330px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl:"1280"
    },
    extend: {},
  },
  plugins: [],
};
