/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Sedan SC", " serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
