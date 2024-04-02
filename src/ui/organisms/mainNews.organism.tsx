import { ParsedArticleEntity } from '../../helpers/formatArticleData.helper';
import ArticleCardPrimary, { ArticleCardPrimarySkeleton } from '../molecules/articleCardPrimary.molecule';
import SmallArticlesList, { SmallArticlesListSkeleton } from './smallArticlesList.organism';

const sharedStyles = 'grid gap-4 sm:auto-rows-[10rem] xl:auto-rows-fr';

interface MainNewsProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ParsedArticleEntity[];
}

const MainNews: React.FC<MainNewsProps> = ({ data, className = '', ...props }) => {
  const includesSmallArticles: boolean = data?.length > 2;

  return (
    <>
      <div
        className={`min-h-96 mt-8 grid gap-6 ${!includesSmallArticles ? '' : 'xl:grid-cols-[55%,40%]'}  xl:justify-evenly ${className}`}
        {...props}
      >
        <ArticleCardPrimary data={data[0].attributes} />

        {includesSmallArticles && <SmallArticlesList articles={data.slice(1)} className={`${sharedStyles} auto-rows-[22rem]`} />}
      </div>
    </>
  );
};

const MainNewsSkeleton = () => {
  return (
    <>
      <div className={`min-h-96 mt-8 grid gap-6 xl:grid-cols-[55%,40%] xl:justify-evenly`}>
        <ArticleCardPrimarySkeleton />

        <SmallArticlesListSkeleton className={sharedStyles} />
      </div>
    </>
  );
};

export { MainNewsSkeleton };
export default MainNews;
