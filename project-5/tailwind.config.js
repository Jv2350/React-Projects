/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gray: "#5a5959",
      yellow: "#ffeaae",
      "dark-yellow": "#fcca3f",
      orange: "#f6820c",
    },
  },
  plugins: [],
};
