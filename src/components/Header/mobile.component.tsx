import { useState } from 'react';
import MenuNavegationLinks from '../../ui/molecules/menuNavegationLinks.molecule';
import HeaderInfo from '../../data/Header.data.json';
import XMarkIcon from '../../ui/atoms/icons/x-mark.icon';
import BarsThreeIcon from '../../ui/atoms/icons/barsThree.icon';
import Button from '../../ui/atoms/button.atom';
import MagnifyingGlassIcon from '../../ui/atoms/icons/magnifying-glass.icon';
import Brand from '../../ui/atoms/brand.atom';
import NavegationLink from '../../ui/atoms/navegationLink.atom';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const DropMenu = () => (
    <div
      className={`overflow-auto w-full transition-opacity duration-300 ease-in ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } absolute w-full bg-chinese-blue-400 p-4`}
    >
      <MenuNavegationLinks direction="vertical" data={[...HeaderInfo.navLinks, { text: 'About Us', href: '/about_us' }]} />
    </div>
  );

  const HeaderContent = () => (
    <div className="w-full flex justify-between items-center my-0 mx-auto px-6 py-4 md:px-9 text-white">
      <Brand />
      <div className="flex">
        <NavegationLink className="p-2" to="/article/search">
          <MagnifyingGlassIcon className="w-5 h-5 stroke-[3px]" />
        </NavegationLink>
        <Button aria-label="menu-mobile" onClick={toggleMenu}>
          {isOpen ? <XMarkIcon className="w-5 h-5 stroke-[3px]" /> : <BarsThreeIcon className="w-5 h-5 stroke-[3px]" />}
        </Button>
      </div>
    </div>
  );

  return (
    <div className={`max-w-screen-2xl mx-auto`}>
      <HeaderContent />
      <DropMenu />
    </div>
  );
};

export default MobileHeader;
