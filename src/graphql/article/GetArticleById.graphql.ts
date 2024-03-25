import { gql } from '@apollo/client';

export const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($articleId: ID) {
    article(id: $articleId) {
      data {
        attributes {
          title
          readingTime
          category
          description
          publishedAt
          body
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
    }
  }
`;
