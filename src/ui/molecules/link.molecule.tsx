import ChervronIcon from "../atoms/icons/chevron.icon";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  chevron?: boolean;
  text: string;
}

const Link: React.FC<LinkProps> = ({ chevron, className = "", ...props }) => (
  <a {...props} className={`hover:opacity-85 ${chevron ? "flex gap-4 items-center" : ""} ${className}`}>
    {props.text}
    {chevron && <ChervronIcon className="stroke-[3px] w-6 h-6" />}
  </a>
);

export default Link;
