import { FC, HTMLAttributes } from "react";
import Typography from "../../../interfaces/typography.interface";

interface BodyProps extends Omit<HTMLAttributes<HTMLParagraphElement>, "color">, Partial<Typography> {}

const Body: FC<BodyProps> = ({ weight = "font-normal", color = "body-500", className = "", ...props }) => (
  <p className={`text-md md:text-lg text-${color} ${weight} ${className} smooth-transition`} {...props} />
);

export default Body;
