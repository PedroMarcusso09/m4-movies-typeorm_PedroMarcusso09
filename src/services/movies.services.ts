import { Movie } from '../entities/index';
import { MovieCreate, MovieUpdate } from '../interfaces/movies.interface'; 
import { Pagination, PaginationParams } from '../interfaces/pagination.interface';
import { movieRepo } from '../repositories';

export const createMovie = async (payload: MovieCreate): Promise<Movie> => {
  return await movieRepo.save(payload);
};

export const readMovie = async ({
  nextPage,
  page,
  perPage,
  prevPage,
  order,
  sort,
}: PaginationParams): Promise<Pagination> => {

  const [movies, count]: [Movie[], number] = await movieRepo.findAndCount({
    order: { [sort]: order.toUpperCase() },
    skip: page,
    take: perPage,
  });

  const calculatedNextPage: string | null = count <= page + perPage ? null : nextPage;

  return {
    prevPage,
    nextPage: calculatedNextPage,
    count,
    data: movies,
  };
};

export const updateMovie = async (movie: Movie, payload: MovieUpdate ): Promise<Movie> => {
  return await movieRepo.save({
    ...movie,
    ...payload,
    id: movie.id
  });
};

export const destroyMovie = async (movie: Movie): Promise<void> => {
  await movieRepo.remove(movie);
};