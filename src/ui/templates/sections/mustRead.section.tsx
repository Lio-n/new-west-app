import HeadingSection from '../../molecules/headingSection.molecule';
import ArticleCardMid, { ArticleCardMidSkeleton } from '../../molecules/articleCardMid.molecule';
import { ParsedArticleEntityResponseCollection } from '../../../helpers/formatArticleData.helper';
import SmallArticlesList, { SmallArticlesListSkeleton } from '../../organisms/smallArticlesList.organism';

interface MustReadSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  articles: ParsedArticleEntityResponseCollection | undefined;
  href?: string;
  isLoading: boolean;
}

const MustReadSection: React.FC<MustReadSectionProps> = ({ articles, href = '/article/search?sort=Relevance', isLoading = true, ...props }) => {
  return (
    <div className="my-8 mx-auto max-w-screen-2xl" {...props}>
      {articles?.data.length && articles?.data.length > 2 && <HeadingSection title={'Must Read'} href={href} className="px-4 mb-8" />}

      <div className={`grid gap-6 grid-cols-[1fr] justify-evenly xl:grid-cols-[55%,40%] [&>div]:inline-table`}>
        {isLoading && (
          <>
            <ArticleCardMidSkeleton />
            <SmallArticlesListSkeleton length={3} className="grid gap-4" />
          </>
        )}

        {!isLoading && articles?.data.length && articles?.data.length > 2 && (
          <>
            <ArticleCardMid data={articles.data[0].attributes} includesREADMORE={false} />

            <SmallArticlesList
              articles={articles.data.slice(1)}
              className="grid gap-4 auto-rows-[22rem] sm:auto-rows-[10rem] [&>li>a]:md:grid-cols-[40%,60%]"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MustReadSection;
