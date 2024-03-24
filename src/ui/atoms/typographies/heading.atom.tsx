import { FC, HTMLAttributes } from "react";
import Typography from "../../../interfaces/typography.interface";

interface HeadingProps extends Omit<HTMLAttributes<HTMLParagraphElement>, "color">, Partial<Typography> {}

const Heading: FC<HeadingProps> = ({ weight = "font-normal", color = "body-500", className = "", ...props }) => (
  <h2 className={`text-4xl md:text-3xl text-${color} ${weight} ${className} smooth-transition`} {...props} />
);

export default Heading;
