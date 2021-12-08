import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteDebtUseCase } from './DeleteDebtUseCase';

class DeleteDebtController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteDebtUseCase = container.resolve(DeleteDebtUseCase);

    await deleteDebtUseCase.execute(id);

    return response.status(204).json();
  }
}

export { DeleteDebtController };
