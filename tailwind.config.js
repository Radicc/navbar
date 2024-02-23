/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        midnight: "#293040",
        grayStyle: "#F2F2F4",
        pureWhite: "#FFFFFF",
        offWhite: "#809CBF",
        dividerGray: "#D0D4DD",
        shadow: "rgba(100, 121, 140, 0.1)",
      },
      animation: {
        "slide-in": "slide-in 0.5s forwards",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
    fontFamily: {
      Mukta: ["Mukta", "sans-serif"],
    },
  },
  plugins: [],
}
