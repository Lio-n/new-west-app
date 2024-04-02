import { Article, ArticleEntity, ArticleEntityResponseCollection } from '../graphql/types/article.types';
import formatDate from '../lib/formatDate.lib';
import formatDuration from '../lib/formatDuration.lib';
import timeSince from '../lib/timeSince.lib';

export interface ParsedArticle extends Article {
  formatedDate: string;
  timeSince: string;
  formatedDuration: string;
  href: string;
}

export interface ParsedArticleEntity extends Pick<ArticleEntity, 'id'> {
  attributes: ParsedArticle;
}

export interface ParsedArticleEntityResponseCollection extends Omit<ArticleEntityResponseCollection, 'data'> {
  data: {
    attributes: ParsedArticle;
    id: number;
  }[];
}

const formatArticleData = (data: ArticleEntityResponseCollection): ParsedArticleEntityResponseCollection => {
  const formattedArticles: ParsedArticleEntityResponseCollection = {
    ...data, // Copy other properties from the original collection
    data: data.data.map((item) => ({
      id: item.id,
      attributes: {
        ...item.attributes,
        formatedDate: formatDate(item.attributes.publishedAt),
        timeSince: timeSince(item.attributes.publishedAt),
        formatedDuration: formatDuration(item.attributes.readingTime),
        href: `/article/${item.id}`,
      },
    })),
  };

  return formattedArticles;
};

export default formatArticleData;
