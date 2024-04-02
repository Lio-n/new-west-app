import HomeSection from '../ui/templates/sections/home.section';
import LatestSection from '../ui/templates/sections/latest.section';
import MustReadSection from '../ui/templates/sections/mustRead.section';
import formatArticleData from '../helpers/formatArticleData.helper';
import { ArticleEntityResponseCollection } from '../graphql/types/article.types';
import { useQuery } from '@apollo/client';
import { Query } from '../graphql/types/query.types';
import { GET_ARTICLES } from '../graphql/article/GetArticles.graphql';
import { sortByValues } from '../interfaces/filterOptions.interface';
import { useMemo } from 'react';

const HomePage = () => {
  const relevanteResponse = useQuery<{ articles: ArticleEntityResponseCollection }, Query['articles']>(GET_ARTICLES, {
    variables: {
      pagination: { pageSize: 5, page: 1 },
      sort: [sortByValues['Relevance']],
    },
  });

  const latestResponse = useQuery<{ articles: ArticleEntityResponseCollection }, Query['articles']>(GET_ARTICLES, {
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: [sortByValues['Newest']],
    },
  });

  const mustReadResponse = useQuery<{ articles: ArticleEntityResponseCollection }, Query['articles']>(GET_ARTICLES, {
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: ['views:asc'],
    },
  });

  const formattedRelevantArticles = useMemo(
    () => relevanteResponse.data?.articles && formatArticleData(relevanteResponse.data?.articles),
    [relevanteResponse.data]
  );
  const formattedLatestArticles = useMemo(
    () => latestResponse.data?.articles && formatArticleData(latestResponse.data?.articles),
    [latestResponse.data]
  );
  const formattedMustReadArticles = useMemo(
    () => mustReadResponse.data?.articles && formatArticleData(mustReadResponse.data?.articles),
    [mustReadResponse.data]
  );
  const newsTrikerInfo = useMemo(
    () => formattedLatestArticles?.data && formattedLatestArticles.data.map((item) => ({ id: item.id, title: item.attributes.title })),
    [formattedLatestArticles?.data]
  );

  return (
    <div className="py-32 lg:py-36 md:px-4">
      <HomeSection articles={formattedRelevantArticles} trikerInfo={newsTrikerInfo} isLoading={relevanteResponse.loading} />

      <LatestSection articles={formattedLatestArticles} isLoading={latestResponse.loading} />

      <MustReadSection articles={formattedMustReadArticles} isLoading={mustReadResponse.loading} />
    </div>
  );
};

export default HomePage;
