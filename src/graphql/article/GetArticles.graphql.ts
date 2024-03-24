import { gql } from "@apollo/client";

export const GET_ARTICLES_WITHOUT_DESCRIPTION = gql`
  query GetArticles($filters: ArticleFiltersInput, $pagination: PaginationArg, $publicationState: PublicationState, $sort: [String] = []) {
    articles(filters: $filters, pagination: $pagination, publicationState: $publicationState, sort: $sort) {
      data {
        id
        attributes {
          title
          readingTime
          category
          publishedAt
          cover {
            data {
              attributes {
                alternativeText
                caption
                createdAt
                ext
                formats
                hash
                height
                mime
                name
                previewUrl
                provider
                provider_metadata
                size
                updatedAt
                url
                width
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageCount
          pageSize
          total
        }
      }
    }
  }
`;

export const GET_ARTICLES = gql`
  query GetArticles($filters: ArticleFiltersInput, $pagination: PaginationArg, $publicationState: PublicationState, $sort: [String] = []) {
    articles(filters: $filters, pagination: $pagination, publicationState: $publicationState, sort: $sort) {
      data {
        id
        attributes {
          title
          description
          readingTime
          category
          publishedAt
          cover {
            data {
              attributes {
                alternativeText
                caption
                createdAt
                ext
                formats
                hash
                height
                mime
                name
                previewUrl
                provider
                provider_metadata
                size
                updatedAt
                url
                width
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageCount
          pageSize
          total
        }
      }
    }
  }
`;
