type TextWeight = {
  thin: string; // 100
  normal: string; // 400
  semibold: string; // 600
  bold: string; // 700
};

type TextColor = {
  "body-400": string;
  "body-500": string;
  "body-900": string;
  "chinese-blue": string;
  "blueberry-600": string;
  "blueberry-700": string;
  "blueberry-800": string;
};

interface Typography {
  weight: keyof TextWeight;
  color: keyof TextColor;
}

export default Typography;
