import { useParams } from 'react-router-dom';
import { Query } from '../../graphql/types/query.types';
import { useQuery } from '@apollo/client';
import { Article, ArticleEntity, ArticleEntityResponseCollection } from '../../graphql/types/article.types';
import { GET_ARTICLE_BY_ID } from '../../graphql/article/GetArticleById.graphql';
import BlocksRender from '../../components/BlocksRender.component';
import Body from '../../ui/atoms/typographies/body.atom';
import NavegationSubLevel from '../../ui/atoms/navegationSubLevel.atom';
import Title from '../../ui/atoms/typographies/title.atom';
import ShareIcon from '../../ui/atoms/icons/share.icon';
import BookmarkIcon from '../../ui/atoms/icons/bookmark.icon';
import ClapsIcon from '../../ui/atoms/icons/claps.icon';
import Heading from '../../ui/atoms/typographies/heading.atom';
import formatArticleData, { ParsedArticleEntityResponseCollection } from '../../helpers/formatArticleData.helper';
import { GET_ARTICLES } from '../../graphql/article/GetArticles.graphql';
import ArticleCardMid from '../../ui/molecules/articleCardMid.molecule';
import ArticleDetails from '../../ui/molecules/articleDetails.molecule';
import formatDate from '../../lib/formatDate.lib';
import timeSince from '../../lib/timeSince.lib';
import formatDuration from '../../lib/formatDuration.lib';
import PictureSource from '../../ui/atoms/pictureSource.atom';
import { ParagraphSkeleton } from '../../ui/atoms/skeleton/paragraph.skeleton';
import ImgSkeleton from '../../ui/atoms/skeleton/img.skeleton';
import { sortByValues } from '../../interfaces/filterOptions.interface';

const ArticleById = () => {
  const params = useParams();

  const byIdResponse = useQuery<{ article: { data: ArticleEntity } }, Query['article']>(GET_ARTICLE_BY_ID, {
    variables: {
      articleId: params.id || null,
    },
  });

  const topStoriesResponse = useQuery<{ articles: ArticleEntityResponseCollection }, Query['articles']>(GET_ARTICLES, {
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: [sortByValues['Relevance']],
    },
  });

  return (
    <div className="py-24 lg:py-36 md:px-4 xl:px-8">
      {byIdResponse.loading && <BlocksRenderSkeleton />}
      <div className="wrapper">
        {byIdResponse.data?.article.data.attributes && (
          <>
            <>
              <Body>{byIdResponse.data?.article.data.attributes.description}</Body>

              {byIdResponse.data.article.data.attributes.cover.data && (
                <div className="full-bleed drop-shadow-xl">
                  <PictureSource
                    sources={byIdResponse.data.article.data.attributes.cover.data.attributes}
                    className="md:rounded-lg max-h-96 min-h-60"
                  />
                </div>
              )}
              <Header
                category={byIdResponse.data?.article.data.attributes.category}
                title={byIdResponse.data?.article.data.attributes.title}
                publishedAt={byIdResponse.data?.article.data.attributes.publishedAt}
                readingTime={byIdResponse.data?.article.data.attributes.readingTime}
              />
            </>
            <article className="grid gap-4">
              {byIdResponse.data?.article.data.attributes.body && <BlocksRender content={byIdResponse.data.article.data.attributes.body} />}
            </article>

            <div className="divider-solid" />
          </>
        )}
        {topStoriesResponse.data?.articles.data && (
          <>
            <TopStories articles={formatArticleData(topStoriesResponse.data?.articles)} />
            <div className="divider-solid" />
          </>
        )}
      </div>
    </div>
  );
};

interface HeaderProps extends Pick<Article, 'category' | 'title' | 'publishedAt' | 'readingTime'> {}

const Header: React.FC<HeaderProps> = ({ category, title, publishedAt, readingTime }) => (
  <div className="my-4">
    <div className="flex justify-between">
      <NavegationSubLevel
        levels={{
          1: {
            text: 'New West',
            href: '/',
          },
          2: {
            text: (category as unknown as string) || '',
            href: `category/${category}`,
          },
        }}
      />

      <div className="flex gap-4 text-body-500">
        <button className="hover:stroke-blueberry-600">
          <BookmarkIcon />
        </button>
        <button className="hover:stroke-blueberry-600">
          <ClapsIcon />
        </button>
        <button className="hover:stroke-blueberry-600">
          <ShareIcon />
        </button>
      </div>
    </div>
    <Title weight="font-bold" className="leading-snug my-2" children={title} />
    <ArticleDetails
      className="flex flex-wrap gap-4 px-0 py-0"
      data={{ formatedDate: formatDate(publishedAt), timeSince: timeSince(publishedAt), formatedDuration: formatDuration(readingTime), category }}
    />
  </div>
);

const TopStories = ({ articles }: { articles: ParsedArticleEntityResponseCollection }) => (
  <div>
    <Heading className="mb-8">Top Stories</Heading>
    <ul className="grid gap-4 content-between grid-rows-[repeat(4,25%)] md:grid-rows-[repeat(2,50%)] md:grid-cols-[repeat(2,calc(50%-.5rem))]">
      {articles.data.map((item, index) => (
        <li key={index} className="">
          <ArticleCardMid data={item.attributes} />
        </li>
      ))}
    </ul>
  </div>
);

const BlocksRenderSkeleton = () => {
  const TextBigSkeleton = () => (
    <div className="space-y-2 mt-8">
      <ParagraphSkeleton className="h-6" />
      <ParagraphSkeleton className="h-6 w-11/12" />
      <ParagraphSkeleton className="h-6 w-9/12" />
    </div>
  );

  const TextSmallSkeleton = () => (
    <div className="space-y-2">
      <ParagraphSkeleton className="w-full" />
      <ParagraphSkeleton className="w-11/12" />
      <ParagraphSkeleton className="w-9/12" />
    </div>
  );

  return (
    <div className="wrapper">
      <TextSmallSkeleton />
      <ImgSkeleton className="full-bleed max-h-96 min-h-60" />
      <TextBigSkeleton />
      <TextBigSkeleton />
      <TextBigSkeleton />
      <TextBigSkeleton />
    </div>
  );
};

export default ArticleById;
