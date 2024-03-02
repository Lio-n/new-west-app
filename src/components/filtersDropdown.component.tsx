import { useSearchParams } from "react-router-dom";
import { ArticleCategory, ENUM_ARTICLE_CATEGORY } from "../graphql/types/article.types";
import { Query } from "../graphql/types/query.types";
import getIntervalDates from "../lib/getIntervalDates.lib";
import DropdownCheckbox from "./dropdowns/dropdownCategory.component";
import DropdownDateRange, { DATE_RANGE } from "./dropdowns/dropdownDateRage.component";
import DropdownSortBy, { SORT_BY, sortByValues } from "./dropdowns/dropdownSortBy.component";
import { useEffect, useState } from "react";

interface FiltersDropdownProps {
  listenQuery: (newQuery: Query["articles"]) => void;
}
type DefaultDropdown = {
  checkboxValues: Partial<ArticleCategory>;
  sortByValues: SORT_BY;
  dateRangeValues: DATE_RANGE;
};

const FiltersDropdown: React.FC<FiltersDropdownProps> = ({ listenQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [defaultDropdown, setDefaultDropdown] = useState<DefaultDropdown>();

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

    listenQuery({
      pagination: { pageSize: 4, page: 1 },
      sort: [sortByValues[sortParam]],
      filters: {
        category: {
          in: categoryParam,
        },
        title: { contains: qParam },
      },
    });
  }, []);

  const handleCheckbox = (value: Partial<ArticleCategory>) => {
    const filterCategories = Object.entries(value)
      .filter((item) => item[1])
      .map((item) => item[0]);

    searchParams.set("category", filterCategories.join(","));
    setSearchParams(searchParams);

    listenQuery({
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

    listenQuery({
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

    listenQuery({ sort: [sortByValues[value]] });
  };

  return (
    <div className="flex sm:gap-4 whitespace-nowrap">
      <DropdownDateRange onChange={handleDateRange} defaultValues={defaultDropdown?.dateRangeValues} />
      <DropdownCheckbox onChange={handleCheckbox} defaultValues={defaultDropdown?.checkboxValues} />
      <DropdownSortBy onChange={handleSortBy} defaultValues={defaultDropdown?.sortByValues} />
    </div>
  );
};

export default FiltersDropdown;
