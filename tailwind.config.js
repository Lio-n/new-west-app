/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        45: "45%",
        24: "24%",
      },
      colors: {
        "body-200": "#EDEDED",
        "body-400": "#7A7A7A",
        "body-500": "#222",
        "body-900": "#050315",
        "chinese-blue": "#0D0C22",
        "blueberry-600": "#4D1CED",
        "blueberry-700": "#360FB8",
        "blueberry-800": "#240A7B",
      },
      keyframes: {
        marquee_ms: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-300%)" },
        },
        marquee_md: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-160%)" },
        },
        marquee_lg: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee_ms: "marquee_ms 20s linear infinite",
        marquee_md: "marquee_md 20s linear infinite",
        marquee_lg: "marquee_lg 10s linear infinite",
      },
    },
    fontFamily: {},
  },
  safelist: [
    {
      pattern: /(bg|text|border|fill|stroke)-(body-400|body-500|body-900|chinese-blue|blueberry-600|blueberry-700|blueberry-800)/,
    },
  ],
  plugins: [],
};
