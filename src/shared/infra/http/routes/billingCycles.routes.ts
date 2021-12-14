import { Router } from 'express';

import { ListBillingCycleController } from '@modules/billing-cycles/useCases/listBillingCycle/ListBillingCycleController';

const billingCyclesRouter = Router();

const listBillingCycleController = new ListBillingCycleController();

billingCyclesRouter.get('/', listBillingCycleController.handle);

export default billingCyclesRouter;
