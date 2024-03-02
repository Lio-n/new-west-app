import MenuNavegationLinks from "../../ui/molecules/menuNavegationLinks.molecule";
import HeaderInfo from "../../data/Header.data.json";
import MagnifyingGlassIcon from "../../ui/atoms/icons/magnifying-glass.icon";
import Brand from "../../ui/atoms/brand.atom";
import NavegationLink from "../../ui/atoms/navegationLink.atom";

const DesktopHeader = () => {
  return (
    <div className="w-full bg-chinese-blue-400 px-12 py-6 flex justify-between my-0 mx-auto gap-4 items-center">
      <Brand />
      <MenuNavegationLinks data={HeaderInfo.navLinks} />
      <NavegationLink to="/article/search">
        <MagnifyingGlassIcon className="w-5 h-5 stroke-2" />
      </NavegationLink>
    </div>
  );
};

export default DesktopHeader;
