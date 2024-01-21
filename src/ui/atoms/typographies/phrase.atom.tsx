import { FC, HTMLAttributes } from "react";
import Typography from "../../../interfaces/typography.interface";

interface PhraseProps extends Omit<HTMLAttributes<HTMLParagraphElement>, "color">, Partial<Typography> {}

const Phrase: FC<PhraseProps> = ({ weight = "normal", color = "body-500", className = "", ...props }) => (
  <span className={`text-md sm:text-sm text-${color} font-${weight} ${className} smooth-transition`} {...props} />
);

export default Phrase;
