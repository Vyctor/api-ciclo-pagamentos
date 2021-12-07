import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCreditUseCase } from './DeleteCreditUseCase';

class DeleteCreditController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCreditUseCase = container.resolve(DeleteCreditUseCase);

    await deleteCreditUseCase.execute(id);

    return response.status(204).json();
  }
}

export { DeleteCreditController };
