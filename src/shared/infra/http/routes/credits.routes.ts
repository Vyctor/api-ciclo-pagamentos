import { Router } from 'express';

import { ListAllCreditsController } from '@modules/credits/useCases/listAllCredits/ListAllCreditsController';

import { CreateCreditController } from '../../../../modules/credits/useCases/createCredit/CreateCreditController';

const creditsRouter = Router();

const createCreditController = new CreateCreditController();
const listAllCreditsController = new ListAllCreditsController();

creditsRouter.post('/', createCreditController.handle);
creditsRouter.get('/', listAllCreditsController.handle);

export default creditsRouter;
