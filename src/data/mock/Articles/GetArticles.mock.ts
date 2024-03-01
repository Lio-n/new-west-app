import { MockedResponse } from "@apollo/client/testing";
import { GET_ARTICLES } from "../../../graphql/article/GetArticles.graphql";
import { MockArticleItemOne, MockArticleItemTwo } from "./ArticleItem.mock";
import { SORT_BY, sortByValues } from "../../../components/dropdowns/dropdownSortBy.component";

const MockQueryDefaultResponse = {
  request: {
    query: GET_ARTICLES,
    variables: {
      sort: [],
    },
  },
  result: {
    data: {
      articles: {
        data: [
          {
            id: "1",
            attributes: MockArticleItemOne,
            __typename: "ArticleEntity",
          },
          {
            id: "2",
            attributes: MockArticleItemOne,
            __typename: "ArticleEntity",
          },
          {
            id: "3",
            attributes: MockArticleItemOne,
            __typename: "ArticleEntity",
          },
          {
            id: "4",
            attributes: MockArticleItemOne,
            __typename: "ArticleEntity",
          },
          {
            id: "5",
            attributes: MockArticleItemOne,
            __typename: "ArticleEntity",
          },
          {
            id: "6",
            attributes: MockArticleItemOne,
            __typename: "ArticleEntity",
          },
        ],
        meta: {
          pagination: {
            page: 1,
            pageCount: 3,
            pageSize: 2,
            total: 6,
            __typename: "Pagination",
          },
          __typename: "ResponseCollectionMeta",
        },
        __typename: "ArticleEntityResponseCollection",
      },
    },
  },
};

const MockQuerySortNewest = {
  request: {
    query: GET_ARTICLES,
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: [sortByValues[SORT_BY.NEWEST]], // Newest
    },
  },
  result: {
    data: {
      articles: {
        data: [
          {
            id: "1",
            attributes: MockArticleItemTwo,
            __typename: "ArticleEntity",
          },
          {
            id: "2",
            attributes: MockArticleItemTwo,
            __typename: "ArticleEntity",
          },
          {
            id: "3",
            attributes: MockArticleItemTwo,
            __typename: "ArticleEntity",
          },
          {
            id: "4",
            attributes: MockArticleItemTwo,
            __typename: "ArticleEntity",
          },
        ],
        meta: {
          pagination: {
            page: 1,
            pageCount: 1,
            pageSize: 10,
            total: 4,
            __typename: "Pagination",
          },
          __typename: "ResponseCollectionMeta",
        },
        __typename: "ArticleEntityResponseCollection",
      },
    },
  },
};

const MockQuerySortRelevance = {
  request: {
    query: GET_ARTICLES,
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: [sortByValues[SORT_BY.RELEVANCE]], // Relevance
    },
  },
  result: {
    data: {
      articles: {
        data: [
          {
            id: "1",
            attributes: { ...MockArticleItemTwo, description: null },
            __typename: "ArticleEntity",
          },
          {
            id: "2",
            attributes: { ...MockArticleItemTwo, description: null },
            __typename: "ArticleEntity",
          },
          {
            id: "3",
            attributes: { ...MockArticleItemTwo, description: null },
            __typename: "ArticleEntity",
          },
          {
            id: "4",
            attributes: { ...MockArticleItemTwo, description: null },
            __typename: "ArticleEntity",
          },
        ],
        meta: {
          pagination: {
            page: 1,
            pageCount: 1,
            pageSize: 10,
            total: 4,
            __typename: "Pagination",
          },
          __typename: "ResponseCollectionMeta",
        },
        __typename: "ArticleEntityResponseCollection",
      },
    },
  },
};

const MockQuerySortMustRead = {
  request: {
    query: GET_ARTICLES,
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: ["views:asc"], // Relevance
    },
  },
  result: MockQuerySortNewest.result,
};

const MockQuerySortMustReadCategoryPolitics = {
  request: {
    query: GET_ARTICLES,
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: ["views:asc"], // Relevance
      filters: { category: { in: ["Politics"] } }, // Politics
    },
  },
  result: MockQuerySortNewest.result,
};

const MockQuerySortNewestCategoryPolitics = {
  request: {
    query: GET_ARTICLES,
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: [sortByValues[SORT_BY.NEWEST]], // Newest
      filters: { category: { in: ["Politics"] } }, // Politics
    },
  },
  result: MockQuerySortNewest.result,
};

const MockGetArticles: MockedResponse[] = [
  MockQueryDefaultResponse,
  MockQuerySortNewest,
  MockQuerySortRelevance,
  MockQuerySortMustRead,
  MockQuerySortMustReadCategoryPolitics,
  MockQuerySortNewestCategoryPolitics,
];

export default MockGetArticles;
