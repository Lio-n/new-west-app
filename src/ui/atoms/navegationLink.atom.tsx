import { AnchorHTMLAttributes, FC } from "react";

interface NavegationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const NavegationLink: FC<NavegationLinkProps> = ({ ...props }) => <a className={"hover:text-blueberry-600 hover:font-bold text-white"} {...props} />;

export default NavegationLink;
