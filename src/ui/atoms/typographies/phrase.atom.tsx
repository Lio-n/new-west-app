import { FC, HTMLAttributes } from "react";
import Typography from "../../../interfaces/typography.interface";

interface PhraseProps extends Omit<HTMLAttributes<HTMLParagraphElement>, "color">, Partial<Typography> {}

const Phrase: FC<PhraseProps> = ({ weight = "font-normal", color = "body-500", className = "", ...props }) => (
  <span className={`text-sm md:text-md text-${color} ${weight} ${className} smooth-transition`} {...props} />
);

export default Phrase;
