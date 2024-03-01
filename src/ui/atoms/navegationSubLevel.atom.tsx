import ChevronIcon from "./icons/chevron.icon";
import NavegationLink from "./navegationLink.atom";

interface NavegationSubLevelProps {
  levels: {
    1: { text: string; href?: string };
    2: { text: string; href?: string };
  };
}

const NavegationSubLevel: React.FC<NavegationSubLevelProps> = ({ levels }) => {
  return (
    <div className="flex text-sm items-center gap-2 text-body-500 font-medium">
      <NavegationLink href={`${levels[1].href || "#"}`} className="hover:font-medium">
        {levels[1].text}
      </NavegationLink>
      <ChevronIcon direction="right" className="text-blueberry-600" />
      <NavegationLink href={`${levels[2].href || "#"}`} className="hover:font-medium">
        {levels[2].text}
      </NavegationLink>
    </div>
  );
};

export default NavegationSubLevel;
