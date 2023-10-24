/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        blue: "#1389CD",
        blueO: "#1389cd00",
        white: "#FFFFFF",
        black: "#000000",
        yellow: "#F8BD00",
        green: "#00FF2A",
        red: "#FF0000",
      },
    },
    extend: {},
  },
  plugins: [],
};
