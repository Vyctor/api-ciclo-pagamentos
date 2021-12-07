import 'reflect-metadata';
import '../../container';
import 'express-async-errors';

import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import { AppError } from '../../errors/AppError';
import '@shared/infra/typeorm';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export { app };
