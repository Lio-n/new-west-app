import { FC, HTMLAttributes } from "react";
import Typography from "../../../interfaces/typography.interface";

interface SubHeadingProps extends Omit<HTMLAttributes<HTMLParagraphElement>, "color">, Partial<Typography> {}

const SubHeading: FC<SubHeadingProps> = ({ weight = "font-normal", color = "body-500", className = "", ...props }) => (
  <h3 className={`text-3xl sm:text-2xl text-${color} ${weight} ${className} smooth-transition`} {...props} />
);

export default SubHeading;
