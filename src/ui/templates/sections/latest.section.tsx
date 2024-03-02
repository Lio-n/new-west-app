import HeadingSection from "../../molecules/headingSection.molecule";
import ArticleCardMid, { ArticleCardMidSkeleton } from "../../molecules/articleCardMid.molecule";
import { ParsedArticleEntityResponseCollection } from "../../../helpers/formatArticleData.helper";

const LatestSection: React.FC<{ articles: ParsedArticleEntityResponseCollection; isLoading: boolean }> = ({ articles, isLoading }) => {
  const MidArticlesList = () => (
    <ul className="flex gap-4 flex-wrap justify-center">
      {articles.data.map((item, index) => (
        <li key={index} className="h-fit sm:max-w-45 2xl:max-w-24">
          <ArticleCardMid data={item.attributes} />
        </li>
      ))}
    </ul>
  );

  const MidArticlesListSkeleton = () => (
    <ul className="flex gap-4 flex-wrap justify-center">
      {[1, 2, 3, 4].map((index) => (
        <li key={index} className="w-full sm:max-w-45 2xl:max-w-24" children={<ArticleCardMidSkeleton />} />
      ))}
    </ul>
  );

  return (
    <div className="my-8 mx-auto max-w-screen-2xl">
      <HeadingSection title={"Latest news"} href={"/article/search/?sort=Newest&dateRange=ALL_TIME"} className="px-4 mb-8" />

      {isLoading && <MidArticlesListSkeleton />}
      {!isLoading && articles.data.length && <MidArticlesList />}
    </div>
  );
};

export default LatestSection;
