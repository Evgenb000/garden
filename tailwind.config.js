/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      cust__green: {
        dark: "#3F8642",
        DEFAULT: "#4CAF50",
      },
      cust__while: "#FFFFFF",
      cust__gray: "#8BC34A",
      cust__brown: "#795548",
      cust__yellow: "#FFEB3B",
      blue: {
        light: "#85d7ff",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
      },
    },
  },
  plugins: [],
};
