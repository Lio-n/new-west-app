import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/searchForm.component";
import Body from "../../ui/atoms/typographies/body.atom";

const SearchArticlePage = () => {
  const [searchParams] = useSearchParams();
  console.log(`🚀 ~ searchParams:`, searchParams);
  const category = searchParams.get("category") || " ";
  const query = searchParams.get("q") || "";

  return (
    <div>
      <div className="bg-body-200 pt-32 pb-16 border-b-2 border-body-400">
        <div className="w-10/12 sm:w-8/12 mx-auto my-0">
          <Body>Showing 4934 result for: </Body>
          <div className="mt-4">
            <SearchForm />
            <Body>Filters</Body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchArticlePage;
