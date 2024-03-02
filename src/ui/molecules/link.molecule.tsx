import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import ChervronIcon from "../atoms/icons/chevron.icon";

interface LinkProps extends RouterLinkProps, React.RefAttributes<HTMLAnchorElement> {
  chevron?: boolean;
  text: string;
}

const Link: React.FC<LinkProps> = ({ chevron, className = "", ...props }) => (
  <RouterLink {...props} className={`hover:opacity-85 whitespace-nowrap ${chevron ? "flex gap-4 items-center" : ""} ${className}`}>
    {props.text}
    {chevron && <ChervronIcon direction="right" />}
  </RouterLink>
);

export default Link;
