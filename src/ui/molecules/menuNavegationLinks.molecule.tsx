import { FC } from "react";
import NavegationLink from "../atoms/navegationLink.atom";

interface MenuLinkInfo {
  text: string;
  href: string;
}

interface MenuNavegationLinksProps {
  data: MenuLinkInfo[];
  direction?: "vertical" | "horizontal";
}

const MenuNavegationLinks: FC<MenuNavegationLinksProps> = ({ data, direction = "horizontal" }) => {
  const horizontalStyles = `flex gap-4`;
  const verticalStyles = `w-full flex flex-col items-center gap-4`;

  return (
    <ul className={`${direction === "horizontal" ? horizontalStyles : verticalStyles}`}>
      {data.map((item, index) => (
        <li className="py-1" key={index}>
          <NavegationLink href={item.href} children={item.text} />
        </li>
      ))}
    </ul>
  );
};

export default MenuNavegationLinks;
