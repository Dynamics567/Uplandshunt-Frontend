module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  purge: [
    "./**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
    // Add more here
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#B3404A",
        lightAsh: "#8A8886",
        lightBlack: "#1f1f1f",
        lightgreen: "#14A198",
        ash: "#6C6C6C",
        ashTwo: "#b5b5b5",
        ashThree: "#c4c4c4",
        maroon: "#701f2e",
        purple: "#213037",
        whiteAsh: "rgba(237,242,247,0.2)",
        gray: "#effof6",
        metal: "#213037",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
