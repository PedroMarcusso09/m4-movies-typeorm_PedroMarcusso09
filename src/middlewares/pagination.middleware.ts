import { NextFunction, Request, Response } from 'express';
import { PaginationParams } from '../interfaces/pagination.interface';

export const pagination = (req: Request, res: Response, next: NextFunction): void => {

  const queryPage: number = Number(req.query.page) || 1;
  const queryPerPage: number = Number(req.query.perPage) || 5;

  const page: number = queryPage > 0 ? queryPage : 1;
  const perPage: number = (queryPerPage > 0 && queryPerPage <= 5) ? queryPerPage : 5;

  const baseUrl: string = 'http://localhost:3000/movies'; 
  const prevPage: string | null = page > 1 ? `${baseUrl}?page=${page - 1}&perPage=${perPage}` : null;

  let nextPage: string | null = `${baseUrl}?page=${page + 1}&perPage=${perPage}`;

  const querySort: string = req.query.sort as string;
  const queryOrder: string = req.query.order as string;

  const orderOptions: Array<string> = ['asc', 'desc'];
  const sortOptions: Array<string> = ['price', 'duration', 'id'];

  let sort: string;
  let order: string;

  if (sortOptions.includes(querySort)) {
    sort = querySort;
  } else {
    sort = 'id';
  }

  if (querySort && orderOptions.includes(queryOrder)) {
    order = queryOrder;
  } else {
    order = 'asc';
  }

  const pagination: PaginationParams = {
    page: (page - 1) * perPage,
    perPage,
    order,
    sort,
    prevPage,
    nextPage,
  };

  res.locals.pagination = pagination;

  return next();
};