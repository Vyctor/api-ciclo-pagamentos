import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllDebtsBetweenTwoDatesUseCase } from './ListAllDebtsBetweenTwoDatesUseCase';

class ListAllDebtsBetweenTwoDatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { start, end } = request.query;
    const listAllDebtsBetweenTwoDatesUseCase = container.resolve(ListAllDebtsBetweenTwoDatesUseCase);
    const credits = await listAllDebtsBetweenTwoDatesUseCase.execute({
      start: new Date(start as string),
      end: new Date(end as string),
    });

    return response.status(201).json(credits);
  }
}

export { ListAllDebtsBetweenTwoDatesController };
