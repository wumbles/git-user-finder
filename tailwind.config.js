/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          button: {
            color: "white",
            "border-color": "white",
          },
          "h1, h2, p, a": {
            color: "white",
          },
        },
      },
    ],
  },
};
