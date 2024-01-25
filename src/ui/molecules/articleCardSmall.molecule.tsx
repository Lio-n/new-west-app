import formatDate from "../../lib/formatDate.lib";
import formatDuration from "../../lib/formatDuration.lib";
import timeSince from "../../lib/timeSince.lib";
import DotIcon from "../atoms/icons/dot.icon";
import Body from "../atoms/typographies/body.atom";
import Phrase from "../atoms/typographies/phrase.atom";

type Article = {
  title: string;
  cover: string;
  category: string;
  readingTime: number;
  publishedAt: string;
  href: string;
};

interface ArticleCardSmallProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  data: Article;
}

const ArticleCardSmall: React.FC<ArticleCardSmallProps> = ({ data, className = "", ...props }) => {
  const ArticleDetails = () => (
    <div className="w-full h-fit sm:h-full p-4 bg-opacity-60 grid gap-2 md:px-6 xl:pr-0 xl:py-0 items-center">
      <div className="flex justify-between items-center w-fit">
        <Phrase color="body-400" weight="font-semibold">
          {formatDate(data.publishedAt)}
        </Phrase>
        <DotIcon className="mx-2 h-[4px] w-[4px] bg-body-400" />
        <Phrase color="body-400">{timeSince(data.publishedAt)}</Phrase>
      </div>
      <Body color="body-900" weight="font-bold" className="group-hover:text-blueberry-600">
        {data.title}
      </Body>
      <div className="flex justify-between items-center w-fit">
        <Phrase color="blueberry-600" weight="font-semibold">
          {data.category}
        </Phrase>
        <DotIcon className="mx-2 h-[4px] w-[4px] bg-body-400" />
        <Phrase color="body-400">{formatDuration(data.readingTime)}</Phrase>
      </div>
    </div>
  );

  return (
    <a href={data.href} {...props} className={`grid grid-rows-[70%,30%] sm:grid-cols-[30%,70%] group sm:w-fit ${className}`}>
      <img src={data.cover} alt={data.cover} className="w-full h-full max-h-40 sm:rounded-tr-lg sm:rounded-br-lg md:rounded-lg object-cover" />

      <ArticleDetails />
    </a>
  );
};

export default ArticleCardSmall;
