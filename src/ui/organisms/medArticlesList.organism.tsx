import { ParsedArticleEntity } from '../../helpers/formatArticleData.helper';
import ArticleCardMid, { ArticleCardMidSkeleton } from '../molecules/articleCardMid.molecule';

const MidArticlesList = ({ articles, className = '' }: { articles: ParsedArticleEntity[]; className?: string }) => (
  <ul className={className}>
    {articles.map(
      // eslint-disable-next-line
      ({ attributes: { description, ...item } }, i) => (
        <li key={i}>
          <ArticleCardMid data={item} />
        </li>
      )
    )}
  </ul>
);

const MidArticlesListSkeleton = ({ length = 4, className = '' }: { length?: number; className?: string }) => (
  <ul className={className}>
    {Array.from({ length }).map((_i, i) => (
      <li key={i} children={<ArticleCardMidSkeleton />} />
    ))}
  </ul>
);

export { MidArticlesListSkeleton };
export default MidArticlesList;
