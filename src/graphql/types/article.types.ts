import { DateTimeFilterInput, IDFilterInput, IntFilterInput, ResponseCollectionMeta, StringFilterInput } from "./query.types";
import { UploadFileEntityResponse } from "./uploadFile.types";

export enum ENUM_ARTICLE_CATEGORY {
  Business,
  Entertainment,
  Health,
  Opinion,
  Politics,
  Sports,
  Travel,
  World,
}

export type ArticleCategory = {
  [key in keyof typeof ENUM_ARTICLE_CATEGORY]: boolean;
};

export type Article = {
  body: string;
  category: ENUM_ARTICLE_CATEGORY;
  description: string;
  claps: number;
  cover: Partial<UploadFileEntityResponse>;
  readingTime: number; // minutes
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
