import { ParsedArticle } from "../../helpers/formatArticleData.helper";
import DotIcon from "../atoms/icons/dot.icon";
import Body from "../atoms/typographies/body.atom";
import Phrase from "../atoms/typographies/phrase.atom";
import SubHeading from "../atoms/typographies/subHeading.atom";

interface ArticleCardMidProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  data: ParsedArticle;
  includesREADMORE?: boolean;
}

const ArticleCardMid: React.FC<ArticleCardMidProps> = ({ data, includesREADMORE = true, ...props }) => {
  const ArticleDetails = () => (
    <div className="w-full h-fit p-4 grid gap-2">
      <div className="flex justify-between items-center w-fit">
        <Phrase color="body-400" weight="font-semibold">
          {data.formatedDate}
        </Phrase>
        <DotIcon className="mx-2 h-[4px] w-[4px] bg-body-400" />
        <Phrase color="body-400">{data.timeSince}</Phrase>
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
        <Phrase color="body-400">{data.formatedDuration}</Phrase>
      </div>
    </div>
  );

  return (
    <a href={data.href} {...props} className="h-fit grid grid-rows-[70%,30%] group">
      <img
        src={data.cover.data?.attributes.formats.medium.url}
        alt={data.cover.data?.attributes.formats.medium.name}
        className="w-full h-full sm:rounded-lg object-cover max-h-60"
      />

      <ArticleDetails />
    </a>
  );
};

export default ArticleCardMid;
