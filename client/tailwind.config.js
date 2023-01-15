/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      birch: "#393823",
      spicyMix: " #905f49",
      softPeach: " #f8f1f1",
      mongoose: "#2296be",
      muddyWaters: "#b5935b",
      naturalGray: "#959493",
      akaroa: "#d1bca0",
      silver: "#c0bfb",
      tradewind: " #5baaa8",
    },

    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2296be",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
