import NewsTicker from "../../../components/newsTicker.component";
import MainNews from "../../organisms/mainNews.organism";
import { ParsedArticleEntityResponseCollection } from "../../../helpers/formatArticleData.helper";

const HomeSection: React.FC<{ articles: ParsedArticleEntityResponseCollection; trikerInfo: string[] }> = ({ articles, trikerInfo }) => {
  return (
    <div className="max-w-screen-2xl md:pb-40 sm:mx-auto my-0">
      <NewsTicker data={trikerInfo} />
      <MainNews data={articles} />
    </div>
  );
};

export default HomeSection;
