/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        45: '45%',
        24: '24%',
      },
      colors: {
        'body-200': '#EDEDED',
        'body-400': '#7A7A7A',
        'body-500': 'rgb(36, 36, 36)',
        'body-900': '#050315',
        'chinese-blue-100': '#23205b',
        'chinese-blue-200': '#1b1948',
        'chinese-blue-300': '#141335',
        'chinese-blue-400': '#0d0c22',
        'blueberry-600': '#4D1CED',
        'blueberry-700': '#360FB8',
      },
      keyframes: {
        marquee_ms: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-300%)' },
        },
        marquee_md: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-160%)' },
        },
      },
      animation: {
        marquee_ms: 'marquee_ms 20s linear infinite',
        marquee_md: 'marquee_md 20s linear infinite',
      },
    },
    fontFamily: {},
  },
  safelist: [
    {
      pattern: /(bg)-(body-200)/,
    },
    {
      pattern: /(border)-(body-400)/,
    },
    {
      pattern: /(text|bg)-(body-500)/,
    },
    {
      pattern: /(text)-(body-900)/,
    },
    {
      pattern: /(bg)-(chinese-blue-100|chinese-blue-300|chinese-blue-400)/,
    },
    {
      pattern: /(bg|text|border|stroke)-(blueberry-600|blueberry-700|blueberry-700)/,
    },
  ],
  plugins: [],
};
