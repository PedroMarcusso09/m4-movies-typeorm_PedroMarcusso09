import { NextFunction, Request, Response } from "express";
import { MovieRepo } from "../interfaces/movies.interface";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import  AppError  from "../errors";

export const verifyIdExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  
  const movieId: number = +req.params.id;
  const repo: MovieRepo = AppDataSource.getRepository(Movie);
  const movie: Movie | null = await repo.findOneBy({ id: movieId });

  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  res.locals = { ...res.locals, movie };

  return next();
};