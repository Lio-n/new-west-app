import HeadingSection from "../../molecules/headingSection.molecule";
import ArticleCardMid from "../../molecules/articleCardMid.molecule";
import { ParsedArticleEntityResponseCollection } from "../../../helpers/formatArticleData.helper";

const LatestSection: React.FC<{ articles: ParsedArticleEntityResponseCollection }> = ({ articles }) => {
  const MidArticlesList = () => (
    <ul className="flex gap-4 flex-wrap justify-center">
      {articles.data.map((item, index) => (
        <li key={index} className="h-fit sm:max-w-45 2xl:max-w-24">
          <ArticleCardMid data={item.attributes} />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="my-8 mx-auto max-w-screen-2xl">
      <HeadingSection title={"Latest news"} href={"/article/search"} className="px-4 mb-8" />
      <MidArticlesList />
    </div>
  );
};

export default LatestSection;
