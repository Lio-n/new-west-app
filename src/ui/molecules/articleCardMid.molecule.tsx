import formatDate from "../../lib/formatDate.lib";
import formatDuration from "../../lib/formatDuration.lib";
import timeSince from "../../lib/timeSince.lib";
import DotIcon from "../atoms/icons/dot.icon";
import Body from "../atoms/typographies/body.atom";
import Phrase from "../atoms/typographies/phrase.atom";
import SubHeading from "../atoms/typographies/subHeading.atom";

type Article = {
  title: string;
  description?: string;
  cover: string;
  category: string;
  readingTime: number;
  publishedAt: string;
  href: string;
};

interface ArticleCardMidProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  data: Article;
  includesREADMORE?: boolean;
}

const ArticleCardMid: React.FC<ArticleCardMidProps> = ({ data, includesREADMORE = true, ...props }) => {
  const ArticleDetails = () => (
    <div className="w-full h-fit p-4 grid gap-2">
      <div className="flex justify-between items-center w-fit">
        <Phrase color="body-400" weight="font-semibold">
          {formatDate(data.publishedAt)}
        </Phrase>
        <DotIcon className="mx-2 h-[4px] w-[4px] bg-body-400" />
        <Phrase color="body-400">{timeSince(data.publishedAt)}</Phrase>
      </div>
      <SubHeading color="body-900" weight="font-bold" className="group-hover:text-blueberry-600">
        {data.title}
      </SubHeading>
      {data.description && (
        <Body color="body-400">
          {data.description}
          {includesREADMORE && (
            <Body weight="font-bold" color="body-500">
              Read More
            </Body>
          )}
        </Body>
      )}
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
    <a href={data.href} {...props} className="h-fit grid grid-rows-[70%,30%] group">
      <img src={data.cover} alt={data.cover} className="w-full h-full sm:rounded-lg object-cover max-h-60" />

      <ArticleDetails />
    </a>
  );
};

export default ArticleCardMid;
