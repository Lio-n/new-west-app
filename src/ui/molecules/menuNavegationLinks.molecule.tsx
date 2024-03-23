import { FC } from 'react';
import NavegationLink from '../atoms/navegationLink.atom';

interface MenuLinkInfo {
  text: string;
  href: string;
}

interface MenuNavegationLinksProps {
  data: MenuLinkInfo[];
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

const MenuNavegationLinks: FC<MenuNavegationLinksProps> = ({ data, direction = 'horizontal', className = '' }) => {
  const horizontalStyles = `flex gap-4`;
  const verticalStyles = `w-full flex flex-col items-center gap-4`;

  return (
    <ul className={`${className} ${direction === 'horizontal' ? horizontalStyles : verticalStyles}`}>
      {data.map((item, index) => (
        <li className="py-1" key={index}>
          <NavegationLink to={item.href} children={item.text} className="hover:font-normal" />
        </li>
      ))}
    </ul>
  );
};

export default MenuNavegationLinks;
