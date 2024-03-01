import { AnchorHTMLAttributes, FC } from "react";

interface NavegationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const NavegationLink: FC<NavegationLinkProps> = ({ className = "", ...props }) => (
  <a className={`hover:text-blueberry-600 hover:font-bold ${className}`} {...props} />
);

export default NavegationLink;
