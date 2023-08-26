import { Request, Response } from 'express';
import { Movie } from '../entities';
import { createMovie, readMovie, updateMovie, destroyMovie } from '../services/movies.services';
import { Pagination } from '../interfaces/pagination.interface';

export const postMovie = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await createMovie(req.body);
  return res.status(201).json(movie);
};

export const getMovies = async (req: Request, res: Response): Promise<Response> => {
  const { pagination } = res.locals;
  const movies: Pagination = await readMovie(pagination);
  return res.status(200).json(movies);
};

export const patchMovie = async (req: Request, res: Response): Promise<Response> => {
  const movieToUpdate: Movie = res.locals.movie;
  const { body } = req;
  const updatedMovie: Movie = await updateMovie(movieToUpdate, body);
  return res.status(200).json(updatedMovie);
};

export const deleteMovie = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = res.locals.movie;
  await destroyMovie(movie);
  return res.status(204).json();
};