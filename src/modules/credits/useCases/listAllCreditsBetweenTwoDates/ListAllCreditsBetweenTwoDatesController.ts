import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllCreditsBetweenTwoDatesUseCase } from './ListAllCreditsBetweenTwoDatesUseCase';

class ListAllCreditsBetweenTwoDatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { start, end } = request.query;
    const listAllCreditsBetweenTwoDatesUseCase = container.resolve(ListAllCreditsBetweenTwoDatesUseCase);
    const credits = await listAllCreditsBetweenTwoDatesUseCase.execute({
      start: new Date(start as string),
      end: new Date(end as string),
    });

    return response.status(201).json(credits);
  }
}

export { ListAllCreditsBetweenTwoDatesController };
