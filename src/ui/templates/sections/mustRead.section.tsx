import HeadingSection from "../../molecules/headingSection.molecule";
import ArticleCardMid from "../../molecules/articleCardMid.molecule";
import ArticleCardSmall from "../../molecules/articleCardSmall.molecule";
import { ParsedArticleEntityResponseCollection } from "../../../helpers/formatArticleData.helper";

interface MustReadSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  articles: ParsedArticleEntityResponseCollection;
  href: string;
}

const MustReadSection: React.FC<MustReadSectionProps> = ({ articles, href, ...props }) => {
  const SmallArticlesList = () => (
    <ul className="grid gap-4 content-between">
      {articles.data.slice(1).map((item, index) => (
        <li key={index} className="h-fit">
          <ArticleCardSmall className="md:grid-cols-[1fr,1fr]" data={item.attributes} />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="my-8 mx-auto max-w-screen-2xl" {...props}>
      <HeadingSection title={"Must Read"} href={href} className="px-4 mb-8" />
      <div className="grid gap-6 xl:grid-cols-[55%,40%] justify-evenly">
        <ArticleCardMid data={articles.data[0].attributes} includesREADMORE={false} />
        <SmallArticlesList />
      </div>
    </div>
  );
};

export default MustReadSection;
