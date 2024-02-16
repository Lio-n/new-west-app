import NewsTicker from "../../../components/newsTicker.component";
import MainNews, { MainNewsSkeleton } from "../../organisms/mainNews.organism";
import { ParsedArticleEntityResponseCollection } from "../../../helpers/formatArticleData.helper";

interface HomeSectionProps {
  articles: ParsedArticleEntityResponseCollection;
  trikerInfo: string[];
  isLoading: boolean;
}

const HomeSection: React.FC<HomeSectionProps> = ({ articles, trikerInfo, isLoading }) => {
  return (
    <div className="max-w-screen-2xl md:pb-40 sm:mx-auto my-0">
      <NewsTicker data={trikerInfo} />

      {isLoading ? <MainNewsSkeleton /> : <MainNews data={articles} />}
    </div>
  );
};

export default HomeSection;
