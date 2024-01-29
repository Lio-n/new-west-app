import formatDate from "../lib/formatDate.lib";
import formatDuration from "../lib/formatDuration.lib";
import timeSince from "../lib/timeSince.lib";

interface Article {
  title: string;
  description: string;
  category: string;
  cover: string;
  readingTime: number;
  publishedAt: string;
  href: string;
}

interface ParserAticle extends Article {
  formatedDate: string;
  timeSince: string;
  formatedDuration: string;
}

const formatArticleData = (data: Article[]): ParserAticle[] => {
  const formatedArticles: ParserAticle[] = data.map((item) => ({
    ...item,
    formatedDate: formatDate(item.publishedAt),
    timeSince: timeSince(item.publishedAt),
    formatedDuration: formatDuration(item.readingTime),
  }));
  console.log(`🚀 ~ formatedArticles:`, formatedArticles);

  return formatedArticles;
};

export default formatArticleData;
