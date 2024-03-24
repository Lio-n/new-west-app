import Link from "./link.molecule";
import Heading from "../atoms/typographies/heading.atom";

interface HeadingSectionProps {
  title: string;
  href: string;
  className?: string;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({ title, href, className = "" }) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <Heading weight="font-semibold" color="body-900">
        {title}
      </Heading>
      <Link to={href} text={"See All"} className="text-blueberry-600 font-bold" chevron={true} />
    </div>
  );
};

export default HeadingSection;
