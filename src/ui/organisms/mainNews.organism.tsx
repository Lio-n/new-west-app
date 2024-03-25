import { ParsedArticleEntityResponseCollection } from '../../helpers/formatArticleData.helper';
import ArticleCardPrimary, { ArticleCardPrimarySkeleton } from '../molecules/articleCardPrimary.molecule';
import ArticleCardSmall, { ArticleCardSmallSkeleton } from '../molecules/articleCardSmall.molecule';

interface MainNewsProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ParsedArticleEntityResponseCollection;
}

const MainNews: React.FC<MainNewsProps> = ({ data, className = '', ...props }) => {
  const SmallArticlesList = () => (
    <ul className="grid gap-4 content-between grid-rows-[repeat(4,minmax(0,calc(25%+3rem)))]">
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

  return (
    <>
      <div className={`mt-8 grid gap-6 xl:grid-cols-[55%,40%] ${className}`} {...props}>
        <ArticleCardPrimary data={data.data[0].attributes} />

        <SmallArticlesList />
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
