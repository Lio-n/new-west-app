import HomeSection from "../ui/templates/sections/home.section";
import LatestSection from "../ui/templates/sections/latest.section";
import MustReadSection from "../ui/templates/sections/mustRead.section";
import ArticleInfo from "../data/mock/ArticlesGraphqlRes.mock.json";
import formatArticleData from "../helpers/formatArticleData.helper";
import { ArticleEntityResponseCollection } from "../graphql/types/article.types";
import NewsTickerInfo from "../data/mock/NewsTriker.mock.json";
// import { useQuery } from "@apollo/client";
// import { Query } from "../graphql/types/query.types";
// import { GET_ARTICLES } from "../graphql/article/GetArticles.graphql";

const HomePage = () => {
  /*   const {
    loading: loadingLatest,
    error: errorLatest,
    data: dataLatest,
  } = useQuery<{ articles: ArticleEntityResponseCollection }, Query["articles"]>(GET_ARTICLES, {
    variables: {
      pagination: { limit: 9 },
      sort: ["createdAt:asc"],
    },
  });

  console.log(`🚀 ~ { loading, error, data }:`, { loadingLatest, errorLatest, dataLatest });

  const {
    loading: loadingMustRead,
    error: errorMustRead,
    data: dataMustRead,
  } = useQuery<{ articles: ArticleEntityResponseCollection }, Query["articles"]>(GET_ARTICLES, {
    variables: {
      pagination: { limit: 4 },
      sort: ["createdAt:asc", "views:asc"],
    },
  });

  console.log(`🚀 ~ { loading, error, data }:`, { loadingMustRead, errorMustRead, dataMustRead }); */

  const fetcher = () => {
    return formatArticleData(ArticleInfo.data.articles as any as ArticleEntityResponseCollection);
  };

  const fetcherLastet = () => {
    return formatArticleData(ArticleInfo.data.articles as any as ArticleEntityResponseCollection);
  };

  const fetcherMustRead = () => {
    return formatArticleData(ArticleInfo.data.articles as any as ArticleEntityResponseCollection);
  };

  return (
    <div className="py-24 lg:py-36 md:px-4">
      <HomeSection articles={fetcher()} trikerInfo={NewsTickerInfo.updates} />
      <LatestSection articles={fetcherLastet()} />
      <MustReadSection articles={fetcherMustRead()} href={"/article/search?sort=relevance"} />
    </div>
  );
};

export default HomePage;
