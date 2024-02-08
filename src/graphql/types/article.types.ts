import { DateTimeFilterInput, IDFilterInput, IntFilterInput, ResponseCollectionMeta, StringFilterInput } from "./query.types";
import { UploadFileEntityResponse } from "./uploadFile.types";

enum ENUM_ARTICLE_CATEGORY {
  Business,
  Entertainment,
  Health,
  Opinion,
  Politics,
  Sports,
  Travel,
  World,
}

export type Article = {
  body: string;
  category: ENUM_ARTICLE_CATEGORY;
  claps: number;
  cover: UploadFileEntityResponse;
  createdAt: Date;
  publishedAt: Date;
  title: string;
  updatedAt: Date;
  views: number;
};

type ArticleEntity = {
  attributes: Article;
  id: number;
};

export type ArticleEntityResponseCollection = {
  data: ArticleEntity[];
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and: ArticleFiltersInput[];
  body: StringFilterInput;
  category: StringFilterInput;
  claps: IntFilterInput;
  createdAt: DateTimeFilterInput;
  number: IDFilterInput;
  not: ArticleFiltersInput;
  or: ArticleFiltersInput[];
  publishedAt: DateTimeFilterInput;
  title: StringFilterInput;
  updatedAt: DateTimeFilterInput;
  views: IntFilterInput;
};
