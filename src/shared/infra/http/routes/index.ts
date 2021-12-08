import { Router } from 'express';

import creditsRouter from './credits.routes';
import debtsRouter from './debts.routes';

const routes = Router();

routes.use('/credits', creditsRouter);
routes.use('/debts', debtsRouter);

export default routes;
