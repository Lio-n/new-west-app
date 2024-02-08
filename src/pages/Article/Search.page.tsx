import SearchForm from "../../components/searchForm.component";
import Body from "../../ui/atoms/typographies/body.atom";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "../../graphql/GetArticles.graphql";
import { ArticleEntityResponseCollection } from "../../graphql/types/article.types";
import { Query } from "../../graphql/types/query.types";
import { useState } from "react";

const SearchArticlePage = () => {
  const [query, setQuery] = useState<Query["articles"] | {}>({});
  const { loading, error, data } = useQuery<{ articles: ArticleEntityResponseCollection }, Query["articles"]>(GET_ARTICLES, {
    variables: query,
  });
  console.log(`🚀 ~ { loading, error, data }:`, { loading, error, data });
  console.log(`🚀 ~ setQuery:`, query);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  // const [searchParams] = useSearchParams();
  // console.log(`🚀 ~ searchParams:`, searchParams);
  // const category = searchParams.get("category") || " ";
  // const query = searchParams.get("q") || "";

  // https://www.apollographql.com/docs/react/data/queries

  const HeadingSearch = () => (
    <div className="bg-body-200 pt-32 pb-16 border-b-2 border-body-400">
      <div className="w-10/12 sm:w-8/12 mx-auto my-0">
        <Body>Showing 4934 result for: </Body>
        <div className="mt-4">
          <SearchForm />
          <Body>Filters</Body>
        </div>
      </div>
    </div>
  );

  const SearchResults = ({ results }: { results: ArticleEntityResponseCollection }) => (
    <ul>
      {results?.data.map((item, index) => (
        <li className="text-black" key={index}>
          {item.attributes.title}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <HeadingSearch />
      <button onClick={() => setQuery({})}></button>
      {data?.articles.data.length && <SearchResults results={data?.articles} />}
    </div>
  );
};

export default SearchArticlePage;
