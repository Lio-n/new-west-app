import MenuNavegationLinks from "../../ui/molecules/menuNavegationLinks.molecule";
import HeaderInfo from "../../data/Header.data.json";
import MagnifyingGlassIcon from "../../ui/atoms/icons/magnifying-glass.icon";
import Button from "../../ui/atoms/button.atom";
import Brand from "../../ui/atoms/brand.atom";

const DesktopHeader = () => {
  return (
    <div className="w-full bg-chinese-blue px-12 py-6 flex justify-between my-0 mx-auto gap-4 items-center">
      <Brand />
      <MenuNavegationLinks data={HeaderInfo.navLinks} />
      <Button>
        <MagnifyingGlassIcon className="w-5 h-5 stroke-2" />
      </Button>
    </div>
  );
};

export default DesktopHeader;
