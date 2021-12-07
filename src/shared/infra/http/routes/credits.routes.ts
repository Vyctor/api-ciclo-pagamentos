import { Router } from 'express';

import { ListAllCreditsController } from '@modules/credits/useCases/listAllCredits/ListAllCreditsController';
import { ListCreditByIdController } from '@modules/credits/useCases/listCreditById/ListCreditByIdController';

import { CreateCreditController } from '../../../../modules/credits/useCases/createCredit/CreateCreditController';

const creditsRouter = Router();

const createCreditController = new CreateCreditController();
const listAllCreditsController = new ListAllCreditsController();
const listCreditByIdController = new ListCreditByIdController();

creditsRouter.post('/', createCreditController.handle);
creditsRouter.get('/', listAllCreditsController.handle);
creditsRouter.get('/:id', listCreditByIdController.handle);

export default creditsRouter;
