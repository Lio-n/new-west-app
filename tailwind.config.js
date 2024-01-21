/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "body-400": "#7A7A7A",
        "body-500": "#222",
        "body-900": "#050315",
        "chinese-blue": "#0D0C22",
        "blueberry-600": "#4D1CED",
        "blueberry-700": "#360FB8",
        "blueberry-800": "#240A7B",
      },
    },
    fontFamily: {},
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(body-400|body-500|body-900|chinese-blue|blueberry-600|blueberry-700|blueberry-800)/,
    },
  ],
  plugins: [],
};
