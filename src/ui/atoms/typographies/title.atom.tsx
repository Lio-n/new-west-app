import { FC, HTMLAttributes } from "react";
import Typography from "../../../interfaces/typography.interface";

interface TitleProps extends Omit<HTMLAttributes<HTMLParagraphElement>, "color">, Partial<Typography> {}

const Title: FC<TitleProps> = ({ weight = "font-normal", color = "body-500", className = "", ...props }) => (
  <h1 className={`text-4xl md:text-5xl text-${color} ${weight} ${className} smooth-transition`} {...props} />
);

export default Title;
