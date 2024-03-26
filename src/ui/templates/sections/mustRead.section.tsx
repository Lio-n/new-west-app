import HeadingSection from '../../molecules/headingSection.molecule';
import ArticleCardMid, { ArticleCardMidSkeleton } from '../../molecules/articleCardMid.molecule';
import ArticleCardSmall, { ArticleCardSmallSkeleton } from '../../molecules/articleCardSmall.molecule';
import { ParsedArticle, ParsedArticleEntityResponseCollection } from '../../../helpers/formatArticleData.helper';

interface MustReadSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  articles: ParsedArticleEntityResponseCollection | undefined;
  href: string;
  isLoading: boolean;
}

const MustReadSection: React.FC<MustReadSectionProps> = ({ articles, href, isLoading = true, ...props }) => {
  const SmallArticlesList = ({ smallArticles }: { smallArticles: { attributes: ParsedArticle; id: number }[] }) => {
    return (
      <ul className={`grid gap-4 md:auto-rows-[10rem]`}>
        {smallArticles.map(
          // eslint-disable-next-line
          ({ attributes: { description, ...item } }, index) => (
            <li key={index}>
              <ArticleCardSmall className="md:grid-cols-[40%,60%]" data={item} />
            </li>
          )
        )}
      </ul>
    );
  };

  const SmallArticlesListSkeleton = () => (
    <ul className="grid gap-4">
      {Array(3)
        .fill(0)
        .map((data, index) => (
          <li key={data + index} children={<ArticleCardSmallSkeleton />} />
        ))}
    </ul>
  );

  return (
    <div className="my-8 mx-auto max-w-screen-2xl" {...props}>
      {articles?.data.length && articles?.data.length > 2 && <HeadingSection title={'Must Read'} href={href} className="px-4 mb-8" />}
      <div className={`grid gap-6 grid-cols-[1fr] justify-evenly xl:grid-cols-[55%,40%]`}>
        {isLoading && (
          <>
            <ArticleCardMidSkeleton />
            <SmallArticlesListSkeleton />
          </>
        )}

        {!isLoading && articles?.data.length && articles?.data.length > 2 && (
          <>
            <ArticleCardMid data={articles.data[0].attributes} includesREADMORE={false} />

            <SmallArticlesList smallArticles={articles.data.slice(1)} />
          </>
        )}
      </div>
    </div>
  );
};

export default MustReadSection;
