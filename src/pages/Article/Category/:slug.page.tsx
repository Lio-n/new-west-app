import { useParams } from 'react-router-dom';
import MainNews, { MainNewsSkeleton } from '../../../ui/organisms/mainNews.organism';
import formatArticleData from '../../../helpers/formatArticleData.helper';
import { ArticleEntityResponseCollection } from '../../../graphql/types/article.types';
import { useQuery } from '@apollo/client';
import { Query } from '../../../graphql/types/query.types';
import { GET_ARTICLES } from '../../../graphql/article/GetArticles.graphql';
import MustReadSection from '../../../ui/templates/sections/mustRead.section';
import NavegationSubLevel from '../../../ui/atoms/navegationSubLevel.atom';
import { sortByValues } from '../../../interfaces/filterOptions.interface';
import NotContent from '../../../components/NotContent.component';

const ArticleByCategory = () => {
  // Based in the params.category value, the fetching and content should change.
  const params = useParams();

  const latestResponse = useQuery<{ articles: ArticleEntityResponseCollection }, Query['articles']>(GET_ARTICLES, {
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: [sortByValues['Newest']],
      filters: {
        category: {
          in: [params.slug || ''],
        },
      },
    },
  });

  const mustReadResponse = useQuery<{ articles: ArticleEntityResponseCollection }, Query['articles']>(GET_ARTICLES, {
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: ['views:asc'],
      filters: {
        category: {
          in: [params.slug || ''],
        },
      },
    },
  });

  if (
    !latestResponse.loading &&
    !mustReadResponse.loading &&
    !mustReadResponse.data?.articles.data.length &&
    !latestResponse.data?.articles.data.length
  ) {
    return <NotContent className="py-36 max-w-screen-2xl h-full" />;
  }

  return (
    <div className="py-24 lg:py-36 md:px-4 max-w-screen-2xl m-auto">
      <NavegationSubLevel
        levels={{
          1: {
            text: 'New West',
            href: '/',
          },
          2: {
            text: (params.slug as unknown as string) || '',
            href: `/article/category/${params.slug}`,
          },
        }}
      />

      <div>
        {latestResponse.loading && <MainNewsSkeleton />}
        {latestResponse.data?.articles.data.length && <MainNews data={formatArticleData(latestResponse.data?.articles)} />}

        <MustReadSection
          articles={mustReadResponse.data?.articles.data && formatArticleData(mustReadResponse.data?.articles)}
          href={`/article/search?sort=Relevance&category=${params.slug}`}
          isLoading={mustReadResponse.loading}
        />
      </div>
    </div>
  );
};

export default ArticleByCategory;
