import { ParsedArticle } from "../../helpers/formatArticleData.helper";
import DotIcon from "../atoms/icons/dot.icon";
import Body from "../atoms/typographies/body.atom";
import Phrase from "../atoms/typographies/phrase.atom";
import SubHeading from "../atoms/typographies/subHeading.atom";

export interface ArticleDetailsItem
  extends Partial<Pick<ParsedArticle, "title" | "description" | "formatedDate" | "formatedDuration" | "timeSince" | "category">> {}

interface ArticleDetailsProps extends React.AnchorHTMLAttributes<HTMLDivElement> {
  data: ArticleDetailsItem;
  className?: string;
  includesREADMORE?: boolean;
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ data, includesREADMORE = false, className = "", ...props }) => (
  <div className={`size-fit p-4 divide-y-2 divide-transparent ${className}`} {...props}>
    <div className="flex justify-between items-center w-fit">
      <Phrase color="body-400" weight="font-semibold">
        {data.formatedDate}
      </Phrase>
      <DotIcon className="mx-2 size-1 bg-body-400" />
      <Phrase color="body-400">{data.timeSince}</Phrase>
    </div>
    {data.title && (
      <SubHeading color="body-500" weight="font-bold" className="group-hover:text-blueberry-600">
        {data.title}
      </SubHeading>
    )}
    {data.description && (
      <Body color="body-400">
        {data.description}
        {includesREADMORE && (
          <Phrase weight="font-bold" color="body-900" className="text-md md:text-lg whitespace-nowrap ml-4">
            Read More
          </Phrase>
        )}
      </Body>
    )}
    <div className="flex justify-between items-center w-fit">
      <Phrase color="blueberry-600" weight="font-semibold">
        {data.category}
      </Phrase>
      <DotIcon className="mx-2 size-1 bg-body-400" />
      <Phrase color="body-400">Read {data.formatedDuration}</Phrase>
    </div>
  </div>
);

export default ArticleDetails;
