interface DotIconProps extends React.HTMLAttributes<HTMLDivElement> {}

const DotIcon: React.FC<DotIconProps> = ({ className = "", ...props }) => <div className={`bg-black rounded-full ${className}`} {...props}></div>;

export default DotIcon;
