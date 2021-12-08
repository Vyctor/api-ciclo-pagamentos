import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllDebtsUseCase } from './ListAllDebtsUseCase';

class ListAllDebtsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllDebtsUseCase = container.resolve(ListAllDebtsUseCase);

    const debts = await listAllDebtsUseCase.execute();

    return response.status(201).json(debts);
  }
}

export { ListAllDebtsController };
