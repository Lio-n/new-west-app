import { useSearchParams } from 'react-router-dom';
import { ArticleCategory, ENUM_ARTICLE_CATEGORY } from '../graphql/types/article.types';
import { Query } from '../graphql/types/query.types';
import getIntervalDates from '../lib/getIntervalDates.lib';
import DropdownCheckbox from './dropdowns/dropdownCategory.component';
import DropdownDateRange from './dropdowns/dropdownDateRage.component';
import DropdownSortBy from './dropdowns/dropdownSortBy.component';
import { useEffect, useState } from 'react';
import { DATE_RANGE, SORT_BY, sortByValues } from '../interfaces/filterOptions.interface';

interface FiltersDropdownProps {
  listenQuery: (newQuery: Query['articles']) => void;
  prevQueryState: Query['articles'] | undefined;
}
type DefaultDropdown = {
  checkboxValues: Partial<ArticleCategory>;
  sortByValues: SORT_BY;
  dateRangeValues: DATE_RANGE;
};

const proccessInitParamQuery = (searchParams: URLSearchParams | undefined) => {
  const initParams = {
    query: 'a',
    sortParam: SORT_BY.NEWEST,
    categoryParam: [''],
    dateRangeParam: DATE_RANGE.ALL_TIME,
    defaultCheckboxValues: { World: true },
  };

  if (!searchParams) return initParams;

  const qParam = searchParams.get('q') || '';
  const dateRangeParam = (searchParams.get('dateRange') as DATE_RANGE) || DATE_RANGE.ALL_TIME;

  let sortParam = (searchParams.get('sort')?.toLowerCase() as SORT_BY) || SORT_BY.NEWEST;
  sortParam = (sortParam.toUpperCase()[0] + sortParam.slice(1)) as SORT_BY;

  let categoryParam = searchParams.get('category')?.split(',') || [];

  if (!categoryParam.length || !categoryParam[0]) {
    categoryParam = Object.keys(ENUM_ARTICLE_CATEGORY).filter((key) => isNaN(Number(key)));
  }

  const defaultCheckboxValues: {
    [key: string]: boolean;
  } = {};

  categoryParam.forEach((item) => {
    defaultCheckboxValues[item] = true;
  });

  return { query: qParam, categoryParam, sortParam, dateRangeParam, defaultCheckboxValues };
};

const FiltersDropdown: React.FC<FiltersDropdownProps> = ({ listenQuery, prevQueryState }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [defaultDropdown, setDefaultDropdown] = useState<DefaultDropdown>();

  useEffect(() => {
    const initParams = proccessInitParamQuery(searchParams);

    setDefaultDropdown({
      sortByValues: initParams.sortParam,
      dateRangeValues: initParams.dateRangeParam,
      checkboxValues: initParams.defaultCheckboxValues,
    });
    setSearchParams({
      ...searchParams,
      category: initParams.categoryParam.join(','),
      sort: initParams.sortParam,
      dateRange: initParams.dateRangeParam,
      q: initParams.query,
    } as unknown as URLSearchParams);

    listenQuery({
      pagination: { pageSize: 4, page: 1 },
      sort: [sortByValues[initParams.sortParam]],
      filters: {
        category: {
          in: initParams.categoryParam,
        },
        title: { contains: initParams.query },
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckbox = (value: Partial<ArticleCategory>) => {
    const filterCategories = Object.entries(value)
      .filter((item) => item[1])
      .map((item) => item[0]);

    searchParams.set('category', filterCategories.join(','));
    setSearchParams(searchParams);

    listenQuery({
      ...prevQueryState,
      filters: {
        ...prevQueryState?.filters,
        category: {
          in: filterCategories,
        },
      },
    });
  };

  const handleDateRange = (value: DATE_RANGE) => {
    const dateRange = {
      [DATE_RANGE.ALL_TIME]: { startDate: new Date('January 01, 2000 00:0:00'), endDate: new Date() },
      [DATE_RANGE.YESTERDAY]: getIntervalDates('day'),
      [DATE_RANGE.PAST_WEEK]: getIntervalDates('w'),
      [DATE_RANGE.PAST_MONTH]: getIntervalDates('M'),
    };

    searchParams.set('dateRange', value);
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
    searchParams.set('sort', value);
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
