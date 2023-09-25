/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        tomedium: "-.00625em",
      },
      colors: {
        "gray-darker": "#292929",
        "gray-dark": "#383838",
        "gray-medium": "#999",
        "gray-light": "#eeeeee",
        "gray-lighter": "#f2f2f2",
        black: "#000",
        white: "#fff",
        green: "#124734",
      },
      fontFamily: {
        header: ["Conquera", "sans-serif"],
        default: ["Poppins", "sans-serif"],
      },
      screens: {
        s: "750px",
      },
      margin: ["group-hover", "hover"],
      textColor: ["group-hover", "hover"],
    },
  },
  plugins: [],
};
