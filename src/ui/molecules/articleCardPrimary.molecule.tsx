import { ParsedArticle } from "../../helpers/formatArticleData.helper";
import Body from "../atoms/typographies/body.atom";
import Phrase from "../atoms/typographies/phrase.atom";
import Title from "../atoms/typographies/title.atom";

interface ArticleCardPrimaryProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  data: ParsedArticle;
}

const ArticleCardPrimary: React.FC<ArticleCardPrimaryProps> = ({ data, ...props }) => {
  return (
    <a href={data.href} {...props} className="relative my-0 mx-auto group">
      <img
        src={data.cover.data?.attributes.formats.large.url}
        alt={data.cover.data?.attributes.formats.large.name}
        className="absolute h-full w-full md:rounded-lg lg:w-10/12 md:right-0 object-cover"
      />
      <div className="mt-16 mb-32 xl:mb-0 xl:w-9/12 h-fit row-start-2 relative px-4 py-6 bg-body-200 bg-opacity-60 grid gap-4 sm:w-10/12 sm:rounded-tr-lg sm:rounded-br-lg md:p-8 2xl:p-9 lg:rounded-lg">
        <Title color="body-900" weight="font-bold" className="group-hover:text-blueberry-600">
          {data.title}
        </Title>
        <Body>
          {data.description}
          <Body weight="font-bold" color="body-900">
            Read More
          </Body>
        </Body>
        <div className="flex justify-between">
          <Phrase weight="font-semibold">{data.formatedDate}</Phrase>
          <Phrase weight="font-semibold">{data.timeSince}</Phrase>
        </div>
      </div>
    </a>
  );
};

export default ArticleCardPrimary;
