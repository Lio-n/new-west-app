import Chevron from "../../../assets/Chevron-bottom.svg?react";

interface ChevronIconProps extends React.SVGProps<SVGSVGElement> {
  direction?: "left" | "right" | "bottom" | "top";
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ direction = "bottom", className = "", ...props }) => {
  const directionStyle = { left: "rotate-90", right: "rotate-[-90deg]", bottom: "", top: "rotate-180" };
  return <Chevron className={`${directionStyle[direction]} w-4 ${className}`} {...props} />;
};

export default ChevronIcon;
