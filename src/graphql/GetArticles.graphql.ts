import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetArticles($pagination: PaginationArg, $publicationState: PublicationState, $sort: [String] = []) {
    articles(pagination: $pagination, publicationState: $publicationState, sort: $sort) {
      data {
        attributes {
          title
          updatedAt
        }
      }
    }
  }
`;
