import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllCreditsUseCase } from './ListAllCreditsUseCase';

class ListAllCreditsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllCreditsUseCase = container.resolve(ListAllCreditsUseCase);

    const credits = await listAllCreditsUseCase.execute();

    return response.status(201).json(credits);
  }
}

export { ListAllCreditsController };
