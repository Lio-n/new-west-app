import HeadingSection from '../../molecules/headingSection.molecule';
import { ParsedArticleEntityResponseCollection } from '../../../helpers/formatArticleData.helper';
import MidArticlesList, { MidArticlesListSkeleton } from '../../organisms/medArticlesList.organism';

const sharedStyles = 'flex gap-4 flex-wrap justify-center [&>li]:h-fit [&>li]:w-full [&>li]:sm:w-[45%] [&>li]:2xl:w-[24%]';

interface LatestSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  articles: ParsedArticleEntityResponseCollection | undefined;
  isLoading: boolean;
}

const LatestSection: React.FC<LatestSectionProps> = ({ articles, isLoading }) => {
  return (
    <div className="my-8 mx-auto max-w-screen-2xl">
      {articles?.data.length && articles?.data.length > 2 && (
        <HeadingSection title={'Latest news'} href={'/article/search/?sort=Newest&dateRange=ALL_TIME'} className="px-4 mb-8" />
      )}

      {isLoading && <MidArticlesListSkeleton className={sharedStyles} />}
      {!isLoading && articles?.data.length && <MidArticlesList articles={articles.data} className={sharedStyles} />}
    </div>
  );
};

export default LatestSection;
