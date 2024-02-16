import { ParsedArticle } from "../../helpers/formatArticleData.helper";
import DotIcon from "../atoms/icons/dot.icon";
import ImgSkeleton from "../atoms/skeleton/img.skeleton";
import { ParagraphSkeleton } from "../atoms/skeleton/paragraph.skeleton";
import Body from "../atoms/typographies/body.atom";
import Phrase from "../atoms/typographies/phrase.atom";

interface ArticleCardSmallProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  data: ParsedArticle;
}

const ArticleCardSmall: React.FC<ArticleCardSmallProps> = ({ data, className = "", ...props }) => {
  const ArticleDetails = () => (
    <div className="w-full h-fit sm:h-full p-4 bg-opacity-60 grid gap-2 md:px-6 xl:pr-0 xl:py-0 items-center">
      <div className="flex justify-between items-center w-fit">
        <Phrase color="body-400" weight="font-semibold">
          {data.formatedDate}
        </Phrase>
        <DotIcon className="mx-2 h-[4px] w-[4px] bg-body-400" />
        <Phrase color="body-400">{data.timeSince}</Phrase>
      </div>
      <Body color="body-900" weight="font-bold" className="group-hover:text-blueberry-600">
        {data.title}
      </Body>
      <div className="flex justify-between items-center w-fit">
        <Phrase color="blueberry-600" weight="font-semibold">
          {data.category}
        </Phrase>
        <DotIcon className="mx-2 h-[4px] w-[4px] bg-body-400" />
        <Phrase color="body-400">{data.formatedDuration}</Phrase>
      </div>
    </div>
  );

  return (
    <a href={data.href} {...props} className={`grid grid-rows-[70%,30%] sm:grid-cols-[30%,70%] group sm:w-fit ${className}`}>
      <picture>
        {data.cover.data?.attributes.formats.small.url && (
          <source srcSet={data.cover.data?.attributes.formats.small.url} media="(min-width: 800px)" />
        )}
        <img
          src={data.cover.data?.attributes.formats.thumbnail.url}
          alt={data.cover.data?.attributes.formats.thumbnail.name}
          className="w-full h-full max-h-40 sm:rounded-tr-lg sm:rounded-br-lg md:rounded-lg object-cover"
        />
      </picture>

      <ArticleDetails />
    </a>
  );
};

const ArticleCardSmallSkeleton = () => (
  <div className={`grid grid-rows-[70%,30%] sm:grid-cols-[30%,70%] animate-pulse`}>
    <ImgSkeleton className="w-full h-full max-h-40 sm:rounded-tr-lg sm:rounded-br-lg md:rounded-lg py-14 sm:py-0" />

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
