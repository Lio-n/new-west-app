import MenuNavegationLinks from '../../ui/molecules/menuNavegationLinks.molecule';
import HeaderInfo from '../../data/Header.data.json';
import MagnifyingGlassIcon from '../../ui/atoms/icons/magnifying-glass.icon';
import Brand from '../../ui/atoms/brand.atom';
import NavegationLink from '../../ui/atoms/navegationLink.atom';

const DesktopHeader = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-12 py-4 flex justify-between my-0 gap-4 items-center">
      <Brand />
      <MenuNavegationLinks data={[...HeaderInfo.navLinks, { text: 'About Us', href: '/about_us' }]} />
      <NavegationLink to="/article/search" aria-label="Navigate to the Search article page">
        <MagnifyingGlassIcon className="w-5 h-5 stroke-2" />
      </NavegationLink>
    </div>
  );
};

export default DesktopHeader;
