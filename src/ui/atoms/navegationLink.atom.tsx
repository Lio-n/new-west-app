import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

interface NavegationLinkProps extends LinkProps, React.RefAttributes<HTMLAnchorElement> {}

const NavegationLink: FC<NavegationLinkProps> = ({ className = "", ...props }) => (
  <Link className={`hover:text-blueberry-600 hover:font-bold ${className}`} {...props} />
);

export default NavegationLink;
