import Typography from "../../../interfaces/typography.interface";

interface BlockquoteProps extends Omit<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, "color">, Partial<Typography> {}

const Blockquote: React.FC<BlockquoteProps> = ({ weight = "font-normal", color = "body-500", className = "", ...props }) => (
  <blockquote
    className={`text-md md:text-lg text-${color} ${weight} ${className} smooth-transition border-l-4 border-blueberry-600 bg-blueberry-600/[.1] pl-4 py-2 italic`}
    {...props}
  />
);

export default Blockquote;
