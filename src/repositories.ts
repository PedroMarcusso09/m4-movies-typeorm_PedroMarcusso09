import { AppDataSource } from '../src/data-source';
import Movie from '../src/entities/movies.entity';
import { MovieRepo } from '../src/interfaces/movies.interface';

const movieRepo: MovieRepo = AppDataSource.getRepository(Movie);

export { movieRepo };