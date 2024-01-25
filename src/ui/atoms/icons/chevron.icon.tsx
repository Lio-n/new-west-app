import Chevron from "../../../assets/Chevron-right.svg?react";

interface ChevronIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: "left" | "right";
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ direction = "right", ...props }) => (
  <Chevron className={`${direction === "left" ? "rotate-180" : ""}`} {...props} />
);

export default ChevronIcon;
