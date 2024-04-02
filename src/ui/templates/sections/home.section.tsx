import NewsTicker from '../../../components/newsTicker.component';
import MainNews, { MainNewsSkeleton } from '../../organisms/mainNews.organism';
import { ParsedArticleEntityResponseCollection } from '../../../helpers/formatArticleData.helper';
import { NewsTrikerInfo } from '../../../interfaces/newsTriker.interface';

interface HomeSectionProps {
  articles: ParsedArticleEntityResponseCollection | undefined;
  trikerInfo: NewsTrikerInfo[] | undefined;
  isLoading: boolean;
}

const HomeSection: React.FC<HomeSectionProps> = ({ articles, trikerInfo, isLoading }) => {
  return (
    <div className="max-w-screen-2xl mb-12 sm:mx-auto my-0">
      {trikerInfo?.length && <NewsTicker data={trikerInfo} />}

      {isLoading && <MainNewsSkeleton />}
      {!isLoading && articles?.data.length && <MainNews data={articles.data} />}
    </div>
  );
};

export default HomeSection;
