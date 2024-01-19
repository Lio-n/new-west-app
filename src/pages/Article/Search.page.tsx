import { useSearchParams } from "react-router-dom";

const SearchArticlePage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || " ";
  const query = searchParams.get("q") || "";

  return (
    <div>
      Search Article by params : category {"->"} {category} | query {"->"} {query}
    </div>
  );
};

export default SearchArticlePage;
