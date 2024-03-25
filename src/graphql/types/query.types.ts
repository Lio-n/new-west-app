import { ArticleFiltersInput } from './article.types';

interface FilterCore<BASE> {
  and: BASE[];
  between: BASE[];
  contains: BASE;
  containsi: BASE;
  endsWith: BASE;
  eq: BASE;
  eqi: BASE;
  gt: BASE;
  gte: BASE;
  in: BASE[];
  lt: BASE;
  lte: BASE;
  ne: BASE;
  nei: BASE;
  not: FilterCore<BASE>;
  notContains: BASE;
  notContainsi: BASE;
  notIn: BASE[];
  notNull: boolean;
  null: boolean;
  or: BASE[];
  startsWith: BASE;
}

export interface IDFilterInput extends Partial<FilterCore<number>> {}

export interface DateTimeFilterInput extends Partial<FilterCore<Date>> {}

export interface IntFilterInput extends Partial<FilterCore<number>> {}

export interface StringFilterInput extends Partial<FilterCore<string>> {}

export type PaginationArg = {
  limit: number;
  page: number;
  pageSize: number;
  start: number;
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export type ResponseCollectionMeta = {
  pagination: Pagination;
};

export enum PublicationState {
  LIVE,
  PREVIEW,
}

export interface Query {
  article: {
    // args
    articleId: string | number | null;
  };
  articles: {
    // args
    filters?: Partial<ArticleFiltersInput> | null; // ArticleFiltersInput
    pagination?: Partial<PaginationArg> | null; // PaginationArg
    publicationState?: PublicationState | null; // PublicationState
    sort?: string[] | null; // [String]
  };
}
