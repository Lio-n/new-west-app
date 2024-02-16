import SearchForm from "../../components/searchForm.component";
import Body from "../../ui/atoms/typographies/body.atom";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "../../graphql/article/GetArticles.graphql";
import { ArticleCategory, ArticleEntityResponseCollection, ENUM_ARTICLE_CATEGORY } from "../../graphql/types/article.types";
import { Query } from "../../graphql/types/query.types";
import { useEffect, useState } from "react";
import DropdownDateRange, { DATE_RANGE } from "../../components/dropdowns/dropdownDateRage.component";
import DropdownCheckbox from "../../components/dropdowns/dropdownCategory.component";
import DropdownSortBy, { SORT_BY, sortByValues } from "../../components/dropdowns/dropdownSortBy.component";
import getIntervalDates from "../../lib/getIntervalDates.lib";
import ArticleCardSmall from "../../ui/molecules/articleCardSmall.molecule";
import formatArticleData from "../../helpers/formatArticleData.helper";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../ui/molecules/pagination.molecule";

const SearchArticlePage = () => {
  const [defaultDropdown, setDefaultDropdown] = useState<{
    checkboxValues: Partial<ArticleCategory>;
    sortByValues: SORT_BY;
    dateRangeValues: DATE_RANGE;
  }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<Query["articles"]>();
  const { loading, error, data } = useQuery<{ articles: ArticleEntityResponseCollection }, Query["articles"]>(GET_ARTICLES);
  console.log(`🚀 ~ { loading, error, data }:`, { query, loading, error, data });

  useEffect(() => {
    let qParam = searchParams.get("q") || "";
    let dateRangeParam = (searchParams.get("dateRange") as DATE_RANGE) || DATE_RANGE.ALL_TIME;

    let sortParam = (searchParams.get("sort")?.toLowerCase() as SORT_BY) || SORT_BY.NEWEST;
    sortParam = (sortParam.toUpperCase()[0] + sortParam.slice(1)) as SORT_BY;

    let categoryParam = searchParams.get("category")?.split(",") || [];

    if (!categoryParam.length || !categoryParam[0]) {
      categoryParam = Object.keys(ENUM_ARTICLE_CATEGORY).filter((key) => isNaN(Number(key)));
    }

    let defaultCheckboxValues = {};

    categoryParam.forEach((item) => {
      // @ts-ignore
      defaultCheckboxValues[item] = true;
    });

    setDefaultDropdown({ sortByValues: sortParam, dateRangeValues: dateRangeParam, checkboxValues: defaultCheckboxValues });
    setSearchParams({
      ...searchParams,
      category: categoryParam.join(","),
      sort: sortParam as any,
      dateRange: dateRangeParam,
      q: qParam as any,
    });

    setQuery({
      ...query,
      pagination: { pageSize: 10, page: 1 },
      sort: [sortByValues[sortParam]],
      filters: {
        category: {
          in: categoryParam,
        },
        title: { contains: qParam },
      },
    });
  }, []);

  const handleListenQuery = (searchText: string) => {
    // If the value is the same, avoid to update the query state.
    if (searchText !== query?.filters?.title?.contains) {
      searchParams.set("q", searchText);
      setSearchParams(searchParams);
      setQuery({ ...query, filters: { ...query?.filters, title: { contains: searchText } } });
    }
  };

  const handleCheckbox = (value: Partial<ArticleCategory>) => {
    const filterCategories = Object.entries(value)
      .filter((item) => item[1])
      .map((item) => item[0]);

    searchParams.set("category", filterCategories.join(","));
    setSearchParams(searchParams);

    setQuery({
      ...query,
      filters: {
        category: {
          in: filterCategories,
        },
      },
    });
  };

  const handleDateRange = (value: DATE_RANGE) => {
    const dateRange = {
      [DATE_RANGE.ALL_TIME]: { startDate: new Date("January 01, 2000 00:0:00"), endDate: new Date() },
      [DATE_RANGE.YESTERDAY]: getIntervalDates("day"),
      [DATE_RANGE.PAST_WEEK]: getIntervalDates("w"),
      [DATE_RANGE.PAST_MONTH]: getIntervalDates("M"),
    };

    searchParams.set("dateRange", value);
    setSearchParams(searchParams);

    setQuery({
      ...query,
      filters: {
        publishedAt: {
          // Use the `gte` (greater than or equal to) operator for the start date
          gte: dateRange[value].startDate,
          // Use the `lt` (less than) operator for the end date
          lt: dateRange[value].endDate,
        },
      },
    });
  };

  const handleSortBy = (value: SORT_BY) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);

    setQuery({
      ...query,
      sort: [sortByValues[value]],
    });
  };

  const handlePageChange = (value: number) => {
    setQuery({
      ...query,
      pagination: { pageSize: 10, page: value },
    });
  };

  const SearchResults = ({ results }: { results: ArticleEntityResponseCollection }) => {
    return (
      <ul className="flex gap-4 flex-wrap justify-center my-8 mx-auto max-w-screen-2xl">
        {formatArticleData(results).data.map((item, index) => (
          <li key={index} className="w-full sm:w-fit">
            <ArticleCardSmall data={item.attributes} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className="bg-body-200 pt-32 pb-16 border-b-2 border-body-400">
        <div className="w-10/12 sm:w-8/12 mx-auto my-0 max-w-screen-2xl">
          <Body>Showing {data?.articles.meta.pagination.total || 0} result for: </Body>
          <div className="mt-4">
            <SearchForm onListenQuery={handleListenQuery} />
            <div className="flex sm:gap-4 whitespace-nowrap">
              <DropdownDateRange onChange={handleDateRange} defaultValues={defaultDropdown?.dateRangeValues} />
              <DropdownCheckbox onChange={handleCheckbox} defaultValues={defaultDropdown?.checkboxValues} />
              <DropdownSortBy onChange={handleSortBy} defaultValues={defaultDropdown?.sortByValues} />
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 mx-auto">
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

export default SearchArticlePage;
