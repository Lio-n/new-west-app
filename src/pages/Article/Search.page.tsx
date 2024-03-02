import SearchForm from "../../components/searchForm.component";
import Body from "../../ui/atoms/typographies/body.atom";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES_WITHOUT_DESCRIPTION } from "../../graphql/article/GetArticles.graphql";
import { ArticleEntityResponseCollection } from "../../graphql/types/article.types";
import { Query } from "../../graphql/types/query.types";
import { useState } from "react";
import ArticleCardSmall, { ArticleCardSmallSkeleton } from "../../ui/molecules/articleCardSmall.molecule";
import formatArticleData from "../../helpers/formatArticleData.helper";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../ui/molecules/pagination.molecule";
import FiltersDropdown from "../../components/filtersDropdown.component";

const SearchArticlePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<Query["articles"]>();
  const { loading, error, data } = useQuery<{ articles: ArticleEntityResponseCollection }, Query["articles"]>(GET_ARTICLES_WITHOUT_DESCRIPTION, {
    variables: query,
  });

  const handleListenQuery = (searchText: string) => {
    // If the value is the same, avoid to update the query state.
    if (searchText !== query?.filters?.title?.contains) {
      searchParams.set("q", searchText);
      setSearchParams(searchParams);
      setQuery({ ...query, filters: { ...query?.filters, title: { contains: searchText } } });
    }
  };

  const handleFiltersQuery = (newQuery: Query["articles"]) => setQuery({ ...query, ...newQuery });

  const handlePageChange = (value: number) =>
    setQuery({
      ...query,
      pagination: { pageSize: 4, page: value },
    });

  const SearchResults = ({ results }: { results: ArticleEntityResponseCollection }) => {
    return (
      <ul className="grid gap-4 mb-8">
        {formatArticleData(results).data.map((item, index) => (
          <li key={index} className="w-full">
            <ArticleCardSmall data={item.attributes} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className="bg-body-200 pt-32 pb-16 border-b-2 border-body-400">
        <div className="sm:w-8/12 mx-auto my-0 max-w-screen-2xl">
          <Body>Showing {data?.articles.meta.pagination.total || 0} result for: </Body>
          <div className="mt-4">
            <SearchForm onListenQuery={handleListenQuery} />
            <FiltersDropdown listenQuery={handleFiltersQuery} />
          </div>
        </div>
      </div>

      <div className="my-8 mx-auto max-w-3xl">
        {loading && <SmallArticlesListSkeleton />}
        {!loading && error && <ErroMessage />}
        {data?.articles.data.length && <SearchResults results={data.articles} />}

        {data?.articles.meta.pagination.pageCount && (
          <Pagination
            pageCount={data?.articles.meta.pagination.pageCount}
            currentPage={data?.articles.meta.pagination.page}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

const ErroMessage = () => (
  <div className="w-full grid place-items-center py-16" children={<Body children="Something goes Wrong! Please try again or later." />} />
);

const SmallArticlesListSkeleton = () => (
  <ul className="grid gap-4 mb-8">
    {Array(4)
      .fill(0)
      .map((data, index) => (
        <li key={data + index} children={<ArticleCardSmallSkeleton />} />
      ))}
  </ul>
);

export default SearchArticlePage;
