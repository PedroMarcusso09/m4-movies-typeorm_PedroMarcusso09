import { MovieRead } from "./movies.interface";

export interface Pagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: MovieRead;
};

export interface PaginationParams {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
};