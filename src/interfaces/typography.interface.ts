type TextWeight = {
  'font-thin': string; // 100
  'font-normal': string; // 400
  'font-semibold': string; // 600
  'font-bold': string; // 700
};

type TextColor = {
  white: string;
  'body-400': string;
  'body-500': string;
  'body-900': string;
  'chinese-blue-400': string;
  'blueberry-600': string;
  'blueberry-700': string;
  'blueberry-800': string;
};

interface Typography {
  weight: keyof TextWeight;
  color: keyof TextColor;
}

export default Typography;
