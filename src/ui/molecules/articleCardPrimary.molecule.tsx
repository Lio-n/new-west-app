import { Link, LinkProps } from 'react-router-dom';
import { ParsedArticle } from '../../helpers/formatArticleData.helper';
import ImgSkeleton from '../atoms/skeleton/img.skeleton';
import { ParagraphSkeleton } from '../atoms/skeleton/paragraph.skeleton';
import Body from '../atoms/typographies/body.atom';
import Phrase from '../atoms/typographies/phrase.atom';
import Title from '../atoms/typographies/title.atom';
import PictureSource from '../atoms/pictureSource.atom';

interface ArticleCardPrimaryProps extends Partial<LinkProps>, React.RefAttributes<HTMLAnchorElement> {
  data: ParsedArticle;
}

const ArticleCardPrimary: React.FC<ArticleCardPrimaryProps> = ({ data, ...props }) => {
  return (
    <Link {...props} to={data.href} className="relative my-0 mx-auto group w-full">
      {data.cover.data?.attributes && (
        <PictureSource
          sourceUsage={{ small: true, medium: true, large: true }}
          sources={data.cover.data?.attributes}
          className="absolute h-full w-full md:rounded-lg lg:w-10/12 md:right-0"
        />
      )}
      <div className="min-h-[60%] content-center mt-16 mb-32 xl:mb-0 xl:w-9/12 h-fit row-start-2 relative px-4 py-6 bg-body-200 bg-opacity-60 grid gap-4 sm:w-10/12 sm:rounded-tr-lg sm:rounded-br-lg md:p-8 2xl:p-9 lg:rounded-lg">
        <Title color="body-900" weight="font-bold" className="group-hover:text-blueberry-600">
          {data.title}
        </Title>
        <Body>
          {data.description}
          <Phrase weight="font-bold" color="body-900" className="ml-2 text-md md:text-lg whitespace-nowrap">
            Read More
          </Phrase>
        </Body>
        <div className="flex justify-between">
          <Phrase weight="font-semibold">{data.formatedDate}</Phrase>
          <Phrase weight="font-semibold">{data.timeSince}</Phrase>
        </div>
      </div>
    </Link>
  );
};

const ArticleCardPrimarySkeleton = () => {
  return (
    <div className="relative my-0 mx-auto group w-full animate-pulse">
      <ImgSkeleton className="absolute h-full w-full md:rounded-lg lg:w-10/12 md:right-0" />
      <div className="mt-16 mb-32 xl:mb-0 xl:w-9/12 h-[calc(100%-8rem)] row-start-2 relative px-4 py-6 bg-gray-100 grid gap-4 sm:w-10/12 sm:rounded-tr-lg sm:rounded-br-lg md:p-8 2xl:p-9 lg:rounded-lg">
        <ParagraphSkeleton className="h-4" />
        <ParagraphSkeleton className="h-4 w-60" />
        <div>
          <ParagraphSkeleton className="my-2 w-72" />
          <ParagraphSkeleton />

          <ParagraphSkeleton className="my-2 w-80" />
          <ParagraphSkeleton className="my-2 w-28" />
        </div>
        <div className="flex gap-4">
          <ParagraphSkeleton className="h-2.5 w-12" />
          <ParagraphSkeleton className="h-2.5 w-12" />
        </div>
      </div>
    </div>
  );
};

export { ArticleCardPrimarySkeleton };
export default ArticleCardPrimary;
