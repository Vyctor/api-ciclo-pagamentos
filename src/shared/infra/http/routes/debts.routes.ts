import { Router } from 'express';

import { CreateDebtController } from '@modules/debts/useCases/createDebt/CreateDebtController';
import { DeleteDebtController } from '@modules/debts/useCases/deleteDebt/DeleteDebtController';
import { ListAllDebtsController } from '@modules/debts/useCases/listAllDebts/ListAllDebtsController';
import { ListDebtByIdController } from '@modules/debts/useCases/listDebtsById/ListDebtByIdController';

const debtsRouter = Router();

const createDebtController = new CreateDebtController();
const listAllDebtController = new ListAllDebtsController();
const listDebtByIdController = new ListDebtByIdController();
const deleteDebtController = new DeleteDebtController();

debtsRouter.post('/', createDebtController.handle);
debtsRouter.get('/', listAllDebtController.handle);
debtsRouter.get('/:id', listDebtByIdController.handle);
debtsRouter.delete('/:id', deleteDebtController.handle);

export default debtsRouter;
