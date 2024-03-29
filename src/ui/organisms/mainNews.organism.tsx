import { ParsedArticleEntityResponseCollection } from '../../helpers/formatArticleData.helper';
import ArticleCardPrimary, { ArticleCardPrimarySkeleton } from '../molecules/articleCardPrimary.molecule';
import ArticleCardSmall, { ArticleCardSmallSkeleton } from '../molecules/articleCardSmall.molecule';

interface MainNewsProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ParsedArticleEntityResponseCollection;
}

const MainNews: React.FC<MainNewsProps> = ({ data, className = '', ...props }) => {
  const SmallArticlesList = () => (
    <ul className={`grid gap-4 auto-rows-[22rem] sm:auto-rows-[10rem] xl:auto-rows-fr`}>
      {data.data.slice(1).map(
        // eslint-disable-next-line
        ({ attributes: { description, ...item } }, index) => (
          <li key={index}>
            <ArticleCardSmall data={item} />
          </li>
        )
      )}
    </ul>
  );

  const includesSmallArticles: boolean = data?.data.length > 2;

  return (
    <>
      <div
        className={`min-h-96 mt-8 grid gap-6 ${!includesSmallArticles ? '' : 'xl:grid-cols-[55%,40%]'}  xl:justify-evenly ${className}`}
        {...props}
      >
        <ArticleCardPrimary data={data.data[0].attributes} />

        {includesSmallArticles && <SmallArticlesList />}
      </div>
    </>
  );
};

const MainNewsSkeleton = () => {
  const SmallArticlesList = () => (
    <ul className="grid gap-4">
      {[1, 2, 3, 4].map((index) => (
        <li key={index} children={<ArticleCardSmallSkeleton />} />
      ))}
    </ul>
  );

  return (
    <>
      <div className={`mt-8 grid gap-6 xl:grid-cols-[55%,40%]`}>
        <ArticleCardPrimarySkeleton />

        <SmallArticlesList />
      </div>
    </>
  );
};

export { MainNewsSkeleton };
export default MainNews;
