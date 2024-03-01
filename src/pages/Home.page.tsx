import HomeSection from "../ui/templates/sections/home.section";
import LatestSection from "../ui/templates/sections/latest.section";
import MustReadSection from "../ui/templates/sections/mustRead.section";
import formatArticleData from "../helpers/formatArticleData.helper";
import { ArticleEntityResponseCollection } from "../graphql/types/article.types";
import NewsTickerInfo from "../data/mock/NewsTriker.mock.json";
import { useQuery } from "@apollo/client";
import { Query } from "../graphql/types/query.types";
import { GET_ARTICLES } from "../graphql/article/GetArticles.graphql";
import { sortByValues } from "../components/dropdowns/dropdownSortBy.component";

const HomePage = () => {
  const relevanteResponse = useQuery<{ articles: ArticleEntityResponseCollection }, Query["articles"]>(GET_ARTICLES, {
    variables: {
      pagination: { pageSize: 5, page: 1 },
      sort: [sortByValues["Relevance"]],
    },
  });

  const latestResponse = useQuery<{ articles: ArticleEntityResponseCollection }, Query["articles"]>(GET_ARTICLES, {
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: [sortByValues["Newest"]],
    },
  });

  const mustReadResponse = useQuery<{ articles: ArticleEntityResponseCollection }, Query["articles"]>(GET_ARTICLES, {
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: ["views:asc"],
    },
  });

  return (
    <div className="py-24 lg:py-36 md:px-4">
      {relevanteResponse.data?.articles.data.length && (
        <HomeSection
          articles={formatArticleData(relevanteResponse.data?.articles)}
          trikerInfo={NewsTickerInfo.updates}
          isLoading={!relevanteResponse.loading}
        />
      )}

      {latestResponse.data?.articles.data.length && (
        <LatestSection articles={formatArticleData(latestResponse.data?.articles)} isLoading={latestResponse.loading} />
      )}
      {mustReadResponse.data?.articles.data.length && (
        <MustReadSection
          articles={formatArticleData(mustReadResponse.data?.articles)}
          href={"/article/search?sort=Relevance"}
          isLoading={!mustReadResponse.loading}
        />
      )}
    </div>
  );
};

export default HomePage;
