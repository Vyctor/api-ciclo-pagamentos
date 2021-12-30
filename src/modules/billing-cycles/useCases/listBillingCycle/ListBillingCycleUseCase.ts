import { container, injectable } from 'tsyringe';

import { IListBillingCycle } from '@modules/billing-cycles/dtos/IListBillingCycle';
import { ListAllCreditsBetweenTwoDatesUseCase } from '@modules/credits/useCases/listAllCreditsBetweenTwoDates/ListAllCreditsBetweenTwoDatesUseCase';
import { ListAllDebtsBetweenTwoDatesUseCase } from '@modules/debts/useCases/listAllDebtsBetweenTwoDates/ListAllDebtsBetweenTwoDatesUseCase';

interface IRequest {
  initialDate: string;
  finalDate: string;
}

@injectable()
class ListBillingCycleUseCase {
  public async execute({ initialDate, finalDate }: IRequest): Promise<IListBillingCycle> {
    const listAllCreditsBetweenTwoDatesUseCase = container.resolve(ListAllCreditsBetweenTwoDatesUseCase);
    const listAllDebtsBetweenTwoDatesUseCase = container.resolve(ListAllDebtsBetweenTwoDatesUseCase);

    const credits = await listAllCreditsBetweenTwoDatesUseCase.execute({
      start: new Date(initialDate),
      end: new Date(finalDate),
    });
    const debts = await listAllDebtsBetweenTwoDatesUseCase.execute({
      start: new Date(initialDate),
      end: new Date(finalDate),
    });

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
