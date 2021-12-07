import { Router } from 'express';

import creditsRouter from './credits.routes';

const routes = Router();

routes.use('/credits', creditsRouter);

export default routes;
