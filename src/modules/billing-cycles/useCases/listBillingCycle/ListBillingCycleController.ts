import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListBillingCycleUseCase } from './ListBillingCycleUseCase';

class ListBillingCycleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { initialDate, finalDate } = request.query;

    const data = {
      initialDate: initialDate as string,
      finalDate: finalDate as string,
    };

    const listBillingCycleUseCase = container.resolve(ListBillingCycleUseCase);

    const billingCycle = await listBillingCycleUseCase.execute(data);

    return response.json(billingCycle);
  }
}

export { ListBillingCycleController };
