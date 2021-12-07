import { Router } from 'express';

import { DeleteCreditController } from '@modules/credits/useCases/deleteCredit/DeleteCreditController';
import { ListAllCreditsController } from '@modules/credits/useCases/listAllCredits/ListAllCreditsController';
import { ListCreditByIdController } from '@modules/credits/useCases/listCreditById/ListCreditByIdController';

import { CreateCreditController } from '../../../../modules/credits/useCases/createCredit/CreateCreditController';

const creditsRouter = Router();

const createCreditController = new CreateCreditController();
const listAllCreditsController = new ListAllCreditsController();
const listCreditByIdController = new ListCreditByIdController();
const deleteCreditController = new DeleteCreditController();

creditsRouter.post('/', createCreditController.handle);
creditsRouter.get('/', listAllCreditsController.handle);
creditsRouter.get('/:id', listCreditByIdController.handle);
creditsRouter.delete('/:id', deleteCreditController.handle);

export default creditsRouter;
