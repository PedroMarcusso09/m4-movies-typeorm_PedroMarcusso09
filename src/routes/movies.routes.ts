import { Router } from 'express';
import { postMovie, getMovies, patchMovie, deleteMovie } from '../controllers/movies.controller';
import { movieCreateSchema, movieUpdateSchema } from '../schemas/movies.schema';
import { validateBody } from '../middlewares/validateBody.middleware';
import { verifyNameExists,  } from '../middlewares/verifyName.middleware'
import { pagination } from '../middlewares/pagination.middleware';
import { verifyIdExists } from '../middlewares/verifyIdExists.middleware';

export const moviesRoutes = Router();

moviesRoutes.post('', validateBody(movieCreateSchema), verifyNameExists, postMovie);
moviesRoutes.get('', pagination, getMovies);
moviesRoutes.patch('/:id', validateBody(movieUpdateSchema), verifyIdExists, verifyNameExists , patchMovie);
moviesRoutes.delete('/:id', verifyIdExists, deleteMovie);