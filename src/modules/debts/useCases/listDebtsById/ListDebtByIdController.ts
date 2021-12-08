import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListDebtByIdUseCase } from './ListDebtByIdUseCase';

class ListDebtByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listDebtByIdUseCase = container.resolve(ListDebtByIdUseCase);

    const debt = await listDebtByIdUseCase.execute(id);

    return response.status(201).json(debt);
  }
}

export { ListDebtByIdController };
