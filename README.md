# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
  import { MockedResponse } from "@apollo/client/testing";
  import { GET_ARTICLES, GET_ARTICLES_WITHOUT_DESCRIPTION } from "../../../graphql/article/GetArticles.graphql";
  import { MockArticleItemOne, MockArticleItemTwo } from "./ArticleItem.mock";
  import { SORT_BY, sortByValues } from "../../../components/dropdowns/dropdownSortBy.component";
  import { Categories } from "../../../constants/categories.constant";

const generateListItems = (length: number, typeArticleItem: "one" | "two", hasDescription: boolean = true) => {
let arrayItems: any = {
data: [],
};

let itemSelected = typeArticleItem === "one" ? MockArticleItemOne : MockArticleItemTwo;

if (!hasDescription) {
itemSelected = { ...itemSelected, description: null as any };
}

for (let i = 1; i < length + 1; i++) {
arrayItems.data.push({
id: i.toString(),
attributes: itemSelected,
\_\_typename: "ArticleEntity",
});
}

return arrayItems;
};

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
...generateListItems(6, "one"),
meta: {
pagination: {
page: 1,
pageCount: 3,
pageSize: 2,
total: 6,
**typename: "Pagination",
},
**typename: "ResponseCollectionMeta",
},
\_\_typename: "ArticleEntityResponseCollection",
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
...generateListItems(4, "one"),
meta: {
pagination: {
page: 1,
pageCount: 1,
pageSize: 4,
total: 4,
**typename: "Pagination",
},
**typename: "ResponseCollectionMeta",
},
\_\_typename: "ArticleEntityResponseCollection",
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
...generateListItems(5, "two"),
meta: {
pagination: {
page: 1,
pageCount: 1,
pageSize: 5,
total: 5,
**typename: "Pagination",
},
**typename: "ResponseCollectionMeta",
},
\_\_typename: "ArticleEntityResponseCollection",
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
category: { in: Categories },
title: { contains: "" },
},
},
},
result: {
data: {
articles: {
...generateListItems(4, "two", false),
meta: {
pagination: {
page: 1,
pageCount: 2,
pageSize: 4,
total: 8,
**typename: "Pagination",
},
**typename: "ResponseCollectionMeta",
},
\_\_typename: "ArticleEntityResponseCollection",
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
**typename: "Pagination",
},
**typename: "ResponseCollectionMeta",
},
\_\_typename: "ArticleEntityResponseCollection",
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
...generateListItems(4, "one"),
meta: {
pagination: {
page: 1,
pageCount: 2,
pageSize: 4,
total: 8,
**typename: "Pagination",
},
**typename: "ResponseCollectionMeta",
},
\_\_typename: "ArticleEntityResponseCollection",
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
