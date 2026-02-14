export default {
  content: [
    "./index.html",
    "./assets/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};