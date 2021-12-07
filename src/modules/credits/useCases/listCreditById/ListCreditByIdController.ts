import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCreditByIdUseCase } from './ListCreditByIdUseCase';

class ListCreditByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listAllCreditsUseCase = container.resolve(ListCreditByIdUseCase);

    const credit = await listAllCreditsUseCase.execute(id);

    return response.status(201).json(credit);
  }
}

export { ListCreditByIdController };
