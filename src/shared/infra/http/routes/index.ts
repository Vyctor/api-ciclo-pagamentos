import { Router } from 'express';

import billingCyclesRouter from './billingCycles.routes';
import creditsRouter from './credits.routes';
import debtsRouter from './debts.routes';

const routes = Router();

routes.use('/credits', creditsRouter);
routes.use('/debts', debtsRouter);
routes.use('/billing-cycles', billingCyclesRouter);

export default routes;
