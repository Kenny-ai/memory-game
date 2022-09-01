/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "#152938",
        "white-text": "#fcfcfc",
        "button-inactive": "#dfe7ec",
        orange: "#fda214",
        "orange-hover": "#ffb84a",
        "gray-hover": "#6395b8",
        "dark-blue": "#304859",
        "gray-button": "#bcced9",
      },
      textColor: {
        "white-text": "#fcfcfc",
        "black-text": "#31495a",
        orange: "#fda214",
        "gray-text": "#7e9cae",
      },
    },
  },
  plugins: [],
};
// #7493a7
