enum DATE_RANGE {
  ALL_TIME = 'ALL_TIME',
  YESTERDAY = 'YESTERDAY',
  PAST_WEEK = 'PAST_WEEK',
  PAST_MONTH = 'PAST_MONTH',
}

enum SORT_BY {
  RELEVANCE = 'Relevance',
  NEWEST = 'Newest',
  OLDEST = 'Oldest',
}

type SortByValues = {
  [key in SORT_BY]: string;
};

const sortByValues: SortByValues = {
  [SORT_BY.NEWEST]: 'publishedAt:asc',
  [SORT_BY.OLDEST]: 'publishedAt:desc',
  [SORT_BY.RELEVANCE]: 'views:asc, claps:asc',
};

export { DATE_RANGE, SORT_BY, sortByValues };
