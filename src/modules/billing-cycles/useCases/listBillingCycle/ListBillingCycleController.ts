import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllCreditsUseCase } from '@modules/credits/useCases/listAllCredits/ListAllCreditsUseCase';
import { ListAllDebtsUseCase } from '@modules/debts/useCases/listAllDebts/ListAllDebtsUseCase';

interface IBillingCycle {
  credits: number;
  debts: number;
  total: number;
}

class ListBillingCycleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllCreditsUseCase = container.resolve(ListAllCreditsUseCase);
    const listAllDebtsUseCase = container.resolve(ListAllDebtsUseCase);

    const credits = (await listAllCreditsUseCase.execute())
      .map((item) => item.value)
      .reduce((next, prev) => Number(next) + Number(prev), 0);

    const debts = (await listAllDebtsUseCase.execute()).map((item) => item.value).reduce((next, prev) => Number(next) + Number(prev), 0);

    const billingCycle: IBillingCycle = {
      credits,
      debts,
      total: credits - debts,
    };

    return response.json(billingCycle);
  }
}

export { ListBillingCycleController };
