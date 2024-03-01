import { UploadFileEntityResponse } from "../../graphql/types/uploadFile.types";
import PictureSource from "../atoms/pictureSource.atom";
import ImgSkeleton from "../atoms/skeleton/img.skeleton";
import { ParagraphSkeleton } from "../atoms/skeleton/paragraph.skeleton";
import ArticleDetails, { ArticleDetailsItem } from "./articleDetails.molecule";

interface ArticleCardSmallProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  data: ArticleDetailsItem & { href: string; cover: Partial<UploadFileEntityResponse> };
}

const ArticleCardSmall: React.FC<ArticleCardSmallProps> = ({ data, className = "", ...props }) => {
  return (
    <a href={data.href} {...props} className={`grid grid-rows-[70%,30%] sm:grid-cols-[30%,70%] group sm:w-fit ${className}`}>
      {data.cover.data?.attributes && (
        <PictureSource sources={data.cover.data?.attributes} className="sm:rounded-tr-lg sm:rounded-br-lg md:rounded-lg" />
      )}

      <ArticleDetails className="grid items-center sm:h-full md:px-6 xl:pr-0 xl:py-0" data={data} />
    </a>
  );
};

const ArticleCardSmallSkeleton = () => (
  <div className={`grid grid-rows-[70%,30%] sm:grid-cols-[30%,70%] animate-pulse`}>
    <ImgSkeleton className="w-full max-h-40 sm:rounded-tr-lg sm:rounded-br-lg md:rounded-lg py-14 sm:py-0 h-32" />

    <div className="w-full sm:h-full p-4 bg-opacity-60 grid gap-2 md:px-6 xl:pr-0 xl:py-0 items-center">
      <div className="flex justify-between items-center">
        <ParagraphSkeleton className="w-20" />
      </div>
      <ParagraphSkeleton className="w-full h-3" />
      <ParagraphSkeleton className="w-3/6 h-3" />
      <div>
        <ParagraphSkeleton className="w-20" />
      </div>
    </div>
  </div>
);

export { ArticleCardSmallSkeleton };
export default ArticleCardSmall;
