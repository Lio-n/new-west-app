import { ParsedArticleEntity } from '../../helpers/formatArticleData.helper';
import ArticleCardSmall, { ArticleCardSmallSkeleton } from '../molecules/articleCardSmall.molecule';

const SmallArticlesList = ({ articles, className = '' }: { articles: ParsedArticleEntity[]; className?: string }) => (
  <ul className={className}>
    {articles.map(
      // eslint-disable-next-line
      ({ attributes: { description, ...item } }, i) => (
        <li key={i}>
          <ArticleCardSmall data={item} />
        </li>
      )
    )}
  </ul>
);

const SmallArticlesListSkeleton = ({ length = 4, className = '' }: { length?: number; className?: string }) => (
  <ul className={className}>
    {Array.from({ length }).map((_i, i) => (
      <li key={i} children={<ArticleCardSmallSkeleton />} />
    ))}
  </ul>
);

export { SmallArticlesListSkeleton };
export default SmallArticlesList;
