import FileIcon from "../icons/file.icon";

const ImgSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700 ${className}`}>
    <FileIcon />
  </div>
);

export default ImgSkeleton;
