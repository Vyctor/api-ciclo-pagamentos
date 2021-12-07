import { Router } from 'express';

import CreateCreditController from '../../../../modules/credits/useCases/createCredit/CreateCreditController';

const creditsRouter = Router();

const createCreditController = new CreateCreditController();

creditsRouter.post('/', createCreditController.handle);

export default creditsRouter;
