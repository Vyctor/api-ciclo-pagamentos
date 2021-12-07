import cors from 'cors';
import express, { Request, Response } from 'express';

import 'express-async-errors';
import { AppError } from '../../errors/AppError';
import routes from './routes';

const app = express();

app.use(cors);
app.use(express.json);
app.use(routes);

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
});

export { app };
