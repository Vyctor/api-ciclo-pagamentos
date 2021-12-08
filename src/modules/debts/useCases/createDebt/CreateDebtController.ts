import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateDebtUseCase } from './CreateDebtUseCase';

class CreateDebtController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, value } = request.body;

    const createDebtUseCase = container.resolve(CreateDebtUseCase);

    const debt = await createDebtUseCase.execute({ name, value });

    return response.status(201).json(debt);
  }
}

export { CreateDebtController };
