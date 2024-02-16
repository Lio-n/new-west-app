import ChervronIcon from "../atoms/icons/chevron.icon";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  chevron?: boolean;
  text: string;
}

const Link: React.FC<LinkProps> = ({ chevron, className = "", ...props }) => (
  <a {...props} className={`hover:opacity-85 whitespace-nowrap ${chevron ? "flex gap-4 items-center" : ""} ${className}`}>
    {props.text}
    {chevron && <ChervronIcon direction="right" />}
  </a>
);

export default Link;
