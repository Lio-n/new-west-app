import { MockedResponse } from "@apollo/client/testing";
import { GET_ARTICLES, GET_ARTICLES_WITHOUT_DESCRIPTION } from "../../../graphql/article/GetArticles.graphql";
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
      pagination: { pageSize: 5, page: 1 },
      sort: [sortByValues[SORT_BY.RELEVANCE]], // Relevance
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
          {
            id: "5",
            attributes: MockArticleItemTwo,
            __typename: "ArticleEntity",
          },
        ],
        meta: {
          pagination: {
            page: 1,
            pageCount: 1,
            pageSize: 10,
            total: 5,
            __typename: "Pagination",
          },
          __typename: "ResponseCollectionMeta",
        },
        __typename: "ArticleEntityResponseCollection",
      },
    },
  },
};

const MockQuerySortRelevanceWithoutDescription = {
  request: {
    query: GET_ARTICLES_WITHOUT_DESCRIPTION,
    variables: {
      sort: ["publishedAt:asc"],
      pagination: { pageSize: 4, page: 1 },
      filters: {
        category: { in: ["Business", "Entertainment", "Health", "Opinion", "Politics", "Sports", "Travel", "World"] },
        title: { contains: "" },
      },
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
            pageCount: 2,
            pageSize: 4,
            total: 8,
            __typename: "Pagination",
          },
          __typename: "ResponseCollectionMeta",
        },
        __typename: "ArticleEntityResponseCollection",
      },
    },
  },
};

const MockQuerySortRelevanceWithoutDescriptionPageCountTwo = {
  request: {
    query: GET_ARTICLES_WITHOUT_DESCRIPTION,
    variables: {
      ...MockQuerySortRelevanceWithoutDescription.request.variables,
      pagination: { pageSize: 4, page: 2 },
    },
  },
  result: {
    data: {
      articles: {
        data: MockQuerySortRelevanceWithoutDescription.result.data.articles.data,
        meta: {
          pagination: {
            page: 2,
            pageCount: 2,
            pageSize: 4,
            total: 8,
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
    query: GET_ARTICLES_WITHOUT_DESCRIPTION,
    variables: {
      pagination: { pageSize: 4, page: 1 },
      sort: [sortByValues[SORT_BY.RELEVANCE]], // Relevance
      filters: { category: { in: ["Politics"] }, title: { contains: "" } }, // Politics
    },
  },
  result: {
    data: {
      articles: {
        data: [
          {
            id: "1",
            attributes: { ...MockArticleItemTwo, description: "Politics" },
            __typename: "ArticleEntity",
          },
          {
            id: "2",
            attributes: { ...MockArticleItemTwo, description: "Politics" },
            __typename: "ArticleEntity",
          },
          {
            id: "3",
            attributes: { ...MockArticleItemTwo, description: "Politics" },
            __typename: "ArticleEntity",
          },
          {
            id: "4",
            attributes: { ...MockArticleItemTwo, description: "Politics" },
            __typename: "ArticleEntity",
          },
        ],
        meta: {
          pagination: {
            page: 1,
            pageCount: 2,
            pageSize: 4,
            total: 8,
            __typename: "Pagination",
          },
          __typename: "ResponseCollectionMeta",
        },
        __typename: "ArticleEntityResponseCollection",
      },
    },
  },
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
  MockQuerySortRelevanceWithoutDescription,
  MockQuerySortRelevanceWithoutDescriptionPageCountTwo,
  MockQuerySortMustRead,
  MockQuerySortMustReadCategoryPolitics,
  MockQuerySortNewestCategoryPolitics,
];

export default MockGetArticles;
