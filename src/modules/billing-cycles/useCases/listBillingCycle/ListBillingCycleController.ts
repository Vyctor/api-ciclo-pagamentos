import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListBillingCycleUseCase } from './ListBillingCycleUseCase';

class ListBillingCycleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listBillingCycleUseCase = container.resolve(ListBillingCycleUseCase);

    const billingCycle = await listBillingCycleUseCase.execute();

    return response.json(billingCycle);
  }
}

export { ListBillingCycleController };
