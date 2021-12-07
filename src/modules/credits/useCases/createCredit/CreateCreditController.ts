import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCreditUseCase } from '@modules/credits/useCases/createCredit/CreateCreditUseCase';

class CreateCreditController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, value } = request.body;

    const createCreditUseCase = container.resolve(CreateCreditUseCase);

    const credit = await createCreditUseCase.execute({ name, value });

    return response.status(201).json(credit);
  }
}

export default CreateCreditController;
