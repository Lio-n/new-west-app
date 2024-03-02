import HeadingSection from "../../molecules/headingSection.molecule";
import ArticleCardMid, { ArticleCardMidSkeleton } from "../../molecules/articleCardMid.molecule";
import ArticleCardSmall, { ArticleCardSmallSkeleton } from "../../molecules/articleCardSmall.molecule";
import { ParsedArticleEntityResponseCollection } from "../../../helpers/formatArticleData.helper";

interface MustReadSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  articles: ParsedArticleEntityResponseCollection | undefined;
  href: string;
  isLoading: boolean;
}

const MustReadSection: React.FC<MustReadSectionProps> = ({ articles, href, isLoading = true, ...props }) => {
  const SmallArticlesList = () => (
    <ul className="grid gap-4 content-between">
      {articles?.data.map(({ attributes: { description, ...item } }, index) => (
        <li key={index} className="h-fit">
          <ArticleCardSmall className="md:grid-cols-[40%,60%]" data={item} />
        </li>
      ))}
    </ul>
  );

  const SmallArticlesListSkeleton = () => (
    <ul className="grid gap-4">
      {Array(3)
        .fill(0)
        .map((data, index) => (
          <li key={data + index} children={<ArticleCardSmallSkeleton />} />
        ))}
    </ul>
  );

  return (
    <div className="my-8 mx-auto max-w-screen-2xl" {...props}>
      <HeadingSection title={"Must Read"} href={href} className="px-4 mb-8" />
      <div className="grid gap-6 grid-cols-[1fr] xl:grid-cols-[55%,40%] justify-evenly">
        {isLoading && (
          <>
            <ArticleCardMidSkeleton />
            <SmallArticlesListSkeleton />
          </>
        )}

        {!isLoading && articles?.data.length && (
          <>
            <ArticleCardMid data={articles.data[0].attributes} includesREADMORE={false} />
            <SmallArticlesList />
          </>
        )}
      </div>
    </div>
  );
};

export default MustReadSection;
