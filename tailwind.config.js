/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        textPrimary: "#3A3A49",
        textSecondary: "#5D5D75",
        blueYonder: "#758EB3",
        blueLight: "#90bbfa",
        blueSecondary: "#447EF7",
        blueMain: "#4B66EA",
        blueDark: "#222161",
        navyBlue: "#141c42",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
