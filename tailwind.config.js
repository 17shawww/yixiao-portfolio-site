/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F1E7D9",
        paper: "#F8F1E6",
        cream: "#FBF6EC",
        beige: "#E9DDCC",
        ink: "#181511",
        charcoal: "#1E1B17",
        "warm-black": "#12100E",
        slate: "#675F56",
        taupe: "#8B7867",
        blush: "#CB8475",
        "blush-deep": "#9C5F55",
        teal: "#215B60",
        clay: "#B0623C",
        moss: "#66775D",
        line: "#D8CCBC",
      },
      boxShadow: {
        subtle: "0 12px 40px rgba(23, 21, 19, 0.055)",
        editorial: "0 22px 70px rgba(23, 21, 19, 0.09)",
      },
    },
  },
  plugins: [],
};
