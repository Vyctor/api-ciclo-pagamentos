import { container, injectable } from 'tsyringe';

import { IListBillingCycle } from '@modules/billing-cycles/dtos/IListBillingCycle';
import { ListAllCreditsUseCase } from '@modules/credits/useCases/listAllCredits/ListAllCreditsUseCase';
import { ListAllDebtsUseCase } from '@modules/debts/useCases/listAllDebts/ListAllDebtsUseCase';

interface IRequest {
  initialDate: string;
  finalDate: string;
}

@injectable()
class ListBillingCycleUseCase {
  public async execute({ initialDate, finalDate }: IRequest): Promise<IListBillingCycle> {
    const listAllCreditsUseCase = container.resolve(ListAllCreditsUseCase);
    const listAllDebtsUseCase = container.resolve(ListAllDebtsUseCase);

    const credits = await listAllCreditsUseCase.execute();
    const debts = await listAllDebtsUseCase.execute();

    const totalDebts = debts.map((debt) => debt.value).reduce((next, prev) => next + prev, 0);
    const totalCredits = credits.map((credit) => credit.value).reduce((next, prev) => next + prev, 0);

    return {
      credits: {
        credits,
        total: totalCredits,
      },
      debts: {
        debts,
        total: totalDebts,
      },
    };
  }
}

export { ListBillingCycleUseCase };
