/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "540px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
      },
      backgroundImage: {},
      colors: {
        "background-white": "#F5F5F7",
        "background-black": "#121212",
        "black-shade": {
          100: "#575757",
          200: "#3F3F3F",
          300: "#282828",
          400: "#121212",
        },
        "white-shade": {
          100: "#ffffff",
          200: "#EEEEEE",
          300: "#C0C5C9",
        },
      },
    },
  },
  plugins: [],
};
