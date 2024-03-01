import { UploadFileEntityResponse } from "../../graphql/types/uploadFile.types";
import PictureSource from "../atoms/pictureSource.atom";
import ImgSkeleton from "../atoms/skeleton/img.skeleton";
import { ParagraphSkeleton } from "../atoms/skeleton/paragraph.skeleton";
import ArticleDetails, { ArticleDetailsItem } from "./articleDetails.molecule";

interface ArticleCardMidProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  data: ArticleDetailsItem & { href: string; cover: Partial<UploadFileEntityResponse> };
  includesREADMORE?: boolean;
}

const ArticleCardMid: React.FC<ArticleCardMidProps> = ({ data, includesREADMORE = true, ...props }) => {
  return (
    <a href={data.href} {...props} className="h-fit grid grid-rows-[70%,30%] group xl:h-full">
      {data.cover.data?.attributes && <PictureSource sources={data.cover.data?.attributes} className="sm:rounded-lg" />}

      <ArticleDetails data={data} className="divide-y-2" />
    </a>
  );
};

const ArticleCardMidSkeleton = () => {
  const ArticleDetails = () => (
    <div className="w-full h-fit p-4 grid gap-2">
      <div className="flex justify-between items-center w-fit">
        <ParagraphSkeleton className="w-20" />
      </div>
      <ParagraphSkeleton className="w-full h-3" />
      <ParagraphSkeleton className="w-3/6 h-3" />
      <div className="flex justify-between items-center w-fit">
        <ParagraphSkeleton className="w-20" />
      </div>
    </div>
  );

  return (
    <div className="grid grid-rows-[70%,30%] animate-pulse">
      <ImgSkeleton className="max-h-60" />

      <ArticleDetails />
    </div>
  );
};

export { ArticleCardMidSkeleton };
export default ArticleCardMid;
