import FileIcon from "../icons/file.icon";

const ImgSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center h-48 bg-gray-200 rounded ${className}`}>
    <FileIcon />
  </div>
);

export default ImgSkeleton;
