import { Link, LinkProps } from 'react-router-dom';
import { UploadFileEntityResponse } from '../../graphql/types/uploadFile.types';
import PictureSource from '../atoms/pictureSource.atom';
import ImgSkeleton from '../atoms/skeleton/img.skeleton';
import ArticleDetails, { ArticleDetailsItem, ArticleDetailsSkeleton } from './articleDetails.molecule';

interface ArticleCardMidProps extends Partial<LinkProps>, React.RefAttributes<HTMLAnchorElement> {
  data: ArticleDetailsItem & { href: string; cover: Partial<UploadFileEntityResponse> };
  includesREADMORE?: boolean;
}

const ArticleCardMid: React.FC<ArticleCardMidProps> = ({ data, includesREADMORE = true, ...props }) => {
  return (
    <Link {...props} to={data.href} className="h-fit grid grid-rows-[minmax(0,15rem)] group xl:h-full">
      {data.cover.data?.attributes && (
        <PictureSource sourceUsage={{ thumbnail: true, small: true, medium: true }} sources={data.cover.data?.attributes} className="sm:rounded-lg" />
      )}

      <ArticleDetails data={data} className="divide-y-2" includesREADMORE={includesREADMORE} />
    </Link>
  );
};

const ArticleCardMidSkeleton = () => {
  return (
    <div className="animate-pulse">
      <ImgSkeleton className="min-h-60 h-full" />

      <ArticleDetailsSkeleton className="p-4 gap-4" />
    </div>
  );
};

export { ArticleCardMidSkeleton };
export default ArticleCardMid;
