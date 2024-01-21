import { FC, HTMLAttributes } from "react";
import Typography from "../../../interfaces/typography.interface";

interface TitleProps extends Omit<HTMLAttributes<HTMLParagraphElement>, "color">, Partial<Typography> {}

const Title: FC<TitleProps> = ({ weight = "normal", color = "body-500", className = "", ...props }) => (
  <h1 className={`text-5xl sm:text-4xl text-${color} font-${weight} ${className} smooth-transition`} {...props} />
);

export default Title;
