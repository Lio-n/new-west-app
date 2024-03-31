import { Link, LinkProps } from 'react-router-dom';
import { UploadFileEntityResponse } from '../../graphql/types/uploadFile.types';
import PictureSource from '../atoms/pictureSource.atom';
import ImgSkeleton from '../atoms/skeleton/img.skeleton';
import ArticleDetails, { ArticleDetailsItem, ArticleDetailsSkeleton } from './articleDetails.molecule';

interface ArticleCardSmallProps extends Partial<LinkProps>, React.RefAttributes<HTMLAnchorElement> {
  data: ArticleDetailsItem & { href: string; cover: Partial<UploadFileEntityResponse> };
}

const ArticleCardSmall: React.FC<ArticleCardSmallProps> = ({ data, className = '', ...props }) => {
  return (
    <Link {...props} to={data.href} className={`h-full w-full grid grid-rows-[60%,40%] sm:grid-rows-1 sm:grid-cols-[30%,70%] group ${className}`}>
      {data.cover.data?.attributes && (
        <PictureSource sources={data.cover.data?.attributes} className="sm:rounded-tr-lg sm:rounded-br-lg md:rounded-lg" />
      )}

      <ArticleDetails className="grid items-center sm:h-full md:px-6 xl:pr-0 xl:py-0" data={data} />
    </Link>
  );
};

const ArticleCardSmallSkeleton = () => (
  <div className={`grid grid-rows-[70%,30%] sm:grid-cols-[30%,70%] animate-pulse`}>
    <ImgSkeleton className="w-full max-h-40 sm:rounded-tr-lg sm:py-0 sm:rounded-br-lg md:rounded-lg py-14 h-32" />

    <ArticleDetailsSkeleton className="sm:h-full p-4 md:px-6 xl:pr-0 xl:py-0 content-center gap-4" />
  </div>
);

export { ArticleCardSmallSkeleton };
export default ArticleCardSmall;
