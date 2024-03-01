import { MockedResponse } from "@apollo/client/testing";
import { GET_ARTICLE_BY_ID } from "../../../graphql/article/GetArticleById.graphql";
import { MockArticleBody, MockArticleItemOne, MockArticleItemTwo } from "./ArticleItem.mock";

const MockGetArticleByIdOne: MockedResponse = {
  request: {
    query: GET_ARTICLE_BY_ID,
    variables: {
      id: "1",
    },
  },
  result: {
    data: {
      article: {
        data: {
          id: "1",
          attributes: { ...MockArticleItemOne, ...MockArticleBody },
        },
      },
    },
  },
};

const MockGetArticleByIdTwo: MockedResponse = {
  request: {
    query: GET_ARTICLE_BY_ID,
    variables: {
      id: "2",
    },
  },
  result: {
    data: {
      article: {
        data: {
          id: "2",
          attributes: { ...MockArticleItemTwo, ...MockArticleBody },
        },
      },
    },
  },
};

const MockGetArticleById: MockedResponse[] = [MockGetArticleByIdOne, MockGetArticleByIdTwo];

export default MockGetArticleById;
