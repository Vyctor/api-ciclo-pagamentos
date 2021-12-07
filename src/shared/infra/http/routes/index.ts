import { Router } from 'express';

const routes = Router();

routes.use('/credits');
routes.use('/debts');
routes.use('/billingCycles');

export default routes;
