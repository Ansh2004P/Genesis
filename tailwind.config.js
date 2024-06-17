//** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cover-image": "url('./assets/images/cover.jpeg')",
        "logo": "url('./assets/images/logo.jpg')",
        "betaLabs": "url('./assets/images/betaLabs.png')"
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(10, 9, 13) transparent",

        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px"
          },
          "&::-webkit-scrollbar-track": {
            background: "rgb(10, 9, 13)"
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgb(10, 9, 13)",
            borderRadius: "20px",
            border: "none"
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
