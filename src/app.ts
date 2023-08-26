import 'express-async-errors';
import express, { Application } from 'express';
import { moviesRoutes } from '../src/routes/movies.routes'; 
import { handleError } from './middlewares/handleErrors.middleware';

const app: Application = express();
app.use(express.json()); 

app.use('/movies', moviesRoutes);

app.use(handleError);

export default app;